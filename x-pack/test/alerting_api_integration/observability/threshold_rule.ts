/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import moment from 'moment';
import { ApmSynthtraceEsClient } from '@kbn/apm-synthtrace';
import { format } from 'url';
import { Aggregators, Comparator } from '@kbn/observability-plugin/common/threshold_rule/types';
import { FIRED_ACTIONS_ID } from '@kbn/observability-plugin/server/lib/rules/threshold/threshold_executor';
import expect from '@kbn/expect';
import { OBSERVABILITY_THRESHOLD_RULE_TYPE_ID } from '@kbn/observability-plugin/common/constants';
import { FtrProviderContext } from '../common/ftr_provider_context';
import { createIndexConnector, createRule } from './helpers/alerting_api_helper';
import { createDataView, deleteDataView } from './helpers/data_view';
import { getSyntraceClient, generateData } from './helpers/syntrace';
import { waitForAlertInIndex, waitForRuleStatus } from './helpers/alerting_wait_for_helpers';

// eslint-disable-next-line import/no-default-export
export default function ({ getService }: FtrProviderContext) {
  const start = moment(Date.now()).subtract(10, 'minutes').valueOf();
  const end = moment(Date.now()).valueOf();
  const esClient = getService('es');
  const config = getService('config');
  const kibanaServerConfig = config.get('servers.kibana');
  const kibanaUrl = format(kibanaServerConfig);
  const supertest = getService('supertest');

  describe('Threshold rule', () => {
    const THRESHOLD_RULE_ALERT_INDEX = '.alerts-observability.threshold.alerts-default';
    const ALERT_ACTION_INDEX = 'alert-action-threshold';
    const DATA_VIEW_ID = 'data-view-id';

    let synthtraceEsClient: ApmSynthtraceEsClient;
    let actionId: string;
    let ruleId: string;

    before(async () => {
      synthtraceEsClient = await getSyntraceClient({ esClient, kibanaUrl });
      await generateData({ synthtraceEsClient, start, end });
      await createDataView({
        supertest,
        name: 'test-data-view',
        id: DATA_VIEW_ID,
        title: 'traces-apm*,metrics-apm*,logs-apm*',
      });
    });

    after(async () => {
      await supertest.delete(`/api/alerting/rule/${ruleId}`).set('kbn-xsrf', 'foo');
      await supertest.delete(`/api/actions/connector/${actionId}`).set('kbn-xsrf', 'foo');
      await esClient.deleteByQuery({
        index: THRESHOLD_RULE_ALERT_INDEX,
        query: { term: { 'kibana.alert.rule.uuid': ruleId } },
      });
      await esClient.deleteByQuery({
        index: '.kibana-event-log-*',
        query: { term: { 'kibana.alert.rule.consumer': 'alerts' } },
      });
      await synthtraceEsClient.clean();
      await deleteDataView({
        supertest,
        id: DATA_VIEW_ID,
      });
    });

    describe('Rule creation', () => {
      it('creates rule successfully', async () => {
        actionId = await createIndexConnector({
          supertest,
          name: 'Index Connector: Threshold API test',
          indexName: ALERT_ACTION_INDEX,
        });

        const createdRule = await createRule({
          supertest,
          tags: ['observability'],
          consumer: 'alerts',
          name: 'Threshold rule',
          ruleTypeId: OBSERVABILITY_THRESHOLD_RULE_TYPE_ID,
          params: {
            criteria: [
              {
                aggType: Aggregators.CUSTOM,
                comparator: Comparator.GT,
                threshold: [7500000],
                timeSize: 5,
                timeUnit: 'm',
                customMetrics: [
                  { name: 'A', field: 'span.self_time.sum.us', aggType: Aggregators.AVERAGE },
                ],
              },
            ],
            alertOnNoData: true,
            alertOnGroupDisappear: true,
            searchConfiguration: {
              query: {
                query: '',
                language: 'kuery',
              },
              index: DATA_VIEW_ID,
            },
          },
          actions: [
            {
              group: FIRED_ACTIONS_ID,
              id: actionId,
              params: {
                documents: [
                  {
                    ruleType: '{{rule.type}}',
                  },
                ],
              },
              frequency: {
                notify_when: 'onActionGroupChange',
                throttle: null,
                summary: false,
              },
            },
          ],
        });
        ruleId = createdRule.id;
        expect(ruleId).not.to.be(undefined);
      });

      it('should be active', async () => {
        const executionStatus = await waitForRuleStatus({
          id: ruleId,
          expectedStatus: 'active',
          supertest,
        });
        expect(executionStatus.status).to.be('active');
      });

      it('should set correct information in the alert document', async () => {
        const resp = await waitForAlertInIndex({
          esClient,
          indexName: THRESHOLD_RULE_ALERT_INDEX,
          ruleId,
        });

        expect(resp.hits.hits[0]._source).property(
          'kibana.alert.rule.category',
          'Threshold (Technical Preview)'
        );
        expect(resp.hits.hits[0]._source).property('kibana.alert.rule.consumer', 'alerts');
        expect(resp.hits.hits[0]._source).property('kibana.alert.rule.name', 'Threshold rule');
        expect(resp.hits.hits[0]._source).property('kibana.alert.rule.producer', 'observability');
        expect(resp.hits.hits[0]._source).property('kibana.alert.rule.revision', 0);
        expect(resp.hits.hits[0]._source).property(
          'kibana.alert.rule.rule_type_id',
          'observability.rules.threshold'
        );
        expect(resp.hits.hits[0]._source).property('kibana.alert.rule.uuid', ruleId);
        expect(resp.hits.hits[0]._source).property('kibana.space_ids').contain('default');
        expect(resp.hits.hits[0]._source)
          .property('kibana.alert.rule.tags')
          .contain('observability');
        expect(resp.hits.hits[0]._source).property('kibana.alert.action_group', 'threshold.fired');
        expect(resp.hits.hits[0]._source).property('tags').contain('observability');
        expect(resp.hits.hits[0]._source).property('kibana.alert.instance.id', '*');
        expect(resp.hits.hits[0]._source).property('kibana.alert.workflow_status', 'open');
        expect(resp.hits.hits[0]._source).property('event.kind', 'signal');
        expect(resp.hits.hits[0]._source).property('event.action', 'open');

        expect(resp.hits.hits[0]._source)
          .property('kibana.alert.rule.parameters')
          .eql({
            criteria: [
              {
                aggType: 'custom',
                comparator: '>',
                threshold: [7500000],
                timeSize: 5,
                timeUnit: 'm',
                customMetrics: [{ name: 'A', field: 'span.self_time.sum.us', aggType: 'avg' }],
              },
            ],
            alertOnNoData: true,
            alertOnGroupDisappear: true,
            searchConfiguration: { index: 'data-view-id', query: { query: '', language: 'kuery' } },
          });
      });
    });
  });
}

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { EuiInMemoryTable } from '@elastic/eui';
import type { RiskSeverity } from '../../../common/search_strategy';
import { RiskScore } from '../../explore/components/risk_score/severity/common';

import { HostDetailsLink, UserDetailsLink } from '../../common/components/links';
import type { RiskScore as IRiskScore } from '../../../server/lib/risk_engine/types';
import { RiskScoreEntity } from '../../../common/risk_engine/types';

export const RiskScorePreviewTable = ({
  items,
  type,
}: {
  items: IRiskScore[];
  type: RiskScoreEntity;
}) => {
  const columns = [
    {
      field: 'identifierValue',
      name: 'Name',
      render: (itemName: string) => {
        return type === RiskScoreEntity.host ? (
          <HostDetailsLink hostName={itemName} />
        ) : (
          <UserDetailsLink userName={itemName} />
        );
      },
    },
    {
      field: 'level',
      name: 'Level',
      render: (risk: RiskSeverity | null) => {
        if (risk != null) {
          return <RiskScore severity={risk} />;
        }

        return '';
      },
    },
    {
      field: 'totalScoreNormalized',
      // align: 'right',
      name: 'Score norm',
      render: (scoreNorm: number | null) => {
        if (scoreNorm != null) {
          return Math.round(scoreNorm * 100) / 100;
        }
        return '';
      },
    },
  ];

  return (
    <EuiInMemoryTable<IRiskScore>
      data-test-subj={
        type === RiskScoreEntity.host ? 'host-risk-preview-table' : 'user-risk-preview-table'
      }
      responsive={false}
      items={items}
      columns={columns}
      loading={false}
    />
  );
};

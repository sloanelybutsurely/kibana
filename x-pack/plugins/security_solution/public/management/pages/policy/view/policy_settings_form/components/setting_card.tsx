/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { FC, ReactNode } from 'react';
import React, { memo, useContext } from 'react';
import { i18n } from '@kbn/i18n';
import { FormattedMessage } from '@kbn/i18n-react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiHorizontalRule,
  EuiText,
  EuiShowFor,
  EuiPanel,
  EuiTextColor,
  EuiIconTip,
} from '@elastic/eui';

import { ThemeContext } from 'styled-components';
import type { OperatingSystem } from '@kbn/securitysolution-utils';
import { useTestIdGenerator } from '../../../../../hooks/use_test_id_generator';
import { OS_TITLES } from '../../../../../common/translations';

const TITLES = {
  type: i18n.translate('xpack.securitySolution.endpoint.policyDetailType', {
    defaultMessage: 'Type',
  }),
  os: i18n.translate('xpack.securitySolution.endpoint.policyDetailOS', {
    defaultMessage: 'Operating system',
  }),
};

interface SettingCardProps {
  /**
   * A subtitle for this component.
   **/
  type: string;
  /**
   * Types of supported operating systems.
   */
  supportedOss: OperatingSystem[];
  osRestriction?: ReactNode;
  dataTestSubj?: string;
  /** React Node to be put on the right corner of the card */
  rightCorner?: ReactNode;
}

export const SettingCardHeader = memo<{ children: React.ReactNode; 'data-test-subj'?: string }>(
  ({ children, 'data-test-subj': dataTestSubj }) => (
    <EuiTitle size="xxs" data-test-subj={dataTestSubj}>
      <h5>{children}</h5>
    </EuiTitle>
  )
);
SettingCardHeader.displayName = 'SettingCardHeader';

export const SettingCard: FC<SettingCardProps> = memo(
  ({ type, supportedOss, osRestriction, dataTestSubj, rightCorner, children }) => {
    const paddingSize = useContext(ThemeContext).eui.euiPanelPaddingModifiers.paddingMedium;
    const getTestId = useTestIdGenerator(dataTestSubj);

    return (
      <EuiPanel data-test-subj={getTestId()} hasBorder={true} hasShadow={false} paddingSize="none">
        <EuiFlexGroup
          direction="row"
          gutterSize="none"
          alignItems="center"
          style={{ padding: `${paddingSize} ${paddingSize} 0 ${paddingSize}` }}
        >
          <EuiFlexItem grow={1}>
            <SettingCardHeader data-test-subj={getTestId('title')}>{TITLES.type}</SettingCardHeader>
            <EuiText size="s">{type}</EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={2}>
            <SettingCardHeader data-test-subj={getTestId('osTitle')}>{TITLES.os}</SettingCardHeader>
            <EuiFlexGroup direction="row" gutterSize="s" alignItems="center">
              <EuiFlexItem grow={false}>
                <EuiText size="s" data-test-subj={getTestId('osValues')}>
                  {supportedOss.map((os) => OS_TITLES[os]).join(', ')}{' '}
                </EuiText>
              </EuiFlexItem>
              {osRestriction && (
                <EuiFlexItem grow={false}>
                  <EuiFlexGroup direction="row" gutterSize="xs">
                    <EuiFlexItem grow={false}>
                      <EuiTextColor color="subdued">
                        <FormattedMessage
                          id="xpack.securitySolution.endpoint.policy.details.antivirusRegistration.osRestriction"
                          defaultMessage="Restrictions"
                        />
                      </EuiTextColor>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiIconTip type="warning" color="warning" content={osRestriction} />
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
              )}
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiShowFor sizes={['m', 'l', 'xl']}>
            <EuiFlexItem grow={3}>
              <EuiFlexGroup direction="row" gutterSize="none" justifyContent="flexEnd">
                <EuiFlexItem grow={false}>{rightCorner}</EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiShowFor>
          <EuiShowFor sizes={rightCorner ? ['s', 'xs'] : []}>
            <EuiFlexItem>{rightCorner}</EuiFlexItem>
          </EuiShowFor>
        </EuiFlexGroup>

        <EuiHorizontalRule margin="m" />

        <div style={{ padding: `0 ${paddingSize} ${paddingSize} ${paddingSize}` }}>{children}</div>
      </EuiPanel>
    );
  }
);

SettingCard.displayName = 'SettingCard';

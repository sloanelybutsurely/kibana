/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { httpServiceMock } from '@kbn/core-http-browser-mocks';
import { I18nProvider } from '@kbn/i18n-react';
import { actionTypeRegistryMock } from '@kbn/triggers-actions-ui-plugin/public/application/action_type_registry.mock';
import { euiDarkVars } from '@kbn/ui-theme';
import React from 'react';
// eslint-disable-next-line @kbn/eslint/module_migration
import { ThemeProvider } from 'styled-components';

import { AssistantProvider } from '../../assistant_context';
import { Conversation } from '../../assistant_context/types';

interface Props {
  children: React.ReactNode;
  getInitialConversations?: () => Record<string, Conversation>;
}

window.scrollTo = jest.fn();
window.HTMLElement.prototype.scrollIntoView = jest.fn();

const mockGetInitialConversations = () => ({});

/** A utility for wrapping children in the providers required to run tests */
export const TestProvidersComponent: React.FC<Props> = ({
  children,
  getInitialConversations = mockGetInitialConversations,
}) => {
  const actionTypeRegistry = actionTypeRegistryMock.create();
  const mockGetComments = jest.fn(() => []);
  const mockHttp = httpServiceMock.createStartContract({ basePath: '/test' });

  return (
    <I18nProvider>
      <ThemeProvider theme={() => ({ eui: euiDarkVars, darkMode: true })}>
        <AssistantProvider
          actionTypeRegistry={actionTypeRegistry}
          augmentMessageCodeBlocks={jest.fn().mockReturnValue([])}
          baseAllow={[]}
          baseAllowReplacement={[]}
          defaultAllow={[]}
          defaultAllowReplacement={[]}
          docLinks={{
            ELASTIC_WEBSITE_URL: 'https://www.elastic.co/',
            DOC_LINK_VERSION: 'current',
          }}
          getComments={mockGetComments}
          getInitialConversations={getInitialConversations}
          setConversations={jest.fn()}
          setDefaultAllow={jest.fn()}
          setDefaultAllowReplacement={jest.fn()}
          http={mockHttp}
        >
          {children}
        </AssistantProvider>
      </ThemeProvider>
    </I18nProvider>
  );
};

TestProvidersComponent.displayName = 'TestProvidersComponent';

export const TestProviders = React.memo(TestProvidersComponent);

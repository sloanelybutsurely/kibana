/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { TimelineFilter } from '../objects/timeline';

export const ADD_NOTE_BUTTON = '[data-test-subj="add-note"]';

export const ADD_FILTER = '[data-test-subj="timeline"] [data-test-subj="addFilter"]';

export const ATTACH_TIMELINE_TO_CASE_BUTTON = '[data-test-subj="attach-timeline-case-button"]';

export const ATTACH_TIMELINE_TO_NEW_CASE_ICON = '[data-test-subj="attach-timeline-new-case"]';

export const ATTACH_TIMELINE_TO_EXISTING_CASE_ICON =
  '[data-test-subj="attach-timeline-existing-case"]';

export const SELECT_CASE = (id: string) => {
  return `[data-test-subj="cases-table-row-select-${id}"]`;
};

export const CORRELATION_EVENT_TABLE_CELL =
  '[data-test-subj="eql-events-table"] [data-test-subj="statefulCell"]';

export const CLOSE_TIMELINE_BTN = '[data-test-subj="close-timeline"]';

export const COMBO_BOX = '.euiComboBoxOption__content';

export const COMBO_BOX_INPUT = '[data-test-subj="comboBoxInput"]';

export const CREATE_NEW_TIMELINE = '[data-test-subj="timeline-new"]';

export const CREATE_NEW_TIMELINE_WITH_BORDER = '[data-test-subj="timeline-new-with-border"]';

export const CREATE_NEW_TIMELINE_TEMPLATE = '[data-test-subj="template-timeline-new"]';

export const DATA_PROVIDERS = '.field-value';

export const DATAGRID_HEADERS = '[data-test-subj^="dataGridHeaderCell-"]';

export const DATAGRID_HEADER = (header: string) => {
  return `[data-test-subj="dataGridHeaderCell-${header}"]`;
};

export const DATE_PICKER_END = '[data-test-subj="superDatePickerendDatePopoverButton"]';

export const DATE_PICKER_START = '[data-test-subj="superDatePickerstartDatePopoverButton"]';

export const DELETE_TIMELINE_BTN = '[data-test-subj="delete-timeline"]';

export const DELETION_CONFIRMATION = '[data-test-subj="confirmModalConfirmButton"]';

export const DESTINATION_IP_KPI = '[data-test-subj="siem-timeline-destination-ip-kpi"]';

export const FAVORITE_TIMELINE = '[data-test-subj="timeline-favorite-filled-star"]';

export const FIELD_BROWSER = '[data-test-subj="show-field-browser"]';

export const GRAPH_TAB_BUTTON = '[data-test-subj="timelineTabs-graph"]';

export const HOST_KPI = '[data-test-subj="siem-timeline-host-kpi"]';

export const ID_HEADER_FIELD = '[data-test-subj="timeline"] [data-test-subj="header-text-_id"]';

export const ID_TOGGLE_FIELD =
  '[data-test-subj="actionItem-security-detailsFlyout-cellActions-toggleColumn"]';

export const ID_HOVER_ACTION_OVERFLOW_BTN =
  '[data-test-subj="event-fields-table-row-_id"] [data-test-subj="showExtraActionsButton"]';

export const LOCKED_ICON = '[data-test-subj="timeline-date-picker-lock-button"]';

export const UNLOCKED_ICON = '[data-test-subj="timeline-date-picker-unlock-button"]';

export const NOTES = '[data-test-subj="note-card-body"]';

export const NOTE_CARD_CONTENT = '[data-test-subj="notes"]';

export const EVENT_NOTE = '[data-test-subj="timeline-notes-button-small"]';

export const NOTE_DESCRIPTION = '[data-test-subj="note-preview-description"]';

export const NOTE_PREVIEW = '[data-test-subj^="note-preview"]';

export const NOTES_TEXT_AREA = '[data-test-subj="add-a-note"] textarea';

export const NOTES_TAB_BUTTON = '[data-test-subj="timelineTabs-notes"]';

export const NOTES_TEXT = '.euiMarkdownFormat';

export const NOTES_CODE_BLOCK = '.euiCode';

export const NOTES_AUTHOR = '.euiCommentEvent__headerUsername';

export const NOTES_LINK = '[data-test-subj="markdown-link"]';

export const DELETE_NOTE = '[data-test-subj="delete-note"]';

export const MARKDOWN_INVESTIGATE_BUTTON =
  '[data-test-subj="insight-investigate-in-timeline-button"]';

export const OPEN_TIMELINE_ICON = '[data-test-subj="open-timeline-button"]';

export const OPEN_TIMELINE_MODAL = '[data-test-subj="open-timeline-modal"]';

export const CLOSE_OPEN_TIMELINE_MODAL_BTN = `${OPEN_TIMELINE_MODAL} > button`;

export const OPEN_TIMELINE_TEMPLATE_ICON =
  '[data-test-subj="open-timeline-modal-body-filter-template"]';

export const PIN_EVENT = '[data-test-subj="pin"]';

export const PINNED_TAB_BUTTON = '[data-test-subj="timelineTabs-pinned"]';

export const PROCESS_KPI = '[data-test-subj="siem-timeline-process-kpi"';

export const PROVIDER_BADGE = '[data-test-subj="providerBadge"]';

export const PROVIDER_BADGE_DELETE = '.delete-data-provider';

export const RESET_FIELDS =
  '[data-test-subj="fields-browser-container"] [data-test-subj="reset-fields"]';

export const SAVE_FILTER_BTN = '[data-test-subj="saveFilter"]';

export const SEARCH_OR_FILTER_CONTAINER =
  '[data-test-subj="timeline-search-or-filter-search-container"]';

export const INDICATOR_MATCH_ROW_RENDER = '[data-test-subj="threat-match-row"]';

export const QUERY_EVENT_TABLE_CELL =
  '[data-test-subj="query-events-table"] [data-test-subj="statefulCell"]';

export const QUERY_TAB_BUTTON = '[data-test-subj="timelineTabs-query"]';

export const SERVER_SIDE_EVENT_COUNT = '[data-test-subj="server-side-event-count"]';

export const ALERTS_TABLE_COUNT = `[data-test-subj="toolbar-alerts-count"]`;

export const SOURCE_IP_KPI = '[data-test-subj="siem-timeline-source-ip-kpi"]';

export const STAR_ICON = '[data-test-subj="timeline-favorite-empty-star"]';

export const TIMELINE_CHANGES_IN_PROGRESS = '[data-test-subj="timeline"] .euiProgress';

export const TIMELINE_COLUMN_SPINNER = '[data-test-subj="timeline-loading-spinner"]';

export const TIMELINE_COLLAPSED_ITEMS_BTN = '[data-test-subj="euiCollapsedItemActionsButton"]';

export const TIMELINE_CREATE_TEMPLATE_FROM_TIMELINE_BTN =
  '[data-test-subj="create-template-from-timeline"]';

export const TIMELINE_CREATE_TIMELINE_FROM_TEMPLATE_BTN = '[data-test-subj="create-from-template"]';

export const TIMELINE_CORRELATION_INPUT = '[data-test-subj="eqlQueryBarTextInput"]';

export const TIMELINE_CORRELATION_TAB = '[data-test-subj="timelineTabs-eql"]';

export const TIMELINE_DATA_PROVIDERS_ACTION_MENU = '[data-test-subj="providerActions"]';

export const TIMELINE_ADD_FIELD_BUTTON = '[data-test-subj="addField"]';

export const TIMELINE_DATA_PROVIDER_FIELD = '[data-test-subj="field"]';

export const TIMELINE_DATA_PROVIDER_FIELD_INPUT = '[data-test-subj="comboBoxSearchInput"]';

export const TIMELINE_DATA_PROVIDER_OPERATOR = `[data-test-subj="operator"]`;

export const TIMELINE_DATA_PROVIDER_VALUE = `[data-test-subj="value"]`;

export const SAVE_DATA_PROVIDER_BTN = `[data-test-subj="save"]`;

export const TIMELINE_DESCRIPTION = '[data-test-subj="timeline-description"]';

export const TIMELINE_DESCRIPTION_INPUT = '[data-test-subj="save-timeline-description"]';

export const TIMELINE_DROPPED_DATA_PROVIDERS = '[data-test-subj="providerContainer"]';

export const TIMELINE_EVENT = '[data-test-subj="event"]';

export const TIMELINE_EVENTS_COUNT_PER_PAGE = '[data-test-subj="local-events-count"]';

export const TIMELINE_EVENTS_COUNT_PER_PAGE_BTN = '[data-test-subj="local-events-count-button"]';

export const TIMELINE_EVENTS_COUNT_PER_PAGE_OPTION = (itemsPerPage: number) =>
  `[data-test-subj="items-per-page-option-${itemsPerPage}"]`;

export const TIMELINE_EVENTS_COUNT_NEXT_PAGE =
  '[data-test-subj="timeline"] [data-test-subj="pagination-button-next"]';

export const TIMELINE_EVENTS_COUNT_PREV_PAGE =
  '[data-test-subj="timeline"] [data-test-subj="pagination-button-previous"]';

export const TIMELINE_FIELDS_BUTTON =
  '[data-test-subj="timeline"] [data-test-subj="show-field-browser"]';

export const TIMELINE_FILTER = (filter: TimelineFilter) =>
  `[data-test-subj~="filter"][data-test-subj~="filter-enabled"][data-test-subj~="filter-key-${
    filter.field
  }"][data-test-subj~="filter-value-${(filter.value ?? '').replace(
    /\s/g,
    ''
  )}"][data-test-subj~="filter-unpinned"]`;

export const TIMELINE_FILTER_FIELD = '[data-test-subj="filterFieldSuggestionList"]';

export const TIMELINE_TITLE_BY_ID = (id: string) => `[data-test-subj="title-${id}"]`;

export const TIMELINE_FILTER_OPERATOR = '[data-test-subj="filterOperatorList"]';

export const TIMELINE_FILTER_VALUE =
  '[data-test-subj="filterParamsComboBox phraseParamsComboxBox"]';

export const TIMELINE_FLYOUT = '[data-test-subj="timeline-flyout"]';

export const TIMELINE_FLYOUT_HEADER = '[data-test-subj="query-tab-flyout-header"]';

export const TIMELINE_FLYOUT_BODY = '[data-test-subj="query-tab-flyout-body"]';

export const TIMELINE_HEADER = '[data-test-subj="timeline-hide-show-container"]';

export const TIMELINE_INSPECT_BUTTON = `${TIMELINE_FLYOUT} [data-test-subj="inspect-icon-button"]`;

export const TIMELINE_PANEL = `[data-test-subj="timeline-flyout-header-panel"]`;

export const TIMELINE_QUERY = '[data-test-subj="timelineQueryInput"]';

export const TIMELINE_SETTINGS_ICON = '[data-test-subj="settings-plus-in-circle"]';

export const TIMELINE_SEARCH_OR_FILTER = '[data-test-subj="timeline-select-search-or-filter"]';

export const TIMELINE_KQLMODE_SEARCH = '[data-test-subj="kqlModePopoverSearch"]';

export const TIMELINE_KQLMODE_FILTER = '[data-test-subj="kqlModePopoverFilter"]';

export const TIMELINE_SHOWQUERYBARMENU_BUTTON = `${TIMELINE_FLYOUT} [data-test-subj="showQueryBarMenu"]`;

export const TIMELINE_SWITCHQUERYLANGUAGE_BUTTON = '[data-test-subj="switchQueryLanguageButton"]';

export const TIMELINE_LUCENELANGUAGE_BUTTON = '[data-test-subj="luceneLanguageMenuItem"]';

export const TIMELINE_KQLLANGUAGE_BUTTON = '[data-test-subj="kqlLanguageMenuItem"]';

export const TIMELINE_TITLE = '[data-test-subj="timeline-title"]';

export const TIMELINE_TITLE_INPUT = '[data-test-subj="save-timeline-title"]';

export const TIMESTAMP_HEADER_FIELD = '[data-test-subj="header-text-@timestamp"]';

export const TIMESTAMP_TOGGLE_FIELD =
  '[data-test-subj="actionItem-security-detailsFlyout-cellActions-toggleColumn"]';

export const TOGGLE_TIMELINE_EXPAND_EVENT = '[data-test-subj="expand-event"]';

export const TIMELINE_EDIT_MODAL_OPEN_BUTTON = '[data-test-subj="save-timeline-button-icon"]';

export const TIMELINE_SAVE_MODAL = '[data-test-subj="save-timeline-modal"]';

export const TIMELINE_EDIT_MODAL_SAVE_BUTTON = '[data-test-subj="save-button"]';

export const TIMELINE_EXIT_FULL_SCREEN_BUTTON = '[data-test-subj="exit-full-screen"]';

export const TIMELINE_FLYOUT_WRAPPER = '[data-test-subj="flyout-pane"]';

export const TIMELINE_FULL_SCREEN_BUTTON = '[data-test-subj="full-screen-active"]';

const TIMELINE_ROW_RENDERERS_MODAL = '[data-test-subj="row-renderers-modal"]';

export const TIMELINE_ROW_RENDERERS_DISABLE_ALL_BTN = `[data-test-subj="disable-all"]`;

export const TIMELINE_ROW_RENDERERS_MODAL_CLOSE_BUTTON = `${TIMELINE_ROW_RENDERERS_MODAL} .euiModal__closeIcon`;

export const TIMELINE_ROW_RENDERERS_MODAL_ITEMS_CHECKBOX = `${TIMELINE_ROW_RENDERERS_MODAL} .euiCheckbox__input`;

export const TIMELINE_ROW_RENDERERS_SEARCHBOX = `${TIMELINE_ROW_RENDERERS_MODAL} input[type="search"]`;

export const TIMELINE_ROW_RENDERERS_SURICATA_SIGNATURE = `${TIMELINE_ROW_RENDERERS_MODAL} [data-test-subj="render-content-suricata.eve.alert.signature"]`;

export const TIMELINE_ROW_RENDERERS_SURICATA_LINK_TOOLTIP = `[data-test-subj="externalLinkTooltip"]`;

export const TIMELINE_ROW_RENDERERS_SURICATA_SIGNATURE_TOOLTIP = `[data-test-subj="suricata.eve.alert.signature-tooltip"]`;

export const TIMELINE_SHOW_ROW_RENDERERS_GEAR = '[data-test-subj="show-row-renderers-gear"]';

export const TIMELINE_TABS = '[data-test-subj="timeline"] .euiTabs';

export const TIMELINE_TAB_CONTENT_EQL = '[data-test-subj="timeline-tab-content-eql"]';

export const TIMELINE_TAB_CONTENT_GRAPHS_NOTES =
  '[data-test-subj="timeline-tab-content-graph-notes"]';

export const TIMESTAMP_HOVER_ACTION_OVERFLOW_BTN =
  '[data-test-subj="event-fields-table-row-@timestamp"] [data-test-subj="showExtraActionsButton"]';

export const USER_KPI = '[data-test-subj="siem-timeline-user-kpi"]';

export const EDIT_TIMELINE_BTN = '[data-test-subj="save-timeline-button-icon"]';

export const EDIT_TIMELINE_TOOLTIP = '[data-test-subj="save-timeline-btn-tooltip"]';

export const ALERT_TABLE_SEVERITY_VALUES =
  '[data-test-subj="formatted-field-kibana.alert.severity"]';

export const ALERT_TABLE_ACTIONS_HEADER = '[data-gridcell-column-id="expandColumn"]';

export const ALERT_TABLE_FILE_NAME_HEADER = '[data-gridcell-column-id="file.name"]';

export const ALERT_TABLE_SEVERITY_HEADER = '[data-gridcell-column-id="kibana.alert.severity"]';

export const ALERT_TABLE_FILE_NAME_VALUES =
  '[data-gridcell-column-id="file.name"][data-test-subj="dataGridRowCell"]'; // empty column for the test data

export const ACTIVE_TIMELINE_BOTTOM_BAR =
  '[data-test-subj="flyoutBottomBar"]  .active-timeline-button';

export const GET_TIMELINE_GRID_CELL = (fieldName: string) =>
  `[data-test-subj="draggable-content-${fieldName}"]`;

export const EMPTY_DROPPABLE_DATA_PROVIDER_GROUP = `.empty-providers-group`;

export const TIMELINE_DATA_PROVIDERS_CONTAINER = '[data-test-subj="dataProviders"]';

export const TIMELINE_VIEW_IN_ANALYZER = '[data-test-subj="view-in-analyzer"]';

export const EMPTY_DATA_PROVIDER_AREA = `.timeline-drop-area-empty`;

export const HOVER_ACTIONS = {
  ADD_TO_TIMELINE: '[data-test-subj="hover-actions-add-timeline"]',
  FILTER_FOR: '[data-test-subj="hover-actions-filter-for"]',
  FILTER_OUT: '[data-test-subj="hovhover-actions-filter-out"]',
  COPY: '[data-test-subj="hover-actions-copy-button"]',
};

export const GET_TIMELINE_HEADER = (fieldName: string) => {
  return `[data-test-subj="timeline"] [data-test-subj="header-text-${fieldName}"]`;
};

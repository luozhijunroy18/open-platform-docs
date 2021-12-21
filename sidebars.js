/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "category",
      label: "通知",
      items: [
        "open-api/notice/TLS",
        "open-api/notice/update-log"
      ],
    },
    {
      type: "category",
      label: "开始使用",
      items: [
        "open-api/getting-started/getting-started",
        "open-api/getting-started/postman-use",
        "open-api/getting-started/origin",
        "open-api/getting-started/auth",
        "open-api/getting-started/refresh-auth",
        "open-api/getting-started/temp-auth",
        "open-api/getting-started/question-answer"
      ],
    },
    {
      type: "category",
      label: "企业通讯录",
      items: [
        "open-api/corporation/info",
        "open-api/corporation/corporation-info",
        "open-api/corporation/get-departments",
        "open-api/corporation/get-all-staffs",
        "open-api/corporation/get-staff-ids",
        "open-api/corporation/get-staff-backLog",
        "open-api/corporation/get-roles-group",
        "open-api/corporation/get-roles",
        "open-api/corporation/update-roles",
        "open-api/corporation/question-answer"
      ],
    },
    {
      type: "category",
      label: "通讯录同步",
      items: [
        "open-api/contacts/contact-introduction",
        "open-api/contacts/add-departments",
        "open-api/contacts/batch-add-departments",
        "open-api/contacts/update-departments",
        "open-api/contacts/get-departments-idOrCode",
        "open-api/contacts/get-department-byName",
        "open-api/contacts/get-department-byPath",
        "open-api/contacts/active-departments",
        "open-api/contacts/add-staffs",
        "open-api/contacts/batch-add-staffs",
        "open-api/contacts/update-staffs",
        "open-api/contacts/get-allCustomeProperty",
        "open-api/contacts/update-staffs-customFields",
        "open-api/contacts/relay-staff",
        "open-api/contacts/active-staffs",
        "open-api/contacts/auth-staffs",
        "open-api/contacts/question-answer"
      ],
    },
    // {
    //   type: "category",
    //   label: "自定义档案",
    //   items: [
    //     "open-api/dimensions/info",
    //     "open-api/dimensions/create-dimensions",
    //     "open-api/dimensions/get-dimensions",
    //     "open-api/dimensions/creat-dimension-items",
    //     "open-api/dimensions/batch-creat-dimension-items",
    //     "open-api/dimensions/get-dimension-items",
    //     "open-api/dimensions/get-dimension-items-visibility",
    //     "open-api/dimensions/get-dimension-items-byCode",
    //     "open-api/dimensions/get-dimension-items-byName",
    //     "open-api/dimensions/update-dimension-items",
    //     "open-api/dimensions/disable-dimension-items",
    //     "open-api/dimensions/enable-dimension-items",
    //     "open-api/dimensions/question-answer"
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "档案关系",
    //   items: [
    //     "open-api/recordLink/info",
    //     "open-api/recordLink/get-dimension-relation",
    //     "open-api/recordLink/query-all-relation-items",
    //     "open-api/recordLink/get-dimension-relation-items",
    //     "open-api/recordLink/creat-dimension-relation-items",
    //     "open-api/recordLink/delete-dimension-relation-items",
    //     "open-api/recordLink/update-dimension-relation-items",
    //     "open-api/recordLink/edit-dimension-relation-items",
    //     "open-api/recordLink/question-answer"
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "费用类型",
    //   items: [
    //     "open-api/feetype/info",
    //     "open-api/feetype/get-feetypes",
    //     "open-api/feetype/get-feetypes-list",
    //     "open-api/feetype/default-feetypes-import",
    //     "open-api/feetype/question-answer"
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "单据模板",
    //   items: [
    //     "open-api/forms/info",
    //     "open-api/forms/get-specifications-latest",
    //     "open-api/forms/get-specifications-versioned",
    //     "open-api/forms/get-specifications-details",
    //     "open-api/forms/get-template-byid",
    //     "open-api/forms/get-template-list",
    //     "open-api/forms/get-apportion-template-list",
    //     "open-api/forms/create-custom-field",
    //     "open-api/forms/add-global-field",
    //     "open-api/forms/get-customs-param",
    //     "open-api/forms/question-answer"
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "单据",
    //   items: [
    //     "open-api/flows/introduce",
    //     "open-api/flows/forms-state",
    //     "open-api/flows/get-forms-sequences",
    //     "open-api/flows/get-forms-sequences-ids",
    //     "open-api/flows/get-forms-details",
    //     "open-api/flows/get-loanInfo-ByFlowId",
    //     "open-api/flows/get-approve-state",
    //     "open-api/flows/get-approve",
    //     "open-api/flows/creat-and-save",
    //     "open-api/flows/update-form",
    //     "open-api/flows/voucher-write-back",
    //     "open-api/flows/get-flow",
    //     "open-api/flows/flow-and-submit",
    //     "open-api/flows/do-action-flow",
    //     "open-api/flows/get-payment-results",
    //     "open-api/flows/get-flows-pdf",
    //     "open-api/flows/get-payment-records",
    //     "open-api/flows/flow-approval",
    //     "open-api/flows/share-requisition",
    //     "open-api/flows/flow-approval-result",
    //     "open-api/flows/get-flows-attachment",
    //     "open-api/flows/get-flow-receipt",
    //     "open-api/flows/get-carboncopy",
    //     "open-api/flows/get-flow-by-checkingId",
    //     "open-api/flows/question-answer"
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "委托授权关系",
    //   items: [
    //     "open-api/delegate/info",
    //     "open-api/delegate/get-delegate-list",
    //     "open-api/delegate/get-delegate-byStaffId",
    //     "open-api/delegate/create-delegate",
    //     "open-api/delegate/update-delegate",
    //     "open-api/delegate/delete-delegate",
    //     "open-api/delegate/question-answer"
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "企业收付款账户",
    //   items: [
    //     "open-api/pay/info",
    //     "open-api/pay/get-payment-account",
    //     "open-api/pay/get-payeeInfos",
    //     "open-api/pay/new-account",
    //     "open-api/pay/edit-accounts",
    //     "open-api/pay/disableOrEnable-account",
    //     "open-api/pay/question-answer"
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "预算",
    //   items: [
    //     "open-api/budget/budget-introduction",
    //     "open-api/budget/add-budget",
    //     "open-api/budget/get-budget-list",
    //     "open-api/budget/get-BudgetsDetails-ByPage",
    //     "open-api/budget/get-BudgetsDetails-ByStaff",
    //     "open-api/budget/get-BudgetInfo-State",
    //     "open-api/budget/get-budget-details",
    //     "open-api/budget/add-budget-node",
    //     "open-api/budget/delete-budget-node",
    //     "open-api/budget/update-budget-node",
    //     "open-api/budget/batch-pdate-budget-node",
    //     "open-api/budget/search-budget-node",
    //     "open-api/budget/question-answer"
    //   ],
    // },
    {
      type: "category",
      label: "自建应用(原自定义扩展/数据互联)",
      items: [
        "open-api/datalink/introduce",
        "open-api/datalink/create-platform",
        "open-api/datalink/get-entity-by-name",
        "open-api/datalink/edit-platform",
        "open-api/datalink/create-entity",
        "open-api/datalink/get-entity-list",
        "open-api/datalink/add-delete-entity-field",
        "open-api/datalink/update-entity-data",
        "open-api/datalink/field-mapping",
        "open-api/datalink/get-entity-info",
        "open-api/datalink/get-entity-plan",
        "open-api/datalink/get-tripManager-order",
        "open-api/datalink/get-entity-datalink",
        "open-api/datalink/question-answer"
      ],
    },
    {
      type: "category",
      label: "扩展中心",
      items: [
        "open-api/datalink/introduce2",
        "open-api/datalink/get-entity-object",
        "open-api/datalink/get-flow-invoice",
        "open-api/datalink/get-entity-invoice",
        "open-api/datalink/get-entity-invoic-details",
        "open-api/datalink/get-entity-invoic-details-batch",
        "open-api/datalink/riskTag",
        "open-api/datalink/get-entity-private-car",
        "open-api/datalink/get-entity-ele",
        "open-api/datalink/get-entity-ik-crm",
        "open-api/datalink/get-entity-travel",
        "open-api/datalink/get-entity-invoice-img",
        "open-api/datalink/get-settlement-list",
        "open-api/datalink/ldap",
        "open-api/datalink/get-costcenter-config",
        "open-api/datalink/get-costcenter-instance",
        "open-api/datalink/get-entity-unify-corporation",
        "open-api/datalink/get-entity-unify-invoice",
        "open-api/datalink/question-answer2"
      ],
    },
    {
      type: "category",
      label: "出站消息",
      items: [
        "open-api/outbound-message/outbound-introduction",
        "open-api/outbound-message/outbound-new",
        "open-api/outbound-message/outbound-callback",
        "open-api/outbound-message/call-failed-log-list",
        "open-api/outbound-message/question-answer"
      ],
    },
    {
      type: "category",
      label: "附件",
      items: [
        "open-api/attachment/info",
        "open-api/attachment/attachment-upload",
        "open-api/attachment/attachment-download",
        "open-api/attachment/question-answer"
      ],
    },
    {
      type: "category",
      label: "城市管理",
      items: [
        "open-api/city/info",
        "open-api/city/get-city-group",
        "open-api/city/create-city-group",
        "open-api/city/update-city-group",
        "open-api/city/update-city-group-status",
        "open-api/city/get-city-group-details",
        "open-api/city/update-city-group-details",
        "open-api/city/delete-city-group-details",
        "open-api/city/question-answer"
      ],
    },
    {
      type: "category",
      label: "币种汇率",
      items: [
        "open-api/currency/info",
        "open-api/currency/get-currency",
        "open-api/currency/update-currency-rate",
        "open-api/currency/question-answer",
      ],
    },
    {
      type: "category",
      label: "基础数据",
      items: [
        "open-api/basedata/info",
        "open-api/basedata/get-basedata-city",
        "open-api/basedata/question-answer"
      ],
    },
  ],
};

module.exports = sidebars;

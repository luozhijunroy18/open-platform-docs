# 批量获取发票明细

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/INVOICE/object/invoice/detailBatch"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>0.7.138</b></a> -> 🆕 新增了本接口。<br/>
  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **invoiceIds** | Array | 发票ID数组 | 必填 | - | 可以通过[获取单据详情](/docs/open-api/flows/get-forms-details)接口<br/>或[根据单据编号或ID查询发票ID和明细ID](/docs/open-api/datalink-extend/get-flow-invoice)接口获取 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/INVOICE/object/invoice/detailBatch?accessToken=ID_3tnaRTA94dg:djg8LshfUkfM00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "invoiceIds": [  //发票ID数组
        "djg8LshfUkfM00:033002100311:23272058",
        "djg8LshfUkfM00:044031900111:69872971"
    ]
}'
```

## 成功响应
```json
{
    "items":[
        {
            "id":"ID_3tm97Q1GBYw",
            "masterId":"djg8LshfUkfM00:033002100311:23272058",
            "useCount":0,
            "totalCount":1,
            "ownerId":null,
            "visibility":{
                "fullVisible":true,
                "staff":[],
                "department":[],
                "role":[]
            },
            "E_system_发票明细_code":"ID_3tm97Q1GBYw",
            "E_system_发票明细_name":"*鞋*吉普冬季男鞋马丁靴英伦风短靴中帮男鞋工装鞋加绒保暖男休闲鞋",
            "E_system_发票明细_单价":null,
            "E_system_发票明细_数量":"",
            "E_system_发票明细_税率":"13%",
            "E_system_发票明细_税额":{
                "standard":"-14.38",
                "standardUnit":"元",
                "standardScale":2,
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_system_发票明细_金额":{
                "standard":"-110.62",
                "standardUnit":"元",
                "standardScale":2,
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_system_发票明细_规格型号":"",
            "active":false,
            "entityId":"system_发票明细",
            "entity":{
                "pipeline":1,
                "grayver":"",
                "version":2,
                "active":true,
                "createTime":1531810588185,
                "updateTime":1531810588185,
                "name":"发票明细",
                "nameSpell":"FAPIAOZHUTI",
                "corporationId":"",
                "sourceCorporationId":null,
                "dataCorporationId":null,
                "ledgerIds":null,
                "plannedIds":null,
                "parentId":"",
                "code":"",
                "scoped":false,
                "visibility":{
                    "fullVisible":false,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "type":"DIMENSION",
                "disableStrategy":"LIMIT_COUNT",
                "maxUsageCount":1,
                "writtenOffField":null,
                "fields":[
                    {
                        "name":"E_system_发票明细_name",
                        "label":"名称",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":true,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_code",
                        "label":"编码",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":true,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_税率",
                        "label":"税率",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_单价",
                        "label":"单价",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_金额",
                        "label":"金额",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_税额",
                        "label":"税额",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_数量",
                        "label":"数量",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_车牌号",
                        "label":"车牌号",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_类型",
                        "label":"类型",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_通行日期起",
                        "label":"通行日期起",
                        "type":"date",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        },
                        "withTime":false
                    },
                    {
                        "name":"E_system_发票明细_通行日期止",
                        "label":"通行日期止",
                        "type":"date",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        },
                        "withTime":false
                    }
                ],
                "defaultMappingRuleId":null,
                "filterId":null,
                "id":"system_发票明细",
                "platformId":"system_发票平台",
                "details":null,
                "homePageVisibleIds":null,
                "homeVisibility":{
                    "fullVisible":false,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "exportVisibility":{
                    "fullVisible":false,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "ownerDepts":false,
                "showOnPage":true,
                "importMethod":[
                    "excel",
                    "api"
                ],
                "allowRecordLog":false,
                "logFields":[

                ],
                "showBook":false,
                "allowAddSubType":true,
                "dataFilter":false
            }
        },
        {
            "id":"ID_3tm97Q1GxYw",
            "masterId":"djg8LshfUkfM00:033002100311:23272058",
            "useCount":0,
            "totalCount":1,
            "ownerId":null,
            "visibility":{
                "fullVisible":true,
                "staff":[],
                "department":[],
                "role":[]
            },
            "E_system_发票明细_code":"ID_3tm97Q1GxYw",
            "E_system_发票明细_name":"*鞋*吉普冬季男鞋马丁靴英伦风短靴中帮男鞋工装鞋加绒保暖男休闲鞋",
            "E_system_发票明细_单价":{
                "standard":"343.36",
                "standardUnit":"元",
                "standardScale":2,
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_system_发票明细_数量":"1.00000000",
            "E_system_发票明细_税率":"13%",
            "E_system_发票明细_税额":{
                "standard":"44.64",
                "standardUnit":"元",
                "standardScale":2,
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_system_发票明细_金额":{
                "standard":"343.36",
                "standardUnit":"元",
                "standardScale":2,
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_system_发票明细_规格型号":"42",
            "active":false,
            "entityId":"system_发票明细",
            "entity":{
                "pipeline":1,
                "grayver":"",
                "version":2,
                "active":true,
                "createTime":1531810588185,
                "updateTime":1531810588185,
                "name":"发票明细",
                "nameSpell":"FAPIAOZHUTI",
                "corporationId":"",
                "sourceCorporationId":null,
                "dataCorporationId":null,
                "ledgerIds":null,
                "plannedIds":null,
                "parentId":"",
                "code":"",
                "scoped":false,
                "visibility":{
                    "fullVisible":false,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "type":"DIMENSION",
                "disableStrategy":"LIMIT_COUNT",
                "maxUsageCount":1,
                "writtenOffField":null,
                "fields":[
                    {
                        "name":"E_system_发票明细_name",
                        "label":"名称",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":true,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_code",
                        "label":"编码",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":true,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_税率",
                        "label":"税率",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_单价",
                        "label":"单价",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_金额",
                        "label":"金额",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_税额",
                        "label":"税额",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_数量",
                        "label":"数量",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_车牌号",
                        "label":"车牌号",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_类型",
                        "label":"类型",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_通行日期起",
                        "label":"通行日期起",
                        "type":"date",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        },
                        "withTime":false
                    },
                    {
                        "name":"E_system_发票明细_通行日期止",
                        "label":"通行日期止",
                        "type":"date",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        },
                        "withTime":false
                    }
                ],
                "defaultMappingRuleId":null,
                "filterId":null,
                "id":"system_发票明细",
                "platformId":"system_发票平台",
                "details":null,
                "homePageVisibleIds":null,
                "homeVisibility":{
                    "fullVisible":false,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "exportVisibility":{
                    "fullVisible":false,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "ownerDepts":false,
                "showOnPage":true,
                "importMethod":[
                    "excel",
                    "api"
                ],
                "allowRecordLog":false,
                "logFields":[

                ],
                "showBook":false,
                "allowAddSubType":true,
                "dataFilter":false
            }
        },
        {
            "id":"ID_3tlmF6$S1bg",
            "masterId":"djg8LshfUkfM00:044031900111:69872971",
            "useCount":0,
            "totalCount":1,
            "ownerId":null,
            "visibility":{
                "fullVisible":true,
                "staff":[],
                "department":[],
                "role":[]
            },
            "E_system_发票明细_code":"ID_3tlmF6$S1bg",
            "E_system_发票明细_name":"*移动通信设备*荣耀30 Pro+ 8GB+256GB 幻夜黑",
            "E_system_发票明细_单价":{
                "standard":"4423.89",
                "standardUnit":"元",
                "standardScale":2,
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_system_发票明细_数量":"1.00000000",
            "E_system_发票明细_税率":"13%",
            "E_system_发票明细_税额":{
                "standard":"575.11",
                "standardUnit":"元",
                "standardScale":2,
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_system_发票明细_金额":{
                "standard":"4423.89",
                "standardUnit":"元",
                "standardScale":2,
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_system_发票明细_规格型号":"",
            "active":false,
            "entityId":"system_发票明细",
            "entity":{
                "pipeline":1,
                "grayver":"",
                "version":2,
                "active":true,
                "createTime":1531810588185,
                "updateTime":1531810588185,
                "name":"发票明细",
                "nameSpell":"FAPIAOZHUTI",
                "corporationId":"",
                "sourceCorporationId":null,
                "dataCorporationId":null,
                "ledgerIds":null,
                "plannedIds":null,
                "parentId":"",
                "code":"",
                "scoped":false,
                "visibility":{
                    "fullVisible":false,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "type":"DIMENSION",
                "disableStrategy":"LIMIT_COUNT",
                "maxUsageCount":1,
                "writtenOffField":null,
                "fields":[
                    {
                        "name":"E_system_发票明细_name",
                        "label":"名称",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":true,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_code",
                        "label":"编码",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":true,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_税率",
                        "label":"税率",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_单价",
                        "label":"单价",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_金额",
                        "label":"金额",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_税额",
                        "label":"税额",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_数量",
                        "label":"数量",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_车牌号",
                        "label":"车牌号",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_类型",
                        "label":"类型",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票明细_通行日期起",
                        "label":"通行日期起",
                        "type":"date",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        },
                        "withTime":false
                    },
                    {
                        "name":"E_system_发票明细_通行日期止",
                        "label":"通行日期止",
                        "type":"date",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        },
                        "withTime":false
                    }
                ],
                "defaultMappingRuleId":null,
                "filterId":null,
                "id":"system_发票明细",
                "platformId":"system_发票平台",
                "details":null,
                "homePageVisibleIds":null,
                "homeVisibility":{
                    "fullVisible":false,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "exportVisibility":{
                    "fullVisible":false,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "ownerDepts":false,
                "showOnPage":true,
                "importMethod":[
                    "excel",
                    "api"
                ],
                "allowRecordLog":false,
                "logFields":[

                ],
                "showBook":false,
                "allowAddSubType":true,
                "dataFilter":false
            }
        }
    ]
}
```

## 失败响应
当 `invoiceIds` 发票ID传值错误时，返回为空：
```json
{
    "items": []
}
```



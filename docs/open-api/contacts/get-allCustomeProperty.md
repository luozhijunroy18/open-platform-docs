# 获取员工自定义字段

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/staffs/getAllCustomeProperty"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>0.7.140</b></a> -> 🆕 新增了本接口。<br/>
  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	| 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request GET 'http://app.ekuaibao.com/api/openapi/v1/staffs/getAllCustomeProperty?accessToken=ID_3kVvb6B042U' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items": [
        {
            "name": "rankType",    //字段名称
            "label": "职级",       //字段显示名称
            "active": true,        //是否停用
            "canAsDimension": false,
            "ability": "rank",     //所属自定义档案编码
            "dataType": {          //数据类型
                "type": "ref",     //字段类型(text/number/money/date/ref)
                "entity": "basedata.Dimension.职级预置"  //所属自定义档案实体类
            }
        },
        {
            "name": "u_爱好",
            "label": "爱好",
            "active": true,
            "dataType": {
                "type": "text"
            }
        },
        {
            "name": "u_手机",
            "label": "手机",
            "active": true,
            "dataType": {
                "type": "number",
                "scale": 0,
                "unit": ""
            }
        }
    ]
}
```

## 失败响应
```json
{
	"errorCode": 403,
	"errorMessage": "未授权",
	"errorDetails": null,
	"code": null,
	"data": null
}
```
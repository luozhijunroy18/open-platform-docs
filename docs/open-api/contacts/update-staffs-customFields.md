# 修改员工自定义字段(所有平台)

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1.1/staffs/$`staffId`/customFields"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.0.x  </b></a>&nbsp;&nbsp;&nbsp; -> 🆕 新增 “<b>type</b>” 类型参数，支持 ”<b>id</b>“ 或 ”<b>code</b>“ 传参。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>0.7.149</b></a> -> 🆕 新增了本接口。<br/>
  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **IdOrCode** | String | 员工ID或CODE | 必填 | - | **与 `type` 保持一致**，可以通过[获取员工列表](/docs/open-api/corporation/get-all-staffs)获取 | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **type**        | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』和『部门』的 `code` 在系统上允许为空和重复** |


## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **rankType** | String | 职级	    | 非必填 | - | [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) |
| **postType** | String | 岗位	    | 非必填 | - | [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) |
| **base**     | String | 常驻地     | 非必填 | - | 参考格式 : "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]" |
| **u_字段名**  | String | 自定义字段	| 非必填 | - | 自定义字段，格式为"u\_字段名"，例如 : u\_项目|

:::tip
- **若 `type` 参数为 `code` ，则『自定义档案』类型字段，必须传 `code` 值。**
- 员工自定义字段为“**员工基础字段设置**”里面的字段。
  ![image](images/customFields.png)
- `base`（常驻地）参数拼接说明：<br/>
  通过 **[获取城市列表数据](/docs/open-api/basedata/get-basedata-city)** 接口获取数据后，找到对应城市。
  - `id` 对应 `key`
  - `fullName` 对应 `label`

![城市字段拼接示例](images/城市字段拼接示例.png)
:::

## CURL

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/staffs/$xgJ3wajigF25H0:ID_3Be8RKT03bg/customFields?accessToken=ID_3D5RavktZRM:xgJ3wajigF25H0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "rankType":"ID_3D5RavktTRM",     //职级       
    "postType":"ID_3D5RavktVRM",     //岗位
    "u_张国阳001":"ID_3yrzERx1pf0",  //自定义档案类型字段
    "base":"[{\"key\":\"4\",\"label\":\"北京市/西城区\"}]"  //常驻地
}'
```
</TabItem>
<TabItem value="code" label="code">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/staffs/$00005/customFields?accessToken=ID_3D5RavktZRM:xgJ3wajigF25H0&type=code' \
--header 'Content-Type: application/json' \
--data-raw '{
    "rankType":"CODE1",              //职级    
    "postType":"CODE1",              //岗位
    "u_张国阳001":"CODE1",           //自定义档案类型字段
    "base":"[{\"key\":\"4\",\"label\":\"北京市/西城区\"}]"  //常驻地
}'
```
</TabItem>
</Tabs>

## 成功响应
```json
{
    "value": {
        "id": "xgJ3wajigF25H0:ID_3Be8RKT03bg",  //员工ID
        "name": "赵六-改",                      //员工姓名
        "code": "00005",                        //员工工号
        "departments": [                        //所在部门
            "xgJ3wajigF25H0:ID_3zE5G_06Ow0"
        ],
        "defaultDepartment": "xgJ3wajigF25H0:ID_3zE5G_06Ow0",      //默认部门ID
        "cellphone": "17600109458",             //手机号
        "active": true,                         //是否停用
        "userId": "ID_3kpneISgylw",             //第三方ID
        "email": "",                            //邮箱
        "external": false,                      //是否外部人员
        "note": null,                           //备注
        "staffCustomForm": {                    //员工自定义字段集合
            "rankType": "ID_3jO67GBsl3I",       //职级
            "postType": "ID_3pp9B5CUgPg",       //岗位
            "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",  //常驻地
            "u_张国阳001": "ID_3yrzERx1pf0"     //员工自定义字段
        }
    }
}
```

## 失败响应
自定义档案类型字段，所传值不存在时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "字段rankType不合法，没有找到对应的数据",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
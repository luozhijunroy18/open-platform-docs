# 配置出站消息

---
## 定义

- 出站消息：能够自动执行业务流程的一种触发器，以实现自动化传递信息（如通知消息、业务数据等）；
- 订阅事件：相当于触发条件，当满足某种订阅事件时，执行某种行为；
- 行为：当满足某种订阅事件时，执行调用接口传递信息的动作。

---
## 出站消息的触发方式

| 订阅事件 | 满足某种条件 | 触发方式 |
|:--- |:--- |:--- |
| **审批事件**        | 触发配置的审批事件动作<br/> 审批事件类型：【待审批】、【待寄送】、【待收单】、【待支付】、<br/>【被驳回】、【已支付/审批完成】、【催办】、【超时提醒】、<br/>【审批通过（已开通【差旅管理】的用户）】、【抄送】、【评论】、<br/>【被@】、【打印提醒】、【单据撤回】、【待办已处理】| 触发出站消息 |
| **业务对象数据变更** | 新增或修改业务对象数据 | 触发出站消息 |
| **EBot**          | 到达此节点 | 触发出站消息，可触发调用失败后配置 |
| **借款相关**        | 触发配置的还款事件<br/>还款事件类型：【发起手动还款】、【手动还款被确认收款】、<br/>【手动还款驳回】、【还款提醒】 | 触发出站消息 |

---
## 界面交互

### （1）出站消息展示与管理界面

![image](images/ebotManage.png)

---
### （2）新建出站消息界面

![image](images/新建出站消息界面.png)

---
### （3）新建/编辑出站消息--审批事件（审批事件支持多选，但每个事件只能被选择一次）

![image](images/approvalEvent.png)

---
### （4）新建/编辑出站消息--业务对象数据变更

![image](images/datalinkChange.png)

---
### （5）新建/编辑出站消息--EBot（在审批流EBot节点上新建此类型）

![image](images/ebot.png)

---
### （6）新建/编辑出站消息--借款相关

![image](images/loan.png)

---
## 配置说明

出站消息的属性说明：

| 属性 | 说明 |
|:--- |:--- |
| **名称**       | 企业内唯一，20字以内，中文数字字母组合 |
| **描述**       | 出站消息描述信息 |
| **是否启用**    | 是否启用 |
| **配置事件**    | 审批事件、业务对象数据变更、EBot、借款相关 |   
| **调用Url**    | 目标站点的URL | 
| **签名秘钥**    | 由易快报系统签发，用于接口鉴定，不可修改，可以重新分配。<br/>打开「新建出站消息」页面时，自动分配。 | 
| **字段选择**    | 可以从全局字段中选择，例如:【单据ID】、【节点ID】等。<br/>支持的类型参见本文档后半部分。|
| **成功状态码**  | 返回什么样的响应码表示成功，支持多选<br/>【HTTP204】【HTTP200】【HTTP201】|
| **关键字匹配**  | 关键字匹配作为成功状态码的补充条件，默认关闭。<br/>例如：选择了【HTTP200】和关键字“code=1”<br/>则出站接口URL返回为 【HTTP200】且{"code":"1"}时才算作成功。 |
| **重试次数**    | 默认为0次，不重试。<br/>出站消息最多支持重试3次，在返回失败后将按照配置的间隔时间进行等待重试。 |
| **网络间隔时长** | 默认为0秒，可在1-10秒内做选择。<br/>用户设置等待间隔后出站消息失败后不会立即重试，会按照这里的间隔时间进行等待。 |
| **测试并保存**   | 点击「测试并保存」，测试成功后将保存该出站消息。 <br/> 测试时易快报将向出站URL传送示例数据，目标服务器响应配置的成功状态码，例如：204，方认为测试通过。|

---
## 支持字段

目前支持的字段类型有：

| 字段类型 | Body预览示例 | 说明 |
|:--- |:--- |:--- |
| **文本**                |  "字段名": "xxxx" |   |
| **日期**                |  "字段名": 1484498318241 | 毫秒时间戳 |
| **日期范围**             |  "字段名": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;"from": 1484498318241, <br/>&nbsp;&nbsp;&nbsp;&nbsp;"to": 1484498318398 <br/>} | 毫秒时间戳 |
| **数字**                |  "字段名": 23.4   |  |
| **金额**                |  "字段名": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;"currency": "CNY", //本位币币种<br/>&nbsp;&nbsp;&nbsp;&nbsp;"amount": "10.00", //本位币金额<br/>&nbsp;&nbsp;&nbsp;&nbsp;/* 如果金额是本位币，则无下列字段 */<br/>&nbsp;&nbsp;&nbsp;&nbsp;"foreignCurrency": "USD", //外币币种<br/>&nbsp;&nbsp;&nbsp;&nbsp;"foreignAmount": "68.80", //外币金额<br/>&nbsp;&nbsp;&nbsp;&nbsp;"exchangeRate": "6.88" //汇率 = 外币金额 ÷ 本位币金额<br/>} |  |
| **开关**                |  "字段名": true |  |
| **部门/自定义档案**       | "字段名": {&nbsp;&nbsp;&nbsp;&nbsp;//部门、自定义档案<br/>&nbsp;&nbsp;&nbsp;&nbsp;"id": "档案值id",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"path": "AAA/BBB/CCC",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CCC",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"code": "0902"<br/>} |  |
| **人员**                |  "字段名": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;"id": "员工ID", //这里的ID是易快报的员工ID<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "姓名"<br />} |   |
| **自定义扩展业务对象**     | "字段名": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;"id": "x2y34",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "xxxx",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"code": "1234"<br/>} | &#8195; |
| **收款信息_银行卡**       | "字段名": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;"sort": "BANK",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "PERSONAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "杨平",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"nameSpell": "YANGPING",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"cardNo":"6214000123123028888",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"bank":"招商银行",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"province":"江苏省"，<br/>&nbsp;&nbsp;&nbsp;&nbsp;"city":"南京市"，<br/>&nbsp;&nbsp;&nbsp;&nbsp;"branch":"招商银行股份有限公司南京中央路支行"，<br/>&nbsp;&nbsp;&nbsp;&nbsp;"certificateType":"03",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"certificateNo":"134322222343",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"bankLinkNo":"308301006211"<br/>} | 需根据单据中的收款信息ID，联查相关字段 |
| **收款信息_海外账户**     | "字段名": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;"sort": "OVERSEABANK",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "杨平",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "PERSONAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"owner": "INDIVIDUAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"cardNo":"9984000123123028888",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"bankCode":"BankCode001"，<br/>&nbsp;&nbsp;&nbsp;&nbsp;"bankName":"BankName001"，<br/>&nbsp;&nbsp;&nbsp;&nbsp;"nameSpell": "YANGPING",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"swiftCode":"SwiftCode001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"branchCode":"BranchCode001"<br/>} |  |
| **收款信息_支付宝**       | "字段名": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;"sort": "ALIPAY",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "杨平",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "PERSONAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"owner": "INDIVIDUAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"cardNo":"13900001111",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"nameSpell": "YANGPING"} |  |
| **收款信息_其他**         | "字段名": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;"sort": "OTHER",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "杨平",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "PERSONAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"cardNo":"13900001111",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"nameSpell": "YANGPING" <br/>&nbsp;&nbsp;&nbsp;&nbsp;"certificateType":"03",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"certificateNo":"134322222343"<br/>} |  |
| **通知类出站消息类别**	  |  "action": "flow.rejected"   |  注意：通知类出站消息才会有的固定字段，流程中没有。<br/>类别:<br/>&nbsp;&nbsp;&nbsp;&nbsp;flow.rejected 被驳回<br/>&nbsp;&nbsp;&nbsp;&nbsp;freeflow.ticketReserve 审批通过（已开通【差旅管理】的用户）<br/>&nbsp;&nbsp;&nbsp;&nbsp;backlog.sending 待寄送<br/>&nbsp;&nbsp;&nbsp;&nbsp;backlog.receiving 待收单<br/>&nbsp;&nbsp;&nbsp;&nbsp;flow.paid 已支付/审批完成<br/>&nbsp;&nbsp;&nbsp;&nbsp;urgent.remind 加急审批<br/>&nbsp;&nbsp;&nbsp;&nbsp;freeflow.mention 被@<br/>&nbsp;&nbsp;&nbsp;&nbsp;freeflow.print 打印提醒<br/>&nbsp;&nbsp;&nbsp;&nbsp;backlog.paying 待支付<br/>&nbsp;&nbsp;&nbsp;&nbsp;freeflow.comment 评论<br/>&nbsp;&nbsp;&nbsp;&nbsp;backlog.approving 待审批<br/>&nbsp;&nbsp;&nbsp;&nbsp;freeflow.remind 催办<br/>&nbsp;&nbsp;&nbsp;&nbsp;timeout.remind 超时提醒<br/>&nbsp;&nbsp;&nbsp;&nbsp;freeflow.carbonCopy 抄送|
| **通知类出站消息类别名称**  |  "actionName": "被驳回"  | 注意：通知类出站消息才会有的固定字段，流程中没有。 |
| **通知类出站消息消息接收人** |  "userInfo": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;"id": "7hw8MheAgo0g00:I6A8MlHIQM0000",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "张三",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"cellphone": "13111111111",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"email": "123456@163.com"<br/>}&nbsp;&nbsp;&nbsp;&nbsp;| 注意：通知类出站消息才会有的固定字段，流程中没有。 |

---
## 出站消息日志

### （1）审批事件

审批事件消息日志字段如下：

| 字段 | 描述 |
|:--- |:--- |
| **名称**    | 出站消息配置名称 |
| **消息类型** | 出站消息类型，消息通知 |
| **日志类型** | 日志类型，出战消息调用外部服务、外部服务调用出站消息 |
| **单据编号** | 单据编号，右上角搜索框可根据单据编号搜索出站消息日志 |
| **事件名称** | 事件名称取自创建出站消息时的事件名称，如：待审批 |
| **消息状态** | 出站消息调用状态，成功、失败 |
| **时间**    | 出站消息调用时间 |
| **操作**    | 参数：出站消息报文信息，request和response<br/>重试：无论出站消息成功与否，均可点击手动触发一次出站消息 |

![image](images/审批事件.png)

---
### （2）业务对象变更

业务对象变更消息日志字段如下：

| 字段 | 描述 |
|:--- |:--- |
| **名称**       | 出站消息配置名称 |
| **消息类型**    | 出站消息类型，业务对象变更 |
| **日志类型**    | 日志类型，出战消息调用外部服务、外部服务调用出站消息 |
| **业务对象名称** | 业务对象名称，右上角搜索框可根据业务对象名称搜索出站消息日志 |
| **消息状态**    | 出站消息调用状态，成功、失败 |
| **时间**       | 出站消息调用时间 |
| **操作**       | 参数：出站消息报文信息，request和response<br/>重试：无论出站消息成功与否，均可点击手动触发一次出站消息 |

![image](images/业务对象变更.png)

---
### （3）借款事件

借款事件消息日志字段如下：

| 字段 | 描述 |
|:--- |:--- |
| **名称**    | 出站消息配置名称 |
| **消息类型** | 出站消息类型，借款相关 |
| **日志类型** | 日志类型，出战消息调用外部服务、外部服务调用出站消息 |
| **单据编号** | 单据编号，右上角搜索框可根据单据编号搜索出站消息日志 |
| **事件名称** | 事件名称取自创建出站消息时的事件名称，如：发起手动还款 |
| **消息状态** | 出站消息调用状态，成功、失败 |
| **时间**    | 出站消息调用时间 |
| **操作**    | 参数：出站消息报文信息，request和response<br/>重试：无论出站消息成功与否，均可点击手动触发一次出站消息 |

![image](images/借款事件.png)

---
### （4）EBot事件

EBot事件消息日志字段如下：

| 字段 | 描述 |
|:--- |:--- |
| **名称**    | 出站消息配置名称 |
| **消息类型** | 出站消息类型，EBOT事件 |
| **日志类型** | 日志类型，出战消息调用外部服务、外部服务调用出站消息 |
| **单据编号** | 单据编号，右上角搜索框可根据单据编号搜索出站消息日志 |
| **消息状态** | 出站消息调用状态，成功、失败 |
| **时间**    | 出站消息调用时间 |
| **操作**    | 参数：出站消息报文信息，request和response<br/>重试：无论出站消息成功与否，均可点击手动触发一次出站消息 |

![image](images/EBot事件.png)

---
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97323],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(n),u=r,f=s["".concat(d,".").concat(u)]||s[u]||c[u]||l;return n?a.createElement(f,i(i({ref:e},m),{},{components:n})):a.createElement(f,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41627:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,n=t.url,l=t.description;return a.createElement("div",{className:r.control+" "+r[e]},a.createElement("span",{className:r.method},e),a.createElement("strong",null,n),l&&a.createElement("small",null,l))}},21404:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(41627),o=["components"],d={},p="\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u5217\u8868",m={unversionedId:"open-api/datalink/get-entity-info",id:"version-v2.1/open-api/datalink/get-entity-info",title:"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u5217\u8868",description:"<Control",source:"@site/versioned_docs/version-v2.1/open-api/datalink/get-entity-info.md",sourceDirName:"open-api/datalink",slug:"/open-api/datalink/get-entity-info",permalink:"/docs/open-api/datalink/get-entity-info",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/datalink/get-entity-info.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61\u8d4b\u503c\u89c4\u5219",permalink:"/docs/open-api/datalink/field-mapping"},next:{title:"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u4fe1\u606f",permalink:"/docs/open-api/datalink-extend/get-entity-object"}},c=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],s={toc:c};function u(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u5217\u8868"},"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u5217\u8868"),(0,l.kt)(i.Z,{method:"GET",url:"/api/openapi/v2/datalink",mdxType:"Control"}),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"entityId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u5bf9\u8c61ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/datalink/get-entity-list"},"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61"),"\u63a5\u53e3\u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"start")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5f00\u59cb\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5f00\u59cb\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"count")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u9875\u603b\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"td"},"1000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"startDate")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6309\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b ",(0,l.kt)("strong",{parentName:"td"},"\u66f4\u65b0\u65f6\u95f4")," \u67e5\u8be2\uff0c\u683c\u5f0f\uff1ayyyy-MM-dd HH:mm:ss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"endDate")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u7ed3\u675f\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6309\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b ",(0,l.kt)("strong",{parentName:"td"},"\u66f4\u65b0\u65f6\u95f4")," \u67e5\u8be2\uff0c\u683c\u5f0f\uff1ayyyy-MM-dd HH:mm:ss")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u8fd4\u56de ",(0,l.kt)("strong",{parentName:"li"},"\u672a\u505c\u7528")," \u7684\u4e1a\u52a1\u5bf9\u8c61\uff0c\u5982\u679c\u4e1a\u52a1\u5bf9\u8c61\u5df2\u505c\u7528\uff0c\u5219\u4e0d\u8fd4\u56de\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"startDate")," \u67e5\u8be2\u89c4\u5219\u662f\u201d\u5927\u4e8e\u7b49\u4e8e\u201c\uff0c ",(0,l.kt)("inlineCode",{parentName:"li"},"endDate")," \u67e5\u8be2\u89c4\u5219\u662f\u201c\u5c0f\u4e8e\u7b49\u4e8e\u201d\uff08\u201d\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233\u201c\u4e0e\u201c\u65e5\u671f\u201d\u8f6c\u6362\u7684\u5f71\u54cd\uff0c\u5bfc\u81f4\u53d6\u503c\u7ed3\u679c\u5f80\u5f80\u662f\u201d\u5c0f\u4e8e\u201c\uff0c\u6ca1\u6709\u7b49\u4e8e\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"start=0&count=10")," \u4ee3\u8868\u6bcf\u987510\u6761\u6570\u636e\uff0c\u7b2c\u4e00\u9875\u6570\u636e\u5f00\u59cb\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"start = 0")," \u5f00\u59cb\uff0c\u5219\u7b2c\u4e8c\u9875\u6570\u636e\u5f00\u59cb\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"start = 10"),"\u3002")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/datalink?accessToken=cxEbrzNJSA3A00&entityId=26d60b5d6dd47f435000&count=10&start=0'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 2,                                //\u603b\u8bb0\u5f55\u6570\n    "items": [\n        {\n            "id": "smcbSWavrE2c00",            //\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8bID\n            "version": 3,                      //\u7248\u672c\u53f7\n            "active": true,                    //\u662f\u5426\u542f\u7528\n            "createTime": 1604995509639,\n            "updateTime": 1604995509639,\n            "name": "\u5317\u4eac",                     //\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u540d\u79f0\n            "nameSpell": "BEIJING",             //\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u540d\u79f0\u5927\u5199\n            "code": "110",                      //\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u7f16\u7801\n            "corporationId": "joQbMsJBw01c00",  //\u4f01\u4e1aID\n            "form": {                           //\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u53c2\u6570\u8868\u5355\u6570\u636e\n                "E_8c500bdb8c4de2404000_pen": "joQbMsJBw01c00:FHMbOsCZegmw00",            //\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u5458\u5de5\u53c2\u6570\n                "E_8c500bdb8c4de2404000_city": "[{\\"key\\":\\"497\\",\\"label\\":\\"\u6c88\u9633\u5e02\\"}]", //\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u57ce\u5e02\u53c2\u6570\n                "E_8c500bdb8c4de2404000_code": "110",           //\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u7f16\u7801\u53c2\u6570\n                "E_8c500bdb8c4de2404000_name": "\u5317\u4eac",          //\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u6587\u672c\u53c2\u6570\n                "E_8c500bdb8c4de2404000_time": 1604937600000,   //\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u65f6\u95f4\u53c2\u6570\n                "E_8c500bdb8c4de2404000_money": {               //\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u91d1\u989d\u53c2\u6570\n                    "standard": "99.00",\n                    "standardUnit": "\u5143",\n                    "standardScale": 2,\n                    "standardSymbol": "\xa5",\n                    "standardNumCode": "156",\n                    "standardStrCode": "CNY"\n                }\n            },\n            "ledgerAmount": null,\n            "ledgerAmountModel": null,\n            "totalCount": 0,           //\u603b\u6570\u91cf\n            "useCount": 0,             //\u7528\u6237\u6570\u91cf\n            "entityId": "8c500bdb8c4de2404000",  //\u4e1a\u52a1\u5bf9\u8c61ID\n            "platformId": "66wbMPbmLwsE00", \n            "source": "EXCEL",         //\u6765\u6e90\n            "masterId": null, \n            "index": 0, \n            "visibility": {            //\u201c\u53c2\u4e0e\u4eba\u201d\u914d\u7f6e\n                "fullVisible": true,\n                "staffs": null,        //\u53c2\u4e0e\u4ebaID\n                "roles": null,         //\u89d2\u8272ID\n                "departments": null,   //\u90e8\u95e8ID\n                "departmentsIncludeChildren": true\n            },\n            "visible": true,           //\u662f\u5426\u5168\u90e8\u4eba\u5458\u53ef\u89c1\n            "ownerId": "",             //\u201c\u8d1f\u8d23\u4eba\u201dID\n            "operatorId": "joQbMsJBw01c00:gwUbMbLvg4pA00",  //\u64cd\u4f5c\u4ebaID\n            "sourceId": "",            //\u6765\u6e90ID\n            "flowCounts": {} \n        },\n        {\n            "id": "soobSWavrE2g00",\n            "version": 3,\n            "active": true,\n            "createTime": 1604995509693,\n            "updateTime": 1604995509693,\n            "name": "\u4e0a\u6d77",\n            "nameSpell": "SHANGHAI",\n            "code": "120",\n            "corporationId": "joQbMsJBw01c00",\n            "form": {\n                "E_8c500bdb8c4de2404000_pen": "joQbMsJBw01c00:gwUbMbLvg4pA00",\n                "E_8c500bdb8c4de2404000_city": "[{\\"key\\":\\"2147\\",\\"label\\":\\"\u6df1\u5733\u5e02\\"}]",\n                "E_8c500bdb8c4de2404000_code": "120",\n                "E_8c500bdb8c4de2404000_name": "\u4e0a\u6d77",\n                "E_8c500bdb8c4de2404000_time": 1604937600000,\n                "E_8c500bdb8c4de2404000_money": {\n                    "standard": "88.00",\n                    "standardUnit": "\u5143",\n                    "standardScale": 2,\n                    "standardSymbol": "\xa5",\n                    "standardNumCode": "156",\n                    "standardStrCode": "CNY"\n                }\n            },\n            "ledgerAmount": null,\n            "ledgerAmountModel": null,\n            "totalCount": 0,\n            "useCount": 0,\n            "entityId": "8c500bdb8c4de2404000",\n            "platformId": "66wbMPbmLwsE00",\n            "source": "EXCEL",\n            "masterId": null,\n            "index": 0,\n            "visibility": {\n                "fullVisible": true,\n                "staffs": null,\n                "roles": null,\n                "departments": null,\n                "departmentsIncludeChildren": true\n            },\n            "visible": true,\n            "ownerId": "",\n            "operatorId": "joQbMsJBw01c00:gwUbMbLvg4pA00",\n            "sourceId": "",\n            "flowCounts": {}\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("p",null,"\u8bf7\u786e\u4fdd ",(0,l.kt)("inlineCode",{parentName:"p"},"entityId"),"\uff08\u4e1a\u52a1\u5bf9\u8c61ID\uff09\u771f\u5b9e\u5b58\u5728\uff0c\u5426\u5219\u4f1a\u8fd4\u56de\u5982\u4e0b\u54cd\u5e94\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "26d60b5d6dd47f4350100 \u5bf9\u5e94\u7684\u4e1a\u52a1\u5bf9\u8c61\u4e0d\u5b58\u5728",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9812],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=d(n),s=r,u=k["".concat(p,".").concat(s)]||k[s]||c[s]||l;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(e){var t=e.method,n=e.url,l=e.description;return a.createElement("div",{className:r.control+" "+r[t]},a.createElement("span",{className:r.method},t),a.createElement("strong",null,n),l&&a.createElement("small",null,l))}},50212:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(41627),o=["components"],p={},d="\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u4fe1\u606f",m={unversionedId:"open-api/datalink-extend/get-entity-object",id:"version-v2.0/open-api/datalink-extend/get-entity-object",title:"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u4fe1\u606f",description:"\u6839\u636e\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u7684 id \u6216\u8005 code \u67e5\u8be2\u5bf9\u5e94\u6570\u636e\u3002",source:"@site/versioned_docs/version-v2.0/open-api/datalink-extend/get-entity-object.md",sourceDirName:"open-api/datalink-extend",slug:"/open-api/datalink-extend/get-entity-object",permalink:"/docs/v2.0/open-api/datalink-extend/get-entity-object",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/datalink-extend/get-entity-object.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/v2.0/open-api/datalink-extend/introduce"},next:{title:"\u6839\u636e\u5355\u636e\u7f16\u53f7\u6216\u5355\u636eID\u67e5\u8be2\u53d1\u7968ID\u548c\u5176\u660e\u7ec6ID",permalink:"/docs/v2.0/open-api/datalink-extend/get-flow-invoice"}},c=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters\uff08Body\u4e0d\u80fd\u4e3a\u7a7a\uff09",id:"body-parametersbody\u4e0d\u80fd\u4e3a\u7a7a",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],k={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u4fe1\u606f"},"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u4fe1\u606f"),(0,l.kt)("p",null,"\u6839\u636e\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"code")," \u67e5\u8be2\u5bf9\u5e94\u6570\u636e\u3002"),(0,l.kt)(i.Z,{method:"POST",url:"/api/openapi/v2/extension/DATA_LINK/object/`entityId`/search",mdxType:"Control"}),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"entityId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u5bf9\u8c61ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/datalink/get-entity-list"},"\u83b7\u53d6\u4e1a\u52a1\u5bf9\u8c61"))))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"body-parametersbody\u4e0d\u80fd\u4e3a\u7a7a"},"Body Parameters\uff08Body\u4e0d\u80fd\u4e3a\u7a7a\uff09"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"ids")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6309\u7167\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u7684id\u67e5\u8be2\u8be6\u60c5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8bid\u6570\u7ec4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"codes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6309\u7167\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u7684code\u67e5\u8be2\u8be6\u60c5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8bcode\u6570\u7ec4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"index")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u9875"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u9875")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"count")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u9875\u67e5\u8be2\u6570\u636e\u91cf\uff0c\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"td"},"1000"))))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570\u4f18\u5148\u7ea7 ",(0,l.kt)("inlineCode",{parentName:"li"},"ids")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"codes")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"index")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"count")," \uff0c\u591a\u7ec4\u53c2\u6570\u5747\u4f20\u503c\u65f6\uff0c\u6309\u4f18\u5148\u7ea7\u6700\u9ad8\u7684\u5f00\u59cb\u751f\u6548\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ids")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"li"},"codes")," \u53c2\u6570\uff0c\u53ef\u4ee5\u4e3a\u7a7a\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"\uff0c\u4f46\u662f\u4e0d\u53ef\u4f20",(0,l.kt)("inlineCode",{parentName:"li"},"[null]"),"\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ids")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"li"},"codes")," \u53c2\u6570\uff0c\u63a5\u53e3\u6ca1\u6709\u6821\u9a8c\u53c2\u6570\u662f\u5426\u5728\u7cfb\u7edf\u4e2d\u5b58\u5728\uff0c\u83b7\u53d6\u4e0d\u5230\u6570\u636e\u65f6\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u7684\u51c6\u786e\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ids")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"li"},"codes")," \u4e0d\u586b\u65f6\uff0c ",(0,l.kt)("inlineCode",{parentName:"li"},"index")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"count")," \u4e24\u4e2a\u53c2\u6570\u5fc5\u586b\uff0c\u53ea\u8981\u4f20\u4e86index\u548ccount\u53c2\u6570\uff0c\u6210\u529f\u54cd\u5e94\u4e2d\u7684\u201ccount\u201d\u8868\u793a\u603b\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"count")," \u4e0d\u586b\u65f6\uff0c ",(0,l.kt)("inlineCode",{parentName:"li"},"ids")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"codes")," \u53c2\u6570\u5fc5\u586b\uff0c\u4efb\u610f\u586b\u5199\u5176\u4e00\u65f6\uff0c\u6210\u529f\u54cd\u5e94\u4e2d\u7684\u201ccount\u201d\u8868\u793a\u6709\u6548\u53c2\u6570\u91cf\uff0c\u800c\u975e\u603b\u6570\u3002")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request POST \'https://app.ekuaibao.com/api/openapi/v2/extension/DATA_LINK/object/b41a0b811ce2ef06ac00/search?accessToken=6QMbyAcpng8I00\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'\n{\n    "index":1,\n    "count":10,\n    "ids":["6BQbyAlofQsA00"],\n    "codes":[]\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 1, //\u5bf9\u8c61\u6570\u91cf\n    "items": [  //\u5bf9\u8c61\u4fe1\u606f\n        {\n            "id": "6BQbyAlofQsA00",   //\u4e1a\u52a1\u5bf9\u8c61ID\n            "ownerId": {  //\u8d1f\u8d23\u4eba\u4fe1\u606f\n                "version": 3, //\u7248\u672c\n                "active": true, //\u662f\u5426\u6709\u6548\n                "createTime": 1597050351322,\n                "updateTime": 1597050351322,\n                "nameSpell": "GONGHENG",\n                "code": "1001", //\u7f16\u7801\n                "corporationId": "JOYbpjPP-E2Q00", //\u4f01\u4e1aID\n                "userId": "y8gbpjP9OsnI00", //\u7528\u6237ID\n                "id": "JOYbpjPP-E2Q00:y8gbpjP9OsnI00", //\u5458\u5de5ID\n                "name": "\u4e00\u53f7\u5458\u5de5", //\u5458\u5de5\u540d\u79f0\n                "avatar": "",   \n                "email": "",\n                "cellphone": "18603000749", //\u624b\u673a\u53f7\n                "note": null,\n                "departments": [ //\u90e8\u95e8\n                    "JOYbpjPP-E2Q00"\n                ],\n                "defaultDepartment": "JOYbpjPP-E2Q00", //\u9ed8\u8ba4\u90e8\u95e8\n                "external": false,\n                "order": null\n            },\n            "visibility": { // \u53ef\u89c1\u8303\u56f4\n                "fullVisible": true, //\u662f\u5426\u5168\u90e8\u53ef\u89c1  true=\u5168\u90e8\uff0c false=\u90e8\u5206\u4eba\u5458\n                "staff": [], //\u5458\u5de5\u767d\u540d\u5355\n                "department": [], //\u90e8\u95e8\u767d\u540d\u5355\n                "role": [] //\u89d2\u8272\u767d\u540d\u5355\n            },\n            "useCount": 0,\n            "totalCount": 0,\n            "active": true, //\u662f\u5426\u505c\u7528\n            "entityId": "b41a0b811ce2ef06ac00",\n            "E_b41a0b811ce2ef06ac00_code": "900925", //\u5bf9\u8c61\u7f16\u7801\n            "E_b41a0b811ce2ef06ac00_name": "\u5317\u4eac\u5408\u601d\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8", //\u5bf9\u8c61\u540d\u79f0\n            "ledgers": [],\n            "plans": []\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "\u672a\u627e\u5230\u5bf9\u5e94\u7684\u4e1a\u52a1\u5bf9\u8c61",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}s.isMDXComponent=!0}}]);
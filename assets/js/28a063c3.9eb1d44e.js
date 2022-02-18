"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55392],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),d=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),u=n,f=s["".concat(i,".").concat(u)]||s[u]||c[u]||l;return a?r.createElement(f,p(p({ref:e},m),{},{components:a})):r.createElement(f,p({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var d=2;d<l;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},41627:function(t,e,a){a.d(e,{Z:function(){return l}});var r=a(67294),n={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,a=t.url,l=t.description;return r.createElement("div",{className:n.control+" "+n[e]},r.createElement("span",{className:n.method},e),r.createElement("strong",null,a),l&&r.createElement("small",null,l))}},78011:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),p=a(41627),o=["components"],i={},d="\u4fee\u6539\u90e8\u95e8\u4fe1\u606f",m={unversionedId:"open-api/contacts/update-departments",id:"version-v2.0/open-api/contacts/update-departments",title:"\u4fee\u6539\u90e8\u95e8\u4fe1\u606f",description:"<Control",source:"@site/versioned_docs/version-v2.0/open-api/contacts/update-departments.md",sourceDirName:"open-api/contacts",slug:"/open-api/contacts/update-departments",permalink:"/docs/v2.0/open-api/contacts/update-departments",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/contacts/update-departments.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6279\u91cf\u65b0\u589e\u90e8\u95e8",permalink:"/docs/v2.0/open-api/contacts/batch-add-departments"},next:{title:"\u6839\u636e\u90e8\u95e8ID\u6216\u7f16\u7801\u83b7\u53d6\u90e8\u95e8\u4fe1\u606f",permalink:"/docs/v2.0/open-api/contacts/get-departments-idOrCode"}},c=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],s={toc:c};function u(t){var e=t.components,a=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4fee\u6539\u90e8\u95e8\u4fe1\u606f"},"\u4fee\u6539\u90e8\u95e8\u4fe1\u606f"),(0,l.kt)(p.Z,{method:"PUT",url:"/api/openapi/v1/departments/update/$`departmentId`",mdxType:"Control"}),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"departmentId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-departments"},"\u83b7\u53d6\u90e8\u95e8\u5217\u8868"),"\u83b7\u53d6")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u7f16\u7801"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4f20 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'),"\uff0c\u4e0d\u53ef\u4f20\u91cd\u590d\u7684\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u53ef\u4f20 ",(0,l.kt)("inlineCode",{parentName:"td"},'""'),"\uff0c\u4e0d\u53ef\u4f20\u91cd\u590d\u7684\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"parentId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u7ea7\u90e8\u95e8ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6839\u90e8\u95e8\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"order")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6392\u5e8f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"code\u4e3a\u7a7a\uff0corder\u76f8\u540c\u65f6\uff0c\u6309\u521b\u5efa\u65f6\u95f4\u6392\u5e8f",(0,l.kt)("br",null),"code\u4e3a\u7a7a\uff0corder\u4e0d\u540c\u65f6\uff0c\u6309order\u6392\u5e8f",(0,l.kt)("br",null),"code\u4e0d\u4e3a\u7a7a\u65f6\uff0c\u6309code\u6392\u5e8f")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request PUT \'https://app.ekuaibao.com/api/openapi/v1/departments/update/$PCx3rwm3aA00qM:ID_3rLjlEB0zrg?accessToken=ID_3rMfodi0LOM:PCx3rwm3aA00qM\' \\\n--header \'content-type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data-raw \'{\n    "code": "00301",\n    "name": "\u6d4b\u8bd5\u4e8b\u4e1a\u90e81",\n    "parentId": "PCx3rwm3aA00qM:ID_3rLjlEB09rg",\n    "order": 0\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "id": "PCx3rwm3aA00qM:ID_3rLjlEB0zrg",        // \u90e8\u95e8ID\n        "name": "\u6d4b\u8bd5\u4e8b\u4e1a\u90e81",                         // \u90e8\u95e8\u540d\u79f0\n        "parentId": "PCx3rwm3aA00qM:ID_3rLjlEB09rg",  // \u4e0a\u7ea7\u90e8\u95e8ID\n        "active": true,                               // \u662f\u5426\u505c\u7528\n        "code": "00301",                              // \u90e8\u95e8\u7f16\u7801\n        "form": {                                     //\u90e8\u95e8\u5173\u8054\u6cd5\u4eba\u5b9e\u4f53id\u548c\u6210\u672c\u4e2d\u5fc3id\n            "costCenter": "cc0dbcd46cf6d0444c00",     //\u6210\u672c\u4e2d\u5fc3ID\n            "legalEntity": "ID_3rPkrfrfv4M"           //\u6cd5\u4eba\u5b9e\u4f53ID\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "\u672a\u627e\u5230\u5bf9\u5e94\u90e8\u95e8",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}u.isMDXComponent=!0}}]);
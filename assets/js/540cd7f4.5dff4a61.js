"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80295],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(f,p(p({ref:t},m),{},{components:n})):r.createElement(f,p({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},o=function(e){var t=e.method,n=e.url,o=e.description;return r.createElement("div",{className:a.control+" "+a[t]},r.createElement("span",{className:a.method},t),r.createElement("strong",null,n),o&&r.createElement("small",null,o))}},86607:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),p=n(41627),l=["components"],i={},c="\u6839\u636e\u90e8\u95e8\u8def\u5f84\u83b7\u53d6\u90e8\u95e8\u4fe1\u606f",m={unversionedId:"open-api/contacts/get-department-byPath",id:"version-v2.0/open-api/contacts/get-department-byPath",title:"\u6839\u636e\u90e8\u95e8\u8def\u5f84\u83b7\u53d6\u90e8\u95e8\u4fe1\u606f",description:"<Control",source:"@site/versioned_docs/version-v2.0/open-api/contacts/get-department-byPath.md",sourceDirName:"open-api/contacts",slug:"/open-api/contacts/get-department-byPath",permalink:"/docs/v2.0/open-api/contacts/get-department-byPath",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/contacts/get-department-byPath.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6839\u636e\u90e8\u95e8\u540d\u79f0\u83b7\u53d6\u90e8\u95e8\u4fe1\u606f",permalink:"/docs/v2.0/open-api/contacts/get-department-byName"},next:{title:"\u505c\u542f\u7528\u90e8\u95e8",permalink:"/docs/v2.0/open-api/contacts/active-departments"}},s=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6839\u636e\u90e8\u95e8\u8def\u5f84\u83b7\u53d6\u90e8\u95e8\u4fe1\u606f"},"\u6839\u636e\u90e8\u95e8\u8def\u5f84\u83b7\u53d6\u90e8\u95e8\u4fe1\u606f"),(0,o.kt)(p.Z,{method:"GET",url:"/api/openapi/v1/departments/getDepartmentByPath",mdxType:"Control"}),(0,o.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"accessToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"path")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u8def\u5f84"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u540d\u79f0\u5168\u8def\u5f84\uff0c\u4f8b\u5982\u201c\u603b\u516c\u53f8/\u8d22\u52a1\u90e8\u201d")))),(0,o.kt)("h2",{id:"curl"},"CURL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/departments/getDepartmentByPath?accessToken=z0wbwXPo6sf400&path=%E8%B4%A2%E5%8A%A1%E9%83%A8' \\\n--header 'content-type: application/json' \\\n--header 'Accept: application/json'\n")),(0,o.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n      "value": {\n            "id": "JOYbpjPP-E2Q00:pAwbwH_W7sec00", //\u90e8\u95e8ID\n            "name": "\u8d22\u52a1\u90e8",                      //\u90e8\u95e8\u540d\u79f0\n            "parentId": "JOYbpjPP-E2Q00",         //\u4e0a\u7ea7\u90e8\u95e8ID\n            "active": true,                       //\u662f\u5426\u542f\u7528\n            "code": "1003",                       //\u90e8\u95e8\u7f16\u7801\n            "form":{                              //\u90e8\u95e8\u5173\u8054\u6cd5\u4eba\u5b9e\u4f53ID\u548c\u6210\u672c\u4e2d\u5fc3ID\n                "costCenter":"NzMcynfBJ43M00",    //\u6210\u672c\u4e2d\u5fc3ID\n                "legalEntity":"11YcypdGzoEo00"    //\u6cd5\u4eba\u5b9e\u4f53ID\n            }\n      }\n}\n')))}d.isMDXComponent=!0}}]);
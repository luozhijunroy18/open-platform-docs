"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68344],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41627:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},o=function(e){var t=e.method,n=e.url,o=e.description;return a.createElement("div",{className:r.control+" "+r[t]},a.createElement("span",{className:r.method},t),a.createElement("strong",null,n),o&&a.createElement("small",null,o))}},37526:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(41627),i=["components"],p={},c="\u83b7\u53d6\u5df2\u6fc0\u6d3b\u5458\u5de5\u5217\u8868",s={unversionedId:"open-api/corporation/get-all-auth-staffs",id:"version-v2.1/open-api/corporation/get-all-auth-staffs",title:"\u83b7\u53d6\u5df2\u6fc0\u6d3b\u5458\u5de5\u5217\u8868",description:"<Control",source:"@site/versioned_docs/version-v2.1/open-api/corporation/get-all-auth-staffs.md",sourceDirName:"open-api/corporation",slug:"/open-api/corporation/get-all-auth-staffs",permalink:"/docs/open-api/corporation/get-all-auth-staffs",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/corporation/get-all-auth-staffs.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u5458\u5de5\u5217\u8868",permalink:"/docs/open-api/corporation/get-all-staffs"},next:{title:"\u67e5\u8be2\u5458\u5de5",permalink:"/docs/open-api/corporation/get-staff-ids"}},m=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],u={toc:m};function d(e){var t=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u83b7\u53d6\u5df2\u6fc0\u6d3b\u5458\u5de5\u5217\u8868"},"\u83b7\u53d6\u5df2\u6fc0\u6d3b\u5458\u5de5\u5217\u8868"),(0,o.kt)(l.Z,{method:"GET",url:"/api/openapi/v1/staffs/authorized",mdxType:"Control"}),(0,o.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"accessToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"start")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5206\u9875\u67e5\u8be2\u7684\u8d77\u59cb\u5e8f\u53f7"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5206\u9875\u7684\u8d77\u59cb\u503c\u662f\u4ece ",(0,o.kt)("inlineCode",{parentName:"td"},"0")," \u5f00\u59cb\uff0c \u800c\u4e0d\u662f\u4f20\u7edf\u7684 ",(0,o.kt)("inlineCode",{parentName:"td"},"1")," \u5f00\u59cb")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"count")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u6570\u636e\u6761\u6570"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"td"},"1000"))))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u4e0a\u83b7\u53d6\u5df2\u6fc0\u6d3b\u7684\u5458\u5de5\u4eba\u6570\u9875\u9762\u5982\u4e0b\uff1a\n",(0,o.kt)("img",{alt:"image",src:n(20235).Z}))))),(0,o.kt)("h2",{id:"curl"},"CURL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/staffs/authorized?accessToken=ID_3v7kdsVUWhg:djg8LshfUkfM00&start=0&count=100'\n")),(0,o.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 14,  //\u5df2\u6fc0\u6d3b\u5458\u5de5\u603b\u6570\n    "items": [    //\u5df2\u6fc0\u6d3b\u5458\u5de5\u4fe1\u606f\n        {\n            "id": "PCx3rwm3aA00qM:ID_3rAZNCY2V$g",\n            "name": "\u674e\u56db",\n            "code": "",\n            "departments": [\n              "PCx3rwm3aA00qM:ID_3rw$2RXc5lM"\n            ],\n            "defaultDepartment": "PCx3rwm3aA00qM:ID_3rw$2RXc5lM",\n            "cellphone": "",\n            "active": true,\n            "userId": "ID_3rAZNCY2U$g",\n            "email": "17777777777@163.com",\n            "external": false,\n            "note": "notea",\n            "staffCustomForm": {\n              "base": "[{\\"key\\":\\"7370\\",\\"label\\":\\"\u5c71\u897f\u7701/\u957f\u6cbb/\u4e0a\u515a\u533a\\"}]",\n              "u_\u6570\u5b57\u5b57\u6bb5": "1"\n            }\n        },\n        {\n            "id": "PCx3rwm3aA00qM:ID_3rAZNCY2X$g",\n            "name": "\u738b\u4e94",\n            "code": "00008",\n            "departments": [\n              "PCx3rwm3aA00qM:ID_3rw$2RXc5lM"\n            ],\n            "defaultDepartment": "PCx3rwm3aA00qM:ID_3rw$2RXc5lM",\n            "cellphone": "18888888888",\n            "active": true,\n            "userId": "ID_3rAZNCY2W$g",\n            "email": "18888888888@163.com",\n            "external": false,\n            "note": null,\n            "staffCustomForm": {\n              "u_\u7231\u597d": ""\n            }\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"start")," \u4f20\u53c2\u5927\u4e8e\u7b49\u4e8e\u5b9e\u9645\u5458\u5de5\u603b\u6570\u636e\u91cf\u65f6\uff0c\u4f1a\u5f97\u5230\u5982\u4e0b\u54cd\u5e94\uff0c\u53ea\u663e\u793a\u603b\u6570\u636e\u91cf \u201ccount\u201c\uff0c\u4e0d\u663e\u793a\u5458\u5de5\u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 2,\n    "items": []\n}\n')),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"accessToken")," \u5931\u6548\u65f6\uff0c\u5f97\u5230\u5982\u4e0b\u56de\u5e94\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 403,\n    "errorMessage": "\u672a\u6388\u6743",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}d.isMDXComponent=!0},20235:function(e,t,n){t.Z=n.p+"assets/images/\u83b7\u53d6\u6fc0\u6d3b\u5458\u5de5\u4eba\u6570-a5e62b49030511a2d6ce45283f349622.png"}}]);
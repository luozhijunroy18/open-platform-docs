"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38515],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return s}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),c=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=c(a),s=n,f=m["".concat(o,".").concat(s)]||m[s]||d[s]||l;return a?r.createElement(f,i(i({ref:e},u),{},{components:a})):r.createElement(f,i({ref:e},u))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},41627:function(t,e,a){a.d(e,{Z:function(){return l}});var r=a(67294),n={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,a=t.url,l=t.description;return r.createElement("div",{className:n.control+" "+n[e]},r.createElement("span",{className:n.method},e),r.createElement("strong",null,a),l&&r.createElement("small",null,l))}},99835:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=a(41627),p=["components"],o={},c="\u542f\u7528/\u505c\u7528\u57ce\u5e02\u7ec4",u={unversionedId:"open-api/city/update-city-group-status",id:"open-api/city/update-city-group-status",title:"\u542f\u7528/\u505c\u7528\u57ce\u5e02\u7ec4",description:"<Control",source:"@site/docs/open-api/city/update-city-group-status.md",sourceDirName:"open-api/city",slug:"/open-api/city/update-city-group-status",permalink:"/docs/next/open-api/city/update-city-group-status",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/docs/open-api/city/update-city-group-status.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u57ce\u5e02\u7ec4",permalink:"/docs/next/open-api/city/update-city-group"},next:{title:"\u83b7\u53d6\u57ce\u5e02\u7ec4\u8be6\u60c5",permalink:"/docs/next/open-api/city/get-city-group-details"}},d=[{value:"Path Parameters",id:"path-parameters",children:[],level:2},{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],m={toc:d};function s(t){var e=t.components,a=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u542f\u7528\u505c\u7528\u57ce\u5e02\u7ec4"},"\u542f\u7528/\u505c\u7528\u57ce\u5e02\u7ec4"),(0,l.kt)(i.Z,{method:"PUT",url:"/api/openapi/v1/cityGroup/updateStatus/$`id`",mdxType:"Control"}),(0,l.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u57ce\u5e02\u7ec4ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/city/get-city-group"},"\u83b7\u53d6\u57ce\u5e02\u7ec4\u5217\u8868"),"\u83b7\u53d6")))),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u57ce\u5e02\u7ec4\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," : \u542f\u7528 ","\u2003"," ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," : \u505c\u7528")))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"curl --location --request PUT 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/updateStatus/$wC0cPu1DNY1400?accessToken=FsYc5j4FlclU00' \\\n--header 'content-type: application/json' \\\n--header 'Accept: application/json' \\\n--data-raw '{\n    \"status\": false\n}'\n")),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "success": true,\n        "message": ""\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\uff08\u57ce\u5e02\u7ec4ID\uff09\u4e0d\u6b63\u786e\u65f6\uff0c\u62a5\u9519\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 400,\n    "errorMessage": "ID_3wAjiZJ1h8M1\u6570\u636e\u4e0d\u5b58\u5728",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91091],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return f}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=d(a),f=r,N=c["".concat(o,".").concat(f)]||c[f]||k[f]||l;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},41627:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(67294),r={control:"control_gbTU",POST:"POST_UHEp",GET:"GET_iFDY",PUT:"PUT_yRhZ",DELETE:"DELETE_tpQ+",method:"method_r7kj"},l=function(t){var e=t.method,a=t.url,l=t.description;return n.createElement("div",{className:r.control+" "+r[e]},n.createElement("span",{className:r.method},e),n.createElement("strong",null,a),l&&n.createElement("small",null,l))}},49002:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return k},default:function(){return f}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(41627),p=["components"],o={},d="\u521b\u5efa\u81ea\u5efa\u5e94\u7528(\u81ea\u5b9a\u4e49\u6269\u5c55)",m={unversionedId:"open-api/datalink/create-platform",id:"version-v2.1/open-api/datalink/create-platform",title:"\u521b\u5efa\u81ea\u5efa\u5e94\u7528(\u81ea\u5b9a\u4e49\u6269\u5c55)",description:"<Control",source:"@site/versioned_docs/version-v2.1/open-api/datalink/create-platform.md",sourceDirName:"open-api/datalink",slug:"/open-api/datalink/create-platform",permalink:"/docs/open-api/datalink/create-platform",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.1/open-api/datalink/create-platform.md",tags:[],version:"v2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/open-api/datalink/introduce"},next:{title:"\u6839\u636e\u540d\u79f0\u67e5\u8be2\u81ea\u5efa\u5e94\u7528",permalink:"/docs/open-api/datalink/get-entity-by-name"}},k=[{value:"Query Parameters",id:"query-parameters",children:[],level:2},{value:"Body Parameters",id:"body-parameters",children:[],level:2},{value:"CURL",id:"curl",children:[],level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",children:[],level:2},{value:"\u5931\u8d25\u54cd\u5e94",id:"\u5931\u8d25\u54cd\u5e94",children:[],level:2}],c={toc:k};function f(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u521b\u5efa\u81ea\u5efa\u5e94\u7528\u81ea\u5b9a\u4e49\u6269\u5c55"},"\u521b\u5efa\u81ea\u5efa\u5e94\u7528(\u81ea\u5b9a\u4e49\u6269\u5c55)"),(0,l.kt)(i.Z,{method:"PUT",url:"/api/openapi/v2/datalink/createPlatform",mdxType:"Control"}),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"accessToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/getting-started/auth"},"\u901a\u8fc7\u6388\u6743\u63a5\u53e3\u83b7\u53d6"))))),(0,l.kt)("h2",{id:"body-parameters"},"Body Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u80fd\u8d85\u8fc720\u4e2a\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"icon")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u56fe\u6807"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5df2\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u56fe\u6807\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f key")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6587\u4ef6KEY"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6587\u4ef6KEY\uff0c\u53ef\u901a\u8fc7",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/attachment/attachment-upload"},"\u4e0a\u4f20\u9644\u4ef6"),"\u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f fileId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6587\u4ef6ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6587\u4ef6ID\uff0c\u53ef\u901a\u8fc7",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/attachment/attachment-upload"},"\u4e0a\u4f20\u9644\u4ef6"),"\u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"\u2003"," \u221f fileName")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6587\u4ef6\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6587\u4ef6\u540d\u79f0\uff0c\u53ef\u901a\u8fc7",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/attachment/attachment-upload"},"\u4e0a\u4f20\u9644\u4ef6"),"\u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7c7b\u522b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DATA_LINK"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"DATA_LINK")," : \u4e1a\u52a1\u5bf9\u8c61",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"IKCRM")," : \u7231\u5ba2CRM\uff08\u7231\u5ba2\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a\uff0cname\u7edf\u4e00\u4e3a\u7231\u5ba2CRM\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"adminIds")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ba1\u7406\u5458ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ba1\u7406\u5458\u53ef\u4ee5\u5bfc\u5165\u5bfc\u51fa\u8be5\u5e94\u7528\u7684\u6240\u6709\u4e1a\u52a1\u5bf9\u8c61\u6570\u636e\u3001\u4fee\u6539\u6bcf\u6761\u6570\u636e\u7684\u505c\u542f\u7528\u72b6\u6001\u3001\u4fee\u6539\u6bcf\u6761\u6570\u636e\u7684\u4fe1\u606f\u4ee5\u53ca\u8d1f\u8d23\u4eba\u548c\u53c2\u4e0e\u4eba\uff0c\u503c\u4e3a",(0,l.kt)("a",{parentName:"td",href:"/docs/open-api/corporation/get-all-staffs"},"\u5458\u5de5ID"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"iconUrl")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u7edc\u56fe\u7247"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u586b\u5199\u5219\u4f18\u5148\u4f7f\u7528\u6b64\u56fe\u6807\u3002132*132px\uff0c\u5927\u5c0f\u4e0d\u8d85\u8fc72M\uff0c\u683c\u5f0f\u53ef\u4e3ajpg\u3001jpeg\u3001png")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"importMethod")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5bfc\u5165\u65b9\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"excel")," : Excel",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"api")," : API",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"ebot")," : EBot ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"flow")," : \u5355\u636e\u5199\u5165",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"directly")," : \u76f4\u63a5\u5199\u5165")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u76ee\u524d ",(0,l.kt)("inlineCode",{parentName:"p"},"importMethod")," \u4e3a\u65e0\u6548\u5b57\u6bb5\uff0c\u5373\u8bbe\u7f6e\u540e\u8fd4\u56de\u4e3a\u7a7a\u3002\u6b64\u5904\u4e3a\u5386\u53f2\u8fed\u4ee3\u9057\u7559\u95ee\u9898\uff0c\u76ee\u524d\u4f9d\u7136\u9700\u8981\u586b\u5199\u4e14\u4e0d\u4e3a\u7a7a\u3002"))),(0,l.kt)("h2",{id:"curl"},"CURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'curl --location --request PUT \'https://app.ekuaibao.com/api/openapi/v2/datalink/createPlatform?accessToken=cxEbrzNJSA3A00\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name": "\u4e92\u8054\u6d4b\u8bd5111",\n    "icon":{\n        "key": "applet-ekb-web2-1556186636163-817-.png",\n        "fileId": "yKI91530GIto00",\n        "fileName": "tubiao.png"\n    },\n    "type": "DATA_LINK",\n    "importMethod": ["excel", "api"],\n    "adminIds": ["34A73EyI8A0w00:Kh0bnmDTrU9g00"],\n    "iconUrl": "https://www.ikcrm.com/assets/pc_baidu_ad/2.png"\n}\'\n')),(0,l.kt)("h2",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n        "version": 1,\n        "active": true,\n        "createTime": 1597657662045,\n        "updateTime": 1597657662045,\n        "corporationId": "34A73EyI8A0w00",\n        "name": "\u4e92\u8054\u6d4b\u8bd511",                //\u5e94\u7528\u540d\u79f0\n        "nameSpell": "HULIANCESHI11",\n        "icon": {                           //\u5e94\u7528\u56fe\u6807\n            "key": "applet-ekb-web2-b93dbb8d-23ca-4386-a339-e075844d8440-2.png",\n            "fileId": "DLIbrAHda85Q00",\n            "fileName": "2.png"\n        },\n        "id": "PgQbrAHda85Y00",            //\u5e94\u7528ID\n        "importMethod": [],\n        "adminIds": [                      //\u7ba1\u7406\u5458ID\n            "34A73EyI8A0w00:Kh0bnmDTrU9g00"\n        ],\n        "type": "DATA_LINK",               //\u5e94\u7528\u7c7b\u522b\n        "groupType": "NORMAL",\n        "properties": null\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5931\u8d25\u54cd\u5e94"},"\u5931\u8d25\u54cd\u5e94"),(0,l.kt)("p",null,"\u81ea\u5efa\u5e94\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u503c\u9700\u8981\u4fdd\u8bc1\u5176\u552f\u4e00\u6027\uff0c\u5426\u5219\u4f1a\u8fd4\u56de\u5982\u4e0b\u54cd\u5e94\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errorCode": 412,\n    "errorMessage": "\u5e73\u53f0\u540d\u79f0\u4e0d\u80fd\u91cd\u590d",\n    "errorDetails": null,\n    "code": null,\n    "data": null\n}\n')))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2408],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94439:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={},o="Postman\u4f7f\u7528",c={unversionedId:"open-api/getting-started/postman-use",id:"version-v2.0/open-api/getting-started/postman-use",title:"Postman\u4f7f\u7528",description:"---",source:"@site/versioned_docs/version-v2.0/open-api/getting-started/postman-use.md",sourceDirName:"open-api/getting-started",slug:"/open-api/getting-started/postman-use",permalink:"/docs/v2.0/open-api/getting-started/postman-use",editUrl:"https://github.com/ekuaibao/open-platform-docs/blob/main/versioned_docs/version-v2.0/open-api/getting-started/postman-use.md",tags:[],version:"v2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u524d\u5fc5\u8bfb",permalink:"/docs/v2.0/open-api/getting-started/"},next:{title:"\u83b7\u53d6\u5730\u5740\u524d\u7f00",permalink:"/docs/v2.0/open-api/getting-started/origin"}},p=[{value:"\u4ec0\u4e48\u662fPostman\uff1f",id:"\u4ec0\u4e48\u662fpostman",children:[],level:2},{value:"\u5982\u4f55\u4f7f\u7528Postman\uff1f",id:"\u5982\u4f55\u4f7f\u7528postman",children:[{value:"1.Postman\u7684\u4e3b\u754c\u9762",id:"1postman\u7684\u4e3b\u754c\u9762",children:[],level:3},{value:"2.\u5982\u4f55\u6dfb\u52a0\u6613\u5feb\u62a5OpenAPI\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5\uff1f",id:"2\u5982\u4f55\u6dfb\u52a0\u6613\u5feb\u62a5openapi\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5",children:[{value:"2.1 \u521b\u5efa\u63a5\u53e3\u96c6\u5408",id:"21-\u521b\u5efa\u63a5\u53e3\u96c6\u5408",children:[],level:4},{value:"2.2 \u6dfb\u52a0\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5",id:"22-\u6dfb\u52a0\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5",children:[{value:"\uff081\uff09\u624b\u52a8\u6dfb\u52a0\u63a5\u53e3",id:"1\u624b\u52a8\u6dfb\u52a0\u63a5\u53e3",children:[],level:5},{value:"\uff082\uff09\u5bfc\u5165CURL\u6dfb\u52a0\u63a5\u53e3",id:"2\u5bfc\u5165curl\u6dfb\u52a0\u63a5\u53e3",children:[],level:5},{value:"\uff083\uff09\u63a5\u53e3\u53c2\u6570\u6ce8\u610f\u4e8b\u9879",id:"3\u63a5\u53e3\u53c2\u6570\u6ce8\u610f\u4e8b\u9879",children:[],level:5}],level:4}],level:3},{value:"3.\u5982\u4f55\u5bfc\u51faCURL\u7ed9\u5b9e\u65bd\u4eba\u5458\u6392\u67e5\u95ee\u9898\uff1f",id:"3\u5982\u4f55\u5bfc\u51facurl\u7ed9\u5b9e\u65bd\u4eba\u5458\u6392\u67e5\u95ee\u9898",children:[],level:3},{value:"4.\u5982\u4f55\u5bfc\u5165\u5bfc\u51fa\u63a5\u53e3\u96c6\u5408\uff1f",id:"4\u5982\u4f55\u5bfc\u5165\u5bfc\u51fa\u63a5\u53e3\u96c6\u5408",children:[{value:"\uff081\uff09\u5bfc\u51fa\u63a5\u53e3\u96c6\u5408",id:"1\u5bfc\u51fa\u63a5\u53e3\u96c6\u5408",children:[],level:5},{value:"\uff082\uff09\u5bfc\u5165\u63a5\u53e3\u96c6\u5408",id:"2\u5bfc\u5165\u63a5\u53e3\u96c6\u5408",children:[],level:5}],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"postman\u4f7f\u7528"},"Postman\u4f7f\u7528"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662fpostman"},"\u4ec0\u4e48\u662fPostman\uff1f"),(0,i.kt)("p",null,"Postman \u662f\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\u548c\u4f7f\u7528 API \u7684 API \u5e73\u53f0\u3002Postman \u7b80\u5316\u4e86 API \u751f\u547d\u5468\u671f\u7684\u6bcf\u4e2a\u6b65\u9aa4\u5e76\u7b80\u5316\u4e86\u534f\u4f5c\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u66f4\u5feb\u5730\u521b\u5efa\u66f4\u597d\u7684 API\u3002",(0,i.kt)("br",null),"\n\u4e0b\u8f7d\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com"},"https://www.postman.com")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(90376).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528postman"},"\u5982\u4f55\u4f7f\u7528Postman\uff1f"),(0,i.kt)("h3",{id:"1postman\u7684\u4e3b\u754c\u9762"},"1.Postman\u7684\u4e3b\u754c\u9762"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(4460).Z})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"2\u5982\u4f55\u6dfb\u52a0\u6613\u5feb\u62a5openapi\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5"},"2.\u5982\u4f55\u6dfb\u52a0\u6613\u5feb\u62a5OpenAPI\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5\uff1f"),(0,i.kt)("h4",{id:"21-\u521b\u5efa\u63a5\u53e3\u96c6\u5408"},"2.1 \u521b\u5efa\u63a5\u53e3\u96c6\u5408"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(21238).Z}),(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(11949).Z})),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"22-\u6dfb\u52a0\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5"},"2.2 \u6dfb\u52a0\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5"),(0,i.kt)("h5",{id:"1\u624b\u52a8\u6dfb\u52a0\u63a5\u53e3"},"\uff081\uff09\u624b\u52a8\u6dfb\u52a0\u63a5\u53e3"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(58079).Z}),(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(80808).Z}),(0,i.kt)("br",null)),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\u4ee5\u3010\u83b7\u53d6\u6388\u6743\u3011\u63a5\u53e3\u4e3a\u4f8b\uff0c\u624b\u52a8\u6dfb\u52a0\u63a5\u53e3",(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(17600).Z})),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"2\u5bfc\u5165curl\u6dfb\u52a0\u63a5\u53e3"},"\uff082\uff09\u5bfc\u5165CURL\u6dfb\u52a0\u63a5\u53e3"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(38900).Z}),(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(51714).Z}),(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(42776).Z}),(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(45718).Z})),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"3\u63a5\u53e3\u53c2\u6570\u6ce8\u610f\u4e8b\u9879"},"\uff083\uff09\u63a5\u53e3\u53c2\u6570\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(57726).Z}),(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(18686).Z}),(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(78417).Z})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"3\u5982\u4f55\u5bfc\u51facurl\u7ed9\u5b9e\u65bd\u4eba\u5458\u6392\u67e5\u95ee\u9898"},"3.\u5982\u4f55\u5bfc\u51faCURL\u7ed9\u5b9e\u65bd\u4eba\u5458\u6392\u67e5\u95ee\u9898\uff1f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(89836).Z})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"4\u5982\u4f55\u5bfc\u5165\u5bfc\u51fa\u63a5\u53e3\u96c6\u5408"},"4.\u5982\u4f55\u5bfc\u5165\u5bfc\u51fa\u63a5\u53e3\u96c6\u5408\uff1f"),(0,i.kt)("h5",{id:"1\u5bfc\u51fa\u63a5\u53e3\u96c6\u5408"},"\uff081\uff09\u5bfc\u51fa\u63a5\u53e3\u96c6\u5408"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(11066).Z})),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"2\u5bfc\u5165\u63a5\u53e3\u96c6\u5408"},"\uff082\uff09\u5bfc\u5165\u63a5\u53e3\u96c6\u5408"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(62353).Z})),(0,i.kt)("hr",null))}d.isMDXComponent=!0},90376:function(e,t,n){t.Z=n.p+"assets/images/\u4e0b\u8f7d\u5730\u5740-9fa813ed11b124bc6658fb84a3f8c121.png"},4460:function(e,t,n){t.Z=n.p+"assets/images/\u4e3b\u754c\u9762-dad3b8efc1fb5497c1a58ddadcc8831d.png"},11949:function(e,t,n){t.Z=n.p+"assets/images/\u4fee\u6539\u63a5\u53e3\u96c6\u5408\u540d\u79f0-e17574c9189f9fb53ebb251834fa52be.png"},21238:function(e,t,n){t.Z=n.p+"assets/images/\u521b\u5efa\u63a5\u53e3\u96c6\u5408-a43dcbf0cf21db18053ba207b0843d6f.png"},38900:function(e,t,n){t.Z=n.p+"assets/images/\u5bfc\u5165CURL\u6dfb\u52a0\u63a5\u53e31-2511dd8d0ae95a6fe51a8c924217e274.png"},51714:function(e,t,n){t.Z=n.p+"assets/images/\u5bfc\u5165CURL\u6dfb\u52a0\u63a5\u53e32-2e1b907b697fc2fbc4466e36fcc257b4.png"},42776:function(e,t,n){t.Z=n.p+"assets/images/\u5bfc\u5165CURL\u6dfb\u52a0\u63a5\u53e33-a5d335da6d3a44f96b54bd73ccf0dce4.png"},45718:function(e,t,n){t.Z=n.p+"assets/images/\u5bfc\u5165CURL\u6dfb\u52a0\u63a5\u53e34-0ff62a00116a825774d34d7339b70f20.png"},62353:function(e,t,n){t.Z=n.p+"assets/images/\u5bfc\u5165\u63a5\u53e3\u96c6\u5408-e2596d1ce9fe8617cef02335d5d91bef.png"},89836:function(e,t,n){t.Z=n.p+"assets/images/\u5bfc\u51faCURL-0a7f6c8d62026f50968a9ded54319b86.png"},11066:function(e,t,n){t.Z=n.p+"assets/images/\u5bfc\u51fa\u63a5\u53e3\u96c6\u5408-9fc359d2e2599084aa9e474e98625e29.png"},58079:function(e,t,n){t.Z=n.p+"assets/images/\u624b\u52a8\u6dfb\u52a0\u63a5\u53e31-ad565618e7e4715448469272f4f7199d.png"},17600:function(e,t,n){t.Z=n.p+"assets/images/\u624b\u52a8\u6dfb\u52a0\u63a5\u53e32-2489723e5e84dcb6b995bd280547bddb.png"},57726:function(e,t,n){t.Z=n.p+"assets/images/\u63a5\u53e3\u53c2\u6570-b4222f705fbf74b18efb0a691fecc879.png"},18686:function(e,t,n){t.Z=n.p+"assets/images/\u63a5\u53e3\u53c2\u65702-74ce826004ab90e2bfd642f55bdae0e2.png"},78417:function(e,t,n){t.Z=n.p+"assets/images/\u63a5\u53e3\u53c2\u65703-63c64d3f584a732876deaa1dc75a5ade.png"},80808:function(e,t,n){t.Z=n.p+"assets/images/\u83b7\u53d6\u6388\u6743\u63a5\u53e3-fdcd48dc88f8610a77b7969e308c6e8c.png"}}]);
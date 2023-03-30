"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4033],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(5773),a=(n(7378),n(5318));const o={id:"agents_tools.internal.RequestTool",title:"Interface: RequestTool",sidebar_label:"agents/tools.internal.RequestTool",custom_edit_url:null},l=void 0,s={unversionedId:"api/interfaces/agents_tools.internal.RequestTool",id:"api/interfaces/agents_tools.internal.RequestTool",title:"Interface: RequestTool",description:"agents/tools.internal.RequestTool",source:"@site/docs/api/interfaces/agents_tools.internal.RequestTool.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/agents_tools.internal.RequestTool",permalink:"/langchainjs/docs/api/interfaces/agents_tools.internal.RequestTool",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"agents_tools.internal.RequestTool",title:"Interface: RequestTool",sidebar_label:"agents/tools.internal.RequestTool",custom_edit_url:null},sidebar:"sidebar",previous:{title:"agents/tools.internal.GoogleParameters",permalink:"/langchainjs/docs/api/interfaces/agents_tools.internal.GoogleParameters"},next:{title:"agents/tools.internal.SqlTool",permalink:"/langchainjs/docs/api/interfaces/agents_tools.internal.SqlTool"}},i={},c=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"headers",id:"headers",level:3},{value:"Defined in",id:"defined-in",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/agents_tools"},"agents/tools"),".",(0,a.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/agents_tools.internal"},"internal"),".RequestTool"),(0,a.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/agents_tools.RequestsGetTool"},(0,a.kt)("inlineCode",{parentName:"a"},"RequestsGetTool"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/agents_tools.RequestsPostTool"},(0,a.kt)("inlineCode",{parentName:"a"},"RequestsPostTool")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"headers"},"headers"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"headers"),": ",(0,a.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/agents.internal.Headers"},(0,a.kt)("inlineCode",{parentName:"a"},"Headers"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/requests.ts#L8"},"langchain/src/agents/tools/requests.ts:8")))}d.isMDXComponent=!0}}]);
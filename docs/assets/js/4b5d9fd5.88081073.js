"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7788],{5318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(7378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,v=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(v,o(o({ref:n},p),{},{components:t})):r.createElement(v,o({ref:n},p))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1039:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(5773),i=(t(7378),t(5318));const a={id:"vectorstores.internal.PineconeLibArgs",title:"Interface: PineconeLibArgs",sidebar_label:"vectorstores.internal.PineconeLibArgs",custom_edit_url:null},o=void 0,s={unversionedId:"api/interfaces/vectorstores.internal.PineconeLibArgs",id:"api/interfaces/vectorstores.internal.PineconeLibArgs",title:"Interface: PineconeLibArgs",description:"vectorstores.internal.PineconeLibArgs",source:"@site/docs/api/interfaces/vectorstores.internal.PineconeLibArgs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/vectorstores.internal.PineconeLibArgs",permalink:"/langchainjs/docs/api/interfaces/vectorstores.internal.PineconeLibArgs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"vectorstores.internal.PineconeLibArgs",title:"Interface: PineconeLibArgs",sidebar_label:"vectorstores.internal.PineconeLibArgs",custom_edit_url:null},sidebar:"sidebar",previous:{title:"vectorstores.internal.HNSWLibBase",permalink:"/langchainjs/docs/api/interfaces/vectorstores.internal.HNSWLibBase"},next:{title:"vectorstores.internal.SupabaseLibArgs",permalink:"/langchainjs/docs/api/interfaces/vectorstores.internal.SupabaseLibArgs"}},c={},l=[{value:"Properties",id:"properties",level:2},{value:"filter",id:"filter",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"namespace",id:"namespace",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"pineconeIndex",id:"pineconeindex",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"textKey",id:"textkey",level:3},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/vectorstores"},"vectorstores"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/vectorstores.internal"},"internal"),".PineconeLibArgs"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"filter"},"filter"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"filter"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/vectorstores.internal#pineconemetadata"},(0,i.kt)("inlineCode",{parentName:"a"},"PineconeMetadata"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/pinecone.ts#L16"},"langchain/src/vectorstores/pinecone.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"namespace"},"namespace"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"namespace"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/pinecone.ts#L15"},"langchain/src/vectorstores/pinecone.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pineconeindex"},"pineconeIndex"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"pineconeIndex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"VectorOperationsApi")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/pinecone.ts#L13"},"langchain/src/vectorstores/pinecone.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"textkey"},"textKey"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"textKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/pinecone.ts#L14"},"langchain/src/vectorstores/pinecone.ts:14")))}u.isMDXComponent=!0}}]);
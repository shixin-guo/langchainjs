"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2863],{5318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7378),o=r(8944),a=r(5161),i=r(1884),c=r(5626),s=r(9213);const l={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};function p(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},r)}function m(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:a},r," ",a),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:i},i))}function d(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},7989:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(5773),o=(r(7378),r(5318)),a=r(5162);const i={sidebar_position:3,hide_table_of_contents:!0,sidebar_label:"Prompts"},c="Prompts",s={unversionedId:"modules/prompts/index",id:"modules/prompts/index",title:"Prompts",description:"Conceptual Guide",source:"@site/docs/modules/prompts/index.mdx",sourceDirName:"modules/prompts",slug:"/modules/prompts/",permalink:"/langchainjs/docs/modules/prompts/",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/prompts/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,hide_table_of_contents:!0,sidebar_label:"Prompts"},sidebar:"sidebar",previous:{title:"Additional Functionality",permalink:"/langchainjs/docs/modules/models/llms/additional_functionality"},next:{title:"Prompt Templates",permalink:"/langchainjs/docs/modules/prompts/prompt_templates/"}},l={},p=[],m={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prompts"},"Prompts"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://docs.langchain.com/docs/components/prompts"},"Conceptual Guide"))),(0,o.kt)("p",null,"LangChain provides several utilities to help manage prompts for language models, including chat models."),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);
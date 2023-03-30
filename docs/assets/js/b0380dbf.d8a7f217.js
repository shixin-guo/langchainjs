"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1058],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(5773),o=(n(7378),n(5318));const r={hide_table_of_contents:!0,sidebar_position:2},s="Question Answering",i={unversionedId:"use_cases/question_answering",id:"use_cases/question_answering",title:"Question Answering",description:"Conceptual Guide",source:"@site/docs/use_cases/question_answering.mdx",sourceDirName:"use_cases",slug:"/use_cases/question_answering",permalink:"/langchainjs/docs/use_cases/question_answering",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/use_cases/question_answering.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{hide_table_of_contents:!0,sidebar_position:2},sidebar:"sidebar",previous:{title:"Personal Assistants",permalink:"/langchainjs/docs/use_cases/personal_assistants"},next:{title:"Tabular Question Answering",permalink:"/langchainjs/docs/use_cases/tabular"}},l={},u=[{value:"Indexing",id:"indexing",level:2},{value:"Chains",id:"chains",level:2},{value:"Agents",id:"agents",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"question-answering"},"Question Answering"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://docs.langchain.com/docs/use-cases/qa-docs"},"Conceptual Guide"))),(0,o.kt)("p",null,"Question answering in this context refers to question answering over your document data.\nThere are a few different types of question answering:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../modules/chains/index_related_chains/retrieval_qa"},"Retrieval Question Answering"),": Use this to ingest documents, index them into a vectorstore, and then be able to ask questions about it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../modules/chains/index_related_chains/conversational_retrieval"},"Chat Retrieval"),": Similar to above in that you ingest and index documents, but this lets you have more a conversation (ask follow up questions, etc) rather than just asking one-off questions.")),(0,o.kt)("h2",{id:"indexing"},"Indexing"),(0,o.kt)("p",null,"For question answering over many documents, you almost always want to create an index over the data.\nThis can be used to smartly access the most relevant documents for a given question, allowing you to avoid having to pass all the documents to the LLM (saving you time and money)."),(0,o.kt)("p",null,"Therefor, it is really important to understand how to create indexes, and so you should familiarize yourself with all the documentation related to that."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/langchainjs/docs/modules/indexes/"},"Indexes"))),(0,o.kt)("h2",{id:"chains"},"Chains"),(0,o.kt)("p",null,"After you create an index, you can then use it in a chain.\nYou can just do normal question answering over it, or you can use it a conversational way.\nFor an overview of these chains (and more) see the below documentation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/langchainjs/docs/modules/chains/index_related_chains/"},"Index related chains"))),(0,o.kt)("h2",{id:"agents"},"Agents"),(0,o.kt)("p",null,"If you want to be able to answer more complex, multi-hop questions you should look into combining your indexes with an agent.\nFor an example of how to do that, please see the below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/langchainjs/docs/modules/agents/toolkits/examples/vectorstore"},"Vectorstore Agent"))))}p.isMDXComponent=!0}}]);
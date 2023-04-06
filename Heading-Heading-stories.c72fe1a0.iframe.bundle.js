/*! For license information please see Heading-Heading-stories.c72fe1a0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmeiuca_challenge=self.webpackChunkmeiuca_challenge||[]).push([[94],{"./src/components/Heading/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading=({children,as="h2",className,...props})=>{const DEFAULT_CLASS=`text-lg leading-distant font-highlight font-bold text-neutral-01 ${className}`;return{h1:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{...props,className:DEFAULT_CLASS,children}),h2:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{...props,className:DEFAULT_CLASS,children}),h3:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{...props,className:DEFAULT_CLASS,children}),h4:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{...props,className:DEFAULT_CLASS,children}),h5:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5",{...props,className:DEFAULT_CLASS,children}),h6:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h6",{...props,className:DEFAULT_CLASS,children})}[as]},__WEBPACK_DEFAULT_EXPORT__=Heading;try{FunctionComponent.displayName="Heading",FunctionComponent.__docgenInfo={description:"",displayName:"Heading",props:{as:{defaultValue:{value:"h2"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Heading/index.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/Heading/index.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Heading/Heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Heading",component:__webpack_require__("./src/components/Heading/index.tsx").Z,argTypes:{as:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"],description:"Pick one of the heading types",defaultValue:"h2",name:"heading types"}},args:{as:"h1"}},Small={storyName:"Small",args:{as:"h1",children:"Heading"}},__namedExportsOrder=["Small"];Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  storyName: "Small",\n  args: {\n    as: "h1",\n    children: "Heading"\n  }\n}',...Small.parameters?.docs?.source}}}}}]);
(self.webpackChunkxamarin_community_guide=self.webpackChunkxamarin_community_guide||[]).push([[7426],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=s(r),d=o,f=y["".concat(i,".").concat(d)]||y[d]||u[d]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},186:function(e,t,r){"use strict";r.d(t,{N:function(){return b},Z:function(){return v}});var n=r(7294),o=r(6010),l=r(910),a=r(5742),c="anchorWithStickyNavbar_31ik",i="anchorWithHideOnScrollNavbar_3R7-",s=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(y)for(var r of y(t))f.call(t,r)&&m(e,r,t[r]);return e},g=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&y)for(var n of y(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r};const b=function(e){var t,r=g(e,[]);return n.createElement("header",null,n.createElement("h1",(t=h({},r),p(t,u({id:void 0}))),r.children))};var v=e=>{return"h1"===e?b:(t=e,function(e){var r=e,{id:s}=r,p=g(r,["id"]);const{navbar:{hideOnScroll:u}}=(0,a.LU)();return s?n.createElement(t,h({},p),n.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor",`anchor__${t}`,{[i]:u,[c]:!u}),id:s}),p.children,n.createElement("a",{className:"hash-link",href:`#${s}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):n.createElement(t,h({},p))});var t}},5784:function(e,t,r){"use strict";r.d(t,{Z:function(){return se}});var n=r(7294),o=r(9671),l=r(1217),a=r(6010),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:r(7410).default,theme:c};function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},f=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=p({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=p({},r,{backgroundColor:null}),o};function m(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var h=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?f(e.theme,e.language):void 0;return t.themeDict=r})),s(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,l=p({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==o&&(l.style=void 0!==l.style?p({},l.style,o):o),void 0!==r&&(l.key=r),n&&(l.className+=" "+n),l})),s(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return l[r[0]];var a=n?{display:"inline-block"}:{},c=r.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(c))}})),s(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,l=e.token,a=p({},m(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),s(this,"tokenize",(function(e,t,r,n){var o={code:t,grammar:r,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,l=this.getThemeDict(this.props),a=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],l=0,a=0,c=[],i=[c];a>-1;){for(;(l=n[a]++)<o[a];){var s=void 0,p=t[a],f=r[a][l];if("string"==typeof f?(p=a>0?p:["plain"],s=f):(p=d(p,f.type),f.alias&&(p=d(p,f.alias)),s=f.content),"string"==typeof s){var m=s.split(u),h=m.length;c.push({types:p,content:m[0]});for(var g=1;g<h;g++)y(c),i.push(c=[]),c.push({types:p,content:m[g]})}else a++,t.push(p),r.push(s),n.push(0),o.push(s.length)}a--,t.pop(),r.pop(),n.pop(),o.pop()}return y(c),i}(void 0!==a?this.tokenize(t,n,a,r):[n]),className:"prism-code language-"+r,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var g=r(7594),b=r.n(g),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=r(2756),k=r(5742);var j=()=>{const{prism:e}=(0,k.LU)(),{isDarkTheme:t}=(0,O.Z)(),r=e.theme||v,n=e.darkTheme||r;return t?n:r},E=r(910),P="codeBlockContainer_K1bP",x="codeBlockContent_hGly",w="codeBlockTitle_eoMF",T="codeBlock_23N8",N="copyButton_Ue-o",C="codeBlockLines_39YC",S=Object.defineProperty,D=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,$=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))L.call(t,r)&&$(e,r,t[r]);if(_)for(var r of _(t))B.call(t,r)&&$(e,r,t[r]);return e};const A=/{([\d,-]+)}/,R=["js","jsBlock","jsx","python","html"],z={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},F=["highlight-next-line","highlight-start","highlight-end"],V=(e=R)=>{const t=e.map((e=>{const{start:t,end:r}=z[e];return`(?:${t}\\s*(${F.join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${t})\\s*$`)};function U({children:e,className:t,metastring:r,title:o}){const{prism:l}=(0,k.LU)(),[c,s]=(0,n.useState)(!1),[p,u]=(0,n.useState)(!1);(0,n.useEffect)((()=>{u(!0)}),[]);const y=(0,k.bc)(r)||o,d=(0,n.useRef)(null);let f=[];const m=j(),g=Array.isArray(e)?e.join(""):e;if(r&&A.test(r)){const e=r.match(A)[1];f=b()(e).filter((e=>e>0))}let v=null==t?void 0:t.replace(/language-/,"");!v&&l.defaultLanguage&&(v=l.defaultLanguage);let O=g.replace(/\n$/,"");if(0===f.length&&void 0!==v){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return V(["js","jsBlock"]);case"jsx":case"tsx":return V(["js","jsBlock","jsx"]);case"html":return V(["js","jsBlock","html"]);case"python":case"py":return V(["python"]);default:return V()}})(v),r=g.replace(/\n$/,"").split("\n");let n;for(let o=0;o<r.length;){const l=o+1,a=r[o].match(t);if(null!==a){switch(a.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":n=l;break;case"highlight-end":e+=`${n}-${l-1},`}r.splice(o,1)}else o+=1}f=b()(e),O=r.join("\n")}const S=()=>{!function(e,{target:t=document.body}={}){const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch(c){}r.remove(),l&&(o.removeAllRanges(),o.addRange(l)),n&&n.focus()}(O),s(!0),setTimeout((()=>s(!1)),2e3)};return n.createElement(h,(_=I({},i),L={key:String(p),theme:m,code:O,language:v},D(_,Z(L))),(({className:e,style:t,tokens:r,getLineProps:o,getTokenProps:l})=>n.createElement("div",{className:P},y&&n.createElement("div",{style:t,className:w},y),n.createElement("div",{className:(0,a.Z)(x,v)},n.createElement("pre",{tabIndex:0,className:(0,a.Z)(e,T,"thin-scrollbar"),style:t},n.createElement("code",{className:C},r.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const r=o({line:e,key:t});return f.includes(t+1)&&(r.className+=" docusaurus-highlight-code-line"),n.createElement("span",I({key:t},r),e.map(((e,t)=>n.createElement("span",I({key:t},l({token:e,key:t}))))))})))),n.createElement("button",{ref:d,type:"button","aria-label":(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(N,"clean-btn"),onClick:S},c?n.createElement(E.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):n.createElement(E.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))));var _,L}var W=r(186),M="details_1VDD",G=Object.defineProperty,H=Object.defineProperties,K=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function Q(e){var t,r,o=((e,t)=>{var r={};for(var n in e)Y.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&X)for(var n of X(e))t.indexOf(n)<0&&q.call(e,n)&&(r[n]=e[n]);return r})(e,[]);return n.createElement(k.PO,(t=((e,t)=>{for(var r in t||(t={}))Y.call(t,r)&&J(e,r,t[r]);if(X)for(var r of X(t))q.call(t,r)&&J(e,r,t[r]);return e})({},o),r={className:(0,a.Z)("alert alert--info",M,o.className)},H(t,K(r))))}var ee=Object.defineProperty,te=Object.defineProperties,re=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,ae=(e,t,r)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ce=(e,t)=>{for(var r in t||(t={}))oe.call(t,r)&&ae(e,r,t[r]);if(ne)for(var r of ne(t))le.call(t,r)&&ae(e,r,t[r]);return e};function ie(e){var t,r;if((null==(t=null==e?void 0:e.props)?void 0:t.mdxType)&&(null==(r=null==e?void 0:e.props)?void 0:r.originalType)){const t=e.props,{mdxType:r,originalType:o}=t,l=((e,t)=>{var r={};for(var n in e)oe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&ne)for(var n of ne(e))t.indexOf(n)<0&&le.call(e,n)&&(r[n]=e[n]);return r})(t,["mdxType","originalType"]);return n.createElement(e.props.originalType,l)}return e}var se={head:e=>{const t=n.Children.map(e.children,(e=>ie(e)));return n.createElement(o.Z,ce({},e),t)},code:e=>{const{children:t}=e;return(0,n.isValidElement)(t)?t:t.includes("\n")?n.createElement(U,ce({},e)):n.createElement("code",ce({},e))},a:e=>n.createElement(l.Z,ce({},e)),pre:e=>{var t;const{children:r}=e;return(0,n.isValidElement)(r)&&(0,n.isValidElement)(null==(t=null==r?void 0:r.props)?void 0:t.children)?r.props.children:n.createElement(U,ce({},(0,n.isValidElement)(r)?null==r?void 0:r.props:ce({},e)))},details:e=>{const t=n.Children.toArray(e.children),r=t.find((e=>{var t;return"summary"===(null==(t=null==e?void 0:e.props)?void 0:t.mdxType)})),o=n.createElement(n.Fragment,null,t.filter((e=>e!==r)));return n.createElement(Q,(l=ce({},e),te(l,re({summary:r}))),o);var l},h1:(0,W.Z)("h1"),h2:(0,W.Z)("h2"),h3:(0,W.Z)("h3"),h4:(0,W.Z)("h4"),h5:(0,W.Z)("h5"),h6:(0,W.Z)("h6")}},7594:function(e,t){function r(e){let t,r=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=n;t!==l;t+=e)r.push(t)}}return r}t.default=r,e.exports=r}}]);
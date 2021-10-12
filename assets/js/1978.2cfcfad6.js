/*! For license information please see 1978.2cfcfad6.js.LICENSE.txt */
"use strict";(self.webpackChunkxamarin_community_guide=self.webpackChunkxamarin_community_guide||[]).push([[1978],{6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},1217:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),o=n(3727),i=n(1368),u=n(5096),a=n(4487);const c=(0,r.createContext)({collectLink:()=>{}});var s=n(5026),l=n(7023),f=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&h(e,n,t[n]);if(g)for(var n of g(t))m.call(t,n)&&h(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:f,to:h,href:b,activeClassName:w,isActive:P,"data-noBrokenLinkCheck":O,autoAddBaseUrl:_=!0}=n,E=((e,t)=>{var n={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:D,baseUrl:j}}=(0,i.Z)(),{withBaseUrl:S}=(0,s.C)(),A=(0,r.useContext)(c),x=h||b,C=(0,u.Z)(x),k=null==x?void 0:x.replace("pathname://","");let V=void 0!==k?(L=k,_&&(e=>e.startsWith("/"))(L)?S(L):L):void 0;var L;V&&C&&(V=(0,l.applyTrailingSlash)(V,{trailingSlash:D,baseUrl:j}));const I=(0,r.useRef)(!1),R=f?o.OL:o.rU,T=a.Z.canUseIntersectionObserver;let M;(0,r.useEffect)((()=>(!T&&C&&null!=V&&window.docusaurus.prefetch(V),()=>{T&&M&&M.disconnect()})),[V,T,C]);const $=null!==(t=null==V?void 0:V.startsWith("#"))&&void 0!==t&&t,Z=!V||!C||$;return V&&C&&!$&&!O&&A.collectLink(V),Z?r.createElement("a",y(y({href:V},x&&!C&&{target:"_blank",rel:"noopener noreferrer"}),E)):r.createElement(R,y((U=y({},E),d(U,p({onMouseEnter:()=>{I.current||null==V||(window.docusaurus.preload(V),I.current=!0)},innerRef:e=>{var t,n;T&&e&&C&&(t=e,n=()=>{null!=V&&window.docusaurus.prefetch(V)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),n())}))})),M.observe(t))},to:V||""}))),f&&{isActive:P,activeClassName:w}));var U}},910:function(e,t,n){n.d(t,{Z:function(){return f},I:function(){return l}});var r=n(7294);const o=/{\w+}/g,i="{}";function u(e,t){const n=[],u=e.replace(o,(e=>{const o=e.substr(1,e.length-2),u=null==t?void 0:t[o];if(void 0!==u){const e=r.isValidElement(u)?u:String(u);return n.push(e),i}return e}));return 0===n.length?e:n.every((e=>"string"==typeof e))?u.split(i).reduce(((e,t,r)=>{var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):u.split(i).reduce(((e,t,o)=>[...e,r.createElement(r.Fragment,{key:o},t,n[o])]),[])}function a({children:e,values:t}){if("string"!=typeof e)throw console.warn("Illegal <Interpolate> children",e),new Error("The Docusaurus <Interpolate> component only accept simple string values");return u(e,t)}var c=n(7529);function s({id:e,message:t}){var n;return null!==(n=c[null!=e?e:t])&&void 0!==n?n:t}function l({message:e,id:t},n){var r;return u(null!==(r=s({message:e,id:t}))&&void 0!==r?r:e,n)}function f({children:e,id:t,values:n}){var o;if("string"!=typeof e)throw console.warn("Illegal <Translate> children",e),new Error("The Docusaurus <Translate> component only accept simple string values");const i=null!==(o=s({message:e,id:t}))&&void 0!==o?o:e;return r.createElement(a,{values:n},i)}},5096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},6224:function(e,t,n){n.r(t),n.d(t,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=n(3727)},5026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return u}});var r=n(1368),o=n(5096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const u=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+u:u}(t,e,n,r)}}function u(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},2734:function(e,t,n){n.r(t),n.d(t,{default:function(){return o},useAllPluginInstancesData:function(){return i},usePluginData:function(){return u}});var r=n(1368);function o(){const{globalData:e}=(0,r.Z)();if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){const t=o()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin.`);return t}function u(e,t="default"){const n=i(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin with id "${t}".`);return n}},4939:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),o=n(2795);function i(){return(0,r.useContext)(o._)}},634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(6224);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error(`Can't find active docs plugin for "${t}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return i};t.getLatestVersion=e=>e.versions.find((e=>e.isLast));t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))};t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),i=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:i,alternateDocVersions:i?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(i.id):{}}};t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},2922:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(655),o=n(6224),i=r.__importStar(n(2734)),u=n(634),a={};t.useAllDocsData=()=>{var e;return null!==(e=i.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};t.useDocsData=e=>i.usePluginData("docusaurus-plugin-content-docs",e);t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:r}=o.useLocation();return u.getActivePlugin(n,r,e)};t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:r}=o.useLocation();if(n){return{activePlugin:n,activeVersion:u.getActiveVersion(n.pluginData,r)}}};t.useVersions=e=>t.useDocsData(e).versions;t.useLatestVersion=e=>{const n=t.useDocsData(e);return u.getLatestVersion(n)};t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return u.getActiveVersion(n,r)};t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return u.getActiveDocContext(n,r)};t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return u.getDocVersionSuggestions(n,r)}},3730:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),o=n(9671),i=n(5742),u=n(5026);function a({title:e,description:t,keywords:n,image:a,children:c}){const s=(0,i.pe)(e),{withBaseUrl:l}=(0,u.C)(),f=a?l(a,{absolute:!0}):void 0;return r.createElement(o.Z,null,e&&r.createElement("title",null,s),e&&r.createElement("meta",{property:"og:title",content:s}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),n&&r.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),f&&r.createElement("meta",{property:"og:image",content:f}),f&&r.createElement("meta",{name:"twitter:image",content:f}),c)}},3204:function(e,t,n){n.d(t,{Iw:function(){return r.useActiveDocContext},gA:function(){return r.useActivePlugin},WS:function(){return r.useActivePluginAndVersion},zu:function(){return r.useActiveVersion},_r:function(){return r.useAllDocsData},Jo:function(){return r.useDocVersionSuggestions},zh:function(){return r.useDocsData},yW:function(){return r.useLatestVersion},gB:function(){return r.useVersions}});var r=n(2922)},4603:function(e,t,n){var r=n(7294),o=n(4487);const i="desktop",u="mobile",a="ssr";function c(){return o.Z.canUseDOM?window.innerWidth>996?i:u:a}t.Z=function(){const[e,t]=(0,r.useState)((()=>c()));return(0,r.useEffect)((()=>{function e(){t(c())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},5742:function(e,t,n){n.d(t,{pl:function(){return Be},zF:function(){return H},HX:function(){return g},PO:function(){return ae},L5:function(){return ke},Cv:function(){return ye},Cn:function(){return ve},kM:function(){return Te},WA:function(){return c},os:function(){return v},Mg:function(){return y},_f:function(){return s},PZ:function(){return qe},bc:function(){return p},MA:function(){return He},l5:function(){return f},nT:function(){return Fe},uR:function(){return $},J:function(){return Ie},Oh:function(){return Re},Rb:function(){return Ge},be:function(){return We},SL:function(){return S},g8:function(){return he},c2:function(){return D},D9:function(){return j},LU:function(){return o},pe:function(){return b}});var r=n(1368);function o(){return(0,r.Z)().siteConfig.themeConfig}function i(e="localStorage"){if("undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,u||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),u=!0),null}var t}let u=!1;const a={get:()=>null,set:()=>{},del:()=>{}};const c=(e,t)=>{if("undefined"==typeof window)return function(e){function t(){throw new Error(`Illegal storage API usage for storage key "${e}".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`)}return{get:t,set:t,del:t}}(e);const n=i(null==t?void 0:t.persistence);return null===n?a:{get:()=>n.getItem(e),set:t=>n.setItem(e,t),del:()=>n.removeItem(e)}};function s(e="localStorage"){const t=i(e);if(!t)return[];const n=[];for(let r=0;r<t.length;r+=1){const e=t.key(r);null!==e&&n.push(e)}return n}var l=n(5977);function f(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:o}}=(0,r.Z)(),{pathname:i}=(0,l.TH)(),u=o===n?e:e.replace(`/${o}/`,"/"),a=i.replace(e,"");return{createUrl:function({locale:e,fullyQualified:r}){return`${r?t:""}${function(e){return e===n?`${u}`:`${u}${e}/`}(e)}${a}`}}}const d=/title=(["'])(.*?)\1/;function p(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(d))||void 0===t?void 0:t[2])&&void 0!==n?n:""}const g="default";function v(e,t){return`docs-${e}-${t}`}var m=n(3204);const h=!!m._r,y=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)},b=e=>{const{siteConfig:t}=(0,r.Z)(),{title:n,titleDelimiter:o}=t;return e&&e.trim().length?`${e.trim()} ${o} ${n}`:n};var w=n(7294);const P=["zero","one","two","few","many","other"];function O(e){return P.filter((t=>e.includes(t)))}const _={locale:"en",pluralForms:O(["one","other"]),select:e=>1===e?"one":"other"};function E(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,w.useMemo)((()=>{if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),_;try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:O(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n`),_}}),[e])}function D(){const e=E();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];{r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms}), but the message contains ${r.length} plural forms: ${e} `);const o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}}(n,t,e)}}function j(e){const t=(0,w.useRef)();return(0,w.useEffect)((()=>{t.current=e})),t.current}function S(e){const t=(0,l.TH)(),n=j(t),r=(0,w.useRef)(!0);(0,w.useEffect)((()=>{r.current?r.current=!1:e({location:t,previousLocation:n})}),[t])}var A=n(4487),x=Object.defineProperty,C=Object.defineProperties,k=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))L.call(t,n)&&R(e,n,t[n]);if(V)for(var n of V(t))I.call(t,n)&&R(e,n,t[n]);return e},M=(e,t)=>{var n={};for(var r in e)L.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&V)for(var r of V(e))t.indexOf(r)<0&&I.call(e,r)&&(n[r]=e[r]);return n};function $({initialState:e}){const[t,n]=(0,w.useState)(null!=e&&e),r=(0,w.useCallback)((()=>{n((e=>!e))}),[]);return{collapsed:t,setCollapsed:n,toggleCollapsed:r}}const Z={display:"none",overflow:"hidden",height:"0px"},U={display:"block",overflow:"visible",height:"auto"};function N(e,t){const n=t?Z:U;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function B({collapsibleRef:e,collapsed:t,animation:n}){const r=(0,w.useRef)(!1);(0,w.useEffect)((()=>{const o=e.current;function i(){var e,t;const r=o.scrollHeight,i=null!==(e=null==n?void 0:n.duration)&&void 0!==e?e:function(e){const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(r);return{transition:`height ${i}ms ${null!==(t=null==n?void 0:n.easing)&&void 0!==t?t:"ease-in-out"}`,height:`${r}px`}}function u(){const e=i();o.style.transition=e.transition,o.style.height=e.height}if(!r.current)return N(o,t),void(r.current=!0);return o.style.willChange="height",function(){const e=requestAnimationFrame((()=>{t?(u(),requestAnimationFrame((()=>{o.style.height=Z.height,o.style.overflow=Z.overflow}))):(o.style.display="block",requestAnimationFrame((()=>{u()})))}));return()=>cancelAnimationFrame(e)}()}),[e,t,n])}function F(e){if(!A.Z.canUseDOM)return e?Z:U}function W({as:e="div",collapsed:t,children:n,animation:r,onCollapseTransitionEnd:o,className:i,disableSSRStyle:u}){const a=(0,w.useRef)(null);return B({collapsibleRef:a,collapsed:t,animation:r}),w.createElement(e,{ref:a,style:u?void 0:F(t),onTransitionEnd:e=>{if("height"!==e.propertyName)return;const n=a.current,r=n.style.height;t||parseInt(r,10)!==n.scrollHeight||(N(n,!1),null==o||o(!1)),r===Z.height&&(N(n,!0),null==o||o(!0))},className:i},n)}function z(e){var t=e,{collapsed:n}=t,r=M(t,["collapsed"]);const[o,i]=(0,w.useState)(!n);(0,w.useLayoutEffect)((()=>{n||i(!0)}),[n]);const[u,a]=(0,w.useState)(n);return(0,w.useLayoutEffect)((()=>{o&&a(n)}),[o,n]),o?w.createElement(W,(c=T({},r),C(c,k({collapsed:u})))):null;var c}function H(e){var t=e,{lazy:n}=t,r=M(t,["lazy"]);const o=n?z:W;return w.createElement(o,T({},r))}var q=n(4939),G=n(6010),J="details_2Ziz",X="isBrowser_2j9b",K="collapsibleContent_3OHp",Q=Object.defineProperty,Y=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,oe=(e,t,n)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ie(e){return!!e&&("SUMMARY"===e.tagName||ie(e.parentElement))}function ue(e,t){return!!e&&(e===t||ue(e.parentElement,t))}var ae=e=>{var t=e,{summary:n,children:r}=t,o=((e,t)=>{var n={};for(var r in e)ne.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&te)for(var r of te(e))t.indexOf(r)<0&&re.call(e,r)&&(n[r]=e[r]);return n})(t,["summary","children"]);const i=(0,q.Z)(),u=(0,w.useRef)(null),{collapsed:a,setCollapsed:c}=$({initialState:!o.open}),[s,l]=(0,w.useState)(o.open);return w.createElement("details",(f=((e,t)=>{for(var n in t||(t={}))ne.call(t,n)&&oe(e,n,t[n]);if(te)for(var n of te(t))re.call(t,n)&&oe(e,n,t[n]);return e})({},o),d={ref:u,open:s,"data-collapsed":a,className:(0,G.Z)(J,{[X]:i},o.className),onMouseDown:e=>{ie(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ie(t)&&ue(t,u.current)&&(e.preventDefault(),a?(c(!1),l(!0)):c(!0))}},Y(f,ee(d))),n,w.createElement(H,{lazy:!1,collapsed:a,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),l(!e)}},w.createElement("div",{className:K},r)));var f,d},ce=Object.defineProperty,se=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,de=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pe=(e,t)=>{for(var n in t||(t={}))le.call(t,n)&&de(e,n,t[n]);if(se)for(var n of se(t))fe.call(t,n)&&de(e,n,t[n]);return e};const ge=(0,w.createContext)(null);function ve({children:e}){return w.createElement(ge.Provider,{value:(0,w.useState)(null)},e)}function me(){const e=(0,w.useContext)(ge);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function he(){const[e]=me();if(e){const t=e.component;return function(n){return w.createElement(t,pe(pe({},e.props),n))}}return()=>{}}function ye({component:e,props:t}){const[,n]=me(),r=(o=t,(0,w.useMemo)((()=>o),[...Object.keys(o),...Object.values(o)]));var o;return(0,w.useEffect)((()=>{n({component:e,props:r})}),[n,e,r]),(0,w.useEffect)((()=>()=>n(null)),[n]),null}const be=e=>`docs-preferred-version-${e}`;var we={save:(e,t,n)=>{c(be(e),{persistence:t}).set(n)},read:(e,t)=>c(be(e),{persistence:t}).get(),clear:(e,t)=>{c(be(e),{persistence:t}).del()}},Pe=Object.defineProperty,Oe=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,Ee=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,Se=(e,t,n)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function Ae({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=we.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(we.clear(e,t),{preferredVersionName:null})}(e)})),r}function xe(){const e=(0,m._r)(),t=o().docs.versionPersistence,n=(0,w.useMemo)((()=>Object.keys(e)),[e]),[r,i]=(0,w.useState)((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));(0,w.useEffect)((()=>{i(Ae({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,(0,w.useMemo)((()=>({savePreferredVersion:function(e,n){we.save(e,t,n),i((t=>{return r=((e,t)=>{for(var n in t||(t={}))De.call(t,n)&&Se(e,n,t[n]);if(Ee)for(var n of Ee(t))je.call(t,n)&&Se(e,n,t[n]);return e})({},t),Oe(r,_e({[e]:{preferredVersionName:n}}));var r}))}})),[i])]}const Ce=(0,w.createContext)(null);function ke({children:e}){return h?w.createElement(Ve,null,e):w.createElement(w.Fragment,null,e)}function Ve({children:e}){const t=xe();return w.createElement(Ce.Provider,{value:t},e)}function Le(){const e=(0,w.useContext)(Ce);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}function Ie(e="default"){const t=(0,m.zh)(e),[n,r]=Le(),{preferredVersionName:o}=n[e];return{preferredVersion:o?t.versions.find((e=>e.name===o)):null,savePreferredVersionName:(0,w.useCallback)((t=>{r.savePreferredVersion(e,t)}),[r])}}function Re(){const e=(0,m._r)(),[t]=Le();const n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:o}=t[n];return o?r.versions.find((e=>e.name===o)):null}(n)})),r}const Te={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link"},blog:{}},Me=c("docusaurus.announcement.dismiss"),$e=c("docusaurus.announcement.id"),Ze=()=>"true"===Me.get(),Ue=e=>Me.set(String(e)),Ne=(0,w.createContext)(null),Be=({children:e})=>{const t=(()=>{const{announcementBar:e}=o(),t=(0,q.Z)(),[n,r]=(0,w.useState)((()=>!!t&&Ze()));(0,w.useEffect)((()=>{r(Ze())}),[]);const i=(0,w.useCallback)((()=>{Ue(!0),r(!0)}),[]);return(0,w.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=$e.get();"annoucement-bar"===n&&(n="announcement-bar");const o=t!==n;$e.set(t),o&&Ue(!1),!o&&Ze()||r(!1)}),[]),(0,w.useMemo)((()=>({isClosed:n,close:i})),[n])})();return w.createElement(Ne.Provider,{value:t},e)},Fe=()=>{const e=(0,w.useContext)(Ne);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function We(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),{pathname:t}=(0,l.TH)();return t.replace(e,"/")}var ze=n(910);const He=()=>(0,ze.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function qe(e){const t={};return Object.values(e).forEach((e=>{var n;const r=function(e){return e[0].toUpperCase()}(e.name);t[r]=null!==(n=t[r])&&void 0!==n?n:[],t[r].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.name.localeCompare(t.name)))})))}function Ge(e){!function(e){const{block:t}=(0,l.k6)(),n=(0,w.useRef)(e);(0,w.useEffect)((()=>{n.current=e}),[e]),(0,w.useEffect)((()=>t(((e,t)=>n.current(e,t)))),[t,n])}(((t,n)=>{if("POP"===n)return e(t,n)}))}},7271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[o]=e.split(/[#?]/),i="/"===o||o===r?o:(u=o,n?function(e){return e.endsWith("/")?e:`${e}/`}(u):function(e){return e.endsWith("/")?e.slice(0,-1):e}(u));var u;return e.replace(o,i)}},7023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(7271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(1080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},1080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},655:function(e,t,n){n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return u},__decorate:function(){return a},__param:function(){return c},__metadata:function(){return s},__awaiter:function(){return l},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return p},__values:function(){return g},__read:function(){return v},__spread:function(){return m},__spreadArrays:function(){return h},__spreadArray:function(){return y},__await:function(){return b},__asyncGenerator:function(){return w},__asyncDelegator:function(){return P},__asyncValues:function(){return O},__makeTemplateObject:function(){return _},__importStar:function(){return D},__importDefault:function(){return j},__classPrivateFieldGet:function(){return S},__classPrivateFieldSet:function(){return A}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function a(e,t,n,r){var o,i=arguments.length,u=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(u=(i<3?o(u):i>3?o(t,n,u):o(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u}function c(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function g(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function h(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],u=0,a=i.length;u<a;u++,o++)r[o]=i[u];return r}function y(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,s):l(i[0][2],n)}catch(r){l(i[0][3],r)}var n}function c(e){a("next",e)}function s(e){a("throw",e)}function l(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function P(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=g(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function _(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var E=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function D(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return E(t,e),t}function j(e){return e&&e.__esModule?e:{default:e}}function S(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function A(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);
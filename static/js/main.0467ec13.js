(()=>{var e={63927:function(e,t,r){var n={"./en":"46952","./en.json":"46952","./fr":"45413","./fr.json":"45413"};function o(e){return r(i(e))}function i(e){if(!r.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=63927},74303:function(e,t,r){"use strict";var n=r(85893);r(78893),r(59507),r(98049),r(67294);var o=r(62330),i=r(16396),a=r.n(i),l=r(22960),u=r(72339),d=r(36956);let c=e=>{let{client:t,lang:r,polyglot:a,children:c}=e;return(0,n.jsx)(l.WebviewIntentProvider,{children:(0,n.jsx)(i.CozyProvider,{client:t,children:(0,n.jsx)(o.BarProvider,{children:(0,n.jsx)(d.I18n,{lang:r,polyglot:a,children:(0,n.jsx)(u.BreakpointsProvider,{children:c})})})})})};var s=r(20745),f=r(71400),p=r(79233),v=JSON.parse('{"u2":"Twake Mail","i8":"0.1.0"}');let h={},j=e=>{let t=JSON.parse(e.dataset.cozy),r=window.location.protocol,n=`${r}//${t.domain}`;return new(a())({uri:n,token:t.token,appMetadata:{slug:v.u2,version:v.i8},schema:h,store:!0})},m=(e,t)=>/^\{\{\..*\}\}$/.test(e)?t:e,y=()=>{var e;let t=document.querySelector("[role=application]"),n=(0,s.createRoot)(t),o=j(t),i=m(null===(e=JSON.parse(t.dataset.cozy))||void 0===e?void 0:e.locale,"en"),a=(0,p.QE)(i,e=>r(63927)(`./${e}`));return o.registerPlugin(f.default.plugin),{root:n,client:o,lang:i,polyglot:a}};var b=r(79655),g=r(26335),O=r(62857),x=r(32692);let w=[{path:"*",element:(0,n.jsx)(()=>{let{isMobile:e}=(0,u.default)(),t=(0,i.useClient)();return(0,O.useExternalBridge)("https://tmail.linagora.com"),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.BarComponent,{}),e&&(0,n.jsx)(o.BarCenter,{children:(0,n.jsx)(x.Z,{variant:"h5",children:t.appMetadata.slug})})]})},{})}],k=()=>{let e=(0,b.createHashRouter)(w);return(0,n.jsx)(g.pG,{router:e})};document.getElementById("embeddedApp").onload=function(){let e=new Event("iframeLoaded");document.dispatchEvent(e)},setTimeout(()=>{let e=new Event("iframeLoaded");document.dispatchEvent(e)},1e3),document.addEventListener("iframeLoaded",()=>{P(),E=!0});let E=!1,P=()=>{if(E)return;let{root:e,client:t,lang:r,polyglot:o}=y();e.render((0,n.jsx)(c,{client:t,lang:r,polyglot:o,children:(0,n.jsx)(k,{})}))}},14061:function(){},71169:function(){},39322:function(){},46952:function(e){"use strict";e.exports={}},45413:function(e){"use strict";e.exports={}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o||"object"==typeof n&&n&&(4&o&&n.__esModule||16&o&&"function"==typeof n.then))return n;var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>{a[e]=()=>n[e]});return a.default=()=>n,r.d(i,a),i}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},(()=>{r.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})()})(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},(()=>{var e=[];r.O=function(t,n,o,i){if(n){i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[n,o,i];return}for(var l=1/0,a=0;a<e.length;a++){for(var n=e[a][0],o=e[a][1],i=e[a][2],u=!0,d=0;d<n.length;d++)(!1&i||l>=i)&&Object.keys(r.O).every(function(e){return r.O[e](n[d])})?n.splice(d--,1):(u=!1,i<l&&(l=i));if(u){e.splice(a--,1);var c=o();void 0!==c&&(t=c)}}return t}})(),r.rv=()=>"1.2.7",(()=>{var e={909:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,l,u]=n,d=0;if(a.some(t=>0!==e[t])){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(u)var c=u(r)}for(t&&t(n);d<a.length;d++)i=a[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self.webpackChunktwakemail=self.webpackChunktwakemail||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.ruid="bundler=rspack@1.2.7";var n=r.O(void 0,["465","361","118","640"],function(){return r(74303)});n=r.O(n)})();
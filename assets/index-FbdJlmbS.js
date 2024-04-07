function Od(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uu={exports:{}},Go={},Bu={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=Symbol.for("react.element"),Ld=Symbol.for("react.portal"),Rd=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),Id=Symbol.for("react.profiler"),$d=Symbol.for("react.provider"),Fd=Symbol.for("react.context"),Dd=Symbol.for("react.forward_ref"),Ad=Symbol.for("react.suspense"),Vd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),ha=Symbol.iterator;function Bd(e){return e===null||typeof e!="object"?null:(e=ha&&e[ha]||e["@@iterator"],typeof e=="function"?e:null)}var Hu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wu=Object.assign,Qu={};function $n(e,t,n){this.props=e,this.context=t,this.refs=Qu,this.updater=n||Hu}$n.prototype.isReactComponent={};$n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yu(){}Yu.prototype=$n.prototype;function us(e,t,n){this.props=e,this.context=t,this.refs=Qu,this.updater=n||Hu}var cs=us.prototype=new Yu;cs.constructor=us;Wu(cs,$n.prototype);cs.isPureReactComponent=!0;var ya=Array.isArray,Xu=Object.prototype.hasOwnProperty,fs={current:null},Gu={key:!0,ref:!0,__self:!0,__source:!0};function Ku(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Xu.call(t,r)&&!Gu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Tr,type:e,key:i,ref:l,props:o,_owner:fs.current}}function Hd(e,t){return{$$typeof:Tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ds(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr}function Wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var va=/\/+/g;function $i(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wd(""+e.key):t.toString(36)}function oo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Tr:case Ld:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+$i(l,0):r,ya(o)?(n="",e!=null&&(n=e.replace(va,"$&/")+"/"),oo(o,t,n,"",function(c){return c})):o!=null&&(ds(o)&&(o=Hd(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(va,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ya(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+$i(i,s);l+=oo(i,t,n,a,o)}else if(a=Bd(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+$i(i,s++),l+=oo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Dr(e,t,n){if(e==null)return e;var r=[],o=0;return oo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Qd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},io={transition:null},Yd={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:io,ReactCurrentOwner:fs};M.Children={map:Dr,forEach:function(e,t,n){Dr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Dr(e,function(){t++}),t},toArray:function(e){return Dr(e,function(t){return t})||[]},only:function(e){if(!ds(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=$n;M.Fragment=Rd;M.Profiler=Id;M.PureComponent=us;M.StrictMode=Md;M.Suspense=Ad;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yd;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=fs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Xu.call(t,a)&&!Gu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Tr,type:e.type,key:o,ref:i,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:Fd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$d,_context:e},e.Consumer=e};M.createElement=Ku;M.createFactory=function(e){var t=Ku.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Dd,render:e}};M.isValidElement=ds;M.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Qd}};M.memo=function(e,t){return{$$typeof:Vd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=io.transition;io.transition={};try{e()}finally{io.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return xe.current.useCallback(e,t)};M.useContext=function(e){return xe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};M.useEffect=function(e,t){return xe.current.useEffect(e,t)};M.useId=function(){return xe.current.useId()};M.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return xe.current.useMemo(e,t)};M.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};M.useRef=function(e){return xe.current.useRef(e)};M.useState=function(e){return xe.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return xe.current.useTransition()};M.version="18.2.0";Bu.exports=M;var T=Bu.exports;const Je=Td(T),ga=Od({__proto__:null,default:Je},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd=T,Gd=Symbol.for("react.element"),Kd=Symbol.for("react.fragment"),Zd=Object.prototype.hasOwnProperty,Jd=Xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qd={key:!0,ref:!0,__self:!0,__source:!0};function Zu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Zd.call(t,r)&&!qd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Gd,type:e,key:i,ref:l,props:o,_owner:Jd.current}}Go.Fragment=Kd;Go.jsx=Zu;Go.jsxs=Zu;Uu.exports=Go;var y=Uu.exports,cl={},Ju={exports:{}},Ie={},qu={exports:{}},bu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,L){var N=j.length;j.push(L);e:for(;0<N;){var I=N-1>>>1,A=j[I];if(0<o(A,L))j[I]=L,j[N]=A,N=I;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var L=j[0],N=j.pop();if(N!==L){j[0]=N;e:for(var I=0,A=j.length,ie=A>>>1;I<ie;){var ke=2*(I+1)-1,Ii=j[ke],Wt=ke+1,Fr=j[Wt];if(0>o(Ii,N))Wt<A&&0>o(Fr,Ii)?(j[I]=Fr,j[Wt]=N,I=Wt):(j[I]=Ii,j[ke]=N,I=ke);else if(Wt<A&&0>o(Fr,N))j[I]=Fr,j[Wt]=N,I=Wt;else break e}}return L}function o(j,L){var N=j.sortIndex-L.sortIndex;return N!==0?N:j.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],d=1,m=null,h=3,g=!1,x=!1,v=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=j)r(c),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(c)}}function w(j){if(v=!1,p(j),!x)if(n(a)!==null)x=!0,St(C);else{var L=n(c);L!==null&&ln(w,L.startTime-j)}}function C(j,L){x=!1,v&&(v=!1,f(z),z=-1),g=!0;var N=h;try{for(p(L),m=n(a);m!==null&&(!(m.expirationTime>L)||j&&!X());){var I=m.callback;if(typeof I=="function"){m.callback=null,h=m.priorityLevel;var A=I(m.expirationTime<=L);L=e.unstable_now(),typeof A=="function"?m.callback=A:m===n(a)&&r(a),p(L)}else r(a);m=n(a)}if(m!==null)var ie=!0;else{var ke=n(c);ke!==null&&ln(w,ke.startTime-L),ie=!1}return ie}finally{m=null,h=N,g=!1}}var _=!1,k=null,z=-1,H=5,R=-1;function X(){return!(e.unstable_now()-R<H)}function ze(){if(k!==null){var j=e.unstable_now();R=j;var L=!0;try{L=k(!0,j)}finally{L?Qe():(_=!1,k=null)}}else _=!1}var Qe;if(typeof u=="function")Qe=function(){u(ze)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,Vn=xt.port2;xt.port1.onmessage=ze,Qe=function(){Vn.postMessage(null)}}else Qe=function(){O(ze,0)};function St(j){k=j,_||(_=!0,Qe())}function ln(j,L){z=O(function(){j(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,St(C))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var N=h;h=L;try{return j()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,L){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var N=h;h=j;try{return L()}finally{h=N}},e.unstable_scheduleCallback=function(j,L,N){var I=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?I+N:I):N=I,j){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=N+A,j={id:d++,callback:L,priorityLevel:j,startTime:N,expirationTime:A,sortIndex:-1},N>I?(j.sortIndex=N,t(c,j),n(a)===null&&j===n(c)&&(v?(f(z),z=-1):v=!0,ln(w,N-I))):(j.sortIndex=A,t(a,j),x||g||(x=!0,St(C))),j},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(j){var L=h;return function(){var N=h;h=L;try{return j.apply(this,arguments)}finally{h=N}}}})(bu);qu.exports=bu;var bd=qu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ec=T,Me=bd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tc=new Set,ur={};function rn(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(ur[e]=t,e=0;e<t.length;e++)tc.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=Object.prototype.hasOwnProperty,e0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wa={},xa={};function t0(e){return fl.call(xa,e)?!0:fl.call(wa,e)?!1:e0.test(e)?xa[e]=!0:(wa[e]=!0,!1)}function n0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function r0(e,t,n,r){if(t===null||typeof t>"u"||n0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var ps=/[\-:]([a-z])/g;function ms(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ps,ms);de[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ps,ms);de[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ps,ms);de[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function hs(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(r0(t,n,o,r)&&(n=null),r||o===null?t0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ar=Symbol.for("react.element"),un=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),ys=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),nc=Symbol.for("react.provider"),rc=Symbol.for("react.context"),vs=Symbol.for("react.forward_ref"),pl=Symbol.for("react.suspense"),ml=Symbol.for("react.suspense_list"),gs=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),oc=Symbol.for("react.offscreen"),Sa=Symbol.iterator;function Un(e){return e===null||typeof e!="object"?null:(e=Sa&&e[Sa]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Fi;function Zn(e){if(Fi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fi=t&&t[1]||""}return`
`+Fi+e}var Di=!1;function Ai(e,t){if(!e||Di)return"";Di=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Di=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zn(e):""}function o0(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=Ai(e.type,!1),e;case 11:return e=Ai(e.type.render,!1),e;case 1:return e=Ai(e.type,!0),e;default:return""}}function hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case un:return"Portal";case dl:return"Profiler";case ys:return"StrictMode";case pl:return"Suspense";case ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rc:return(e.displayName||"Context")+".Consumer";case nc:return(e._context.displayName||"Context")+".Provider";case vs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gs:return t=e.displayName||null,t!==null?t:hl(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return hl(e(t))}catch{}}return null}function i0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hl(t);case 8:return t===ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l0(e){var t=ic(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vr(e){e._valueTracker||(e._valueTracker=l0(e))}function lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ic(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yl(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ka(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sc(e,t){t=t.checked,t!=null&&hs(e,"checked",t,!1)}function vl(e,t){sc(e,t);var n=Dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&gl(e,t.type,Dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ea(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gl(e,t,n){(t!=="number"||xo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ca(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Jn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dt(n)}}function ac(e,t){var n=Dt(t.value),r=Dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _a(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ur,cc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s0=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){s0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),er[t]=er[e]})});function fc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||er.hasOwnProperty(e)&&er[e]?(""+t).trim():t+"px"}function dc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=fc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var a0=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sl(e,t){if(t){if(a0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,kn=null,En=null;function Na(e){if(e=Mr(e)){if(typeof Cl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=bo(t),Cl(e.stateNode,e.type,t))}}function pc(e){kn?En?En.push(e):En=[e]:kn=e}function mc(){if(kn){var e=kn,t=En;if(En=kn=null,Na(e),t)for(e=0;e<t.length;e++)Na(t[e])}}function hc(e,t){return e(t)}function yc(){}var Vi=!1;function vc(e,t,n){if(Vi)return e(t,n);Vi=!0;try{return hc(e,t,n)}finally{Vi=!1,(kn!==null||En!==null)&&(yc(),mc())}}function fr(e,t){var n=e.stateNode;if(n===null)return null;var r=bo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var _l=!1;if(ht)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){_l=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{_l=!1}function u0(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var tr=!1,So=null,ko=!1,Nl=null,c0={onError:function(e){tr=!0,So=e}};function f0(e,t,n,r,o,i,l,s,a){tr=!1,So=null,u0.apply(c0,arguments)}function d0(e,t,n,r,o,i,l,s,a){if(f0.apply(this,arguments),tr){if(tr){var c=So;tr=!1,So=null}else throw Error(S(198));ko||(ko=!0,Nl=c)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ja(e){if(on(e)!==e)throw Error(S(188))}function p0(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ja(o),e;if(i===r)return ja(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function wc(e){return e=p0(e),e!==null?xc(e):null}function xc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xc(e);if(t!==null)return t;e=e.sibling}return null}var Sc=Me.unstable_scheduleCallback,Pa=Me.unstable_cancelCallback,m0=Me.unstable_shouldYield,h0=Me.unstable_requestPaint,b=Me.unstable_now,y0=Me.unstable_getCurrentPriorityLevel,xs=Me.unstable_ImmediatePriority,kc=Me.unstable_UserBlockingPriority,Eo=Me.unstable_NormalPriority,v0=Me.unstable_LowPriority,Ec=Me.unstable_IdlePriority,Ko=null,st=null;function g0(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Ko,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:S0,w0=Math.log,x0=Math.LN2;function S0(e){return e>>>=0,e===0?32:31-(w0(e)/x0|0)|0}var Br=64,Hr=4194304;function qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Co(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=qn(s):(i&=l,i!==0&&(r=qn(i)))}else l=n&~o,l!==0?r=qn(l):i!==0&&(r=qn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),o=1<<n,r|=e[n],t&=~o;return r}function k0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-qe(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=k0(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cc(){var e=Br;return Br<<=1,!(Br&4194240)&&(Br=64),e}function Ui(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function C0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function _c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nc,ks,jc,Pc,zc,Pl=!1,Wr=[],zt=null,Ot=null,Tt=null,dr=new Map,pr=new Map,_t=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function za(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(t.pointerId)}}function Hn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Mr(t),t!==null&&ks(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function N0(e,t,n,r,o){switch(t){case"focusin":return zt=Hn(zt,e,t,n,r,o),!0;case"dragenter":return Ot=Hn(Ot,e,t,n,r,o),!0;case"mouseover":return Tt=Hn(Tt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return dr.set(i,Hn(dr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,pr.set(i,Hn(pr.get(i)||null,e,t,n,r,o)),!0}return!1}function Oc(e){var t=Xt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=gc(n),t!==null){e.blockedOn=t,zc(e.priority,function(){jc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=Mr(n),t!==null&&ks(t),e.blockedOn=n,!1;t.shift()}return!0}function Oa(e,t,n){lo(e)&&n.delete(t)}function j0(){Pl=!1,zt!==null&&lo(zt)&&(zt=null),Ot!==null&&lo(Ot)&&(Ot=null),Tt!==null&&lo(Tt)&&(Tt=null),dr.forEach(Oa),pr.forEach(Oa)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Pl||(Pl=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,j0)))}function mr(e){function t(o){return Wn(o,e)}if(0<Wr.length){Wn(Wr[0],e);for(var n=1;n<Wr.length;n++){var r=Wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&Wn(zt,e),Ot!==null&&Wn(Ot,e),Tt!==null&&Wn(Tt,e),dr.forEach(t),pr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Oc(n),n.blockedOn===null&&_t.shift()}var Cn=wt.ReactCurrentBatchConfig,_o=!0;function P0(e,t,n,r){var o=V,i=Cn.transition;Cn.transition=null;try{V=1,Es(e,t,n,r)}finally{V=o,Cn.transition=i}}function z0(e,t,n,r){var o=V,i=Cn.transition;Cn.transition=null;try{V=4,Es(e,t,n,r)}finally{V=o,Cn.transition=i}}function Es(e,t,n,r){if(_o){var o=zl(e,t,n,r);if(o===null)Ji(e,t,r,No,n),za(e,r);else if(N0(o,e,t,n,r))r.stopPropagation();else if(za(e,r),t&4&&-1<_0.indexOf(e)){for(;o!==null;){var i=Mr(o);if(i!==null&&Nc(i),i=zl(e,t,n,r),i===null&&Ji(e,t,r,No,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ji(e,t,r,null,n)}}var No=null;function zl(e,t,n,r){if(No=null,e=ws(r),e=Xt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return No=e,null}function Tc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y0()){case xs:return 1;case kc:return 4;case Eo:case v0:return 16;case Ec:return 536870912;default:return 16}default:return 16}}var jt=null,Cs=null,so=null;function Lc(){if(so)return so;var e,t=Cs,n=t.length,r,o="value"in jt?jt.value:jt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return so=o.slice(e,1<r?1-r:void 0)}function ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function Ta(){return!1}function $e(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qr:Ta,this.isPropagationStopped=Ta,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=$e(Fn),Rr=J({},Fn,{view:0,detail:0}),O0=$e(Rr),Bi,Hi,Qn,Zo=J({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(Bi=e.screenX-Qn.screenX,Hi=e.screenY-Qn.screenY):Hi=Bi=0,Qn=e),Bi)},movementY:function(e){return"movementY"in e?e.movementY:Hi}}),La=$e(Zo),T0=J({},Zo,{dataTransfer:0}),L0=$e(T0),R0=J({},Rr,{relatedTarget:0}),Wi=$e(R0),M0=J({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),I0=$e(M0),$0=J({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F0=$e($0),D0=J({},Fn,{data:0}),Ra=$e(D0),A0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=U0[e])?!!t[e]:!1}function Ns(){return B0}var H0=J({},Rr,{key:function(e){if(e.key){var t=A0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W0=$e(H0),Q0=J({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ma=$e(Q0),Y0=J({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),X0=$e(Y0),G0=J({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),K0=$e(G0),Z0=J({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=$e(Z0),q0=[9,13,27,32],js=ht&&"CompositionEvent"in window,nr=null;ht&&"documentMode"in document&&(nr=document.documentMode);var b0=ht&&"TextEvent"in window&&!nr,Rc=ht&&(!js||nr&&8<nr&&11>=nr),Ia=" ",$a=!1;function Mc(e,t){switch(e){case"keyup":return q0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ic(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function ep(e,t){switch(e){case"compositionend":return Ic(t);case"keypress":return t.which!==32?null:($a=!0,Ia);case"textInput":return e=t.data,e===Ia&&$a?null:e;default:return null}}function tp(e,t){if(fn)return e==="compositionend"||!js&&Mc(e,t)?(e=Lc(),so=Cs=jt=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rc&&t.locale!=="ko"?null:t.data;default:return null}}var np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!np[e.type]:t==="textarea"}function $c(e,t,n,r){pc(r),t=jo(t,"onChange"),0<t.length&&(n=new _s("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var rr=null,hr=null;function rp(e){Xc(e,0)}function Jo(e){var t=mn(e);if(lc(t))return e}function op(e,t){if(e==="change")return t}var Fc=!1;if(ht){var Qi;if(ht){var Yi="oninput"in document;if(!Yi){var Da=document.createElement("div");Da.setAttribute("oninput","return;"),Yi=typeof Da.oninput=="function"}Qi=Yi}else Qi=!1;Fc=Qi&&(!document.documentMode||9<document.documentMode)}function Aa(){rr&&(rr.detachEvent("onpropertychange",Dc),hr=rr=null)}function Dc(e){if(e.propertyName==="value"&&Jo(hr)){var t=[];$c(t,hr,e,ws(e)),vc(rp,t)}}function ip(e,t,n){e==="focusin"?(Aa(),rr=t,hr=n,rr.attachEvent("onpropertychange",Dc)):e==="focusout"&&Aa()}function lp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(hr)}function sp(e,t){if(e==="click")return Jo(t)}function ap(e,t){if(e==="input"||e==="change")return Jo(t)}function up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:up;function yr(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!fl.call(t,o)||!et(e[o],t[o]))return!1}return!0}function Va(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ua(e,t){var n=Va(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Va(n)}}function Ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vc(){for(var e=window,t=xo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xo(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cp(e){var t=Vc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ac(n.ownerDocument.documentElement,n)){if(r!==null&&Ps(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ua(n,i);var l=Ua(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fp=ht&&"documentMode"in document&&11>=document.documentMode,dn=null,Ol=null,or=null,Tl=!1;function Ba(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tl||dn==null||dn!==xo(r)||(r=dn,"selectionStart"in r&&Ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),or&&yr(or,r)||(or=r,r=jo(Ol,"onSelect"),0<r.length&&(t=new _s("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:Yr("Animation","AnimationEnd"),animationiteration:Yr("Animation","AnimationIteration"),animationstart:Yr("Animation","AnimationStart"),transitionend:Yr("Transition","TransitionEnd")},Xi={},Uc={};ht&&(Uc=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function qo(e){if(Xi[e])return Xi[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uc)return Xi[e]=t[n];return e}var Bc=qo("animationend"),Hc=qo("animationiteration"),Wc=qo("animationstart"),Qc=qo("transitionend"),Yc=new Map,Ha="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){Yc.set(e,t),rn(t,[e])}for(var Gi=0;Gi<Ha.length;Gi++){var Ki=Ha[Gi],dp=Ki.toLowerCase(),pp=Ki[0].toUpperCase()+Ki.slice(1);Vt(dp,"on"+pp)}Vt(Bc,"onAnimationEnd");Vt(Hc,"onAnimationIteration");Vt(Wc,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(Qc,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mp=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function Wa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,d0(r,t,void 0,e),e.currentTarget=null}function Xc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Wa(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Wa(o,s,c),i=a}}}if(ko)throw e=Nl,ko=!1,Nl=null,e}function Q(e,t){var n=t[$l];n===void 0&&(n=t[$l]=new Set);var r=e+"__bubble";n.has(r)||(Gc(t,e,2,!1),n.add(r))}function Zi(e,t,n){var r=0;t&&(r|=4),Gc(n,e,r,t)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[Xr]){e[Xr]=!0,tc.forEach(function(n){n!=="selectionchange"&&(mp.has(n)||Zi(n,!1,e),Zi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xr]||(t[Xr]=!0,Zi("selectionchange",!1,t))}}function Gc(e,t,n,r){switch(Tc(t)){case 1:var o=P0;break;case 4:o=z0;break;default:o=Es}n=o.bind(null,t,n,e),o=void 0,!_l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ji(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Xt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}vc(function(){var c=i,d=ws(n),m=[];e:{var h=Yc.get(e);if(h!==void 0){var g=_s,x=e;switch(e){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":g=W0;break;case"focusin":x="focus",g=Wi;break;case"focusout":x="blur",g=Wi;break;case"beforeblur":case"afterblur":g=Wi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=La;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=X0;break;case Bc:case Hc:case Wc:g=I0;break;case Qc:g=K0;break;case"scroll":g=O0;break;case"wheel":g=J0;break;case"copy":case"cut":case"paste":g=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ma}var v=(t&4)!==0,O=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var u=c,p;u!==null;){p=u;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=fr(u,f),w!=null&&v.push(gr(u,w,p)))),O)break;u=u.return}0<v.length&&(h=new g(h,x,null,n,d),m.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==El&&(x=n.relatedTarget||n.fromElement)&&(Xt(x)||x[yt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?Xt(x):null,x!==null&&(O=on(x),x!==O||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(v=La,w="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ma,w="onPointerLeave",f="onPointerEnter",u="pointer"),O=g==null?h:mn(g),p=x==null?h:mn(x),h=new v(w,u+"leave",g,n,d),h.target=O,h.relatedTarget=p,w=null,Xt(d)===c&&(v=new v(f,u+"enter",x,n,d),v.target=p,v.relatedTarget=O,w=v),O=w,g&&x)t:{for(v=g,f=x,u=0,p=v;p;p=sn(p))u++;for(p=0,w=f;w;w=sn(w))p++;for(;0<u-p;)v=sn(v),u--;for(;0<p-u;)f=sn(f),p--;for(;u--;){if(v===f||f!==null&&v===f.alternate)break t;v=sn(v),f=sn(f)}v=null}else v=null;g!==null&&Qa(m,h,g,v,!1),x!==null&&O!==null&&Qa(m,O,x,v,!0)}}e:{if(h=c?mn(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var C=op;else if(Fa(h))if(Fc)C=ap;else{C=lp;var _=ip}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=sp);if(C&&(C=C(e,c))){$c(m,C,n,d);break e}_&&_(e,h,c),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&gl(h,"number",h.value)}switch(_=c?mn(c):window,e){case"focusin":(Fa(_)||_.contentEditable==="true")&&(dn=_,Ol=c,or=null);break;case"focusout":or=Ol=dn=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,Ba(m,n,d);break;case"selectionchange":if(fp)break;case"keydown":case"keyup":Ba(m,n,d)}var k;if(js)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else fn?Mc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Rc&&n.locale!=="ko"&&(fn||z!=="onCompositionStart"?z==="onCompositionEnd"&&fn&&(k=Lc()):(jt=d,Cs="value"in jt?jt.value:jt.textContent,fn=!0)),_=jo(c,z),0<_.length&&(z=new Ra(z,e,null,n,d),m.push({event:z,listeners:_}),k?z.data=k:(k=Ic(n),k!==null&&(z.data=k)))),(k=b0?ep(e,n):tp(e,n))&&(c=jo(c,"onBeforeInput"),0<c.length&&(d=new Ra("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:c}),d.data=k))}Xc(m,t)})}function gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=fr(e,n),i!=null&&r.unshift(gr(e,i,o)),i=fr(e,t),i!=null&&r.push(gr(e,i,o))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qa(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=fr(n,i),a!=null&&l.unshift(gr(n,a,s))):o||(a=fr(n,i),a!=null&&l.push(gr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var hp=/\r\n?/g,yp=/\u0000|\uFFFD/g;function Ya(e){return(typeof e=="string"?e:""+e).replace(hp,`
`).replace(yp,"")}function Gr(e,t,n){if(t=Ya(t),Ya(e)!==t&&n)throw Error(S(425))}function Po(){}var Ll=null,Rl=null;function Ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Il=typeof setTimeout=="function"?setTimeout:void 0,vp=typeof clearTimeout=="function"?clearTimeout:void 0,Xa=typeof Promise=="function"?Promise:void 0,gp=typeof queueMicrotask=="function"?queueMicrotask:typeof Xa<"u"?function(e){return Xa.resolve(null).then(e).catch(wp)}:Il;function wp(e){setTimeout(function(){throw e})}function qi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);mr(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ga(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dn=Math.random().toString(36).slice(2),it="__reactFiber$"+Dn,wr="__reactProps$"+Dn,yt="__reactContainer$"+Dn,$l="__reactEvents$"+Dn,xp="__reactListeners$"+Dn,Sp="__reactHandles$"+Dn;function Xt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ga(e);e!==null;){if(n=e[it])return n;e=Ga(e)}return t}e=n,n=e.parentNode}return null}function Mr(e){return e=e[it]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function bo(e){return e[wr]||null}var Fl=[],hn=-1;function Ut(e){return{current:e}}function Y(e){0>hn||(e.current=Fl[hn],Fl[hn]=null,hn--)}function W(e,t){hn++,Fl[hn]=e.current,e.current=t}var At={},ve=Ut(At),_e=Ut(!1),qt=At;function zn(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function zo(){Y(_e),Y(ve)}function Ka(e,t,n){if(ve.current!==At)throw Error(S(168));W(ve,t),W(_e,n)}function Kc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,i0(e)||"Unknown",o));return J({},n,r)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,qt=ve.current,W(ve,e),W(_e,_e.current),!0}function Za(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Kc(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,Y(_e),Y(ve),W(ve,e)):Y(_e),W(_e,n)}var ft=null,ei=!1,bi=!1;function Zc(e){ft===null?ft=[e]:ft.push(e)}function kp(e){ei=!0,Zc(e)}function Bt(){if(!bi&&ft!==null){bi=!0;var e=0,t=V;try{var n=ft;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,ei=!1}catch(o){throw ft!==null&&(ft=ft.slice(e+1)),Sc(xs,Bt),o}finally{V=t,bi=!1}}return null}var yn=[],vn=0,To=null,Lo=0,De=[],Ae=0,bt=null,dt=1,pt="";function Qt(e,t){yn[vn++]=Lo,yn[vn++]=To,To=e,Lo=t}function Jc(e,t,n){De[Ae++]=dt,De[Ae++]=pt,De[Ae++]=bt,bt=e;var r=dt;e=pt;var o=32-qe(r)-1;r&=~(1<<o),n+=1;var i=32-qe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,dt=1<<32-qe(t)+o|n<<o|r,pt=i+e}else dt=1<<i|n<<o|r,pt=e}function zs(e){e.return!==null&&(Qt(e,1),Jc(e,1,0))}function Os(e){for(;e===To;)To=yn[--vn],yn[vn]=null,Lo=yn[--vn],yn[vn]=null;for(;e===bt;)bt=De[--Ae],De[Ae]=null,pt=De[--Ae],De[Ae]=null,dt=De[--Ae],De[Ae]=null}var Le=null,Te=null,G=!1,Ke=null;function qc(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ja(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Te=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bt!==null?{id:dt,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Te=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Al(e){if(G){var t=Te;if(t){var n=t;if(!Ja(e,t)){if(Dl(e))throw Error(S(418));t=Lt(n.nextSibling);var r=Le;t&&Ja(e,t)?qc(r,n):(e.flags=e.flags&-4097|2,G=!1,Le=e)}}else{if(Dl(e))throw Error(S(418));e.flags=e.flags&-4097|2,G=!1,Le=e}}}function qa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Kr(e){if(e!==Le)return!1;if(!G)return qa(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ml(e.type,e.memoizedProps)),t&&(t=Te)){if(Dl(e))throw bc(),Error(S(418));for(;t;)qc(e,t),t=Lt(t.nextSibling)}if(qa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Le?Lt(e.stateNode.nextSibling):null;return!0}function bc(){for(var e=Te;e;)e=Lt(e.nextSibling)}function On(){Te=Le=null,G=!1}function Ts(e){Ke===null?Ke=[e]:Ke.push(e)}var Ep=wt.ReactCurrentBatchConfig;function Xe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ro=Ut(null),Mo=null,gn=null,Ls=null;function Rs(){Ls=gn=Mo=null}function Ms(e){var t=Ro.current;Y(Ro),e._currentValue=t}function Vl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){Mo=e,Ls=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Ls!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(Mo===null)throw Error(S(308));gn=e,Mo.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Gt=null;function Is(e){Gt===null?Gt=[e]:Gt.push(e)}function ef(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Is(t)):(n.next=o.next,o.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function $s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,vt(e,n)}return o=r.interleaved,o===null?(t.next=t,Is(r)):(t.next=o.next,o.next=t),r.interleaved=t,vt(e,n)}function uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ss(e,n)}}function ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Io(e,t,n,r){var o=e.updateQueue;Ct=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,d=c=a=null,s=i;do{var h=s.lane,g=s.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,v=s;switch(h=t,g=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){m=x.call(g,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,h=typeof x=="function"?x.call(g,m,h):x,h==null)break e;m=J({},m,h);break e;case 2:Ct=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=g,a=m):d=d.next=g,l|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=m}}function eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var nf=new ec.Component().refs;function Ul(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ti={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=It(e),i=mt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,o),t!==null&&(be(t,e,o,r),uo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=It(e),i=mt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,o),t!==null&&(be(t,e,o,r),uo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=It(e),o=mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Rt(e,o,r),t!==null&&(be(t,e,r,n),uo(t,e,r))}};function tu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(o,i):!0}function rf(e,t,n){var r=!1,o=At,i=t.contextType;return typeof i=="object"&&i!==null?i=Be(i):(o=Ne(t)?qt:ve.current,r=t.contextTypes,i=(r=r!=null)?zn(e,o):At),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ti,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function nu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ti.enqueueReplaceState(t,t.state,null)}function Bl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=nf,$s(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Be(i):(i=Ne(t)?qt:ve.current,o.context=zn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ul(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ti.enqueueReplaceState(o,o.state,null),Io(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===nf&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Zr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ru(e){var t=e._init;return t(e._payload)}function of(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=$t(f,u),f.index=0,f.sibling=null,f}function i(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,p,w){return u===null||u.tag!==6?(u=ll(p,f.mode,w),u.return=f,u):(u=o(u,p),u.return=f,u)}function a(f,u,p,w){var C=p.type;return C===cn?d(f,u,p.props.children,w,p.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Et&&ru(C)===u.type)?(w=o(u,p.props),w.ref=Yn(f,u,p),w.return=f,w):(w=yo(p.type,p.key,p.props,null,f.mode,w),w.ref=Yn(f,u,p),w.return=f,w)}function c(f,u,p,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=sl(p,f.mode,w),u.return=f,u):(u=o(u,p.children||[]),u.return=f,u)}function d(f,u,p,w,C){return u===null||u.tag!==7?(u=Jt(p,f.mode,w,C),u.return=f,u):(u=o(u,p),u.return=f,u)}function m(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ll(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ar:return p=yo(u.type,u.key,u.props,null,f.mode,p),p.ref=Yn(f,null,u),p.return=f,p;case un:return u=sl(u,f.mode,p),u.return=f,u;case Et:var w=u._init;return m(f,w(u._payload),p)}if(Jn(u)||Un(u))return u=Jt(u,f.mode,p,null),u.return=f,u;Zr(f,u)}return null}function h(f,u,p,w){var C=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(f,u,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ar:return p.key===C?a(f,u,p,w):null;case un:return p.key===C?c(f,u,p,w):null;case Et:return C=p._init,h(f,u,C(p._payload),w)}if(Jn(p)||Un(p))return C!==null?null:d(f,u,p,w,null);Zr(f,p)}return null}function g(f,u,p,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,s(u,f,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ar:return f=f.get(w.key===null?p:w.key)||null,a(u,f,w,C);case un:return f=f.get(w.key===null?p:w.key)||null,c(u,f,w,C);case Et:var _=w._init;return g(f,u,p,_(w._payload),C)}if(Jn(w)||Un(w))return f=f.get(p)||null,d(u,f,w,C,null);Zr(u,w)}return null}function x(f,u,p,w){for(var C=null,_=null,k=u,z=u=0,H=null;k!==null&&z<p.length;z++){k.index>z?(H=k,k=null):H=k.sibling;var R=h(f,k,p[z],w);if(R===null){k===null&&(k=H);break}e&&k&&R.alternate===null&&t(f,k),u=i(R,u,z),_===null?C=R:_.sibling=R,_=R,k=H}if(z===p.length)return n(f,k),G&&Qt(f,z),C;if(k===null){for(;z<p.length;z++)k=m(f,p[z],w),k!==null&&(u=i(k,u,z),_===null?C=k:_.sibling=k,_=k);return G&&Qt(f,z),C}for(k=r(f,k);z<p.length;z++)H=g(k,f,z,p[z],w),H!==null&&(e&&H.alternate!==null&&k.delete(H.key===null?z:H.key),u=i(H,u,z),_===null?C=H:_.sibling=H,_=H);return e&&k.forEach(function(X){return t(f,X)}),G&&Qt(f,z),C}function v(f,u,p,w){var C=Un(p);if(typeof C!="function")throw Error(S(150));if(p=C.call(p),p==null)throw Error(S(151));for(var _=C=null,k=u,z=u=0,H=null,R=p.next();k!==null&&!R.done;z++,R=p.next()){k.index>z?(H=k,k=null):H=k.sibling;var X=h(f,k,R.value,w);if(X===null){k===null&&(k=H);break}e&&k&&X.alternate===null&&t(f,k),u=i(X,u,z),_===null?C=X:_.sibling=X,_=X,k=H}if(R.done)return n(f,k),G&&Qt(f,z),C;if(k===null){for(;!R.done;z++,R=p.next())R=m(f,R.value,w),R!==null&&(u=i(R,u,z),_===null?C=R:_.sibling=R,_=R);return G&&Qt(f,z),C}for(k=r(f,k);!R.done;z++,R=p.next())R=g(k,f,z,R.value,w),R!==null&&(e&&R.alternate!==null&&k.delete(R.key===null?z:R.key),u=i(R,u,z),_===null?C=R:_.sibling=R,_=R);return e&&k.forEach(function(ze){return t(f,ze)}),G&&Qt(f,z),C}function O(f,u,p,w){if(typeof p=="object"&&p!==null&&p.type===cn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ar:e:{for(var C=p.key,_=u;_!==null;){if(_.key===C){if(C=p.type,C===cn){if(_.tag===7){n(f,_.sibling),u=o(_,p.props.children),u.return=f,f=u;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Et&&ru(C)===_.type){n(f,_.sibling),u=o(_,p.props),u.ref=Yn(f,_,p),u.return=f,f=u;break e}n(f,_);break}else t(f,_);_=_.sibling}p.type===cn?(u=Jt(p.props.children,f.mode,w,p.key),u.return=f,f=u):(w=yo(p.type,p.key,p.props,null,f.mode,w),w.ref=Yn(f,u,p),w.return=f,f=w)}return l(f);case un:e:{for(_=p.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=o(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=sl(p,f.mode,w),u.return=f,f=u}return l(f);case Et:return _=p._init,O(f,u,_(p._payload),w)}if(Jn(p))return x(f,u,p,w);if(Un(p))return v(f,u,p,w);Zr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,p),u.return=f,f=u):(n(f,u),u=ll(p,f.mode,w),u.return=f,f=u),l(f)):n(f,u)}return O}var Tn=of(!0),lf=of(!1),Ir={},at=Ut(Ir),xr=Ut(Ir),Sr=Ut(Ir);function Kt(e){if(e===Ir)throw Error(S(174));return e}function Fs(e,t){switch(W(Sr,t),W(xr,e),W(at,Ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}Y(at),W(at,t)}function Ln(){Y(at),Y(xr),Y(Sr)}function sf(e){Kt(Sr.current);var t=Kt(at.current),n=xl(t,e.type);t!==n&&(W(xr,e),W(at,n))}function Ds(e){xr.current===e&&(Y(at),Y(xr))}var K=Ut(0);function $o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function As(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var co=wt.ReactCurrentDispatcher,tl=wt.ReactCurrentBatchConfig,en=0,Z=null,re=null,le=null,Fo=!1,ir=!1,kr=0,Cp=0;function pe(){throw Error(S(321))}function Vs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function Us(e,t,n,r,o,i){if(en=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,co.current=e===null||e.memoizedState===null?Pp:zp,e=n(r,o),ir){i=0;do{if(ir=!1,kr=0,25<=i)throw Error(S(301));i+=1,le=re=null,t.updateQueue=null,co.current=Op,e=n(r,o)}while(ir)}if(co.current=Do,t=re!==null&&re.next!==null,en=0,le=re=Z=null,Fo=!1,t)throw Error(S(300));return e}function Bs(){var e=kr!==0;return kr=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Z.memoizedState=le=e:le=le.next=e,le}function He(){if(re===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=le===null?Z.memoizedState:le.next;if(t!==null)le=t,re=e;else{if(e===null)throw Error(S(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?Z.memoizedState=le=e:le=le.next=e}return le}function Er(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=He(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=re,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var d=c.lane;if((en&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,l=r):a=a.next=m,Z.lanes|=d,tn|=d}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,et(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Z.lanes|=i,tn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=He(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);et(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function af(){}function uf(e,t){var n=Z,r=He(),o=t(),i=!et(r.memoizedState,o);if(i&&(r.memoizedState=o,Ce=!0),r=r.queue,Hs(df.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Cr(9,ff.bind(null,n,r,o,t),void 0,null),se===null)throw Error(S(349));en&30||cf(n,t,o)}return o}function cf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ff(e,t,n,r){t.value=n,t.getSnapshot=r,pf(t)&&mf(e)}function df(e,t,n){return n(function(){pf(t)&&mf(e)})}function pf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function mf(e){var t=vt(e,1);t!==null&&be(t,e,1,-1)}function ou(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Er,lastRenderedState:e},t.queue=e,e=e.dispatch=jp.bind(null,Z,e),[t.memoizedState,e]}function Cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hf(){return He().memoizedState}function fo(e,t,n,r){var o=nt();Z.flags|=e,o.memoizedState=Cr(1|t,n,void 0,r===void 0?null:r)}function ni(e,t,n,r){var o=He();r=r===void 0?null:r;var i=void 0;if(re!==null){var l=re.memoizedState;if(i=l.destroy,r!==null&&Vs(r,l.deps)){o.memoizedState=Cr(t,n,i,r);return}}Z.flags|=e,o.memoizedState=Cr(1|t,n,i,r)}function iu(e,t){return fo(8390656,8,e,t)}function Hs(e,t){return ni(2048,8,e,t)}function yf(e,t){return ni(4,2,e,t)}function vf(e,t){return ni(4,4,e,t)}function gf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wf(e,t,n){return n=n!=null?n.concat([e]):null,ni(4,4,gf.bind(null,t,e),n)}function Ws(){}function xf(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sf(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kf(e,t,n){return en&21?(et(n,t)||(n=Cc(),Z.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function _p(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{V=n,tl.transition=r}}function Ef(){return He().memoizedState}function Np(e,t,n){var r=It(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cf(e))_f(t,n);else if(n=ef(e,t,n,r),n!==null){var o=we();be(n,e,r,o),Nf(n,t,r)}}function jp(e,t,n){var r=It(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cf(e))_f(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,et(s,l)){var a=t.interleaved;a===null?(o.next=o,Is(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=ef(e,t,o,r),n!==null&&(o=we(),be(n,e,r,o),Nf(n,t,r))}}function Cf(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function _f(e,t){ir=Fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ss(e,n)}}var Do={readContext:Be,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},Pp={readContext:Be,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:iu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fo(4194308,4,gf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return fo(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Np.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:ou,useDebugValue:Ws,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=ou(!1),t=e[0];return e=_p.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=nt();if(G){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),se===null)throw Error(S(349));en&30||cf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,iu(df.bind(null,r,i,e),[e]),r.flags|=2048,Cr(9,ff.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=nt(),t=se.identifierPrefix;if(G){var n=pt,r=dt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zp={readContext:Be,useCallback:xf,useContext:Be,useEffect:Hs,useImperativeHandle:wf,useInsertionEffect:yf,useLayoutEffect:vf,useMemo:Sf,useReducer:nl,useRef:hf,useState:function(){return nl(Er)},useDebugValue:Ws,useDeferredValue:function(e){var t=He();return kf(t,re.memoizedState,e)},useTransition:function(){var e=nl(Er)[0],t=He().memoizedState;return[e,t]},useMutableSource:af,useSyncExternalStore:uf,useId:Ef,unstable_isNewReconciler:!1},Op={readContext:Be,useCallback:xf,useContext:Be,useEffect:Hs,useImperativeHandle:wf,useInsertionEffect:yf,useLayoutEffect:vf,useMemo:Sf,useReducer:rl,useRef:hf,useState:function(){return rl(Er)},useDebugValue:Ws,useDeferredValue:function(e){var t=He();return re===null?t.memoizedState=e:kf(t,re.memoizedState,e)},useTransition:function(){var e=rl(Er)[0],t=He().memoizedState;return[e,t]},useMutableSource:af,useSyncExternalStore:uf,useId:Ef,unstable_isNewReconciler:!1};function Rn(e,t){try{var n="",r=t;do n+=o0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Tp=typeof WeakMap=="function"?WeakMap:Map;function jf(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vo||(Vo=!0,bl=r),Hl(e,t)},n}function Pf(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hl(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Qp.bind(null,e,t,n),t.then(e,e))}function su(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function au(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var Lp=wt.ReactCurrentOwner,Ce=!1;function ge(e,t,n,r){t.child=e===null?lf(t,null,n,r):Tn(t,e.child,n,r)}function uu(e,t,n,r,o){n=n.render;var i=t.ref;return _n(t,o),r=Us(e,t,n,r,i,o),n=Bs(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(G&&n&&zs(t),t.flags|=1,ge(e,t,r,o),t.child)}function cu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!qs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,zf(e,t,i,r,o)):(e=yo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:yr,n(l,r)&&e.ref===t.ref)return gt(e,t,o)}return t.flags|=1,e=$t(i,r),e.ref=t.ref,e.return=t,t.child=e}function zf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(yr(i,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,gt(e,t,o)}return Wl(e,t,n,r,o)}function Of(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(xn,Oe),Oe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(xn,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(xn,Oe),Oe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(xn,Oe),Oe|=r;return ge(e,t,o,n),t.child}function Tf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,n,r,o){var i=Ne(n)?qt:ve.current;return i=zn(t,i),_n(t,o),n=Us(e,t,n,r,i,o),r=Bs(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(G&&r&&zs(t),t.flags|=1,ge(e,t,n,o),t.child)}function fu(e,t,n,r,o){if(Ne(n)){var i=!0;Oo(t)}else i=!1;if(_n(t,o),t.stateNode===null)po(e,t),rf(t,n,r),Bl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Be(c):(c=Ne(n)?qt:ve.current,c=zn(t,c));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&nu(t,l,r,c),Ct=!1;var h=t.memoizedState;l.state=h,Io(t,r,l,o),a=t.memoizedState,s!==r||h!==a||_e.current||Ct?(typeof d=="function"&&(Ul(t,n,d,r),a=t.memoizedState),(s=Ct||tu(t,n,s,r,h,a,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,tf(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Xe(t.type,s),l.props=c,m=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Be(a):(a=Ne(n)?qt:ve.current,a=zn(t,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||h!==a)&&nu(t,l,r,a),Ct=!1,h=t.memoizedState,l.state=h,Io(t,r,l,o);var x=t.memoizedState;s!==m||h!==x||_e.current||Ct?(typeof g=="function"&&(Ul(t,n,g,r),x=t.memoizedState),(c=Ct||tu(t,n,c,r,h,x,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ql(e,t,n,r,i,o)}function Ql(e,t,n,r,o,i){Tf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Za(t,n,!1),gt(e,t,i);r=t.stateNode,Lp.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Tn(t,e.child,null,i),t.child=Tn(t,null,s,i)):ge(e,t,s,i),t.memoizedState=r.state,o&&Za(t,n,!0),t.child}function Lf(e){var t=e.stateNode;t.pendingContext?Ka(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ka(e,t.context,!1),Fs(e,t.containerInfo)}function du(e,t,n,r,o){return On(),Ts(o),t.flags|=256,ge(e,t,n,r),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rf(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(K,o&1),e===null)return Al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ii(l,r,0,null),e=Jt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Xl(n),t.memoizedState=Yl,e):Qs(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Rp(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=$t(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=$t(s,i):(i=Jt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Xl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Yl,r}return i=e.child,e=i.sibling,r=$t(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qs(e,t){return t=ii({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jr(e,t,n,r){return r!==null&&Ts(r),Tn(t,e.child,null,n),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rp(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(S(422))),Jr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ii({mode:"visible",children:r.children},o,0,null),i=Jt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Tn(t,e.child,null,l),t.child.memoizedState=Xl(l),t.memoizedState=Yl,i);if(!(t.mode&1))return Jr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=ol(i,r,void 0),Jr(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ce||s){if(r=se,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,vt(e,o),be(r,e,o,-1))}return Js(),r=ol(Error(S(421))),Jr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Yp.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Te=Lt(o.nextSibling),Le=t,G=!0,Ke=null,e!==null&&(De[Ae++]=dt,De[Ae++]=pt,De[Ae++]=bt,dt=e.id,pt=e.overflow,bt=t),t=Qs(t,r.children),t.flags|=4096,t)}function pu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vl(e.return,t,n)}function il(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Mf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ge(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pu(e,n,t);else if(e.tag===19)pu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&$o(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),il(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&$o(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}il(t,!0,n,null,i);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mp(e,t,n){switch(t.tag){case 3:Lf(t),On();break;case 5:sf(t);break;case 1:Ne(t.type)&&Oo(t);break;case 4:Fs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(Ro,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Rf(e,t,n):(W(K,K.current&1),e=gt(e,t,n),e!==null?e.sibling:null);W(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Of(e,t,n)}return gt(e,t,n)}var If,Gl,$f,Ff;If=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};$f=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Kt(at.current);var i=null;switch(n){case"input":o=yl(e,o),r=yl(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=wl(e,o),r=wl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Po)}Sl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ur.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ur.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Q("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Ff=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xn(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ip(e,t,n){var r=t.pendingProps;switch(Os(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ne(t.type)&&zo(),me(t),null;case 3:return r=t.stateNode,Ln(),Y(_e),Y(ve),As(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Kr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(ns(Ke),Ke=null))),Gl(e,t),me(t),null;case 5:Ds(t);var o=Kt(Sr.current);if(n=t.type,e!==null&&t.stateNode!=null)$f(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return me(t),null}if(e=Kt(at.current),Kr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[it]=t,r[wr]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<bn.length;o++)Q(bn[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ka(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":Ca(r,i),Q("invalid",r)}Sl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Gr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Gr(r.textContent,s,e),o=["children",""+s]):ur.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":Vr(r),Ea(r,i,!0);break;case"textarea":Vr(r),_a(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Po)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[it]=t,e[wr]=r,If(e,t,!1,!1),t.stateNode=e;e:{switch(l=kl(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<bn.length;o++)Q(bn[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":ka(e,r),o=yl(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Ca(e,r),o=wl(e,r),Q("invalid",e);break;default:o=r}Sl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?dc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&cc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&cr(e,a):typeof a=="number"&&cr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ur.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Q("scroll",e):a!=null&&hs(e,i,a,l))}switch(n){case"input":Vr(e),Ea(e,r,!1);break;case"textarea":Vr(e),_a(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Sn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Ff(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Kt(Sr.current),Kt(at.current),Kr(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(i=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:Gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return me(t),null;case 13:if(Y(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Te!==null&&t.mode&1&&!(t.flags&128))bc(),On(),t.flags|=98560,i=!1;else if(i=Kr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[it]=t}else On(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else Ke!==null&&(ns(Ke),Ke=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?oe===0&&(oe=3):Js())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Ln(),Gl(e,t),e===null&&vr(t.stateNode.containerInfo),me(t),null;case 10:return Ms(t.type._context),me(t),null;case 17:return Ne(t.type)&&zo(),me(t),null;case 19:if(Y(K),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Xn(i,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=$o(e),l!==null){for(t.flags|=128,Xn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&b()>Mn&&(t.flags|=128,r=!0,Xn(i,!1),t.lanes=4194304)}else{if(!r)if(e=$o(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!G)return me(t),null}else 2*b()-i.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,Xn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=b(),t.sibling=null,n=K.current,W(K,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Zs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function $p(e,t){switch(Os(t),t.tag){case 1:return Ne(t.type)&&zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(),Y(_e),Y(ve),As(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ds(t),null;case 13:if(Y(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(K),null;case 4:return Ln(),null;case 10:return Ms(t.type._context),null;case 22:case 23:return Zs(),null;case 24:return null;default:return null}}var qr=!1,ye=!1,Fp=typeof WeakSet=="function"?WeakSet:Set,P=null;function wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Kl(e,t,n){try{n()}catch(r){q(e,t,r)}}var mu=!1;function Dp(e,t){if(Ll=_o,e=Vc(),Ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,d=0,m=e,h=null;t:for(;;){for(var g;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===e)break t;if(h===n&&++c===o&&(s=l),h===i&&++d===r&&(a=l),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},_o=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,O=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Xe(t.type,v),O);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return x=mu,mu=!1,x}function lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Kl(t,n,i)}o=o.next}while(o!==r)}}function ri(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Df(e){var t=e.alternate;t!==null&&(e.alternate=null,Df(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[wr],delete t[$l],delete t[xp],delete t[Sp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Af(e){return e.tag===5||e.tag===3||e.tag===4}function hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Af(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Po));else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}var ue=null,Ge=!1;function kt(e,t,n){for(n=n.child;n!==null;)Vf(e,t,n),n=n.sibling}function Vf(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Ko,n)}catch{}switch(n.tag){case 5:ye||wn(n,t);case 6:var r=ue,o=Ge;ue=null,kt(e,t,n),ue=r,Ge=o,ue!==null&&(Ge?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ge?(e=ue,n=n.stateNode,e.nodeType===8?qi(e.parentNode,n):e.nodeType===1&&qi(e,n),mr(e)):qi(ue,n.stateNode));break;case 4:r=ue,o=Ge,ue=n.stateNode.containerInfo,Ge=!0,kt(e,t,n),ue=r,Ge=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Kl(n,t,l),o=o.next}while(o!==r)}kt(e,t,n);break;case 1:if(!ye&&(wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,kt(e,t,n),ye=r):kt(e,t,n);break;default:kt(e,t,n)}}function yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fp),t.forEach(function(r){var o=Xp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,Ge=!1;break e;case 3:ue=s.stateNode.containerInfo,Ge=!0;break e;case 4:ue=s.stateNode.containerInfo,Ge=!0;break e}s=s.return}if(ue===null)throw Error(S(160));Vf(i,l,o),ue=null,Ge=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){q(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uf(t,e),t=t.sibling}function Uf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),tt(e),r&4){try{lr(3,e,e.return),ri(3,e)}catch(v){q(e,e.return,v)}try{lr(5,e,e.return)}catch(v){q(e,e.return,v)}}break;case 1:Ye(t,e),tt(e),r&512&&n!==null&&wn(n,n.return);break;case 5:if(Ye(t,e),tt(e),r&512&&n!==null&&wn(n,n.return),e.flags&32){var o=e.stateNode;try{cr(o,"")}catch(v){q(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&sc(o,i),kl(s,l);var c=kl(s,i);for(l=0;l<a.length;l+=2){var d=a[l],m=a[l+1];d==="style"?dc(o,m):d==="dangerouslySetInnerHTML"?cc(o,m):d==="children"?cr(o,m):hs(o,d,m,c)}switch(s){case"input":vl(o,i);break;case"textarea":ac(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Sn(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Sn(o,!!i.multiple,i.defaultValue,!0):Sn(o,!!i.multiple,i.multiple?[]:"",!1))}o[wr]=i}catch(v){q(e,e.return,v)}}break;case 6:if(Ye(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){q(e,e.return,v)}}break;case 3:if(Ye(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mr(t.containerInfo)}catch(v){q(e,e.return,v)}break;case 4:Ye(t,e),tt(e);break;case 13:Ye(t,e),tt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Gs=b())),r&4&&yu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(c=ye)||d,Ye(t,e),ye=c):Ye(t,e),tt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(m=P=d;P!==null;){switch(h=P,g=h.child,h.tag){case 0:case 11:case 14:case 15:lr(4,h,h.return);break;case 1:wn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){q(r,n,v)}}break;case 5:wn(h,h.return);break;case 22:if(h.memoizedState!==null){gu(m);continue}}g!==null?(g.return=h,P=g):gu(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=fc("display",l))}catch(v){q(e,e.return,v)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){q(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ye(t,e),tt(e),r&4&&yu(e);break;case 21:break;default:Ye(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Af(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(cr(o,""),r.flags&=-33);var i=hu(e);ql(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=hu(e);Jl(e,s,l);break;default:throw Error(S(161))}}catch(a){q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ap(e,t,n){P=e,Bf(e)}function Bf(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||qr;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ye;s=qr;var c=ye;if(qr=l,(ye=a)&&!c)for(P=o;P!==null;)l=P,a=l.child,l.tag===22&&l.memoizedState!==null?wu(o):a!==null?(a.return=l,P=a):wu(o);for(;i!==null;)P=i,Bf(i),i=i.sibling;P=o,qr=s,ye=c}vu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):vu(e)}}function vu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||ri(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&eu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}eu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&mr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ye||t.flags&512&&Zl(t)}catch(h){q(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function gu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function wu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ri(4,t)}catch(a){q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){q(t,o,a)}}var i=t.return;try{Zl(t)}catch(a){q(t,i,a)}break;case 5:var l=t.return;try{Zl(t)}catch(a){q(t,l,a)}}}catch(a){q(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Vp=Math.ceil,Ao=wt.ReactCurrentDispatcher,Ys=wt.ReactCurrentOwner,Ue=wt.ReactCurrentBatchConfig,$=0,se=null,ne=null,fe=0,Oe=0,xn=Ut(0),oe=0,_r=null,tn=0,oi=0,Xs=0,sr=null,Ee=null,Gs=0,Mn=1/0,ct=null,Vo=!1,bl=null,Mt=null,br=!1,Pt=null,Uo=0,ar=0,es=null,mo=-1,ho=0;function we(){return $&6?b():mo!==-1?mo:mo=b()}function It(e){return e.mode&1?$&2&&fe!==0?fe&-fe:Ep.transition!==null?(ho===0&&(ho=Cc()),ho):(e=V,e!==0||(e=window.event,e=e===void 0?16:Tc(e.type)),e):1}function be(e,t,n,r){if(50<ar)throw ar=0,es=null,Error(S(185));Lr(e,n,r),(!($&2)||e!==se)&&(e===se&&(!($&2)&&(oi|=n),oe===4&&Nt(e,fe)),je(e,r),n===1&&$===0&&!(t.mode&1)&&(Mn=b()+500,ei&&Bt()))}function je(e,t){var n=e.callbackNode;E0(e,t);var r=Co(e,e===se?fe:0);if(r===0)n!==null&&Pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pa(n),t===1)e.tag===0?kp(xu.bind(null,e)):Zc(xu.bind(null,e)),gp(function(){!($&6)&&Bt()}),n=null;else{switch(_c(r)){case 1:n=xs;break;case 4:n=kc;break;case 16:n=Eo;break;case 536870912:n=Ec;break;default:n=Eo}n=Zf(n,Hf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hf(e,t){if(mo=-1,ho=0,$&6)throw Error(S(327));var n=e.callbackNode;if(Nn()&&e.callbackNode!==n)return null;var r=Co(e,e===se?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bo(e,r);else{t=r;var o=$;$|=2;var i=Qf();(se!==e||fe!==t)&&(ct=null,Mn=b()+500,Zt(e,t));do try{Hp();break}catch(s){Wf(e,s)}while(!0);Rs(),Ao.current=i,$=o,ne!==null?t=0:(se=null,fe=0,t=oe)}if(t!==0){if(t===2&&(o=jl(e),o!==0&&(r=o,t=ts(e,o))),t===1)throw n=_r,Zt(e,0),Nt(e,r),je(e,b()),n;if(t===6)Nt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Up(o)&&(t=Bo(e,r),t===2&&(i=jl(e),i!==0&&(r=i,t=ts(e,i))),t===1))throw n=_r,Zt(e,0),Nt(e,r),je(e,b()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Yt(e,Ee,ct);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=Gs+500-b(),10<t)){if(Co(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Il(Yt.bind(null,e,Ee,ct),t);break}Yt(e,Ee,ct);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-qe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=b()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vp(r/1960))-r,10<r){e.timeoutHandle=Il(Yt.bind(null,e,Ee,ct),r);break}Yt(e,Ee,ct);break;case 5:Yt(e,Ee,ct);break;default:throw Error(S(329))}}}return je(e,b()),e.callbackNode===n?Hf.bind(null,e):null}function ts(e,t){var n=sr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=Bo(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&ns(t)),e}function ns(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Up(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!et(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~Xs,t&=~oi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function xu(e){if($&6)throw Error(S(327));Nn();var t=Co(e,0);if(!(t&1))return je(e,b()),null;var n=Bo(e,t);if(e.tag!==0&&n===2){var r=jl(e);r!==0&&(t=r,n=ts(e,r))}if(n===1)throw n=_r,Zt(e,0),Nt(e,t),je(e,b()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,Ee,ct),je(e,b()),null}function Ks(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Mn=b()+500,ei&&Bt())}}function nn(e){Pt!==null&&Pt.tag===0&&!($&6)&&Nn();var t=$;$|=1;var n=Ue.transition,r=V;try{if(Ue.transition=null,V=1,e)return e()}finally{V=r,Ue.transition=n,$=t,!($&6)&&Bt()}}function Zs(){Oe=xn.current,Y(xn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vp(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(Os(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zo();break;case 3:Ln(),Y(_e),Y(ve),As();break;case 5:Ds(r);break;case 4:Ln();break;case 13:Y(K);break;case 19:Y(K);break;case 10:Ms(r.type._context);break;case 22:case 23:Zs()}n=n.return}if(se=e,ne=e=$t(e.current,null),fe=Oe=t,oe=0,_r=null,Xs=oi=tn=0,Ee=sr=null,Gt!==null){for(t=0;t<Gt.length;t++)if(n=Gt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Gt=null}return e}function Wf(e,t){do{var n=ne;try{if(Rs(),co.current=Do,Fo){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Fo=!1}if(en=0,le=re=Z=null,ir=!1,kr=0,Ys.current=null,n===null||n.return===null){oe=1,_r=t,ne=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=fe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=s,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=su(l);if(g!==null){g.flags&=-257,au(g,l,s,i,t),g.mode&1&&lu(i,c,t),t=g,a=c;var x=t.updateQueue;if(x===null){var v=new Set;v.add(a),t.updateQueue=v}else x.add(a);break e}else{if(!(t&1)){lu(i,c,t),Js();break e}a=Error(S(426))}}else if(G&&s.mode&1){var O=su(l);if(O!==null){!(O.flags&65536)&&(O.flags|=256),au(O,l,s,i,t),Ts(Rn(a,s));break e}}i=a=Rn(a,s),oe!==4&&(oe=2),sr===null?sr=[i]:sr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=jf(i,a,t);ba(i,f);break e;case 1:s=a;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Mt===null||!Mt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Pf(i,s,t);ba(i,w);break e}}i=i.return}while(i!==null)}Xf(n)}catch(C){t=C,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function Qf(){var e=Ao.current;return Ao.current=Do,e===null?Do:e}function Js(){(oe===0||oe===3||oe===2)&&(oe=4),se===null||!(tn&268435455)&&!(oi&268435455)||Nt(se,fe)}function Bo(e,t){var n=$;$|=2;var r=Qf();(se!==e||fe!==t)&&(ct=null,Zt(e,t));do try{Bp();break}catch(o){Wf(e,o)}while(!0);if(Rs(),$=n,Ao.current=r,ne!==null)throw Error(S(261));return se=null,fe=0,oe}function Bp(){for(;ne!==null;)Yf(ne)}function Hp(){for(;ne!==null&&!m0();)Yf(ne)}function Yf(e){var t=Kf(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?Xf(e):ne=t,Ys.current=null}function Xf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$p(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ne=null;return}}else if(n=Ip(n,t,Oe),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);oe===0&&(oe=5)}function Yt(e,t,n){var r=V,o=Ue.transition;try{Ue.transition=null,V=1,Wp(e,t,n,r)}finally{Ue.transition=o,V=r}return null}function Wp(e,t,n,r){do Nn();while(Pt!==null);if($&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(C0(e,i),e===se&&(ne=se=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||br||(br=!0,Zf(Eo,function(){return Nn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ue.transition,Ue.transition=null;var l=V;V=1;var s=$;$|=4,Ys.current=null,Dp(e,n),Uf(n,e),cp(Rl),_o=!!Ll,Rl=Ll=null,e.current=n,Ap(n),h0(),$=s,V=l,Ue.transition=i}else e.current=n;if(br&&(br=!1,Pt=e,Uo=o),i=e.pendingLanes,i===0&&(Mt=null),g0(n.stateNode),je(e,b()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Vo)throw Vo=!1,e=bl,bl=null,e;return Uo&1&&e.tag!==0&&Nn(),i=e.pendingLanes,i&1?e===es?ar++:(ar=0,es=e):ar=0,Bt(),null}function Nn(){if(Pt!==null){var e=_c(Uo),t=Ue.transition,n=V;try{if(Ue.transition=null,V=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,Uo=0,$&6)throw Error(S(331));var o=$;for($|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(P=c;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:lr(8,d,i)}var m=d.child;if(m!==null)m.return=d,P=m;else for(;P!==null;){d=P;var h=d.sibling,g=d.return;if(Df(d),d===c){P=null;break}if(h!==null){h.return=g,P=h;break}P=g}}}var x=i.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var O=v.sibling;v.sibling=null,v=O}while(v!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:lr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,P=f;break e}P=i.return}}var u=e.current;for(P=u;P!==null;){l=P;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,P=p;else e:for(l=u;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ri(9,s)}}catch(C){q(s,s.return,C)}if(s===l){P=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,P=w;break e}P=s.return}}if($=o,Bt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Ko,e)}catch{}r=!0}return r}finally{V=n,Ue.transition=t}}return!1}function Su(e,t,n){t=Rn(n,t),t=jf(e,t,1),e=Rt(e,t,1),t=we(),e!==null&&(Lr(e,1,t),je(e,t))}function q(e,t,n){if(e.tag===3)Su(e,e,n);else for(;t!==null;){if(t.tag===3){Su(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=Rn(n,e),e=Pf(t,e,1),t=Rt(t,e,1),e=we(),t!==null&&(Lr(t,1,e),je(t,e));break}}t=t.return}}function Qp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(fe&n)===n&&(oe===4||oe===3&&(fe&130023424)===fe&&500>b()-Gs?Zt(e,0):Xs|=n),je(e,t)}function Gf(e,t){t===0&&(e.mode&1?(t=Hr,Hr<<=1,!(Hr&130023424)&&(Hr=4194304)):t=1);var n=we();e=vt(e,t),e!==null&&(Lr(e,t,n),je(e,n))}function Yp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gf(e,n)}function Xp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Gf(e,n)}var Kf;Kf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Mp(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,G&&t.flags&1048576&&Jc(t,Lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;po(e,t),e=t.pendingProps;var o=zn(t,ve.current);_n(t,n),o=Us(null,t,r,e,o,n);var i=Bs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,Oo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,$s(t),o.updater=ti,t.stateNode=o,o._reactInternals=t,Bl(t,r,e,n),t=Ql(null,t,r,!0,i,n)):(t.tag=0,G&&i&&zs(t),ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(po(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Kp(r),e=Xe(r,e),o){case 0:t=Wl(null,t,r,e,n);break e;case 1:t=fu(null,t,r,e,n);break e;case 11:t=uu(null,t,r,e,n);break e;case 14:t=cu(null,t,r,Xe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Wl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),fu(e,t,r,o,n);case 3:e:{if(Lf(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,tf(e,t),Io(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Rn(Error(S(423)),t),t=du(e,t,r,n,o);break e}else if(r!==o){o=Rn(Error(S(424)),t),t=du(e,t,r,n,o);break e}else for(Te=Lt(t.stateNode.containerInfo.firstChild),Le=t,G=!0,Ke=null,n=lf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),r===o){t=gt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return sf(t),e===null&&Al(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ml(r,o)?l=null:i!==null&&Ml(r,i)&&(t.flags|=32),Tf(e,t),ge(e,t,l,n),t.child;case 6:return e===null&&Al(t),null;case 13:return Rf(e,t,n);case 4:return Fs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),uu(e,t,r,o,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(Ro,r._currentValue),r._currentValue=l,i!==null)if(et(i.value,l)){if(i.children===o.children&&!_e.current){t=gt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=mt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Vl(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Vl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_n(t,n),o=Be(o),r=r(o),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,o=Xe(r,t.pendingProps),o=Xe(r.type,o),cu(e,t,r,o,n);case 15:return zf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),po(e,t),t.tag=1,Ne(r)?(e=!0,Oo(t)):e=!1,_n(t,n),rf(t,r,o),Bl(t,r,o,n),Ql(null,t,r,!0,e,n);case 19:return Mf(e,t,n);case 22:return Of(e,t,n)}throw Error(S(156,t.tag))};function Zf(e,t){return Sc(e,t)}function Gp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new Gp(e,t,n,r)}function qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kp(e){if(typeof e=="function")return qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vs)return 11;if(e===gs)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")qs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case cn:return Jt(n.children,o,i,t);case ys:l=8,o|=8;break;case dl:return e=Ve(12,n,t,o|2),e.elementType=dl,e.lanes=i,e;case pl:return e=Ve(13,n,t,o),e.elementType=pl,e.lanes=i,e;case ml:return e=Ve(19,n,t,o),e.elementType=ml,e.lanes=i,e;case oc:return ii(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nc:l=10;break e;case rc:l=9;break e;case vs:l=11;break e;case gs:l=14;break e;case Et:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ve(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Jt(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function ii(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=oc,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ui(0),this.expirationTimes=Ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ui(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function bs(e,t,n,r,o,i,l,s,a){return e=new Zp(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ve(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$s(i),e}function Jp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jf(e){if(!e)return At;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Kc(e,n,t)}return t}function qf(e,t,n,r,o,i,l,s,a){return e=bs(n,r,!0,e,o,i,l,s,a),e.context=Jf(null),n=e.current,r=we(),o=It(n),i=mt(r,o),i.callback=t??null,Rt(n,i,o),e.current.lanes=o,Lr(e,o,r),je(e,r),e}function li(e,t,n,r){var o=t.current,i=we(),l=It(o);return n=Jf(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(o,t,l),e!==null&&(be(e,o,l,i),uo(e,o,l)),l}function Ho(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ea(e,t){ku(e,t),(e=e.alternate)&&ku(e,t)}function qp(){return null}var bf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ta(e){this._internalRoot=e}si.prototype.render=ta.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));li(e,t,null,null)};si.prototype.unmount=ta.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){li(null,e,null,null)}),t[yt]=null}};function si(e){this._internalRoot=e}si.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&Oc(e)}};function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function bp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ho(l);i.call(c)}}var l=qf(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=l,e[yt]=l.current,vr(e.nodeType===8?e.parentNode:e),nn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Ho(a);s.call(c)}}var a=bs(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=a,e[yt]=a.current,vr(e.nodeType===8?e.parentNode:e),nn(function(){li(t,a,n,r)}),a}function ui(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Ho(l);s.call(a)}}li(t,l,e,o)}else l=bp(n,t,e,o,r);return Ho(l)}Nc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qn(t.pendingLanes);n!==0&&(Ss(t,n|1),je(t,b()),!($&6)&&(Mn=b()+500,Bt()))}break;case 13:nn(function(){var r=vt(e,1);if(r!==null){var o=we();be(r,e,1,o)}}),ea(e,1)}};ks=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=we();be(t,e,134217728,n)}ea(e,134217728)}};jc=function(e){if(e.tag===13){var t=It(e),n=vt(e,t);if(n!==null){var r=we();be(n,e,t,r)}ea(e,t)}};Pc=function(){return V};zc=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Cl=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=bo(r);if(!o)throw Error(S(90));lc(r),vl(r,o)}}}break;case"textarea":ac(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};hc=Ks;yc=nn;var em={usingClientEntryPoint:!1,Events:[Mr,mn,bo,pc,mc,Ks]},Gn={findFiberByHostInstance:Xt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tm={bundleType:Gn.bundleType,version:Gn.version,rendererPackageName:Gn.rendererPackageName,rendererConfig:Gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wc(e),e===null?null:e.stateNode},findFiberByHostInstance:Gn.findFiberByHostInstance||qp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{Ko=eo.inject(tm),st=eo}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=em;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!na(t))throw Error(S(200));return Jp(e,t,null,n)};Ie.createRoot=function(e,t){if(!na(e))throw Error(S(299));var n=!1,r="",o=bf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=bs(e,1,!1,null,null,n,!1,r,o),e[yt]=t.current,vr(e.nodeType===8?e.parentNode:e),new ta(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=wc(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return nn(e)};Ie.hydrate=function(e,t,n){if(!ai(t))throw Error(S(200));return ui(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!na(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=bf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=qf(t,null,e,1,n??null,o,!1,i,l),e[yt]=t.current,vr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new si(t)};Ie.render=function(e,t,n){if(!ai(t))throw Error(S(200));return ui(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!ai(e))throw Error(S(40));return e._reactRootContainer?(nn(function(){ui(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Ie.unstable_batchedUpdates=Ks;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ai(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ui(e,t,n,!1,r)};Ie.version="18.2.0-next-9e3b772b8-20220608";function ed(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ed)}catch(e){console.error(e)}}ed(),Ju.exports=Ie;var nm=Ju.exports,Cu=nm;cl.createRoot=Cu.createRoot,cl.hydrateRoot=Cu.hydrateRoot;var td={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_u=Je.createContext&&Je.createContext(td),rm=["attr","size","title"];function om(e,t){if(e==null)return{};var n=im(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function im(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Wo(){return Wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wo.apply(this,arguments)}function Nu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Qo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nu(Object(n),!0).forEach(function(r){lm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lm(e,t,n){return t=sm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sm(e){var t=am(e,"string");return typeof t=="symbol"?t:String(t)}function am(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nd(e){return e&&e.map((t,n)=>Je.createElement(t.tag,Qo({key:n},t.attr),nd(t.child)))}function Ht(e){return t=>Je.createElement(um,Wo({attr:Qo({},e.attr)},t),nd(e.child))}function um(e){var t=n=>{var{attr:r,size:o,title:i}=e,l=om(e,rm),s=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Je.createElement("svg",Wo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:Qo(Qo({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&Je.createElement("title",null,i),e.children)};return _u!==void 0?Je.createElement(_u.Consumer,null,n=>t(n)):t(td)}function ju(e){return Ht({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"},child:[]}]})(e)}function Pu(e){return Ht({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"},child:[]}]})(e)}function cm(e){return Ht({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function zu(e){return Ht({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"},child:[]}]})(e)}function Ou(e){return Ht({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"},child:[]}]})(e)}function Tu(e){return Ht({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"},child:[]}]})(e)}const fm=()=>{const[e,t]=T.useState(!1),n=()=>{t(!e)};return y.jsxs("div",{children:[y.jsx("button",{className:"fixed top-4 right-4 z-[99] md:hidden text-2xl bg-white p-3 rounded-lg shadow-lg active:shadow-inner active:bg-slate-100",onClick:n,children:y.jsx(cm,{})}),e?y.jsxs("div",{className:"fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20",children:[y.jsxs("a",{onClick:n,href:"#main",className:"w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150",children:[y.jsx(ju,{size:20}),y.jsx("span",{className:"pl-4",children:"Home"})]}),y.jsxs("a",{onClick:n,href:"#education",className:"w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150",children:[y.jsx(Tu,{size:20}),y.jsx("span",{className:"pl-4",children:"Education"})]}),y.jsxs("a",{onClick:n,href:"#projects",className:"w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150",children:[y.jsx(zu,{size:20}),y.jsx("span",{className:"pl-4",children:"Projects"})]}),y.jsxs("a",{onClick:n,href:"#about",className:"w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150",children:[y.jsx(Ou,{size:20}),y.jsx("span",{className:"pl-4",children:"Resume/CV"})]}),y.jsxs("a",{onClick:n,href:"#contact",className:"w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150",children:[y.jsx(Pu,{size:20}),y.jsx("span",{className:"pl-4",children:"Contacts"})]})]}):"",y.jsx("div",{className:"md:block hidden fixed left-0 top-1/2 transform -translate-y-1/2 z-10",children:y.jsxs("div",{className:"flex flex-col",children:[y.jsxs("a",{href:"#main",className:"group bg-white rounded-xl m-2 p-4 cursor-pointer shadow-lg hover:shadow-emerald-200 hover:scale-110 ease-in duration-150 relative",children:[y.jsx(ju,{size:20}),y.jsx("span",{className:"absolute invisible group-hover:visible text-center rounded-r-md p-1 bg-white shadow-[rgba(0,0,10,0.5)_5px_2px_5px_0px] shadow-emerald-200",style:{left:"100%",top:"50%",transform:"translateY(-50%)",width:"100px"},children:"Home"})]}),y.jsxs("a",{href:"#education",className:"group bg-white rounded-xl m-2 p-4 cursor-pointer shadow-lg hover:shadow-emerald-200 hover:scale-110 ease-in duration-150 relative",children:[y.jsx(Tu,{size:20}),y.jsx("span",{className:"absolute invisible group-hover:visible text-center rounded-r-md p-1 bg-white shadow-[rgba(0,0,10,0.5)_5px_2px_5px_0px] shadow-emerald-200",style:{left:"100%",top:"50%",transform:"translateY(-50%)",width:"100px"},children:"Education"})]}),y.jsxs("a",{href:"#projects",className:"group bg-white rounded-xl m-2 p-4 cursor-pointer shadow-lg hover:shadow-emerald-200 hover:scale-110 ease-in duration-150 relative",children:[y.jsx(zu,{size:20}),y.jsx("span",{className:"absolute invisible group-hover:visible text-center rounded-r-md p-1 bg-white shadow-[rgba(0,0,10,0.5)_5px_2px_5px_0px] shadow-emerald-200",style:{left:"100%",top:"50%",transform:"translateY(-50%)",width:"100px"},children:"Projects"})]}),y.jsxs("a",{href:"#about",className:"group bg-white rounded-xl m-2 p-4 cursor-pointer shadow-lg hover:shadow-emerald-200 hover:scale-110 ease-in duration-150 relative",children:[y.jsx(Ou,{size:20}),y.jsx("span",{className:"absolute invisible group-hover:visible text-center rounded-r-md p-1 bg-white shadow-[rgba(0,0,10,0.5)_5px_2px_5px_0px] shadow-emerald-200",style:{left:"100%",top:"50%",transform:"translateY(-50%)",width:"100px"},children:"About"})]}),y.jsxs("a",{href:"#contact",className:"group bg-white rounded-xl m-2 p-4 cursor-pointer shadow-lg hover:shadow-emerald-200 hover:scale-110 ease-in duration-150 relative",children:[y.jsx(Pu,{size:20}),y.jsx("span",{className:"absolute invisible group-hover:visible text-center rounded-r-md p-1 bg-white shadow-[rgba(0,0,10,0.5)_5px_2px_5px_0px] shadow-emerald-200",style:{left:"100%",top:"50%",transform:"translateY(-50%)",width:"100px"},children:"Contact"})]})]})})]})};function ci(e,t,n,r){return new(n||(n=Promise))(function(o,i){function l(c){try{a(r.next(c))}catch(d){i(d)}}function s(c){try{a(r.throw(c))}catch(d){i(d)}}function a(c){var d;c.done?o(c.value):(d=c.value,d instanceof n?d:new n(function(m){m(d)})).then(l,s)}a((r=r.apply(e,t||[])).next())})}function Ft(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(a){return function(c){return function(d){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&d[0]?r.return:d[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,d[1])).done)return o;switch(r=0,o&&(d=[2&d[0],o.value]),d[0]){case 0:case 1:o=d;break;case 4:return l.label++,{value:d[1],done:!1};case 5:l.label++,r=d[1],d=[0];continue;case 7:d=l.ops.pop(),l.trys.pop();continue;default:if(o=l.trys,!((o=o.length>0&&o[o.length-1])||d[0]!==6&&d[0]!==2)){l=0;continue}if(d[0]===3&&(!o||d[1]>o[0]&&d[1]<o[3])){l.label=d[1];break}if(d[0]===6&&l.label<o[1]){l.label=o[1],o=d;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(d);break}o[2]&&l.ops.pop(),l.trys.pop();continue}d=t.call(e,l)}catch(m){d=[6,m],r=0}finally{n=o=0}if(5&d[0])throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}([a,c])}}}function rs(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ze(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(t===void 0||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l}function lt(e,t,n){if(n||arguments.length===2)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function Lu(e,t,n,r,o){for(var i=[],l=5;l<arguments.length;l++)i[l-5]=arguments[l];return ci(this,void 0,void 0,function(){var s,a,c,d,m,h;return Ft(this,function(g){switch(g.label){case 0:g.trys.push([0,12,13,14]),s=rs(i),a=s.next(),g.label=1;case 1:if(a.done)return[3,11];switch(c=a.value,typeof c){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,dm(e,t,c,n,r,o)];case 3:return g.sent(),[3,10];case 4:return[4,rd(c)];case 5:return g.sent(),[3,10];case 6:return[4,c.apply(void 0,lt([e,t,n,r,o],Ze(i),!1))];case 7:return g.sent(),[3,10];case 8:return[4,c];case 9:g.sent(),g.label=10;case 10:return a=s.next(),[3,1];case 11:return[3,14];case 12:return d=g.sent(),m={error:d},[3,14];case 13:try{a&&!a.done&&(h=s.return)&&h.call(s)}finally{if(m)throw m.error}return[7];case 14:return[2]}})})}function dm(e,t,n,r,o,i){return ci(this,void 0,void 0,function(){var l,s;return Ft(this,function(a){switch(a.label){case 0:return l=e.textContent||"",s=function(c,d){var m=Ze(d).slice(0);return lt(lt([],Ze(c),!1),[NaN],!1).findIndex(function(h,g){return m[g]!==h})}(l,n),[4,pm(e,lt(lt([],Ze(hm(l,t,s)),!1),Ze(mm(n,t,s)),!1),r,o,i)];case 1:return a.sent(),[2]}})})}function rd(e){return ci(this,void 0,void 0,function(){return Ft(this,function(t){switch(t.label){case 0:return[4,new Promise(function(n){return setTimeout(n,e)})];case 1:return t.sent(),[2]}})})}function pm(e,t,n,r,o){return ci(this,void 0,void 0,function(){var i,l,s,a,c,d,m,h,g,x,v,O,f;return Ft(this,function(u){switch(u.label){case 0:if(i=t,o){for(l=0,s=1;s<t.length;s++)if(a=Ze([t[s-1],t[s]],2),c=a[0],(d=a[1]).length>c.length||d===""){l=s;break}i=t.slice(l,t.length)}u.label=1;case 1:u.trys.push([1,6,7,8]),m=rs(function(p){var w,C,_,k,z,H,R;return Ft(this,function(X){switch(X.label){case 0:w=function(ze){return Ft(this,function(Qe){switch(Qe.label){case 0:return[4,{op:function(xt){return requestAnimationFrame(function(){return xt.textContent=ze})},opCode:function(xt){var Vn=xt.textContent||"";return ze===""||Vn.length>ze.length?"DELETE":"WRITING"}}];case 1:return Qe.sent(),[2]}})},X.label=1;case 1:X.trys.push([1,6,7,8]),C=rs(p),_=C.next(),X.label=2;case 2:return _.done?[3,5]:(k=_.value,[5,w(k)]);case 3:X.sent(),X.label=4;case 4:return _=C.next(),[3,2];case 5:return[3,8];case 6:return z=X.sent(),H={error:z},[3,8];case 7:try{_&&!_.done&&(R=C.return)&&R.call(C)}finally{if(H)throw H.error}return[7];case 8:return[2]}})}(i)),h=m.next(),u.label=2;case 2:return h.done?[3,5]:(g=h.value,x=g.opCode(e)==="WRITING"?n+n*(Math.random()-.5):r+r*(Math.random()-.5),g.op(e),[4,rd(x)]);case 3:u.sent(),u.label=4;case 4:return h=m.next(),[3,2];case 5:return[3,8];case 6:return v=u.sent(),O={error:v},[3,8];case 7:try{h&&!h.done&&(f=m.return)&&f.call(m)}finally{if(O)throw O.error}return[7];case 8:return[2]}})})}function mm(e,t,n){var r,o;return n===void 0&&(n=0),Ft(this,function(i){switch(i.label){case 0:r=t(e),o=r.length,i.label=1;case 1:return n<o?[4,r.slice(0,++n).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}function hm(e,t,n){var r,o;return n===void 0&&(n=0),Ft(this,function(i){switch(i.label){case 0:r=t(e),o=r.length,i.label=1;case 1:return o>n?[4,r.slice(0,--o).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}var ym="index-module_type__E-SaG";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var od=T.memo(T.forwardRef(function(e,t){var n=e.sequence,r=e.repeat,o=e.className,i=e.speed,l=i===void 0?40:i,s=e.deletionSpeed,a=e.omitDeletionAnimation,c=a!==void 0&&a,d=e.preRenderFirstString,m=d!==void 0&&d,h=e.wrapper,g=h===void 0?"span":h,x=e.splitter,v=x===void 0?function(N){return lt([],Ze(N),!1)}:x,O=e.cursor,f=O===void 0||O,u=e.style,p=function(N,I){var A={};for(var ie in N)Object.prototype.hasOwnProperty.call(N,ie)&&I.indexOf(ie)<0&&(A[ie]=N[ie]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function"){var ke=0;for(ie=Object.getOwnPropertySymbols(N);ke<ie.length;ke++)I.indexOf(ie[ke])<0&&Object.prototype.propertyIsEnumerable.call(N,ie[ke])&&(A[ie[ke]]=N[ie[ke]])}return A}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),w=p["aria-label"],C=p["aria-hidden"],_=p.role;s||(s=l);var k=new Array(2).fill(40);[l,s].forEach(function(N,I){switch(typeof N){case"number":k[I]=Math.abs(N-100);break;case"object":var A=N.type,ie=N.value;if(typeof ie!="number")break;A==="keyStrokeDelayInMs"&&(k[I]=ie)}});var z,H,R,X,ze,Qe,xt=k[0],Vn=k[1],St=function(N,I){I===void 0&&(I=null);var A=T.useRef(I);return T.useEffect(function(){N&&(typeof N=="function"?N(A.current):N.current=A.current)},[N]),A}(t),ln=ym;z=o?"".concat(f?ln+" ":"").concat(o):f?ln:"",H=T.useRef(function(){var N,I=n;r===1/0?N=Lu:typeof r=="number"&&(I=Array(1+r).fill(n).flat());var A=N?lt(lt([],Ze(I),!1),[N],!1):lt([],Ze(I),!1);return Lu.apply(void 0,lt([St.current,v,xt,Vn,c],Ze(A),!1)),function(){St.current}}),R=T.useRef(),X=T.useRef(!1),ze=T.useRef(!1),Qe=Ze(T.useState(0),2)[1],X.current&&(ze.current=!0),T.useEffect(function(){return X.current||(R.current=H.current(),X.current=!0),Qe(function(N){return N+1}),function(){ze.current&&R.current&&R.current()}},[]);var j=g,L=m?n.find(function(N){return typeof N=="string"})||"":null;return Je.createElement(j,{"aria-hidden":C,"aria-label":w,role:_,style:u,className:z,children:w?Je.createElement("span",{"aria-hidden":"true",ref:St,children:L}):L,ref:w?void 0:St})}),function(e,t){return!0});function vm(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function gm(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var wm=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(gm(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=vm(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",Yo="-moz-",F="-webkit-",id="comm",ra="rule",oa="decl",xm="@import",ld="@keyframes",Sm="@layer",km=Math.abs,fi=String.fromCharCode,Em=Object.assign;function Cm(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function sd(e){return e.trim()}function _m(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function os(e,t){return e.indexOf(t)}function ce(e,t){return e.charCodeAt(t)|0}function Nr(e,t,n){return e.slice(t,n)}function rt(e){return e.length}function ia(e){return e.length}function to(e,t){return t.push(e),e}function Nm(e,t){return e.map(t).join("")}var di=1,In=1,ad=0,Pe=0,te=0,An="";function pi(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:di,column:In,length:l,return:""}}function Kn(e,t){return Em(pi("",null,null,"",null,null,0),e,{length:-e.length},t)}function jm(){return te}function Pm(){return te=Pe>0?ce(An,--Pe):0,In--,te===10&&(In=1,di--),te}function Re(){return te=Pe<ad?ce(An,Pe++):0,In++,te===10&&(In=1,di++),te}function ut(){return ce(An,Pe)}function vo(){return Pe}function $r(e,t){return Nr(An,e,t)}function jr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ud(e){return di=In=1,ad=rt(An=e),Pe=0,[]}function cd(e){return An="",e}function go(e){return sd($r(Pe-1,is(e===91?e+2:e===40?e+1:e)))}function zm(e){for(;(te=ut())&&te<33;)Re();return jr(e)>2||jr(te)>3?"":" "}function Om(e,t){for(;--t&&Re()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return $r(e,vo()+(t<6&&ut()==32&&Re()==32))}function is(e){for(;Re();)switch(te){case e:return Pe;case 34:case 39:e!==34&&e!==39&&is(te);break;case 40:e===41&&is(e);break;case 92:Re();break}return Pe}function Tm(e,t){for(;Re()&&e+te!==57;)if(e+te===84&&ut()===47)break;return"/*"+$r(t,Pe-1)+"*"+fi(e===47?e:Re())}function Lm(e){for(;!jr(ut());)Re();return $r(e,Pe)}function Rm(e){return cd(wo("",null,null,null,[""],e=ud(e),0,[0],e))}function wo(e,t,n,r,o,i,l,s,a){for(var c=0,d=0,m=l,h=0,g=0,x=0,v=1,O=1,f=1,u=0,p="",w=o,C=i,_=r,k=p;O;)switch(x=u,u=Re()){case 40:if(x!=108&&ce(k,m-1)==58){os(k+=D(go(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:k+=go(u);break;case 9:case 10:case 13:case 32:k+=zm(x);break;case 92:k+=Om(vo()-1,7);continue;case 47:switch(ut()){case 42:case 47:to(Mm(Tm(Re(),vo()),t,n),a);break;default:k+="/"}break;case 123*v:s[c++]=rt(k)*f;case 125*v:case 59:case 0:switch(u){case 0:case 125:O=0;case 59+d:f==-1&&(k=D(k,/\f/g,"")),g>0&&rt(k)-m&&to(g>32?Mu(k+";",r,n,m-1):Mu(D(k," ","")+";",r,n,m-2),a);break;case 59:k+=";";default:if(to(_=Ru(k,t,n,c,d,o,s,p,w=[],C=[],m),i),u===123)if(d===0)wo(k,t,_,_,w,i,m,s,C);else switch(h===99&&ce(k,3)===110?100:h){case 100:case 108:case 109:case 115:wo(e,_,_,r&&to(Ru(e,_,_,0,0,o,s,p,o,w=[],m),C),o,C,m,s,r?w:C);break;default:wo(k,_,_,_,[""],C,0,s,C)}}c=d=g=0,v=f=1,p=k="",m=l;break;case 58:m=1+rt(k),g=x;default:if(v<1){if(u==123)--v;else if(u==125&&v++==0&&Pm()==125)continue}switch(k+=fi(u),u*v){case 38:f=d>0?1:(k+="\f",-1);break;case 44:s[c++]=(rt(k)-1)*f,f=1;break;case 64:ut()===45&&(k+=go(Re())),h=ut(),d=m=rt(p=k+=Lm(vo())),u++;break;case 45:x===45&&rt(k)==2&&(v=0)}}return i}function Ru(e,t,n,r,o,i,l,s,a,c,d){for(var m=o-1,h=o===0?i:[""],g=ia(h),x=0,v=0,O=0;x<r;++x)for(var f=0,u=Nr(e,m+1,m=km(v=l[x])),p=e;f<g;++f)(p=sd(v>0?h[f]+" "+u:D(u,/&\f/g,h[f])))&&(a[O++]=p);return pi(e,t,n,o===0?ra:s,a,c,d)}function Mm(e,t,n){return pi(e,t,n,id,fi(jm()),Nr(e,2,-2),0)}function Mu(e,t,n,r){return pi(e,t,n,oa,Nr(e,0,r),Nr(e,r+1,-1),r)}function jn(e,t){for(var n="",r=ia(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Im(e,t,n,r){switch(e.type){case Sm:if(e.children.length)break;case xm:case oa:return e.return=e.return||e.value;case id:return"";case ld:return e.return=e.value+"{"+jn(e.children,r)+"}";case ra:e.value=e.props.join(",")}return rt(n=jn(e.children,r))?e.return=e.value+"{"+n+"}":""}function $m(e){var t=ia(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Fm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Dm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Am=function(t,n,r){for(var o=0,i=0;o=i,i=ut(),o===38&&i===12&&(n[r]=1),!jr(i);)Re();return $r(t,Pe)},Vm=function(t,n){var r=-1,o=44;do switch(jr(o)){case 0:o===38&&ut()===12&&(n[r]=1),t[r]+=Am(Pe-1,n,r);break;case 2:t[r]+=go(o);break;case 4:if(o===44){t[++r]=ut()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=fi(o)}while(o=Re());return t},Um=function(t,n){return cd(Vm(ud(t),n))},Iu=new WeakMap,Bm=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Iu.get(r))&&!o){Iu.set(t,!0);for(var i=[],l=Um(n,i),s=r.props,a=0,c=0;a<l.length;a++)for(var d=0;d<s.length;d++,c++)t.props[c]=i[a]?l[a].replace(/&\f/g,s[d]):s[d]+" "+l[a]}}},Hm=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function fd(e,t){switch(Cm(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Yo+e+he+e+e;case 6828:case 4268:return F+e+he+e+e;case 6165:return F+e+he+"flex-"+e+e;case 5187:return F+e+D(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return F+e+he+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return F+e+he+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+he+D(e,"shrink","negative")+e;case 5292:return F+e+he+D(e,"basis","preferred-size")+e;case 6060:return F+"box-"+D(e,"-grow","")+F+e+he+D(e,"grow","positive")+e;case 4554:return F+D(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rt(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Yo+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~os(e,"stretch")?fd(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ce(e,t+1)!==115)break;case 6444:switch(ce(e,rt(e)-3-(~os(e,"!important")&&10))){case 107:return D(e,":",":"+F)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(ce(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(ce(e,t+11)){case 114:return F+e+he+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+he+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+he+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+he+e+e}return e}var Wm=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case oa:t.return=fd(t.value,t.length);break;case ld:return jn([Kn(t,{value:D(t.value,"@","@"+F)})],o);case ra:if(t.length)return Nm(t.props,function(i){switch(_m(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return jn([Kn(t,{props:[D(i,/:(read-\w+)/,":"+Yo+"$1")]})],o);case"::placeholder":return jn([Kn(t,{props:[D(i,/:(plac\w+)/,":"+F+"input-$1")]}),Kn(t,{props:[D(i,/:(plac\w+)/,":"+Yo+"$1")]}),Kn(t,{props:[D(i,/:(plac\w+)/,he+"input-$1")]})],o)}return""})}},Qm=[Wm],Ym=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var O=v.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||Qm,i={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var O=v.getAttribute("data-emotion").split(" "),f=1;f<O.length;f++)i[O[f]]=!0;s.push(v)});var a,c=[Bm,Hm];{var d,m=[Im,Fm(function(v){d.insert(v)})],h=$m(c.concat(o,m)),g=function(O){return jn(Rm(O),h)};a=function(O,f,u,p){d=u,g(O?O+"{"+f.styles+"}":f.styles),p&&(x.inserted[f.name]=!0)}}var x={key:n,sheet:new wm({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return x.sheet.hydrate(s),x},dd={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=typeof Symbol=="function"&&Symbol.for,la=ae?Symbol.for("react.element"):60103,sa=ae?Symbol.for("react.portal"):60106,mi=ae?Symbol.for("react.fragment"):60107,hi=ae?Symbol.for("react.strict_mode"):60108,yi=ae?Symbol.for("react.profiler"):60114,vi=ae?Symbol.for("react.provider"):60109,gi=ae?Symbol.for("react.context"):60110,aa=ae?Symbol.for("react.async_mode"):60111,wi=ae?Symbol.for("react.concurrent_mode"):60111,xi=ae?Symbol.for("react.forward_ref"):60112,Si=ae?Symbol.for("react.suspense"):60113,Xm=ae?Symbol.for("react.suspense_list"):60120,ki=ae?Symbol.for("react.memo"):60115,Ei=ae?Symbol.for("react.lazy"):60116,Gm=ae?Symbol.for("react.block"):60121,Km=ae?Symbol.for("react.fundamental"):60117,Zm=ae?Symbol.for("react.responder"):60118,Jm=ae?Symbol.for("react.scope"):60119;function Fe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case la:switch(e=e.type,e){case aa:case wi:case mi:case yi:case hi:case Si:return e;default:switch(e=e&&e.$$typeof,e){case gi:case xi:case Ei:case ki:case vi:return e;default:return t}}case sa:return t}}}function pd(e){return Fe(e)===wi}U.AsyncMode=aa;U.ConcurrentMode=wi;U.ContextConsumer=gi;U.ContextProvider=vi;U.Element=la;U.ForwardRef=xi;U.Fragment=mi;U.Lazy=Ei;U.Memo=ki;U.Portal=sa;U.Profiler=yi;U.StrictMode=hi;U.Suspense=Si;U.isAsyncMode=function(e){return pd(e)||Fe(e)===aa};U.isConcurrentMode=pd;U.isContextConsumer=function(e){return Fe(e)===gi};U.isContextProvider=function(e){return Fe(e)===vi};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===la};U.isForwardRef=function(e){return Fe(e)===xi};U.isFragment=function(e){return Fe(e)===mi};U.isLazy=function(e){return Fe(e)===Ei};U.isMemo=function(e){return Fe(e)===ki};U.isPortal=function(e){return Fe(e)===sa};U.isProfiler=function(e){return Fe(e)===yi};U.isStrictMode=function(e){return Fe(e)===hi};U.isSuspense=function(e){return Fe(e)===Si};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===mi||e===wi||e===yi||e===hi||e===Si||e===Xm||typeof e=="object"&&e!==null&&(e.$$typeof===Ei||e.$$typeof===ki||e.$$typeof===vi||e.$$typeof===gi||e.$$typeof===xi||e.$$typeof===Km||e.$$typeof===Zm||e.$$typeof===Jm||e.$$typeof===Gm)};U.typeOf=Fe;dd.exports=U;var qm=dd.exports,md=qm,bm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},e1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hd={};hd[md.ForwardRef]=bm;hd[md.Memo]=e1;var t1=!0;function yd(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var ua=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||t1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},vd=function(t,n,r){ua(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function n1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var r1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},o1=/[A-Z]|^ms/g,i1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,gd=function(t){return t.charCodeAt(1)===45},$u=function(t){return t!=null&&typeof t!="boolean"},al=Dm(function(e){return gd(e)?e:e.replace(o1,"-$&").toLowerCase()}),Fu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(i1,function(r,o,i){return ot={name:o,styles:i,next:ot},o})}return r1[t]!==1&&!gd(t)&&typeof n=="number"&&n!==0?n+"px":n};function Pr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ot={name:n.name,styles:n.styles,next:ot},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)ot={name:r.name,styles:r.styles,next:ot},r=r.next;var o=n.styles+";";return o}return l1(e,t,n)}case"function":{if(e!==void 0){var i=ot,l=n(e);return ot=i,Pr(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function l1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Pr(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":$u(l)&&(r+=al(i)+":"+Fu(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)$u(l[s])&&(r+=al(i)+":"+Fu(i,l[s])+";");else{var a=Pr(e,t,l);switch(i){case"animation":case"animationName":{r+=al(i)+":"+a+";";break}default:r+=i+"{"+a+"}"}}}return r}var Du=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ot,ca=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";ot=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Pr(r,n,l)):i+=l[0];for(var s=1;s<t.length;s++)i+=Pr(r,n,t[s]),o&&(i+=l[s]);Du.lastIndex=0;for(var a="",c;(c=Du.exec(i))!==null;)a+="-"+c[1];var d=n1(i)+a;return{name:d,styles:i,next:ot}},s1=function(t){return t()},a1=ga.useInsertionEffect?ga.useInsertionEffect:!1,wd=a1||s1,fa={}.hasOwnProperty,xd=T.createContext(typeof HTMLElement<"u"?Ym({key:"css"}):null);xd.Provider;var Sd=function(t){return T.forwardRef(function(n,r){var o=T.useContext(xd);return t(n,o,r)})},kd=T.createContext({}),ls="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",u1=function(t,n){var r={};for(var o in n)fa.call(n,o)&&(r[o]=n[o]);return r[ls]=t,r},c1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return ua(n,r,o),wd(function(){return vd(n,r,o)}),null},f1=Sd(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[ls],i=[r],l="";typeof e.className=="string"?l=yd(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var s=ca(i,void 0,T.useContext(kd));l+=t.key+"-"+s.name;var a={};for(var c in e)fa.call(e,c)&&c!=="css"&&c!==ls&&(a[c]=e[c]);return a.ref=n,a.className=l,T.createElement(T.Fragment,null,T.createElement(c1,{cache:t,serialized:s,isStringTag:typeof o=="string"}),T.createElement(o,a))}),d1=f1,p1=y.Fragment;function ee(e,t,n){return fa.call(t,"css")?y.jsx(d1,u1(e,t),n):y.jsx(e,t,n)}function Ed(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ca(t)}var E=function(){var t=Ed.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},m1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var s in i)i[s]&&s&&(l&&(l+=" "),l+=s)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function h1(e,t,n){var r=[],o=yd(e,r,n);return r.length<2?n:o+t(r)}var y1=function(t){var n=t.cache,r=t.serializedArr;return wd(function(){for(var o=0;o<r.length;o++)vd(n,r[o],!1)}),null},ul=Sd(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,d=new Array(c),m=0;m<c;m++)d[m]=arguments[m];var h=ca(d,t.registered);return r.push(h),ua(t,h,!1),t.key+"-"+h.name},i=function(){for(var c=arguments.length,d=new Array(c),m=0;m<c;m++)d[m]=arguments[m];return h1(t.registered,o,m1(d))},l={css:o,cx:i,theme:T.useContext(kd)},s=e.children(l);return n=!0,T.createElement(T.Fragment,null,T.createElement(y1,{cache:t,serializedArr:r}),s)}),v1=Object.defineProperty,g1=(e,t,n)=>t in e?v1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,no=(e,t,n)=>(g1(e,typeof t!="symbol"?t+"":t,n),n),ss=new Map,ro=new WeakMap,Au=0,w1=void 0;function x1(e){return e?(ro.has(e)||(Au+=1,ro.set(e,Au.toString())),ro.get(e)):"0"}function S1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?x1(e.root):e[t]}`).toString()}function k1(e){const t=S1(e);let n=ss.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(s=>{var a;const c=s.isIntersecting&&o.some(d=>s.intersectionRatio>=d);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(d=>{d(c,s)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},ss.set(t,n)}return n}function Cd(e,t,n={},r=w1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:i,elements:l}=k1(n),s=l.get(e)||[];return l.has(e)||l.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),ss.delete(o))}}function E1(e){return typeof e.children!="function"}var Vu=class extends T.Component{constructor(e){super(e),no(this,"node",null),no(this,"_unobserveCb",null),no(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),no(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),E1(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=Cd(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:g,entry:x}=this.state;return e({inView:g,entry:x,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:s,trackVisibility:a,delay:c,initialInView:d,fallbackInView:m,...h}=this.props;return T.createElement(t||"div",{ref:this.handleNode,...h},e)}};function _d({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:s,fallbackInView:a,onChange:c}={}){var d;const[m,h]=T.useState(null),g=T.useRef(),[x,v]=T.useState({inView:!!s,entry:void 0});g.current=c,T.useEffect(()=>{if(l||!m)return;let p;return p=Cd(m,(w,C)=>{v({inView:w,entry:C}),g.current&&g.current(w,C),C.isIntersecting&&i&&p&&(p(),p=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,m,o,r,i,l,n,a,t]);const O=(d=x.entry)==null?void 0:d.target,f=T.useRef();!m&&O&&!i&&!l&&f.current!==O&&(f.current=O,v({inView:!!s,entry:void 0}));const u=[h,x.inView,x.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var Nd={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),pa=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),_i=Symbol.for("react.strict_mode"),Ni=Symbol.for("react.profiler"),ji=Symbol.for("react.provider"),Pi=Symbol.for("react.context"),C1=Symbol.for("react.server_context"),zi=Symbol.for("react.forward_ref"),Oi=Symbol.for("react.suspense"),Ti=Symbol.for("react.suspense_list"),Li=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),_1=Symbol.for("react.offscreen"),jd;jd=Symbol.for("react.module.reference");function We(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case da:switch(e=e.type,e){case Ci:case Ni:case _i:case Oi:case Ti:return e;default:switch(e=e&&e.$$typeof,e){case C1:case Pi:case zi:case Ri:case Li:case ji:return e;default:return t}}case pa:return t}}}B.ContextConsumer=Pi;B.ContextProvider=ji;B.Element=da;B.ForwardRef=zi;B.Fragment=Ci;B.Lazy=Ri;B.Memo=Li;B.Portal=pa;B.Profiler=Ni;B.StrictMode=_i;B.Suspense=Oi;B.SuspenseList=Ti;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return We(e)===Pi};B.isContextProvider=function(e){return We(e)===ji};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===da};B.isForwardRef=function(e){return We(e)===zi};B.isFragment=function(e){return We(e)===Ci};B.isLazy=function(e){return We(e)===Ri};B.isMemo=function(e){return We(e)===Li};B.isPortal=function(e){return We(e)===pa};B.isProfiler=function(e){return We(e)===Ni};B.isStrictMode=function(e){return We(e)===_i};B.isSuspense=function(e){return We(e)===Oi};B.isSuspenseList=function(e){return We(e)===Ti};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ci||e===Ni||e===_i||e===Oi||e===Ti||e===_1||typeof e=="object"&&e!==null&&(e.$$typeof===Ri||e.$$typeof===Li||e.$$typeof===ji||e.$$typeof===Pi||e.$$typeof===zi||e.$$typeof===jd||e.getModuleId!==void 0)};B.typeOf=We;Nd.exports=B;var N1=Nd.exports;E`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;E`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;E`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;E`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;E`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;E`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const j1=E`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,P1=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,z1=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,O1=E`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T1=E`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ma=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,L1=E`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,R1=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,M1=E`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,I1=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$1=E`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,F1=E`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,D1=E`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function A1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=ma,iterationCount:o=1}){return Ed`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function V1(e){return e==null}function U1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Pd(e,t){return n=>n?e():t()}function zr(e){return Pd(e,()=>null)}function as(e){return zr(()=>({opacity:0}))(e)}const Mi=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=ma,triggerOnce:s=!1,className:a,style:c,childClassName:d,childStyle:m,children:h,onVisibilityChange:g}=e,x=T.useMemo(()=>A1({keyframes:l,duration:o}),[o,l]);return V1(h)?null:U1(h)?ee(H1,{...e,animationStyles:x,children:String(h)}):N1.isFragment(h)?ee(zd,{...e,animationStyles:x}):ee(p1,{children:T.Children.map(h,(v,O)=>{if(!T.isValidElement(v))return null;const f=r+(t?O*o*n:0);switch(v.type){case"ol":case"ul":return ee(ul,{children:({cx:u})=>ee(v.type,{...v.props,className:u(a,v.props.className),style:Object.assign({},c,v.props.style),children:ee(Mi,{...e,children:v.props.children})})});case"li":return ee(Vu,{threshold:i,triggerOnce:s,onChange:g,children:({inView:u,ref:p})=>ee(ul,{children:({cx:w})=>ee(v.type,{...v.props,ref:p,className:w(d,v.props.className),css:zr(()=>x)(u),style:Object.assign({},m,v.props.style,as(!u),{animationDelay:f+"ms"})})})});default:return ee(Vu,{threshold:i,triggerOnce:s,onChange:g,children:({inView:u,ref:p})=>ee("div",{ref:p,className:a,css:zr(()=>x)(u),style:Object.assign({},c,as(!u),{animationDelay:f+"ms"}),children:ee(ul,{children:({cx:w})=>ee(v.type,{...v.props,className:w(d,v.props.className),style:Object.assign({},m,v.props.style)})})})})}})})},B1={display:"inline-block",whiteSpace:"pre"},H1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:s=!1,className:a,style:c,children:d,onVisibilityChange:m}=e,{ref:h,inView:g}=_d({triggerOnce:s,threshold:l,onChange:m});return Pd(()=>ee("div",{ref:h,className:a,style:Object.assign({},c,B1),children:d.split("").map((x,v)=>ee("span",{css:zr(()=>t)(g),style:{animationDelay:o+v*i*r+"ms"},children:x},v))}),()=>ee(zd,{...e,children:d}))(n)},zd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:s}=e,{ref:a,inView:c}=_d({triggerOnce:r,threshold:n,onChange:s});return ee("div",{ref:a,className:o,css:zr(()=>t)(c),style:Object.assign({},i,as(!c)),children:l})};E`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;E`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const W1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Q1=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Y1=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,X1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,G1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,K1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Z1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,J1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,q1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,b1=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,eh=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,th=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,nh=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function rh(e,t,n){switch(n){case"bottom-left":return t?Q1:P1;case"bottom-right":return t?Y1:z1;case"down":return e?t?G1:T1:t?X1:O1;case"left":return e?t?Z1:L1:t?K1:ma;case"right":return e?t?q1:M1:t?J1:R1;case"top-left":return t?b1:I1;case"top-right":return t?eh:$1;case"up":return e?t?nh:D1:t?th:F1;default:return t?W1:j1}}const Or=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=T.useMemo(()=>rh(t,r,n),[t,n,r]);return ee(Mi,{keyframes:i,...o})};E`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;E`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;E`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;E`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;E`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;E`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;const oh=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ih=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;function lh(e){return e?ih:oh}const sh=e=>{const{reverse:t=!1,...n}=e,r=T.useMemo(()=>lh(t),[t]);return ee(Mi,{keyframes:r,...n})};E`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const ah=E`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,uh=E`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ch=E`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,fh=E`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,dh=E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,ph=E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,mh=E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,hh=E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function yh(e,t){switch(t){case"down":return e?dh:ah;case"right":return e?mh:ch;case"up":return e?hh:fh;case"left":default:return e?ph:uh}}const Xo=e=>{const{direction:t,reverse:n=!1,...r}=e,o=T.useMemo(()=>yh(n,t),[t,n]);return ee(Mi,{keyframes:o,...r})};E`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function vh(e){return Ht({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function gh(e){return Ht({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}const wh=()=>y.jsxs("div",{id:"main",children:[y.jsx("img",{className:"w-full h-screen object-cover object-left",src:"https://images.unsplash.com/photo-1622819584099-e04ccb14e8a7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),y.jsx("div",{className:"w-full h-screen absolute top-0 left-0 bg-white/50",children:y.jsxs("div",{className:"max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center",children:[y.jsx(Xo,{direction:"right",triggerOnce:!0,children:y.jsxs("h1",{className:"sm:text-5xl text-center text-4xl font-bold text-gray-800",children:["My name is ",y.jsx("span",{className:" rounded-xl bg-white shadow-md pl-2 pb-2",children:y.jsx(od,{sequence:["Kevin Nguyen",5e3,"An Nguyen",5e3],wrapper:"span",speed:25,style:{fontSize:"1em",display:"inline-block"},repeat:1/0})})]})}),y.jsx(Xo,{children:y.jsx("h2",{className:"flex sm:text-3xl text-2xl pt-6 text-gray-800",children:"I'm a Software Engineer"})}),y.jsx("div",{className:"flex justify-between pt-6 max-w-[200px] w-24",children:y.jsxs(sh,{delay:1e3,cascade:!0,children:[y.jsx("a",{href:"https://github.com/johnnyblaze1999",target:"_blank",rel:"noopener noreferrer",children:y.jsx(vh,{className:"cursor-pointer p-2 hover:scale-110 rounded-xl ease-out duration-150",size:50})}),y.jsx("a",{href:"https://www.linkedin.com/in/kevinnguyennorco/",target:"_blank",rel:"noopener noreferrer",children:y.jsx(gh,{className:"cursor-pointer p-2 hover:scale-110 rounded-xl ease-out duration-150",size:50})})]})})]})})]}),xh=({year:e,degree:t,school:n,duration:r,details:o})=>y.jsx("ol",{className:"flex flex-col md:flex-row relative border-l border-stone-200",children:y.jsxs("li",{className:"mb-10 ml-4",children:[y.jsx("div",{className:"absolute w-3 h-3 bg-[#D4A09F] rounded-full mt-1.5 -left-1.5 border-white"}),y.jsxs(Xo,{direction:"right",triggerOnce:!0,children:[y.jsxs("p",{className:"flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm",children:[y.jsx("span",{className:"inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md",children:e}),y.jsx("span",{className:"text-lg font-semibold text-[#809D9D]",children:t}),y.jsxs("span",{className:"my-1 text-sm font-normal leading-none text-stone-400",children:[y.jsx("b",{children:n})," || ",r]})]}),y.jsx("p",{className:"my-2 text-base font-normal text-stone-500",children:o})]})]})}),Sh=[{year:2017,degree:"Highschool Diploma",school:"Eleanor Roosevelt Highschool",duration:"June 2017"},{year:2021,degree:"Associate of Science in Computer Science",school:"Norco College",duration:"February 2018 - June 2021",details:"Graduated with great distinction. GPA 3.9"},{year:2024,degree:"Bachelor of Science in Computer Science",school:"California State University, Fullerton",duration:"August 2021 - May 2024",details:"Graduated with GPA 3.6"}];function kh(){return y.jsxs("div",{id:"education",className:"max-w-[1040px] m-auto md:pl-20 p-4 pt-16",children:[y.jsx("h1",{className:" pb-6 text-4xl font-bold text-center text-[#001b5e]",children:"Education"}),Sh.map((e,t)=>y.jsx(xh,{year:e.year,degree:e.degree,school:e.school,duration:e.duration,details:e.details},t))]})}const an=({img:e,title:t,description:n,url:r,tools:o})=>{const i=o.split(", ");return y.jsx(Or,{direction:"up",triggerOnce:!0,children:y.jsxs("div",{className:"relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-tr from-gray-400 to-emerald-400 hover:scale-110 ease-in duration-150",children:[y.jsx("img",{src:e,alt:"/",className:"rounded-xl object-cover h-96 w-full group-hover:opacity-10 "}),y.jsxs("div",{className:"hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",children:[y.jsx("h3",{className:"text-2xl font-bold text-white tracking-wider text-center",children:t}),y.jsx("div",{className:"flex justify-center space-x-2",children:i.map((l,s)=>y.jsx("button",{className:"px-2 my-2 py-1 bg-[#ECA19D] text-white text-sm rounded-full",children:l},s))}),y.jsx("a",{href:r,target:"_blank",rel:"noopener norefferer",children:y.jsx("div",{className:"flex justify-center",children:y.jsx("p",{className:"relative overflow-hidden inline-block text-center p-1 px-4 my-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer transition ease-in hover:scale-110 active:scale-90",children:y.jsx("span",{className:"relative z-10",children:"View Project"})})})}),y.jsxs("details",{className:"text-white text-center font-semibold rounded-lg hover:cursor-pointer",close:!0,children:[y.jsx("summary",{className:"text-sm select-none",children:"Details"}),y.jsx("div",{className:"mt-1 text-sm",children:n})]})]})]})})},Eh="/portfolio/assets/gradebookProject-VCy2A2WG.png",Ch="/portfolio/assets/aichatbotProject-C3nGAX1M.png",_h="/portfolio/assets/portfolio-D7y76Sn6.png",Nh="/portfolio/assets/chromeExtension-D5FX8Smg.png",jh="/portfolio/assets/hotelWebpage-CJ3eI9CN.png",Ph="/portfolio/assets/unityGame-BO44vD7F.png",zh=()=>y.jsxs("div",{id:"projects",className:"max-w-[1040px] m-auto md:pl-20 p-4 py-16",children:[y.jsx(Or,{direction:"down",triggerOnce:!0,children:y.jsx("h1",{className:"text-4xl font-bold text-center text-[#001b5e]",children:"Projects"})}),y.jsx(Or,{direction:"up",triggerOnce:!0,children:y.jsx("p",{className:"text-center text-lg py-8",children:"Here are some of the projects that I've done over the years, including what I have learned in class and my personal projects. Feel free to check around for more projects in my Github repo."})}),y.jsxs("div",{className:"grid sm:grid-cols-2 gap-12",children:[y.jsx(an,{img:_h,title:"Personal Portfolio",description:"My personal portfolio webpage showcasing my skills, experiences, and projects.",url:"https://johnnyblaze1999.github.io/portfolio",tools:"ReactJS, Vite, TailwindCSS"}),y.jsx(an,{img:Ph,title:"Unity Game",description:"A fun desktop game where the player dodges incoming projectiles and survive under the time limit.",url:"/",tools:"Unity, C#"}),y.jsx(an,{img:Nh,title:"Fullyhack Chrome Extension",description:"A chrome extension that return the weather status in real-time base on the given city's name. This is a 24h project for FullyHack",url:"https://github.com/Fullyhacks2024/Fullyhacks_Project",tools:"HTML, CSS, Javascript"}),y.jsx(an,{img:Ch,title:"BotPress Chatbot",description:"AI Chatbot that use a given dataset along with clever prompt engineering to assist customers for a quicker and better customer service.",url:"https://github.com/johnnyblaze1999/CapstonePrototype",tools:"Javascript, BotPress, AI"}),y.jsx(an,{img:Eh,title:"Gradebook Database",description:"Database system designed to assist professors and students on keeping track of their courses, grades, class's session, and standing status.",url:"https://github.com/johnnyblaze1999/Gradebook-database",tools:"MySQL, OpenOffice, HTML, CSS, PHP"}),y.jsx(an,{img:jh,title:"Hotel Webpage",description:"A simple styled Hotel website to support guests on seeking information and hotel's schedule.",url:"https://github.com/johnnyblaze1999/hotel-project",tools:"HTML, CSS"})]})]}),Oh=()=>{const e=T.useRef(null);return T.useEffect(()=>{const t=n=>{};return window.addEventListener("message",t,!1),()=>{window.removeEventListener("message",t)}},[]),T.useEffect(()=>{if(e.current){const t=e.current.src,n=[];e.current.src=t+"?"+n.join("&")}},[]),T.useEffect(()=>{const t=()=>{window.innerHeight>=2160?e.current.style.marginBottom="-1200px":window.innerHeight>=1240?e.current.style.marginBottom="-300px":e.current.style.marginBottom="-100px"};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[]),y.jsxs("div",{id:"contact",children:[y.jsx(Xo,{triggerOnce:!0,className:"m-auto md:pl-20 pt-16 bg-[#FFAF99]",children:y.jsx("h1",{className:"pt-4 text-4xl font-bold text-center text-[#001b5e]",children:"Contact Me"})}),y.jsx("div",{className:"bg-[#FFAF99] relative flex items-center justify-center h-auto w-full overflow-hidden",children:y.jsx("iframe",{ref:e,id:"JotFormIFrame-240828238793063",src:"https://form.jotform.com/240828238793063",className:"w-full h-screen",scrolling:"yes"})})]})},Th="/portfolio/assets/profilePic-Ccgut6-v.jpg",Lh=()=>y.jsx("div",{id:"about",className:"hero bg-base-200 max-w-[1040px] mx-auto py-16",children:y.jsxs("div",{className:"hero-content lg:flex lg:items-center lg:justify-around p-10 bg-slate-100 rounded-2xl",children:[y.jsxs("div",{className:"text-center lg:text-left",children:[y.jsx("h1",{className:"text-5xl font-bold text-[#001b5e] mb-4",children:"About Me"}),y.jsx("p",{className:"pt-6 px-3",children:"Hi there 👋"}),y.jsx(Or,{children:y.jsx("p",{className:"py-6 px-3 mb-4",children:"My name is Kevin Nguyen, and my Vietnamese name is An Nguyen. I was born and raise in Vietnam, and I am an upcoming graduate Computer Science student at CSUF. With a solid foundation in computer science and hands-on experience in various projects, I thrive on tackling challenges headfirst. I love solving problems and working with others."})}),y.jsx("a",{href:"https://drive.google.com/file/d/13d07Sq9xcuqhNBUGooUICR0ryM3DxN2N/view",target:"_blank",rel:"noopener norefererrer",children:y.jsx("button",{className:"btn btn-primary bg-black text-white p-2 ml-3 mb-6 rounded-md transition hover:scale-110",children:"My Resume"})})]}),y.jsx(Or,{children:y.jsx("img",{src:Th,className:"max-w-xs md:max-w-sm rounded-full mb-10 mx-auto hover:shadow-inner hover:shadow-emerald-400"})})]})}),Rh=()=>y.jsx("div",{children:y.jsx("footer",{className:"footer footer-center p-4 bg-base-300 text-center text-base-content",children:y.jsx("aside",{children:y.jsxs("p",{children:["Copyright © 2024 - Made with"," ",y.jsx(od,{sequence:["love",5e3,"passion",5e3,"sweat and tears",200],wrapper:"span",speed:25,style:{fontSize:"1em",display:"inline-block"},repeat:1/0}),"by "," ",y.jsx("b",{children:"Kevin Nguyen"})," 💚"]})})})});function Mh(){return y.jsxs("div",{children:[y.jsx(fm,{}),y.jsx(wh,{}),y.jsx(kh,{}),y.jsx(zh,{}),y.jsx(Lh,{}),y.jsx(Oh,{}),y.jsx(Rh,{})]})}cl.createRoot(document.getElementById("root")).render(y.jsx(Je.StrictMode,{children:y.jsx(Mh,{})}));

function Pd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Du={exports:{}},Yo={},Vu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr=Symbol.for("react.element"),jd=Symbol.for("react.portal"),Od=Symbol.for("react.fragment"),Td=Symbol.for("react.strict_mode"),Md=Symbol.for("react.profiler"),Ld=Symbol.for("react.provider"),Rd=Symbol.for("react.context"),Id=Symbol.for("react.forward_ref"),$d=Symbol.for("react.suspense"),Fd=Symbol.for("react.memo"),Dd=Symbol.for("react.lazy"),ma=Symbol.iterator;function Vd(e){return e===null||typeof e!="object"?null:(e=ma&&e[ma]||e["@@iterator"],typeof e=="function"?e:null)}var Uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bu=Object.assign,Wu={};function In(e,t,n){this.props=e,this.context=t,this.refs=Wu,this.updater=n||Uu}In.prototype.isReactComponent={};In.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};In.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hu(){}Hu.prototype=In.prototype;function as(e,t,n){this.props=e,this.context=t,this.refs=Wu,this.updater=n||Uu}var us=as.prototype=new Hu;us.constructor=as;Bu(us,In.prototype);us.isPureReactComponent=!0;var ha=Array.isArray,Qu=Object.prototype.hasOwnProperty,cs={current:null},Yu={key:!0,ref:!0,__self:!0,__source:!0};function Gu(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Qu.call(t,r)&&!Yu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:jr,type:e,key:l,ref:i,props:o,_owner:cs.current}}function Ud(e,t){return{$$typeof:jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fs(e){return typeof e=="object"&&e!==null&&e.$$typeof===jr}function Bd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ya=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bd(""+e.key):t.toString(36)}function ro(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case jr:case jd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ml(i,0):r,ha(o)?(n="",e!=null&&(n=e.replace(ya,"$&/")+"/"),ro(o,t,n,"",function(c){return c})):o!=null&&(fs(o)&&(o=Ud(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ya,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ha(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Ml(l,s);i+=ro(l,t,n,a,o)}else if(a=Vd(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Ml(l,s++),i+=ro(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function $r(e,t,n){if(e==null)return e;var r=[],o=0;return ro(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Wd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},oo={transition:null},Hd={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:oo,ReactCurrentOwner:cs};L.Children={map:$r,forEach:function(e,t,n){$r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $r(e,function(){t++}),t},toArray:function(e){return $r(e,function(t){return t})||[]},only:function(e){if(!fs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=In;L.Fragment=Od;L.Profiler=Md;L.PureComponent=as;L.StrictMode=Td;L.Suspense=$d;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hd;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=cs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Qu.call(t,a)&&!Yu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:jr,type:e.type,key:o,ref:l,props:r,_owner:i}};L.createContext=function(e){return e={$$typeof:Rd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ld,_context:e},e.Consumer=e};L.createElement=Gu;L.createFactory=function(e){var t=Gu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Id,render:e}};L.isValidElement=fs;L.lazy=function(e){return{$$typeof:Dd,_payload:{_status:-1,_result:e},_init:Wd}};L.memo=function(e,t){return{$$typeof:Fd,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=oo.transition;oo.transition={};try{e()}finally{oo.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return xe.current.useCallback(e,t)};L.useContext=function(e){return xe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};L.useEffect=function(e,t){return xe.current.useEffect(e,t)};L.useId=function(){return xe.current.useId()};L.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return xe.current.useMemo(e,t)};L.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};L.useRef=function(e){return xe.current.useRef(e)};L.useState=function(e){return xe.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return xe.current.useTransition()};L.version="18.2.0";Vu.exports=L;var M=Vu.exports;const Je=zd(M),va=Pd({__proto__:null,default:Je},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd=M,Yd=Symbol.for("react.element"),Gd=Symbol.for("react.fragment"),Xd=Object.prototype.hasOwnProperty,Kd=Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zd={key:!0,ref:!0,__self:!0,__source:!0};function Xu(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Xd.call(t,r)&&!Zd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Yd,type:e,key:l,ref:i,props:o,_owner:Kd.current}}Yo.Fragment=Gd;Yo.jsx=Xu;Yo.jsxs=Xu;Du.exports=Yo;var A=Du.exports,ai={},Ku={exports:{}},Re={},Zu={exports:{}},Ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,O){var N=_.length;_.push(O);e:for(;0<N;){var R=N-1>>>1,D=_[R];if(0<o(D,O))_[R]=O,_[N]=D,N=R;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var O=_[0],N=_.pop();if(N!==O){_[0]=N;e:for(var R=0,D=_.length,oe=D>>>1;R<oe;){var ke=2*(R+1)-1,Tl=_[ke],Wt=ke+1,Ir=_[Wt];if(0>o(Tl,N))Wt<D&&0>o(Ir,Tl)?(_[R]=Ir,_[Wt]=N,R=Wt):(_[R]=Tl,_[ke]=N,R=ke);else if(Wt<D&&0>o(Ir,N))_[R]=Ir,_[Wt]=N,R=Wt;else break e}}return O}function o(_,O){var N=_.sortIndex-O.sortIndex;return N!==0?N:_.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],d=1,m=null,h=3,v=!1,w=!1,y=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=_)r(c),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(c)}}function g(_){if(y=!1,p(_),!w)if(n(a)!==null)w=!0,St(E);else{var O=n(c);O!==null&&ln(g,O.startTime-_)}}function E(_,O){w=!1,y&&(y=!1,f(z),z=-1),v=!0;var N=h;try{for(p(O),m=n(a);m!==null&&(!(m.expirationTime>O)||_&&!G());){var R=m.callback;if(typeof R=="function"){m.callback=null,h=m.priorityLevel;var D=R(m.expirationTime<=O);O=e.unstable_now(),typeof D=="function"?m.callback=D:m===n(a)&&r(a),p(O)}else r(a);m=n(a)}if(m!==null)var oe=!0;else{var ke=n(c);ke!==null&&ln(g,ke.startTime-O),oe=!1}return oe}finally{m=null,h=N,v=!1}}var C=!1,S=null,z=-1,W=5,T=-1;function G(){return!(e.unstable_now()-T<W)}function ze(){if(S!==null){var _=e.unstable_now();T=_;var O=!0;try{O=S(!0,_)}finally{O?Qe():(C=!1,S=null)}}else C=!1}var Qe;if(typeof u=="function")Qe=function(){u(ze)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,Vn=xt.port2;xt.port1.onmessage=ze,Qe=function(){Vn.postMessage(null)}}else Qe=function(){j(ze,0)};function St(_){S=_,C||(C=!0,Qe())}function ln(_,O){z=j(function(){_(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,St(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var N=h;h=O;try{return _()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,O){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var N=h;h=_;try{return O()}finally{h=N}},e.unstable_scheduleCallback=function(_,O,N){var R=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?R+N:R):N=R,_){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=N+D,_={id:d++,callback:O,priorityLevel:_,startTime:N,expirationTime:D,sortIndex:-1},N>R?(_.sortIndex=N,t(c,_),n(a)===null&&_===n(c)&&(y?(f(z),z=-1):y=!0,ln(g,N-R))):(_.sortIndex=D,t(a,_),w||v||(w=!0,St(E))),_},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(_){var O=h;return function(){var N=h;h=O;try{return _.apply(this,arguments)}finally{h=N}}}})(Ju);Zu.exports=Ju;var Jd=Zu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu=M,Le=Jd;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bu=new Set,ur={};function nn(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(ur[e]=t,e=0;e<t.length;e++)bu.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ui=Object.prototype.hasOwnProperty,qd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ga={},wa={};function bd(e){return ui.call(wa,e)?!0:ui.call(ga,e)?!1:qd.test(e)?wa[e]=!0:(ga[e]=!0,!1)}function e0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function t0(e,t,n,r){if(t===null||typeof t>"u"||e0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var ds=/[\-:]([a-z])/g;function ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ds,ps);de[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ds,ps);de[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ds,ps);de[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function ms(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t0(t,n,o,r)&&(n=null),r||o===null?bd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=qu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fr=Symbol.for("react.element"),un=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),hs=Symbol.for("react.strict_mode"),ci=Symbol.for("react.profiler"),ec=Symbol.for("react.provider"),tc=Symbol.for("react.context"),ys=Symbol.for("react.forward_ref"),fi=Symbol.for("react.suspense"),di=Symbol.for("react.suspense_list"),vs=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),nc=Symbol.for("react.offscreen"),xa=Symbol.iterator;function Un(e){return e===null||typeof e!="object"?null:(e=xa&&e[xa]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Ll;function Zn(e){if(Ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ll=t&&t[1]||""}return`
`+Ll+e}var Rl=!1;function Il(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zn(e):""}function n0(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function pi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case un:return"Portal";case ci:return"Profiler";case hs:return"StrictMode";case fi:return"Suspense";case di:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tc:return(e.displayName||"Context")+".Consumer";case ec:return(e._context.displayName||"Context")+".Provider";case ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vs:return t=e.displayName||null,t!==null?t:pi(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return pi(e(t))}catch{}}return null}function r0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pi(t);case 8:return t===hs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function o0(e){var t=rc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){e._valueTracker||(e._valueTracker=o0(e))}function oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mi(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lc(e,t){t=t.checked,t!=null&&ms(e,"checked",t,!1)}function hi(e,t){lc(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yi(e,t.type,n):t.hasOwnProperty("defaultValue")&&yi(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ka(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yi(e,t,n){(t!=="number"||wo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function vi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Jn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function ic(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vr,ac=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l0=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){l0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),er[t]=er[e]})});function uc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||er.hasOwnProperty(e)&&er[e]?(""+t).trim():t+"px"}function cc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=uc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var i0=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wi(e,t){if(t){if(i0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function xi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ki=null,kn=null,En=null;function Aa(e){if(e=Mr(e)){if(typeof ki!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Jo(t),ki(e.stateNode,e.type,t))}}function fc(e){kn?En?En.push(e):En=[e]:kn=e}function dc(){if(kn){var e=kn,t=En;if(En=kn=null,Aa(e),t)for(e=0;e<t.length;e++)Aa(t[e])}}function pc(e,t){return e(t)}function mc(){}var $l=!1;function hc(e,t,n){if($l)return e(t,n);$l=!0;try{return pc(e,t,n)}finally{$l=!1,(kn!==null||En!==null)&&(mc(),dc())}}function fr(e,t){var n=e.stateNode;if(n===null)return null;var r=Jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var Ei=!1;if(ht)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Ei=!1}function s0(e,t,n,r,o,l,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var tr=!1,xo=null,So=!1,Ci=null,a0={onError:function(e){tr=!0,xo=e}};function u0(e,t,n,r,o,l,i,s,a){tr=!1,xo=null,s0.apply(a0,arguments)}function c0(e,t,n,r,o,l,i,s,a){if(u0.apply(this,arguments),tr){if(tr){var c=xo;tr=!1,xo=null}else throw Error(x(198));So||(So=!0,Ci=c)}}function rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Na(e){if(rn(e)!==e)throw Error(x(188))}function f0(e){var t=e.alternate;if(!t){if(t=rn(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Na(o),e;if(l===r)return Na(o),t;l=l.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function vc(e){return e=f0(e),e!==null?gc(e):null}function gc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gc(e);if(t!==null)return t;e=e.sibling}return null}var wc=Le.unstable_scheduleCallback,_a=Le.unstable_cancelCallback,d0=Le.unstable_shouldYield,p0=Le.unstable_requestPaint,b=Le.unstable_now,m0=Le.unstable_getCurrentPriorityLevel,ws=Le.unstable_ImmediatePriority,xc=Le.unstable_UserBlockingPriority,ko=Le.unstable_NormalPriority,h0=Le.unstable_LowPriority,Sc=Le.unstable_IdlePriority,Go=null,st=null;function y0(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Go,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:w0,v0=Math.log,g0=Math.LN2;function w0(e){return e>>>=0,e===0?32:31-(v0(e)/g0|0)|0}var Ur=64,Br=4194304;function qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=qn(s):(l&=i,l!==0&&(r=qn(l)))}else i=n&~o,i!==0?r=qn(i):l!==0&&(r=qn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),o=1<<n,r|=e[n],t&=~o;return r}function x0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-qe(l),s=1<<i,a=o[i];a===-1?(!(s&n)||s&r)&&(o[i]=x0(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function Ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kc(){var e=Ur;return Ur<<=1,!(Ur&4194240)&&(Ur=64),e}function Fl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function k0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function Ec(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cc,Ss,Ac,Nc,_c,Ni=!1,Wr=[],zt=null,jt=null,Ot=null,dr=new Map,pr=new Map,At=[],E0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pa(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(t.pointerId)}}function Wn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Mr(t),t!==null&&Ss(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function C0(e,t,n,r,o){switch(t){case"focusin":return zt=Wn(zt,e,t,n,r,o),!0;case"dragenter":return jt=Wn(jt,e,t,n,r,o),!0;case"mouseover":return Ot=Wn(Ot,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return dr.set(l,Wn(dr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,pr.set(l,Wn(pr.get(l)||null,e,t,n,r,o)),!0}return!1}function Pc(e){var t=Yt(e.target);if(t!==null){var n=rn(t);if(n!==null){if(t=n.tag,t===13){if(t=yc(n),t!==null){e.blockedOn=t,_c(e.priority,function(){Ac(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_i(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Si=r,n.target.dispatchEvent(r),Si=null}else return t=Mr(n),t!==null&&Ss(t),e.blockedOn=n,!1;t.shift()}return!0}function za(e,t,n){lo(e)&&n.delete(t)}function A0(){Ni=!1,zt!==null&&lo(zt)&&(zt=null),jt!==null&&lo(jt)&&(jt=null),Ot!==null&&lo(Ot)&&(Ot=null),dr.forEach(za),pr.forEach(za)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ni||(Ni=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,A0)))}function mr(e){function t(o){return Hn(o,e)}if(0<Wr.length){Hn(Wr[0],e);for(var n=1;n<Wr.length;n++){var r=Wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&Hn(zt,e),jt!==null&&Hn(jt,e),Ot!==null&&Hn(Ot,e),dr.forEach(t),pr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Pc(n),n.blockedOn===null&&At.shift()}var Cn=wt.ReactCurrentBatchConfig,Co=!0;function N0(e,t,n,r){var o=V,l=Cn.transition;Cn.transition=null;try{V=1,ks(e,t,n,r)}finally{V=o,Cn.transition=l}}function _0(e,t,n,r){var o=V,l=Cn.transition;Cn.transition=null;try{V=4,ks(e,t,n,r)}finally{V=o,Cn.transition=l}}function ks(e,t,n,r){if(Co){var o=_i(e,t,n,r);if(o===null)Xl(e,t,r,Ao,n),Pa(e,r);else if(C0(o,e,t,n,r))r.stopPropagation();else if(Pa(e,r),t&4&&-1<E0.indexOf(e)){for(;o!==null;){var l=Mr(o);if(l!==null&&Cc(l),l=_i(e,t,n,r),l===null&&Xl(e,t,r,Ao,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var Ao=null;function _i(e,t,n,r){if(Ao=null,e=gs(r),e=Yt(e),e!==null)if(t=rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ao=e,null}function zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m0()){case ws:return 1;case xc:return 4;case ko:case h0:return 16;case Sc:return 536870912;default:return 16}default:return 16}}var _t=null,Es=null,io=null;function jc(){if(io)return io;var e,t=Es,n=t.length,r,o="value"in _t?_t.value:_t.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return io=o.slice(e,1<r?1-r:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function ja(){return!1}function Ie(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Hr:ja,this.isPropagationStopped=ja,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=Ie($n),Tr=J({},$n,{view:0,detail:0}),P0=Ie(Tr),Dl,Vl,Qn,Xo=J({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:As,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(Dl=e.screenX-Qn.screenX,Vl=e.screenY-Qn.screenY):Vl=Dl=0,Qn=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Vl}}),Oa=Ie(Xo),z0=J({},Xo,{dataTransfer:0}),j0=Ie(z0),O0=J({},Tr,{relatedTarget:0}),Ul=Ie(O0),T0=J({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=Ie(T0),L0=J({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R0=Ie(L0),I0=J({},$n,{data:0}),Ta=Ie(I0),$0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=D0[e])?!!t[e]:!1}function As(){return V0}var U0=J({},Tr,{key:function(e){if(e.key){var t=$0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?F0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:As,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),B0=Ie(U0),W0=J({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ma=Ie(W0),H0=J({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:As}),Q0=Ie(H0),Y0=J({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),G0=Ie(Y0),X0=J({},Xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=Ie(X0),Z0=[9,13,27,32],Ns=ht&&"CompositionEvent"in window,nr=null;ht&&"documentMode"in document&&(nr=document.documentMode);var J0=ht&&"TextEvent"in window&&!nr,Oc=ht&&(!Ns||nr&&8<nr&&11>=nr),La=" ",Ra=!1;function Tc(e,t){switch(e){case"keyup":return Z0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function q0(e,t){switch(e){case"compositionend":return Mc(t);case"keypress":return t.which!==32?null:(Ra=!0,La);case"textInput":return e=t.data,e===La&&Ra?null:e;default:return null}}function b0(e,t){if(fn)return e==="compositionend"||!Ns&&Tc(e,t)?(e=jc(),io=Es=_t=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oc&&t.locale!=="ko"?null:t.data;default:return null}}var ep={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ep[e.type]:t==="textarea"}function Lc(e,t,n,r){fc(r),t=No(t,"onChange"),0<t.length&&(n=new Cs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var rr=null,hr=null;function tp(e){Qc(e,0)}function Ko(e){var t=mn(e);if(oc(t))return e}function np(e,t){if(e==="change")return t}var Rc=!1;if(ht){var Bl;if(ht){var Wl="oninput"in document;if(!Wl){var $a=document.createElement("div");$a.setAttribute("oninput","return;"),Wl=typeof $a.oninput=="function"}Bl=Wl}else Bl=!1;Rc=Bl&&(!document.documentMode||9<document.documentMode)}function Fa(){rr&&(rr.detachEvent("onpropertychange",Ic),hr=rr=null)}function Ic(e){if(e.propertyName==="value"&&Ko(hr)){var t=[];Lc(t,hr,e,gs(e)),hc(tp,t)}}function rp(e,t,n){e==="focusin"?(Fa(),rr=t,hr=n,rr.attachEvent("onpropertychange",Ic)):e==="focusout"&&Fa()}function op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(hr)}function lp(e,t){if(e==="click")return Ko(t)}function ip(e,t){if(e==="input"||e==="change")return Ko(t)}function sp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:sp;function yr(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ui.call(t,o)||!et(e[o],t[o]))return!1}return!0}function Da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Va(e,t){var n=Da(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Da(n)}}function $c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fc(){for(var e=window,t=wo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wo(e.document)}return t}function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ap(e){var t=Fc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$c(n.ownerDocument.documentElement,n)){if(r!==null&&_s(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Va(n,l);var i=Va(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var up=ht&&"documentMode"in document&&11>=document.documentMode,dn=null,Pi=null,or=null,zi=!1;function Ua(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||dn==null||dn!==wo(r)||(r=dn,"selectionStart"in r&&_s(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),or&&yr(or,r)||(or=r,r=No(Pi,"onSelect"),0<r.length&&(t=new Cs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionend:Qr("Transition","TransitionEnd")},Hl={},Dc={};ht&&(Dc=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function Zo(e){if(Hl[e])return Hl[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dc)return Hl[e]=t[n];return e}var Vc=Zo("animationend"),Uc=Zo("animationiteration"),Bc=Zo("animationstart"),Wc=Zo("transitionend"),Hc=new Map,Ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){Hc.set(e,t),nn(t,[e])}for(var Ql=0;Ql<Ba.length;Ql++){var Yl=Ba[Ql],cp=Yl.toLowerCase(),fp=Yl[0].toUpperCase()+Yl.slice(1);Vt(cp,"on"+fp)}Vt(Vc,"onAnimationEnd");Vt(Uc,"onAnimationIteration");Vt(Bc,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(Wc,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dp=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function Wa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,c0(r,t,void 0,e),e.currentTarget=null}function Qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;Wa(o,s,c),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;Wa(o,s,c),l=a}}}if(So)throw e=Ci,So=!1,Ci=null,e}function Q(e,t){var n=t[Li];n===void 0&&(n=t[Li]=new Set);var r=e+"__bubble";n.has(r)||(Yc(t,e,2,!1),n.add(r))}function Gl(e,t,n){var r=0;t&&(r|=4),Yc(n,e,r,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[Yr]){e[Yr]=!0,bu.forEach(function(n){n!=="selectionchange"&&(dp.has(n)||Gl(n,!1,e),Gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yr]||(t[Yr]=!0,Gl("selectionchange",!1,t))}}function Yc(e,t,n,r){switch(zc(t)){case 1:var o=N0;break;case 4:o=_0;break;default:o=ks}n=o.bind(null,t,n,e),o=void 0,!Ei||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Yt(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}hc(function(){var c=l,d=gs(n),m=[];e:{var h=Hc.get(e);if(h!==void 0){var v=Cs,w=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":v=B0;break;case"focusin":w="focus",v=Ul;break;case"focusout":w="blur",v=Ul;break;case"beforeblur":case"afterblur":v=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Oa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Q0;break;case Vc:case Uc:case Bc:v=M0;break;case Wc:v=G0;break;case"scroll":v=P0;break;case"wheel":v=K0;break;case"copy":case"cut":case"paste":v=R0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ma}var y=(t&4)!==0,j=!y&&e==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var u=c,p;u!==null;){p=u;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=fr(u,f),g!=null&&y.push(gr(u,g,p)))),j)break;u=u.return}0<y.length&&(h=new v(h,w,null,n,d),m.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Si&&(w=n.relatedTarget||n.fromElement)&&(Yt(w)||w[yt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?Yt(w):null,w!==null&&(j=rn(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(y=Oa,g="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ma,g="onPointerLeave",f="onPointerEnter",u="pointer"),j=v==null?h:mn(v),p=w==null?h:mn(w),h=new y(g,u+"leave",v,n,d),h.target=j,h.relatedTarget=p,g=null,Yt(d)===c&&(y=new y(f,u+"enter",w,n,d),y.target=p,y.relatedTarget=j,g=y),j=g,v&&w)t:{for(y=v,f=w,u=0,p=y;p;p=sn(p))u++;for(p=0,g=f;g;g=sn(g))p++;for(;0<u-p;)y=sn(y),u--;for(;0<p-u;)f=sn(f),p--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=sn(y),f=sn(f)}y=null}else y=null;v!==null&&Ha(m,h,v,y,!1),w!==null&&j!==null&&Ha(m,j,w,y,!0)}}e:{if(h=c?mn(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var E=np;else if(Ia(h))if(Rc)E=ip;else{E=op;var C=rp}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=lp);if(E&&(E=E(e,c))){Lc(m,E,n,d);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&yi(h,"number",h.value)}switch(C=c?mn(c):window,e){case"focusin":(Ia(C)||C.contentEditable==="true")&&(dn=C,Pi=c,or=null);break;case"focusout":or=Pi=dn=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Ua(m,n,d);break;case"selectionchange":if(up)break;case"keydown":case"keyup":Ua(m,n,d)}var S;if(Ns)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else fn?Tc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Oc&&n.locale!=="ko"&&(fn||z!=="onCompositionStart"?z==="onCompositionEnd"&&fn&&(S=jc()):(_t=d,Es="value"in _t?_t.value:_t.textContent,fn=!0)),C=No(c,z),0<C.length&&(z=new Ta(z,e,null,n,d),m.push({event:z,listeners:C}),S?z.data=S:(S=Mc(n),S!==null&&(z.data=S)))),(S=J0?q0(e,n):b0(e,n))&&(c=No(c,"onBeforeInput"),0<c.length&&(d=new Ta("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:c}),d.data=S))}Qc(m,t)})}function gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function No(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=fr(e,n),l!=null&&r.unshift(gr(e,l,o)),l=fr(e,t),l!=null&&r.push(gr(e,l,o))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ha(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=fr(n,l),a!=null&&i.unshift(gr(n,a,s))):o||(a=fr(n,l),a!=null&&i.push(gr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var pp=/\r\n?/g,mp=/\u0000|\uFFFD/g;function Qa(e){return(typeof e=="string"?e:""+e).replace(pp,`
`).replace(mp,"")}function Gr(e,t,n){if(t=Qa(t),Qa(e)!==t&&n)throw Error(x(425))}function _o(){}var ji=null,Oi=null;function Ti(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mi=typeof setTimeout=="function"?setTimeout:void 0,hp=typeof clearTimeout=="function"?clearTimeout:void 0,Ya=typeof Promise=="function"?Promise:void 0,yp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ya<"u"?function(e){return Ya.resolve(null).then(e).catch(vp)}:Mi;function vp(e){setTimeout(function(){throw e})}function Kl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);mr(t)}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ga(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Fn,wr="__reactProps$"+Fn,yt="__reactContainer$"+Fn,Li="__reactEvents$"+Fn,gp="__reactListeners$"+Fn,wp="__reactHandles$"+Fn;function Yt(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ga(e);e!==null;){if(n=e[lt])return n;e=Ga(e)}return t}e=n,n=e.parentNode}return null}function Mr(e){return e=e[lt]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Jo(e){return e[wr]||null}var Ri=[],hn=-1;function Ut(e){return{current:e}}function Y(e){0>hn||(e.current=Ri[hn],Ri[hn]=null,hn--)}function H(e,t){hn++,Ri[hn]=e.current,e.current=t}var Dt={},ve=Ut(Dt),Ae=Ut(!1),Jt=Dt;function zn(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function Po(){Y(Ae),Y(ve)}function Xa(e,t,n){if(ve.current!==Dt)throw Error(x(168));H(ve,t),H(Ae,n)}function Gc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,r0(e)||"Unknown",o));return J({},n,r)}function zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,Jt=ve.current,H(ve,e),H(Ae,Ae.current),!0}function Ka(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Gc(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,Y(Ae),Y(ve),H(ve,e)):Y(Ae),H(Ae,n)}var ft=null,qo=!1,Zl=!1;function Xc(e){ft===null?ft=[e]:ft.push(e)}function xp(e){qo=!0,Xc(e)}function Bt(){if(!Zl&&ft!==null){Zl=!0;var e=0,t=V;try{var n=ft;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,qo=!1}catch(o){throw ft!==null&&(ft=ft.slice(e+1)),wc(ws,Bt),o}finally{V=t,Zl=!1}}return null}var yn=[],vn=0,jo=null,Oo=0,Fe=[],De=0,qt=null,dt=1,pt="";function Ht(e,t){yn[vn++]=Oo,yn[vn++]=jo,jo=e,Oo=t}function Kc(e,t,n){Fe[De++]=dt,Fe[De++]=pt,Fe[De++]=qt,qt=e;var r=dt;e=pt;var o=32-qe(r)-1;r&=~(1<<o),n+=1;var l=32-qe(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,dt=1<<32-qe(t)+o|n<<o|r,pt=l+e}else dt=1<<l|n<<o|r,pt=e}function Ps(e){e.return!==null&&(Ht(e,1),Kc(e,1,0))}function zs(e){for(;e===jo;)jo=yn[--vn],yn[vn]=null,Oo=yn[--vn],yn[vn]=null;for(;e===qt;)qt=Fe[--De],Fe[De]=null,pt=Fe[--De],Fe[De]=null,dt=Fe[--De],Fe[De]=null}var Te=null,Oe=null,X=!1,Ke=null;function Zc(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Za(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Oe=Tt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:dt,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Oe=null,!0):!1;default:return!1}}function Ii(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $i(e){if(X){var t=Oe;if(t){var n=t;if(!Za(e,t)){if(Ii(e))throw Error(x(418));t=Tt(n.nextSibling);var r=Te;t&&Za(e,t)?Zc(r,n):(e.flags=e.flags&-4097|2,X=!1,Te=e)}}else{if(Ii(e))throw Error(x(418));e.flags=e.flags&-4097|2,X=!1,Te=e}}}function Ja(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Xr(e){if(e!==Te)return!1;if(!X)return Ja(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ti(e.type,e.memoizedProps)),t&&(t=Oe)){if(Ii(e))throw Jc(),Error(x(418));for(;t;)Zc(e,t),t=Tt(t.nextSibling)}if(Ja(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Tt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Te?Tt(e.stateNode.nextSibling):null;return!0}function Jc(){for(var e=Oe;e;)e=Tt(e.nextSibling)}function jn(){Oe=Te=null,X=!1}function js(e){Ke===null?Ke=[e]:Ke.push(e)}var Sp=wt.ReactCurrentBatchConfig;function Ge(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var To=Ut(null),Mo=null,gn=null,Os=null;function Ts(){Os=gn=Mo=null}function Ms(e){var t=To.current;Y(To),e._currentValue=t}function Fi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function An(e,t){Mo=e,Os=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Os!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(Mo===null)throw Error(x(308));gn=e,Mo.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Gt=null;function Ls(e){Gt===null?Gt=[e]:Gt.push(e)}function qc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ls(t)):(n.next=o.next,o.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function Rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,vt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ls(r)):(t.next=o.next,o.next=t),r.interleaved=t,vt(e,n)}function ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xs(e,n)}}function qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Lo(e,t,n,r){var o=e.updateQueue;Ct=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==i&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=a))}if(l!==null){var m=o.baseState;i=0,d=c=a=null,s=l;do{var h=s.lane,v=s.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,y=s;switch(h=t,v=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){m=w.call(v,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,h=typeof w=="function"?w.call(v,m,h):w,h==null)break e;m=J({},m,h);break e;case 2:Ct=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=v,a=m):d=d.next=v,i|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);en|=i,e.lanes=i,e.memoizedState=m}}function ba(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var ef=new qu.Component().refs;function Di(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bo={isMounted:function(e){return(e=e._reactInternals)?rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=Rt(e),l=mt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Mt(e,l,o),t!==null&&(be(t,e,o,r),ao(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=Rt(e),l=mt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Mt(e,l,o),t!==null&&(be(t,e,o,r),ao(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Rt(e),o=mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Mt(e,o,r),t!==null&&(be(t,e,r,n),ao(t,e,r))}};function eu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(o,l):!0}function tf(e,t,n){var r=!1,o=Dt,l=t.contextType;return typeof l=="object"&&l!==null?l=Be(l):(o=Ne(t)?Jt:ve.current,r=t.contextTypes,l=(r=r!=null)?zn(e,o):Dt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function tu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bo.enqueueReplaceState(t,t.state,null)}function Vi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=ef,Rs(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Be(l):(l=Ne(t)?Jt:ve.current,o.context=zn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Di(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&bo.enqueueReplaceState(o,o.state,null),Lo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;s===ef&&(s=o.refs={}),i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Kr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nu(e){var t=e._init;return t(e._payload)}function nf(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=It(f,u),f.index=0,f.sibling=null,f}function l(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,p,g){return u===null||u.tag!==6?(u=ri(p,f.mode,g),u.return=f,u):(u=o(u,p),u.return=f,u)}function a(f,u,p,g){var E=p.type;return E===cn?d(f,u,p.props.children,g,p.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Et&&nu(E)===u.type)?(g=o(u,p.props),g.ref=Yn(f,u,p),g.return=f,g):(g=ho(p.type,p.key,p.props,null,f.mode,g),g.ref=Yn(f,u,p),g.return=f,g)}function c(f,u,p,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=oi(p,f.mode,g),u.return=f,u):(u=o(u,p.children||[]),u.return=f,u)}function d(f,u,p,g,E){return u===null||u.tag!==7?(u=Zt(p,f.mode,g,E),u.return=f,u):(u=o(u,p),u.return=f,u)}function m(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ri(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Fr:return p=ho(u.type,u.key,u.props,null,f.mode,p),p.ref=Yn(f,null,u),p.return=f,p;case un:return u=oi(u,f.mode,p),u.return=f,u;case Et:var g=u._init;return m(f,g(u._payload),p)}if(Jn(u)||Un(u))return u=Zt(u,f.mode,p,null),u.return=f,u;Kr(f,u)}return null}function h(f,u,p,g){var E=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:s(f,u,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fr:return p.key===E?a(f,u,p,g):null;case un:return p.key===E?c(f,u,p,g):null;case Et:return E=p._init,h(f,u,E(p._payload),g)}if(Jn(p)||Un(p))return E!==null?null:d(f,u,p,g,null);Kr(f,p)}return null}function v(f,u,p,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,s(u,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fr:return f=f.get(g.key===null?p:g.key)||null,a(u,f,g,E);case un:return f=f.get(g.key===null?p:g.key)||null,c(u,f,g,E);case Et:var C=g._init;return v(f,u,p,C(g._payload),E)}if(Jn(g)||Un(g))return f=f.get(p)||null,d(u,f,g,E,null);Kr(u,g)}return null}function w(f,u,p,g){for(var E=null,C=null,S=u,z=u=0,W=null;S!==null&&z<p.length;z++){S.index>z?(W=S,S=null):W=S.sibling;var T=h(f,S,p[z],g);if(T===null){S===null&&(S=W);break}e&&S&&T.alternate===null&&t(f,S),u=l(T,u,z),C===null?E=T:C.sibling=T,C=T,S=W}if(z===p.length)return n(f,S),X&&Ht(f,z),E;if(S===null){for(;z<p.length;z++)S=m(f,p[z],g),S!==null&&(u=l(S,u,z),C===null?E=S:C.sibling=S,C=S);return X&&Ht(f,z),E}for(S=r(f,S);z<p.length;z++)W=v(S,f,z,p[z],g),W!==null&&(e&&W.alternate!==null&&S.delete(W.key===null?z:W.key),u=l(W,u,z),C===null?E=W:C.sibling=W,C=W);return e&&S.forEach(function(G){return t(f,G)}),X&&Ht(f,z),E}function y(f,u,p,g){var E=Un(p);if(typeof E!="function")throw Error(x(150));if(p=E.call(p),p==null)throw Error(x(151));for(var C=E=null,S=u,z=u=0,W=null,T=p.next();S!==null&&!T.done;z++,T=p.next()){S.index>z?(W=S,S=null):W=S.sibling;var G=h(f,S,T.value,g);if(G===null){S===null&&(S=W);break}e&&S&&G.alternate===null&&t(f,S),u=l(G,u,z),C===null?E=G:C.sibling=G,C=G,S=W}if(T.done)return n(f,S),X&&Ht(f,z),E;if(S===null){for(;!T.done;z++,T=p.next())T=m(f,T.value,g),T!==null&&(u=l(T,u,z),C===null?E=T:C.sibling=T,C=T);return X&&Ht(f,z),E}for(S=r(f,S);!T.done;z++,T=p.next())T=v(S,f,z,T.value,g),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?z:T.key),u=l(T,u,z),C===null?E=T:C.sibling=T,C=T);return e&&S.forEach(function(ze){return t(f,ze)}),X&&Ht(f,z),E}function j(f,u,p,g){if(typeof p=="object"&&p!==null&&p.type===cn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Fr:e:{for(var E=p.key,C=u;C!==null;){if(C.key===E){if(E=p.type,E===cn){if(C.tag===7){n(f,C.sibling),u=o(C,p.props.children),u.return=f,f=u;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Et&&nu(E)===C.type){n(f,C.sibling),u=o(C,p.props),u.ref=Yn(f,C,p),u.return=f,f=u;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===cn?(u=Zt(p.props.children,f.mode,g,p.key),u.return=f,f=u):(g=ho(p.type,p.key,p.props,null,f.mode,g),g.ref=Yn(f,u,p),g.return=f,f=g)}return i(f);case un:e:{for(C=p.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=o(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=oi(p,f.mode,g),u.return=f,f=u}return i(f);case Et:return C=p._init,j(f,u,C(p._payload),g)}if(Jn(p))return w(f,u,p,g);if(Un(p))return y(f,u,p,g);Kr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,p),u.return=f,f=u):(n(f,u),u=ri(p,f.mode,g),u.return=f,f=u),i(f)):n(f,u)}return j}var On=nf(!0),rf=nf(!1),Lr={},at=Ut(Lr),xr=Ut(Lr),Sr=Ut(Lr);function Xt(e){if(e===Lr)throw Error(x(174));return e}function Is(e,t){switch(H(Sr,t),H(xr,e),H(at,Lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gi(t,e)}Y(at),H(at,t)}function Tn(){Y(at),Y(xr),Y(Sr)}function of(e){Xt(Sr.current);var t=Xt(at.current),n=gi(t,e.type);t!==n&&(H(xr,e),H(at,n))}function $s(e){xr.current===e&&(Y(at),Y(xr))}var K=Ut(0);function Ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Fs(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var uo=wt.ReactCurrentDispatcher,ql=wt.ReactCurrentBatchConfig,bt=0,Z=null,ne=null,ie=null,Io=!1,lr=!1,kr=0,kp=0;function pe(){throw Error(x(321))}function Ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function Vs(e,t,n,r,o,l){if(bt=l,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,uo.current=e===null||e.memoizedState===null?Np:_p,e=n(r,o),lr){l=0;do{if(lr=!1,kr=0,25<=l)throw Error(x(301));l+=1,ie=ne=null,t.updateQueue=null,uo.current=Pp,e=n(r,o)}while(lr)}if(uo.current=$o,t=ne!==null&&ne.next!==null,bt=0,ie=ne=Z=null,Io=!1,t)throw Error(x(300));return e}function Us(){var e=kr!==0;return kr=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Z.memoizedState=ie=e:ie=ie.next=e,ie}function We(){if(ne===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?Z.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(x(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?Z.memoizedState=ie=e:ie=ie.next=e}return ie}function Er(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=We(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,c=l;do{var d=c.lane;if((bt&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,i=r):a=a.next=m,Z.lanes|=d,en|=d}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=s,et(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Z.lanes|=l,en|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ei(e){var t=We(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);et(l,t.memoizedState)||(Ce=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function lf(){}function sf(e,t){var n=Z,r=We(),o=t(),l=!et(r.memoizedState,o);if(l&&(r.memoizedState=o,Ce=!0),r=r.queue,Bs(cf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Cr(9,uf.bind(null,n,r,o,t),void 0,null),se===null)throw Error(x(349));bt&30||af(n,t,o)}return o}function af(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uf(e,t,n,r){t.value=n,t.getSnapshot=r,ff(t)&&df(e)}function cf(e,t,n){return n(function(){ff(t)&&df(e)})}function ff(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function df(e){var t=vt(e,1);t!==null&&be(t,e,1,-1)}function ru(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Er,lastRenderedState:e},t.queue=e,e=e.dispatch=Ap.bind(null,Z,e),[t.memoizedState,e]}function Cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pf(){return We().memoizedState}function co(e,t,n,r){var o=nt();Z.flags|=e,o.memoizedState=Cr(1|t,n,void 0,r===void 0?null:r)}function el(e,t,n,r){var o=We();r=r===void 0?null:r;var l=void 0;if(ne!==null){var i=ne.memoizedState;if(l=i.destroy,r!==null&&Ds(r,i.deps)){o.memoizedState=Cr(t,n,l,r);return}}Z.flags|=e,o.memoizedState=Cr(1|t,n,l,r)}function ou(e,t){return co(8390656,8,e,t)}function Bs(e,t){return el(2048,8,e,t)}function mf(e,t){return el(4,2,e,t)}function hf(e,t){return el(4,4,e,t)}function yf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vf(e,t,n){return n=n!=null?n.concat([e]):null,el(4,4,yf.bind(null,t,e),n)}function Ws(){}function gf(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wf(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xf(e,t,n){return bt&21?(et(n,t)||(n=kc(),Z.lanes|=n,en|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Ep(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{V=n,ql.transition=r}}function Sf(){return We().memoizedState}function Cp(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kf(e))Ef(t,n);else if(n=qc(e,t,n,r),n!==null){var o=we();be(n,e,r,o),Cf(n,t,r)}}function Ap(e,t,n){var r=Rt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kf(e))Ef(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,et(s,i)){var a=t.interleaved;a===null?(o.next=o,Ls(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=qc(e,t,o,r),n!==null&&(o=we(),be(n,e,r,o),Cf(n,t,r))}}function kf(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Ef(e,t){lr=Io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xs(e,n)}}var $o={readContext:Be,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},Np={readContext:Be,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:ou,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,co(4194308,4,yf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){return co(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cp.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:ru,useDebugValue:Ws,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=ru(!1),t=e[0];return e=Ep.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=nt();if(X){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),se===null)throw Error(x(349));bt&30||af(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,ou(cf.bind(null,r,l,e),[e]),r.flags|=2048,Cr(9,uf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=nt(),t=se.identifierPrefix;if(X){var n=pt,r=dt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_p={readContext:Be,useCallback:gf,useContext:Be,useEffect:Bs,useImperativeHandle:vf,useInsertionEffect:mf,useLayoutEffect:hf,useMemo:wf,useReducer:bl,useRef:pf,useState:function(){return bl(Er)},useDebugValue:Ws,useDeferredValue:function(e){var t=We();return xf(t,ne.memoizedState,e)},useTransition:function(){var e=bl(Er)[0],t=We().memoizedState;return[e,t]},useMutableSource:lf,useSyncExternalStore:sf,useId:Sf,unstable_isNewReconciler:!1},Pp={readContext:Be,useCallback:gf,useContext:Be,useEffect:Bs,useImperativeHandle:vf,useInsertionEffect:mf,useLayoutEffect:hf,useMemo:wf,useReducer:ei,useRef:pf,useState:function(){return ei(Er)},useDebugValue:Ws,useDeferredValue:function(e){var t=We();return ne===null?t.memoizedState=e:xf(t,ne.memoizedState,e)},useTransition:function(){var e=ei(Er)[0],t=We().memoizedState;return[e,t]},useMutableSource:lf,useSyncExternalStore:sf,useId:Sf,unstable_isNewReconciler:!1};function Mn(e,t){try{var n="",r=t;do n+=n0(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ti(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ui(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zp=typeof WeakMap=="function"?WeakMap:Map;function Af(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Do||(Do=!0,Ji=r),Ui(e,t)},n}function Nf(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ui(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ui(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Wp.bind(null,e,t,n),t.then(e,e))}function iu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function su(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var jp=wt.ReactCurrentOwner,Ce=!1;function ge(e,t,n,r){t.child=e===null?rf(t,null,n,r):On(t,e.child,n,r)}function au(e,t,n,r,o){n=n.render;var l=t.ref;return An(t,o),r=Vs(e,t,n,r,l,o),n=Us(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(X&&n&&Ps(t),t.flags|=1,ge(e,t,r,o),t.child)}function uu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Js(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,_f(e,t,l,r,o)):(e=ho(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:yr,n(i,r)&&e.ref===t.ref)return gt(e,t,o)}return t.flags|=1,e=It(l,r),e.ref=t.ref,e.return=t,t.child=e}function _f(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(yr(l,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,gt(e,t,o)}return Bi(e,t,n,r,o)}function Pf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(xn,je),je|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(xn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,H(xn,je),je|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,H(xn,je),je|=r;return ge(e,t,o,n),t.child}function zf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bi(e,t,n,r,o){var l=Ne(n)?Jt:ve.current;return l=zn(t,l),An(t,o),n=Vs(e,t,n,r,l,o),r=Us(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(X&&r&&Ps(t),t.flags|=1,ge(e,t,n,o),t.child)}function cu(e,t,n,r,o){if(Ne(n)){var l=!0;zo(t)}else l=!1;if(An(t,o),t.stateNode===null)fo(e,t),tf(t,n,r),Vi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Be(c):(c=Ne(n)?Jt:ve.current,c=zn(t,c));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&tu(t,i,r,c),Ct=!1;var h=t.memoizedState;i.state=h,Lo(t,r,i,o),a=t.memoizedState,s!==r||h!==a||Ae.current||Ct?(typeof d=="function"&&(Di(t,n,d,r),a=t.memoizedState),(s=Ct||eu(t,n,s,r,h,a,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,bc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ge(t.type,s),i.props=c,m=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Be(a):(a=Ne(n)?Jt:ve.current,a=zn(t,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||h!==a)&&tu(t,i,r,a),Ct=!1,h=t.memoizedState,i.state=h,Lo(t,r,i,o);var w=t.memoizedState;s!==m||h!==w||Ae.current||Ct?(typeof v=="function"&&(Di(t,n,v,r),w=t.memoizedState),(c=Ct||eu(t,n,c,r,h,w,a)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Wi(e,t,n,r,l,o)}function Wi(e,t,n,r,o,l){zf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ka(t,n,!1),gt(e,t,l);r=t.stateNode,jp.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=On(t,e.child,null,l),t.child=On(t,null,s,l)):ge(e,t,s,l),t.memoizedState=r.state,o&&Ka(t,n,!0),t.child}function jf(e){var t=e.stateNode;t.pendingContext?Xa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xa(e,t.context,!1),Is(e,t.containerInfo)}function fu(e,t,n,r,o){return jn(),js(o),t.flags|=256,ge(e,t,n,r),t.child}var Hi={dehydrated:null,treeContext:null,retryLane:0};function Qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Of(e,t,n){var r=t.pendingProps,o=K.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(K,o&1),e===null)return $i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=rl(i,r,0,null),e=Zt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Qi(n),t.memoizedState=Hi,e):Hs(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Op(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=It(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=It(s,l):(l=Zt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Qi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Hi,r}return l=e.child,e=l.sibling,r=It(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hs(e,t){return t=rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zr(e,t,n,r){return r!==null&&js(r),On(t,e.child,null,n),e=Hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Op(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=ti(Error(x(422))),Zr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=rl({mode:"visible",children:r.children},o,0,null),l=Zt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&On(t,e.child,null,i),t.child.memoizedState=Qi(i),t.memoizedState=Hi,l);if(!(t.mode&1))return Zr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(x(419)),r=ti(l,r,void 0),Zr(e,t,i,r)}if(s=(i&e.childLanes)!==0,Ce||s){if(r=se,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,vt(e,o),be(r,e,o,-1))}return Zs(),r=ti(Error(x(421))),Zr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Hp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Oe=Tt(o.nextSibling),Te=t,X=!0,Ke=null,e!==null&&(Fe[De++]=dt,Fe[De++]=pt,Fe[De++]=qt,dt=e.id,pt=e.overflow,qt=t),t=Hs(t,r.children),t.flags|=4096,t)}function du(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fi(e.return,t,n)}function ni(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Tf(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ge(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&du(e,n,t);else if(e.tag===19)du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ro(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ni(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ro(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ni(t,!0,n,null,l);break;case"together":ni(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),en|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=It(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=It(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tp(e,t,n){switch(t.tag){case 3:jf(t),jn();break;case 5:of(t);break;case 1:Ne(t.type)&&zo(t);break;case 4:Is(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(To,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Of(e,t,n):(H(K,K.current&1),e=gt(e,t,n),e!==null?e.sibling:null);H(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Pf(e,t,n)}return gt(e,t,n)}var Mf,Yi,Lf,Rf;Mf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yi=function(){};Lf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Xt(at.current);var l=null;switch(n){case"input":o=mi(e,o),r=mi(e,r),l=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),l=[];break;case"textarea":o=vi(e,o),r=vi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_o)}wi(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ur.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ur.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Q("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Rf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mp(e,t,n){var r=t.pendingProps;switch(zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ne(t.type)&&Po(),me(t),null;case 3:return r=t.stateNode,Tn(),Y(Ae),Y(ve),Fs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(es(Ke),Ke=null))),Yi(e,t),me(t),null;case 5:$s(t);var o=Xt(Sr.current);if(n=t.type,e!==null&&t.stateNode!=null)Lf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return me(t),null}if(e=Xt(at.current),Xr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[lt]=t,r[wr]=l,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<bn.length;o++)Q(bn[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Sa(r,l),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Q("invalid",r);break;case"textarea":Ea(r,l),Q("invalid",r)}wi(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Gr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Gr(r.textContent,s,e),o=["children",""+s]):ur.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Q("scroll",r)}switch(n){case"input":Dr(r),ka(r,l,!0);break;case"textarea":Dr(r),Ca(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=_o)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[lt]=t,e[wr]=r,Mf(e,t,!1,!1),t.stateNode=e;e:{switch(i=xi(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<bn.length;o++)Q(bn[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":Sa(e,r),o=mi(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Ea(e,r),o=vi(e,r),Q("invalid",e);break;default:o=r}wi(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?cc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ac(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&cr(e,a):typeof a=="number"&&cr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ur.hasOwnProperty(l)?a!=null&&l==="onScroll"&&Q("scroll",e):a!=null&&ms(e,l,a,i))}switch(n){case"input":Dr(e),ka(e,r,!1);break;case"textarea":Dr(e),Ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Sn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=_o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Rf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Xt(Sr.current),Xt(at.current),Xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(l=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:Gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return me(t),null;case 13:if(Y(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Oe!==null&&t.mode&1&&!(t.flags&128))Jc(),jn(),t.flags|=98560,l=!1;else if(l=Xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(x(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(x(317));l[lt]=t}else jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),l=!1}else Ke!==null&&(es(Ke),Ke=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?re===0&&(re=3):Zs())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Tn(),Yi(e,t),e===null&&vr(t.stateNode.containerInfo),me(t),null;case 10:return Ms(t.type._context),me(t),null;case 17:return Ne(t.type)&&Po(),me(t),null;case 19:if(Y(K),l=t.memoizedState,l===null)return me(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Gn(l,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ro(e),i!==null){for(t.flags|=128,Gn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(K,K.current&1|2),t.child}e=e.sibling}l.tail!==null&&b()>Ln&&(t.flags|=128,r=!0,Gn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Ro(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!X)return me(t),null}else 2*b()-l.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,Gn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=b(),t.sibling=null,n=K.current,H(K,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Ks(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Lp(e,t){switch(zs(t),t.tag){case 1:return Ne(t.type)&&Po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),Y(Ae),Y(ve),Fs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $s(t),null;case 13:if(Y(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(K),null;case 4:return Tn(),null;case 10:return Ms(t.type._context),null;case 22:case 23:return Ks(),null;case 24:return null;default:return null}}var Jr=!1,ye=!1,Rp=typeof WeakSet=="function"?WeakSet:Set,P=null;function wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Gi(e,t,n){try{n()}catch(r){q(e,t,r)}}var pu=!1;function Ip(e,t){if(ji=Co,e=Fc(),_s(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,d=0,m=e,h=null;t:for(;;){for(var v;m!==n||o!==0&&m.nodeType!==3||(s=i+o),m!==l||r!==0&&m.nodeType!==3||(a=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break t;if(h===n&&++c===o&&(s=i),h===l&&++d===r&&(a=i),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oi={focusedElem:e,selectionRange:n},Co=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,j=w.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ge(t.type,y),j);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(g){q(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=pu,pu=!1,w}function ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Gi(t,n,l)}o=o.next}while(o!==r)}}function tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function If(e){var t=e.alternate;t!==null&&(e.alternate=null,If(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[wr],delete t[Li],delete t[gp],delete t[wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $f(e){return e.tag===5||e.tag===3||e.tag===4}function mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_o));else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}function Zi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}var ue=null,Xe=!1;function kt(e,t,n){for(n=n.child;n!==null;)Ff(e,t,n),n=n.sibling}function Ff(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Go,n)}catch{}switch(n.tag){case 5:ye||wn(n,t);case 6:var r=ue,o=Xe;ue=null,kt(e,t,n),ue=r,Xe=o,ue!==null&&(Xe?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Xe?(e=ue,n=n.stateNode,e.nodeType===8?Kl(e.parentNode,n):e.nodeType===1&&Kl(e,n),mr(e)):Kl(ue,n.stateNode));break;case 4:r=ue,o=Xe,ue=n.stateNode.containerInfo,Xe=!0,kt(e,t,n),ue=r,Xe=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Gi(n,t,i),o=o.next}while(o!==r)}kt(e,t,n);break;case 1:if(!ye&&(wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,kt(e,t,n),ye=r):kt(e,t,n);break;default:kt(e,t,n)}}function hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rp),t.forEach(function(r){var o=Qp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,Xe=!1;break e;case 3:ue=s.stateNode.containerInfo,Xe=!0;break e;case 4:ue=s.stateNode.containerInfo,Xe=!0;break e}s=s.return}if(ue===null)throw Error(x(160));Ff(l,i,o),ue=null,Xe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){q(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Df(t,e),t=t.sibling}function Df(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),tt(e),r&4){try{ir(3,e,e.return),tl(3,e)}catch(y){q(e,e.return,y)}try{ir(5,e,e.return)}catch(y){q(e,e.return,y)}}break;case 1:Ye(t,e),tt(e),r&512&&n!==null&&wn(n,n.return);break;case 5:if(Ye(t,e),tt(e),r&512&&n!==null&&wn(n,n.return),e.flags&32){var o=e.stateNode;try{cr(o,"")}catch(y){q(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&lc(o,l),xi(s,i);var c=xi(s,l);for(i=0;i<a.length;i+=2){var d=a[i],m=a[i+1];d==="style"?cc(o,m):d==="dangerouslySetInnerHTML"?ac(o,m):d==="children"?cr(o,m):ms(o,d,m,c)}switch(s){case"input":hi(o,l);break;case"textarea":ic(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?Sn(o,!!l.multiple,v,!1):h!==!!l.multiple&&(l.defaultValue!=null?Sn(o,!!l.multiple,l.defaultValue,!0):Sn(o,!!l.multiple,l.multiple?[]:"",!1))}o[wr]=l}catch(y){q(e,e.return,y)}}break;case 6:if(Ye(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(y){q(e,e.return,y)}}break;case 3:if(Ye(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mr(t.containerInfo)}catch(y){q(e,e.return,y)}break;case 4:Ye(t,e),tt(e);break;case 13:Ye(t,e),tt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Gs=b())),r&4&&hu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(c=ye)||d,Ye(t,e),ye=c):Ye(t,e),tt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(m=P=d;P!==null;){switch(h=P,v=h.child,h.tag){case 0:case 11:case 14:case 15:ir(4,h,h.return);break;case 1:wn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){q(r,n,y)}}break;case 5:wn(h,h.return);break;case 22:if(h.memoizedState!==null){vu(m);continue}}v!==null?(v.return=h,P=v):vu(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{o=m.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,a=m.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=uc("display",i))}catch(y){q(e,e.return,y)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){q(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ye(t,e),tt(e),r&4&&hu(e);break;case 21:break;default:Ye(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($f(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(cr(o,""),r.flags&=-33);var l=mu(e);Zi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=mu(e);Ki(e,s,i);break;default:throw Error(x(161))}}catch(a){q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $p(e,t,n){P=e,Vf(e)}function Vf(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Jr;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ye;s=Jr;var c=ye;if(Jr=i,(ye=a)&&!c)for(P=o;P!==null;)i=P,a=i.child,i.tag===22&&i.memoizedState!==null?gu(o):a!==null?(a.return=i,P=a):gu(o);for(;l!==null;)P=l,Vf(l),l=l.sibling;P=o,Jr=s,ye=c}yu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,P=l):yu(e)}}function yu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ba(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ba(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&mr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ye||t.flags&512&&Xi(t)}catch(h){q(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function vu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function gu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tl(4,t)}catch(a){q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){q(t,o,a)}}var l=t.return;try{Xi(t)}catch(a){q(t,l,a)}break;case 5:var i=t.return;try{Xi(t)}catch(a){q(t,i,a)}}}catch(a){q(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Fp=Math.ceil,Fo=wt.ReactCurrentDispatcher,Qs=wt.ReactCurrentOwner,Ue=wt.ReactCurrentBatchConfig,I=0,se=null,te=null,fe=0,je=0,xn=Ut(0),re=0,Ar=null,en=0,nl=0,Ys=0,sr=null,Ee=null,Gs=0,Ln=1/0,ct=null,Do=!1,Ji=null,Lt=null,qr=!1,Pt=null,Vo=0,ar=0,qi=null,po=-1,mo=0;function we(){return I&6?b():po!==-1?po:po=b()}function Rt(e){return e.mode&1?I&2&&fe!==0?fe&-fe:Sp.transition!==null?(mo===0&&(mo=kc()),mo):(e=V,e!==0||(e=window.event,e=e===void 0?16:zc(e.type)),e):1}function be(e,t,n,r){if(50<ar)throw ar=0,qi=null,Error(x(185));Or(e,n,r),(!(I&2)||e!==se)&&(e===se&&(!(I&2)&&(nl|=n),re===4&&Nt(e,fe)),_e(e,r),n===1&&I===0&&!(t.mode&1)&&(Ln=b()+500,qo&&Bt()))}function _e(e,t){var n=e.callbackNode;S0(e,t);var r=Eo(e,e===se?fe:0);if(r===0)n!==null&&_a(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_a(n),t===1)e.tag===0?xp(wu.bind(null,e)):Xc(wu.bind(null,e)),yp(function(){!(I&6)&&Bt()}),n=null;else{switch(Ec(r)){case 1:n=ws;break;case 4:n=xc;break;case 16:n=ko;break;case 536870912:n=Sc;break;default:n=ko}n=Xf(n,Uf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uf(e,t){if(po=-1,mo=0,I&6)throw Error(x(327));var n=e.callbackNode;if(Nn()&&e.callbackNode!==n)return null;var r=Eo(e,e===se?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Uo(e,r);else{t=r;var o=I;I|=2;var l=Wf();(se!==e||fe!==t)&&(ct=null,Ln=b()+500,Kt(e,t));do try{Up();break}catch(s){Bf(e,s)}while(!0);Ts(),Fo.current=l,I=o,te!==null?t=0:(se=null,fe=0,t=re)}if(t!==0){if(t===2&&(o=Ai(e),o!==0&&(r=o,t=bi(e,o))),t===1)throw n=Ar,Kt(e,0),Nt(e,r),_e(e,b()),n;if(t===6)Nt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Dp(o)&&(t=Uo(e,r),t===2&&(l=Ai(e),l!==0&&(r=l,t=bi(e,l))),t===1))throw n=Ar,Kt(e,0),Nt(e,r),_e(e,b()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Qt(e,Ee,ct);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=Gs+500-b(),10<t)){if(Eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Mi(Qt.bind(null,e,Ee,ct),t);break}Qt(e,Ee,ct);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-qe(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=b()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fp(r/1960))-r,10<r){e.timeoutHandle=Mi(Qt.bind(null,e,Ee,ct),r);break}Qt(e,Ee,ct);break;case 5:Qt(e,Ee,ct);break;default:throw Error(x(329))}}}return _e(e,b()),e.callbackNode===n?Uf.bind(null,e):null}function bi(e,t){var n=sr;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=Uo(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&es(t)),e}function es(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Dp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!et(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~Ys,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function wu(e){if(I&6)throw Error(x(327));Nn();var t=Eo(e,0);if(!(t&1))return _e(e,b()),null;var n=Uo(e,t);if(e.tag!==0&&n===2){var r=Ai(e);r!==0&&(t=r,n=bi(e,r))}if(n===1)throw n=Ar,Kt(e,0),Nt(e,t),_e(e,b()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,Ee,ct),_e(e,b()),null}function Xs(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Ln=b()+500,qo&&Bt())}}function tn(e){Pt!==null&&Pt.tag===0&&!(I&6)&&Nn();var t=I;I|=1;var n=Ue.transition,r=V;try{if(Ue.transition=null,V=1,e)return e()}finally{V=r,Ue.transition=n,I=t,!(I&6)&&Bt()}}function Ks(){je=xn.current,Y(xn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hp(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(zs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:Tn(),Y(Ae),Y(ve),Fs();break;case 5:$s(r);break;case 4:Tn();break;case 13:Y(K);break;case 19:Y(K);break;case 10:Ms(r.type._context);break;case 22:case 23:Ks()}n=n.return}if(se=e,te=e=It(e.current,null),fe=je=t,re=0,Ar=null,Ys=nl=en=0,Ee=sr=null,Gt!==null){for(t=0;t<Gt.length;t++)if(n=Gt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Gt=null}return e}function Bf(e,t){do{var n=te;try{if(Ts(),uo.current=$o,Io){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Io=!1}if(bt=0,ie=ne=Z=null,lr=!1,kr=0,Qs.current=null,n===null||n.return===null){re=1,Ar=t,te=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=fe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=s,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=iu(i);if(v!==null){v.flags&=-257,su(v,i,s,l,t),v.mode&1&&lu(l,c,t),t=v,a=c;var w=t.updateQueue;if(w===null){var y=new Set;y.add(a),t.updateQueue=y}else w.add(a);break e}else{if(!(t&1)){lu(l,c,t),Zs();break e}a=Error(x(426))}}else if(X&&s.mode&1){var j=iu(i);if(j!==null){!(j.flags&65536)&&(j.flags|=256),su(j,i,s,l,t),js(Mn(a,s));break e}}l=a=Mn(a,s),re!==4&&(re=2),sr===null?sr=[l]:sr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Af(l,a,t);qa(l,f);break e;case 1:s=a;var u=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Lt===null||!Lt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var g=Nf(l,s,t);qa(l,g);break e}}l=l.return}while(l!==null)}Qf(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Wf(){var e=Fo.current;return Fo.current=$o,e===null?$o:e}function Zs(){(re===0||re===3||re===2)&&(re=4),se===null||!(en&268435455)&&!(nl&268435455)||Nt(se,fe)}function Uo(e,t){var n=I;I|=2;var r=Wf();(se!==e||fe!==t)&&(ct=null,Kt(e,t));do try{Vp();break}catch(o){Bf(e,o)}while(!0);if(Ts(),I=n,Fo.current=r,te!==null)throw Error(x(261));return se=null,fe=0,re}function Vp(){for(;te!==null;)Hf(te)}function Up(){for(;te!==null&&!d0();)Hf(te)}function Hf(e){var t=Gf(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Qf(e):te=t,Qs.current=null}function Qf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lp(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Mp(n,t,je),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Qt(e,t,n){var r=V,o=Ue.transition;try{Ue.transition=null,V=1,Bp(e,t,n,r)}finally{Ue.transition=o,V=r}return null}function Bp(e,t,n,r){do Nn();while(Pt!==null);if(I&6)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(k0(e,l),e===se&&(te=se=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qr||(qr=!0,Xf(ko,function(){return Nn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ue.transition,Ue.transition=null;var i=V;V=1;var s=I;I|=4,Qs.current=null,Ip(e,n),Df(n,e),ap(Oi),Co=!!ji,Oi=ji=null,e.current=n,$p(n),p0(),I=s,V=i,Ue.transition=l}else e.current=n;if(qr&&(qr=!1,Pt=e,Vo=o),l=e.pendingLanes,l===0&&(Lt=null),y0(n.stateNode),_e(e,b()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Do)throw Do=!1,e=Ji,Ji=null,e;return Vo&1&&e.tag!==0&&Nn(),l=e.pendingLanes,l&1?e===qi?ar++:(ar=0,qi=e):ar=0,Bt(),null}function Nn(){if(Pt!==null){var e=Ec(Vo),t=Ue.transition,n=V;try{if(Ue.transition=null,V=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,Vo=0,I&6)throw Error(x(331));var o=I;for(I|=4,P=e.current;P!==null;){var l=P,i=l.child;if(P.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(P=c;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:ir(8,d,l)}var m=d.child;if(m!==null)m.return=d,P=m;else for(;P!==null;){d=P;var h=d.sibling,v=d.return;if(If(d),d===c){P=null;break}if(h!==null){h.return=v,P=h;break}P=v}}}var w=l.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var j=y.sibling;y.sibling=null,y=j}while(y!==null)}}P=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,P=i;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ir(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,P=f;break e}P=l.return}}var u=e.current;for(P=u;P!==null;){i=P;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,P=p;else e:for(i=u;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:tl(9,s)}}catch(E){q(s,s.return,E)}if(s===i){P=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,P=g;break e}P=s.return}}if(I=o,Bt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Go,e)}catch{}r=!0}return r}finally{V=n,Ue.transition=t}}return!1}function xu(e,t,n){t=Mn(n,t),t=Af(e,t,1),e=Mt(e,t,1),t=we(),e!==null&&(Or(e,1,t),_e(e,t))}function q(e,t,n){if(e.tag===3)xu(e,e,n);else for(;t!==null;){if(t.tag===3){xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=Mn(n,e),e=Nf(t,e,1),t=Mt(t,e,1),e=we(),t!==null&&(Or(t,1,e),_e(t,e));break}}t=t.return}}function Wp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(fe&n)===n&&(re===4||re===3&&(fe&130023424)===fe&&500>b()-Gs?Kt(e,0):Ys|=n),_e(e,t)}function Yf(e,t){t===0&&(e.mode&1?(t=Br,Br<<=1,!(Br&130023424)&&(Br=4194304)):t=1);var n=we();e=vt(e,t),e!==null&&(Or(e,t,n),_e(e,n))}function Hp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yf(e,n)}function Qp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Yf(e,n)}var Gf;Gf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Tp(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,X&&t.flags&1048576&&Kc(t,Oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var o=zn(t,ve.current);An(t,n),o=Vs(null,t,r,e,o,n);var l=Us();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(l=!0,zo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Rs(t),o.updater=bo,t.stateNode=o,o._reactInternals=t,Vi(t,r,e,n),t=Wi(null,t,r,!0,l,n)):(t.tag=0,X&&l&&Ps(t),ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Gp(r),e=Ge(r,e),o){case 0:t=Bi(null,t,r,e,n);break e;case 1:t=cu(null,t,r,e,n);break e;case 11:t=au(null,t,r,e,n);break e;case 14:t=uu(null,t,r,Ge(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Bi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),cu(e,t,r,o,n);case 3:e:{if(jf(t),e===null)throw Error(x(387));r=t.pendingProps,l=t.memoizedState,o=l.element,bc(e,t),Lo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Mn(Error(x(423)),t),t=fu(e,t,r,n,o);break e}else if(r!==o){o=Mn(Error(x(424)),t),t=fu(e,t,r,n,o);break e}else for(Oe=Tt(t.stateNode.containerInfo.firstChild),Te=t,X=!0,Ke=null,n=rf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===o){t=gt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return of(t),e===null&&$i(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ti(r,o)?i=null:l!==null&&Ti(r,l)&&(t.flags|=32),zf(e,t),ge(e,t,i,n),t.child;case 6:return e===null&&$i(t),null;case 13:return Of(e,t,n);case 4:return Is(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=On(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),au(e,t,r,o,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,H(To,r._currentValue),r._currentValue=i,l!==null)if(et(l.value,i)){if(l.children===o.children&&!Ae.current){t=gt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=mt(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Fi(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(x(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Fi(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,An(t,n),o=Be(o),r=r(o),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,o=Ge(r,t.pendingProps),o=Ge(r.type,o),uu(e,t,r,o,n);case 15:return _f(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),fo(e,t),t.tag=1,Ne(r)?(e=!0,zo(t)):e=!1,An(t,n),tf(t,r,o),Vi(t,r,o,n),Wi(null,t,r,!0,e,n);case 19:return Tf(e,t,n);case 22:return Pf(e,t,n)}throw Error(x(156,t.tag))};function Xf(e,t){return wc(e,t)}function Yp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new Yp(e,t,n,r)}function Js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gp(e){if(typeof e=="function")return Js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ys)return 11;if(e===vs)return 14}return 2}function It(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ho(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Js(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case cn:return Zt(n.children,o,l,t);case hs:i=8,o|=8;break;case ci:return e=Ve(12,n,t,o|2),e.elementType=ci,e.lanes=l,e;case fi:return e=Ve(13,n,t,o),e.elementType=fi,e.lanes=l,e;case di:return e=Ve(19,n,t,o),e.elementType=di,e.lanes=l,e;case nc:return rl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ec:i=10;break e;case tc:i=9;break e;case ys:i=11;break e;case vs:i=14;break e;case Et:i=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ve(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Zt(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function rl(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=nc,e.lanes=n,e.stateNode={isHidden:!1},e}function ri(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function oi(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qs(e,t,n,r,o,l,i,s,a){return e=new Xp(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ve(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rs(l),e}function Kp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Kf(e){if(!e)return Dt;e=e._reactInternals;e:{if(rn(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Gc(e,n,t)}return t}function Zf(e,t,n,r,o,l,i,s,a){return e=qs(n,r,!0,e,o,l,i,s,a),e.context=Kf(null),n=e.current,r=we(),o=Rt(n),l=mt(r,o),l.callback=t??null,Mt(n,l,o),e.current.lanes=o,Or(e,o,r),_e(e,r),e}function ol(e,t,n,r){var o=t.current,l=we(),i=Rt(o);return n=Kf(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(o,t,i),e!==null&&(be(e,o,i,l),ao(e,o,i)),i}function Bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bs(e,t){Su(e,t),(e=e.alternate)&&Su(e,t)}function Zp(){return null}var Jf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ea(e){this._internalRoot=e}ll.prototype.render=ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));ol(e,t,null,null)};ll.prototype.unmount=ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tn(function(){ol(null,e,null,null)}),t[yt]=null}};function ll(e){this._internalRoot=e}ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&Pc(e)}};function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ku(){}function Jp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=Bo(i);l.call(c)}}var i=Zf(t,r,e,0,null,!1,!1,"",ku);return e._reactRootContainer=i,e[yt]=i.current,vr(e.nodeType===8?e.parentNode:e),tn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Bo(a);s.call(c)}}var a=qs(e,0,!1,null,null,!1,!1,"",ku);return e._reactRootContainer=a,e[yt]=a.current,vr(e.nodeType===8?e.parentNode:e),tn(function(){ol(t,a,n,r)}),a}function sl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=Bo(i);s.call(a)}}ol(t,i,e,o)}else i=Jp(n,t,e,o,r);return Bo(i)}Cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qn(t.pendingLanes);n!==0&&(xs(t,n|1),_e(t,b()),!(I&6)&&(Ln=b()+500,Bt()))}break;case 13:tn(function(){var r=vt(e,1);if(r!==null){var o=we();be(r,e,1,o)}}),bs(e,1)}};Ss=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=we();be(t,e,134217728,n)}bs(e,134217728)}};Ac=function(e){if(e.tag===13){var t=Rt(e),n=vt(e,t);if(n!==null){var r=we();be(n,e,t,r)}bs(e,t)}};Nc=function(){return V};_c=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};ki=function(e,t,n){switch(t){case"input":if(hi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Jo(r);if(!o)throw Error(x(90));oc(r),hi(r,o)}}}break;case"textarea":ic(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};pc=Xs;mc=tn;var qp={usingClientEntryPoint:!1,Events:[Mr,mn,Jo,fc,dc,Xs]},Xn={findFiberByHostInstance:Yt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bp={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vc(e),e===null?null:e.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||Zp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{Go=br.inject(bp),st=br}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qp;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ta(t))throw Error(x(200));return Kp(e,t,null,n)};Re.createRoot=function(e,t){if(!ta(e))throw Error(x(299));var n=!1,r="",o=Jf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qs(e,1,!1,null,null,n,!1,r,o),e[yt]=t.current,vr(e.nodeType===8?e.parentNode:e),new ea(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=vc(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return tn(e)};Re.hydrate=function(e,t,n){if(!il(t))throw Error(x(200));return sl(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!ta(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Jf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Zf(t,null,e,1,n??null,o,!1,l,i),e[yt]=t.current,vr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ll(t)};Re.render=function(e,t,n){if(!il(t))throw Error(x(200));return sl(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!il(e))throw Error(x(40));return e._reactRootContainer?(tn(function(){sl(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Re.unstable_batchedUpdates=Xs;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!il(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return sl(e,t,n,!1,r)};Re.version="18.2.0-next-9e3b772b8-20220608";function qf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf)}catch(e){console.error(e)}}qf(),Ku.exports=Re;var em=Ku.exports,Eu=em;ai.createRoot=Eu.createRoot,ai.hydrateRoot=Eu.hydrateRoot;var bf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cu=Je.createContext&&Je.createContext(bf),tm=["attr","size","title"];function nm(e,t){if(e==null)return{};var n=rm(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function rm(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Wo(){return Wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wo.apply(this,arguments)}function Au(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ho(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Au(Object(n),!0).forEach(function(r){om(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Au(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function om(e,t,n){return t=lm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lm(e){var t=im(e,"string");return typeof t=="symbol"?t:String(t)}function im(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ed(e){return e&&e.map((t,n)=>Je.createElement(t.tag,Ho({key:n},t.attr),ed(t.child)))}function on(e){return t=>Je.createElement(sm,Wo({attr:Ho({},e.attr)},t),ed(e.child))}function sm(e){var t=n=>{var{attr:r,size:o,title:l}=e,i=nm(e,tm),s=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Je.createElement("svg",Wo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:a,style:Ho(Ho({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&Je.createElement("title",null,l),e.children)};return Cu!==void 0?Je.createElement(Cu.Consumer,null,n=>t(n)):t(bf)}function Nu(e){return on({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"},child:[]}]})(e)}function _u(e){return on({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"},child:[]}]})(e)}function am(e){return on({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function Pu(e){return on({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"},child:[]}]})(e)}function zu(e){return on({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"},child:[]}]})(e)}const um=()=>{const[e,t]=M.useState(!1),n=()=>{t(!e),console.log("state Change")};return A.jsxs("div",{children:[A.jsx(am,{onClick:n,className:"absolute top-4 right-4 z-[99] md:hidden"}),e?A.jsxs("div",{className:"fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20",children:[A.jsxs("a",{href:"#main",className:"w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150",children:[A.jsx(Nu,{size:20}),A.jsx("span",{className:"pl-4",children:"Home"})]}),A.jsxs("a",{href:"#projects",className:"w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150",children:[A.jsx(Pu,{size:20}),A.jsx("span",{className:"pl-4",children:"Projects"})]}),A.jsxs("a",{href:"#main",className:"w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150",children:[A.jsx(zu,{size:20}),A.jsx("span",{className:"pl-4",children:"Resume/CV"})]}),A.jsxs("a",{href:"#contact",className:"w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150",children:[A.jsx(_u,{size:20}),A.jsx("span",{className:"pl-4",children:"Contacts"})]})]}):"",A.jsx("div",{className:"md:block hidden fixed left-0 top-1/2 transform -translate-y-1/2 z-10",children:A.jsxs("div",{className:"flex flex-col",children:[A.jsx("a",{href:"#main",className:"bg-white rounded-xl m-2 p-4 cursor-pointer shadow-lg hover:shadow-emerald-200 hover:scale-110 ease-in duration-150",children:A.jsx(Nu,{size:20})}),A.jsx("a",{href:"#projects",className:"bg-white rounded-xl m-2 p-4 cursor-pointer shadow-lg hover:shadow-emerald-200 hover:scale-110 ease-in duration-150",children:A.jsx(Pu,{size:20})}),A.jsx("a",{href:"#main",className:"bg-white rounded-xl m-2 p-4 cursor-pointer shadow-lg hover:shadow-emerald-200 hover:scale-110 ease-in duration-150",children:A.jsx(zu,{size:20})}),A.jsx("a",{href:"#contact",className:"bg-white rounded-xl m-2 p-4 cursor-pointer shadow-lg hover:shadow-emerald-200 hover:scale-110 ease-in duration-150",children:A.jsx(_u,{size:20})})]})})]})};function al(e,t,n,r){return new(n||(n=Promise))(function(o,l){function i(c){try{a(r.next(c))}catch(d){l(d)}}function s(c){try{a(r.throw(c))}catch(d){l(d)}}function a(c){var d;c.done?o(c.value):(d=c.value,d instanceof n?d:new n(function(m){m(d)})).then(i,s)}a((r=r.apply(e,t||[])).next())})}function $t(e,t){var n,r,o,l,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(a){return function(c){return function(d){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&d[0]?r.return:d[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,d[1])).done)return o;switch(r=0,o&&(d=[2&d[0],o.value]),d[0]){case 0:case 1:o=d;break;case 4:return i.label++,{value:d[1],done:!1};case 5:i.label++,r=d[1],d=[0];continue;case 7:d=i.ops.pop(),i.trys.pop();continue;default:if(o=i.trys,!((o=o.length>0&&o[o.length-1])||d[0]!==6&&d[0]!==2)){i=0;continue}if(d[0]===3&&(!o||d[1]>o[0]&&d[1]<o[3])){i.label=d[1];break}if(d[0]===6&&i.label<o[1]){i.label=o[1],o=d;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(d);break}o[2]&&i.ops.pop(),i.trys.pop();continue}d=t.call(e,i)}catch(m){d=[6,m],r=0}finally{n=o=0}if(5&d[0])throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}([a,c])}}}function ts(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ze(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r,o,l=n.call(e),i=[];try{for(;(t===void 0||t-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(o)throw o.error}}return i}function it(e,t,n){if(n||arguments.length===2)for(var r,o=0,l=t.length;o<l;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function ju(e,t,n,r,o){for(var l=[],i=5;i<arguments.length;i++)l[i-5]=arguments[i];return al(this,void 0,void 0,function(){var s,a,c,d,m,h;return $t(this,function(v){switch(v.label){case 0:v.trys.push([0,12,13,14]),s=ts(l),a=s.next(),v.label=1;case 1:if(a.done)return[3,11];switch(c=a.value,typeof c){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,cm(e,t,c,n,r,o)];case 3:return v.sent(),[3,10];case 4:return[4,td(c)];case 5:return v.sent(),[3,10];case 6:return[4,c.apply(void 0,it([e,t,n,r,o],Ze(l),!1))];case 7:return v.sent(),[3,10];case 8:return[4,c];case 9:v.sent(),v.label=10;case 10:return a=s.next(),[3,1];case 11:return[3,14];case 12:return d=v.sent(),m={error:d},[3,14];case 13:try{a&&!a.done&&(h=s.return)&&h.call(s)}finally{if(m)throw m.error}return[7];case 14:return[2]}})})}function cm(e,t,n,r,o,l){return al(this,void 0,void 0,function(){var i,s;return $t(this,function(a){switch(a.label){case 0:return i=e.textContent||"",s=function(c,d){var m=Ze(d).slice(0);return it(it([],Ze(c),!1),[NaN],!1).findIndex(function(h,v){return m[v]!==h})}(i,n),[4,fm(e,it(it([],Ze(pm(i,t,s)),!1),Ze(dm(n,t,s)),!1),r,o,l)];case 1:return a.sent(),[2]}})})}function td(e){return al(this,void 0,void 0,function(){return $t(this,function(t){switch(t.label){case 0:return[4,new Promise(function(n){return setTimeout(n,e)})];case 1:return t.sent(),[2]}})})}function fm(e,t,n,r,o){return al(this,void 0,void 0,function(){var l,i,s,a,c,d,m,h,v,w,y,j,f;return $t(this,function(u){switch(u.label){case 0:if(l=t,o){for(i=0,s=1;s<t.length;s++)if(a=Ze([t[s-1],t[s]],2),c=a[0],(d=a[1]).length>c.length||d===""){i=s;break}l=t.slice(i,t.length)}u.label=1;case 1:u.trys.push([1,6,7,8]),m=ts(function(p){var g,E,C,S,z,W,T;return $t(this,function(G){switch(G.label){case 0:g=function(ze){return $t(this,function(Qe){switch(Qe.label){case 0:return[4,{op:function(xt){return requestAnimationFrame(function(){return xt.textContent=ze})},opCode:function(xt){var Vn=xt.textContent||"";return ze===""||Vn.length>ze.length?"DELETE":"WRITING"}}];case 1:return Qe.sent(),[2]}})},G.label=1;case 1:G.trys.push([1,6,7,8]),E=ts(p),C=E.next(),G.label=2;case 2:return C.done?[3,5]:(S=C.value,[5,g(S)]);case 3:G.sent(),G.label=4;case 4:return C=E.next(),[3,2];case 5:return[3,8];case 6:return z=G.sent(),W={error:z},[3,8];case 7:try{C&&!C.done&&(T=E.return)&&T.call(E)}finally{if(W)throw W.error}return[7];case 8:return[2]}})}(l)),h=m.next(),u.label=2;case 2:return h.done?[3,5]:(v=h.value,w=v.opCode(e)==="WRITING"?n+n*(Math.random()-.5):r+r*(Math.random()-.5),v.op(e),[4,td(w)]);case 3:u.sent(),u.label=4;case 4:return h=m.next(),[3,2];case 5:return[3,8];case 6:return y=u.sent(),j={error:y},[3,8];case 7:try{h&&!h.done&&(f=m.return)&&f.call(m)}finally{if(j)throw j.error}return[7];case 8:return[2]}})})}function dm(e,t,n){var r,o;return n===void 0&&(n=0),$t(this,function(l){switch(l.label){case 0:r=t(e),o=r.length,l.label=1;case 1:return n<o?[4,r.slice(0,++n).join("")]:[3,3];case 2:return l.sent(),[3,1];case 3:return[2]}})}function pm(e,t,n){var r,o;return n===void 0&&(n=0),$t(this,function(l){switch(l.label){case 0:r=t(e),o=r.length,l.label=1;case 1:return o>n?[4,r.slice(0,--o).join("")]:[3,3];case 2:return l.sent(),[3,1];case 3:return[2]}})}var mm="index-module_type__E-SaG";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var hm=M.memo(M.forwardRef(function(e,t){var n=e.sequence,r=e.repeat,o=e.className,l=e.speed,i=l===void 0?40:l,s=e.deletionSpeed,a=e.omitDeletionAnimation,c=a!==void 0&&a,d=e.preRenderFirstString,m=d!==void 0&&d,h=e.wrapper,v=h===void 0?"span":h,w=e.splitter,y=w===void 0?function(N){return it([],Ze(N),!1)}:w,j=e.cursor,f=j===void 0||j,u=e.style,p=function(N,R){var D={};for(var oe in N)Object.prototype.hasOwnProperty.call(N,oe)&&R.indexOf(oe)<0&&(D[oe]=N[oe]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function"){var ke=0;for(oe=Object.getOwnPropertySymbols(N);ke<oe.length;ke++)R.indexOf(oe[ke])<0&&Object.prototype.propertyIsEnumerable.call(N,oe[ke])&&(D[oe[ke]]=N[oe[ke]])}return D}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),g=p["aria-label"],E=p["aria-hidden"],C=p.role;s||(s=i);var S=new Array(2).fill(40);[i,s].forEach(function(N,R){switch(typeof N){case"number":S[R]=Math.abs(N-100);break;case"object":var D=N.type,oe=N.value;if(typeof oe!="number")break;D==="keyStrokeDelayInMs"&&(S[R]=oe)}});var z,W,T,G,ze,Qe,xt=S[0],Vn=S[1],St=function(N,R){R===void 0&&(R=null);var D=M.useRef(R);return M.useEffect(function(){N&&(typeof N=="function"?N(D.current):N.current=D.current)},[N]),D}(t),ln=mm;z=o?"".concat(f?ln+" ":"").concat(o):f?ln:"",W=M.useRef(function(){var N,R=n;r===1/0?N=ju:typeof r=="number"&&(R=Array(1+r).fill(n).flat());var D=N?it(it([],Ze(R),!1),[N],!1):it([],Ze(R),!1);return ju.apply(void 0,it([St.current,y,xt,Vn,c],Ze(D),!1)),function(){St.current}}),T=M.useRef(),G=M.useRef(!1),ze=M.useRef(!1),Qe=Ze(M.useState(0),2)[1],G.current&&(ze.current=!0),M.useEffect(function(){return G.current||(T.current=W.current(),G.current=!0),Qe(function(N){return N+1}),function(){ze.current&&T.current&&T.current()}},[]);var _=v,O=m?n.find(function(N){return typeof N=="string"})||"":null;return Je.createElement(_,{"aria-hidden":E,"aria-label":g,role:C,style:u,className:z,children:g?Je.createElement("span",{"aria-hidden":"true",ref:St,children:O}):O,ref:g?void 0:St})}),function(e,t){return!0});function ym(e){return on({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function vm(e){return on({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}const gm=()=>A.jsxs("div",{id:"main",children:[A.jsx("img",{className:"w-full h-screen object-cover object-left",src:"https://images.unsplash.com/photo-1622819584099-e04ccb14e8a7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),A.jsx("div",{className:"w-full h-screen absolute top-0 left-0 bg-white/50",children:A.jsxs("div",{className:"max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center",children:[A.jsxs("h1",{className:"sm:text-5xl text-center text-4xl font-bold text-gray-800",children:["My name is ",A.jsx("span",{className:" rounded-xl bg-white shadow-md pl-2 pb-2",children:A.jsx(hm,{sequence:["Kevin Nguyen",5e3,"An Nguyen",5e3],wrapper:"span",speed:25,style:{fontSize:"1em",display:"inline-block"},repeat:1/0})})]}),A.jsx("h2",{className:"flex sm:text-3xl text-2xl pt-6 text-gray-800",children:"I'm a Software Engineer"}),A.jsxs("div",{className:"flex justify-between pt-6 max-w-[200px] w-24",children:[A.jsx("a",{href:"https://github.com/johnnyblaze1999",target:"_blank",rel:"noopener noreferrer",children:A.jsx(ym,{className:"cursor-pointer p-2 hover:scale-110 rounded-xl ease-out duration-150",size:50})}),A.jsx("a",{href:"https://www.linkedin.com/in/kevinnguyennorco/",target:"_blank",rel:"noopener noreferrer",children:A.jsx(vm,{className:"cursor-pointer p-2 hover:scale-110 rounded-xl ease-out duration-150",size:50})})]})]})})]});function wm(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function xm(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Sm=function(){function e(n){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(xm(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=wm(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",Qo="-moz-",$="-webkit-",nd="comm",na="rule",ra="decl",km="@import",rd="@keyframes",Em="@layer",Cm=Math.abs,ul=String.fromCharCode,Am=Object.assign;function Nm(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function od(e){return e.trim()}function _m(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function ns(e,t){return e.indexOf(t)}function ce(e,t){return e.charCodeAt(t)|0}function Nr(e,t,n){return e.slice(t,n)}function rt(e){return e.length}function oa(e){return e.length}function eo(e,t){return t.push(e),e}function Pm(e,t){return e.map(t).join("")}var cl=1,Rn=1,ld=0,Pe=0,ee=0,Dn="";function fl(e,t,n,r,o,l,i){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:cl,column:Rn,length:i,return:""}}function Kn(e,t){return Am(fl("",null,null,"",null,null,0),e,{length:-e.length},t)}function zm(){return ee}function jm(){return ee=Pe>0?ce(Dn,--Pe):0,Rn--,ee===10&&(Rn=1,cl--),ee}function Me(){return ee=Pe<ld?ce(Dn,Pe++):0,Rn++,ee===10&&(Rn=1,cl++),ee}function ut(){return ce(Dn,Pe)}function yo(){return Pe}function Rr(e,t){return Nr(Dn,e,t)}function _r(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function id(e){return cl=Rn=1,ld=rt(Dn=e),Pe=0,[]}function sd(e){return Dn="",e}function vo(e){return od(Rr(Pe-1,rs(e===91?e+2:e===40?e+1:e)))}function Om(e){for(;(ee=ut())&&ee<33;)Me();return _r(e)>2||_r(ee)>3?"":" "}function Tm(e,t){for(;--t&&Me()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Rr(e,yo()+(t<6&&ut()==32&&Me()==32))}function rs(e){for(;Me();)switch(ee){case e:return Pe;case 34:case 39:e!==34&&e!==39&&rs(ee);break;case 40:e===41&&rs(e);break;case 92:Me();break}return Pe}function Mm(e,t){for(;Me()&&e+ee!==57;)if(e+ee===84&&ut()===47)break;return"/*"+Rr(t,Pe-1)+"*"+ul(e===47?e:Me())}function Lm(e){for(;!_r(ut());)Me();return Rr(e,Pe)}function Rm(e){return sd(go("",null,null,null,[""],e=id(e),0,[0],e))}function go(e,t,n,r,o,l,i,s,a){for(var c=0,d=0,m=i,h=0,v=0,w=0,y=1,j=1,f=1,u=0,p="",g=o,E=l,C=r,S=p;j;)switch(w=u,u=Me()){case 40:if(w!=108&&ce(S,m-1)==58){ns(S+=F(vo(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:S+=vo(u);break;case 9:case 10:case 13:case 32:S+=Om(w);break;case 92:S+=Tm(yo()-1,7);continue;case 47:switch(ut()){case 42:case 47:eo(Im(Mm(Me(),yo()),t,n),a);break;default:S+="/"}break;case 123*y:s[c++]=rt(S)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:j=0;case 59+d:f==-1&&(S=F(S,/\f/g,"")),v>0&&rt(S)-m&&eo(v>32?Tu(S+";",r,n,m-1):Tu(F(S," ","")+";",r,n,m-2),a);break;case 59:S+=";";default:if(eo(C=Ou(S,t,n,c,d,o,s,p,g=[],E=[],m),l),u===123)if(d===0)go(S,t,C,C,g,l,m,s,E);else switch(h===99&&ce(S,3)===110?100:h){case 100:case 108:case 109:case 115:go(e,C,C,r&&eo(Ou(e,C,C,0,0,o,s,p,o,g=[],m),E),o,E,m,s,r?g:E);break;default:go(S,C,C,C,[""],E,0,s,E)}}c=d=v=0,y=f=1,p=S="",m=i;break;case 58:m=1+rt(S),v=w;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&jm()==125)continue}switch(S+=ul(u),u*y){case 38:f=d>0?1:(S+="\f",-1);break;case 44:s[c++]=(rt(S)-1)*f,f=1;break;case 64:ut()===45&&(S+=vo(Me())),h=ut(),d=m=rt(p=S+=Lm(yo())),u++;break;case 45:w===45&&rt(S)==2&&(y=0)}}return l}function Ou(e,t,n,r,o,l,i,s,a,c,d){for(var m=o-1,h=o===0?l:[""],v=oa(h),w=0,y=0,j=0;w<r;++w)for(var f=0,u=Nr(e,m+1,m=Cm(y=i[w])),p=e;f<v;++f)(p=od(y>0?h[f]+" "+u:F(u,/&\f/g,h[f])))&&(a[j++]=p);return fl(e,t,n,o===0?na:s,a,c,d)}function Im(e,t,n){return fl(e,t,n,nd,ul(zm()),Nr(e,2,-2),0)}function Tu(e,t,n,r){return fl(e,t,n,ra,Nr(e,0,r),Nr(e,r+1,-1),r)}function _n(e,t){for(var n="",r=oa(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function $m(e,t,n,r){switch(e.type){case Em:if(e.children.length)break;case km:case ra:return e.return=e.return||e.value;case nd:return"";case rd:return e.return=e.value+"{"+_n(e.children,r)+"}";case na:e.value=e.props.join(",")}return rt(n=_n(e.children,r))?e.return=e.value+"{"+n+"}":""}function Fm(e){var t=oa(e);return function(n,r,o,l){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,l)||"";return i}}function Dm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Vm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Um=function(t,n,r){for(var o=0,l=0;o=l,l=ut(),o===38&&l===12&&(n[r]=1),!_r(l);)Me();return Rr(t,Pe)},Bm=function(t,n){var r=-1,o=44;do switch(_r(o)){case 0:o===38&&ut()===12&&(n[r]=1),t[r]+=Um(Pe-1,n,r);break;case 2:t[r]+=vo(o);break;case 4:if(o===44){t[++r]=ut()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ul(o)}while(o=Me());return t},Wm=function(t,n){return sd(Bm(id(t),n))},Mu=new WeakMap,Hm=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Mu.get(r))&&!o){Mu.set(t,!0);for(var l=[],i=Wm(n,l),s=r.props,a=0,c=0;a<i.length;a++)for(var d=0;d<s.length;d++,c++)t.props[c]=l[a]?i[a].replace(/&\f/g,s[d]):s[d]+" "+i[a]}}},Qm=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function ad(e,t){switch(Nm(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Qo+e+he+e+e;case 6828:case 4268:return $+e+he+e+e;case 6165:return $+e+he+"flex-"+e+e;case 5187:return $+e+F(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return $+e+he+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return $+e+he+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+he+F(e,"shrink","negative")+e;case 5292:return $+e+he+F(e,"basis","preferred-size")+e;case 6060:return $+"box-"+F(e,"-grow","")+$+e+he+F(e,"grow","positive")+e;case 4554:return $+F(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rt(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Qo+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ns(e,"stretch")?ad(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ce(e,t+1)!==115)break;case 6444:switch(ce(e,rt(e)-3-(~ns(e,"!important")&&10))){case 107:return F(e,":",":"+$)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ce(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(ce(e,t+11)){case 114:return $+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+he+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+he+e+e}return e}var Ym=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case ra:t.return=ad(t.value,t.length);break;case rd:return _n([Kn(t,{value:F(t.value,"@","@"+$)})],o);case na:if(t.length)return Pm(t.props,function(l){switch(_m(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _n([Kn(t,{props:[F(l,/:(read-\w+)/,":"+Qo+"$1")]})],o);case"::placeholder":return _n([Kn(t,{props:[F(l,/:(plac\w+)/,":"+$+"input-$1")]}),Kn(t,{props:[F(l,/:(plac\w+)/,":"+Qo+"$1")]}),Kn(t,{props:[F(l,/:(plac\w+)/,he+"input-$1")]})],o)}return""})}},Gm=[Ym],Xm=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var j=y.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||Gm,l={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var j=y.getAttribute("data-emotion").split(" "),f=1;f<j.length;f++)l[j[f]]=!0;s.push(y)});var a,c=[Hm,Qm];{var d,m=[$m,Dm(function(y){d.insert(y)})],h=Fm(c.concat(o,m)),v=function(j){return _n(Rm(j),h)};a=function(j,f,u,p){d=u,v(j?j+"{"+f.styles+"}":f.styles),p&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new Sm({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:a};return w.sheet.hydrate(s),w},ud={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=typeof Symbol=="function"&&Symbol.for,la=ae?Symbol.for("react.element"):60103,ia=ae?Symbol.for("react.portal"):60106,dl=ae?Symbol.for("react.fragment"):60107,pl=ae?Symbol.for("react.strict_mode"):60108,ml=ae?Symbol.for("react.profiler"):60114,hl=ae?Symbol.for("react.provider"):60109,yl=ae?Symbol.for("react.context"):60110,sa=ae?Symbol.for("react.async_mode"):60111,vl=ae?Symbol.for("react.concurrent_mode"):60111,gl=ae?Symbol.for("react.forward_ref"):60112,wl=ae?Symbol.for("react.suspense"):60113,Km=ae?Symbol.for("react.suspense_list"):60120,xl=ae?Symbol.for("react.memo"):60115,Sl=ae?Symbol.for("react.lazy"):60116,Zm=ae?Symbol.for("react.block"):60121,Jm=ae?Symbol.for("react.fundamental"):60117,qm=ae?Symbol.for("react.responder"):60118,bm=ae?Symbol.for("react.scope"):60119;function $e(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case la:switch(e=e.type,e){case sa:case vl:case dl:case ml:case pl:case wl:return e;default:switch(e=e&&e.$$typeof,e){case yl:case gl:case Sl:case xl:case hl:return e;default:return t}}case ia:return t}}}function cd(e){return $e(e)===vl}U.AsyncMode=sa;U.ConcurrentMode=vl;U.ContextConsumer=yl;U.ContextProvider=hl;U.Element=la;U.ForwardRef=gl;U.Fragment=dl;U.Lazy=Sl;U.Memo=xl;U.Portal=ia;U.Profiler=ml;U.StrictMode=pl;U.Suspense=wl;U.isAsyncMode=function(e){return cd(e)||$e(e)===sa};U.isConcurrentMode=cd;U.isContextConsumer=function(e){return $e(e)===yl};U.isContextProvider=function(e){return $e(e)===hl};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===la};U.isForwardRef=function(e){return $e(e)===gl};U.isFragment=function(e){return $e(e)===dl};U.isLazy=function(e){return $e(e)===Sl};U.isMemo=function(e){return $e(e)===xl};U.isPortal=function(e){return $e(e)===ia};U.isProfiler=function(e){return $e(e)===ml};U.isStrictMode=function(e){return $e(e)===pl};U.isSuspense=function(e){return $e(e)===wl};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===dl||e===vl||e===ml||e===pl||e===wl||e===Km||typeof e=="object"&&e!==null&&(e.$$typeof===Sl||e.$$typeof===xl||e.$$typeof===hl||e.$$typeof===yl||e.$$typeof===gl||e.$$typeof===Jm||e.$$typeof===qm||e.$$typeof===bm||e.$$typeof===Zm)};U.typeOf=$e;ud.exports=U;var e1=ud.exports,fd=e1,t1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dd={};dd[fd.ForwardRef]=t1;dd[fd.Memo]=n1;var r1=!0;function pd(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var aa=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||r1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},md=function(t,n,r){aa(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function o1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var l1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},i1=/[A-Z]|^ms/g,s1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,hd=function(t){return t.charCodeAt(1)===45},Lu=function(t){return t!=null&&typeof t!="boolean"},li=Vm(function(e){return hd(e)?e:e.replace(i1,"-$&").toLowerCase()}),Ru=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(s1,function(r,o,l){return ot={name:o,styles:l,next:ot},o})}return l1[t]!==1&&!hd(t)&&typeof n=="number"&&n!==0?n+"px":n};function Pr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ot={name:n.name,styles:n.styles,next:ot},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)ot={name:r.name,styles:r.styles,next:ot},r=r.next;var o=n.styles+";";return o}return a1(e,t,n)}case"function":{if(e!==void 0){var l=ot,i=n(e);return ot=l,Pr(e,t,i)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function a1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Pr(e,t,n[o])+";";else for(var l in n){var i=n[l];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=l+"{"+t[i]+"}":Lu(i)&&(r+=li(l)+":"+Ru(l,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var s=0;s<i.length;s++)Lu(i[s])&&(r+=li(l)+":"+Ru(l,i[s])+";");else{var a=Pr(e,t,i);switch(l){case"animation":case"animationName":{r+=li(l)+":"+a+";";break}default:r+=l+"{"+a+"}"}}}return r}var Iu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ot,ua=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,l="";ot=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,l+=Pr(r,n,i)):l+=i[0];for(var s=1;s<t.length;s++)l+=Pr(r,n,t[s]),o&&(l+=i[s]);Iu.lastIndex=0;for(var a="",c;(c=Iu.exec(l))!==null;)a+="-"+c[1];var d=o1(l)+a;return{name:d,styles:l,next:ot}},u1=function(t){return t()},c1=va.useInsertionEffect?va.useInsertionEffect:!1,yd=c1||u1,ca={}.hasOwnProperty,vd=M.createContext(typeof HTMLElement<"u"?Xm({key:"css"}):null);vd.Provider;var gd=function(t){return M.forwardRef(function(n,r){var o=M.useContext(vd);return t(n,o,r)})},wd=M.createContext({}),os="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",f1=function(t,n){var r={};for(var o in n)ca.call(n,o)&&(r[o]=n[o]);return r[os]=t,r},d1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return aa(n,r,o),yd(function(){return md(n,r,o)}),null},p1=gd(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[os],l=[r],i="";typeof e.className=="string"?i=pd(t.registered,l,e.className):e.className!=null&&(i=e.className+" ");var s=ua(l,void 0,M.useContext(wd));i+=t.key+"-"+s.name;var a={};for(var c in e)ca.call(e,c)&&c!=="css"&&c!==os&&(a[c]=e[c]);return a.ref=n,a.className=i,M.createElement(M.Fragment,null,M.createElement(d1,{cache:t,serialized:s,isStringTag:typeof o=="string"}),M.createElement(o,a))}),m1=p1,h1=A.Fragment;function le(e,t,n){return ca.call(t,"css")?A.jsx(m1,f1(e,t),n):A.jsx(e,t,n)}function xd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ua(t)}var k=function(){var t=xd.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},y1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var l=t[r];if(l!=null){var i=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))i=e(l);else{i="";for(var s in l)l[s]&&s&&(i&&(i+=" "),i+=s)}break}default:i=l}i&&(o&&(o+=" "),o+=i)}}return o};function v1(e,t,n){var r=[],o=pd(e,r,n);return r.length<2?n:o+t(r)}var g1=function(t){var n=t.cache,r=t.serializedArr;return yd(function(){for(var o=0;o<r.length;o++)md(n,r[o],!1)}),null},ii=gd(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,d=new Array(c),m=0;m<c;m++)d[m]=arguments[m];var h=ua(d,t.registered);return r.push(h),aa(t,h,!1),t.key+"-"+h.name},l=function(){for(var c=arguments.length,d=new Array(c),m=0;m<c;m++)d[m]=arguments[m];return v1(t.registered,o,y1(d))},i={css:o,cx:l,theme:M.useContext(wd)},s=e.children(i);return n=!0,M.createElement(M.Fragment,null,M.createElement(g1,{cache:t,serializedArr:r}),s)}),w1=Object.defineProperty,x1=(e,t,n)=>t in e?w1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,to=(e,t,n)=>(x1(e,typeof t!="symbol"?t+"":t,n),n),ls=new Map,no=new WeakMap,$u=0,S1=void 0;function k1(e){return e?(no.has(e)||($u+=1,no.set(e,$u.toString())),no.get(e)):"0"}function E1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?k1(e.root):e[t]}`).toString()}function C1(e){const t=E1(e);let n=ls.get(t);if(!n){const r=new Map;let o;const l=new IntersectionObserver(i=>{i.forEach(s=>{var a;const c=s.isIntersecting&&o.some(d=>s.intersectionRatio>=d);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(d=>{d(c,s)})})},e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},ls.set(t,n)}return n}function Sd(e,t,n={},r=S1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:l,elements:i}=C1(n),s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),l.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(i.delete(e),l.unobserve(e)),i.size===0&&(l.disconnect(),ls.delete(o))}}function A1(e){return typeof e.children!="function"}var Fu=class extends M.Component{constructor(e){super(e),to(this,"node",null),to(this,"_unobserveCb",null),to(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),to(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),A1(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:l}=this.props;this._unobserveCb=Sd(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:v,entry:w}=this.state;return e({inView:v,entry:w,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:l,onChange:i,skip:s,trackVisibility:a,delay:c,initialInView:d,fallbackInView:m,...h}=this.props;return M.createElement(t||"div",{ref:this.handleNode,...h},e)}};function kd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:l,skip:i,initialInView:s,fallbackInView:a,onChange:c}={}){var d;const[m,h]=M.useState(null),v=M.useRef(),[w,y]=M.useState({inView:!!s,entry:void 0});v.current=c,M.useEffect(()=>{if(i||!m)return;let p;return p=Sd(m,(g,E)=>{y({inView:g,entry:E}),v.current&&v.current(g,E),E.isIntersecting&&l&&p&&(p(),p=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,m,o,r,l,i,n,a,t]);const j=(d=w.entry)==null?void 0:d.target,f=M.useRef();!m&&j&&!l&&!i&&f.current!==j&&(f.current=j,y({inView:!!s,entry:void 0}));const u=[h,w.inView,w.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var Ed={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),da=Symbol.for("react.portal"),kl=Symbol.for("react.fragment"),El=Symbol.for("react.strict_mode"),Cl=Symbol.for("react.profiler"),Al=Symbol.for("react.provider"),Nl=Symbol.for("react.context"),N1=Symbol.for("react.server_context"),_l=Symbol.for("react.forward_ref"),Pl=Symbol.for("react.suspense"),zl=Symbol.for("react.suspense_list"),jl=Symbol.for("react.memo"),Ol=Symbol.for("react.lazy"),_1=Symbol.for("react.offscreen"),Cd;Cd=Symbol.for("react.module.reference");function He(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case fa:switch(e=e.type,e){case kl:case Cl:case El:case Pl:case zl:return e;default:switch(e=e&&e.$$typeof,e){case N1:case Nl:case _l:case Ol:case jl:case Al:return e;default:return t}}case da:return t}}}B.ContextConsumer=Nl;B.ContextProvider=Al;B.Element=fa;B.ForwardRef=_l;B.Fragment=kl;B.Lazy=Ol;B.Memo=jl;B.Portal=da;B.Profiler=Cl;B.StrictMode=El;B.Suspense=Pl;B.SuspenseList=zl;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return He(e)===Nl};B.isContextProvider=function(e){return He(e)===Al};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===fa};B.isForwardRef=function(e){return He(e)===_l};B.isFragment=function(e){return He(e)===kl};B.isLazy=function(e){return He(e)===Ol};B.isMemo=function(e){return He(e)===jl};B.isPortal=function(e){return He(e)===da};B.isProfiler=function(e){return He(e)===Cl};B.isStrictMode=function(e){return He(e)===El};B.isSuspense=function(e){return He(e)===Pl};B.isSuspenseList=function(e){return He(e)===zl};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===kl||e===Cl||e===El||e===Pl||e===zl||e===_1||typeof e=="object"&&e!==null&&(e.$$typeof===Ol||e.$$typeof===jl||e.$$typeof===Al||e.$$typeof===Nl||e.$$typeof===_l||e.$$typeof===Cd||e.getModuleId!==void 0)};B.typeOf=He;Ed.exports=B;var P1=Ed.exports;k`
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
`;k`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;k`
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
`;k`
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
`;k`
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
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;const z1=k`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,j1=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,O1=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T1=k`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,M1=k`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pa=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,L1=k`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,R1=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,I1=k`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$1=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,F1=k`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,D1=k`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,V1=k`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function U1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=pa,iterationCount:o=1}){return xd`
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
  `}function B1(e){return e==null}function W1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ad(e,t){return n=>n?e():t()}function zr(e){return Ad(e,()=>null)}function is(e){return zr(()=>({opacity:0}))(e)}const Nd=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:l=0,keyframes:i=pa,triggerOnce:s=!1,className:a,style:c,childClassName:d,childStyle:m,children:h,onVisibilityChange:v}=e,w=M.useMemo(()=>U1({keyframes:i,duration:o}),[o,i]);return B1(h)?null:W1(h)?le(Q1,{...e,animationStyles:w,children:String(h)}):P1.isFragment(h)?le(_d,{...e,animationStyles:w}):le(h1,{children:M.Children.map(h,(y,j)=>{if(!M.isValidElement(y))return null;const f=r+(t?j*o*n:0);switch(y.type){case"ol":case"ul":return le(ii,{children:({cx:u})=>le(y.type,{...y.props,className:u(a,y.props.className),style:Object.assign({},c,y.props.style),children:le(Nd,{...e,children:y.props.children})})});case"li":return le(Fu,{threshold:l,triggerOnce:s,onChange:v,children:({inView:u,ref:p})=>le(ii,{children:({cx:g})=>le(y.type,{...y.props,ref:p,className:g(d,y.props.className),css:zr(()=>w)(u),style:Object.assign({},m,y.props.style,is(!u),{animationDelay:f+"ms"})})})});default:return le(Fu,{threshold:l,triggerOnce:s,onChange:v,children:({inView:u,ref:p})=>le("div",{ref:p,className:a,css:zr(()=>w)(u),style:Object.assign({},c,is(!u),{animationDelay:f+"ms"}),children:le(ii,{children:({cx:g})=>le(y.type,{...y.props,className:g(d,y.props.className),style:Object.assign({},m,y.props.style)})})})})}})})},H1={display:"inline-block",whiteSpace:"pre"},Q1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:l=1e3,fraction:i=0,triggerOnce:s=!1,className:a,style:c,children:d,onVisibilityChange:m}=e,{ref:h,inView:v}=kd({triggerOnce:s,threshold:i,onChange:m});return Ad(()=>le("div",{ref:h,className:a,style:Object.assign({},c,H1),children:d.split("").map((w,y)=>le("span",{css:zr(()=>t)(v),style:{animationDelay:o+y*l*r+"ms"},children:w},y))}),()=>le(_d,{...e,children:d}))(n)},_d=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:l,children:i,onVisibilityChange:s}=e,{ref:a,inView:c}=kd({triggerOnce:r,threshold:n,onChange:s});return le("div",{ref:a,className:o,css:zr(()=>t)(c),style:Object.assign({},l,is(!c)),children:i})};k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;k`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;k`
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
`;const Y1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,G1=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,X1=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,K1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Z1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,J1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,q1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,b1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,eh=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,th=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,nh=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,rh=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,oh=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function lh(e,t,n){switch(n){case"bottom-left":return t?G1:j1;case"bottom-right":return t?X1:O1;case"down":return e?t?Z1:M1:t?K1:T1;case"left":return e?t?q1:L1:t?J1:pa;case"right":return e?t?eh:I1:t?b1:R1;case"top-left":return t?th:$1;case"top-right":return t?nh:F1;case"up":return e?t?oh:V1:t?rh:D1;default:return t?Y1:z1}}const ss=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,l=M.useMemo(()=>lh(t,r,n),[t,n,r]);return le(Nd,{keyframes:l,...o})};k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;k`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
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
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;k`
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
`;const an=({img:e,title:t,description:n,url:r,tools:o})=>{const l=o.split(", ");return A.jsx(ss,{direction:"up",triggerOnce:!0,children:A.jsxs("div",{className:"relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-tr from-gray-400 to-emerald-400 hover:scale-110 ease-in duration-150",children:[A.jsx("img",{src:e,alt:"/",className:"rounded-xl object-cover h-96 w-full group-hover:opacity-10 "}),A.jsxs("div",{className:"hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",children:[A.jsx("h3",{className:"text-2xl font-bold text-white tracking-wider text-center",children:t}),A.jsx("div",{className:"flex justify-center space-x-2",children:l.map((i,s)=>A.jsx("button",{className:"px-2 my-2 py-1 bg-rose-400 text-white text-sm rounded-full",children:i},s))}),A.jsx("a",{href:r,target:"_blank",rel:"noopener norefferer",children:A.jsx("div",{className:"flex justify-center",children:A.jsx("p",{className:"relative overflow-hidden inline-block text-center p-1 px-4 my-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer transition ease-in hover:scale-110 active:scale-90",children:A.jsx("span",{className:"relative z-10",children:"View Project"})})})}),A.jsxs("details",{className:"text-white text-center font-semibold rounded-lg hover:cursor-pointer",close:!0,children:[A.jsx("summary",{className:"text-sm select-none",children:"Details"}),A.jsx("div",{className:"mt-1 text-sm",children:n})]})]})]})})},si="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADhCAYAAAByfIirAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFuUlEQVR4nO3dz2sUZxwH4I9LCCGEJYQgIhJCkBBEJEiQUnoo/ZtLz1Kkpx7EQw+l9CSliIRQQgkipYfXpY1ukt1kZmfemeeBXDTGF9/Zj+/P7yQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQOXudd0ArjVJspFkreuGjMhFkg9dN4L5fBD67VmSJ9FPq/RXkpdJzjpuB3NMum4AV1pPchhhtWrTJI+7bgTzCaz+ElTd8W/fUzqmHqdJ3nbdiIGajWb9B95zAqsep0led92IgdpMmQYKrJ7TQUA1BBZQDYEFVENgAdWw6D48O0l2U/r2Ism7JOedtggaIrCG42GS5ymB9bm3SX5OOcUN1RJYw3CUElZX9eejlFHXy5QRF1TJGlb9HuT6sJrZSPJNypkjqJLAqtski4XVzFaSp+01B9olsOq2k/lrVtfZS7mKAtURWHXbyfJ9uJ4y0oLqCKy63WbTZBL9TqU8uHW7uMWf+SfJx6YbAqsgsOp2muXD5+84SEqlBFbdzpL8ueSf+S39GGFNU2pQ7accuYAbOThav9cph0IX+dC/T/Jru81ZyGHKcYzZbuV5kp+yfPgyMkZY9TtN8io3v+nlLMmPC3xf2/aSvMjloxVbSb5Ncr+LBlEPgTUMfyT5Psnv+TKQzpO8SfJDul+72krydeY/d+uffs/0kCuZEg7HecpIayNlfWhWreE83Y+qktKer3P9odVpyujrVcpuJlwisIbnIrc77tC2Zyn3Hm+yn7KW1Ye1NnrGlJBV2Et5IeyinqdsJMAlAou2baZM85Z51taTfBV3HvmMwKJNk5TguU1Jm50kJ802h9oJLNr0NKV44G09TnLQUFsYAIFFWx6kmdpbJ0m2G/g5DIDAog2zM1VN7EJvpEwr7WgjsGjcJCWsmqy5dT9l55CRE1g07TDlGEMbP/cu62EMgMCiSbtJjlv62bMdR9VSR0xgjdtayi7cScoI5i7nntZS3srT5tmpzTS3NkaFdPx4zV779fB/v/YkpaLD6ZI/a5ISetNmmnatByntfLOCv4ueMcIarxe5HFZJCZzvsnzw7KecmVqVZ1GKZpQE1jgdpYTMPMtOu7az/NWbu5rES2FHSWCNzyIL4/cX+J5ksZIxbdnK6oOSjunscVnmUvFRvpwyfu443VZV2EvZLGAkBNa4vMjib4q+6QDofkqode0kStGMhsAaj4Msf5F4M/OvxUxTgqIPz88sWJVWHoE+PHC0bzu3L9XyMJdHUncpGdOW7bi6MwoCa/iaeLnDcf47RrBoqeNVO4j1rMETWMPXxML4bNp1kOVKHa/SJGWUpRTNgAmsYXuU5kYd0/T/WkyTZW3oIYE1XNOUtaYm+7iG52U31rMGq4YHkOWtpRxh6NPC+Cod5uqT/FRMYA3Tk9x86HPIJhl3YA+WwBqeByk7eWM3q0ZhPWtABNawzC4u69eiqRdh0BMe7OGYTYNU5Lxs7NPjQRFYw3GUdmqp125WCdV61gAIrGFos5b6EGykjD6tZ1VOYNXPYcnFKEUzAAKrbrN1K9dRFnOcft6DZEECq26P44DkMtayeAFDekhg1WuacgVFHy5nGqWVq6XT6rSe9t8BOGQHWe1bfmiIhdo6bSd5/+mL29lMef4/dt0QFiew6vTu0xeMisCqxySmgG3xOaiEjqrHXlwxaZPPQgV0Uj3Wor8YObuE/fUhyUXXjRips64bwHz3um4A19pNudRsZLU6p0l+id1DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA2/AvQNmMLb5ClIQAAAABJRU5ErkJggg==",ih="/portfolio/assets/gradebookProject-VCy2A2WG.png",sh="/portfolio/assets/aichatbotProject-C3nGAX1M.png",ah="/portfolio/assets/portfolio-D7y76Sn6.png",uh=()=>A.jsxs("div",{id:"projects",className:"max-w-[1040px] m-auto md:pl-20 p-4 py-16",children:[A.jsx(ss,{direction:"down",triggerOnce:!0,children:A.jsx("h1",{className:"text-4xl font-bold text-center text-[#001b5e]",children:"Projects"})}),A.jsx(ss,{direction:"up",triggerOnce:!0,children:A.jsx("p",{className:"text-center text-lg py-8",children:"Here are some of the projects that I've done over the years, including what I have learned in class and my personal projects. Feel free to check around for more projects in my Github repo."})}),A.jsxs("div",{className:"grid sm:grid-cols-2 gap-12",children:[A.jsx(an,{img:ah,title:"Personal Portfolio",description:"My personal portfolio webpage showcasing my skills, experiences, and projects.",url:"/",tools:"ReactJS, Vite, TailwindCSS"}),A.jsx(an,{img:si,title:"Unity Game",description:"A fun desktop game where the player dodges incoming projectiles and survive under the time limit.",url:"/",tools:"Unity, C#"}),A.jsx(an,{img:si,title:"Fullyhack Chrome Extension",description:"A chrome extension that return the weather status in real-time base on the given city's name. This is a 24h project for FullyHack",url:"https://github.com/Fullyhacks2024/Fullyhacks_Project",tools:"HTML, CSS, Javascript"}),A.jsx(an,{img:sh,title:"BotPress Chatbot",description:"AI Chatbot that use a given dataset along with clever prompt engineering to assist customers for a quicker and better customer service.",url:"https://github.com/johnnyblaze1999/CapstonePrototype",tools:"Javascript, BotPress, AI"}),A.jsx(an,{img:ih,title:"Gradebook Database",description:"Database system designed to assist professors and students on keeping track of their courses, grades, class's session, and standing status.",url:"https://github.com/johnnyblaze1999/Gradebook-database",tools:"MySQL, OpenOffice, HTML, CSS, PHP"}),A.jsx(an,{img:si,title:"Hotel Webpage",description:"A simple styled Hotel website to support guests on seeking information and hotel's schedule.",url:"/",tools:""})]})]});function ch(){return A.jsxs("div",{children:[A.jsx(um,{}),A.jsx(gm,{}),A.jsx(uh,{})]})}ai.createRoot(document.getElementById("root")).render(A.jsx(Je.StrictMode,{children:A.jsx(ch,{})}));

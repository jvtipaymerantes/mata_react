(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Z_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ef={exports:{}},Oo={},Sf={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wi=Symbol.for("react.element"),ev=Symbol.for("react.portal"),tv=Symbol.for("react.fragment"),nv=Symbol.for("react.strict_mode"),rv=Symbol.for("react.profiler"),iv=Symbol.for("react.provider"),sv=Symbol.for("react.context"),ov=Symbol.for("react.forward_ref"),lv=Symbol.for("react.suspense"),av=Symbol.for("react.memo"),uv=Symbol.for("react.lazy"),Xc=Symbol.iterator;function cv(t){return t===null||typeof t!="object"?null:(t=Xc&&t[Xc]||t["@@iterator"],typeof t=="function"?t:null)}var Cf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},If=Object.assign,Tf={};function Or(t,e,n){this.props=t,this.context=e,this.refs=Tf,this.updater=n||Cf}Or.prototype.isReactComponent={};Or.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Or.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kf(){}kf.prototype=Or.prototype;function mu(t,e,n){this.props=t,this.context=e,this.refs=Tf,this.updater=n||Cf}var gu=mu.prototype=new kf;gu.constructor=mu;If(gu,Or.prototype);gu.isPureReactComponent=!0;var Jc=Array.isArray,xf=Object.prototype.hasOwnProperty,_u={current:null},Rf={key:!0,ref:!0,__self:!0,__source:!0};function Nf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xf.call(e,r)&&!Rf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Wi,type:t,key:s,ref:o,props:i,_owner:_u.current}}function dv(t,e){return{$$typeof:Wi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wi}function hv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zc=/\/+/g;function dl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hv(""+t.key):e.toString(36)}function Is(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wi:case ev:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+dl(o,0):r,Jc(i)?(n="",t!=null&&(n=t.replace(Zc,"$&/")+"/"),Is(i,e,n,"",function(u){return u})):i!=null&&(vu(i)&&(i=dv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jc(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+dl(s,l);o+=Is(s,e,n,a,i)}else if(a=cv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+dl(s,l++),o+=Is(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function is(t,e,n){if(t==null)return t;var r=[],i=0;return Is(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xe={current:null},Ts={transition:null},pv={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:_u};b.Children={map:is,forEach:function(t,e,n){is(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return is(t,function(){e++}),e},toArray:function(t){return is(t,function(e){return e})||[]},only:function(t){if(!vu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};b.Component=Or;b.Fragment=tv;b.Profiler=rv;b.PureComponent=mu;b.StrictMode=nv;b.Suspense=lv;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pv;b.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=If({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_u.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)xf.call(e,a)&&!Rf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Wi,type:t.type,key:i,ref:s,props:r,_owner:o}};b.createContext=function(t){return t={$$typeof:sv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iv,_context:t},t.Consumer=t};b.createElement=Nf;b.createFactory=function(t){var e=Nf.bind(null,t);return e.type=t,e};b.createRef=function(){return{current:null}};b.forwardRef=function(t){return{$$typeof:ov,render:t}};b.isValidElement=vu;b.lazy=function(t){return{$$typeof:uv,_payload:{_status:-1,_result:t},_init:fv}};b.memo=function(t,e){return{$$typeof:av,type:t,compare:e===void 0?null:e}};b.startTransition=function(t){var e=Ts.transition;Ts.transition={};try{t()}finally{Ts.transition=e}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(t,e){return xe.current.useCallback(t,e)};b.useContext=function(t){return xe.current.useContext(t)};b.useDebugValue=function(){};b.useDeferredValue=function(t){return xe.current.useDeferredValue(t)};b.useEffect=function(t,e){return xe.current.useEffect(t,e)};b.useId=function(){return xe.current.useId()};b.useImperativeHandle=function(t,e,n){return xe.current.useImperativeHandle(t,e,n)};b.useInsertionEffect=function(t,e){return xe.current.useInsertionEffect(t,e)};b.useLayoutEffect=function(t,e){return xe.current.useLayoutEffect(t,e)};b.useMemo=function(t,e){return xe.current.useMemo(t,e)};b.useReducer=function(t,e,n){return xe.current.useReducer(t,e,n)};b.useRef=function(t){return xe.current.useRef(t)};b.useState=function(t){return xe.current.useState(t)};b.useSyncExternalStore=function(t,e,n){return xe.current.useSyncExternalStore(t,e,n)};b.useTransition=function(){return xe.current.useTransition()};b.version="18.2.0";Sf.exports=b;var A=Sf.exports;const mv=Z_(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv=A,_v=Symbol.for("react.element"),vv=Symbol.for("react.fragment"),yv=Object.prototype.hasOwnProperty,wv=gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ev={key:!0,ref:!0,__self:!0,__source:!0};function Pf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yv.call(e,r)&&!Ev.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_v,type:t,key:s,ref:o,props:i,_owner:wv.current}}Oo.Fragment=vv;Oo.jsx=Pf;Oo.jsxs=Pf;Ef.exports=Oo;var c=Ef.exports,Jl={},Af={exports:{}},We={},Of={exports:{}},Df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,D){var L=R.length;R.push(D);e:for(;0<L;){var ne=L-1>>>1,ae=R[ne];if(0<i(ae,D))R[ne]=D,R[L]=ae,L=ne;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var D=R[0],L=R.pop();if(L!==D){R[0]=L;e:for(var ne=0,ae=R.length,ns=ae>>>1;ne<ns;){var mn=2*(ne+1)-1,cl=R[mn],gn=mn+1,rs=R[gn];if(0>i(cl,L))gn<ae&&0>i(rs,cl)?(R[ne]=rs,R[gn]=L,ne=gn):(R[ne]=cl,R[mn]=L,ne=mn);else if(gn<ae&&0>i(rs,L))R[ne]=rs,R[gn]=L,ne=gn;else break e}}return D}function i(R,D){var L=R.sortIndex-D.sortIndex;return L!==0?L:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,d=null,f=3,v=!1,_=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=R)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function w(R){if(y=!1,g(R),!_)if(n(a)!==null)_=!0,al(C);else{var D=n(u);D!==null&&ul(w,D.startTime-R)}}function C(R,D){_=!1,y&&(y=!1,m(P),P=-1),v=!0;var L=f;try{for(g(D),d=n(a);d!==null&&(!(d.expirationTime>D)||R&&!Ne());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var ae=ne(d.expirationTime<=D);D=t.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(a)&&r(a),g(D)}else r(a);d=n(a)}if(d!==null)var ns=!0;else{var mn=n(u);mn!==null&&ul(w,mn.startTime-D),ns=!1}return ns}finally{d=null,f=L,v=!1}}var N=!1,x=null,P=-1,$=5,T=-1;function Ne(){return!(t.unstable_now()-T<$)}function Wr(){if(x!==null){var R=t.unstable_now();T=R;var D=!0;try{D=x(!0,R)}finally{D?Hr():(N=!1,x=null)}}else N=!1}var Hr;if(typeof p=="function")Hr=function(){p(Wr)};else if(typeof MessageChannel<"u"){var Yc=new MessageChannel,J_=Yc.port2;Yc.port1.onmessage=Wr,Hr=function(){J_.postMessage(null)}}else Hr=function(){I(Wr,0)};function al(R){x=R,N||(N=!0,Hr())}function ul(R,D){P=I(function(){R(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,al(C))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var L=f;f=D;try{return R()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=f;f=R;try{return D()}finally{f=L}},t.unstable_scheduleCallback=function(R,D,L){var ne=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ne+L:ne):L=ne,R){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=L+ae,R={id:h++,callback:D,priorityLevel:R,startTime:L,expirationTime:ae,sortIndex:-1},L>ne?(R.sortIndex=L,e(u,R),n(a)===null&&R===n(u)&&(y?(m(P),P=-1):y=!0,ul(w,L-ne))):(R.sortIndex=ae,e(a,R),_||v||(_=!0,al(C))),R},t.unstable_shouldYield=Ne,t.unstable_wrapCallback=function(R){var D=f;return function(){var L=f;f=D;try{return R.apply(this,arguments)}finally{f=L}}}})(Df);Of.exports=Df;var Sv=Of.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf=A,Be=Sv;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mf=new Set,wi={};function Wn(t,e){wr(t,e),wr(t+"Capture",e)}function wr(t,e){for(wi[t]=e,t=0;t<e.length;t++)Mf.add(e[t])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,Cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ed={},td={};function Iv(t){return Zl.call(td,t)?!0:Zl.call(ed,t)?!1:Cv.test(t)?td[t]=!0:(ed[t]=!0,!1)}function Tv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kv(t,e,n,r){if(e===null||typeof e>"u"||Tv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Re(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_e[t]=new Re(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_e[e]=new Re(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_e[t]=new Re(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_e[t]=new Re(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_e[t]=new Re(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_e[t]=new Re(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_e[t]=new Re(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_e[t]=new Re(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_e[t]=new Re(t,5,!1,t.toLowerCase(),null,!1,!1)});var yu=/[\-:]([a-z])/g;function wu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yu,wu);_e[e]=new Re(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yu,wu);_e[e]=new Re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yu,wu);_e[e]=new Re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_e[t]=new Re(t,1,!1,t.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_e[t]=new Re(t,1,!1,t.toLowerCase(),null,!0,!0)});function Eu(t,e,n,r){var i=_e.hasOwnProperty(e)?_e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kv(e,n,i,r)&&(n=null),r||i===null?Iv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Lt=Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ss=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Su=Symbol.for("react.strict_mode"),ea=Symbol.for("react.profiler"),bf=Symbol.for("react.provider"),jf=Symbol.for("react.context"),Cu=Symbol.for("react.forward_ref"),ta=Symbol.for("react.suspense"),na=Symbol.for("react.suspense_list"),Iu=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Ff=Symbol.for("react.offscreen"),nd=Symbol.iterator;function $r(t){return t===null||typeof t!="object"?null:(t=nd&&t[nd]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,hl;function ni(t){if(hl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hl=e&&e[1]||""}return`
`+hl+t}var fl=!1;function pl(t,e){if(!t||fl)return"";fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{fl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ni(t):""}function xv(t){switch(t.tag){case 5:return ni(t.type);case 16:return ni("Lazy");case 13:return ni("Suspense");case 19:return ni("SuspenseList");case 0:case 2:case 15:return t=pl(t.type,!1),t;case 11:return t=pl(t.type.render,!1),t;case 1:return t=pl(t.type,!0),t;default:return""}}function ra(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qn:return"Fragment";case Qn:return"Portal";case ea:return"Profiler";case Su:return"StrictMode";case ta:return"Suspense";case na:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jf:return(t.displayName||"Context")+".Consumer";case bf:return(t._context.displayName||"Context")+".Provider";case Cu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Iu:return e=t.displayName||null,e!==null?e:ra(t.type)||"Memo";case Ft:e=t._payload,t=t._init;try{return ra(t(e))}catch{}}return null}function Rv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ra(e);case 8:return e===Su?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function an(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Nv(t){var e=Uf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function os(t){t._valueTracker||(t._valueTracker=Nv(t))}function zf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Uf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ia(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=an(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bf(t,e){e=e.checked,e!=null&&Eu(t,"checked",e,!1)}function sa(t,e){Bf(t,e);var n=an(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oa(t,e.type,n):e.hasOwnProperty("defaultValue")&&oa(t,e.type,an(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function id(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oa(t,e,n){(e!=="number"||Bs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ri=Array.isArray;function ar(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+an(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function la(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ri(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:an(n)}}function Wf(t,e){var n=an(e.value),r=an(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function od(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function aa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ls,$f=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ls=ls||document.createElement("div"),ls.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ls.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ei(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pv=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(t){Pv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),li[e]=li[t]})});function Vf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||li.hasOwnProperty(t)&&li[t]?(""+e).trim():e+"px"}function Gf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Av=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ua(t,e){if(e){if(Av[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function ca(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var da=null;function Tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ha=null,ur=null,cr=null;function ld(t){if(t=Vi(t)){if(typeof ha!="function")throw Error(E(280));var e=t.stateNode;e&&(e=jo(e),ha(t.stateNode,t.type,e))}}function Kf(t){ur?cr?cr.push(t):cr=[t]:ur=t}function Qf(){if(ur){var t=ur,e=cr;if(cr=ur=null,ld(t),e)for(t=0;t<e.length;t++)ld(e[t])}}function qf(t,e){return t(e)}function Yf(){}var ml=!1;function Xf(t,e,n){if(ml)return t(e,n);ml=!0;try{return qf(t,e,n)}finally{ml=!1,(ur!==null||cr!==null)&&(Yf(),Qf())}}function Si(t,e){var n=t.stateNode;if(n===null)return null;var r=jo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var fa=!1;if(kt)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){fa=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{fa=!1}function Ov(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ai=!1,Ws=null,Hs=!1,pa=null,Dv={onError:function(t){ai=!0,Ws=t}};function Lv(t,e,n,r,i,s,o,l,a){ai=!1,Ws=null,Ov.apply(Dv,arguments)}function Mv(t,e,n,r,i,s,o,l,a){if(Lv.apply(this,arguments),ai){if(ai){var u=Ws;ai=!1,Ws=null}else throw Error(E(198));Hs||(Hs=!0,pa=u)}}function Hn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ad(t){if(Hn(t)!==t)throw Error(E(188))}function bv(t){var e=t.alternate;if(!e){if(e=Hn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ad(i),t;if(s===r)return ad(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Zf(t){return t=bv(t),t!==null?ep(t):null}function ep(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ep(t);if(e!==null)return e;t=t.sibling}return null}var tp=Be.unstable_scheduleCallback,ud=Be.unstable_cancelCallback,jv=Be.unstable_shouldYield,Fv=Be.unstable_requestPaint,re=Be.unstable_now,Uv=Be.unstable_getCurrentPriorityLevel,ku=Be.unstable_ImmediatePriority,np=Be.unstable_UserBlockingPriority,$s=Be.unstable_NormalPriority,zv=Be.unstable_LowPriority,rp=Be.unstable_IdlePriority,Do=null,ft=null;function Bv(t){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Do,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:$v,Wv=Math.log,Hv=Math.LN2;function $v(t){return t>>>=0,t===0?32:31-(Wv(t)/Hv|0)|0}var as=64,us=4194304;function ii(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ii(l):(s&=o,s!==0&&(r=ii(s)))}else o=n&~i,o!==0?r=ii(o):s!==0&&(r=ii(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-st(e),i=1<<n,r|=t[n],e&=~i;return r}function Vv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-st(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Vv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ma(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ip(){var t=as;return as<<=1,!(as&4194240)&&(as=64),t}function gl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-st(e),t[e]=n}function Kv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-st(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function xu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-st(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function sp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var op,Ru,lp,ap,up,ga=!1,cs=[],qt=null,Yt=null,Xt=null,Ci=new Map,Ii=new Map,zt=[],Qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(t,e){switch(t){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Ci.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(e.pointerId)}}function Gr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vi(e),e!==null&&Ru(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qv(t,e,n,r,i){switch(e){case"focusin":return qt=Gr(qt,t,e,n,r,i),!0;case"dragenter":return Yt=Gr(Yt,t,e,n,r,i),!0;case"mouseover":return Xt=Gr(Xt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ci.set(s,Gr(Ci.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ii.set(s,Gr(Ii.get(s)||null,t,e,n,r,i)),!0}return!1}function cp(t){var e=En(t.target);if(e!==null){var n=Hn(e);if(n!==null){if(e=n.tag,e===13){if(e=Jf(n),e!==null){t.blockedOn=e,up(t.priority,function(){lp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ks(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_a(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);da=r,n.target.dispatchEvent(r),da=null}else return e=Vi(n),e!==null&&Ru(e),t.blockedOn=n,!1;e.shift()}return!0}function dd(t,e,n){ks(t)&&n.delete(e)}function Yv(){ga=!1,qt!==null&&ks(qt)&&(qt=null),Yt!==null&&ks(Yt)&&(Yt=null),Xt!==null&&ks(Xt)&&(Xt=null),Ci.forEach(dd),Ii.forEach(dd)}function Kr(t,e){t.blockedOn===e&&(t.blockedOn=null,ga||(ga=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Yv)))}function Ti(t){function e(i){return Kr(i,t)}if(0<cs.length){Kr(cs[0],t);for(var n=1;n<cs.length;n++){var r=cs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qt!==null&&Kr(qt,t),Yt!==null&&Kr(Yt,t),Xt!==null&&Kr(Xt,t),Ci.forEach(e),Ii.forEach(e),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)cp(n),n.blockedOn===null&&zt.shift()}var dr=Lt.ReactCurrentBatchConfig,Gs=!0;function Xv(t,e,n,r){var i=B,s=dr.transition;dr.transition=null;try{B=1,Nu(t,e,n,r)}finally{B=i,dr.transition=s}}function Jv(t,e,n,r){var i=B,s=dr.transition;dr.transition=null;try{B=4,Nu(t,e,n,r)}finally{B=i,dr.transition=s}}function Nu(t,e,n,r){if(Gs){var i=_a(t,e,n,r);if(i===null)kl(t,e,r,Ks,n),cd(t,r);else if(qv(i,t,e,n,r))r.stopPropagation();else if(cd(t,r),e&4&&-1<Qv.indexOf(t)){for(;i!==null;){var s=Vi(i);if(s!==null&&op(s),s=_a(t,e,n,r),s===null&&kl(t,e,r,Ks,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kl(t,e,r,null,n)}}var Ks=null;function _a(t,e,n,r){if(Ks=null,t=Tu(r),t=En(t),t!==null)if(e=Hn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ks=t,null}function dp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uv()){case ku:return 1;case np:return 4;case $s:case zv:return 16;case rp:return 536870912;default:return 16}default:return 16}}var Gt=null,Pu=null,xs=null;function hp(){if(xs)return xs;var t,e=Pu,n=e.length,r,i="value"in Gt?Gt.value:Gt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xs=i.slice(t,1<r?1-r:void 0)}function Rs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ds(){return!0}function hd(){return!1}function He(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ds:hd,this.isPropagationStopped=hd,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ds)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ds)},persist:function(){},isPersistent:ds}),e}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=He(Dr),$i=ee({},Dr,{view:0,detail:0}),Zv=He($i),_l,vl,Qr,Lo=ee({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qr&&(Qr&&t.type==="mousemove"?(_l=t.screenX-Qr.screenX,vl=t.screenY-Qr.screenY):vl=_l=0,Qr=t),_l)},movementY:function(t){return"movementY"in t?t.movementY:vl}}),fd=He(Lo),ey=ee({},Lo,{dataTransfer:0}),ty=He(ey),ny=ee({},$i,{relatedTarget:0}),yl=He(ny),ry=ee({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),iy=He(ry),sy=ee({},Dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oy=He(sy),ly=ee({},Dr,{data:0}),pd=He(ly),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cy[t])?!!e[t]:!1}function Ou(){return dy}var hy=ee({},$i,{key:function(t){if(t.key){var e=ay[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(t){return t.type==="keypress"?Rs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fy=He(hy),py=ee({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=He(py),my=ee({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),gy=He(my),_y=ee({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vy=He(_y),yy=ee({},Lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wy=He(yy),Ey=[9,13,27,32],Du=kt&&"CompositionEvent"in window,ui=null;kt&&"documentMode"in document&&(ui=document.documentMode);var Sy=kt&&"TextEvent"in window&&!ui,fp=kt&&(!Du||ui&&8<ui&&11>=ui),gd=String.fromCharCode(32),_d=!1;function pp(t,e){switch(t){case"keyup":return Ey.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yn=!1;function Cy(t,e){switch(t){case"compositionend":return mp(e);case"keypress":return e.which!==32?null:(_d=!0,gd);case"textInput":return t=e.data,t===gd&&_d?null:t;default:return null}}function Iy(t,e){if(Yn)return t==="compositionend"||!Du&&pp(t,e)?(t=hp(),xs=Pu=Gt=null,Yn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fp&&e.locale!=="ko"?null:e.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ty[t.type]:e==="textarea"}function gp(t,e,n,r){Kf(r),e=Qs(e,"onChange"),0<e.length&&(n=new Au("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ci=null,ki=null;function ky(t){xp(t,0)}function Mo(t){var e=Zn(t);if(zf(e))return t}function xy(t,e){if(t==="change")return e}var _p=!1;if(kt){var wl;if(kt){var El="oninput"in document;if(!El){var yd=document.createElement("div");yd.setAttribute("oninput","return;"),El=typeof yd.oninput=="function"}wl=El}else wl=!1;_p=wl&&(!document.documentMode||9<document.documentMode)}function wd(){ci&&(ci.detachEvent("onpropertychange",vp),ki=ci=null)}function vp(t){if(t.propertyName==="value"&&Mo(ki)){var e=[];gp(e,ki,t,Tu(t)),Xf(ky,e)}}function Ry(t,e,n){t==="focusin"?(wd(),ci=e,ki=n,ci.attachEvent("onpropertychange",vp)):t==="focusout"&&wd()}function Ny(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mo(ki)}function Py(t,e){if(t==="click")return Mo(e)}function Ay(t,e){if(t==="input"||t==="change")return Mo(e)}function Oy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var at=typeof Object.is=="function"?Object.is:Oy;function xi(t,e){if(at(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zl.call(e,i)||!at(t[i],e[i]))return!1}return!0}function Ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sd(t,e){var n=Ed(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ed(n)}}function yp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wp(){for(var t=window,e=Bs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bs(t.document)}return e}function Lu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Dy(t){var e=wp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yp(n.ownerDocument.documentElement,n)){if(r!==null&&Lu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sd(n,s);var o=Sd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ly=kt&&"documentMode"in document&&11>=document.documentMode,Xn=null,va=null,di=null,ya=!1;function Cd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ya||Xn==null||Xn!==Bs(r)||(r=Xn,"selectionStart"in r&&Lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),di&&xi(di,r)||(di=r,r=Qs(va,"onSelect"),0<r.length&&(e=new Au("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Xn)))}function hs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jn={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},Sl={},Ep={};kt&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function bo(t){if(Sl[t])return Sl[t];if(!Jn[t])return t;var e=Jn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ep)return Sl[t]=e[n];return t}var Sp=bo("animationend"),Cp=bo("animationiteration"),Ip=bo("animationstart"),Tp=bo("transitionend"),kp=new Map,Id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(t,e){kp.set(t,e),Wn(e,[t])}for(var Cl=0;Cl<Id.length;Cl++){var Il=Id[Cl],My=Il.toLowerCase(),by=Il[0].toUpperCase()+Il.slice(1);dn(My,"on"+by)}dn(Sp,"onAnimationEnd");dn(Cp,"onAnimationIteration");dn(Ip,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Tp,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function Td(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Mv(r,e,void 0,t),t.currentTarget=null}function xp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Td(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Td(i,l,u),s=a}}}if(Hs)throw t=pa,Hs=!1,pa=null,t}function G(t,e){var n=e[Ia];n===void 0&&(n=e[Ia]=new Set);var r=t+"__bubble";n.has(r)||(Rp(e,t,2,!1),n.add(r))}function Tl(t,e,n){var r=0;e&&(r|=4),Rp(n,t,r,e)}var fs="_reactListening"+Math.random().toString(36).slice(2);function Ri(t){if(!t[fs]){t[fs]=!0,Mf.forEach(function(n){n!=="selectionchange"&&(jy.has(n)||Tl(n,!1,t),Tl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fs]||(e[fs]=!0,Tl("selectionchange",!1,e))}}function Rp(t,e,n,r){switch(dp(e)){case 1:var i=Xv;break;case 4:i=Jv;break;default:i=Nu}n=i.bind(null,e,n,t),i=void 0,!fa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=En(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Xf(function(){var u=s,h=Tu(n),d=[];e:{var f=kp.get(t);if(f!==void 0){var v=Au,_=t;switch(t){case"keypress":if(Rs(n)===0)break e;case"keydown":case"keyup":v=fy;break;case"focusin":_="focus",v=yl;break;case"focusout":_="blur",v=yl;break;case"beforeblur":case"afterblur":v=yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=gy;break;case Sp:case Cp:case Ip:v=iy;break;case Tp:v=vy;break;case"scroll":v=Zv;break;case"wheel":v=wy;break;case"copy":case"cut":case"paste":v=oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=md}var y=(e&4)!==0,I=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Si(p,m),w!=null&&y.push(Ni(p,w,g)))),I)break;p=p.return}0<y.length&&(f=new v(f,_,null,n,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",f&&n!==da&&(_=n.relatedTarget||n.fromElement)&&(En(_)||_[xt]))break e;if((v||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?En(_):null,_!==null&&(I=Hn(_),_!==I||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(y=fd,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=md,w="onPointerLeave",m="onPointerEnter",p="pointer"),I=v==null?f:Zn(v),g=_==null?f:Zn(_),f=new y(w,p+"leave",v,n,h),f.target=I,f.relatedTarget=g,w=null,En(h)===u&&(y=new y(m,p+"enter",_,n,h),y.target=g,y.relatedTarget=I,w=y),I=w,v&&_)t:{for(y=v,m=_,p=0,g=y;g;g=Gn(g))p++;for(g=0,w=m;w;w=Gn(w))g++;for(;0<p-g;)y=Gn(y),p--;for(;0<g-p;)m=Gn(m),g--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=Gn(y),m=Gn(m)}y=null}else y=null;v!==null&&kd(d,f,v,y,!1),_!==null&&I!==null&&kd(d,I,_,y,!0)}}e:{if(f=u?Zn(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var C=xy;else if(vd(f))if(_p)C=Ay;else{C=Ny;var N=Ry}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Py);if(C&&(C=C(t,u))){gp(d,C,n,h);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&oa(f,"number",f.value)}switch(N=u?Zn(u):window,t){case"focusin":(vd(N)||N.contentEditable==="true")&&(Xn=N,va=u,di=null);break;case"focusout":di=va=Xn=null;break;case"mousedown":ya=!0;break;case"contextmenu":case"mouseup":case"dragend":ya=!1,Cd(d,n,h);break;case"selectionchange":if(Ly)break;case"keydown":case"keyup":Cd(d,n,h)}var x;if(Du)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Yn?pp(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(fp&&n.locale!=="ko"&&(Yn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Yn&&(x=hp()):(Gt=h,Pu="value"in Gt?Gt.value:Gt.textContent,Yn=!0)),N=Qs(u,P),0<N.length&&(P=new pd(P,t,null,n,h),d.push({event:P,listeners:N}),x?P.data=x:(x=mp(n),x!==null&&(P.data=x)))),(x=Sy?Cy(t,n):Iy(t,n))&&(u=Qs(u,"onBeforeInput"),0<u.length&&(h=new pd("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=x))}xp(d,e)})}function Ni(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Si(t,n),s!=null&&r.unshift(Ni(t,s,i)),s=Si(t,e),s!=null&&r.push(Ni(t,s,i))),t=t.return}return r}function Gn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Si(n,s),a!=null&&o.unshift(Ni(n,a,l))):i||(a=Si(n,s),a!=null&&o.push(Ni(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Fy=/\r\n?/g,Uy=/\u0000|\uFFFD/g;function xd(t){return(typeof t=="string"?t:""+t).replace(Fy,`
`).replace(Uy,"")}function ps(t,e,n){if(e=xd(e),xd(t)!==e&&n)throw Error(E(425))}function qs(){}var wa=null,Ea=null;function Sa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,Rd=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof Rd<"u"?function(t){return Rd.resolve(null).then(t).catch(Wy)}:Ca;function Wy(t){setTimeout(function(){throw t})}function xl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ti(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ti(e)}function Jt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),dt="__reactFiber$"+Lr,Pi="__reactProps$"+Lr,xt="__reactContainer$"+Lr,Ia="__reactEvents$"+Lr,Hy="__reactListeners$"+Lr,$y="__reactHandles$"+Lr;function En(t){var e=t[dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xt]||n[dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nd(t);t!==null;){if(n=t[dt])return n;t=Nd(t)}return e}t=n,n=t.parentNode}return null}function Vi(t){return t=t[dt]||t[xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function jo(t){return t[Pi]||null}var Ta=[],er=-1;function hn(t){return{current:t}}function q(t){0>er||(t.current=Ta[er],Ta[er]=null,er--)}function V(t,e){er++,Ta[er]=t.current,t.current=e}var un={},Ce=hn(un),De=hn(!1),Pn=un;function Er(t,e){var n=t.type.contextTypes;if(!n)return un;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Le(t){return t=t.childContextTypes,t!=null}function Ys(){q(De),q(Ce)}function Pd(t,e,n){if(Ce.current!==un)throw Error(E(168));V(Ce,e),V(De,n)}function Np(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,Rv(t)||"Unknown",i));return ee({},n,r)}function Xs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||un,Pn=Ce.current,V(Ce,t),V(De,De.current),!0}function Ad(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Np(t,e,Pn),r.__reactInternalMemoizedMergedChildContext=t,q(De),q(Ce),V(Ce,t)):q(De),V(De,n)}var vt=null,Fo=!1,Rl=!1;function Pp(t){vt===null?vt=[t]:vt.push(t)}function Vy(t){Fo=!0,Pp(t)}function fn(){if(!Rl&&vt!==null){Rl=!0;var t=0,e=B;try{var n=vt;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vt=null,Fo=!1}catch(i){throw vt!==null&&(vt=vt.slice(t+1)),tp(ku,fn),i}finally{B=e,Rl=!1}}return null}var tr=[],nr=0,Js=null,Zs=0,Ve=[],Ge=0,An=null,yt=1,wt="";function _n(t,e){tr[nr++]=Zs,tr[nr++]=Js,Js=t,Zs=e}function Ap(t,e,n){Ve[Ge++]=yt,Ve[Ge++]=wt,Ve[Ge++]=An,An=t;var r=yt;t=wt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var s=32-st(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yt=1<<32-st(e)+i|n<<i|r,wt=s+t}else yt=1<<s|n<<i|r,wt=t}function Mu(t){t.return!==null&&(_n(t,1),Ap(t,1,0))}function bu(t){for(;t===Js;)Js=tr[--nr],tr[nr]=null,Zs=tr[--nr],tr[nr]=null;for(;t===An;)An=Ve[--Ge],Ve[Ge]=null,wt=Ve[--Ge],Ve[Ge]=null,yt=Ve[--Ge],Ve[Ge]=null}var ze=null,Ue=null,X=!1,nt=null;function Op(t,e){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Od(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ze=t,Ue=Jt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ze=t,Ue=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=An!==null?{id:yt,overflow:wt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ze=t,Ue=null,!0):!1;default:return!1}}function ka(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xa(t){if(X){var e=Ue;if(e){var n=e;if(!Od(t,e)){if(ka(t))throw Error(E(418));e=Jt(n.nextSibling);var r=ze;e&&Od(t,e)?Op(r,n):(t.flags=t.flags&-4097|2,X=!1,ze=t)}}else{if(ka(t))throw Error(E(418));t.flags=t.flags&-4097|2,X=!1,ze=t}}}function Dd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ze=t}function ms(t){if(t!==ze)return!1;if(!X)return Dd(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sa(t.type,t.memoizedProps)),e&&(e=Ue)){if(ka(t))throw Dp(),Error(E(418));for(;e;)Op(t,e),e=Jt(e.nextSibling)}if(Dd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ue=Jt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ue=null}}else Ue=ze?Jt(t.stateNode.nextSibling):null;return!0}function Dp(){for(var t=Ue;t;)t=Jt(t.nextSibling)}function Sr(){Ue=ze=null,X=!1}function ju(t){nt===null?nt=[t]:nt.push(t)}var Gy=Lt.ReactCurrentBatchConfig;function et(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var eo=hn(null),to=null,rr=null,Fu=null;function Uu(){Fu=rr=to=null}function zu(t){var e=eo.current;q(eo),t._currentValue=e}function Ra(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hr(t,e){to=t,Fu=rr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ae=!0),t.firstContext=null)}function Ye(t){var e=t._currentValue;if(Fu!==t)if(t={context:t,memoizedValue:e,next:null},rr===null){if(to===null)throw Error(E(308));rr=t,to.dependencies={lanes:0,firstContext:t}}else rr=rr.next=t;return e}var Sn=null;function Bu(t){Sn===null?Sn=[t]:Sn.push(t)}function Lp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rt(t,r)}function Rt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function It(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rt(t,n)}return i=r.interleaved,i===null?(e.next=e,Bu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rt(t,n)}function Ns(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xu(t,n)}}function Ld(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function no(t,e,n,r){var i=t.updateQueue;Ut=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,h=u=a=null,l=s;do{var f=l.lane,v=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(f=e,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(v,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(v,d,f):_,f==null)break e;d=ee({},d,f);break e;case 2:Ut=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else v={eventTime:v,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=v,a=d):h=h.next=v,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(h===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dn|=o,t.lanes=o,t.memoizedState=d}}function Md(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var bp=new Lf.Component().refs;function Na(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uo={isMounted:function(t){return(t=t._reactInternals)?Hn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ke(),i=tn(t),s=It(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zt(t,s,i),e!==null&&(ot(e,t,i,r),Ns(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ke(),i=tn(t),s=It(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zt(t,s,i),e!==null&&(ot(e,t,i,r),Ns(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ke(),r=tn(t),i=It(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zt(t,i,r),e!==null&&(ot(e,t,r,n),Ns(e,t,r))}};function bd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xi(n,r)||!xi(i,s):!0}function jp(t,e,n){var r=!1,i=un,s=e.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=Le(e)?Pn:Ce.current,r=e.contextTypes,s=(r=r!=null)?Er(t,i):un),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Uo.enqueueReplaceState(e,e.state,null)}function Pa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=bp,Wu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=Le(e)?Pn:Ce.current,i.context=Er(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Na(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Uo.enqueueReplaceState(i,i.state,null),no(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===bp&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function gs(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fd(t){var e=t._init;return e(t._payload)}function Fp(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=nn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,w){return p===null||p.tag!==6?(p=Ml(g,m.mode,w),p.return=m,p):(p=i(p,g),p.return=m,p)}function a(m,p,g,w){var C=g.type;return C===qn?h(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ft&&Fd(C)===p.type)?(w=i(p,g.props),w.ref=qr(m,p,g),w.return=m,w):(w=Ms(g.type,g.key,g.props,null,m.mode,w),w.ref=qr(m,p,g),w.return=m,w)}function u(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=bl(g,m.mode,w),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function h(m,p,g,w,C){return p===null||p.tag!==7?(p=xn(g,m.mode,w,C),p.return=m,p):(p=i(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ml(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ss:return g=Ms(p.type,p.key,p.props,null,m.mode,g),g.ref=qr(m,null,p),g.return=m,g;case Qn:return p=bl(p,m.mode,g),p.return=m,p;case Ft:var w=p._init;return d(m,w(p._payload),g)}if(ri(p)||$r(p))return p=xn(p,m.mode,g,null),p.return=m,p;gs(m,p)}return null}function f(m,p,g,w){var C=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ss:return g.key===C?a(m,p,g,w):null;case Qn:return g.key===C?u(m,p,g,w):null;case Ft:return C=g._init,f(m,p,C(g._payload),w)}if(ri(g)||$r(g))return C!==null?null:h(m,p,g,w,null);gs(m,g)}return null}function v(m,p,g,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(p,m,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ss:return m=m.get(w.key===null?g:w.key)||null,a(p,m,w,C);case Qn:return m=m.get(w.key===null?g:w.key)||null,u(p,m,w,C);case Ft:var N=w._init;return v(m,p,g,N(w._payload),C)}if(ri(w)||$r(w))return m=m.get(g)||null,h(p,m,w,C,null);gs(p,w)}return null}function _(m,p,g,w){for(var C=null,N=null,x=p,P=p=0,$=null;x!==null&&P<g.length;P++){x.index>P?($=x,x=null):$=x.sibling;var T=f(m,x,g[P],w);if(T===null){x===null&&(x=$);break}t&&x&&T.alternate===null&&e(m,x),p=s(T,p,P),N===null?C=T:N.sibling=T,N=T,x=$}if(P===g.length)return n(m,x),X&&_n(m,P),C;if(x===null){for(;P<g.length;P++)x=d(m,g[P],w),x!==null&&(p=s(x,p,P),N===null?C=x:N.sibling=x,N=x);return X&&_n(m,P),C}for(x=r(m,x);P<g.length;P++)$=v(x,m,P,g[P],w),$!==null&&(t&&$.alternate!==null&&x.delete($.key===null?P:$.key),p=s($,p,P),N===null?C=$:N.sibling=$,N=$);return t&&x.forEach(function(Ne){return e(m,Ne)}),X&&_n(m,P),C}function y(m,p,g,w){var C=$r(g);if(typeof C!="function")throw Error(E(150));if(g=C.call(g),g==null)throw Error(E(151));for(var N=C=null,x=p,P=p=0,$=null,T=g.next();x!==null&&!T.done;P++,T=g.next()){x.index>P?($=x,x=null):$=x.sibling;var Ne=f(m,x,T.value,w);if(Ne===null){x===null&&(x=$);break}t&&x&&Ne.alternate===null&&e(m,x),p=s(Ne,p,P),N===null?C=Ne:N.sibling=Ne,N=Ne,x=$}if(T.done)return n(m,x),X&&_n(m,P),C;if(x===null){for(;!T.done;P++,T=g.next())T=d(m,T.value,w),T!==null&&(p=s(T,p,P),N===null?C=T:N.sibling=T,N=T);return X&&_n(m,P),C}for(x=r(m,x);!T.done;P++,T=g.next())T=v(x,m,P,T.value,w),T!==null&&(t&&T.alternate!==null&&x.delete(T.key===null?P:T.key),p=s(T,p,P),N===null?C=T:N.sibling=T,N=T);return t&&x.forEach(function(Wr){return e(m,Wr)}),X&&_n(m,P),C}function I(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===qn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ss:e:{for(var C=g.key,N=p;N!==null;){if(N.key===C){if(C=g.type,C===qn){if(N.tag===7){n(m,N.sibling),p=i(N,g.props.children),p.return=m,m=p;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ft&&Fd(C)===N.type){n(m,N.sibling),p=i(N,g.props),p.ref=qr(m,N,g),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}g.type===qn?(p=xn(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=Ms(g.type,g.key,g.props,null,m.mode,w),w.ref=qr(m,p,g),w.return=m,m=w)}return o(m);case Qn:e:{for(N=g.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=bl(g,m.mode,w),p.return=m,m=p}return o(m);case Ft:return N=g._init,I(m,p,N(g._payload),w)}if(ri(g))return _(m,p,g,w);if($r(g))return y(m,p,g,w);gs(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Ml(g,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return I}var Cr=Fp(!0),Up=Fp(!1),Gi={},pt=hn(Gi),Ai=hn(Gi),Oi=hn(Gi);function Cn(t){if(t===Gi)throw Error(E(174));return t}function Hu(t,e){switch(V(Oi,e),V(Ai,t),V(pt,Gi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:aa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=aa(e,t)}q(pt),V(pt,e)}function Ir(){q(pt),q(Ai),q(Oi)}function zp(t){Cn(Oi.current);var e=Cn(pt.current),n=aa(e,t.type);e!==n&&(V(Ai,t),V(pt,n))}function $u(t){Ai.current===t&&(q(pt),q(Ai))}var J=hn(0);function ro(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nl=[];function Vu(){for(var t=0;t<Nl.length;t++)Nl[t]._workInProgressVersionPrimary=null;Nl.length=0}var Ps=Lt.ReactCurrentDispatcher,Pl=Lt.ReactCurrentBatchConfig,On=0,Z=null,se=null,ce=null,io=!1,hi=!1,Di=0,Ky=0;function ve(){throw Error(E(321))}function Gu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!at(t[n],e[n]))return!1;return!0}function Ku(t,e,n,r,i,s){if(On=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ps.current=t===null||t.memoizedState===null?Xy:Jy,t=n(r,i),hi){s=0;do{if(hi=!1,Di=0,25<=s)throw Error(E(301));s+=1,ce=se=null,e.updateQueue=null,Ps.current=Zy,t=n(r,i)}while(hi)}if(Ps.current=so,e=se!==null&&se.next!==null,On=0,ce=se=Z=null,io=!1,e)throw Error(E(300));return t}function Qu(){var t=Di!==0;return Di=0,t}function ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Z.memoizedState=ce=t:ce=ce.next=t,ce}function Xe(){if(se===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=se.next;var e=ce===null?Z.memoizedState:ce.next;if(e!==null)ce=e,se=t;else{if(t===null)throw Error(E(310));se=t,t={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?Z.memoizedState=ce=t:ce=ce.next=t}return ce}function Li(t,e){return typeof e=="function"?e(t):e}function Al(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((On&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,Z.lanes|=h,Dn|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,at(r,e.memoizedState)||(Ae=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Dn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ol(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);at(s,e.memoizedState)||(Ae=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Bp(){}function Wp(t,e){var n=Z,r=Xe(),i=e(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Ae=!0),r=r.queue,qu(Vp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,Mi(9,$p.bind(null,n,r,i,e),void 0,null),he===null)throw Error(E(349));On&30||Hp(n,e,i)}return i}function Hp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $p(t,e,n,r){e.value=n,e.getSnapshot=r,Gp(e)&&Kp(t)}function Vp(t,e,n){return n(function(){Gp(e)&&Kp(t)})}function Gp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!at(t,n)}catch{return!0}}function Kp(t){var e=Rt(t,1);e!==null&&ot(e,t,1,-1)}function Ud(t){var e=ct();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:t},e.queue=t,t=t.dispatch=Yy.bind(null,Z,t),[e.memoizedState,t]}function Mi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Qp(){return Xe().memoizedState}function As(t,e,n,r){var i=ct();Z.flags|=t,i.memoizedState=Mi(1|e,n,void 0,r===void 0?null:r)}function zo(t,e,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(se!==null){var o=se.memoizedState;if(s=o.destroy,r!==null&&Gu(r,o.deps)){i.memoizedState=Mi(e,n,s,r);return}}Z.flags|=t,i.memoizedState=Mi(1|e,n,s,r)}function zd(t,e){return As(8390656,8,t,e)}function qu(t,e){return zo(2048,8,t,e)}function qp(t,e){return zo(4,2,t,e)}function Yp(t,e){return zo(4,4,t,e)}function Xp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jp(t,e,n){return n=n!=null?n.concat([t]):null,zo(4,4,Xp.bind(null,e,t),n)}function Yu(){}function Zp(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function em(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tm(t,e,n){return On&21?(at(n,e)||(n=ip(),Z.lanes|=n,Dn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ae=!0),t.memoizedState=n)}function Qy(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=Pl.transition;Pl.transition={};try{t(!1),e()}finally{B=n,Pl.transition=r}}function nm(){return Xe().memoizedState}function qy(t,e,n){var r=tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rm(t))im(e,n);else if(n=Lp(t,e,n,r),n!==null){var i=ke();ot(n,t,r,i),sm(n,e,r)}}function Yy(t,e,n){var r=tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rm(t))im(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,at(l,o)){var a=e.interleaved;a===null?(i.next=i,Bu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Lp(t,e,i,r),n!==null&&(i=ke(),ot(n,t,r,i),sm(n,e,r))}}function rm(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function im(t,e){hi=io=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xu(t,n)}}var so={readContext:Ye,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},Xy={readContext:Ye,useCallback:function(t,e){return ct().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:zd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,As(4194308,4,Xp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return As(4194308,4,t,e)},useInsertionEffect:function(t,e){return As(4,2,t,e)},useMemo:function(t,e){var n=ct();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ct();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qy.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=ct();return t={current:t},e.memoizedState=t},useState:Ud,useDebugValue:Yu,useDeferredValue:function(t){return ct().memoizedState=t},useTransition:function(){var t=Ud(!1),e=t[0];return t=Qy.bind(null,t[1]),ct().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=ct();if(X){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),he===null)throw Error(E(349));On&30||Hp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zd(Vp.bind(null,r,s,t),[t]),r.flags|=2048,Mi(9,$p.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ct(),e=he.identifierPrefix;if(X){var n=wt,r=yt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Di++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ky++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Jy={readContext:Ye,useCallback:Zp,useContext:Ye,useEffect:qu,useImperativeHandle:Jp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:em,useReducer:Al,useRef:Qp,useState:function(){return Al(Li)},useDebugValue:Yu,useDeferredValue:function(t){var e=Xe();return tm(e,se.memoizedState,t)},useTransition:function(){var t=Al(Li)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:Bp,useSyncExternalStore:Wp,useId:nm,unstable_isNewReconciler:!1},Zy={readContext:Ye,useCallback:Zp,useContext:Ye,useEffect:qu,useImperativeHandle:Jp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:em,useReducer:Ol,useRef:Qp,useState:function(){return Ol(Li)},useDebugValue:Yu,useDeferredValue:function(t){var e=Xe();return se===null?e.memoizedState=t:tm(e,se.memoizedState,t)},useTransition:function(){var t=Ol(Li)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:Bp,useSyncExternalStore:Wp,useId:nm,unstable_isNewReconciler:!1};function Tr(t,e){try{var n="",r=e;do n+=xv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Dl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Aa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var e0=typeof WeakMap=="function"?WeakMap:Map;function om(t,e,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lo||(lo=!0,Ba=r),Aa(t,e)},n}function lm(t,e,n){n=It(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Aa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Aa(t,e),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Bd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new e0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=p0.bind(null,t,e,n),e.then(t,t))}function Wd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=It(-1,1),e.tag=2,Zt(n,e,1))),n.lanes|=1),t)}var t0=Lt.ReactCurrentOwner,Ae=!1;function Te(t,e,n,r){e.child=t===null?Up(e,null,n,r):Cr(e,t.child,n,r)}function $d(t,e,n,r,i){n=n.render;var s=e.ref;return hr(e,i),r=Ku(t,e,n,r,s,i),n=Qu(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nt(t,e,i)):(X&&n&&Mu(e),e.flags|=1,Te(t,e,r,i),e.child)}function Vd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ic(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,am(t,e,s,r,i)):(t=Ms(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(o,r)&&t.ref===e.ref)return Nt(t,e,i)}return e.flags|=1,t=nn(s,r),t.ref=e.ref,t.return=e,e.child=t}function am(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xi(s,r)&&t.ref===e.ref)if(Ae=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ae=!0);else return e.lanes=t.lanes,Nt(t,e,i)}return Oa(t,e,n,r,i)}function um(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(sr,Fe),Fe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,V(sr,Fe),Fe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,V(sr,Fe),Fe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,V(sr,Fe),Fe|=r;return Te(t,e,i,n),e.child}function cm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Oa(t,e,n,r,i){var s=Le(n)?Pn:Ce.current;return s=Er(e,s),hr(e,i),n=Ku(t,e,n,r,s,i),r=Qu(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nt(t,e,i)):(X&&r&&Mu(e),e.flags|=1,Te(t,e,n,i),e.child)}function Gd(t,e,n,r,i){if(Le(n)){var s=!0;Xs(e)}else s=!1;if(hr(e,i),e.stateNode===null)Os(t,e),jp(e,n,r),Pa(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Le(n)?Pn:Ce.current,u=Er(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&jd(e,o,r,u),Ut=!1;var f=e.memoizedState;o.state=f,no(e,r,o,i),a=e.memoizedState,l!==r||f!==a||De.current||Ut?(typeof h=="function"&&(Na(e,n,h,r),a=e.memoizedState),(l=Ut||bd(e,n,l,r,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Mp(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:et(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=Le(n)?Pn:Ce.current,a=Er(e,a));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&jd(e,o,r,a),Ut=!1,f=e.memoizedState,o.state=f,no(e,r,o,i);var _=e.memoizedState;l!==d||f!==_||De.current||Ut?(typeof v=="function"&&(Na(e,n,v,r),_=e.memoizedState),(u=Ut||bd(e,n,u,r,f,_,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Da(t,e,n,r,s,i)}function Da(t,e,n,r,i,s){cm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ad(e,n,!1),Nt(t,e,s);r=e.stateNode,t0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Cr(e,t.child,null,s),e.child=Cr(e,null,l,s)):Te(t,e,l,s),e.memoizedState=r.state,i&&Ad(e,n,!0),e.child}function dm(t){var e=t.stateNode;e.pendingContext?Pd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pd(t,e.context,!1),Hu(t,e.containerInfo)}function Kd(t,e,n,r,i){return Sr(),ju(i),e.flags|=256,Te(t,e,n,r),e.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Ma(t){return{baseLanes:t,cachePool:null,transitions:null}}function hm(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),V(J,i&1),t===null)return xa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ho(o,r,0,null),t=xn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ma(n),e.memoizedState=La,t):Xu(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return n0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=nn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=nn(l,s):(s=xn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ma(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=La,r}return s=t.child,t=s.sibling,r=nn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xu(t,e){return e=Ho({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _s(t,e,n,r){return r!==null&&ju(r),Cr(e,t.child,null,n),t=Xu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function n0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Dl(Error(E(422))),_s(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ho({mode:"visible",children:r.children},i,0,null),s=xn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Cr(e,t.child,null,o),e.child.memoizedState=Ma(o),e.memoizedState=La,s);if(!(e.mode&1))return _s(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=Dl(s,r,void 0),_s(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ae||l){if(r=he,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rt(t,i),ot(r,t,i,-1))}return rc(),r=Dl(Error(E(421))),_s(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=m0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ue=Jt(i.nextSibling),ze=e,X=!0,nt=null,t!==null&&(Ve[Ge++]=yt,Ve[Ge++]=wt,Ve[Ge++]=An,yt=t.id,wt=t.overflow,An=e),e=Xu(e,r.children),e.flags|=4096,e)}function Qd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ra(t.return,e,n)}function Ll(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Te(t,e,r.children,n),r=J.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qd(t,n,e);else if(t.tag===19)Qd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(V(J,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ro(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ll(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ro(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ll(e,!0,n,null,s);break;case"together":Ll(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Os(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function r0(t,e,n){switch(e.tag){case 3:dm(e),Sr();break;case 5:zp(e);break;case 1:Le(e.type)&&Xs(e);break;case 4:Hu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;V(eo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(V(J,J.current&1),e.flags|=128,null):n&e.child.childLanes?hm(t,e,n):(V(J,J.current&1),t=Nt(t,e,n),t!==null?t.sibling:null);V(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,um(t,e,n)}return Nt(t,e,n)}var pm,ba,mm,gm;pm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ba=function(){};mm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Cn(pt.current);var s=null;switch(n){case"input":i=ia(t,i),r=ia(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=la(t,i),r=la(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qs)}ua(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&G("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gm=function(t,e,n,r){n!==r&&(e.flags|=4)};function Yr(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function i0(t,e,n){var r=e.pendingProps;switch(bu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(e),null;case 1:return Le(e.type)&&Ys(),ye(e),null;case 3:return r=e.stateNode,Ir(),q(De),q(Ce),Vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ms(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nt!==null&&($a(nt),nt=null))),ba(t,e),ye(e),null;case 5:$u(e);var i=Cn(Oi.current);if(n=e.type,t!==null&&e.stateNode!=null)mm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return ye(e),null}if(t=Cn(pt.current),ms(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dt]=e,r[Pi]=s,t=(e.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)G(si[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":rd(r,s),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},G("invalid",r);break;case"textarea":sd(r,s),G("invalid",r)}ua(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ps(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ps(r.textContent,l,t),i=["children",""+l]):wi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":os(r),id(r,s,!0);break;case"textarea":os(r),od(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dt]=e,t[Pi]=r,pm(t,e,!1,!1),e.stateNode=t;e:{switch(o=ca(n,r),n){case"dialog":G("cancel",t),G("close",t),i=r;break;case"iframe":case"object":case"embed":G("load",t),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)G(si[i],t);i=r;break;case"source":G("error",t),i=r;break;case"img":case"image":case"link":G("error",t),G("load",t),i=r;break;case"details":G("toggle",t),i=r;break;case"input":rd(t,r),i=ia(t,r),G("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),G("invalid",t);break;case"textarea":sd(t,r),i=la(t,r),G("invalid",t);break;default:i=r}ua(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Gf(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&$f(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ei(t,a):typeof a=="number"&&Ei(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&G("scroll",t):a!=null&&Eu(t,s,a,o))}switch(n){case"input":os(t),id(t,r,!1);break;case"textarea":os(t),od(t);break;case"option":r.value!=null&&t.setAttribute("value",""+an(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ar(t,!!r.multiple,s,!1):r.defaultValue!=null&&ar(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ye(e),null;case 6:if(t&&e.stateNode!=null)gm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Cn(Oi.current),Cn(pt.current),ms(e)){if(r=e.stateNode,n=e.memoizedProps,r[dt]=e,(s=r.nodeValue!==n)&&(t=ze,t!==null))switch(t.tag){case 3:ps(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ps(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=e,e.stateNode=r}return ye(e),null;case 13:if(q(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&Ue!==null&&e.mode&1&&!(e.flags&128))Dp(),Sr(),e.flags|=98560,s=!1;else if(s=ms(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[dt]=e}else Sr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ye(e),s=!1}else nt!==null&&($a(nt),nt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||J.current&1?le===0&&(le=3):rc())),e.updateQueue!==null&&(e.flags|=4),ye(e),null);case 4:return Ir(),ba(t,e),t===null&&Ri(e.stateNode.containerInfo),ye(e),null;case 10:return zu(e.type._context),ye(e),null;case 17:return Le(e.type)&&Ys(),ye(e),null;case 19:if(q(J),s=e.memoizedState,s===null)return ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Yr(s,!1);else{if(le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ro(t),o!==null){for(e.flags|=128,Yr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return V(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&re()>kr&&(e.flags|=128,r=!0,Yr(s,!1),e.lanes=4194304)}else{if(!r)if(t=ro(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return ye(e),null}else 2*re()-s.renderingStartTime>kr&&n!==1073741824&&(e.flags|=128,r=!0,Yr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=re(),e.sibling=null,n=J.current,V(J,r?n&1|2:n&1),e):(ye(e),null);case 22:case 23:return nc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Fe&1073741824&&(ye(e),e.subtreeFlags&6&&(e.flags|=8192)):ye(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function s0(t,e){switch(bu(e),e.tag){case 1:return Le(e.type)&&Ys(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ir(),q(De),q(Ce),Vu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $u(e),null;case 13:if(q(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Sr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return q(J),null;case 4:return Ir(),null;case 10:return zu(e.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var vs=!1,we=!1,o0=typeof WeakSet=="function"?WeakSet:Set,k=null;function ir(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function ja(t,e,n){try{n()}catch(r){te(t,e,r)}}var qd=!1;function l0(t,e){if(wa=Gs,t=wp(),Lu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++h===r&&(a=o),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:t,selectionRange:n},Gs=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,I=_.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:et(e.type,y),I);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){te(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return _=qd,qd=!1,_}function fi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ja(e,n,s)}i=i.next}while(i!==r)}}function Bo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Fa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _m(t){var e=t.alternate;e!==null&&(t.alternate=null,_m(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dt],delete e[Pi],delete e[Ia],delete e[Hy],delete e[$y])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vm(t){return t.tag===5||t.tag===3||t.tag===4}function Yd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ua(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qs));else if(r!==4&&(t=t.child,t!==null))for(Ua(t,e,n),t=t.sibling;t!==null;)Ua(t,e,n),t=t.sibling}function za(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(za(t,e,n),t=t.sibling;t!==null;)za(t,e,n),t=t.sibling}var fe=null,tt=!1;function bt(t,e,n){for(n=n.child;n!==null;)ym(t,e,n),n=n.sibling}function ym(t,e,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Do,n)}catch{}switch(n.tag){case 5:we||ir(n,e);case 6:var r=fe,i=tt;fe=null,bt(t,e,n),fe=r,tt=i,fe!==null&&(tt?(t=fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(tt?(t=fe,n=n.stateNode,t.nodeType===8?xl(t.parentNode,n):t.nodeType===1&&xl(t,n),Ti(t)):xl(fe,n.stateNode));break;case 4:r=fe,i=tt,fe=n.stateNode.containerInfo,tt=!0,bt(t,e,n),fe=r,tt=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ja(n,e,o),i=i.next}while(i!==r)}bt(t,e,n);break;case 1:if(!we&&(ir(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}bt(t,e,n);break;case 21:bt(t,e,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,bt(t,e,n),we=r):bt(t,e,n);break;default:bt(t,e,n)}}function Xd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new o0),e.forEach(function(r){var i=g0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:fe=l.stateNode,tt=!1;break e;case 3:fe=l.stateNode.containerInfo,tt=!0;break e;case 4:fe=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(fe===null)throw Error(E(160));ym(s,o,i),fe=null,tt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wm(e,t),e=e.sibling}function wm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ze(e,t),ut(t),r&4){try{fi(3,t,t.return),Bo(3,t)}catch(y){te(t,t.return,y)}try{fi(5,t,t.return)}catch(y){te(t,t.return,y)}}break;case 1:Ze(e,t),ut(t),r&512&&n!==null&&ir(n,n.return);break;case 5:if(Ze(e,t),ut(t),r&512&&n!==null&&ir(n,n.return),t.flags&32){var i=t.stateNode;try{Ei(i,"")}catch(y){te(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Bf(i,s),ca(l,o);var u=ca(l,s);for(o=0;o<a.length;o+=2){var h=a[o],d=a[o+1];h==="style"?Gf(i,d):h==="dangerouslySetInnerHTML"?$f(i,d):h==="children"?Ei(i,d):Eu(i,h,d,u)}switch(l){case"input":sa(i,s);break;case"textarea":Wf(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ar(i,!!s.multiple,v,!1):f!==!!s.multiple&&(s.defaultValue!=null?ar(i,!!s.multiple,s.defaultValue,!0):ar(i,!!s.multiple,s.multiple?[]:"",!1))}i[Pi]=s}catch(y){te(t,t.return,y)}}break;case 6:if(Ze(e,t),ut(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){te(t,t.return,y)}}break;case 3:if(Ze(e,t),ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ti(e.containerInfo)}catch(y){te(t,t.return,y)}break;case 4:Ze(e,t),ut(t);break;case 13:Ze(e,t),ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ec=re())),r&4&&Xd(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(we=(u=we)||h,Ze(e,t),we=u):Ze(e,t),ut(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(k=t,h=t.child;h!==null;){for(d=k=h;k!==null;){switch(f=k,v=f.child,f.tag){case 0:case 11:case 14:case 15:fi(4,f,f.return);break;case 1:ir(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:ir(f,f.return);break;case 22:if(f.memoizedState!==null){Zd(d);continue}}v!==null?(v.return=f,k=v):Zd(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Vf("display",o))}catch(y){te(t,t.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){te(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ze(e,t),ut(t),r&4&&Xd(t);break;case 21:break;default:Ze(e,t),ut(t)}}function ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vm(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ei(i,""),r.flags&=-33);var s=Yd(t);za(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Yd(t);Ua(t,l,o);break;default:throw Error(E(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function a0(t,e,n){k=t,Em(t)}function Em(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||we;l=vs;var u=we;if(vs=o,(we=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?eh(i):a!==null?(a.return=o,k=a):eh(i);for(;s!==null;)k=s,Em(s),s=s.sibling;k=i,vs=l,we=u}Jd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Jd(t)}}function Jd(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:we||Bo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Md(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Md(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ti(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}we||e.flags&512&&Fa(e)}catch(f){te(e,e.return,f)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Zd(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function eh(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bo(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{Fa(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{Fa(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var u0=Math.ceil,oo=Lt.ReactCurrentDispatcher,Ju=Lt.ReactCurrentOwner,qe=Lt.ReactCurrentBatchConfig,U=0,he=null,ie=null,ge=0,Fe=0,sr=hn(0),le=0,bi=null,Dn=0,Wo=0,Zu=0,pi=null,Pe=null,ec=0,kr=1/0,_t=null,lo=!1,Ba=null,en=null,ys=!1,Kt=null,ao=0,mi=0,Wa=null,Ds=-1,Ls=0;function ke(){return U&6?re():Ds!==-1?Ds:Ds=re()}function tn(t){return t.mode&1?U&2&&ge!==0?ge&-ge:Gy.transition!==null?(Ls===0&&(Ls=ip()),Ls):(t=B,t!==0||(t=window.event,t=t===void 0?16:dp(t.type)),t):1}function ot(t,e,n,r){if(50<mi)throw mi=0,Wa=null,Error(E(185));Hi(t,n,r),(!(U&2)||t!==he)&&(t===he&&(!(U&2)&&(Wo|=n),le===4&&Bt(t,ge)),Me(t,r),n===1&&U===0&&!(e.mode&1)&&(kr=re()+500,Fo&&fn()))}function Me(t,e){var n=t.callbackNode;Gv(t,e);var r=Vs(t,t===he?ge:0);if(r===0)n!==null&&ud(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ud(n),e===1)t.tag===0?Vy(th.bind(null,t)):Pp(th.bind(null,t)),By(function(){!(U&6)&&fn()}),n=null;else{switch(sp(r)){case 1:n=ku;break;case 4:n=np;break;case 16:n=$s;break;case 536870912:n=rp;break;default:n=$s}n=Nm(n,Sm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sm(t,e){if(Ds=-1,Ls=0,U&6)throw Error(E(327));var n=t.callbackNode;if(fr()&&t.callbackNode!==n)return null;var r=Vs(t,t===he?ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uo(t,r);else{e=r;var i=U;U|=2;var s=Im();(he!==t||ge!==e)&&(_t=null,kr=re()+500,kn(t,e));do try{h0();break}catch(l){Cm(t,l)}while(1);Uu(),oo.current=s,U=i,ie!==null?e=0:(he=null,ge=0,e=le)}if(e!==0){if(e===2&&(i=ma(t),i!==0&&(r=i,e=Ha(t,i))),e===1)throw n=bi,kn(t,0),Bt(t,r),Me(t,re()),n;if(e===6)Bt(t,r);else{if(i=t.current.alternate,!(r&30)&&!c0(i)&&(e=uo(t,r),e===2&&(s=ma(t),s!==0&&(r=s,e=Ha(t,s))),e===1))throw n=bi,kn(t,0),Bt(t,r),Me(t,re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:vn(t,Pe,_t);break;case 3:if(Bt(t,r),(r&130023424)===r&&(e=ec+500-re(),10<e)){if(Vs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ke(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ca(vn.bind(null,t,Pe,_t),e);break}vn(t,Pe,_t);break;case 4:if(Bt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-st(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u0(r/1960))-r,10<r){t.timeoutHandle=Ca(vn.bind(null,t,Pe,_t),r);break}vn(t,Pe,_t);break;case 5:vn(t,Pe,_t);break;default:throw Error(E(329))}}}return Me(t,re()),t.callbackNode===n?Sm.bind(null,t):null}function Ha(t,e){var n=pi;return t.current.memoizedState.isDehydrated&&(kn(t,e).flags|=256),t=uo(t,e),t!==2&&(e=Pe,Pe=n,e!==null&&$a(e)),t}function $a(t){Pe===null?Pe=t:Pe.push.apply(Pe,t)}function c0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bt(t,e){for(e&=~Zu,e&=~Wo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-st(e),r=1<<n;t[n]=-1,e&=~r}}function th(t){if(U&6)throw Error(E(327));fr();var e=Vs(t,0);if(!(e&1))return Me(t,re()),null;var n=uo(t,e);if(t.tag!==0&&n===2){var r=ma(t);r!==0&&(e=r,n=Ha(t,r))}if(n===1)throw n=bi,kn(t,0),Bt(t,e),Me(t,re()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vn(t,Pe,_t),Me(t,re()),null}function tc(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(kr=re()+500,Fo&&fn())}}function Ln(t){Kt!==null&&Kt.tag===0&&!(U&6)&&fr();var e=U;U|=1;var n=qe.transition,r=B;try{if(qe.transition=null,B=1,t)return t()}finally{B=r,qe.transition=n,U=e,!(U&6)&&fn()}}function nc(){Fe=sr.current,q(sr)}function kn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zy(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(bu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ys();break;case 3:Ir(),q(De),q(Ce),Vu();break;case 5:$u(r);break;case 4:Ir();break;case 13:q(J);break;case 19:q(J);break;case 10:zu(r.type._context);break;case 22:case 23:nc()}n=n.return}if(he=t,ie=t=nn(t.current,null),ge=Fe=e,le=0,bi=null,Zu=Wo=Dn=0,Pe=pi=null,Sn!==null){for(e=0;e<Sn.length;e++)if(n=Sn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Sn=null}return t}function Cm(t,e){do{var n=ie;try{if(Uu(),Ps.current=so,io){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}io=!1}if(On=0,ce=se=Z=null,hi=!1,Di=0,Ju.current=null,n===null||n.return===null){le=1,bi=e,ie=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ge,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Wd(o);if(v!==null){v.flags&=-257,Hd(v,o,l,s,e),v.mode&1&&Bd(s,u,e),e=v,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){Bd(s,u,e),rc();break e}a=Error(E(426))}}else if(X&&l.mode&1){var I=Wd(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Hd(I,o,l,s,e),ju(Tr(a,l));break e}}s=a=Tr(a,l),le!==4&&(le=2),pi===null?pi=[s]:pi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=om(s,a,e);Ld(s,m);break e;case 1:l=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(en===null||!en.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=lm(s,l,e);Ld(s,w);break e}}s=s.return}while(s!==null)}km(n)}catch(C){e=C,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function Im(){var t=oo.current;return oo.current=so,t===null?so:t}function rc(){(le===0||le===3||le===2)&&(le=4),he===null||!(Dn&268435455)&&!(Wo&268435455)||Bt(he,ge)}function uo(t,e){var n=U;U|=2;var r=Im();(he!==t||ge!==e)&&(_t=null,kn(t,e));do try{d0();break}catch(i){Cm(t,i)}while(1);if(Uu(),U=n,oo.current=r,ie!==null)throw Error(E(261));return he=null,ge=0,le}function d0(){for(;ie!==null;)Tm(ie)}function h0(){for(;ie!==null&&!jv();)Tm(ie)}function Tm(t){var e=Rm(t.alternate,t,Fe);t.memoizedProps=t.pendingProps,e===null?km(t):ie=e,Ju.current=null}function km(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=s0(n,e),n!==null){n.flags&=32767,ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{le=6,ie=null;return}}else if(n=i0(n,e,Fe),n!==null){ie=n;return}if(e=e.sibling,e!==null){ie=e;return}ie=e=t}while(e!==null);le===0&&(le=5)}function vn(t,e,n){var r=B,i=qe.transition;try{qe.transition=null,B=1,f0(t,e,n,r)}finally{qe.transition=i,B=r}return null}function f0(t,e,n,r){do fr();while(Kt!==null);if(U&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Kv(t,s),t===he&&(ie=he=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ys||(ys=!0,Nm($s,function(){return fr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qe.transition,qe.transition=null;var o=B;B=1;var l=U;U|=4,Ju.current=null,l0(t,n),wm(n,t),Dy(Ea),Gs=!!wa,Ea=wa=null,t.current=n,a0(n),Fv(),U=l,B=o,qe.transition=s}else t.current=n;if(ys&&(ys=!1,Kt=t,ao=i),s=t.pendingLanes,s===0&&(en=null),Bv(n.stateNode),Me(t,re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lo)throw lo=!1,t=Ba,Ba=null,t;return ao&1&&t.tag!==0&&fr(),s=t.pendingLanes,s&1?t===Wa?mi++:(mi=0,Wa=t):mi=0,fn(),null}function fr(){if(Kt!==null){var t=sp(ao),e=qe.transition,n=B;try{if(qe.transition=null,B=16>t?16:t,Kt===null)var r=!1;else{if(t=Kt,Kt=null,ao=0,U&6)throw Error(E(331));var i=U;for(U|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:fi(8,h,s)}var d=h.child;if(d!==null)d.return=h,k=d;else for(;k!==null;){h=k;var f=h.sibling,v=h.return;if(_m(h),h===u){k=null;break}if(f!==null){f.return=v,k=f;break}k=v}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,k=m;break e}k=s.return}}var p=t.current;for(k=p;k!==null;){o=k;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,k=g;else e:for(o=p;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Bo(9,l)}}catch(C){te(l,l.return,C)}if(l===o){k=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,k=w;break e}k=l.return}}if(U=i,fn(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Do,t)}catch{}r=!0}return r}finally{B=n,qe.transition=e}}return!1}function nh(t,e,n){e=Tr(n,e),e=om(t,e,1),t=Zt(t,e,1),e=ke(),t!==null&&(Hi(t,1,e),Me(t,e))}function te(t,e,n){if(t.tag===3)nh(t,t,n);else for(;e!==null;){if(e.tag===3){nh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){t=Tr(n,t),t=lm(e,t,1),e=Zt(e,t,1),t=ke(),e!==null&&(Hi(e,1,t),Me(e,t));break}}e=e.return}}function p0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ke(),t.pingedLanes|=t.suspendedLanes&n,he===t&&(ge&n)===n&&(le===4||le===3&&(ge&130023424)===ge&&500>re()-ec?kn(t,0):Zu|=n),Me(t,e)}function xm(t,e){e===0&&(t.mode&1?(e=us,us<<=1,!(us&130023424)&&(us=4194304)):e=1);var n=ke();t=Rt(t,e),t!==null&&(Hi(t,e,n),Me(t,n))}function m0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xm(t,n)}function g0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),xm(t,n)}var Rm;Rm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||De.current)Ae=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ae=!1,r0(t,e,n);Ae=!!(t.flags&131072)}else Ae=!1,X&&e.flags&1048576&&Ap(e,Zs,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Os(t,e),t=e.pendingProps;var i=Er(e,Ce.current);hr(e,n),i=Ku(null,e,r,t,i,n);var s=Qu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Le(r)?(s=!0,Xs(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wu(e),i.updater=Uo,e.stateNode=i,i._reactInternals=e,Pa(e,r,t,n),e=Da(null,e,r,!0,s,n)):(e.tag=0,X&&s&&Mu(e),Te(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Os(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=v0(r),t=et(r,t),i){case 0:e=Oa(null,e,r,t,n);break e;case 1:e=Gd(null,e,r,t,n);break e;case 11:e=$d(null,e,r,t,n);break e;case 14:e=Vd(null,e,r,et(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Oa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Gd(t,e,r,i,n);case 3:e:{if(dm(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Mp(t,e),no(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Tr(Error(E(423)),e),e=Kd(t,e,r,n,i);break e}else if(r!==i){i=Tr(Error(E(424)),e),e=Kd(t,e,r,n,i);break e}else for(Ue=Jt(e.stateNode.containerInfo.firstChild),ze=e,X=!0,nt=null,n=Up(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===i){e=Nt(t,e,n);break e}Te(t,e,r,n)}e=e.child}return e;case 5:return zp(e),t===null&&xa(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sa(r,i)?o=null:s!==null&&Sa(r,s)&&(e.flags|=32),cm(t,e),Te(t,e,o,n),e.child;case 6:return t===null&&xa(e),null;case 13:return hm(t,e,n);case 4:return Hu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Cr(e,null,r,n):Te(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),$d(t,e,r,i,n);case 7:return Te(t,e,e.pendingProps,n),e.child;case 8:return Te(t,e,e.pendingProps.children,n),e.child;case 12:return Te(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,V(eo,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!De.current){e=Nt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=It(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ra(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ra(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Te(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,hr(e,n),i=Ye(i),r=r(i),e.flags|=1,Te(t,e,r,n),e.child;case 14:return r=e.type,i=et(r,e.pendingProps),i=et(r.type,i),Vd(t,e,r,i,n);case 15:return am(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Os(t,e),e.tag=1,Le(r)?(t=!0,Xs(e)):t=!1,hr(e,n),jp(e,r,i),Pa(e,r,i,n),Da(null,e,r,!0,t,n);case 19:return fm(t,e,n);case 22:return um(t,e,n)}throw Error(E(156,e.tag))};function Nm(t,e){return tp(t,e)}function _0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(t,e,n,r){return new _0(t,e,n,r)}function ic(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v0(t){if(typeof t=="function")return ic(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cu)return 11;if(t===Iu)return 14}return 2}function nn(t,e){var n=t.alternate;return n===null?(n=Ke(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ms(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ic(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qn:return xn(n.children,i,s,e);case Su:o=8,i|=8;break;case ea:return t=Ke(12,n,e,i|2),t.elementType=ea,t.lanes=s,t;case ta:return t=Ke(13,n,e,i),t.elementType=ta,t.lanes=s,t;case na:return t=Ke(19,n,e,i),t.elementType=na,t.lanes=s,t;case Ff:return Ho(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bf:o=10;break e;case jf:o=9;break e;case Cu:o=11;break e;case Iu:o=14;break e;case Ft:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Ke(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xn(t,e,n,r){return t=Ke(7,t,r,e),t.lanes=n,t}function Ho(t,e,n,r){return t=Ke(22,t,r,e),t.elementType=Ff,t.lanes=n,t.stateNode={isHidden:!1},t}function Ml(t,e,n){return t=Ke(6,t,null,e),t.lanes=n,t}function bl(t,e,n){return e=Ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function y0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gl(0),this.expirationTimes=gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sc(t,e,n,r,i,s,o,l,a){return t=new y0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ke(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(s),t}function w0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Pm(t){if(!t)return un;t=t._reactInternals;e:{if(Hn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Le(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Le(n))return Np(t,n,e)}return e}function Am(t,e,n,r,i,s,o,l,a){return t=sc(n,r,!0,t,i,s,o,l,a),t.context=Pm(null),n=t.current,r=ke(),i=tn(n),s=It(r,i),s.callback=e??null,Zt(n,s,i),t.current.lanes=i,Hi(t,i,r),Me(t,r),t}function $o(t,e,n,r){var i=e.current,s=ke(),o=tn(i);return n=Pm(n),e.context===null?e.context=n:e.pendingContext=n,e=It(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zt(i,e,o),t!==null&&(ot(t,i,o,s),Ns(t,i,o)),o}function co(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function oc(t,e){rh(t,e),(t=t.alternate)&&rh(t,e)}function E0(){return null}var Om=typeof reportError=="function"?reportError:function(t){console.error(t)};function lc(t){this._internalRoot=t}Vo.prototype.render=lc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));$o(t,e,null,null)};Vo.prototype.unmount=lc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ln(function(){$o(null,t,null,null)}),e[xt]=null}};function Vo(t){this._internalRoot=t}Vo.prototype.unstable_scheduleHydration=function(t){if(t){var e=ap();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zt.length&&e!==0&&e<zt[n].priority;n++);zt.splice(n,0,t),n===0&&cp(t)}};function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Go(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ih(){}function S0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=co(o);s.call(u)}}var o=Am(e,r,t,0,null,!1,!1,"",ih);return t._reactRootContainer=o,t[xt]=o.current,Ri(t.nodeType===8?t.parentNode:t),Ln(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=co(a);l.call(u)}}var a=sc(t,0,!1,null,null,!1,!1,"",ih);return t._reactRootContainer=a,t[xt]=a.current,Ri(t.nodeType===8?t.parentNode:t),Ln(function(){$o(e,a,n,r)}),a}function Ko(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=co(o);l.call(a)}}$o(e,o,t,i)}else o=S0(n,e,t,i,r);return co(o)}op=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ii(e.pendingLanes);n!==0&&(xu(e,n|1),Me(e,re()),!(U&6)&&(kr=re()+500,fn()))}break;case 13:Ln(function(){var r=Rt(t,1);if(r!==null){var i=ke();ot(r,t,1,i)}}),oc(t,1)}};Ru=function(t){if(t.tag===13){var e=Rt(t,134217728);if(e!==null){var n=ke();ot(e,t,134217728,n)}oc(t,134217728)}};lp=function(t){if(t.tag===13){var e=tn(t),n=Rt(t,e);if(n!==null){var r=ke();ot(n,t,e,r)}oc(t,e)}};ap=function(){return B};up=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};ha=function(t,e,n){switch(e){case"input":if(sa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=jo(r);if(!i)throw Error(E(90));zf(r),sa(r,i)}}}break;case"textarea":Wf(t,n);break;case"select":e=n.value,e!=null&&ar(t,!!n.multiple,e,!1)}};qf=tc;Yf=Ln;var C0={usingClientEntryPoint:!1,Events:[Vi,Zn,jo,Kf,Qf,tc]},Xr={findFiberByHostInstance:En,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},I0={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zf(t),t===null?null:t.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||E0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ws.isDisabled&&ws.supportsFiber)try{Do=ws.inject(I0),ft=ws}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C0;We.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ac(e))throw Error(E(200));return w0(t,e,null,n)};We.createRoot=function(t,e){if(!ac(t))throw Error(E(299));var n=!1,r="",i=Om;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sc(t,1,!1,null,null,n,!1,r,i),t[xt]=e.current,Ri(t.nodeType===8?t.parentNode:t),new lc(e)};We.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Zf(e),t=t===null?null:t.stateNode,t};We.flushSync=function(t){return Ln(t)};We.hydrate=function(t,e,n){if(!Go(e))throw Error(E(200));return Ko(null,t,e,!0,n)};We.hydrateRoot=function(t,e,n){if(!ac(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Om;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Am(e,null,t,1,n??null,i,!1,s,o),t[xt]=e.current,Ri(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vo(e)};We.render=function(t,e,n){if(!Go(e))throw Error(E(200));return Ko(null,t,e,!1,n)};We.unmountComponentAtNode=function(t){if(!Go(t))throw Error(E(40));return t._reactRootContainer?(Ln(function(){Ko(null,null,t,!1,function(){t._reactRootContainer=null,t[xt]=null})}),!0):!1};We.unstable_batchedUpdates=tc;We.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Go(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Ko(t,e,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";function Dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dm)}catch(t){console.error(t)}}Dm(),Af.exports=We;var T0=Af.exports,sh=T0;Jl.createRoot=sh.createRoot,Jl.hydrateRoot=sh.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ho.apply(this,arguments)}var Qt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qt||(Qt={}));const oh="popstate";function k0(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Va("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Lm(i)}return R0(e,n,null,t)}function je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function uc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function x0(){return Math.random().toString(36).substr(2,8)}function lh(t,e){return{usr:t.state,key:t.key,idx:e}}function Va(t,e,n,r){return n===void 0&&(n=null),ho({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qo(e):e,{state:n,key:e&&e.key||r||x0()})}function Lm(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function R0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Qt.Pop,a=null,u=h();u==null&&(u=0,o.replaceState(ho({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){l=Qt.Pop;let I=h(),m=I==null?null:I-u;u=I,a&&a({action:l,location:y.location,delta:m})}function f(I,m){l=Qt.Push;let p=Va(y.location,I,m);n&&n(p,I),u=h()+1;let g=lh(p,u),w=y.createHref(p);try{o.pushState(g,"",w)}catch{i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function v(I,m){l=Qt.Replace;let p=Va(y.location,I,m);n&&n(p,I),u=h();let g=lh(p,u),w=y.createHref(p);o.replaceState(g,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function _(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof I=="string"?I:Lm(I);return je(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return l},get location(){return t(i,o)},listen(I){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(oh,d),a=I,()=>{i.removeEventListener(oh,d),a=null}},createHref(I){return e(i,I)},createURL:_,encodeLocation(I){let m=_(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:v,go(I){return o.go(I)}};return y}var ah;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ah||(ah={}));function N0(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Qo(e):e,i=jm(r.pathname||"/",n);if(i==null)return null;let s=Mm(t);P0(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=U0(s[l],W0(i));return o}function Mm(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(je(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=pr([r,a.relativePath]),h=n.concat(a);s.children&&s.children.length>0&&(je(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Mm(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:j0(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of bm(s.path))i(s,o,a)}),e}function bm(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=bm(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function P0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:F0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const A0=/^:\w+$/,O0=3,D0=2,L0=1,M0=10,b0=-2,uh=t=>t==="*";function j0(t,e){let n=t.split("/"),r=n.length;return n.some(uh)&&(r+=b0),e&&(r+=D0),n.filter(i=>!uh(i)).reduce((i,s)=>i+(A0.test(s)?O0:s===""?L0:M0),r)}function F0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function U0(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=z0({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!h)return null;Object.assign(r,h.params);let d=l.route;s.push({params:r,pathname:pr([i,h.pathname]),pathnameBase:$0(pr([i,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(i=pr([i,h.pathnameBase]))}return s}function z0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=B0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,h,d)=>{if(h==="*"){let f=l[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[h]=H0(l[d]||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function B0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),uc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function W0(t){try{return decodeURI(t)}catch(e){return uc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function H0(t,e){try{return decodeURIComponent(t)}catch(n){return uc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function jm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const pr=t=>t.join("/").replace(/\/\/+/g,"/"),$0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function V0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Fm=["post","put","patch","delete"];new Set(Fm);const G0=["get",...Fm];new Set(G0);/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ga(){return Ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ga.apply(this,arguments)}const K0=A.createContext(null),Q0=A.createContext(null),Um=A.createContext(null),qo=A.createContext(null),Yo=A.createContext({outlet:null,matches:[],isDataRoute:!1}),zm=A.createContext(null);function cc(){return A.useContext(qo)!=null}function q0(){return cc()||je(!1),A.useContext(qo).location}function Y0(t,e){return X0(t,e)}function X0(t,e,n){cc()||je(!1);let{navigator:r}=A.useContext(Um),{matches:i}=A.useContext(Yo),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=q0(),u;if(e){var h;let y=typeof e=="string"?Qo(e):e;l==="/"||(h=y.pathname)!=null&&h.startsWith(l)||je(!1),u=y}else u=a;let d=u.pathname||"/",f=l==="/"?d:d.slice(l.length)||"/",v=N0(t,{pathname:f}),_=nw(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:pr([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:pr([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&_?A.createElement(qo.Provider,{value:{location:Ga({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qt.Pop}},_):_}function J0(){let t=ow(),e=V0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:i},n):null,s)}const Z0=A.createElement(J0,null);class ew extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?A.createElement(Yo.Provider,{value:this.props.routeContext},A.createElement(zm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tw(t){let{routeContext:e,match:n,children:r}=t,i=A.useContext(K0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(Yo.Provider,{value:e},r)}function nw(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||je(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let h=a.route.id?o==null?void 0:o[a.route.id]:null,d=null;n&&(d=a.route.errorElement||Z0);let f=e.concat(s.slice(0,u+1)),v=()=>{let _;return h?_=d:a.route.Component?_=A.createElement(a.route.Component,null):a.route.element?_=a.route.element:_=l,A.createElement(tw,{match:a,routeContext:{outlet:l,matches:f,isDataRoute:n!=null},children:_})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?A.createElement(ew,{location:n.location,revalidation:n.revalidation,component:d,error:h,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var ch;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(ch||(ch={}));var fo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(fo||(fo={}));function rw(t){let e=A.useContext(Q0);return e||je(!1),e}function iw(t){let e=A.useContext(Yo);return e||je(!1),e}function sw(t){let e=iw(),n=e.matches[e.matches.length-1];return n.route.id||je(!1),n.route.id}function ow(){var t;let e=A.useContext(zm),n=rw(fo.UseRouteError),r=sw(fo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function oi(t){je(!1)}function lw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qt.Pop,navigator:s,static:o=!1}=t;cc()&&je(!1);let l=e.replace(/^\/*/,"/"),a=A.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Qo(r));let{pathname:u="/",search:h="",hash:d="",state:f=null,key:v="default"}=r,_=A.useMemo(()=>{let y=jm(u,l);return y==null?null:{location:{pathname:y,search:h,hash:d,state:f,key:v},navigationType:i}},[l,u,h,d,f,v,i]);return _==null?null:A.createElement(Um.Provider,{value:a},A.createElement(qo.Provider,{children:n,value:_}))}function aw(t){let{children:e,location:n}=t;return Y0(Ka(e),n)}var dh;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(dh||(dh={}));new Promise(()=>{});function Ka(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,i)=>{if(!A.isValidElement(r))return;let s=[...e,i];if(r.type===A.Fragment){n.push.apply(n,Ka(r.props.children,s));return}r.type!==oi&&je(!1),!r.props.index||!r.props.children||je(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ka(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uw(t){let{basename:e,children:n,window:r}=t,i=A.useRef();i.current==null&&(i.current=k0({window:r,v5Compat:!0}));let s=i.current,[o,l]=A.useState({action:s.action,location:s.location});return A.useLayoutEffect(()=>s.listen(l),[s]),A.createElement(lw,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var hh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(hh||(hh={}));var fh;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(fh||(fh={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Mr(e)},Mr=function(t){return new Error("Firebase Database ("+Bm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,h=s>>2,d=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,v=u&63;a||(v=64,o||(f=64)),r.push(n[h],n[d],n[f],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new dw;const f=s<<2|l>>4;if(r.push(f),u!==64){const v=l<<4&240|u>>2;if(r.push(v),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hm=function(t){const e=Wm(t);return dc.encodeByteArray(e,!0)},po=function(t){return Hm(t).replace(/\./g,"")},mo=function(t){try{return dc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){return $m(void 0,t)}function $m(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fw(n)||(t[n]=$m(t[n],e[n]));return t}function fw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=()=>pw().__FIREBASE_DEFAULTS__,gw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_w=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mo(t[1]);return e&&JSON.parse(e)},hc=()=>{try{return mw()||gw()||_w()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vm=t=>{var e,n;return(n=(e=hc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vw=t=>{const e=Vm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yw=()=>{var t;return(t=hc())===null||t===void 0?void 0:t.config},Gm=t=>{var e;return(e=hc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[po(JSON.stringify(n)),po(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Ew(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Km(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sw(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qm(){return Bm.NODE_ADMIN===!0}function Cw(){try{return typeof indexedDB=="object"}catch{return!1}}function Iw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Tw,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ki.prototype.create)}}class Ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?kw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new pn(i,l,r)}}function kw(t,e){return t.replace(xw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ji(mo(s[0])||""),n=ji(mo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Rw=function(t){const e=qm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Nw=function(t){const e=qm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Qa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function go(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function _o(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ph(s)&&ph(o)){if(!_o(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ph(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),h=1518500249):(u=s^o^l,h=1859775393):d<60?(u=s&o|l&(s|o),h=2400959708):(u=s^o^l,h=3395469782);const f=(i<<5|i>>>27)+u+a+h+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Aw(t,e){const n=new Ow(t,e);return n.subscribe.bind(n)}class Ow{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Dw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jl),i.error===void 0&&(i.error=jl),i.complete===void 0&&(i.complete=jl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jl(){}function pc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jo=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jw(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bw(t){return t===yn?void 0:t}function jw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const Uw={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},zw=W.INFO,Bw={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Ww=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Bw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mc{constructor(e){this.name=e,this._logLevel=zw,this._logHandler=Ww,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Hw=(t,e)=>e.some(n=>t instanceof n);let mh,gh;function $w(){return mh||(mh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vw(){return gh||(gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ym=new WeakMap,qa=new WeakMap,Xm=new WeakMap,Fl=new WeakMap,gc=new WeakMap;function Gw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ym.set(n,t)}).catch(()=>{}),gc.set(e,t),e}function Kw(t){if(qa.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qa.set(t,e)}let Ya={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qw(t){Ya=t(Ya)}function qw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ul(this),e,...n);return Xm.set(r,e.sort?e.sort():[e]),rn(r)}:Vw().includes(t)?function(...e){return t.apply(Ul(this),e),rn(Ym.get(this))}:function(...e){return rn(t.apply(Ul(this),e))}}function Yw(t){return typeof t=="function"?qw(t):(t instanceof IDBTransaction&&Kw(t),Hw(t,$w())?new Proxy(t,Ya):t)}function rn(t){if(t instanceof IDBRequest)return Gw(t);if(Fl.has(t))return Fl.get(t);const e=Yw(t);return e!==t&&(Fl.set(t,e),gc.set(e,t)),e}const Ul=t=>gc.get(t);function Xw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=rn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(rn(o.result),a.oldVersion,a.newVersion,rn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Jw=["get","getKey","getAll","getAllKeys","count"],Zw=["put","add","delete","clear"],zl=new Map;function _h(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zl.get(e))return zl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Zw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jw.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return zl.set(e,s),s}Qw(t=>({...t,get:(e,n,r)=>_h(e,n)||t.get(e,n,r),has:(e,n)=>!!_h(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",vh="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new mc("@firebase/app"),nE="@firebase/app-compat",rE="@firebase/analytics-compat",iE="@firebase/analytics",sE="@firebase/app-check-compat",oE="@firebase/app-check",lE="@firebase/auth",aE="@firebase/auth-compat",uE="@firebase/database",cE="@firebase/database-compat",dE="@firebase/functions",hE="@firebase/functions-compat",fE="@firebase/installations",pE="@firebase/installations-compat",mE="@firebase/messaging",gE="@firebase/messaging-compat",_E="@firebase/performance",vE="@firebase/performance-compat",yE="@firebase/remote-config",wE="@firebase/remote-config-compat",EE="@firebase/storage",SE="@firebase/storage-compat",CE="@firebase/firestore",IE="@firebase/firestore-compat",TE="firebase",kE="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="[DEFAULT]",xE={[Xa]:"fire-core",[nE]:"fire-core-compat",[iE]:"fire-analytics",[rE]:"fire-analytics-compat",[oE]:"fire-app-check",[sE]:"fire-app-check-compat",[lE]:"fire-auth",[aE]:"fire-auth-compat",[uE]:"fire-rtdb",[cE]:"fire-rtdb-compat",[dE]:"fire-fn",[hE]:"fire-fn-compat",[fE]:"fire-iid",[pE]:"fire-iid-compat",[mE]:"fire-fcm",[gE]:"fire-fcm-compat",[_E]:"fire-perf",[vE]:"fire-perf-compat",[yE]:"fire-rc",[wE]:"fire-rc-compat",[EE]:"fire-gcs",[SE]:"fire-gcs-compat",[CE]:"fire-fst",[IE]:"fire-fst-compat","fire-js":"fire-js",[TE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Map,Za=new Map;function RE(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rr(t){const e=t.name;if(Za.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;Za.set(e,t);for(const n of vo.values())RE(n,t);return!0}function _c(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sn=new Ki("app","Firebase",NE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=kE;function Jm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ja,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw sn.create("bad-app-name",{appName:String(i)});if(n||(n=yw()),!n)throw sn.create("no-options");const s=vo.get(i);if(s){if(_o(n,s.options)&&_o(r,s.config))return s;throw sn.create("duplicate-app",{appName:i})}const o=new Fw(i);for(const a of Za.values())o.addComponent(a);const l=new PE(n,r,o);return vo.set(i,l),l}function Zm(t=Ja){const e=vo.get(t);if(!e&&t===Ja)return Jm();if(!e)throw sn.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=xE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(l.join(" "));return}Rr(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="firebase-heartbeat-database",OE=1,Fi="firebase-heartbeat-store";let Bl=null;function eg(){return Bl||(Bl=Xw(AE,OE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fi)}}}).catch(t=>{throw sn.create("idb-open",{originalErrorMessage:t.message})})),Bl}async function DE(t){try{return(await eg()).transaction(Fi).objectStore(Fi).get(tg(t))}catch(e){if(e instanceof pn)bn.warn(e.message);else{const n=sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function yh(t,e){try{const r=(await eg()).transaction(Fi,"readwrite");return await r.objectStore(Fi).put(e,tg(t)),r.done}catch(n){if(n instanceof pn)bn.warn(n.message);else{const r=sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function tg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=1024,ME=30*24*60*60*1e3;class bE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ME}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wh(),{heartbeatsToSend:n,unsentEntries:r}=jE(this._heartbeatsCache.heartbeats),i=po(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wh(){return new Date().toISOString().substring(0,10)}function jE(t,e=LE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Eh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Eh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cw()?Iw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await DE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Eh(t){return po(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t){Rr(new Mn("platform-logger",e=>new eE(e),"PRIVATE")),Rr(new Mn("heartbeat",e=>new bE(e),"PRIVATE")),on(Xa,vh,t),on(Xa,vh,"esm2017"),on("fire-js","")}UE("");var zE="firebase",BE="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(zE,BE,"app");function vc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ng(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WE=ng,rg=new Ki("auth","Firebase",ng());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new mc("@firebase/auth");function HE(t,...e){yo.logLevel<=W.WARN&&yo.warn(`Auth (${jr}): ${t}`,...e)}function bs(t,...e){yo.logLevel<=W.ERROR&&yo.error(`Auth (${jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,...e){throw yc(t,...e)}function mt(t,...e){return yc(t,...e)}function $E(t,e,n){const r=Object.assign(Object.assign({},WE()),{[e]:n});return new Ki("auth","Firebase",r).create(e,{appName:t.name})}function yc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rg.create(t,...e)}function O(t,e,...n){if(!t)throw yc(e,...n)}function Et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bs(e),new Error(e)}function At(t,e){t||Et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VE(){return Sh()==="http:"||Sh()==="https:"}function Sh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VE()||Ew()||"connection"in navigator)?navigator.onLine:!0}function KE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,At(n>e,"Short delay should be less than long delay!"),this.isMobile=fc()||Km()}get(){return GE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t,e){At(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new Qi(3e4,6e4);function Ec(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fr(t,e,n,r,i={}){return sg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=br(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ig.fetch()(lg(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function sg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},QE),e);try{const i=new YE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Es(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Es(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Es(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Es(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $E(t,h,u);Pt(t,h)}}catch(i){if(i instanceof pn)throw i;Pt(t,"network-request-failed",{message:String(i)})}}async function og(t,e,n,r,i={}){const s=await Fr(t,e,n,r,i);return"mfaPendingCredential"in s&&Pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function lg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wc(t.config,i):`${t.config.apiScheme}://${i}`}class YE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),qE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Es(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(t,e){return Fr(t,"POST","/v1/accounts:delete",e)}async function JE(t,e){return Fr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZE(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=Sc(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:gi(Wl(i.auth_time)),issuedAtTime:gi(Wl(i.iat)),expirationTime:gi(Wl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wl(t){return Number(t)*1e3}function Sc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bs("JWT malformed, contained fewer than 3 sections"),null;try{const i=mo(n);return i?JSON.parse(i):(bs("Failed to decode base64 JWT payload"),null)}catch(i){return bs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function eS(t){const e=Sc(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&tS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Nr(t,JE(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sS(s.providerUserInfo):[],l=iS(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ag(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function rS(t){const e=$e(t);await wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sS(t){return t.map(e=>{var{providerId:n}=e,r=vc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e){const n=await sg(t,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=lg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ig.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await oS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ui;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=vc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ag(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Nr(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZE(this,e)}reload(){return rS(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Nr(this,XE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,I=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:g,emailVerified:w,isAnonymous:C,providerData:N,stsTokenManager:x}=n;O(g&&x,e,"internal-error");const P=Ui.fromJSON(this.name,x);O(typeof g=="string",e,"internal-error"),jt(d,e.name),jt(f,e.name),O(typeof w=="boolean",e,"internal-error"),O(typeof C=="boolean",e,"internal-error"),jt(v,e.name),jt(_,e.name),jt(y,e.name),jt(I,e.name),jt(m,e.name),jt(p,e.name);const $=new Rn({uid:g,auth:e,email:f,emailVerified:w,displayName:d,isAnonymous:C,photoURL:_,phoneNumber:v,tenantId:y,stsTokenManager:P,createdAt:m,lastLoginAt:p});return N&&Array.isArray(N)&&($.providerData=N.map(T=>Object.assign({},T))),I&&($._redirectEventId=I),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ui;i.updateFromServerResponse(n);const s=new Rn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wo(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new Map;function St(t){At(t instanceof Function,"Expected a class definition");let e=Ch.get(t);return e?(At(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ch.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ug.type="NONE";const Ih=ug;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t,e,n){return`firebase:${t}:${e}:${n}`}class mr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=js(this.userKey,i.apiKey,s),this.fullPersistenceKey=js("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new mr(St(Ih),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||St(Ih);const o=js(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Rn._fromJSON(e,h);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new mr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new mr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pg(e))return"Blackberry";if(mg(e))return"Webos";if(Cc(e))return"Safari";if((e.includes("chrome/")||dg(e))&&!e.includes("edge/"))return"Chrome";if(fg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cg(t=Ie()){return/firefox\//i.test(t)}function Cc(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dg(t=Ie()){return/crios\//i.test(t)}function hg(t=Ie()){return/iemobile/i.test(t)}function fg(t=Ie()){return/android/i.test(t)}function pg(t=Ie()){return/blackberry/i.test(t)}function mg(t=Ie()){return/webos/i.test(t)}function Zo(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lS(t=Ie()){var e;return Zo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aS(){return Sw()&&document.documentMode===10}function gg(t=Ie()){return Zo(t)||fg(t)||mg(t)||pg(t)||/windows phone/i.test(t)||hg(t)}function uS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e=[]){let n;switch(t){case"Browser":n=Th(Ie());break;case"Worker":n=`${Th(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}async function vg(t,e){return Fr(t,"GET","/v2/recaptchaConfig",Ec(t,e))}function kh(t){return t!==void 0&&t.enterprise!==void 0}class yg{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cS().appendChild(r)})}function dS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hS="https://www.google.com/recaptcha/enterprise.js?render=",fS="recaptcha-enterprise",pS="NO_RECAPTCHA";class Eg{constructor(e){this.type=fS,this.auth=qi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{vg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new yg(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;kh(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(pS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&kh(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}wg(hS+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function xh(t,e,n,r=!1){const i=new Eg(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rh(this),this.idTokenSubscription=new Rh(this),this.beforeStateQueue=new mS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=St(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await mr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}async initializeRecaptchaConfig(){const e=await vg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new yg(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Eg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&St(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await mr.create(this,[St(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_g(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qi(t){return $e(t)}class Rh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Aw(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t,e){const n=_c(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_o(s,e??{}))return i;Pt(i,"already-initialized")}return n.initialize({options:e})}function vS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(St);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yS(t,e,n){const r=qi(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Sg(e),{host:o,port:l}=wS(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ES()}function Sg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wS(t){const e=Sg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nh(o)}}}function Nh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ES(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,n){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(t,e){return og(t,"POST","/v1/accounts:signInWithIdp",Ec(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="http://localhost";class jn extends Cg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=vc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new jn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gr(e,n)}buildRequest(){const e={requestUri:SS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=br(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends Ig{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Yi{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Yi{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Yi{constructor(){super("twitter.com")}static credential(e,n){return jn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(t,e){return og(t,"POST","/v1/accounts:signUp",Ec(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rn._fromIdTokenResponse(e,r,i),o=Ph(r);return new Fn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ph(r);return new Fn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ph(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Eo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Eo(e,n,r,i)}}function Tg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Eo._fromErrorAndOperation(t,s,e,r):s})}async function CS(t,e,n=!1){const r=await Nr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Nr(t,Tg(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=Sc(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),Fn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(t,e,n=!1){const r="signIn",i=await Tg(t,r,e),s=await Fn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function kS(t,e,n){var r;const i=qi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await xh(i,s,"signUpPassword");o=Hl(i,u)}else o=Hl(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await xh(i,s,"signUpPassword");return Hl(i,h)}else return Promise.reject(u)});const l=await o.catch(u=>Promise.reject(u)),a=await Fn._fromIdTokenResponse(i,"signIn",l);return await i._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e){return Fr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$e(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Nr(r,xS(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function NS(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function PS(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function AS(t){return $e(t).signOut()}const So="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(So,"1"),this.storage.removeItem(So),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(){const t=Ie();return Cc(t)||Zo(t)}const DS=1e3,LS=10;class xg extends kg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OS()&&uS(),this.fallbackToPolling=gg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);aS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xg.type="LOCAL";const MS=xg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends kg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rg.type="SESSION";const Ng=Rg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new el(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await bS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}el.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Ic("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}function FS(t){gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function US(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BS(){return Pg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="firebaseLocalStorageDb",WS=1,Co="firebaseLocalStorage",Og="fbase_key";class Xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tl(t,e){return t.transaction([Co],e?"readwrite":"readonly").objectStore(Co)}function HS(){const t=indexedDB.deleteDatabase(Ag);return new Xi(t).toPromise()}function tu(){const t=indexedDB.open(Ag,WS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Co,{keyPath:Og})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Co)?e(r):(r.close(),await HS(),e(await tu()))})})}async function Ah(t,e,n){const r=tl(t,!0).put({[Og]:e,value:n});return new Xi(r).toPromise()}async function $S(t,e){const n=tl(t,!1).get(e),r=await new Xi(n).toPromise();return r===void 0?null:r.value}function Oh(t,e){const n=tl(t,!0).delete(e);return new Xi(n).toPromise()}const VS=800,GS=3;class Dg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=el._getInstance(BS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await US(),!this.activeServiceWorker)return;this.sender=new jS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tu();return await Ah(e,So,"1"),await Oh(e,So),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ah(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$S(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tl(i,!1).getAll();return new Xi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dg.type="LOCAL";const KS=Dg;new Qi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t,e){return e?St(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends Cg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qS(t){return TS(t.auth,new Tc(t),t.bypassAuthState)}function YS(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),IS(n,new Tc(t),t.bypassAuthState)}async function XS(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),CS(n,new Tc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qS;case"linkViaPopup":case"linkViaRedirect":return XS;case"reauthViaPopup":case"reauthViaRedirect":return YS;default:Pt(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=new Qi(2e3,1e4);class or extends Lg{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JS.get())};e()}}or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="pendingRedirect",Fs=new Map;class eC extends Lg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fs.get(this.auth._key());if(!e){try{const r=await tC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fs.set(this.auth._key(),e)}return this.bypassAuthState||Fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tC(t,e){const n=iC(e),r=rC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nC(t,e){Fs.set(t._key(),e)}function rC(t){return St(t._redirectPersistence)}function iC(t){return js(ZS,t.config.apiKey,t.name)}async function sC(t,e,n=!1){const r=qi(t),i=QS(r,e),o=await new eC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=10*60*1e3;class lC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dh(e))}saveEventToCache(e){this.cachedEventUids.add(Dh(e)),this.lastProcessedEventTime=Date.now()}}function Dh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e={}){return Fr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dC=/^https?/;async function hC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uC(t);for(const n of e)try{if(fC(n))return}catch{}Pt(t,"unauthorized-domain")}function fC(t){const e=eu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dC.test(n))return!1;if(cC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new Qi(3e4,6e4);function Lh(){const t=gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mC(t){return new Promise((e,n)=>{var r,i,s;function o(){Lh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lh(),n(mt(t,"network-request-failed"))},timeout:pC.get()})}if(!((i=(r=gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gt().gapi)===null||s===void 0)&&s.load)o();else{const l=dS("iframefcb");return gt()[l]=()=>{gapi.load?o():n(mt(t,"network-request-failed"))},wg(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Us=null,e})}let Us=null;function gC(t){return Us=Us||mC(t),Us}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=new Qi(5e3,15e3),vC="__/auth/iframe",yC="emulator/auth/iframe",wC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SC(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wc(e,yC):`https://${t.config.authDomain}/${vC}`,r={apiKey:e.apiKey,appName:t.name,v:jr},i=EC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${br(r).slice(1)}`}async function CC(t){const e=await gC(t),n=gt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:SC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mt(t,"network-request-failed"),l=gt().setTimeout(()=>{s(o)},_C.get());function a(){gt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TC=500,kC=600,xC="_blank",RC="http://localhost";class Mh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NC(t,e,n,r=TC,i=kC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},IC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ie().toLowerCase();n&&(l=dg(u)?xC:n),cg(u)&&(e=e||RC,a.scrollbars="yes");const h=Object.entries(a).reduce((f,[v,_])=>`${f}${v}=${_},`,"");if(lS(u)&&l!=="_self")return PC(e||"",l),new Mh(null);const d=window.open(e||"",l,h);O(d,t,"popup-blocked");try{d.focus()}catch{}return new Mh(d)}function PC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="__/auth/handler",OC="emulator/auth/handler",DC=encodeURIComponent("fac");async function bh(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jr,eventId:i};if(e instanceof Ig){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(s||{}))o[h]=d}if(e instanceof Yi){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${DC}=${encodeURIComponent(a)}`:"";return`${LC(t)}?${br(l).slice(1)}${u}`}function LC({config:t}){return t.emulator?wc(t,OC):`https://${t.authDomain}/${AC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="webStorageSupport";class MC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ng,this._completeRedirectFn=sC,this._overrideRedirectResult=nC}async _openPopup(e,n,r,i){var s;At((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bh(e,n,r,eu(),i);return NC(e,o,Ic())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bh(e,n,r,eu(),i);return FS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(At(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CC(e),r=new lC(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($l,{type:$l},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$l];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gg()||Cc()||Zo()}}const bC=MC;var jh="@firebase/auth",Fh="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function UC(t){Rr(new Mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),O(!(l!=null&&l.includes(":")),"argument-error",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_g(t)},u=new gS(r,i,s,a);return vS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rr(new Mn("auth-internal",e=>{const n=qi(e.getProvider("auth").getImmediate());return(r=>new jC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(jh,Fh,FC(t)),on(jh,Fh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=5*60,BC=Gm("authIdTokenMaxAge")||zC;let Uh=null;const WC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BC)return;const i=n==null?void 0:n.token;Uh!==i&&(Uh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HC(t=Zm()){const e=_c(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_S(t,{popupRedirectResolver:bC,persistence:[KS,MS,Ng]}),r=Gm("authTokenSyncURL");if(r){const s=WC(r);PS(n,s,()=>s(n.currentUser)),NS(n,o=>s(o))}const i=Vm("auth");return i&&yS(n,`http://${i}`),n}UC("Browser");const zh="@firebase/database",Bh="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bg="";function $C(t){bg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ji(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new VC(e)}}catch{}return new GC},In=jg("localStorage"),nu=jg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new mc("@firebase/database"),KC=function(){let t=1;return function(){return t++}}(),Fg=function(t){const e=Lw(t),n=new Pw;n.update(e);const r=n.digest();return dc.encodeByteArray(r)},Ji=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ji.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let Nn=null,Wh=!0;const QC=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(_r.logLevel=W.VERBOSE,Nn=_r.log.bind(_r),e&&nu.set("logging_enabled",!0)):typeof t=="function"?Nn=t:(Nn=null,nu.remove("logging_enabled"))},Ee=function(...t){if(Wh===!0&&(Wh=!1,Nn===null&&nu.get("logging_enabled")===!0&&QC(!0)),Nn){const e=Ji.apply(null,t);Nn(e)}},Zi=function(t){return function(...e){Ee(t,...e)}},ru=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ji(...t);_r.error(e)},Ot=function(...t){const e=`FIREBASE FATAL ERROR: ${Ji(...t)}`;throw _r.error(e),new Error(e)},be=function(...t){const e="FIREBASE WARNING: "+Ji(...t);_r.warn(e)},qC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ug=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},YC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Pr="[MIN_NAME]",Un="[MAX_NAME]",Ur=function(t,e){if(t===e)return 0;if(t===Pr||e===Un)return-1;if(e===Pr||t===Un)return 1;{const n=Hh(t),r=Hh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},XC=function(t,e){return t===e?0:t<e?-1:1},Jr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},kc=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=kc(t[e[r]]);return n+="}",n},zg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Bg=function(t){S(!Ug(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},JC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ZC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},eI=new RegExp("^-?(0*)\\d{1,10}$"),tI=-2147483648,nI=2147483647,Hh=function(t){if(eI.test(t)){const e=Number(t);if(e>=tI&&e<=nI)return e}return null},zr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw be("Exception was thrown by user callback.",n),e},Math.floor(0))}},rI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_i=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class vr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="5",Wg="v",Hg="s",$g="r",Vg="f",Gg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Kg="ls",Qg="p",iu="ac",qg="websocket",Yg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=In.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&In.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function oI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Jg(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===qg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Yg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oI(t)&&(n.ns=t.namespace);const i=[];return Je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.counters_={}}incrementCounter(e,n=1){Mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl={},Gl={};function Rc(t){const e=t.toString();return Vl[e]||(Vl[e]=new lI),Vl[e]}function aI(t,e){const n=t.toString();return Gl[n]||(Gl[n]=e()),Gl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&zr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="start",cI="close",dI="pLPCommand",hI="pRTLPCB",Zg="id",e_="pw",t_="ser",fI="cb",pI="seg",mI="ts",gI="d",_I="dframe",n_=1870,r_=30,vI=n_-r_,yI=25e3,wI=3e4;class lr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zi(e),this.stats_=Rc(n),this.urlFn=a=>(this.appCheckToken&&(a[iu]=this.appCheckToken),Jg(n,Yg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new uI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wI)),YC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Nc((...s)=>{const[o,l,a,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$h)this.id=l,this.password=a;else if(o===cI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[$h]="t",r[t_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[fI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Wg]=xc,this.transportSessionId&&(r[Hg]=this.transportSessionId),this.lastSessionId&&(r[Kg]=this.lastSessionId),this.applicationId&&(r[Qg]=this.applicationId),this.appCheckToken&&(r[iu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gg.test(location.hostname)&&(r[$g]=Vg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){lr.forceAllow_=!0}static forceDisallow(){lr.forceDisallow_=!0}static isAvailable(){return lr.forceAllow_?!0:!lr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!JC()&&!ZC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hm(n),i=zg(r,vI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[_I]="t",r[Zg]=e,r[e_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Nc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KC(),window[dI+this.uniqueCallbackIdentifier]=e,window[hI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Nc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ee("frame writing exception"),l.stack&&Ee(l.stack),Ee(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zg]=this.myID,e[e_]=this.myPW,e[t_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+r_+r.length<=n_;){const o=this.pendingSegs.shift();r=r+"&"+pI+i+"="+o.seg+"&"+mI+i+"="+o.ts+"&"+gI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(yI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=16384,SI=45e3;let Io=null;typeof MozWebSocket<"u"?Io=MozWebSocket:typeof WebSocket<"u"&&(Io=WebSocket);class rt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zi(this.connId),this.stats_=Rc(n),this.connURL=rt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Wg]=xc,typeof location<"u"&&location.hostname&&Gg.test(location.hostname)&&(o[$g]=Vg),n&&(o[Hg]=n),r&&(o[Kg]=r),i&&(o[iu]=i),s&&(o[Qg]=s),Jg(e,qg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,In.set("previous_websocket_failure",!0);try{let r;Qm(),this.mySock=new Io(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Io!==null&&!rt.forceDisallow_}static previouslyFailed(){return In.isInMemoryStorage||In.get("previous_websocket_failure")===!0}markConnectionHealthy(){In.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ji(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=zg(n,EI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(SI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[lr,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rt&&rt.isAvailable();let r=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rt];else{const i=this.transports_=[];for(const s of zi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);zi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=6e4,II=5e3,TI=10*1024,kI=100*1024,Kl="t",Vh="d",xI="s",Gh="r",RI="e",Kh="o",Qh="a",qh="n",Yh="p",NI="h";class PI{constructor(e,n,r,i,s,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zi("c:"+this.id+":"),this.transportManager_=new zi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_i(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Kl in e){const n=e[Kl];n===Qh?this.upgradeIfSecondaryHealthy_():n===Gh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Jr("t",e),r=Jr("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Jr("t",e),r=Jr("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Jr(Kl,e);if(Vh in e){const r=e[Vh];if(n===NI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===qh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===xI?this.onConnectionShutdown_(r):n===Gh?this.onReset_(r):n===RI?ru("Server Error: "+r):n===Kh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ru("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xc!==r&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_i(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(CI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_i(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(II))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(In.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends s_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new To}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=32,Jh=768;class Y{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new Y("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function cn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Y(t.pieces_,e)}function o_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function AI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function l_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function a_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Y(e,0)}function oe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Y)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Y(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Qe(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Qe(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function u_(t,e){if(cn(t)!==cn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function it(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(cn(t)>cn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class OI{constructor(e,n){this.errorPrefix_=n,this.parts_=l_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Jo(this.parts_[r]);c_(this)}}function DI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jo(e),c_(t)}function LI(t){const e=t.parts_.pop();t.byteLength_-=Jo(e),t.parts_.length>0&&(t.byteLength_-=1)}function c_(t){if(t.byteLength_>Jh)throw new Error(t.errorPrefix_+"has a key path longer than "+Jh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xh+") or object contains a cycle "+wn(t))}function wn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends s_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Pc}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=1e3,MI=60*5*1e3,Zh=30*1e3,bI=1.3,jI=3e4,FI="server_kill",ef=3;class Tt extends i_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Tt.nextPersistentConnectionId_++,this.log_=Zi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zr,this.maxReconnectDelay_=MI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Qm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&To.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(me(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Xo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Tt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mt(e,"w")){const r=xr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Nw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Rw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ru("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jI&&(this.reconnectDelay_=Zr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Tt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new PI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{be(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(FI)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&be(d),a())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qa(this.interruptReasons_)&&(this.reconnectDelay_=Zr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>kc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Y(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ef&&(this.reconnectDelay_=Zh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ef&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+bg.replace(/\./g,"-")]=1,fc()?e["framework.cordova"]=1:Km()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=To.getInstance().currentlyOnline();return Qa(this.interruptReasons_)&&e}}Tt.nextPersistentConnectionId_=0;Tt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Pr,e),i=new F(Pr,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;class d_ extends nl{static get __EMPTY_NODE(){return Ss}static set __EMPTY_NODE(e){Ss=e}compare(e,n){return Ur(e.name,n.name)}isDefinedOn(e){throw Mr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Un,Ss)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Ss)}toString(){return".key"}}const yr=new d_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class de{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??de.RED,this.left=i??Oe.EMPTY_NODE,this.right=s??Oe.EMPTY_NODE}copy(e,n,r,i,s){return new de(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Oe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}de.RED=!0;de.BLACK=!1;class UI{copy(e,n,r,i,s){return this}insert(e,n,r){return new de(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,de.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,de.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Cs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Cs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Cs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Cs(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new UI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t,e){return Ur(t.name,e.name)}function Ac(t,e){return Ur(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;function BI(t){su=t}const h_=function(t){return typeof t=="number"?"number:"+Bg(t):"string:"+t},f_=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mt(e,".sv"),"Priority must be a string or number.")}else S(t===su||t.isEmpty(),"priority of unexpected type.");S(t===su||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tf;class ue{constructor(e,n=ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),f_(this.priorityNode_)}static set __childrenNodeConstructor(e){tf=e}static get __childrenNodeConstructor(){return tf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:M(e)===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+h_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Bg(this.value_):e+=this.value_,this.lazyHash_=Fg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ue.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ue.VALUE_TYPE_ORDER.indexOf(n),s=ue.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p_,m_;function WI(t){p_=t}function HI(t){m_=t}class $I extends nl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ur(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Un,new ue("[PRIORITY-POST]",m_))}makePost(e,n){const r=p_(e);return new F(n,new ue("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new $I;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=Math.log(2);class GI{constructor(e){const n=s=>parseInt(Math.log(s)/VI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ko=function(t,e,n,r){t.sort(e);const i=function(a,u){const h=u-a;let d,f;if(h===0)return null;if(h===1)return d=t[a],f=n?n(d):d,new de(f,d.node,de.BLACK,null,null);{const v=parseInt(h/2,10)+a,_=i(a,v),y=i(v+1,u);return d=t[v],f=n?n(d):d,new de(f,d.node,de.BLACK,_,y)}},s=function(a){let u=null,h=null,d=t.length;const f=function(_,y){const I=d-_,m=d;d-=_;const p=i(I+1,m),g=t[I],w=n?n(g):g;v(new de(w,g.node,y,null,p))},v=function(_){u?(u.left=_,u=_):(h=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),I=Math.pow(2,a.count-(_+1));y?f(I,de.BLACK):(f(I,de.BLACK),f(I,de.RED))}return h},o=new GI(t.length),l=s(o);return new Oe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ql;const Kn={};class Ct{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Kn&&Se,"ChildrenNode.ts has not been loaded"),Ql=Ql||new Ct({".priority":Kn},{".priority":Se}),Ql}get(e){const n=xr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return Mt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==yr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=ko(r,e.getCompare()):l=Kn;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Ct(h,u)}addToIndexes(e,n){const r=go(this.indexes_,(i,s)=>{const o=xr(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Kn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),ko(l,o.getCompare())}else return Kn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Ct(r,this.indexSet_)}removeFromIndexes(e,n){const r=go(this.indexes_,i=>{if(i===Kn)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new Ct(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei;class z{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&f_(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ei||(ei=new z(new Oe(Ac),null,Ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ei}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ei:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ei:this.priorityNode_;return new z(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{S(M(e)!==".priority"||cn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,l)=>{n[o]=l.val(e),r++,s&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+h_(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Fg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===es?-1:0}withIndex(e){if(e===yr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yr?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class KI extends z{constructor(){super(new Oe(Ac),z.EMPTY_NODE,Ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const es=new KI;Object.defineProperties(F,{MIN:{value:new F(Pr,z.EMPTY_NODE)},MAX:{value:new F(Un,es)}});d_.__EMPTY_NODE=z.EMPTY_NODE;ue.__childrenNodeConstructor=z;BI(es);HI(es);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=!0;function pe(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ue(n,pe(e))}if(!(t instanceof Array)&&QI){const n=[];let r=!1;if(Je(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=pe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return z.EMPTY_NODE;const s=ko(n,zI,o=>o.name,Ac);if(r){const o=ko(n,Se.getCompare());return new z(s,pe(e),new Ct({".priority":o},{".priority":Se}))}else return new z(s,pe(e),Ct.Default)}else{let n=z.EMPTY_NODE;return Je(t,(r,i)=>{if(Mt(t,r)&&r.substring(0,1)!=="."){const s=pe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(pe(e))}}WI(pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI extends nl{constructor(e){super(),this.indexPath_=e,S(!j(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ur(e.name,n.name):s}makePost(e,n){const r=pe(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,es);return new F(Un,e)}toString(){return l_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI extends nl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ur(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=pe(e);return new F(n,r)}toString(){return".value"}}const XI=new YI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){return{type:"value",snapshotNode:t}}function ZI(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function e1(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function nf(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function t1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pr}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new Oc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Se?n="$priority":t.index_===XI?n="$value":t.index_===yr?n="$key":(S(t.index_ instanceof qI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends i_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Zi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=xo.getListenId_(e,r),l={};this.listens_[o]=l;const a=rf(e._queryParams);this.restRequest_(s+".json",a,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),xr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=xo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=rf(e._queryParams),r=e._path.toString(),i=new Xo;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+br(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ji(l.responseText)}catch{be("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(){return{value:null,children:new Map}}function g_(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,Ro());const i=t.children.get(r);e=Q(e),g_(i,e,n)}}function ou(t,e,n){t.value!==null?n(e,t.value):r1(t,(r,i)=>{const s=new Y(e.toString()+"/"+r);ou(i,s,n)})}function r1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=10*1e3,s1=30*1e3,o1=5*60*1e3;class l1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new i1(e);const r=of+(s1-of)*Math.random();_i(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Je(e,(i,s)=>{s>0&&Mt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),_i(this.reportStats_.bind(this),Math.floor(Math.random()*2*o1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ht||(ht={}));function __(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function v_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function y_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ht.ACK_USER_WRITE,this.source=__()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(e));return new No(H(),n,this.revert)}}else return S(M(this.path)===e,"operationForChild called for unrelated child."),new No(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ht.OVERWRITE}operationForChild(e){return j(this.path)?new zn(this.source,H(),this.snap.getImmediateChild(e)):new zn(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ht.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new Y(e));return n.isEmpty()?null:n.value?new zn(this.source,H(),n.value):new Bi(this.source,H(),n)}else return S(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bi(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function a1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(t1(o.childName,o.snapshotNode))}),ti(t,i,"child_removed",e,r,n),ti(t,i,"child_added",e,r,n),ti(t,i,"child_moved",s,r,n),ti(t,i,"child_changed",e,r,n),ti(t,i,"value",e,r,n),i}function ti(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>c1(t,l,a)),o.forEach(l=>{const a=u1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function u1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function c1(t,e,n){if(e.childName==null||n.childName==null)throw Mr("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t,e){return{eventCache:t,serverCache:e}}function vi(t,e,n,r){return w_(new Dc(e,n,r),t.serverCache)}function E_(t,e,n,r){return w_(t.eventCache,new Dc(e,n,r))}function lu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Bn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;const d1=()=>(ql||(ql=new Oe(XC)),ql);class K{constructor(e,n=d1()){this.value=e,this.children=n}static fromObject(e){let n=new K(null);return Je(e,(r,i)=>{n=n.set(new Y(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(j(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:oe(new Y(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new K(null)}}set(e,n){if(j(e))return new K(n,this.children);{const r=M(e),s=(this.children.get(r)||new K(null)).set(Q(e),n),o=this.children.insert(r,s);return new K(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new K(null):new K(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(j(e))return n;{const r=M(e),s=(this.children.get(r)||new K(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new K(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(oe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),oe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),oe(n,i),r):new K(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(oe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.writeTree_=e}static empty(){return new lt(new K(null))}}function yi(t,e,n){if(j(e))return new lt(new K(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Qe(i,e);return s=s.updateChild(o,n),new lt(t.writeTree_.set(i,s))}else{const i=new K(n),s=t.writeTree_.setTree(e,i);return new lt(s)}}}function lf(t,e,n){let r=t;return Je(n,(i,s)=>{r=yi(r,oe(e,i),s)}),r}function af(t,e){if(j(e))return lt.empty();{const n=t.writeTree_.setTree(e,new K(null));return new lt(n)}}function au(t,e){return $n(t,e)!=null}function $n(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qe(n.path,e)):null}function uf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function ln(t,e){if(j(e))return t;{const n=$n(t,e);return n!=null?new lt(new K(n)):new lt(t.writeTree_.subtree(e))}}function uu(t){return t.writeTree_.isEmpty()}function Ar(t,e){return S_(H(),t.writeTree_,e)}function S_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=S_(oe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(oe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t,e){return R_(e,t)}function h1(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=yi(t.visibleWrites,e,n)),t.lastWriteId=r}function f1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function p1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&m1(l,r.path)?i=!1:it(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return g1(t),!0;if(r.snap)t.visibleWrites=af(t.visibleWrites,r.path);else{const l=r.children;Je(l,a=>{t.visibleWrites=af(t.visibleWrites,oe(r.path,a))})}return!0}else return!1}function m1(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(oe(t.path,n),e))return!0;return!1}function g1(t){t.visibleWrites=I_(t.allWrites,_1,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _1(t){return t.visible}function I_(t,e,n){let r=lt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)it(n,o)?(l=Qe(n,o),r=yi(r,l,s.snap)):it(o,n)&&(l=Qe(o,n),r=yi(r,H(),s.snap.getChild(l)));else if(s.children){if(it(n,o))l=Qe(n,o),r=lf(r,l,s.children);else if(it(o,n))if(l=Qe(o,n),j(l))r=lf(r,H(),s.children);else{const a=xr(s.children,M(l));if(a){const u=a.getChild(Q(l));r=yi(r,H(),u)}}}else throw Mr("WriteRecord should have .snap or .children")}}return r}function T_(t,e,n,r,i){if(!r&&!i){const s=$n(t.visibleWrites,e);if(s!=null)return s;{const o=ln(t.visibleWrites,e);if(uu(o))return n;if(n==null&&!au(o,H()))return null;{const l=n||z.EMPTY_NODE;return Ar(o,l)}}}else{const s=ln(t.visibleWrites,e);if(!i&&uu(s))return n;if(!i&&n==null&&!au(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(it(u.path,e)||it(e,u.path))},l=I_(t.allWrites,o,e),a=n||z.EMPTY_NODE;return Ar(l,a)}}}function v1(t,e,n){let r=z.EMPTY_NODE;const i=$n(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ln(t.visibleWrites,e);return n.forEachChild(Se,(o,l)=>{const a=Ar(ln(s,new Y(o)),l);r=r.updateImmediateChild(o,a)}),uf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ln(t.visibleWrites,e);return uf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function y1(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=oe(e,n);if(au(t.visibleWrites,s))return null;{const o=ln(t.visibleWrites,s);return uu(o)?i.getChild(n):Ar(o,i.getChild(n))}}function w1(t,e,n,r){const i=oe(e,n),s=$n(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ln(t.visibleWrites,i);return Ar(o,r.getNode().getImmediateChild(n))}else return null}function E1(t,e){return $n(t.visibleWrites,e)}function S1(t,e,n,r,i,s,o){let l;const a=ln(t.visibleWrites,e),u=$n(a,H());if(u!=null)l=u;else if(n!=null)l=Ar(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=f.getNext();for(;v&&h.length<i;)d(v,r)!==0&&h.push(v),v=f.getNext();return h}else return[]}function C1(){return{visibleWrites:lt.empty(),allWrites:[],lastWriteId:-1}}function cu(t,e,n,r){return T_(t.writeTree,t.treePath,e,n,r)}function k_(t,e){return v1(t.writeTree,t.treePath,e)}function cf(t,e,n,r){return y1(t.writeTree,t.treePath,e,n,r)}function Po(t,e){return E1(t.writeTree,oe(t.treePath,e))}function I1(t,e,n,r,i,s){return S1(t.writeTree,t.treePath,e,n,r,i,s)}function Lc(t,e,n){return w1(t.writeTree,t.treePath,e,n)}function x_(t,e){return R_(oe(t.treePath,e),t.writeTree)}function R_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,nf(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,e1(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ZI(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,nf(r,e.snapshotNode,i.oldSnap));else throw Mr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const N_=new k1;class Mc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Dc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Lc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bn(this.viewCache_),s=I1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function x1(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function R1(t,e,n,r,i){const s=new T1;let o,l;if(n.type===ht.OVERWRITE){const u=n;u.source.fromUser?o=du(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!j(u.path),o=Ao(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ht.MERGE){const u=n;u.source.fromUser?o=P1(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=hu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ht.ACK_USER_WRITE){const u=n;u.revert?o=D1(t,e,u.path,r,i,s):o=A1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ht.LISTEN_COMPLETE)o=O1(t,e,n.path,r,s);else throw Mr("Unknown operation type: "+n.type);const a=s.getChanges();return N1(e,o,a),{viewCache:o,changes:a}}function N1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=lu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(JI(lu(e)))}}function P_(t,e,n,r,i,s){const o=e.eventCache;if(Po(r,n)!=null)return e;{let l,a;if(j(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Bn(e),h=u instanceof z?u:z.EMPTY_NODE,d=k_(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=cu(r,Bn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){S(cn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const d=cf(r,n,h,a);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=Q(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=cf(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=Lc(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,i,s):l=o.getNode()}}return vi(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function Ao(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(j(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const v=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),v,null)}else{const v=M(n);if(!a.isCompleteForPath(n)&&cn(n)>1)return e;const _=Q(n),I=a.getNode().getImmediateChild(v).updateChild(_,r);v===".priority"?u=h.updatePriority(a.getNode(),I):u=h.updateChild(a.getNode(),v,I,_,N_,null)}const d=E_(e,u,a.isFullyInitialized()||j(n),h.filtersNodes()),f=new Mc(i,d,s);return P_(t,d,n,i,f,l)}function du(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const h=new Mc(i,e,s);if(j(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=vi(e,u,!0,t.filter.filtersNodes());else{const d=M(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=vi(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=Q(n),v=l.getNode().getImmediateChild(d);let _;if(j(f))_=r;else{const y=h.getCompleteChild(d);y!=null?o_(f)===".priority"&&y.getChild(a_(f)).isEmpty()?_=y:_=y.updateChild(f,r):_=z.EMPTY_NODE}if(v.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),d,_,f,h,o);a=vi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function df(t,e){return t.eventCache.isCompleteForChild(e)}function P1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const h=oe(n,a);df(e,M(h))&&(l=du(t,l,h,u,i,s,o))}),r.foreach((a,u)=>{const h=oe(n,a);df(e,M(h))||(l=du(t,l,h,u,i,s,o))}),l}function hf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function hu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;j(n)?u=r:u=new K(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const v=e.serverCache.getNode().getImmediateChild(d),_=hf(t,v,f);a=Ao(t,a,new Y(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,f)=>{const v=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!v){const _=e.serverCache.getNode().getImmediateChild(d),y=hf(t,_,f);a=Ao(t,a,new Y(d),y,i,s,o,l)}}),a}function A1(t,e,n,r,i,s,o){if(Po(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ao(t,e,n,a.getNode().getChild(n),i,s,l,o);if(j(n)){let u=new K(null);return a.getNode().forEachChild(yr,(h,d)=>{u=u.set(new Y(h),d)}),hu(t,e,n,u,i,s,l,o)}else return e}else{let u=new K(null);return r.foreach((h,d)=>{const f=oe(n,h);a.isCompleteForPath(f)&&(u=u.set(h,a.getNode().getChild(f)))}),hu(t,e,n,u,i,s,l,o)}}function O1(t,e,n,r,i){const s=e.serverCache,o=E_(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return P_(t,o,n,r,N_,i)}function D1(t,e,n,r,i,s){let o;if(Po(r,n)!=null)return e;{const l=new Mc(r,e,i),a=e.eventCache.getNode();let u;if(j(n)||M(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=cu(r,Bn(e));else{const d=e.serverCache.getNode();S(d instanceof z,"serverChildren would be complete if leaf node"),h=k_(r,d)}h=h,u=t.filter.updateFullNode(a,h,s)}else{const h=M(n);let d=Lc(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=a.getImmediateChild(h)),d!=null?u=t.filter.updateChild(a,h,d,Q(n),l,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,z.EMPTY_NODE,Q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cu(r,Bn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Po(r,H())!=null,vi(e,u,o,t.filter.filtersNodes())}}function L1(t,e){const n=Bn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function ff(t,e,n,r){e.type===ht.MERGE&&e.source.queryId!==null&&(S(Bn(t.viewCache_),"We should always have a full cache before handling merges"),S(lu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=R1(t.processor_,i,e,n,r);return x1(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,M1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function M1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return a1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pf;function b1(t){S(!pf,"__referenceConstructor has already been defined"),pf=t}function bc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),ff(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ff(o,e,n,r));return s}}function jc(t,e){let n=null;for(const r of t.views.values())n=n||L1(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mf;function j1(t){S(!mf,"__referenceConstructor has already been defined"),mf=t}class gf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=C1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function A_(t,e,n,r,i){return h1(t.pendingWriteTree_,e,n,r,i),i?il(t,new zn(__(),e,n)):[]}function Tn(t,e,n=!1){const r=f1(t.pendingWriteTree_,e);if(p1(t.pendingWriteTree_,e)){let s=new K(null);return r.snap!=null?s=s.set(H(),!0):Je(r.children,o=>{s=s.set(new Y(o),!0)}),il(t,new No(r.path,s,n))}else return[]}function rl(t,e,n){return il(t,new zn(v_(),e,n))}function F1(t,e,n){const r=K.fromObject(n);return il(t,new Bi(v_(),e,r))}function U1(t,e,n,r){const i=L_(t,r);if(i!=null){const s=M_(i),o=s.path,l=s.queryId,a=Qe(o,e),u=new zn(y_(l),a,n);return b_(t,o,u)}else return[]}function z1(t,e,n,r){const i=L_(t,r);if(i){const s=M_(i),o=s.path,l=s.queryId,a=Qe(o,e),u=K.fromObject(n),h=new Bi(y_(l),a,u);return b_(t,o,h)}else return[]}function Fc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Qe(o,e),u=jc(l,a);if(u)return u});return T_(i,e,s,n,!0)}function il(t,e){return O_(e,t.syncPointTree_,null,C_(t.pendingWriteTree_,H()))}function O_(t,e,n,r){if(j(t.path))return D_(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=jc(i,H()));let s=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=x_(r,o);s=s.concat(O_(l,a,u,h))}return i&&(s=s.concat(bc(i,t,r,n))),s}}function D_(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=jc(i,H()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=x_(r,o),h=t.operationForChild(o);h&&(s=s.concat(D_(h,l,a,u)))}),i&&(s=s.concat(bc(i,t,r,n))),s}function L_(t,e){return t.tagToQueryMap.get(e)}function M_(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Y(t.substr(0,e))}}function b_(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=C_(t.pendingWriteTree_,e);return bc(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Uc(n)}node(){return this.node_}}class zc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=oe(this.path_,e);return new zc(this.syncTree_,n)}node(){return Fc(this.syncTree_,this.path_)}}const B1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_f=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return W1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return H1(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},W1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},H1=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},$1=function(t,e,n,r){return Bc(e,new zc(n,t),r)},j_=function(t,e,n){return Bc(t,new Uc(e),n)};function Bc(t,e,n){const r=t.getPriority().val(),i=_f(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=_f(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ue(l,pe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ue(i))),o.forEachChild(Se,(l,a)=>{const u=Bc(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Hc(t,e){let n=e instanceof Y?e:new Y(e),r=t,i=M(n);for(;i!==null;){const s=xr(r.node.children,i)||{children:{},childCount:0};r=new Wc(i,r,s),n=Q(n),i=M(n)}return r}function Br(t){return t.node.value}function F_(t,e){t.node.value=e,fu(t)}function U_(t){return t.node.childCount>0}function V1(t){return Br(t)===void 0&&!U_(t)}function sl(t,e){Je(t.node.children,(n,r)=>{e(new Wc(n,t,r))})}function z_(t,e,n,r){n&&!r&&e(t),sl(t,i=>{z_(i,e,!0,r)}),n&&r&&e(t)}function G1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ts(t){return new Y(t.parent===null?t.name:ts(t.parent)+"/"+t.name)}function fu(t){t.parent!==null&&K1(t.parent,t.name,t)}function K1(t,e,n){const r=V1(n),i=Mt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,fu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,fu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=/[\[\].#$\/\u0000-\u001F\u007F]/,q1=/[\[\].#$\u0000-\u001F\u007F]/,Yl=10*1024*1024,B_=function(t){return typeof t=="string"&&t.length!==0&&!Q1.test(t)},W_=function(t){return typeof t=="string"&&t.length!==0&&!q1.test(t)},Y1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),W_(t)},X1=function(t,e,n,r){r&&e===void 0||$c(pc(t,"value"),e,n)},$c=function(t,e,n){const r=n instanceof Y?new OI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+wn(r));if(typeof e=="function")throw new Error(t+"contains a function "+wn(r)+" with contents = "+e.toString());if(Ug(e))throw new Error(t+"contains "+e.toString()+" "+wn(r));if(typeof e=="string"&&e.length>Yl/3&&Jo(e)>Yl)throw new Error(t+"contains a string greater than "+Yl+" utf8 bytes "+wn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!B_(o)))throw new Error(t+" contains an invalid key ("+o+") "+wn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);DI(r,o),$c(t,l,r),LI(r)}),i&&s)throw new Error(t+' contains ".value" child '+wn(r)+" in addition to actual children.")}},H_=function(t,e,n,r){if(!(r&&n===void 0)&&!W_(n))throw new Error(pc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},J1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),H_(t,e,n,r)},Z1=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},eT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!B_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Y1(n))throw new Error(pc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!u_(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Dt(t,e,n){$_(t,n),nT(t,r=>it(r,e)||it(e,r))}function nT(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(rT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Nn&&Ee("event: "+n.toString()),zr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="repo_interrupt",sT=25;class oT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ro(),this.transactionQueueTree_=new Wc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lT(t,e,n){if(t.stats_=Rc(t.repoInfo_),t.forceRestClient_||rI())t.server_=new xo(t.repoInfo_,(r,i,s,o)=>{vf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Tt(t.repoInfo_,e,(r,i,s,o)=>{vf(t,r,i,s,o)},r=>{yf(t,r)},r=>{uT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=aI(t.repoInfo_,()=>new l1(t.stats_,t.server_)),t.infoData_=new n1,t.infoSyncTree_=new gf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=rl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Gc(t,"connected",!1),t.serverSyncTree_=new gf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Dt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function aT(t){const n=t.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vc(t){return B1({timestamp:aT(t)})}function vf(t,e,n,r,i){t.dataUpdateCount++;const s=new Y(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=go(n,u=>pe(u));o=z1(t.serverSyncTree_,s,a,i)}else{const a=pe(n);o=U1(t.serverSyncTree_,s,a,i)}else if(r){const a=go(n,u=>pe(u));o=F1(t.serverSyncTree_,s,a)}else{const a=pe(n);o=rl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ol(t,s)),Dt(t.eventQueue_,l,o)}function yf(t,e){Gc(t,"connected",e),e===!1&&dT(t)}function uT(t,e){Je(e,(n,r)=>{Gc(t,n,r)})}function Gc(t,e,n){const r=new Y("/.info/"+e),i=pe(n);t.infoData_.updateSnapshot(r,i);const s=rl(t.infoSyncTree_,r,i);Dt(t.eventQueue_,r,s)}function V_(t){return t.nextWriteId_++}function cT(t,e,n,r,i){Kc(t,"set",{path:e.toString(),value:n,priority:r});const s=Vc(t),o=pe(n,r),l=Fc(t.serverSyncTree_,e),a=j_(o,l,s),u=V_(t),h=A_(t.serverSyncTree_,e,a,u,!0);$_(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,v)=>{const _=f==="ok";_||be("set at "+e+" failed: "+f);const y=Tn(t.serverSyncTree_,u,!_);Dt(t.eventQueue_,e,y),fT(t,i,f,v)});const d=Y_(t,e);ol(t,d),Dt(t.eventQueue_,d,[])}function dT(t){Kc(t,"onDisconnectEvents");const e=Vc(t),n=Ro();ou(t.onDisconnect_,H(),(i,s)=>{const o=$1(i,s,t.serverSyncTree_,e);g_(n,i,o)});let r=[];ou(n,H(),(i,s)=>{r=r.concat(rl(t.serverSyncTree_,i,s));const o=Y_(t,i);ol(t,o)}),t.onDisconnect_=Ro(),Dt(t.eventQueue_,H(),r)}function hT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(iT)}function Kc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function fT(t,e,n,r){e&&zr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function G_(t,e,n){return Fc(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function Qc(t,e=t.transactionQueueTree_){if(e||ll(t,e),Br(e)){const n=Q_(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&pT(t,ts(e),n)}else U_(e)&&sl(e,n=>{Qc(t,n)})}function pT(t,e,n){const r=n.map(u=>u.currentWriteId),i=G_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];S(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=Qe(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Kc(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(Tn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ll(t,Hc(t.transactionQueueTree_,e)),Qc(t,t.transactionQueueTree_),Dt(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)zr(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{be("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ol(t,e)}},o)}function ol(t,e){const n=K_(t,e),r=ts(n),i=Q_(t,n);return mT(t,i,r),r}function mT(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Qe(n,a.path);let h=!1,d;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,d=a.abortReason,i=i.concat(Tn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=sT)h=!0,d="maxretry",i=i.concat(Tn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=G_(t,a.path,o);a.currentInputSnapshot=f;const v=e[l].update(f.val());if(v!==void 0){$c("transaction failed: Data returned ",v,a.path);let _=pe(v);typeof v=="object"&&v!=null&&Mt(v,".priority")||(_=_.updatePriority(f.getPriority()));const I=a.currentWriteId,m=Vc(t),p=j_(_,f,m);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=p,a.currentWriteId=V_(t),o.splice(o.indexOf(I),1),i=i.concat(A_(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Tn(t.serverSyncTree_,I,!0))}else h=!0,d="nodata",i=i.concat(Tn(t.serverSyncTree_,a.currentWriteId,!0))}Dt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}ll(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)zr(r[l]);Qc(t,t.transactionQueueTree_)}function K_(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&Br(r)===void 0;)r=Hc(r,n),e=Q(e),n=M(e);return r}function Q_(t,e){const n=[];return q_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function q_(t,e,n){const r=Br(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);sl(e,i=>{q_(t,i,n)})}function ll(t,e){const n=Br(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,F_(e,n.length>0?n:void 0)}sl(e,r=>{ll(t,r)})}function Y_(t,e){const n=ts(K_(t,e)),r=Hc(t.transactionQueueTree_,e);return G1(r,i=>{Xl(t,i)}),Xl(t,r),z_(r,i=>{Xl(t,i)}),n}function Xl(t,e){const n=Br(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Tn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?F_(e,void 0):n.length=s+1,Dt(t.eventQueue_,ts(e),i);for(let o=0;o<r.length;o++)zr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _T(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):be(`Invalid query segment '${n}' in query '${t}'`)}return e}const wf=function(t,e){const n=vT(t),r=n.namespace;n.domain==="firebase.com"&&Ot(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ot("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||qC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Xg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Y(n.pathString)}},vT=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=gT(t.substring(h,d)));const f=_T(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:o_(this._path)}get ref(){return new Vn(this._repo,this._path)}get _queryIdentifier(){const e=sf(this._queryParams),n=kc(e);return n==="{}"?"default":n}get _queryObject(){return sf(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof qc))return!1;const n=this._repo===e._repo,r=u_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+AI(this._path)}}class Vn extends qc{constructor(e,n){super(e,n,new Oc,!1)}get parent(){const e=a_(this._path);return e===null?null:new Vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function yT(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?wT(t._root,e):t._root}function wT(t,e){return t=$e(t),M(t._path)===null?J1("child","path",e,!1):H_("child","path",e,!1),new Vn(t._repo,oe(t._path,e))}function ET(t,e){t=$e(t),Z1("set",t._path),X1("set",e,t._path,!1);const n=new Xo;return cT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}b1(Vn);j1(Vn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="FIREBASE_DATABASE_EMULATOR_HOST",pu={};let CT=!1;function IT(t,e,n,r){t.repoInfo_=new Xg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function TT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ot("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=wf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[ST]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=wf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new vr(vr.OWNER):new sI(t.name,t.options,e);eT("Invalid Firebase Database URL",o),j(o.path)||Ot("Database URL must point to the root of a Firebase Database (not including a child path).");const d=xT(l,t,h,new iI(t.name,n));return new RT(d,t)}function kT(t,e){const n=pu[e];(!n||n[t.key]!==t)&&Ot(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hT(t),delete n[t.key]}function xT(t,e,n,r){let i=pu[e.name];i||(i={},pu[e.name]=i);let s=i[t.toURLString()];return s&&Ot("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new oT(t,CT,n,r),i[t.toURLString()]=s,s}class RT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vn(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ot("Cannot call "+e+" on a deleted database.")}}function NT(t=Zm(),e){const n=_c(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=vw("database");r&&PT(n,...r)}return n}function PT(t,e,n,r={}){t=$e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ot("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ot('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new vr(vr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ww(r.mockUserToken,t.app.options.projectId);s=new vr(o)}IT(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t){$C(jr),Rr(new Mn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return TT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),on(zh,Bh,t),on(zh,Bh,"esm2017")}Tt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};AT();const OT={apiKey:"AIzaSyB6b0-t57y4WxVOz_kvGUitFrJe4GzT_Nk",authDomain:"mata-fire-detection.firebaseapp.com",databaseURL:"https://mata-fire-detection-default-rtdb.firebaseio.com",projectId:"mata-fire-detection",storageBucket:"mata-fire-detection.appspot.com",messagingSenderId:"705390758600",appId:"1:705390758600:web:ed5845102aa3f6bf9133fd",measurementId:"G-QDPWDPVR8R"},X_=Jm(OT),zs=HC(X_),DT=NT(X_);function LT(){const[t,e]=A.useState(""),[n,r]=A.useState(" "),[i,s]=A.useState(" "),[o,l]=A.useState(" "),[a,u]=A.useState(" "),[h,d]=A.useState(" "),[f,v]=A.useState(" "),[_,y]=A.useState(""),[I,m]=A.useState(" "),[p,g]=A.useState(""),[w,C]=A.useState("");A.useState(" ");const[N,x]=A.useState(""),P=()=>{let T=!0;if(p!==""&&w!=="")return p!==w&&(T=!1,alert("Password don't match!"),x("Passwords does not match"),console.log(N)),T},$=T=>{T.preventDefault(),x(""),P()&&kS(zs,_,p).then(async Ne=>{await RS(zs.currentUser,{displayName:t+" "+n}),ET(yT(DT,"users/"+zs.currentUser.uid),{Birthday:i,Gender:o,Address:a,ComName:h,ComAdd:f,Phone:I}),console.log(Ne.user)}).catch(Ne=>x(err.message)),y(""),g(""),C("")};return document.title="Registration",c.jsxs("main",{id:"main",children:[c.jsx("section",{class:"breadcrumbs",children:c.jsx("div",{class:"container",children:c.jsxs("div",{class:"d-flex justify-content-between align-items-center",children:[c.jsx("h2",{}),c.jsx("ol",{children:c.jsx("li",{children:"Registration"})})]})})}),c.jsx("section",{class:"about","data-aos":"fade-up",children:c.jsx("div",{class:"container",children:c.jsx("div",{class:"page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins",children:c.jsx("div",{class:"container",children:c.jsx("div",{class:"row justify-content-center",children:c.jsx("div",{class:"col-md-6",children:c.jsxs("form",{onSubmit:$,name:"registration_form",children:[c.jsxs("div",{class:"row mb-3",children:[c.jsx("div",{class:"col",children:c.jsxs("div",{class:"form-group",children:[c.jsx("label",{for:"first_name",class:"form-label",children:"First Name"}),c.jsx("input",{type:"text",class:"form-control",id:"first_name",name:"first_name",value:t,onChange:T=>e(T.target.value)})]})}),c.jsx("div",{class:"col",children:c.jsxs("div",{class:"form-group",children:[c.jsx("label",{for:"last_name",class:"form-label",children:"Last Name"}),c.jsx("input",{type:"text",class:"form-control",id:"last_name",name:"last_name",value:n,onChange:T=>r(T.target.value)})]})})]}),c.jsx("div",{class:"mb-3",children:c.jsxs("div",{class:"form-group",children:[c.jsx("label",{for:"birthday",class:"form-label",children:"Birthday"}),c.jsx("div",{class:"input-group",children:c.jsx("input",{type:"date",class:"form-control js-datepicker",id:"birthday",name:"birthday",value:i,onChange:T=>s(T.target.value)})})]})}),c.jsx("div",{class:"mb-3",children:c.jsxs("div",{class:"form-group",children:[c.jsx("label",{for:"gender",class:"form-label",children:"Gender"}),c.jsxs("div",{class:"form-check",children:[c.jsx("input",{type:"radio",class:"form-check-input",id:"male",name:"gender",value:"male",checked:o==="male",onChange:T=>l(T.target.value)}),c.jsx("label",{class:"form-check-label",for:"male",children:"Male"})]}),c.jsxs("div",{class:"form-check",children:[c.jsx("input",{type:"radio",class:"form-check-input",id:"female",name:"gender",value:"female",checked:o==="female",onChange:T=>l(T.target.value)}),c.jsx("label",{class:"form-check-label",for:"female",children:"Female"})]})]})}),c.jsx("div",{class:"mb-3",children:c.jsxs("div",{class:"form-group",children:[c.jsx("label",{for:"address",class:"form-label",children:"Address"}),c.jsx("input",{type:"text",class:"form-control",id:"address",name:"address",value:a,onChange:T=>u(T.target.value)})]})}),c.jsx("div",{class:"mb-3",children:c.jsxs("div",{class:"form-group",children:[c.jsx("label",{for:"phone",class:"form-label",children:"Company Name"}),c.jsx("input",{type:"text",class:"form-control",id:"ComName",name:"Company Name",value:h,onChange:T=>d(T.target.value)})]})}),c.jsx("div",{class:"mb-3",children:c.jsxs("div",{class:"form-group",children:[c.jsx("label",{for:"phone",class:"form-label",children:"Company Address"}),c.jsx("input",{type:"text",class:"form-control",id:"CamAdd",name:"Company Address",value:f,onChange:T=>v(T.target.value)})]})}),c.jsx("div",{class:"mb-3",children:c.jsxs("div",{class:"form-group",children:[c.jsx("label",{for:"email",class:"form-label",children:"Email"}),c.jsx("input",{type:"email",class:"form-control",id:"email",name:"email",value:_,onChange:T=>y(T.target.value)})]})}),c.jsx("div",{class:"mb-3",children:c.jsxs("div",{class:"form-group",children:[c.jsx("label",{for:"phone",class:"form-label",children:"Phone Number"}),c.jsx("input",{type:"text",class:"form-control",id:"phone",name:"phone",value:I,onChange:T=>m(T.target.value)})]})}),c.jsx("div",{class:"mb-3",children:c.jsxs("div",{class:"form-group",children:[c.jsx("label",{for:"password",class:"form-label",children:"Password"}),c.jsx("input",{type:"password",class:"form-control",id:"password",name:"password",value:p,onChange:T=>g(T.target.value)})]})}),c.jsx("div",{class:"mb-3",children:c.jsxs("div",{class:"form-group",children:[c.jsx("label",{for:"password",class:"form-label",children:"Confirm Password"}),c.jsx("input",{type:"password",class:"form-control",id:"confirmpassword",name:"confirmpassword",value:w,onChange:T=>C(T.target.value)})]})}),c.jsx("div",{class:"mb-3",children:c.jsx("div",{class:"form-group",children:c.jsxs("label",{for:"agree",children:[c.jsx("input",{type:"checkbox",name:"agree",id:"agree"}),' By ticking, you are confirming that you have read, understood and agree to "null" ',c.jsx("a",{href:"termsandcondition.html",children:"terms and conditions"})]})})}),c.jsx("div",{class:"mb-3",children:c.jsx("div",{class:"form-group",children:c.jsx("input",{type:"submit",value:"Submit"})})})]})})})})})})}),c.jsx("br",{}),c.jsx("br",{})]})}function MT(){return c.jsxs("header",{id:"header",class:"navbar",children:[c.jsx("div",{class:"logo",children:c.jsxs("h1",{class:"text-light title",children:[c.jsx("a",{href:"/home",children:c.jsx("span",{children:c.jsx("img",{src:"logo.png",class:"img-flui"})})})," Sentinels"]})}),c.jsx("nav",{class:"navbar",children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{class:"active navbtn",href:"/home",children:"Home"})}),c.jsx("li",{children:c.jsx("a",{class:"active navbtn ",href:"/about",children:"Project"})}),c.jsx("li",{children:c.jsx("a",{class:"active navbtn ",href:"/team",children:"Team"})})]})})]})}function bT(){return c.jsxs(c.Fragment,{children:[c.jsx("footer",{id:"footer",children:c.jsx("div",{class:"footer-top",children:c.jsx("div",{class:"container",children:c.jsxs("div",{class:"row",children:[c.jsxs("div",{class:"col-lg-3 col-md-6 footer-links",children:[c.jsx("h4",{children:"Useful Links"}),c.jsxs("ul",{children:[c.jsxs("li",{children:[c.jsx("i",{class:"bx bx-chevron-right"})," ",c.jsx("a",{href:"index.html",children:"Home"})]}),c.jsxs("li",{children:[c.jsx("i",{class:"bx bx-chevron-right"})," ",c.jsx("a",{href:"about.html",children:"Project"})]}),c.jsxs("li",{children:[c.jsx("i",{class:"bx bx-chevron-right"})," ",c.jsx("a",{href:"team.html",children:"Team"})]})]})]}),c.jsxs("div",{class:"col-lg-3 col-md-6 footer-contact",children:[c.jsx("h4",{children:"Contact Us"}),c.jsxs("p",{children:["Congressional Rd Ext ",c.jsx("br",{}),"Barangay 171, Caloocan, Metro Manila",c.jsx("br",{}),"Philippines ",c.jsx("br",{}),c.jsx("br",{})]})]}),c.jsxs("div",{class:"col-lg-3 col-md-6 footer-info",children:[c.jsx("h3",{children:"MATA"}),c.jsx("p",{children:"Unleash the full potential of your video analysis with our Motion and Tracking Application. Using Deep Learning and OpenCV, it delivers real-time object detection and tracking with unmatched accuracy and speed."})]})]})})})}),c.jsx("a",{href:"#",class:"back-to-top d-flex align-items-center justify-content-center",children:c.jsx("i",{class:"bi bi-arrow-up-short"})})]})}const jT="/deploy_vite/teaser.mp4",FT="/deploy_vite/icons8_fire_element_300px.png",UT="/deploy_vite/icons8_kitchen_scales_120px.png",zT="/deploy_vite/icons8_alarm_120px.png",BT="/deploy_vite/matacctv.png",WT="/deploy_vite/oriasmata.png";function HT(){return document.title="MATA",c.jsxs(c.Fragment,{children:[c.jsxs("section",{id:"home",class:"hero",children:[c.jsxs("div",{class:"hero-content",children:[c.jsx("br",{}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("h1",{style:{marginLeft:80,position:"relative",marginRight:80,zIndex:3},children:c.jsxs("i",{children:["Your ",c.jsx("span",{class:"highlight",children:"eyes"})," in the fight against fire"]})}),c.jsx("p",{style:{marginLeft:80,position:"relative",marginRight:80,zIndex:3},children:c.jsx("i",{children:"A comprehensive video surveillance management system that focus on"})})]}),c.jsx("div",{class:"overlay"}),c.jsx("video",{autoPlay:!0,muted:!0,loop:!0,id:"bg-video",class:"hero",children:c.jsx("source",{src:jT,type:"video/mp4"})})]}),c.jsxs("main",{children:[c.jsx("section",{class:"services",children:c.jsxs("div",{class:"container ",children:[c.jsxs("center",{children:[c.jsx("h2",{children:"EMPOWERING SAFETY"}),c.jsx("h6",{children:"Solutions for a safer enviroment"}),c.jsx("br",{})]}),c.jsxs("div",{class:"row justify-content-center",children:[c.jsx("div",{class:"col-md-6 col-lg-3 d-flex align-items-stretch","data-aos":"fade-up",children:c.jsxs("div",{class:"icon-box",style:{borderRadius:10},children:[c.jsx("img",{src:FT,class:"img-flui",alt:""}),c.jsx("h4",{class:"title",children:"Fire Detection"}),c.jsx("p",{class:"description",children:"Stay protected with our cutting-edge Camera Fire Detection feature. Utilizing advanced algorithms, it detects and alerts you of potential fires, ensuring real-time protection for you and your loved ones"})]})}),c.jsx("div",{class:"col-md-6 col-lg-3 d-flex align-items-stretch","data-aos":"fade-up","data-aos-delay":"100",children:c.jsxs("div",{class:"icon-box",style:{borderRadius:10},children:[c.jsx("img",{src:UT,class:"img-flui",alt:""}),c.jsx("h4",{class:"title",children:"Fire Scale"}),c.jsx("p",{class:"description",children:"Our fire scale feature is a method used to quantify the size and severity of a detected fire. This information can then be used to determine the appropriate response, such as notifying the fire department or activating an automatic fire suppression system"})]})}),c.jsx("div",{class:"col-md-6 col-lg-3 d-flex align-items-stretch","data-aos":"fade-up","data-aos-delay":"200",children:c.jsxs("div",{class:"icon-box",style:{borderRadius:10},children:[c.jsx("img",{src:zT,class:"img-flui",alt:""}),c.jsx("h4",{class:"title",children:"Alarm System"}),c.jsx("p",{class:"description",children:"Protect your home and loved ones with our advanced alarm system feature. Get instant alerts and take action from anywhere with our mobile app. Rest easy knowing your home is secure with our state-of-the-art technology."})]})})]})]})}),c.jsxs("section",{class:"why-us section-bg",children:[c.jsx("div",{class:"overlay2"}),c.jsx("div",{class:"row",children:c.jsxs("div",{class:"background-image",children:[c.jsx("br",{}),c.jsx("h1",{class:"h1",children:"Merging Technology and your Safety"}),c.jsxs("div",{class:"container",children:[c.jsxs("div",{class:"left-column",children:[c.jsx("br",{}),c.jsx("br",{}),c.jsx("h3",{children:"Mission"}),c.jsx("p",{style:{letterSpacing:2,marginLeft:100,marginRight:100},children:"Our mission is to provide a reliable and effective fire detection system using advanced technology to help prevent loss of life and property."})]}),c.jsxs("div",{class:"right-column",children:[c.jsx("br",{}),c.jsx("br",{}),c.jsx("h3",{children:"Vision"}),c.jsx("p",{style:{letterSpacing:1,marginLeft:100,marginRight:100},children:"Our vision is to become the leading provider of innovative fire detection solutions through continous research and development, exceptional customer service, and a commitment to safety and reliability. We strive to make a positive impact on society by enhancing the safety and security of communities around the world."})]})]})]})})]}),c.jsxs("section",{class:"image-text-section",children:[c.jsxs("div",{class:"row",children:[c.jsx("div",{class:"col-md-6",style:{borderLeft:"2in solid #fcf7f7"},children:c.jsx("img",{src:BT,alt:"Image;img-flui"})}),c.jsxs("div",{class:"col-md-6",children:[c.jsx("h2",{style:{letterSpacing:2,fontSize:32},children:"Introducing MATA"}),c.jsxs("p",{style:{letterSpacing:1,marginRight:160,fontSize:25},children:[c.jsx("br",{}),"MATA is an innovative system that specializes in fire detection using advanced algorithms and cutting-edge technology. When a fire is detected, the system immediately alerts the nearest fire station for a quick response. MATA also features an algorithm that can determine the level of the fire based on its size, providing valuable information to firefighters. With its reliable and efficient system, MATA is dedicated to improving fire safety and prevention in various contexts."]})]})]}),c.jsx("div",{style:{height:350,textAlign:"center"},class:"why-us section-bg",children:c.jsx("h1",{class:"text-light title",children:c.jsx("a",{href:"/register",class:"fixed-image",style:{width:250,height:"auto"},children:c.jsx("img",{src:WT,alt:"Click Me"})})})})]})]})]})}function $T(){return document.title="About Us",c.jsx(c.Fragment,{children:c.jsxs("main",{children:[c.jsx("section",{class:"breadcrumbs",children:c.jsx("div",{class:"container",children:c.jsxs("div",{class:"d-flex justify-content-between align-items-center",children:[c.jsx("h2",{children:"Project"}),c.jsxs("ol",{children:[c.jsx("li",{children:c.jsx("a",{href:"/Home",children:"Home"})}),c.jsx("li",{children:"Project"})]})]})})}),c.jsx("section",{class:"about","data-aos":"fade-up",children:c.jsxs("div",{class:"container",children:[c.jsx("br",{}),c.jsx("br",{}),c.jsx("div",{class:"row",children:c.jsxs("div",{style:{textAlign:"center",marginBlock:1,fontSize:20},children:[c.jsx("center",{children:c.jsx("h1",{children:"About the Project"})}),c.jsx("center",{children:c.jsx("p",{style:{marginLeft:200,marginRight:200,wordSpacing:0},children:"This study presents the development of a CCTV system that integrates fire detection, trespassing detection, and SMS alert features using Convolutional Neural Network (CNN), OpenCV, and Raspberry Pi. The system uses CNN to accurately detect and classify objects in real-time, including potential fires and intruders. OpenCV provides advanced video analysis and processing capabilities for reliable detection and tracking, while Raspberry Pi serves as the core computing platform for efficient and effective data processing. The fire detection feature uses CNN to analyze video footage for signs of smoke and fire, while the trespassing detection feature uses motion detection for detecting unauthorized entry. The system sends an SMS alert to the user's mobile device, providing real-time notification of any critical events. The proposed system offers a comprehensive security solution that ensures the safety and protection of property and personnel."})}),c.jsx("h1",{children:"Mission"}),c.jsx("center",{children:c.jsx("p",{class:"fst-italic",style:{marginRight:200,marginLeft:200},children:"Our mission is to provide a reliable and effective fire detection system using advanced technology to help prevent loss of life and property."})}),c.jsx("ul",{}),c.jsx("center",{children:c.jsx("h1",{children:"Vision"})}),c.jsx("center",{children:c.jsx("p",{class:"fst-italic",style:{marginLeft:200,marginRight:200},children:"Our vision is to become the leading provider of innovative fire detection solutions through continous research and development, exceptional customer service, and a commitment to safety and reliability. We strive to make a positive impact on society by enhancing the safety and security of communities around the world."})})]})})]})})]})})}const VT="/deploy_vite/team/merantes.jpg",GT="/deploy_vite/team/aynera.jpg",KT="/deploy_vite/team/biaco.jpg",QT="/deploy_vite/team/caballero.jpg",qT="/deploy_vite/team/lansangan.jpg",YT="/deploy_vite/team/orias.jpg",XT="/deploy_vite/team/reyes.jpg";function JT(){return document.title="Our Team | MATA",c.jsx(c.Fragment,{children:c.jsx("main",{id:"main",children:c.jsx("center",{children:c.jsx("section",{class:"team","data-aos":"fade-up","data-aos-easing":"ease-in-out","data-aos-duration":"500",children:c.jsx("div",{class:"container",children:c.jsxs("div",{class:"container",children:[c.jsx("br",{}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("h1",{class:"teamheader",children:"The Developers of MATA"}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("div",{class:"col-lg-5",children:c.jsxs("div",{class:"member",children:[c.jsx("div",{class:"member-img",children:c.jsx("img",{src:VT,class:"img-fluid",alt:""})}),c.jsxs("div",{class:"member-info",children:[c.jsx("h4",{children:"John Vincent Merantes"}),c.jsx("span",{children:"Project Manager"})]})]})})," ",c.jsx("br",{}),c.jsx("br",{}),c.jsxs("div",{class:"row justify-content-center",children:[c.jsx("div",{class:"col-lg-5",children:c.jsxs("div",{class:"member",children:[c.jsx("div",{class:"member-img",children:c.jsx("img",{src:GT,class:"img-fluid",alt:""})}),c.jsxs("div",{class:"member-info",children:[c.jsx("h4",{children:"Kj Aynera"}),c.jsx("span",{children:"Machine Learning Engineer"})]})]})}),c.jsx("div",{class:"col-lg-5",children:c.jsxs("div",{class:"member",children:[c.jsx("div",{class:"member-img",children:c.jsx("img",{src:KT,class:"img-fluid",alt:""})}),c.jsxs("div",{class:"member-info",children:[c.jsx("h4",{children:"Geoffrey Biaco"}),c.jsx("span",{children:"Algorithm and Frontend Developer"})]})]})})]}),c.jsx("br",{}),c.jsxs("div",{class:"row justify-content-center",children:[c.jsx("div",{class:"col-lg-5",children:c.jsxs("div",{class:"member",children:[c.jsx("div",{class:"member-img",children:c.jsx("img",{src:QT,class:"img-fluid",alt:""})}),c.jsxs("div",{class:"member-info",children:[c.jsx("h4",{children:"Edgardo Caballero"}),c.jsx("span",{children:"Backend Developer"})]})]})}),c.jsx("div",{class:"col-lg-5",children:c.jsxs("div",{class:"member",children:[c.jsx("div",{class:"member-img",children:c.jsx("img",{src:qT,class:"img-fluid",alt:""})}),c.jsxs("div",{class:"member-info",children:[c.jsx("h4",{children:"Mark Steven Lansangan"}),c.jsx("span",{children:"Frontend Developer/UX Designer"})]})]})})]}),c.jsx("br",{}),c.jsxs("div",{class:"row justify-content-center",children:[c.jsx("div",{class:"col-lg-5",children:c.jsxs("div",{class:"member",children:[c.jsx("div",{class:"member-img",children:c.jsx("img",{src:YT,class:"img-fluid",alt:""})}),c.jsxs("div",{class:"member-info",children:[c.jsx("h4",{children:"Clarence James Orias"}),c.jsx("span",{children:"Frontend Developer"})]})]})}),c.jsx("div",{class:"col-lg-5",children:c.jsxs("div",{class:"member",children:[c.jsx("div",{class:"member-img",children:c.jsx("img",{src:XT,class:"img-fluid",alt:""})}),c.jsxs("div",{class:"member-info",children:[c.jsx("h4",{children:"Brandell Bobby Reyes"}),c.jsx("span",{children:"Frontend Developer"})]})]})})]}),c.jsx("br",{})]})})})})})})}function ZT(){return AS(zs),c.jsxs(c.Fragment,{children:[c.jsx(MT,{}),c.jsx(uw,{children:c.jsxs(aw,{children:[c.jsx(oi,{path:"./pages/home",element:c.jsx(HT,{})}),c.jsx(oi,{path:"./pages/register",element:c.jsx(LT,{})}),c.jsx(oi,{path:"./pages/about",element:c.jsx($T,{})}),c.jsx(oi,{path:"./pages/team",element:c.jsx(JT,{})})]})}),c.jsx(bT,{})]})}Jl.createRoot(document.getElementById("root")).render(c.jsx(mv.StrictMode,{children:c.jsx(ZT,{})}));

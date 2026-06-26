(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Vh={exports:{}},Dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function WS(){if(d_)return Dl;d_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Dl.Fragment=t,Dl.jsx=i,Dl.jsxs=i,Dl}var p_;function YS(){return p_||(p_=1,Vh.exports=WS()),Vh.exports}var St=YS(),Gh={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function jS(){if(m_)return me;m_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,x={};function v(I,J,Mt){this.props=I,this.context=J,this.refs=x,this.updater=Mt||T}v.prototype.isReactComponent={},v.prototype.setState=function(I,J){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,J,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=v.prototype;function O(I,J,Mt){this.props=I,this.context=J,this.refs=x,this.updater=Mt||T}var D=O.prototype=new C;D.constructor=O,A(D,v.prototype),D.isPureReactComponent=!0;var V=Array.isArray;function L(){}var P={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function z(I,J,Mt){var Rt=Mt.ref;return{$$typeof:r,type:I,key:J,ref:Rt!==void 0?Rt:null,props:Mt}}function q(I,J){return z(I.type,J,I.props)}function F(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function X(I){var J={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Mt){return J[Mt]})}var st=/\/+/g;function ct(I,J){return typeof I=="object"&&I!==null&&I.key!=null?X(""+I.key):J.toString(36)}function H(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(J){I.status==="pending"&&(I.status="fulfilled",I.value=J)},function(J){I.status==="pending"&&(I.status="rejected",I.reason=J)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function U(I,J,Mt,Rt,zt){var rt=typeof I;(rt==="undefined"||rt==="boolean")&&(I=null);var bt=!1;if(I===null)bt=!0;else switch(rt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(I.$$typeof){case r:case t:bt=!0;break;case _:return bt=I._init,U(bt(I._payload),J,Mt,Rt,zt)}}if(bt)return zt=zt(I),bt=Rt===""?"."+ct(I,0):Rt,V(zt)?(Mt="",bt!=null&&(Mt=bt.replace(st,"$&/")+"/"),U(zt,J,Mt,"",function(ee){return ee})):zt!=null&&(F(zt)&&(zt=q(zt,Mt+(zt.key==null||I&&I.key===zt.key?"":(""+zt.key).replace(st,"$&/")+"/")+bt)),J.push(zt)),1;bt=0;var At=Rt===""?".":Rt+":";if(V(I))for(var Ct=0;Ct<I.length;Ct++)Rt=I[Ct],rt=At+ct(Rt,Ct),bt+=U(Rt,J,Mt,rt,zt);else if(Ct=y(I),typeof Ct=="function")for(I=Ct.call(I),Ct=0;!(Rt=I.next()).done;)Rt=Rt.value,rt=At+ct(Rt,Ct++),bt+=U(Rt,J,Mt,rt,zt);else if(rt==="object"){if(typeof I.then=="function")return U(H(I),J,Mt,Rt,zt);throw J=String(I),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return bt}function B(I,J,Mt){if(I==null)return I;var Rt=[],zt=0;return U(I,Rt,"","",function(rt){return J.call(Mt,rt,zt++)}),Rt}function lt(I){if(I._status===-1){var J=I._result;J=J(),J.then(function(Mt){(I._status===0||I._status===-1)&&(I._status=1,I._result=Mt)},function(Mt){(I._status===0||I._status===-1)&&(I._status=2,I._result=Mt)}),I._status===-1&&(I._status=0,I._result=J)}if(I._status===1)return I._result.default;throw I._result}var pt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Tt={map:B,forEach:function(I,J,Mt){B(I,function(){J.apply(this,arguments)},Mt)},count:function(I){var J=0;return B(I,function(){J++}),J},toArray:function(I){return B(I,function(J){return J})||[]},only:function(I){if(!F(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return me.Activity=S,me.Children=Tt,me.Component=v,me.Fragment=i,me.Profiler=l,me.PureComponent=O,me.StrictMode=s,me.Suspense=m,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,me.__COMPILER_RUNTIME={__proto__:null,c:function(I){return P.H.useMemoCache(I)}},me.cache=function(I){return function(){return I.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(I,J,Mt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Rt=A({},I.props),zt=I.key;if(J!=null)for(rt in J.key!==void 0&&(zt=""+J.key),J)!E.call(J,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&J.ref===void 0||(Rt[rt]=J[rt]);var rt=arguments.length-2;if(rt===1)Rt.children=Mt;else if(1<rt){for(var bt=Array(rt),At=0;At<rt;At++)bt[At]=arguments[At+2];Rt.children=bt}return z(I.type,zt,Rt)},me.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},me.createElement=function(I,J,Mt){var Rt,zt={},rt=null;if(J!=null)for(Rt in J.key!==void 0&&(rt=""+J.key),J)E.call(J,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(zt[Rt]=J[Rt]);var bt=arguments.length-2;if(bt===1)zt.children=Mt;else if(1<bt){for(var At=Array(bt),Ct=0;Ct<bt;Ct++)At[Ct]=arguments[Ct+2];zt.children=At}if(I&&I.defaultProps)for(Rt in bt=I.defaultProps,bt)zt[Rt]===void 0&&(zt[Rt]=bt[Rt]);return z(I,rt,zt)},me.createRef=function(){return{current:null}},me.forwardRef=function(I){return{$$typeof:p,render:I}},me.isValidElement=F,me.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:lt}},me.memo=function(I,J){return{$$typeof:d,type:I,compare:J===void 0?null:J}},me.startTransition=function(I){var J=P.T,Mt={};P.T=Mt;try{var Rt=I(),zt=P.S;zt!==null&&zt(Mt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(L,pt)}catch(rt){pt(rt)}finally{J!==null&&Mt.types!==null&&(J.types=Mt.types),P.T=J}},me.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},me.use=function(I){return P.H.use(I)},me.useActionState=function(I,J,Mt){return P.H.useActionState(I,J,Mt)},me.useCallback=function(I,J){return P.H.useCallback(I,J)},me.useContext=function(I){return P.H.useContext(I)},me.useDebugValue=function(){},me.useDeferredValue=function(I,J){return P.H.useDeferredValue(I,J)},me.useEffect=function(I,J){return P.H.useEffect(I,J)},me.useEffectEvent=function(I){return P.H.useEffectEvent(I)},me.useId=function(){return P.H.useId()},me.useImperativeHandle=function(I,J,Mt){return P.H.useImperativeHandle(I,J,Mt)},me.useInsertionEffect=function(I,J){return P.H.useInsertionEffect(I,J)},me.useLayoutEffect=function(I,J){return P.H.useLayoutEffect(I,J)},me.useMemo=function(I,J){return P.H.useMemo(I,J)},me.useOptimistic=function(I,J){return P.H.useOptimistic(I,J)},me.useReducer=function(I,J,Mt){return P.H.useReducer(I,J,Mt)},me.useRef=function(I){return P.H.useRef(I)},me.useState=function(I){return P.H.useState(I)},me.useSyncExternalStore=function(I,J,Mt){return P.H.useSyncExternalStore(I,J,Mt)},me.useTransition=function(){return P.H.useTransition()},me.version="19.2.7",me}var g_;function Sp(){return g_||(g_=1,Gh.exports=jS()),Gh.exports}var Ut=Sp(),Hh={exports:{}},Nl={},kh={exports:{}},Xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function ZS(){return __||(__=1,(function(r){function t(U,B){var lt=U.length;U.push(B);t:for(;0<lt;){var pt=lt-1>>>1,Tt=U[pt];if(0<l(Tt,B))U[pt]=B,U[lt]=Tt,lt=pt;else break t}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var B=U[0],lt=U.pop();if(lt!==B){U[0]=lt;t:for(var pt=0,Tt=U.length,I=Tt>>>1;pt<I;){var J=2*(pt+1)-1,Mt=U[J],Rt=J+1,zt=U[Rt];if(0>l(Mt,lt))Rt<Tt&&0>l(zt,Mt)?(U[pt]=zt,U[Rt]=lt,pt=Rt):(U[pt]=Mt,U[J]=lt,pt=J);else if(Rt<Tt&&0>l(zt,lt))U[pt]=zt,U[Rt]=lt,pt=Rt;else break t}}return B}function l(U,B){var lt=U.sortIndex-B.sortIndex;return lt!==0?lt:U.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],_=1,S=null,g=3,y=!1,T=!1,A=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(U){for(var B=i(d);B!==null;){if(B.callback===null)s(d);else if(B.startTime<=U)s(d),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(d)}}function V(U){if(A=!1,D(U),!T)if(i(m)!==null)T=!0,L||(L=!0,X());else{var B=i(d);B!==null&&H(V,B.startTime-U)}}var L=!1,P=-1,E=5,z=-1;function q(){return x?!0:!(r.unstable_now()-z<E)}function F(){if(x=!1,L){var U=r.unstable_now();z=U;var B=!0;try{t:{T=!1,A&&(A=!1,C(P),P=-1),y=!0;var lt=g;try{e:{for(D(U),S=i(m);S!==null&&!(S.expirationTime>U&&q());){var pt=S.callback;if(typeof pt=="function"){S.callback=null,g=S.priorityLevel;var Tt=pt(S.expirationTime<=U);if(U=r.unstable_now(),typeof Tt=="function"){S.callback=Tt,D(U),B=!0;break e}S===i(m)&&s(m),D(U)}else s(m);S=i(m)}if(S!==null)B=!0;else{var I=i(d);I!==null&&H(V,I.startTime-U),B=!1}}break t}finally{S=null,g=lt,y=!1}B=void 0}}finally{B?X():L=!1}}}var X;if(typeof O=="function")X=function(){O(F)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ct=st.port2;st.port1.onmessage=F,X=function(){ct.postMessage(null)}}else X=function(){v(F,0)};function H(U,B){P=v(function(){U(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(U){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var lt=g;g=B;try{return U()}finally{g=lt}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var lt=g;g=U;try{return B()}finally{g=lt}},r.unstable_scheduleCallback=function(U,B,lt){var pt=r.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?pt+lt:pt):lt=pt,U){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=lt+Tt,U={id:_++,callback:B,priorityLevel:U,startTime:lt,expirationTime:Tt,sortIndex:-1},lt>pt?(U.sortIndex=lt,t(d,U),i(m)===null&&U===i(d)&&(A?(C(P),P=-1):A=!0,H(V,lt-pt))):(U.sortIndex=Tt,t(m,U),T||y||(T=!0,L||(L=!0,X()))),U},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(U){var B=g;return function(){var lt=g;g=B;try{return U.apply(this,arguments)}finally{g=lt}}}})(Xh)),Xh}var v_;function KS(){return v_||(v_=1,kh.exports=ZS()),kh.exports}var qh={exports:{}},gi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function QS(){if(x_)return gi;x_=1;var r=Sp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:d,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return gi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,gi.createPortal=function(m,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,_)},gi.flushSync=function(m){var d=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=_,s.d.f()}},gi.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},gi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},gi.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var _=d.as,S=p(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},gi.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},gi.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,S=p(_,d.crossOrigin);s.d.L(m,_,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},gi.preloadModule=function(m,d){if(typeof m=="string")if(d){var _=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},gi.requestFormReset=function(m){s.d.r(m)},gi.unstable_batchedUpdates=function(m,d){return m(d)},gi.useFormState=function(m,d,_){return h.H.useFormState(m,d,_)},gi.useFormStatus=function(){return h.H.useHostTransitionStatus()},gi.version="19.2.7",gi}var S_;function JS(){if(S_)return qh.exports;S_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),qh.exports=QS(),qh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function $S(){if(M_)return Nl;M_=1;var r=KS(),t=Sp(),i=JS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,w=u.child;w;){if(w===a){M=!0,a=u,o=f;break}if(w===o){M=!0,o=u,a=f;break}w=w.sibling}if(!M){for(w=f.child;w;){if(w===a){M=!0,a=f,o=u;break}if(w===o){M=!0,o=f,a=u;break}w=w.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case v:return"Profiler";case x:return"StrictMode";case V:return"Suspense";case L:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case O:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case E:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var H=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},pt=[],Tt=-1;function I(e){return{current:e}}function J(e){0>Tt||(e.current=pt[Tt],pt[Tt]=null,Tt--)}function Mt(e,n){Tt++,pt[Tt]=e.current,e.current=n}var Rt=I(null),zt=I(null),rt=I(null),bt=I(null);function At(e,n){switch(Mt(rt,n),Mt(zt,e),Mt(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?zg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=zg(n),e=Ig(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(Rt),Mt(Rt,e)}function Ct(){J(Rt),J(zt),J(rt)}function ee(e){e.memoizedState!==null&&Mt(bt,e);var n=Rt.current,a=Ig(n,e.type);n!==a&&(Mt(zt,e),Mt(Rt,a))}function Qt(e){zt.current===e&&(J(Rt),J(zt)),bt.current===e&&(J(bt),Al._currentValue=lt)}var De,ge;function ve(e){if(De===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);De=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+De+e+ge}var Oe=!1;function fe(e,n){if(!e||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ut){var ot=ut}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ut){ot=ut}e.call(yt.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],w=f[1];if(M&&w){var G=M.split(`
`),it=w.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===it.length)for(o=G.length-1,u=it.length-1;1<=o&&0<=u&&G[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==it[u]){var _t=`
`+G[o].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=o&&0<=u);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ve(a):""}function Sn(e,n){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve("Lazy");case 13:return e.child!==n&&n!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return fe(e.type,!1);case 11:return fe(e.type.render,!1);case 1:return fe(e.type,!0);case 31:return ve("Activity");default:return""}}function rn(e){try{var n="",a=null;do n+=Sn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Bn=Object.prototype.hasOwnProperty,Y=r.unstable_scheduleCallback,Mn=r.unstable_cancelCallback,Se=r.unstable_shouldYield,Je=r.unstable_requestPaint,Dt=r.unstable_now,pn=r.unstable_getCurrentPriorityLevel,N=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,vt=r.unstable_LowPriority,Et=r.unstable_IdlePriority,Lt=r.log,Ft=r.unstable_setDisableYieldValue,ft=null,ht=null;function Bt(e){if(typeof Lt=="function"&&Ft(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ft,e)}catch{}}var Vt=Math.clz32?Math.clz32:oe,Nt=Math.log,Ot=Math.LN2;function oe(e){return e>>>=0,e===0?32:31-(Nt(e)/Ot|0)|0}var le=256,Ee=262144,k=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~f,o!==0?u=wt(o):(M&=w,M!==0?u=wt(M):a||(a=w&~e,a!==0&&(u=wt(a))))):(w=o&~f,w!==0?u=wt(w):M!==0?u=wt(M):a||(a=o&~e,a!==0&&(u=wt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function kt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function gt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $(){var e=k;return k<<=1,(k&62914560)===0&&(k=4194304),e}function dt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function he(e,n,a,o,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,G=e.expirationTimes,it=e.hiddenUpdates;for(a=M&~a;0<a;){var _t=31-Vt(a),yt=1<<_t;w[_t]=0,G[_t]=-1;var ot=it[_t];if(ot!==null)for(it[_t]=null,_t=0;_t<ot.length;_t++){var ut=ot[_t];ut!==null&&(ut.lane&=-536870913)}a&=~yt}o!==0&&ae(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function ae(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Vt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function on(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Vt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ze(e,n){var a=n&-n;return a=(a&42)!==0?1:nn(a),(a&(e.suspendedLanes|n))!==0?0:a}function nn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ti(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:r_(e.type))}function ai(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var yn=Math.random().toString(36).slice(2),Ne="__reactFiber$"+yn,mn="__reactProps$"+yn,hi="__reactContainer$"+yn,di="__reactEvents$"+yn,bs="__reactListeners$"+yn,sr="__reactHandles$"+yn,$e="__reactResources$"+yn,Bi="__reactMarker$"+yn;function Wa(e){delete e[Ne],delete e[mn],delete e[di],delete e[bs],delete e[sr]}function pa(e){var n=e[Ne];if(n)return n;for(var a=e.parentNode;a;){if(n=a[hi]||a[Ne]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Xg(e);e!==null;){if(a=e[Ne])return a;e=Xg(e)}return n}e=a,a=e.parentNode}return null}function ma(e){if(e=e[Ne]||e[hi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ea(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Vi(e){var n=e[$e];return n||(n=e[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Un(e){e[Bi]=!0}var rr=new Set,R={};function j(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(R[e]=n,e=0;e<n.length;e++)rr.add(n[e])}var tt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},Ht={};function Yt(e){return Bn.call(Ht,e)?!0:Bn.call(et,e)?!1:tt.test(e)?Ht[e]=!0:(et[e]=!0,!1)}function Gt(e,n,a){if(Yt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Zt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function jt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pe(e){if(!e._valueTracker){var n=de(e)?"checked":"value";e._valueTracker=Jt(e,n,""+e[n])}}function gn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=de(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function an(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ke=/[\n"\\]/g;function Xe(e){return e.replace(ke,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Wt(e,n,a,o,u,f,M,w){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+te(n)):e.value!==""+te(n)&&(e.value=""+te(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Re(e,M,te(n)):a!=null?Re(e,M,te(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+te(w):e.removeAttribute("name")}function Ln(e,n,a,o,u,f,M,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Pe(e);return}a=a!=null?""+te(a):"",n=n!=null?""+te(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),Pe(e)}function Re(e,n,a){n==="number"&&an(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Tn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+te(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function bi(e,n,a){if(n!=null&&(n=""+te(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+te(a):""}function Gi(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(H(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=te(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Pe(e)}function ti(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ge=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ge.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Di(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&bn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&bn(e,f,n[f])}function qe(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ei=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ga=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Aa(e){return ga.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var Xt=null;function Me(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var se=null,He=null;function Cn(e){var n=ma(e);if(n&&(e=n.stateNode)){var a=e[mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Wt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[mn]||null;if(!u)throw Error(s(90));Wt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&gn(o)}break t;case"textarea":bi(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Tn(e,!!a.multiple,n,!1)}}}var Vn=!1;function Rn(e,n,a){if(Vn)return e(n,a);Vn=!0;try{var o=e(n);return o}finally{if(Vn=!1,(se!==null||He!==null)&&(Lc(),se&&(n=se,e=He,He=se=null,Cn(n),e)))for(n=0;n<e.length;n++)Cn(e[n])}}function Dn(e,n){var a=e.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gn=!1;if(Kn)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Gn=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Gn=!1}var ei=null,si=null,Ra=null;function Kl(){if(Ra)return Ra;var e,n=si,a=n.length,o,u="value"in ei?ei.value:ei.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return Ra=u.slice(e,1<o?1-o:void 0)}function Br(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Vr(){return!0}function qo(){return!1}function pi(e){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Vr:qo,this.isPropagationStopped=qo,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},isPersistent:Vr}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gr=pi(Ya),or=S({},Ya,{view:0,detail:0}),Es=pi(or),As,lr,Hr,ye=S({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ce,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(As=e.screenX-Hr.screenX,lr=e.screenY-Hr.screenY):lr=As=0,Hr=e),As)},movementY:function(e){return"movementY"in e?e.movementY:lr}}),tn=pi(ye),It=S({},ye,{dataTransfer:0}),Xn=pi(It),Hi=S({},or,{relatedTarget:0}),mi=pi(Hi),ki=S({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),kr=pi(ki),wa=S({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rs=pi(wa),Vp=S({},Ya,{data:0}),cr=pi(Vp),Wo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ql={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pe(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xr[e])?!!n[e]:!1}function ce(){return pe}var We=S({},or,{key:function(e){if(e.key){var n=Wo[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ql[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ce,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ze=pi(We),ne=S({},ye,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ai=pi(ne),ja=S({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ce}),Za=pi(ja),Xi=S({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),On=pi(Xi),Ca=S({},ye,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gp=pi(Ca),hx=S({},Ya,{newState:0,oldState:0}),dx=pi(hx),px=[9,13,27,32],qu=Kn&&"CompositionEvent"in window,Yo=null;Kn&&"documentMode"in document&&(Yo=document.documentMode);var mx=Kn&&"TextEvent"in window&&!Yo,Hp=Kn&&(!qu||Yo&&8<Yo&&11>=Yo),kp=" ",Xp=!1;function qp(e,n){switch(e){case"keyup":return px.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qr=!1;function gx(e,n){switch(e){case"compositionend":return Wp(n);case"keypress":return n.which!==32?null:(Xp=!0,kp);case"textInput":return e=n.data,e===kp&&Xp?null:e;default:return null}}function _x(e,n){if(qr)return e==="compositionend"||!qu&&qp(e,n)?(e=Kl(),Ra=si=ei=null,qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hp&&n.locale!=="ko"?null:n.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!vx[e.type]:n==="textarea"}function jp(e,n,a,o){se?He?He.push(o):He=[o]:se=o,n=Vc(n,"onChange"),0<n.length&&(a=new Gr("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var jo=null,Zo=null;function xx(e){Dg(e,0)}function Jl(e){var n=Ea(e);if(gn(n))return e}function Zp(e,n){if(e==="change")return n}var Kp=!1;if(Kn){var Wu;if(Kn){var Yu="oninput"in document;if(!Yu){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),Yu=typeof Qp.oninput=="function"}Wu=Yu}else Wu=!1;Kp=Wu&&(!document.documentMode||9<document.documentMode)}function Jp(){jo&&(jo.detachEvent("onpropertychange",$p),Zo=jo=null)}function $p(e){if(e.propertyName==="value"&&Jl(Zo)){var n=[];jp(n,Zo,e,Me(e)),Rn(xx,n)}}function Sx(e,n,a){e==="focusin"?(Jp(),jo=n,Zo=a,jo.attachEvent("onpropertychange",$p)):e==="focusout"&&Jp()}function Mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jl(Zo)}function yx(e,n){if(e==="click")return Jl(n)}function Tx(e,n){if(e==="input"||e==="change")return Jl(n)}function bx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qi=typeof Object.is=="function"?Object.is:bx;function Ko(e,n){if(qi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Bn.call(n,u)||!qi(e[u],n[u]))return!1}return!0}function tm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function em(e,n){var a=tm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=tm(a)}}function nm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?nm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function im(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=an(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=an(e.document)}return n}function ju(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ex=Kn&&"documentMode"in document&&11>=document.documentMode,Wr=null,Zu=null,Qo=null,Ku=!1;function am(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ku||Wr==null||Wr!==an(o)||(o=Wr,"selectionStart"in o&&ju(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qo&&Ko(Qo,o)||(Qo=o,o=Vc(Zu,"onSelect"),0<o.length&&(n=new Gr("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Wr)))}function ur(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Yr={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionrun:ur("Transition","TransitionRun"),transitionstart:ur("Transition","TransitionStart"),transitioncancel:ur("Transition","TransitionCancel"),transitionend:ur("Transition","TransitionEnd")},Qu={},sm={};Kn&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function fr(e){if(Qu[e])return Qu[e];if(!Yr[e])return e;var n=Yr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in sm)return Qu[e]=n[a];return e}var rm=fr("animationend"),om=fr("animationiteration"),lm=fr("animationstart"),Ax=fr("transitionrun"),Rx=fr("transitionstart"),wx=fr("transitioncancel"),cm=fr("transitionend"),um=new Map,Ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ju.push("scrollEnd");function _a(e,n){um.set(e,n),j(n,[e])}var $l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ia=[],jr=0,$u=0;function tc(){for(var e=jr,n=$u=jr=0;n<e;){var a=ia[n];ia[n++]=null;var o=ia[n];ia[n++]=null;var u=ia[n];ia[n++]=null;var f=ia[n];if(ia[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&fm(a,u,f)}}function ec(e,n,a,o){ia[jr++]=e,ia[jr++]=n,ia[jr++]=a,ia[jr++]=o,$u|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function tf(e,n,a,o){return ec(e,n,a,o),nc(e)}function hr(e,n){return ec(e,null,null,n),nc(e)}function fm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Vt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function nc(e){if(50<xl)throw xl=0,uh=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zr={};function Cx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wi(e,n,a,o){return new Cx(e,n,a,o)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ka(e,n){var a=e.alternate;return a===null?(a=Wi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function hm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ic(e,n,a,o,u,f){var M=0;if(o=e,typeof e=="function")ef(e)&&(M=1);else if(typeof e=="string")M=OS(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case z:return e=Wi(31,a,n,u),e.elementType=z,e.lanes=f,e;case A:return dr(a.children,u,f,n);case x:M=8,u|=24;break;case v:return e=Wi(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case V:return e=Wi(13,a,n,u),e.elementType=V,e.lanes=f,e;case L:return e=Wi(19,a,n,u),e.elementType=L,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:M=10;break t;case C:M=9;break t;case D:M=11;break t;case P:M=14;break t;case E:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Wi(M,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function dr(e,n,a,o){return e=Wi(7,e,o,n),e.lanes=a,e}function nf(e,n,a){return e=Wi(6,e,null,n),e.lanes=a,e}function dm(e){var n=Wi(18,null,null,0);return n.stateNode=e,n}function af(e,n,a){return n=Wi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var pm=new WeakMap;function aa(e,n){if(typeof e=="object"&&e!==null){var a=pm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rn(n)},pm.set(e,n),n)}return{value:e,source:n,stack:rn(n)}}var Kr=[],Qr=0,ac=null,Jo=0,sa=[],ra=0,ws=null,Da=1,Na="";function Qa(e,n){Kr[Qr++]=Jo,Kr[Qr++]=ac,ac=e,Jo=n}function mm(e,n,a){sa[ra++]=Da,sa[ra++]=Na,sa[ra++]=ws,ws=e;var o=Da;e=Na;var u=32-Vt(o)-1;o&=~(1<<u),a+=1;var f=32-Vt(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Da=1<<32-Vt(n)+u|a<<u|o,Na=f+e}else Da=1<<f|a<<u|o,Na=e}function sf(e){e.return!==null&&(Qa(e,1),mm(e,1,0))}function rf(e){for(;e===ac;)ac=Kr[--Qr],Kr[Qr]=null,Jo=Kr[--Qr],Kr[Qr]=null;for(;e===ws;)ws=sa[--ra],sa[ra]=null,Na=sa[--ra],sa[ra]=null,Da=sa[--ra],sa[ra]=null}function gm(e,n){sa[ra++]=Da,sa[ra++]=Na,sa[ra++]=ws,Da=n.id,Na=n.overflow,ws=e}var ri=null,En=null,Ie=!1,Cs=null,oa=!1,of=Error(s(519));function Ds(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $o(aa(n,e)),of}function _m(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ne]=e,n[mn]=o,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<Ml.length;a++)Ce(Ml[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),Gi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Og(n.textContent,a)?(o.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),o.onScroll!=null&&Ce("scroll",n),o.onScrollEnd!=null&&Ce("scrollend",n),o.onClick!=null&&(n.onclick=na),n=!0):n=!1,n||Ds(e,!0)}function vm(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 31:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:ri=ri.return}}function Jr(e){if(e!==ri)return!1;if(!Ie)return vm(e),Ie=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Eh(e.type,e.memoizedProps)),a=!a),a&&En&&Ds(e),vm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));En=kg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));En=kg(e)}else n===27?(n=En,Xs(e.type)?(e=Dh,Dh=null,En=e):En=n):En=ri?ca(e.stateNode.nextSibling):null;return!0}function pr(){En=ri=null,Ie=!1}function lf(){var e=Cs;return e!==null&&(Oi===null?Oi=e:Oi.push.apply(Oi,e),Cs=null),e}function $o(e){Cs===null?Cs=[e]:Cs.push(e)}var cf=I(null),mr=null,Ja=null;function Ns(e,n,a){Mt(cf,n._currentValue),n._currentValue=a}function $a(e){e._currentValue=cf.current,J(cf)}function uf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function ff(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var w=f;f=u;for(var G=0;G<n.length;G++)if(w.context===n[G]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),uf(f.return,a,e),o||(M=null);break t}f=w.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),uf(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function $r(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var w=u.type;qi(u.pendingProps.value,M.value)||(e!==null?e.push(w):e=[w])}}else if(u===bt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Al):e=[Al])}u=u.return}e!==null&&ff(n,e,a,o),n.flags|=262144}function sc(e){for(e=e.firstContext;e!==null;){if(!qi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gr(e){mr=e,Ja=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oi(e){return xm(mr,e)}function rc(e,n){return mr===null&&gr(e),xm(e,n)}function xm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ja===null){if(e===null)throw Error(s(308));Ja=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ja=Ja.next=n;return a}var Dx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Nx=r.unstable_scheduleCallback,Ux=r.unstable_NormalPriority,qn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new Dx,data:new Map,refCount:0}}function tl(e){e.refCount--,e.refCount===0&&Nx(Ux,function(){e.controller.abort()})}var el=null,df=0,to=0,eo=null;function Lx(e,n){if(el===null){var a=el=[];df=0,to=gh(),eo={status:"pending",value:void 0,then:function(o){a.push(o)}}}return df++,n.then(Sm,Sm),n}function Sm(){if(--df===0&&el!==null){eo!==null&&(eo.status="fulfilled");var e=el;el=null,to=0,eo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ox(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Mm=U.S;U.S=function(e,n){ag=Dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Lx(e,n),Mm!==null&&Mm(e,n)};var _r=I(null);function pf(){var e=_r.current;return e!==null?e:_n.pooledCache}function oc(e,n){n===null?Mt(_r,_r.current):Mt(_r,n.pool)}function ym(){var e=pf();return e===null?null:{parent:qn._currentValue,pool:e}}var no=Error(s(460)),mf=Error(s(474)),lc=Error(s(542)),cc={then:function(){}};function Tm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(na,na),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Am(e),e;default:if(typeof n.status=="string")n.then(na,na);else{if(e=_n,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Am(e),e}throw xr=n,no}}function vr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xr=a,no):a}}var xr=null;function Em(){if(xr===null)throw Error(s(459));var e=xr;return xr=null,e}function Am(e){if(e===no||e===lc)throw Error(s(483))}var io=null,nl=0;function uc(e){var n=nl;return nl+=1,io===null&&(io=[]),bm(io,e,n)}function il(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function fc(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Rm(e){function n(K,W){if(e){var nt=K.deletions;nt===null?(K.deletions=[W],K.flags|=16):nt.push(W)}}function a(K,W){if(!e)return null;for(;W!==null;)n(K,W),W=W.sibling;return null}function o(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function u(K,W){return K=Ka(K,W),K.index=0,K.sibling=null,K}function f(K,W,nt){return K.index=nt,e?(nt=K.alternate,nt!==null?(nt=nt.index,nt<W?(K.flags|=67108866,W):nt):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function M(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function w(K,W,nt,xt){return W===null||W.tag!==6?(W=nf(nt,K.mode,xt),W.return=K,W):(W=u(W,nt),W.return=K,W)}function G(K,W,nt,xt){var ie=nt.type;return ie===A?_t(K,W,nt.props.children,xt,nt.key):W!==null&&(W.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===E&&vr(ie)===W.type)?(W=u(W,nt.props),il(W,nt),W.return=K,W):(W=ic(nt.type,nt.key,nt.props,null,K.mode,xt),il(W,nt),W.return=K,W)}function it(K,W,nt,xt){return W===null||W.tag!==4||W.stateNode.containerInfo!==nt.containerInfo||W.stateNode.implementation!==nt.implementation?(W=af(nt,K.mode,xt),W.return=K,W):(W=u(W,nt.children||[]),W.return=K,W)}function _t(K,W,nt,xt,ie){return W===null||W.tag!==7?(W=dr(nt,K.mode,xt,ie),W.return=K,W):(W=u(W,nt),W.return=K,W)}function yt(K,W,nt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=nf(""+W,K.mode,nt),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return nt=ic(W.type,W.key,W.props,null,K.mode,nt),il(nt,W),nt.return=K,nt;case T:return W=af(W,K.mode,nt),W.return=K,W;case E:return W=vr(W),yt(K,W,nt)}if(H(W)||X(W))return W=dr(W,K.mode,nt,null),W.return=K,W;if(typeof W.then=="function")return yt(K,uc(W),nt);if(W.$$typeof===O)return yt(K,rc(K,W),nt);fc(K,W)}return null}function ot(K,W,nt,xt){var ie=W!==null?W.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ie!==null?null:w(K,W,""+nt,xt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:return nt.key===ie?G(K,W,nt,xt):null;case T:return nt.key===ie?it(K,W,nt,xt):null;case E:return nt=vr(nt),ot(K,W,nt,xt)}if(H(nt)||X(nt))return ie!==null?null:_t(K,W,nt,xt,null);if(typeof nt.then=="function")return ot(K,W,uc(nt),xt);if(nt.$$typeof===O)return ot(K,W,rc(K,nt),xt);fc(K,nt)}return null}function ut(K,W,nt,xt,ie){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return K=K.get(nt)||null,w(W,K,""+xt,ie);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case y:return K=K.get(xt.key===null?nt:xt.key)||null,G(W,K,xt,ie);case T:return K=K.get(xt.key===null?nt:xt.key)||null,it(W,K,xt,ie);case E:return xt=vr(xt),ut(K,W,nt,xt,ie)}if(H(xt)||X(xt))return K=K.get(nt)||null,_t(W,K,xt,ie,null);if(typeof xt.then=="function")return ut(K,W,nt,uc(xt),ie);if(xt.$$typeof===O)return ut(K,W,nt,rc(W,xt),ie);fc(W,xt)}return null}function Kt(K,W,nt,xt){for(var ie=null,Ke=null,$t=W,Te=W=0,Le=null;$t!==null&&Te<nt.length;Te++){$t.index>Te?(Le=$t,$t=null):Le=$t.sibling;var Qe=ot(K,$t,nt[Te],xt);if(Qe===null){$t===null&&($t=Le);break}e&&$t&&Qe.alternate===null&&n(K,$t),W=f(Qe,W,Te),Ke===null?ie=Qe:Ke.sibling=Qe,Ke=Qe,$t=Le}if(Te===nt.length)return a(K,$t),Ie&&Qa(K,Te),ie;if($t===null){for(;Te<nt.length;Te++)$t=yt(K,nt[Te],xt),$t!==null&&(W=f($t,W,Te),Ke===null?ie=$t:Ke.sibling=$t,Ke=$t);return Ie&&Qa(K,Te),ie}for($t=o($t);Te<nt.length;Te++)Le=ut($t,K,Te,nt[Te],xt),Le!==null&&(e&&Le.alternate!==null&&$t.delete(Le.key===null?Te:Le.key),W=f(Le,W,Te),Ke===null?ie=Le:Ke.sibling=Le,Ke=Le);return e&&$t.forEach(function(Zs){return n(K,Zs)}),Ie&&Qa(K,Te),ie}function re(K,W,nt,xt){if(nt==null)throw Error(s(151));for(var ie=null,Ke=null,$t=W,Te=W=0,Le=null,Qe=nt.next();$t!==null&&!Qe.done;Te++,Qe=nt.next()){$t.index>Te?(Le=$t,$t=null):Le=$t.sibling;var Zs=ot(K,$t,Qe.value,xt);if(Zs===null){$t===null&&($t=Le);break}e&&$t&&Zs.alternate===null&&n(K,$t),W=f(Zs,W,Te),Ke===null?ie=Zs:Ke.sibling=Zs,Ke=Zs,$t=Le}if(Qe.done)return a(K,$t),Ie&&Qa(K,Te),ie;if($t===null){for(;!Qe.done;Te++,Qe=nt.next())Qe=yt(K,Qe.value,xt),Qe!==null&&(W=f(Qe,W,Te),Ke===null?ie=Qe:Ke.sibling=Qe,Ke=Qe);return Ie&&Qa(K,Te),ie}for($t=o($t);!Qe.done;Te++,Qe=nt.next())Qe=ut($t,K,Te,Qe.value,xt),Qe!==null&&(e&&Qe.alternate!==null&&$t.delete(Qe.key===null?Te:Qe.key),W=f(Qe,W,Te),Ke===null?ie=Qe:Ke.sibling=Qe,Ke=Qe);return e&&$t.forEach(function(qS){return n(K,qS)}),Ie&&Qa(K,Te),ie}function dn(K,W,nt,xt){if(typeof nt=="object"&&nt!==null&&nt.type===A&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:t:{for(var ie=nt.key;W!==null;){if(W.key===ie){if(ie=nt.type,ie===A){if(W.tag===7){a(K,W.sibling),xt=u(W,nt.props.children),xt.return=K,K=xt;break t}}else if(W.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===E&&vr(ie)===W.type){a(K,W.sibling),xt=u(W,nt.props),il(xt,nt),xt.return=K,K=xt;break t}a(K,W);break}else n(K,W);W=W.sibling}nt.type===A?(xt=dr(nt.props.children,K.mode,xt,nt.key),xt.return=K,K=xt):(xt=ic(nt.type,nt.key,nt.props,null,K.mode,xt),il(xt,nt),xt.return=K,K=xt)}return M(K);case T:t:{for(ie=nt.key;W!==null;){if(W.key===ie)if(W.tag===4&&W.stateNode.containerInfo===nt.containerInfo&&W.stateNode.implementation===nt.implementation){a(K,W.sibling),xt=u(W,nt.children||[]),xt.return=K,K=xt;break t}else{a(K,W);break}else n(K,W);W=W.sibling}xt=af(nt,K.mode,xt),xt.return=K,K=xt}return M(K);case E:return nt=vr(nt),dn(K,W,nt,xt)}if(H(nt))return Kt(K,W,nt,xt);if(X(nt)){if(ie=X(nt),typeof ie!="function")throw Error(s(150));return nt=ie.call(nt),re(K,W,nt,xt)}if(typeof nt.then=="function")return dn(K,W,uc(nt),xt);if(nt.$$typeof===O)return dn(K,W,rc(K,nt),xt);fc(K,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,W!==null&&W.tag===6?(a(K,W.sibling),xt=u(W,nt),xt.return=K,K=xt):(a(K,W),xt=nf(nt,K.mode,xt),xt.return=K,K=xt),M(K)):a(K,W)}return function(K,W,nt,xt){try{nl=0;var ie=dn(K,W,nt,xt);return io=null,ie}catch($t){if($t===no||$t===lc)throw $t;var Ke=Wi(29,$t,null,K.mode);return Ke.lanes=xt,Ke.return=K,Ke}finally{}}}var Sr=Rm(!0),wm=Rm(!1),Us=!1;function gf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _f(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ls(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Os(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(en&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=nc(e),fm(e,null,a),n}return ec(e,o,n,a),nc(e)}function al(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,on(e,a)}}function vf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var xf=!1;function sl(){if(xf){var e=eo;if(e!==null)throw e}}function rl(e,n,a,o){xf=!1;var u=e.updateQueue;Us=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var G=w,it=G.next;G.next=null,M===null?f=it:M.next=it,M=G;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,w=_t.lastBaseUpdate,w!==M&&(w===null?_t.firstBaseUpdate=it:w.next=it,_t.lastBaseUpdate=G))}if(f!==null){var yt=u.baseState;M=0,_t=it=G=null,w=f;do{var ot=w.lane&-536870913,ut=ot!==w.lane;if(ut?(Ue&ot)===ot:(o&ot)===ot){ot!==0&&ot===to&&(xf=!0),_t!==null&&(_t=_t.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Kt=e,re=w;ot=n;var dn=a;switch(re.tag){case 1:if(Kt=re.payload,typeof Kt=="function"){yt=Kt.call(dn,yt,ot);break t}yt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=re.payload,ot=typeof Kt=="function"?Kt.call(dn,yt,ot):Kt,ot==null)break t;yt=S({},yt,ot);break t;case 2:Us=!0}}ot=w.callback,ot!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:w.tag,payload:w.payload,callback:w.callback,next:null},_t===null?(it=_t=ut,G=yt):_t=_t.next=ut,M|=ot;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ut=w,w=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);_t===null&&(G=yt),u.baseState=G,u.firstBaseUpdate=it,u.lastBaseUpdate=_t,f===null&&(u.shared.lanes=0),Bs|=M,e.lanes=M,e.memoizedState=yt}}function Cm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Dm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Cm(a[e],n)}var ao=I(null),hc=I(0);function Nm(e,n){e=ls,Mt(hc,e),Mt(ao,n),ls=e|n.baseLanes}function Sf(){Mt(hc,ls),Mt(ao,ao.current)}function Mf(){ls=hc.current,J(ao),J(hc)}var Yi=I(null),la=null;function Ps(e){var n=e.alternate;Mt(Hn,Hn.current&1),Mt(Yi,e),la===null&&(n===null||ao.current!==null||n.memoizedState!==null)&&(la=e)}function yf(e){Mt(Hn,Hn.current),Mt(Yi,e),la===null&&(la=e)}function Um(e){e.tag===22?(Mt(Hn,Hn.current),Mt(Yi,e),la===null&&(la=e)):zs()}function zs(){Mt(Hn,Hn.current),Mt(Yi,Yi.current)}function ji(e){J(Yi),la===e&&(la=null),J(Hn)}var Hn=I(0);function dc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wh(a)||Ch(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ts=0,xe=null,fn=null,Wn=null,pc=!1,so=!1,Mr=!1,mc=0,ol=0,ro=null,Px=0;function Pn(){throw Error(s(321))}function Tf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qi(e[a],n[a]))return!1;return!0}function bf(e,n,a,o,u,f){return ts=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?m0:Bf,Mr=!1,f=a(o,u),Mr=!1,so&&(f=Om(n,a,o,u)),Lm(e),f}function Lm(e){U.H=ul;var n=fn!==null&&fn.next!==null;if(ts=0,Wn=fn=xe=null,pc=!1,ol=0,ro=null,n)throw Error(s(300));e===null||Yn||(e=e.dependencies,e!==null&&sc(e)&&(Yn=!0))}function Om(e,n,a,o){xe=e;var u=0;do{if(so&&(ro=null),ol=0,so=!1,25<=u)throw Error(s(301));if(u+=1,Wn=fn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=g0,f=n(a,o)}while(so);return f}function zx(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?ll(n):n,e=e.useState()[0],(fn!==null?fn.memoizedState:null)!==e&&(xe.flags|=1024),n}function Ef(){var e=mc!==0;return mc=0,e}function Af(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Rf(e){if(pc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}pc=!1}ts=0,Wn=fn=xe=null,so=!1,ol=mc=0,ro=null}function Ri(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wn===null?xe.memoizedState=Wn=e:Wn=Wn.next=e,Wn}function kn(){if(fn===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=fn.next;var n=Wn===null?xe.memoizedState:Wn.next;if(n!==null)Wn=n,fn=e;else{if(e===null)throw xe.alternate===null?Error(s(467)):Error(s(310));fn=e,e={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},Wn===null?xe.memoizedState=Wn=e:Wn=Wn.next=e}return Wn}function gc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(e){var n=ol;return ol+=1,ro===null&&(ro=[]),e=bm(ro,e,n),n=xe,(Wn===null?n.memoizedState:Wn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?m0:Bf),e}function _c(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ll(e);if(e.$$typeof===O)return oi(e)}throw Error(s(438,String(e)))}function wf(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=gc(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=q;return n.index++,a}function es(e,n){return typeof n=="function"?n(e):n}function vc(e){var n=kn();return Cf(n,fn,e)}function Cf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var w=M=null,G=null,it=n,_t=!1;do{var yt=it.lane&-536870913;if(yt!==it.lane?(Ue&yt)===yt:(ts&yt)===yt){var ot=it.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),yt===to&&(_t=!0);else if((ts&ot)===ot){it=it.next,ot===to&&(_t=!0);continue}else yt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(w=G=yt,M=f):G=G.next=yt,xe.lanes|=ot,Bs|=ot;yt=it.action,Mr&&a(f,yt),f=it.hasEagerState?it.eagerState:a(f,yt)}else ot={lane:yt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(w=G=ot,M=f):G=G.next=ot,xe.lanes|=yt,Bs|=yt;it=it.next}while(it!==null&&it!==n);if(G===null?M=f:G.next=w,!qi(f,e.memoizedState)&&(Yn=!0,_t&&(a=eo,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Df(e){var n=kn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);qi(f,n.memoizedState)||(Yn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Pm(e,n,a){var o=xe,u=kn(),f=Ie;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!qi((fn||u).memoizedState,a);if(M&&(u.memoizedState=a,Yn=!0),u=u.queue,Lf(Fm.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||Wn!==null&&Wn.memoizedState.tag&1){if(o.flags|=2048,oo(9,{destroy:void 0},Im.bind(null,o,u,a,n),null),_n===null)throw Error(s(349));f||(ts&127)!==0||zm(o,n,a)}return a}function zm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=gc(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Im(e,n,a,o){n.value=a,n.getSnapshot=o,Bm(n)&&Vm(e)}function Fm(e,n,a){return a(function(){Bm(n)&&Vm(e)})}function Bm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qi(e,a)}catch{return!0}}function Vm(e){var n=hr(e,2);n!==null&&Pi(n,e,2)}function Nf(e){var n=Ri();if(typeof e=="function"){var a=e;if(e=a(),Mr){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:e},n}function Gm(e,n,a,o){return e.baseState=a,Cf(e,fn,typeof o=="function"?o:es)}function Ix(e,n,a,o,u){if(Mc(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};U.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Hm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=U.T,M={};U.T=M;try{var w=a(u,o),G=U.S;G!==null&&G(M,w),km(e,n,w)}catch(it){Uf(e,n,it)}finally{f!==null&&M.types!==null&&(f.types=M.types),U.T=f}}else try{f=a(u,o),km(e,n,f)}catch(it){Uf(e,n,it)}}function km(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Xm(e,n,o)},function(o){return Uf(e,n,o)}):Xm(e,n,a)}function Xm(e,n,a){n.status="fulfilled",n.value=a,qm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Hm(e,a)))}function Uf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,qm(n),n=n.next;while(n!==o)}e.action=null}function qm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Wm(e,n){return n}function Ym(e,n){if(Ie){var a=_n.formState;if(a!==null){t:{var o=xe;if(Ie){if(En){e:{for(var u=En,f=oa;u.nodeType!==8;){if(!f){u=null;break e}if(u=ca(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){En=ca(u.nextSibling),o=u.data==="F!";break t}}Ds(o)}o=!1}o&&(n=a[0])}}return a=Ri(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wm,lastRenderedState:n},a.queue=o,a=h0.bind(null,xe,o),o.dispatch=a,o=Nf(!1),f=Ff.bind(null,xe,!1,o.queue),o=Ri(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Ix.bind(null,xe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function jm(e){var n=kn();return Zm(n,fn,e)}function Zm(e,n,a){if(n=Cf(e,n,Wm)[0],e=vc(es)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ll(n)}catch(M){throw M===no?lc:M}else o=n;n=kn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,oo(9,{destroy:void 0},Fx.bind(null,u,a),null)),[o,f,e]}function Fx(e,n){e.action=n}function Km(e){var n=kn(),a=fn;if(a!==null)return Zm(n,a,e);kn(),n=n.memoizedState,a=kn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function oo(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=xe.updateQueue,n===null&&(n=gc(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Qm(){return kn().memoizedState}function xc(e,n,a,o){var u=Ri();xe.flags|=e,u.memoizedState=oo(1|n,{destroy:void 0},a,o===void 0?null:o)}function Sc(e,n,a,o){var u=kn();o=o===void 0?null:o;var f=u.memoizedState.inst;fn!==null&&o!==null&&Tf(o,fn.memoizedState.deps)?u.memoizedState=oo(n,f,a,o):(xe.flags|=e,u.memoizedState=oo(1|n,f,a,o))}function Jm(e,n){xc(8390656,8,e,n)}function Lf(e,n){Sc(2048,8,e,n)}function Bx(e){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=gc(),xe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function $m(e){var n=kn().memoizedState;return Bx({ref:n,nextImpl:e}),function(){if((en&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function t0(e,n){return Sc(4,2,e,n)}function e0(e,n){return Sc(4,4,e,n)}function n0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function i0(e,n,a){a=a!=null?a.concat([e]):null,Sc(4,4,n0.bind(null,n,e),a)}function Of(){}function a0(e,n){var a=kn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Tf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function s0(e,n){var a=kn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Tf(n,o[1]))return o[0];if(o=e(),Mr){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o}function Pf(e,n,a){return a===void 0||(ts&1073741824)!==0&&(Ue&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=rg(),xe.lanes|=e,Bs|=e,a)}function r0(e,n,a,o){return qi(a,n)?a:ao.current!==null?(e=Pf(e,a,o),qi(e,n)||(Yn=!0),e):(ts&42)===0||(ts&1073741824)!==0&&(Ue&261930)===0?(Yn=!0,e.memoizedState=a):(e=rg(),xe.lanes|=e,Bs|=e,n)}function o0(e,n,a,o,u){var f=B.p;B.p=f!==0&&8>f?f:8;var M=U.T,w={};U.T=w,Ff(e,!1,n,a);try{var G=u(),it=U.S;if(it!==null&&it(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var _t=Ox(G,o);cl(e,n,_t,Qi(e))}else cl(e,n,o,Qi(e))}catch(yt){cl(e,n,{then:function(){},status:"rejected",reason:yt},Qi())}finally{B.p=f,M!==null&&w.types!==null&&(M.types=w.types),U.T=M}}function Vx(){}function zf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=l0(e).queue;o0(e,u,n,lt,a===null?Vx:function(){return c0(e),a(o)})}function l0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:lt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function c0(e){var n=l0(e);n.next===null&&(n=e.alternate.memoizedState),cl(e,n.next.queue,{},Qi())}function If(){return oi(Al)}function u0(){return kn().memoizedState}function f0(){return kn().memoizedState}function Gx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qi();e=Ls(a);var o=Os(n,e,a);o!==null&&(Pi(o,n,a),al(o,n,a)),n={cache:hf()},e.payload=n;return}n=n.return}}function Hx(e,n,a){var o=Qi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Mc(e)?d0(n,a):(a=tf(e,n,a,o),a!==null&&(Pi(a,e,o),p0(a,n,o)))}function h0(e,n,a){var o=Qi();cl(e,n,a,o)}function cl(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mc(e))d0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,w=f(M,a);if(u.hasEagerState=!0,u.eagerState=w,qi(w,M))return ec(e,n,u,0),_n===null&&tc(),!1}catch{}finally{}if(a=tf(e,n,u,o),a!==null)return Pi(a,e,o),p0(a,n,o),!0}return!1}function Ff(e,n,a,o){if(o={lane:2,revertLane:gh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Mc(e)){if(n)throw Error(s(479))}else n=tf(e,a,o,2),n!==null&&Pi(n,e,2)}function Mc(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function d0(e,n){so=pc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function p0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,on(e,a)}}var ul={readContext:oi,use:_c,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useLayoutEffect:Pn,useInsertionEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useSyncExternalStore:Pn,useId:Pn,useHostTransitionStatus:Pn,useFormState:Pn,useActionState:Pn,useOptimistic:Pn,useMemoCache:Pn,useCacheRefresh:Pn};ul.useEffectEvent=Pn;var m0={readContext:oi,use:_c,useCallback:function(e,n){return Ri().memoizedState=[e,n===void 0?null:n],e},useContext:oi,useEffect:Jm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,xc(4194308,4,n0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return xc(4194308,4,e,n)},useInsertionEffect:function(e,n){xc(4,2,e,n)},useMemo:function(e,n){var a=Ri();n=n===void 0?null:n;var o=e();if(Mr){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ri();if(a!==void 0){var u=a(n);if(Mr){Bt(!0);try{a(n)}finally{Bt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Hx.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var n=Ri();return e={current:e},n.memoizedState=e},useState:function(e){e=Nf(e);var n=e.queue,a=h0.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Of,useDeferredValue:function(e,n){var a=Ri();return Pf(a,e,n)},useTransition:function(){var e=Nf(!1);return e=o0.bind(null,xe,e.queue,!0,!1),Ri().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=xe,u=Ri();if(Ie){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),_n===null)throw Error(s(349));(Ue&127)!==0||zm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Jm(Fm.bind(null,o,f,e),[e]),o.flags|=2048,oo(9,{destroy:void 0},Im.bind(null,o,f,a,n),null),a},useId:function(){var e=Ri(),n=_n.identifierPrefix;if(Ie){var a=Na,o=Da;a=(o&~(1<<32-Vt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=mc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Px++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:If,useFormState:Ym,useActionState:Ym,useOptimistic:function(e){var n=Ri();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ff.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:wf,useCacheRefresh:function(){return Ri().memoizedState=Gx.bind(null,xe)},useEffectEvent:function(e){var n=Ri(),a={impl:e};return n.memoizedState=a,function(){if((en&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Bf={readContext:oi,use:_c,useCallback:a0,useContext:oi,useEffect:Lf,useImperativeHandle:i0,useInsertionEffect:t0,useLayoutEffect:e0,useMemo:s0,useReducer:vc,useRef:Qm,useState:function(){return vc(es)},useDebugValue:Of,useDeferredValue:function(e,n){var a=kn();return r0(a,fn.memoizedState,e,n)},useTransition:function(){var e=vc(es)[0],n=kn().memoizedState;return[typeof e=="boolean"?e:ll(e),n]},useSyncExternalStore:Pm,useId:u0,useHostTransitionStatus:If,useFormState:jm,useActionState:jm,useOptimistic:function(e,n){var a=kn();return Gm(a,fn,e,n)},useMemoCache:wf,useCacheRefresh:f0};Bf.useEffectEvent=$m;var g0={readContext:oi,use:_c,useCallback:a0,useContext:oi,useEffect:Lf,useImperativeHandle:i0,useInsertionEffect:t0,useLayoutEffect:e0,useMemo:s0,useReducer:Df,useRef:Qm,useState:function(){return Df(es)},useDebugValue:Of,useDeferredValue:function(e,n){var a=kn();return fn===null?Pf(a,e,n):r0(a,fn.memoizedState,e,n)},useTransition:function(){var e=Df(es)[0],n=kn().memoizedState;return[typeof e=="boolean"?e:ll(e),n]},useSyncExternalStore:Pm,useId:u0,useHostTransitionStatus:If,useFormState:Km,useActionState:Km,useOptimistic:function(e,n){var a=kn();return fn!==null?Gm(a,fn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wf,useCacheRefresh:f0};g0.useEffectEvent=$m;function Vf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qi(),u=Ls(o);u.payload=n,a!=null&&(u.callback=a),n=Os(e,u,o),n!==null&&(Pi(n,e,o),al(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qi(),u=Ls(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Os(e,u,o),n!==null&&(Pi(n,e,o),al(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qi(),o=Ls(a);o.tag=2,n!=null&&(o.callback=n),n=Os(e,o,a),n!==null&&(Pi(n,e,a),al(n,e,a))}};function _0(e,n,a,o,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!Ko(a,o)||!Ko(u,f):!0}function v0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Gf.enqueueReplaceState(n,n.state,null)}function yr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function x0(e){$l(e)}function S0(e){console.error(e)}function M0(e){$l(e)}function yc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function y0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Hf(e,n,a){return a=Ls(a),a.tag=3,a.payload={element:null},a.callback=function(){yc(e,n)},a}function T0(e){return e=Ls(e),e.tag=3,e}function b0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){y0(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){y0(n,a,o),typeof u!="function"&&(Vs===null?Vs=new Set([this]):Vs.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function kx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=Yi.current,a!==null){switch(a.tag){case 31:case 13:return la===null?Oc():a.alternate===null&&zn===0&&(zn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===cc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),dh(e,o,u)),!1;case 22:return a.flags|=65536,o===cc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),dh(e,o,u)),!1}throw Error(s(435,a.tag))}return dh(e,o,u),Oc(),!1}if(Ie)return n=Yi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==of&&(e=Error(s(422),{cause:o}),$o(aa(e,a)))):(o!==of&&(n=Error(s(423),{cause:o}),$o(aa(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=aa(o,a),u=Hf(e.stateNode,o,u),vf(e,u),zn!==4&&(zn=2)),!1;var f=Error(s(520),{cause:o});if(f=aa(f,a),vl===null?vl=[f]:vl.push(f),zn!==4&&(zn=2),n===null)return!0;o=aa(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Hf(a.stateNode,o,e),vf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Vs===null||!Vs.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=T0(u),b0(u,e,a,o),vf(a,u),!1}a=a.return}while(a!==null);return!1}var kf=Error(s(461)),Yn=!1;function li(e,n,a,o){n.child=e===null?wm(n,null,a,o):Sr(n,e.child,a,o)}function E0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var w in o)w!=="ref"&&(M[w]=o[w])}else M=o;return gr(n),o=bf(e,n,a,M,f,u),w=Ef(),e!==null&&!Yn?(Af(e,n,u),ns(e,n,u)):(Ie&&w&&sf(n),n.flags|=1,li(e,n,o,u),n.child)}function A0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!ef(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,R0(e,n,f,o,u)):(e=ic(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Qf(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ko,a(M,o)&&e.ref===n.ref)return ns(e,n,u)}return n.flags|=1,e=Ka(f,o),e.ref=n.ref,e.return=n,n.child=e}function R0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Ko(f,o)&&e.ref===n.ref)if(Yn=!1,n.pendingProps=o=f,Qf(e,u))(e.flags&131072)!==0&&(Yn=!0);else return n.lanes=e.lanes,ns(e,n,u)}return Xf(e,n,a,o,u)}function w0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return C0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&oc(n,f!==null?f.cachePool:null),f!==null?Nm(n,f):Sf(),Um(n);else return o=n.lanes=536870912,C0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(oc(n,f.cachePool),Nm(n,f),zs(),n.memoizedState=null):(e!==null&&oc(n,null),Sf(),zs());return li(e,n,u,a),n.child}function fl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function C0(e,n,a,o,u){var f=pf();return f=f===null?null:{parent:qn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&oc(n,null),Sf(),Um(n),e!==null&&$r(e,n,o,!0),n.childLanes=u,null}function Tc(e,n){return n=Ec({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function D0(e,n,a){return Sr(n,e.child,null,a),e=Tc(n,n.pendingProps),e.flags|=2,ji(n),n.memoizedState=null,e}function Xx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ie){if(o.mode==="hidden")return e=Tc(n,o),n.lanes=536870912,fl(null,e);if(yf(n),(e=En)?(e=Hg(e,oa),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ws!==null?{id:Da,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},a=dm(e),a.return=n,n.child=a,ri=n,En=null)):e=null,e===null)throw Ds(n);return n.lanes=536870912,null}return Tc(n,o)}var f=e.memoizedState;if(f!==null){var M=f.dehydrated;if(yf(n),u)if(n.flags&256)n.flags&=-257,n=D0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Yn||$r(e,n,a,!1),u=(a&e.childLanes)!==0,Yn||u){if(o=_n,o!==null&&(M=Ze(o,a),M!==0&&M!==f.retryLane))throw f.retryLane=M,hr(e,M),Pi(o,e,M),kf;Oc(),n=D0(e,n,a)}else e=f.treeContext,En=ca(M.nextSibling),ri=n,Ie=!0,Cs=null,oa=!1,e!==null&&gm(n,e),n=Tc(n,o),n.flags|=4096;return n}return e=Ka(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function bc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Xf(e,n,a,o,u){return gr(n),a=bf(e,n,a,o,void 0,u),o=Ef(),e!==null&&!Yn?(Af(e,n,u),ns(e,n,u)):(Ie&&o&&sf(n),n.flags|=1,li(e,n,a,u),n.child)}function N0(e,n,a,o,u,f){return gr(n),n.updateQueue=null,a=Om(n,o,a,u),Lm(e),o=Ef(),e!==null&&!Yn?(Af(e,n,f),ns(e,n,f)):(Ie&&o&&sf(n),n.flags|=1,li(e,n,a,f),n.child)}function U0(e,n,a,o,u){if(gr(n),n.stateNode===null){var f=Zr,M=a.contextType;typeof M=="object"&&M!==null&&(f=oi(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},gf(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?oi(M):Zr,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Vf(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Gf.enqueueReplaceState(f,f.state,null),rl(n,o,f,u),sl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var w=n.memoizedProps,G=yr(a,w);f.props=G;var it=f.context,_t=a.contextType;M=Zr,typeof _t=="object"&&_t!==null&&(M=oi(_t));var yt=a.getDerivedStateFromProps;_t=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,_t||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||it!==M)&&v0(n,f,o,M),Us=!1;var ot=n.memoizedState;f.state=ot,rl(n,o,f,u),sl(),it=n.memoizedState,w||ot!==it||Us?(typeof yt=="function"&&(Vf(n,a,yt,o),it=n.memoizedState),(G=Us||_0(n,a,G,o,ot,it,M))?(_t||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=M,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,_f(e,n),M=n.memoizedProps,_t=yr(a,M),f.props=_t,yt=n.pendingProps,ot=f.context,it=a.contextType,G=Zr,typeof it=="object"&&it!==null&&(G=oi(it)),w=a.getDerivedStateFromProps,(it=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==yt||ot!==G)&&v0(n,f,o,G),Us=!1,ot=n.memoizedState,f.state=ot,rl(n,o,f,u),sl();var ut=n.memoizedState;M!==yt||ot!==ut||Us||e!==null&&e.dependencies!==null&&sc(e.dependencies)?(typeof w=="function"&&(Vf(n,a,w,o),ut=n.memoizedState),(_t=Us||_0(n,a,_t,o,ot,ut,G)||e!==null&&e.dependencies!==null&&sc(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=G,o=_t):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,bc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Sr(n,e.child,null,u),n.child=Sr(n,null,a,u)):li(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ns(e,n,u),e}function L0(e,n,a,o){return pr(),n.flags|=256,li(e,n,a,o),n.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wf(e){return{baseLanes:e,cachePool:ym()}}function Yf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Ki),e}function O0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(Hn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ie){if(u?Ps(n):zs(),(e=En)?(e=Hg(e,oa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ws!==null?{id:Da,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},a=dm(e),a.return=n,n.child=a,ri=n,En=null)):e=null,e===null)throw Ds(n);return Ch(e)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(zs(),u=n.mode,w=Ec({mode:"hidden",children:w},u),o=dr(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=Wf(a),o.childLanes=Yf(e,M,a),n.memoizedState=qf,fl(null,o)):(Ps(n),jf(n,w))}var G=e.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(f)n.flags&256?(Ps(n),n.flags&=-257,n=Zf(e,n,a)):n.memoizedState!==null?(zs(),n.child=e.child,n.flags|=128,n=null):(zs(),w=o.fallback,u=n.mode,o=Ec({mode:"visible",children:o.children},u),w=dr(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Sr(n,e.child,null,a),o=n.child,o.memoizedState=Wf(a),o.childLanes=Yf(e,M,a),n.memoizedState=qf,n=fl(null,o));else if(Ps(n),Ch(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var it=M.dgst;M=it,o=Error(s(419)),o.stack="",o.digest=M,$o({value:o,source:null,stack:null}),n=Zf(e,n,a)}else if(Yn||$r(e,n,a,!1),M=(a&e.childLanes)!==0,Yn||M){if(M=_n,M!==null&&(o=Ze(M,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,hr(e,o),Pi(M,e,o),kf;wh(w)||Oc(),n=Zf(e,n,a)}else wh(w)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,En=ca(w.nextSibling),ri=n,Ie=!0,Cs=null,oa=!1,e!==null&&gm(n,e),n=jf(n,o.children),n.flags|=4096);return n}return u?(zs(),w=o.fallback,u=n.mode,G=e.child,it=G.sibling,o=Ka(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,it!==null?w=Ka(it,w):(w=dr(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,fl(null,o),o=n.child,w=e.child.memoizedState,w===null?w=Wf(a):(u=w.cachePool,u!==null?(G=qn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=ym(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Yf(e,M,a),n.memoizedState=qf,fl(e.child,o)):(Ps(n),a=e.child,e=a.sibling,a=Ka(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function jf(e,n){return n=Ec({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ec(e,n){return e=Wi(22,e,null,n),e.lanes=0,e}function Zf(e,n,a){return Sr(n,e.child,null,a),e=jf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function P0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),uf(e.return,n,a)}function Kf(e,n,a,o,u,f){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=f)}function z0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var M=Hn.current,w=(M&2)!==0;if(w?(M=M&1|2,n.flags|=128):M&=1,Mt(Hn,M),li(e,n,o,a),o=Ie?Jo:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&P0(e,a,n);else if(e.tag===19)P0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&dc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Kf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&dc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Kf(n,!0,a,null,f,o);break;case"together":Kf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ns(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Bs|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($r(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ka(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ka(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Qf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&sc(e)))}function qx(e,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),Ns(n,qn,e.memoizedState.cache),pr();break;case 27:case 5:ee(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:Ns(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ps(n),n.flags|=128,null):(a&n.child.childLanes)!==0?O0(e,n,a):(Ps(n),e=ns(e,n,a),e!==null?e.sibling:null);Ps(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return z0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(Hn,Hn.current),o)break;return null;case 22:return n.lanes=0,w0(e,n,a,n.pendingProps);case 24:Ns(n,qn,e.memoizedState.cache)}return ns(e,n,a)}function I0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Yn=!0;else{if(!Qf(e,a)&&(n.flags&128)===0)return Yn=!1,qx(e,n,a);Yn=(e.flags&131072)!==0}else Yn=!1,Ie&&(n.flags&1048576)!==0&&mm(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=vr(n.elementType),n.type=e,typeof e=="function")ef(e)?(o=yr(e,o),n.tag=1,n=U0(null,n,e,o,a)):(n.tag=0,n=Xf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=E0(null,n,e,o,a);break t}else if(u===P){n.tag=14,n=A0(null,n,e,o,a);break t}}throw n=ct(e)||e,Error(s(306,n,""))}}return n;case 0:return Xf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=yr(o,n.pendingProps),U0(e,n,o,u,a);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,_f(e,n),rl(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Ns(n,qn,o),o!==f.cache&&ff(n,[qn],a,!0),sl(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=L0(e,n,o,a);break t}else if(o!==u){u=aa(Error(s(424)),n),$o(u),n=L0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(En=ca(e.firstChild),ri=n,Ie=!0,Cs=null,oa=!0,a=wm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(pr(),o===u){n=ns(e,n,a);break t}li(e,n,o,a)}n=n.child}return n;case 26:return bc(e,n),e===null?(a=jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ie||(a=n.type,e=n.pendingProps,o=Gc(rt.current).createElement(a),o[Ne]=n,o[mn]=e,ci(o,a,e),Un(o),n.stateNode=o):n.memoizedState=jg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ee(n),e===null&&Ie&&(o=n.stateNode=qg(n.type,n.pendingProps,rt.current),ri=n,oa=!0,u=En,Xs(n.type)?(Dh=u,En=ca(o.firstChild)):En=u),li(e,n,n.pendingProps.children,a),bc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ie&&((u=o=En)&&(o=MS(o,n.type,n.pendingProps,oa),o!==null?(n.stateNode=o,ri=n,En=ca(o.firstChild),oa=!1,u=!0):u=!1),u||Ds(n)),ee(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,Eh(u,f)?o=null:M!==null&&Eh(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=bf(e,n,zx,null,null,a),Al._currentValue=u),bc(e,n),li(e,n,o,a),n.child;case 6:return e===null&&Ie&&((e=a=En)&&(a=yS(a,n.pendingProps,oa),a!==null?(n.stateNode=a,ri=n,En=null,e=!0):e=!1),e||Ds(n)),null;case 13:return O0(e,n,a);case 4:return At(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Sr(n,null,o,a):li(e,n,o,a),n.child;case 11:return E0(e,n,n.type,n.pendingProps,a);case 7:return li(e,n,n.pendingProps,a),n.child;case 8:return li(e,n,n.pendingProps.children,a),n.child;case 12:return li(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ns(n,n.type,o.value),li(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gr(n),u=oi(u),o=o(u),n.flags|=1,li(e,n,o,a),n.child;case 14:return A0(e,n,n.type,n.pendingProps,a);case 15:return R0(e,n,n.type,n.pendingProps,a);case 19:return z0(e,n,a);case 31:return Xx(e,n,a);case 22:return w0(e,n,a,n.pendingProps);case 24:return gr(n),o=oi(qn),e===null?(u=pf(),u===null&&(u=_n,f=hf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},gf(n),Ns(n,qn,u)):((e.lanes&a)!==0&&(_f(e,n),rl(n,null,null,a),sl()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ns(n,qn,o)):(o=f.cache,Ns(n,qn,o),o!==u.cache&&ff(n,[qn],a,!0))),li(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function is(e){e.flags|=4}function Jf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ug())e.flags|=8192;else throw xr=cc,mf}else e.flags&=-16777217}function F0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$g(n))if(ug())e.flags|=8192;else throw xr=cc,mf}function Ac(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?$():536870912,e.lanes|=n,fo|=n)}function hl(e,n){if(!Ie)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function An(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Wx(e,n,a){var o=n.pendingProps;switch(rf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(n),null;case 1:return An(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$a(qn),Ct(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Jr(n)?is(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lf())),An(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(is(n),f!==null?(An(n),F0(n,f)):(An(n),Jf(n,u,null,o,a))):f?f!==e.memoizedState?(is(n),An(n),F0(n,f)):(An(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&is(n),An(n),Jf(n,u,e,o,a)),null;case 27:if(Qt(n),a=rt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&is(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return An(n),null}e=Rt.current,Jr(n)?_m(n):(e=qg(u,o,a),n.stateNode=e,is(n))}return An(n),null;case 5:if(Qt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&is(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return An(n),null}if(f=Rt.current,Jr(n))_m(n);else{var M=Gc(rt.current);switch(f){case 1:f=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=M.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}f[Ne]=n,f[mn]=o;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)f.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=f;t:switch(ci(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&is(n)}}return An(n),Jf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&is(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=rt.current,Jr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ri,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Ne]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Og(e.nodeValue,a)),e||Ds(n,!0)}else e=Gc(e).createTextNode(o),e[Ne]=n,n.stateNode=e}return An(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Jr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ne]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;An(n),e=!1}else a=lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ji(n),n):(ji(n),null);if((n.flags&128)!==0)throw Error(s(558))}return An(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Ne]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;An(n),u=!1}else u=lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}return ji(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ac(n,n.updateQueue),An(n),null);case 4:return Ct(),e===null&&Sh(n.stateNode.containerInfo),An(n),null;case 10:return $a(n.type),An(n),null;case 19:if(J(Hn),o=n.memoizedState,o===null)return An(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)hl(o,!1);else{if(zn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=dc(e),f!==null){for(n.flags|=128,hl(o,!1),e=f.updateQueue,n.updateQueue=e,Ac(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)hm(a,e),a=a.sibling;return Mt(Hn,Hn.current&1|2),Ie&&Qa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Dt()>Nc&&(n.flags|=128,u=!0,hl(o,!1),n.lanes=4194304)}else{if(!u)if(e=dc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ac(n,e),hl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ie)return An(n),null}else 2*Dt()-o.renderingStartTime>Nc&&a!==536870912&&(n.flags|=128,u=!0,hl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Dt(),e.sibling=null,a=Hn.current,Mt(Hn,u?a&1|2:a&1),Ie&&Qa(n,o.treeForkCount),e):(An(n),null);case 22:case 23:return ji(n),Mf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(An(n),n.subtreeFlags&6&&(n.flags|=8192)):An(n),a=n.updateQueue,a!==null&&Ac(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(_r),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$a(qn),An(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Yx(e,n){switch(rf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $a(qn),Ct(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if(ji(n),n.alternate===null)throw Error(s(340));pr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));pr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(Hn),null;case 4:return Ct(),null;case 10:return $a(n.type),null;case 22:case 23:return ji(n),Mf(),e!==null&&J(_r),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $a(qn),null;case 25:return null;default:return null}}function B0(e,n){switch(rf(n),n.tag){case 3:$a(qn),Ct();break;case 26:case 27:case 5:Qt(n);break;case 4:Ct();break;case 31:n.memoizedState!==null&&ji(n);break;case 13:ji(n);break;case 19:J(Hn);break;case 10:$a(n.type);break;case 22:case 23:ji(n),Mf(),e!==null&&J(_r);break;case 24:$a(qn)}}function dl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(w){cn(n,n.return,w)}}function Is(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var M=o.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,u=n;var G=a,it=w;try{it()}catch(_t){cn(u,G,_t)}}}o=o.next}while(o!==f)}}catch(_t){cn(n,n.return,_t)}}function V0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Dm(n,a)}catch(o){cn(e,e.return,o)}}}function G0(e,n,a){a.props=yr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){cn(e,n,o)}}function pl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){cn(e,n,u)}}function Ua(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){cn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){cn(e,n,u)}else a.current=null}function H0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){cn(e,e.return,u)}}function $f(e,n,a){try{var o=e.stateNode;mS(o,e.type,a,n),o[mn]=n}catch(u){cn(e,e.return,u)}}function k0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xs(e.type)||e.tag===4}function th(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||k0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=na));else if(o!==4&&(o===27&&Xs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(eh(e,n,a),e=e.sibling;e!==null;)eh(e,n,a),e=e.sibling}function Rc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Xs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Rc(e,n,a),e=e.sibling;e!==null;)Rc(e,n,a),e=e.sibling}function X0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ci(n,o,a),n[Ne]=e,n[mn]=a}catch(f){cn(e,e.return,f)}}var as=!1,jn=!1,nh=!1,q0=typeof WeakSet=="function"?WeakSet:Set,ni=null;function jx(e,n){if(e=e.containerInfo,Th=jc,e=im(e),ju(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,w=-1,G=-1,it=0,_t=0,yt=e,ot=null;e:for(;;){for(var ut;yt!==a||u!==0&&yt.nodeType!==3||(w=M+u),yt!==f||o!==0&&yt.nodeType!==3||(G=M+o),yt.nodeType===3&&(M+=yt.nodeValue.length),(ut=yt.firstChild)!==null;)ot=yt,yt=ut;for(;;){if(yt===e)break e;if(ot===a&&++it===u&&(w=M),ot===f&&++_t===o&&(G=M),(ut=yt.nextSibling)!==null)break;yt=ot,ot=yt.parentNode}yt=ut}a=w===-1||G===-1?null:{start:w,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(bh={focusedElem:e,selectionRange:a},jc=!1,ni=n;ni!==null;)if(n=ni,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ni=e;else for(;ni!==null;){switch(n=ni,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Kt=yr(a.type,u);e=o.getSnapshotBeforeUpdate(Kt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(re){cn(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Rh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,ni=e;break}ni=n.return}}function W0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:rs(e,a),o&4&&dl(5,a);break;case 1:if(rs(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){cn(a,a.return,M)}else{var u=yr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){cn(a,a.return,M)}}o&64&&V0(a),o&512&&pl(a,a.return);break;case 3:if(rs(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Dm(e,n)}catch(M){cn(a,a.return,M)}}break;case 27:n===null&&o&4&&X0(a);case 26:case 5:rs(e,a),n===null&&o&4&&H0(a),o&512&&pl(a,a.return);break;case 12:rs(e,a);break;case 31:rs(e,a),o&4&&Z0(e,a);break;case 13:rs(e,a),o&4&&K0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=iS.bind(null,a),TS(e,a))));break;case 22:if(o=a.memoizedState!==null||as,!o){n=n!==null&&n.memoizedState!==null||jn,u=as;var f=jn;as=o,(jn=n)&&!f?os(e,a,(a.subtreeFlags&8772)!==0):rs(e,a),as=u,jn=f}break;case 30:break;default:rs(e,a)}}function Y0(e){var n=e.alternate;n!==null&&(e.alternate=null,Y0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Wa(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var wn=null,Ni=!1;function ss(e,n,a){for(a=a.child;a!==null;)j0(e,n,a),a=a.sibling}function j0(e,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:jn||Ua(a,n),ss(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:jn||Ua(a,n);var o=wn,u=Ni;Xs(a.type)&&(wn=a.stateNode,Ni=!1),ss(e,n,a),Tl(a.stateNode),wn=o,Ni=u;break;case 5:jn||Ua(a,n);case 6:if(o=wn,u=Ni,wn=null,ss(e,n,a),wn=o,Ni=u,wn!==null)if(Ni)try{(wn.nodeType===9?wn.body:wn.nodeName==="HTML"?wn.ownerDocument.body:wn).removeChild(a.stateNode)}catch(f){cn(a,n,f)}else try{wn.removeChild(a.stateNode)}catch(f){cn(a,n,f)}break;case 18:wn!==null&&(Ni?(e=wn,Vg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),So(e)):Vg(wn,a.stateNode));break;case 4:o=wn,u=Ni,wn=a.stateNode.containerInfo,Ni=!0,ss(e,n,a),wn=o,Ni=u;break;case 0:case 11:case 14:case 15:Is(2,a,n),jn||Is(4,a,n),ss(e,n,a);break;case 1:jn||(Ua(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&G0(a,n,o)),ss(e,n,a);break;case 21:ss(e,n,a);break;case 22:jn=(o=jn)||a.memoizedState!==null,ss(e,n,a),jn=o;break;default:ss(e,n,a)}}function Z0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{So(e)}catch(a){cn(n,n.return,a)}}}function K0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{So(e)}catch(a){cn(n,n.return,a)}}function Zx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new q0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new q0),n;default:throw Error(s(435,e.tag))}}function wc(e,n){var a=Zx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=aS.bind(null,e,o);o.then(u,u)}})}function Ui(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,M=n,w=M;t:for(;w!==null;){switch(w.tag){case 27:if(Xs(w.type)){wn=w.stateNode,Ni=!1;break t}break;case 5:wn=w.stateNode,Ni=!1;break t;case 3:case 4:wn=w.stateNode.containerInfo,Ni=!0;break t}w=w.return}if(wn===null)throw Error(s(160));j0(f,M,u),wn=null,Ni=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Q0(n,e),n=n.sibling}var va=null;function Q0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ui(n,e),Li(e),o&4&&(Is(3,e,e.return),dl(3,e),Is(5,e,e.return));break;case 1:Ui(n,e),Li(e),o&512&&(jn||a===null||Ua(a,a.return)),o&64&&as&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=va;if(Ui(n,e),Li(e),o&512&&(jn||a===null||Ua(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Bi]||f[Ne]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),ci(f,o,a),f[Ne]=e,Un(f),o=f;break t;case"link":var M=Qg("link","href",u).get(o+(a.href||""));if(M){for(var w=0;w<M.length;w++)if(f=M[w],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(w,1);break e}}f=u.createElement(o),ci(f,o,a),u.head.appendChild(f);break;case"meta":if(M=Qg("meta","content",u).get(o+(a.content||""))){for(w=0;w<M.length;w++)if(f=M[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(w,1);break e}}f=u.createElement(o),ci(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Ne]=e,Un(f),o=f}e.stateNode=o}else Jg(u,e.type,e.stateNode);else e.stateNode=Kg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Jg(u,e.type,e.stateNode):Kg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&$f(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ui(n,e),Li(e),o&512&&(jn||a===null||Ua(a,a.return)),a!==null&&o&4&&$f(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ui(n,e),Li(e),o&512&&(jn||a===null||Ua(a,a.return)),e.flags&32){u=e.stateNode;try{ti(u,"")}catch(Kt){cn(e,e.return,Kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,$f(e,u,a!==null?a.memoizedProps:u)),o&1024&&(nh=!0);break;case 6:if(Ui(n,e),Li(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Kt){cn(e,e.return,Kt)}}break;case 3:if(Xc=null,u=va,va=Hc(n.containerInfo),Ui(n,e),va=u,Li(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{So(n.containerInfo)}catch(Kt){cn(e,e.return,Kt)}nh&&(nh=!1,J0(e));break;case 4:o=va,va=Hc(e.stateNode.containerInfo),Ui(n,e),Li(e),va=o;break;case 12:Ui(n,e),Li(e);break;case 31:Ui(n,e),Li(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wc(e,o)));break;case 13:Ui(n,e),Li(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dc=Dt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wc(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,it=as,_t=jn;if(as=it||u,jn=_t||G,Ui(n,e),jn=_t,as=it,Li(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||as||jn||Tr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=G.stateNode;var yt=G.memoizedProps.style,ot=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;w.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Kt){cn(G,G.return,Kt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Kt){cn(G,G.return,Kt)}}}else if(n.tag===18){if(a===null){G=n;try{var ut=G.stateNode;u?Gg(ut,!0):Gg(G.stateNode,!1)}catch(Kt){cn(G,G.return,Kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,wc(e,a))));break;case 19:Ui(n,e),Li(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wc(e,o)));break;case 30:break;case 21:break;default:Ui(n,e),Li(e)}}function Li(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(k0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=th(e);Rc(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(ti(M,""),a.flags&=-33);var w=th(e);Rc(e,w,M);break;case 3:case 4:var G=a.stateNode.containerInfo,it=th(e);eh(e,it,G);break;default:throw Error(s(161))}}catch(_t){cn(e,e.return,_t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function J0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;J0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function rs(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)W0(e,n.alternate,n),n=n.sibling}function Tr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Is(4,n,n.return),Tr(n);break;case 1:Ua(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&G0(n,n.return,a),Tr(n);break;case 27:Tl(n.stateNode);case 26:case 5:Ua(n,n.return),Tr(n);break;case 22:n.memoizedState===null&&Tr(n);break;case 30:Tr(n);break;default:Tr(n)}e=e.sibling}}function os(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:os(u,f,a),dl(4,f);break;case 1:if(os(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){cn(o,o.return,it)}if(o=f,u=o.updateQueue,u!==null){var w=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Cm(G[u],w)}catch(it){cn(o,o.return,it)}}a&&M&64&&V0(f),pl(f,f.return);break;case 27:X0(f);case 26:case 5:os(u,f,a),a&&o===null&&M&4&&H0(f),pl(f,f.return);break;case 12:os(u,f,a);break;case 31:os(u,f,a),a&&M&4&&Z0(u,f);break;case 13:os(u,f,a),a&&M&4&&K0(u,f);break;case 22:f.memoizedState===null&&os(u,f,a),pl(f,f.return);break;case 30:break;default:os(u,f,a)}n=n.sibling}}function ih(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&tl(a))}function ah(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&tl(e))}function xa(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$0(e,n,a,o),n=n.sibling}function $0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xa(e,n,a,o),u&2048&&dl(9,n);break;case 1:xa(e,n,a,o);break;case 3:xa(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&tl(e)));break;case 12:if(u&2048){xa(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,w=f.onPostCommit;typeof w=="function"&&w(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){cn(n,n.return,G)}}else xa(e,n,a,o);break;case 31:xa(e,n,a,o);break;case 13:xa(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?xa(e,n,a,o):ml(e,n):f._visibility&2?xa(e,n,a,o):(f._visibility|=2,lo(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&ih(M,n);break;case 24:xa(e,n,a,o),u&2048&&ah(n.alternate,n);break;default:xa(e,n,a,o)}}function lo(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,M=n,w=a,G=o,it=M.flags;switch(M.tag){case 0:case 11:case 15:lo(f,M,w,G,u),dl(8,M);break;case 23:break;case 22:var _t=M.stateNode;M.memoizedState!==null?_t._visibility&2?lo(f,M,w,G,u):ml(f,M):(_t._visibility|=2,lo(f,M,w,G,u)),u&&it&2048&&ih(M.alternate,M);break;case 24:lo(f,M,w,G,u),u&&it&2048&&ah(M.alternate,M);break;default:lo(f,M,w,G,u)}n=n.sibling}}function ml(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:ml(a,o),u&2048&&ih(o.alternate,o);break;case 24:ml(a,o),u&2048&&ah(o.alternate,o);break;default:ml(a,o)}n=n.sibling}}var gl=8192;function co(e,n,a){if(e.subtreeFlags&gl)for(e=e.child;e!==null;)tg(e,n,a),e=e.sibling}function tg(e,n,a){switch(e.tag){case 26:co(e,n,a),e.flags&gl&&e.memoizedState!==null&&PS(a,va,e.memoizedState,e.memoizedProps);break;case 5:co(e,n,a);break;case 3:case 4:var o=va;va=Hc(e.stateNode.containerInfo),co(e,n,a),va=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=gl,gl=16777216,co(e,n,a),gl=o):co(e,n,a));break;default:co(e,n,a)}}function eg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _l(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];ni=o,ig(o,e)}eg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ng(e),e=e.sibling}function ng(e){switch(e.tag){case 0:case 11:case 15:_l(e),e.flags&2048&&Is(9,e,e.return);break;case 3:_l(e);break;case 12:_l(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Cc(e)):_l(e);break;default:_l(e)}}function Cc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];ni=o,ig(o,e)}eg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Is(8,n,n.return),Cc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cc(n));break;default:Cc(n)}e=e.sibling}}function ig(e,n){for(;ni!==null;){var a=ni;switch(a.tag){case 0:case 11:case 15:Is(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:tl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ni=o;else t:for(a=e;ni!==null;){o=ni;var u=o.sibling,f=o.return;if(Y0(o),o===a){ni=null;break t}if(u!==null){u.return=f,ni=u;break t}ni=f}}}var Kx={getCacheForType:function(e){var n=oi(qn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return oi(qn).controller.signal}},Qx=typeof WeakMap=="function"?WeakMap:Map,en=0,_n=null,we=null,Ue=0,ln=0,Zi=null,Fs=!1,uo=!1,sh=!1,ls=0,zn=0,Bs=0,br=0,rh=0,Ki=0,fo=0,vl=null,Oi=null,oh=!1,Dc=0,ag=0,Nc=1/0,Uc=null,Vs=null,Qn=0,Gs=null,ho=null,cs=0,lh=0,ch=null,sg=null,xl=0,uh=null;function Qi(){return(en&2)!==0&&Ue!==0?Ue&-Ue:U.T!==null?gh():Ti()}function rg(){if(Ki===0)if((Ue&536870912)===0||Ie){var e=Ee;Ee<<=1,(Ee&3932160)===0&&(Ee=262144),Ki=e}else Ki=536870912;return e=Yi.current,e!==null&&(e.flags|=32),Ki}function Pi(e,n,a){(e===_n&&(ln===2||ln===9)||e.cancelPendingCommit!==null)&&(po(e,0),Hs(e,Ue,Ki,!1)),Pt(e,a),((en&2)===0||e!==_n)&&(e===_n&&((en&2)===0&&(br|=a),zn===4&&Hs(e,Ue,Ki,!1)),La(e))}function og(e,n,a){if((en&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||kt(e,n),u=o?tS(e,n):hh(e,n,!0),f=o;do{if(u===0){uo&&!o&&Hs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Jx(a)){u=hh(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var w=e;u=vl;var G=w.current.memoizedState.isDehydrated;if(G&&(po(w,M).flags|=256),M=hh(w,M,!1),M!==2){if(sh&&!G){w.errorRecoveryDisabledLanes|=f,br|=f,u=4;break t}f=Oi,Oi=u,f!==null&&(Oi===null?Oi=f:Oi.push.apply(Oi,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){po(e,0),Hs(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Hs(o,n,Ki,!Fs);break t;case 2:Oi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Dc+300-Dt(),10<u)){if(Hs(o,n,Ki,!Fs),mt(o,0,!0)!==0)break t;cs=n,o.timeoutHandle=Fg(lg.bind(null,o,a,Oi,Uc,oh,n,Ki,br,fo,Fs,f,"Throttled",-0,0),u);break t}lg(o,a,Oi,Uc,oh,n,Ki,br,fo,Fs,f,null,-0,0)}}break}while(!0);La(e)}function lg(e,n,a,o,u,f,M,w,G,it,_t,yt,ot,ut){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},tg(n,f,yt);var Kt=(f&62914560)===f?Dc-Dt():(f&4194048)===f?ag-Dt():0;if(Kt=zS(yt,Kt),Kt!==null){cs=f,e.cancelPendingCommit=Kt(gg.bind(null,e,n,f,a,o,u,M,w,G,_t,yt,null,ot,ut)),Hs(e,f,M,!it);return}}gg(e,n,f,a,o,u,M,w,G)}function Jx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!qi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Hs(e,n,a,o){n&=~rh,n&=~br,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Vt(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&ae(e,a,n)}function Lc(){return(en&6)===0?(Sl(0),!1):!0}function fh(){if(we!==null){if(ln===0)var e=we.return;else e=we,Ja=mr=null,Rf(e),io=null,nl=0,e=we;for(;e!==null;)B0(e.alternate,e),e=e.return;we=null}}function po(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,vS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),cs=0,fh(),_n=e,we=a=Ka(e.current,null),Ue=n,ln=0,Zi=null,Fs=!1,uo=kt(e,n),sh=!1,fo=Ki=rh=br=Bs=zn=0,Oi=vl=null,oh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Vt(o),f=1<<u;n|=e[u],o&=~f}return ls=n,tc(),a}function cg(e,n){xe=null,U.H=ul,n===no||n===lc?(n=Em(),ln=3):n===mf?(n=Em(),ln=4):ln=n===kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zi=n,we===null&&(zn=1,yc(e,aa(n,e.current)))}function ug(){var e=Yi.current;return e===null?!0:(Ue&4194048)===Ue?la===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?e===la:!1}function fg(){var e=U.H;return U.H=ul,e===null?ul:e}function hg(){var e=U.A;return U.A=Kx,e}function Oc(){zn=4,Fs||(Ue&4194048)!==Ue&&Yi.current!==null||(uo=!0),(Bs&134217727)===0&&(br&134217727)===0||_n===null||Hs(_n,Ue,Ki,!1)}function hh(e,n,a){var o=en;en|=2;var u=fg(),f=hg();(_n!==e||Ue!==n)&&(Uc=null,po(e,n)),n=!1;var M=zn;t:do try{if(ln!==0&&we!==null){var w=we,G=Zi;switch(ln){case 8:fh(),M=6;break t;case 3:case 2:case 9:case 6:Yi.current===null&&(n=!0);var it=ln;if(ln=0,Zi=null,mo(e,w,G,it),a&&uo){M=0;break t}break;default:it=ln,ln=0,Zi=null,mo(e,w,G,it)}}$x(),M=zn;break}catch(_t){cg(e,_t)}while(!0);return n&&e.shellSuspendCounter++,Ja=mr=null,en=o,U.H=u,U.A=f,we===null&&(_n=null,Ue=0,tc()),M}function $x(){for(;we!==null;)dg(we)}function tS(e,n){var a=en;en|=2;var o=fg(),u=hg();_n!==e||Ue!==n?(Uc=null,Nc=Dt()+500,po(e,n)):uo=kt(e,n);t:do try{if(ln!==0&&we!==null){n=we;var f=Zi;e:switch(ln){case 1:ln=0,Zi=null,mo(e,n,f,1);break;case 2:case 9:if(Tm(f)){ln=0,Zi=null,pg(n);break}n=function(){ln!==2&&ln!==9||_n!==e||(ln=7),La(e)},f.then(n,n);break t;case 3:ln=7;break t;case 4:ln=5;break t;case 7:Tm(f)?(ln=0,Zi=null,pg(n)):(ln=0,Zi=null,mo(e,n,f,7));break;case 5:var M=null;switch(we.tag){case 26:M=we.memoizedState;case 5:case 27:var w=we;if(M?$g(M):w.stateNode.complete){ln=0,Zi=null;var G=w.sibling;if(G!==null)we=G;else{var it=w.return;it!==null?(we=it,Pc(it)):we=null}break e}}ln=0,Zi=null,mo(e,n,f,5);break;case 6:ln=0,Zi=null,mo(e,n,f,6);break;case 8:fh(),zn=6;break t;default:throw Error(s(462))}}eS();break}catch(_t){cg(e,_t)}while(!0);return Ja=mr=null,U.H=o,U.A=u,en=a,we!==null?0:(_n=null,Ue=0,tc(),zn)}function eS(){for(;we!==null&&!Se();)dg(we)}function dg(e){var n=I0(e.alternate,e,ls);e.memoizedProps=e.pendingProps,n===null?Pc(e):we=n}function pg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=N0(a,n,n.pendingProps,n.type,void 0,Ue);break;case 11:n=N0(a,n,n.pendingProps,n.type.render,n.ref,Ue);break;case 5:Rf(n);default:B0(a,n),n=we=hm(n,ls),n=I0(a,n,ls)}e.memoizedProps=e.pendingProps,n===null?Pc(e):we=n}function mo(e,n,a,o){Ja=mr=null,Rf(n),io=null,nl=0;var u=n.return;try{if(kx(e,u,n,a,Ue)){zn=1,yc(e,aa(a,e.current)),we=null;return}}catch(f){if(u!==null)throw we=u,f;zn=1,yc(e,aa(a,e.current)),we=null;return}n.flags&32768?(Ie||o===1?e=!0:uo||(Ue&536870912)!==0?e=!1:(Fs=e=!0,(o===2||o===9||o===3||o===6)&&(o=Yi.current,o!==null&&o.tag===13&&(o.flags|=16384))),mg(n,e)):Pc(n)}function Pc(e){var n=e;do{if((n.flags&32768)!==0){mg(n,Fs);return}e=n.return;var a=Wx(n.alternate,n,ls);if(a!==null){we=a;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);zn===0&&(zn=5)}function mg(e,n){do{var a=Yx(e.alternate,e);if(a!==null){a.flags&=32767,we=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=a}while(e!==null);zn=6,we=null}function gg(e,n,a,o,u,f,M,w,G){e.cancelPendingCommit=null;do zc();while(Qn!==0);if((en&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=$u,he(e,a,f,M,w,G),e===_n&&(we=_n=null,Ue=0),ho=n,Gs=e,cs=a,lh=f,ch=u,sg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sS(Q,function(){return Mg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=B.p,B.p=2,M=en,en|=4;try{jx(e,n,a)}finally{en=M,B.p=u,U.T=o}}Qn=1,_g(),vg(),xg()}}function _g(){if(Qn===1){Qn=0;var e=Gs,n=ho,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=B.p;B.p=2;var u=en;en|=4;try{Q0(n,e);var f=bh,M=im(e.containerInfo),w=f.focusedElem,G=f.selectionRange;if(M!==w&&w&&w.ownerDocument&&nm(w.ownerDocument.documentElement,w)){if(G!==null&&ju(w)){var it=G.start,_t=G.end;if(_t===void 0&&(_t=it),"selectionStart"in w)w.selectionStart=it,w.selectionEnd=Math.min(_t,w.value.length);else{var yt=w.ownerDocument||document,ot=yt&&yt.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),Kt=w.textContent.length,re=Math.min(G.start,Kt),dn=G.end===void 0?re:Math.min(G.end,Kt);!ut.extend&&re>dn&&(M=dn,dn=re,re=M);var K=em(w,re),W=em(w,dn);if(K&&W&&(ut.rangeCount!==1||ut.anchorNode!==K.node||ut.anchorOffset!==K.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var nt=yt.createRange();nt.setStart(K.node,K.offset),ut.removeAllRanges(),re>dn?(ut.addRange(nt),ut.extend(W.node,W.offset)):(nt.setEnd(W.node,W.offset),ut.addRange(nt))}}}}for(yt=[],ut=w;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<yt.length;w++){var xt=yt[w];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}jc=!!Th,bh=Th=null}finally{en=u,B.p=o,U.T=a}}e.current=n,Qn=2}}function vg(){if(Qn===2){Qn=0;var e=Gs,n=ho,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=B.p;B.p=2;var u=en;en|=4;try{W0(e,n.alternate,n)}finally{en=u,B.p=o,U.T=a}}Qn=3}}function xg(){if(Qn===4||Qn===3){Qn=0,Je();var e=Gs,n=ho,a=cs,o=sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Qn=5:(Qn=0,ho=Gs=null,Sg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Vs=null),yi(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=B.p,B.p=2,U.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var w=o[M];f(w.value,{componentStack:w.stack})}}finally{U.T=n,B.p=u}}(cs&3)!==0&&zc(),La(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===uh?xl++:(xl=0,uh=e):xl=0,Sl(0)}}function Sg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,tl(n)))}function zc(){return _g(),vg(),xg(),Mg()}function Mg(){if(Qn!==5)return!1;var e=Gs,n=lh;lh=0;var a=yi(cs),o=U.T,u=B.p;try{B.p=32>a?32:a,U.T=null,a=ch,ch=null;var f=Gs,M=cs;if(Qn=0,ho=Gs=null,cs=0,(en&6)!==0)throw Error(s(331));var w=en;if(en|=4,ng(f.current),$0(f,f.current,M,a),en=w,Sl(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{B.p=u,U.T=o,Sg(e,n)}}function yg(e,n,a){n=aa(a,n),n=Hf(e.stateNode,n,2),e=Os(e,n,2),e!==null&&(Pt(e,2),La(e))}function cn(e,n,a){if(e.tag===3)yg(e,e,a);else for(;n!==null;){if(n.tag===3){yg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Vs===null||!Vs.has(o))){e=aa(a,e),a=T0(2),o=Os(n,a,2),o!==null&&(b0(a,o,n,e),Pt(o,2),La(o));break}}n=n.return}}function dh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Qx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(sh=!0,u.add(a),e=nS.bind(null,e,n,a),n.then(e,e))}function nS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,_n===e&&(Ue&a)===a&&(zn===4||zn===3&&(Ue&62914560)===Ue&&300>Dt()-Dc?(en&2)===0&&po(e,0):rh|=a,fo===Ue&&(fo=0)),La(e)}function Tg(e,n){n===0&&(n=$()),e=hr(e,n),e!==null&&(Pt(e,n),La(e))}function iS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Tg(e,a)}function aS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Tg(e,a)}function sS(e,n){return Y(e,n)}var Ic=null,go=null,ph=!1,Fc=!1,mh=!1,ks=0;function La(e){e!==go&&e.next===null&&(go===null?Ic=go=e:go=go.next=e),Fc=!0,ph||(ph=!0,oS())}function Sl(e,n){if(!mh&&Fc){mh=!0;do for(var a=!1,o=Ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,w=o.pingedLanes;f=(1<<31-Vt(42|e)+1)-1,f&=u&~(M&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Rg(o,f))}else f=Ue,f=mt(o,o===_n?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||kt(o,f)||(a=!0,Rg(o,f));o=o.next}while(a);mh=!1}}function rS(){bg()}function bg(){Fc=ph=!1;var e=0;ks!==0&&_S()&&(e=ks);for(var n=Dt(),a=null,o=Ic;o!==null;){var u=o.next,f=Eg(o,n);f===0?(o.next=null,a===null?Ic=u:a.next=u,u===null&&(go=a)):(a=o,(e!==0||(f&3)!==0)&&(Fc=!0)),o=u}Qn!==0&&Qn!==5||Sl(e),ks!==0&&(ks=0)}function Eg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-Vt(f),w=1<<M,G=u[M];G===-1?((w&a)===0||(w&o)!==0)&&(u[M]=gt(w,n)):G<=n&&(e.expiredLanes|=w),f&=~w}if(n=_n,a=Ue,a=mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ln===2||ln===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Mn(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Mn(o),yi(a)){case 2:case 8:a=b;break;case 32:a=Q;break;case 268435456:a=Et;break;default:a=Q}return o=Ag.bind(null,e),a=Y(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Mn(o),e.callbackPriority=2,e.callbackNode=null,2}function Ag(e,n){if(Qn!==0&&Qn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zc()&&e.callbackNode!==a)return null;var o=Ue;return o=mt(e,e===_n?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(og(e,o,n),Eg(e,Dt()),e.callbackNode!=null&&e.callbackNode===a?Ag.bind(null,e):null)}function Rg(e,n){if(zc())return null;og(e,n,!0)}function oS(){xS(function(){(en&6)!==0?Y(N,rS):bg()})}function gh(){if(ks===0){var e=to;e===0&&(e=le,le<<=1,(le&261888)===0&&(le=256)),ks=e}return ks}function wg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Aa(""+e)}function Cg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function lS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=wg((u[mn]||null).action),M=o.submitter;M&&(n=(n=M[mn]||null)?wg(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var w=new Gr("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ks!==0){var G=M?Cg(u,M):new FormData(u);zf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(w.preventDefault(),G=M?Cg(u,M):new FormData(u),zf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var _h=0;_h<Ju.length;_h++){var vh=Ju[_h],cS=vh.toLowerCase(),uS=vh[0].toUpperCase()+vh.slice(1);_a(cS,"on"+uS)}_a(rm,"onAnimationEnd"),_a(om,"onAnimationIteration"),_a(lm,"onAnimationStart"),_a("dblclick","onDoubleClick"),_a("focusin","onFocus"),_a("focusout","onBlur"),_a(Ax,"onTransitionRun"),_a(Rx,"onTransitionStart"),_a(wx,"onTransitionCancel"),_a(cm,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ml));function Dg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var w=o[M],G=w.instance,it=w.currentTarget;if(w=w.listener,G!==f&&u.isPropagationStopped())break t;f=w,u.currentTarget=it;try{f(u)}catch(_t){$l(_t)}u.currentTarget=null,f=G}else for(M=0;M<o.length;M++){if(w=o[M],G=w.instance,it=w.currentTarget,w=w.listener,G!==f&&u.isPropagationStopped())break t;f=w,u.currentTarget=it;try{f(u)}catch(_t){$l(_t)}u.currentTarget=null,f=G}}}}function Ce(e,n){var a=n[di];a===void 0&&(a=n[di]=new Set);var o=e+"__bubble";a.has(o)||(Ng(n,e,2,!1),a.add(o))}function xh(e,n,a){var o=0;n&&(o|=4),Ng(a,e,o,n)}var Bc="_reactListening"+Math.random().toString(36).slice(2);function Sh(e){if(!e[Bc]){e[Bc]=!0,rr.forEach(function(a){a!=="selectionchange"&&(fS.has(a)||xh(a,!1,e),xh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bc]||(n[Bc]=!0,xh("selectionchange",!1,n))}}function Ng(e,n,a,o){switch(r_(n)){case 2:var u=BS;break;case 8:u=VS;break;default:u=Ph}a=u.bind(null,n,a,e),u=void 0,!Gn||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Mh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var w=o.stateNode.containerInfo;if(w===u)break;if(M===4)for(M=o.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;w!==null;){if(M=pa(w),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){o=f=M;continue t}w=w.parentNode}}o=o.return}Rn(function(){var it=f,_t=Me(a),yt=[];t:{var ot=um.get(e);if(ot!==void 0){var ut=Gr,Kt=e;switch(e){case"keypress":if(Br(a)===0)break t;case"keydown":case"keyup":ut=ze;break;case"focusin":Kt="focus",ut=mi;break;case"focusout":Kt="blur",ut=mi;break;case"beforeblur":case"afterblur":ut=mi;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=tn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Xn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Za;break;case rm:case om:case lm:ut=kr;break;case cm:ut=On;break;case"scroll":case"scrollend":ut=Es;break;case"wheel":ut=Gp;break;case"copy":case"cut":case"paste":ut=Rs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Ai;break;case"toggle":case"beforetoggle":ut=dx}var re=(n&4)!==0,dn=!re&&(e==="scroll"||e==="scrollend"),K=re?ot!==null?ot+"Capture":null:ot;re=[];for(var W=it,nt;W!==null;){var xt=W;if(nt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||nt===null||K===null||(xt=Dn(W,K),xt!=null&&re.push(yl(W,xt,nt))),dn)break;W=W.return}0<re.length&&(ot=new ut(ot,Kt,null,a,_t),yt.push({event:ot,listeners:re}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",ot&&a!==Xt&&(Kt=a.relatedTarget||a.fromElement)&&(pa(Kt)||Kt[hi]))break t;if((ut||ot)&&(ot=_t.window===_t?_t:(ot=_t.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(Kt=a.relatedTarget||a.toElement,ut=it,Kt=Kt?pa(Kt):null,Kt!==null&&(dn=c(Kt),re=Kt.tag,Kt!==dn||re!==5&&re!==27&&re!==6)&&(Kt=null)):(ut=null,Kt=it),ut!==Kt)){if(re=tn,xt="onMouseLeave",K="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(re=Ai,xt="onPointerLeave",K="onPointerEnter",W="pointer"),dn=ut==null?ot:Ea(ut),nt=Kt==null?ot:Ea(Kt),ot=new re(xt,W+"leave",ut,a,_t),ot.target=dn,ot.relatedTarget=nt,xt=null,pa(_t)===it&&(re=new re(K,W+"enter",Kt,a,_t),re.target=nt,re.relatedTarget=dn,xt=re),dn=xt,ut&&Kt)e:{for(re=hS,K=ut,W=Kt,nt=0,xt=K;xt;xt=re(xt))nt++;xt=0;for(var ie=W;ie;ie=re(ie))xt++;for(;0<nt-xt;)K=re(K),nt--;for(;0<xt-nt;)W=re(W),xt--;for(;nt--;){if(K===W||W!==null&&K===W.alternate){re=K;break e}K=re(K),W=re(W)}re=null}else re=null;ut!==null&&Ug(yt,ot,ut,re,!1),Kt!==null&&dn!==null&&Ug(yt,dn,Kt,re,!0)}}t:{if(ot=it?Ea(it):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var Ke=Zp;else if(Yp(ot))if(Kp)Ke=Tx;else{Ke=Mx;var $t=Sx}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?it&&qe(it.elementType)&&(Ke=Zp):Ke=yx;if(Ke&&(Ke=Ke(e,it))){jp(yt,Ke,a,_t);break t}$t&&$t(e,ot,it),e==="focusout"&&it&&ot.type==="number"&&it.memoizedProps.value!=null&&Re(ot,"number",ot.value)}switch($t=it?Ea(it):window,e){case"focusin":(Yp($t)||$t.contentEditable==="true")&&(Wr=$t,Zu=it,Qo=null);break;case"focusout":Qo=Zu=Wr=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,am(yt,a,_t);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":am(yt,a,_t)}var Te;if(qu)t:{switch(e){case"compositionstart":var Le="onCompositionStart";break t;case"compositionend":Le="onCompositionEnd";break t;case"compositionupdate":Le="onCompositionUpdate";break t}Le=void 0}else qr?qp(e,a)&&(Le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Le="onCompositionStart");Le&&(Hp&&a.locale!=="ko"&&(qr||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&qr&&(Te=Kl()):(ei=_t,si="value"in ei?ei.value:ei.textContent,qr=!0)),$t=Vc(it,Le),0<$t.length&&(Le=new cr(Le,e,null,a,_t),yt.push({event:Le,listeners:$t}),Te?Le.data=Te:(Te=Wp(a),Te!==null&&(Le.data=Te)))),(Te=mx?gx(e,a):_x(e,a))&&(Le=Vc(it,"onBeforeInput"),0<Le.length&&($t=new cr("onBeforeInput","beforeinput",null,a,_t),yt.push({event:$t,listeners:Le}),$t.data=Te)),lS(yt,e,it,a,_t)}Dg(yt,n)})}function yl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Vc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Dn(e,a),u!=null&&o.unshift(yl(e,u,f)),u=Dn(e,n),u!=null&&o.push(yl(e,u,f))),e.tag===3)return o;e=e.return}return[]}function hS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ug(e,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var w=a,G=w.alternate,it=w.stateNode;if(w=w.tag,G!==null&&G===o)break;w!==5&&w!==26&&w!==27||it===null||(G=it,u?(it=Dn(a,f),it!=null&&M.unshift(yl(a,it,G))):u||(it=Dn(a,f),it!=null&&M.push(yl(a,it,G)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var dS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function Lg(e){return(typeof e=="string"?e:""+e).replace(dS,`
`).replace(pS,"")}function Og(e,n){return n=Lg(n),Lg(e)===n}function hn(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ti(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ti(e,""+o);break;case"className":Zt(e,"class",o);break;case"tabIndex":Zt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Zt(e,a,o);break;case"style":Di(e,o,f);break;case"data":if(n!=="object"){Zt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Aa(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&hn(e,n,"name",u.name,u,null),hn(e,n,"formEncType",u.formEncType,u,null),hn(e,n,"formMethod",u.formMethod,u,null),hn(e,n,"formTarget",u.formTarget,u,null)):(hn(e,n,"encType",u.encType,u,null),hn(e,n,"method",u.method,u,null),hn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Aa(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=na);break;case"onScroll":o!=null&&Ce("scroll",e);break;case"onScrollEnd":o!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Aa(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Gt(e,"popover",o);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Gt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ei.get(a)||a,Gt(e,a,o))}}function yh(e,n,a,o,u,f){switch(a){case"style":Di(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ti(e,o):(typeof o=="number"||typeof o=="bigint")&&ti(e,""+o);break;case"onScroll":o!=null&&Ce("scroll",e);break;case"onScrollEnd":o!=null&&Ce("scrollend",e);break;case"onClick":o!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Gt(e,a,o)}}}function ci(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:hn(e,n,f,M,a,null)}}u&&hn(e,n,"srcSet",a.srcSet,a,null),o&&hn(e,n,"src",a.src,a,null);return;case"input":Ce("invalid",e);var w=f=M=u=null,G=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var _t=a[o];if(_t!=null)switch(o){case"name":u=_t;break;case"type":M=_t;break;case"checked":G=_t;break;case"defaultChecked":it=_t;break;case"value":f=_t;break;case"defaultValue":w=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:hn(e,n,o,_t,a,null)}}Ln(e,f,w,G,it,M,u,!1);return;case"select":Ce("invalid",e),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":f=w;break;case"defaultValue":M=w;break;case"multiple":o=w;default:hn(e,n,u,w,a,null)}n=f,a=M,e.multiple=!!o,n!=null?Tn(e,!!o,n,!1):a!=null&&Tn(e,!!o,a,!0);return;case"textarea":Ce("invalid",e),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(w=a[M],w!=null))switch(M){case"value":o=w;break;case"defaultValue":u=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:hn(e,n,M,w,a,null)}Gi(e,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:hn(e,n,G,o,a,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(o=0;o<Ml.length;o++)Ce(Ml[o],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:hn(e,n,it,o,a,null)}return;default:if(qe(n)){for(_t in a)a.hasOwnProperty(_t)&&(o=a[_t],o!==void 0&&yh(e,n,_t,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&hn(e,n,w,o,a,null))}function mS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,w=null,G=null,it=null,_t=null;for(ut in a){var yt=a[ut];if(a.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":G=yt;default:o.hasOwnProperty(ut)||hn(e,n,ut,null,o,yt)}}for(var ot in o){var ut=o[ot];if(yt=a[ot],o.hasOwnProperty(ot)&&(ut!=null||yt!=null))switch(ot){case"type":f=ut;break;case"name":u=ut;break;case"checked":it=ut;break;case"defaultChecked":_t=ut;break;case"value":M=ut;break;case"defaultValue":w=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==yt&&hn(e,n,ot,ut,o,yt)}}Wt(e,M,w,G,it,_t,f,u);return;case"select":ut=M=w=ot=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ut=G;default:o.hasOwnProperty(f)||hn(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":ot=f;break;case"defaultValue":w=f;break;case"multiple":M=f;default:f!==G&&hn(e,n,u,f,o,G)}n=w,a=M,o=ut,ot!=null?Tn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?Tn(e,!!a,n,!0):Tn(e,!!a,a?[]:"",!1));return;case"textarea":ut=ot=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:hn(e,n,w,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":ot=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&hn(e,n,M,u,o,f)}bi(e,ot,ut);return;case"option":for(var Kt in a)if(ot=a[Kt],a.hasOwnProperty(Kt)&&ot!=null&&!o.hasOwnProperty(Kt))switch(Kt){case"selected":e.selected=!1;break;default:hn(e,n,Kt,null,o,ot)}for(G in o)if(ot=o[G],ut=a[G],o.hasOwnProperty(G)&&ot!==ut&&(ot!=null||ut!=null))switch(G){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:hn(e,n,G,ot,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)ot=a[re],a.hasOwnProperty(re)&&ot!=null&&!o.hasOwnProperty(re)&&hn(e,n,re,null,o,ot);for(it in o)if(ot=o[it],ut=a[it],o.hasOwnProperty(it)&&ot!==ut&&(ot!=null||ut!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:hn(e,n,it,ot,o,ut)}return;default:if(qe(n)){for(var dn in a)ot=a[dn],a.hasOwnProperty(dn)&&ot!==void 0&&!o.hasOwnProperty(dn)&&yh(e,n,dn,void 0,o,ot);for(_t in o)ot=o[_t],ut=a[_t],!o.hasOwnProperty(_t)||ot===ut||ot===void 0&&ut===void 0||yh(e,n,_t,ot,o,ut);return}}for(var K in a)ot=a[K],a.hasOwnProperty(K)&&ot!=null&&!o.hasOwnProperty(K)&&hn(e,n,K,null,o,ot);for(yt in o)ot=o[yt],ut=a[yt],!o.hasOwnProperty(yt)||ot===ut||ot==null&&ut==null||hn(e,n,yt,ot,o,ut)}function Pg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,M=u.initiatorType,w=u.duration;if(f&&w&&Pg(M)){for(M=0,w=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],it=G.startTime;if(it>w)break;var _t=G.transferSize,yt=G.initiatorType;_t&&Pg(yt)&&(G=G.responseEnd,M+=_t*(G<w?1:(w-it)/(G-it)))}if(--o,n+=8*(f+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Th=null,bh=null;function Gc(e){return e.nodeType===9?e:e.ownerDocument}function zg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ig(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Eh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ah=null;function _S(){var e=window.event;return e&&e.type==="popstate"?e===Ah?!1:(Ah=e,!0):(Ah=null,!1)}var Fg=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,xS=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(e){return Bg.resolve(null).then(e).catch(SS)}:Fg;function SS(e){setTimeout(function(){throw e})}function Xs(e){return e==="head"}function Vg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),So(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Tl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Tl(a);for(var f=a.firstChild;f;){var M=f.nextSibling,w=f.nodeName;f[Bi]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=M}}else a==="body"&&Tl(e.ownerDocument.body);a=u}while(a);So(n)}function Gg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Rh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rh(a),Wa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function MS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Bi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ca(e.nextSibling),e===null)break}return null}function yS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ca(e.nextSibling),e===null))return null;return e}function Hg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ca(e.nextSibling),e===null))return null;return e}function wh(e){return e.data==="$?"||e.data==="$~"}function Ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function TS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ca(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Dh=null;function kg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ca(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Xg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function qg(e,n,a){switch(n=Gc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Tl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Wa(e)}var ua=new Map,Wg=new Set;function Hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var us=B.d;B.d={f:bS,r:ES,D:AS,C:RS,L:wS,m:CS,X:NS,S:DS,M:US};function bS(){var e=us.f(),n=Lc();return e||n}function ES(e){var n=ma(e);n!==null&&n.tag===5&&n.type==="form"?c0(n):us.r(e)}var _o=typeof document>"u"?null:document;function Yg(e,n,a){var o=_o;if(o&&typeof n=="string"&&n){var u=Xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Wg.has(u)||(Wg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),ci(n,"link",e),Un(n),o.head.appendChild(n)))}}function AS(e){us.D(e),Yg("dns-prefetch",e,null)}function RS(e,n){us.C(e,n),Yg("preconnect",e,n)}function wS(e,n,a){us.L(e,n,a);var o=_o;if(o&&e&&n){var u='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xe(a.imageSizes)+'"]')):u+='[href="'+Xe(e)+'"]';var f=u;switch(n){case"style":f=vo(e);break;case"script":f=xo(e)}ua.has(f)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ua.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(bl(f))||n==="script"&&o.querySelector(El(f))||(n=o.createElement("link"),ci(n,"link",e),Un(n),o.head.appendChild(n)))}}function CS(e,n){us.m(e,n);var a=_o;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xe(o)+'"][href="'+Xe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=xo(e)}if(!ua.has(f)&&(e=S({rel:"modulepreload",href:e},n),ua.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(El(f)))return}o=a.createElement("link"),ci(o,"link",e),Un(o),a.head.appendChild(o)}}}function DS(e,n,a){us.S(e,n,a);var o=_o;if(o&&e){var u=Vi(o).hoistableStyles,f=vo(e);n=n||"default";var M=u.get(f);if(!M){var w={loading:0,preload:null};if(M=o.querySelector(bl(f)))w.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ua.get(f))&&Nh(e,a);var G=M=o.createElement("link");Un(G),ci(G,"link",e),G._p=new Promise(function(it,_t){G.onload=it,G.onerror=_t}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,kc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:w},u.set(f,M)}}}function NS(e,n){us.X(e,n);var a=_o;if(a&&e){var o=Vi(a).hoistableScripts,u=xo(e),f=o.get(u);f||(f=a.querySelector(El(u)),f||(e=S({src:e,async:!0},n),(n=ua.get(u))&&Uh(e,n),f=a.createElement("script"),Un(f),ci(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function US(e,n){us.M(e,n);var a=_o;if(a&&e){var o=Vi(a).hoistableScripts,u=xo(e),f=o.get(u);f||(f=a.querySelector(El(u)),f||(e=S({src:e,async:!0,type:"module"},n),(n=ua.get(u))&&Uh(e,n),f=a.createElement("script"),Un(f),ci(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function jg(e,n,a,o){var u=(u=rt.current)?Hc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=vo(a.href),a=Vi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vo(a.href);var f=Vi(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(bl(e)))&&!f._p&&(M.instance=f,M.state.loading=5),ua.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ua.set(e,a),f||LS(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xo(a),a=Vi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function vo(e){return'href="'+Xe(e)+'"'}function bl(e){return'link[rel="stylesheet"]['+e+"]"}function Zg(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function LS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),ci(n,"link",a),Un(n),e.head.appendChild(n))}function xo(e){return'[src="'+Xe(e)+'"]'}function El(e){return"script[async]"+e}function Kg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Xe(a.href)+'"]');if(o)return n.instance=o,Un(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Un(o),ci(o,"style",u),kc(o,a.precedence,e),n.instance=o;case"stylesheet":u=vo(a.href);var f=e.querySelector(bl(u));if(f)return n.state.loading|=4,n.instance=f,Un(f),f;o=Zg(a),(u=ua.get(u))&&Nh(o,u),f=(e.ownerDocument||e).createElement("link"),Un(f);var M=f;return M._p=new Promise(function(w,G){M.onload=w,M.onerror=G}),ci(f,"link",o),n.state.loading|=4,kc(f,a.precedence,e),n.instance=f;case"script":return f=xo(a.src),(u=e.querySelector(El(f)))?(n.instance=u,Un(u),u):(o=a,(u=ua.get(f))&&(o=S({},a),Uh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Un(u),ci(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,kc(o,a.precedence,e));return n.instance}function kc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var w=o[M];if(w.dataset.precedence===n)f=w;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Nh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Uh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Xc=null;function Qg(e,n,a){if(Xc===null){var o=new Map,u=Xc=new Map;u.set(a,o)}else u=Xc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Bi]||f[Ne]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var w=o.get(M);w?w.push(f):o.set(M,[f])}}return o}function Jg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function OS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $g(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function PS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=vo(o.href),f=n.querySelector(bl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=qc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Un(f);return}f=n.ownerDocument||n,o=Zg(o),(u=ua.get(u))&&Nh(o,u),f=f.createElement("link"),Un(f);var M=f;M._p=new Promise(function(w,G){M.onload=w,M.onerror=G}),ci(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=qc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Lh=0;function zS(e,n){return e.stylesheets&&e.count===0&&Yc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Yc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Lh===0&&(Lh=62500*gS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Yc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Lh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function qc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wc=null;function Yc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wc=new Map,n.forEach(IS,e),Wc=null,qc.call(e))}function IS(e,n){if(!(n.state.loading&4)){var a=Wc.get(e);if(a)var o=a.get(null);else{a=new Map,Wc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=qc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Al={$$typeof:O,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function FS(e,n,a,o,u,f,M,w,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dt(0),this.hiddenUpdates=dt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function t_(e,n,a,o,u,f,M,w,G,it,_t,yt){return e=new FS(e,n,a,M,G,it,_t,yt,w),n=1,f===!0&&(n|=24),f=Wi(3,null,null,n),e.current=f,f.stateNode=e,n=hf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},gf(f),e}function e_(e){return e?(e=Zr,e):Zr}function n_(e,n,a,o,u,f){u=e_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ls(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Os(e,o,n),a!==null&&(Pi(a,e,n),al(a,e,n))}function i_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Oh(e,n){i_(e,n),(e=e.alternate)&&i_(e,n)}function a_(e){if(e.tag===13||e.tag===31){var n=hr(e,67108864);n!==null&&Pi(n,e,67108864),Oh(e,67108864)}}function s_(e){if(e.tag===13||e.tag===31){var n=Qi();n=nn(n);var a=hr(e,n);a!==null&&Pi(a,e,n),Oh(e,n)}}var jc=!0;function BS(e,n,a,o){var u=U.T;U.T=null;var f=B.p;try{B.p=2,Ph(e,n,a,o)}finally{B.p=f,U.T=u}}function VS(e,n,a,o){var u=U.T;U.T=null;var f=B.p;try{B.p=8,Ph(e,n,a,o)}finally{B.p=f,U.T=u}}function Ph(e,n,a,o){if(jc){var u=zh(o);if(u===null)Mh(e,n,o,Zc,a),o_(e,o);else if(HS(u,e,n,a,o))o.stopPropagation();else if(o_(e,o),n&4&&-1<GS.indexOf(e)){for(;u!==null;){var f=ma(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=wt(f.pendingLanes);if(M!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var G=1<<31-Vt(M);w.entanglements[1]|=G,M&=~G}La(f),(en&6)===0&&(Nc=Dt()+500,Sl(0))}}break;case 31:case 13:w=hr(f,2),w!==null&&Pi(w,f,2),Lc(),Oh(f,2)}if(f=zh(o),f===null&&Mh(e,n,o,Zc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Mh(e,n,o,null,a)}}function zh(e){return e=Me(e),Ih(e)}var Zc=null;function Ih(e){if(Zc=null,e=pa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Zc=e,null}function r_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pn()){case N:return 2;case b:return 8;case Q:case vt:return 32;case Et:return 268435456;default:return 32}default:return 32}}var Fh=!1,qs=null,Ws=null,Ys=null,Rl=new Map,wl=new Map,js=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o_(e,n){switch(e){case"focusin":case"focusout":qs=null;break;case"dragenter":case"dragleave":Ws=null;break;case"mouseover":case"mouseout":Ys=null;break;case"pointerover":case"pointerout":Rl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(n.pointerId)}}function Cl(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ma(n),n!==null&&a_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function HS(e,n,a,o,u){switch(n){case"focusin":return qs=Cl(qs,e,n,a,o,u),!0;case"dragenter":return Ws=Cl(Ws,e,n,a,o,u),!0;case"mouseover":return Ys=Cl(Ys,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Rl.set(f,Cl(Rl.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,wl.set(f,Cl(wl.get(f)||null,e,n,a,o,u)),!0}return!1}function l_(e){var n=pa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,ai(e.priority,function(){s_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,ai(e.priority,function(){s_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=zh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Xt=o,a.target.dispatchEvent(o),Xt=null}else return n=ma(a),n!==null&&a_(n),e.blockedOn=a,!1;n.shift()}return!0}function c_(e,n,a){Kc(e)&&a.delete(n)}function kS(){Fh=!1,qs!==null&&Kc(qs)&&(qs=null),Ws!==null&&Kc(Ws)&&(Ws=null),Ys!==null&&Kc(Ys)&&(Ys=null),Rl.forEach(c_),wl.forEach(c_)}function Qc(e,n){e.blockedOn===n&&(e.blockedOn=null,Fh||(Fh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,kS)))}var Jc=null;function u_(e){Jc!==e&&(Jc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Jc===e&&(Jc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Ih(o||a)===null)continue;break}var f=ma(a);f!==null&&(e.splice(n,3),n-=3,zf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function So(e){function n(G){return Qc(G,e)}qs!==null&&Qc(qs,e),Ws!==null&&Qc(Ws,e),Ys!==null&&Qc(Ys,e),Rl.forEach(n),wl.forEach(n);for(var a=0;a<js.length;a++){var o=js[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<js.length&&(a=js[0],a.blockedOn===null);)l_(a),a.blockedOn===null&&js.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[mn]||null;if(typeof f=="function")M||u_(a);else if(M){var w=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[mn]||null)w=M.formAction;else if(Ih(u)!==null)continue}else w=M.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),u_(a)}}}function f_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Bh(e){this._internalRoot=e}$c.prototype.render=Bh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Qi();n_(a,o,e,n,null,null)},$c.prototype.unmount=Bh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;n_(e.current,2,null,e,null,null),Lc(),n[hi]=null}};function $c(e){this._internalRoot=e}$c.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ti();e={blockedOn:null,target:e,priority:n};for(var a=0;a<js.length&&n!==0&&n<js[a].priority;a++);js.splice(a,0,e),a===0&&l_(e)}};var h_=t.version;if(h_!=="19.2.7")throw Error(s(527,h_,"19.2.7"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var XS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{ft=tu.inject(XS),ht=tu}catch{}}return Nl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=x0,f=S0,M=M0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=t_(e,1,!1,null,null,a,o,null,u,f,M,f_),e[hi]=n.current,Sh(e),new Bh(n)},Nl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=x0,M=S0,w=M0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=t_(e,1,!0,n,a??null,o,u,G,f,M,w,f_),n.context=e_(null),a=n.current,o=Qi(),o=nn(o),u=Ls(o),u.callback=null,Os(a,u,o),a=o,n.current.lanes=a,Pt(n,a),La(n),e[hi]=n.current,Sh(e),new $c(n)},Nl.version="19.2.7",Nl}var y_;function tM(){if(y_)return Hh.exports;y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Hh.exports=$S(),Hh.exports}var eM=tM();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),iM=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),T_=r=>{const t=iM(r);return t.charAt(0).toUpperCase()+t.slice(1)},wv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),aM=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=Ut.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...p},m)=>Ut.createElement("svg",{ref:m,...sM,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:wv("lucide",l),...!c&&!aM(p)&&{"aria-hidden":"true"},...p},[...h.map(([d,_])=>Ut.createElement(d,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=(r,t)=>{const i=Ut.forwardRef(({className:s,...l},c)=>Ut.createElement(rM,{ref:c,iconNode:t,className:wv(`lucide-${nM(T_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=T_(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],lM=Ts("arrow-down-to-line",oM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],uM=Ts("arrow-left",cM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],hM=Ts("book-open",fM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]],pM=Ts("flashlight",dM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],gM=Ts("move",mM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],vM=Ts("shield",_M);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],SM=Ts("sparkles",xM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],yM=Ts("volume-2",MM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Cv=Ts("zap",TM);class bM{constructor(){this.ctx=null,this.masterVolume=null,this.humNode=null,this.humVolume=null,this.heartbeatInterval=null,this.isHumming=!1,this.volumeLevel=.5,this.monsterX=0,this.monsterY=.5,this.monsterZ=0,this.listenerX=0,this.listenerY=.9,this.listenerZ=0,this.lastHeartbeatIntensity=null,this.staticNode=null,this.staticVolume=null,this.breathingInterval=null}init(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterVolume=this.ctx.createGain(),this.masterVolume.gain.setValueAtTime(this.volumeLevel,this.ctx.currentTime),this.masterVolume.connect(this.ctx.destination)}catch(t){console.error("Web Audio API not supported",t)}}setVolume(t){this.volumeLevel=t,this.masterVolume&&this.ctx&&this.masterVolume.gain.setValueAtTime(t,this.ctx.currentTime)}updateListener(t,i,s,l,c,h){if(this.init(),this.resume(),!this.ctx)return;const p=this.ctx.currentTime,m=this.ctx.listener;this.monsterX=c,this.monsterY=.5,this.monsterZ=h,this.listenerX=t,this.listenerY=i,this.listenerZ=s,m.positionX?(m.positionX.setValueAtTime(t,p),m.positionY.setValueAtTime(i,p),m.positionZ.setValueAtTime(s,p)):m.setPosition(t,i,s);const d=-Math.sin(l),_=-Math.cos(l);m.forwardX?(m.forwardX.setValueAtTime(d,p),m.forwardY.setValueAtTime(0,p),m.forwardZ.setValueAtTime(_,p),m.upX.setValueAtTime(0,p),m.upY.setValueAtTime(1,p),m.upZ.setValueAtTime(0,p)):m.setOrientation(d,0,_,0,1,0);const S=c-t,g=h-s,y=Math.sqrt(S*S+g*g);if(this.staticVolume){let x=0;if(y<3.5)if(y<=1.5)x=.4;else{const v=(3.5-y)/2;x=.4*Math.pow(v,2.5)}this.staticVolume.gain.setTargetAtTime(x,p,.1)}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startBackgroundHum(){if(this.init(),this.resume(),this.startStaticNoise(),!(!this.ctx||!this.masterVolume||this.isHumming))try{this.isHumming=!0;const t=this.ctx,i=t.createOscillator();i.type="triangle",i.frequency.setValueAtTime(60,t.currentTime);const s=t.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(120,t.currentTime);const l=t.createOscillator();l.type="sine",l.frequency.setValueAtTime(360,t.currentTime);const c=t.createBiquadFilter();c.type="bandpass",c.Q.setValueAtTime(1.5,t.currentTime),c.frequency.setValueAtTime(100,t.currentTime);const h=t.createGain();h.gain.setValueAtTime(.015,t.currentTime);const p=t.createGain();p.gain.setValueAtTime(.005,t.currentTime),this.humVolume=t.createGain(),this.humVolume.gain.setValueAtTime(.12,t.currentTime),i.connect(this.humVolume),s.connect(h),h.connect(c),l.connect(p),p.connect(c),c.connect(this.humVolume),this.humVolume.connect(this.masterVolume),i.start(),s.start(),l.start(),this.humNode=i;const m=()=>{if(!this.isHumming||!t||!this.humVolume)return;const d=Math.random()*8e3+2e3;setTimeout(()=>{if(!this.isHumming||!t||!this.humVolume)return;const _=t.currentTime;this.humVolume.gain.setValueAtTime(.12,_),this.humVolume.gain.exponentialRampToValueAtTime(.01,_+.05),this.playClick(.05,120),this.humVolume.gain.setValueAtTime(.01,_+.15),this.humVolume.gain.exponentialRampToValueAtTime(.12,_+.25),m()},d)};m()}catch(t){console.error("Failed to start hum",t)}}stopBackgroundHum(){if(this.isHumming=!1,this.stopStaticNoise(),this.humNode){try{this.humNode.stop()}catch{}this.humNode=null}if(this.humVolume){try{this.humVolume.disconnect()}catch{}this.humVolume=null}}startStaticNoise(){if(this.init(),!(!this.ctx||!this.masterVolume||this.staticNode))try{const t=this.ctx;this.staticVolume=t.createGain(),this.staticVolume.gain.setValueAtTime(0,t.currentTime);const i=t.sampleRate*2,s=t.createBuffer(1,i,t.sampleRate),l=s.getChannelData(0);for(let p=0;p<i;p++)l[p]=Math.random()*2-1;this.staticNode=t.createBufferSource(),this.staticNode.buffer=s,this.staticNode.loop=!0;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(1e3,t.currentTime),c.Q.setValueAtTime(1,t.currentTime);const h=t.createBiquadFilter();h.type="highpass",h.frequency.setValueAtTime(400,t.currentTime),this.staticNode.connect(c),c.connect(h),h.connect(this.staticVolume),this.staticVolume.connect(this.masterVolume),this.staticNode.start()}catch(t){console.error("Failed to start static noise",t)}}stopStaticNoise(){if(this.staticNode){try{this.staticNode.stop()}catch{}this.staticNode=null}if(this.staticVolume){try{this.staticVolume.disconnect()}catch{}this.staticVolume=null}}playClick(t=.1,i=200){if(!this.ctx||!this.masterVolume)return;const s=this.ctx,l=s.createOscillator(),c=s.createGain();l.type="sine",l.frequency.setValueAtTime(i,s.currentTime),l.frequency.exponentialRampToValueAtTime(40,s.currentTime+.05),c.gain.setValueAtTime(t,s.currentTime),c.gain.exponentialRampToValueAtTime(.001,s.currentTime+.05),l.connect(c),c.connect(this.masterVolume),l.start(),l.stop(s.currentTime+.06)}playFootstep(){if(this.resume(),!this.ctx||!this.masterVolume)return;const t=this.ctx,i=t.currentTime,s=t.createOscillator(),l=t.createGain();s.type="sine",s.frequency.setValueAtTime(80,i),s.frequency.exponentialRampToValueAtTime(30,i+.12);const c=t.createBuffer(1,t.sampleRate*.15,t.sampleRate),h=c.getChannelData(0);for(let _=0;_<c.length;_++)h[_]=Math.random()*2-1;const p=t.createBufferSource();p.buffer=c;const m=t.createBiquadFilter();m.type="lowpass",m.frequency.setValueAtTime(150,i);const d=t.createGain();d.gain.setValueAtTime(.06,i),d.gain.exponentialRampToValueAtTime(.001,i+.15),p.connect(m),m.connect(d),d.connect(this.masterVolume),l.gain.setValueAtTime(.35,i),l.gain.exponentialRampToValueAtTime(.001,i+.15),s.connect(l),l.connect(this.masterVolume),s.start(i),s.stop(i+.16),p.start(i),p.stop(i+.16)}startHeartbeat(t){if(this.resume(),!this.ctx||!this.masterVolume||this.lastHeartbeatIntensity!==null&&Math.abs(this.lastHeartbeatIntensity-t)<.05)return;this.lastHeartbeatIntensity=t,this.stopHeartbeat();const s=60/(60+t*105)*1e3,l=()=>{if(!this.ctx||!this.masterVolume)return;const c=this.ctx,h=c.currentTime,p=this.monsterX-this.listenerX,m=this.monsterZ-this.listenerZ,d=Math.sqrt(p*p+m*m),S=Math.max(0,1-d/12),g=Math.pow(S,1.5),y=c.createOscillator(),T=c.createGain();y.type="sine",y.frequency.setValueAtTime(55,h),y.frequency.exponentialRampToValueAtTime(15,h+.1);const A=.35*(.6+t*.4)*g;T.gain.setValueAtTime(A,h),T.gain.exponentialRampToValueAtTime(.001,h+.12);const x=c.createPanner();x.panningModel="HRTF",x.distanceModel="linear",x.refDistance=1,x.maxDistance=12,x.rolloffFactor=1.8;const v=this.monsterX,C=this.monsterZ;x.positionX?(x.positionX.setValueAtTime(v,h),x.positionY.setValueAtTime(.5,h),x.positionZ.setValueAtTime(C,h)):x.setPosition(v,.5,C),y.connect(T),T.connect(x),x.connect(this.masterVolume),y.start(h),y.stop(h+.13),setTimeout(()=>{if(!this.ctx||!this.masterVolume)return;const O=this.ctx.currentTime,D=this.ctx.createOscillator(),V=this.ctx.createGain();D.type="sine",D.frequency.setValueAtTime(60,O),D.frequency.exponentialRampToValueAtTime(15,O+.12);const L=.28*(.6+t*.4)*g;V.gain.setValueAtTime(L,O),V.gain.exponentialRampToValueAtTime(.001,O+.15);const P=this.ctx.createPanner();P.panningModel="HRTF",P.distanceModel="linear",P.refDistance=1,P.maxDistance=12,P.rolloffFactor=1.8;const E=this.monsterX,z=this.monsterZ;P.positionX?(P.positionX.setValueAtTime(E,O),P.positionY.setValueAtTime(.5,O),P.positionZ.setValueAtTime(z,O)):P.setPosition(E,.5,z),D.connect(V),V.connect(P),P.connect(this.masterVolume),D.start(O),D.stop(O+.16)},150)};l(),this.heartbeatInterval=setInterval(l,s)}stopHeartbeat(){this.lastHeartbeatIntensity=null,this.heartbeatInterval&&(clearInterval(this.heartbeatInterval),this.heartbeatInterval=null)}startBreathing(){if(this.resume(),!this.ctx||!this.masterVolume||this.breathingInterval)return;const t=()=>{if(!this.ctx||!this.masterVolume)return;const i=this.ctx,s=i.currentTime,l=i.createBuffer(1,i.sampleRate*1.5,i.sampleRate),c=l.getChannelData(0);for(let d=0;d<l.length;d++)c[d]=Math.random()*2-1;const h=i.createBufferSource();h.buffer=l;const p=i.createBiquadFilter();p.type="bandpass",p.frequency.setValueAtTime(300,s),p.frequency.linearRampToValueAtTime(700,s+1.2),p.Q.setValueAtTime(.5,s);const m=i.createGain();m.gain.setValueAtTime(.001,s),m.gain.linearRampToValueAtTime(.05,s+.6),m.gain.linearRampToValueAtTime(.001,s+1.2),h.connect(p),p.connect(m),m.connect(this.masterVolume),h.start(s),h.stop(s+1.3),setTimeout(()=>{if(!this.ctx||!this.masterVolume)return;const d=this.ctx.currentTime,_=this.ctx.createBuffer(1,this.ctx.sampleRate*1.8,this.ctx.sampleRate),S=_.getChannelData(0);for(let A=0;A<_.length;A++)S[A]=Math.random()*2-1;const g=this.ctx.createBufferSource();g.buffer=_;const y=this.ctx.createBiquadFilter();y.type="bandpass",y.frequency.setValueAtTime(600,d),y.frequency.linearRampToValueAtTime(250,d+1.5),y.Q.setValueAtTime(.5,d);const T=this.ctx.createGain();T.gain.setValueAtTime(.001,d),T.gain.linearRampToValueAtTime(.06,d+.4),T.gain.linearRampToValueAtTime(.001,d+1.5),g.connect(y),y.connect(T),T.connect(this.masterVolume),g.start(d),g.stop(d+1.6)},1400)};t(),this.breathingInterval=setInterval(t,3200)}stopBreathing(){this.breathingInterval&&(clearInterval(this.breathingInterval),this.breathingInterval=null)}playEntityTwitchSpatial(t,i,s,l,c,h){if(this.resume(),!this.ctx||!this.masterVolume)return;const p=this.ctx,m=p.currentTime;try{const d=t-l,_=s-c,S=Math.sqrt(d*d+_*_);if(S<.1)return;const y=Math.max(0,1-S/30);if(y<=.01)return;const A=Math.atan2(d,_)-h,x=Math.sin(A);let v;p.createStereoPanner?(v=p.createStereoPanner(),v.pan.setValueAtTime(x,m)):v=p.createGain();const C=p.createBuffer(1,p.sampleRate*.35,p.sampleRate),O=C.getChannelData(0);for(let z=0;z<C.length;z++)O[z]=Math.random()*2-1;const D=p.createBufferSource();D.buffer=C;const V=p.createBiquadFilter();V.type="bandpass",V.frequency.setValueAtTime(140+Math.random()*60,m),V.Q.setValueAtTime(1.2,m);const L=p.createGain();L.gain.setValueAtTime(y*.22,m),L.gain.linearRampToValueAtTime(y*.25,m+.08),L.gain.setValueAtTime(0,m+.12),L.gain.setValueAtTime(y*.15,m+.16),L.gain.exponentialRampToValueAtTime(.001,m+.33);const P=p.createOscillator(),E=p.createGain();P.type="triangle",P.frequency.setValueAtTime(55,m),P.frequency.linearRampToValueAtTime(40,m+.3),E.gain.setValueAtTime(y*.35,m),E.gain.exponentialRampToValueAtTime(.001,m+.3),D.connect(V),V.connect(L),L.connect(v),P.connect(v),E.connect(v),v.connect(this.masterVolume),D.start(m),D.stop(m+.35),P.start(m),P.stop(m+.35)}catch(d){console.error("Spatial play error",d)}}playEntityFootstepSpatial(t,i,s,l,c,h,p){if(this.resume(),!this.ctx||!this.masterVolume)return;const m=this.ctx,d=m.currentTime;try{const _=t-l,S=s-c,g=Math.sqrt(_*_+S*S);if(g<.1)return;const y=18,T=Math.pow(Math.max(0,1-g/y),2);if(T<=.01)return;const A=m.createPanner();A.panningModel="HRTF",A.distanceModel="linear",A.refDistance=1,A.maxDistance=y,A.rolloffFactor=1.5,A.positionX?(A.positionX.setValueAtTime(t,d),A.positionY.setValueAtTime(i,d),A.positionZ.setValueAtTime(s,d)):A.setPosition(t,i,s);const x=m.createOscillator(),v=m.createGain();x.type="sine";const C=p?95:75,O=p?45:35,D=p?.35:.5;x.frequency.setValueAtTime(C,d),x.frequency.exponentialRampToValueAtTime(O,d+D);const V=m.createBiquadFilter();V.type="lowpass",V.frequency.setValueAtTime(250,d),v.gain.setValueAtTime(T*(p?3.5:2.5),d),v.gain.exponentialRampToValueAtTime(.001,d+D),x.connect(V),V.connect(v),v.connect(A);const L=m.createBuffer(1,m.sampleRate*.4,m.sampleRate),P=L.getChannelData(0);for(let H=0;H<L.length;H++)P[H]=Math.random()*2-1;const E=m.createBufferSource();E.buffer=L;const z=m.createBiquadFilter();z.type="lowpass",z.frequency.setValueAtTime(p?350:250,d);const q=m.createGain();q.gain.setValueAtTime(T*(p?.8:.5),d),p?(q.gain.linearRampToValueAtTime(T*1.2,d+.05),q.gain.linearRampToValueAtTime(T*.3,d+.1),q.gain.linearRampToValueAtTime(T*.9,d+.15)):q.gain.linearRampToValueAtTime(T*.7,d+.12),q.gain.exponentialRampToValueAtTime(.001,d+.35),E.connect(z),z.connect(q),q.connect(A);const F=m.createOscillator(),X=m.createGain();F.type="triangle";const st=p?180:120;F.frequency.setValueAtTime(st,d),F.frequency.exponentialRampToValueAtTime(40,d+.08);const ct=m.createBiquadFilter();ct.type="lowpass",ct.frequency.setValueAtTime(250,d),X.gain.setValueAtTime(T*(p?.7:.4),d),X.gain.exponentialRampToValueAtTime(.001,d+.09),F.connect(ct),ct.connect(X),X.connect(A),A.connect(this.masterVolume),x.start(d),x.stop(d+D+.05),E.start(d),E.stop(d+.4),F.start(d),F.stop(d+.1)}catch(_){console.error("Entity footstep play error",_)}}playJumpscare(){if(this.resume(),!this.ctx||!this.masterVolume)return;this.stopHeartbeat();const t=this.ctx,i=t.currentTime,s=5,l=t.createGain();l.gain.setValueAtTime(.8,i),l.gain.exponentialRampToValueAtTime(.01,i+2.5),l.connect(this.masterVolume);for(let g=0;g<s;g++){const y=t.createOscillator();y.type=g%2===0?"sawtooth":"square",y.frequency.setValueAtTime(300+g*157+Math.random()*50,i),y.frequency.exponentialRampToValueAtTime(2e3+Math.random()*1e3,i+.4),y.frequency.exponentialRampToValueAtTime(150,i+2);const T=t.createGain();T.gain.setValueAtTime(.12,i),T.gain.exponentialRampToValueAtTime(.001,i+2),y.connect(T),T.connect(l),y.start(i),y.stop(i+2.6)}const c=t.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(120,i),c.frequency.linearRampToValueAtTime(30,i+1);const h=t.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(200,i);const p=t.createGain();p.gain.setValueAtTime(.8,i),p.gain.exponentialRampToValueAtTime(.001,i+1.5),c.connect(h),h.connect(p),p.connect(l),c.start(i),c.stop(i+1.6);const m=t.createBuffer(1,t.sampleRate*2.5,t.sampleRate),d=m.getChannelData(0);for(let g=0;g<m.length;g++)d[g]=Math.random()*2-1;const _=t.createBufferSource();_.buffer=m;const S=t.createGain();S.gain.setValueAtTime(.5,i),S.gain.exponentialRampToValueAtTime(.01,i+2),_.connect(S),S.connect(l),_.start(i),_.stop(i+2.6)}playBatteryPickup(){if(this.resume(),!this.ctx||!this.masterVolume)return;const t=this.ctx,i=t.currentTime,s=t.createOscillator(),l=t.createOscillator(),c=t.createGain();s.type="sine",s.frequency.setValueAtTime(523.25,i),s.frequency.setValueAtTime(783.99,i+.08),l.type="triangle",l.frequency.setValueAtTime(1046.5,i),l.frequency.setValueAtTime(1567.98,i+.08),c.gain.setValueAtTime(.15,i),c.gain.exponentialRampToValueAtTime(.001,i+.3),s.connect(c),l.connect(c),c.connect(this.masterVolume),s.start(i),l.start(i),s.stop(i+.35),l.stop(i+.35)}playKeycardPickup(){if(this.resume(),!this.ctx||!this.masterVolume)return;const t=this.ctx,i=t.currentTime,s=t.createOscillator(),l=t.createGain();s.type="triangle",s.frequency.setValueAtTime(440,i),s.frequency.setValueAtTime(554.37,i+.1),s.frequency.setValueAtTime(659.25,i+.2),s.frequency.setValueAtTime(880,i+.3),l.gain.setValueAtTime(.18,i),l.gain.exponentialRampToValueAtTime(.001,i+.6),s.connect(l),l.connect(this.masterVolume),s.start(i),s.stop(i+.65)}playFlashlightClick(){this.playClick(.15,600)}playCameraFlash(){if(this.resume(),!this.ctx||!this.masterVolume)return;const t=this.ctx,i=this.masterVolume,s=t.currentTime,l=Math.floor(t.sampleRate*.5),c=t.createBuffer(1,l,t.sampleRate),h=c.getChannelData(0);for(let U=0;U<l;U++)h[U]=Math.random()*2-1;const p=t.createBufferSource();p.buffer=c;const m=t.createBiquadFilter();m.type="lowpass",m.frequency.setValueAtTime(220,s);const d=t.createGain();d.gain.setValueAtTime(.001,s),d.gain.exponentialRampToValueAtTime(.4,s+.002),d.gain.exponentialRampToValueAtTime(.001,s+.02);const _=t.createOscillator(),S=t.createGain();_.type="sine",_.frequency.setValueAtTime(150,s),_.frequency.exponentialRampToValueAtTime(80,s+.02),S.gain.setValueAtTime(.001,s),S.gain.exponentialRampToValueAtTime(.6,s+.002),S.gain.exponentialRampToValueAtTime(.001,s+.02),p.connect(m),m.connect(d),d.connect(i),_.connect(S),S.connect(i),p.start(s),p.stop(s+.03),_.start(s),_.stop(s+.03);const g=s+.015,y=t.createBufferSource();y.buffer=c;const T=t.createBiquadFilter();T.type="bandpass",T.frequency.setValueAtTime(1500,g),T.Q.setValueAtTime(2.5,g);const A=t.createBiquadFilter();A.type="highpass",A.frequency.setValueAtTime(2500,g);const x=t.createGain();x.gain.setValueAtTime(.001,g),x.gain.exponentialRampToValueAtTime(.9,g+.001),x.gain.exponentialRampToValueAtTime(.001,g+.03);const v=t.createOscillator(),C=t.createGain();v.type="triangle",v.frequency.setValueAtTime(3e3,g),v.frequency.exponentialRampToValueAtTime(600,g+.008),C.gain.setValueAtTime(.001,g),C.gain.exponentialRampToValueAtTime(.8,g+.001),C.gain.exponentialRampToValueAtTime(.001,g+.01),y.connect(T),T.connect(A),A.connect(x),x.connect(i),v.connect(C),C.connect(i),y.start(g),y.stop(g+.045),v.start(g),v.stop(g+.015);const D=g+.052,V=t.createBufferSource();V.buffer=c;const L=t.createBiquadFilter();L.type="bandpass",L.frequency.setValueAtTime(1100,D),L.Q.setValueAtTime(2.2,D);const P=t.createBiquadFilter();P.type="highpass",P.frequency.setValueAtTime(1800,D);const E=t.createGain();E.gain.setValueAtTime(.001,D),E.gain.exponentialRampToValueAtTime(.65,D+.001),E.gain.exponentialRampToValueAtTime(.001,D+.035);const z=t.createOscillator(),q=t.createGain();z.type="triangle",z.frequency.setValueAtTime(2200,D),z.frequency.exponentialRampToValueAtTime(400,D+.01),q.gain.setValueAtTime(.001,D),q.gain.exponentialRampToValueAtTime(.5,D+.001),q.gain.exponentialRampToValueAtTime(.001,D+.012),V.connect(L),L.connect(P),P.connect(E),E.connect(i),z.connect(q),q.connect(i),V.start(D),V.stop(D+.05),z.start(D),z.stop(D+.015);const F=D+.005,X=t.createOscillator(),st=t.createGain();X.type="sine",X.frequency.setValueAtTime(105,F);const ct=t.createOscillator(),H=t.createGain();ct.type="triangle",ct.frequency.setValueAtTime(165,F),st.gain.setValueAtTime(.001,F),st.gain.exponentialRampToValueAtTime(.25,F+.01),st.gain.exponentialRampToValueAtTime(.001,F+.12),H.gain.setValueAtTime(.001,F),H.gain.exponentialRampToValueAtTime(.12,F+.01),H.gain.exponentialRampToValueAtTime(.001,F+.09),X.connect(st),ct.connect(H),st.connect(i),H.connect(i),X.start(F),X.stop(F+.14),ct.start(F),ct.stop(F+.11)}playEscapeChime(){if(this.resume(),!this.ctx||!this.masterVolume)return;const t=this.ctx,i=t.currentTime;[261.63,329.63,392,523.25].forEach((l,c)=>{const h=t.createOscillator(),p=t.createGain();h.type="sine",h.frequency.setValueAtTime(l,i+c*.1),h.frequency.exponentialRampToValueAtTime(l*2,i+1),p.gain.setValueAtTime(.1,i+c*.1),p.gain.exponentialRampToValueAtTime(.001,i+1.5),h.connect(p),p.connect(this.masterVolume),h.start(i),h.stop(i+1.6)})}playAmbientClank(){if(this.resume(),!this.ctx||!this.masterVolume)return;const t=this.ctx,i=t.currentTime,s=t.createOscillator(),l=t.createGain();s.type="sawtooth",s.frequency.setValueAtTime(100+Math.random()*50,i),s.frequency.exponentialRampToValueAtTime(10,i+.8);const c=t.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(600,i),c.Q.setValueAtTime(3,i),l.gain.setValueAtTime(.12,i),l.gain.exponentialRampToValueAtTime(.001,i+.8),s.connect(c),c.connect(l),l.connect(this.masterVolume),s.start(i),s.stop(i+.85)}}const vn=new bM,EM="/backrooms-escape/assets/backrooms_classic_lobby_1782420315664-CpRFQoRP.jpg",AM=({onStartGame:r})=>{const[t]=Ut.useState(1.5),[i]=Ut.useState(.5),[s]=Ut.useState(!0),[l]=Ut.useState("NORMAL"),[c,h]=Ut.useState("MENU"),[p,m]=Ut.useState(0),_=[{label:"Start",action:()=>{vn.init(),vn.setVolume(i),r({sensitivity:t,soundVolume:i,lowResMode:s,difficulty:l})}},{label:"Survival Manual",action:()=>h("SURVIVAL")}];return St.jsxs("div",{className:"relative w-full h-full min-h-screen bg-black text-amber-100 font-vt flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden",children:[St.jsx("div",{className:"absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105",style:{backgroundImage:`url(${EM})`,filter:"brightness(0.65) contrast(1.15) saturate(0.9)"}}),St.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.06] z-10",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}),St.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.14] z-10",style:{backgroundImage:"linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.5) 50%)",backgroundSize:"100% 6px"}}),St.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.9)_100%)] z-10"}),St.jsx("div",{className:"relative z-20 flex flex-col justify-between h-full w-full max-w-7xl mx-auto my-auto grow",children:c==="MENU"?St.jsxs("div",{className:"flex flex-col justify-between h-full w-full grow pt-12 md:pt-16 pb-6",children:[St.jsx("div",{className:"flex flex-col gap-1 items-start select-none mt-12 md:mt-16",children:St.jsxs("div",{className:"relative group select-none",children:[St.jsx("h1",{className:"text-5xl sm:text-6xl md:text-8xl font-black tracking-widest uppercase text-[#00ffff] absolute -left-[3px] -top-[1px] opacity-70 mix-blend-screen select-none pointer-events-none font-vt whitespace-nowrap",children:"THE BACKROOMS"}),St.jsx("h1",{className:"text-5xl sm:text-6xl md:text-8xl font-black tracking-widest uppercase text-[#ff0000] absolute left-[3px] top-[1px] opacity-70 mix-blend-screen select-none pointer-events-none font-vt whitespace-nowrap",children:"THE BACKROOMS"}),St.jsx("h1",{className:"text-5xl sm:text-6xl md:text-8xl font-black tracking-widest uppercase text-white relative z-10 font-vt shadow-black drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] whitespace-nowrap",children:"THE BACKROOMS"})]})}),St.jsx("div",{className:"flex flex-col gap-4 items-start pl-2 md:pl-6 max-w-md mt-auto mb-12",children:_.map((S,g)=>{const y=p===g;return St.jsxs("button",{onClick:S.action,onMouseEnter:()=>m(g),className:"flex items-center text-4xl md:text-5xl text-left bg-transparent border-none outline-none cursor-pointer group transition-all duration-150",children:[St.jsx("span",{className:`font-vt uppercase tracking-wider transition-all duration-150 ${y?"text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] scale-105 pl-2":"text-amber-200/55 hover:text-amber-100"}`,children:S.label}),y&&St.jsx("span",{className:"text-white text-3xl md:text-4xl font-mono ml-4 animate-pulse",children:"<"})]},S.label)})})]}):St.jsx("div",{className:"flex flex-col justify-center items-center h-full w-full max-w-2xl mx-auto p-4 my-auto",children:St.jsxs("div",{className:"w-full bg-black/85 border border-amber-500/40 rounded p-6 shadow-[0_0_35px_rgba(217,119,6,0.15)] flex flex-col gap-6 relative",children:[St.jsxs("div",{className:"flex justify-between items-center border-b border-amber-500/20 pb-3",children:[St.jsxs("div",{className:"flex items-center gap-2",children:[St.jsx(hM,{className:"w-6 h-6 text-amber-500"}),St.jsx("h2",{className:"text-3xl font-vt text-amber-500 uppercase tracking-widest",children:"SURVIVAL MANUAL"})]}),St.jsxs("button",{onClick:()=>h("MENU"),className:"px-3 py-1 bg-amber-950/40 hover:bg-amber-600 hover:text-black border border-amber-500/30 text-amber-400 font-mono text-xs rounded transition-all cursor-pointer uppercase flex items-center gap-1.5",children:[St.jsx(uM,{className:"w-3.5 h-3.5"})," Back"]})]}),St.jsxs("ul",{className:"flex flex-col gap-4 text-amber-200/90 font-mono text-xs md:text-sm",children:[St.jsxs("li",{className:"flex gap-3 items-start bg-black/40 p-3 rounded border border-amber-200/5",children:[St.jsx(gM,{className:"w-5 h-5 text-amber-500 shrink-0 mt-0.5"}),St.jsxs("div",{children:[St.jsx("strong",{className:"text-amber-400 font-bold block uppercase tracking-wider text-[11px] mb-1",children:"CONTROLS"}),"Use ",St.jsx("span",{className:"text-amber-400 font-bold",children:"WASD"})," or ",St.jsx("span",{className:"text-amber-400 font-bold",children:"Arrow Keys"})," to walk. Drag your mouse or swipe the screen to look. Hold ",St.jsx("span",{className:"text-amber-400 font-bold",children:"L-SHIFT"})," to run (uses stamina)."]})]}),St.jsxs("li",{className:"flex gap-3 items-start bg-black/40 p-3 rounded border border-amber-200/5",children:[St.jsx(Cv,{className:"w-5 h-5 text-amber-500 shrink-0 mt-0.5"}),St.jsxs("div",{children:[St.jsx("strong",{className:"text-amber-400 font-bold block uppercase tracking-wider text-[11px] mb-1",children:"STUN FLASH"}),"Press ",St.jsx("span",{className:"text-amber-400 font-bold",children:"F"})," to trigger a high-intensity flash. This discharge will temporarily stun the entity if it is at close range and within your field of view. The flash requires several seconds to passively recharge after each use."]})]}),St.jsxs("li",{className:"flex gap-3 items-start bg-black/40 p-3 rounded border border-amber-200/5",children:[St.jsx(vM,{className:"w-5 h-5 text-amber-500 shrink-0 mt-0.5"}),St.jsxs("div",{children:[St.jsx("strong",{className:"text-amber-400 font-bold block uppercase tracking-wider text-[11px] mb-1",children:"THE ENTITY"}),"A skeletal wire-tendril entity stalks you. If you hear static, it is close. Use your flash strategically to incapacitate it and make your escape. If it gets too close, it will chase you!"]})]}),St.jsxs("li",{className:"flex gap-3 items-start bg-black/40 p-3 rounded border border-amber-200/5",children:[St.jsx(yM,{className:"w-5 h-5 text-amber-500 shrink-0 mt-0.5"}),St.jsxs("div",{children:[St.jsx("strong",{className:"text-amber-400 font-bold block uppercase tracking-wider text-[11px] mb-1",children:"ACOUSTIC WARNING"}),"Sprinting generates noise that the entity can hear if it is close enough. Avoid sprinting when you suspect the entity is nearby; it will hear your heavy footsteps and investigate the location the sound came from, even without direct line of sight. While hearing you sprint does not immediately trigger active chase mode, the entity will actively navigate to the noise source. Sprinting near the entity is highly dangerous, even around corners or through walls."]})]}),St.jsxs("li",{className:"flex gap-3 items-start bg-black/40 p-3 rounded border border-amber-200/5",children:[St.jsx(SM,{className:"w-5 h-5 text-amber-500 shrink-0 mt-0.5"}),St.jsxs("div",{children:[St.jsx("strong",{className:"text-amber-400 font-bold block uppercase tracking-wider text-[11px] mb-1",children:"MISSION OBJECTIVE"}),"Locate ",St.jsx("span",{className:"text-cyan-400 font-extrabold",children:"3 Broken Keycard Pieces"})," scattered in the maze. They will automatically combine into a complete keycard once all are collected. The full card is required to unlock the elevator and escape!"]})]})]})]})})})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="184",RM=0,b_=1,wM=2,Eu=1,CM=2,Vl=3,ar=0,Fi=1,_s=2,xs=0,Io=1,E_=2,A_=3,R_=4,DM=5,Dr=100,NM=101,UM=102,LM=103,OM=104,PM=200,zM=201,IM=202,FM=203,Dd=204,Nd=205,BM=206,VM=207,GM=208,HM=209,kM=210,XM=211,qM=212,WM=213,YM=214,Ud=0,Ld=1,Od=2,Bo=3,Pd=4,zd=5,Id=6,Fd=7,yp=0,jM=1,ZM=2,Va=0,Dv=1,Nv=2,Uv=3,Lv=4,Ov=5,Pv=6,zv=7,Iv=300,Or=301,Vo=302,Wh=303,Yh=304,Gu=306,gs=1e3,vs=1001,Bd=1002,ui=1003,KM=1004,eu=1005,xi=1006,jh=1007,Ur=1008,ea=1009,Fv=1010,Bv=1011,ql=1012,Tp=1013,ka=1014,Fa=1015,Ms=1016,bp=1017,Ep=1018,Wl=1020,Vv=35902,Gv=35899,Hv=1021,kv=1022,ba=1023,ys=1026,Lr=1027,Xv=1028,Ap=1029,Pr=1030,Rp=1031,wp=1033,Au=33776,Ru=33777,wu=33778,Cu=33779,Vd=35840,Gd=35841,Hd=35842,kd=35843,Xd=36196,qd=37492,Wd=37496,Yd=37488,jd=37489,Nu=37490,Zd=37491,Kd=37808,Qd=37809,Jd=37810,$d=37811,tp=37812,ep=37813,np=37814,ip=37815,ap=37816,sp=37817,rp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,hp=36495,dp=36283,pp=36284,Uu=36285,mp=36286,QM=3200,Lu=0,JM=1,nr="",da="srgb",Ou="srgb-linear",Pu="linear",un="srgb",Mo=7680,w_=519,$M=512,ty=513,ey=514,Cp=515,ny=516,iy=517,Dp=518,ay=519,C_=35044,D_="300 es",Ba=2e3,Yl=2001;function sy(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function zu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ry(){const r=zu("canvas");return r.style.display="block",r}const N_={};function U_(...r){const t="THREE."+r.shift();console.log(t,...r)}function qv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ue(...r){r=qv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ye(...r){r=qv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function gp(...r){const t=r.join(" ");t in N_||(N_[t]=!0,ue(...r))}function oy(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const ly={[Ud]:Ld,[Od]:Id,[Pd]:Fd,[Bo]:zd,[Ld]:Ud,[Id]:Od,[Fd]:Pd,[zd]:Bo};class zr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const _i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zh=Math.PI/180,Iu=180/Math.PI;function jl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_i[r&255]+_i[r>>8&255]+_i[r>>16&255]+_i[r>>24&255]+"-"+_i[t&255]+_i[t>>8&255]+"-"+_i[t>>16&15|64]+_i[t>>24&255]+"-"+_i[i&63|128]+_i[i>>8&255]+"-"+_i[i>>16&255]+_i[i>>24&255]+_i[s&255]+_i[s>>8&255]+_i[s>>16&255]+_i[s>>24&255]).toLowerCase()}function Be(r,t,i){return Math.max(t,Math.min(i,r))}function cy(r,t){return(r%t+t)%t}function Kh(r,t,i){return(1-i)*r+i*t}function Ul(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function zi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Pp=class Pp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Be(this.x,t.x,i.x),this.y=Be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Be(this.x,t,i),this.y=Be(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pp.prototype.isVector2=!0;let je=Pp;class Ir{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],_=s[l+2],S=s[l+3],g=c[h+0],y=c[h+1],T=c[h+2],A=c[h+3];if(S!==A||m!==g||d!==y||_!==T){let x=m*g+d*y+_*T+S*A;x<0&&(g=-g,y=-y,T=-T,A=-A,x=-x);let v=1-p;if(x<.9995){const C=Math.acos(x),O=Math.sin(C);v=Math.sin(v*C)/O,p=Math.sin(p*C)/O,m=m*v+g*p,d=d*v+y*p,_=_*v+T*p,S=S*v+A*p}else{m=m*v+g*p,d=d*v+y*p,_=_*v+T*p,S=S*v+A*p;const C=1/Math.sqrt(m*m+d*d+_*_+S*S);m*=C,d*=C,_*=C,S*=C}}t[i]=m,t[i+1]=d,t[i+2]=_,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],_=s[l+3],S=c[h],g=c[h+1],y=c[h+2],T=c[h+3];return t[i]=p*T+_*S+m*y-d*g,t[i+1]=m*T+_*g+d*S-p*y,t[i+2]=d*T+_*y+p*g-m*S,t[i+3]=_*T-p*S-m*g-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(s/2),_=p(l/2),S=p(c/2),g=m(s/2),y=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*_*S+d*y*T,this._y=d*y*S-g*_*T,this._z=d*_*T+g*y*S,this._w=d*_*S-g*y*T;break;case"YXZ":this._x=g*_*S+d*y*T,this._y=d*y*S-g*_*T,this._z=d*_*T-g*y*S,this._w=d*_*S+g*y*T;break;case"ZXY":this._x=g*_*S-d*y*T,this._y=d*y*S+g*_*T,this._z=d*_*T+g*y*S,this._w=d*_*S-g*y*T;break;case"ZYX":this._x=g*_*S-d*y*T,this._y=d*y*S+g*_*T,this._z=d*_*T-g*y*S,this._w=d*_*S+g*y*T;break;case"YZX":this._x=g*_*S+d*y*T,this._y=d*y*S+g*_*T,this._z=d*_*T-g*y*S,this._w=d*_*S-g*y*T;break;case"XZY":this._x=g*_*S-d*y*T,this._y=d*y*S-g*_*T,this._z=d*_*T+g*y*S,this._w=d*_*S+g*y*T;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],_=i[6],S=i[10],g=s+p+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-d)*y,this._z=(h-l)*y}else if(s>p&&s>S){const y=2*Math.sqrt(1+s-p-S);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+d)/y}else if(p>S){const y=2*Math.sqrt(1+p-s-S);this._w=(c-d)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+S-s-p);this._w=(h-l)/y,this._x=(c+d)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,p=i._x,m=i._y,d=i._z,_=i._w;return this._x=s*_+h*p+l*d-c*m,this._y=l*_+h*m+c*p-s*d,this._z=c*_+h*d+s*m-l*p,this._w=h*_-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),_=Math.sin(d);m=Math.sin(m*d)/_,i=Math.sin(i*d)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zp=class zp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(L_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(L_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*s),_=2*(p*i-c*l),S=2*(c*s-h*i);return this.x=i+m*d+h*S-p*_,this.y=s+m*_+p*d-c*S,this.z=l+m*S+c*_-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Be(this.x,t.x,i.x),this.y=Be(this.y,t.y,i.y),this.z=Be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Be(this.x,t,i),this.y=Be(this.y,t,i),this.z=Be(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qh.copy(this).projectOnVector(t),this.sub(Qh)}reflect(t){return this.sub(Qh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zp.prototype.isVector3=!0;let Z=zp;const Qh=new Z,L_=new Ir,Ip=class Ip{constructor(t,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d)}set(t,i,s,l,c,h,p,m,d){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],_=s[4],S=s[7],g=s[2],y=s[5],T=s[8],A=l[0],x=l[3],v=l[6],C=l[1],O=l[4],D=l[7],V=l[2],L=l[5],P=l[8];return c[0]=h*A+p*C+m*V,c[3]=h*x+p*O+m*L,c[6]=h*v+p*D+m*P,c[1]=d*A+_*C+S*V,c[4]=d*x+_*O+S*L,c[7]=d*v+_*D+S*P,c[2]=g*A+y*C+T*V,c[5]=g*x+y*O+T*L,c[8]=g*v+y*D+T*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8];return i*h*_-i*p*d-s*c*_+s*p*m+l*c*d-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8],S=_*h-p*d,g=p*m-_*c,y=d*c-h*m,T=i*S+s*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=S*A,t[1]=(l*d-_*s)*A,t[2]=(p*s-l*h)*A,t[3]=g*A,t[4]=(_*i-l*m)*A,t[5]=(l*c-p*i)*A,t[6]=y*A,t[7]=(s*m-d*i)*A,t[8]=(h*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Jh.makeScale(t,i)),this}rotate(t){return this.premultiply(Jh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Jh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ip.prototype.isMatrix3=!0;let _e=Ip;const Jh=new _e,O_=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uy(){const r={enabled:!0,workingColorSpace:Ou,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===un&&(l.r=Ss(l.r),l.g=Ss(l.g),l.b=Ss(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===un&&(l.r=Fo(l.r),l.g=Fo(l.g),l.b=Fo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===nr?Pu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return gp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return gp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ou]:{primaries:t,whitePoint:s,transfer:Pu,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:da},outputColorSpaceConfig:{drawingBufferColorSpace:da}},[da]:{primaries:t,whitePoint:s,transfer:un,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:da}}}),r}const Fe=uy();function Ss(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yo;class fy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{yo===void 0&&(yo=zu("canvas")),yo.width=t.width,yo.height=t.height;const l=yo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=yo}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=zu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ss(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ss(i[s]/255)*255):i[s]=Ss(i[s]);return{data:i,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hy=0;class Np{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=jl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push($h(l[h].image)):c.push($h(l[h]))}else c=$h(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function $h(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let dy=0;const td=new Z;class Si extends zr{constructor(t=Si.DEFAULT_IMAGE,i=Si.DEFAULT_MAPPING,s=vs,l=vs,c=xi,h=Ur,p=ba,m=ea,d=Si.DEFAULT_ANISOTROPY,_=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=jl(),this.name="",this.source=new Np(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ue(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gs:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case Bd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gs:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case Bd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=Iv;Si.DEFAULT_ANISOTROPY=1;const Fp=class Fp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],_=m[4],S=m[8],g=m[1],y=m[5],T=m[9],A=m[2],x=m[6],v=m[10];if(Math.abs(_-g)<.01&&Math.abs(S-A)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+g)<.1&&Math.abs(S+A)<.1&&Math.abs(T+x)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(d+1)/2,D=(y+1)/2,V=(v+1)/2,L=(_+g)/4,P=(S+A)/4,E=(T+x)/4;return O>D&&O>V?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=L/s,c=P/s):D>V?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=L/l,c=E/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=P/c,l=E/c),this.set(s,l,c,i),this}let C=Math.sqrt((x-T)*(x-T)+(S-A)*(S-A)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(x-T)/C,this.y=(S-A)/C,this.z=(g-_)/C,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Be(this.x,t.x,i.x),this.y=Be(this.y,t.y,i.y),this.z=Be(this.z,t.z,i.z),this.w=Be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Be(this.x,t,i),this.y=Be(this.y,t,i),this.z=Be(this.z,t,i),this.w=Be(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fp.prototype.isVector4=!0;let In=Fp;class py extends zr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new In(0,0,t,i),this.scissorTest=!1,this.viewport=new In(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Si(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Np(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ga extends py{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Wv extends Si{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ui,this.minFilter=ui,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class my extends Si{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ui,this.minFilter=ui,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vu=class Vu{constructor(t,i,s,l,c,h,p,m,d,_,S,g,y,T,A,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d,_,S,g,y,T,A,x)}set(t,i,s,l,c,h,p,m,d,_,S,g,y,T,A,x){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=p,v[13]=m,v[2]=d,v[6]=_,v[10]=S,v[14]=g,v[3]=y,v[7]=T,v[11]=A,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/To.setFromMatrixColumn(t,0).length(),c=1/To.setFromMatrixColumn(t,1).length(),h=1/To.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),_=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const g=h*_,y=h*S,T=p*_,A=p*S;i[0]=m*_,i[4]=-m*S,i[8]=d,i[1]=y+T*d,i[5]=g-A*d,i[9]=-p*m,i[2]=A-g*d,i[6]=T+y*d,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,y=m*S,T=d*_,A=d*S;i[0]=g+A*p,i[4]=T*p-y,i[8]=h*d,i[1]=h*S,i[5]=h*_,i[9]=-p,i[2]=y*p-T,i[6]=A+g*p,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,y=m*S,T=d*_,A=d*S;i[0]=g-A*p,i[4]=-h*S,i[8]=T+y*p,i[1]=y+T*p,i[5]=h*_,i[9]=A-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,y=h*S,T=p*_,A=p*S;i[0]=m*_,i[4]=T*d-y,i[8]=g*d+A,i[1]=m*S,i[5]=A*d+g,i[9]=y*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*d,T=p*m,A=p*d;i[0]=m*_,i[4]=A-g*S,i[8]=T*S+y,i[1]=S,i[5]=h*_,i[9]=-p*_,i[2]=-d*_,i[6]=y*S+T,i[10]=g-A*S}else if(t.order==="XZY"){const g=h*m,y=h*d,T=p*m,A=p*d;i[0]=m*_,i[4]=-S,i[8]=d*_,i[1]=g*S+A,i[5]=h*_,i[9]=y*S-T,i[2]=T*S-y,i[6]=p*_,i[10]=A*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gy,t,_y)}lookAt(t,i,s){const l=this.elements;return Ji.subVectors(t,i),Ji.lengthSq()===0&&(Ji.z=1),Ji.normalize(),Ks.crossVectors(s,Ji),Ks.lengthSq()===0&&(Math.abs(s.z)===1?Ji.x+=1e-4:Ji.z+=1e-4,Ji.normalize(),Ks.crossVectors(s,Ji)),Ks.normalize(),nu.crossVectors(Ji,Ks),l[0]=Ks.x,l[4]=nu.x,l[8]=Ji.x,l[1]=Ks.y,l[5]=nu.y,l[9]=Ji.y,l[2]=Ks.z,l[6]=nu.z,l[10]=Ji.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],_=s[1],S=s[5],g=s[9],y=s[13],T=s[2],A=s[6],x=s[10],v=s[14],C=s[3],O=s[7],D=s[11],V=s[15],L=l[0],P=l[4],E=l[8],z=l[12],q=l[1],F=l[5],X=l[9],st=l[13],ct=l[2],H=l[6],U=l[10],B=l[14],lt=l[3],pt=l[7],Tt=l[11],I=l[15];return c[0]=h*L+p*q+m*ct+d*lt,c[4]=h*P+p*F+m*H+d*pt,c[8]=h*E+p*X+m*U+d*Tt,c[12]=h*z+p*st+m*B+d*I,c[1]=_*L+S*q+g*ct+y*lt,c[5]=_*P+S*F+g*H+y*pt,c[9]=_*E+S*X+g*U+y*Tt,c[13]=_*z+S*st+g*B+y*I,c[2]=T*L+A*q+x*ct+v*lt,c[6]=T*P+A*F+x*H+v*pt,c[10]=T*E+A*X+x*U+v*Tt,c[14]=T*z+A*st+x*B+v*I,c[3]=C*L+O*q+D*ct+V*lt,c[7]=C*P+O*F+D*H+V*pt,c[11]=C*E+O*X+D*U+V*Tt,c[15]=C*z+O*st+D*B+V*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],_=t[2],S=t[6],g=t[10],y=t[14],T=t[3],A=t[7],x=t[11],v=t[15],C=m*y-d*g,O=p*y-d*S,D=p*g-m*S,V=h*y-d*_,L=h*g-m*_,P=h*S-p*_;return i*(A*C-x*O+v*D)-s*(T*C-x*V+v*L)+l*(T*O-A*V+v*P)-c*(T*D-A*L+x*P)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8],S=t[9],g=t[10],y=t[11],T=t[12],A=t[13],x=t[14],v=t[15],C=i*p-s*h,O=i*m-l*h,D=i*d-c*h,V=s*m-l*p,L=s*d-c*p,P=l*d-c*m,E=_*A-S*T,z=_*x-g*T,q=_*v-y*T,F=S*x-g*A,X=S*v-y*A,st=g*v-y*x,ct=C*st-O*X+D*F+V*q-L*z+P*E;if(ct===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/ct;return t[0]=(p*st-m*X+d*F)*H,t[1]=(l*X-s*st-c*F)*H,t[2]=(A*P-x*L+v*V)*H,t[3]=(g*L-S*P-y*V)*H,t[4]=(m*q-h*st-d*z)*H,t[5]=(i*st-l*q+c*z)*H,t[6]=(x*D-T*P-v*O)*H,t[7]=(_*P-g*D+y*O)*H,t[8]=(h*X-p*q+d*E)*H,t[9]=(s*q-i*X-c*E)*H,t[10]=(T*L-A*D+v*C)*H,t[11]=(S*D-_*L-y*C)*H,t[12]=(p*z-h*F-m*E)*H,t[13]=(i*F-s*z+l*E)*H,t[14]=(A*O-T*V-x*C)*H,t[15]=(_*V-S*O+g*C)*H,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,p=t.y,m=t.z,d=c*h,_=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,_*p+s,_*m-l*h,0,d*m-l*p,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,_=h+h,S=p+p,g=c*d,y=c*_,T=c*S,A=h*_,x=h*S,v=p*S,C=m*d,O=m*_,D=m*S,V=s.x,L=s.y,P=s.z;return l[0]=(1-(A+v))*V,l[1]=(y+D)*V,l[2]=(T-O)*V,l[3]=0,l[4]=(y-D)*L,l[5]=(1-(g+v))*L,l[6]=(x+C)*L,l[7]=0,l[8]=(T+O)*P,l[9]=(x-C)*P,l[10]=(1-(g+A))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=To.set(l[0],l[1],l[2]).length();const p=To.set(l[4],l[5],l[6]).length(),m=To.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Sa.copy(this);const d=1/h,_=1/p,S=1/m;return Sa.elements[0]*=d,Sa.elements[1]*=d,Sa.elements[2]*=d,Sa.elements[4]*=_,Sa.elements[5]*=_,Sa.elements[6]*=_,Sa.elements[8]*=S,Sa.elements[9]*=S,Sa.elements[10]*=S,i.setFromRotationMatrix(Sa),s.x=h,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,h,p=Ba,m=!1){const d=this.elements,_=2*c/(i-t),S=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let T,A;if(m)T=c/(h-c),A=h*c/(h-c);else if(p===Ba)T=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(p===Yl)T=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=S,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,h,p=Ba,m=!1){const d=this.elements,_=2/(i-t),S=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let T,A;if(m)T=1/(h-c),A=h/(h-c);else if(p===Ba)T=-2/(h-c),A=-(h+c)/(h-c);else if(p===Yl)T=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=S,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=T,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Vu.prototype.isMatrix4=!0;let Fn=Vu;const To=new Z,Sa=new Fn,gy=new Z(0,0,0),_y=new Z(1,1,1),Ks=new Z,nu=new Z,Ji=new Z,z_=new Fn,I_=new Ir;class Xa{constructor(t=0,i=0,s=0,l=Xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],_=l[9],S=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Be(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return z_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(z_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return I_.setFromEuler(this),this.setFromQuaternion(I_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xa.DEFAULT_ORDER="XYZ";class Yv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vy=0;const F_=new Z,bo=new Ir,fs=new Fn,iu=new Z,Ll=new Z,xy=new Z,Sy=new Ir,B_=new Z(1,0,0),V_=new Z(0,1,0),G_=new Z(0,0,1),H_={type:"added"},My={type:"removed"},Eo={type:"childadded",child:null},ed={type:"childremoved",child:null};class fi extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=jl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fi.DEFAULT_UP.clone();const t=new Z,i=new Xa,s=new Ir,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Fn},normalMatrix:{value:new _e}}),this.matrix=new Fn,this.matrixWorld=new Fn,this.matrixAutoUpdate=fi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return bo.setFromAxisAngle(t,i),this.quaternion.multiply(bo),this}rotateOnWorldAxis(t,i){return bo.setFromAxisAngle(t,i),this.quaternion.premultiply(bo),this}rotateX(t){return this.rotateOnAxis(B_,t)}rotateY(t){return this.rotateOnAxis(V_,t)}rotateZ(t){return this.rotateOnAxis(G_,t)}translateOnAxis(t,i){return F_.copy(t).applyQuaternion(this.quaternion),this.position.add(F_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(B_,t)}translateY(t){return this.translateOnAxis(V_,t)}translateZ(t){return this.translateOnAxis(G_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fs.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?iu.copy(t):iu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fs.lookAt(Ll,iu,this.up):fs.lookAt(iu,Ll,this.up),this.quaternion.setFromRotationMatrix(fs),l&&(fs.extractRotation(l.matrixWorld),bo.setFromRotationMatrix(fs),this.quaternion.premultiply(bo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(H_),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(My),ed.child=t,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fs.multiply(t.parent.matrixWorld)),t.applyMatrix4(fs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(H_),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,t,xy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,Sy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,_=m.length;d<_;d++){const S=m[d];c(t.shapes,S)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),_=h(t.images),S=h(t.shapes),g=h(t.skeletons),y=h(t.animations),T=h(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),_.length>0&&(s.images=_),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(p){const m=[];for(const d in p){const _=p[d];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}fi.DEFAULT_UP=new Z(0,1,0);fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class za extends fi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yy={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const A of t.hand.values()){const x=i.getJointPose(A,s),v=this._getHandJoint(d,A);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],g=_.position.distanceTo(S.position),y=.02,T=.005;d.inputState.pinching&&g>y+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=y-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new za;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qs={h:0,s:0,l:0},au={h:0,s:0,l:0};function id(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ve{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=da){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Fe.workingColorSpace){return this.r=t,this.g=i,this.b=s,Fe.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Fe.workingColorSpace){if(t=cy(t,1),i=Be(i,0,1),s=Be(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=id(h,c,t+1/3),this.g=id(h,c,t),this.b=id(h,c,t-1/3)}return Fe.colorSpaceToWorking(this,l),this}setStyle(t,i=da){function s(c){c!==void 0&&parseFloat(c)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ue("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=da){const s=jv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=da){return Fe.workingToColorSpace(vi.copy(this),t),Math.round(Be(vi.r*255,0,255))*65536+Math.round(Be(vi.g*255,0,255))*256+Math.round(Be(vi.b*255,0,255))}getHexString(t=da){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Fe.workingColorSpace){Fe.workingToColorSpace(vi.copy(this),i);const s=vi.r,l=vi.g,c=vi.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const _=(p+h)/2;if(p===h)m=0,d=0;else{const S=h-p;switch(d=_<=.5?S/(h+p):S/(2-h-p),h){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=d,t.l=_,t}getRGB(t,i=Fe.workingColorSpace){return Fe.workingToColorSpace(vi.copy(this),i),t.r=vi.r,t.g=vi.g,t.b=vi.b,t}getStyle(t=da){Fe.workingToColorSpace(vi.copy(this),t);const i=vi.r,s=vi.g,l=vi.b;return t!==da?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Qs),this.setHSL(Qs.h+t,Qs.s+i,Qs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Qs),t.getHSL(au);const s=Kh(Qs.h,au.h,i),l=Kh(Qs.s,au.s,i),c=Kh(Qs.l,au.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vi=new Ve;Ve.NAMES=jv;class Up{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(t),this.density=i}clone(){return new Up(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ty extends fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xa,this.environmentIntensity=1,this.environmentRotation=new Xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ma=new Z,hs=new Z,ad=new Z,ds=new Z,Ao=new Z,Ro=new Z,k_=new Z,sd=new Z,rd=new Z,od=new Z,ld=new In,cd=new In,ud=new In;class Ta{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ma.subVectors(t,i),l.cross(Ma);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ma.subVectors(l,i),hs.subVectors(s,i),ad.subVectors(t,i);const h=Ma.dot(Ma),p=Ma.dot(hs),m=Ma.dot(ad),d=hs.dot(hs),_=hs.dot(ad),S=h*d-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,y=(d*m-p*_)*g,T=(h*_-p*m)*g;return c.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ds)===null?!1:ds.x>=0&&ds.y>=0&&ds.x+ds.y<=1}static getInterpolation(t,i,s,l,c,h,p,m){return this.getBarycoord(t,i,s,l,ds)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ds.x),m.addScaledVector(h,ds.y),m.addScaledVector(p,ds.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(t,i),cd.fromBufferAttribute(t,s),ud.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ld,c.x),h.addScaledVector(cd,c.y),h.addScaledVector(ud,c.z),h}static isFrontFacing(t,i,s,l){return Ma.subVectors(s,i),hs.subVectors(t,i),Ma.cross(hs).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ma.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),Ma.cross(hs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ta.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ta.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ta.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ta.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ta.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,p;Ao.subVectors(l,s),Ro.subVectors(c,s),sd.subVectors(t,s);const m=Ao.dot(sd),d=Ro.dot(sd);if(m<=0&&d<=0)return i.copy(s);rd.subVectors(t,l);const _=Ao.dot(rd),S=Ro.dot(rd);if(_>=0&&S<=_)return i.copy(l);const g=m*S-_*d;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Ao,h);od.subVectors(t,c);const y=Ao.dot(od),T=Ro.dot(od);if(T>=0&&y<=T)return i.copy(c);const A=y*d-m*T;if(A<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(Ro,p);const x=_*T-y*S;if(x<=0&&S-_>=0&&y-T>=0)return k_.subVectors(c,l),p=(S-_)/(S-_+(y-T)),i.copy(l).addScaledVector(k_,p);const v=1/(x+A+g);return h=A*v,p=g*v,i.copy(s).addScaledVector(Ao,h).addScaledVector(Ro,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Zl{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ya.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ya.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ya.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,ya):ya.fromBufferAttribute(c,h),ya.applyMatrix4(t.matrixWorld),this.expandByPoint(ya);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),su.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),su.copy(s.boundingBox)),su.applyMatrix4(t.matrixWorld),this.union(su)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ya),ya.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ol),ru.subVectors(this.max,Ol),wo.subVectors(t.a,Ol),Co.subVectors(t.b,Ol),Do.subVectors(t.c,Ol),Js.subVectors(Co,wo),$s.subVectors(Do,Co),Er.subVectors(wo,Do);let i=[0,-Js.z,Js.y,0,-$s.z,$s.y,0,-Er.z,Er.y,Js.z,0,-Js.x,$s.z,0,-$s.x,Er.z,0,-Er.x,-Js.y,Js.x,0,-$s.y,$s.x,0,-Er.y,Er.x,0];return!fd(i,wo,Co,Do,ru)||(i=[1,0,0,0,1,0,0,0,1],!fd(i,wo,Co,Do,ru))?!1:(ou.crossVectors(Js,$s),i=[ou.x,ou.y,ou.z],fd(i,wo,Co,Do,ru))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ya).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ya).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ps),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ps=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ya=new Z,su=new Zl,wo=new Z,Co=new Z,Do=new Z,Js=new Z,$s=new Z,Er=new Z,Ol=new Z,ru=new Z,ou=new Z,Ar=new Z;function fd(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Ar.fromArray(r,c);const p=l.x*Math.abs(Ar.x)+l.y*Math.abs(Ar.y)+l.z*Math.abs(Ar.z),m=t.dot(Ar),d=i.dot(Ar),_=s.dot(Ar);if(Math.max(-Math.max(m,d,_),Math.min(m,d,_))>p)return!1}return!0}const Zn=new Z,lu=new je;let by=0;class Ha extends zr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:by++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=C_,this.updateRanges=[],this.gpuType=Fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)lu.fromBufferAttribute(this,i),lu.applyMatrix3(t),this.setXY(i,lu.x,lu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Zn.fromBufferAttribute(this,i),Zn.applyMatrix3(t),this.setXYZ(i,Zn.x,Zn.y,Zn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Zn.fromBufferAttribute(this,i),Zn.applyMatrix4(t),this.setXYZ(i,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Zn.fromBufferAttribute(this,i),Zn.applyNormalMatrix(t),this.setXYZ(i,Zn.x,Zn.y,Zn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Zn.fromBufferAttribute(this,i),Zn.transformDirection(t),this.setXYZ(i,Zn.x,Zn.y,Zn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ul(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=zi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ul(i,this.array)),i}setX(t,i){return this.normalized&&(i=zi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ul(i,this.array)),i}setY(t,i){return this.normalized&&(i=zi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ul(i,this.array)),i}setZ(t,i){return this.normalized&&(i=zi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ul(i,this.array)),i}setW(t,i){return this.normalized&&(i=zi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=zi(i,this.array),s=zi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=zi(i,this.array),s=zi(s,this.array),l=zi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=zi(i,this.array),s=zi(s,this.array),l=zi(l,this.array),c=zi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==C_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Zv extends Ha{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Kv extends Ha{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Mi extends Ha{constructor(t,i,s){super(new Float32Array(t),i,s)}}const Ey=new Zl,Pl=new Z,hd=new Z;class Hu{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ey.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pl.subVectors(t,this.center);const i=Pl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Pl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pl.copy(t.center).add(hd)),this.expandByPoint(Pl.copy(t.center).sub(hd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ay=0;const fa=new Fn,dd=new fi,No=new Z,$i=new Zl,zl=new Zl,ii=new Z;class Ci extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=jl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sy(t)?Kv:Zv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _e().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fa.makeRotationFromQuaternion(t),this.applyMatrix4(fa),this}rotateX(t){return fa.makeRotationX(t),this.applyMatrix4(fa),this}rotateY(t){return fa.makeRotationY(t),this.applyMatrix4(fa),this}rotateZ(t){return fa.makeRotationZ(t),this.applyMatrix4(fa),this}translate(t,i,s){return fa.makeTranslation(t,i,s),this.applyMatrix4(fa),this}scale(t,i,s){return fa.makeScale(t,i,s),this.applyMatrix4(fa),this}lookAt(t){return dd.lookAt(t),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Mi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];$i.setFromBufferAttribute(c),this.morphTargetsRelative?(ii.addVectors(this.boundingBox.min,$i.min),this.boundingBox.expandByPoint(ii),ii.addVectors(this.boundingBox.max,$i.max),this.boundingBox.expandByPoint(ii)):(this.boundingBox.expandByPoint($i.min),this.boundingBox.expandByPoint($i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if($i.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];zl.setFromBufferAttribute(p),this.morphTargetsRelative?(ii.addVectors($i.min,zl.min),$i.expandByPoint(ii),ii.addVectors($i.max,zl.max),$i.expandByPoint(ii)):($i.expandByPoint(zl.min),$i.expandByPoint(zl.max))}$i.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)ii.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(ii));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,_=p.count;d<_;d++)ii.fromBufferAttribute(p,d),m&&(No.fromBufferAttribute(t,d),ii.add(No)),l=Math.max(l,s.distanceToSquared(ii))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ha(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let E=0;E<s.count;E++)p[E]=new Z,m[E]=new Z;const d=new Z,_=new Z,S=new Z,g=new je,y=new je,T=new je,A=new Z,x=new Z;function v(E,z,q){d.fromBufferAttribute(s,E),_.fromBufferAttribute(s,z),S.fromBufferAttribute(s,q),g.fromBufferAttribute(c,E),y.fromBufferAttribute(c,z),T.fromBufferAttribute(c,q),_.sub(d),S.sub(d),y.sub(g),T.sub(g);const F=1/(y.x*T.y-T.x*y.y);isFinite(F)&&(A.copy(_).multiplyScalar(T.y).addScaledVector(S,-y.y).multiplyScalar(F),x.copy(S).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(F),p[E].add(A),p[z].add(A),p[q].add(A),m[E].add(x),m[z].add(x),m[q].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let E=0,z=C.length;E<z;++E){const q=C[E],F=q.start,X=q.count;for(let st=F,ct=F+X;st<ct;st+=3)v(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const O=new Z,D=new Z,V=new Z,L=new Z;function P(E){V.fromBufferAttribute(l,E),L.copy(V);const z=p[E];O.copy(z),O.sub(V.multiplyScalar(V.dot(z))).normalize(),D.crossVectors(L,z);const F=D.dot(m[E])<0?-1:1;h.setXYZW(E,O.x,O.y,O.z,F)}for(let E=0,z=C.length;E<z;++E){const q=C[E],F=q.start,X=q.count;for(let st=F,ct=F+X;st<ct;st+=3)P(t.getX(st+0)),P(t.getX(st+1)),P(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ha(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new Z,c=new Z,h=new Z,p=new Z,m=new Z,d=new Z,_=new Z,S=new Z;if(t)for(let g=0,y=t.count;g<y;g+=3){const T=t.getX(g+0),A=t.getX(g+1),x=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,x),_.subVectors(h,c),S.subVectors(l,c),_.cross(S),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,A),d.fromBufferAttribute(s,x),p.add(_),m.add(_),d.add(_),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),S.subVectors(l,c),_.cross(S),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)ii.fromBufferAttribute(t,i),ii.normalize(),t.setXYZ(i,ii.x,ii.y,ii.z)}toNonIndexed(){function t(p,m){const d=p.array,_=p.itemSize,S=p.normalized,g=new d.constructor(m.length*_);let y=0,T=0;for(let A=0,x=m.length;A<x;A++){p.isInterleavedBufferAttribute?y=m[A]*p.data.stride+p.offset:y=m[A]*_;for(let v=0;v<_;v++)g[T++]=d[y++]}return new Ha(g,_,S)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let _=0,S=d.length;_<S;_++){const g=d[_],y=t(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],_=[];for(let S=0,g=d.length;S<g;S++){const y=d[S];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const _=l[d];this.setAttribute(d,_.clone(i))}const c=t.morphAttributes;for(const d in c){const _=[],S=c[d];for(let g=0,y=S.length;g<y;g++)_.push(S[g].clone(i));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,_=h.length;d<_;d++){const S=h[d];this.addGroup(S.start,S.count,S.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ry=0;class Fr extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=jl(),this.name="",this.type="Material",this.blending=Io,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Nd,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ue(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Io&&(s.blending=this.blending),this.side!==ar&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Dd&&(s.blendSrc=this.blendSrc),this.blendDst!==Nd&&(s.blendDst=this.blendDst),this.blendEquation!==Dr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ms=new Z,pd=new Z,cu=new Z,tr=new Z,md=new Z,uu=new Z,gd=new Z;class Qv{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ms)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ms.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ms.copy(this.origin).addScaledVector(this.direction,i),ms.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){pd.copy(t).add(i).multiplyScalar(.5),cu.copy(i).sub(t).normalize(),tr.copy(this.origin).sub(pd);const c=t.distanceTo(i)*.5,h=-this.direction.dot(cu),p=tr.dot(this.direction),m=-tr.dot(cu),d=tr.lengthSq(),_=Math.abs(1-h*h);let S,g,y,T;if(_>0)if(S=h*m-p,g=h*p-m,T=c*_,S>=0)if(g>=-T)if(g<=T){const A=1/_;S*=A,g*=A,y=S*(S+h*g+2*p)+g*(h*S+g+2*m)+d}else g=c,S=Math.max(0,-(h*g+p)),y=-S*S+g*(g+2*m)+d;else g=-c,S=Math.max(0,-(h*g+p)),y=-S*S+g*(g+2*m)+d;else g<=-T?(S=Math.max(0,-(-h*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),y=-S*S+g*(g+2*m)+d):g<=T?(S=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+d):(S=Math.max(0,-(h*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),y=-S*S+g*(g+2*m)+d);else g=h>0?-c:c,S=Math.max(0,-(h*g+p)),y=-S*S+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(pd).addScaledVector(cu,g),y}intersectSphere(t,i){ms.subVectors(t.center,this.origin);const s=ms.dot(this.direction),l=ms.dot(ms)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,p,m;const d=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),S>=0?(p=(t.min.z-g.z)*S,m=(t.max.z-g.z)*S):(p=(t.max.z-g.z)*S,m=(t.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ms)!==null}intersectTriangle(t,i,s,l,c){md.subVectors(i,t),uu.subVectors(s,t),gd.crossVectors(md,uu);let h=this.direction.dot(gd),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;tr.subVectors(this.origin,t);const m=p*this.direction.dot(uu.crossVectors(tr,uu));if(m<0)return null;const d=p*this.direction.dot(md.cross(tr));if(d<0||m+d>h)return null;const _=-p*tr.dot(gd);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zo extends Fr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const X_=new Fn,Rr=new Qv,fu=new Hu,q_=new Z,hu=new Z,du=new Z,pu=new Z,_d=new Z,mu=new Z,W_=new Z,gu=new Z;class be extends fi{constructor(t=new Ci,i=new zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){mu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const _=p[m],S=c[m];_!==0&&(_d.fromBufferAttribute(S,t),h?mu.addScaledVector(_d,_):mu.addScaledVector(_d.sub(i),_))}i.add(mu)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),fu.copy(s.boundingSphere),fu.applyMatrix4(c),Rr.copy(t.ray).recast(t.near),!(fu.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(fu,q_)===null||Rr.origin.distanceToSquared(q_)>(t.far-t.near)**2))&&(X_.copy(c).invert(),Rr.copy(t.ray).applyMatrix4(X_),!(s.boundingBox!==null&&Rr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Rr)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,S=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,A=g.length;T<A;T++){const x=g[T],v=h[x.materialIndex],C=Math.max(x.start,y.start),O=Math.min(p.count,Math.min(x.start+x.count,y.start+y.count));for(let D=C,V=O;D<V;D+=3){const L=p.getX(D),P=p.getX(D+1),E=p.getX(D+2);l=_u(this,v,t,s,d,_,S,L,P,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let x=T,v=A;x<v;x+=3){const C=p.getX(x),O=p.getX(x+1),D=p.getX(x+2);l=_u(this,h,t,s,d,_,S,C,O,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,A=g.length;T<A;T++){const x=g[T],v=h[x.materialIndex],C=Math.max(x.start,y.start),O=Math.min(m.count,Math.min(x.start+x.count,y.start+y.count));for(let D=C,V=O;D<V;D+=3){const L=D,P=D+1,E=D+2;l=_u(this,v,t,s,d,_,S,L,P,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let x=T,v=A;x<v;x+=3){const C=x,O=x+1,D=x+2;l=_u(this,h,t,s,d,_,S,C,O,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function wy(r,t,i,s,l,c,h,p){let m;if(t.side===Fi?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,t.side===ar,p),m===null)return null;gu.copy(p),gu.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(gu);return d<i.near||d>i.far?null:{distance:d,point:gu.clone(),object:r}}function _u(r,t,i,s,l,c,h,p,m,d){r.getVertexPosition(p,hu),r.getVertexPosition(m,du),r.getVertexPosition(d,pu);const _=wy(r,t,i,s,hu,du,pu,W_);if(_){const S=new Z;Ta.getBarycoord(W_,hu,du,pu,S),l&&(_.uv=Ta.getInterpolatedAttribute(l,p,m,d,S,new je)),c&&(_.uv1=Ta.getInterpolatedAttribute(c,p,m,d,S,new je)),h&&(_.normal=Ta.getInterpolatedAttribute(h,p,m,d,S,new Z),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new Z,materialIndex:0};Ta.getNormal(hu,du,pu,g.normal),_.face=g,_.barycoord=S}return _}class Cy extends Si{constructor(t=null,i=1,s=1,l,c,h,p,m,d=ui,_=ui,S,g){super(null,h,p,m,d,_,l,c,S,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new Z,Dy=new Z,Ny=new _e;class Cr{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=vd.subVectors(s,i).cross(Dy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(vd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Ny.getNormalMatrix(t),l=this.coplanarPoint(vd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new Hu,Uy=new je(.5,.5),vu=new Z;class Lp{constructor(t=new Cr,i=new Cr,s=new Cr,l=new Cr,c=new Cr,h=new Cr){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ba,s=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],_=c[4],S=c[5],g=c[6],y=c[7],T=c[8],A=c[9],x=c[10],v=c[11],C=c[12],O=c[13],D=c[14],V=c[15];if(l[0].setComponents(d-h,y-_,v-T,V-C).normalize(),l[1].setComponents(d+h,y+_,v+T,V+C).normalize(),l[2].setComponents(d+p,y+S,v+A,V+O).normalize(),l[3].setComponents(d-p,y-S,v-A,V-O).normalize(),s)l[4].setComponents(m,g,x,D).normalize(),l[5].setComponents(d-m,y-g,v-x,V-D).normalize();else if(l[4].setComponents(d-m,y-g,v-x,V-D).normalize(),i===Ba)l[5].setComponents(d+m,y+g,v+x,V+D).normalize();else if(i===Yl)l[5].setComponents(m,g,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(t){wr.center.set(0,0,0);const i=Uy.distanceTo(t.center);return wr.radius=.7071067811865476+i,wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(vu.x=l.normal.x>0?t.max.x:t.min.x,vu.y=l.normal.y>0?t.max.y:t.min.y,vu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(vu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _p extends Fr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fu=new Z,Bu=new Z,Y_=new Fn,Il=new Qv,xu=new Hu,xd=new Z,j_=new Z;class Sd extends fi{constructor(t=new Ci,i=new _p){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Fu.fromBufferAttribute(i,l-1),Bu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Fu.distanceTo(Bu);t.setAttribute("lineDistance",new Mi(s,1))}else ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xu.copy(s.boundingSphere),xu.applyMatrix4(l),xu.radius+=c,t.ray.intersectsSphere(xu)===!1)return;Y_.copy(l).invert(),Il.copy(t.ray).applyMatrix4(Y_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const y=Math.max(0,h.start),T=Math.min(_.count,h.start+h.count);for(let A=y,x=T-1;A<x;A+=d){const v=_.getX(A),C=_.getX(A+1),O=Su(this,t,Il,m,v,C,A);O&&i.push(O)}if(this.isLineLoop){const A=_.getX(T-1),x=_.getX(y),v=Su(this,t,Il,m,A,x,T-1);v&&i.push(v)}}else{const y=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let A=y,x=T-1;A<x;A+=d){const v=Su(this,t,Il,m,A,A+1,A);v&&i.push(v)}if(this.isLineLoop){const A=Su(this,t,Il,m,T-1,y,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Su(r,t,i,s,l,c,h){const p=r.geometry.attributes.position;if(Fu.fromBufferAttribute(p,l),Bu.fromBufferAttribute(p,c),i.distanceSqToSegment(Fu,Bu,xd,j_)>s)return;xd.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(xd);if(!(d<t.near||d>t.far))return{distance:d,point:j_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}class Jv extends Si{constructor(t=[],i=Or,s,l,c,h,p,m,d,_){super(t,i,s,l,c,h,p,m,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Md extends Si{constructor(t,i,s,l,c,h,p,m,d){super(t,i,s,l,c,h,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Go extends Si{constructor(t,i,s=ka,l,c,h,p=ui,m=ui,d,_=ys,S=1){if(_!==ys&&_!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:S};super(g,l,c,h,p,m,_,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Np(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ly extends Go{constructor(t,i=ka,s=Or,l,c,h=ui,p=ui,m,d=ys){const _={width:t,height:t,depth:1},S=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,p,m,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class $v extends Si{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xn extends Ci{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],_=[],S=[];let g=0,y=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Mi(d,3)),this.setAttribute("normal",new Mi(_,3)),this.setAttribute("uv",new Mi(S,2));function T(A,x,v,C,O,D,V,L,P,E,z){const q=D/P,F=V/E,X=D/2,st=V/2,ct=L/2,H=P+1,U=E+1;let B=0,lt=0;const pt=new Z;for(let Tt=0;Tt<U;Tt++){const I=Tt*F-st;for(let J=0;J<H;J++){const Mt=J*q-X;pt[A]=Mt*C,pt[x]=I*O,pt[v]=ct,d.push(pt.x,pt.y,pt.z),pt[A]=0,pt[x]=0,pt[v]=L>0?1:-1,_.push(pt.x,pt.y,pt.z),S.push(J/P),S.push(1-Tt/E),B+=1}}for(let Tt=0;Tt<E;Tt++)for(let I=0;I<P;I++){const J=g+I+H*Tt,Mt=g+I+H*(Tt+1),Rt=g+(I+1)+H*(Tt+1),zt=g+(I+1)+H*Tt;m.push(J,Mt,zt),m.push(Mt,Rt,zt),lt+=6}p.addGroup(y,lt,z),y+=lt,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Hl extends Ci{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const _=[],S=[],g=[],y=[];let T=0;const A=[],x=s/2;let v=0;C(),h===!1&&(t>0&&O(!0),i>0&&O(!1)),this.setIndex(_),this.setAttribute("position",new Mi(S,3)),this.setAttribute("normal",new Mi(g,3)),this.setAttribute("uv",new Mi(y,2));function C(){const D=new Z,V=new Z;let L=0;const P=(i-t)/s;for(let E=0;E<=c;E++){const z=[],q=E/c,F=q*(i-t)+t;for(let X=0;X<=l;X++){const st=X/l,ct=st*m+p,H=Math.sin(ct),U=Math.cos(ct);V.x=F*H,V.y=-q*s+x,V.z=F*U,S.push(V.x,V.y,V.z),D.set(H,P,U).normalize(),g.push(D.x,D.y,D.z),y.push(st,1-q),z.push(T++)}A.push(z)}for(let E=0;E<l;E++)for(let z=0;z<c;z++){const q=A[z][E],F=A[z+1][E],X=A[z+1][E+1],st=A[z][E+1];(t>0||z!==0)&&(_.push(q,F,st),L+=3),(i>0||z!==c-1)&&(_.push(F,X,st),L+=3)}d.addGroup(v,L,0),v+=L}function O(D){const V=T,L=new je,P=new Z;let E=0;const z=D===!0?t:i,q=D===!0?1:-1;for(let X=1;X<=l;X++)S.push(0,x*q,0),g.push(0,q,0),y.push(.5,.5),T++;const F=T;for(let X=0;X<=l;X++){const ct=X/l*m+p,H=Math.cos(ct),U=Math.sin(ct);P.x=z*U,P.y=x*q,P.z=z*H,S.push(P.x,P.y,P.z),g.push(0,q,0),L.x=H*.5+.5,L.y=U*.5*q+.5,y.push(L.x,L.y),T++}for(let X=0;X<l;X++){const st=V+X,ct=F+X;D===!0?_.push(ct,ct+1,st):_.push(ct+1,ct,st),E+=3}d.addGroup(v,E,D===!0?1:2),v+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ho extends Ci{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,_=m+1,S=t/p,g=i/m,y=[],T=[],A=[],x=[];for(let v=0;v<_;v++){const C=v*g-h;for(let O=0;O<d;O++){const D=O*S-c;T.push(D,-C,0),A.push(0,0,1),x.push(O/p),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let C=0;C<p;C++){const O=C+d*v,D=C+d*(v+1),V=C+1+d*(v+1),L=C+1+d*v;y.push(O,D,L),y.push(D,V,L)}this.setIndex(y),this.setAttribute("position",new Mi(T,3)),this.setAttribute("normal",new Mi(A,3)),this.setAttribute("uv",new Mi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.widthSegments,t.heightSegments)}}class kl extends Ci{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+p,Math.PI);let d=0;const _=[],S=new Z,g=new Z,y=[],T=[],A=[],x=[];for(let v=0;v<=s;v++){const C=[],O=v/s;let D=0;v===0&&h===0?D=.5/i:v===s&&m===Math.PI&&(D=-.5/i);for(let V=0;V<=i;V++){const L=V/i;S.x=-t*Math.cos(l+L*c)*Math.sin(h+O*p),S.y=t*Math.cos(h+O*p),S.z=t*Math.sin(l+L*c)*Math.sin(h+O*p),T.push(S.x,S.y,S.z),g.copy(S).normalize(),A.push(g.x,g.y,g.z),x.push(L+D,1-O),C.push(d++)}_.push(C)}for(let v=0;v<s;v++)for(let C=0;C<i;C++){const O=_[v][C+1],D=_[v][C],V=_[v+1][C],L=_[v+1][C+1];(v!==0||h>0)&&y.push(O,D,L),(v!==s-1||m<Math.PI)&&y.push(D,V,L)}this.setIndex(y),this.setAttribute("position",new Mi(T,3)),this.setAttribute("normal",new Mi(A,3)),this.setAttribute("uv",new Mi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ko(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(Z_(l))l.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(Z_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function wi(r){const t={};for(let i=0;i<r.length;i++){const s=ko(r[i]);for(const l in s)t[l]=s[l]}return t}function Z_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Oy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function tx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Fe.workingColorSpace}const Py={clone:ko,merge:wi};var zy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Fr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zy,this.fragmentShader=Iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ko(t.uniforms),this.uniformsGroups=Oy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Fy extends qa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ha extends Fr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yd extends Fr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=yp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class By extends Fr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vy extends Fr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Op extends fi{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Td=new Fn,K_=new Z,Q_=new Z;class ex{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=ea,this.map=null,this.mapPass=null,this.matrix=new Fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lp,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new In(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;K_.setFromMatrixPosition(t.matrixWorld),i.position.copy(K_),Q_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Q_),i.updateMatrixWorld(),Td.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Yl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mu=new Z,yu=new Ir,Oa=new Z;class nx extends fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fn,this.projectionMatrix=new Fn,this.projectionMatrixInverse=new Fn,this.coordinateSystem=Ba,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mu,yu,Oa),Oa.x===1&&Oa.y===1&&Oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mu,yu,Oa.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Mu,yu,Oa),Oa.x===1&&Oa.y===1&&Oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mu,yu,Oa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const er=new Z,J_=new je,$_=new je;class Ii extends nx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Iu*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Iu*2*Math.atan(Math.tan(Zh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,i){return this.getViewBounds(t,J_,$_),i.subVectors($_,J_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Gy extends ex{constructor(){super(new Ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Iu*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Hy extends Op{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fi.DEFAULT_UP),this.updateMatrix(),this.target=new fi,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new Gy}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class ky extends ex{constructor(){super(new Ii(90,1,.5,500)),this.isPointLightShadow=!0}}class tv extends Op{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new ky}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ix extends nx{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Xy extends Op{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Uo=-90,Lo=1;class qy extends fi{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ii(Uo,Lo,t,i);l.layers=this.layers,this.add(l);const c=new Ii(Uo,Lo,t,i);c.layers=this.layers,this.add(c);const h=new Ii(Uo,Lo,t,i);h.layers=this.layers,this.add(h);const p=new Ii(Uo,Lo,t,i);p.layers=this.layers,this.add(p);const m=new Ii(Uo,Lo,t,i);m.layers=this.layers,this.add(m);const d=new Ii(Uo,Lo,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(t===Ba)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Yl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,_]=this.children,S=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(S,g,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Wy extends Ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Yy{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=jy.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function jy(){this._document.hidden===!1&&this.reset()}const Bp=class Bp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};Bp.prototype.isMatrix2=!0;let ev=Bp;function nv(r,t,i,s){const l=Zy(s);switch(i){case Hv:return r*t;case Xv:return r*t/l.components*l.byteLength;case Ap:return r*t/l.components*l.byteLength;case Pr:return r*t*2/l.components*l.byteLength;case Rp:return r*t*2/l.components*l.byteLength;case kv:return r*t*3/l.components*l.byteLength;case ba:return r*t*4/l.components*l.byteLength;case wp:return r*t*4/l.components*l.byteLength;case Au:case Ru:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wu:case Cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gd:case kd:return Math.max(r,16)*Math.max(t,8)/4;case Vd:case Hd:return Math.max(r,8)*Math.max(t,8)/2;case Xd:case qd:case Yd:case jd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Wd:case Nu:case Zd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case $d:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case tp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ep:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case np:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case sp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case rp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case op:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case lp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case cp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case up:case fp:case hp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case dp:case pp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Uu:case mp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Zy(r){switch(r){case ea:case Fv:return{byteLength:1,components:1};case ql:case Bv:case Ms:return{byteLength:2,components:1};case bp:case Ep:return{byteLength:2,components:4};case ka:case Tp:case Fa:return{byteLength:4,components:1};case Vv:case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ax(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Ky(r){const t=new WeakMap;function i(p,m){const d=p.array,_=p.usage,S=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,_),p.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,d){const _=m.array,S=m.updateRanges;if(r.bindBuffer(d,p),S.length===0)r.bufferSubData(d,0,_);else{S.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<S.length;y++){const T=S[g],A=S[y];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++g,S[g]=A)}S.length=g+1;for(let y=0,T=S.length;y<T;y++){const A=S[y];r.bufferSubData(d,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var Qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,r1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,S1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R1="gl_FragColor = linearToOutputTexel( gl_FragColor );",w1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,U1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,k1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,K1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ST=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ET=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,RT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ab=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ae={alphahash_fragment:Qy,alphahash_pars_fragment:Jy,alphamap_fragment:$y,alphamap_pars_fragment:t1,alphatest_fragment:e1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:a1,batching_pars_vertex:s1,batching_vertex:r1,begin_vertex:o1,beginnormal_vertex:l1,bsdfs:c1,iridescence_fragment:u1,bumpmap_pars_fragment:f1,clipping_planes_fragment:h1,clipping_planes_pars_fragment:d1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:g1,color_pars_fragment:_1,color_pars_vertex:v1,color_vertex:x1,common:S1,cube_uv_reflection_fragment:M1,defaultnormal_vertex:y1,displacementmap_pars_vertex:T1,displacementmap_vertex:b1,emissivemap_fragment:E1,emissivemap_pars_fragment:A1,colorspace_fragment:R1,colorspace_pars_fragment:w1,envmap_fragment:C1,envmap_common_pars_fragment:D1,envmap_pars_fragment:N1,envmap_pars_vertex:U1,envmap_physical_pars_fragment:k1,envmap_vertex:L1,fog_vertex:O1,fog_pars_vertex:P1,fog_fragment:z1,fog_pars_fragment:I1,gradientmap_pars_fragment:F1,lightmap_pars_fragment:B1,lights_lambert_fragment:V1,lights_lambert_pars_fragment:G1,lights_pars_begin:H1,lights_toon_fragment:X1,lights_toon_pars_fragment:q1,lights_phong_fragment:W1,lights_phong_pars_fragment:Y1,lights_physical_fragment:j1,lights_physical_pars_fragment:Z1,lights_fragment_begin:K1,lights_fragment_maps:Q1,lights_fragment_end:J1,lightprobes_pars_fragment:$1,logdepthbuf_fragment:tT,logdepthbuf_pars_fragment:eT,logdepthbuf_pars_vertex:nT,logdepthbuf_vertex:iT,map_fragment:aT,map_pars_fragment:sT,map_particle_fragment:rT,map_particle_pars_fragment:oT,metalnessmap_fragment:lT,metalnessmap_pars_fragment:cT,morphinstance_vertex:uT,morphcolor_vertex:fT,morphnormal_vertex:hT,morphtarget_pars_vertex:dT,morphtarget_vertex:pT,normal_fragment_begin:mT,normal_fragment_maps:gT,normal_pars_fragment:_T,normal_pars_vertex:vT,normal_vertex:xT,normalmap_pars_fragment:ST,clearcoat_normal_fragment_begin:MT,clearcoat_normal_fragment_maps:yT,clearcoat_pars_fragment:TT,iridescence_pars_fragment:bT,opaque_fragment:ET,packing:AT,premultiplied_alpha_fragment:RT,project_vertex:wT,dithering_fragment:CT,dithering_pars_fragment:DT,roughnessmap_fragment:NT,roughnessmap_pars_fragment:UT,shadowmap_pars_fragment:LT,shadowmap_pars_vertex:OT,shadowmap_vertex:PT,shadowmask_pars_fragment:zT,skinbase_vertex:IT,skinning_pars_vertex:FT,skinning_vertex:BT,skinnormal_vertex:VT,specularmap_fragment:GT,specularmap_pars_fragment:HT,tonemapping_fragment:kT,tonemapping_pars_fragment:XT,transmission_fragment:qT,transmission_pars_fragment:WT,uv_pars_fragment:YT,uv_pars_vertex:jT,uv_vertex:ZT,worldpos_vertex:KT,background_vert:QT,background_frag:JT,backgroundCube_vert:$T,backgroundCube_frag:tb,cube_vert:eb,cube_frag:nb,depth_vert:ib,depth_frag:ab,distance_vert:sb,distance_frag:rb,equirect_vert:ob,equirect_frag:lb,linedashed_vert:cb,linedashed_frag:ub,meshbasic_vert:fb,meshbasic_frag:hb,meshlambert_vert:db,meshlambert_frag:pb,meshmatcap_vert:mb,meshmatcap_frag:gb,meshnormal_vert:_b,meshnormal_frag:vb,meshphong_vert:xb,meshphong_frag:Sb,meshphysical_vert:Mb,meshphysical_frag:yb,meshtoon_vert:Tb,meshtoon_frag:bb,points_vert:Eb,points_frag:Ab,shadow_vert:Rb,shadow_frag:wb,sprite_vert:Cb,sprite_frag:Db},qt={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Ia={basic:{uniforms:wi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:wi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:wi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:wi([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:wi([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:wi([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:wi([qt.points,qt.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:wi([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:wi([qt.common,qt.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:wi([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:wi([qt.sprite,qt.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distance:{uniforms:wi([qt.common,qt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distance_vert,fragmentShader:Ae.distance_frag},shadow:{uniforms:wi([qt.lights,qt.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Ia.physical={uniforms:wi([Ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Tu={r:0,b:0,g:0},Nb=new Fn,sx=new _e;sx.set(-1,0,0,0,1,0,0,0,1);function Ub(r,t,i,s,l,c){const h=new Ve(0);let p=l===!0?0:1,m,d,_=null,S=0,g=null;function y(C){let O=C.isScene===!0?C.background:null;if(O&&O.isTexture){const D=C.backgroundBlurriness>0;O=t.get(O,D)}return O}function T(C){let O=!1;const D=y(C);D===null?x(h,p):D&&D.isColor&&(x(D,1),O=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(C,O){const D=y(O);D&&(D.isCubeTexture||D.mapping===Gu)?(d===void 0&&(d=new be(new xn(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:ko(Ia.backgroundCube.uniforms),vertexShader:Ia.backgroundCube.vertexShader,fragmentShader:Ia.backgroundCube.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(V,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=D,d.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(O.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(sx),d.material.toneMapped=Fe.getTransfer(D.colorSpace)!==un,(_!==D||S!==D.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,_=D,S=D.version,g=r.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new be(new Ho(2,2),new qa({name:"BackgroundMaterial",uniforms:ko(Ia.background.uniforms),vertexShader:Ia.background.vertexShader,fragmentShader:Ia.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=Fe.getTransfer(D.colorSpace)!==un,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||S!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=D,S=D.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function x(C,O){C.getRGB(Tu,tx(r)),i.buffers.color.setClear(Tu.r,Tu.g,Tu.b,O,c)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,O=1){h.set(C),p=O,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,x(h,p)},render:T,addToRenderList:A,dispose:v}}function Lb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(F,X,st,ct,H){let U=!1;const B=S(F,ct,st,X);c!==B&&(c=B,d(c.object)),U=y(F,ct,st,H),U&&T(F,ct,st,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(U||h)&&(h=!1,D(F,X,st,ct),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function m(){return r.createVertexArray()}function d(F){return r.bindVertexArray(F)}function _(F){return r.deleteVertexArray(F)}function S(F,X,st,ct){const H=ct.wireframe===!0;let U=s[X.id];U===void 0&&(U={},s[X.id]=U);const B=F.isInstancedMesh===!0?F.id:0;let lt=U[B];lt===void 0&&(lt={},U[B]=lt);let pt=lt[st.id];pt===void 0&&(pt={},lt[st.id]=pt);let Tt=pt[H];return Tt===void 0&&(Tt=g(m()),pt[H]=Tt),Tt}function g(F){const X=[],st=[],ct=[];for(let H=0;H<i;H++)X[H]=0,st[H]=0,ct[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:st,attributeDivisors:ct,object:F,attributes:{},index:null}}function y(F,X,st,ct){const H=c.attributes,U=X.attributes;let B=0;const lt=st.getAttributes();for(const pt in lt)if(lt[pt].location>=0){const I=H[pt];let J=U[pt];if(J===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),I===void 0||I.attribute!==J||J&&I.data!==J.data)return!0;B++}return c.attributesNum!==B||c.index!==ct}function T(F,X,st,ct){const H={},U=X.attributes;let B=0;const lt=st.getAttributes();for(const pt in lt)if(lt[pt].location>=0){let I=U[pt];I===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(I=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(I=F.instanceColor));const J={};J.attribute=I,I&&I.data&&(J.data=I.data),H[pt]=J,B++}c.attributes=H,c.attributesNum=B,c.index=ct}function A(){const F=c.newAttributes;for(let X=0,st=F.length;X<st;X++)F[X]=0}function x(F){v(F,0)}function v(F,X){const st=c.newAttributes,ct=c.enabledAttributes,H=c.attributeDivisors;st[F]=1,ct[F]===0&&(r.enableVertexAttribArray(F),ct[F]=1),H[F]!==X&&(r.vertexAttribDivisor(F,X),H[F]=X)}function C(){const F=c.newAttributes,X=c.enabledAttributes;for(let st=0,ct=X.length;st<ct;st++)X[st]!==F[st]&&(r.disableVertexAttribArray(st),X[st]=0)}function O(F,X,st,ct,H,U,B){B===!0?r.vertexAttribIPointer(F,X,st,H,U):r.vertexAttribPointer(F,X,st,ct,H,U)}function D(F,X,st,ct){A();const H=ct.attributes,U=st.getAttributes(),B=X.defaultAttributeValues;for(const lt in U){const pt=U[lt];if(pt.location>=0){let Tt=H[lt];if(Tt===void 0&&(lt==="instanceMatrix"&&F.instanceMatrix&&(Tt=F.instanceMatrix),lt==="instanceColor"&&F.instanceColor&&(Tt=F.instanceColor)),Tt!==void 0){const I=Tt.normalized,J=Tt.itemSize,Mt=t.get(Tt);if(Mt===void 0)continue;const Rt=Mt.buffer,zt=Mt.type,rt=Mt.bytesPerElement,bt=zt===r.INT||zt===r.UNSIGNED_INT||Tt.gpuType===Tp;if(Tt.isInterleavedBufferAttribute){const At=Tt.data,Ct=At.stride,ee=Tt.offset;if(At.isInstancedInterleavedBuffer){for(let Qt=0;Qt<pt.locationSize;Qt++)v(pt.location+Qt,At.meshPerAttribute);F.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Qt=0;Qt<pt.locationSize;Qt++)x(pt.location+Qt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Qt=0;Qt<pt.locationSize;Qt++)O(pt.location+Qt,J/pt.locationSize,zt,I,Ct*rt,(ee+J/pt.locationSize*Qt)*rt,bt)}else{if(Tt.isInstancedBufferAttribute){for(let At=0;At<pt.locationSize;At++)v(pt.location+At,Tt.meshPerAttribute);F.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let At=0;At<pt.locationSize;At++)x(pt.location+At);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let At=0;At<pt.locationSize;At++)O(pt.location+At,J/pt.locationSize,zt,I,J*rt,J/pt.locationSize*At*rt,bt)}}else if(B!==void 0){const I=B[lt];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(pt.location,I);break;case 3:r.vertexAttrib3fv(pt.location,I);break;case 4:r.vertexAttrib4fv(pt.location,I);break;default:r.vertexAttrib1fv(pt.location,I)}}}}C()}function V(){z();for(const F in s){const X=s[F];for(const st in X){const ct=X[st];for(const H in ct){const U=ct[H];for(const B in U)_(U[B].object),delete U[B];delete ct[H]}}delete s[F]}}function L(F){if(s[F.id]===void 0)return;const X=s[F.id];for(const st in X){const ct=X[st];for(const H in ct){const U=ct[H];for(const B in U)_(U[B].object),delete U[B];delete ct[H]}}delete s[F.id]}function P(F){for(const X in s){const st=s[X];for(const ct in st){const H=st[ct];if(H[F.id]===void 0)continue;const U=H[F.id];for(const B in U)_(U[B].object),delete U[B];delete H[F.id]}}}function E(F){for(const X in s){const st=s[X],ct=F.isInstancedMesh===!0?F.id:0,H=st[ct];if(H!==void 0){for(const U in H){const B=H[U];for(const lt in B)_(B[lt].object),delete B[lt];delete H[U]}delete st[ct],Object.keys(st).length===0&&delete s[X]}}}function z(){q(),h=!0,c!==l&&(c=l,d(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:z,resetDefaultState:q,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:x,disableUnusedAttributes:C}}function Ob(r,t,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,_){_!==0&&(r.drawArraysInstanced(s,m,d,_),i.update(d,s,_))}function p(m,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,_);let g=0;for(let y=0;y<_;y++)g+=d[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function Pb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==ba&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(P){const E=P===Ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ea&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fa&&!E)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const _=m(d);_!==d&&(ue("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:C,maxVaryings:O,maxFragmentUniforms:D,maxSamples:V,samples:L}}function zb(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Cr,p=new _e,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||s!==0||l;return l=g,s=S.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=_(S,g,0)},this.setState=function(S,g,y){const T=S.clippingPlanes,A=S.clipIntersection,x=S.clipShadows,v=r.get(S);if(!l||T===null||T.length===0||c&&!x)c?_(null):d();else{const C=c?0:s,O=C*4;let D=v.clippingState||null;m.value=D,D=_(T,g,O,y);for(let V=0;V!==O;++V)D[V]=i[V];v.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(S,g,y,T){const A=S!==null?S.length:0;let x=null;if(A!==0){if(x=m.value,T!==!0||x===null){const v=y+A*4,C=g.matrixWorldInverse;p.getNormalMatrix(C),(x===null||x.length<v)&&(x=new Float32Array(v));for(let O=0,D=y;O!==A;++O,D+=4)h.copy(S[O]).applyMatrix4(C,p),h.normal.toArray(x,D),x[D+3]=h.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,x}}const ir=4,iv=[.125,.215,.35,.446,.526,.582],Nr=20,Ib=256,Fl=new ix,av=new Ve;let bd=null,Ed=0,Ad=0,Rd=!1;const Fb=new Z;class sv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=Fb}=c;bd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ov(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bd,Ed,Ad),this._renderer.xr.enabled=Rd,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Or||t.mapping===Vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Ms,format:ba,colorSpace:Ou,depthBuffer:!1},l=rv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bb(c)),this._blurMaterial=Gb(c,t,i),this._ggxMaterial=Vb(c,t,i)}return l}_compileMaterial(t){const i=new be(new Ci,t);this._renderer.compile(i,Fl)}_sceneToCubeUV(t,i,s,l,c){const m=new Ii(90,1,i,s),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,y=S.toneMapping;S.getClearColor(av),S.toneMapping=Va,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new xn,new zo({name:"PMREM.Background",side:Fi,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,x=A.material;let v=!1;const C=t.background;C?C.isColor&&(x.color.copy(C),t.background=null,v=!0):(x.color.copy(av),v=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,d[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[O],c.y,c.z)):D===1?(m.up.set(0,0,d[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[O],c.z)):(m.up.set(0,d[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[O]));const V=this._cubeSize;Oo(l,D*V,O>2?V:0,V,V),S.setRenderTarget(l),v&&S.render(A,m),S.render(t,m)}S.toneMapping=y,S.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Or||t.mapping===Vo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ov());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Oo(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Fl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),S=Math.sqrt(d*d-_*_),g=0+d*1.25,y=S*g,{_lodMax:T}=this,A=this._sizeLods[s],x=3*A*(s>T-ir?s-T+ir:0),v=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=T-i,Oo(c,x,v,3*A,2*A),l.setRenderTarget(c),l.render(p,Fl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Oo(t,x,v,3*A,2*A),l.setRenderTarget(t),l.render(p,Fl)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const _=3,S=this._lodMeshes[l];S.material=d;const g=d.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Nr-1),A=c/T,x=isFinite(c)?1+Math.floor(_*A):Nr;x>Nr&&ue(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Nr}`);const v=[];let C=0;for(let P=0;P<Nr;++P){const E=P/A,z=Math.exp(-E*E/2);v.push(z),P===0?C+=z:P<x&&(C+=2*z)}for(let P=0;P<v.length;P++)v[P]=v[P]/C;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=v,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:O}=this;g.dTheta.value=T,g.mipInt.value=O-s;const D=this._sizeLods[l],V=3*D*(l>O-ir?l-O+ir:0),L=4*(this._cubeSize-D);Oo(i,V,L,3*D,2*D),m.setRenderTarget(i),m.render(S,Fl)}}function Bb(r){const t=[],i=[],s=[];let l=r;const c=r-ir+1+iv.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>r-ir?m=iv[h-r+ir-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),_=-d,S=1+d,g=[_,_,S,_,S,S,_,_,S,S,_,S],y=6,T=6,A=3,x=2,v=1,C=new Float32Array(A*T*y),O=new Float32Array(x*T*y),D=new Float32Array(v*T*y);for(let L=0;L<y;L++){const P=L%3*2/3-1,E=L>2?0:-1,z=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];C.set(z,A*T*L),O.set(g,x*T*L);const q=[L,L,L,L,L,L];D.set(q,v*T*L)}const V=new Ci;V.setAttribute("position",new Ha(C,A)),V.setAttribute("uv",new Ha(O,x)),V.setAttribute("faceIndex",new Ha(D,v)),s.push(new be(V,null)),l>ir&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function rv(r,t,i){const s=new Ga(r,t,i);return s.texture.mapping=Gu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Oo(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Vb(r,t,i){return new qa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ib,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function Gb(r,t,i){const s=new Float32Array(Nr),l=new Z(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function ov(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function lv(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class rx extends Ga{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Jv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new xn(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:ko(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Fi,blending:xs});c.uniforms.tEquirect.value=i;const h=new be(l,c),p=i.minFilter;return i.minFilter===Ur&&(i.minFilter=xi),new qy(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function Hb(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Wh||y===Yh)if(t.has(g)){const T=t.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const A=new rx(T.height);return A.fromEquirectangularTexture(r,g),t.set(g,A),g.addEventListener("dispose",d),p(A.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,T=y===Wh||y===Yh,A=y===Or||y===Vo;if(T||A){let x=i.get(g);const v=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new sv(r)),x=T?s.fromEquirectangular(g,x):s.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),x.texture;if(x!==void 0)return x.texture;{const C=g.image;return T&&C&&C.height>0||A&&C&&m(C)?(s===null&&(s=new sv(r)),x=T?s.fromEquirectangular(g):s.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),g.addEventListener("dispose",_),x.texture):null}}}return g}function p(g,y){return y===Wh?g.mapping=Or:y===Yh&&(g.mapping=Vo),g}function m(g){let y=0;const T=6;for(let A=0;A<T;A++)g[A]!==void 0&&y++;return y===T}function d(g){const y=g.target;y.removeEventListener("dispose",d);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function S(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function kb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&gp("WebGLRenderer: "+s+" extension not supported."),l}}}function Xb(r,t,i,s){const l={},c=new WeakMap;function h(S){const g=S.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function d(S){const g=[],y=S.index,T=S.attributes.position;let A=0;if(T===void 0)return;if(y!==null){const C=y.array;A=y.version;for(let O=0,D=C.length;O<D;O+=3){const V=C[O+0],L=C[O+1],P=C[O+2];g.push(V,L,L,P,P,V)}}else{const C=T.array;A=T.version;for(let O=0,D=C.length/3-1;O<D;O+=3){const V=O+0,L=O+1,P=O+2;g.push(V,L,L,P,P,V)}}const x=new(T.count>=65535?Kv:Zv)(g,1);x.version=A;const v=c.get(S);v&&t.remove(v),c.set(S,x)}function _(S){const g=c.get(S);if(g){const y=S.index;y!==null&&g.version<y.version&&d(S)}else d(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:_}}function qb(r,t,i){let s;function l(S){s=S}let c,h;function p(S){c=S.type,h=S.bytesPerElement}function m(S,g){r.drawElements(s,g,c,S*h),i.update(g,s,1)}function d(S,g,y){y!==0&&(r.drawElementsInstanced(s,g,c,S*h,y),i.update(g,s,y))}function _(S,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,S,0,y);let A=0;for(let x=0;x<y;x++)A+=g[x];i.update(A,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=_}function Wb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ye("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Yb(r,t,i){const s=new WeakMap,l=new In;function c(h,p,m){const d=h.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let q=function(){E.dispose(),s.delete(p),p.removeEventListener("dispose",q)};var y=q;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,x=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],O=p.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),x===!0&&(D=3);let V=p.attributes.position.count*D,L=1;V>t.maxTextureSize&&(L=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const P=new Float32Array(V*L*4*S),E=new Wv(P,V,L,S);E.type=Fa,E.needsUpdate=!0;const z=D*4;for(let F=0;F<S;F++){const X=v[F],st=C[F],ct=O[F],H=V*L*4*F;for(let U=0;U<X.count;U++){const B=U*z;T===!0&&(l.fromBufferAttribute(X,U),P[H+B+0]=l.x,P[H+B+1]=l.y,P[H+B+2]=l.z,P[H+B+3]=0),A===!0&&(l.fromBufferAttribute(st,U),P[H+B+4]=l.x,P[H+B+5]=l.y,P[H+B+6]=l.z,P[H+B+7]=0),x===!0&&(l.fromBufferAttribute(ct,U),P[H+B+8]=l.x,P[H+B+9]=l.y,P[H+B+10]=l.z,P[H+B+11]=ct.itemSize===4?l.w:1)}}g={count:S,texture:E,size:new je(V,L)},s.set(p,g),p.addEventListener("dispose",q)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let x=0;x<d.length;x++)T+=d[x];const A=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function jb(r,t,i,s,l){let c=new WeakMap;function h(d){const _=l.render.frame,S=d.geometry,g=t.get(d,S);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==_&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function p(){c=new WeakMap}function m(d){const _=d.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:p}}const Zb={[Dv]:"LINEAR_TONE_MAPPING",[Nv]:"REINHARD_TONE_MAPPING",[Uv]:"CINEON_TONE_MAPPING",[Lv]:"ACES_FILMIC_TONE_MAPPING",[Pv]:"AGX_TONE_MAPPING",[zv]:"NEUTRAL_TONE_MAPPING",[Ov]:"CUSTOM_TONE_MAPPING"};function Kb(r,t,i,s,l){const c=new Ga(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Go(t,i):void 0}),h=new Ga(t,i,{type:Ms,depthBuffer:!1,stencilBuffer:!1}),p=new Ci;p.setAttribute("position",new Mi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Mi([0,2,0,0,2,0],2));const m=new Fy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new be(p,m),_=new ix(-1,1,1,-1,0,1);let S=null,g=null,y=!1,T,A=null,x=[],v=!1;this.setSize=function(C,O){c.setSize(C,O),h.setSize(C,O);for(let D=0;D<x.length;D++){const V=x[D];V.setSize&&V.setSize(C,O)}},this.setEffects=function(C){x=C,v=x.length>0&&x[0].isRenderPass===!0;const O=c.width,D=c.height;for(let V=0;V<x.length;V++){const L=x[V];L.setSize&&L.setSize(O,D)}},this.begin=function(C,O){if(y||C.toneMapping===Va&&x.length===0)return!1;if(A=O,O!==null){const D=O.width,V=O.height;(c.width!==D||c.height!==V)&&this.setSize(D,V)}return v===!1&&C.setRenderTarget(c),T=C.toneMapping,C.toneMapping=Va,!0},this.hasRenderPass=function(){return v},this.end=function(C,O){C.toneMapping=T,y=!0;let D=c,V=h;for(let L=0;L<x.length;L++){const P=x[L];if(P.enabled!==!1&&(P.render(C,V,D,O),P.needsSwap!==!1)){const E=D;D=V,V=E}}if(S!==C.outputColorSpace||g!==C.toneMapping){S=C.outputColorSpace,g=C.toneMapping,m.defines={},Fe.getTransfer(S)===un&&(m.defines.SRGB_TRANSFER="");const L=Zb[g];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(A),C.render(d,_),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const ox=new Si,vp=new Go(1,1),lx=new Wv,cx=new my,ux=new Jv,cv=[],uv=[],fv=new Float32Array(16),hv=new Float32Array(9),dv=new Float32Array(4);function Xo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=cv[l];if(c===void 0&&(c=new Float32Array(l),cv[l]=c),t!==0){s.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=i,r[h].toArray(c,p)}return c}function Jn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function $n(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Xu(r,t){let i=uv[t];i===void 0&&(i=new Int32Array(t),uv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Qb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Jb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Jn(i,t))return;r.uniform2fv(this.addr,t),$n(i,t)}}function $b(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Jn(i,t))return;r.uniform3fv(this.addr,t),$n(i,t)}}function tE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Jn(i,t))return;r.uniform4fv(this.addr,t),$n(i,t)}}function eE(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Jn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),$n(i,t)}else{if(Jn(i,s))return;dv.set(s),r.uniformMatrix2fv(this.addr,!1,dv),$n(i,s)}}function nE(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Jn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),$n(i,t)}else{if(Jn(i,s))return;hv.set(s),r.uniformMatrix3fv(this.addr,!1,hv),$n(i,s)}}function iE(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Jn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),$n(i,t)}else{if(Jn(i,s))return;fv.set(s),r.uniformMatrix4fv(this.addr,!1,fv),$n(i,s)}}function aE(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function sE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Jn(i,t))return;r.uniform2iv(this.addr,t),$n(i,t)}}function rE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Jn(i,t))return;r.uniform3iv(this.addr,t),$n(i,t)}}function oE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Jn(i,t))return;r.uniform4iv(this.addr,t),$n(i,t)}}function lE(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function cE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Jn(i,t))return;r.uniform2uiv(this.addr,t),$n(i,t)}}function uE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Jn(i,t))return;r.uniform3uiv(this.addr,t),$n(i,t)}}function fE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Jn(i,t))return;r.uniform4uiv(this.addr,t),$n(i,t)}}function hE(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(vp.compareFunction=i.isReversedDepthBuffer()?Dp:Cp,c=vp):c=ox,i.setTexture2D(t||c,l)}function dE(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||cx,l)}function pE(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ux,l)}function mE(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||lx,l)}function gE(r){switch(r){case 5126:return Qb;case 35664:return Jb;case 35665:return $b;case 35666:return tE;case 35674:return eE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return aE;case 35667:case 35671:return sE;case 35668:case 35672:return rE;case 35669:case 35673:return oE;case 5125:return lE;case 36294:return cE;case 36295:return uE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return hE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}function _E(r,t){r.uniform1fv(this.addr,t)}function vE(r,t){const i=Xo(t,this.size,2);r.uniform2fv(this.addr,i)}function xE(r,t){const i=Xo(t,this.size,3);r.uniform3fv(this.addr,i)}function SE(r,t){const i=Xo(t,this.size,4);r.uniform4fv(this.addr,i)}function ME(r,t){const i=Xo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function yE(r,t){const i=Xo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function TE(r,t){const i=Xo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function bE(r,t){r.uniform1iv(this.addr,t)}function EE(r,t){r.uniform2iv(this.addr,t)}function AE(r,t){r.uniform3iv(this.addr,t)}function RE(r,t){r.uniform4iv(this.addr,t)}function wE(r,t){r.uniform1uiv(this.addr,t)}function CE(r,t){r.uniform2uiv(this.addr,t)}function DE(r,t){r.uniform3uiv(this.addr,t)}function NE(r,t){r.uniform4uiv(this.addr,t)}function UE(r,t,i){const s=this.cache,l=t.length,c=Xu(i,l);Jn(s,c)||(r.uniform1iv(this.addr,c),$n(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=vp:h=ox;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||h,c[p])}function LE(r,t,i){const s=this.cache,l=t.length,c=Xu(i,l);Jn(s,c)||(r.uniform1iv(this.addr,c),$n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||cx,c[h])}function OE(r,t,i){const s=this.cache,l=t.length,c=Xu(i,l);Jn(s,c)||(r.uniform1iv(this.addr,c),$n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||ux,c[h])}function PE(r,t,i){const s=this.cache,l=t.length,c=Xu(i,l);Jn(s,c)||(r.uniform1iv(this.addr,c),$n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||lx,c[h])}function zE(r){switch(r){case 5126:return _E;case 35664:return vE;case 35665:return xE;case 35666:return SE;case 35674:return ME;case 35675:return yE;case 35676:return TE;case 5124:case 35670:return bE;case 35667:case 35671:return EE;case 35668:case 35672:return AE;case 35669:case 35673:return RE;case 5125:return wE;case 36294:return CE;case 36295:return DE;case 36296:return NE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return LE;case 35680:case 36300:case 36308:case 36293:return OE;case 36289:case 36303:case 36311:case 36292:return PE}}class IE{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=gE(i.type)}}class FE{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=zE(i.type)}}class BE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function pv(r,t){r.seq.push(t),r.map[t.id]=t}function VE(r,t,i){const s=r.name,l=s.length;for(wd.lastIndex=0;;){const c=wd.exec(s),h=wd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){pv(i,d===void 0?new IE(p,r,t):new FE(p,r,t));break}else{let S=i.map[p];S===void 0&&(S=new BE(p),pv(i,S)),i=S}}}class Du{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=t.getActiveUniform(i,h),m=t.getUniformLocation(i,p.name);VE(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function mv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const GE=37297;let HE=0;function kE(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const gv=new _e;function XE(r){Fe._getMatrix(gv,Fe.workingColorSpace,r);const t=`mat3( ${gv.elements.map(i=>i.toFixed(4))} )`;switch(Fe.getTransfer(r)){case Pu:return[t,"LinearTransferOETF"];case un:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function _v(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+kE(r.getShaderSource(t),p)}else return c}function qE(r,t){const i=XE(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const WE={[Dv]:"Linear",[Nv]:"Reinhard",[Uv]:"Cineon",[Lv]:"ACESFilmic",[Pv]:"AgX",[zv]:"Neutral",[Ov]:"Custom"};function YE(r,t){const i=WE[t];return i===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bu=new Z;function jE(){Fe.getLuminanceCoefficients(bu);const r=bu.x.toFixed(4),t=bu.y.toFixed(4),i=bu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gl).join(`
`)}function KE(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function QE(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:p}}return i}function Gl(r){return r!==""}function vv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const JE=/^[ \t]*#include +<([\w\d./]+)>/gm;function xp(r){return r.replace(JE,tA)}const $E=new Map;function tA(r,t){let i=Ae[t];if(i===void 0){const s=$E.get(t);if(s!==void 0)i=Ae[s],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return xp(i)}const eA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sv(r){return r.replace(eA,nA)}function nA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Mv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const iA={[Eu]:"SHADOWMAP_TYPE_PCF",[Vl]:"SHADOWMAP_TYPE_VSM"};function aA(r){return iA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sA={[Or]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE",[Gu]:"ENVMAP_TYPE_CUBE_UV"};function rA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":sA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const oA={[Vo]:"ENVMAP_MODE_REFRACTION"};function lA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":oA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cA={[yp]:"ENVMAP_BLENDING_MULTIPLY",[jM]:"ENVMAP_BLENDING_MIX",[ZM]:"ENVMAP_BLENDING_ADD"};function uA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":cA[r.combine]||"ENVMAP_BLENDING_NONE"}function fA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function hA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=aA(i),d=rA(i),_=lA(i),S=uA(i),g=fA(i),y=ZE(i),T=KE(c),A=l.createProgram();let x,v,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Gl).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Gl).join(`
`),v.length>0&&(v+=`
`)):(x=[Mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gl).join(`
`),v=[Mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+_:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?Ae.tonemapping_pars_fragment:"",i.toneMapping!==Va?YE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,qE("linearToOutputTexel",i.outputColorSpace),jE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Gl).join(`
`)),h=xp(h),h=vv(h,i),h=xv(h,i),p=xp(p),p=vv(p,i),p=xv(p,i),h=Sv(h),p=Sv(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",i.glslVersion===D_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=C+x+h,D=C+v+p,V=mv(l,l.VERTEX_SHADER,O),L=mv(l,l.FRAGMENT_SHADER,D);l.attachShader(A,V),l.attachShader(A,L),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(F){if(r.debug.checkShaderErrors){const X=l.getProgramInfoLog(A)||"",st=l.getShaderInfoLog(V)||"",ct=l.getShaderInfoLog(L)||"",H=X.trim(),U=st.trim(),B=ct.trim();let lt=!0,pt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(lt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,V,L);else{const Tt=_v(l,V,"vertex"),I=_v(l,L,"fragment");Ye("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+H+`
`+Tt+`
`+I)}else H!==""?ue("WebGLProgram: Program Info Log:",H):(U===""||B==="")&&(pt=!1);pt&&(F.diagnostics={runnable:lt,programLog:H,vertexShader:{log:U,prefix:x},fragmentShader:{log:B,prefix:v}})}l.deleteShader(V),l.deleteShader(L),E=new Du(l,A),z=QE(l,A)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let z;this.getAttributes=function(){return z===void 0&&P(this),z};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(A,GE)),q},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HE++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=L,this}let dA=0;class pA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new mA(t),i.set(t,s)),s}}class mA{constructor(t){this.id=dA++,this.code=t,this.usedTimes=0}}function gA(r){return r===Pr||r===Nu||r===Uu}function _A(r,t,i,s,l,c){const h=new Yv,p=new pA,m=new Set,d=[],_=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function A(E,z,q,F,X,st){const ct=F.fog,H=X.geometry,U=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,B=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,lt=t.get(E.envMap||U,B),pt=lt&&lt.mapping===Gu?lt.image.height:null,Tt=y[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&ue("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const I=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,J=I!==void 0?I.length:0;let Mt=0;H.morphAttributes.position!==void 0&&(Mt=1),H.morphAttributes.normal!==void 0&&(Mt=2),H.morphAttributes.color!==void 0&&(Mt=3);let Rt,zt,rt,bt;if(Tt){const Pt=Ia[Tt];Rt=Pt.vertexShader,zt=Pt.fragmentShader}else Rt=E.vertexShader,zt=E.fragmentShader,p.update(E),rt=p.getVertexShaderID(E),bt=p.getFragmentShaderID(E);const At=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),ee=X.isInstancedMesh===!0,Qt=X.isBatchedMesh===!0,De=!!E.map,ge=!!E.matcap,ve=!!lt,Oe=!!E.aoMap,fe=!!E.lightMap,Sn=!!E.bumpMap,rn=!!E.normalMap,Bn=!!E.displacementMap,Y=!!E.emissiveMap,Mn=!!E.metalnessMap,Se=!!E.roughnessMap,Je=E.anisotropy>0,Dt=E.clearcoat>0,pn=E.dispersion>0,N=E.iridescence>0,b=E.sheen>0,Q=E.transmission>0,vt=Je&&!!E.anisotropyMap,Et=Dt&&!!E.clearcoatMap,Lt=Dt&&!!E.clearcoatNormalMap,Ft=Dt&&!!E.clearcoatRoughnessMap,ft=N&&!!E.iridescenceMap,ht=N&&!!E.iridescenceThicknessMap,Bt=b&&!!E.sheenColorMap,Vt=b&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,Ot=!!E.specularColorMap,oe=!!E.specularIntensityMap,le=Q&&!!E.transmissionMap,Ee=Q&&!!E.thicknessMap,k=!!E.gradientMap,wt=!!E.alphaMap,mt=E.alphaTest>0,kt=!!E.alphaHash,gt=!!E.extensions;let $=Va;E.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&($=r.toneMapping);const dt={shaderID:Tt,shaderType:E.type,shaderName:E.name,vertexShader:Rt,fragmentShader:zt,defines:E.defines,customVertexShaderID:rt,customFragmentShaderID:bt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&X._colorsTexture!==null,instancing:ee,instancingColor:ee&&X.instanceColor!==null,instancingMorph:ee&&X.morphTexture!==null,outputColorSpace:At===null?r.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Fe.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:De,matcap:ge,envMap:ve,envMapMode:ve&&lt.mapping,envMapCubeUVHeight:pt,aoMap:Oe,lightMap:fe,bumpMap:Sn,normalMap:rn,displacementMap:Bn,emissiveMap:Y,normalMapObjectSpace:rn&&E.normalMapType===JM,normalMapTangentSpace:rn&&E.normalMapType===Lu,packedNormalMap:rn&&E.normalMapType===Lu&&gA(E.normalMap.format),metalnessMap:Mn,roughnessMap:Se,anisotropy:Je,anisotropyMap:vt,clearcoat:Dt,clearcoatMap:Et,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Ft,dispersion:pn,iridescence:N,iridescenceMap:ft,iridescenceThicknessMap:ht,sheen:b,sheenColorMap:Bt,sheenRoughnessMap:Vt,specularMap:Nt,specularColorMap:Ot,specularIntensityMap:oe,transmission:Q,transmissionMap:le,thicknessMap:Ee,gradientMap:k,opaque:E.transparent===!1&&E.blending===Io&&E.alphaToCoverage===!1,alphaMap:wt,alphaTest:mt,alphaHash:kt,combine:E.combine,mapUv:De&&T(E.map.channel),aoMapUv:Oe&&T(E.aoMap.channel),lightMapUv:fe&&T(E.lightMap.channel),bumpMapUv:Sn&&T(E.bumpMap.channel),normalMapUv:rn&&T(E.normalMap.channel),displacementMapUv:Bn&&T(E.displacementMap.channel),emissiveMapUv:Y&&T(E.emissiveMap.channel),metalnessMapUv:Mn&&T(E.metalnessMap.channel),roughnessMapUv:Se&&T(E.roughnessMap.channel),anisotropyMapUv:vt&&T(E.anisotropyMap.channel),clearcoatMapUv:Et&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&T(E.sheenRoughnessMap.channel),specularMapUv:Nt&&T(E.specularMap.channel),specularColorMapUv:Ot&&T(E.specularColorMap.channel),specularIntensityMapUv:oe&&T(E.specularIntensityMap.channel),transmissionMapUv:le&&T(E.transmissionMap.channel),thicknessMapUv:Ee&&T(E.thicknessMap.channel),alphaMapUv:wt&&T(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(rn||Je),vertexNormals:!!H.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!H.attributes.uv&&(De||wt),fog:!!ct,useFog:E.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||H.attributes.normal===void 0&&rn===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ct,skinning:X.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Mt,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:st.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:$,decodeVideoTexture:De&&E.map.isVideoTexture===!0&&Fe.getTransfer(E.map.colorSpace)===un,decodeVideoTextureEmissive:Y&&E.emissiveMap.isVideoTexture===!0&&Fe.getTransfer(E.emissiveMap.colorSpace)===un,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_s,flipSided:E.side===Fi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:gt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&E.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return dt.vertexUv1s=m.has(1),dt.vertexUv2s=m.has(2),dt.vertexUv3s=m.has(3),m.clear(),dt}function x(E){const z=[];if(E.shaderID?z.push(E.shaderID):(z.push(E.customVertexShaderID),z.push(E.customFragmentShaderID)),E.defines!==void 0)for(const q in E.defines)z.push(q),z.push(E.defines[q]);return E.isRawShaderMaterial===!1&&(v(z,E),C(z,E),z.push(r.outputColorSpace)),z.push(E.customProgramCacheKey),z.join()}function v(E,z){E.push(z.precision),E.push(z.outputColorSpace),E.push(z.envMapMode),E.push(z.envMapCubeUVHeight),E.push(z.mapUv),E.push(z.alphaMapUv),E.push(z.lightMapUv),E.push(z.aoMapUv),E.push(z.bumpMapUv),E.push(z.normalMapUv),E.push(z.displacementMapUv),E.push(z.emissiveMapUv),E.push(z.metalnessMapUv),E.push(z.roughnessMapUv),E.push(z.anisotropyMapUv),E.push(z.clearcoatMapUv),E.push(z.clearcoatNormalMapUv),E.push(z.clearcoatRoughnessMapUv),E.push(z.iridescenceMapUv),E.push(z.iridescenceThicknessMapUv),E.push(z.sheenColorMapUv),E.push(z.sheenRoughnessMapUv),E.push(z.specularMapUv),E.push(z.specularColorMapUv),E.push(z.specularIntensityMapUv),E.push(z.transmissionMapUv),E.push(z.thicknessMapUv),E.push(z.combine),E.push(z.fogExp2),E.push(z.sizeAttenuation),E.push(z.morphTargetsCount),E.push(z.morphAttributeCount),E.push(z.numDirLights),E.push(z.numPointLights),E.push(z.numSpotLights),E.push(z.numSpotLightMaps),E.push(z.numHemiLights),E.push(z.numRectAreaLights),E.push(z.numDirLightShadows),E.push(z.numPointLightShadows),E.push(z.numSpotLightShadows),E.push(z.numSpotLightShadowsWithMaps),E.push(z.numLightProbes),E.push(z.shadowMapType),E.push(z.toneMapping),E.push(z.numClippingPlanes),E.push(z.numClipIntersection),E.push(z.depthPacking)}function C(E,z){h.disableAll(),z.instancing&&h.enable(0),z.instancingColor&&h.enable(1),z.instancingMorph&&h.enable(2),z.matcap&&h.enable(3),z.envMap&&h.enable(4),z.normalMapObjectSpace&&h.enable(5),z.normalMapTangentSpace&&h.enable(6),z.clearcoat&&h.enable(7),z.iridescence&&h.enable(8),z.alphaTest&&h.enable(9),z.vertexColors&&h.enable(10),z.vertexAlphas&&h.enable(11),z.vertexUv1s&&h.enable(12),z.vertexUv2s&&h.enable(13),z.vertexUv3s&&h.enable(14),z.vertexTangents&&h.enable(15),z.anisotropy&&h.enable(16),z.alphaHash&&h.enable(17),z.batching&&h.enable(18),z.dispersion&&h.enable(19),z.batchingColor&&h.enable(20),z.gradientMap&&h.enable(21),z.packedNormalMap&&h.enable(22),z.vertexNormals&&h.enable(23),E.push(h.mask),h.disableAll(),z.fog&&h.enable(0),z.useFog&&h.enable(1),z.flatShading&&h.enable(2),z.logarithmicDepthBuffer&&h.enable(3),z.reversedDepthBuffer&&h.enable(4),z.skinning&&h.enable(5),z.morphTargets&&h.enable(6),z.morphNormals&&h.enable(7),z.morphColors&&h.enable(8),z.premultipliedAlpha&&h.enable(9),z.shadowMapEnabled&&h.enable(10),z.doubleSided&&h.enable(11),z.flipSided&&h.enable(12),z.useDepthPacking&&h.enable(13),z.dithering&&h.enable(14),z.transmission&&h.enable(15),z.sheen&&h.enable(16),z.opaque&&h.enable(17),z.pointsUvs&&h.enable(18),z.decodeVideoTexture&&h.enable(19),z.decodeVideoTextureEmissive&&h.enable(20),z.alphaToCoverage&&h.enable(21),z.numLightProbeGrids>0&&h.enable(22),E.push(h.mask)}function O(E){const z=y[E.type];let q;if(z){const F=Ia[z];q=Py.clone(F.uniforms)}else q=E.uniforms;return q}function D(E,z){let q=_.get(z);return q!==void 0?++q.usedTimes:(q=new hA(r,z,E,l),d.push(q),_.set(z,q)),q}function V(E){if(--E.usedTimes===0){const z=d.indexOf(E);d[z]=d[d.length-1],d.pop(),_.delete(E.cacheKey),E.destroy()}}function L(E){p.remove(E)}function P(){p.dispose()}return{getParameters:A,getProgramCacheKey:x,getUniforms:O,acquireProgram:D,releaseProgram:V,releaseShaderCache:L,programs:d,dispose:P}}function vA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function xA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function yv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Tv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,T,A,x,v){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:T,materialVariant:h(g),groupOrder:A,renderOrder:g.renderOrder,z:x,group:v},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=T,C.materialVariant=h(g),C.groupOrder=A,C.renderOrder=g.renderOrder,C.z=x,C.group=v),t++,C}function m(g,y,T,A,x,v){const C=p(g,y,T,A,x,v);T.transmission>0?s.push(C):T.transparent===!0?l.push(C):i.push(C)}function d(g,y,T,A,x,v){const C=p(g,y,T,A,x,v);T.transmission>0?s.unshift(C):T.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||xA),s.length>1&&s.sort(y||yv),l.length>1&&l.sort(y||yv)}function S(){for(let g=t,y=r.length;g<y;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:S,sort:_}}function SA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Tv,r.set(s,[h])):l>=c.length?(h=new Tv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function MA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new Ve};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":i={color:new Ve,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=i,i}}}function yA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let TA=0;function bA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function EA(r){const t=new MA,i=yA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new Z);const l=new Z,c=new Fn,h=new Fn;function p(d){let _=0,S=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let y=0,T=0,A=0,x=0,v=0,C=0,O=0,D=0,V=0,L=0,P=0;d.sort(bA);for(let z=0,q=d.length;z<q;z++){const F=d[z],X=F.color,st=F.intensity,ct=F.distance;let H=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Pr?H=F.shadow.map.texture:H=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)_+=X.r*st,S+=X.g*st,g+=X.b*st;else if(F.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(F.sh.coefficients[U],st);P++}else if(F.isDirectionalLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const B=F.shadow,lt=i.get(F);lt.shadowIntensity=B.intensity,lt.shadowBias=B.bias,lt.shadowNormalBias=B.normalBias,lt.shadowRadius=B.radius,lt.shadowMapSize=B.mapSize,s.directionalShadow[y]=lt,s.directionalShadowMap[y]=H,s.directionalShadowMatrix[y]=F.shadow.matrix,C++}s.directional[y]=U,y++}else if(F.isSpotLight){const U=t.get(F);U.position.setFromMatrixPosition(F.matrixWorld),U.color.copy(X).multiplyScalar(st),U.distance=ct,U.coneCos=Math.cos(F.angle),U.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),U.decay=F.decay,s.spot[A]=U;const B=F.shadow;if(F.map&&(s.spotLightMap[V]=F.map,V++,B.updateMatrices(F),F.castShadow&&L++),s.spotLightMatrix[A]=B.matrix,F.castShadow){const lt=i.get(F);lt.shadowIntensity=B.intensity,lt.shadowBias=B.bias,lt.shadowNormalBias=B.normalBias,lt.shadowRadius=B.radius,lt.shadowMapSize=B.mapSize,s.spotShadow[A]=lt,s.spotShadowMap[A]=H,D++}A++}else if(F.isRectAreaLight){const U=t.get(F);U.color.copy(X).multiplyScalar(st),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),s.rectArea[x]=U,x++}else if(F.isPointLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),U.distance=F.distance,U.decay=F.decay,F.castShadow){const B=F.shadow,lt=i.get(F);lt.shadowIntensity=B.intensity,lt.shadowBias=B.bias,lt.shadowNormalBias=B.normalBias,lt.shadowRadius=B.radius,lt.shadowMapSize=B.mapSize,lt.shadowCameraNear=B.camera.near,lt.shadowCameraFar=B.camera.far,s.pointShadow[T]=lt,s.pointShadowMap[T]=H,s.pointShadowMatrix[T]=F.shadow.matrix,O++}s.point[T]=U,T++}else if(F.isHemisphereLight){const U=t.get(F);U.skyColor.copy(F.color).multiplyScalar(st),U.groundColor.copy(F.groundColor).multiplyScalar(st),s.hemi[v]=U,v++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qt.LTC_FLOAT_1,s.rectAreaLTC2=qt.LTC_FLOAT_2):(s.rectAreaLTC1=qt.LTC_HALF_1,s.rectAreaLTC2=qt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=S,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==y||E.pointLength!==T||E.spotLength!==A||E.rectAreaLength!==x||E.hemiLength!==v||E.numDirectionalShadows!==C||E.numPointShadows!==O||E.numSpotShadows!==D||E.numSpotMaps!==V||E.numLightProbes!==P)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=x,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+V-L,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=P,E.directionalLength=y,E.pointLength=T,E.spotLength=A,E.rectAreaLength=x,E.hemiLength=v,E.numDirectionalShadows=C,E.numPointShadows=O,E.numSpotShadows=D,E.numSpotMaps=V,E.numLightProbes=P,s.version=TA++)}function m(d,_){let S=0,g=0,y=0,T=0,A=0;const x=_.matrixWorldInverse;for(let v=0,C=d.length;v<C;v++){const O=d[v];if(O.isDirectionalLight){const D=s.directional[S];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),S++}else if(O.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),y++}else if(O.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(x),h.identity(),c.copy(O.matrixWorld),c.premultiply(x),h.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(O.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(x),g++}else if(O.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(x),A++}}}return{setup:p,setupView:m,state:s}}function bv(r){const t=new EA(r),i=[],s=[],l=[];function c(g){S.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){t.setup(i)}function _(g){t.setupView(i,g)}const S={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:d,setupLightsView:_,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function AA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new bv(r),t.set(l,[p])):c>=h.length?(p=new bv(r),h.push(p)):p=h[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const RA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,CA=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],DA=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Ev=new Fn,Bl=new Z,Cd=new Z;function NA(r,t,i){let s=new Lp;const l=new je,c=new je,h=new In,p=new By,m=new Vy,d={},_=i.maxTextureSize,S={[ar]:Fi,[Fi]:ar,[_s]:_s},g=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:RA,fragmentShader:wA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new Ci;T.setAttribute("position",new Ha(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new be(T,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let v=this.type;this.render=function(L,P,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;this.type===CM&&(ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Eu);const z=r.getRenderTarget(),q=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),X=r.state;X.setBlending(xs),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const st=v!==this.type;st&&P.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(H=>H.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,H=L.length;ct<H;ct++){const U=L[ct],B=U.shadow;if(B===void 0){ue("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const lt=B.getFrameExtents();l.multiply(lt),c.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/lt.x),l.x=c.x*lt.x,B.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/lt.y),l.y=c.y*lt.y,B.mapSize.y=c.y));const pt=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=pt,B.map===null||st===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Vl){if(U.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ga(l.x,l.y,{format:Pr,type:Ms,minFilter:xi,magFilter:xi,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new Go(l.x,l.y,Fa),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=ys,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ui,B.map.depthTexture.magFilter=ui}else U.isPointLight?(B.map=new rx(l.x),B.map.depthTexture=new Ly(l.x,ka)):(B.map=new Ga(l.x,l.y),B.map.depthTexture=new Go(l.x,l.y,ka)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=ys,this.type===Eu?(B.map.depthTexture.compareFunction=pt?Dp:Cp,B.map.depthTexture.minFilter=xi,B.map.depthTexture.magFilter=xi):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ui,B.map.depthTexture.magFilter=ui);B.camera.updateProjectionMatrix()}const Tt=B.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Tt;I++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,I),r.clear();else{I===0&&(r.setRenderTarget(B.map),r.clear());const J=B.getViewport(I);h.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),X.viewport(h)}if(U.isPointLight){const J=B.camera,Mt=B.matrix,Rt=U.distance||J.far;Rt!==J.far&&(J.far=Rt,J.updateProjectionMatrix()),Bl.setFromMatrixPosition(U.matrixWorld),J.position.copy(Bl),Cd.copy(J.position),Cd.add(CA[I]),J.up.copy(DA[I]),J.lookAt(Cd),J.updateMatrixWorld(),Mt.makeTranslation(-Bl.x,-Bl.y,-Bl.z),Ev.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Ev,J.coordinateSystem,J.reversedDepth)}else B.updateMatrices(U);s=B.getFrustum(),D(P,E,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===Vl&&C(B,E),B.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(z,q,F)};function C(L,P){const E=t.update(A);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ga(l.x,l.y,{format:Pr,type:Ms})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(P,null,E,g,A,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(P,null,E,y,A,null)}function O(L,P,E,z){let q=null;const F=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)q=F;else if(q=E.isPointLight===!0?m:p,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const X=q.uuid,st=P.uuid;let ct=d[X];ct===void 0&&(ct={},d[X]=ct);let H=ct[st];H===void 0&&(H=q.clone(),ct[st]=H,P.addEventListener("dispose",V)),q=H}if(q.visible=P.visible,q.wireframe=P.wireframe,z===Vl?q.side=P.shadowSide!==null?P.shadowSide:P.side:q.side=P.shadowSide!==null?P.shadowSide:S[P.side],q.alphaMap=P.alphaMap,q.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,q.map=P.map,q.clipShadows=P.clipShadows,q.clippingPlanes=P.clippingPlanes,q.clipIntersection=P.clipIntersection,q.displacementMap=P.displacementMap,q.displacementScale=P.displacementScale,q.displacementBias=P.displacementBias,q.wireframeLinewidth=P.wireframeLinewidth,q.linewidth=P.linewidth,E.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const X=r.properties.get(q);X.light=E}return q}function D(L,P,E,z,q){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&q===Vl)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const st=t.update(L),ct=L.material;if(Array.isArray(ct)){const H=st.groups;for(let U=0,B=H.length;U<B;U++){const lt=H[U],pt=ct[lt.materialIndex];if(pt&&pt.visible){const Tt=O(L,pt,z,q);L.onBeforeShadow(r,L,P,E,st,Tt,lt),r.renderBufferDirect(E,null,st,Tt,L,lt),L.onAfterShadow(r,L,P,E,st,Tt,lt)}}}else if(ct.visible){const H=O(L,ct,z,q);L.onBeforeShadow(r,L,P,E,st,H,null),r.renderBufferDirect(E,null,st,H,L,null),L.onAfterShadow(r,L,P,E,st,H,null)}}const X=L.children;for(let st=0,ct=X.length;st<ct;st++)D(X[st],P,E,z,q)}function V(L){L.target.removeEventListener("dispose",V);for(const E in d){const z=d[E],q=L.target.uuid;q in z&&(z[q].dispose(),delete z[q])}}}function UA(r,t){function i(){let k=!1;const wt=new In;let mt=null;const kt=new In(0,0,0,0);return{setMask:function(gt){mt!==gt&&!k&&(r.colorMask(gt,gt,gt,gt),mt=gt)},setLocked:function(gt){k=gt},setClear:function(gt,$,dt,Pt,he){he===!0&&(gt*=Pt,$*=Pt,dt*=Pt),wt.set(gt,$,dt,Pt),kt.equals(wt)===!1&&(r.clearColor(gt,$,dt,Pt),kt.copy(wt))},reset:function(){k=!1,mt=null,kt.set(-1,0,0,0)}}}function s(){let k=!1,wt=!1,mt=null,kt=null,gt=null;return{setReversed:function($){if(wt!==$){const dt=t.get("EXT_clip_control");$?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),wt=$;const Pt=gt;gt=null,this.setClear(Pt)}},getReversed:function(){return wt},setTest:function($){$?At(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function($){mt!==$&&!k&&(r.depthMask($),mt=$)},setFunc:function($){if(wt&&($=ly[$]),kt!==$){switch($){case Ud:r.depthFunc(r.NEVER);break;case Ld:r.depthFunc(r.ALWAYS);break;case Od:r.depthFunc(r.LESS);break;case Bo:r.depthFunc(r.LEQUAL);break;case Pd:r.depthFunc(r.EQUAL);break;case zd:r.depthFunc(r.GEQUAL);break;case Id:r.depthFunc(r.GREATER);break;case Fd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}kt=$}},setLocked:function($){k=$},setClear:function($){gt!==$&&(gt=$,wt&&($=1-$),r.clearDepth($))},reset:function(){k=!1,mt=null,kt=null,gt=null,wt=!1}}}function l(){let k=!1,wt=null,mt=null,kt=null,gt=null,$=null,dt=null,Pt=null,he=null;return{setTest:function(ae){k||(ae?At(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(ae){wt!==ae&&!k&&(r.stencilMask(ae),wt=ae)},setFunc:function(ae,on,Ze){(mt!==ae||kt!==on||gt!==Ze)&&(r.stencilFunc(ae,on,Ze),mt=ae,kt=on,gt=Ze)},setOp:function(ae,on,Ze){($!==ae||dt!==on||Pt!==Ze)&&(r.stencilOp(ae,on,Ze),$=ae,dt=on,Pt=Ze)},setLocked:function(ae){k=ae},setClear:function(ae){he!==ae&&(r.clearStencil(ae),he=ae)},reset:function(){k=!1,wt=null,mt=null,kt=null,gt=null,$=null,dt=null,Pt=null,he=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let _={},S={},g={},y=new WeakMap,T=[],A=null,x=!1,v=null,C=null,O=null,D=null,V=null,L=null,P=null,E=new Ve(0,0,0),z=0,q=!1,F=null,X=null,st=null,ct=null,H=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,lt=0;const pt=r.getParameter(r.VERSION);pt.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(pt)[1]),B=lt>=1):pt.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),B=lt>=2);let Tt=null,I={};const J=r.getParameter(r.SCISSOR_BOX),Mt=r.getParameter(r.VIEWPORT),Rt=new In().fromArray(J),zt=new In().fromArray(Mt);function rt(k,wt,mt,kt){const gt=new Uint8Array(4),$=r.createTexture();r.bindTexture(k,$),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let dt=0;dt<mt;dt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(wt,0,r.RGBA,1,1,kt,0,r.RGBA,r.UNSIGNED_BYTE,gt):r.texImage2D(wt+dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,gt);return $}const bt={};bt[r.TEXTURE_2D]=rt(r.TEXTURE_2D,r.TEXTURE_2D,1),bt[r.TEXTURE_CUBE_MAP]=rt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[r.TEXTURE_2D_ARRAY]=rt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),bt[r.TEXTURE_3D]=rt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),At(r.DEPTH_TEST),h.setFunc(Bo),Sn(!1),rn(b_),At(r.CULL_FACE),Oe(xs);function At(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function Ct(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function ee(k,wt){return g[k]!==wt?(r.bindFramebuffer(k,wt),g[k]=wt,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=wt),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=wt),!0):!1}function Qt(k,wt){let mt=T,kt=!1;if(k){mt=y.get(wt),mt===void 0&&(mt=[],y.set(wt,mt));const gt=k.textures;if(mt.length!==gt.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let $=0,dt=gt.length;$<dt;$++)mt[$]=r.COLOR_ATTACHMENT0+$;mt.length=gt.length,kt=!0}}else mt[0]!==r.BACK&&(mt[0]=r.BACK,kt=!0);kt&&r.drawBuffers(mt)}function De(k){return A!==k?(r.useProgram(k),A=k,!0):!1}const ge={[Dr]:r.FUNC_ADD,[NM]:r.FUNC_SUBTRACT,[UM]:r.FUNC_REVERSE_SUBTRACT};ge[LM]=r.MIN,ge[OM]=r.MAX;const ve={[PM]:r.ZERO,[zM]:r.ONE,[IM]:r.SRC_COLOR,[Dd]:r.SRC_ALPHA,[kM]:r.SRC_ALPHA_SATURATE,[GM]:r.DST_COLOR,[BM]:r.DST_ALPHA,[FM]:r.ONE_MINUS_SRC_COLOR,[Nd]:r.ONE_MINUS_SRC_ALPHA,[HM]:r.ONE_MINUS_DST_COLOR,[VM]:r.ONE_MINUS_DST_ALPHA,[XM]:r.CONSTANT_COLOR,[qM]:r.ONE_MINUS_CONSTANT_COLOR,[WM]:r.CONSTANT_ALPHA,[YM]:r.ONE_MINUS_CONSTANT_ALPHA};function Oe(k,wt,mt,kt,gt,$,dt,Pt,he,ae){if(k===xs){x===!0&&(Ct(r.BLEND),x=!1);return}if(x===!1&&(At(r.BLEND),x=!0),k!==DM){if(k!==v||ae!==q){if((C!==Dr||V!==Dr)&&(r.blendEquation(r.FUNC_ADD),C=Dr,V=Dr),ae)switch(k){case Io:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case E_:r.blendFunc(r.ONE,r.ONE);break;case A_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case R_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ye("WebGLState: Invalid blending: ",k);break}else switch(k){case Io:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case E_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case A_:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R_:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",k);break}O=null,D=null,L=null,P=null,E.set(0,0,0),z=0,v=k,q=ae}return}gt=gt||wt,$=$||mt,dt=dt||kt,(wt!==C||gt!==V)&&(r.blendEquationSeparate(ge[wt],ge[gt]),C=wt,V=gt),(mt!==O||kt!==D||$!==L||dt!==P)&&(r.blendFuncSeparate(ve[mt],ve[kt],ve[$],ve[dt]),O=mt,D=kt,L=$,P=dt),(Pt.equals(E)===!1||he!==z)&&(r.blendColor(Pt.r,Pt.g,Pt.b,he),E.copy(Pt),z=he),v=k,q=!1}function fe(k,wt){k.side===_s?Ct(r.CULL_FACE):At(r.CULL_FACE);let mt=k.side===Fi;wt&&(mt=!mt),Sn(mt),k.blending===Io&&k.transparent===!1?Oe(xs):Oe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const kt=k.stencilWrite;p.setTest(kt),kt&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Y(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function Sn(k){F!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),F=k)}function rn(k){k!==RM?(At(r.CULL_FACE),k!==X&&(k===b_?r.cullFace(r.BACK):k===wM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),X=k}function Bn(k){k!==st&&(B&&r.lineWidth(k),st=k)}function Y(k,wt,mt){k?(At(r.POLYGON_OFFSET_FILL),(ct!==wt||H!==mt)&&(ct=wt,H=mt,h.getReversed()&&(wt=-wt),r.polygonOffset(wt,mt))):Ct(r.POLYGON_OFFSET_FILL)}function Mn(k){k?At(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function Se(k){k===void 0&&(k=r.TEXTURE0+U-1),Tt!==k&&(r.activeTexture(k),Tt=k)}function Je(k,wt,mt){mt===void 0&&(Tt===null?mt=r.TEXTURE0+U-1:mt=Tt);let kt=I[mt];kt===void 0&&(kt={type:void 0,texture:void 0},I[mt]=kt),(kt.type!==k||kt.texture!==wt)&&(Tt!==mt&&(r.activeTexture(mt),Tt=mt),r.bindTexture(k,wt||bt[k]),kt.type=k,kt.texture=wt)}function Dt(){const k=I[Tt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function pn(){try{r.compressedTexImage2D(...arguments)}catch(k){Ye("WebGLState:",k)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(k){Ye("WebGLState:",k)}}function b(){try{r.texSubImage2D(...arguments)}catch(k){Ye("WebGLState:",k)}}function Q(){try{r.texSubImage3D(...arguments)}catch(k){Ye("WebGLState:",k)}}function vt(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Ye("WebGLState:",k)}}function Et(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Ye("WebGLState:",k)}}function Lt(){try{r.texStorage2D(...arguments)}catch(k){Ye("WebGLState:",k)}}function Ft(){try{r.texStorage3D(...arguments)}catch(k){Ye("WebGLState:",k)}}function ft(){try{r.texImage2D(...arguments)}catch(k){Ye("WebGLState:",k)}}function ht(){try{r.texImage3D(...arguments)}catch(k){Ye("WebGLState:",k)}}function Bt(k){return S[k]!==void 0?S[k]:r.getParameter(k)}function Vt(k,wt){S[k]!==wt&&(r.pixelStorei(k,wt),S[k]=wt)}function Nt(k){Rt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Rt.copy(k))}function Ot(k){zt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),zt.copy(k))}function oe(k,wt){let mt=d.get(wt);mt===void 0&&(mt=new WeakMap,d.set(wt,mt));let kt=mt.get(k);kt===void 0&&(kt=r.getUniformBlockIndex(wt,k.name),mt.set(k,kt))}function le(k,wt){const kt=d.get(wt).get(k);m.get(wt)!==kt&&(r.uniformBlockBinding(wt,kt,k.__bindingPointIndex),m.set(wt,kt))}function Ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},S={},Tt=null,I={},g={},y=new WeakMap,T=[],A=null,x=!1,v=null,C=null,O=null,D=null,V=null,L=null,P=null,E=new Ve(0,0,0),z=0,q=!1,F=null,X=null,st=null,ct=null,H=null,Rt.set(0,0,r.canvas.width,r.canvas.height),zt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:At,disable:Ct,bindFramebuffer:ee,drawBuffers:Qt,useProgram:De,setBlending:Oe,setMaterial:fe,setFlipSided:Sn,setCullFace:rn,setLineWidth:Bn,setPolygonOffset:Y,setScissorTest:Mn,activeTexture:Se,bindTexture:Je,unbindTexture:Dt,compressedTexImage2D:pn,compressedTexImage3D:N,texImage2D:ft,texImage3D:ht,pixelStorei:Vt,getParameter:Bt,updateUBOMapping:oe,uniformBlockBinding:le,texStorage2D:Lt,texStorage3D:Ft,texSubImage2D:b,texSubImage3D:Q,compressedTexSubImage2D:vt,compressedTexSubImage3D:Et,scissor:Nt,viewport:Ot,reset:Ee}}function LA(r,t,i,s,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new je,_=new WeakMap,S=new Set;let g;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,b){return T?new OffscreenCanvas(N,b):zu("canvas")}function x(N,b,Q){let vt=1;const Et=pn(N);if((Et.width>Q||Et.height>Q)&&(vt=Q/Math.max(Et.width,Et.height)),vt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Lt=Math.floor(vt*Et.width),Ft=Math.floor(vt*Et.height);g===void 0&&(g=A(Lt,Ft));const ft=b?A(Lt,Ft):g;return ft.width=Lt,ft.height=Ft,ft.getContext("2d").drawImage(N,0,0,Lt,Ft),ue("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+Lt+"x"+Ft+")."),ft}else return"data"in N&&ue("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),N;return N}function v(N){return N.generateMipmaps}function C(N){r.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(N,b,Q,vt,Et,Lt=!1){if(N!==null){if(r[N]!==void 0)return r[N];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ft;vt&&(Ft=t.get("EXT_texture_norm16"),Ft||ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=b;if(b===r.RED&&(Q===r.FLOAT&&(ft=r.R32F),Q===r.HALF_FLOAT&&(ft=r.R16F),Q===r.UNSIGNED_BYTE&&(ft=r.R8),Q===r.UNSIGNED_SHORT&&Ft&&(ft=Ft.R16_EXT),Q===r.SHORT&&Ft&&(ft=Ft.R16_SNORM_EXT)),b===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ft=r.R8UI),Q===r.UNSIGNED_SHORT&&(ft=r.R16UI),Q===r.UNSIGNED_INT&&(ft=r.R32UI),Q===r.BYTE&&(ft=r.R8I),Q===r.SHORT&&(ft=r.R16I),Q===r.INT&&(ft=r.R32I)),b===r.RG&&(Q===r.FLOAT&&(ft=r.RG32F),Q===r.HALF_FLOAT&&(ft=r.RG16F),Q===r.UNSIGNED_BYTE&&(ft=r.RG8),Q===r.UNSIGNED_SHORT&&Ft&&(ft=Ft.RG16_EXT),Q===r.SHORT&&Ft&&(ft=Ft.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ft=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ft=r.RG16UI),Q===r.UNSIGNED_INT&&(ft=r.RG32UI),Q===r.BYTE&&(ft=r.RG8I),Q===r.SHORT&&(ft=r.RG16I),Q===r.INT&&(ft=r.RG32I)),b===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),Q===r.UNSIGNED_INT&&(ft=r.RGB32UI),Q===r.BYTE&&(ft=r.RGB8I),Q===r.SHORT&&(ft=r.RGB16I),Q===r.INT&&(ft=r.RGB32I)),b===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ft=r.RGBA32UI),Q===r.BYTE&&(ft=r.RGBA8I),Q===r.SHORT&&(ft=r.RGBA16I),Q===r.INT&&(ft=r.RGBA32I)),b===r.RGB&&(Q===r.UNSIGNED_SHORT&&Ft&&(ft=Ft.RGB16_EXT),Q===r.SHORT&&Ft&&(ft=Ft.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),b===r.RGBA){const ht=Lt?Pu:Fe.getTransfer(Et);Q===r.FLOAT&&(ft=r.RGBA32F),Q===r.HALF_FLOAT&&(ft=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ft=ht===un?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Ft&&(ft=Ft.RGBA16_EXT),Q===r.SHORT&&Ft&&(ft=Ft.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function V(N,b){let Q;return N?b===null||b===ka||b===Wl?Q=r.DEPTH24_STENCIL8:b===Fa?Q=r.DEPTH32F_STENCIL8:b===ql&&(Q=r.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ka||b===Wl?Q=r.DEPTH_COMPONENT24:b===Fa?Q=r.DEPTH_COMPONENT32F:b===ql&&(Q=r.DEPTH_COMPONENT16),Q}function L(N,b){return v(N)===!0||N.isFramebufferTexture&&N.minFilter!==ui&&N.minFilter!==xi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function P(N){const b=N.target;b.removeEventListener("dispose",P),z(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&S.delete(b)}function E(N){const b=N.target;b.removeEventListener("dispose",E),F(b)}function z(N){const b=s.get(N);if(b.__webglInit===void 0)return;const Q=N.source,vt=y.get(Q);if(vt){const Et=vt[b.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&q(N),Object.keys(vt).length===0&&y.delete(Q)}s.remove(N)}function q(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const Q=N.source,vt=y.get(Q);delete vt[b.__cacheKey],h.memory.textures--}function F(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(b.__webglFramebuffer[vt]))for(let Et=0;Et<b.__webglFramebuffer[vt].length;Et++)r.deleteFramebuffer(b.__webglFramebuffer[vt][Et]);else r.deleteFramebuffer(b.__webglFramebuffer[vt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[vt])}else{if(Array.isArray(b.__webglFramebuffer))for(let vt=0;vt<b.__webglFramebuffer.length;vt++)r.deleteFramebuffer(b.__webglFramebuffer[vt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let vt=0;vt<b.__webglColorRenderbuffer.length;vt++)b.__webglColorRenderbuffer[vt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[vt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=N.textures;for(let vt=0,Et=Q.length;vt<Et;vt++){const Lt=s.get(Q[vt]);Lt.__webglTexture&&(r.deleteTexture(Lt.__webglTexture),h.memory.textures--),s.remove(Q[vt])}s.remove(N)}let X=0;function st(){X=0}function ct(){return X}function H(N){X=N}function U(){const N=X;return N>=l.maxTextures&&ue("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),X+=1,N}function B(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function lt(N,b){const Q=s.get(N);if(N.isVideoTexture&&Je(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Q.__version!==N.version){const vt=N.image;if(vt===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(Q,N,b);return}}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+b)}function pt(N,b){const Q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){Ct(Q,N,b);return}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+b)}function Tt(N,b){const Q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){Ct(Q,N,b);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+b)}function I(N,b){const Q=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Q.__version!==N.version){ee(Q,N,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+b)}const J={[gs]:r.REPEAT,[vs]:r.CLAMP_TO_EDGE,[Bd]:r.MIRRORED_REPEAT},Mt={[ui]:r.NEAREST,[KM]:r.NEAREST_MIPMAP_NEAREST,[eu]:r.NEAREST_MIPMAP_LINEAR,[xi]:r.LINEAR,[jh]:r.LINEAR_MIPMAP_NEAREST,[Ur]:r.LINEAR_MIPMAP_LINEAR},Rt={[$M]:r.NEVER,[ay]:r.ALWAYS,[ty]:r.LESS,[Cp]:r.LEQUAL,[ey]:r.EQUAL,[Dp]:r.GEQUAL,[ny]:r.GREATER,[iy]:r.NOTEQUAL};function zt(N,b){if(b.type===Fa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===xi||b.magFilter===jh||b.magFilter===eu||b.magFilter===Ur||b.minFilter===xi||b.minFilter===jh||b.minFilter===eu||b.minFilter===Ur)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,J[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,J[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,J[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Mt[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Mt[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ui||b.minFilter!==eu&&b.minFilter!==Ur||b.type===Fa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function rt(N,b){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",P));const vt=b.source;let Et=y.get(vt);Et===void 0&&(Et={},y.set(vt,Et));const Lt=B(b);if(Lt!==N.__cacheKey){Et[Lt]===void 0&&(Et[Lt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),Et[Lt].usedTimes++;const Ft=Et[N.__cacheKey];Ft!==void 0&&(Et[N.__cacheKey].usedTimes--,Ft.usedTimes===0&&q(b)),N.__cacheKey=Lt,N.__webglTexture=Et[Lt].texture}return Q}function bt(N,b,Q){return Math.floor(Math.floor(N/Q)/b)}function At(N,b,Q,vt){const Lt=N.updateRanges;if(Lt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,Q,vt,b.data);else{Lt.sort((Vt,Nt)=>Vt.start-Nt.start);let Ft=0;for(let Vt=1;Vt<Lt.length;Vt++){const Nt=Lt[Ft],Ot=Lt[Vt],oe=Nt.start+Nt.count,le=bt(Ot.start,b.width,4),Ee=bt(Nt.start,b.width,4);Ot.start<=oe+1&&le===Ee&&bt(Ot.start+Ot.count-1,b.width,4)===le?Nt.count=Math.max(Nt.count,Ot.start+Ot.count-Nt.start):(++Ft,Lt[Ft]=Ot)}Lt.length=Ft+1;const ft=i.getParameter(r.UNPACK_ROW_LENGTH),ht=i.getParameter(r.UNPACK_SKIP_PIXELS),Bt=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Vt=0,Nt=Lt.length;Vt<Nt;Vt++){const Ot=Lt[Vt],oe=Math.floor(Ot.start/4),le=Math.ceil(Ot.count/4),Ee=oe%b.width,k=Math.floor(oe/b.width),wt=le,mt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,Ee,k,wt,mt,Q,vt,b.data)}N.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ft),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(r.UNPACK_SKIP_ROWS,Bt)}}function Ct(N,b,Q){let vt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(vt=r.TEXTURE_3D);const Et=rt(N,b),Lt=b.source;i.bindTexture(vt,N.__webglTexture,r.TEXTURE0+Q);const Ft=s.get(Lt);if(Lt.version!==Ft.__version||Et===!0){if(i.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const mt=Fe.getPrimaries(Fe.workingColorSpace),kt=b.colorSpace===nr?null:Fe.getPrimaries(b.colorSpace),gt=b.colorSpace===nr||mt===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let ht=x(b.image,!1,l.maxTextureSize);ht=Dt(b,ht);const Bt=c.convert(b.format,b.colorSpace),Vt=c.convert(b.type);let Nt=D(b.internalFormat,Bt,Vt,b.normalized,b.colorSpace,b.isVideoTexture);zt(vt,b);let Ot;const oe=b.mipmaps,le=b.isVideoTexture!==!0,Ee=Ft.__version===void 0||Et===!0,k=Lt.dataReady,wt=L(b,ht);if(b.isDepthTexture)Nt=V(b.format===Lr,b.type),Ee&&(le?i.texStorage2D(r.TEXTURE_2D,1,Nt,ht.width,ht.height):i.texImage2D(r.TEXTURE_2D,0,Nt,ht.width,ht.height,0,Bt,Vt,null));else if(b.isDataTexture)if(oe.length>0){le&&Ee&&i.texStorage2D(r.TEXTURE_2D,wt,Nt,oe[0].width,oe[0].height);for(let mt=0,kt=oe.length;mt<kt;mt++)Ot=oe[mt],le?k&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,Bt,Vt,Ot.data):i.texImage2D(r.TEXTURE_2D,mt,Nt,Ot.width,Ot.height,0,Bt,Vt,Ot.data);b.generateMipmaps=!1}else le?(Ee&&i.texStorage2D(r.TEXTURE_2D,wt,Nt,ht.width,ht.height),k&&At(b,ht,Bt,Vt)):i.texImage2D(r.TEXTURE_2D,0,Nt,ht.width,ht.height,0,Bt,Vt,ht.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){le&&Ee&&i.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Nt,oe[0].width,oe[0].height,ht.depth);for(let mt=0,kt=oe.length;mt<kt;mt++)if(Ot=oe[mt],b.format!==ba)if(Bt!==null)if(le){if(k)if(b.layerUpdates.size>0){const gt=nv(Ot.width,Ot.height,b.format,b.type);for(const $ of b.layerUpdates){const dt=Ot.data.subarray($*gt/Ot.data.BYTES_PER_ELEMENT,($+1)*gt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,$,Ot.width,Ot.height,1,Bt,dt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Ot.width,Ot.height,ht.depth,Bt,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,Nt,Ot.width,Ot.height,ht.depth,0,Ot.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Ot.width,Ot.height,ht.depth,Bt,Vt,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,mt,Nt,Ot.width,Ot.height,ht.depth,0,Bt,Vt,Ot.data)}else{le&&Ee&&i.texStorage2D(r.TEXTURE_2D,wt,Nt,oe[0].width,oe[0].height);for(let mt=0,kt=oe.length;mt<kt;mt++)Ot=oe[mt],b.format!==ba?Bt!==null?le?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,Bt,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,mt,Nt,Ot.width,Ot.height,0,Ot.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?k&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,Bt,Vt,Ot.data):i.texImage2D(r.TEXTURE_2D,mt,Nt,Ot.width,Ot.height,0,Bt,Vt,Ot.data)}else if(b.isDataArrayTexture)if(le){if(Ee&&i.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Nt,ht.width,ht.height,ht.depth),k)if(b.layerUpdates.size>0){const mt=nv(ht.width,ht.height,b.format,b.type);for(const kt of b.layerUpdates){const gt=ht.data.subarray(kt*mt/ht.data.BYTES_PER_ELEMENT,(kt+1)*mt/ht.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,kt,ht.width,ht.height,1,Bt,Vt,gt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Bt,Vt,ht.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,ht.width,ht.height,ht.depth,0,Bt,Vt,ht.data);else if(b.isData3DTexture)le?(Ee&&i.texStorage3D(r.TEXTURE_3D,wt,Nt,ht.width,ht.height,ht.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Bt,Vt,ht.data)):i.texImage3D(r.TEXTURE_3D,0,Nt,ht.width,ht.height,ht.depth,0,Bt,Vt,ht.data);else if(b.isFramebufferTexture){if(Ee)if(le)i.texStorage2D(r.TEXTURE_2D,wt,Nt,ht.width,ht.height);else{let mt=ht.width,kt=ht.height;for(let gt=0;gt<wt;gt++)i.texImage2D(r.TEXTURE_2D,gt,Nt,mt,kt,0,Bt,Vt,null),mt>>=1,kt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const mt=r.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),ht.parentNode!==mt){mt.appendChild(ht),S.add(b),mt.onpaint=Pt=>{const he=Pt.changedElements;for(const ae of S)he.includes(ae.image)&&(ae.needsUpdate=!0)},mt.requestPaint();return}const kt=0,gt=r.RGBA,$=r.RGBA,dt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,kt,gt,$,dt,ht),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(oe.length>0){if(le&&Ee){const mt=pn(oe[0]);i.texStorage2D(r.TEXTURE_2D,wt,Nt,mt.width,mt.height)}for(let mt=0,kt=oe.length;mt<kt;mt++)Ot=oe[mt],le?k&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Bt,Vt,Ot):i.texImage2D(r.TEXTURE_2D,mt,Nt,Bt,Vt,Ot);b.generateMipmaps=!1}else if(le){if(Ee){const mt=pn(ht);i.texStorage2D(r.TEXTURE_2D,wt,Nt,mt.width,mt.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Bt,Vt,ht)}else i.texImage2D(r.TEXTURE_2D,0,Nt,Bt,Vt,ht);v(b)&&C(vt),Ft.__version=Lt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ee(N,b,Q){if(b.image.length!==6)return;const vt=rt(N,b),Et=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+Q);const Lt=s.get(Et);if(Et.version!==Lt.__version||vt===!0){i.activeTexture(r.TEXTURE0+Q);const Ft=Fe.getPrimaries(Fe.workingColorSpace),ft=b.colorSpace===nr?null:Fe.getPrimaries(b.colorSpace),ht=b.colorSpace===nr||Ft===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Bt=b.isCompressedTexture||b.image[0].isCompressedTexture,Vt=b.image[0]&&b.image[0].isDataTexture,Nt=[];for(let $=0;$<6;$++)!Bt&&!Vt?Nt[$]=x(b.image[$],!0,l.maxCubemapSize):Nt[$]=Vt?b.image[$].image:b.image[$],Nt[$]=Dt(b,Nt[$]);const Ot=Nt[0],oe=c.convert(b.format,b.colorSpace),le=c.convert(b.type),Ee=D(b.internalFormat,oe,le,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,wt=Lt.__version===void 0||vt===!0,mt=Et.dataReady;let kt=L(b,Ot);zt(r.TEXTURE_CUBE_MAP,b);let gt;if(Bt){k&&wt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,kt,Ee,Ot.width,Ot.height);for(let $=0;$<6;$++){gt=Nt[$].mipmaps;for(let dt=0;dt<gt.length;dt++){const Pt=gt[dt];b.format!==ba?oe!==null?k?mt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt,0,0,Pt.width,Pt.height,oe,Pt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt,Ee,Pt.width,Pt.height,0,Pt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt,0,0,Pt.width,Pt.height,oe,le,Pt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt,Ee,Pt.width,Pt.height,0,oe,le,Pt.data)}}}else{if(gt=b.mipmaps,k&&wt){gt.length>0&&kt++;const $=pn(Nt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,kt,Ee,$.width,$.height)}for(let $=0;$<6;$++)if(Vt){k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Nt[$].width,Nt[$].height,oe,le,Nt[$].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ee,Nt[$].width,Nt[$].height,0,oe,le,Nt[$].data);for(let dt=0;dt<gt.length;dt++){const he=gt[dt].image[$].image;k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt+1,0,0,he.width,he.height,oe,le,he.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt+1,Ee,he.width,he.height,0,oe,le,he.data)}}else{k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,oe,le,Nt[$]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ee,oe,le,Nt[$]);for(let dt=0;dt<gt.length;dt++){const Pt=gt[dt];k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt+1,0,0,oe,le,Pt.image[$]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt+1,Ee,oe,le,Pt.image[$])}}}v(b)&&C(r.TEXTURE_CUBE_MAP),Lt.__version=Et.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Qt(N,b,Q,vt,Et,Lt){const Ft=c.convert(Q.format,Q.colorSpace),ft=c.convert(Q.type),ht=D(Q.internalFormat,Ft,ft,Q.normalized,Q.colorSpace),Bt=s.get(b),Vt=s.get(Q);if(Vt.__renderTarget=b,!Bt.__hasExternalTextures){const Nt=Math.max(1,b.width>>Lt),Ot=Math.max(1,b.height>>Lt);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,Lt,ht,Nt,Ot,b.depth,0,Ft,ft,null):i.texImage2D(Et,Lt,ht,Nt,Ot,0,Ft,ft,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),Se(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,Et,Vt.__webglTexture,0,Mn(b)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,Et,Vt.__webglTexture,Lt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function De(N,b,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const vt=b.depthTexture,Et=vt&&vt.isDepthTexture?vt.type:null,Lt=V(b.stencilBuffer,Et),Ft=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Se(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mn(b),Lt,b.width,b.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mn(b),Lt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Lt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ft,r.RENDERBUFFER,N)}else{const vt=b.textures;for(let Et=0;Et<vt.length;Et++){const Lt=vt[Et],Ft=c.convert(Lt.format,Lt.colorSpace),ft=c.convert(Lt.type),ht=D(Lt.internalFormat,Ft,ft,Lt.normalized,Lt.colorSpace);Se(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mn(b),ht,b.width,b.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mn(b),ht,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ht,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ge(N,b,Q){const vt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(b.depthTexture);if(Et.__renderTarget=b,(!Et.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),vt){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),Et.__webglTexture===void 0){Et.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Et.__webglTexture),zt(r.TEXTURE_CUBE_MAP,b.depthTexture);const Bt=c.convert(b.depthTexture.format),Vt=c.convert(b.depthTexture.type);let Nt;b.depthTexture.format===ys?Nt=r.DEPTH_COMPONENT24:b.depthTexture.format===Lr&&(Nt=r.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Nt,b.width,b.height,0,Bt,Vt,null)}}else lt(b.depthTexture,0);const Lt=Et.__webglTexture,Ft=Mn(b),ft=vt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,ht=b.depthTexture.format===Lr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===ys)Se(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ft,Lt,0,Ft):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ft,Lt,0);else if(b.depthTexture.format===Lr)Se(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ft,Lt,0,Ft):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ft,Lt,0);else throw new Error("Unknown depthTexture format")}function ve(N){const b=s.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const vt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),vt){const Et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,vt.removeEventListener("dispose",Et)};vt.addEventListener("dispose",Et),b.__depthDisposeCallback=Et}b.__boundDepthTexture=vt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(Q)for(let vt=0;vt<6;vt++)ge(b.__webglFramebuffer[vt],N,vt);else{const vt=N.texture.mipmaps;vt&&vt.length>0?ge(b.__webglFramebuffer[0],N,0):ge(b.__webglFramebuffer,N,0)}else if(Q){b.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[vt]),b.__webglDepthbuffer[vt]===void 0)b.__webglDepthbuffer[vt]=r.createRenderbuffer(),De(b.__webglDepthbuffer[vt],N,!1);else{const Et=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=b.__webglDepthbuffer[vt];r.bindRenderbuffer(r.RENDERBUFFER,Lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,Lt)}}else{const vt=N.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),De(b.__webglDepthbuffer,N,!1);else{const Et=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,Lt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(N,b,Q){const vt=s.get(N);b!==void 0&&Qt(vt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&ve(N)}function fe(N){const b=N.texture,Q=s.get(N),vt=s.get(b);N.addEventListener("dispose",E);const Et=N.textures,Lt=N.isWebGLCubeRenderTarget===!0,Ft=Et.length>1;if(Ft||(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=b.version,h.memory.textures++),Lt){Q.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[ft]=[];for(let ht=0;ht<b.mipmaps.length;ht++)Q.__webglFramebuffer[ft][ht]=r.createFramebuffer()}else Q.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)Q.__webglFramebuffer[ft]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Ft)for(let ft=0,ht=Et.length;ft<ht;ft++){const Bt=s.get(Et[ft]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=r.createTexture(),h.memory.textures++)}if(N.samples>0&&Se(N)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ft=0;ft<Et.length;ft++){const ht=Et[ft];Q.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[ft]);const Bt=c.convert(ht.format,ht.colorSpace),Vt=c.convert(ht.type),Nt=D(ht.internalFormat,Bt,Vt,ht.normalized,ht.colorSpace,N.isXRRenderTarget===!0),Ot=Mn(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,Nt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),De(Q.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Lt){i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),zt(r.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)Qt(Q.__webglFramebuffer[ft][ht],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ht);else Qt(Q.__webglFramebuffer[ft],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);v(b)&&C(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ft){for(let ft=0,ht=Et.length;ft<ht;ft++){const Bt=Et[ft],Vt=s.get(Bt);let Nt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Vt.__webglTexture),zt(Nt,Bt),Qt(Q.__webglFramebuffer,N,Bt,r.COLOR_ATTACHMENT0+ft,Nt,0),v(Bt)&&C(Nt)}i.unbindTexture()}else{let ft=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ft=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ft,vt.__webglTexture),zt(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)Qt(Q.__webglFramebuffer[ht],N,b,r.COLOR_ATTACHMENT0,ft,ht);else Qt(Q.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,ft,0);v(b)&&C(ft),i.unbindTexture()}N.depthBuffer&&ve(N)}function Sn(N){const b=N.textures;for(let Q=0,vt=b.length;Q<vt;Q++){const Et=b[Q];if(v(Et)){const Lt=O(N),Ft=s.get(Et).__webglTexture;i.bindTexture(Lt,Ft),C(Lt),i.unbindTexture()}}}const rn=[],Bn=[];function Y(N){if(N.samples>0){if(Se(N)===!1){const b=N.textures,Q=N.width,vt=N.height;let Et=r.COLOR_BUFFER_BIT;const Lt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ft=s.get(N),ft=b.length>1;if(ft)for(let Bt=0;Bt<b.length;Bt++)i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const ht=N.texture.mipmaps;ht&&ht.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Bt=0;Bt<b.length;Bt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[Bt]);const Vt=s.get(b[Bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Vt,0)}r.blitFramebuffer(0,0,Q,vt,0,0,Q,vt,Et,r.NEAREST),m===!0&&(rn.length=0,Bn.length=0,rn.push(r.COLOR_ATTACHMENT0+Bt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(rn.push(Lt),Bn.push(Lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Bn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,rn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let Bt=0;Bt<b.length;Bt++){i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[Bt]);const Vt=s.get(b[Bt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,Vt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Mn(N){return Math.min(l.maxSamples,N.samples)}function Se(N){const b=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Je(N){const b=h.render.frame;_.get(N)!==b&&(_.set(N,b),N.update())}function Dt(N,b){const Q=N.colorSpace,vt=N.format,Et=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Q!==Ou&&Q!==nr&&(Fe.getTransfer(Q)===un?(vt!==ba||Et!==ea)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",Q)),b}function pn(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=U,this.resetTextureUnits=st,this.getTextureUnits=ct,this.setTextureUnits=H,this.setTexture2D=lt,this.setTexture2DArray=pt,this.setTexture3D=Tt,this.setTextureCube=I,this.rebindTextures=Oe,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Sn,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function OA(r,t){function i(s,l=nr){let c;const h=Fe.getTransfer(l);if(s===ea)return r.UNSIGNED_BYTE;if(s===bp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ep)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Vv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Gv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Fv)return r.BYTE;if(s===Bv)return r.SHORT;if(s===ql)return r.UNSIGNED_SHORT;if(s===Tp)return r.INT;if(s===ka)return r.UNSIGNED_INT;if(s===Fa)return r.FLOAT;if(s===Ms)return r.HALF_FLOAT;if(s===Hv)return r.ALPHA;if(s===kv)return r.RGB;if(s===ba)return r.RGBA;if(s===ys)return r.DEPTH_COMPONENT;if(s===Lr)return r.DEPTH_STENCIL;if(s===Xv)return r.RED;if(s===Ap)return r.RED_INTEGER;if(s===Pr)return r.RG;if(s===Rp)return r.RG_INTEGER;if(s===wp)return r.RGBA_INTEGER;if(s===Au||s===Ru||s===wu||s===Cu)if(h===un)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Au)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Au)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ru)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vd||s===Gd||s===Hd||s===kd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Vd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xd||s===qd||s===Wd||s===Yd||s===jd||s===Nu||s===Zd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Xd||s===qd)return h===un?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Wd)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Yd)return c.COMPRESSED_R11_EAC;if(s===jd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Nu)return c.COMPRESSED_RG11_EAC;if(s===Zd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Kd||s===Qd||s===Jd||s===$d||s===tp||s===ep||s===np||s===ip||s===ap||s===sp||s===rp||s===op||s===lp||s===cp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Kd)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qd)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jd)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$d)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tp)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ep)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sp)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rp)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cp)return h===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===up||s===fp||s===hp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===up)return h===un?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dp||s===pp||s===Uu||s===mp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===dp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Uu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const PA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class IA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new $v(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qa({vertexShader:PA,fragmentShader:zA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new be(new Ho(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FA extends zr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,_=null,S=null,g=null,y=null,T=null;const A=typeof XRWebGLBinding<"u",x=new IA,v={},C=i.getContextAttributes();let O=null,D=null;const V=[],L=[],P=new je;let E=null;const z=new Ii;z.viewport=new In;const q=new Ii;q.viewport=new In;const F=[z,q],X=new Wy;let st=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let bt=V[rt];return bt===void 0&&(bt=new nd,V[rt]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(rt){let bt=V[rt];return bt===void 0&&(bt=new nd,V[rt]=bt),bt.getGripSpace()},this.getHand=function(rt){let bt=V[rt];return bt===void 0&&(bt=new nd,V[rt]=bt),bt.getHandSpace()};function H(rt){const bt=L.indexOf(rt.inputSource);if(bt===-1)return;const At=V[bt];At!==void 0&&(At.update(rt.inputSource,rt.frame,d||h),At.dispatchEvent({type:rt.type,data:rt.inputSource}))}function U(){l.removeEventListener("select",H),l.removeEventListener("selectstart",H),l.removeEventListener("selectend",H),l.removeEventListener("squeeze",H),l.removeEventListener("squeezestart",H),l.removeEventListener("squeezeend",H),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",B);for(let rt=0;rt<V.length;rt++){const bt=L[rt];bt!==null&&(L[rt]=null,V[rt].disconnect(bt))}st=null,ct=null,x.reset();for(const rt in v)delete v[rt];t.setRenderTarget(O),y=null,g=null,S=null,l=null,D=null,zt.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){c=rt,s.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){p=rt,s.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(rt){d=rt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&A&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(rt){if(l=rt,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",H),l.addEventListener("selectstart",H),l.addEventListener("selectend",H),l.addEventListener("squeeze",H),l.addEventListener("squeezestart",H),l.addEventListener("squeezeend",H),l.addEventListener("end",U),l.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ct=null,ee=null;C.depth&&(ee=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=C.stencil?Lr:ys,Ct=C.stencil?Wl:ka);const Qt={colorFormat:i.RGBA8,depthFormat:ee,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(Qt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new Ga(g.textureWidth,g.textureHeight,{format:ba,type:ea,depthTexture:new Go(g.textureWidth,g.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const At={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Ga(y.framebufferWidth,y.framebufferHeight,{format:ba,type:ea,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(rt){for(let bt=0;bt<rt.removed.length;bt++){const At=rt.removed[bt],Ct=L.indexOf(At);Ct>=0&&(L[Ct]=null,V[Ct].disconnect(At))}for(let bt=0;bt<rt.added.length;bt++){const At=rt.added[bt];let Ct=L.indexOf(At);if(Ct===-1){for(let Qt=0;Qt<V.length;Qt++)if(Qt>=L.length){L.push(At),Ct=Qt;break}else if(L[Qt]===null){L[Qt]=At,Ct=Qt;break}if(Ct===-1)break}const ee=V[Ct];ee&&ee.connect(At)}}const lt=new Z,pt=new Z;function Tt(rt,bt,At){lt.setFromMatrixPosition(bt.matrixWorld),pt.setFromMatrixPosition(At.matrixWorld);const Ct=lt.distanceTo(pt),ee=bt.projectionMatrix.elements,Qt=At.projectionMatrix.elements,De=ee[14]/(ee[10]-1),ge=ee[14]/(ee[10]+1),ve=(ee[9]+1)/ee[5],Oe=(ee[9]-1)/ee[5],fe=(ee[8]-1)/ee[0],Sn=(Qt[8]+1)/Qt[0],rn=De*fe,Bn=De*Sn,Y=Ct/(-fe+Sn),Mn=Y*-fe;if(bt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Mn),rt.translateZ(Y),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),ee[10]===-1)rt.projectionMatrix.copy(bt.projectionMatrix),rt.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{const Se=De+Y,Je=ge+Y,Dt=rn-Mn,pn=Bn+(Ct-Mn),N=ve*ge/Je*Se,b=Oe*ge/Je*Se;rt.projectionMatrix.makePerspective(Dt,pn,N,b,Se,Je),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function I(rt,bt){bt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(bt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(l===null)return;let bt=rt.near,At=rt.far;x.texture!==null&&(x.depthNear>0&&(bt=x.depthNear),x.depthFar>0&&(At=x.depthFar)),X.near=q.near=z.near=bt,X.far=q.far=z.far=At,(st!==X.near||ct!==X.far)&&(l.updateRenderState({depthNear:X.near,depthFar:X.far}),st=X.near,ct=X.far),X.layers.mask=rt.layers.mask|6,z.layers.mask=X.layers.mask&-5,q.layers.mask=X.layers.mask&-3;const Ct=rt.parent,ee=X.cameras;I(X,Ct);for(let Qt=0;Qt<ee.length;Qt++)I(ee[Qt],Ct);ee.length===2?Tt(X,z,q):X.projectionMatrix.copy(z.projectionMatrix),J(rt,X,Ct)};function J(rt,bt,At){At===null?rt.matrix.copy(bt.matrixWorld):(rt.matrix.copy(At.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(bt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(bt.projectionMatrix),rt.projectionMatrixInverse.copy(bt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Iu*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(rt){m=rt,g!==null&&(g.fixedFoveation=rt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=rt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(X)},this.getCameraTexture=function(rt){return v[rt]};let Mt=null;function Rt(rt,bt){if(_=bt.getViewerPose(d||h),T=bt,_!==null){const At=_.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let Ct=!1;At.length!==X.cameras.length&&(X.cameras.length=0,Ct=!0);for(let ge=0;ge<At.length;ge++){const ve=At[ge];let Oe=null;if(y!==null)Oe=y.getViewport(ve);else{const Sn=S.getViewSubImage(g,ve);Oe=Sn.viewport,ge===0&&(t.setRenderTargetTextures(D,Sn.colorTexture,Sn.depthStencilTexture),t.setRenderTarget(D))}let fe=F[ge];fe===void 0&&(fe=new Ii,fe.layers.enable(ge),fe.viewport=new In,F[ge]=fe),fe.matrix.fromArray(ve.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ve.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ge===0&&(X.matrix.copy(fe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ct===!0&&X.cameras.push(fe)}const ee=l.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){S=s.getBinding();const ge=S.getDepthInformation(At[0]);ge&&ge.isValid&&ge.texture&&x.init(ge,l.renderState)}if(ee&&ee.includes("camera-access")&&A){t.state.unbindTexture(),S=s.getBinding();for(let ge=0;ge<At.length;ge++){const ve=At[ge].camera;if(ve){let Oe=v[ve];Oe||(Oe=new $v,v[ve]=Oe);const fe=S.getCameraImage(ve);Oe.sourceTexture=fe}}}}for(let At=0;At<V.length;At++){const Ct=L[At],ee=V[At];Ct!==null&&ee!==void 0&&ee.update(Ct,bt,d||h)}Mt&&Mt(rt,bt),bt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:bt}),T=null}const zt=new ax;zt.setAnimationLoop(Rt),this.setAnimationLoop=function(rt){Mt=rt},this.dispose=function(){}}}const BA=new Fn,fx=new _e;fx.set(-1,0,0,0,1,0,0,0,1);function VA(r,t){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function s(x,v){v.color.getRGB(x.fogColor.value,tx(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function l(x,v,C,O,D){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(x,v):v.isMeshLambertMaterial?(c(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(x,v),S(x,v)):v.isMeshPhongMaterial?(c(x,v),_(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(x,v),g(x,v),v.isMeshPhysicalMaterial&&y(x,v,D)):v.isMeshMatcapMaterial?(c(x,v),T(x,v)):v.isMeshDepthMaterial?c(x,v):v.isMeshDistanceMaterial?(c(x,v),A(x,v)):v.isMeshNormalMaterial?c(x,v):v.isLineBasicMaterial?(h(x,v),v.isLineDashedMaterial&&p(x,v)):v.isPointsMaterial?m(x,v,C,O):v.isSpriteMaterial?d(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Fi&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Fi&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const C=t.get(v),O=C.envMap,D=C.envMapRotation;O&&(x.envMap.value=O,x.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(D)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(fx),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function p(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,C,O){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*C,x.scale.value=O*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function S(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,C){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Fi&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,v){v.matcap&&(x.matcap.value=v.matcap)}function A(x,v){const C=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function GA(r,t,i,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,O){const D=O.program;s.uniformBlockBinding(C,D)}function d(C,O){let D=l[C.id];D===void 0&&(T(C),D=_(C),l[C.id]=D,C.addEventListener("dispose",x));const V=O.program;s.updateUBOMapping(C,V);const L=t.render.frame;c[C.id]!==L&&(g(C),c[C.id]=L)}function _(C){const O=S();C.__bindingPointIndex=O;const D=r.createBuffer(),V=C.__size,L=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,V,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function S(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const O=l[C.id],D=C.uniforms,V=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let L=0,P=D.length;L<P;L++){const E=Array.isArray(D[L])?D[L]:[D[L]];for(let z=0,q=E.length;z<q;z++){const F=E[z];if(y(F,L,z,V)===!0){const X=F.__offset,st=Array.isArray(F.value)?F.value:[F.value];let ct=0;for(let H=0;H<st.length;H++){const U=st[H],B=A(U);typeof U=="number"||typeof U=="boolean"?(F.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,X+ct,F.__data)):U.isMatrix3?(F.__data[0]=U.elements[0],F.__data[1]=U.elements[1],F.__data[2]=U.elements[2],F.__data[3]=0,F.__data[4]=U.elements[3],F.__data[5]=U.elements[4],F.__data[6]=U.elements[5],F.__data[7]=0,F.__data[8]=U.elements[6],F.__data[9]=U.elements[7],F.__data[10]=U.elements[8],F.__data[11]=0):ArrayBuffer.isView(U)?F.__data.set(new U.constructor(U.buffer,U.byteOffset,F.__data.length)):(U.toArray(F.__data,ct),ct+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,O,D,V){const L=C.value,P=O+"_"+D;if(V[P]===void 0)return typeof L=="number"||typeof L=="boolean"?V[P]=L:ArrayBuffer.isView(L)?V[P]=L.slice():V[P]=L.clone(),!0;{const E=V[P];if(typeof L=="number"||typeof L=="boolean"){if(E!==L)return V[P]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(E.equals(L)===!1)return E.copy(L),!0}}return!1}function T(C){const O=C.uniforms;let D=0;const V=16;for(let P=0,E=O.length;P<E;P++){const z=Array.isArray(O[P])?O[P]:[O[P]];for(let q=0,F=z.length;q<F;q++){const X=z[q],st=Array.isArray(X.value)?X.value:[X.value];for(let ct=0,H=st.length;ct<H;ct++){const U=st[ct],B=A(U),lt=D%V,pt=lt%B.boundary,Tt=lt+pt;D+=pt,Tt!==0&&V-Tt<B.storage&&(D+=V-Tt),X.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=D,D+=B.storage}}}const L=D%V;return L>0&&(D+=V-L),C.__size=D,C.__cache={},this}function A(C){const O={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(O.boundary=4,O.storage=4):C.isVector2?(O.boundary=8,O.storage=8):C.isVector3||C.isColor?(O.boundary=16,O.storage=12):C.isVector4?(O.boundary=16,O.storage=16):C.isMatrix3?(O.boundary=48,O.storage=48):C.isMatrix4?(O.boundary=64,O.storage=64):C.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(O.boundary=16,O.storage=C.byteLength):ue("WebGLRenderer: Unsupported uniform value type.",C),O}function x(C){const O=C.target;O.removeEventListener("dispose",x);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function v(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:d,dispose:v}}const HA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pa=null;function kA(){return Pa===null&&(Pa=new Cy(HA,16,16,Pr,Ms),Pa.name="DFG_LUT",Pa.minFilter=xi,Pa.magFilter=xi,Pa.wrapS=vs,Pa.wrapT=vs,Pa.generateMipmaps=!1,Pa.needsUpdate=!0),Pa}class XA{constructor(t={}){const{canvas:i=ry(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ea}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const A=y,x=new Set([wp,Rp,Ap]),v=new Set([ea,ka,ql,Wl,bp,Ep]),C=new Uint32Array(4),O=new Int32Array(4),D=new Z;let V=null,L=null;const P=[],E=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let F=!1,X=null;this._outputColorSpace=da;let st=0,ct=0,H=null,U=-1,B=null;const lt=new In,pt=new In;let Tt=null;const I=new Ve(0);let J=0,Mt=i.width,Rt=i.height,zt=1,rt=null,bt=null;const At=new In(0,0,Mt,Rt),Ct=new In(0,0,Mt,Rt);let ee=!1;const Qt=new Lp;let De=!1,ge=!1;const ve=new Fn,Oe=new Z,fe=new In,Sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rn=!1;function Bn(){return H===null?zt:1}let Y=s;function Mn(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Mp}`),i.addEventListener("webglcontextlost",$,!1),i.addEventListener("webglcontextrestored",dt,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),Y===null){const j="webgl2";if(Y=Mn(j,R),Y===null)throw Mn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ye("WebGLRenderer: "+R.message),R}let Se,Je,Dt,pn,N,b,Q,vt,Et,Lt,Ft,ft,ht,Bt,Vt,Nt,Ot,oe,le,Ee,k,wt,mt;function kt(){Se=new kb(Y),Se.init(),k=new OA(Y,Se),Je=new Pb(Y,Se,t,k),Dt=new UA(Y,Se),Je.reversedDepthBuffer&&g&&Dt.buffers.depth.setReversed(!0),pn=new Wb(Y),N=new vA,b=new LA(Y,Se,Dt,N,Je,k,pn),Q=new Hb(q),vt=new Ky(Y),wt=new Lb(Y,vt),Et=new Xb(Y,vt,pn,wt),Lt=new jb(Y,Et,vt,wt,pn),oe=new Yb(Y,Je,b),Vt=new zb(N),Ft=new _A(q,Q,Se,Je,wt,Vt),ft=new VA(q,N),ht=new SA,Bt=new AA(Se),Ot=new Ub(q,Q,Dt,Lt,T,m),Nt=new NA(q,Lt,Je),mt=new GA(Y,pn,Je,Dt),le=new Ob(Y,Se,pn),Ee=new qb(Y,Se,pn),pn.programs=Ft.programs,q.capabilities=Je,q.extensions=Se,q.properties=N,q.renderLists=ht,q.shadowMap=Nt,q.state=Dt,q.info=pn}kt(),A!==ea&&(z=new Kb(A,i.width,i.height,l,c));const gt=new FA(q,Y);this.xr=gt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const R=Se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return zt},this.setPixelRatio=function(R){R!==void 0&&(zt=R,this.setSize(Mt,Rt,!1))},this.getSize=function(R){return R.set(Mt,Rt)},this.setSize=function(R,j,at=!0){if(gt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=R,Rt=j,i.width=Math.floor(R*zt),i.height=Math.floor(j*zt),at===!0&&(i.style.width=R+"px",i.style.height=j+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(Mt*zt,Rt*zt).floor()},this.setDrawingBufferSize=function(R,j,at){Mt=R,Rt=j,zt=at,i.width=Math.floor(R*at),i.height=Math.floor(j*at),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(A===ea){Ye("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){ue("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(lt)},this.getViewport=function(R){return R.copy(At)},this.setViewport=function(R,j,at,tt){R.isVector4?At.set(R.x,R.y,R.z,R.w):At.set(R,j,at,tt),Dt.viewport(lt.copy(At).multiplyScalar(zt).round())},this.getScissor=function(R){return R.copy(Ct)},this.setScissor=function(R,j,at,tt){R.isVector4?Ct.set(R.x,R.y,R.z,R.w):Ct.set(R,j,at,tt),Dt.scissor(pt.copy(Ct).multiplyScalar(zt).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){Dt.setScissorTest(ee=R)},this.setOpaqueSort=function(R){rt=R},this.setTransparentSort=function(R){bt=R},this.getClearColor=function(R){return R.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,at=!0){let tt=0;if(R){let et=!1;if(H!==null){const Ht=H.texture.format;et=x.has(Ht)}if(et){const Ht=H.texture.type,Yt=v.has(Ht),Gt=Ot.getClearColor(),Zt=Ot.getClearAlpha(),jt=Gt.r,te=Gt.g,de=Gt.b;Yt?(C[0]=jt,C[1]=te,C[2]=de,C[3]=Zt,Y.clearBufferuiv(Y.COLOR,0,C)):(O[0]=jt,O[1]=te,O[2]=de,O[3]=Zt,Y.clearBufferiv(Y.COLOR,0,O))}else tt|=Y.COLOR_BUFFER_BIT}j&&(tt|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(tt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&Y.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),X=R},this.dispose=function(){i.removeEventListener("webglcontextlost",$,!1),i.removeEventListener("webglcontextrestored",dt,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),Ot.dispose(),ht.dispose(),Bt.dispose(),N.dispose(),Q.dispose(),Lt.dispose(),wt.dispose(),mt.dispose(),Ft.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Ti),gt.removeEventListener("sessionend",ai),yn.stop()};function $(R){R.preventDefault(),U_("WebGLRenderer: Context Lost."),F=!0}function dt(){U_("WebGLRenderer: Context Restored."),F=!1;const R=pn.autoReset,j=Nt.enabled,at=Nt.autoUpdate,tt=Nt.needsUpdate,et=Nt.type;kt(),pn.autoReset=R,Nt.enabled=j,Nt.autoUpdate=at,Nt.needsUpdate=tt,Nt.type=et}function Pt(R){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function he(R){const j=R.target;j.removeEventListener("dispose",he),ae(j)}function ae(R){on(R),N.remove(R)}function on(R){const j=N.get(R).programs;j!==void 0&&(j.forEach(function(at){Ft.releaseProgram(at)}),R.isShaderMaterial&&Ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,at,tt,et,Ht){j===null&&(j=Sn);const Yt=et.isMesh&&et.matrixWorld.determinant()<0,Gt=pa(R,j,at,tt,et);Dt.setMaterial(tt,Yt);let Zt=at.index,jt=1;if(tt.wireframe===!0){if(Zt=Et.getWireframeAttribute(at),Zt===void 0)return;jt=2}const te=at.drawRange,de=at.attributes.position;let Jt=te.start*jt,Pe=(te.start+te.count)*jt;Ht!==null&&(Jt=Math.max(Jt,Ht.start*jt),Pe=Math.min(Pe,(Ht.start+Ht.count)*jt)),Zt!==null?(Jt=Math.max(Jt,0),Pe=Math.min(Pe,Zt.count)):de!=null&&(Jt=Math.max(Jt,0),Pe=Math.min(Pe,de.count));const gn=Pe-Jt;if(gn<0||gn===1/0)return;wt.setup(et,tt,Gt,at,Zt);let an,ke=le;if(Zt!==null&&(an=vt.get(Zt),ke=Ee,ke.setIndex(an)),et.isMesh)tt.wireframe===!0?(Dt.setLineWidth(tt.wireframeLinewidth*Bn()),ke.setMode(Y.LINES)):ke.setMode(Y.TRIANGLES);else if(et.isLine){let Xe=tt.linewidth;Xe===void 0&&(Xe=1),Dt.setLineWidth(Xe*Bn()),et.isLineSegments?ke.setMode(Y.LINES):et.isLineLoop?ke.setMode(Y.LINE_LOOP):ke.setMode(Y.LINE_STRIP)}else et.isPoints?ke.setMode(Y.POINTS):et.isSprite&&ke.setMode(Y.TRIANGLES);if(et.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))ke.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Xe=et._multiDrawStarts,Wt=et._multiDrawCounts,Ln=et._multiDrawCount,Re=Zt?vt.get(Zt).bytesPerElement:1,Tn=N.get(tt).currentProgram.getUniforms();for(let bi=0;bi<Ln;bi++)Tn.setValue(Y,"_gl_DrawID",bi),ke.render(Xe[bi]/Re,Wt[bi])}else if(et.isInstancedMesh)ke.renderInstances(Jt,gn,et.count);else if(at.isInstancedBufferGeometry){const Xe=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Wt=Math.min(at.instanceCount,Xe);ke.renderInstances(Jt,gn,Wt)}else ke.render(Jt,gn)};function Ze(R,j,at){R.transparent===!0&&R.side===_s&&R.forceSinglePass===!1?(R.side=Fi,R.needsUpdate=!0,sr(R,j,at),R.side=ar,R.needsUpdate=!0,sr(R,j,at),R.side=_s):sr(R,j,at)}this.compile=function(R,j,at=null){at===null&&(at=R),L=Bt.get(at),L.init(j),E.push(L),at.traverseVisible(function(et){et.isLight&&et.layers.test(j.layers)&&(L.pushLight(et),et.castShadow&&L.pushShadow(et))}),R!==at&&R.traverseVisible(function(et){et.isLight&&et.layers.test(j.layers)&&(L.pushLight(et),et.castShadow&&L.pushShadow(et))}),L.setupLights();const tt=new Set;return R.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Ht=et.material;if(Ht)if(Array.isArray(Ht))for(let Yt=0;Yt<Ht.length;Yt++){const Gt=Ht[Yt];Ze(Gt,at,et),tt.add(Gt)}else Ze(Ht,at,et),tt.add(Ht)}),L=E.pop(),tt},this.compileAsync=function(R,j,at=null){const tt=this.compile(R,j,at);return new Promise(et=>{function Ht(){if(tt.forEach(function(Yt){N.get(Yt).currentProgram.isReady()&&tt.delete(Yt)}),tt.size===0){et(R);return}setTimeout(Ht,10)}Se.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let nn=null;function yi(R){nn&&nn(R)}function Ti(){yn.stop()}function ai(){yn.start()}const yn=new ax;yn.setAnimationLoop(yi),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(R){nn=R,gt.setAnimationLoop(R),R===null?yn.stop():yn.start()},gt.addEventListener("sessionstart",Ti),gt.addEventListener("sessionend",ai),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;X!==null&&X.renderStart(R,j);const at=gt.enabled===!0&&gt.isPresenting===!0,tt=z!==null&&(H===null||at)&&z.begin(q,H);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(j),j=gt.getCamera()),R.isScene===!0&&R.onBeforeRender(q,R,j,H),L=Bt.get(R,E.length),L.init(j),L.state.textureUnits=b.getTextureUnits(),E.push(L),ve.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Qt.setFromProjectionMatrix(ve,Ba,j.reversedDepth),ge=this.localClippingEnabled,De=Vt.init(this.clippingPlanes,ge),V=ht.get(R,P.length),V.init(),P.push(V),gt.enabled===!0&&gt.isPresenting===!0){const Yt=q.xr.getDepthSensingMesh();Yt!==null&&Ne(Yt,j,-1/0,q.sortObjects)}Ne(R,j,0,q.sortObjects),V.finish(),q.sortObjects===!0&&V.sort(rt,bt),rn=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,rn&&Ot.addToRenderList(V,R),this.info.render.frame++,De===!0&&Vt.beginShadows();const et=L.state.shadowsArray;if(Nt.render(et,R,j),De===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&z.hasRenderPass())===!1){const Yt=V.opaque,Gt=V.transmissive;if(L.setupLights(),j.isArrayCamera){const Zt=j.cameras;if(Gt.length>0)for(let jt=0,te=Zt.length;jt<te;jt++){const de=Zt[jt];hi(Yt,Gt,R,de)}rn&&Ot.render(R);for(let jt=0,te=Zt.length;jt<te;jt++){const de=Zt[jt];mn(V,R,de,de.viewport)}}else Gt.length>0&&hi(Yt,Gt,R,j),rn&&Ot.render(R),mn(V,R,j)}H!==null&&ct===0&&(b.updateMultisampleRenderTarget(H),b.updateRenderTargetMipmap(H)),tt&&z.end(q),R.isScene===!0&&R.onAfterRender(q,R,j),wt.resetDefaultState(),U=-1,B=null,E.pop(),E.length>0?(L=E[E.length-1],b.setTextureUnits(L.state.textureUnits),De===!0&&Vt.setGlobalState(q.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?V=P[P.length-1]:V=null,X!==null&&X.renderEnd()};function Ne(R,j,at,tt){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLightProbeGrid)L.pushLightProbeGrid(R);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Qt.intersectsSprite(R)){tt&&fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);const Yt=Lt.update(R),Gt=R.material;Gt.visible&&V.push(R,Yt,Gt,at,fe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Qt.intersectsObject(R))){const Yt=Lt.update(R),Gt=R.material;if(tt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),fe.copy(R.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),fe.copy(Yt.boundingSphere.center)),fe.applyMatrix4(R.matrixWorld).applyMatrix4(ve)),Array.isArray(Gt)){const Zt=Yt.groups;for(let jt=0,te=Zt.length;jt<te;jt++){const de=Zt[jt],Jt=Gt[de.materialIndex];Jt&&Jt.visible&&V.push(R,Yt,Jt,at,fe.z,de)}}else Gt.visible&&V.push(R,Yt,Gt,at,fe.z,null)}}const Ht=R.children;for(let Yt=0,Gt=Ht.length;Yt<Gt;Yt++)Ne(Ht[Yt],j,at,tt)}function mn(R,j,at,tt){const{opaque:et,transmissive:Ht,transparent:Yt}=R;L.setupLightsView(at),De===!0&&Vt.setGlobalState(q.clippingPlanes,at),tt&&Dt.viewport(lt.copy(tt)),et.length>0&&di(et,j,at),Ht.length>0&&di(Ht,j,at),Yt.length>0&&di(Yt,j,at),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function hi(R,j,at,tt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[tt.id]===void 0){const Jt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[tt.id]=new Ga(1,1,{generateMipmaps:!0,type:Jt?Ms:ea,minFilter:Ur,samples:Math.max(4,Je.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Fe.workingColorSpace})}const Ht=L.state.transmissionRenderTarget[tt.id],Yt=tt.viewport||lt;Ht.setSize(Yt.z*q.transmissionResolutionScale,Yt.w*q.transmissionResolutionScale);const Gt=q.getRenderTarget(),Zt=q.getActiveCubeFace(),jt=q.getActiveMipmapLevel();q.setRenderTarget(Ht),q.getClearColor(I),J=q.getClearAlpha(),J<1&&q.setClearColor(16777215,.5),q.clear(),rn&&Ot.render(at);const te=q.toneMapping;q.toneMapping=Va;const de=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),L.setupLightsView(tt),De===!0&&Vt.setGlobalState(q.clippingPlanes,tt),di(R,at,tt),b.updateMultisampleRenderTarget(Ht),b.updateRenderTargetMipmap(Ht),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Pe=0,gn=j.length;Pe<gn;Pe++){const an=j[Pe],{object:ke,geometry:Xe,material:Wt,group:Ln}=an;if(Wt.side===_s&&ke.layers.test(tt.layers)){const Re=Wt.side;Wt.side=Fi,Wt.needsUpdate=!0,bs(ke,at,tt,Xe,Wt,Ln),Wt.side=Re,Wt.needsUpdate=!0,Jt=!0}}Jt===!0&&(b.updateMultisampleRenderTarget(Ht),b.updateRenderTargetMipmap(Ht))}q.setRenderTarget(Gt,Zt,jt),q.setClearColor(I,J),de!==void 0&&(tt.viewport=de),q.toneMapping=te}function di(R,j,at){const tt=j.isScene===!0?j.overrideMaterial:null;for(let et=0,Ht=R.length;et<Ht;et++){const Yt=R[et],{object:Gt,geometry:Zt,group:jt}=Yt;let te=Yt.material;te.allowOverride===!0&&tt!==null&&(te=tt),Gt.layers.test(at.layers)&&bs(Gt,j,at,Zt,te,jt)}}function bs(R,j,at,tt,et,Ht){R.onBeforeRender(q,j,at,tt,et,Ht),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),et.onBeforeRender(q,j,at,tt,R,Ht),et.transparent===!0&&et.side===_s&&et.forceSinglePass===!1?(et.side=Fi,et.needsUpdate=!0,q.renderBufferDirect(at,j,tt,et,R,Ht),et.side=ar,et.needsUpdate=!0,q.renderBufferDirect(at,j,tt,et,R,Ht),et.side=_s):q.renderBufferDirect(at,j,tt,et,R,Ht),R.onAfterRender(q,j,at,tt,et,Ht)}function sr(R,j,at){j.isScene!==!0&&(j=Sn);const tt=N.get(R),et=L.state.lights,Ht=L.state.shadowsArray,Yt=et.state.version,Gt=Ft.getParameters(R,et.state,Ht,j,at,L.state.lightProbeGridArray),Zt=Ft.getProgramCacheKey(Gt);let jt=tt.programs;tt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,tt.fog=j.fog;const te=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;tt.envMap=Q.get(R.envMap||tt.environment,te),tt.envMapRotation=tt.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",he),jt=new Map,tt.programs=jt);let de=jt.get(Zt);if(de!==void 0){if(tt.currentProgram===de&&tt.lightsStateVersion===Yt)return Bi(R,Gt),de}else Gt.uniforms=Ft.getUniforms(R),X!==null&&R.isNodeMaterial&&X.build(R,at,Gt),R.onBeforeCompile(Gt,q),de=Ft.acquireProgram(Gt,Zt),jt.set(Zt,de),tt.uniforms=Gt.uniforms;const Jt=tt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=Vt.uniform),Bi(R,Gt),tt.needsLights=Ea(R),tt.lightsStateVersion=Yt,tt.needsLights&&(Jt.ambientLightColor.value=et.state.ambient,Jt.lightProbe.value=et.state.probe,Jt.directionalLights.value=et.state.directional,Jt.directionalLightShadows.value=et.state.directionalShadow,Jt.spotLights.value=et.state.spot,Jt.spotLightShadows.value=et.state.spotShadow,Jt.rectAreaLights.value=et.state.rectArea,Jt.ltc_1.value=et.state.rectAreaLTC1,Jt.ltc_2.value=et.state.rectAreaLTC2,Jt.pointLights.value=et.state.point,Jt.pointLightShadows.value=et.state.pointShadow,Jt.hemisphereLights.value=et.state.hemi,Jt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Jt.spotLightMatrix.value=et.state.spotLightMatrix,Jt.spotLightMap.value=et.state.spotLightMap,Jt.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.lightProbeGrid=L.state.lightProbeGridArray.length>0,tt.currentProgram=de,tt.uniformsList=null,de}function $e(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Du.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Bi(R,j){const at=N.get(R);at.outputColorSpace=j.outputColorSpace,at.batching=j.batching,at.batchingColor=j.batchingColor,at.instancing=j.instancing,at.instancingColor=j.instancingColor,at.instancingMorph=j.instancingMorph,at.skinning=j.skinning,at.morphTargets=j.morphTargets,at.morphNormals=j.morphNormals,at.morphColors=j.morphColors,at.morphTargetsCount=j.morphTargetsCount,at.numClippingPlanes=j.numClippingPlanes,at.numIntersection=j.numClipIntersection,at.vertexAlphas=j.vertexAlphas,at.vertexTangents=j.vertexTangents,at.toneMapping=j.toneMapping}function Wa(R,j){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;D.setFromMatrixPosition(j.matrixWorld);for(let at=0,tt=R.length;at<tt;at++){const et=R[at];if(et.texture!==null&&et.boundingBox.containsPoint(D))return et}return null}function pa(R,j,at,tt,et){j.isScene!==!0&&(j=Sn),b.resetTextureUnits();const Ht=j.fog,Yt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?j.environment:null,Gt=H===null?q.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Fe.workingColorSpace,Zt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,jt=Q.get(tt.envMap||Yt,Zt),te=tt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,de=!!at.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Jt=!!at.morphAttributes.position,Pe=!!at.morphAttributes.normal,gn=!!at.morphAttributes.color;let an=Va;tt.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(an=q.toneMapping);const ke=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Xe=ke!==void 0?ke.length:0,Wt=N.get(tt),Ln=L.state.lights;if(De===!0&&(ge===!0||R!==B)){const qe=R===B&&tt.id===U;Vt.setState(tt,R,qe)}let Re=!1;tt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Ln.state.version||Wt.outputColorSpace!==Gt||et.isBatchedMesh&&Wt.batching===!1||!et.isBatchedMesh&&Wt.batching===!0||et.isBatchedMesh&&Wt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&Wt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&Wt.instancing===!1||!et.isInstancedMesh&&Wt.instancing===!0||et.isSkinnedMesh&&Wt.skinning===!1||!et.isSkinnedMesh&&Wt.skinning===!0||et.isInstancedMesh&&Wt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Wt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Wt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Wt.instancingMorph===!1&&et.morphTexture!==null||Wt.envMap!==jt||tt.fog===!0&&Wt.fog!==Ht||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Vt.numPlanes||Wt.numIntersection!==Vt.numIntersection)||Wt.vertexAlphas!==te||Wt.vertexTangents!==de||Wt.morphTargets!==Jt||Wt.morphNormals!==Pe||Wt.morphColors!==gn||Wt.toneMapping!==an||Wt.morphTargetsCount!==Xe||!!Wt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Re=!0):(Re=!0,Wt.__version=tt.version);let Tn=Wt.currentProgram;Re===!0&&(Tn=sr(tt,j,et),X&&tt.isNodeMaterial&&X.onUpdateProgram(tt,Tn,Wt));let bi=!1,Gi=!1,ti=!1;const Ge=Tn.getUniforms(),bn=Wt.uniforms;if(Dt.useProgram(Tn.program)&&(bi=!0,Gi=!0,ti=!0),tt.id!==U&&(U=tt.id,Gi=!0),Wt.needsLights){const qe=Wa(L.state.lightProbeGridArray,et);Wt.lightProbeGrid!==qe&&(Wt.lightProbeGrid=qe,Gi=!0)}if(bi||B!==R){Dt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ge.setValue(Y,"projectionMatrix",R.projectionMatrix),Ge.setValue(Y,"viewMatrix",R.matrixWorldInverse);const Ei=Ge.map.cameraPosition;Ei!==void 0&&Ei.setValue(Y,Oe.setFromMatrixPosition(R.matrixWorld)),Je.logarithmicDepthBuffer&&Ge.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ge.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,Gi=!0,ti=!0)}if(Wt.needsLights&&(Ln.state.directionalShadowMap.length>0&&Ge.setValue(Y,"directionalShadowMap",Ln.state.directionalShadowMap,b),Ln.state.spotShadowMap.length>0&&Ge.setValue(Y,"spotShadowMap",Ln.state.spotShadowMap,b),Ln.state.pointShadowMap.length>0&&Ge.setValue(Y,"pointShadowMap",Ln.state.pointShadowMap,b)),et.isSkinnedMesh){Ge.setOptional(Y,et,"bindMatrix"),Ge.setOptional(Y,et,"bindMatrixInverse");const qe=et.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Ge.setValue(Y,"boneTexture",qe.boneTexture,b))}et.isBatchedMesh&&(Ge.setOptional(Y,et,"batchingTexture"),Ge.setValue(Y,"batchingTexture",et._matricesTexture,b),Ge.setOptional(Y,et,"batchingIdTexture"),Ge.setValue(Y,"batchingIdTexture",et._indirectTexture,b),Ge.setOptional(Y,et,"batchingColorTexture"),et._colorsTexture!==null&&Ge.setValue(Y,"batchingColorTexture",et._colorsTexture,b));const Di=at.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&oe.update(et,at,Tn),(Gi||Wt.receiveShadow!==et.receiveShadow)&&(Wt.receiveShadow=et.receiveShadow,Ge.setValue(Y,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&j.environment!==null&&(bn.envMapIntensity.value=j.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=kA()),Gi){if(Ge.setValue(Y,"toneMappingExposure",q.toneMappingExposure),Wt.needsLights&&ma(bn,ti),Ht&&tt.fog===!0&&ft.refreshFogUniforms(bn,Ht),ft.refreshMaterialUniforms(bn,tt,zt,Rt,L.state.transmissionRenderTarget[R.id]),Wt.needsLights&&Wt.lightProbeGrid){const qe=Wt.lightProbeGrid;bn.probesSH.value=qe.texture,bn.probesMin.value.copy(qe.boundingBox.min),bn.probesMax.value.copy(qe.boundingBox.max),bn.probesResolution.value.copy(qe.resolution)}Du.upload(Y,$e(Wt),bn,b)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Du.upload(Y,$e(Wt),bn,b),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ge.setValue(Y,"center",et.center),Ge.setValue(Y,"modelViewMatrix",et.modelViewMatrix),Ge.setValue(Y,"normalMatrix",et.normalMatrix),Ge.setValue(Y,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){const qe=tt.uniformsGroups;for(let Ei=0,ga=qe.length;Ei<ga;Ei++){const Aa=qe[Ei];mt.update(Aa,Tn),mt.bind(Aa,Tn)}}return Tn}function ma(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Ea(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return st},this.getActiveMipmapLevel=function(){return ct},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,j,at){const tt=N.get(R);tt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),N.get(R.texture).__webglTexture=j,N.get(R.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:at,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const at=N.get(R);at.__webglFramebuffer=j,at.__useDefaultFramebuffer=j===void 0};const Vi=Y.createFramebuffer();this.setRenderTarget=function(R,j=0,at=0){H=R,st=j,ct=at;let tt=null,et=!1,Ht=!1;if(R){const Gt=N.get(R);if(Gt.__useDefaultFramebuffer!==void 0){Dt.bindFramebuffer(Y.FRAMEBUFFER,Gt.__webglFramebuffer),lt.copy(R.viewport),pt.copy(R.scissor),Tt=R.scissorTest,Dt.viewport(lt),Dt.scissor(pt),Dt.setScissorTest(Tt),U=-1;return}else if(Gt.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(Gt.__hasExternalTextures)b.rebindTextures(R,N.get(R.texture).__webglTexture,N.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(Gt.__boundDepthTexture!==te){if(te!==null&&N.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const Zt=R.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ht=!0);const jt=N.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[j])?tt=jt[j][at]:tt=jt[j],et=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?tt=N.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?tt=jt[at]:tt=jt,lt.copy(R.viewport),pt.copy(R.scissor),Tt=R.scissorTest}else lt.copy(At).multiplyScalar(zt).floor(),pt.copy(Ct).multiplyScalar(zt).floor(),Tt=ee;if(at!==0&&(tt=Vi),Dt.bindFramebuffer(Y.FRAMEBUFFER,tt)&&Dt.drawBuffers(R,tt),Dt.viewport(lt),Dt.scissor(pt),Dt.setScissorTest(Tt),et){const Gt=N.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+j,Gt.__webglTexture,at)}else if(Ht){const Gt=j;for(let Zt=0;Zt<R.textures.length;Zt++){const jt=N.get(R.textures[Zt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Zt,jt.__webglTexture,at,Gt)}}else if(R!==null&&at!==0){const Gt=N.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Gt.__webglTexture,at)}U=-1},this.readRenderTargetPixels=function(R,j,at,tt,et,Ht,Yt,Gt=0){if(!(R&&R.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Yt!==void 0&&(Zt=Zt[Yt]),Zt){Dt.bindFramebuffer(Y.FRAMEBUFFER,Zt);try{const jt=R.textures[Gt],te=jt.format,de=jt.type;if(R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Gt),!Je.textureFormatReadable(te)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(de)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-tt&&at>=0&&at<=R.height-et&&Y.readPixels(j,at,tt,et,k.convert(te),k.convert(de),Ht)}finally{const jt=H!==null?N.get(H).__webglFramebuffer:null;Dt.bindFramebuffer(Y.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,j,at,tt,et,Ht,Yt,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Yt!==void 0&&(Zt=Zt[Yt]),Zt)if(j>=0&&j<=R.width-tt&&at>=0&&at<=R.height-et){Dt.bindFramebuffer(Y.FRAMEBUFFER,Zt);const jt=R.textures[Gt],te=jt.format,de=jt.type;if(R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Gt),!Je.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Jt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ht.byteLength,Y.STREAM_READ),Y.readPixels(j,at,tt,et,k.convert(te),k.convert(de),0);const Pe=H!==null?N.get(H).__webglFramebuffer:null;Dt.bindFramebuffer(Y.FRAMEBUFFER,Pe);const gn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await oy(Y,gn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Jt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ht),Y.deleteBuffer(Jt),Y.deleteSync(gn),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,at=0){const tt=Math.pow(2,-at),et=Math.floor(R.image.width*tt),Ht=Math.floor(R.image.height*tt),Yt=j!==null?j.x:0,Gt=j!==null?j.y:0;b.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,at,0,0,Yt,Gt,et,Ht),Dt.unbindTexture()};const Un=Y.createFramebuffer(),rr=Y.createFramebuffer();this.copyTextureToTexture=function(R,j,at=null,tt=null,et=0,Ht=0){let Yt,Gt,Zt,jt,te,de,Jt,Pe,gn;const an=R.isCompressedTexture?R.mipmaps[Ht]:R.image;if(at!==null)Yt=at.max.x-at.min.x,Gt=at.max.y-at.min.y,Zt=at.isBox3?at.max.z-at.min.z:1,jt=at.min.x,te=at.min.y,de=at.isBox3?at.min.z:0;else{const bn=Math.pow(2,-et);Yt=Math.floor(an.width*bn),Gt=Math.floor(an.height*bn),R.isDataArrayTexture?Zt=an.depth:R.isData3DTexture?Zt=Math.floor(an.depth*bn):Zt=1,jt=0,te=0,de=0}tt!==null?(Jt=tt.x,Pe=tt.y,gn=tt.z):(Jt=0,Pe=0,gn=0);const ke=k.convert(j.format),Xe=k.convert(j.type);let Wt;j.isData3DTexture?(b.setTexture3D(j,0),Wt=Y.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(b.setTexture2DArray(j,0),Wt=Y.TEXTURE_2D_ARRAY):(b.setTexture2D(j,0),Wt=Y.TEXTURE_2D),Dt.activeTexture(Y.TEXTURE0),Dt.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,j.flipY),Dt.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Dt.pixelStorei(Y.UNPACK_ALIGNMENT,j.unpackAlignment);const Ln=Dt.getParameter(Y.UNPACK_ROW_LENGTH),Re=Dt.getParameter(Y.UNPACK_IMAGE_HEIGHT),Tn=Dt.getParameter(Y.UNPACK_SKIP_PIXELS),bi=Dt.getParameter(Y.UNPACK_SKIP_ROWS),Gi=Dt.getParameter(Y.UNPACK_SKIP_IMAGES);Dt.pixelStorei(Y.UNPACK_ROW_LENGTH,an.width),Dt.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,an.height),Dt.pixelStorei(Y.UNPACK_SKIP_PIXELS,jt),Dt.pixelStorei(Y.UNPACK_SKIP_ROWS,te),Dt.pixelStorei(Y.UNPACK_SKIP_IMAGES,de);const ti=R.isDataArrayTexture||R.isData3DTexture,Ge=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const bn=N.get(R),Di=N.get(j),qe=N.get(bn.__renderTarget),Ei=N.get(Di.__renderTarget);Dt.bindFramebuffer(Y.READ_FRAMEBUFFER,qe.__webglFramebuffer),Dt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let ga=0;ga<Zt;ga++)ti&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,N.get(R).__webglTexture,et,de+ga),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,N.get(j).__webglTexture,Ht,gn+ga)),Y.blitFramebuffer(jt,te,Yt,Gt,Jt,Pe,Yt,Gt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Dt.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(et!==0||R.isRenderTargetTexture||N.has(R)){const bn=N.get(R),Di=N.get(j);Dt.bindFramebuffer(Y.READ_FRAMEBUFFER,Un),Dt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,rr);for(let qe=0;qe<Zt;qe++)ti?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,bn.__webglTexture,et,de+qe):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,bn.__webglTexture,et),Ge?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Di.__webglTexture,Ht,gn+qe):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Di.__webglTexture,Ht),et!==0?Y.blitFramebuffer(jt,te,Yt,Gt,Jt,Pe,Yt,Gt,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ge?Y.copyTexSubImage3D(Wt,Ht,Jt,Pe,gn+qe,jt,te,Yt,Gt):Y.copyTexSubImage2D(Wt,Ht,Jt,Pe,jt,te,Yt,Gt);Dt.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ge?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(Wt,Ht,Jt,Pe,gn,Yt,Gt,Zt,ke,Xe,an.data):j.isCompressedArrayTexture?Y.compressedTexSubImage3D(Wt,Ht,Jt,Pe,gn,Yt,Gt,Zt,ke,an.data):Y.texSubImage3D(Wt,Ht,Jt,Pe,gn,Yt,Gt,Zt,ke,Xe,an):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ht,Jt,Pe,Yt,Gt,ke,Xe,an.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ht,Jt,Pe,an.width,an.height,ke,an.data):Y.texSubImage2D(Y.TEXTURE_2D,Ht,Jt,Pe,Yt,Gt,ke,Xe,an);Dt.pixelStorei(Y.UNPACK_ROW_LENGTH,Ln),Dt.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Re),Dt.pixelStorei(Y.UNPACK_SKIP_PIXELS,Tn),Dt.pixelStorei(Y.UNPACK_SKIP_ROWS,bi),Dt.pixelStorei(Y.UNPACK_SKIP_IMAGES,Gi),Ht===0&&j.generateMipmaps&&Y.generateMipmap(Wt),Dt.unbindTexture()},this.initRenderTarget=function(R){N.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),Dt.unbindTexture()},this.resetState=function(){st=0,ct=0,H=null,Dt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Fe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Fe._getUnpackColorSpace()}}const sn=16,ta=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],[1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1],[1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1],[1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],[1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1],[1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1],[1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1],[1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1],[1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1],[1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],Av=(r,t)=>{const i=Math.floor(r),s=Math.floor(t);return i<0||i>=sn||s<0||s>=sn?!0:ta[s][i]===1},Xl=(r,t)=>{const i=Math.floor(r),s=Math.floor(t);if(i>=0&&i<sn&&s>=0&&s<sn&&ta[s][i]===0)return{x:i,z:s};let l=1/0,c={x:1,z:1};for(let h=-2;h<=2;h++)for(let p=-2;p<=2;p++){const m=i+h,d=s+p;if(m>=0&&m<sn&&d>=0&&d<sn&&ta[d][m]===0){const _=Math.pow(m+.5-r,2)+Math.pow(d+.5-t,2);_<l&&(l=_,c={x:m,z:d})}}return c},Po=(r,t,i,s=2)=>{let l=r,c=t;const h=Math.floor(r-i-1),p=Math.floor(r+i+1),m=Math.floor(t-i-1),d=Math.floor(t+i+1);for(let _=0;_<s;_++)for(let S=m;S<=d;S++)for(let g=h;g<=p;g++){let y=!1;if((g<0||g>=sn||S<0||S>=sn||ta[S][g]===1)&&(y=!0),y){const T=g,A=g+1,x=S,v=S+1,C=Math.max(T,Math.min(l,A)),O=Math.max(x,Math.min(c,v)),D=l-C,V=c-O,L=D*D+V*V;if(L<i*i&&L>1e-6){const P=Math.sqrt(L),E=i-P;l+=D/P*E,c+=V/P*E}else if(L<=1e-6){const P=l-T,E=A-l,z=c-x,q=v-c,F=Math.min(P,E,z,q);F===P?l-=i+P:F===E?l+=i+E:F===z?c-=i+z:c+=i+q}}}return{x:l,z:c}},qA=(r,t,i,s)=>{const l=Xl(r,t),c=Xl(i,s),h=l.x,p=l.z,m=c.x,d=c.z;if(h===m&&p===d)return[];const _=[],S=Array.from({length:sn},()=>new Array(sn).fill(!1));_.push({x:h,z:p,path:[]}),S[p][h]=!0;const g=[{x:0,z:1},{x:0,z:-1},{x:1,z:0},{x:-1,z:0}];for(;_.length>0;){const{x:y,z:T,path:A}=_.shift();if(y===m&&T===d)return A;for(const x of g){const v=y+x.x,C=T+x.z;v>=0&&v<sn&&C>=0&&C<sn&&!S[C][v]&&ta[C][v]===0&&(S[C][v]=!0,_.push({x:v,z:C,path:[...A,{x:v,z:C}]}))}}return null},WA=()=>{const r=document.createElement("canvas");r.width=256,r.height=256;const t=r.getContext("2d");t.fillStyle="#bfb06c",t.fillRect(0,0,256,256),t.strokeStyle="#a69758",t.lineWidth=12;for(let A=16;A<256;A+=32){t.beginPath(),t.moveTo(A,0),t.lineTo(A,256),t.stroke(),t.fillStyle="#8f8249";for(let x=16;x<256;x+=32)t.fillRect(A-2,x,4,12)}t.fillStyle="rgba(84, 76, 39, 0.25)";for(let A=0;A<6;A++){const x=Math.random()*256,v=Math.random()*256,C=Math.random()*40+10,O=t.createRadialGradient(x,v,0,x,v,C);O.addColorStop(0,"rgba(84, 76, 39, 0.45)"),O.addColorStop(1,"rgba(84, 76, 39, 0)"),t.fillStyle=O,t.beginPath(),t.arc(x,v,C,0,Math.PI*2),t.fill()}const i=t.getImageData(0,0,256,256),s=i.data;for(let A=0;A<s.length;A+=4){const x=(Math.random()-.5)*22;s[A]=Math.min(255,Math.max(0,s[A]+x)),s[A+1]=Math.min(255,Math.max(0,s[A+1]+x)),s[A+2]=Math.min(255,Math.max(0,s[A+2]+x))}t.putImageData(i,0,0);const l=document.createElement("canvas");l.width=128,l.height=128;const c=l.getContext("2d");c.fillStyle="#7a6842",c.fillRect(0,0,128,128);for(let A=0;A<4;A++){const x=Math.random()*128,v=Math.random()*128,C=Math.random()*25+5,O=c.createRadialGradient(x,v,0,x,v,C);O.addColorStop(0,"rgba(46, 38, 21, 0.6)"),O.addColorStop(1,"rgba(46, 38, 21, 0)"),c.fillStyle=O,c.beginPath(),c.arc(x,v,C,0,Math.PI*2),c.fill()}const h=c.getImageData(0,0,128,128),p=h.data;for(let A=0;A<p.length;A+=4){const x=(Math.random()-.5)*35;p[A]=Math.min(255,Math.max(0,p[A]+x)),p[A+1]=Math.min(255,Math.max(0,p[A+1]+x)),p[A+2]=Math.min(255,Math.max(0,p[A+2]+x))}c.putImageData(h,0,0);const m=document.createElement("canvas");m.width=256,m.height=256;const d=m.getContext("2d");d.fillStyle="#dbd9cd",d.fillRect(0,0,256,256),d.strokeStyle="#9c9a8f",d.lineWidth=4,d.strokeRect(0,0,256,256);for(let A=0;A<2;A++){const x=Math.random()*256,v=Math.random()*256,C=Math.random()*30+10,O=d.createRadialGradient(x,v,0,x,v,C);O.addColorStop(0,"rgba(112, 94, 53, 0.45)"),O.addColorStop(.5,"rgba(112, 94, 53, 0.2)"),O.addColorStop(1,"rgba(112, 94, 53, 0)"),d.fillStyle=O,d.beginPath(),d.arc(x,v,C,0,Math.PI*2),d.fill()}const _=d.getImageData(0,0,256,256),S=_.data;for(let A=0;A<S.length;A+=4){const x=(Math.random()-.5)*15;Math.random()>.96?(S[A]=70,S[A+1]=68,S[A+2]=63):(S[A]=Math.min(255,Math.max(0,S[A]+x)),S[A+1]=Math.min(255,Math.max(0,S[A+1]+x)),S[A+2]=Math.min(255,Math.max(0,S[A+2]+x)))}d.putImageData(_,0,0);const g=new Md(r);g.wrapS=gs,g.wrapT=gs;const y=new Md(l);y.wrapS=gs,y.wrapT=gs;const T=new Md(m);return T.wrapS=gs,T.wrapT=gs,{wallTex:g,carpetTex:y,ceilTex:T}},YA=()=>{var h,p,m,d,_,S;const r=new Set,t=[{x:1,z:1}];r.add("1,1");const i=[{x:0,z:1},{x:0,z:-1},{x:1,z:0},{x:-1,z:0}];for(;t.length>0;){const g=t.shift();for(const y of i){const T=g.x+y.x,A=g.z+y.z;if(T>=0&&T<sn&&A>=0&&A<sn&&ta[A][T]===0){const x=`${T},${A}`;r.has(x)||(r.add(x),t.push({x:T,z:A}))}}}const s=[];for(let g=0;g<sn;g++)for(let y=0;y<sn;y++)if(r.has(`${y},${g}`)){const T=y+.5,A=g+.5,x=Math.hypot(T-1.5,A-1.5),v=Math.hypot(T-14.5,A-14.5);x>=4&&v>=2.5&&s.push({x:T,z:A})}let l=6,c=[];for(;l>=3;){const g=[...s].sort(()=>Math.random()-.5);c=[];for(const y of g){let T=!0;for(const A of c)if(Math.hypot(y.x-A.x,y.z-A.z)<l){T=!1;break}if(T&&(c.push(y),c.length===3))break}if(c.length===3)break;l-=.5}if(c.length<3){c=[];const g=[...s].sort(()=>Math.random()-.5);for(let y=0;y<Math.min(3,g.length);y++)c.push(g[y])}return[{id:"k1",x:((h=c[0])==null?void 0:h.x)??1.5,z:((p=c[0])==null?void 0:p.z)??9.5,active:!0,color:"#00ffff",label:"FRAG 1"},{id:"k2",x:((m=c[1])==null?void 0:m.x)??13.5,z:((d=c[1])==null?void 0:d.z)??1.5,active:!0,color:"#00ffff",label:"FRAG 2"},{id:"k3",x:((_=c[2])==null?void 0:_.x)??14.5,z:((S=c[2])==null?void 0:S.z)??11.5,active:!0,color:"#00ffff",label:"FRAG 3"}]},jA=({settings:r,gameState:t,setGameState:i,playerStats:s,setPlayerStats:l,onUpdateNoise:c})=>{const h=Ut.useRef(null),p=Ut.useRef(null),m=Ut.useRef(null),d=Ut.useRef(null),[_,S]=Ut.useState(()=>YA()),g=Ut.useRef({}),y=Ut.useRef({x:1.5,z:1.5}),T=Ut.useRef(Math.PI),A=Ut.useRef(0),x=Ut.useRef(!1),v=Ut.useRef(!1),C=Ut.useRef(!1),O=Ut.useRef(!1),D=Ut.useRef(0),V=Ut.useRef(0),L=Ut.useRef(s);Ut.useEffect(()=>{L.current=s},[s]);const P=Ut.useRef(_);Ut.useEffect(()=>{P.current=_},[_]);const[E,z]=Ut.useState(!1),q=Ut.useRef(!1),F=Ut.useRef(0);Ut.useEffect(()=>{q.current=E},[E]);const X=Ut.useRef(0),st=Ut.useRef(null),ct=Ut.useRef(new Z(11.5,0,13.5)),H=Ut.useRef(0),U=Ut.useRef("STALKING"),B=Ut.useRef(1.2);Ut.useRef(0);const lt=Ut.useRef(0),pt=Ut.useRef(null);Ut.useRef([]);const Tt=Ut.useRef([]),I=Ut.useRef(0),J=Ut.useRef(!1),Mt=Ut.useRef(new Z(11.5,0,13.5)),Rt=Ut.useRef(0),zt=Ut.useRef(new Z(0,0,0)),rt=Ut.useRef(new Z(0,0,0)),bt=Ut.useRef(0),At=Ut.useRef(0),Ct=Ut.useRef(new Z(11.5,0,13.5)),ee=Ut.useRef(0),Qt=Ut.useRef(new Z(11.5,0,13.5)),De=Ut.useRef(new Set),ge=Ut.useRef("ROAMING");Ut.useRef(0);const ve=Ut.useRef(0),Oe=Ut.useRef(0),fe=Ut.useRef(0),Sn=Ut.useRef(0),rn=Ut.useRef(new Z(11.5,0,13.5)),Bn=Ut.useRef(null),Y=Ut.useRef(0),Mn=Ut.useRef(-1),Se=Ut.useRef(-1),Je=Ut.useRef(-1),Dt=Ut.useRef(-1),pn=(gt,$)=>{const dt=Math.floor(gt),Pt=Math.floor($),he=[],ae=new Set,on=`${dt},${Pt}`;he.push({x:dt,z:Pt,dist:0}),ae.add(on);let Ze=null;for(;he.length>0;){const nn=he.shift();if(ta[nn.z]&&ta[nn.z][nn.x]===0&&nn.dist>0){const ai=`${nn.x},${nn.z}`;if(!De.current.has(ai)){Ze=nn;break}}const Ti=[{dx:1,dz:0},{dx:-1,dz:0},{dx:0,dz:1},{dx:0,dz:-1}];for(const ai of Ti){const yn=nn.x+ai.dx,Ne=nn.z+ai.dz;if(yn>=0&&yn<sn&&Ne>=0&&Ne<sn){const mn=`${yn},${Ne}`;ae.has(mn)||(ae.add(mn),he.push({x:yn,z:Ne,dist:nn.dist+1}))}}}if(Ze){const nn=`${Ze.x},${Ze.z}`;return De.current.add(nn),new Z(Ze.x+.5,0,Ze.z+.5)}else{De.current.clear();let nn=dt,yi=Pt,Ti=!1,ai=0;for(;!Ti&&ai<100;){const Ne=Math.floor(Math.random()*9-4),mn=Math.floor(Math.random()*9-4),hi=dt+Ne,di=Pt+mn;hi>=0&&hi<sn&&di>=0&&di<sn&&ta[di][hi]===0&&(nn=hi,yi=di,Ti=!0),ai++}if(!Ti)for(;!Ti&&ai<200;){const Ne=Math.floor(Math.random()*sn),mn=Math.floor(Math.random()*sn);ta[mn][Ne]===0&&(nn=Ne,yi=mn,Ti=!0),ai++}const yn=`${nn},${yi}`;return De.current.add(yn),new Z(nn+.5,0,yi+.5)}},N=(gt,$,dt,Pt,he=!1)=>{const ae=Math.floor(gt),on=Math.floor($),Ze=Math.floor(dt),nn=Math.floor(Pt),yi=ae!==Je.current||on!==Dt.current||Ze!==Mn.current||nn!==Se.current;return(he||yi||Y.current<=0||!Bn.current)&&(Bn.current=qA(gt,$,dt,Pt),Y.current=.3,Je.current=ae,Dt.current=on,Mn.current=Ze,Se.current=nn),Bn.current},b=Ut.useRef(!1),Q=Ut.useRef(0),vt=Ut.useRef(!1),Et=Ut.useRef(0),Lt=()=>h.current?r.lowResMode?{w:400,h:240}:{w:800,h:480}:{w:800,h:480};Ut.useEffect(()=>{if(!h.current)return;const gt=Lt(),$=new Ty;$.fog=new Up("#14140b",.12),d.current=$;const dt=new Ii(75,5/3,.1,50);dt.position.set(1.5,.9,1.5),dt.rotation.set(A.current,T.current,0,"YXZ"),m.current=dt;const Pt=new XA({antialias:!1,powerPreference:"high-performance"});Pt.setSize(gt.w,gt.h),Pt.setClearColor("#14140b"),Pt.domElement.style.width="100%",Pt.domElement.style.height="100%",Pt.domElement.style.imageRendering="pixelated",Pt.domElement.style.objectFit="cover",Pt.domElement.id="webgl-canvas",h.current.innerHTML="",h.current.appendChild(Pt.domElement),p.current=Pt;const{wallTex:he,carpetTex:ae,ceilTex:on}=WA();he.repeat.set(1,1),ae.repeat.set(.5,.5),on.repeat.set(1,1);const Ze=new yd({map:he,color:"#aaaaaa"}),nn=new yd({map:ae,color:"#888888"}),yi=new yd({map:on,color:"#999999"}),Ti=new xn(1,2,1),ai=new Ho(1,1),yn=new Ho(1,1),Ne=new za;$.add(Ne);for(let Xt=0;Xt<sn;Xt++)for(let Me=0;Me<sn;Me++)if(ta[Xt][Me]===1){const se=new be(Ti,Ze);se.position.set(Me+.5,1,Xt+.5),Ne.add(se)}else{const se=new be(ai,nn);se.rotation.x=-Math.PI/2,se.position.set(Me+.5,0,Xt+.5),Ne.add(se);const He=new be(yn,yi);He.rotation.x=Math.PI/2,He.position.set(Me+.5,2,Xt+.5),Ne.add(He)}const mn=new xn(.6,.05,.15),hi=new zo({color:"#fefeb0"}),di=[],bs=[];[{x:3.5,z:3.5},{x:7.5,z:1.5},{x:11.5,z:3.5},{x:5.5,z:5.5},{x:9.5,z:5.5},{x:1.5,z:7.5},{x:7.5,z:7.5},{x:13.5,z:7.5},{x:3.5,z:11.5},{x:10.5,z:11.5},{x:7.5,z:13.5}].forEach(Xt=>{const Me=new be(mn,hi);Me.position.set(Xt.x,1.96,Xt.z),$.add(Me),di.push(Me);const se=new tv("#fefeb0",.7,4);se.position.set(Xt.x,1.8,Xt.z),$.add(se),bs.push(se)});const $e=new za;$e.position.set(14.5,0,14.5),$e.rotation.y=Math.PI,$.add($e);const Bi=new ha({color:"#343a40",metalness:.9,roughness:.2}),Wa=new ha({color:"#1a1d20",metalness:.85,roughness:.45}),pa=new ha({color:"#495057",metalness:.9,roughness:.25}),ma=new ha({color:"#a36d24",metalness:.95,roughness:.15}),Ea=new ha({color:"#00ff44",emissive:"#003300",metalness:.6,roughness:.2}),Vi=new ha({color:"#00ff33",emissive:"#00ff33",emissiveIntensity:2,metalness:.1,roughness:.1}),Un=new ha({color:"#020d04",roughness:.15}),rr=new be(new xn(1,1.9,.02),Bi);rr.position.set(0,.95,-.45),$e.add(rr);const R=new be(new xn(.12,1.8,.12),Wa);R.position.set(-.44,.9,-.44),$e.add(R);const j=new be(new xn(.12,1.8,.12),Wa);j.position.set(.44,.9,-.44),$e.add(j);const at=new be(new xn(1,.2,.14),Wa);at.position.set(0,1.7,-.44),$e.add(at);for(let Xt=0;Xt<6;Xt++){const Me=new be(new xn(.122,.035,.01),Ea);Me.position.set(-.44,.35+Xt*.22,-.435),Me.rotation.z=Math.PI/4,$e.add(Me);const se=new be(new xn(.122,.035,.01),Ea);se.position.set(.44,.35+Xt*.22,-.435),se.rotation.z=-Math.PI/4,$e.add(se)}const tt=new be(new xn(.36,1.5,.04),pa);tt.position.set(-.18,.75,-.42),$e.add(tt);const et=new be(new xn(.36,1.5,.04),pa);et.position.set(.18,.75,-.42),$e.add(et);for(let Xt=0;Xt<4;Xt++){const Me=.25+Xt*.32,se=new be(new xn(.3,.05,.015),Bi);se.position.set(-.18,Me,-.41),$e.add(se);const He=new be(new xn(.3,.05,.015),Bi);He.position.set(.18,Me,-.41),$e.add(He)}const Ht=new be(new xn(.01,1.5,.005),Vi);Ht.position.set(0,.75,-.405),$e.add(Ht);const Yt=new be(new xn(.6,.16,.06),Bi);Yt.position.set(0,1.7,-.38),$e.add(Yt);const Gt=new be(new xn(.56,.12,.01),Un);Gt.position.set(0,1.7,-.345),$e.add(Gt),[1.73,1.67].forEach(Xt=>{const Me=new be(new xn(.08,.015,.005),Vi);Me.position.set(-.04,Xt,-.338),Me.rotation.z=-Math.PI/6,$e.add(Me);const se=new be(new xn(.08,.015,.005),Vi);se.position.set(.04,Xt,-.338),se.rotation.z=Math.PI/6,$e.add(se)});const jt=new be(new kl(.012,8,8),Vi);jt.position.set(-.24,1.7,-.34),$e.add(jt);const te=new ha({color:"#ffaa00",emissive:"#dd6600",emissiveIntensity:1,roughness:.1}),de=new be(new kl(.012,8,8),te);de.position.set(.24,1.7,-.34),$e.add(de);const Jt=new be(new Hl(.015,.015,1.7,8),ma);Jt.position.set(-.48,.85,-.4),$e.add(Jt);const Pe=new be(new Hl(.015,.015,1.7,8),ma);Pe.position.set(.48,.85,-.4),$e.add(Pe);const gn=new Hl(.025,.025,.25,8),an=new ha({color:"#111111",metalness:.9,roughness:.2}),ke=new be(gn,an);ke.position.set(-.35,.15,-.38),ke.rotation.z=Math.PI/2,$e.add(ke);const Xe=new be(gn,an);Xe.position.set(.35,.15,-.38),Xe.rotation.z=Math.PI/2,$e.add(Xe);const Wt=new tv("#00ff33",1.5,4);Wt.position.set(0,1.5,-.3),$e.add(Wt);const Ln=new Hy("#ffffff",4,18,Math.PI/4.5,.5,1);$.add(Ln),$.add(Ln.target);const Re=new Xy("#26261c",.15);$.add(Re);const Tn=new za;Tn.position.copy(ct.current),$.add(Tn),pt.current=Tn;const bi=new kl(.16,8,8),Gi=new zo({color:"#050505"}),ti=new be(bi,Gi);ti.position.set(0,1.8,0),Tn.add(ti);const Ge=new za;Tn.add(Ge),(()=>{const Xt=new _p({color:"#000000",linewidth:2});for(let He=0;He<12;He++){const Cn=[];let Vn=1.6,Rn=0,Dn=0;for(Cn.push(new Z(Rn,Vn,Dn));Vn>.6;)Vn-=.15,Rn+=(Math.random()-.5)*.14,Dn+=(Math.random()-.5)*.14,Cn.push(new Z(Rn,Vn,Dn));const Kn=new Ci().setFromPoints(Cn),Gn=new Sd(Kn,Xt);Ge.add(Gn),Tt.current.push(Gn)}const Me=new _p({color:"#080808"}),se=[-1,1];se.forEach(He=>{const Cn=[];let Vn=He*.15,Rn=1.5,Dn=0;Cn.push(new Z(Vn,Rn,Dn));for(let Nn=0;Nn<8;Nn++)Rn-=.18,Vn+=He*.08+(Math.random()-.5)*.05,Dn+=(Math.random()-.5)*.08,Cn.push(new Z(Vn,Rn,Dn));const Kn=new Ci().setFromPoints(Cn),Gn=new Sd(Kn,Me);Ge.add(Gn),Tt.current.push(Gn)}),se.forEach(He=>{const Cn=[];let Vn=He*.1,Rn=.6,Dn=0;Cn.push(new Z(Vn,Rn,Dn));for(let Nn=0;Nn<5;Nn++)Rn-=.13,Vn+=He*.03+(Math.random()-.5)*.05,Dn+=(Math.random()-.5)*.05,Cn.push(new Z(Vn,Rn,Dn));const Kn=new Ci().setFromPoints(Cn),Gn=new Sd(Kn,Me);Ge.add(Gn),Tt.current.push(Gn)})})();const Di=new za;$.add(Di);const qe=[];_.forEach((Xt,Me)=>{const se=new za;se.position.set(Xt.x,.25,Xt.z),se.name=`card_${Xt.id}`;const He=.06,Cn=new xn(He,.004,.11),Vn=new ha({color:"#f0f0f0",roughness:.4,metalness:.1}),Rn=new be(Cn,Vn);Rn.rotation.y=(Math.random()-.5)*.3,se.add(Rn);const Dn=new xn(He,.005,.016),Kn=new ha({color:"#1a1a1a",roughness:.8}),Gn=new be(Dn,Kn);if(Gn.position.set(0,.001,.035),Gn.rotation.y=Rn.rotation.y,se.add(Gn),Me===0){const Nn=new xn(.024,.005,.024),ei=new ha({color:"#d4af37",metalness:.85,roughness:.25}),si=new be(Nn,ei);si.position.set(-.01,.001,-.015),si.rotation.y=Rn.rotation.y,se.add(si)}else if(Me===1){const Nn=new xn(.04,.005,.008),ei=new zo({color:"#555555"}),si=new be(Nn,ei);si.position.set(0,.001,-.02),si.rotation.y=Rn.rotation.y,se.add(si);const Ra=new be(Nn,ei);Ra.position.set(0,.001,-.035),Ra.rotation.y=Rn.rotation.y,se.add(Ra)}else if(Me===2){const Nn=new xn(.018,.005,.04),ei=new zo({color:Xt.color}),si=new be(Nn,ei);si.position.set(.01,.001,0),si.rotation.y=Rn.rotation.y,se.add(si)}Di.add(se),qe.push(se)});const Ei=new Yy;vn.startBackgroundHum();const ga=()=>{if(!p.current||!m.current)return;const Xt=Lt();m.current.aspect=Xt.w/Xt.h,m.current.updateProjectionMatrix(),p.current.setSize(Xt.w,Xt.h)};window.addEventListener("resize",ga);let Aa;const na=()=>{if(Aa=requestAnimationFrame(na),t!=="PLAYING"&&t!=="INTRO")return;Ei.update();const Xt=Math.min(Ei.getDelta(),.1),Me=Ei.getElapsed();if(t==="INTRO"){Pt.render($,dt);return}Q.current+=Xt,Q.current>12&&(Math.random()>.6&&vn.playAmbientClank(),Q.current=0);let se=0,He=0;(g.current.w||g.current.arrowup)&&(He+=1),(g.current.s||g.current.arrowdown)&&(He-=1),(g.current.a||g.current.arrowleft)&&(se-=1),(g.current.d||g.current.arrowright)&&(se+=1),(g.current.joystick_x||g.current.joystick_y)&&(se=g.current.joystick_x||0,He=-(g.current.joystick_y||0));let Cn=Math.sqrt(se*se+He*He),Vn=Cn;Cn>1&&(se/=Cn,He/=Cn,Vn=1),C.current=Cn>0;const Rn=g.current.shift,Dn=v.current;L.current.stamina<=.1?O.current=!0:L.current.stamina>25&&(O.current=!1);const Kn=!O.current&&L.current.stamina>0&&!Dn;x.current=C.current&&Rn&&Kn,l(ye=>{let tn=ye.stamina;x.current?tn=Math.max(0,ye.stamina-Xt*26):tn=Math.min(100,ye.stamina+Xt*12),tn<20?vn.startBreathing():vn.stopBreathing();let It=ye.flashCooldown,Xn=ye.flashReady;ye.flashReady||(It=Math.min(1,ye.flashCooldown+Xt/8),It>=1&&(Xn=!0));const Hi={...ye,stamina:tn,flashCooldown:It,flashReady:Xn};return L.current=Hi,Hi});let Gn=r.difficulty==="EASY"?1.7:r.difficulty==="NORMAL"?1.5:1.35;const Nn=O.current||L.current.stamina<20;Nn&&(Gn*=.7),Dn&&(Gn*=.5);const ei=(x.current?Gn*1.8:Gn)*Vn;if(Cn>0){const ye=-Math.sin(T.current),tn=-Math.cos(T.current),It=Math.cos(T.current),Xn=-Math.sin(T.current),Hi=(se*It+He*ye)*ei,mi=(se*Xn+He*tn)*ei,ki=.28;let kr=y.current.x+Hi*Xt,wa=y.current.z+mi*Xt;const Rs=Po(kr,wa,ki);y.current.x=Rs.x,y.current.z=Rs.z,D.current+=Xt*(x.current?12:7),D.current>Math.PI*2&&(vn.playFootstep(),D.current=0)}else D.current=0;const si=Dn?.55:.9;dt.userData.baseHeight===void 0&&(dt.userData.baseHeight=.9),dt.userData.baseHeight+=(si-dt.userData.baseHeight)*Xt*8;const Ra=x.current?.08:C.current?Nn?.06:.04:.01,Kl=x.current?16:Nn?6:8.5;V.current+=Xt*Kl;const Br=dt.userData.baseHeight+Math.sin(V.current)*Ra;dt.position.x=y.current.x,dt.position.z=y.current.z,dt.position.y=Br;const Vr=Nn?Math.sin(V.current*.4)*.04:0,qo=new Ir().setFromEuler(new Xa(A.current,T.current,Vr,"YXZ"));t==="INTRO"?dt.quaternion.copy(qo):dt.quaternion.slerp(qo,.35);const pi=pt.current?pt.current.position.x:0,Ya=pt.current?pt.current.position.z:0;vn.updateListener(dt.position.x,dt.position.y,dt.position.z,T.current,pi,Ya),X.current>0&&(X.current=Math.max(0,X.current-Xt*2)),Ln.intensity=X.current*15;const Gr=new Z(0,0,-1).applyQuaternion(dt.quaternion);Ln.position.copy(dt.position),Ln.target.position.copy(dt.position).addScaledVector(Gr,2);const or=new Z(y.current.x,0,y.current.z),Es=pt.current?pt.current.position.distanceTo(or):999;let As=0;q.current||(U.current==="CHASING"?Es<20&&(As=.6+Math.max(0,Math.min(1,(20-Es)/18))*.4):J.current?Es<16&&(As=.3+Math.max(0,Math.min(1,(16-Es)/14))*.3):Es<11&&(As=Math.max(0,Math.min(1,(11-Es)/9))*.3)),F.current+=(As-F.current)*Xt*1.5;const lr=F.current;if(di.forEach((ye,tn)=>{let It=!0;if(lr>.01){const mi=5+Math.pow(lr,1.5)*115,ki=Math.sin(Me*mi+ye.position.x*23.7+ye.position.z*17.3),kr=Math.sin(Me*(mi*.73)+ye.position.x*13.1+ye.position.z*19.5),wa=(ki+kr)*.5,Rs=1.05-Math.pow(lr,1.2)*.95;It=wa<Rs}const Xn=It?16711344:2039572,Hi=It?.7:.02;ye.material.color.setHex(Xn),bs[tn]&&(bs[tn].intensity=Hi)}),qe.forEach((ye,tn)=>{const It=P.current[tn];if(!It||!It.active){ye.visible=!1;return}if(ye.rotation.y+=Xt*1.5,ye.position.y=.25+Math.sin(Me*3+tn)*.04,Math.hypot(dt.position.x-ye.position.x,dt.position.z-ye.position.z)<.7){vn.playKeycardPickup();const Hi=P.current.map(mi=>mi.id===It.id?{...mi,active:!1}:mi);P.current=Hi,S(Hi),l(mi=>{const ki={...mi,keysCollected:mi.keysCollected+1};return L.current=ki,ki})}}),pt.current){const ye=pt.current;if(q.current)ye.visible=!1,vn.stopHeartbeat(),c(0),J.current=!1;else{ye.visible=!0;const tn=new Z(y.current.x,0,y.current.z),It=ye.position,Xn=It.distanceTo(tn),Hi=Math.hypot(It.x-rt.current.x,It.z-rt.current.z);rt.current.copy(It),U.current!=="FROZEN"&&Hi<.01*Xt?bt.current+=Xt:bt.current=0;const ki=bt.current>.8,wa=(()=>{const ce=It.clone(),We=tn.clone();for(let ze=1;ze<60;ze++){const ne=ce.clone().lerp(We,ze/60);if(Av(ne.x,ne.z))return!1}return!0})();J.current=wa;const Rs=tn.clone().sub(It).normalize();if(new Z(Math.sin(H.current),0,Math.cos(H.current)).dot(Rs)>.5,X.current>.8){const pe=It.clone().sub(dt.position).normalize();if(new Z(0,0,-1).applyQuaternion(dt.quaternion).normalize().dot(pe)>.7&&wa&&Xn<5){if(U.current="FROZEN",At.current=2,Ct.current.copy(tn),x.current){const ne=zt.current.clone().multiplyScalar(2.5);Ct.current.add(ne)}Ct.current.x=Math.max(.5,Math.min(sn-.5,Ct.current.x)),Ct.current.z=Math.max(.5,Math.min(sn-.5,Ct.current.z));const ze=Xl(Ct.current.x,Ct.current.z);Ct.current.set(ze.x+.5,0,ze.z+.5)}}if(Xn>20){if(I.current+=Xt,I.current>10){const pe=[0,Math.PI/2,Math.PI,-Math.PI/2];for(let ce of pe){const We=Math.floor(y.current.x+Math.sin(ce)*6),ze=Math.floor(y.current.z+Math.cos(ce)*6);if(!Av(We+.5,ze+.5)&&Math.abs(We-y.current.x)>2){It.set(We+.5,0,ze+.5),I.current=0;break}}}}else I.current=0;if(Y.current-=Xt,U.current==="FROZEN"){if(At.current-=Xt,At.current<=0){U.current="CHASING",Y.current=0;const pe=Xl(Ct.current.x,Ct.current.z);Ct.current.set(pe.x+.5,0,pe.z+.5)}}else if(wa)ve.current=0,Ct.current.copy(tn),U.current="CHASING";else if(U.current==="CHASING"){ve.current+=Xt,ve.current<1.4&&Ct.current.copy(tn);const pe=Math.hypot(It.x-Ct.current.x,It.z-Ct.current.z);if(ve.current>=1.4&&pe<.8){De.current.clear();const ce=Math.floor(Ct.current.x),We=Math.floor(Ct.current.z);De.current.add(`${ce},${We}`),ee.current=25,Qt.current.copy(pn(Ct.current.x,Ct.current.z)),U.current="SEARCHING",Y.current=0,ve.current=0}}else if(x.current&&Xn<7){U.current!=="SEARCHING"&&(ge.current=U.current),Ct.current.copy(tn),De.current.clear();const pe=Xl(tn.x,tn.z);De.current.add(`${pe.x},${pe.z}`),ee.current=20,Qt.current.set(pe.x+.5,0,pe.z+.5),U.current="SEARCHING",Y.current=0}else U.current==="SEARCHING"?(ee.current-=Xt,ee.current<=0&&(U.current=ge.current,U.current==="ROAMING"?Rt.current=0:U.current==="STALKING"&&(Oe.current=0))):U.current;const cr=r.difficulty==="EASY"?.9:r.difficulty==="NORMAL"?1.3:1.7;if(U.current==="FROZEN"){B.current=0;const pe=tn.clone().sub(It).cross(new Z(0,1,0)).normalize(),ce=pe.x*Xt*.15,We=pe.z*Xt*.15,ne=Po(It.x+ce,It.z+We,.3,3);It.x=ne.x,It.z=ne.z,Xn<5?vn.startHeartbeat(.8):vn.startHeartbeat(.3)}else if(U.current==="CHASING"){B.current=cr*2.1;const pe=wa?tn:Ct.current,ce=N(It.x,It.z,pe.x,pe.z,ki);let We=pe.x,ze=pe.z;if(ce&&ce.length>0){let Ca=ce[0];Math.hypot(It.x-(Ca.x+.5),It.z-(Ca.z+.5))<1&&ce.length>1&&(Ca=ce[1]),We=Ca.x+.5,ze=Ca.z+.5}const ne=new Z(We-It.x,0,ze-It.z);ne.lengthSq()>.001?ne.normalize():(ne.copy(pe).sub(It),ne.y=0,ne.lengthSq()>.001&&ne.normalize());const Ai=.3,ja=ne.x*B.current,Za=ne.z*B.current,Xi=Po(It.x+ja*Xt,It.z+Za*Xt,Ai,3);It.x=Xi.x,It.z=Xi.z;const On=tn.clone().sub(It).normalize();H.current=Math.atan2(On.x,On.z),ye.rotation.y=H.current,vn.startHeartbeat(.95)}else if(U.current==="SEARCHING"){B.current=cr*1.35,Math.hypot(It.x-Qt.current.x,It.z-Qt.current.z)<1.5&&(Qt.current.copy(pn(It.x,It.z)),Y.current=0);const ce=N(It.x,It.z,Qt.current.x,Qt.current.z,ki);let We=Qt.current.x,ze=Qt.current.z;if(ce&&ce.length>0){let On=ce[0];Math.hypot(It.x-(On.x+.5),It.z-(On.z+.5))<1&&ce.length>1&&(On=ce[1]),We=On.x+.5,ze=On.z+.5}const ne=new Z(We-It.x,0,ze-It.z);ne.lengthSq()>.001&&ne.normalize();const Ai=.3,ja=ne.x*B.current,Za=ne.z*B.current,Xi=Po(It.x+ja*Xt,It.z+Za*Xt,Ai,3);It.x=Xi.x,It.z=Xi.z,H.current=Math.atan2(ne.x,ne.z),ye.rotation.y=H.current,Xn<7?vn.startHeartbeat(.65):vn.stopHeartbeat(),ee.current-=Xt,ee.current<=0&&(U.current=ge.current,U.current==="ROAMING"?Rt.current=0:U.current==="STALKING"&&(Oe.current=0))}else if(U.current==="ROAMING")if(B.current=cr*.9,Math.hypot(It.x-Mt.current.x,It.z-Mt.current.z)<.6||Rt.current>0){if(Rt.current<=0&&(Rt.current=1.5+Math.random()*4),Rt.current-=Xt,Rt.current<=0){let ce=!1,We=0;for(;!ce&&We<50;){const ze=Math.floor(Math.random()*sn),ne=Math.floor(Math.random()*sn);ta[ne][ze]===0&&(Mt.current.set(ze+.5,0,ne+.5),ce=!0),We++}}vn.startHeartbeat(.2)}else{const ce=N(It.x,It.z,Mt.current.x,Mt.current.z,ki);let We=Mt.current.x,ze=Mt.current.z;if(ce&&ce.length>0){let On=ce[0];Math.hypot(It.x-(On.x+.5),It.z-(On.z+.5))<1&&ce.length>1&&(On=ce[1]),We=On.x+.5,ze=On.z+.5}const ne=new Z(We-It.x,0,ze-It.z).normalize(),Ai=.3,ja=ne.x*B.current,Za=ne.z*B.current,Xi=Po(It.x+ja*Xt,It.z+Za*Xt,Ai,3);It.x=Xi.x,It.z=Xi.z,H.current=Math.atan2(ne.x,ne.z),ye.rotation.y=H.current,vn.startHeartbeat(.25)}else{if(B.current=cr*.75,Oe.current-=Xt,fe.current>0&&(fe.current-=Xt),Sn.current>0&&(Sn.current-=Xt),Oe.current<=0){Oe.current=4+Math.random()*4;const pe=Math.random();if(pe<.25)fe.current=1+Math.random()*1.5;else if(pe<.5)for(let ce=0;ce<10;ce++){const We=(Math.random()>.5?1:-1)*(2+Math.floor(Math.random()*3)),ze=(Math.random()>.5?1:-1)*(2+Math.floor(Math.random()*3)),ne=Math.max(0,Math.min(sn-1,Math.floor(It.x+We))),Ai=Math.max(0,Math.min(sn-1,Math.floor(It.z+ze)));if(ta[Ai][ne]===0){rn.current.set(ne+.5,0,Ai+.5),Sn.current=2+Math.random()*2.5;break}}}if(fe.current>0)B.current=0,H.current=Math.atan2(tn.x-It.x,tn.z-It.z)+Math.sin(Me*3)*.4,ye.rotation.y=H.current;else{const pe=Sn.current>0?rn.current:tn,ce=N(It.x,It.z,pe.x,pe.z,ki);let We=pe.x,ze=pe.z;if(ce&&ce.length>0){let On=ce[0];Math.hypot(It.x-(On.x+.5),It.z-(On.z+.5))<1&&ce.length>1&&(On=ce[1]),We=On.x+.5,ze=On.z+.5}const ne=new Z(We-It.x,0,ze-It.z);ne.lengthSq()>.001?ne.normalize():(ne.copy(pe).sub(It),ne.y=0,ne.lengthSq()>.001&&ne.normalize());const Ai=.3,ja=ne.x*B.current,Za=ne.z*B.current,Xi=Po(It.x+ja*Xt,It.z+Za*Xt,Ai,3);It.x=Xi.x,It.z=Xi.z,H.current=Math.atan2(ne.x,ne.z),ye.rotation.y=H.current}Xn<10?vn.startHeartbeat(.45):vn.stopHeartbeat()}if(U.current!=="FROZEN"&&B.current>0){const pe=U.current==="CHASING"?12:U.current==="SEARCHING"?6:4.5;lt.current+=Xt*pe,lt.current>Math.PI*2&&(vn.playEntityFootstepSpatial(It.x,.5,It.z,y.current.x,y.current.z,T.current,U.current==="CHASING"),lt.current=0)}const Wo=3.5,Ql=1.5;if(Xn<Wo)if(Xn<=Ql)c(1);else{const pe=(Wo-Xn)/(Wo-Ql),ce=Math.pow(pe,2.5);c(ce)}else c(0);const Xr=U.current==="CHASING"?3:U.current==="FROZEN"?.25:U.current==="SEARCHING"?1.5:1;if(ti.position.x=Math.sin(Me*65)*.015*Xr,ti.position.z=Math.cos(Me*50)*.012*Xr,Tt.current.forEach((pe,ce)=>{const We=pe.geometry.attributes.position;if(We){const ze=We.array;for(let ne=3;ne<ze.length;ne+=3){const Ai=Math.sin(Me*85+ce+ne)*.009*Xr;ze[ne]=ze[ne]+Ai,ze[ne+2]=ze[ne+2]+Math.cos(Me*75+ce+ne)*.009*Xr}We.needsUpdate=!0}}),Xn<.65&&!b.current){b.current=!0,i("SCARED"),vn.playJumpscare();const pe=new Z(0,0,-1).applyQuaternion(dt.quaternion);ye.position.copy(dt.position).addScaledVector(pe,.5),ye.lookAt(dt.position),setTimeout(()=>{i("GAMEOVER")},1500)}}}Math.hypot(dt.position.x-14.5,dt.position.z-14.5)<.35&&L.current.keysCollected>=L.current.keysRequired&&(vn.playEscapeChime(),i("ESCAPED")),Pt.render($,dt)};return Ei.reset(),na(),()=>{cancelAnimationFrame(Aa),window.removeEventListener("resize",ga),vn.stopBackgroundHum(),vn.stopHeartbeat(),vn.stopBreathing(),p.current&&p.current.domElement&&p.current.dispose()}},[t,r]),Ut.useEffect(()=>{const gt=dt=>{const Pt=dt.key.toLowerCase();if(g.current[Pt]=!0,Pt==="f"){const he=L.current.flashReady,ae=X.current===0;he&&ae&&(vn.playCameraFlash(),X.current=1,l(on=>{const Ze={...on,flashReady:!1,flashCooldown:0};return L.current=Ze,Ze}))}},$=dt=>{g.current[dt.key.toLowerCase()]=!1};return window.addEventListener("keydown",gt),window.addEventListener("keyup",$),()=>{window.removeEventListener("keydown",gt),window.removeEventListener("keyup",$)}},[]);const Ft=gt=>{var dt;if(t==="INTRO"||Date.now()-Et.current<1500)return;const $=(dt=p.current)==null?void 0:dt.domElement;if($&&$.requestPointerLock)try{const Pt=$.requestPointerLock();Pt&&typeof Pt.catch=="function"&&Pt.catch(he=>{console.warn("Pointer lock request rejected:",he)})}catch(Pt){console.warn("Pointer lock request failed:",Pt)}};Ut.useEffect(()=>{const gt=()=>{var Pt;const $=(Pt=p.current)==null?void 0:Pt.domElement,dt=document.pointerLockElement===$;vt.current&&!dt&&(Et.current=Date.now()),vt.current=dt};return document.addEventListener("pointerlockchange",gt),()=>{document.removeEventListener("pointerlockchange",gt)}},[]);const ft=gt=>{if(t==="INTRO")return;const $=r.sensitivity*.0015;vt.current?(T.current-=gt.movementX*$,A.current=Math.max(-Math.PI/3,Math.min(Math.PI/3,A.current-gt.movementY*$))):gt.buttons===1&&(T.current-=gt.movementX*$*1.5,A.current=Math.max(-Math.PI/3,Math.min(Math.PI/3,A.current-gt.movementY*$*1.5)))},ht=Ut.useRef(null),[Bt,Vt]=Ut.useState({x:0,y:0}),Nt=Ut.useRef(null),Ot=gt=>{if(!ht.current)return;const $=ht.current.getBoundingClientRect(),dt=$.left+$.width/2,Pt=$.top+$.height/2,he=$.width/2;let ae=gt.clientX-dt,on=gt.clientY-Pt;const Ze=Math.sqrt(ae*ae+on*on);Ze>he&&(ae=ae/Ze*he,on=on/Ze*he),Vt({x:ae,y:on}),g.current.joystick_x=ae/he,g.current.joystick_y=on/he},oe=gt=>{if(Nt.current!==null)return;const $=gt.changedTouches[0];Nt.current=$.identifier,Ot($)},le=gt=>{if(Nt.current!==null)for(let $=0;$<gt.changedTouches.length;$++){const dt=gt.changedTouches[$];if(dt.identifier===Nt.current){Ot(dt);break}}},Ee=gt=>{if(Nt.current!==null){for(let $=0;$<gt.changedTouches.length;$++)if(gt.changedTouches[$].identifier===Nt.current){Nt.current=null,Vt({x:0,y:0}),g.current.joystick_x=0,g.current.joystick_y=0;break}}},k=Ut.useRef(null),wt=gt=>{for(let $=0;$<gt.changedTouches.length;$++){const dt=gt.changedTouches[$];if(dt.clientX>window.innerWidth/2&&k.current===null){k.current=dt.identifier,st.current={x:dt.clientX,y:dt.clientY};break}}},mt=gt=>{if(!(t==="INTRO"||k.current===null||!st.current))for(let $=0;$<gt.changedTouches.length;$++){const dt=gt.changedTouches[$];if(dt.identifier===k.current){const Pt=dt.clientX-st.current.x,he=dt.clientY-st.current.y,ae=r.sensitivity*.003;T.current-=Pt*ae,A.current=Math.max(-Math.PI/3,Math.min(Math.PI/3,A.current-he*ae)),st.current={x:dt.clientX,y:dt.clientY};break}}},kt=gt=>{if(k.current!==null){for(let $=0;$<gt.changedTouches.length;$++)if(gt.changedTouches[$].identifier===k.current){k.current=null,st.current=null;break}}};return St.jsxs("div",{className:"relative w-full h-full select-none cursor-crosshair",children:[St.jsx("div",{ref:h,onClick:Ft,onMouseMove:ft,onTouchStart:wt,onTouchMove:mt,onTouchEnd:kt,className:"w-full h-full bg-[#14140b] select-none"}),St.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none text-center select-none z-10",children:!vt.current&&t==="PLAYING"&&St.jsx("div",{className:"bg-black/80 px-4 py-2 border border-yellow-600/30 text-[10px] uppercase text-yellow-400 tracking-wider animate-pulse rounded transform -translate-y-24",children:"🖱️ Click inside screen or Drag to Look Around"})}),t==="PLAYING"&&St.jsxs("div",{className:"absolute bottom-[env(safe-area-inset-bottom,1.5rem)] left-[env(safe-area-inset-left,1.5rem)] right-[env(safe-area-inset-right,1.5rem)] flex justify-between items-end pointer-events-none select-none z-10 md:hidden pb-4 pl-2 pr-2",children:[St.jsx("div",{ref:ht,onTouchStart:oe,onTouchMove:le,onTouchEnd:Ee,onTouchCancel:Ee,className:"w-32 h-32 bg-black/30 border border-white/10 rounded-full flex items-center justify-center pointer-events-auto relative backdrop-blur-sm",children:St.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-full absolute shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-none",style:{transform:`translate(${Bt.x}px, ${Bt.y}px)`}})}),St.jsxs("div",{className:"flex flex-col gap-4 justify-end pointer-events-auto items-end",children:[St.jsx("button",{onClick:()=>{const gt=L.current.flashReady,$=X.current===0;gt&&$&&(vn.playCameraFlash(),X.current=1,l(dt=>{const Pt={...dt,flashReady:!1,flashCooldown:0};return L.current=Pt,Pt}))},className:"w-14 h-14 bg-black/40 border border-white/10 text-white/70 rounded-full flex items-center justify-center active:bg-white/20 active:text-white backdrop-blur-sm shadow-lg transition-colors",children:St.jsx(pM,{className:"w-6 h-6"})}),St.jsxs("div",{className:"flex gap-4",children:[St.jsx("button",{onMouseDown:()=>{v.current=!0},onMouseUp:()=>{v.current=!1},onTouchStart:()=>{v.current=!0},onTouchEnd:()=>{v.current=!1},onTouchCancel:()=>{v.current=!1},className:"w-14 h-14 bg-black/40 border border-white/10 text-white/70 rounded-full flex items-center justify-center active:bg-white/20 active:text-white backdrop-blur-sm shadow-lg transition-colors",children:St.jsx(lM,{className:"w-6 h-6"})}),St.jsx("button",{onMouseDown:()=>{g.current.shift=!0},onMouseUp:()=>{g.current.shift=!1},onTouchStart:()=>{g.current.shift=!0},onTouchEnd:()=>{g.current.shift=!1},onTouchCancel:()=>{g.current.shift=!1},className:"w-14 h-14 bg-black/40 border border-white/10 text-white/70 rounded-full flex items-center justify-center active:bg-white/20 active:text-white backdrop-blur-sm shadow-lg transition-colors",children:St.jsx(Cv,{className:"w-6 h-6"})})]})]})]})]})},ZA=({playerStats:r,gameState:t,onRestart:i,onContinue:s,onMainMenu:l,noiseIntensity:c})=>{const[h,p]=Ut.useState(!0);Ut.useEffect(()=>{const _=setInterval(()=>{p(S=>!S)},500);return()=>clearInterval(_)},[]);const m=t==="GAMEOVER",d=t==="ESCAPED";return St.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 select-none font-mono text-[#ffb000] text-sm md:text-base antialiased tracking-wider",children:[St.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.14]",style:{backgroundImage:"linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.45) 50%)",backgroundSize:"100% 4px"}}),St.jsx("div",{className:"absolute inset-0 pointer-events-none bg-radial-[circle_at_center,transparent_50%,rgba(0,0,0,0.5)_100%]"}),c>.05&&St.jsx("div",{className:"absolute left-0 right-0 h-4 bg-white/20 mix-blend-difference blur-[1px] opacity-40 pointer-events-none",style:{top:`${(Math.random()*100).toFixed(1)}%`,transform:`scaleY(${1+Math.random()*2})`,filter:`hue-rotate(${Math.random()*360}deg)`}}),St.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.06]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}),St.jsx("div",{className:"flex justify-between items-start w-full",children:St.jsxs("div",{className:"flex flex-col gap-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]",children:[St.jsxs("div",{className:"flex items-center gap-2",children:[St.jsx("span",{className:`w-3 h-3 rounded-full bg-red-600 ${h?"opacity-100":"opacity-30"}`}),St.jsx("span",{className:"text-red-500 font-bold",children:"REC"})]}),St.jsxs("div",{className:"text-xs text-white/60",children:["TAPE 01:"," ",(()=>{const _=new Date,S=String(_.getMonth()+1).padStart(2,"0"),g=String(_.getDate()).padStart(2,"0"),y=String(_.getFullYear()).slice(-2);return`${S}/${g}/${y}`})()]})]})}),St.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none"}),(t==="PLAYING"||t==="INTRO"||t==="SCARED")&&St.jsxs("div",{className:"absolute top-[env(safe-area-inset-top,1.5rem)] left-[env(safe-area-inset-left,1.5rem)] right-[env(safe-area-inset-right,1.5rem)] md:static md:mt-auto flex flex-row justify-between items-start md:items-end w-auto gap-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] z-10 pointer-events-none",children:[St.jsx("div",{className:"flex flex-col gap-1.5 items-start",children:St.jsxs("div",{className:"flex items-center gap-2",children:[St.jsx("span",{className:"text-[10px] md:text-xs text-white/70 w-12 md:w-16 tracking-widest",children:"STAMINA"}),St.jsxs("div",{className:"w-24 md:w-48 h-2 md:h-3 bg-black/60 border border-white/20 p-0.5 rounded-sm overflow-hidden relative",children:[St.jsx("div",{className:"absolute inset-0 z-10 opacity-30 pointer-events-none mix-blend-overlay",style:{backgroundImage:"repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.2) 2px, rgba(255,255,255,0.2) 4px)"}}),St.jsx("div",{className:`h-full transition-all duration-300 ease-linear relative z-0 ${r.stamina>50?"bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]":r.stamina>20?"bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]":"bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)] animate-pulse"}`,style:{width:`${Math.max(0,Math.min(100,r.stamina))}%`}})]})]})}),St.jsxs("div",{className:"flex flex-col items-end gap-1 md:gap-1.5",children:[St.jsxs("div",{className:"flex items-center gap-1.5 md:gap-2",children:[St.jsx("span",{className:"text-[10px] md:text-xs text-white/70 text-right",children:r.keysCollected>=r.keysRequired?"KEYCARD:":"FRAGMENTS:"}),St.jsx("span",{className:"text-[10px] md:text-sm text-cyan-400 font-bold font-mono",children:r.keysCollected>=r.keysRequired?"CRAFTED":`${r.keysCollected} / ${r.keysRequired}`})]}),St.jsxs("div",{className:"flex items-center gap-1.5 md:gap-2",children:[St.jsx("span",{className:"text-[10px] md:text-xs text-white/70 text-right",children:"FLASH:"}),St.jsxs("div",{className:"w-16 md:w-24 h-2 md:h-3 bg-black/60 border border-white/20 p-0.5 rounded-sm overflow-hidden relative",children:[St.jsx("div",{className:"absolute inset-0 z-10 opacity-30 pointer-events-none mix-blend-overlay",style:{backgroundImage:"repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.2) 2px, rgba(255,255,255,0.2) 4px)"}}),St.jsx("div",{className:`h-full transition-all duration-300 ease-linear relative z-0 ${r.flashReady?"bg-[#ffb000] shadow-[0_0_8px_rgba(255,176,0,0.5)]":"bg-white/30"}`,style:{width:`${Math.max(0,Math.min(100,r.flashCooldown*100))}%`}})]})]})]})]}),m&&St.jsxs("div",{className:"absolute inset-0 pointer-events-auto bg-black/90 flex flex-col items-center justify-center p-6 text-center z-30",children:[St.jsx("div",{className:"text-red-600 text-5xl md:text-7xl font-bold tracking-widest uppercase mb-4 animate-pulse select-none",style:{textShadow:"3px 3px 0px rgba(0,0,0,0.8), -3px -3px 0px rgba(0,0,0,0.8)"},children:"SIGNAL LOST"}),St.jsx("p",{className:"text-white/60 font-mono text-sm md:text-base max-w-lg mb-8 leading-relaxed",children:"Your camera feed has terminated unexpectedly. No rescue signals detected at this depth. Your trace has been erased from Level 0."}),St.jsx("button",{id:"retry-btn",onClick:i,className:"px-8 py-3 bg-red-700 hover:bg-red-600 text-white font-mono uppercase tracking-widest text-sm rounded border-2 border-red-500 cursor-pointer active:scale-95 transition-transform",children:"RETRY"})]}),d&&St.jsxs("div",{className:"absolute inset-0 pointer-events-auto bg-black/95 flex flex-col items-center justify-center p-6 text-center z-30",style:{animation:"fade-in 2s ease-in-out forwards"},children:[St.jsxs("div",{className:"text-white/60 font-mono text-xs md:text-sm max-w-lg space-y-6 mb-20 leading-relaxed uppercase tracking-[0.2em]",style:{animation:"fade-in 6s ease-in-out forwards 1.5s",opacity:0},children:[St.jsx("p",{className:"transition-all duration-1000",children:"The air feels different here."}),St.jsx("p",{className:"transition-all duration-1000 delay-500",children:"For the first time in a long while, the walls are not yellow."}),St.jsx("p",{className:"transition-all duration-1000 delay-1000",children:"Somewhere ahead, water gently echoes through the darkness."}),St.jsxs("div",{className:"pt-8 space-y-4",children:[St.jsx("p",{className:"text-white/30 italic lowercase tracking-widest",children:"You keep walking."}),St.jsx("p",{className:"text-red-700 font-bold tracking-[0.5em] text-lg md:text-xl",children:"You are not out."})]})]}),St.jsxs("div",{className:"flex flex-col md:flex-row gap-6 items-center justify-center",children:[St.jsx("button",{id:"continue-btn",onClick:s,className:"px-10 py-3 bg-white/10 hover:bg-white/20 text-white font-mono uppercase tracking-[0.3em] text-[10px] rounded border border-white/20 cursor-pointer active:scale-95 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]",style:{animation:"fade-in 3s ease-in-out forwards 7.5s",opacity:0},children:"CONTINUE EXPLORING"}),St.jsx("button",{id:"menu-btn",onClick:l,className:"px-10 py-3 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white/60 font-mono uppercase tracking-[0.3em] text-[10px] rounded border border-white/10 cursor-pointer active:scale-95 transition-all",style:{animation:"fade-in 3s ease-in-out forwards 8.5s",opacity:0},children:"MAIN MENU"})]})]})]})},Rv=["Where the hell am I...","What is this place?","I need to find a way out of here...."],KA=({onComplete:r})=>{const[t,i]=Ut.useState(0),[s,l]=Ut.useState(1);return Ut.useEffect(()=>{let c;return t<Rv.length?c=setTimeout(()=>{i(h=>h+1)},t===0?1e3:2500):c=setTimeout(()=>{l(0),setTimeout(()=>{r()},2e3)},2e3),()=>clearTimeout(c)},[t,r]),St.jsx("div",{className:"absolute inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity pointer-events-none",style:{opacity:s,transitionDuration:"2s",transitionTimingFunction:"ease-in-out"},children:St.jsx("div",{className:"flex flex-col items-center justify-center gap-8 font-mono text-white text-sm md:text-base uppercase tracking-[0.2em] px-8 text-center leading-relaxed",children:Rv.map((c,h)=>St.jsx("div",{className:"transition-opacity duration-1000 ease-in-out",style:{opacity:h<t?1:0},children:c},h))})})};function QA(){const[r,t]=Ut.useState("MENU"),[i,s]=Ut.useState({sensitivity:1.5,soundVolume:.5,lowResMode:!0,difficulty:"NORMAL"}),[l,c]=Ut.useState({health:100,stamina:100,flashReady:!0,flashCooldown:1,keysCollected:0,keysRequired:3}),[h,p]=Ut.useState(0),[m,d]=Ut.useState(0),_=x=>{s(x),c({health:100,stamina:100,flashReady:!0,flashCooldown:1,keysCollected:0,keysRequired:3}),p(0),t("INTRO"),d(v=>v+1)},S=()=>{t("PLAYING")},g=()=>{_(i)},y=()=>{c({health:100,stamina:100,flashReady:!0,flashCooldown:1,keysCollected:0,keysRequired:3}),p(0),t("PLAYING"),d(x=>x+1)},T=()=>{t("MENU")},A=x=>{p(x)};return St.jsx("main",{className:"w-screen h-screen bg-[#0a0a05] text-white overflow-hidden relative font-mono select-none flex items-center justify-center",children:r==="MENU"?St.jsx(AM,{onStartGame:_}):St.jsxs("div",{className:"relative aspect-[5/3] w-full max-w-full max-h-full bg-black overflow-hidden shadow-2xl",children:[(r==="INTRO"||r==="PLAYING"||r==="GAMEOVER"||r==="ESCAPED"||r==="SCARED")&&St.jsx(jA,{settings:i,gameState:r,setGameState:t,playerStats:l,setPlayerStats:c,onUpdateNoise:A},`canvas-${m}`),(r==="INTRO"||r==="PLAYING"||r==="SCARED"||r==="ESCAPED"||r==="GAMEOVER")&&St.jsx(ZA,{playerStats:l,gameState:r,onRestart:y,onContinue:g,onMainMenu:T,noiseIntensity:h},`overlay-${m}`),r==="INTRO"&&St.jsx(KA,{onComplete:S},`intro-${m}`)]})})}eM.createRoot(document.getElementById("root")).render(St.jsx(Ut.StrictMode,{children:St.jsx(QA,{})}));

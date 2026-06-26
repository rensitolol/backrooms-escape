(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var gh={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function qS(){if(Xg)return al;Xg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return al.Fragment=t,al.jsx=i,al.jsxs=i,al}var qg;function WS(){return qg||(qg=1,gh.exports=qS()),gh.exports}var St=WS(),_h={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function YS(){if(Wg)return de;Wg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function S(z,Q,xt){this.props=z,this.context=Q,this.refs=M,this.updater=xt||b}S.prototype.isReactComponent={},S.prototype.setState=function(z,Q){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,Q,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function C(){}C.prototype=S.prototype;function N(z,Q,xt){this.props=z,this.context=Q,this.refs=M,this.updater=xt||b}var L=N.prototype=new C;L.constructor=N,A(L,S.prototype),L.isPureReactComponent=!0;var H=Array.isArray;function U(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function P(z,Q,xt){var Dt=xt.ref;return{$$typeof:o,type:z,key:Q,ref:Dt!==void 0?Dt:null,props:xt}}function Y(z,Q){return P(z.type,Q,z.props)}function F(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function j(z){var Q={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(xt){return Q[xt]})}var ot=/\/+/g;function st(z,Q){return typeof z=="object"&&z!==null&&z.key!=null?j(""+z.key):Q.toString(36)}function X(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(U,U):(z.status="pending",z.then(function(Q){z.status==="pending"&&(z.status="fulfilled",z.value=Q)},function(Q){z.status==="pending"&&(z.status="rejected",z.reason=Q)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function O(z,Q,xt,Dt,Pt){var lt=typeof z;(lt==="undefined"||lt==="boolean")&&(z=null);var bt=!1;if(z===null)bt=!0;else switch(lt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(z.$$typeof){case o:case t:bt=!0;break;case _:return bt=z._init,O(bt(z._payload),Q,xt,Dt,Pt)}}if(bt)return Pt=Pt(z),bt=Dt===""?"."+st(z,0):Dt,H(Pt)?(xt="",bt!=null&&(xt=bt.replace(ot,"$&/")+"/"),O(Pt,Q,xt,"",function(se){return se})):Pt!=null&&(F(Pt)&&(Pt=Y(Pt,xt+(Pt.key==null||z&&z.key===Pt.key?"":(""+Pt.key).replace(ot,"$&/")+"/")+bt)),Q.push(Pt)),1;bt=0;var wt=Dt===""?".":Dt+":";if(H(z))for(var Yt=0;Yt<z.length;Yt++)Dt=z[Yt],lt=wt+st(Dt,Yt),bt+=O(Dt,Q,xt,lt,Pt);else if(Yt=y(z),typeof Yt=="function")for(z=Yt.call(z),Yt=0;!(Dt=z.next()).done;)Dt=Dt.value,lt=wt+st(Dt,Yt++),bt+=O(Dt,Q,xt,lt,Pt);else if(lt==="object"){if(typeof z.then=="function")return O(X(z),Q,xt,Dt,Pt);throw Q=String(z),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return bt}function B(z,Q,xt){if(z==null)return z;var Dt=[],Pt=0;return O(z,Dt,"","",function(lt){return Q.call(xt,lt,Pt++)}),Dt}function at(z){if(z._status===-1){var Q=z._result;Q=Q(),Q.then(function(xt){(z._status===0||z._status===-1)&&(z._status=1,z._result=xt)},function(xt){(z._status===0||z._status===-1)&&(z._status=2,z._result=xt)}),z._status===-1&&(z._status=0,z._result=Q)}if(z._status===1)return z._result.default;throw z._result}var mt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},yt={map:B,forEach:function(z,Q,xt){B(z,function(){Q.apply(this,arguments)},xt)},count:function(z){var Q=0;return B(z,function(){Q++}),Q},toArray:function(z){return B(z,function(Q){return Q})||[]},only:function(z){if(!F(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return de.Activity=v,de.Children=yt,de.Component=S,de.Fragment=i,de.Profiler=l,de.PureComponent=N,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,de.__COMPILER_RUNTIME={__proto__:null,c:function(z){return I.H.useMemoCache(z)}},de.cache=function(z){return function(){return z.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(z,Q,xt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Dt=A({},z.props),Pt=z.key;if(Q!=null)for(lt in Q.key!==void 0&&(Pt=""+Q.key),Q)!T.call(Q,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&Q.ref===void 0||(Dt[lt]=Q[lt]);var lt=arguments.length-2;if(lt===1)Dt.children=xt;else if(1<lt){for(var bt=Array(lt),wt=0;wt<lt;wt++)bt[wt]=arguments[wt+2];Dt.children=bt}return P(z.type,Pt,Dt)},de.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},de.createElement=function(z,Q,xt){var Dt,Pt={},lt=null;if(Q!=null)for(Dt in Q.key!==void 0&&(lt=""+Q.key),Q)T.call(Q,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(Pt[Dt]=Q[Dt]);var bt=arguments.length-2;if(bt===1)Pt.children=xt;else if(1<bt){for(var wt=Array(bt),Yt=0;Yt<bt;Yt++)wt[Yt]=arguments[Yt+2];Pt.children=wt}if(z&&z.defaultProps)for(Dt in bt=z.defaultProps,bt)Pt[Dt]===void 0&&(Pt[Dt]=bt[Dt]);return P(z,lt,Pt)},de.createRef=function(){return{current:null}},de.forwardRef=function(z){return{$$typeof:p,render:z}},de.isValidElement=F,de.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:at}},de.memo=function(z,Q){return{$$typeof:d,type:z,compare:Q===void 0?null:Q}},de.startTransition=function(z){var Q=I.T,xt={};I.T=xt;try{var Dt=z(),Pt=I.S;Pt!==null&&Pt(xt,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(U,mt)}catch(lt){mt(lt)}finally{Q!==null&&xt.types!==null&&(Q.types=xt.types),I.T=Q}},de.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},de.use=function(z){return I.H.use(z)},de.useActionState=function(z,Q,xt){return I.H.useActionState(z,Q,xt)},de.useCallback=function(z,Q){return I.H.useCallback(z,Q)},de.useContext=function(z){return I.H.useContext(z)},de.useDebugValue=function(){},de.useDeferredValue=function(z,Q){return I.H.useDeferredValue(z,Q)},de.useEffect=function(z,Q){return I.H.useEffect(z,Q)},de.useEffectEvent=function(z){return I.H.useEffectEvent(z)},de.useId=function(){return I.H.useId()},de.useImperativeHandle=function(z,Q,xt){return I.H.useImperativeHandle(z,Q,xt)},de.useInsertionEffect=function(z,Q){return I.H.useInsertionEffect(z,Q)},de.useLayoutEffect=function(z,Q){return I.H.useLayoutEffect(z,Q)},de.useMemo=function(z,Q){return I.H.useMemo(z,Q)},de.useOptimistic=function(z,Q){return I.H.useOptimistic(z,Q)},de.useReducer=function(z,Q,xt){return I.H.useReducer(z,Q,xt)},de.useRef=function(z){return I.H.useRef(z)},de.useState=function(z){return I.H.useState(z)},de.useSyncExternalStore=function(z,Q,xt){return I.H.useSyncExternalStore(z,Q,xt)},de.useTransition=function(){return I.H.useTransition()},de.version="19.2.7",de}var Yg;function Kd(){return Yg||(Yg=1,_h.exports=YS()),_h.exports}var $t=Kd(),vh={exports:{}},sl={},xh={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function jS(){return jg||(jg=1,(function(o){function t(O,B){var at=O.length;O.push(B);t:for(;0<at;){var mt=at-1>>>1,yt=O[mt];if(0<l(yt,B))O[mt]=B,O[at]=yt,at=mt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var B=O[0],at=O.pop();if(at!==B){O[0]=at;t:for(var mt=0,yt=O.length,z=yt>>>1;mt<z;){var Q=2*(mt+1)-1,xt=O[Q],Dt=Q+1,Pt=O[Dt];if(0>l(xt,at))Dt<yt&&0>l(Pt,xt)?(O[mt]=Pt,O[Dt]=at,mt=Dt):(O[mt]=xt,O[Q]=at,mt=Q);else if(Dt<yt&&0>l(Pt,at))O[mt]=Pt,O[Dt]=at,mt=Dt;else break t}}return B}function l(O,B){var at=O.sortIndex-B.sortIndex;return at!==0?at:O.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],_=1,v=null,g=3,y=!1,b=!1,A=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var B=i(d);B!==null;){if(B.callback===null)s(d);else if(B.startTime<=O)s(d),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(d)}}function H(O){if(A=!1,L(O),!b)if(i(m)!==null)b=!0,U||(U=!0,j());else{var B=i(d);B!==null&&X(H,B.startTime-O)}}var U=!1,I=-1,T=5,P=-1;function Y(){return M?!0:!(o.unstable_now()-P<T)}function F(){if(M=!1,U){var O=o.unstable_now();P=O;var B=!0;try{t:{b=!1,A&&(A=!1,C(I),I=-1),y=!0;var at=g;try{e:{for(L(O),v=i(m);v!==null&&!(v.expirationTime>O&&Y());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,g=v.priorityLevel;var yt=mt(v.expirationTime<=O);if(O=o.unstable_now(),typeof yt=="function"){v.callback=yt,L(O),B=!0;break e}v===i(m)&&s(m),L(O)}else s(m);v=i(m)}if(v!==null)B=!0;else{var z=i(d);z!==null&&X(H,z.startTime-O),B=!1}}break t}finally{v=null,g=at,y=!1}B=void 0}}finally{B?j():U=!1}}}var j;if(typeof N=="function")j=function(){N(F)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,st=ot.port2;ot.port1.onmessage=F,j=function(){st.postMessage(null)}}else j=function(){S(F,0)};function X(O,B){I=S(function(){O(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(O){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var at=g;g=B;try{return O()}finally{g=at}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var at=g;g=O;try{return B()}finally{g=at}},o.unstable_scheduleCallback=function(O,B,at){var mt=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?mt+at:mt):at=mt,O){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=at+yt,O={id:_++,callback:B,priorityLevel:O,startTime:at,expirationTime:yt,sortIndex:-1},at>mt?(O.sortIndex=at,t(d,O),i(m)===null&&O===i(d)&&(A?(C(I),I=-1):A=!0,X(H,at-mt))):(O.sortIndex=yt,t(m,O),b||y||(b=!0,U||(U=!0,j()))),O},o.unstable_shouldYield=Y,o.unstable_wrapCallback=function(O){var B=g;return function(){var at=g;g=B;try{return O.apply(this,arguments)}finally{g=at}}}})(Sh)),Sh}var Zg;function ZS(){return Zg||(Zg=1,xh.exports=jS()),xh.exports}var Mh={exports:{}},ti={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function KS(){if(Kg)return ti;Kg=1;var o=Kd();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:d,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return ti.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ti.createPortal=function(m,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,_)},ti.flushSync=function(m){var d=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=_,s.d.f()}},ti.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},ti.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},ti.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var _=d.as,v=p(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},ti.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},ti.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=p(_,d.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},ti.preloadModule=function(m,d){if(typeof m=="string")if(d){var _=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},ti.requestFormReset=function(m){s.d.r(m)},ti.unstable_batchedUpdates=function(m,d){return m(d)},ti.useFormState=function(m,d,_){return h.H.useFormState(m,d,_)},ti.useFormStatus=function(){return h.H.useHostTransitionStatus()},ti.version="19.2.7",ti}var Qg;function QS(){if(Qg)return Mh.exports;Qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Mh.exports=KS(),Mh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function JS(){if(Jg)return sl;Jg=1;var o=ZS(),t=Kd(),i=QS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var x=!1,w=u.child;w;){if(w===a){x=!0,a=u,r=f;break}if(w===r){x=!0,r=u,a=f;break}w=w.sibling}if(!x){for(w=f.child;w;){if(w===a){x=!0,a=f,r=u;break}if(w===r){x=!0,r=f,a=u;break}w=w.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case U:return"SuspenseList";case P:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:st(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return st(e(n))}catch{}}return null}var X=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},mt=[],yt=-1;function z(e){return{current:e}}function Q(e){0>yt||(e.current=mt[yt],mt[yt]=null,yt--)}function xt(e,n){yt++,mt[yt]=e.current,e.current=n}var Dt=z(null),Pt=z(null),lt=z(null),bt=z(null);function wt(e,n){switch(xt(lt,n),xt(Pt,e),xt(Dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?dg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=dg(n),e=pg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(Dt),xt(Dt,e)}function Yt(){Q(Dt),Q(Pt),Q(lt)}function se(e){e.memoizedState!==null&&xt(bt,e);var n=Dt.current,a=pg(n,e.type);n!==a&&(xt(Pt,e),xt(Dt,a))}function te(e){Pt.current===e&&(Q(Dt),Q(Pt)),bt.current===e&&(Q(bt),tl._currentValue=at)}var je,xe;function Re(e){if(je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);je=n&&n[1]||"",xe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+je+e+xe}var Ge=!1;function ce(e,n){if(!e||Ge)return"";Ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var rt=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){rt=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){rt=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&rt&&typeof ct.stack=="string")return[ct.stack,rt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],w=f[1];if(x&&w){var G=x.split(`
`),nt=w.split(`
`);for(u=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(r===G.length||u===nt.length)for(r=G.length-1,u=nt.length-1;1<=r&&0<=u&&G[r]!==nt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(G[r]!==nt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||G[r]!==nt[u]){var pt=`
`+G[r].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=r&&0<=u);break}}}finally{Ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Re(a):""}function _n(e,n){switch(e.tag){case 26:case 27:case 5:return Re(e.type);case 16:return Re("Lazy");case 13:return e.child!==n&&n!==null?Re("Suspense Fallback"):Re("Suspense");case 19:return Re("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Re("Activity");default:return""}}function $e(e){try{var n="",a=null;do n+=_n(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var On=Object.prototype.hasOwnProperty,V=o.unstable_scheduleCallback,Gt=o.unstable_cancelCallback,Ut=o.unstable_shouldYield,ie=o.unstable_requestPaint,Tt=o.unstable_now,Ae=o.unstable_getCurrentPriorityLevel,D=o.unstable_ImmediatePriority,E=o.unstable_UserBlockingPriority,J=o.unstable_NormalPriority,gt=o.unstable_LowPriority,At=o.unstable_IdlePriority,Nt=o.log,It=o.unstable_setDisableYieldValue,ut=null,ht=null;function Bt(e){if(typeof Nt=="function"&&It(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ut,e)}catch{}}var Ft=Math.clz32?Math.clz32:jt,Lt=Math.log,Ot=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(Lt(e)/Ot|0)|0}var re=256,Se=262144,k=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var w=r&134217727;return w!==0?(r=w&~f,r!==0?u=Ct(r):(x&=w,x!==0?u=Ct(x):a||(a=w&~e,a!==0&&(u=Ct(a))))):(w=r&~f,w!==0?u=Ct(w):x!==0?u=Ct(x):a||(a=r&~e,a!==0&&(u=Ct(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function zt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var e=k;return k<<=1,(k&62914560)===0&&(k=4194304),e}function Kt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function oe(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function on(e,n,a,r,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,G=e.expirationTimes,nt=e.hiddenUpdates;for(a=x&~a;0<a;){var pt=31-Ft(a),vt=1<<pt;w[pt]=0,G[pt]=-1;var rt=nt[pt];if(rt!==null)for(nt[pt]=null,pt=0;pt<rt.length;pt++){var ct=rt[pt];ct!==null&&(ct.lane&=-536870913)}a&=~vt}r!==0&&Be(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Be(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ft(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function ri(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ft(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Qn(e,n){var a=n&-n;return a=(a&42)!==0?1:sa(a),(a&(e.suspendedLanes|n))!==0?0:a}function sa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function as(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function vr(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Ig(e.type))}function ss(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var Bn=Math.random().toString(36).slice(2),pn="__reactFiber$"+Bn,Rn="__reactProps$"+Bn,Pi="__reactContainer$"+Bn,ji="__reactEvents$"+Bn,Gs="__reactListeners$"+Bn,ra="__reactHandles$"+Bn,wa="__reactResources$"+Bn,Zi="__reactMarker$"+Bn;function zi(e){delete e[pn],delete e[Rn],delete e[ji],delete e[Gs],delete e[ra]}function oa(e){var n=e[pn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[pn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Mg(e);e!==null;){if(a=e[pn])return a;e=Mg(e)}return n}e=a,a=e.parentNode}return null}function ui(e){if(e=e[pn]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ca(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function la(e){var n=e[wa];return n||(n=e[wa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(e){e[Zi]=!0}var Da=new Set,R={};function W(e,n){it(e,n),it(e+"Capture",n)}function it(e,n){for(R[e]=n,e=0;e<n.length;e++)Da.add(n[e])}var $=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},kt={};function Zt(e){return On.call(kt,e)?!0:On.call(tt,e)?!1:$.test(e)?kt[e]=!0:(tt[e]=!0,!1)}function ft(e,n,a){if(Zt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Mt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Rt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fe(e){if(!e._valueTracker){var n=Jt(e)?"checked":"value";e._valueTracker=Xt(e,n,""+e[n])}}function pe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Jt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function we(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var he=/[\n"\\]/g;function me(e){return e.replace(he,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function qt(e,n,a,r,u,f,x,w){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Vt(n)):e.value!==""+Vt(n)&&(e.value=""+Vt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?_e(e,x,Vt(n)):a!=null?_e(e,x,Vt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Vt(w):e.removeAttribute("name")}function wn(e,n,a,r,u,f,x,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){fe(e);return}a=a!=null?""+Vt(a):"",n=n!=null?""+Vt(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=w?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),fe(e)}function _e(e,n,a){n==="number"&&we(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function mn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Vt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fn(e,n,a){if(n!=null&&(n=""+Vt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Vt(a):""}function Jn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(X(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Vt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),fe(e)}function Vn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var qe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ln(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||qe.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ei(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&ln(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&ln(e,f,n[f])}function Le(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rs(e){return ca.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Me(){}var We=null;function ne(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,hi=null;function xn(e){var n=ui(e);if(n&&(e=n.stateNode)){var a=e[Rn]||null;t:switch(e=n.stateNode,n.type){case"input":if(qt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+me(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[Rn]||null;if(!u)throw Error(s(90));qt(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&pe(r)}break t;case"textarea":Fn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&mn(e,!!a.multiple,n,!1)}}}var $n=!1;function Ki(e,n,a){if($n)return e(n,a);$n=!0;try{var r=e(n);return r}finally{if($n=!1,(fn!==null||hi!==null)&&(sc(),fn&&(n=fn,e=hi,hi=fn=null,xn(n),e)))for(n=0;n<e.length;n++)xn(e[n])}}function di(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Rn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),He=!1;if(Xn)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){He=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{He=!1}var tn=null,ye=null,Ze=null;function bi(){if(Ze)return Ze;var e,n=ye,a=n.length,r,u="value"in tn?tn.value:tn.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===u[f-r];r++);return Ze=u.slice(e,1<r?1-r:void 0)}function ua(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fa(){return!0}function os(){return!1}function vn(e){function n(a,r,u,f,x){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fa:os,this.isPropagationStopped=os,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),n}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vo=vn(pi),xo=v({},pi,{view:0,detail:0}),kv=vn(xo),_u,vu,So,El=v({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==So&&(So&&e.type==="mousemove"?(_u=e.screenX-So.screenX,vu=e.screenY-So.screenY):vu=_u=0,So=e),_u)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),gp=vn(El),Xv=v({},El,{dataTransfer:0}),qv=vn(Xv),Wv=v({},xo,{relatedTarget:0}),xu=vn(Wv),Yv=v({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=vn(Yv),Zv=v({},pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kv=vn(Zv),Qv=v({},pi,{data:0}),_p=vn(Qv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tx[e])?!!n[e]:!1}function Su(){return ex}var nx=v({},xo,{key:function(e){if(e.key){var n=Jv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ua(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$v[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(e){return e.type==="keypress"?ua(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ua(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ix=vn(nx),ax=v({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=vn(ax),sx=v({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),rx=vn(sx),ox=v({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=vn(ox),cx=v({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=vn(cx),fx=v({},pi,{newState:0,oldState:0}),hx=vn(fx),dx=[9,13,27,32],Mu=Xn&&"CompositionEvent"in window,Mo=null;Xn&&"documentMode"in document&&(Mo=document.documentMode);var px=Xn&&"TextEvent"in window&&!Mo,xp=Xn&&(!Mu||Mo&&8<Mo&&11>=Mo),Sp=" ",Mp=!1;function yp(e,n){switch(e){case"keyup":return dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function mx(e,n){switch(e){case"compositionend":return Ep(n);case"keypress":return n.which!==32?null:(Mp=!0,Sp);case"textInput":return e=n.data,e===Sp&&Mp?null:e;default:return null}}function gx(e,n){if(xr)return e==="compositionend"||!Mu&&yp(e,n)?(e=bi(),Ze=ye=tn=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xp&&n.locale!=="ko"?null:n.data;default:return null}}var _x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!_x[e.type]:n==="textarea"}function Tp(e,n,a,r){fn?hi?hi.push(r):hi=[r]:fn=r,n=hc(n,"onChange"),0<n.length&&(a=new vo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var yo=null,Eo=null;function vx(e){og(e,0)}function bl(e){var n=Ca(e);if(pe(n))return e}function Ap(e,n){if(e==="change")return n}var Rp=!1;if(Xn){var yu;if(Xn){var Eu="oninput"in document;if(!Eu){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),Eu=typeof wp.oninput=="function"}yu=Eu}else yu=!1;Rp=yu&&(!document.documentMode||9<document.documentMode)}function Cp(){yo&&(yo.detachEvent("onpropertychange",Dp),Eo=yo=null)}function Dp(e){if(e.propertyName==="value"&&bl(Eo)){var n=[];Tp(n,Eo,e,ne(e)),Ki(vx,n)}}function xx(e,n,a){e==="focusin"?(Cp(),yo=n,Eo=a,yo.attachEvent("onpropertychange",Dp)):e==="focusout"&&Cp()}function Sx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(Eo)}function Mx(e,n){if(e==="click")return bl(n)}function yx(e,n){if(e==="input"||e==="change")return bl(n)}function Ex(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ti=typeof Object.is=="function"?Object.is:Ex;function bo(e,n){if(Ti(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!On.call(n,u)||!Ti(e[u],n[u]))return!1}return!0}function Up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Np(e,n){var a=Up(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Up(a)}}function Lp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Lp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Op(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=we(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=we(e.document)}return n}function bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var bx=Xn&&"documentMode"in document&&11>=document.documentMode,Sr=null,Tu=null,To=null,Au=!1;function Pp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||Sr==null||Sr!==we(r)||(r=Sr,"selectionStart"in r&&bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),To&&bo(To,r)||(To=r,r=hc(Tu,"onSelect"),0<r.length&&(n=new vo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Sr)))}function Hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Mr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionrun:Hs("Transition","TransitionRun"),transitionstart:Hs("Transition","TransitionStart"),transitioncancel:Hs("Transition","TransitionCancel"),transitionend:Hs("Transition","TransitionEnd")},Ru={},zp={};Xn&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function ks(e){if(Ru[e])return Ru[e];if(!Mr[e])return e;var n=Mr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return Ru[e]=n[a];return e}var Ip=ks("animationend"),Bp=ks("animationiteration"),Fp=ks("animationstart"),Tx=ks("transitionrun"),Ax=ks("transitionstart"),Rx=ks("transitioncancel"),Vp=ks("transitionend"),Gp=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function Qi(e,n){Gp.set(e,n),W(n,[e])}var Tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ii=[],yr=0,Cu=0;function Al(){for(var e=yr,n=Cu=yr=0;n<e;){var a=Ii[n];Ii[n++]=null;var r=Ii[n];Ii[n++]=null;var u=Ii[n];Ii[n++]=null;var f=Ii[n];if(Ii[n++]=null,r!==null&&u!==null){var x=r.pending;x===null?u.next=u:(u.next=x.next,x.next=u),r.pending=u}f!==0&&Hp(a,u,f)}}function Rl(e,n,a,r){Ii[yr++]=e,Ii[yr++]=n,Ii[yr++]=a,Ii[yr++]=r,Cu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Du(e,n,a,r){return Rl(e,n,a,r),wl(e)}function Xs(e,n){return Rl(e,null,null,n),wl(e)}function Hp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function wl(e){if(50<Yo)throw Yo=0,Vf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Er={};function wx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(e,n,a,r){return new wx(e,n,a,r)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ua(e,n){var a=e.alternate;return a===null?(a=Ai(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function kp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Cl(e,n,a,r,u,f){var x=0;if(r=e,typeof e=="function")Uu(e)&&(x=1);else if(typeof e=="string")x=LS(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case P:return e=Ai(31,a,n,u),e.elementType=P,e.lanes=f,e;case A:return qs(a.children,u,f,n);case M:x=8,u|=24;break;case S:return e=Ai(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case H:return e=Ai(13,a,n,u),e.elementType=H,e.lanes=f,e;case U:return e=Ai(19,a,n,u),e.elementType=U,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:x=10;break t;case C:x=9;break t;case L:x=11;break t;case I:x=14;break t;case T:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Ai(x,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function qs(e,n,a,r){return e=Ai(7,e,r,n),e.lanes=a,e}function Nu(e,n,a){return e=Ai(6,e,null,n),e.lanes=a,e}function Xp(e){var n=Ai(18,null,null,0);return n.stateNode=e,n}function Lu(e,n,a){return n=Ai(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var qp=new WeakMap;function Bi(e,n){if(typeof e=="object"&&e!==null){var a=qp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:$e(n)},qp.set(e,n),n)}return{value:e,source:n,stack:$e(n)}}var br=[],Tr=0,Dl=null,Ao=0,Fi=[],Vi=0,ls=null,ha=1,da="";function Na(e,n){br[Tr++]=Ao,br[Tr++]=Dl,Dl=e,Ao=n}function Wp(e,n,a){Fi[Vi++]=ha,Fi[Vi++]=da,Fi[Vi++]=ls,ls=e;var r=ha;e=da;var u=32-Ft(r)-1;r&=~(1<<u),a+=1;var f=32-Ft(n)+u;if(30<f){var x=u-u%5;f=(r&(1<<x)-1).toString(32),r>>=x,u-=x,ha=1<<32-Ft(n)+u|a<<u|r,da=f+e}else ha=1<<f|a<<u|r,da=e}function Ou(e){e.return!==null&&(Na(e,1),Wp(e,1,0))}function Pu(e){for(;e===Dl;)Dl=br[--Tr],br[Tr]=null,Ao=br[--Tr],br[Tr]=null;for(;e===ls;)ls=Fi[--Vi],Fi[Vi]=null,da=Fi[--Vi],Fi[Vi]=null,ha=Fi[--Vi],Fi[Vi]=null}function Yp(e,n){Fi[Vi++]=ha,Fi[Vi++]=da,Fi[Vi++]=ls,ha=n.id,da=n.overflow,ls=e}var qn=null,hn=null,Oe=!1,cs=null,Gi=!1,zu=Error(s(519));function us(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ro(Bi(n,e)),zu}function jp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[pn]=e,n[Rn]=r,a){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(a=0;a<Zo.length;a++)De(Zo[a],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":De("invalid",n),wn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":De("invalid",n);break;case"textarea":De("invalid",n),Jn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||fg(n.textContent,a)?(r.popover!=null&&(De("beforetoggle",n),De("toggle",n)),r.onScroll!=null&&De("scroll",n),r.onScrollEnd!=null&&De("scrollend",n),r.onClick!=null&&(n.onclick=Me),n=!0):n=!1,n||us(e,!0)}function Zp(e){for(qn=e.return;qn;)switch(qn.tag){case 5:case 31:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:qn=qn.return}}function Ar(e){if(e!==qn)return!1;if(!Oe)return Zp(e),Oe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||eh(e.type,e.memoizedProps)),a=!a),a&&hn&&us(e),Zp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));hn=Sg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));hn=Sg(e)}else n===27?(n=hn,bs(e.type)?(e=rh,rh=null,hn=e):hn=n):hn=qn?ki(e.stateNode.nextSibling):null;return!0}function Ws(){hn=qn=null,Oe=!1}function Iu(){var e=cs;return e!==null&&(vi===null?vi=e:vi.push.apply(vi,e),cs=null),e}function Ro(e){cs===null?cs=[e]:cs.push(e)}var Bu=z(null),Ys=null,La=null;function fs(e,n,a){xt(Bu,n._currentValue),n._currentValue=a}function Oa(e){e._currentValue=Bu.current,Q(Bu)}function Fu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Vu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var w=f;f=u;for(var G=0;G<n.length;G++)if(w.context===n[G]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Fu(f.return,a,e),r||(x=null);break t}f=w.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Fu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Rr(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var w=u.type;Ti(u.pendingProps.value,x.value)||(e!==null?e.push(w):e=[w])}}else if(u===bt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(tl):e=[tl])}u=u.return}e!==null&&Vu(n,e,a,r),n.flags|=262144}function Ul(e){for(e=e.firstContext;e!==null;){if(!Ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function js(e){Ys=e,La=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Wn(e){return Kp(Ys,e)}function Nl(e,n){return Ys===null&&js(e),Kp(e,n)}function Kp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},La===null){if(e===null)throw Error(s(308));La=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else La=La.next=n;return a}var Cx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Dx=o.unstable_scheduleCallback,Ux=o.unstable_NormalPriority,Cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new Cx,data:new Map,refCount:0}}function wo(e){e.refCount--,e.refCount===0&&Dx(Ux,function(){e.controller.abort()})}var Co=null,Hu=0,wr=0,Cr=null;function Nx(e,n){if(Co===null){var a=Co=[];Hu=0,wr=Wf(),Cr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Hu++,n.then(Qp,Qp),n}function Qp(){if(--Hu===0&&Co!==null){Cr!==null&&(Cr.status="fulfilled");var e=Co;Co=null,wr=0,Cr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Lx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Jp=O.S;O.S=function(e,n){P0=Tt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Nx(e,n),Jp!==null&&Jp(e,n)};var Zs=z(null);function ku(){var e=Zs.current;return e!==null?e:sn.pooledCache}function Ll(e,n){n===null?xt(Zs,Zs.current):xt(Zs,n.pool)}function $p(){var e=ku();return e===null?null:{parent:Cn._currentValue,pool:e}}var Dr=Error(s(460)),Xu=Error(s(474)),Ol=Error(s(542)),Pl={then:function(){}};function tm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function em(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Me,Me),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,im(e),e;default:if(typeof n.status=="string")n.then(Me,Me);else{if(e=sn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,im(e),e}throw Qs=n,Dr}}function Ks(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qs=a,Dr):a}}var Qs=null;function nm(){if(Qs===null)throw Error(s(459));var e=Qs;return Qs=null,e}function im(e){if(e===Dr||e===Ol)throw Error(s(483))}var Ur=null,Do=0;function zl(e){var n=Do;return Do+=1,Ur===null&&(Ur=[]),em(Ur,e,n)}function Uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Il(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function am(e){function n(Z,q){if(e){var et=Z.deletions;et===null?(Z.deletions=[q],Z.flags|=16):et.push(q)}}function a(Z,q){if(!e)return null;for(;q!==null;)n(Z,q),q=q.sibling;return null}function r(Z){for(var q=new Map;Z!==null;)Z.key!==null?q.set(Z.key,Z):q.set(Z.index,Z),Z=Z.sibling;return q}function u(Z,q){return Z=Ua(Z,q),Z.index=0,Z.sibling=null,Z}function f(Z,q,et){return Z.index=et,e?(et=Z.alternate,et!==null?(et=et.index,et<q?(Z.flags|=67108866,q):et):(Z.flags|=67108866,q)):(Z.flags|=1048576,q)}function x(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function w(Z,q,et,_t){return q===null||q.tag!==6?(q=Nu(et,Z.mode,_t),q.return=Z,q):(q=u(q,et),q.return=Z,q)}function G(Z,q,et,_t){var ae=et.type;return ae===A?pt(Z,q,et.props.children,_t,et.key):q!==null&&(q.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===T&&Ks(ae)===q.type)?(q=u(q,et.props),Uo(q,et),q.return=Z,q):(q=Cl(et.type,et.key,et.props,null,Z.mode,_t),Uo(q,et),q.return=Z,q)}function nt(Z,q,et,_t){return q===null||q.tag!==4||q.stateNode.containerInfo!==et.containerInfo||q.stateNode.implementation!==et.implementation?(q=Lu(et,Z.mode,_t),q.return=Z,q):(q=u(q,et.children||[]),q.return=Z,q)}function pt(Z,q,et,_t,ae){return q===null||q.tag!==7?(q=qs(et,Z.mode,_t,ae),q.return=Z,q):(q=u(q,et),q.return=Z,q)}function vt(Z,q,et){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Nu(""+q,Z.mode,et),q.return=Z,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case y:return et=Cl(q.type,q.key,q.props,null,Z.mode,et),Uo(et,q),et.return=Z,et;case b:return q=Lu(q,Z.mode,et),q.return=Z,q;case T:return q=Ks(q),vt(Z,q,et)}if(X(q)||j(q))return q=qs(q,Z.mode,et,null),q.return=Z,q;if(typeof q.then=="function")return vt(Z,zl(q),et);if(q.$$typeof===N)return vt(Z,Nl(Z,q),et);Il(Z,q)}return null}function rt(Z,q,et,_t){var ae=q!==null?q.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ae!==null?null:w(Z,q,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===ae?G(Z,q,et,_t):null;case b:return et.key===ae?nt(Z,q,et,_t):null;case T:return et=Ks(et),rt(Z,q,et,_t)}if(X(et)||j(et))return ae!==null?null:pt(Z,q,et,_t,null);if(typeof et.then=="function")return rt(Z,q,zl(et),_t);if(et.$$typeof===N)return rt(Z,q,Nl(Z,et),_t);Il(Z,et)}return null}function ct(Z,q,et,_t,ae){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get(et)||null,w(q,Z,""+_t,ae);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return Z=Z.get(_t.key===null?et:_t.key)||null,G(q,Z,_t,ae);case b:return Z=Z.get(_t.key===null?et:_t.key)||null,nt(q,Z,_t,ae);case T:return _t=Ks(_t),ct(Z,q,et,_t,ae)}if(X(_t)||j(_t))return Z=Z.get(et)||null,pt(q,Z,_t,ae,null);if(typeof _t.then=="function")return ct(Z,q,et,zl(_t),ae);if(_t.$$typeof===N)return ct(Z,q,et,Nl(q,_t),ae);Il(q,_t)}return null}function Qt(Z,q,et,_t){for(var ae=null,ke=null,ee=q,Ee=q=0,Ne=null;ee!==null&&Ee<et.length;Ee++){ee.index>Ee?(Ne=ee,ee=null):Ne=ee.sibling;var Xe=rt(Z,ee,et[Ee],_t);if(Xe===null){ee===null&&(ee=Ne);break}e&&ee&&Xe.alternate===null&&n(Z,ee),q=f(Xe,q,Ee),ke===null?ae=Xe:ke.sibling=Xe,ke=Xe,ee=Ne}if(Ee===et.length)return a(Z,ee),Oe&&Na(Z,Ee),ae;if(ee===null){for(;Ee<et.length;Ee++)ee=vt(Z,et[Ee],_t),ee!==null&&(q=f(ee,q,Ee),ke===null?ae=ee:ke.sibling=ee,ke=ee);return Oe&&Na(Z,Ee),ae}for(ee=r(ee);Ee<et.length;Ee++)Ne=ct(ee,Z,Ee,et[Ee],_t),Ne!==null&&(e&&Ne.alternate!==null&&ee.delete(Ne.key===null?Ee:Ne.key),q=f(Ne,q,Ee),ke===null?ae=Ne:ke.sibling=Ne,ke=Ne);return e&&ee.forEach(function(Cs){return n(Z,Cs)}),Oe&&Na(Z,Ee),ae}function le(Z,q,et,_t){if(et==null)throw Error(s(151));for(var ae=null,ke=null,ee=q,Ee=q=0,Ne=null,Xe=et.next();ee!==null&&!Xe.done;Ee++,Xe=et.next()){ee.index>Ee?(Ne=ee,ee=null):Ne=ee.sibling;var Cs=rt(Z,ee,Xe.value,_t);if(Cs===null){ee===null&&(ee=Ne);break}e&&ee&&Cs.alternate===null&&n(Z,ee),q=f(Cs,q,Ee),ke===null?ae=Cs:ke.sibling=Cs,ke=Cs,ee=Ne}if(Xe.done)return a(Z,ee),Oe&&Na(Z,Ee),ae;if(ee===null){for(;!Xe.done;Ee++,Xe=et.next())Xe=vt(Z,Xe.value,_t),Xe!==null&&(q=f(Xe,q,Ee),ke===null?ae=Xe:ke.sibling=Xe,ke=Xe);return Oe&&Na(Z,Ee),ae}for(ee=r(ee);!Xe.done;Ee++,Xe=et.next())Xe=ct(ee,Z,Ee,Xe.value,_t),Xe!==null&&(e&&Xe.alternate!==null&&ee.delete(Xe.key===null?Ee:Xe.key),q=f(Xe,q,Ee),ke===null?ae=Xe:ke.sibling=Xe,ke=Xe);return e&&ee.forEach(function(XS){return n(Z,XS)}),Oe&&Na(Z,Ee),ae}function an(Z,q,et,_t){if(typeof et=="object"&&et!==null&&et.type===A&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var ae=et.key;q!==null;){if(q.key===ae){if(ae=et.type,ae===A){if(q.tag===7){a(Z,q.sibling),_t=u(q,et.props.children),_t.return=Z,Z=_t;break t}}else if(q.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===T&&Ks(ae)===q.type){a(Z,q.sibling),_t=u(q,et.props),Uo(_t,et),_t.return=Z,Z=_t;break t}a(Z,q);break}else n(Z,q);q=q.sibling}et.type===A?(_t=qs(et.props.children,Z.mode,_t,et.key),_t.return=Z,Z=_t):(_t=Cl(et.type,et.key,et.props,null,Z.mode,_t),Uo(_t,et),_t.return=Z,Z=_t)}return x(Z);case b:t:{for(ae=et.key;q!==null;){if(q.key===ae)if(q.tag===4&&q.stateNode.containerInfo===et.containerInfo&&q.stateNode.implementation===et.implementation){a(Z,q.sibling),_t=u(q,et.children||[]),_t.return=Z,Z=_t;break t}else{a(Z,q);break}else n(Z,q);q=q.sibling}_t=Lu(et,Z.mode,_t),_t.return=Z,Z=_t}return x(Z);case T:return et=Ks(et),an(Z,q,et,_t)}if(X(et))return Qt(Z,q,et,_t);if(j(et)){if(ae=j(et),typeof ae!="function")throw Error(s(150));return et=ae.call(et),le(Z,q,et,_t)}if(typeof et.then=="function")return an(Z,q,zl(et),_t);if(et.$$typeof===N)return an(Z,q,Nl(Z,et),_t);Il(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,q!==null&&q.tag===6?(a(Z,q.sibling),_t=u(q,et),_t.return=Z,Z=_t):(a(Z,q),_t=Nu(et,Z.mode,_t),_t.return=Z,Z=_t),x(Z)):a(Z,q)}return function(Z,q,et,_t){try{Do=0;var ae=an(Z,q,et,_t);return Ur=null,ae}catch(ee){if(ee===Dr||ee===Ol)throw ee;var ke=Ai(29,ee,null,Z.mode);return ke.lanes=_t,ke.return=Z,ke}finally{}}}var Js=am(!0),sm=am(!1),hs=!1;function qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ds(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ps(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ye&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=wl(e),Hp(e,null,a),n}return Rl(e,r,n,a),wl(e)}function No(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,ri(e,a)}}function Yu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ju=!1;function Lo(){if(ju){var e=Cr;if(e!==null)throw e}}function Oo(e,n,a,r){ju=!1;var u=e.updateQueue;hs=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var G=w,nt=G.next;G.next=null,x===null?f=nt:x.next=nt,x=G;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,w=pt.lastBaseUpdate,w!==x&&(w===null?pt.firstBaseUpdate=nt:w.next=nt,pt.lastBaseUpdate=G))}if(f!==null){var vt=u.baseState;x=0,pt=nt=G=null,w=f;do{var rt=w.lane&-536870913,ct=rt!==w.lane;if(ct?(Ue&rt)===rt:(r&rt)===rt){rt!==0&&rt===wr&&(ju=!0),pt!==null&&(pt=pt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Qt=e,le=w;rt=n;var an=a;switch(le.tag){case 1:if(Qt=le.payload,typeof Qt=="function"){vt=Qt.call(an,vt,rt);break t}vt=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=le.payload,rt=typeof Qt=="function"?Qt.call(an,vt,rt):Qt,rt==null)break t;vt=v({},vt,rt);break t;case 2:hs=!0}}rt=w.callback,rt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[rt]:ct.push(rt))}else ct={lane:rt,tag:w.tag,payload:w.payload,callback:w.callback,next:null},pt===null?(nt=pt=ct,G=vt):pt=pt.next=ct,x|=rt;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ct=w,w=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);pt===null&&(G=vt),u.baseState=G,u.firstBaseUpdate=nt,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),xs|=x,e.lanes=x,e.memoizedState=vt}}function rm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function om(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)rm(a[e],n)}var Nr=z(null),Bl=z(0);function lm(e,n){e=ka,xt(Bl,e),xt(Nr,n),ka=e|n.baseLanes}function Zu(){xt(Bl,ka),xt(Nr,Nr.current)}function Ku(){ka=Bl.current,Q(Nr),Q(Bl)}var Ri=z(null),Hi=null;function ms(e){var n=e.alternate;xt(Tn,Tn.current&1),xt(Ri,e),Hi===null&&(n===null||Nr.current!==null||n.memoizedState!==null)&&(Hi=e)}function Qu(e){xt(Tn,Tn.current),xt(Ri,e),Hi===null&&(Hi=e)}function cm(e){e.tag===22?(xt(Tn,Tn.current),xt(Ri,e),Hi===null&&(Hi=e)):gs()}function gs(){xt(Tn,Tn.current),xt(Ri,Ri.current)}function wi(e){Q(Ri),Hi===e&&(Hi=null),Q(Tn)}var Tn=z(0);function Fl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ah(a)||sh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pa=0,ve=null,en=null,Dn=null,Vl=!1,Lr=!1,$s=!1,Gl=0,Po=0,Or=null,Ox=0;function Sn(){throw Error(s(321))}function Ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Ti(e[a],n[a]))return!1;return!0}function $u(e,n,a,r,u,f){return Pa=f,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Wm:mf,$s=!1,f=a(r,u),$s=!1,Lr&&(f=fm(n,a,r,u)),um(e),f}function um(e){O.H=Bo;var n=en!==null&&en.next!==null;if(Pa=0,Dn=en=ve=null,Vl=!1,Po=0,Or=null,n)throw Error(s(300));e===null||Un||(e=e.dependencies,e!==null&&Ul(e)&&(Un=!0))}function fm(e,n,a,r){ve=e;var u=0;do{if(Lr&&(Or=null),Po=0,Lr=!1,25<=u)throw Error(s(301));if(u+=1,Dn=en=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Ym,f=n(a,r)}while(Lr);return f}function Px(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?zo(n):n,e=e.useState()[0],(en!==null?en.memoizedState:null)!==e&&(ve.flags|=1024),n}function tf(){var e=Gl!==0;return Gl=0,e}function ef(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function nf(e){if(Vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Vl=!1}Pa=0,Dn=en=ve=null,Lr=!1,Po=Gl=0,Or=null}function oi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?ve.memoizedState=Dn=e:Dn=Dn.next=e,Dn}function An(){if(en===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=en.next;var n=Dn===null?ve.memoizedState:Dn.next;if(n!==null)Dn=n,en=e;else{if(e===null)throw ve.alternate===null?Error(s(467)):Error(s(310));en=e,e={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},Dn===null?ve.memoizedState=Dn=e:Dn=Dn.next=e}return Dn}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(e){var n=Po;return Po+=1,Or===null&&(Or=[]),e=em(Or,e,n),n=ve,(Dn===null?n.memoizedState:Dn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Wm:mf),e}function kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zo(e);if(e.$$typeof===N)return Wn(e)}throw Error(s(438,String(e)))}function af(e){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ve.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hl(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Y;return n.index++,a}function za(e,n){return typeof n=="function"?n(e):n}function Xl(e){var n=An();return sf(n,en,e)}function sf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var w=x=null,G=null,nt=n,pt=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(Ue&vt)===vt:(Pa&vt)===vt){var rt=nt.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===wr&&(pt=!0);else if((Pa&rt)===rt){nt=nt.next,rt===wr&&(pt=!0);continue}else vt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(w=G=vt,x=f):G=G.next=vt,ve.lanes|=rt,xs|=rt;vt=nt.action,$s&&a(f,vt),f=nt.hasEagerState?nt.eagerState:a(f,vt)}else rt={lane:vt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(w=G=rt,x=f):G=G.next=rt,ve.lanes|=vt,xs|=vt;nt=nt.next}while(nt!==null&&nt!==n);if(G===null?x=f:G.next=w,!Ti(f,e.memoizedState)&&(Un=!0,pt&&(a=Cr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=G,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function rf(e){var n=An(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);Ti(f,n.memoizedState)||(Un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function hm(e,n,a){var r=ve,u=An(),f=Oe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Ti((en||u).memoizedState,a);if(x&&(u.memoizedState=a,Un=!0),u=u.queue,cf(mm.bind(null,r,u,e),[e]),u.getSnapshot!==n||x||Dn!==null&&Dn.memoizedState.tag&1){if(r.flags|=2048,Pr(9,{destroy:void 0},pm.bind(null,r,u,a,n),null),sn===null)throw Error(s(349));f||(Pa&127)!==0||dm(r,n,a)}return a}function dm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=Hl(),ve.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function pm(e,n,a,r){n.value=a,n.getSnapshot=r,gm(n)&&_m(e)}function mm(e,n,a){return a(function(){gm(n)&&_m(e)})}function gm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Ti(e,a)}catch{return!0}}function _m(e){var n=Xs(e,2);n!==null&&xi(n,e,2)}function of(e){var n=oi();if(typeof e=="function"){var a=e;if(e=a(),$s){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:e},n}function vm(e,n,a,r){return e.baseState=a,sf(e,en,typeof r=="function"?r:za)}function zx(e,n,a,r,u){if(Yl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,xm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function xm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var w=a(u,r),G=O.S;G!==null&&G(x,w),Sm(e,n,w)}catch(nt){lf(e,n,nt)}finally{f!==null&&x.types!==null&&(f.types=x.types),O.T=f}}else try{f=a(u,r),Sm(e,n,f)}catch(nt){lf(e,n,nt)}}function Sm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Mm(e,n,r)},function(r){return lf(e,n,r)}):Mm(e,n,a)}function Mm(e,n,a){n.status="fulfilled",n.value=a,ym(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,xm(e,a)))}function lf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,ym(n),n=n.next;while(n!==r)}e.action=null}function ym(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Em(e,n){return n}function bm(e,n){if(Oe){var a=sn.formState;if(a!==null){t:{var r=ve;if(Oe){if(hn){e:{for(var u=hn,f=Gi;u.nodeType!==8;){if(!f){u=null;break e}if(u=ki(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){hn=ki(u.nextSibling),r=u.data==="F!";break t}}us(r)}r=!1}r&&(n=a[0])}}return a=oi(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Em,lastRenderedState:n},a.queue=r,a=km.bind(null,ve,r),r.dispatch=a,r=of(!1),f=pf.bind(null,ve,!1,r.queue),r=oi(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=zx.bind(null,ve,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Tm(e){var n=An();return Am(n,en,e)}function Am(e,n,a){if(n=sf(e,n,Em)[0],e=Xl(za)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=zo(n)}catch(x){throw x===Dr?Ol:x}else r=n;n=An();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,Pr(9,{destroy:void 0},Ix.bind(null,u,a),null)),[r,f,e]}function Ix(e,n){e.action=n}function Rm(e){var n=An(),a=en;if(a!==null)return Am(n,a,e);An(),n=n.memoizedState,a=An();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Pr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ve.updateQueue,n===null&&(n=Hl(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function wm(){return An().memoizedState}function ql(e,n,a,r){var u=oi();ve.flags|=e,u.memoizedState=Pr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Wl(e,n,a,r){var u=An();r=r===void 0?null:r;var f=u.memoizedState.inst;en!==null&&r!==null&&Ju(r,en.memoizedState.deps)?u.memoizedState=Pr(n,f,a,r):(ve.flags|=e,u.memoizedState=Pr(1|n,f,a,r))}function Cm(e,n){ql(8390656,8,e,n)}function cf(e,n){Wl(2048,8,e,n)}function Bx(e){ve.flags|=4;var n=ve.updateQueue;if(n===null)n=Hl(),ve.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Dm(e){var n=An().memoizedState;return Bx({ref:n,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Um(e,n){return Wl(4,2,e,n)}function Nm(e,n){return Wl(4,4,e,n)}function Lm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Om(e,n,a){a=a!=null?a.concat([e]):null,Wl(4,4,Lm.bind(null,n,e),a)}function uf(){}function Pm(e,n){var a=An();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ju(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function zm(e,n){var a=An();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ju(n,r[1]))return r[0];if(r=e(),$s){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[r,n],r}function ff(e,n,a){return a===void 0||(Pa&1073741824)!==0&&(Ue&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=I0(),ve.lanes|=e,xs|=e,a)}function Im(e,n,a,r){return Ti(a,n)?a:Nr.current!==null?(e=ff(e,a,r),Ti(e,n)||(Un=!0),e):(Pa&42)===0||(Pa&1073741824)!==0&&(Ue&261930)===0?(Un=!0,e.memoizedState=a):(e=I0(),ve.lanes|=e,xs|=e,n)}function Bm(e,n,a,r,u){var f=B.p;B.p=f!==0&&8>f?f:8;var x=O.T,w={};O.T=w,pf(e,!1,n,a);try{var G=u(),nt=O.S;if(nt!==null&&nt(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pt=Lx(G,r);Io(e,n,pt,Ui(e))}else Io(e,n,r,Ui(e))}catch(vt){Io(e,n,{then:function(){},status:"rejected",reason:vt},Ui())}finally{B.p=f,x!==null&&w.types!==null&&(x.types=w.types),O.T=x}}function Fx(){}function hf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Fm(e).queue;Bm(e,u,n,at,a===null?Fx:function(){return Vm(e),a(r)})}function Fm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:at},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Vm(e){var n=Fm(e);n.next===null&&(n=e.alternate.memoizedState),Io(e,n.next.queue,{},Ui())}function df(){return Wn(tl)}function Gm(){return An().memoizedState}function Hm(){return An().memoizedState}function Vx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ui();e=ds(a);var r=ps(n,e,a);r!==null&&(xi(r,n,a),No(r,n,a)),n={cache:Gu()},e.payload=n;return}n=n.return}}function Gx(e,n,a){var r=Ui();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yl(e)?Xm(n,a):(a=Du(e,n,a,r),a!==null&&(xi(a,e,r),qm(a,n,r)))}function km(e,n,a){var r=Ui();Io(e,n,a,r)}function Io(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yl(e))Xm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,w=f(x,a);if(u.hasEagerState=!0,u.eagerState=w,Ti(w,x))return Rl(e,n,u,0),sn===null&&Al(),!1}catch{}finally{}if(a=Du(e,n,u,r),a!==null)return xi(a,e,r),qm(a,n,r),!0}return!1}function pf(e,n,a,r){if(r={lane:2,revertLane:Wf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Yl(e)){if(n)throw Error(s(479))}else n=Du(e,a,r,2),n!==null&&xi(n,e,2)}function Yl(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Xm(e,n){Lr=Vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function qm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,ri(e,a)}}var Bo={readContext:Wn,use:kl,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn};Bo.useEffectEvent=Sn;var Wm={readContext:Wn,use:kl,useCallback:function(e,n){return oi().memoizedState=[e,n===void 0?null:n],e},useContext:Wn,useEffect:Cm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ql(4194308,4,Lm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ql(4194308,4,e,n)},useInsertionEffect:function(e,n){ql(4,2,e,n)},useMemo:function(e,n){var a=oi();n=n===void 0?null:n;var r=e();if($s){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=oi();if(a!==void 0){var u=a(n);if($s){Bt(!0);try{a(n)}finally{Bt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Gx.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var n=oi();return e={current:e},n.memoizedState=e},useState:function(e){e=of(e);var n=e.queue,a=km.bind(null,ve,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(e,n){var a=oi();return ff(a,e,n)},useTransition:function(){var e=of(!1);return e=Bm.bind(null,ve,e.queue,!0,!1),oi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ve,u=oi();if(Oe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),sn===null)throw Error(s(349));(Ue&127)!==0||dm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Cm(mm.bind(null,r,f,e),[e]),r.flags|=2048,Pr(9,{destroy:void 0},pm.bind(null,r,f,a,n),null),a},useId:function(){var e=oi(),n=sn.identifierPrefix;if(Oe){var a=da,r=ha;a=(r&~(1<<32-Ft(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ox++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:df,useFormState:bm,useActionState:bm,useOptimistic:function(e){var n=oi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=pf.bind(null,ve,!0,a),a.dispatch=n,[e,n]},useMemoCache:af,useCacheRefresh:function(){return oi().memoizedState=Vx.bind(null,ve)},useEffectEvent:function(e){var n=oi(),a={impl:e};return n.memoizedState=a,function(){if((Ye&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},mf={readContext:Wn,use:kl,useCallback:Pm,useContext:Wn,useEffect:cf,useImperativeHandle:Om,useInsertionEffect:Um,useLayoutEffect:Nm,useMemo:zm,useReducer:Xl,useRef:wm,useState:function(){return Xl(za)},useDebugValue:uf,useDeferredValue:function(e,n){var a=An();return Im(a,en.memoizedState,e,n)},useTransition:function(){var e=Xl(za)[0],n=An().memoizedState;return[typeof e=="boolean"?e:zo(e),n]},useSyncExternalStore:hm,useId:Gm,useHostTransitionStatus:df,useFormState:Tm,useActionState:Tm,useOptimistic:function(e,n){var a=An();return vm(a,en,e,n)},useMemoCache:af,useCacheRefresh:Hm};mf.useEffectEvent=Dm;var Ym={readContext:Wn,use:kl,useCallback:Pm,useContext:Wn,useEffect:cf,useImperativeHandle:Om,useInsertionEffect:Um,useLayoutEffect:Nm,useMemo:zm,useReducer:rf,useRef:wm,useState:function(){return rf(za)},useDebugValue:uf,useDeferredValue:function(e,n){var a=An();return en===null?ff(a,e,n):Im(a,en.memoizedState,e,n)},useTransition:function(){var e=rf(za)[0],n=An().memoizedState;return[typeof e=="boolean"?e:zo(e),n]},useSyncExternalStore:hm,useId:Gm,useHostTransitionStatus:df,useFormState:Rm,useActionState:Rm,useOptimistic:function(e,n){var a=An();return en!==null?vm(a,en,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:af,useCacheRefresh:Hm};Ym.useEffectEvent=Dm;function gf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var _f={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Ui(),u=ds(r);u.payload=n,a!=null&&(u.callback=a),n=ps(e,u,r),n!==null&&(xi(n,e,r),No(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Ui(),u=ds(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ps(e,u,r),n!==null&&(xi(n,e,r),No(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Ui(),r=ds(a);r.tag=2,n!=null&&(r.callback=n),n=ps(e,r,a),n!==null&&(xi(n,e,a),No(n,e,a))}};function jm(e,n,a,r,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!bo(a,r)||!bo(u,f):!0}function Zm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&_f.enqueueReplaceState(n,n.state,null)}function tr(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Km(e){Tl(e)}function Qm(e){console.error(e)}function Jm(e){Tl(e)}function jl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function $m(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vf(e,n,a){return a=ds(a),a.tag=3,a.payload={element:null},a.callback=function(){jl(e,n)},a}function t0(e){return e=ds(e),e.tag=3,e}function e0(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){$m(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){$m(n,a,r),typeof u!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function Hx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Rr(n,a,u,!0),a=Ri.current,a!==null){switch(a.tag){case 31:case 13:return Hi===null?rc():a.alternate===null&&Mn===0&&(Mn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),kf(e,r,u)),!1;case 22:return a.flags|=65536,r===Pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),kf(e,r,u)),!1}throw Error(s(435,a.tag))}return kf(e,r,u),rc(),!1}if(Oe)return n=Ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==zu&&(e=Error(s(422),{cause:r}),Ro(Bi(e,a)))):(r!==zu&&(n=Error(s(423),{cause:r}),Ro(Bi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=Bi(r,a),u=vf(e.stateNode,r,u),Yu(e,u),Mn!==4&&(Mn=2)),!1;var f=Error(s(520),{cause:r});if(f=Bi(f,a),Wo===null?Wo=[f]:Wo.push(f),Mn!==4&&(Mn=2),n===null)return!0;r=Bi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=vf(a.stateNode,r,e),Yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ss===null||!Ss.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=t0(u),e0(u,e,a,r),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var xf=Error(s(461)),Un=!1;function Yn(e,n,a,r){n.child=e===null?sm(n,null,a,r):Js(n,e.child,a,r)}function n0(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var w in r)w!=="ref"&&(x[w]=r[w])}else x=r;return js(n),r=$u(e,n,a,x,f,u),w=tf(),e!==null&&!Un?(ef(e,n,u),Ia(e,n,u)):(Oe&&w&&Ou(n),n.flags|=1,Yn(e,n,r,u),n.child)}function i0(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,a0(e,n,f,r,u)):(e=Cl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Rf(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(x,r)&&e.ref===n.ref)return Ia(e,n,u)}return n.flags|=1,e=Ua(f,r),e.ref=n.ref,e.return=n,n.child=e}function a0(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(bo(f,r)&&e.ref===n.ref)if(Un=!1,n.pendingProps=r=f,Rf(e,u))(e.flags&131072)!==0&&(Un=!0);else return n.lanes=e.lanes,Ia(e,n,u)}return Sf(e,n,a,r,u)}function s0(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return r0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ll(n,f!==null?f.cachePool:null),f!==null?lm(n,f):Zu(),cm(n);else return r=n.lanes=536870912,r0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Ll(n,f.cachePool),lm(n,f),gs(),n.memoizedState=null):(e!==null&&Ll(n,null),Zu(),gs());return Yn(e,n,u,a),n.child}function Fo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function r0(e,n,a,r,u){var f=ku();return f=f===null?null:{parent:Cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Ll(n,null),Zu(),cm(n),e!==null&&Rr(e,n,r,!0),n.childLanes=u,null}function Zl(e,n){return n=Ql({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function o0(e,n,a){return Js(n,e.child,null,a),e=Zl(n,n.pendingProps),e.flags|=2,wi(n),n.memoizedState=null,e}function kx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Oe){if(r.mode==="hidden")return e=Zl(n,r),n.lanes=536870912,Fo(null,e);if(Qu(n),(e=hn)?(e=xg(e,Gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ls!==null?{id:ha,overflow:da}:null,retryLane:536870912,hydrationErrors:null},a=Xp(e),a.return=n,n.child=a,qn=n,hn=null)):e=null,e===null)throw us(n);return n.lanes=536870912,null}return Zl(n,r)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Qu(n),u)if(n.flags&256)n.flags&=-257,n=o0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Un||Rr(e,n,a,!1),u=(a&e.childLanes)!==0,Un||u){if(r=sn,r!==null&&(x=Qn(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Xs(e,x),xi(r,e,x),xf;rc(),n=o0(e,n,a)}else e=f.treeContext,hn=ki(x.nextSibling),qn=n,Oe=!0,cs=null,Gi=!1,e!==null&&Yp(n,e),n=Zl(n,r),n.flags|=4096;return n}return e=Ua(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Kl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Sf(e,n,a,r,u){return js(n),a=$u(e,n,a,r,void 0,u),r=tf(),e!==null&&!Un?(ef(e,n,u),Ia(e,n,u)):(Oe&&r&&Ou(n),n.flags|=1,Yn(e,n,a,u),n.child)}function l0(e,n,a,r,u,f){return js(n),n.updateQueue=null,a=fm(n,r,a,u),um(e),r=tf(),e!==null&&!Un?(ef(e,n,f),Ia(e,n,f)):(Oe&&r&&Ou(n),n.flags|=1,Yn(e,n,a,f),n.child)}function c0(e,n,a,r,u){if(js(n),n.stateNode===null){var f=Er,x=a.contextType;typeof x=="object"&&x!==null&&(f=Wn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=_f,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},qu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Wn(x):Er,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(gf(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&_f.enqueueReplaceState(f,f.state,null),Oo(n,r,f,u),Lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var w=n.memoizedProps,G=tr(a,w);f.props=G;var nt=f.context,pt=a.contextType;x=Er,typeof pt=="object"&&pt!==null&&(x=Wn(pt));var vt=a.getDerivedStateFromProps;pt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||nt!==x)&&Zm(n,f,r,x),hs=!1;var rt=n.memoizedState;f.state=rt,Oo(n,r,f,u),Lo(),nt=n.memoizedState,w||rt!==nt||hs?(typeof vt=="function"&&(gf(n,a,vt,r),nt=n.memoizedState),(G=hs||jm(n,a,G,r,rt,nt,x))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=x,r=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Wu(e,n),x=n.memoizedProps,pt=tr(a,x),f.props=pt,vt=n.pendingProps,rt=f.context,nt=a.contextType,G=Er,typeof nt=="object"&&nt!==null&&(G=Wn(nt)),w=a.getDerivedStateFromProps,(nt=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==vt||rt!==G)&&Zm(n,f,r,G),hs=!1,rt=n.memoizedState,f.state=rt,Oo(n,r,f,u),Lo();var ct=n.memoizedState;x!==vt||rt!==ct||hs||e!==null&&e.dependencies!==null&&Ul(e.dependencies)?(typeof w=="function"&&(gf(n,a,w,r),ct=n.memoizedState),(pt=hs||jm(n,a,pt,r,rt,ct,G)||e!==null&&e.dependencies!==null&&Ul(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ct,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ct,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ct),f.props=r,f.state=ct,f.context=G,r=pt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Kl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Js(n,e.child,null,u),n.child=Js(n,null,a,u)):Yn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ia(e,n,u),e}function u0(e,n,a,r){return Ws(),n.flags|=256,Yn(e,n,a,r),n.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yf(e){return{baseLanes:e,cachePool:$p()}}function Ef(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Di),e}function f0(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(Tn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Oe){if(u?ms(n):gs(),(e=hn)?(e=xg(e,Gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ls!==null?{id:ha,overflow:da}:null,retryLane:536870912,hydrationErrors:null},a=Xp(e),a.return=n,n.child=a,qn=n,hn=null)):e=null,e===null)throw us(n);return sh(e)?n.lanes=32:n.lanes=536870912,null}var w=r.children;return r=r.fallback,u?(gs(),u=n.mode,w=Ql({mode:"hidden",children:w},u),r=qs(r,u,a,null),w.return=n,r.return=n,w.sibling=r,n.child=w,r=n.child,r.memoizedState=yf(a),r.childLanes=Ef(e,x,a),n.memoizedState=Mf,Fo(null,r)):(ms(n),bf(n,w))}var G=e.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(f)n.flags&256?(ms(n),n.flags&=-257,n=Tf(e,n,a)):n.memoizedState!==null?(gs(),n.child=e.child,n.flags|=128,n=null):(gs(),w=r.fallback,u=n.mode,r=Ql({mode:"visible",children:r.children},u),w=qs(w,u,a,null),w.flags|=2,r.return=n,w.return=n,r.sibling=w,n.child=r,Js(n,e.child,null,a),r=n.child,r.memoizedState=yf(a),r.childLanes=Ef(e,x,a),n.memoizedState=Mf,n=Fo(null,r));else if(ms(n),sh(w)){if(x=w.nextSibling&&w.nextSibling.dataset,x)var nt=x.dgst;x=nt,r=Error(s(419)),r.stack="",r.digest=x,Ro({value:r,source:null,stack:null}),n=Tf(e,n,a)}else if(Un||Rr(e,n,a,!1),x=(a&e.childLanes)!==0,Un||x){if(x=sn,x!==null&&(r=Qn(x,a),r!==0&&r!==G.retryLane))throw G.retryLane=r,Xs(e,r),xi(x,e,r),xf;ah(w)||rc(),n=Tf(e,n,a)}else ah(w)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,hn=ki(w.nextSibling),qn=n,Oe=!0,cs=null,Gi=!1,e!==null&&Yp(n,e),n=bf(n,r.children),n.flags|=4096);return n}return u?(gs(),w=r.fallback,u=n.mode,G=e.child,nt=G.sibling,r=Ua(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,nt!==null?w=Ua(nt,w):(w=qs(w,u,a,null),w.flags|=2),w.return=n,r.return=n,r.sibling=w,n.child=r,Fo(null,r),r=n.child,w=e.child.memoizedState,w===null?w=yf(a):(u=w.cachePool,u!==null?(G=Cn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=$p(),w={baseLanes:w.baseLanes|a,cachePool:u}),r.memoizedState=w,r.childLanes=Ef(e,x,a),n.memoizedState=Mf,Fo(e.child,r)):(ms(n),a=e.child,e=a.sibling,a=Ua(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function bf(e,n){return n=Ql({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ql(e,n){return e=Ai(22,e,null,n),e.lanes=0,e}function Tf(e,n,a){return Js(n,e.child,null,a),e=bf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function h0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Fu(e.return,n,a)}function Af(e,n,a,r,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function d0(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var x=Tn.current,w=(x&2)!==0;if(w?(x=x&1|2,n.flags|=128):x&=1,xt(Tn,x),Yn(e,n,r,a),r=Oe?Ao:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&h0(e,a,n);else if(e.tag===19)h0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Fl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Fl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Af(n,!0,a,null,f,r);break;case"together":Af(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),xs|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Rr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ua(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ua(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ul(e)))}function Xx(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),fs(n,Cn,e.memoizedState.cache),Ws();break;case 27:case 5:se(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:fs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ms(n),n.flags|=128,null):(a&n.child.childLanes)!==0?f0(e,n,a):(ms(n),e=Ia(e,n,a),e!==null?e.sibling:null);ms(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Rr(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return d0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(Tn,Tn.current),r)break;return null;case 22:return n.lanes=0,s0(e,n,a,n.pendingProps);case 24:fs(n,Cn,e.memoizedState.cache)}return Ia(e,n,a)}function p0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Un=!0;else{if(!Rf(e,a)&&(n.flags&128)===0)return Un=!1,Xx(e,n,a);Un=(e.flags&131072)!==0}else Un=!1,Oe&&(n.flags&1048576)!==0&&Wp(n,Ao,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Ks(n.elementType),n.type=e,typeof e=="function")Uu(e)?(r=tr(e,r),n.tag=1,n=c0(null,n,e,r,a)):(n.tag=0,n=Sf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=n0(null,n,e,r,a);break t}else if(u===I){n.tag=14,n=i0(null,n,e,r,a);break t}}throw n=st(e)||e,Error(s(306,n,""))}}return n;case 0:return Sf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=tr(r,n.pendingProps),c0(e,n,r,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Wu(e,n),Oo(n,r,null,a);var x=n.memoizedState;if(r=x.cache,fs(n,Cn,r),r!==f.cache&&Vu(n,[Cn],a,!0),Lo(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=u0(e,n,r,a);break t}else if(r!==u){u=Bi(Error(s(424)),n),Ro(u),n=u0(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(hn=ki(e.firstChild),qn=n,Oe=!0,cs=null,Gi=!0,a=sm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ws(),r===u){n=Ia(e,n,a);break t}Yn(e,n,r,a)}n=n.child}return n;case 26:return Kl(e,n),e===null?(a=Tg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Oe||(a=n.type,e=n.pendingProps,r=dc(lt.current).createElement(a),r[pn]=n,r[Rn]=e,jn(r,a,e),un(r),n.stateNode=r):n.memoizedState=Tg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return se(n),e===null&&Oe&&(r=n.stateNode=yg(n.type,n.pendingProps,lt.current),qn=n,Gi=!0,u=hn,bs(n.type)?(rh=u,hn=ki(r.firstChild)):hn=u),Yn(e,n,n.pendingProps.children,a),Kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Oe&&((u=r=hn)&&(r=SS(r,n.type,n.pendingProps,Gi),r!==null?(n.stateNode=r,qn=n,hn=ki(r.firstChild),Gi=!1,u=!0):u=!1),u||us(n)),se(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,r=f.children,eh(u,f)?r=null:x!==null&&eh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=$u(e,n,Px,null,null,a),tl._currentValue=u),Kl(e,n),Yn(e,n,r,a),n.child;case 6:return e===null&&Oe&&((e=a=hn)&&(a=MS(a,n.pendingProps,Gi),a!==null?(n.stateNode=a,qn=n,hn=null,e=!0):e=!1),e||us(n)),null;case 13:return f0(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Js(n,null,r,a):Yn(e,n,r,a),n.child;case 11:return n0(e,n,n.type,n.pendingProps,a);case 7:return Yn(e,n,n.pendingProps,a),n.child;case 8:return Yn(e,n,n.pendingProps.children,a),n.child;case 12:return Yn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,fs(n,n.type,r.value),Yn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,js(n),u=Wn(u),r=r(u),n.flags|=1,Yn(e,n,r,a),n.child;case 14:return i0(e,n,n.type,n.pendingProps,a);case 15:return a0(e,n,n.type,n.pendingProps,a);case 19:return d0(e,n,a);case 31:return kx(e,n,a);case 22:return s0(e,n,a,n.pendingProps);case 24:return js(n),r=Wn(Cn),e===null?(u=ku(),u===null&&(u=sn,f=Gu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},qu(n),fs(n,Cn,u)):((e.lanes&a)!==0&&(Wu(e,n),Oo(n,null,null,a),Lo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fs(n,Cn,r)):(r=f.cache,fs(n,Cn,r),r!==u.cache&&Vu(n,[Cn],a,!0))),Yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ba(e){e.flags|=4}function wf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(G0())e.flags|=8192;else throw Qs=Pl,Xu}else e.flags&=-16777217}function m0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dg(n))if(G0())e.flags|=8192;else throw Qs=Pl,Xu}function Jl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Et():536870912,e.lanes|=n,Fr|=n)}function Vo(e,n){if(!Oe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function dn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function qx(e,n,a){var r=n.pendingProps;switch(Pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(n),null;case 1:return dn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Oa(Cn),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ar(n)?Ba(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Iu())),dn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Ba(n),f!==null?(dn(n),m0(n,f)):(dn(n),wf(n,u,null,r,a))):f?f!==e.memoizedState?(Ba(n),dn(n),m0(n,f)):(dn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ba(n),dn(n),wf(n,u,e,r,a)),null;case 27:if(te(n),a=lt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ba(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return dn(n),null}e=Dt.current,Ar(n)?jp(n):(e=yg(u,r,a),n.stateNode=e,Ba(n))}return dn(n),null;case 5:if(te(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ba(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return dn(n),null}if(f=Dt.current,Ar(n))jp(n);else{var x=dc(lt.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(u,{is:r.is}):x.createElement(u)}}f[pn]=n,f[Rn]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(jn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ba(n)}}return dn(n),wf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ba(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=lt.current,Ar(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=qn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[pn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||fg(e.nodeValue,a)),e||us(n,!0)}else e=dc(e).createTextNode(r),e[pn]=n,n.stateNode=e}return dn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ar(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[pn]=n}else Ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;dn(n),e=!1}else a=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(wi(n),n):(wi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return dn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ar(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[pn]=n}else Ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;dn(n),u=!1}else u=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(wi(n),n):(wi(n),null)}return wi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Jl(n,n.updateQueue),dn(n),null);case 4:return Yt(),e===null&&Kf(n.stateNode.containerInfo),dn(n),null;case 10:return Oa(n.type),dn(n),null;case 19:if(Q(Tn),r=n.memoizedState,r===null)return dn(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Vo(r,!1);else{if(Mn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Fl(e),f!==null){for(n.flags|=128,Vo(r,!1),e=f.updateQueue,n.updateQueue=e,Jl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)kp(a,e),a=a.sibling;return xt(Tn,Tn.current&1|2),Oe&&Na(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Tt()>ic&&(n.flags|=128,u=!0,Vo(r,!1),n.lanes=4194304)}else{if(!u)if(e=Fl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Jl(n,e),Vo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Oe)return dn(n),null}else 2*Tt()-r.renderingStartTime>ic&&a!==536870912&&(n.flags|=128,u=!0,Vo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Tt(),e.sibling=null,a=Tn.current,xt(Tn,u?a&1|2:a&1),Oe&&Na(n,r.treeForkCount),e):(dn(n),null);case 22:case 23:return wi(n),Ku(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(dn(n),n.subtreeFlags&6&&(n.flags|=8192)):dn(n),a=n.updateQueue,a!==null&&Jl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Q(Zs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Oa(Cn),dn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Wx(e,n){switch(Pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Oa(Cn),Yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return te(n),null;case 31:if(n.memoizedState!==null){if(wi(n),n.alternate===null)throw Error(s(340));Ws()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ws()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(Tn),null;case 4:return Yt(),null;case 10:return Oa(n.type),null;case 22:case 23:return wi(n),Ku(),e!==null&&Q(Zs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Oa(Cn),null;case 25:return null;default:return null}}function g0(e,n){switch(Pu(n),n.tag){case 3:Oa(Cn),Yt();break;case 26:case 27:case 5:te(n);break;case 4:Yt();break;case 31:n.memoizedState!==null&&wi(n);break;case 13:wi(n);break;case 19:Q(Tn);break;case 10:Oa(n.type);break;case 22:case 23:wi(n),Ku(),e!==null&&Q(Zs);break;case 24:Oa(Cn)}}function Go(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==u)}}catch(w){Qe(n,n.return,w)}}function _s(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var x=r.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,u=n;var G=a,nt=w;try{nt()}catch(pt){Qe(u,G,pt)}}}r=r.next}while(r!==f)}}catch(pt){Qe(n,n.return,pt)}}function _0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{om(n,a)}catch(r){Qe(e,e.return,r)}}}function v0(e,n,a){a.props=tr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Qe(e,n,r)}}function Ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Qe(e,n,u)}}function pa(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Qe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Qe(e,n,u)}else a.current=null}function x0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Qe(e,e.return,u)}}function Cf(e,n,a){try{var r=e.stateNode;pS(r,e.type,a,n),r[Rn]=n}catch(u){Qe(e,e.return,u)}}function S0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bs(e.type)||e.tag===4}function Df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||S0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Me));else if(r!==4&&(r===27&&bs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Uf(e,n,a),e=e.sibling;e!==null;)Uf(e,n,a),e=e.sibling}function $l(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&bs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($l(e,n,a),e=e.sibling;e!==null;)$l(e,n,a),e=e.sibling}function M0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);jn(n,r,a),n[pn]=e,n[Rn]=a}catch(f){Qe(e,e.return,f)}}var Fa=!1,Nn=!1,Nf=!1,y0=typeof WeakSet=="function"?WeakSet:Set,Gn=null;function Yx(e,n){if(e=e.containerInfo,$f=Sc,e=Op(e),bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,w=-1,G=-1,nt=0,pt=0,vt=e,rt=null;e:for(;;){for(var ct;vt!==a||u!==0&&vt.nodeType!==3||(w=x+u),vt!==f||r!==0&&vt.nodeType!==3||(G=x+r),vt.nodeType===3&&(x+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)rt=vt,vt=ct;for(;;){if(vt===e)break e;if(rt===a&&++nt===u&&(w=x),rt===f&&++pt===r&&(G=x),(ct=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=ct}a=w===-1||G===-1?null:{start:w,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(th={focusedElem:e,selectionRange:a},Sc=!1,Gn=n;Gn!==null;)if(n=Gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Gn=e;else for(;Gn!==null;){switch(n=Gn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Qt=tr(a.type,u);e=r.getSnapshotBeforeUpdate(Qt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(le){Qe(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ih(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ih(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Gn=e;break}Gn=n.return}}function E0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ga(e,a),r&4&&Go(5,a);break;case 1:if(Ga(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Qe(a,a.return,x)}else{var u=tr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Qe(a,a.return,x)}}r&64&&_0(a),r&512&&Ho(a,a.return);break;case 3:if(Ga(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{om(e,n)}catch(x){Qe(a,a.return,x)}}break;case 27:n===null&&r&4&&M0(a);case 26:case 5:Ga(e,a),n===null&&r&4&&x0(a),r&512&&Ho(a,a.return);break;case 12:Ga(e,a);break;case 31:Ga(e,a),r&4&&A0(e,a);break;case 13:Ga(e,a),r&4&&R0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nS.bind(null,a),yS(e,a))));break;case 22:if(r=a.memoizedState!==null||Fa,!r){n=n!==null&&n.memoizedState!==null||Nn,u=Fa;var f=Nn;Fa=r,(Nn=n)&&!f?Ha(e,a,(a.subtreeFlags&8772)!==0):Ga(e,a),Fa=u,Nn=f}break;case 30:break;default:Ga(e,a)}}function b0(e){var n=e.alternate;n!==null&&(e.alternate=null,b0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&zi(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gn=null,mi=!1;function Va(e,n,a){for(a=a.child;a!==null;)T0(e,n,a),a=a.sibling}function T0(e,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:Nn||pa(a,n),Va(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Nn||pa(a,n);var r=gn,u=mi;bs(a.type)&&(gn=a.stateNode,mi=!1),Va(e,n,a),Qo(a.stateNode),gn=r,mi=u;break;case 5:Nn||pa(a,n);case 6:if(r=gn,u=mi,gn=null,Va(e,n,a),gn=r,mi=u,gn!==null)if(mi)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(a.stateNode)}catch(f){Qe(a,n,f)}else try{gn.removeChild(a.stateNode)}catch(f){Qe(a,n,f)}break;case 18:gn!==null&&(mi?(e=gn,_g(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yr(e)):_g(gn,a.stateNode));break;case 4:r=gn,u=mi,gn=a.stateNode.containerInfo,mi=!0,Va(e,n,a),gn=r,mi=u;break;case 0:case 11:case 14:case 15:_s(2,a,n),Nn||_s(4,a,n),Va(e,n,a);break;case 1:Nn||(pa(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&v0(a,n,r)),Va(e,n,a);break;case 21:Va(e,n,a);break;case 22:Nn=(r=Nn)||a.memoizedState!==null,Va(e,n,a),Nn=r;break;default:Va(e,n,a)}}function A0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yr(e)}catch(a){Qe(n,n.return,a)}}}function R0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yr(e)}catch(a){Qe(n,n.return,a)}}function jx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new y0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new y0),n;default:throw Error(s(435,e.tag))}}function tc(e,n){var a=jx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=iS.bind(null,e,r);r.then(u,u)}})}function gi(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,x=n,w=x;t:for(;w!==null;){switch(w.tag){case 27:if(bs(w.type)){gn=w.stateNode,mi=!1;break t}break;case 5:gn=w.stateNode,mi=!1;break t;case 3:case 4:gn=w.stateNode.containerInfo,mi=!0;break t}w=w.return}if(gn===null)throw Error(s(160));T0(f,x,u),gn=null,mi=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)w0(n,e),n=n.sibling}var Ji=null;function w0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gi(n,e),_i(e),r&4&&(_s(3,e,e.return),Go(3,e),_s(5,e,e.return));break;case 1:gi(n,e),_i(e),r&512&&(Nn||a===null||pa(a,a.return)),r&64&&Fa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ji;if(gi(n,e),_i(e),r&512&&(Nn||a===null||pa(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Zi]||f[pn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),jn(f,r,a),f[pn]=e,un(f),r=f;break t;case"link":var x=wg("link","href",u).get(r+(a.href||""));if(x){for(var w=0;w<x.length;w++)if(f=x[w],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(w,1);break e}}f=u.createElement(r),jn(f,r,a),u.head.appendChild(f);break;case"meta":if(x=wg("meta","content",u).get(r+(a.content||""))){for(w=0;w<x.length;w++)if(f=x[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(w,1);break e}}f=u.createElement(r),jn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[pn]=e,un(f),r=f}e.stateNode=r}else Cg(u,e.type,e.stateNode);else e.stateNode=Rg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Cg(u,e.type,e.stateNode):Rg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:gi(n,e),_i(e),r&512&&(Nn||a===null||pa(a,a.return)),a!==null&&r&4&&Cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(gi(n,e),_i(e),r&512&&(Nn||a===null||pa(a,a.return)),e.flags&32){u=e.stateNode;try{Vn(u,"")}catch(Qt){Qe(e,e.return,Qt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Cf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(Nf=!0);break;case 6:if(gi(n,e),_i(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Qt){Qe(e,e.return,Qt)}}break;case 3:if(gc=null,u=Ji,Ji=pc(n.containerInfo),gi(n,e),Ji=u,_i(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Yr(n.containerInfo)}catch(Qt){Qe(e,e.return,Qt)}Nf&&(Nf=!1,C0(e));break;case 4:r=Ji,Ji=pc(e.stateNode.containerInfo),gi(n,e),_i(e),Ji=r;break;case 12:gi(n,e),_i(e);break;case 31:gi(n,e),_i(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,tc(e,r)));break;case 13:gi(n,e),_i(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nc=Tt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,tc(e,r)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,nt=Fa,pt=Nn;if(Fa=nt||u,Nn=pt||G,gi(n,e),Nn=pt,Fa=nt,_i(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Fa||Nn||er(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{w=G.stateNode;var vt=G.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;w.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Qt){Qe(G,G.return,Qt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Qt){Qe(G,G.return,Qt)}}}else if(n.tag===18){if(a===null){G=n;try{var ct=G.stateNode;u?vg(ct,!0):vg(G.stateNode,!1)}catch(Qt){Qe(G,G.return,Qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,tc(e,a))));break;case 19:gi(n,e),_i(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,tc(e,r)));break;case 30:break;case 21:break;default:gi(n,e),_i(e)}}function _i(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(S0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Df(e);$l(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(Vn(x,""),a.flags&=-33);var w=Df(e);$l(e,w,x);break;case 3:case 4:var G=a.stateNode.containerInfo,nt=Df(e);Uf(e,nt,G);break;default:throw Error(s(161))}}catch(pt){Qe(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function C0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;C0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)E0(e,n.alternate,n),n=n.sibling}function er(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_s(4,n,n.return),er(n);break;case 1:pa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&v0(n,n.return,a),er(n);break;case 27:Qo(n.stateNode);case 26:case 5:pa(n,n.return),er(n);break;case 22:n.memoizedState===null&&er(n);break;case 30:er(n);break;default:er(n)}e=e.sibling}}function Ha(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ha(u,f,a),Go(4,f);break;case 1:if(Ha(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Qe(r,r.return,nt)}if(r=f,u=r.updateQueue,u!==null){var w=r.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)rm(G[u],w)}catch(nt){Qe(r,r.return,nt)}}a&&x&64&&_0(f),Ho(f,f.return);break;case 27:M0(f);case 26:case 5:Ha(u,f,a),a&&r===null&&x&4&&x0(f),Ho(f,f.return);break;case 12:Ha(u,f,a);break;case 31:Ha(u,f,a),a&&x&4&&A0(u,f);break;case 13:Ha(u,f,a),a&&x&4&&R0(u,f);break;case 22:f.memoizedState===null&&Ha(u,f,a),Ho(f,f.return);break;case 30:break;default:Ha(u,f,a)}n=n.sibling}}function Lf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&wo(a))}function Of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&wo(e))}function $i(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)D0(e,n,a,r),n=n.sibling}function D0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:$i(e,n,a,r),u&2048&&Go(9,n);break;case 1:$i(e,n,a,r);break;case 3:$i(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&wo(e)));break;case 12:if(u&2048){$i(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,w=f.onPostCommit;typeof w=="function"&&w(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Qe(n,n.return,G)}}else $i(e,n,a,r);break;case 31:$i(e,n,a,r);break;case 13:$i(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?$i(e,n,a,r):ko(e,n):f._visibility&2?$i(e,n,a,r):(f._visibility|=2,zr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Lf(x,n);break;case 24:$i(e,n,a,r),u&2048&&Of(n.alternate,n);break;default:$i(e,n,a,r)}}function zr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,w=a,G=r,nt=x.flags;switch(x.tag){case 0:case 11:case 15:zr(f,x,w,G,u),Go(8,x);break;case 23:break;case 22:var pt=x.stateNode;x.memoizedState!==null?pt._visibility&2?zr(f,x,w,G,u):ko(f,x):(pt._visibility|=2,zr(f,x,w,G,u)),u&&nt&2048&&Lf(x.alternate,x);break;case 24:zr(f,x,w,G,u),u&&nt&2048&&Of(x.alternate,x);break;default:zr(f,x,w,G,u)}n=n.sibling}}function ko(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:ko(a,r),u&2048&&Lf(r.alternate,r);break;case 24:ko(a,r),u&2048&&Of(r.alternate,r);break;default:ko(a,r)}n=n.sibling}}var Xo=8192;function Ir(e,n,a){if(e.subtreeFlags&Xo)for(e=e.child;e!==null;)U0(e,n,a),e=e.sibling}function U0(e,n,a){switch(e.tag){case 26:Ir(e,n,a),e.flags&Xo&&e.memoizedState!==null&&OS(a,Ji,e.memoizedState,e.memoizedProps);break;case 5:Ir(e,n,a);break;case 3:case 4:var r=Ji;Ji=pc(e.stateNode.containerInfo),Ir(e,n,a),Ji=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Xo,Xo=16777216,Ir(e,n,a),Xo=r):Ir(e,n,a));break;default:Ir(e,n,a)}}function N0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function qo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Gn=r,O0(r,e)}N0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)L0(e),e=e.sibling}function L0(e){switch(e.tag){case 0:case 11:case 15:qo(e),e.flags&2048&&_s(9,e,e.return);break;case 3:qo(e);break;case 12:qo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ec(e)):qo(e);break;default:qo(e)}}function ec(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Gn=r,O0(r,e)}N0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_s(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}e=e.sibling}}function O0(e,n){for(;Gn!==null;){var a=Gn;switch(a.tag){case 0:case 11:case 15:_s(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Gn=r;else t:for(a=e;Gn!==null;){r=Gn;var u=r.sibling,f=r.return;if(b0(r),r===a){Gn=null;break t}if(u!==null){u.return=f,Gn=u;break t}Gn=f}}}var Zx={getCacheForType:function(e){var n=Wn(Cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Wn(Cn).controller.signal}},Kx=typeof WeakMap=="function"?WeakMap:Map,Ye=0,sn=null,Ce=null,Ue=0,Ke=0,Ci=null,vs=!1,Br=!1,Pf=!1,ka=0,Mn=0,xs=0,nr=0,zf=0,Di=0,Fr=0,Wo=null,vi=null,If=!1,nc=0,P0=0,ic=1/0,ac=null,Ss=null,Pn=0,Ms=null,Vr=null,Xa=0,Bf=0,Ff=null,z0=null,Yo=0,Vf=null;function Ui(){return(Ye&2)!==0&&Ue!==0?Ue&-Ue:O.T!==null?Wf():vr()}function I0(){if(Di===0)if((Ue&536870912)===0||Oe){var e=Se;Se<<=1,(Se&3932160)===0&&(Se=262144),Di=e}else Di=536870912;return e=Ri.current,e!==null&&(e.flags|=32),Di}function xi(e,n,a){(e===sn&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)&&(Gr(e,0),ys(e,Ue,Di,!1)),oe(e,a),((Ye&2)===0||e!==sn)&&(e===sn&&((Ye&2)===0&&(nr|=a),Mn===4&&ys(e,Ue,Di,!1)),ma(e))}function B0(e,n,a){if((Ye&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),u=r?$x(e,n):Hf(e,n,!0),f=r;do{if(u===0){Br&&!r&&ys(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Qx(a)){u=Hf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var w=e;u=Wo;var G=w.current.memoizedState.isDehydrated;if(G&&(Gr(w,x).flags|=256),x=Hf(w,x,!1),x!==2){if(Pf&&!G){w.errorRecoveryDisabledLanes|=f,nr|=f,u=4;break t}f=vi,vi=u,f!==null&&(vi===null?vi=f:vi.push.apply(vi,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){Gr(e,0),ys(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ys(r,n,Di,!vs);break t;case 2:vi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=nc+300-Tt(),10<u)){if(ys(r,n,Di,!vs),dt(r,0,!0)!==0)break t;Xa=n,r.timeoutHandle=mg(F0.bind(null,r,a,vi,ac,If,n,Di,nr,Fr,vs,f,"Throttled",-0,0),u);break t}F0(r,a,vi,ac,If,n,Di,nr,Fr,vs,f,null,-0,0)}}break}while(!0);ma(e)}function F0(e,n,a,r,u,f,x,w,G,nt,pt,vt,rt,ct){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Me},U0(n,f,vt);var Qt=(f&62914560)===f?nc-Tt():(f&4194048)===f?P0-Tt():0;if(Qt=PS(vt,Qt),Qt!==null){Xa=f,e.cancelPendingCommit=Qt(Y0.bind(null,e,n,f,a,r,u,x,w,G,pt,vt,null,rt,ct)),ys(e,f,x,!nt);return}}Y0(e,n,f,a,r,u,x,w,G)}function Qx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Ti(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ys(e,n,a,r){n&=~zf,n&=~nr,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Ft(u),x=1<<f;r[f]=-1,u&=~x}a!==0&&Be(e,a,n)}function sc(){return(Ye&6)===0?(jo(0),!1):!0}function Gf(){if(Ce!==null){if(Ke===0)var e=Ce.return;else e=Ce,La=Ys=null,nf(e),Ur=null,Do=0,e=Ce;for(;e!==null;)g0(e.alternate,e),e=e.return;Ce=null}}function Gr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_S(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Xa=0,Gf(),sn=e,Ce=a=Ua(e.current,null),Ue=n,Ke=0,Ci=null,vs=!1,Br=Ht(e,n),Pf=!1,Fr=Di=zf=nr=xs=Mn=0,vi=Wo=null,If=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ft(r),f=1<<u;n|=e[u],r&=~f}return ka=n,Al(),a}function V0(e,n){ve=null,O.H=Bo,n===Dr||n===Ol?(n=nm(),Ke=3):n===Xu?(n=nm(),Ke=4):Ke=n===xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ci=n,Ce===null&&(Mn=1,jl(e,Bi(n,e.current)))}function G0(){var e=Ri.current;return e===null?!0:(Ue&4194048)===Ue?Hi===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?e===Hi:!1}function H0(){var e=O.H;return O.H=Bo,e===null?Bo:e}function k0(){var e=O.A;return O.A=Zx,e}function rc(){Mn=4,vs||(Ue&4194048)!==Ue&&Ri.current!==null||(Br=!0),(xs&134217727)===0&&(nr&134217727)===0||sn===null||ys(sn,Ue,Di,!1)}function Hf(e,n,a){var r=Ye;Ye|=2;var u=H0(),f=k0();(sn!==e||Ue!==n)&&(ac=null,Gr(e,n)),n=!1;var x=Mn;t:do try{if(Ke!==0&&Ce!==null){var w=Ce,G=Ci;switch(Ke){case 8:Gf(),x=6;break t;case 3:case 2:case 9:case 6:Ri.current===null&&(n=!0);var nt=Ke;if(Ke=0,Ci=null,Hr(e,w,G,nt),a&&Br){x=0;break t}break;default:nt=Ke,Ke=0,Ci=null,Hr(e,w,G,nt)}}Jx(),x=Mn;break}catch(pt){V0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,La=Ys=null,Ye=r,O.H=u,O.A=f,Ce===null&&(sn=null,Ue=0,Al()),x}function Jx(){for(;Ce!==null;)X0(Ce)}function $x(e,n){var a=Ye;Ye|=2;var r=H0(),u=k0();sn!==e||Ue!==n?(ac=null,ic=Tt()+500,Gr(e,n)):Br=Ht(e,n);t:do try{if(Ke!==0&&Ce!==null){n=Ce;var f=Ci;e:switch(Ke){case 1:Ke=0,Ci=null,Hr(e,n,f,1);break;case 2:case 9:if(tm(f)){Ke=0,Ci=null,q0(n);break}n=function(){Ke!==2&&Ke!==9||sn!==e||(Ke=7),ma(e)},f.then(n,n);break t;case 3:Ke=7;break t;case 4:Ke=5;break t;case 7:tm(f)?(Ke=0,Ci=null,q0(n)):(Ke=0,Ci=null,Hr(e,n,f,7));break;case 5:var x=null;switch(Ce.tag){case 26:x=Ce.memoizedState;case 5:case 27:var w=Ce;if(x?Dg(x):w.stateNode.complete){Ke=0,Ci=null;var G=w.sibling;if(G!==null)Ce=G;else{var nt=w.return;nt!==null?(Ce=nt,oc(nt)):Ce=null}break e}}Ke=0,Ci=null,Hr(e,n,f,5);break;case 6:Ke=0,Ci=null,Hr(e,n,f,6);break;case 8:Gf(),Mn=6;break t;default:throw Error(s(462))}}tS();break}catch(pt){V0(e,pt)}while(!0);return La=Ys=null,O.H=r,O.A=u,Ye=a,Ce!==null?0:(sn=null,Ue=0,Al(),Mn)}function tS(){for(;Ce!==null&&!Ut();)X0(Ce)}function X0(e){var n=p0(e.alternate,e,ka);e.memoizedProps=e.pendingProps,n===null?oc(e):Ce=n}function q0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=l0(a,n,n.pendingProps,n.type,void 0,Ue);break;case 11:n=l0(a,n,n.pendingProps,n.type.render,n.ref,Ue);break;case 5:nf(n);default:g0(a,n),n=Ce=kp(n,ka),n=p0(a,n,ka)}e.memoizedProps=e.pendingProps,n===null?oc(e):Ce=n}function Hr(e,n,a,r){La=Ys=null,nf(n),Ur=null,Do=0;var u=n.return;try{if(Hx(e,u,n,a,Ue)){Mn=1,jl(e,Bi(a,e.current)),Ce=null;return}}catch(f){if(u!==null)throw Ce=u,f;Mn=1,jl(e,Bi(a,e.current)),Ce=null;return}n.flags&32768?(Oe||r===1?e=!0:Br||(Ue&536870912)!==0?e=!1:(vs=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ri.current,r!==null&&r.tag===13&&(r.flags|=16384))),W0(n,e)):oc(n)}function oc(e){var n=e;do{if((n.flags&32768)!==0){W0(n,vs);return}e=n.return;var a=qx(n.alternate,n,ka);if(a!==null){Ce=a;return}if(n=n.sibling,n!==null){Ce=n;return}Ce=n=e}while(n!==null);Mn===0&&(Mn=5)}function W0(e,n){do{var a=Wx(e.alternate,e);if(a!==null){a.flags&=32767,Ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=a}while(e!==null);Mn=6,Ce=null}function Y0(e,n,a,r,u,f,x,w,G){e.cancelPendingCommit=null;do lc();while(Pn!==0);if((Ye&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Cu,on(e,a,f,x,w,G),e===sn&&(Ce=sn=null,Ue=0),Vr=n,Ms=e,Xa=a,Bf=f,Ff=u,z0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aS(J,function(){return J0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,u=B.p,B.p=2,x=Ye,Ye|=4;try{Yx(e,n,a)}finally{Ye=x,B.p=u,O.T=r}}Pn=1,j0(),Z0(),K0()}}function j0(){if(Pn===1){Pn=0;var e=Ms,n=Vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=B.p;B.p=2;var u=Ye;Ye|=4;try{w0(n,e);var f=th,x=Op(e.containerInfo),w=f.focusedElem,G=f.selectionRange;if(x!==w&&w&&w.ownerDocument&&Lp(w.ownerDocument.documentElement,w)){if(G!==null&&bu(w)){var nt=G.start,pt=G.end;if(pt===void 0&&(pt=nt),"selectionStart"in w)w.selectionStart=nt,w.selectionEnd=Math.min(pt,w.value.length);else{var vt=w.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var ct=rt.getSelection(),Qt=w.textContent.length,le=Math.min(G.start,Qt),an=G.end===void 0?le:Math.min(G.end,Qt);!ct.extend&&le>an&&(x=an,an=le,le=x);var Z=Np(w,le),q=Np(w,an);if(Z&&q&&(ct.rangeCount!==1||ct.anchorNode!==Z.node||ct.anchorOffset!==Z.offset||ct.focusNode!==q.node||ct.focusOffset!==q.offset)){var et=vt.createRange();et.setStart(Z.node,Z.offset),ct.removeAllRanges(),le>an?(ct.addRange(et),ct.extend(q.node,q.offset)):(et.setEnd(q.node,q.offset),ct.addRange(et))}}}}for(vt=[],ct=w;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<vt.length;w++){var _t=vt[w];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Sc=!!$f,th=$f=null}finally{Ye=u,B.p=r,O.T=a}}e.current=n,Pn=2}}function Z0(){if(Pn===2){Pn=0;var e=Ms,n=Vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=B.p;B.p=2;var u=Ye;Ye|=4;try{E0(e,n.alternate,n)}finally{Ye=u,B.p=r,O.T=a}}Pn=3}}function K0(){if(Pn===4||Pn===3){Pn=0,ie();var e=Ms,n=Vr,a=Xa,r=z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Pn=5:(Pn=0,Vr=Ms=null,Q0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ss=null),as(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,u=B.p,B.p=2,O.T=null;try{for(var f=e.onRecoverableError,x=0;x<r.length;x++){var w=r[x];f(w.value,{componentStack:w.stack})}}finally{O.T=n,B.p=u}}(Xa&3)!==0&&lc(),ma(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Vf?Yo++:(Yo=0,Vf=e):Yo=0,jo(0)}}function Q0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,wo(n)))}function lc(){return j0(),Z0(),K0(),J0()}function J0(){if(Pn!==5)return!1;var e=Ms,n=Bf;Bf=0;var a=as(Xa),r=O.T,u=B.p;try{B.p=32>a?32:a,O.T=null,a=Ff,Ff=null;var f=Ms,x=Xa;if(Pn=0,Vr=Ms=null,Xa=0,(Ye&6)!==0)throw Error(s(331));var w=Ye;if(Ye|=4,L0(f.current),D0(f,f.current,x,a),Ye=w,jo(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{B.p=u,O.T=r,Q0(e,n)}}function $0(e,n,a){n=Bi(a,n),n=vf(e.stateNode,n,2),e=ps(e,n,2),e!==null&&(oe(e,2),ma(e))}function Qe(e,n,a){if(e.tag===3)$0(e,e,a);else for(;n!==null;){if(n.tag===3){$0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ss===null||!Ss.has(r))){e=Bi(a,e),a=t0(2),r=ps(n,a,2),r!==null&&(e0(a,r,n,e),oe(r,2),ma(r));break}}n=n.return}}function kf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Kx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Pf=!0,u.add(a),e=eS.bind(null,e,n,a),n.then(e,e))}function eS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,sn===e&&(Ue&a)===a&&(Mn===4||Mn===3&&(Ue&62914560)===Ue&&300>Tt()-nc?(Ye&2)===0&&Gr(e,0):zf|=a,Fr===Ue&&(Fr=0)),ma(e)}function tg(e,n){n===0&&(n=Et()),e=Xs(e,n),e!==null&&(oe(e,n),ma(e))}function nS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),tg(e,a)}function iS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),tg(e,a)}function aS(e,n){return V(e,n)}var cc=null,kr=null,Xf=!1,uc=!1,qf=!1,Es=0;function ma(e){e!==kr&&e.next===null&&(kr===null?cc=kr=e:kr=kr.next=e),uc=!0,Xf||(Xf=!0,rS())}function jo(e,n){if(!qf&&uc){qf=!0;do for(var a=!1,r=cc;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var x=r.suspendedLanes,w=r.pingedLanes;f=(1<<31-Ft(42|e)+1)-1,f&=u&~(x&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ag(r,f))}else f=Ue,f=dt(r,r===sn?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ht(r,f)||(a=!0,ag(r,f));r=r.next}while(a);qf=!1}}function sS(){eg()}function eg(){uc=Xf=!1;var e=0;Es!==0&&gS()&&(e=Es);for(var n=Tt(),a=null,r=cc;r!==null;){var u=r.next,f=ng(r,n);f===0?(r.next=null,a===null?cc=u:a.next=u,u===null&&(kr=a)):(a=r,(e!==0||(f&3)!==0)&&(uc=!0)),r=u}Pn!==0&&Pn!==5||jo(e),Es!==0&&(Es=0)}function ng(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Ft(f),w=1<<x,G=u[x];G===-1?((w&a)===0||(w&r)!==0)&&(u[x]=zt(w,n)):G<=n&&(e.expiredLanes|=w),f&=~w}if(n=sn,a=Ue,a=dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Gt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ht(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Gt(r),as(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=At;break;default:a=J}return r=ig.bind(null,e),a=V(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Gt(r),e.callbackPriority=2,e.callbackNode=null,2}function ig(e,n){if(Pn!==0&&Pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(lc()&&e.callbackNode!==a)return null;var r=Ue;return r=dt(e,e===sn?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(B0(e,r,n),ng(e,Tt()),e.callbackNode!=null&&e.callbackNode===a?ig.bind(null,e):null)}function ag(e,n){if(lc())return null;B0(e,n,!0)}function rS(){vS(function(){(Ye&6)!==0?V(D,sS):eg()})}function Wf(){if(Es===0){var e=wr;e===0&&(e=re,re<<=1,(re&261888)===0&&(re=256)),Es=e}return Es}function sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rs(""+e)}function rg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function oS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=sg((u[Rn]||null).action),x=r.submitter;x&&(n=(n=x[Rn]||null)?sg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var w=new vo("action","action",null,r,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Es!==0){var G=x?rg(u,x):new FormData(u);hf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(w.preventDefault(),G=x?rg(u,x):new FormData(u),hf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Yf=0;Yf<wu.length;Yf++){var jf=wu[Yf],lS=jf.toLowerCase(),cS=jf[0].toUpperCase()+jf.slice(1);Qi(lS,"on"+cS)}Qi(Ip,"onAnimationEnd"),Qi(Bp,"onAnimationIteration"),Qi(Fp,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Tx,"onTransitionRun"),Qi(Ax,"onTransitionStart"),Qi(Rx,"onTransitionCancel"),Qi(Vp,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function og(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var w=r[x],G=w.instance,nt=w.currentTarget;if(w=w.listener,G!==f&&u.isPropagationStopped())break t;f=w,u.currentTarget=nt;try{f(u)}catch(pt){Tl(pt)}u.currentTarget=null,f=G}else for(x=0;x<r.length;x++){if(w=r[x],G=w.instance,nt=w.currentTarget,w=w.listener,G!==f&&u.isPropagationStopped())break t;f=w,u.currentTarget=nt;try{f(u)}catch(pt){Tl(pt)}u.currentTarget=null,f=G}}}}function De(e,n){var a=n[ji];a===void 0&&(a=n[ji]=new Set);var r=e+"__bubble";a.has(r)||(lg(n,e,2,!1),a.add(r))}function Zf(e,n,a){var r=0;n&&(r|=4),lg(a,e,r,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[fc]){e[fc]=!0,Da.forEach(function(a){a!=="selectionchange"&&(uS.has(a)||Zf(a,!1,e),Zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fc]||(n[fc]=!0,Zf("selectionchange",!1,n))}}function lg(e,n,a,r){switch(Ig(n)){case 2:var u=BS;break;case 8:u=FS;break;default:u=fh}a=u.bind(null,n,a,e),u=void 0,!He||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Qf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var w=r.stateNode.containerInfo;if(w===u)break;if(x===4)for(x=r.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;w!==null;){if(x=oa(w),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){r=f=x;continue t}w=w.parentNode}}r=r.return}Ki(function(){var nt=f,pt=ne(a),vt=[];t:{var rt=Gp.get(e);if(rt!==void 0){var ct=vo,Qt=e;switch(e){case"keypress":if(ua(a)===0)break t;case"keydown":case"keyup":ct=ix;break;case"focusin":Qt="focus",ct=xu;break;case"focusout":Qt="blur",ct=xu;break;case"beforeblur":case"afterblur":ct=xu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=rx;break;case Ip:case Bp:case Fp:ct=jv;break;case Vp:ct=lx;break;case"scroll":case"scrollend":ct=kv;break;case"wheel":ct=ux;break;case"copy":case"cut":case"paste":ct=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=vp;break;case"toggle":case"beforetoggle":ct=hx}var le=(n&4)!==0,an=!le&&(e==="scroll"||e==="scrollend"),Z=le?rt!==null?rt+"Capture":null:rt;le=[];for(var q=nt,et;q!==null;){var _t=q;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||Z===null||(_t=di(q,Z),_t!=null&&le.push(Ko(q,_t,et))),an)break;q=q.return}0<le.length&&(rt=new ct(rt,Qt,null,a,pt),vt.push({event:rt,listeners:le}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",rt&&a!==We&&(Qt=a.relatedTarget||a.fromElement)&&(oa(Qt)||Qt[Pi]))break t;if((ct||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ct?(Qt=a.relatedTarget||a.toElement,ct=nt,Qt=Qt?oa(Qt):null,Qt!==null&&(an=c(Qt),le=Qt.tag,Qt!==an||le!==5&&le!==27&&le!==6)&&(Qt=null)):(ct=null,Qt=nt),ct!==Qt)){if(le=gp,_t="onMouseLeave",Z="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(le=vp,_t="onPointerLeave",Z="onPointerEnter",q="pointer"),an=ct==null?rt:Ca(ct),et=Qt==null?rt:Ca(Qt),rt=new le(_t,q+"leave",ct,a,pt),rt.target=an,rt.relatedTarget=et,_t=null,oa(pt)===nt&&(le=new le(Z,q+"enter",Qt,a,pt),le.target=et,le.relatedTarget=an,_t=le),an=_t,ct&&Qt)e:{for(le=fS,Z=ct,q=Qt,et=0,_t=Z;_t;_t=le(_t))et++;_t=0;for(var ae=q;ae;ae=le(ae))_t++;for(;0<et-_t;)Z=le(Z),et--;for(;0<_t-et;)q=le(q),_t--;for(;et--;){if(Z===q||q!==null&&Z===q.alternate){le=Z;break e}Z=le(Z),q=le(q)}le=null}else le=null;ct!==null&&cg(vt,rt,ct,le,!1),Qt!==null&&an!==null&&cg(vt,an,Qt,le,!0)}}t:{if(rt=nt?Ca(nt):window,ct=rt.nodeName&&rt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&rt.type==="file")var ke=Ap;else if(bp(rt))if(Rp)ke=yx;else{ke=Sx;var ee=xx}else ct=rt.nodeName,!ct||ct.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Le(nt.elementType)&&(ke=Ap):ke=Mx;if(ke&&(ke=ke(e,nt))){Tp(vt,ke,a,pt);break t}ee&&ee(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&_e(rt,"number",rt.value)}switch(ee=nt?Ca(nt):window,e){case"focusin":(bp(ee)||ee.contentEditable==="true")&&(Sr=ee,Tu=nt,To=null);break;case"focusout":To=Tu=Sr=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Pp(vt,a,pt);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":Pp(vt,a,pt)}var Ee;if(Mu)t:{switch(e){case"compositionstart":var Ne="onCompositionStart";break t;case"compositionend":Ne="onCompositionEnd";break t;case"compositionupdate":Ne="onCompositionUpdate";break t}Ne=void 0}else xr?yp(e,a)&&(Ne="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ne="onCompositionStart");Ne&&(xp&&a.locale!=="ko"&&(xr||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&xr&&(Ee=bi()):(tn=pt,ye="value"in tn?tn.value:tn.textContent,xr=!0)),ee=hc(nt,Ne),0<ee.length&&(Ne=new _p(Ne,e,null,a,pt),vt.push({event:Ne,listeners:ee}),Ee?Ne.data=Ee:(Ee=Ep(a),Ee!==null&&(Ne.data=Ee)))),(Ee=px?mx(e,a):gx(e,a))&&(Ne=hc(nt,"onBeforeInput"),0<Ne.length&&(ee=new _p("onBeforeInput","beforeinput",null,a,pt),vt.push({event:ee,listeners:Ne}),ee.data=Ee)),oS(vt,e,nt,a,pt)}og(vt,n)})}function Ko(e,n,a){return{instance:e,listener:n,currentTarget:a}}function hc(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=di(e,a),u!=null&&r.unshift(Ko(e,u,f)),u=di(e,n),u!=null&&r.push(Ko(e,u,f))),e.tag===3)return r;e=e.return}return[]}function fS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cg(e,n,a,r,u){for(var f=n._reactName,x=[];a!==null&&a!==r;){var w=a,G=w.alternate,nt=w.stateNode;if(w=w.tag,G!==null&&G===r)break;w!==5&&w!==26&&w!==27||nt===null||(G=nt,u?(nt=di(a,f),nt!=null&&x.unshift(Ko(a,nt,G))):u||(nt=di(a,f),nt!=null&&x.push(Ko(a,nt,G)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var hS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function ug(e){return(typeof e=="string"?e:""+e).replace(hS,`
`).replace(dS,"")}function fg(e,n){return n=ug(n),ug(e)===n}function nn(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Vn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Vn(e,""+r);break;case"className":Mt(e,"class",r);break;case"tabIndex":Mt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Mt(e,a,r);break;case"style":Ei(e,r,f);break;case"data":if(n!=="object"){Mt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=rs(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&nn(e,n,"name",u.name,u,null),nn(e,n,"formEncType",u.formEncType,u,null),nn(e,n,"formMethod",u.formMethod,u,null),nn(e,n,"formTarget",u.formTarget,u,null)):(nn(e,n,"encType",u.encType,u,null),nn(e,n,"method",u.method,u,null),nn(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=rs(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Me);break;case"onScroll":r!=null&&De("scroll",e);break;case"onScrollEnd":r!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=rs(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":De("beforetoggle",e),De("toggle",e),ft(e,"popover",r);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ft(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fi.get(a)||a,ft(e,a,r))}}function Jf(e,n,a,r,u,f){switch(a){case"style":Ei(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Vn(e,r):(typeof r=="number"||typeof r=="bigint")&&Vn(e,""+r);break;case"onScroll":r!=null&&De("scroll",e);break;case"onScrollEnd":r!=null&&De("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Me);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Rn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ft(e,a,r)}}}function jn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(e,n,f,x,a,null)}}u&&nn(e,n,"srcSet",a.srcSet,a,null),r&&nn(e,n,"src",a.src,a,null);return;case"input":De("invalid",e);var w=f=x=u=null,G=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var pt=a[r];if(pt!=null)switch(r){case"name":u=pt;break;case"type":x=pt;break;case"checked":G=pt;break;case"defaultChecked":nt=pt;break;case"value":f=pt;break;case"defaultValue":w=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:nn(e,n,r,pt,a,null)}}wn(e,f,w,G,nt,x,u,!1);return;case"select":De("invalid",e),r=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":f=w;break;case"defaultValue":x=w;break;case"multiple":r=w;default:nn(e,n,u,w,a,null)}n=f,a=x,e.multiple=!!r,n!=null?mn(e,!!r,n,!1):a!=null&&mn(e,!!r,a,!0);return;case"textarea":De("invalid",e),f=u=r=null;for(x in a)if(a.hasOwnProperty(x)&&(w=a[x],w!=null))switch(x){case"value":r=w;break;case"defaultValue":u=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:nn(e,n,x,w,a,null)}Jn(e,r,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(r=a[G],r!=null))switch(G){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:nn(e,n,G,r,a,null)}return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(r=0;r<Zo.length;r++)De(Zo[r],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(e,n,nt,r,a,null)}return;default:if(Le(n)){for(pt in a)a.hasOwnProperty(pt)&&(r=a[pt],r!==void 0&&Jf(e,n,pt,r,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(r=a[w],r!=null&&nn(e,n,w,r,a,null))}function pS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,w=null,G=null,nt=null,pt=null;for(ct in a){var vt=a[ct];if(a.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=vt;default:r.hasOwnProperty(ct)||nn(e,n,ct,null,r,vt)}}for(var rt in r){var ct=r[rt];if(vt=a[rt],r.hasOwnProperty(rt)&&(ct!=null||vt!=null))switch(rt){case"type":f=ct;break;case"name":u=ct;break;case"checked":nt=ct;break;case"defaultChecked":pt=ct;break;case"value":x=ct;break;case"defaultValue":w=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==vt&&nn(e,n,rt,ct,r,vt)}}qt(e,x,w,G,nt,pt,f,u);return;case"select":ct=x=w=rt=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ct=G;default:r.hasOwnProperty(f)||nn(e,n,f,null,r,G)}for(u in r)if(f=r[u],G=a[u],r.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":rt=f;break;case"defaultValue":w=f;break;case"multiple":x=f;default:f!==G&&nn(e,n,u,f,r,G)}n=w,a=x,r=ct,rt!=null?mn(e,!!a,rt,!1):!!r!=!!a&&(n!=null?mn(e,!!a,n,!0):mn(e,!!a,a?[]:"",!1));return;case"textarea":ct=rt=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:nn(e,n,w,null,r,u)}for(x in r)if(u=r[x],f=a[x],r.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":rt=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&nn(e,n,x,u,r,f)}Fn(e,rt,ct);return;case"option":for(var Qt in a)if(rt=a[Qt],a.hasOwnProperty(Qt)&&rt!=null&&!r.hasOwnProperty(Qt))switch(Qt){case"selected":e.selected=!1;break;default:nn(e,n,Qt,null,r,rt)}for(G in r)if(rt=r[G],ct=a[G],r.hasOwnProperty(G)&&rt!==ct&&(rt!=null||ct!=null))switch(G){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:nn(e,n,G,rt,r,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)rt=a[le],a.hasOwnProperty(le)&&rt!=null&&!r.hasOwnProperty(le)&&nn(e,n,le,null,r,rt);for(nt in r)if(rt=r[nt],ct=a[nt],r.hasOwnProperty(nt)&&rt!==ct&&(rt!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:nn(e,n,nt,rt,r,ct)}return;default:if(Le(n)){for(var an in a)rt=a[an],a.hasOwnProperty(an)&&rt!==void 0&&!r.hasOwnProperty(an)&&Jf(e,n,an,void 0,r,rt);for(pt in r)rt=r[pt],ct=a[pt],!r.hasOwnProperty(pt)||rt===ct||rt===void 0&&ct===void 0||Jf(e,n,pt,rt,r,ct);return}}for(var Z in a)rt=a[Z],a.hasOwnProperty(Z)&&rt!=null&&!r.hasOwnProperty(Z)&&nn(e,n,Z,null,r,rt);for(vt in r)rt=r[vt],ct=a[vt],!r.hasOwnProperty(vt)||rt===ct||rt==null&&ct==null||nn(e,n,vt,rt,r,ct)}function hg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,x=u.initiatorType,w=u.duration;if(f&&w&&hg(x)){for(x=0,w=u.responseEnd,r+=1;r<a.length;r++){var G=a[r],nt=G.startTime;if(nt>w)break;var pt=G.transferSize,vt=G.initiatorType;pt&&hg(vt)&&(G=G.responseEnd,x+=pt*(G<w?1:(w-nt)/(G-nt)))}if(--r,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $f=null,th=null;function dc(e){return e.nodeType===9?e:e.ownerDocument}function dg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function eh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nh=null;function gS(){var e=window.event;return e&&e.type==="popstate"?e===nh?!1:(nh=e,!0):(nh=null,!1)}var mg=typeof setTimeout=="function"?setTimeout:void 0,_S=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(e){return gg.resolve(null).then(e).catch(xS)}:mg;function xS(e){setTimeout(function(){throw e})}function bs(e){return e==="head"}function _g(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),Yr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Qo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Qo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,w=f.nodeName;f[Zi]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Qo(e.ownerDocument.body);a=u}while(a);Yr(n)}function vg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function ih(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ih(a),zi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function SS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Zi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ki(e.nextSibling),e===null)break}return null}function MS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ki(e.nextSibling),e===null))return null;return e}function xg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ki(e.nextSibling),e===null))return null;return e}function ah(e){return e.data==="$?"||e.data==="$~"}function sh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ki(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var rh=null;function Sg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ki(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Mg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function yg(e,n,a){switch(n=dc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Qo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);zi(e)}var Xi=new Map,Eg=new Set;function pc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qa=B.d;B.d={f:ES,r:bS,D:TS,C:AS,L:RS,m:wS,X:DS,S:CS,M:US};function ES(){var e=qa.f(),n=sc();return e||n}function bS(e){var n=ui(e);n!==null&&n.tag===5&&n.type==="form"?Vm(n):qa.r(e)}var Xr=typeof document>"u"?null:document;function bg(e,n,a){var r=Xr;if(r&&typeof n=="string"&&n){var u=me(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Eg.has(u)||(Eg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),jn(n,"link",e),un(n),r.head.appendChild(n)))}}function TS(e){qa.D(e),bg("dns-prefetch",e,null)}function AS(e,n){qa.C(e,n),bg("preconnect",e,n)}function RS(e,n,a){qa.L(e,n,a);var r=Xr;if(r&&e&&n){var u='link[rel="preload"][as="'+me(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+me(a.imageSizes)+'"]')):u+='[href="'+me(e)+'"]';var f=u;switch(n){case"style":f=qr(e);break;case"script":f=Wr(e)}Xi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Xi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Jo(f))||n==="script"&&r.querySelector($o(f))||(n=r.createElement("link"),jn(n,"link",e),un(n),r.head.appendChild(n)))}}function wS(e,n){qa.m(e,n);var a=Xr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+me(r)+'"][href="'+me(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Wr(e)}if(!Xi.has(f)&&(e=v({rel:"modulepreload",href:e},n),Xi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($o(f)))return}r=a.createElement("link"),jn(r,"link",e),un(r),a.head.appendChild(r)}}}function CS(e,n,a){qa.S(e,n,a);var r=Xr;if(r&&e){var u=la(r).hoistableStyles,f=qr(e);n=n||"default";var x=u.get(f);if(!x){var w={loading:0,preload:null};if(x=r.querySelector(Jo(f)))w.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Xi.get(f))&&oh(e,a);var G=x=r.createElement("link");un(G),jn(G,"link",e),G._p=new Promise(function(nt,pt){G.onload=nt,G.onerror=pt}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,mc(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:w},u.set(f,x)}}}function DS(e,n){qa.X(e,n);var a=Xr;if(a&&e){var r=la(a).hoistableScripts,u=Wr(e),f=r.get(u);f||(f=a.querySelector($o(u)),f||(e=v({src:e,async:!0},n),(n=Xi.get(u))&&lh(e,n),f=a.createElement("script"),un(f),jn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function US(e,n){qa.M(e,n);var a=Xr;if(a&&e){var r=la(a).hoistableScripts,u=Wr(e),f=r.get(u);f||(f=a.querySelector($o(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=Xi.get(u))&&lh(e,n),f=a.createElement("script"),un(f),jn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Tg(e,n,a,r){var u=(u=lt.current)?pc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=qr(a.href),a=la(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=qr(a.href);var f=la(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(Jo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),Xi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xi.set(e,a),f||NS(u,e,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Wr(a),a=la(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function qr(e){return'href="'+me(e)+'"'}function Jo(e){return'link[rel="stylesheet"]['+e+"]"}function Ag(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function NS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),jn(n,"link",a),un(n),e.head.appendChild(n))}function Wr(e){return'[src="'+me(e)+'"]'}function $o(e){return"script[async]"+e}function Rg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+me(a.href)+'"]');if(r)return n.instance=r,un(r),r;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),un(r),jn(r,"style",u),mc(r,a.precedence,e),n.instance=r;case"stylesheet":u=qr(a.href);var f=e.querySelector(Jo(u));if(f)return n.state.loading|=4,n.instance=f,un(f),f;r=Ag(a),(u=Xi.get(u))&&oh(r,u),f=(e.ownerDocument||e).createElement("link"),un(f);var x=f;return x._p=new Promise(function(w,G){x.onload=w,x.onerror=G}),jn(f,"link",r),n.state.loading|=4,mc(f,a.precedence,e),n.instance=f;case"script":return f=Wr(a.src),(u=e.querySelector($o(f)))?(n.instance=u,un(u),u):(r=a,(u=Xi.get(f))&&(r=v({},a),lh(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),un(u),jn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,mc(r,a.precedence,e));return n.instance}function mc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,x=0;x<r.length;x++){var w=r[x];if(w.dataset.precedence===n)f=w;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var gc=null;function wg(e,n,a){if(gc===null){var r=new Map,u=gc=new Map;u.set(a,r)}else u=gc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Zi]||f[pn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var w=r.get(x);w?w.push(f):r.set(x,[f])}}return r}function Cg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function LS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Dg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function OS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=qr(r.href),f=n.querySelector(Jo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=_c.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,un(f);return}f=n.ownerDocument||n,r=Ag(r),(u=Xi.get(u))&&oh(r,u),f=f.createElement("link"),un(f);var x=f;x._p=new Promise(function(w,G){x.onload=w,x.onerror=G}),jn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_c.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ch=0;function PS(e,n){return e.stylesheets&&e.count===0&&xc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&xc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ch===0&&(ch=62500*mS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ch?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vc=null;function xc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vc=new Map,n.forEach(zS,e),vc=null,_c.call(e))}function zS(e,n){if(!(n.state.loading&4)){var a=vc.get(e);if(a)var r=a.get(null);else{a=new Map,vc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,u),a.set(x,u),this.count++,r=_c.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var tl={$$typeof:N,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function IS(e,n,a,r,u,f,x,w,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.hiddenUpdates=Kt(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Ug(e,n,a,r,u,f,x,w,G,nt,pt,vt){return e=new IS(e,n,a,x,G,nt,pt,vt,w),n=1,f===!0&&(n|=24),f=Ai(3,null,null,n),e.current=f,f.stateNode=e,n=Gu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},qu(f),e}function Ng(e){return e?(e=Er,e):Er}function Lg(e,n,a,r,u,f){u=Ng(u),r.context===null?r.context=u:r.pendingContext=u,r=ds(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ps(e,r,n),a!==null&&(xi(a,e,n),No(a,e,n))}function Og(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function uh(e,n){Og(e,n),(e=e.alternate)&&Og(e,n)}function Pg(e){if(e.tag===13||e.tag===31){var n=Xs(e,67108864);n!==null&&xi(n,e,67108864),uh(e,67108864)}}function zg(e){if(e.tag===13||e.tag===31){var n=Ui();n=sa(n);var a=Xs(e,n);a!==null&&xi(a,e,n),uh(e,n)}}var Sc=!0;function BS(e,n,a,r){var u=O.T;O.T=null;var f=B.p;try{B.p=2,fh(e,n,a,r)}finally{B.p=f,O.T=u}}function FS(e,n,a,r){var u=O.T;O.T=null;var f=B.p;try{B.p=8,fh(e,n,a,r)}finally{B.p=f,O.T=u}}function fh(e,n,a,r){if(Sc){var u=hh(r);if(u===null)Qf(e,n,r,Mc,a),Bg(e,r);else if(GS(u,e,n,a,r))r.stopPropagation();else if(Bg(e,r),n&4&&-1<VS.indexOf(e)){for(;u!==null;){var f=ui(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ct(f.pendingLanes);if(x!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var G=1<<31-Ft(x);w.entanglements[1]|=G,x&=~G}ma(f),(Ye&6)===0&&(ic=Tt()+500,jo(0))}}break;case 31:case 13:w=Xs(f,2),w!==null&&xi(w,f,2),sc(),uh(f,2)}if(f=hh(r),f===null&&Qf(e,n,r,Mc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Qf(e,n,r,null,a)}}function hh(e){return e=ne(e),dh(e)}var Mc=null;function dh(e){if(Mc=null,e=oa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Mc=e,null}function Ig(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ae()){case D:return 2;case E:return 8;case J:case gt:return 32;case At:return 268435456;default:return 32}default:return 32}}var ph=!1,Ts=null,As=null,Rs=null,el=new Map,nl=new Map,ws=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bg(e,n){switch(e){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ui(n),n!==null&&Pg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function GS(e,n,a,r,u){switch(n){case"focusin":return Ts=il(Ts,e,n,a,r,u),!0;case"dragenter":return As=il(As,e,n,a,r,u),!0;case"mouseover":return Rs=il(Rs,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return el.set(f,il(el.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,nl.set(f,il(nl.get(f)||null,e,n,a,r,u)),!0}return!1}function Fg(e){var n=oa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,ss(e.priority,function(){zg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,ss(e.priority,function(){zg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=hh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);We=r,a.target.dispatchEvent(r),We=null}else return n=ui(a),n!==null&&Pg(n),e.blockedOn=a,!1;n.shift()}return!0}function Vg(e,n,a){yc(e)&&a.delete(n)}function HS(){ph=!1,Ts!==null&&yc(Ts)&&(Ts=null),As!==null&&yc(As)&&(As=null),Rs!==null&&yc(Rs)&&(Rs=null),el.forEach(Vg),nl.forEach(Vg)}function Ec(e,n){e.blockedOn===n&&(e.blockedOn=null,ph||(ph=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,HS)))}var bc=null;function Gg(e){bc!==e&&(bc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){bc===e&&(bc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(dh(r||a)===null)continue;break}var f=ui(a);f!==null&&(e.splice(n,3),n-=3,hf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Yr(e){function n(G){return Ec(G,e)}Ts!==null&&Ec(Ts,e),As!==null&&Ec(As,e),Rs!==null&&Ec(Rs,e),el.forEach(n),nl.forEach(n);for(var a=0;a<ws.length;a++){var r=ws[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ws.length&&(a=ws[0],a.blockedOn===null);)Fg(a),a.blockedOn===null&&ws.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],x=u[Rn]||null;if(typeof f=="function")x||Gg(a);else if(x){var w=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Rn]||null)w=x.formAction;else if(dh(u)!==null)continue}else w=x.action;typeof w=="function"?a[r+1]=w:(a.splice(r,3),r-=3),Gg(a)}}}function Hg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function mh(e){this._internalRoot=e}Tc.prototype.render=mh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Ui();Lg(a,r,e,n,null,null)},Tc.prototype.unmount=mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Lg(e.current,2,null,e,null,null),sc(),n[Pi]=null}};function Tc(e){this._internalRoot=e}Tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=vr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ws.length&&n!==0&&n<ws[a].priority;a++);ws.splice(a,0,e),a===0&&Fg(e)}};var kg=t.version;if(kg!=="19.2.7")throw Error(s(527,kg,"19.2.7"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var kS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{ut=Ac.inject(kS),ht=Ac}catch{}}return sl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Km,f=Qm,x=Jm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Ug(e,1,!1,null,null,a,r,null,u,f,x,Hg),e[Pi]=n.current,Kf(e),new mh(n)},sl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Km,x=Qm,w=Jm,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Ug(e,1,!0,n,a??null,r,u,G,f,x,w,Hg),n.context=Ng(null),a=n.current,r=Ui(),r=sa(r),u=ds(r),u.callback=null,ps(a,u,r),a=r,n.current.lanes=a,oe(n,a),ma(n),e[Pi]=n.current,Kf(e),new Tc(n)},sl.version="19.2.7",sl}var $g;function $S(){if($g)return vh.exports;$g=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),vh.exports=JS(),vh.exports}var tM=$S();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nM=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),t_=o=>{const t=nM(o);return t.charAt(0).toUpperCase()+t.slice(1)},sv=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),iM=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var aM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=$t.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...p},m)=>$t.createElement("svg",{ref:m,...aM,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:sv("lucide",l),...!c&&!iM(p)&&{"aria-hidden":"true"},...p},[...h.map(([d,_])=>$t.createElement(d,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=(o,t)=>{const i=$t.forwardRef(({className:s,...l},c)=>$t.createElement(sM,{ref:c,iconNode:t,className:sv(`lucide-${eM(t_(o))}`,`lucide-${o}`,s),...l}));return i.displayName=t_(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],oM=Vs("arrow-down-to-line",rM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],cM=Vs("arrow-left",lM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],fM=Vs("book-open",uM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]],dM=Vs("flashlight",hM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],mM=Vs("move",pM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],_M=Vs("shield",gM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],xM=Vs("sparkles",vM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],rv=Vs("zap",SM);class MM{constructor(){this.ctx=null,this.masterVolume=null,this.humNode=null,this.humVolume=null,this.heartbeatInterval=null,this.isHumming=!1,this.volumeLevel=.5,this.breathingInterval=null}init(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterVolume=this.ctx.createGain(),this.masterVolume.gain.setValueAtTime(this.volumeLevel,this.ctx.currentTime),this.masterVolume.connect(this.ctx.destination)}catch(t){console.error("Web Audio API not supported",t)}}setVolume(t){this.volumeLevel=t,this.masterVolume&&this.ctx&&this.masterVolume.gain.setValueAtTime(t,this.ctx.currentTime)}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startBackgroundHum(){if(this.init(),this.resume(),!(!this.ctx||!this.masterVolume||this.isHumming))try{this.isHumming=!0;const t=this.ctx,i=t.createOscillator();i.type="triangle",i.frequency.setValueAtTime(60,t.currentTime);const s=t.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(120,t.currentTime);const l=t.createOscillator();l.type="sine",l.frequency.setValueAtTime(360,t.currentTime);const c=t.createBiquadFilter();c.type="bandpass",c.Q.setValueAtTime(1.5,t.currentTime),c.frequency.setValueAtTime(100,t.currentTime);const h=t.createGain();h.gain.setValueAtTime(.015,t.currentTime);const p=t.createGain();p.gain.setValueAtTime(.005,t.currentTime),this.humVolume=t.createGain(),this.humVolume.gain.setValueAtTime(.12,t.currentTime),i.connect(this.humVolume),s.connect(h),h.connect(c),l.connect(p),p.connect(c),c.connect(this.humVolume),this.humVolume.connect(this.masterVolume),i.start(),s.start(),l.start(),this.humNode=i;const m=()=>{if(!this.isHumming||!t||!this.humVolume)return;const d=Math.random()*8e3+2e3;setTimeout(()=>{if(!this.isHumming||!t||!this.humVolume)return;const _=t.currentTime;this.humVolume.gain.setValueAtTime(.12,_),this.humVolume.gain.exponentialRampToValueAtTime(.01,_+.05),this.playClick(.05,120),this.humVolume.gain.setValueAtTime(.01,_+.15),this.humVolume.gain.exponentialRampToValueAtTime(.12,_+.25),m()},d)};m()}catch(t){console.error("Failed to start hum",t)}}stopBackgroundHum(){if(this.isHumming=!1,this.humNode){try{this.humNode.stop()}catch{}this.humNode=null}if(this.humVolume){try{this.humVolume.disconnect()}catch{}this.humVolume=null}}playClick(t=.1,i=200){if(!this.ctx||!this.masterVolume)return;const s=this.ctx,l=s.createOscillator(),c=s.createGain();l.type="sine",l.frequency.setValueAtTime(i,s.currentTime),l.frequency.exponentialRampToValueAtTime(40,s.currentTime+.05),c.gain.setValueAtTime(t,s.currentTime),c.gain.exponentialRampToValueAtTime(.001,s.currentTime+.05),l.connect(c),c.connect(this.masterVolume),l.start(),l.stop(s.currentTime+.06)}playFootstep(){if(this.resume(),!this.ctx||!this.masterVolume)return;const t=this.ctx,i=t.currentTime,s=t.createOscillator(),l=t.createGain();s.type="sine",s.frequency.setValueAtTime(80,i),s.frequency.exponentialRampToValueAtTime(30,i+.12);const c=t.createBuffer(1,t.sampleRate*.15,t.sampleRate),h=c.getChannelData(0);for(let _=0;_<c.length;_++)h[_]=Math.random()*2-1;const p=t.createBufferSource();p.buffer=c;const m=t.createBiquadFilter();m.type="lowpass",m.frequency.setValueAtTime(150,i);const d=t.createGain();d.gain.setValueAtTime(.03,i),d.gain.exponentialRampToValueAtTime(.001,i+.15),p.connect(m),m.connect(d),d.connect(this.masterVolume),l.gain.setValueAtTime(.2,i),l.gain.exponentialRampToValueAtTime(.001,i+.15),s.connect(l),l.connect(this.masterVolume),s.start(i),s.stop(i+.16),p.start(i),p.stop(i+.16)}startHeartbeat(t){if(this.resume(),!this.ctx||!this.masterVolume)return;this.stopHeartbeat();const s=60/(60+t*105)*1e3,l=()=>{if(!this.ctx||!this.masterVolume)return;const c=this.ctx,h=c.currentTime,p=c.createOscillator(),m=c.createGain();p.type="sine",p.frequency.setValueAtTime(55,h),p.frequency.exponentialRampToValueAtTime(15,h+.1),m.gain.setValueAtTime(.3*(.6+t*.4),h),m.gain.exponentialRampToValueAtTime(.001,h+.12),p.connect(m),m.connect(this.masterVolume),p.start(h),p.stop(h+.13),setTimeout(()=>{if(!this.ctx||!this.masterVolume)return;const d=this.ctx.currentTime,_=this.ctx.createOscillator(),v=this.ctx.createGain();_.type="sine",_.frequency.setValueAtTime(60,d),_.frequency.exponentialRampToValueAtTime(15,d+.12),v.gain.setValueAtTime(.25*(.6+t*.4),d),v.gain.exponentialRampToValueAtTime(.001,d+.15),_.connect(v),v.connect(this.masterVolume),_.start(d),_.stop(d+.16)},150)};l(),this.heartbeatInterval=setInterval(l,s)}stopHeartbeat(){this.heartbeatInterval&&(clearInterval(this.heartbeatInterval),this.heartbeatInterval=null)}startBreathing(){if(this.resume(),!this.ctx||!this.masterVolume||this.breathingInterval)return;const t=()=>{if(!this.ctx||!this.masterVolume)return;const i=this.ctx,s=i.currentTime,l=i.createBuffer(1,i.sampleRate*1.5,i.sampleRate),c=l.getChannelData(0);for(let d=0;d<l.length;d++)c[d]=Math.random()*2-1;const h=i.createBufferSource();h.buffer=l;const p=i.createBiquadFilter();p.type="bandpass",p.frequency.setValueAtTime(300,s),p.frequency.linearRampToValueAtTime(700,s+1.2),p.Q.setValueAtTime(.5,s);const m=i.createGain();m.gain.setValueAtTime(.001,s),m.gain.linearRampToValueAtTime(.05,s+.6),m.gain.linearRampToValueAtTime(.001,s+1.2),h.connect(p),p.connect(m),m.connect(this.masterVolume),h.start(s),h.stop(s+1.3),setTimeout(()=>{if(!this.ctx||!this.masterVolume)return;const d=this.ctx.currentTime,_=this.ctx.createBuffer(1,this.ctx.sampleRate*1.8,this.ctx.sampleRate),v=_.getChannelData(0);for(let A=0;A<_.length;A++)v[A]=Math.random()*2-1;const g=this.ctx.createBufferSource();g.buffer=_;const y=this.ctx.createBiquadFilter();y.type="bandpass",y.frequency.setValueAtTime(600,d),y.frequency.linearRampToValueAtTime(250,d+1.5),y.Q.setValueAtTime(.5,d);const b=this.ctx.createGain();b.gain.setValueAtTime(.001,d),b.gain.linearRampToValueAtTime(.06,d+.4),b.gain.linearRampToValueAtTime(.001,d+1.5),g.connect(y),y.connect(b),b.connect(this.masterVolume),g.start(d),g.stop(d+1.6)},1400)};t(),this.breathingInterval=setInterval(t,3200)}stopBreathing(){this.breathingInterval&&(clearInterval(this.breathingInterval),this.breathingInterval=null)}playEntityTwitchSpatial(t,i,s,l,c,h){if(this.resume(),!this.ctx||!this.masterVolume)return;const p=this.ctx,m=p.currentTime;try{const d=t-l,_=s-c,v=Math.sqrt(d*d+_*_);if(v<.1)return;const y=Math.max(0,1-v/30);if(y<=.01)return;const A=Math.atan2(d,_)-h,M=Math.sin(A);let S;p.createStereoPanner?(S=p.createStereoPanner(),S.pan.setValueAtTime(M,m)):S=p.createGain();const C=p.createBuffer(1,p.sampleRate*.35,p.sampleRate),N=C.getChannelData(0);for(let P=0;P<C.length;P++)N[P]=Math.random()*2-1;const L=p.createBufferSource();L.buffer=C;const H=p.createBiquadFilter();H.type="bandpass",H.frequency.setValueAtTime(140+Math.random()*60,m),H.Q.setValueAtTime(1.2,m);const U=p.createGain();U.gain.setValueAtTime(y*.22,m),U.gain.linearRampToValueAtTime(y*.25,m+.08),U.gain.setValueAtTime(0,m+.12),U.gain.setValueAtTime(y*.15,m+.16),U.gain.exponentialRampToValueAtTime(.001,m+.33);const I=p.createOscillator(),T=p.createGain();I.type="triangle",I.frequency.setValueAtTime(55,m),I.frequency.linearRampToValueAtTime(40,m+.3),T.gain.setValueAtTime(y*.35,m),T.gain.exponentialRampToValueAtTime(.001,m+.3),L.connect(H),H.connect(U),U.connect(S),I.connect(S),T.connect(S),S.connect(this.masterVolume),L.start(m),L.stop(m+.35),I.start(m),I.stop(m+.35)}catch(d){console.error("Spatial play error",d)}}playEntityFootstepSpatial(t,i,s,l,c,h,p){if(this.resume(),!this.ctx||!this.masterVolume)return;const m=this.ctx,d=m.currentTime;try{const _=t-l,v=s-c,g=Math.sqrt(_*_+v*v);if(g<.1)return;const b=Math.pow(Math.max(0,1-g/35),.75);if(b<=.01)return;const M=Math.atan2(_,v)-h,S=Math.sin(M);let C;m.createStereoPanner?(C=m.createStereoPanner(),C.pan.setValueAtTime(S,d)):C=m.createGain();const N=m.createOscillator(),L=m.createGain();N.type="sine";const H=p?95:75,U=p?45:35,I=p?.35:.5;N.frequency.setValueAtTime(H,d),N.frequency.exponentialRampToValueAtTime(U,d+I);const T=m.createBiquadFilter();T.type="lowpass",T.frequency.setValueAtTime(250,d),L.gain.setValueAtTime(b*(p?3.5:2.5),d),L.gain.exponentialRampToValueAtTime(.001,d+I),N.connect(T),T.connect(L),L.connect(C);const P=m.createBuffer(1,m.sampleRate*.4,m.sampleRate),Y=P.getChannelData(0);for(let at=0;at<P.length;at++)Y[at]=Math.random()*2-1;const F=m.createBufferSource();F.buffer=P;const j=m.createBiquadFilter();j.type="lowpass",j.frequency.setValueAtTime(p?350:250,d);const ot=m.createGain();ot.gain.setValueAtTime(b*(p?.8:.5),d),p?(ot.gain.linearRampToValueAtTime(b*1.2,d+.05),ot.gain.linearRampToValueAtTime(b*.3,d+.1),ot.gain.linearRampToValueAtTime(b*.9,d+.15)):ot.gain.linearRampToValueAtTime(b*.7,d+.12),ot.gain.exponentialRampToValueAtTime(.001,d+.35),F.connect(j),j.connect(ot),ot.connect(C);const st=m.createOscillator(),X=m.createGain();st.type="triangle";const O=p?180:120;st.frequency.setValueAtTime(O,d),st.frequency.exponentialRampToValueAtTime(40,d+.08);const B=m.createBiquadFilter();B.type="lowpass",B.frequency.setValueAtTime(250,d),X.gain.setValueAtTime(b*(p?.7:.4),d),X.gain.exponentialRampToValueAtTime(.001,d+.09),st.connect(B),B.connect(X),X.connect(C),C.connect(this.masterVolume),N.start(d),N.stop(d+I+.05),F.start(d),F.stop(d+.4),st.start(d),st.stop(d+.1)}catch(_){console.error("Entity footstep play error",_)}}playJumpscare(){if(this.resume(),!this.ctx||!this.masterVolume)return;this.stopHeartbeat();const t=this.ctx,i=t.currentTime,s=5,l=t.createGain();l.gain.setValueAtTime(.8,i),l.gain.exponentialRampToValueAtTime(.01,i+2.5),l.connect(this.masterVolume);for(let g=0;g<s;g++){const y=t.createOscillator();y.type=g%2===0?"sawtooth":"square",y.frequency.setValueAtTime(300+g*157+Math.random()*50,i),y.frequency.exponentialRampToValueAtTime(2e3+Math.random()*1e3,i+.4),y.frequency.exponentialRampToValueAtTime(150,i+2);const b=t.createGain();b.gain.setValueAtTime(.12,i),b.gain.exponentialRampToValueAtTime(.001,i+2),y.connect(b),b.connect(l),y.start(i),y.stop(i+2.6)}const c=t.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(120,i),c.frequency.linearRampToValueAtTime(30,i+1);const h=t.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(200,i);const p=t.createGain();p.gain.setValueAtTime(.8,i),p.gain.exponentialRampToValueAtTime(.001,i+1.5),c.connect(h),h.connect(p),p.connect(l),c.start(i),c.stop(i+1.6);const m=t.createBuffer(1,t.sampleRate*2.5,t.sampleRate),d=m.getChannelData(0);for(let g=0;g<m.length;g++)d[g]=Math.random()*2-1;const _=t.createBufferSource();_.buffer=m;const v=t.createGain();v.gain.setValueAtTime(.5,i),v.gain.exponentialRampToValueAtTime(.01,i+2),_.connect(v),v.connect(l),_.start(i),_.stop(i+2.6)}playBatteryPickup(){if(this.resume(),!this.ctx||!this.masterVolume)return;const t=this.ctx,i=t.currentTime,s=t.createOscillator(),l=t.createOscillator(),c=t.createGain();s.type="sine",s.frequency.setValueAtTime(523.25,i),s.frequency.setValueAtTime(783.99,i+.08),l.type="triangle",l.frequency.setValueAtTime(1046.5,i),l.frequency.setValueAtTime(1567.98,i+.08),c.gain.setValueAtTime(.15,i),c.gain.exponentialRampToValueAtTime(.001,i+.3),s.connect(c),l.connect(c),c.connect(this.masterVolume),s.start(i),l.start(i),s.stop(i+.35),l.stop(i+.35)}playKeycardPickup(){if(this.resume(),!this.ctx||!this.masterVolume)return;const t=this.ctx,i=t.currentTime,s=t.createOscillator(),l=t.createGain();s.type="triangle",s.frequency.setValueAtTime(440,i),s.frequency.setValueAtTime(554.37,i+.1),s.frequency.setValueAtTime(659.25,i+.2),s.frequency.setValueAtTime(880,i+.3),l.gain.setValueAtTime(.18,i),l.gain.exponentialRampToValueAtTime(.001,i+.6),s.connect(l),l.connect(this.masterVolume),s.start(i),s.stop(i+.65)}playFlashlightClick(){this.playClick(.15,600)}playEscapeChime(){if(this.resume(),!this.ctx||!this.masterVolume)return;const t=this.ctx,i=t.currentTime;[261.63,329.63,392,523.25].forEach((l,c)=>{const h=t.createOscillator(),p=t.createGain();h.type="sine",h.frequency.setValueAtTime(l,i+c*.1),h.frequency.exponentialRampToValueAtTime(l*2,i+1),p.gain.setValueAtTime(.1,i+c*.1),p.gain.exponentialRampToValueAtTime(.001,i+1.5),h.connect(p),p.connect(this.masterVolume),h.start(i),h.stop(i+1.6)})}playAmbientClank(){if(this.resume(),!this.ctx||!this.masterVolume)return;const t=this.ctx,i=t.currentTime,s=t.createOscillator(),l=t.createGain();s.type="sawtooth",s.frequency.setValueAtTime(100+Math.random()*50,i),s.frequency.exponentialRampToValueAtTime(10,i+.8);const c=t.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(600,i),c.Q.setValueAtTime(3,i),l.gain.setValueAtTime(.12,i),l.gain.exponentialRampToValueAtTime(.001,i+.8),s.connect(c),c.connect(l),l.connect(this.masterVolume),s.start(i),s.stop(i+.85)}}const yn=new MM,yM="/assets/backrooms_classic_lobby_1782420315664-CpRFQoRP.jpg",EM=({onStartGame:o})=>{const[t]=$t.useState(1.5),[i]=$t.useState(.5),[s]=$t.useState(!0),[l]=$t.useState("NORMAL"),[c,h]=$t.useState("MENU"),[p,m]=$t.useState(0),_=[{label:"Start",action:()=>{yn.init(),yn.setVolume(i),o({sensitivity:t,soundVolume:i,lowResMode:s,difficulty:l})}},{label:"Survival Manual",action:()=>h("SURVIVAL")}];return St.jsxs("div",{className:"relative w-full h-full min-h-screen bg-black text-amber-100 font-vt flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden",children:[St.jsx("div",{className:"absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105",style:{backgroundImage:`url(${yM})`,filter:"brightness(0.65) contrast(1.15) saturate(0.9)"}}),St.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.06] z-10",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}),St.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.14] z-10",style:{backgroundImage:"linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.5) 50%)",backgroundSize:"100% 6px"}}),St.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.9)_100%)] z-10"}),St.jsxs("div",{className:"relative z-20 flex flex-col justify-between h-full w-full max-w-7xl mx-auto my-auto grow",children:[c==="MENU"?St.jsxs("div",{className:"flex flex-col justify-between h-full w-full grow pt-12 md:pt-16 pb-6",children:[St.jsxs("div",{className:"flex flex-col gap-1 items-start select-none",children:[St.jsxs("div",{className:"relative group select-none",children:[St.jsx("h1",{className:"text-5xl sm:text-6xl md:text-8xl font-black tracking-widest uppercase text-[#00ffff] absolute -left-[3px] -top-[1px] opacity-70 mix-blend-screen select-none pointer-events-none font-vt whitespace-nowrap",children:"THE BACKROOMS"}),St.jsx("h1",{className:"text-5xl sm:text-6xl md:text-8xl font-black tracking-widest uppercase text-[#ff0000] absolute left-[3px] top-[1px] opacity-70 mix-blend-screen select-none pointer-events-none font-vt whitespace-nowrap",children:"THE BACKROOMS"}),St.jsx("h1",{className:"text-5xl sm:text-6xl md:text-8xl font-black tracking-widest uppercase text-white relative z-10 font-vt shadow-black drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] whitespace-nowrap",children:"THE BACKROOMS"})]}),St.jsx("p",{className:"text-amber-500/80 uppercase tracking-[0.3em] text-lg font-mono font-bold mt-1 pl-1",children:"LEVEL 0 // ANALOG SIGNAL RECORDING"})]}),St.jsx("div",{className:"flex flex-col gap-4 items-start pl-2 md:pl-6 max-w-md mt-auto mb-12",children:_.map((v,g)=>{const y=p===g;return St.jsxs("button",{onClick:v.action,onMouseEnter:()=>m(g),className:"flex items-center text-4xl md:text-5xl text-left bg-transparent border-none outline-none cursor-pointer group transition-all duration-150",children:[St.jsx("span",{className:`font-vt uppercase tracking-wider transition-all duration-150 ${y?"text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] scale-105 pl-2":"text-amber-200/55 hover:text-amber-100"}`,children:v.label}),y&&St.jsx("span",{className:"text-white text-3xl md:text-4xl font-mono ml-4 animate-pulse",children:"<"})]},v.label)})})]}):St.jsx("div",{className:"flex flex-col justify-center items-center h-full w-full max-w-2xl mx-auto p-4 my-auto",children:St.jsxs("div",{className:"w-full bg-black/85 border border-amber-500/40 rounded p-6 shadow-[0_0_35px_rgba(217,119,6,0.15)] flex flex-col gap-6 relative",children:[St.jsxs("div",{className:"flex justify-between items-center border-b border-amber-500/20 pb-3",children:[St.jsxs("div",{className:"flex items-center gap-2",children:[St.jsx(fM,{className:"w-6 h-6 text-amber-500"}),St.jsx("h2",{className:"text-3xl font-vt text-amber-500 uppercase tracking-widest",children:"SURVIVAL MANUAL"})]}),St.jsxs("button",{onClick:()=>h("MENU"),className:"px-3 py-1 bg-amber-950/40 hover:bg-amber-600 hover:text-black border border-amber-500/30 text-amber-400 font-mono text-xs rounded transition-all cursor-pointer uppercase flex items-center gap-1.5",children:[St.jsx(cM,{className:"w-3.5 h-3.5"})," Back"]})]}),St.jsxs("ul",{className:"flex flex-col gap-4 text-amber-200/90 font-mono text-xs md:text-sm",children:[St.jsxs("li",{className:"flex gap-3 items-start bg-black/40 p-3 rounded border border-amber-200/5",children:[St.jsx(mM,{className:"w-5 h-5 text-amber-500 shrink-0 mt-0.5"}),St.jsxs("div",{children:[St.jsx("strong",{className:"text-amber-400 font-bold block uppercase tracking-wider text-[11px] mb-1",children:"CONTROLS"}),"Use ",St.jsx("span",{className:"text-amber-400 font-bold",children:"WASD"})," or ",St.jsx("span",{className:"text-amber-400 font-bold",children:"Arrow Keys"})," to walk. Drag your mouse or swipe the screen to look. Hold ",St.jsx("span",{className:"text-amber-400 font-bold",children:"L-SHIFT"})," to run (uses stamina)."]})]}),St.jsxs("li",{className:"flex gap-3 items-start bg-black/40 p-3 rounded border border-amber-200/5",children:[St.jsx(rv,{className:"w-5 h-5 text-amber-500 shrink-0 mt-0.5"}),St.jsxs("div",{children:[St.jsx("strong",{className:"text-amber-400 font-bold block uppercase tracking-wider text-[11px] mb-1",children:"THE FLASHLIGHT"}),"Press ",St.jsx("span",{className:"text-amber-400 font-bold",children:"F"})," to toggle your flashlight. It operates on a limited battery charge that depletes with continuous use. If fully drained, it will become temporarily unusable until it passively recharges over time. Manage your power strategically."]})]}),St.jsxs("li",{className:"flex gap-3 items-start bg-black/40 p-3 rounded border border-amber-200/5",children:[St.jsx(_M,{className:"w-5 h-5 text-amber-500 shrink-0 mt-0.5"}),St.jsxs("div",{children:[St.jsx("strong",{className:"text-amber-400 font-bold block uppercase tracking-wider text-[11px] mb-1",children:"THE ENTITY AI"}),"A skeletal wire-tendril entity stalks you. If you hear static, it is close.",St.jsx("span",{className:"text-yellow-400 block mt-1 font-semibold",children:"💡 Point your Flashlight at the entity to freeze it flat against walls. If it gets too close, it will chase you!"})]})]}),St.jsxs("li",{className:"flex gap-3 items-start bg-black/40 p-3 rounded border border-amber-200/5",children:[St.jsx(xM,{className:"w-5 h-5 text-amber-500 shrink-0 mt-0.5"}),St.jsxs("div",{children:[St.jsx("strong",{className:"text-amber-400 font-bold block uppercase tracking-wider text-[11px] mb-1",children:"MISSION OBJECTIVE"}),"Locate ",St.jsx("span",{className:"text-cyan-400 font-extrabold",children:"3 Keycards"})," in the maze. Find the illuminated elevator hatch door and step inside to escape Level 0!"]})]})]})]})}),St.jsx("div",{className:"flex justify-center items-center text-amber-500/40 text-xs md:text-sm tracking-wider font-mono uppercase mt-auto select-none pointer-events-none pt-4 text-center",children:St.jsx("span",{children:"© 1996 HAZARD ANALOG RESEARCH INITIATIVE // STATION_0"})})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="184",bM=0,e_=1,TM=2,Qc=1,AM=2,pl=3,Fs=0,yi=1,Ja=2,ts=0,co=1,n_=2,i_=3,a_=4,RM=5,lr=100,wM=101,CM=102,DM=103,UM=104,NM=200,LM=201,OM=202,PM=203,rd=204,od=205,zM=206,IM=207,BM=208,FM=209,VM=210,GM=211,HM=212,kM=213,XM=214,ld=0,cd=1,ud=2,fo=3,fd=4,hd=5,dd=6,pd=7,Jd=0,qM=1,WM=2,ya=0,ov=1,lv=2,cv=3,uv=4,fv=5,hv=6,dv=7,pv=300,hr=301,ho=302,yh=303,Eh=304,du=306,Qa=1e3,$a=1001,md=1002,Zn=1003,YM=1004,Rc=1005,ii=1006,bh=1007,ur=1008,Oi=1009,mv=1010,gv=1011,vl=1012,$d=1013,Ta=1014,Sa=1015,ns=1016,tp=1017,ep=1018,xl=1020,_v=35902,vv=35899,xv=1021,Sv=1022,aa=1023,is=1026,fr=1027,Mv=1028,np=1029,dr=1030,ip=1031,ap=1033,Jc=33776,$c=33777,tu=33778,eu=33779,gd=35840,_d=35841,vd=35842,xd=35843,Sd=36196,Md=37492,yd=37496,Ed=37488,bd=37489,iu=37490,Td=37491,Ad=37808,Rd=37809,wd=37810,Cd=37811,Dd=37812,Ud=37813,Nd=37814,Ld=37815,Od=37816,Pd=37817,zd=37818,Id=37819,Bd=37820,Fd=37821,Vd=36492,Gd=36494,Hd=36495,kd=36283,Xd=36284,au=36285,qd=36286,jM=3200,su=0,ZM=1,Is="",Yi="srgb",ru="srgb-linear",ou="linear",Je="srgb",jr=7680,s_=519,KM=512,QM=513,JM=514,sp=515,$M=516,ty=517,rp=518,ey=519,r_=35044,o_="300 es",Ma=2e3,Sl=2001;function ny(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function lu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function iy(){const o=lu("canvas");return o.style.display="block",o}const l_={};function c_(...o){const t="THREE."+o.shift();console.log(t,...o)}function yv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ue(...o){o=yv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Fe(...o){o=yv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Wd(...o){const t=o.join(" ");t in l_||(l_[t]=!0,ue(...o))}function ay(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const sy={[ld]:cd,[ud]:dd,[fd]:pd,[fo]:hd,[cd]:ld,[dd]:ud,[pd]:fd,[hd]:fo};class mr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Th=Math.PI/180,cu=180/Math.PI;function Ml(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(ei[o&255]+ei[o>>8&255]+ei[o>>16&255]+ei[o>>24&255]+"-"+ei[t&255]+ei[t>>8&255]+"-"+ei[t>>16&15|64]+ei[t>>24&255]+"-"+ei[i&63|128]+ei[i>>8&255]+"-"+ei[i>>16&255]+ei[i>>24&255]+ei[s&255]+ei[s>>8&255]+ei[s>>16&255]+ei[s>>24&255]).toLowerCase()}function ze(o,t,i){return Math.max(t,Math.min(i,o))}function ry(o,t){return(o%t+t)%t}function Ah(o,t,i){return(1-i)*o+i*t}function rl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Si(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const fp=class fp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ze(this.x,t.x,i.x),this.y=ze(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ze(this.x,t,i),this.y=ze(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ze(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ze(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fp.prototype.isVector2=!0;let Ve=fp;class gr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],_=s[l+2],v=s[l+3],g=c[h+0],y=c[h+1],b=c[h+2],A=c[h+3];if(v!==A||m!==g||d!==y||_!==b){let M=m*g+d*y+_*b+v*A;M<0&&(g=-g,y=-y,b=-b,A=-A,M=-M);let S=1-p;if(M<.9995){const C=Math.acos(M),N=Math.sin(C);S=Math.sin(S*C)/N,p=Math.sin(p*C)/N,m=m*S+g*p,d=d*S+y*p,_=_*S+b*p,v=v*S+A*p}else{m=m*S+g*p,d=d*S+y*p,_=_*S+b*p,v=v*S+A*p;const C=1/Math.sqrt(m*m+d*d+_*_+v*v);m*=C,d*=C,_*=C,v*=C}}t[i]=m,t[i+1]=d,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],_=s[l+3],v=c[h],g=c[h+1],y=c[h+2],b=c[h+3];return t[i]=p*b+_*v+m*y-d*g,t[i+1]=m*b+_*g+d*v-p*y,t[i+2]=d*b+_*y+p*g-m*v,t[i+3]=_*b-p*v-m*g-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(s/2),_=p(l/2),v=p(c/2),g=m(s/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=g*_*v+d*y*b,this._y=d*y*v-g*_*b,this._z=d*_*b+g*y*v,this._w=d*_*v-g*y*b;break;case"YXZ":this._x=g*_*v+d*y*b,this._y=d*y*v-g*_*b,this._z=d*_*b-g*y*v,this._w=d*_*v+g*y*b;break;case"ZXY":this._x=g*_*v-d*y*b,this._y=d*y*v+g*_*b,this._z=d*_*b+g*y*v,this._w=d*_*v-g*y*b;break;case"ZYX":this._x=g*_*v-d*y*b,this._y=d*y*v+g*_*b,this._z=d*_*b-g*y*v,this._w=d*_*v+g*y*b;break;case"YZX":this._x=g*_*v+d*y*b,this._y=d*y*v+g*_*b,this._z=d*_*b-g*y*v,this._w=d*_*v-g*y*b;break;case"XZY":this._x=g*_*v-d*y*b,this._y=d*y*v-g*_*b,this._z=d*_*b+g*y*v,this._w=d*_*v+g*y*b;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],_=i[6],v=i[10],g=s+p+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-d)*y,this._z=(h-l)*y}else if(s>p&&s>v){const y=2*Math.sqrt(1+s-p-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+d)/y}else if(p>v){const y=2*Math.sqrt(1+p-s-v);this._w=(c-d)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-s-p);this._w=(h-l)/y,this._x=(c+d)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,p=i._x,m=i._y,d=i._z,_=i._w;return this._x=s*_+h*p+l*d-c*m,this._y=l*_+h*m+c*p-s*d,this._z=c*_+h*d+s*m-l*p,this._w=h*_-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),_=Math.sin(d);m=Math.sin(m*d)/_,i=Math.sin(i*d)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hp=class hp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(u_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(u_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*s),_=2*(p*i-c*l),v=2*(c*s-h*i);return this.x=i+m*d+h*v-p*_,this.y=s+m*_+p*d-c*v,this.z=l+m*v+c*_-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ze(this.x,t.x,i.x),this.y=ze(this.y,t.y,i.y),this.z=ze(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ze(this.x,t,i),this.y=ze(this.y,t,i),this.z=ze(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ze(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Rh.copy(this).projectOnVector(t),this.sub(Rh)}reflect(t){return this.sub(Rh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ze(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hp.prototype.isVector3=!0;let K=hp;const Rh=new K,u_=new gr,dp=class dp{constructor(t,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d)}set(t,i,s,l,c,h,p,m,d){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],_=s[4],v=s[7],g=s[2],y=s[5],b=s[8],A=l[0],M=l[3],S=l[6],C=l[1],N=l[4],L=l[7],H=l[2],U=l[5],I=l[8];return c[0]=h*A+p*C+m*H,c[3]=h*M+p*N+m*U,c[6]=h*S+p*L+m*I,c[1]=d*A+_*C+v*H,c[4]=d*M+_*N+v*U,c[7]=d*S+_*L+v*I,c[2]=g*A+y*C+b*H,c[5]=g*M+y*N+b*U,c[8]=g*S+y*L+b*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8];return i*h*_-i*p*d-s*c*_+s*p*m+l*c*d-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8],v=_*h-p*d,g=p*m-_*c,y=d*c-h*m,b=i*v+s*g+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=v*A,t[1]=(l*d-_*s)*A,t[2]=(p*s-l*h)*A,t[3]=g*A,t[4]=(_*i-l*m)*A,t[5]=(l*c-p*i)*A,t[6]=y*A,t[7]=(s*m-d*i)*A,t[8]=(h*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(wh.makeScale(t,i)),this}rotate(t){return this.premultiply(wh.makeRotation(-t)),this}translate(t,i){return this.premultiply(wh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;let ge=dp;const wh=new ge,f_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oy(){const o={enabled:!0,workingColorSpace:ru,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Je&&(l.r=es(l.r),l.g=es(l.g),l.b=es(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Je&&(l.r=uo(l.r),l.g=uo(l.g),l.b=uo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Is?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Wd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Wd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[ru]:{primaries:t,whitePoint:s,transfer:ou,toXYZ:f_,fromXYZ:h_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Yi},outputColorSpaceConfig:{drawingBufferColorSpace:Yi}},[Yi]:{primaries:t,whitePoint:s,transfer:Je,toXYZ:f_,fromXYZ:h_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Yi}}}),o}const Pe=oy();function es(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Zr;class ly{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Zr===void 0&&(Zr=lu("canvas")),Zr.width=t.width,Zr.height=t.height;const l=Zr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Zr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=lu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=es(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(es(i[s]/255)*255):i[s]=es(i[s]);return{data:i,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cy=0;class op{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Ml(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Ch(l[h].image)):c.push(Ch(l[h]))}else c=Ch(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ch(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ly.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let uy=0;const Dh=new K;class ai extends mr{constructor(t=ai.DEFAULT_IMAGE,i=ai.DEFAULT_MAPPING,s=$a,l=$a,c=ii,h=ur,p=aa,m=Oi,d=ai.DEFAULT_ANISOTROPY,_=Is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Ml(),this.name="",this.source=new op(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ue(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case $a:t.x=t.x<0?0:1;break;case md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case $a:t.y=t.y<0?0:1;break;case md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=pv;ai.DEFAULT_ANISOTROPY=1;const pp=class pp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],_=m[4],v=m[8],g=m[1],y=m[5],b=m[9],A=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+A)<.1&&Math.abs(b+M)<.1&&Math.abs(d+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(d+1)/2,L=(y+1)/2,H=(S+1)/2,U=(_+g)/4,I=(v+A)/4,T=(b+M)/4;return N>L&&N>H?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=U/s,c=I/s):L>H?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=U/l,c=T/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=I/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-b)*(M-b)+(v-A)*(v-A)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-b)/C,this.y=(v-A)/C,this.z=(g-_)/C,this.w=Math.acos((d+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ze(this.x,t.x,i.x),this.y=ze(this.y,t.y,i.y),this.z=ze(this.z,t.z,i.z),this.w=ze(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ze(this.x,t,i),this.y=ze(this.y,t,i),this.z=ze(this.z,t,i),this.w=ze(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ze(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pp.prototype.isVector4=!0;let En=pp;class fy extends mr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new En(0,0,t,i),this.scissorTest=!1,this.viewport=new En(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new ai(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new op(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ea extends fy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Ev extends ai{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=$a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hy extends ai{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=$a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hu=class hu{constructor(t,i,s,l,c,h,p,m,d,_,v,g,y,b,A,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d,_,v,g,y,b,A,M)}set(t,i,s,l,c,h,p,m,d,_,v,g,y,b,A,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=p,S[13]=m,S[2]=d,S[6]=_,S[10]=v,S[14]=g,S[3]=y,S[7]=b,S[11]=A,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Kr.setFromMatrixColumn(t,0).length(),c=1/Kr.setFromMatrixColumn(t,1).length(),h=1/Kr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=h*_,y=h*v,b=p*_,A=p*v;i[0]=m*_,i[4]=-m*v,i[8]=d,i[1]=y+b*d,i[5]=g-A*d,i[9]=-p*m,i[2]=A-g*d,i[6]=b+y*d,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,y=m*v,b=d*_,A=d*v;i[0]=g+A*p,i[4]=b*p-y,i[8]=h*d,i[1]=h*v,i[5]=h*_,i[9]=-p,i[2]=y*p-b,i[6]=A+g*p,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,y=m*v,b=d*_,A=d*v;i[0]=g-A*p,i[4]=-h*v,i[8]=b+y*p,i[1]=y+b*p,i[5]=h*_,i[9]=A-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,y=h*v,b=p*_,A=p*v;i[0]=m*_,i[4]=b*d-y,i[8]=g*d+A,i[1]=m*v,i[5]=A*d+g,i[9]=y*d-b,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*d,b=p*m,A=p*d;i[0]=m*_,i[4]=A-g*v,i[8]=b*v+y,i[1]=v,i[5]=h*_,i[9]=-p*_,i[2]=-d*_,i[6]=y*v+b,i[10]=g-A*v}else if(t.order==="XZY"){const g=h*m,y=h*d,b=p*m,A=p*d;i[0]=m*_,i[4]=-v,i[8]=d*_,i[1]=g*v+A,i[5]=h*_,i[9]=y*v-b,i[2]=b*v-y,i[6]=p*_,i[10]=A*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dy,t,py)}lookAt(t,i,s){const l=this.elements;return Ni.subVectors(t,i),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),Ds.crossVectors(s,Ni),Ds.lengthSq()===0&&(Math.abs(s.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),Ds.crossVectors(s,Ni)),Ds.normalize(),wc.crossVectors(Ni,Ds),l[0]=Ds.x,l[4]=wc.x,l[8]=Ni.x,l[1]=Ds.y,l[5]=wc.y,l[9]=Ni.y,l[2]=Ds.z,l[6]=wc.z,l[10]=Ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],_=s[1],v=s[5],g=s[9],y=s[13],b=s[2],A=s[6],M=s[10],S=s[14],C=s[3],N=s[7],L=s[11],H=s[15],U=l[0],I=l[4],T=l[8],P=l[12],Y=l[1],F=l[5],j=l[9],ot=l[13],st=l[2],X=l[6],O=l[10],B=l[14],at=l[3],mt=l[7],yt=l[11],z=l[15];return c[0]=h*U+p*Y+m*st+d*at,c[4]=h*I+p*F+m*X+d*mt,c[8]=h*T+p*j+m*O+d*yt,c[12]=h*P+p*ot+m*B+d*z,c[1]=_*U+v*Y+g*st+y*at,c[5]=_*I+v*F+g*X+y*mt,c[9]=_*T+v*j+g*O+y*yt,c[13]=_*P+v*ot+g*B+y*z,c[2]=b*U+A*Y+M*st+S*at,c[6]=b*I+A*F+M*X+S*mt,c[10]=b*T+A*j+M*O+S*yt,c[14]=b*P+A*ot+M*B+S*z,c[3]=C*U+N*Y+L*st+H*at,c[7]=C*I+N*F+L*X+H*mt,c[11]=C*T+N*j+L*O+H*yt,c[15]=C*P+N*ot+L*B+H*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],_=t[2],v=t[6],g=t[10],y=t[14],b=t[3],A=t[7],M=t[11],S=t[15],C=m*y-d*g,N=p*y-d*v,L=p*g-m*v,H=h*y-d*_,U=h*g-m*_,I=h*v-p*_;return i*(A*C-M*N+S*L)-s*(b*C-M*H+S*U)+l*(b*N-A*H+S*I)-c*(b*L-A*U+M*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8],v=t[9],g=t[10],y=t[11],b=t[12],A=t[13],M=t[14],S=t[15],C=i*p-s*h,N=i*m-l*h,L=i*d-c*h,H=s*m-l*p,U=s*d-c*p,I=l*d-c*m,T=_*A-v*b,P=_*M-g*b,Y=_*S-y*b,F=v*M-g*A,j=v*S-y*A,ot=g*S-y*M,st=C*ot-N*j+L*F+H*Y-U*P+I*T;if(st===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/st;return t[0]=(p*ot-m*j+d*F)*X,t[1]=(l*j-s*ot-c*F)*X,t[2]=(A*I-M*U+S*H)*X,t[3]=(g*U-v*I-y*H)*X,t[4]=(m*Y-h*ot-d*P)*X,t[5]=(i*ot-l*Y+c*P)*X,t[6]=(M*L-b*I-S*N)*X,t[7]=(_*I-g*L+y*N)*X,t[8]=(h*j-p*Y+d*T)*X,t[9]=(s*Y-i*j-c*T)*X,t[10]=(b*U-A*L+S*C)*X,t[11]=(v*L-_*U-y*C)*X,t[12]=(p*P-h*F-m*T)*X,t[13]=(i*F-s*P+l*T)*X,t[14]=(A*N-b*H-M*C)*X,t[15]=(_*H-v*N+g*C)*X,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,p=t.y,m=t.z,d=c*h,_=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,_*p+s,_*m-l*h,0,d*m-l*p,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,_=h+h,v=p+p,g=c*d,y=c*_,b=c*v,A=h*_,M=h*v,S=p*v,C=m*d,N=m*_,L=m*v,H=s.x,U=s.y,I=s.z;return l[0]=(1-(A+S))*H,l[1]=(y+L)*H,l[2]=(b-N)*H,l[3]=0,l[4]=(y-L)*U,l[5]=(1-(g+S))*U,l[6]=(M+C)*U,l[7]=0,l[8]=(b+N)*I,l[9]=(M-C)*I,l[10]=(1-(g+A))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Kr.set(l[0],l[1],l[2]).length();const p=Kr.set(l[4],l[5],l[6]).length(),m=Kr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),ta.copy(this);const d=1/h,_=1/p,v=1/m;return ta.elements[0]*=d,ta.elements[1]*=d,ta.elements[2]*=d,ta.elements[4]*=_,ta.elements[5]*=_,ta.elements[6]*=_,ta.elements[8]*=v,ta.elements[9]*=v,ta.elements[10]*=v,i.setFromRotationMatrix(ta),s.x=h,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,h,p=Ma,m=!1){const d=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let b,A;if(m)b=c/(h-c),A=h*c/(h-c);else if(p===Ma)b=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(p===Sl)b=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,h,p=Ma,m=!1){const d=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,A;if(m)b=1/(h-c),A=h/(h-c);else if(p===Ma)b=-2/(h-c),A=-(h+c)/(h-c);else if(p===Sl)b=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=b,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};hu.prototype.isMatrix4=!0;let bn=hu;const Kr=new K,ta=new bn,dy=new K(0,0,0),py=new K(1,1,1),Ds=new K,wc=new K,Ni=new K,d_=new bn,p_=new gr;class Aa{constructor(t=0,i=0,s=0,l=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],_=l[9],v=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ze(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ze(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(ze(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return d_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(d_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return p_.setFromEuler(this),this.setFromQuaternion(p_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class bv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let my=0;const m_=new K,Qr=new gr,Wa=new bn,Cc=new K,ol=new K,gy=new K,_y=new gr,g_=new K(1,0,0),__=new K(0,1,0),v_=new K(0,0,1),x_={type:"added"},vy={type:"removed"},Jr={type:"childadded",child:null},Uh={type:"childremoved",child:null};class Kn extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const t=new K,i=new Aa,s=new gr,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new bn},normalMatrix:{value:new ge}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Qr.setFromAxisAngle(t,i),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(t,i){return Qr.setFromAxisAngle(t,i),this.quaternion.premultiply(Qr),this}rotateX(t){return this.rotateOnAxis(g_,t)}rotateY(t){return this.rotateOnAxis(__,t)}rotateZ(t){return this.rotateOnAxis(v_,t)}translateOnAxis(t,i){return m_.copy(t).applyQuaternion(this.quaternion),this.position.add(m_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(g_,t)}translateY(t){return this.translateOnAxis(__,t)}translateZ(t){return this.translateOnAxis(v_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Cc.copy(t):Cc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wa.lookAt(ol,Cc,this.up):Wa.lookAt(Cc,ol,this.up),this.quaternion.setFromRotationMatrix(Wa),l&&(Wa.extractRotation(l.matrixWorld),Qr.setFromRotationMatrix(Wa),this.quaternion.premultiply(Qr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(x_),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vy),Uh.child=t,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(x_),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,t,gy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,_y,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,_=m.length;d<_;d++){const v=m[d];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),_=h(t.images),v=h(t.shapes),g=h(t.skeletons),y=h(t.animations),b=h(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(p){const m=[];for(const d in p){const _=p[d];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Kn.DEFAULT_UP=new K(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class va extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xy={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,s),S=this._getHandJoint(d,A);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),y=.02,b=.005;d.inputState.pinching&&g>y+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=y-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new va;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Lh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ie{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Pe.workingColorSpace){return this.r=t,this.g=i,this.b=s,Pe.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Pe.workingColorSpace){if(t=ry(t,1),i=ze(i,0,1),s=ze(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Lh(h,c,t+1/3),this.g=Lh(h,c,t),this.b=Lh(h,c,t-1/3)}return Pe.colorSpaceToWorking(this,l),this}setStyle(t,i=Yi){function s(c){c!==void 0&&parseFloat(c)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ue("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Yi){const s=Tv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=uo(t.r),this.g=uo(t.g),this.b=uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yi){return Pe.workingToColorSpace(ni.copy(this),t),Math.round(ze(ni.r*255,0,255))*65536+Math.round(ze(ni.g*255,0,255))*256+Math.round(ze(ni.b*255,0,255))}getHexString(t=Yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Pe.workingColorSpace){Pe.workingToColorSpace(ni.copy(this),i);const s=ni.r,l=ni.g,c=ni.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const _=(p+h)/2;if(p===h)m=0,d=0;else{const v=h-p;switch(d=_<=.5?v/(h+p):v/(2-h-p),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=d,t.l=_,t}getRGB(t,i=Pe.workingColorSpace){return Pe.workingToColorSpace(ni.copy(this),i),t.r=ni.r,t.g=ni.g,t.b=ni.b,t}getStyle(t=Yi){Pe.workingToColorSpace(ni.copy(this),t);const i=ni.r,s=ni.g,l=ni.b;return t!==Yi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Us),this.setHSL(Us.h+t,Us.s+i,Us.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Us),t.getHSL(Dc);const s=Ah(Us.h,Dc.h,i),l=Ah(Us.s,Dc.s,i),c=Ah(Us.l,Dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new Ie;Ie.NAMES=Tv;class lp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(t),this.density=i}clone(){return new lp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sy extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Aa,this.environmentIntensity=1,this.environmentRotation=new Aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ea=new K,Ya=new K,Oh=new K,ja=new K,$r=new K,to=new K,S_=new K,Ph=new K,zh=new K,Ih=new K,Bh=new En,Fh=new En,Vh=new En;class ia{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),ea.subVectors(t,i),l.cross(ea);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){ea.subVectors(l,i),Ya.subVectors(s,i),Oh.subVectors(t,i);const h=ea.dot(ea),p=ea.dot(Ya),m=ea.dot(Oh),d=Ya.dot(Ya),_=Ya.dot(Oh),v=h*d-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(d*m-p*_)*g,b=(h*_-p*m)*g;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ja)===null?!1:ja.x>=0&&ja.y>=0&&ja.x+ja.y<=1}static getInterpolation(t,i,s,l,c,h,p,m){return this.getBarycoord(t,i,s,l,ja)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ja.x),m.addScaledVector(h,ja.y),m.addScaledVector(p,ja.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Bh.setScalar(0),Fh.setScalar(0),Vh.setScalar(0),Bh.fromBufferAttribute(t,i),Fh.fromBufferAttribute(t,s),Vh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Bh,c.x),h.addScaledVector(Fh,c.y),h.addScaledVector(Vh,c.z),h}static isFrontFacing(t,i,s,l){return ea.subVectors(s,i),Ya.subVectors(t,i),ea.cross(Ya).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ea.subVectors(this.c,this.b),Ya.subVectors(this.a,this.b),ea.cross(Ya).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ia.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ia.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ia.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ia.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ia.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,p;$r.subVectors(l,s),to.subVectors(c,s),Ph.subVectors(t,s);const m=$r.dot(Ph),d=to.dot(Ph);if(m<=0&&d<=0)return i.copy(s);zh.subVectors(t,l);const _=$r.dot(zh),v=to.dot(zh);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*d;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector($r,h);Ih.subVectors(t,c);const y=$r.dot(Ih),b=to.dot(Ih);if(b>=0&&y<=b)return i.copy(c);const A=y*d-m*b;if(A<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(to,p);const M=_*b-y*v;if(M<=0&&v-_>=0&&y-b>=0)return S_.subVectors(c,l),p=(v-_)/(v-_+(y-b)),i.copy(l).addScaledVector(S_,p);const S=1/(M+A+g);return h=A*S,p=g*S,i.copy(s).addScaledVector($r,h).addScaledVector(to,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class yl{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(na.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(na.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=na.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,na):na.fromBufferAttribute(c,h),na.applyMatrix4(t.matrixWorld),this.expandByPoint(na);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Uc.copy(s.boundingBox)),Uc.applyMatrix4(t.matrixWorld),this.union(Uc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,na),na.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ll),Nc.subVectors(this.max,ll),eo.subVectors(t.a,ll),no.subVectors(t.b,ll),io.subVectors(t.c,ll),Ns.subVectors(no,eo),Ls.subVectors(io,no),ir.subVectors(eo,io);let i=[0,-Ns.z,Ns.y,0,-Ls.z,Ls.y,0,-ir.z,ir.y,Ns.z,0,-Ns.x,Ls.z,0,-Ls.x,ir.z,0,-ir.x,-Ns.y,Ns.x,0,-Ls.y,Ls.x,0,-ir.y,ir.x,0];return!Gh(i,eo,no,io,Nc)||(i=[1,0,0,0,1,0,0,0,1],!Gh(i,eo,no,io,Nc))?!1:(Lc.crossVectors(Ns,Ls),i=[Lc.x,Lc.y,Lc.z],Gh(i,eo,no,io,Nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,na).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(na).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Za),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Za=[new K,new K,new K,new K,new K,new K,new K,new K],na=new K,Uc=new yl,eo=new K,no=new K,io=new K,Ns=new K,Ls=new K,ir=new K,ll=new K,Nc=new K,Lc=new K,ar=new K;function Gh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){ar.fromArray(o,c);const p=l.x*Math.abs(ar.x)+l.y*Math.abs(ar.y)+l.z*Math.abs(ar.z),m=t.dot(ar),d=i.dot(ar),_=s.dot(ar);if(Math.max(-Math.max(m,d,_),Math.min(m,d,_))>p)return!1}return!0}const Ln=new K,Oc=new Ve;let My=0;class ba extends mr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:My++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=r_,this.updateRanges=[],this.gpuType=Sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(t),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Ln.fromBufferAttribute(this,i),Ln.applyMatrix3(t),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Ln.fromBufferAttribute(this,i),Ln.applyMatrix4(t),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Ln.fromBufferAttribute(this,i),Ln.applyNormalMatrix(t),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Ln.fromBufferAttribute(this,i),Ln.transformDirection(t),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=rl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Si(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=rl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Si(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=rl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Si(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=rl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Si(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=rl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Si(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Si(i,this.array),s=Si(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Si(i,this.array),s=Si(s,this.array),l=Si(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Si(i,this.array),s=Si(s,this.array),l=Si(l,this.array),c=Si(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==r_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Av extends ba{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Rv extends ba{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class si extends ba{constructor(t,i,s){super(new Float32Array(t),i,s)}}const yy=new yl,cl=new K,Hh=new K;class pu{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):yy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cl.subVectors(t,this.center);const i=cl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(cl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cl.copy(t.center).add(Hh)),this.expandByPoint(cl.copy(t.center).sub(Hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ey=0;const qi=new bn,kh=new Kn,ao=new K,Li=new yl,ul=new yl,Hn=new K;class ci extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ny(t)?Rv:Av)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ge().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qi.makeRotationFromQuaternion(t),this.applyMatrix4(qi),this}rotateX(t){return qi.makeRotationX(t),this.applyMatrix4(qi),this}rotateY(t){return qi.makeRotationY(t),this.applyMatrix4(qi),this}rotateZ(t){return qi.makeRotationZ(t),this.applyMatrix4(qi),this}translate(t,i,s){return qi.makeTranslation(t,i,s),this.applyMatrix4(qi),this}scale(t,i,s){return qi.makeScale(t,i,s),this.applyMatrix4(qi),this}lookAt(t){return kh.lookAt(t),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new si(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Li.setFromBufferAttribute(c),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(Li.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];ul.setFromBufferAttribute(p),this.morphTargetsRelative?(Hn.addVectors(Li.min,ul.min),Li.expandByPoint(Hn),Hn.addVectors(Li.max,ul.max),Li.expandByPoint(Hn)):(Li.expandByPoint(ul.min),Li.expandByPoint(ul.max))}Li.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Hn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Hn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,_=p.count;d<_;d++)Hn.fromBufferAttribute(p,d),m&&(ao.fromBufferAttribute(t,d),Hn.add(ao)),l=Math.max(l,s.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ba(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new K,m[T]=new K;const d=new K,_=new K,v=new K,g=new Ve,y=new Ve,b=new Ve,A=new K,M=new K;function S(T,P,Y){d.fromBufferAttribute(s,T),_.fromBufferAttribute(s,P),v.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,P),b.fromBufferAttribute(c,Y),_.sub(d),v.sub(d),y.sub(g),b.sub(g);const F=1/(y.x*b.y-b.x*y.y);isFinite(F)&&(A.copy(_).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(F),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(F),p[T].add(A),p[P].add(A),p[Y].add(A),m[T].add(M),m[P].add(M),m[Y].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,P=C.length;T<P;++T){const Y=C[T],F=Y.start,j=Y.count;for(let ot=F,st=F+j;ot<st;ot+=3)S(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const N=new K,L=new K,H=new K,U=new K;function I(T){H.fromBufferAttribute(l,T),U.copy(H);const P=p[T];N.copy(P),N.sub(H.multiplyScalar(H.dot(P))).normalize(),L.crossVectors(U,P);const F=L.dot(m[T])<0?-1:1;h.setXYZW(T,N.x,N.y,N.z,F)}for(let T=0,P=C.length;T<P;++T){const Y=C[T],F=Y.start,j=Y.count;for(let ot=F,st=F+j;ot<st;ot+=3)I(t.getX(ot+0)),I(t.getX(ot+1)),I(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ba(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new K,c=new K,h=new K,p=new K,m=new K,d=new K,_=new K,v=new K;if(t)for(let g=0,y=t.count;g<y;g+=3){const b=t.getX(g+0),A=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,A),d.fromBufferAttribute(s,M),p.add(_),m.add(_),d.add(_),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Hn.fromBufferAttribute(t,i),Hn.normalize(),t.setXYZ(i,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function t(p,m){const d=p.array,_=p.itemSize,v=p.normalized,g=new d.constructor(m.length*_);let y=0,b=0;for(let A=0,M=m.length;A<M;A++){p.isInterleavedBufferAttribute?y=m[A]*p.data.stride+p.offset:y=m[A]*_;for(let S=0;S<_;S++)g[b++]=d[y++]}return new ba(g,_,v)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ci,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let _=0,v=d.length;_<v;_++){const g=d[_],y=t(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],_=[];for(let v=0,g=d.length;v<g;v++){const y=d[v];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const _=l[d];this.setAttribute(d,_.clone(i))}const c=t.morphAttributes;for(const d in c){const _=[],v=c[d];for(let g=0,y=v.length;g<y;g++)_.push(v[g].clone(i));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,_=h.length;d<_;d++){const v=h[d];this.addGroup(v.start,v.count,v.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let by=0;class _r extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=co,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ue(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(s.blending=this.blending),this.side!==Fs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rd&&(s.blendSrc=this.blendSrc),this.blendDst!==od&&(s.blendDst=this.blendDst),this.blendEquation!==lr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ka=new K,Xh=new K,Pc=new K,Os=new K,qh=new K,zc=new K,Wh=new K;class wv{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ka)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ka.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ka.copy(this.origin).addScaledVector(this.direction,i),Ka.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Xh.copy(t).add(i).multiplyScalar(.5),Pc.copy(i).sub(t).normalize(),Os.copy(this.origin).sub(Xh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Pc),p=Os.dot(this.direction),m=-Os.dot(Pc),d=Os.lengthSq(),_=Math.abs(1-h*h);let v,g,y,b;if(_>0)if(v=h*m-p,g=h*p-m,b=c*_,v>=0)if(g>=-b)if(g<=b){const A=1/_;v*=A,g*=A,y=v*(v+h*g+2*p)+g*(h*v+g+2*m)+d}else g=c,v=Math.max(0,-(h*g+p)),y=-v*v+g*(g+2*m)+d;else g=-c,v=Math.max(0,-(h*g+p)),y=-v*v+g*(g+2*m)+d;else g<=-b?(v=Math.max(0,-(-h*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+d):g<=b?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+d):(v=Math.max(0,-(h*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+d);else g=h>0?-c:c,v=Math.max(0,-(h*g+p)),y=-v*v+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Xh).addScaledVector(Pc,g),y}intersectSphere(t,i){Ka.subVectors(t.center,this.origin);const s=Ka.dot(this.direction),l=Ka.dot(Ka)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,p,m;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(p=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(p=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ka)!==null}intersectTriangle(t,i,s,l,c){qh.subVectors(i,t),zc.subVectors(s,t),Wh.crossVectors(qh,zc);let h=this.direction.dot(Wh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;Os.subVectors(this.origin,t);const m=p*this.direction.dot(zc.crossVectors(Os,zc));if(m<0)return null;const d=p*this.direction.dot(qh.cross(Os));if(d<0||m+d>h)return null;const _=-p*Os.dot(Wh);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lo extends _r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const M_=new bn,sr=new wv,Ic=new pu,y_=new K,Bc=new K,Fc=new K,Vc=new K,Yh=new K,Gc=new K,E_=new K,Hc=new K;class be extends Kn{constructor(t=new ci,i=new lo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Gc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const _=p[m],v=c[m];_!==0&&(Yh.fromBufferAttribute(v,t),h?Gc.addScaledVector(Yh,_):Gc.addScaledVector(Yh.sub(i),_))}i.add(Gc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(c),sr.copy(t.ray).recast(t.near),!(Ic.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Ic,y_)===null||sr.origin.distanceToSquared(y_)>(t.far-t.near)**2))&&(M_.copy(c).invert(),sr.copy(t.ray).applyMatrix4(M_),!(s.boundingBox!==null&&sr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,sr)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,A=g.length;b<A;b++){const M=g[b],S=h[M.materialIndex],C=Math.max(M.start,y.start),N=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let L=C,H=N;L<H;L+=3){const U=p.getX(L),I=p.getX(L+1),T=p.getX(L+2);l=kc(this,S,t,s,d,_,v,U,I,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let M=b,S=A;M<S;M+=3){const C=p.getX(M),N=p.getX(M+1),L=p.getX(M+2);l=kc(this,h,t,s,d,_,v,C,N,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,A=g.length;b<A;b++){const M=g[b],S=h[M.materialIndex],C=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=C,H=N;L<H;L+=3){const U=L,I=L+1,T=L+2;l=kc(this,S,t,s,d,_,v,U,I,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let M=b,S=A;M<S;M+=3){const C=M,N=M+1,L=M+2;l=kc(this,h,t,s,d,_,v,C,N,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Ty(o,t,i,s,l,c,h,p){let m;if(t.side===yi?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,t.side===Fs,p),m===null)return null;Hc.copy(p),Hc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(Hc);return d<i.near||d>i.far?null:{distance:d,point:Hc.clone(),object:o}}function kc(o,t,i,s,l,c,h,p,m,d){o.getVertexPosition(p,Bc),o.getVertexPosition(m,Fc),o.getVertexPosition(d,Vc);const _=Ty(o,t,i,s,Bc,Fc,Vc,E_);if(_){const v=new K;ia.getBarycoord(E_,Bc,Fc,Vc,v),l&&(_.uv=ia.getInterpolatedAttribute(l,p,m,d,v,new Ve)),c&&(_.uv1=ia.getInterpolatedAttribute(c,p,m,d,v,new Ve)),h&&(_.normal=ia.getInterpolatedAttribute(h,p,m,d,v,new K),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new K,materialIndex:0};ia.getNormal(Bc,Fc,Vc,g.normal),_.face=g,_.barycoord=v}return _}class Ay extends ai{constructor(t=null,i=1,s=1,l,c,h,p,m,d=Zn,_=Zn,v,g){super(null,h,p,m,d,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jh=new K,Ry=new K,wy=new ge;class or{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=jh.subVectors(s,i).cross(Ry.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(jh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||wy.getNormalMatrix(t),l=this.coplanarPoint(jh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new pu,Cy=new Ve(.5,.5),Xc=new K;class cp{constructor(t=new or,i=new or,s=new or,l=new or,c=new or,h=new or){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ma,s=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],_=c[4],v=c[5],g=c[6],y=c[7],b=c[8],A=c[9],M=c[10],S=c[11],C=c[12],N=c[13],L=c[14],H=c[15];if(l[0].setComponents(d-h,y-_,S-b,H-C).normalize(),l[1].setComponents(d+h,y+_,S+b,H+C).normalize(),l[2].setComponents(d+p,y+v,S+A,H+N).normalize(),l[3].setComponents(d-p,y-v,S-A,H-N).normalize(),s)l[4].setComponents(m,g,M,L).normalize(),l[5].setComponents(d-m,y-g,S-M,H-L).normalize();else if(l[4].setComponents(d-m,y-g,S-M,H-L).normalize(),i===Ma)l[5].setComponents(d+m,y+g,S+M,H+L).normalize();else if(i===Sl)l[5].setComponents(m,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){rr.center.set(0,0,0);const i=Cy.distanceTo(t.center);return rr.radius=.7071067811865476+i,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Xc.x=l.normal.x>0?t.max.x:t.min.x,Xc.y=l.normal.y>0?t.max.y:t.min.y,Xc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yd extends _r{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uu=new K,fu=new K,b_=new bn,fl=new wv,qc=new pu,Zh=new K,T_=new K;class Kh extends Kn{constructor(t=new ci,i=new Yd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)uu.fromBufferAttribute(i,l-1),fu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=uu.distanceTo(fu);t.setAttribute("lineDistance",new si(s,1))}else ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,t.ray.intersectsSphere(qc)===!1)return;b_.copy(l).invert(),fl.copy(t.ray).applyMatrix4(b_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const y=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let A=y,M=b-1;A<M;A+=d){const S=_.getX(A),C=_.getX(A+1),N=Wc(this,t,fl,m,S,C,A);N&&i.push(N)}if(this.isLineLoop){const A=_.getX(b-1),M=_.getX(y),S=Wc(this,t,fl,m,A,M,b-1);S&&i.push(S)}}else{const y=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let A=y,M=b-1;A<M;A+=d){const S=Wc(this,t,fl,m,A,A+1,A);S&&i.push(S)}if(this.isLineLoop){const A=Wc(this,t,fl,m,b-1,y,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Wc(o,t,i,s,l,c,h){const p=o.geometry.attributes.position;if(uu.fromBufferAttribute(p,l),fu.fromBufferAttribute(p,c),i.distanceSqToSegment(uu,fu,Zh,T_)>s)return;Zh.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Zh);if(!(d<t.near||d>t.far))return{distance:d,point:T_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class Cv extends ai{constructor(t=[],i=hr,s,l,c,h,p,m,d,_){super(t,i,s,l,c,h,p,m,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qh extends ai{constructor(t,i,s,l,c,h,p,m,d){super(t,i,s,l,c,h,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class po extends ai{constructor(t,i,s=Ta,l,c,h,p=Zn,m=Zn,d,_=is,v=1){if(_!==is&&_!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,h,p,m,_,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new op(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Dy extends po{constructor(t,i=Ta,s=hr,l,c,h=Zn,p=Zn,m,d=is){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,p,m,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Dv extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rn extends ci{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],_=[],v=[];let g=0,y=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new si(d,3)),this.setAttribute("normal",new si(_,3)),this.setAttribute("uv",new si(v,2));function b(A,M,S,C,N,L,H,U,I,T,P){const Y=L/I,F=H/T,j=L/2,ot=H/2,st=U/2,X=I+1,O=T+1;let B=0,at=0;const mt=new K;for(let yt=0;yt<O;yt++){const z=yt*F-ot;for(let Q=0;Q<X;Q++){const xt=Q*Y-j;mt[A]=xt*C,mt[M]=z*N,mt[S]=st,d.push(mt.x,mt.y,mt.z),mt[A]=0,mt[M]=0,mt[S]=U>0?1:-1,_.push(mt.x,mt.y,mt.z),v.push(Q/I),v.push(1-yt/T),B+=1}}for(let yt=0;yt<T;yt++)for(let z=0;z<I;z++){const Q=g+z+X*yt,xt=g+z+X*(yt+1),Dt=g+(z+1)+X*(yt+1),Pt=g+(z+1)+X*yt;m.push(Q,xt,Pt),m.push(xt,Dt,Pt),at+=6}p.addGroup(y,at,P),y+=at,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class gl extends ci{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const _=[],v=[],g=[],y=[];let b=0;const A=[],M=s/2;let S=0;C(),h===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(_),this.setAttribute("position",new si(v,3)),this.setAttribute("normal",new si(g,3)),this.setAttribute("uv",new si(y,2));function C(){const L=new K,H=new K;let U=0;const I=(i-t)/s;for(let T=0;T<=c;T++){const P=[],Y=T/c,F=Y*(i-t)+t;for(let j=0;j<=l;j++){const ot=j/l,st=ot*m+p,X=Math.sin(st),O=Math.cos(st);H.x=F*X,H.y=-Y*s+M,H.z=F*O,v.push(H.x,H.y,H.z),L.set(X,I,O).normalize(),g.push(L.x,L.y,L.z),y.push(ot,1-Y),P.push(b++)}A.push(P)}for(let T=0;T<l;T++)for(let P=0;P<c;P++){const Y=A[P][T],F=A[P+1][T],j=A[P+1][T+1],ot=A[P][T+1];(t>0||P!==0)&&(_.push(Y,F,ot),U+=3),(i>0||P!==c-1)&&(_.push(F,j,ot),U+=3)}d.addGroup(S,U,0),S+=U}function N(L){const H=b,U=new Ve,I=new K;let T=0;const P=L===!0?t:i,Y=L===!0?1:-1;for(let j=1;j<=l;j++)v.push(0,M*Y,0),g.push(0,Y,0),y.push(.5,.5),b++;const F=b;for(let j=0;j<=l;j++){const st=j/l*m+p,X=Math.cos(st),O=Math.sin(st);I.x=P*O,I.y=M*Y,I.z=P*X,v.push(I.x,I.y,I.z),g.push(0,Y,0),U.x=X*.5+.5,U.y=O*.5*Y+.5,y.push(U.x,U.y),b++}for(let j=0;j<l;j++){const ot=H+j,st=F+j;L===!0?_.push(st,st+1,ot):_.push(st+1,st,ot),T+=3}d.addGroup(S,T,L===!0?1:2),S+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mo extends ci{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,_=m+1,v=t/p,g=i/m,y=[],b=[],A=[],M=[];for(let S=0;S<_;S++){const C=S*g-h;for(let N=0;N<d;N++){const L=N*v-c;b.push(L,-C,0),A.push(0,0,1),M.push(N/p),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<p;C++){const N=C+d*S,L=C+d*(S+1),H=C+1+d*(S+1),U=C+1+d*S;y.push(N,L,U),y.push(L,H,U)}this.setIndex(y),this.setAttribute("position",new si(b,3)),this.setAttribute("normal",new si(A,3)),this.setAttribute("uv",new si(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.width,t.height,t.widthSegments,t.heightSegments)}}class _l extends ci{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+p,Math.PI);let d=0;const _=[],v=new K,g=new K,y=[],b=[],A=[],M=[];for(let S=0;S<=s;S++){const C=[],N=S/s;let L=0;S===0&&h===0?L=.5/i:S===s&&m===Math.PI&&(L=-.5/i);for(let H=0;H<=i;H++){const U=H/i;v.x=-t*Math.cos(l+U*c)*Math.sin(h+N*p),v.y=t*Math.cos(h+N*p),v.z=t*Math.sin(l+U*c)*Math.sin(h+N*p),b.push(v.x,v.y,v.z),g.copy(v).normalize(),A.push(g.x,g.y,g.z),M.push(U+L,1-N),C.push(d++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const N=_[S][C+1],L=_[S][C],H=_[S+1][C],U=_[S+1][C+1];(S!==0||h>0)&&y.push(N,L,U),(S!==s-1||m<Math.PI)&&y.push(L,H,U)}this.setIndex(y),this.setAttribute("position",new si(b,3)),this.setAttribute("normal",new si(A,3)),this.setAttribute("uv",new si(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function go(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(A_(l))l.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(A_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function li(o){const t={};for(let i=0;i<o.length;i++){const s=go(o[i]);for(const l in s)t[l]=s[l]}return t}function A_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function Uy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Uv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const Ny={clone:go,merge:li};var Ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ra extends _r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ly,this.fragmentShader=Oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=go(t.uniforms),this.uniformsGroups=Uy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Py extends Ra{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wi extends _r{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jh extends _r{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=Jd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zy extends _r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Iy extends _r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class up extends Kn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const $h=new bn,R_=new K,w_=new K;class Nv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new bn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cp,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new En(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;R_.setFromMatrixPosition(t.matrixWorld),i.position.copy(R_),w_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(w_),i.updateMatrixWorld(),$h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Sl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply($h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yc=new K,jc=new gr,ga=new K;class Lv extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=Ma,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yc,jc,ga),ga.x===1&&ga.y===1&&ga.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,jc,ga.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Yc,jc,ga),ga.x===1&&ga.y===1&&ga.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,jc,ga.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ps=new K,C_=new Ve,D_=new Ve;class Mi extends Lv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=cu*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Th*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cu*2*Math.atan(Math.tan(Th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ps.x,Ps.y).multiplyScalar(-t/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ps.x,Ps.y).multiplyScalar(-t/Ps.z)}getViewSize(t,i){return this.getViewBounds(t,C_,D_),i.subVectors(D_,C_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Th*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class By extends Nv{constructor(){super(new Mi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=cu*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Fy extends up{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kn.DEFAULT_UP),this.updateMatrix(),this.target=new Kn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new By}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class Vy extends Nv{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0}}class U_ extends up{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Vy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Ov extends Lv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Gy extends up{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const so=-90,ro=1;class Hy extends Kn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(so,ro,t,i);l.layers=this.layers,this.add(l);const c=new Mi(so,ro,t,i);c.layers=this.layers,this.add(c);const h=new Mi(so,ro,t,i);h.layers=this.layers,this.add(h);const p=new Mi(so,ro,t,i);p.layers=this.layers,this.add(p);const m=new Mi(so,ro,t,i);m.layers=this.layers,this.add(m);const d=new Mi(so,ro,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(t===Ma)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Sl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class ky extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Xy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ue("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const mp=class mp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};mp.prototype.isMatrix2=!0;let N_=mp;function L_(o,t,i,s){const l=qy(s);switch(i){case xv:return o*t;case Mv:return o*t/l.components*l.byteLength;case np:return o*t/l.components*l.byteLength;case dr:return o*t*2/l.components*l.byteLength;case ip:return o*t*2/l.components*l.byteLength;case Sv:return o*t*3/l.components*l.byteLength;case aa:return o*t*4/l.components*l.byteLength;case ap:return o*t*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _d:case xd:return Math.max(o,16)*Math.max(t,8)/4;case gd:case vd:return Math.max(o,8)*Math.max(t,8)/2;case Sd:case Md:case Ed:case bd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case yd:case iu:case Td:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Od:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case zd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Id:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Vd:case Gd:case Hd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case kd:case Xd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case au:case qd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qy(o){switch(o){case Oi:case mv:return{byteLength:1,components:1};case vl:case gv:case ns:return{byteLength:2,components:1};case tp:case ep:return{byteLength:2,components:4};case Ta:case $d:case Sa:return{byteLength:4,components:1};case _v:case vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Wy(o){const t=new WeakMap;function i(p,m){const d=p.array,_=p.usage,v=d.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,d,_),p.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,d){const _=m.array,v=m.updateRanges;if(o.bindBuffer(d,p),v.length===0)o.bufferSubData(d,0,_);else{v.sort((y,b)=>y.start-b.start);let g=0;for(let y=1;y<v.length;y++){const b=v[g],A=v[y];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++g,v[g]=A)}v.length=g+1;for(let y=0,b=v.length;y<b;y++){const A=v[y];o.bufferSubData(d,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var Yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jy=`#ifdef USE_ALPHAHASH
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
#endif`,Zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$y=`#ifdef USE_AOMAP
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
#endif`,t1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e1=`#ifdef USE_BATCHING
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
#endif`,n1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,r1=`#ifdef USE_IRIDESCENCE
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
#endif`,o1=`#ifdef USE_BUMPMAP
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
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,g1=`#define PI 3.141592653589793
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
} // validated`,_1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v1=`vec3 transformedNormal = objectNormal;
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
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E1="gl_FragColor = linearToOutputTexel( gl_FragColor );",b1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T1=`#ifdef USE_ENVMAP
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
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
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
#endif`,w1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O1=`#ifdef USE_GRADIENTMAP
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
}`,P1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,F1=`#ifdef USE_ENVMAP
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
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X1=`PhysicalMaterial material;
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
#endif`,q1=`uniform sampler2D dfgLUT;
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
}`,W1=`
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
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,K1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iE=`#if defined( USE_POINTS_UV )
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
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
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
#endif`,uE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gE=`#ifdef USE_NORMALMAP
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
#endif`,_E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,NE=`float getShadowMask() {
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
}`,LE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
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
#endif`,PE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
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
#endif`,IE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GE=`#ifdef USE_TRANSMISSION
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
#endif`,HE=`#ifdef USE_TRANSMISSION
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jE=`uniform sampler2D t2D;
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`#include <common>
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
}`,tb=`#if DEPTH_PACKING == 3200
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
}`,eb=`#define DISTANCE
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
}`,nb=`#define DISTANCE
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
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`uniform float scale;
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
}`,rb=`uniform vec3 diffuse;
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
}`,ob=`#include <common>
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
}`,lb=`uniform vec3 diffuse;
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
}`,cb=`#define LAMBERT
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
}`,ub=`#define LAMBERT
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
}`,fb=`#define MATCAP
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
}`,hb=`#define MATCAP
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
}`,db=`#define NORMAL
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
}`,pb=`#define NORMAL
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
}`,mb=`#define PHONG
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
}`,gb=`#define PHONG
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
}`,_b=`#define STANDARD
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
}`,vb=`#define STANDARD
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
}`,xb=`#define TOON
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
}`,Sb=`#define TOON
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
}`,Mb=`uniform float size;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Eb=`#include <common>
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
}`,bb=`uniform vec3 color;
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
}`,Tb=`uniform float rotation;
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
}`,Ab=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:Yy,alphahash_pars_fragment:jy,alphamap_fragment:Zy,alphamap_pars_fragment:Ky,alphatest_fragment:Qy,alphatest_pars_fragment:Jy,aomap_fragment:$y,aomap_pars_fragment:t1,batching_pars_vertex:e1,batching_vertex:n1,begin_vertex:i1,beginnormal_vertex:a1,bsdfs:s1,iridescence_fragment:r1,bumpmap_pars_fragment:o1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:f1,color_fragment:h1,color_pars_fragment:d1,color_pars_vertex:p1,color_vertex:m1,common:g1,cube_uv_reflection_fragment:_1,defaultnormal_vertex:v1,displacementmap_pars_vertex:x1,displacementmap_vertex:S1,emissivemap_fragment:M1,emissivemap_pars_fragment:y1,colorspace_fragment:E1,colorspace_pars_fragment:b1,envmap_fragment:T1,envmap_common_pars_fragment:A1,envmap_pars_fragment:R1,envmap_pars_vertex:w1,envmap_physical_pars_fragment:F1,envmap_vertex:C1,fog_vertex:D1,fog_pars_vertex:U1,fog_fragment:N1,fog_pars_fragment:L1,gradientmap_pars_fragment:O1,lightmap_pars_fragment:P1,lights_lambert_fragment:z1,lights_lambert_pars_fragment:I1,lights_pars_begin:B1,lights_toon_fragment:V1,lights_toon_pars_fragment:G1,lights_phong_fragment:H1,lights_phong_pars_fragment:k1,lights_physical_fragment:X1,lights_physical_pars_fragment:q1,lights_fragment_begin:W1,lights_fragment_maps:Y1,lights_fragment_end:j1,lightprobes_pars_fragment:Z1,logdepthbuf_fragment:K1,logdepthbuf_pars_fragment:Q1,logdepthbuf_pars_vertex:J1,logdepthbuf_vertex:$1,map_fragment:tE,map_pars_fragment:eE,map_particle_fragment:nE,map_particle_pars_fragment:iE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:sE,morphinstance_vertex:rE,morphcolor_vertex:oE,morphnormal_vertex:lE,morphtarget_pars_vertex:cE,morphtarget_vertex:uE,normal_fragment_begin:fE,normal_fragment_maps:hE,normal_pars_fragment:dE,normal_pars_vertex:pE,normal_vertex:mE,normalmap_pars_fragment:gE,clearcoat_normal_fragment_begin:_E,clearcoat_normal_fragment_maps:vE,clearcoat_pars_fragment:xE,iridescence_pars_fragment:SE,opaque_fragment:ME,packing:yE,premultiplied_alpha_fragment:EE,project_vertex:bE,dithering_fragment:TE,dithering_pars_fragment:AE,roughnessmap_fragment:RE,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:CE,shadowmap_pars_vertex:DE,shadowmap_vertex:UE,shadowmask_pars_fragment:NE,skinbase_vertex:LE,skinning_pars_vertex:OE,skinning_vertex:PE,skinnormal_vertex:zE,specularmap_fragment:IE,specularmap_pars_fragment:BE,tonemapping_fragment:FE,tonemapping_pars_fragment:VE,transmission_fragment:GE,transmission_pars_fragment:HE,uv_pars_fragment:kE,uv_pars_vertex:XE,uv_vertex:qE,worldpos_vertex:WE,background_vert:YE,background_frag:jE,backgroundCube_vert:ZE,backgroundCube_frag:KE,cube_vert:QE,cube_frag:JE,depth_vert:$E,depth_frag:tb,distance_vert:eb,distance_frag:nb,equirect_vert:ib,equirect_frag:ab,linedashed_vert:sb,linedashed_frag:rb,meshbasic_vert:ob,meshbasic_frag:lb,meshlambert_vert:cb,meshlambert_frag:ub,meshmatcap_vert:fb,meshmatcap_frag:hb,meshnormal_vert:db,meshnormal_frag:pb,meshphong_vert:mb,meshphong_frag:gb,meshphysical_vert:_b,meshphysical_frag:vb,meshtoon_vert:xb,meshtoon_frag:Sb,points_vert:Mb,points_frag:yb,shadow_vert:Eb,shadow_frag:bb,sprite_vert:Tb,sprite_frag:Ab},Wt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},xa={basic:{uniforms:li([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:li([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:li([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:li([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:li([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:li([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:li([Wt.points,Wt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:li([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:li([Wt.common,Wt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:li([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:li([Wt.sprite,Wt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distance:{uniforms:li([Wt.common,Wt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distance_vert,fragmentShader:Te.distance_frag},shadow:{uniforms:li([Wt.lights,Wt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};xa.physical={uniforms:li([xa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Zc={r:0,b:0,g:0},Rb=new bn,zv=new ge;zv.set(-1,0,0,0,1,0,0,0,1);function wb(o,t,i,s,l,c){const h=new Ie(0);let p=l===!0?0:1,m,d,_=null,v=0,g=null;function y(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const L=C.backgroundBlurriness>0;N=t.get(N,L)}return N}function b(C){let N=!1;const L=y(C);L===null?M(h,p):L&&L.isColor&&(M(L,1),N=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function A(C,N){const L=y(N);L&&(L.isCubeTexture||L.mapping===du)?(d===void 0&&(d=new be(new rn(1,1,1),new Ra({name:"BackgroundCubeMaterial",uniforms:go(xa.backgroundCube.uniforms),vertexShader:xa.backgroundCube.vertexShader,fragmentShader:xa.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(H,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=L,d.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(N.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(zv),d.material.toneMapped=Pe.getTransfer(L.colorSpace)!==Je,(_!==L||v!==L.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,_=L,v=L.version,g=o.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new be(new mo(2,2),new Ra({name:"BackgroundMaterial",uniforms:go(xa.background.uniforms),vertexShader:xa.background.vertexShader,fragmentShader:xa.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Pe.getTransfer(L.colorSpace)!==Je,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||v!==L.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,_=L,v=L.version,g=o.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,N){C.getRGB(Zc,Uv(o)),i.buffers.color.setClear(Zc.r,Zc.g,Zc.b,N,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,N=1){h.set(C),p=N,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,M(h,p)},render:b,addToRenderList:A,dispose:S}}function Cb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(F,j,ot,st,X){let O=!1;const B=v(F,st,ot,j);c!==B&&(c=B,d(c.object)),O=y(F,st,ot,X),O&&b(F,st,ot,X),X!==null&&t.update(X,o.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,L(F,j,ot,st),X!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function m(){return o.createVertexArray()}function d(F){return o.bindVertexArray(F)}function _(F){return o.deleteVertexArray(F)}function v(F,j,ot,st){const X=st.wireframe===!0;let O=s[j.id];O===void 0&&(O={},s[j.id]=O);const B=F.isInstancedMesh===!0?F.id:0;let at=O[B];at===void 0&&(at={},O[B]=at);let mt=at[ot.id];mt===void 0&&(mt={},at[ot.id]=mt);let yt=mt[X];return yt===void 0&&(yt=g(m()),mt[X]=yt),yt}function g(F){const j=[],ot=[],st=[];for(let X=0;X<i;X++)j[X]=0,ot[X]=0,st[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ot,attributeDivisors:st,object:F,attributes:{},index:null}}function y(F,j,ot,st){const X=c.attributes,O=j.attributes;let B=0;const at=ot.getAttributes();for(const mt in at)if(at[mt].location>=0){const z=X[mt];let Q=O[mt];if(Q===void 0&&(mt==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),mt==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),z===void 0||z.attribute!==Q||Q&&z.data!==Q.data)return!0;B++}return c.attributesNum!==B||c.index!==st}function b(F,j,ot,st){const X={},O=j.attributes;let B=0;const at=ot.getAttributes();for(const mt in at)if(at[mt].location>=0){let z=O[mt];z===void 0&&(mt==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),mt==="instanceColor"&&F.instanceColor&&(z=F.instanceColor));const Q={};Q.attribute=z,z&&z.data&&(Q.data=z.data),X[mt]=Q,B++}c.attributes=X,c.attributesNum=B,c.index=st}function A(){const F=c.newAttributes;for(let j=0,ot=F.length;j<ot;j++)F[j]=0}function M(F){S(F,0)}function S(F,j){const ot=c.newAttributes,st=c.enabledAttributes,X=c.attributeDivisors;ot[F]=1,st[F]===0&&(o.enableVertexAttribArray(F),st[F]=1),X[F]!==j&&(o.vertexAttribDivisor(F,j),X[F]=j)}function C(){const F=c.newAttributes,j=c.enabledAttributes;for(let ot=0,st=j.length;ot<st;ot++)j[ot]!==F[ot]&&(o.disableVertexAttribArray(ot),j[ot]=0)}function N(F,j,ot,st,X,O,B){B===!0?o.vertexAttribIPointer(F,j,ot,X,O):o.vertexAttribPointer(F,j,ot,st,X,O)}function L(F,j,ot,st){A();const X=st.attributes,O=ot.getAttributes(),B=j.defaultAttributeValues;for(const at in O){const mt=O[at];if(mt.location>=0){let yt=X[at];if(yt===void 0&&(at==="instanceMatrix"&&F.instanceMatrix&&(yt=F.instanceMatrix),at==="instanceColor"&&F.instanceColor&&(yt=F.instanceColor)),yt!==void 0){const z=yt.normalized,Q=yt.itemSize,xt=t.get(yt);if(xt===void 0)continue;const Dt=xt.buffer,Pt=xt.type,lt=xt.bytesPerElement,bt=Pt===o.INT||Pt===o.UNSIGNED_INT||yt.gpuType===$d;if(yt.isInterleavedBufferAttribute){const wt=yt.data,Yt=wt.stride,se=yt.offset;if(wt.isInstancedInterleavedBuffer){for(let te=0;te<mt.locationSize;te++)S(mt.location+te,wt.meshPerAttribute);F.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let te=0;te<mt.locationSize;te++)M(mt.location+te);o.bindBuffer(o.ARRAY_BUFFER,Dt);for(let te=0;te<mt.locationSize;te++)N(mt.location+te,Q/mt.locationSize,Pt,z,Yt*lt,(se+Q/mt.locationSize*te)*lt,bt)}else{if(yt.isInstancedBufferAttribute){for(let wt=0;wt<mt.locationSize;wt++)S(mt.location+wt,yt.meshPerAttribute);F.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let wt=0;wt<mt.locationSize;wt++)M(mt.location+wt);o.bindBuffer(o.ARRAY_BUFFER,Dt);for(let wt=0;wt<mt.locationSize;wt++)N(mt.location+wt,Q/mt.locationSize,Pt,z,Q*lt,Q/mt.locationSize*wt*lt,bt)}}else if(B!==void 0){const z=B[at];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(mt.location,z);break;case 3:o.vertexAttrib3fv(mt.location,z);break;case 4:o.vertexAttrib4fv(mt.location,z);break;default:o.vertexAttrib1fv(mt.location,z)}}}}C()}function H(){P();for(const F in s){const j=s[F];for(const ot in j){const st=j[ot];for(const X in st){const O=st[X];for(const B in O)_(O[B].object),delete O[B];delete st[X]}}delete s[F]}}function U(F){if(s[F.id]===void 0)return;const j=s[F.id];for(const ot in j){const st=j[ot];for(const X in st){const O=st[X];for(const B in O)_(O[B].object),delete O[B];delete st[X]}}delete s[F.id]}function I(F){for(const j in s){const ot=s[j];for(const st in ot){const X=ot[st];if(X[F.id]===void 0)continue;const O=X[F.id];for(const B in O)_(O[B].object),delete O[B];delete X[F.id]}}}function T(F){for(const j in s){const ot=s[j],st=F.isInstancedMesh===!0?F.id:0,X=ot[st];if(X!==void 0){for(const O in X){const B=X[O];for(const at in B)_(B[at].object),delete B[at];delete X[O]}delete ot[st],Object.keys(ot).length===0&&delete s[j]}}}function P(){Y(),h=!0,c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:P,resetDefaultState:Y,dispose:H,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:M,disableUnusedAttributes:C}}function Db(o,t,i){let s;function l(m){s=m}function c(m,d){o.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,_){_!==0&&(o.drawArraysInstanced(s,m,d,_),i.update(d,s,_))}function p(m,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,_);let g=0;for(let y=0;y<_;y++)g+=d[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function Ub(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==aa&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const T=I===ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Oi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Sa&&!T)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const _=m(d);_!==d&&(ue("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:L,maxSamples:H,samples:U}}function Nb(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new or,p=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,y){const b=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,S=o.get(v);if(!l||b===null||b.length===0||c&&!M)c?_(null):d();else{const C=c?0:s,N=C*4;let L=S.clippingState||null;m.value=L,L=_(b,g,N,y);for(let H=0;H!==N;++H)L[H]=i[H];S.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,y,b){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=m.value,b!==!0||M===null){const S=y+A*4,C=g.matrixWorldInverse;p.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let N=0,L=y;N!==A;++N,L+=4)h.copy(v[N]).applyMatrix4(C,p),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}const Bs=4,O_=[.125,.215,.35,.446,.526,.582],cr=20,Lb=256,hl=new Ov,P_=new Ie;let td=null,ed=0,nd=0,id=!1;const Ob=new K;class z_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=Ob}=c;td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(td,ed,nd),this._renderer.xr.enabled=id,t.scissorTest=!1,oo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===hr||t.mapping===ho?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:ns,format:aa,colorSpace:ru,depthBuffer:!1},l=I_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Pb(c)),this._blurMaterial=Ib(c,t,i),this._ggxMaterial=zb(c,t,i)}return l}_compileMaterial(t){const i=new be(new ci,t);this._renderer.compile(i,hl)}_sceneToCubeUV(t,i,s,l,c){const m=new Mi(90,1,i,s),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(P_),v.toneMapping=ya,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new rn,new lo({name:"PMREM.Background",side:yi,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(P_),S=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):L===1?(m.up.set(0,0,d[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const H=this._cubeSize;oo(l,L*H,N>2?H:0,H,H),v.setRenderTarget(l),S&&v.render(A,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===hr||t.mapping===ho;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;oo(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,hl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,y=v*g,{_lodMax:b}=this,A=this._sizeLods[s],M=3*A*(s>b-Bs?s-b+Bs:0),S=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,oo(c,M,S,3*A,2*A),l.setRenderTarget(c),l.render(p,hl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,oo(t,M,S,3*A,2*A),l.setRenderTarget(t),l.render(p,hl)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=d;const g=d.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*cr-1),A=c/b,M=isFinite(c)?1+Math.floor(_*A):cr;M>cr&&ue(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${cr}`);const S=[];let C=0;for(let I=0;I<cr;++I){const T=I/A,P=Math.exp(-T*T/2);S.push(P),I===0?C+=P:I<M&&(C+=2*P)}for(let I=0;I<S.length;I++)S[I]=S[I]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=b,g.mipInt.value=N-s;const L=this._sizeLods[l],H=3*L*(l>N-Bs?l-N+Bs:0),U=4*(this._cubeSize-L);oo(i,H,U,3*L,2*L),m.setRenderTarget(i),m.render(v,hl)}}function Pb(o){const t=[],i=[],s=[];let l=o;const c=o-Bs+1+O_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>o-Bs?m=O_[h-o+Bs-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,b=6,A=3,M=2,S=1,C=new Float32Array(A*b*y),N=new Float32Array(M*b*y),L=new Float32Array(S*b*y);for(let U=0;U<y;U++){const I=U%3*2/3-1,T=U>2?0:-1,P=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];C.set(P,A*b*U),N.set(g,M*b*U);const Y=[U,U,U,U,U,U];L.set(Y,S*b*U)}const H=new ci;H.setAttribute("position",new ba(C,A)),H.setAttribute("uv",new ba(N,M)),H.setAttribute("faceIndex",new ba(L,S)),s.push(new be(H,null)),l>Bs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function I_(o,t,i){const s=new Ea(o,t,i);return s.texture.mapping=du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function oo(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function zb(o,t,i){return new Ra({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Ib(o,t,i){const s=new Float32Array(cr),l=new K(0,1,0);return new Ra({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mu(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function B_(){return new Ra({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function F_(){return new Ra({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}class Iv extends Ea{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Cv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new rn(5,5,5),c=new Ra({name:"CubemapFromEquirect",uniforms:go(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:yi,blending:ts});c.uniforms.tEquirect.value=i;const h=new be(l,c),p=i.minFilter;return i.minFilter===ur&&(i.minFilter=ii),new Hy(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function Bb(o){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===yh||y===Eh)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const A=new Iv(b.height);return A.fromEquirectangularTexture(o,g),t.set(g,A),g.addEventListener("dispose",d),p(A.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,b=y===yh||y===Eh,A=y===hr||y===ho;if(b||A){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new z_(o)),M=b?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return b&&C&&C.height>0||A&&C&&m(C)?(s===null&&(s=new z_(o)),M=b?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function p(g,y){return y===yh?g.mapping=hr:y===Eh&&(g.mapping=ho),g}function m(g){let y=0;const b=6;for(let A=0;A<b;A++)g[A]!==void 0&&y++;return y===b}function d(g){const y=g.target;y.removeEventListener("dispose",d);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function Fb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Wd("WebGLRenderer: "+s+" extension not supported."),l}}}function Vb(o,t,i,s){const l={},c=new WeakMap;function h(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],o.ARRAY_BUFFER)}function d(v){const g=[],y=v.index,b=v.attributes.position;let A=0;if(b===void 0)return;if(y!==null){const C=y.array;A=y.version;for(let N=0,L=C.length;N<L;N+=3){const H=C[N+0],U=C[N+1],I=C[N+2];g.push(H,U,U,I,I,H)}}else{const C=b.array;A=b.version;for(let N=0,L=C.length/3-1;N<L;N+=3){const H=N+0,U=N+1,I=N+2;g.push(H,U,U,I,I,H)}}const M=new(b.count>=65535?Rv:Av)(g,1);M.version=A;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&d(v)}else d(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:_}}function Gb(o,t,i){let s;function l(v){s=v}let c,h;function p(v){c=v.type,h=v.bytesPerElement}function m(v,g){o.drawElements(s,g,c,v*h),i.update(g,s,1)}function d(v,g,y){y!==0&&(o.drawElementsInstanced(s,g,c,v*h,y),i.update(g,s,y))}function _(v,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,y);let A=0;for(let M=0;M<y;M++)A+=g[M];i.update(A,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=_}function Hb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Fe("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function kb(o,t,i){const s=new WeakMap,l=new En;function c(h,p,m){const d=h.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==v){let Y=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",Y)};var y=Y;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let L=0;b===!0&&(L=1),A===!0&&(L=2),M===!0&&(L=3);let H=p.attributes.position.count*L,U=1;H>t.maxTextureSize&&(U=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const I=new Float32Array(H*U*4*v),T=new Ev(I,H,U,v);T.type=Sa,T.needsUpdate=!0;const P=L*4;for(let F=0;F<v;F++){const j=S[F],ot=C[F],st=N[F],X=H*U*4*F;for(let O=0;O<j.count;O++){const B=O*P;b===!0&&(l.fromBufferAttribute(j,O),I[X+B+0]=l.x,I[X+B+1]=l.y,I[X+B+2]=l.z,I[X+B+3]=0),A===!0&&(l.fromBufferAttribute(ot,O),I[X+B+4]=l.x,I[X+B+5]=l.y,I[X+B+6]=l.z,I[X+B+7]=0),M===!0&&(l.fromBufferAttribute(st,O),I[X+B+8]=l.x,I[X+B+9]=l.y,I[X+B+10]=l.z,I[X+B+11]=st.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Ve(H,U)},s.set(p,g),p.addEventListener("dispose",Y)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const A=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function Xb(o,t,i,s,l){let c=new WeakMap;function h(d){const _=l.render.frame,v=d.geometry,g=t.get(d,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==_&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function p(){c=new WeakMap}function m(d){const _=d.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:p}}const qb={[ov]:"LINEAR_TONE_MAPPING",[lv]:"REINHARD_TONE_MAPPING",[cv]:"CINEON_TONE_MAPPING",[uv]:"ACES_FILMIC_TONE_MAPPING",[hv]:"AGX_TONE_MAPPING",[dv]:"NEUTRAL_TONE_MAPPING",[fv]:"CUSTOM_TONE_MAPPING"};function Wb(o,t,i,s,l){const c=new Ea(t,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new po(t,i):void 0}),h=new Ea(t,i,{type:ns,depthBuffer:!1,stencilBuffer:!1}),p=new ci;p.setAttribute("position",new si([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new si([0,2,0,0,2,0],2));const m=new Py({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new be(p,m),_=new Ov(-1,1,1,-1,0,1);let v=null,g=null,y=!1,b,A=null,M=[],S=!1;this.setSize=function(C,N){c.setSize(C,N),h.setSize(C,N);for(let L=0;L<M.length;L++){const H=M[L];H.setSize&&H.setSize(C,N)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const N=c.width,L=c.height;for(let H=0;H<M.length;H++){const U=M[H];U.setSize&&U.setSize(N,L)}},this.begin=function(C,N){if(y||C.toneMapping===ya&&M.length===0)return!1;if(A=N,N!==null){const L=N.width,H=N.height;(c.width!==L||c.height!==H)&&this.setSize(L,H)}return S===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=ya,!0},this.hasRenderPass=function(){return S},this.end=function(C,N){C.toneMapping=b,y=!0;let L=c,H=h;for(let U=0;U<M.length;U++){const I=M[U];if(I.enabled!==!1&&(I.render(C,H,L,N),I.needsSwap!==!1)){const T=L;L=H,H=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,m.defines={},Pe.getTransfer(v)===Je&&(m.defines.SRGB_TRANSFER="");const U=qb[g];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(A),C.render(d,_),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const Bv=new ai,jd=new po(1,1),Fv=new Ev,Vv=new hy,Gv=new Cv,V_=[],G_=[],H_=new Float32Array(16),k_=new Float32Array(9),X_=new Float32Array(4);function _o(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=V_[l];if(c===void 0&&(c=new Float32Array(l),V_[l]=c),t!==0){s.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=i,o[h].toArray(c,p)}return c}function zn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function In(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function gu(o,t){let i=G_[t];i===void 0&&(i=new Int32Array(t),G_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function Yb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function jb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zn(i,t))return;o.uniform2fv(this.addr,t),In(i,t)}}function Zb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(zn(i,t))return;o.uniform3fv(this.addr,t),In(i,t)}}function Kb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zn(i,t))return;o.uniform4fv(this.addr,t),In(i,t)}}function Qb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(zn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),In(i,t)}else{if(zn(i,s))return;X_.set(s),o.uniformMatrix2fv(this.addr,!1,X_),In(i,s)}}function Jb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(zn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),In(i,t)}else{if(zn(i,s))return;k_.set(s),o.uniformMatrix3fv(this.addr,!1,k_),In(i,s)}}function $b(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(zn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),In(i,t)}else{if(zn(i,s))return;H_.set(s),o.uniformMatrix4fv(this.addr,!1,H_),In(i,s)}}function tT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function eT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zn(i,t))return;o.uniform2iv(this.addr,t),In(i,t)}}function nT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(zn(i,t))return;o.uniform3iv(this.addr,t),In(i,t)}}function iT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zn(i,t))return;o.uniform4iv(this.addr,t),In(i,t)}}function aT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function sT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zn(i,t))return;o.uniform2uiv(this.addr,t),In(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(zn(i,t))return;o.uniform3uiv(this.addr,t),In(i,t)}}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zn(i,t))return;o.uniform4uiv(this.addr,t),In(i,t)}}function lT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(jd.compareFunction=i.isReversedDepthBuffer()?rp:sp,c=jd):c=Bv,i.setTexture2D(t||c,l)}function cT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Vv,l)}function uT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Gv,l)}function fT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Fv,l)}function hT(o){switch(o){case 5126:return Yb;case 35664:return jb;case 35665:return Zb;case 35666:return Kb;case 35674:return Qb;case 35675:return Jb;case 35676:return $b;case 5124:case 35670:return tT;case 35667:case 35671:return eT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return aT;case 36294:return sT;case 36295:return rT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return fT}}function dT(o,t){o.uniform1fv(this.addr,t)}function pT(o,t){const i=_o(t,this.size,2);o.uniform2fv(this.addr,i)}function mT(o,t){const i=_o(t,this.size,3);o.uniform3fv(this.addr,i)}function gT(o,t){const i=_o(t,this.size,4);o.uniform4fv(this.addr,i)}function _T(o,t){const i=_o(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function vT(o,t){const i=_o(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function xT(o,t){const i=_o(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ST(o,t){o.uniform1iv(this.addr,t)}function MT(o,t){o.uniform2iv(this.addr,t)}function yT(o,t){o.uniform3iv(this.addr,t)}function ET(o,t){o.uniform4iv(this.addr,t)}function bT(o,t){o.uniform1uiv(this.addr,t)}function TT(o,t){o.uniform2uiv(this.addr,t)}function AT(o,t){o.uniform3uiv(this.addr,t)}function RT(o,t){o.uniform4uiv(this.addr,t)}function wT(o,t,i){const s=this.cache,l=t.length,c=gu(i,l);zn(s,c)||(o.uniform1iv(this.addr,c),In(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=jd:h=Bv;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||h,c[p])}function CT(o,t,i){const s=this.cache,l=t.length,c=gu(i,l);zn(s,c)||(o.uniform1iv(this.addr,c),In(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Vv,c[h])}function DT(o,t,i){const s=this.cache,l=t.length,c=gu(i,l);zn(s,c)||(o.uniform1iv(this.addr,c),In(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Gv,c[h])}function UT(o,t,i){const s=this.cache,l=t.length,c=gu(i,l);zn(s,c)||(o.uniform1iv(this.addr,c),In(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Fv,c[h])}function NT(o){switch(o){case 5126:return dT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return yT;case 35669:case 35673:return ET;case 5125:return bT;case 36294:return TT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}class LT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=hT(i.type)}}class OT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=NT(i.type)}}class PT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function q_(o,t){o.seq.push(t),o.map[t.id]=t}function zT(o,t,i){const s=o.name,l=s.length;for(ad.lastIndex=0;;){const c=ad.exec(s),h=ad.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){q_(i,d===void 0?new LT(p,o,t):new OT(p,o,t));break}else{let v=i.map[p];v===void 0&&(v=new PT(p),q_(i,v)),i=v}}}class nu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=t.getActiveUniform(i,h),m=t.getUniformLocation(i,p.name);zT(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function W_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const IT=37297;let BT=0;function FT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const Y_=new ge;function VT(o){Pe._getMatrix(Y_,Pe.workingColorSpace,o);const t=`mat3( ${Y_.elements.map(i=>i.toFixed(4))} )`;switch(Pe.getTransfer(o)){case ou:return[t,"LinearTransferOETF"];case Je:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function j_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+FT(o.getShaderSource(t),p)}else return c}function GT(o,t){const i=VT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const HT={[ov]:"Linear",[lv]:"Reinhard",[cv]:"Cineon",[uv]:"ACESFilmic",[hv]:"AgX",[dv]:"Neutral",[fv]:"Custom"};function kT(o,t){const i=HT[t];return i===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new K;function XT(){Pe.getLuminanceCoefficients(Kc);const o=Kc.x.toFixed(4),t=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function WT(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function YT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:p}}return i}function ml(o){return o!==""}function Z_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function K_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(o){return o.replace(jT,KT)}const ZT=new Map;function KT(o,t){let i=Te[t];if(i===void 0){const s=ZT.get(t);if(s!==void 0)i=Te[s],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Zd(i)}const QT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q_(o){return o.replace(QT,JT)}function JT(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function J_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const $T={[Qc]:"SHADOWMAP_TYPE_PCF",[pl]:"SHADOWMAP_TYPE_VSM"};function tA(o){return $T[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eA={[hr]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function nA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":eA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const iA={[ho]:"ENVMAP_MODE_REFRACTION"};function aA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":iA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sA={[Jd]:"ENVMAP_BLENDING_MULTIPLY",[qM]:"ENVMAP_BLENDING_MIX",[WM]:"ENVMAP_BLENDING_ADD"};function rA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":sA[o.combine]||"ENVMAP_BLENDING_NONE"}function oA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function lA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=tA(i),d=nA(i),_=aA(i),v=rA(i),g=oA(i),y=qT(i),b=WT(c),A=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ml).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ml).join(`
`),S.length>0&&(S+=`
`)):(M=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),S=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ya?"#define TONE_MAPPING":"",i.toneMapping!==ya?Te.tonemapping_pars_fragment:"",i.toneMapping!==ya?kT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,GT("linearToOutputTexel",i.outputColorSpace),XT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ml).join(`
`)),h=Zd(h),h=Z_(h,i),h=K_(h,i),p=Zd(p),p=Z_(p,i),p=K_(p,i),h=Q_(h),p=Q_(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===o_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===o_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=C+M+h,L=C+S+p,H=W_(l,l.VERTEX_SHADER,N),U=W_(l,l.FRAGMENT_SHADER,L);l.attachShader(A,H),l.attachShader(A,U),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function I(F){if(o.debug.checkShaderErrors){const j=l.getProgramInfoLog(A)||"",ot=l.getShaderInfoLog(H)||"",st=l.getShaderInfoLog(U)||"",X=j.trim(),O=ot.trim(),B=st.trim();let at=!0,mt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,H,U);else{const yt=j_(l,H,"vertex"),z=j_(l,U,"fragment");Fe("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+yt+`
`+z)}else X!==""?ue("WebGLProgram: Program Info Log:",X):(O===""||B==="")&&(mt=!1);mt&&(F.diagnostics={runnable:at,programLog:X,vertexShader:{log:O,prefix:M},fragmentShader:{log:B,prefix:S}})}l.deleteShader(H),l.deleteShader(U),T=new nu(l,A),P=YT(l,A)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(A,IT)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=BT++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=U,this}let cA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new fA(t),i.set(t,s)),s}}class fA{constructor(t){this.id=cA++,this.code=t,this.usedTimes=0}}function hA(o){return o===dr||o===iu||o===au}function dA(o,t,i,s,l,c){const h=new bv,p=new uA,m=new Set,d=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,P,Y,F,j,ot){const st=F.fog,X=j.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,at=t.get(T.envMap||O,B),mt=at&&at.mapping===du?at.image.height:null,yt=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ue("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const z=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=z!==void 0?z.length:0;let xt=0;X.morphAttributes.position!==void 0&&(xt=1),X.morphAttributes.normal!==void 0&&(xt=2),X.morphAttributes.color!==void 0&&(xt=3);let Dt,Pt,lt,bt;if(yt){const oe=xa[yt];Dt=oe.vertexShader,Pt=oe.fragmentShader}else Dt=T.vertexShader,Pt=T.fragmentShader,p.update(T),lt=p.getVertexShaderID(T),bt=p.getFragmentShaderID(T);const wt=o.getRenderTarget(),Yt=o.state.buffers.depth.getReversed(),se=j.isInstancedMesh===!0,te=j.isBatchedMesh===!0,je=!!T.map,xe=!!T.matcap,Re=!!at,Ge=!!T.aoMap,ce=!!T.lightMap,_n=!!T.bumpMap,$e=!!T.normalMap,On=!!T.displacementMap,V=!!T.emissiveMap,Gt=!!T.metalnessMap,Ut=!!T.roughnessMap,ie=T.anisotropy>0,Tt=T.clearcoat>0,Ae=T.dispersion>0,D=T.iridescence>0,E=T.sheen>0,J=T.transmission>0,gt=ie&&!!T.anisotropyMap,At=Tt&&!!T.clearcoatMap,Nt=Tt&&!!T.clearcoatNormalMap,It=Tt&&!!T.clearcoatRoughnessMap,ut=D&&!!T.iridescenceMap,ht=D&&!!T.iridescenceThicknessMap,Bt=E&&!!T.sheenColorMap,Ft=E&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Ot=!!T.specularColorMap,jt=!!T.specularIntensityMap,re=J&&!!T.transmissionMap,Se=J&&!!T.thicknessMap,k=!!T.gradientMap,Ct=!!T.alphaMap,dt=T.alphaTest>0,Ht=!!T.alphaHash,zt=!!T.extensions;let Et=ya;T.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Et=o.toneMapping);const Kt={shaderID:yt,shaderType:T.type,shaderName:T.name,vertexShader:Dt,fragmentShader:Pt,defines:T.defines,customVertexShaderID:lt,customFragmentShaderID:bt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:te,batchingColor:te&&j._colorsTexture!==null,instancing:se,instancingColor:se&&j.instanceColor!==null,instancingMorph:se&&j.morphTexture!==null,outputColorSpace:wt===null?o.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Pe.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:je,matcap:xe,envMap:Re,envMapMode:Re&&at.mapping,envMapCubeUVHeight:mt,aoMap:Ge,lightMap:ce,bumpMap:_n,normalMap:$e,displacementMap:On,emissiveMap:V,normalMapObjectSpace:$e&&T.normalMapType===ZM,normalMapTangentSpace:$e&&T.normalMapType===su,packedNormalMap:$e&&T.normalMapType===su&&hA(T.normalMap.format),metalnessMap:Gt,roughnessMap:Ut,anisotropy:ie,anisotropyMap:gt,clearcoat:Tt,clearcoatMap:At,clearcoatNormalMap:Nt,clearcoatRoughnessMap:It,dispersion:Ae,iridescence:D,iridescenceMap:ut,iridescenceThicknessMap:ht,sheen:E,sheenColorMap:Bt,sheenRoughnessMap:Ft,specularMap:Lt,specularColorMap:Ot,specularIntensityMap:jt,transmission:J,transmissionMap:re,thicknessMap:Se,gradientMap:k,opaque:T.transparent===!1&&T.blending===co&&T.alphaToCoverage===!1,alphaMap:Ct,alphaTest:dt,alphaHash:Ht,combine:T.combine,mapUv:je&&b(T.map.channel),aoMapUv:Ge&&b(T.aoMap.channel),lightMapUv:ce&&b(T.lightMap.channel),bumpMapUv:_n&&b(T.bumpMap.channel),normalMapUv:$e&&b(T.normalMap.channel),displacementMapUv:On&&b(T.displacementMap.channel),emissiveMapUv:V&&b(T.emissiveMap.channel),metalnessMapUv:Gt&&b(T.metalnessMap.channel),roughnessMapUv:Ut&&b(T.roughnessMap.channel),anisotropyMapUv:gt&&b(T.anisotropyMap.channel),clearcoatMapUv:At&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&b(T.sheenRoughnessMap.channel),specularMapUv:Lt&&b(T.specularMap.channel),specularColorMapUv:Ot&&b(T.specularColorMap.channel),specularIntensityMapUv:jt&&b(T.specularIntensityMap.channel),transmissionMapUv:re&&b(T.transmissionMap.channel),thicknessMapUv:Se&&b(T.thicknessMap.channel),alphaMapUv:Ct&&b(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&($e||ie),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!X.attributes.uv&&(je||Ct),fog:!!st,useFog:T.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&$e===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Yt,skinning:j.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:xt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ot.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&Y.length>0,shadowMapType:o.shadowMap.type,toneMapping:Et,decodeVideoTexture:je&&T.map.isVideoTexture===!0&&Pe.getTransfer(T.map.colorSpace)===Je,decodeVideoTextureEmissive:V&&T.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(T.emissiveMap.colorSpace)===Je,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ja,flipSided:T.side===yi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&T.extensions.multiDraw===!0||te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Kt.vertexUv1s=m.has(1),Kt.vertexUv2s=m.has(2),Kt.vertexUv3s=m.has(3),m.clear(),Kt}function M(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)P.push(Y),P.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(S(P,T),C(P,T),P.push(o.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function S(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function C(T,P){h.disableAll(),P.instancing&&h.enable(0),P.instancingColor&&h.enable(1),P.instancingMorph&&h.enable(2),P.matcap&&h.enable(3),P.envMap&&h.enable(4),P.normalMapObjectSpace&&h.enable(5),P.normalMapTangentSpace&&h.enable(6),P.clearcoat&&h.enable(7),P.iridescence&&h.enable(8),P.alphaTest&&h.enable(9),P.vertexColors&&h.enable(10),P.vertexAlphas&&h.enable(11),P.vertexUv1s&&h.enable(12),P.vertexUv2s&&h.enable(13),P.vertexUv3s&&h.enable(14),P.vertexTangents&&h.enable(15),P.anisotropy&&h.enable(16),P.alphaHash&&h.enable(17),P.batching&&h.enable(18),P.dispersion&&h.enable(19),P.batchingColor&&h.enable(20),P.gradientMap&&h.enable(21),P.packedNormalMap&&h.enable(22),P.vertexNormals&&h.enable(23),T.push(h.mask),h.disableAll(),P.fog&&h.enable(0),P.useFog&&h.enable(1),P.flatShading&&h.enable(2),P.logarithmicDepthBuffer&&h.enable(3),P.reversedDepthBuffer&&h.enable(4),P.skinning&&h.enable(5),P.morphTargets&&h.enable(6),P.morphNormals&&h.enable(7),P.morphColors&&h.enable(8),P.premultipliedAlpha&&h.enable(9),P.shadowMapEnabled&&h.enable(10),P.doubleSided&&h.enable(11),P.flipSided&&h.enable(12),P.useDepthPacking&&h.enable(13),P.dithering&&h.enable(14),P.transmission&&h.enable(15),P.sheen&&h.enable(16),P.opaque&&h.enable(17),P.pointsUvs&&h.enable(18),P.decodeVideoTexture&&h.enable(19),P.decodeVideoTextureEmissive&&h.enable(20),P.alphaToCoverage&&h.enable(21),P.numLightProbeGrids>0&&h.enable(22),T.push(h.mask)}function N(T){const P=y[T.type];let Y;if(P){const F=xa[P];Y=Ny.clone(F.uniforms)}else Y=T.uniforms;return Y}function L(T,P){let Y=_.get(P);return Y!==void 0?++Y.usedTimes:(Y=new lA(o,P,T,l),d.push(Y),_.set(P,Y)),Y}function H(T){if(--T.usedTimes===0){const P=d.indexOf(T);d[P]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function U(T){p.remove(T)}function I(){p.dispose()}return{getParameters:A,getProgramCacheKey:M,getUniforms:N,acquireProgram:L,releaseProgram:H,releaseShaderCache:U,programs:d,dispose:I}}function pA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function mA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function $_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function tv(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,b,A,M,S){let C=o[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:b,materialVariant:h(g),groupOrder:A,renderOrder:g.renderOrder,z:M,group:S},o[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=b,C.materialVariant=h(g),C.groupOrder=A,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,y,b,A,M,S){const C=p(g,y,b,A,M,S);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function d(g,y,b,A,M,S){const C=p(g,y,b,A,M,S);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||mA),s.length>1&&s.sort(y||$_),l.length>1&&l.sort(y||$_)}function v(){for(let g=t,y=o.length;g<y;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:v,sort:_}}function gA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new tv,o.set(s,[h])):l>=c.length?(h=new tv,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function _A(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new Ie};break;case"SpotLight":i={position:new K,direction:new K,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new K,halfWidth:new K,halfHeight:new K};break}return o[t.id]=i,i}}}function vA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let xA=0;function SA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function MA(o){const t=new _A,i=vA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new K);const l=new K,c=new bn,h=new bn;function p(d){let _=0,v=0,g=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let y=0,b=0,A=0,M=0,S=0,C=0,N=0,L=0,H=0,U=0,I=0;d.sort(SA);for(let P=0,Y=d.length;P<Y;P++){const F=d[P],j=F.color,ot=F.intensity,st=F.distance;let X=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===dr?X=F.shadow.map.texture:X=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)_+=j.r*ot,v+=j.g*ot,g+=j.b*ot;else if(F.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(F.sh.coefficients[O],ot);I++}else if(F.isDirectionalLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const B=F.shadow,at=i.get(F);at.shadowIntensity=B.intensity,at.shadowBias=B.bias,at.shadowNormalBias=B.normalBias,at.shadowRadius=B.radius,at.shadowMapSize=B.mapSize,s.directionalShadow[y]=at,s.directionalShadowMap[y]=X,s.directionalShadowMatrix[y]=F.shadow.matrix,C++}s.directional[y]=O,y++}else if(F.isSpotLight){const O=t.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(j).multiplyScalar(ot),O.distance=st,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,s.spot[A]=O;const B=F.shadow;if(F.map&&(s.spotLightMap[H]=F.map,H++,B.updateMatrices(F),F.castShadow&&U++),s.spotLightMatrix[A]=B.matrix,F.castShadow){const at=i.get(F);at.shadowIntensity=B.intensity,at.shadowBias=B.bias,at.shadowNormalBias=B.normalBias,at.shadowRadius=B.radius,at.shadowMapSize=B.mapSize,s.spotShadow[A]=at,s.spotShadowMap[A]=X,L++}A++}else if(F.isRectAreaLight){const O=t.get(F);O.color.copy(j).multiplyScalar(ot),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=O,M++}else if(F.isPointLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const B=F.shadow,at=i.get(F);at.shadowIntensity=B.intensity,at.shadowBias=B.bias,at.shadowNormalBias=B.normalBias,at.shadowRadius=B.radius,at.shadowMapSize=B.mapSize,at.shadowCameraNear=B.camera.near,at.shadowCameraFar=B.camera.far,s.pointShadow[b]=at,s.pointShadowMap[b]=X,s.pointShadowMatrix[b]=F.shadow.matrix,N++}s.point[b]=O,b++}else if(F.isHemisphereLight){const O=t.get(F);O.skyColor.copy(F.color).multiplyScalar(ot),O.groundColor.copy(F.groundColor).multiplyScalar(ot),s.hemi[S]=O,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_FLOAT_1,s.rectAreaLTC2=Wt.LTC_FLOAT_2):(s.rectAreaLTC1=Wt.LTC_HALF_1,s.rectAreaLTC2=Wt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==A||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==N||T.numSpotShadows!==L||T.numSpotMaps!==H||T.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=M,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=L+H-U,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=I,T.directionalLength=y,T.pointLength=b,T.spotLength=A,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=N,T.numSpotShadows=L,T.numSpotMaps=H,T.numLightProbes=I,s.version=xA++)}function m(d,_){let v=0,g=0,y=0,b=0,A=0;const M=_.matrixWorldInverse;for(let S=0,C=d.length;S<C;S++){const N=d[S];if(N.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),v++}else if(N.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const L=s.rectArea[b];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(M),g++}else if(N.isHemisphereLight){const L=s.hemi[A];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(M),A++}}}return{setup:p,setupView:m,state:s}}function ev(o){const t=new MA(o),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){t.setup(i)}function _(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:d,setupLightsView:_,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function yA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new ev(o),t.set(l,[p])):c>=h.length?(p=new ev(o),h.push(p)):p=h[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bA=`uniform sampler2D shadow_pass;
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
}`,TA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],AA=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],nv=new bn,dl=new K,sd=new K;function RA(o,t,i){let s=new cp;const l=new Ve,c=new Ve,h=new En,p=new zy,m=new Iy,d={},_=i.maxTextureSize,v={[Fs]:yi,[yi]:Fs,[Ja]:Ja},g=new Ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:EA,fragmentShader:bA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new ci;b.setAttribute("position",new ba(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new be(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let S=this.type;this.render=function(U,I,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===AM&&(ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qc);const P=o.getRenderTarget(),Y=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),j=o.state;j.setBlending(ts),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ot=S!==this.type;ot&&I.traverse(function(st){st.material&&(Array.isArray(st.material)?st.material.forEach(X=>X.needsUpdate=!0):st.material.needsUpdate=!0)});for(let st=0,X=U.length;st<X;st++){const O=U[st],B=O.shadow;if(B===void 0){ue("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const at=B.getFrameExtents();l.multiply(at),c.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/at.x),l.x=c.x*at.x,B.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/at.y),l.y=c.y*at.y,B.mapSize.y=c.y));const mt=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=mt,B.map===null||ot===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===pl){if(O.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ea(l.x,l.y,{format:dr,type:ns,minFilter:ii,magFilter:ii,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new po(l.x,l.y,Sa),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=is,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Zn,B.map.depthTexture.magFilter=Zn}else O.isPointLight?(B.map=new Iv(l.x),B.map.depthTexture=new Dy(l.x,Ta)):(B.map=new Ea(l.x,l.y),B.map.depthTexture=new po(l.x,l.y,Ta)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=is,this.type===Qc?(B.map.depthTexture.compareFunction=mt?rp:sp,B.map.depthTexture.minFilter=ii,B.map.depthTexture.magFilter=ii):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Zn,B.map.depthTexture.magFilter=Zn);B.camera.updateProjectionMatrix()}const yt=B.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<yt;z++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,z),o.clear();else{z===0&&(o.setRenderTarget(B.map),o.clear());const Q=B.getViewport(z);h.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),j.viewport(h)}if(O.isPointLight){const Q=B.camera,xt=B.matrix,Dt=O.distance||Q.far;Dt!==Q.far&&(Q.far=Dt,Q.updateProjectionMatrix()),dl.setFromMatrixPosition(O.matrixWorld),Q.position.copy(dl),sd.copy(Q.position),sd.add(TA[z]),Q.up.copy(AA[z]),Q.lookAt(sd),Q.updateMatrixWorld(),xt.makeTranslation(-dl.x,-dl.y,-dl.z),nv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(nv,Q.coordinateSystem,Q.reversedDepth)}else B.updateMatrices(O);s=B.getFrustum(),L(I,T,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===pl&&C(B,T),B.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(P,Y,F)};function C(U,I){const T=t.update(A);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ea(l.x,l.y,{format:dr,type:ns})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(I,null,T,g,A,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(I,null,T,y,A,null)}function N(U,I,T,P){let Y=null;const F=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(F!==void 0)Y=F;else if(Y=T.isPointLight===!0?m:p,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const j=Y.uuid,ot=I.uuid;let st=d[j];st===void 0&&(st={},d[j]=st);let X=st[ot];X===void 0&&(X=Y.clone(),st[ot]=X,I.addEventListener("dispose",H)),Y=X}if(Y.visible=I.visible,Y.wireframe=I.wireframe,P===pl?Y.side=I.shadowSide!==null?I.shadowSide:I.side:Y.side=I.shadowSide!==null?I.shadowSide:v[I.side],Y.alphaMap=I.alphaMap,Y.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,Y.map=I.map,Y.clipShadows=I.clipShadows,Y.clippingPlanes=I.clippingPlanes,Y.clipIntersection=I.clipIntersection,Y.displacementMap=I.displacementMap,Y.displacementScale=I.displacementScale,Y.displacementBias=I.displacementBias,Y.wireframeLinewidth=I.wireframeLinewidth,Y.linewidth=I.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const j=o.properties.get(Y);j.light=T}return Y}function L(U,I,T,P,Y){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&Y===pl)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const ot=t.update(U),st=U.material;if(Array.isArray(st)){const X=ot.groups;for(let O=0,B=X.length;O<B;O++){const at=X[O],mt=st[at.materialIndex];if(mt&&mt.visible){const yt=N(U,mt,P,Y);U.onBeforeShadow(o,U,I,T,ot,yt,at),o.renderBufferDirect(T,null,ot,yt,U,at),U.onAfterShadow(o,U,I,T,ot,yt,at)}}}else if(st.visible){const X=N(U,st,P,Y);U.onBeforeShadow(o,U,I,T,ot,X,null),o.renderBufferDirect(T,null,ot,X,U,null),U.onAfterShadow(o,U,I,T,ot,X,null)}}const j=U.children;for(let ot=0,st=j.length;ot<st;ot++)L(j[ot],I,T,P,Y)}function H(U){U.target.removeEventListener("dispose",H);for(const T in d){const P=d[T],Y=U.target.uuid;Y in P&&(P[Y].dispose(),delete P[Y])}}}function wA(o,t){function i(){let k=!1;const Ct=new En;let dt=null;const Ht=new En(0,0,0,0);return{setMask:function(zt){dt!==zt&&!k&&(o.colorMask(zt,zt,zt,zt),dt=zt)},setLocked:function(zt){k=zt},setClear:function(zt,Et,Kt,oe,on){on===!0&&(zt*=oe,Et*=oe,Kt*=oe),Ct.set(zt,Et,Kt,oe),Ht.equals(Ct)===!1&&(o.clearColor(zt,Et,Kt,oe),Ht.copy(Ct))},reset:function(){k=!1,dt=null,Ht.set(-1,0,0,0)}}}function s(){let k=!1,Ct=!1,dt=null,Ht=null,zt=null;return{setReversed:function(Et){if(Ct!==Et){const Kt=t.get("EXT_clip_control");Et?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Et;const oe=zt;zt=null,this.setClear(oe)}},getReversed:function(){return Ct},setTest:function(Et){Et?wt(o.DEPTH_TEST):Yt(o.DEPTH_TEST)},setMask:function(Et){dt!==Et&&!k&&(o.depthMask(Et),dt=Et)},setFunc:function(Et){if(Ct&&(Et=sy[Et]),Ht!==Et){switch(Et){case ld:o.depthFunc(o.NEVER);break;case cd:o.depthFunc(o.ALWAYS);break;case ud:o.depthFunc(o.LESS);break;case fo:o.depthFunc(o.LEQUAL);break;case fd:o.depthFunc(o.EQUAL);break;case hd:o.depthFunc(o.GEQUAL);break;case dd:o.depthFunc(o.GREATER);break;case pd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ht=Et}},setLocked:function(Et){k=Et},setClear:function(Et){zt!==Et&&(zt=Et,Ct&&(Et=1-Et),o.clearDepth(Et))},reset:function(){k=!1,dt=null,Ht=null,zt=null,Ct=!1}}}function l(){let k=!1,Ct=null,dt=null,Ht=null,zt=null,Et=null,Kt=null,oe=null,on=null;return{setTest:function(Be){k||(Be?wt(o.STENCIL_TEST):Yt(o.STENCIL_TEST))},setMask:function(Be){Ct!==Be&&!k&&(o.stencilMask(Be),Ct=Be)},setFunc:function(Be,ri,Qn){(dt!==Be||Ht!==ri||zt!==Qn)&&(o.stencilFunc(Be,ri,Qn),dt=Be,Ht=ri,zt=Qn)},setOp:function(Be,ri,Qn){(Et!==Be||Kt!==ri||oe!==Qn)&&(o.stencilOp(Be,ri,Qn),Et=Be,Kt=ri,oe=Qn)},setLocked:function(Be){k=Be},setClear:function(Be){on!==Be&&(o.clearStencil(Be),on=Be)},reset:function(){k=!1,Ct=null,dt=null,Ht=null,zt=null,Et=null,Kt=null,oe=null,on=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let _={},v={},g={},y=new WeakMap,b=[],A=null,M=!1,S=null,C=null,N=null,L=null,H=null,U=null,I=null,T=new Ie(0,0,0),P=0,Y=!1,F=null,j=null,ot=null,st=null,X=null;const O=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,at=0;const mt=o.getParameter(o.VERSION);mt.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(mt)[1]),B=at>=1):mt.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),B=at>=2);let yt=null,z={};const Q=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),Dt=new En().fromArray(Q),Pt=new En().fromArray(xt);function lt(k,Ct,dt,Ht){const zt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(k,Et),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Kt=0;Kt<dt;Kt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Ht,0,o.RGBA,o.UNSIGNED_BYTE,zt):o.texImage2D(Ct+Kt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,zt);return Et}const bt={};bt[o.TEXTURE_2D]=lt(o.TEXTURE_2D,o.TEXTURE_2D,1),bt[o.TEXTURE_CUBE_MAP]=lt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[o.TEXTURE_2D_ARRAY]=lt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),bt[o.TEXTURE_3D]=lt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),wt(o.DEPTH_TEST),h.setFunc(fo),_n(!1),$e(e_),wt(o.CULL_FACE),Ge(ts);function wt(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Yt(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function se(k,Ct){return g[k]!==Ct?(o.bindFramebuffer(k,Ct),g[k]=Ct,k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ct),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function te(k,Ct){let dt=b,Ht=!1;if(k){dt=y.get(Ct),dt===void 0&&(dt=[],y.set(Ct,dt));const zt=k.textures;if(dt.length!==zt.length||dt[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Kt=zt.length;Et<Kt;Et++)dt[Et]=o.COLOR_ATTACHMENT0+Et;dt.length=zt.length,Ht=!0}}else dt[0]!==o.BACK&&(dt[0]=o.BACK,Ht=!0);Ht&&o.drawBuffers(dt)}function je(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const xe={[lr]:o.FUNC_ADD,[wM]:o.FUNC_SUBTRACT,[CM]:o.FUNC_REVERSE_SUBTRACT};xe[DM]=o.MIN,xe[UM]=o.MAX;const Re={[NM]:o.ZERO,[LM]:o.ONE,[OM]:o.SRC_COLOR,[rd]:o.SRC_ALPHA,[VM]:o.SRC_ALPHA_SATURATE,[BM]:o.DST_COLOR,[zM]:o.DST_ALPHA,[PM]:o.ONE_MINUS_SRC_COLOR,[od]:o.ONE_MINUS_SRC_ALPHA,[FM]:o.ONE_MINUS_DST_COLOR,[IM]:o.ONE_MINUS_DST_ALPHA,[GM]:o.CONSTANT_COLOR,[HM]:o.ONE_MINUS_CONSTANT_COLOR,[kM]:o.CONSTANT_ALPHA,[XM]:o.ONE_MINUS_CONSTANT_ALPHA};function Ge(k,Ct,dt,Ht,zt,Et,Kt,oe,on,Be){if(k===ts){M===!0&&(Yt(o.BLEND),M=!1);return}if(M===!1&&(wt(o.BLEND),M=!0),k!==RM){if(k!==S||Be!==Y){if((C!==lr||H!==lr)&&(o.blendEquation(o.FUNC_ADD),C=lr,H=lr),Be)switch(k){case co:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case n_:o.blendFunc(o.ONE,o.ONE);break;case i_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case a_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Fe("WebGLState: Invalid blending: ",k);break}else switch(k){case co:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case n_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case i_:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case a_:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",k);break}N=null,L=null,U=null,I=null,T.set(0,0,0),P=0,S=k,Y=Be}return}zt=zt||Ct,Et=Et||dt,Kt=Kt||Ht,(Ct!==C||zt!==H)&&(o.blendEquationSeparate(xe[Ct],xe[zt]),C=Ct,H=zt),(dt!==N||Ht!==L||Et!==U||Kt!==I)&&(o.blendFuncSeparate(Re[dt],Re[Ht],Re[Et],Re[Kt]),N=dt,L=Ht,U=Et,I=Kt),(oe.equals(T)===!1||on!==P)&&(o.blendColor(oe.r,oe.g,oe.b,on),T.copy(oe),P=on),S=k,Y=!1}function ce(k,Ct){k.side===Ja?Yt(o.CULL_FACE):wt(o.CULL_FACE);let dt=k.side===yi;Ct&&(dt=!dt),_n(dt),k.blending===co&&k.transparent===!1?Ge(ts):Ge(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ht=k.stencilWrite;p.setTest(Ht),Ht&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),V(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?wt(o.SAMPLE_ALPHA_TO_COVERAGE):Yt(o.SAMPLE_ALPHA_TO_COVERAGE)}function _n(k){F!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),F=k)}function $e(k){k!==bM?(wt(o.CULL_FACE),k!==j&&(k===e_?o.cullFace(o.BACK):k===TM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Yt(o.CULL_FACE),j=k}function On(k){k!==ot&&(B&&o.lineWidth(k),ot=k)}function V(k,Ct,dt){k?(wt(o.POLYGON_OFFSET_FILL),(st!==Ct||X!==dt)&&(st=Ct,X=dt,h.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,dt))):Yt(o.POLYGON_OFFSET_FILL)}function Gt(k){k?wt(o.SCISSOR_TEST):Yt(o.SCISSOR_TEST)}function Ut(k){k===void 0&&(k=o.TEXTURE0+O-1),yt!==k&&(o.activeTexture(k),yt=k)}function ie(k,Ct,dt){dt===void 0&&(yt===null?dt=o.TEXTURE0+O-1:dt=yt);let Ht=z[dt];Ht===void 0&&(Ht={type:void 0,texture:void 0},z[dt]=Ht),(Ht.type!==k||Ht.texture!==Ct)&&(yt!==dt&&(o.activeTexture(dt),yt=dt),o.bindTexture(k,Ct||bt[k]),Ht.type=k,Ht.texture=Ct)}function Tt(){const k=z[yt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ae(){try{o.compressedTexImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function D(){try{o.compressedTexImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function E(){try{o.texSubImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function J(){try{o.texSubImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function gt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function At(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function Nt(){try{o.texStorage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function It(){try{o.texStorage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function ut(){try{o.texImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function ht(){try{o.texImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function Bt(k){return v[k]!==void 0?v[k]:o.getParameter(k)}function Ft(k,Ct){v[k]!==Ct&&(o.pixelStorei(k,Ct),v[k]=Ct)}function Lt(k){Dt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Dt.copy(k))}function Ot(k){Pt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Pt.copy(k))}function jt(k,Ct){let dt=d.get(Ct);dt===void 0&&(dt=new WeakMap,d.set(Ct,dt));let Ht=dt.get(k);Ht===void 0&&(Ht=o.getUniformBlockIndex(Ct,k.name),dt.set(k,Ht))}function re(k,Ct){const Ht=d.get(Ct).get(k);m.get(Ct)!==Ht&&(o.uniformBlockBinding(Ct,Ht,k.__bindingPointIndex),m.set(Ct,Ht))}function Se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},v={},yt=null,z={},g={},y=new WeakMap,b=[],A=null,M=!1,S=null,C=null,N=null,L=null,H=null,U=null,I=null,T=new Ie(0,0,0),P=0,Y=!1,F=null,j=null,ot=null,st=null,X=null,Dt.set(0,0,o.canvas.width,o.canvas.height),Pt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:wt,disable:Yt,bindFramebuffer:se,drawBuffers:te,useProgram:je,setBlending:Ge,setMaterial:ce,setFlipSided:_n,setCullFace:$e,setLineWidth:On,setPolygonOffset:V,setScissorTest:Gt,activeTexture:Ut,bindTexture:ie,unbindTexture:Tt,compressedTexImage2D:Ae,compressedTexImage3D:D,texImage2D:ut,texImage3D:ht,pixelStorei:Ft,getParameter:Bt,updateUBOMapping:jt,uniformBlockBinding:re,texStorage2D:Nt,texStorage3D:It,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:gt,compressedTexSubImage3D:At,scissor:Lt,viewport:Ot,reset:Se}}function CA(o,t,i,s,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ve,_=new WeakMap,v=new Set;let g;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,E){return b?new OffscreenCanvas(D,E):lu("canvas")}function M(D,E,J){let gt=1;const At=Ae(D);if((At.width>J||At.height>J)&&(gt=J/Math.max(At.width,At.height)),gt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Nt=Math.floor(gt*At.width),It=Math.floor(gt*At.height);g===void 0&&(g=A(Nt,It));const ut=E?A(Nt,It):g;return ut.width=Nt,ut.height=It,ut.getContext("2d").drawImage(D,0,0,Nt,It),ue("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+Nt+"x"+It+")."),ut}else return"data"in D&&ue("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),D;return D}function S(D){return D.generateMipmaps}function C(D){o.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(D,E,J,gt,At,Nt=!1){if(D!==null){if(o[D]!==void 0)return o[D];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let It;gt&&(It=t.get("EXT_texture_norm16"),It||ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=E;if(E===o.RED&&(J===o.FLOAT&&(ut=o.R32F),J===o.HALF_FLOAT&&(ut=o.R16F),J===o.UNSIGNED_BYTE&&(ut=o.R8),J===o.UNSIGNED_SHORT&&It&&(ut=It.R16_EXT),J===o.SHORT&&It&&(ut=It.R16_SNORM_EXT)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.R8UI),J===o.UNSIGNED_SHORT&&(ut=o.R16UI),J===o.UNSIGNED_INT&&(ut=o.R32UI),J===o.BYTE&&(ut=o.R8I),J===o.SHORT&&(ut=o.R16I),J===o.INT&&(ut=o.R32I)),E===o.RG&&(J===o.FLOAT&&(ut=o.RG32F),J===o.HALF_FLOAT&&(ut=o.RG16F),J===o.UNSIGNED_BYTE&&(ut=o.RG8),J===o.UNSIGNED_SHORT&&It&&(ut=It.RG16_EXT),J===o.SHORT&&It&&(ut=It.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RG8UI),J===o.UNSIGNED_SHORT&&(ut=o.RG16UI),J===o.UNSIGNED_INT&&(ut=o.RG32UI),J===o.BYTE&&(ut=o.RG8I),J===o.SHORT&&(ut=o.RG16I),J===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),J===o.UNSIGNED_INT&&(ut=o.RGB32UI),J===o.BYTE&&(ut=o.RGB8I),J===o.SHORT&&(ut=o.RGB16I),J===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),J===o.UNSIGNED_INT&&(ut=o.RGBA32UI),J===o.BYTE&&(ut=o.RGBA8I),J===o.SHORT&&(ut=o.RGBA16I),J===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&(J===o.UNSIGNED_SHORT&&It&&(ut=It.RGB16_EXT),J===o.SHORT&&It&&(ut=It.RGB16_SNORM_EXT),J===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const ht=Nt?ou:Pe.getTransfer(At);J===o.FLOAT&&(ut=o.RGBA32F),J===o.HALF_FLOAT&&(ut=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ut=ht===Je?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT&&It&&(ut=It.RGBA16_EXT),J===o.SHORT&&It&&(ut=It.RGBA16_SNORM_EXT),J===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function H(D,E){let J;return D?E===null||E===Ta||E===xl?J=o.DEPTH24_STENCIL8:E===Sa?J=o.DEPTH32F_STENCIL8:E===vl&&(J=o.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ta||E===xl?J=o.DEPTH_COMPONENT24:E===Sa?J=o.DEPTH_COMPONENT32F:E===vl&&(J=o.DEPTH_COMPONENT16),J}function U(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Zn&&D.minFilter!==ii?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){const E=D.target;E.removeEventListener("dispose",I),P(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),F(E)}function P(D){const E=s.get(D);if(E.__webglInit===void 0)return;const J=D.source,gt=y.get(J);if(gt){const At=gt[E.__cacheKey];At.usedTimes--,At.usedTimes===0&&Y(D),Object.keys(gt).length===0&&y.delete(J)}s.remove(D)}function Y(D){const E=s.get(D);o.deleteTexture(E.__webglTexture);const J=D.source,gt=y.get(J);delete gt[E.__cacheKey],h.memory.textures--}function F(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(E.__webglFramebuffer[gt]))for(let At=0;At<E.__webglFramebuffer[gt].length;At++)o.deleteFramebuffer(E.__webglFramebuffer[gt][At]);else o.deleteFramebuffer(E.__webglFramebuffer[gt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[gt])}else{if(Array.isArray(E.__webglFramebuffer))for(let gt=0;gt<E.__webglFramebuffer.length;gt++)o.deleteFramebuffer(E.__webglFramebuffer[gt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let gt=0;gt<E.__webglColorRenderbuffer.length;gt++)E.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[gt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=D.textures;for(let gt=0,At=J.length;gt<At;gt++){const Nt=s.get(J[gt]);Nt.__webglTexture&&(o.deleteTexture(Nt.__webglTexture),h.memory.textures--),s.remove(J[gt])}s.remove(D)}let j=0;function ot(){j=0}function st(){return j}function X(D){j=D}function O(){const D=j;return D>=l.maxTextures&&ue("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),j+=1,D}function B(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function at(D,E){const J=s.get(D);if(D.isVideoTexture&&ie(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const gt=D.image;if(gt===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(J,D,E);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function mt(D,E){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Yt(J,D,E);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function yt(D,E){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Yt(J,D,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function z(D,E){const J=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){se(J,D,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const Q={[Qa]:o.REPEAT,[$a]:o.CLAMP_TO_EDGE,[md]:o.MIRRORED_REPEAT},xt={[Zn]:o.NEAREST,[YM]:o.NEAREST_MIPMAP_NEAREST,[Rc]:o.NEAREST_MIPMAP_LINEAR,[ii]:o.LINEAR,[bh]:o.LINEAR_MIPMAP_NEAREST,[ur]:o.LINEAR_MIPMAP_LINEAR},Dt={[KM]:o.NEVER,[ey]:o.ALWAYS,[QM]:o.LESS,[sp]:o.LEQUAL,[JM]:o.EQUAL,[rp]:o.GEQUAL,[$M]:o.GREATER,[ty]:o.NOTEQUAL};function Pt(D,E){if(E.type===Sa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ii||E.magFilter===bh||E.magFilter===Rc||E.magFilter===ur||E.minFilter===ii||E.minFilter===bh||E.minFilter===Rc||E.minFilter===ur)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Q[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Q[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Q[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,xt[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,Dt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Zn||E.minFilter!==Rc&&E.minFilter!==ur||E.type===Sa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function lt(D,E){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",I));const gt=E.source;let At=y.get(gt);At===void 0&&(At={},y.set(gt,At));const Nt=B(E);if(Nt!==D.__cacheKey){At[Nt]===void 0&&(At[Nt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,J=!0),At[Nt].usedTimes++;const It=At[D.__cacheKey];It!==void 0&&(At[D.__cacheKey].usedTimes--,It.usedTimes===0&&Y(E)),D.__cacheKey=Nt,D.__webglTexture=At[Nt].texture}return J}function bt(D,E,J){return Math.floor(Math.floor(D/J)/E)}function wt(D,E,J,gt){const Nt=D.updateRanges;if(Nt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,J,gt,E.data);else{Nt.sort((Ft,Lt)=>Ft.start-Lt.start);let It=0;for(let Ft=1;Ft<Nt.length;Ft++){const Lt=Nt[It],Ot=Nt[Ft],jt=Lt.start+Lt.count,re=bt(Ot.start,E.width,4),Se=bt(Lt.start,E.width,4);Ot.start<=jt+1&&re===Se&&bt(Ot.start+Ot.count-1,E.width,4)===re?Lt.count=Math.max(Lt.count,Ot.start+Ot.count-Lt.start):(++It,Nt[It]=Ot)}Nt.length=It+1;const ut=i.getParameter(o.UNPACK_ROW_LENGTH),ht=i.getParameter(o.UNPACK_SKIP_PIXELS),Bt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Ft=0,Lt=Nt.length;Ft<Lt;Ft++){const Ot=Nt[Ft],jt=Math.floor(Ot.start/4),re=Math.ceil(Ot.count/4),Se=jt%E.width,k=Math.floor(jt/E.width),Ct=re,dt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,Se,k,Ct,dt,J,gt,E.data)}D.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ut),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(o.UNPACK_SKIP_ROWS,Bt)}}function Yt(D,E,J){let gt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(gt=o.TEXTURE_3D);const At=lt(D,E),Nt=E.source;i.bindTexture(gt,D.__webglTexture,o.TEXTURE0+J);const It=s.get(Nt);if(Nt.version!==It.__version||At===!0){if(i.activeTexture(o.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const dt=Pe.getPrimaries(Pe.workingColorSpace),Ht=E.colorSpace===Is?null:Pe.getPrimaries(E.colorSpace),zt=E.colorSpace===Is||dt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let ht=M(E.image,!1,l.maxTextureSize);ht=Tt(E,ht);const Bt=c.convert(E.format,E.colorSpace),Ft=c.convert(E.type);let Lt=L(E.internalFormat,Bt,Ft,E.normalized,E.colorSpace,E.isVideoTexture);Pt(gt,E);let Ot;const jt=E.mipmaps,re=E.isVideoTexture!==!0,Se=It.__version===void 0||At===!0,k=Nt.dataReady,Ct=U(E,ht);if(E.isDepthTexture)Lt=H(E.format===fr,E.type),Se&&(re?i.texStorage2D(o.TEXTURE_2D,1,Lt,ht.width,ht.height):i.texImage2D(o.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Bt,Ft,null));else if(E.isDataTexture)if(jt.length>0){re&&Se&&i.texStorage2D(o.TEXTURE_2D,Ct,Lt,jt[0].width,jt[0].height);for(let dt=0,Ht=jt.length;dt<Ht;dt++)Ot=jt[dt],re?k&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Ot.width,Ot.height,Bt,Ft,Ot.data):i.texImage2D(o.TEXTURE_2D,dt,Lt,Ot.width,Ot.height,0,Bt,Ft,Ot.data);E.generateMipmaps=!1}else re?(Se&&i.texStorage2D(o.TEXTURE_2D,Ct,Lt,ht.width,ht.height),k&&wt(E,ht,Bt,Ft)):i.texImage2D(o.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Bt,Ft,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){re&&Se&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Lt,jt[0].width,jt[0].height,ht.depth);for(let dt=0,Ht=jt.length;dt<Ht;dt++)if(Ot=jt[dt],E.format!==aa)if(Bt!==null)if(re){if(k)if(E.layerUpdates.size>0){const zt=L_(Ot.width,Ot.height,E.format,E.type);for(const Et of E.layerUpdates){const Kt=Ot.data.subarray(Et*zt/Ot.data.BYTES_PER_ELEMENT,(Et+1)*zt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,Et,Ot.width,Ot.height,1,Bt,Kt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Ot.width,Ot.height,ht.depth,Bt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,dt,Lt,Ot.width,Ot.height,ht.depth,0,Ot.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Ot.width,Ot.height,ht.depth,Bt,Ft,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,dt,Lt,Ot.width,Ot.height,ht.depth,0,Bt,Ft,Ot.data)}else{re&&Se&&i.texStorage2D(o.TEXTURE_2D,Ct,Lt,jt[0].width,jt[0].height);for(let dt=0,Ht=jt.length;dt<Ht;dt++)Ot=jt[dt],E.format!==aa?Bt!==null?re?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,dt,0,0,Ot.width,Ot.height,Bt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,dt,Lt,Ot.width,Ot.height,0,Ot.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?k&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Ot.width,Ot.height,Bt,Ft,Ot.data):i.texImage2D(o.TEXTURE_2D,dt,Lt,Ot.width,Ot.height,0,Bt,Ft,Ot.data)}else if(E.isDataArrayTexture)if(re){if(Se&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Lt,ht.width,ht.height,ht.depth),k)if(E.layerUpdates.size>0){const dt=L_(ht.width,ht.height,E.format,E.type);for(const Ht of E.layerUpdates){const zt=ht.data.subarray(Ht*dt/ht.data.BYTES_PER_ELEMENT,(Ht+1)*dt/ht.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ht,ht.width,ht.height,1,Bt,Ft,zt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Bt,Ft,ht.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Lt,ht.width,ht.height,ht.depth,0,Bt,Ft,ht.data);else if(E.isData3DTexture)re?(Se&&i.texStorage3D(o.TEXTURE_3D,Ct,Lt,ht.width,ht.height,ht.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Bt,Ft,ht.data)):i.texImage3D(o.TEXTURE_3D,0,Lt,ht.width,ht.height,ht.depth,0,Bt,Ft,ht.data);else if(E.isFramebufferTexture){if(Se)if(re)i.texStorage2D(o.TEXTURE_2D,Ct,Lt,ht.width,ht.height);else{let dt=ht.width,Ht=ht.height;for(let zt=0;zt<Ct;zt++)i.texImage2D(o.TEXTURE_2D,zt,Lt,dt,Ht,0,Bt,Ft,null),dt>>=1,Ht>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const dt=o.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),ht.parentNode!==dt){dt.appendChild(ht),v.add(E),dt.onpaint=oe=>{const on=oe.changedElements;for(const Be of v)on.includes(Be.image)&&(Be.needsUpdate=!0)},dt.requestPaint();return}const Ht=0,zt=o.RGBA,Et=o.RGBA,Kt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Ht,zt,Et,Kt,ht),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(jt.length>0){if(re&&Se){const dt=Ae(jt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,Lt,dt.width,dt.height)}for(let dt=0,Ht=jt.length;dt<Ht;dt++)Ot=jt[dt],re?k&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Bt,Ft,Ot):i.texImage2D(o.TEXTURE_2D,dt,Lt,Bt,Ft,Ot);E.generateMipmaps=!1}else if(re){if(Se){const dt=Ae(ht);i.texStorage2D(o.TEXTURE_2D,Ct,Lt,dt.width,dt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,Ft,ht)}else i.texImage2D(o.TEXTURE_2D,0,Lt,Bt,Ft,ht);S(E)&&C(gt),It.__version=Nt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function se(D,E,J){if(E.image.length!==6)return;const gt=lt(D,E),At=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+J);const Nt=s.get(At);if(At.version!==Nt.__version||gt===!0){i.activeTexture(o.TEXTURE0+J);const It=Pe.getPrimaries(Pe.workingColorSpace),ut=E.colorSpace===Is?null:Pe.getPrimaries(E.colorSpace),ht=E.colorSpace===Is||It===ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Bt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ft=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let Et=0;Et<6;Et++)!Bt&&!Ft?Lt[Et]=M(E.image[Et],!0,l.maxCubemapSize):Lt[Et]=Ft?E.image[Et].image:E.image[Et],Lt[Et]=Tt(E,Lt[Et]);const Ot=Lt[0],jt=c.convert(E.format,E.colorSpace),re=c.convert(E.type),Se=L(E.internalFormat,jt,re,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Ct=Nt.__version===void 0||gt===!0,dt=At.dataReady;let Ht=U(E,Ot);Pt(o.TEXTURE_CUBE_MAP,E);let zt;if(Bt){k&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,Se,Ot.width,Ot.height);for(let Et=0;Et<6;Et++){zt=Lt[Et].mipmaps;for(let Kt=0;Kt<zt.length;Kt++){const oe=zt[Kt];E.format!==aa?jt!==null?k?dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,0,0,oe.width,oe.height,jt,oe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,Se,oe.width,oe.height,0,oe.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,0,0,oe.width,oe.height,jt,re,oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,Se,oe.width,oe.height,0,jt,re,oe.data)}}}else{if(zt=E.mipmaps,k&&Ct){zt.length>0&&Ht++;const Et=Ae(Lt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,Se,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Ft){k?dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Lt[Et].width,Lt[Et].height,jt,re,Lt[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Se,Lt[Et].width,Lt[Et].height,0,jt,re,Lt[Et].data);for(let Kt=0;Kt<zt.length;Kt++){const on=zt[Kt].image[Et].image;k?dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,0,0,on.width,on.height,jt,re,on.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,Se,on.width,on.height,0,jt,re,on.data)}}else{k?dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,jt,re,Lt[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Se,jt,re,Lt[Et]);for(let Kt=0;Kt<zt.length;Kt++){const oe=zt[Kt];k?dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,0,0,jt,re,oe.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,Se,jt,re,oe.image[Et])}}}S(E)&&C(o.TEXTURE_CUBE_MAP),Nt.__version=At.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function te(D,E,J,gt,At,Nt){const It=c.convert(J.format,J.colorSpace),ut=c.convert(J.type),ht=L(J.internalFormat,It,ut,J.normalized,J.colorSpace),Bt=s.get(E),Ft=s.get(J);if(Ft.__renderTarget=E,!Bt.__hasExternalTextures){const Lt=Math.max(1,E.width>>Nt),Ot=Math.max(1,E.height>>Nt);At===o.TEXTURE_3D||At===o.TEXTURE_2D_ARRAY?i.texImage3D(At,Nt,ht,Lt,Ot,E.depth,0,It,ut,null):i.texImage2D(At,Nt,ht,Lt,Ot,0,It,ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ut(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,At,Ft.__webglTexture,0,Gt(E)):(At===o.TEXTURE_2D||At>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,At,Ft.__webglTexture,Nt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function je(D,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const gt=E.depthTexture,At=gt&&gt.isDepthTexture?gt.type:null,Nt=H(E.stencilBuffer,At),It=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ut(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Gt(E),Nt,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt(E),Nt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Nt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,It,o.RENDERBUFFER,D)}else{const gt=E.textures;for(let At=0;At<gt.length;At++){const Nt=gt[At],It=c.convert(Nt.format,Nt.colorSpace),ut=c.convert(Nt.type),ht=L(Nt.internalFormat,It,ut,Nt.normalized,Nt.colorSpace);Ut(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Gt(E),ht,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt(E),ht,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ht,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function xe(D,E,J){const gt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=s.get(E.depthTexture);if(At.__renderTarget=E,(!At.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),gt){if(At.__webglInit===void 0&&(At.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),At.__webglTexture===void 0){At.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,At.__webglTexture),Pt(o.TEXTURE_CUBE_MAP,E.depthTexture);const Bt=c.convert(E.depthTexture.format),Ft=c.convert(E.depthTexture.type);let Lt;E.depthTexture.format===is?Lt=o.DEPTH_COMPONENT24:E.depthTexture.format===fr&&(Lt=o.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Lt,E.width,E.height,0,Bt,Ft,null)}}else at(E.depthTexture,0);const Nt=At.__webglTexture,It=Gt(E),ut=gt?o.TEXTURE_CUBE_MAP_POSITIVE_X+J:o.TEXTURE_2D,ht=E.depthTexture.format===fr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===is)Ut(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,ut,Nt,0,It):o.framebufferTexture2D(o.FRAMEBUFFER,ht,ut,Nt,0);else if(E.depthTexture.format===fr)Ut(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,ut,Nt,0,It):o.framebufferTexture2D(o.FRAMEBUFFER,ht,ut,Nt,0);else throw new Error("Unknown depthTexture format")}function Re(D){const E=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const gt=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),gt){const At=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,gt.removeEventListener("dispose",At)};gt.addEventListener("dispose",At),E.__depthDisposeCallback=At}E.__boundDepthTexture=gt}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let gt=0;gt<6;gt++)xe(E.__webglFramebuffer[gt],D,gt);else{const gt=D.texture.mipmaps;gt&&gt.length>0?xe(E.__webglFramebuffer[0],D,0):xe(E.__webglFramebuffer,D,0)}else if(J){E.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[gt]),E.__webglDepthbuffer[gt]===void 0)E.__webglDepthbuffer[gt]=o.createRenderbuffer(),je(E.__webglDepthbuffer[gt],D,!1);else{const At=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=E.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,Nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,Nt)}}else{const gt=D.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),je(E.__webglDepthbuffer,D,!1);else{const At=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,Nt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(D,E,J){const gt=s.get(D);E!==void 0&&te(gt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&Re(D)}function ce(D){const E=D.texture,J=s.get(D),gt=s.get(E);D.addEventListener("dispose",T);const At=D.textures,Nt=D.isWebGLCubeRenderTarget===!0,It=At.length>1;if(It||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=E.version,h.memory.textures++),Nt){J.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[ut]=[];for(let ht=0;ht<E.mipmaps.length;ht++)J.__webglFramebuffer[ut][ht]=o.createFramebuffer()}else J.__webglFramebuffer[ut]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)J.__webglFramebuffer[ut]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(It)for(let ut=0,ht=At.length;ut<ht;ut++){const Bt=s.get(At[ut]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&Ut(D)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ut=0;ut<At.length;ut++){const ht=At[ut];J.__webglColorRenderbuffer[ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[ut]);const Bt=c.convert(ht.format,ht.colorSpace),Ft=c.convert(ht.type),Lt=L(ht.internalFormat,Bt,Ft,ht.normalized,ht.colorSpace,D.isXRRenderTarget===!0),Ot=Gt(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,Lt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ut,o.RENDERBUFFER,J.__webglColorRenderbuffer[ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),je(J.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Nt){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),Pt(o.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)te(J.__webglFramebuffer[ut][ht],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ht);else te(J.__webglFramebuffer[ut],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);S(E)&&C(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let ut=0,ht=At.length;ut<ht;ut++){const Bt=At[ut],Ft=s.get(Bt);let Lt=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Lt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Ft.__webglTexture),Pt(Lt,Bt),te(J.__webglFramebuffer,D,Bt,o.COLOR_ATTACHMENT0+ut,Lt,0),S(Bt)&&C(Lt)}i.unbindTexture()}else{let ut=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ut=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ut,gt.__webglTexture),Pt(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)te(J.__webglFramebuffer[ht],D,E,o.COLOR_ATTACHMENT0,ut,ht);else te(J.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,ut,0);S(E)&&C(ut),i.unbindTexture()}D.depthBuffer&&Re(D)}function _n(D){const E=D.textures;for(let J=0,gt=E.length;J<gt;J++){const At=E[J];if(S(At)){const Nt=N(D),It=s.get(At).__webglTexture;i.bindTexture(Nt,It),C(Nt),i.unbindTexture()}}}const $e=[],On=[];function V(D){if(D.samples>0){if(Ut(D)===!1){const E=D.textures,J=D.width,gt=D.height;let At=o.COLOR_BUFFER_BIT;const Nt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=s.get(D),ut=E.length>1;if(ut)for(let Bt=0;Bt<E.length;Bt++)i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const ht=D.texture.mipmaps;ht&&ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Bt=0;Bt<E.length;Bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(At|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(At|=o.STENCIL_BUFFER_BIT)),ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,It.__webglColorRenderbuffer[Bt]);const Ft=s.get(E[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ft,0)}o.blitFramebuffer(0,0,J,gt,0,0,J,gt,At,o.NEAREST),m===!0&&($e.length=0,On.length=0,$e.push(o.COLOR_ATTACHMENT0+Bt),D.depthBuffer&&D.resolveDepthBuffer===!1&&($e.push(Nt),On.push(Nt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,On)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,$e))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ut)for(let Bt=0;Bt<E.length;Bt++){i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,It.__webglColorRenderbuffer[Bt]);const Ft=s.get(E[Bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,Ft,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Gt(D){return Math.min(l.maxSamples,D.samples)}function Ut(D){const E=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ie(D){const E=h.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function Tt(D,E){const J=D.colorSpace,gt=D.format,At=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==ru&&J!==Is&&(Pe.getTransfer(J)===Je?(gt!==aa||At!==Oi)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",J)),E}function Ae(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=O,this.resetTextureUnits=ot,this.getTextureUnits=st,this.setTextureUnits=X,this.setTexture2D=at,this.setTexture2DArray=mt,this.setTexture3D=yt,this.setTextureCube=z,this.rebindTextures=Ge,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=_n,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function DA(o,t){function i(s,l=Is){let c;const h=Pe.getTransfer(l);if(s===Oi)return o.UNSIGNED_BYTE;if(s===tp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===ep)return o.UNSIGNED_SHORT_5_5_5_1;if(s===_v)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===vv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===mv)return o.BYTE;if(s===gv)return o.SHORT;if(s===vl)return o.UNSIGNED_SHORT;if(s===$d)return o.INT;if(s===Ta)return o.UNSIGNED_INT;if(s===Sa)return o.FLOAT;if(s===ns)return o.HALF_FLOAT;if(s===xv)return o.ALPHA;if(s===Sv)return o.RGB;if(s===aa)return o.RGBA;if(s===is)return o.DEPTH_COMPONENT;if(s===fr)return o.DEPTH_STENCIL;if(s===Mv)return o.RED;if(s===np)return o.RED_INTEGER;if(s===dr)return o.RG;if(s===ip)return o.RG_INTEGER;if(s===ap)return o.RGBA_INTEGER;if(s===Jc||s===$c||s===tu||s===eu)if(h===Je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gd||s===_d||s===vd||s===xd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sd||s===Md||s===yd||s===Ed||s===bd||s===iu||s===Td)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Sd||s===Md)return h===Je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===yd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ed)return c.COMPRESSED_R11_EAC;if(s===bd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===iu)return c.COMPRESSED_RG11_EAC;if(s===Td)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ad||s===Rd||s===wd||s===Cd||s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Pd||s===zd||s===Id||s===Bd||s===Fd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ad)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ud)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ld)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Od)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Id)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fd)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vd||s===Gd||s===Hd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Vd)return h===Je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kd||s===Xd||s===au||s===qd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===kd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Xd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===au)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const UA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NA=`
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

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Dv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ra({vertexShader:UA,fragmentShader:NA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new be(new mo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OA extends mr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,_=null,v=null,g=null,y=null,b=null;const A=typeof XRWebGLBinding<"u",M=new LA,S={},C=i.getContextAttributes();let N=null,L=null;const H=[],U=[],I=new Ve;let T=null;const P=new Mi;P.viewport=new En;const Y=new Mi;Y.viewport=new En;const F=[P,Y],j=new ky;let ot=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let bt=H[lt];return bt===void 0&&(bt=new Nh,H[lt]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(lt){let bt=H[lt];return bt===void 0&&(bt=new Nh,H[lt]=bt),bt.getGripSpace()},this.getHand=function(lt){let bt=H[lt];return bt===void 0&&(bt=new Nh,H[lt]=bt),bt.getHandSpace()};function X(lt){const bt=U.indexOf(lt.inputSource);if(bt===-1)return;const wt=H[bt];wt!==void 0&&(wt.update(lt.inputSource,lt.frame,d||h),wt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function O(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",B);for(let lt=0;lt<H.length;lt++){const bt=U[lt];bt!==null&&(U[lt]=null,H[lt].disconnect(bt))}ot=null,st=null,M.reset();for(const lt in S)delete S[lt];t.setRenderTarget(N),y=null,g=null,v=null,l=null,L=null,Pt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){c=lt,s.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){p=lt,s.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(lt){d=lt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(lt){if(l=lt,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",O),l.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Yt=null,se=null;C.depth&&(se=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=C.stencil?fr:is,Yt=C.stencil?xl:Ta);const te={colorFormat:i.RGBA8,depthFormat:se,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(te),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new Ea(g.textureWidth,g.textureHeight,{format:aa,type:Oi,depthTexture:new po(g.textureWidth,g.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const wt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Ea(y.framebufferWidth,y.framebufferHeight,{format:aa,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Pt.setContext(l),Pt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(lt){for(let bt=0;bt<lt.removed.length;bt++){const wt=lt.removed[bt],Yt=U.indexOf(wt);Yt>=0&&(U[Yt]=null,H[Yt].disconnect(wt))}for(let bt=0;bt<lt.added.length;bt++){const wt=lt.added[bt];let Yt=U.indexOf(wt);if(Yt===-1){for(let te=0;te<H.length;te++)if(te>=U.length){U.push(wt),Yt=te;break}else if(U[te]===null){U[te]=wt,Yt=te;break}if(Yt===-1)break}const se=H[Yt];se&&se.connect(wt)}}const at=new K,mt=new K;function yt(lt,bt,wt){at.setFromMatrixPosition(bt.matrixWorld),mt.setFromMatrixPosition(wt.matrixWorld);const Yt=at.distanceTo(mt),se=bt.projectionMatrix.elements,te=wt.projectionMatrix.elements,je=se[14]/(se[10]-1),xe=se[14]/(se[10]+1),Re=(se[9]+1)/se[5],Ge=(se[9]-1)/se[5],ce=(se[8]-1)/se[0],_n=(te[8]+1)/te[0],$e=je*ce,On=je*_n,V=Yt/(-ce+_n),Gt=V*-ce;if(bt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(Gt),lt.translateZ(V),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),se[10]===-1)lt.projectionMatrix.copy(bt.projectionMatrix),lt.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{const Ut=je+V,ie=xe+V,Tt=$e-Gt,Ae=On+(Yt-Gt),D=Re*xe/ie*Ut,E=Ge*xe/ie*Ut;lt.projectionMatrix.makePerspective(Tt,Ae,D,E,Ut,ie),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function z(lt,bt){bt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(bt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(l===null)return;let bt=lt.near,wt=lt.far;M.texture!==null&&(M.depthNear>0&&(bt=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),j.near=Y.near=P.near=bt,j.far=Y.far=P.far=wt,(ot!==j.near||st!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),ot=j.near,st=j.far),j.layers.mask=lt.layers.mask|6,P.layers.mask=j.layers.mask&-5,Y.layers.mask=j.layers.mask&-3;const Yt=lt.parent,se=j.cameras;z(j,Yt);for(let te=0;te<se.length;te++)z(se[te],Yt);se.length===2?yt(j,P,Y):j.projectionMatrix.copy(P.projectionMatrix),Q(lt,j,Yt)};function Q(lt,bt,wt){wt===null?lt.matrix.copy(bt.matrixWorld):(lt.matrix.copy(wt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(bt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(bt.projectionMatrix),lt.projectionMatrixInverse.copy(bt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=cu*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(lt){m=lt,g!==null&&(g.fixedFoveation=lt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=lt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(lt){return S[lt]};let xt=null;function Dt(lt,bt){if(_=bt.getViewerPose(d||h),b=bt,_!==null){const wt=_.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Yt=!1;wt.length!==j.cameras.length&&(j.cameras.length=0,Yt=!0);for(let xe=0;xe<wt.length;xe++){const Re=wt[xe];let Ge=null;if(y!==null)Ge=y.getViewport(Re);else{const _n=v.getViewSubImage(g,Re);Ge=_n.viewport,xe===0&&(t.setRenderTargetTextures(L,_n.colorTexture,_n.depthStencilTexture),t.setRenderTarget(L))}let ce=F[xe];ce===void 0&&(ce=new Mi,ce.layers.enable(xe),ce.viewport=new En,F[xe]=ce),ce.matrix.fromArray(Re.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Re.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),xe===0&&(j.matrix.copy(ce.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Yt===!0&&j.cameras.push(ce)}const se=l.enabledFeatures;if(se&&se.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=s.getBinding();const xe=v.getDepthInformation(wt[0]);xe&&xe.isValid&&xe.texture&&M.init(xe,l.renderState)}if(se&&se.includes("camera-access")&&A){t.state.unbindTexture(),v=s.getBinding();for(let xe=0;xe<wt.length;xe++){const Re=wt[xe].camera;if(Re){let Ge=S[Re];Ge||(Ge=new Dv,S[Re]=Ge);const ce=v.getCameraImage(Re);Ge.sourceTexture=ce}}}}for(let wt=0;wt<H.length;wt++){const Yt=U[wt],se=H[wt];Yt!==null&&se!==void 0&&se.update(Yt,bt,d||h)}xt&&xt(lt,bt),bt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:bt}),b=null}const Pt=new Pv;Pt.setAnimationLoop(Dt),this.setAnimationLoop=function(lt){xt=lt},this.dispose=function(){}}}const PA=new bn,Hv=new ge;Hv.set(-1,0,0,0,1,0,0,0,1);function zA(o,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,Uv(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,N,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,L)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),A(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&p(M,S)):S.isPointsMaterial?m(M,S,C,N):S.isSpriteMaterial?d(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===yi&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===yi&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),N=C.envMap,L=C.envMapRotation;N&&(M.envMap.value=N,M.envMapRotation.value.setFromMatrix4(PA.makeRotationFromEuler(L)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Hv),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function p(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,N){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=N*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===yi&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function A(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function IA(o,t,i,s){let l={},c={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const L=N.program;s.uniformBlockBinding(C,L)}function d(C,N){let L=l[C.id];L===void 0&&(b(C),L=_(C),l[C.id]=L,C.addEventListener("dispose",M));const H=N.program;s.updateUBOMapping(C,H);const U=t.render.frame;c[C.id]!==U&&(g(C),c[C.id]=U)}function _(C){const N=v();C.__bindingPointIndex=N;const L=o.createBuffer(),H=C.__size,U=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,H,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,L),L}function v(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=l[C.id],L=C.uniforms,H=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let U=0,I=L.length;U<I;U++){const T=Array.isArray(L[U])?L[U]:[L[U]];for(let P=0,Y=T.length;P<Y;P++){const F=T[P];if(y(F,U,P,H)===!0){const j=F.__offset,ot=Array.isArray(F.value)?F.value:[F.value];let st=0;for(let X=0;X<ot.length;X++){const O=ot[X],B=A(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,j+st,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):ArrayBuffer.isView(O)?F.__data.set(new O.constructor(O.buffer,O.byteOffset,F.__data.length)):(O.toArray(F.__data,st),st+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,N,L,H){const U=C.value,I=N+"_"+L;if(H[I]===void 0)return typeof U=="number"||typeof U=="boolean"?H[I]=U:ArrayBuffer.isView(U)?H[I]=U.slice():H[I]=U.clone(),!0;{const T=H[I];if(typeof U=="number"||typeof U=="boolean"){if(T!==U)return H[I]=U,!0}else{if(ArrayBuffer.isView(U))return!0;if(T.equals(U)===!1)return T.copy(U),!0}}return!1}function b(C){const N=C.uniforms;let L=0;const H=16;for(let I=0,T=N.length;I<T;I++){const P=Array.isArray(N[I])?N[I]:[N[I]];for(let Y=0,F=P.length;Y<F;Y++){const j=P[Y],ot=Array.isArray(j.value)?j.value:[j.value];for(let st=0,X=ot.length;st<X;st++){const O=ot[st],B=A(O),at=L%H,mt=at%B.boundary,yt=at+mt;L+=mt,yt!==0&&H-yt<B.storage&&(L+=H-yt),j.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=L,L+=B.storage}}}const U=L%H;return U>0&&(L+=H-U),C.__size=L,C.__cache={},this}function A(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):ue("WebGLRenderer: Unsupported uniform value type.",C),N}function M(C){const N=C.target;N.removeEventListener("dispose",M);const L=h.indexOf(N.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function S(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:d,dispose:S}}const BA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _a=null;function FA(){return _a===null&&(_a=new Ay(BA,16,16,dr,ns),_a.name="DFG_LUT",_a.minFilter=ii,_a.magFilter=ii,_a.wrapS=$a,_a.wrapT=$a,_a.generateMipmaps=!1,_a.needsUpdate=!0),_a}class VA{constructor(t={}){const{canvas:i=iy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Oi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const A=y,M=new Set([ap,ip,np]),S=new Set([Oi,Ta,vl,xl,tp,ep]),C=new Uint32Array(4),N=new Int32Array(4),L=new K;let H=null,U=null;const I=[],T=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let F=!1,j=null;this._outputColorSpace=Yi;let ot=0,st=0,X=null,O=-1,B=null;const at=new En,mt=new En;let yt=null;const z=new Ie(0);let Q=0,xt=i.width,Dt=i.height,Pt=1,lt=null,bt=null;const wt=new En(0,0,xt,Dt),Yt=new En(0,0,xt,Dt);let se=!1;const te=new cp;let je=!1,xe=!1;const Re=new bn,Ge=new K,ce=new En,_n={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function On(){return X===null?Pt:1}let V=s;function Gt(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qd}`),i.addEventListener("webglcontextlost",Et,!1),i.addEventListener("webglcontextrestored",Kt,!1),i.addEventListener("webglcontextcreationerror",oe,!1),V===null){const W="webgl2";if(V=Gt(W,R),V===null)throw Gt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Fe("WebGLRenderer: "+R.message),R}let Ut,ie,Tt,Ae,D,E,J,gt,At,Nt,It,ut,ht,Bt,Ft,Lt,Ot,jt,re,Se,k,Ct,dt;function Ht(){Ut=new Fb(V),Ut.init(),k=new DA(V,Ut),ie=new Ub(V,Ut,t,k),Tt=new wA(V,Ut),ie.reversedDepthBuffer&&g&&Tt.buffers.depth.setReversed(!0),Ae=new Hb(V),D=new pA,E=new CA(V,Ut,Tt,D,ie,k,Ae),J=new Bb(Y),gt=new Wy(V),Ct=new Cb(V,gt),At=new Vb(V,gt,Ae,Ct),Nt=new Xb(V,At,gt,Ct,Ae),jt=new kb(V,ie,E),Ft=new Nb(D),It=new dA(Y,J,Ut,ie,Ct,Ft),ut=new zA(Y,D),ht=new gA,Bt=new yA(Ut),Ot=new wb(Y,J,Tt,Nt,b,m),Lt=new RA(Y,Nt,ie),dt=new IA(V,Ae,ie,Tt),re=new Db(V,Ut,Ae),Se=new Gb(V,Ut,Ae),Ae.programs=It.programs,Y.capabilities=ie,Y.extensions=Ut,Y.properties=D,Y.renderLists=ht,Y.shadowMap=Lt,Y.state=Tt,Y.info=Ae}Ht(),A!==Oi&&(P=new Wb(A,i.width,i.height,l,c));const zt=new OA(Y,V);this.xr=zt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Pt},this.setPixelRatio=function(R){R!==void 0&&(Pt=R,this.setSize(xt,Dt,!1))},this.getSize=function(R){return R.set(xt,Dt)},this.setSize=function(R,W,it=!0){if(zt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=R,Dt=W,i.width=Math.floor(R*Pt),i.height=Math.floor(W*Pt),it===!0&&(i.style.width=R+"px",i.style.height=W+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(xt*Pt,Dt*Pt).floor()},this.setDrawingBufferSize=function(R,W,it){xt=R,Dt=W,Pt=it,i.width=Math.floor(R*it),i.height=Math.floor(W*it),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(A===Oi){Fe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){ue("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(at)},this.getViewport=function(R){return R.copy(wt)},this.setViewport=function(R,W,it,$){R.isVector4?wt.set(R.x,R.y,R.z,R.w):wt.set(R,W,it,$),Tt.viewport(at.copy(wt).multiplyScalar(Pt).round())},this.getScissor=function(R){return R.copy(Yt)},this.setScissor=function(R,W,it,$){R.isVector4?Yt.set(R.x,R.y,R.z,R.w):Yt.set(R,W,it,$),Tt.scissor(mt.copy(Yt).multiplyScalar(Pt).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(R){Tt.setScissorTest(se=R)},this.setOpaqueSort=function(R){lt=R},this.setTransparentSort=function(R){bt=R},this.getClearColor=function(R){return R.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,it=!0){let $=0;if(R){let tt=!1;if(X!==null){const kt=X.texture.format;tt=M.has(kt)}if(tt){const kt=X.texture.type,Zt=S.has(kt),ft=Ot.getClearColor(),Mt=Ot.getClearAlpha(),Rt=ft.r,Vt=ft.g,Jt=ft.b;Zt?(C[0]=Rt,C[1]=Vt,C[2]=Jt,C[3]=Mt,V.clearBufferuiv(V.COLOR,0,C)):(N[0]=Rt,N[1]=Vt,N[2]=Jt,N[3]=Mt,V.clearBufferiv(V.COLOR,0,N))}else $|=V.COLOR_BUFFER_BIT}W&&($|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),j=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Et,!1),i.removeEventListener("webglcontextrestored",Kt,!1),i.removeEventListener("webglcontextcreationerror",oe,!1),Ot.dispose(),ht.dispose(),Bt.dispose(),D.dispose(),J.dispose(),Nt.dispose(),Ct.dispose(),dt.dispose(),It.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",vr),zt.removeEventListener("sessionend",ss),Bn.stop()};function Et(R){R.preventDefault(),c_("WebGLRenderer: Context Lost."),F=!0}function Kt(){c_("WebGLRenderer: Context Restored."),F=!1;const R=Ae.autoReset,W=Lt.enabled,it=Lt.autoUpdate,$=Lt.needsUpdate,tt=Lt.type;Ht(),Ae.autoReset=R,Lt.enabled=W,Lt.autoUpdate=it,Lt.needsUpdate=$,Lt.type=tt}function oe(R){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function on(R){const W=R.target;W.removeEventListener("dispose",on),Be(W)}function Be(R){ri(R),D.remove(R)}function ri(R){const W=D.get(R).programs;W!==void 0&&(W.forEach(function(it){It.releaseProgram(it)}),R.isShaderMaterial&&It.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,it,$,tt,kt){W===null&&(W=_n);const Zt=tt.isMesh&&tt.matrixWorld.determinant()<0,ft=oa(R,W,it,$,tt);Tt.setMaterial($,Zt);let Mt=it.index,Rt=1;if($.wireframe===!0){if(Mt=At.getWireframeAttribute(it),Mt===void 0)return;Rt=2}const Vt=it.drawRange,Jt=it.attributes.position;let Xt=Vt.start*Rt,fe=(Vt.start+Vt.count)*Rt;kt!==null&&(Xt=Math.max(Xt,kt.start*Rt),fe=Math.min(fe,(kt.start+kt.count)*Rt)),Mt!==null?(Xt=Math.max(Xt,0),fe=Math.min(fe,Mt.count)):Jt!=null&&(Xt=Math.max(Xt,0),fe=Math.min(fe,Jt.count));const pe=fe-Xt;if(pe<0||pe===1/0)return;Ct.setup(tt,$,ft,it,Mt);let we,he=re;if(Mt!==null&&(we=gt.get(Mt),he=Se,he.setIndex(we)),tt.isMesh)$.wireframe===!0?(Tt.setLineWidth($.wireframeLinewidth*On()),he.setMode(V.LINES)):he.setMode(V.TRIANGLES);else if(tt.isLine){let me=$.linewidth;me===void 0&&(me=1),Tt.setLineWidth(me*On()),tt.isLineSegments?he.setMode(V.LINES):tt.isLineLoop?he.setMode(V.LINE_LOOP):he.setMode(V.LINE_STRIP)}else tt.isPoints?he.setMode(V.POINTS):tt.isSprite&&he.setMode(V.TRIANGLES);if(tt.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))he.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const me=tt._multiDrawStarts,qt=tt._multiDrawCounts,wn=tt._multiDrawCount,_e=Mt?gt.get(Mt).bytesPerElement:1,mn=D.get($).currentProgram.getUniforms();for(let Fn=0;Fn<wn;Fn++)mn.setValue(V,"_gl_DrawID",Fn),he.render(me[Fn]/_e,qt[Fn])}else if(tt.isInstancedMesh)he.renderInstances(Xt,pe,tt.count);else if(it.isInstancedBufferGeometry){const me=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,qt=Math.min(it.instanceCount,me);he.renderInstances(Xt,pe,qt)}else he.render(Xt,pe)};function Qn(R,W,it){R.transparent===!0&&R.side===Ja&&R.forceSinglePass===!1?(R.side=yi,R.needsUpdate=!0,ra(R,W,it),R.side=Fs,R.needsUpdate=!0,ra(R,W,it),R.side=Ja):ra(R,W,it)}this.compile=function(R,W,it=null){it===null&&(it=R),U=Bt.get(it),U.init(W),T.push(U),it.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(U.pushLight(tt),tt.castShadow&&U.pushShadow(tt))}),R!==it&&R.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(U.pushLight(tt),tt.castShadow&&U.pushShadow(tt))}),U.setupLights();const $=new Set;return R.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const kt=tt.material;if(kt)if(Array.isArray(kt))for(let Zt=0;Zt<kt.length;Zt++){const ft=kt[Zt];Qn(ft,it,tt),$.add(ft)}else Qn(kt,it,tt),$.add(kt)}),U=T.pop(),$},this.compileAsync=function(R,W,it=null){const $=this.compile(R,W,it);return new Promise(tt=>{function kt(){if($.forEach(function(Zt){D.get(Zt).currentProgram.isReady()&&$.delete(Zt)}),$.size===0){tt(R);return}setTimeout(kt,10)}Ut.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let sa=null;function as(R){sa&&sa(R)}function vr(){Bn.stop()}function ss(){Bn.start()}const Bn=new Pv;Bn.setAnimationLoop(as),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(R){sa=R,zt.setAnimationLoop(R),R===null?Bn.stop():Bn.start()},zt.addEventListener("sessionstart",vr),zt.addEventListener("sessionend",ss),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;j!==null&&j.renderStart(R,W);const it=zt.enabled===!0&&zt.isPresenting===!0,$=P!==null&&(X===null||it)&&P.begin(Y,X);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(W),W=zt.getCamera()),R.isScene===!0&&R.onBeforeRender(Y,R,W,X),U=Bt.get(R,T.length),U.init(W),U.state.textureUnits=E.getTextureUnits(),T.push(U),Re.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),te.setFromProjectionMatrix(Re,Ma,W.reversedDepth),xe=this.localClippingEnabled,je=Ft.init(this.clippingPlanes,xe),H=ht.get(R,I.length),H.init(),I.push(H),zt.enabled===!0&&zt.isPresenting===!0){const Zt=Y.xr.getDepthSensingMesh();Zt!==null&&pn(Zt,W,-1/0,Y.sortObjects)}pn(R,W,0,Y.sortObjects),H.finish(),Y.sortObjects===!0&&H.sort(lt,bt),$e=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,$e&&Ot.addToRenderList(H,R),this.info.render.frame++,je===!0&&Ft.beginShadows();const tt=U.state.shadowsArray;if(Lt.render(tt,R,W),je===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&P.hasRenderPass())===!1){const Zt=H.opaque,ft=H.transmissive;if(U.setupLights(),W.isArrayCamera){const Mt=W.cameras;if(ft.length>0)for(let Rt=0,Vt=Mt.length;Rt<Vt;Rt++){const Jt=Mt[Rt];Pi(Zt,ft,R,Jt)}$e&&Ot.render(R);for(let Rt=0,Vt=Mt.length;Rt<Vt;Rt++){const Jt=Mt[Rt];Rn(H,R,Jt,Jt.viewport)}}else ft.length>0&&Pi(Zt,ft,R,W),$e&&Ot.render(R),Rn(H,R,W)}X!==null&&st===0&&(E.updateMultisampleRenderTarget(X),E.updateRenderTargetMipmap(X)),$&&P.end(Y),R.isScene===!0&&R.onAfterRender(Y,R,W),Ct.resetDefaultState(),O=-1,B=null,T.pop(),T.length>0?(U=T[T.length-1],E.setTextureUnits(U.state.textureUnits),je===!0&&Ft.setGlobalState(Y.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?H=I[I.length-1]:H=null,j!==null&&j.renderEnd()};function pn(R,W,it,$){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLightProbeGrid)U.pushLightProbeGrid(R);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){$&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const Zt=Nt.update(R),ft=R.material;ft.visible&&H.push(R,Zt,ft,it,ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||te.intersectsObject(R))){const Zt=Nt.update(R),ft=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),ce.copy(Zt.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(ft)){const Mt=Zt.groups;for(let Rt=0,Vt=Mt.length;Rt<Vt;Rt++){const Jt=Mt[Rt],Xt=ft[Jt.materialIndex];Xt&&Xt.visible&&H.push(R,Zt,Xt,it,ce.z,Jt)}}else ft.visible&&H.push(R,Zt,ft,it,ce.z,null)}}const kt=R.children;for(let Zt=0,ft=kt.length;Zt<ft;Zt++)pn(kt[Zt],W,it,$)}function Rn(R,W,it,$){const{opaque:tt,transmissive:kt,transparent:Zt}=R;U.setupLightsView(it),je===!0&&Ft.setGlobalState(Y.clippingPlanes,it),$&&Tt.viewport(at.copy($)),tt.length>0&&ji(tt,W,it),kt.length>0&&ji(kt,W,it),Zt.length>0&&ji(Zt,W,it),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Pi(R,W,it,$){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[$.id]===void 0){const Xt=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[$.id]=new Ea(1,1,{generateMipmaps:!0,type:Xt?ns:Oi,minFilter:ur,samples:Math.max(4,ie.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}const kt=U.state.transmissionRenderTarget[$.id],Zt=$.viewport||at;kt.setSize(Zt.z*Y.transmissionResolutionScale,Zt.w*Y.transmissionResolutionScale);const ft=Y.getRenderTarget(),Mt=Y.getActiveCubeFace(),Rt=Y.getActiveMipmapLevel();Y.setRenderTarget(kt),Y.getClearColor(z),Q=Y.getClearAlpha(),Q<1&&Y.setClearColor(16777215,.5),Y.clear(),$e&&Ot.render(it);const Vt=Y.toneMapping;Y.toneMapping=ya;const Jt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),U.setupLightsView($),je===!0&&Ft.setGlobalState(Y.clippingPlanes,$),ji(R,it,$),E.updateMultisampleRenderTarget(kt),E.updateRenderTargetMipmap(kt),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let fe=0,pe=W.length;fe<pe;fe++){const we=W[fe],{object:he,geometry:me,material:qt,group:wn}=we;if(qt.side===Ja&&he.layers.test($.layers)){const _e=qt.side;qt.side=yi,qt.needsUpdate=!0,Gs(he,it,$,me,qt,wn),qt.side=_e,qt.needsUpdate=!0,Xt=!0}}Xt===!0&&(E.updateMultisampleRenderTarget(kt),E.updateRenderTargetMipmap(kt))}Y.setRenderTarget(ft,Mt,Rt),Y.setClearColor(z,Q),Jt!==void 0&&($.viewport=Jt),Y.toneMapping=Vt}function ji(R,W,it){const $=W.isScene===!0?W.overrideMaterial:null;for(let tt=0,kt=R.length;tt<kt;tt++){const Zt=R[tt],{object:ft,geometry:Mt,group:Rt}=Zt;let Vt=Zt.material;Vt.allowOverride===!0&&$!==null&&(Vt=$),ft.layers.test(it.layers)&&Gs(ft,W,it,Mt,Vt,Rt)}}function Gs(R,W,it,$,tt,kt){R.onBeforeRender(Y,W,it,$,tt,kt),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tt.onBeforeRender(Y,W,it,$,R,kt),tt.transparent===!0&&tt.side===Ja&&tt.forceSinglePass===!1?(tt.side=yi,tt.needsUpdate=!0,Y.renderBufferDirect(it,W,$,tt,R,kt),tt.side=Fs,tt.needsUpdate=!0,Y.renderBufferDirect(it,W,$,tt,R,kt),tt.side=Ja):Y.renderBufferDirect(it,W,$,tt,R,kt),R.onAfterRender(Y,W,it,$,tt,kt)}function ra(R,W,it){W.isScene!==!0&&(W=_n);const $=D.get(R),tt=U.state.lights,kt=U.state.shadowsArray,Zt=tt.state.version,ft=It.getParameters(R,tt.state,kt,W,it,U.state.lightProbeGridArray),Mt=It.getProgramCacheKey(ft);let Rt=$.programs;$.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,$.fog=W.fog;const Vt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;$.envMap=J.get(R.envMap||$.environment,Vt),$.envMapRotation=$.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Rt===void 0&&(R.addEventListener("dispose",on),Rt=new Map,$.programs=Rt);let Jt=Rt.get(Mt);if(Jt!==void 0){if($.currentProgram===Jt&&$.lightsStateVersion===Zt)return Zi(R,ft),Jt}else ft.uniforms=It.getUniforms(R),j!==null&&R.isNodeMaterial&&j.build(R,it,ft),R.onBeforeCompile(ft,Y),Jt=It.acquireProgram(ft,Mt),Rt.set(Mt,Jt),$.uniforms=ft.uniforms;const Xt=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=Ft.uniform),Zi(R,ft),$.needsLights=Ca(R),$.lightsStateVersion=Zt,$.needsLights&&(Xt.ambientLightColor.value=tt.state.ambient,Xt.lightProbe.value=tt.state.probe,Xt.directionalLights.value=tt.state.directional,Xt.directionalLightShadows.value=tt.state.directionalShadow,Xt.spotLights.value=tt.state.spot,Xt.spotLightShadows.value=tt.state.spotShadow,Xt.rectAreaLights.value=tt.state.rectArea,Xt.ltc_1.value=tt.state.rectAreaLTC1,Xt.ltc_2.value=tt.state.rectAreaLTC2,Xt.pointLights.value=tt.state.point,Xt.pointLightShadows.value=tt.state.pointShadow,Xt.hemisphereLights.value=tt.state.hemi,Xt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Xt.spotLightMatrix.value=tt.state.spotLightMatrix,Xt.spotLightMap.value=tt.state.spotLightMap,Xt.pointShadowMatrix.value=tt.state.pointShadowMatrix),$.lightProbeGrid=U.state.lightProbeGridArray.length>0,$.currentProgram=Jt,$.uniformsList=null,Jt}function wa(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=nu.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Zi(R,W){const it=D.get(R);it.outputColorSpace=W.outputColorSpace,it.batching=W.batching,it.batchingColor=W.batchingColor,it.instancing=W.instancing,it.instancingColor=W.instancingColor,it.instancingMorph=W.instancingMorph,it.skinning=W.skinning,it.morphTargets=W.morphTargets,it.morphNormals=W.morphNormals,it.morphColors=W.morphColors,it.morphTargetsCount=W.morphTargetsCount,it.numClippingPlanes=W.numClippingPlanes,it.numIntersection=W.numClipIntersection,it.vertexAlphas=W.vertexAlphas,it.vertexTangents=W.vertexTangents,it.toneMapping=W.toneMapping}function zi(R,W){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;L.setFromMatrixPosition(W.matrixWorld);for(let it=0,$=R.length;it<$;it++){const tt=R[it];if(tt.texture!==null&&tt.boundingBox.containsPoint(L))return tt}return null}function oa(R,W,it,$,tt){W.isScene!==!0&&(W=_n),E.resetTextureUnits();const kt=W.fog,Zt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?W.environment:null,ft=X===null?Y.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Pe.workingColorSpace,Mt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Rt=J.get($.envMap||Zt,Mt),Vt=$.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Jt=!!it.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Xt=!!it.morphAttributes.position,fe=!!it.morphAttributes.normal,pe=!!it.morphAttributes.color;let we=ya;$.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(we=Y.toneMapping);const he=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,me=he!==void 0?he.length:0,qt=D.get($),wn=U.state.lights;if(je===!0&&(xe===!0||R!==B)){const Le=R===B&&$.id===O;Ft.setState($,R,Le)}let _e=!1;$.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==wn.state.version||qt.outputColorSpace!==ft||tt.isBatchedMesh&&qt.batching===!1||!tt.isBatchedMesh&&qt.batching===!0||tt.isBatchedMesh&&qt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&qt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&qt.instancing===!1||!tt.isInstancedMesh&&qt.instancing===!0||tt.isSkinnedMesh&&qt.skinning===!1||!tt.isSkinnedMesh&&qt.skinning===!0||tt.isInstancedMesh&&qt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&qt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&qt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&qt.instancingMorph===!1&&tt.morphTexture!==null||qt.envMap!==Rt||$.fog===!0&&qt.fog!==kt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Ft.numPlanes||qt.numIntersection!==Ft.numIntersection)||qt.vertexAlphas!==Vt||qt.vertexTangents!==Jt||qt.morphTargets!==Xt||qt.morphNormals!==fe||qt.morphColors!==pe||qt.toneMapping!==we||qt.morphTargetsCount!==me||!!qt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,qt.__version=$.version);let mn=qt.currentProgram;_e===!0&&(mn=ra($,W,tt),j&&$.isNodeMaterial&&j.onUpdateProgram($,mn,qt));let Fn=!1,Jn=!1,Vn=!1;const qe=mn.getUniforms(),ln=qt.uniforms;if(Tt.useProgram(mn.program)&&(Fn=!0,Jn=!0,Vn=!0),$.id!==O&&(O=$.id,Jn=!0),qt.needsLights){const Le=zi(U.state.lightProbeGridArray,tt);qt.lightProbeGrid!==Le&&(qt.lightProbeGrid=Le,Jn=!0)}if(Fn||B!==R){Tt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),qe.setValue(V,"projectionMatrix",R.projectionMatrix),qe.setValue(V,"viewMatrix",R.matrixWorldInverse);const fi=qe.map.cameraPosition;fi!==void 0&&fi.setValue(V,Ge.setFromMatrixPosition(R.matrixWorld)),ie.logarithmicDepthBuffer&&qe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&qe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,Jn=!0,Vn=!0)}if(qt.needsLights&&(wn.state.directionalShadowMap.length>0&&qe.setValue(V,"directionalShadowMap",wn.state.directionalShadowMap,E),wn.state.spotShadowMap.length>0&&qe.setValue(V,"spotShadowMap",wn.state.spotShadowMap,E),wn.state.pointShadowMap.length>0&&qe.setValue(V,"pointShadowMap",wn.state.pointShadowMap,E)),tt.isSkinnedMesh){qe.setOptional(V,tt,"bindMatrix"),qe.setOptional(V,tt,"bindMatrixInverse");const Le=tt.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),qe.setValue(V,"boneTexture",Le.boneTexture,E))}tt.isBatchedMesh&&(qe.setOptional(V,tt,"batchingTexture"),qe.setValue(V,"batchingTexture",tt._matricesTexture,E),qe.setOptional(V,tt,"batchingIdTexture"),qe.setValue(V,"batchingIdTexture",tt._indirectTexture,E),qe.setOptional(V,tt,"batchingColorTexture"),tt._colorsTexture!==null&&qe.setValue(V,"batchingColorTexture",tt._colorsTexture,E));const Ei=it.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&jt.update(tt,it,mn),(Jn||qt.receiveShadow!==tt.receiveShadow)&&(qt.receiveShadow=tt.receiveShadow,qe.setValue(V,"receiveShadow",tt.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&W.environment!==null&&(ln.envMapIntensity.value=W.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=FA()),Jn){if(qe.setValue(V,"toneMappingExposure",Y.toneMappingExposure),qt.needsLights&&ui(ln,Vn),kt&&$.fog===!0&&ut.refreshFogUniforms(ln,kt),ut.refreshMaterialUniforms(ln,$,Pt,Dt,U.state.transmissionRenderTarget[R.id]),qt.needsLights&&qt.lightProbeGrid){const Le=qt.lightProbeGrid;ln.probesSH.value=Le.texture,ln.probesMin.value.copy(Le.boundingBox.min),ln.probesMax.value.copy(Le.boundingBox.max),ln.probesResolution.value.copy(Le.resolution)}nu.upload(V,wa(qt),ln,E)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(nu.upload(V,wa(qt),ln,E),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&qe.setValue(V,"center",tt.center),qe.setValue(V,"modelViewMatrix",tt.modelViewMatrix),qe.setValue(V,"normalMatrix",tt.normalMatrix),qe.setValue(V,"modelMatrix",tt.matrixWorld),$.uniformsGroups!==void 0){const Le=$.uniformsGroups;for(let fi=0,ca=Le.length;fi<ca;fi++){const rs=Le[fi];dt.update(rs,mn),dt.bind(rs,mn)}}return mn}function ui(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Ca(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,W,it){const $=D.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),D.get(R.texture).__webglTexture=W,D.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:it,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const it=D.get(R);it.__webglFramebuffer=W,it.__useDefaultFramebuffer=W===void 0};const la=V.createFramebuffer();this.setRenderTarget=function(R,W=0,it=0){X=R,ot=W,st=it;let $=null,tt=!1,kt=!1;if(R){const ft=D.get(R);if(ft.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(V.FRAMEBUFFER,ft.__webglFramebuffer),at.copy(R.viewport),mt.copy(R.scissor),yt=R.scissorTest,Tt.viewport(at),Tt.scissor(mt),Tt.setScissorTest(yt),O=-1;return}else if(ft.__webglFramebuffer===void 0)E.setupRenderTarget(R);else if(ft.__hasExternalTextures)E.rebindTextures(R,D.get(R.texture).__webglTexture,D.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Vt=R.depthTexture;if(ft.__boundDepthTexture!==Vt){if(Vt!==null&&D.has(Vt)&&(R.width!==Vt.image.width||R.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(R)}}const Mt=R.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(kt=!0);const Rt=D.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Rt[W])?$=Rt[W][it]:$=Rt[W],tt=!0):R.samples>0&&E.useMultisampledRTT(R)===!1?$=D.get(R).__webglMultisampledFramebuffer:Array.isArray(Rt)?$=Rt[it]:$=Rt,at.copy(R.viewport),mt.copy(R.scissor),yt=R.scissorTest}else at.copy(wt).multiplyScalar(Pt).floor(),mt.copy(Yt).multiplyScalar(Pt).floor(),yt=se;if(it!==0&&($=la),Tt.bindFramebuffer(V.FRAMEBUFFER,$)&&Tt.drawBuffers(R,$),Tt.viewport(at),Tt.scissor(mt),Tt.setScissorTest(yt),tt){const ft=D.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,ft.__webglTexture,it)}else if(kt){const ft=W;for(let Mt=0;Mt<R.textures.length;Mt++){const Rt=D.get(R.textures[Mt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Mt,Rt.__webglTexture,it,ft)}}else if(R!==null&&it!==0){const ft=D.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ft.__webglTexture,it)}O=-1},this.readRenderTargetPixels=function(R,W,it,$,tt,kt,Zt,ft=0){if(!(R&&R.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=D.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Zt!==void 0&&(Mt=Mt[Zt]),Mt){Tt.bindFramebuffer(V.FRAMEBUFFER,Mt);try{const Rt=R.textures[ft],Vt=Rt.format,Jt=Rt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ft),!ie.textureFormatReadable(Vt)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Jt)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-$&&it>=0&&it<=R.height-tt&&V.readPixels(W,it,$,tt,k.convert(Vt),k.convert(Jt),kt)}finally{const Rt=X!==null?D.get(X).__webglFramebuffer:null;Tt.bindFramebuffer(V.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(R,W,it,$,tt,kt,Zt,ft=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=D.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Zt!==void 0&&(Mt=Mt[Zt]),Mt)if(W>=0&&W<=R.width-$&&it>=0&&it<=R.height-tt){Tt.bindFramebuffer(V.FRAMEBUFFER,Mt);const Rt=R.textures[ft],Vt=Rt.format,Jt=Rt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ft),!ie.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Xt),V.bufferData(V.PIXEL_PACK_BUFFER,kt.byteLength,V.STREAM_READ),V.readPixels(W,it,$,tt,k.convert(Vt),k.convert(Jt),0);const fe=X!==null?D.get(X).__webglFramebuffer:null;Tt.bindFramebuffer(V.FRAMEBUFFER,fe);const pe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ay(V,pe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Xt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,kt),V.deleteBuffer(Xt),V.deleteSync(pe),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,it=0){const $=Math.pow(2,-it),tt=Math.floor(R.image.width*$),kt=Math.floor(R.image.height*$),Zt=W!==null?W.x:0,ft=W!==null?W.y:0;E.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,it,0,0,Zt,ft,tt,kt),Tt.unbindTexture()};const un=V.createFramebuffer(),Da=V.createFramebuffer();this.copyTextureToTexture=function(R,W,it=null,$=null,tt=0,kt=0){let Zt,ft,Mt,Rt,Vt,Jt,Xt,fe,pe;const we=R.isCompressedTexture?R.mipmaps[kt]:R.image;if(it!==null)Zt=it.max.x-it.min.x,ft=it.max.y-it.min.y,Mt=it.isBox3?it.max.z-it.min.z:1,Rt=it.min.x,Vt=it.min.y,Jt=it.isBox3?it.min.z:0;else{const ln=Math.pow(2,-tt);Zt=Math.floor(we.width*ln),ft=Math.floor(we.height*ln),R.isDataArrayTexture?Mt=we.depth:R.isData3DTexture?Mt=Math.floor(we.depth*ln):Mt=1,Rt=0,Vt=0,Jt=0}$!==null?(Xt=$.x,fe=$.y,pe=$.z):(Xt=0,fe=0,pe=0);const he=k.convert(W.format),me=k.convert(W.type);let qt;W.isData3DTexture?(E.setTexture3D(W,0),qt=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(E.setTexture2DArray(W,0),qt=V.TEXTURE_2D_ARRAY):(E.setTexture2D(W,0),qt=V.TEXTURE_2D),Tt.activeTexture(V.TEXTURE0),Tt.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),Tt.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Tt.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const wn=Tt.getParameter(V.UNPACK_ROW_LENGTH),_e=Tt.getParameter(V.UNPACK_IMAGE_HEIGHT),mn=Tt.getParameter(V.UNPACK_SKIP_PIXELS),Fn=Tt.getParameter(V.UNPACK_SKIP_ROWS),Jn=Tt.getParameter(V.UNPACK_SKIP_IMAGES);Tt.pixelStorei(V.UNPACK_ROW_LENGTH,we.width),Tt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,we.height),Tt.pixelStorei(V.UNPACK_SKIP_PIXELS,Rt),Tt.pixelStorei(V.UNPACK_SKIP_ROWS,Vt),Tt.pixelStorei(V.UNPACK_SKIP_IMAGES,Jt);const Vn=R.isDataArrayTexture||R.isData3DTexture,qe=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const ln=D.get(R),Ei=D.get(W),Le=D.get(ln.__renderTarget),fi=D.get(Ei.__renderTarget);Tt.bindFramebuffer(V.READ_FRAMEBUFFER,Le.__webglFramebuffer),Tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let ca=0;ca<Mt;ca++)Vn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,D.get(R).__webglTexture,tt,Jt+ca),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,D.get(W).__webglTexture,kt,pe+ca)),V.blitFramebuffer(Rt,Vt,Zt,ft,Xt,fe,Zt,ft,V.DEPTH_BUFFER_BIT,V.NEAREST);Tt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(tt!==0||R.isRenderTargetTexture||D.has(R)){const ln=D.get(R),Ei=D.get(W);Tt.bindFramebuffer(V.READ_FRAMEBUFFER,un),Tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Da);for(let Le=0;Le<Mt;Le++)Vn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ln.__webglTexture,tt,Jt+Le):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ln.__webglTexture,tt),qe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ei.__webglTexture,kt,pe+Le):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ei.__webglTexture,kt),tt!==0?V.blitFramebuffer(Rt,Vt,Zt,ft,Xt,fe,Zt,ft,V.COLOR_BUFFER_BIT,V.NEAREST):qe?V.copyTexSubImage3D(qt,kt,Xt,fe,pe+Le,Rt,Vt,Zt,ft):V.copyTexSubImage2D(qt,kt,Xt,fe,Rt,Vt,Zt,ft);Tt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else qe?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(qt,kt,Xt,fe,pe,Zt,ft,Mt,he,me,we.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(qt,kt,Xt,fe,pe,Zt,ft,Mt,he,we.data):V.texSubImage3D(qt,kt,Xt,fe,pe,Zt,ft,Mt,he,me,we):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,kt,Xt,fe,Zt,ft,he,me,we.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,kt,Xt,fe,we.width,we.height,he,we.data):V.texSubImage2D(V.TEXTURE_2D,kt,Xt,fe,Zt,ft,he,me,we);Tt.pixelStorei(V.UNPACK_ROW_LENGTH,wn),Tt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_e),Tt.pixelStorei(V.UNPACK_SKIP_PIXELS,mn),Tt.pixelStorei(V.UNPACK_SKIP_ROWS,Fn),Tt.pixelStorei(V.UNPACK_SKIP_IMAGES,Jn),kt===0&&W.generateMipmaps&&V.generateMipmap(qt),Tt.unbindTexture()},this.initRenderTarget=function(R){D.get(R).__webglFramebuffer===void 0&&E.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),Tt.unbindTexture()},this.resetState=function(){ot=0,st=0,X=null,Tt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Pe._getUnpackColorSpace()}}const kn=16,pr=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],[1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1],[1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1],[1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],[1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1],[1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1],[1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1],[1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1],[1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1],[1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],zs=(o,t)=>{const i=Math.floor(o),s=Math.floor(t);return i<0||i>=kn||s<0||s>=kn?!0:pr[s][i]===1},iv=(o,t)=>{const i=Math.floor(o),s=Math.floor(t);if(i>=0&&i<kn&&s>=0&&s<kn&&pr[s][i]===0)return{x:i,z:s};let l=1/0,c={x:1,z:1};for(let h=-2;h<=2;h++)for(let p=-2;p<=2;p++){const m=i+h,d=s+p;if(m>=0&&m<kn&&d>=0&&d<kn&&pr[d][m]===0){const _=Math.pow(m+.5-o,2)+Math.pow(d+.5-t,2);_<l&&(l=_,c={x:m,z:d})}}return c},GA=(o,t,i)=>{let s=o,l=t;const c=Math.floor(o-i-1),h=Math.floor(o+i+1),p=Math.floor(t-i-1),m=Math.floor(t+i+1);for(let d=0;d<2;d++)for(let _=p;_<=m;_++)for(let v=c;v<=h;v++){let g=!1;if((v<0||v>=kn||_<0||_>=kn||pr[_][v]===1)&&(g=!0),g){const y=v,b=v+1,A=_,M=_+1,S=Math.max(y,Math.min(s,b)),C=Math.max(A,Math.min(l,M)),N=s-S,L=l-C,H=N*N+L*L;if(H<i*i&&H>1e-6){const U=Math.sqrt(H),I=i-U;s+=N/U*I,l+=L/U*I}else if(H<=1e-6){const U=s-y,I=b-s,T=l-A,P=M-l,Y=Math.min(U,I,T,P);Y===U?s-=i+U:Y===I?s+=i+I:Y===T?l-=i+T:l+=i+P}}}return{x:s,z:l}},av=(o,t,i,s)=>{const l=iv(o,t),c=iv(i,s),h=l.x,p=l.z,m=c.x,d=c.z;if(h===m&&p===d)return[];const _=[],v=Array.from({length:kn},()=>new Array(kn).fill(!1));_.push({x:h,z:p,path:[]}),v[p][h]=!0;const g=[{x:0,z:1},{x:0,z:-1},{x:1,z:0},{x:-1,z:0}];for(;_.length>0;){const{x:y,z:b,path:A}=_.shift();if(y===m&&b===d)return A;for(const M of g){const S=y+M.x,C=b+M.z;S>=0&&S<kn&&C>=0&&C<kn&&!v[C][S]&&pr[C][S]===0&&(v[C][S]=!0,_.push({x:S,z:C,path:[...A,{x:S,z:C}]}))}}return null},HA=()=>{const o=document.createElement("canvas");o.width=256,o.height=256;const t=o.getContext("2d");t.fillStyle="#bfb06c",t.fillRect(0,0,256,256),t.strokeStyle="#a69758",t.lineWidth=12;for(let A=16;A<256;A+=32){t.beginPath(),t.moveTo(A,0),t.lineTo(A,256),t.stroke(),t.fillStyle="#8f8249";for(let M=16;M<256;M+=32)t.fillRect(A-2,M,4,12)}t.fillStyle="rgba(84, 76, 39, 0.25)";for(let A=0;A<6;A++){const M=Math.random()*256,S=Math.random()*256,C=Math.random()*40+10,N=t.createRadialGradient(M,S,0,M,S,C);N.addColorStop(0,"rgba(84, 76, 39, 0.45)"),N.addColorStop(1,"rgba(84, 76, 39, 0)"),t.fillStyle=N,t.beginPath(),t.arc(M,S,C,0,Math.PI*2),t.fill()}const i=t.getImageData(0,0,256,256),s=i.data;for(let A=0;A<s.length;A+=4){const M=(Math.random()-.5)*22;s[A]=Math.min(255,Math.max(0,s[A]+M)),s[A+1]=Math.min(255,Math.max(0,s[A+1]+M)),s[A+2]=Math.min(255,Math.max(0,s[A+2]+M))}t.putImageData(i,0,0);const l=document.createElement("canvas");l.width=128,l.height=128;const c=l.getContext("2d");c.fillStyle="#7a6842",c.fillRect(0,0,128,128);for(let A=0;A<4;A++){const M=Math.random()*128,S=Math.random()*128,C=Math.random()*25+5,N=c.createRadialGradient(M,S,0,M,S,C);N.addColorStop(0,"rgba(46, 38, 21, 0.6)"),N.addColorStop(1,"rgba(46, 38, 21, 0)"),c.fillStyle=N,c.beginPath(),c.arc(M,S,C,0,Math.PI*2),c.fill()}const h=c.getImageData(0,0,128,128),p=h.data;for(let A=0;A<p.length;A+=4){const M=(Math.random()-.5)*35;p[A]=Math.min(255,Math.max(0,p[A]+M)),p[A+1]=Math.min(255,Math.max(0,p[A+1]+M)),p[A+2]=Math.min(255,Math.max(0,p[A+2]+M))}c.putImageData(h,0,0);const m=document.createElement("canvas");m.width=256,m.height=256;const d=m.getContext("2d");d.fillStyle="#dbd9cd",d.fillRect(0,0,256,256),d.strokeStyle="#9c9a8f",d.lineWidth=4,d.strokeRect(0,0,256,256);for(let A=0;A<2;A++){const M=Math.random()*256,S=Math.random()*256,C=Math.random()*30+10,N=d.createRadialGradient(M,S,0,M,S,C);N.addColorStop(0,"rgba(112, 94, 53, 0.45)"),N.addColorStop(.5,"rgba(112, 94, 53, 0.2)"),N.addColorStop(1,"rgba(112, 94, 53, 0)"),d.fillStyle=N,d.beginPath(),d.arc(M,S,C,0,Math.PI*2),d.fill()}const _=d.getImageData(0,0,256,256),v=_.data;for(let A=0;A<v.length;A+=4){const M=(Math.random()-.5)*15;Math.random()>.96?(v[A]=70,v[A+1]=68,v[A+2]=63):(v[A]=Math.min(255,Math.max(0,v[A]+M)),v[A+1]=Math.min(255,Math.max(0,v[A+1]+M)),v[A+2]=Math.min(255,Math.max(0,v[A+2]+M)))}d.putImageData(_,0,0);const g=new Qh(o);g.wrapS=Qa,g.wrapT=Qa;const y=new Qh(l);y.wrapS=Qa,y.wrapT=Qa;const b=new Qh(m);return b.wrapS=Qa,b.wrapT=Qa,{wallTex:g,carpetTex:y,ceilTex:b}},kA=()=>{var h,p,m,d,_,v;const o=new Set,t=[{x:1,z:1}];o.add("1,1");const i=[{x:0,z:1},{x:0,z:-1},{x:1,z:0},{x:-1,z:0}];for(;t.length>0;){const g=t.shift();for(const y of i){const b=g.x+y.x,A=g.z+y.z;if(b>=0&&b<kn&&A>=0&&A<kn&&pr[A][b]===0){const M=`${b},${A}`;o.has(M)||(o.add(M),t.push({x:b,z:A}))}}}const s=[];for(let g=0;g<kn;g++)for(let y=0;y<kn;y++)if(o.has(`${y},${g}`)){const b=y+.5,A=g+.5,M=Math.hypot(b-1.5,A-1.5),S=Math.hypot(b-14.5,A-14.5);M>=4&&S>=2.5&&s.push({x:b,z:A})}let l=6,c=[];for(;l>=3;){const g=[...s].sort(()=>Math.random()-.5);c=[];for(const y of g){let b=!0;for(const A of c)if(Math.hypot(y.x-A.x,y.z-A.z)<l){b=!1;break}if(b&&(c.push(y),c.length===3))break}if(c.length===3)break;l-=.5}if(c.length<3){c=[];const g=[...s].sort(()=>Math.random()-.5);for(let y=0;y<Math.min(3,g.length);y++)c.push(g[y])}return[{id:"k1",x:((h=c[0])==null?void 0:h.x)??1.5,z:((p=c[0])==null?void 0:p.z)??9.5,active:!0,color:"#ff0055",label:"RED CARD"},{id:"k2",x:((m=c[1])==null?void 0:m.x)??13.5,z:((d=c[1])==null?void 0:d.z)??1.5,active:!0,color:"#00ff66",label:"GREEN CARD"},{id:"k3",x:((_=c[2])==null?void 0:_.x)??14.5,z:((v=c[2])==null?void 0:v.z)??11.5,active:!0,color:"#00ffff",label:"BLUE CARD"}]},XA=({settings:o,gameState:t,setGameState:i,playerStats:s,setPlayerStats:l,onUpdateNoise:c})=>{const h=$t.useRef(null),p=$t.useRef(null),m=$t.useRef(null),d=$t.useRef(null),[_,v]=$t.useState(()=>kA()),g=$t.useRef({}),y=$t.useRef({x:1.5,z:1.5}),b=$t.useRef(Math.PI),A=$t.useRef(0),M=$t.useRef(!1),S=$t.useRef(!1),C=$t.useRef(!1),N=$t.useRef(!1),L=$t.useRef(0),H=$t.useRef(0),U=$t.useRef(s);$t.useEffect(()=>{U.current=s},[s]);const I=$t.useRef(_);$t.useEffect(()=>{I.current=_},[_]);const[T,P]=$t.useState(!1),Y=$t.useRef(!1);$t.useEffect(()=>{Y.current=T},[T]);const F=$t.useRef(null),j=$t.useRef(new K(11.5,0,13.5)),ot=$t.useRef(0),st=$t.useRef("STALKING"),X=$t.useRef(1.2);$t.useRef(0);const O=$t.useRef(0),B=$t.useRef(null);$t.useRef([]);const at=$t.useRef([]),mt=$t.useRef(0),yt=$t.useRef(!1),z=$t.useRef(!1),Q=$t.useRef(0),xt=$t.useRef(!1),Dt=$t.useRef(0),Pt=()=>h.current?o.lowResMode?{w:320,h:240}:{w:640,h:480}:{w:640,h:480};$t.useEffect(()=>{if(!h.current)return;const V=Pt(),Gt=new Sy;Gt.fog=new lp("#14140b",.12),d.current=Gt;const Ut=new Mi(75,V.w/V.h,.1,50);Ut.position.set(1.5,.9,1.5),m.current=Ut;const ie=new VA({antialias:!1,powerPreference:"high-performance"});ie.setSize(V.w,V.h),ie.setClearColor("#14140b"),ie.domElement.style.width="100%",ie.domElement.style.height="100%",ie.domElement.style.imageRendering="pixelated",ie.domElement.style.objectFit="cover",ie.domElement.id="webgl-canvas",h.current.innerHTML="",h.current.appendChild(ie.domElement),p.current=ie;const{wallTex:Tt,carpetTex:Ae,ceilTex:D}=HA();Tt.repeat.set(1,1),Ae.repeat.set(.5,.5),D.repeat.set(1,1);const E=new Jh({map:Tt,color:"#aaaaaa"}),J=new Jh({map:Ae,color:"#888888"}),gt=new Jh({map:D,color:"#999999"}),At=new rn(1,2,1),Nt=new mo(1,1),It=new mo(1,1),ut=new va;Gt.add(ut);for(let ft=0;ft<kn;ft++)for(let Mt=0;Mt<kn;Mt++)if(pr[ft][Mt]===1){const Rt=new be(At,E);Rt.position.set(Mt+.5,1,ft+.5),ut.add(Rt)}else{const Rt=new be(Nt,J);Rt.rotation.x=-Math.PI/2,Rt.position.set(Mt+.5,0,ft+.5),ut.add(Rt);const Vt=new be(It,gt);Vt.rotation.x=Math.PI/2,Vt.position.set(Mt+.5,2,ft+.5),ut.add(Vt)}const ht=new rn(.6,.05,.15),Bt=new lo({color:"#fefeb0"}),Ft=[],Lt=[];[{x:3.5,z:3.5},{x:7.5,z:1.5},{x:11.5,z:3.5},{x:5.5,z:5.5},{x:9.5,z:5.5},{x:1.5,z:7.5},{x:7.5,z:7.5},{x:13.5,z:7.5},{x:3.5,z:11.5},{x:10.5,z:11.5},{x:7.5,z:13.5}].forEach(ft=>{const Mt=new be(ht,Bt);Mt.position.set(ft.x,1.96,ft.z),Gt.add(Mt),Ft.push(Mt);const Rt=new U_("#fefeb0",.7,4);Rt.position.set(ft.x,1.8,ft.z),Gt.add(Rt),Lt.push(Rt)});const jt=new va;jt.position.set(14.5,0,14.5),jt.rotation.y=Math.PI,Gt.add(jt);const re=new Wi({color:"#343a40",metalness:.9,roughness:.2}),Se=new Wi({color:"#1a1d20",metalness:.85,roughness:.45}),k=new Wi({color:"#495057",metalness:.9,roughness:.25}),Ct=new Wi({color:"#a36d24",metalness:.95,roughness:.15}),dt=new Wi({color:"#00ff44",emissive:"#003300",metalness:.6,roughness:.2}),Ht=new Wi({color:"#00ff33",emissive:"#00ff33",emissiveIntensity:2,metalness:.1,roughness:.1}),zt=new Wi({color:"#020d04",roughness:.15}),Et=new be(new rn(1,1.9,.02),re);Et.position.set(0,.95,-.45),jt.add(Et);const Kt=new be(new rn(.12,1.8,.12),Se);Kt.position.set(-.44,.9,-.44),jt.add(Kt);const oe=new be(new rn(.12,1.8,.12),Se);oe.position.set(.44,.9,-.44),jt.add(oe);const on=new be(new rn(1,.2,.14),Se);on.position.set(0,1.7,-.44),jt.add(on);for(let ft=0;ft<6;ft++){const Mt=new be(new rn(.122,.035,.01),dt);Mt.position.set(-.44,.35+ft*.22,-.435),Mt.rotation.z=Math.PI/4,jt.add(Mt);const Rt=new be(new rn(.122,.035,.01),dt);Rt.position.set(.44,.35+ft*.22,-.435),Rt.rotation.z=-Math.PI/4,jt.add(Rt)}const Be=new be(new rn(.36,1.5,.04),k);Be.position.set(-.18,.75,-.42),jt.add(Be);const ri=new be(new rn(.36,1.5,.04),k);ri.position.set(.18,.75,-.42),jt.add(ri);for(let ft=0;ft<4;ft++){const Mt=.25+ft*.32,Rt=new be(new rn(.3,.05,.015),re);Rt.position.set(-.18,Mt,-.41),jt.add(Rt);const Vt=new be(new rn(.3,.05,.015),re);Vt.position.set(.18,Mt,-.41),jt.add(Vt)}const Qn=new be(new rn(.01,1.5,.005),Ht);Qn.position.set(0,.75,-.405),jt.add(Qn);const sa=new be(new rn(.6,.16,.06),re);sa.position.set(0,1.7,-.38),jt.add(sa);const as=new be(new rn(.56,.12,.01),zt);as.position.set(0,1.7,-.345),jt.add(as),[1.73,1.67].forEach(ft=>{const Mt=new be(new rn(.08,.015,.005),Ht);Mt.position.set(-.04,ft,-.338),Mt.rotation.z=-Math.PI/6,jt.add(Mt);const Rt=new be(new rn(.08,.015,.005),Ht);Rt.position.set(.04,ft,-.338),Rt.rotation.z=Math.PI/6,jt.add(Rt)});const ss=new be(new _l(.012,8,8),Ht);ss.position.set(-.24,1.7,-.34),jt.add(ss);const Bn=new Wi({color:"#ffaa00",emissive:"#dd6600",emissiveIntensity:1,roughness:.1}),pn=new be(new _l(.012,8,8),Bn);pn.position.set(.24,1.7,-.34),jt.add(pn);const Rn=new be(new gl(.015,.015,1.7,8),Ct);Rn.position.set(-.48,.85,-.4),jt.add(Rn);const Pi=new be(new gl(.015,.015,1.7,8),Ct);Pi.position.set(.48,.85,-.4),jt.add(Pi);const ji=new gl(.025,.025,.25,8),Gs=new Wi({color:"#111111",metalness:.9,roughness:.2}),ra=new be(ji,Gs);ra.position.set(-.35,.15,-.38),ra.rotation.z=Math.PI/2,jt.add(ra);const wa=new be(ji,Gs);wa.position.set(.35,.15,-.38),wa.rotation.z=Math.PI/2,jt.add(wa);const Zi=new U_("#00ff33",1.5,4);Zi.position.set(0,1.5,-.3),jt.add(Zi);const zi=new Fy("#ffffff",4,18,Math.PI/4.5,.5,1);Gt.add(zi),Gt.add(zi.target);const oa=new Gy("#26261c",.15);Gt.add(oa);const ui=new va;ui.position.copy(j.current),Gt.add(ui),B.current=ui;const Ca=new _l(.16,8,8),la=new lo({color:"#050505"}),un=new be(Ca,la);un.position.set(0,1.8,0),ui.add(un);const Da=new va;ui.add(Da),(()=>{const ft=new Yd({color:"#000000",linewidth:2});for(let Vt=0;Vt<12;Vt++){const Jt=[];let Xt=1.6,fe=0,pe=0;for(Jt.push(new K(fe,Xt,pe));Xt>.6;)Xt-=.15,fe+=(Math.random()-.5)*.14,pe+=(Math.random()-.5)*.14,Jt.push(new K(fe,Xt,pe));const we=new ci().setFromPoints(Jt),he=new Kh(we,ft);Da.add(he),at.current.push(he)}const Mt=new Yd({color:"#080808"}),Rt=[-1,1];Rt.forEach(Vt=>{const Jt=[];let Xt=Vt*.15,fe=1.5,pe=0;Jt.push(new K(Xt,fe,pe));for(let me=0;me<8;me++)fe-=.18,Xt+=Vt*.08+(Math.random()-.5)*.05,pe+=(Math.random()-.5)*.08,Jt.push(new K(Xt,fe,pe));const we=new ci().setFromPoints(Jt),he=new Kh(we,Mt);Da.add(he),at.current.push(he)}),Rt.forEach(Vt=>{const Jt=[];let Xt=Vt*.1,fe=.6,pe=0;Jt.push(new K(Xt,fe,pe));for(let me=0;me<5;me++)fe-=.13,Xt+=Vt*.03+(Math.random()-.5)*.05,pe+=(Math.random()-.5)*.05,Jt.push(new K(Xt,fe,pe));const we=new ci().setFromPoints(Jt),he=new Kh(we,Mt);Da.add(he),at.current.push(he)})})();const W=new va;Gt.add(W);const it=[];_.forEach(ft=>{const Mt=new va;Mt.position.set(ft.x,.25,ft.z),Mt.name=`card_${ft.id}`;const Rt=new rn(.18,.004,.11),Vt=new Wi({color:"#f0f0f0",roughness:.35,metalness:.1}),Jt=new be(Rt,Vt);Mt.add(Jt);const Xt=new rn(.18,.005,.016),fe=new Wi({color:"#1a1a1a",roughness:.8}),pe=new be(Xt,fe);pe.position.set(0,.001,.035),Mt.add(pe);const we=new rn(.024,.005,.024),he=new Wi({color:"#d4af37",metalness:.85,roughness:.25}),me=new be(we,he);me.position.set(-.05,.001,-.015),Mt.add(me);const qt=new rn(.018,.005,.04),wn=new lo({color:ft.color}),_e=new be(qt,wn);_e.position.set(.06,.001,0),Mt.add(_e);const mn=new rn(.07,.005,.008),Fn=new lo({color:"#555555"}),Jn=new be(mn,Fn);Jn.position.set(.01,.001,-.02),Mt.add(Jn);const Vn=new be(mn,Fn);Vn.position.set(.01,.001,-.035),Mt.add(Vn),W.add(Mt),it.push(Mt)});const $=new Xy;yn.startBackgroundHum();const tt=()=>{if(!p.current||!m.current)return;const ft=Pt();m.current.aspect=ft.w/ft.h,m.current.updateProjectionMatrix(),p.current.setSize(ft.w,ft.h)};window.addEventListener("resize",tt);let kt;const Zt=()=>{if(kt=requestAnimationFrame(Zt),t!=="PLAYING")return;const ft=Math.min($.getDelta(),.1),Mt=$.getElapsedTime();Q.current+=ft,Q.current>12&&(Math.random()>.6&&yn.playAmbientClank(),Q.current=0);let Rt=0,Vt=0;(g.current.w||g.current.arrowup)&&(Vt+=1),(g.current.s||g.current.arrowdown)&&(Vt-=1),(g.current.a||g.current.arrowleft)&&(Rt-=1),(g.current.d||g.current.arrowright)&&(Rt+=1),(g.current.joystick_x||g.current.joystick_y)&&(Rt=g.current.joystick_x||0,Vt=-(g.current.joystick_y||0));let Jt=Math.sqrt(Rt*Rt+Vt*Vt),Xt=Jt;Jt>1&&(Rt/=Jt,Vt/=Jt,Xt=1),C.current=Jt>0;const fe=g.current.shift,pe=S.current;U.current.stamina<=.1?N.current=!0:U.current.stamina>25&&(N.current=!1);const we=!N.current&&U.current.stamina>0&&!pe;M.current=C.current&&fe&&we,l(Me=>{let We=Me.stamina,ne=Me.flashlightBattery;Me.flashlightOn?ne=Math.max(0,Me.flashlightBattery-ft*10):ne=Math.min(100,Me.flashlightBattery+ft*6.66),M.current?We=Math.max(0,Me.stamina-ft*26):We=Math.min(100,Me.stamina+ft*12),We<20?yn.startBreathing():yn.stopBreathing();const fn={...Me,stamina:We,flashlightBattery:ne,flashlightOn:ne<=0?!1:Me.flashlightOn};return U.current=fn,fn});let he=o.difficulty==="EASY"?1.7:o.difficulty==="NORMAL"?1.5:1.35;const me=N.current||U.current.stamina<20;me&&(he*=.7),pe&&(he*=.5);const qt=(M.current?he*1.8:he)*Xt;if(Jt>0){const Me=-Math.sin(b.current),We=-Math.cos(b.current),ne=Math.cos(b.current),fn=-Math.sin(b.current),hi=(Rt*ne+Vt*Me)*qt,xn=(Rt*fn+Vt*We)*qt,$n=.28;let Ki=y.current.x+hi*ft,di=y.current.z+xn*ft;const Xn=GA(Ki,di,$n);y.current.x=Xn.x,y.current.z=Xn.z,L.current+=ft*(M.current?12:7),L.current>Math.PI*2&&(yn.playFootstep(),L.current=0)}else L.current=0;const wn=pe?.55:.9;Ut.userData.baseHeight===void 0&&(Ut.userData.baseHeight=.9),Ut.userData.baseHeight+=(wn-Ut.userData.baseHeight)*ft*8;const _e=M.current?.08:C.current?me?.06:.04:.01,mn=M.current?16:me?6:8.5;H.current+=ft*mn;const Fn=Ut.userData.baseHeight+Math.sin(H.current)*_e;Ut.position.x=y.current.x,Ut.position.z=y.current.z,Ut.position.y=Fn;const Jn=me?Math.sin(H.current*.4)*.04:0,Vn=new gr().setFromEuler(new Aa(A.current,b.current,Jn,"YXZ"));Ut.quaternion.slerp(Vn,.35);const qe=U.current.flashlightOn?1:0;zi.intensity=qe*6;const ln=new K(0,0,-1).applyQuaternion(Ut.quaternion);zi.position.copy(Ut.position),zi.target.position.copy(Ut.position).addScaledVector(ln,2);const Ei=new K(y.current.x,0,y.current.z),Le=B.current?B.current.position.distanceTo(Ei):999,fi=16,ca=1.5;if(Ft.forEach((Me,We)=>{let ne=!0;if(!Y.current){if(st.current==="CHASING"&&Le<fi){const xn=Math.max(0,Math.min(1,(fi-Le)/(fi-ca))),$n=15+xn*120,Ki=Math.sin(Mt*$n+Me.position.x*23.7+Me.position.z*17.3),di=1-xn*.75;ne=Ki<di}else if(yt.current&&Le<12){const xn=Math.max(0,Math.min(1,(12-Le)/6.5)),$n=10+xn*15,Ki=Math.sin(Mt*$n+Me.position.x*23.7+Me.position.z*17.3),di=.97-xn*.1;ne=Ki<di}}const fn=ne?16711344:2039572,hi=ne?.7:.02;Me.material.color.setHex(fn),Lt[We]&&(Lt[We].intensity=hi)}),it.forEach((Me,We)=>{const ne=I.current[We];if(!ne||!ne.active){Me.visible=!1;return}if(Me.rotation.y+=ft*1.5,Me.position.y=.25+Math.sin(Mt*3+We)*.04,Math.hypot(Ut.position.x-Me.position.x,Ut.position.z-Me.position.z)<.7){yn.playKeycardPickup();const hi=I.current.map(xn=>xn.id===ne.id?{...xn,active:!1}:xn);I.current=hi,v(hi),l(xn=>{const $n={...xn,keysCollected:xn.keysCollected+1};return U.current=$n,$n})}}),B.current){const Me=B.current;if(Y.current)Me.visible=!1,yn.stopHeartbeat(),c(0),yt.current=!1;else{Me.visible=!0;const We=new K(y.current.x,0,y.current.z),ne=Me.position,fn=ne.distanceTo(We),xn=(()=>{const cn=ne.clone(),tn=We.clone();for(let ye=1;ye<15;ye++){const Ze=cn.clone().lerp(tn,ye/15);if(zs(Ze.x,Ze.z))return!1}return!0})();yt.current=xn;let $n=!1;if(U.current.flashlightOn){const He=ne.clone().sub(Ut.position).normalize();new K(0,0,-1).applyQuaternion(Ut.quaternion).normalize().dot(He)>.85&&xn&&fn<12&&($n=!0)}if(fn>20){if(mt.current+=ft,mt.current>10){const He=[0,Math.PI/2,Math.PI,-Math.PI/2];for(let cn of He){const tn=Math.floor(y.current.x+Math.sin(cn)*6),ye=Math.floor(y.current.z+Math.cos(cn)*6);if(!zs(tn+.5,ye+.5)&&Math.abs(tn-y.current.x)>2){ne.set(tn+.5,0,ye+.5),mt.current=0;break}}}}else mt.current=0;$n?st.current="FROZEN":xn&&(fn<5.5||M.current)||st.current==="FROZEN"&&!$n?st.current="CHASING":st.current==="CHASING"&&!xn&&fn>8&&(st.current="STALKING");const Ki=o.difficulty==="EASY"?.9:o.difficulty==="NORMAL"?1.3:1.7;if(st.current==="FROZEN"){X.current=0;const He=We.clone().sub(ne).cross(new K(0,1,0)).normalize(),cn=He.x*ft*.15,tn=He.z*ft*.15,ye=.3,Ze=ne.x+cn,bi=ne.z+tn;zs(Ze+(cn>0?ye:-ye),ne.z)||(ne.x=Ze),zs(ne.x,bi+(tn>0?ye:-ye))||(ne.z=bi),fn<5?yn.startHeartbeat(.8):yn.startHeartbeat(.3)}else if(st.current==="CHASING"){X.current=Ki*2.1;const He=av(ne.x,ne.z,We.x,We.z);let cn=We.x,tn=We.z;if(He&&He.length>0){let pi=He[0];Math.hypot(ne.x-(pi.x+.5),ne.z-(pi.z+.5))<.4&&He.length>1&&(pi=He[1]),cn=pi.x+.5,tn=pi.z+.5}const ye=new K(cn-ne.x,0,tn-ne.z);ye.lengthSq()>.001?ye.normalize():(ye.copy(We).sub(ne),ye.y=0,ye.lengthSq()>.001&&ye.normalize());const Ze=.3,bi=ye.x*X.current,ua=ye.z*X.current,fa=ne.x+bi*ft,os=ne.z+ua*ft;zs(fa+(bi>0?Ze:-Ze),ne.z)||(ne.x=fa),zs(ne.x,os+(ua>0?Ze:-Ze))||(ne.z=os);const vn=We.clone().sub(ne).normalize();ot.current=Math.atan2(vn.x,vn.z),Me.rotation.y=ot.current,yn.startHeartbeat(.95)}else{st.current="STALKING",X.current=Ki*.75;const He=av(ne.x,ne.z,We.x,We.z);let cn=We.x,tn=We.z;if(He&&He.length>0){let vn=He[0];Math.hypot(ne.x-(vn.x+.5),ne.z-(vn.z+.5))<.4&&He.length>1&&(vn=He[1]),cn=vn.x+.5,tn=vn.z+.5}const ye=new K(cn-ne.x,0,tn-ne.z);ye.lengthSq()>.001?ye.normalize():(ye.copy(We).sub(ne),ye.y=0,ye.lengthSq()>.001&&ye.normalize());const Ze=.3,bi=ye.x*X.current,ua=ye.z*X.current,fa=ne.x+bi*ft,os=ne.z+ua*ft;zs(fa+(bi>0?Ze:-Ze),ne.z)||(ne.x=fa),zs(ne.x,os+(ua>0?Ze:-Ze))||(ne.z=os),ot.current=Math.atan2(ye.x,ye.z),Me.rotation.y=ot.current,fn<10?yn.startHeartbeat(.45):yn.stopHeartbeat()}if(st.current!=="FROZEN"){const He=st.current==="CHASING"?12:4.5;O.current+=ft*He,O.current>Math.PI*2&&(yn.playEntityFootstepSpatial(ne.x,.5,ne.z,y.current.x,y.current.z,b.current,st.current==="CHASING"),O.current=0)}const di=12;if(fn<di){const He=1-fn/di;c(He),fn<4&&Math.random()>.8&&(zi.intensity=Math.random()*1.5),l(cn=>({...cn,sanity:Math.max(0,cn.sanity-ft*(5.5*He))}))}else c(0);const Xn=st.current==="CHASING"?3:st.current==="FROZEN"?.25:1;if(un.position.x=Math.sin(Mt*65)*.015*Xn,un.position.z=Math.cos(Mt*50)*.012*Xn,at.current.forEach((He,cn)=>{const tn=He.geometry.attributes.position;if(tn){const ye=tn.array;for(let Ze=3;Ze<ye.length;Ze+=3){const bi=Math.sin(Mt*85+cn+Ze)*.009*Xn;ye[Ze]=ye[Ze]+bi,ye[Ze+2]=ye[Ze+2]+Math.cos(Mt*75+cn+Ze)*.009*Xn}tn.needsUpdate=!0}}),fn<.65&&!z.current){z.current=!0,i("SCARED"),yn.playJumpscare();const He=new K(0,0,-1).applyQuaternion(Ut.quaternion);Me.position.copy(Ut.position).addScaledVector(He,.5),Me.lookAt(Ut.position),setTimeout(()=>{i("GAMEOVER")},1500)}}}Math.hypot(Ut.position.x-14.5,Ut.position.z-14.5)<.35&&U.current.keysCollected>=U.current.keysRequired&&(yn.playEscapeChime(),i("ESCAPED")),ie.render(Gt,Ut)};return $.start(),Zt(),()=>{cancelAnimationFrame(kt),window.removeEventListener("resize",tt),yn.stopBackgroundHum(),yn.stopHeartbeat(),yn.stopBreathing(),p.current&&p.current.domElement&&p.current.dispose()}},[t,o]),$t.useEffect(()=>{const V=Ut=>{const ie=Ut.key.toLowerCase();if(g.current[ie]=!0,ie==="f"){const Tt=U.current.flashlightOn,Ae=U.current.flashlightBattery>=15;(Tt||Ae)&&(yn.playFlashlightClick(),l(D=>{const E={...D,flashlightOn:!D.flashlightOn};return U.current=E,E}))}},Gt=Ut=>{g.current[Ut.key.toLowerCase()]=!1};return window.addEventListener("keydown",V),window.addEventListener("keyup",Gt),()=>{window.removeEventListener("keydown",V),window.removeEventListener("keyup",Gt)}},[]);const lt=V=>{var Ut;if(Date.now()-Dt.current<1500)return;const Gt=(Ut=p.current)==null?void 0:Ut.domElement;if(Gt&&Gt.requestPointerLock)try{const ie=Gt.requestPointerLock();ie&&typeof ie.catch=="function"&&ie.catch(Tt=>{console.warn("Pointer lock request rejected:",Tt)})}catch(ie){console.warn("Pointer lock request failed:",ie)}};$t.useEffect(()=>{const V=()=>{var ie;const Gt=(ie=p.current)==null?void 0:ie.domElement,Ut=document.pointerLockElement===Gt;xt.current&&!Ut&&(Dt.current=Date.now()),xt.current=Ut};return document.addEventListener("pointerlockchange",V),()=>{document.removeEventListener("pointerlockchange",V)}},[]);const bt=V=>{const Gt=o.sensitivity*.0015;xt.current?(b.current-=V.movementX*Gt,A.current=Math.max(-Math.PI/3,Math.min(Math.PI/3,A.current-V.movementY*Gt))):V.buttons===1&&(b.current-=V.movementX*Gt*1.5,A.current=Math.max(-Math.PI/3,Math.min(Math.PI/3,A.current-V.movementY*Gt*1.5)))},wt=$t.useRef(null),[Yt,se]=$t.useState({x:0,y:0}),te=$t.useRef(null),je=V=>{if(!wt.current)return;const Gt=wt.current.getBoundingClientRect(),Ut=Gt.left+Gt.width/2,ie=Gt.top+Gt.height/2,Tt=Gt.width/2;let Ae=V.clientX-Ut,D=V.clientY-ie;const E=Math.sqrt(Ae*Ae+D*D);E>Tt&&(Ae=Ae/E*Tt,D=D/E*Tt),se({x:Ae,y:D}),g.current.joystick_x=Ae/Tt,g.current.joystick_y=D/Tt},xe=V=>{if(te.current!==null)return;const Gt=V.changedTouches[0];te.current=Gt.identifier,je(Gt)},Re=V=>{if(te.current!==null)for(let Gt=0;Gt<V.changedTouches.length;Gt++){const Ut=V.changedTouches[Gt];if(Ut.identifier===te.current){je(Ut);break}}},Ge=V=>{if(te.current!==null){for(let Gt=0;Gt<V.changedTouches.length;Gt++)if(V.changedTouches[Gt].identifier===te.current){te.current=null,se({x:0,y:0}),g.current.joystick_x=0,g.current.joystick_y=0;break}}},ce=$t.useRef(null),_n=V=>{for(let Gt=0;Gt<V.changedTouches.length;Gt++){const Ut=V.changedTouches[Gt];if(Ut.clientX>window.innerWidth/2&&ce.current===null){ce.current=Ut.identifier,F.current={x:Ut.clientX,y:Ut.clientY};break}}},$e=V=>{if(!(ce.current===null||!F.current))for(let Gt=0;Gt<V.changedTouches.length;Gt++){const Ut=V.changedTouches[Gt];if(Ut.identifier===ce.current){const ie=Ut.clientX-F.current.x,Tt=Ut.clientY-F.current.y,Ae=o.sensitivity*.003;b.current-=ie*Ae,A.current=Math.max(-Math.PI/3,Math.min(Math.PI/3,A.current-Tt*Ae)),F.current={x:Ut.clientX,y:Ut.clientY};break}}},On=V=>{if(ce.current!==null){for(let Gt=0;Gt<V.changedTouches.length;Gt++)if(V.changedTouches[Gt].identifier===ce.current){ce.current=null,F.current=null;break}}};return St.jsxs("div",{className:"relative w-full h-full select-none cursor-crosshair",children:[St.jsx("div",{ref:h,onClick:lt,onMouseMove:bt,onTouchStart:_n,onTouchMove:$e,onTouchEnd:On,className:"w-full h-full bg-[#14140b] select-none"}),St.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none text-center select-none z-10",children:!xt.current&&St.jsx("div",{className:"bg-black/80 px-4 py-2 border border-yellow-600/30 text-[10px] uppercase text-yellow-400 tracking-wider animate-pulse rounded transform -translate-y-24",children:"🖱️ Click inside screen or Drag to Look Around"})}),St.jsxs("div",{className:"absolute bottom-[env(safe-area-inset-bottom,1.5rem)] left-[env(safe-area-inset-left,1.5rem)] right-[env(safe-area-inset-right,1.5rem)] flex justify-between items-end pointer-events-none select-none z-10 md:hidden pb-4 pl-2 pr-2",children:[St.jsx("div",{ref:wt,onTouchStart:xe,onTouchMove:Re,onTouchEnd:Ge,onTouchCancel:Ge,className:"w-32 h-32 bg-black/30 border border-white/10 rounded-full flex items-center justify-center pointer-events-auto relative backdrop-blur-sm",children:St.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-full absolute shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-none",style:{transform:`translate(${Yt.x}px, ${Yt.y}px)`}})}),St.jsxs("div",{className:"flex flex-col gap-4 justify-end pointer-events-auto items-end",children:[St.jsx("button",{onClick:()=>{const V=U.current.flashlightOn,Gt=U.current.flashlightBattery>=15;(V||Gt)&&(yn.playFlashlightClick(),l(Ut=>{const ie={...Ut,flashlightOn:!Ut.flashlightOn};return U.current=ie,ie}))},className:"w-14 h-14 bg-black/40 border border-white/10 text-white/70 rounded-full flex items-center justify-center active:bg-white/20 active:text-white backdrop-blur-sm shadow-lg transition-colors",children:St.jsx(dM,{className:"w-6 h-6"})}),St.jsxs("div",{className:"flex gap-4",children:[St.jsx("button",{onMouseDown:()=>{S.current=!0},onMouseUp:()=>{S.current=!1},onTouchStart:()=>{S.current=!0},onTouchEnd:()=>{S.current=!1},onTouchCancel:()=>{S.current=!1},className:"w-14 h-14 bg-black/40 border border-white/10 text-white/70 rounded-full flex items-center justify-center active:bg-white/20 active:text-white backdrop-blur-sm shadow-lg transition-colors",children:St.jsx(oM,{className:"w-6 h-6"})}),St.jsx("button",{onMouseDown:()=>{g.current.shift=!0},onMouseUp:()=>{g.current.shift=!1},onTouchStart:()=>{g.current.shift=!0},onTouchEnd:()=>{g.current.shift=!1},onTouchCancel:()=>{g.current.shift=!1},className:"w-14 h-14 bg-black/40 border border-white/10 text-white/70 rounded-full flex items-center justify-center active:bg-white/20 active:text-white backdrop-blur-sm shadow-lg transition-colors",children:St.jsx(rv,{className:"w-6 h-6"})})]})]})]})]})},qA=({playerStats:o,gameState:t,onRestart:i,noiseIntensity:s})=>{const[l,c]=$t.useState(!0);$t.useEffect(()=>{const m=setInterval(()=>{c(d=>!d)},500);return()=>clearInterval(m)},[]);const h=t==="GAMEOVER",p=t==="ESCAPED";return St.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 select-none font-mono text-[#ffb000] text-sm md:text-base antialiased tracking-wider",children:[St.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.14]",style:{backgroundImage:"linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.45) 50%)",backgroundSize:"100% 4px"}}),St.jsx("div",{className:"absolute inset-0 pointer-events-none bg-radial-[circle_at_center,transparent_50%,rgba(0,0,0,0.5)_100%] border-[2px] border-black/30 rounded-[12px]"}),s>.05&&St.jsx("div",{className:"absolute left-0 right-0 h-4 bg-white/20 mix-blend-difference blur-[1px] opacity-40 pointer-events-none",style:{top:`${(Math.random()*100).toFixed(1)}%`,transform:`scaleY(${1+Math.random()*2})`,filter:`hue-rotate(${Math.random()*360}deg)`}}),St.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.06]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}),St.jsx("div",{className:"flex justify-between items-start w-full",children:St.jsxs("div",{className:"flex flex-col gap-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]",children:[St.jsxs("div",{className:"flex items-center gap-2",children:[St.jsx("span",{className:`w-3 h-3 rounded-full bg-red-600 ${l?"opacity-100":"opacity-30"}`}),St.jsx("span",{className:"text-red-500 font-bold",children:"REC"})]}),St.jsxs("div",{className:"text-xs text-white/60",children:["TAPE 01: ",(()=>{const m=new Date,d=String(m.getMonth()+1).padStart(2,"0"),_=String(m.getDate()).padStart(2,"0"),v=String(m.getFullYear()).slice(-2);return`${d}/${_}/${v}`})()]})]})}),St.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none"}),t==="PLAYING"&&St.jsxs("div",{className:"absolute top-[env(safe-area-inset-top,1.5rem)] left-[env(safe-area-inset-left,1.5rem)] right-[env(safe-area-inset-right,1.5rem)] md:static md:mt-auto flex flex-row justify-between items-start md:items-end w-auto gap-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] z-10 pointer-events-none",children:[St.jsx("div",{className:"flex flex-col gap-1.5 items-start",children:St.jsxs("div",{className:"flex items-center gap-2",children:[St.jsx("span",{className:"text-[10px] md:text-xs text-white/70 w-12 md:w-16 tracking-widest",children:"STAMINA"}),St.jsxs("div",{className:"w-24 md:w-48 h-2 md:h-3 bg-black/60 border border-white/20 p-0.5 rounded-sm overflow-hidden relative",children:[St.jsx("div",{className:"absolute inset-0 z-10 opacity-30 pointer-events-none mix-blend-overlay",style:{backgroundImage:"repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.2) 2px, rgba(255,255,255,0.2) 4px)"}}),St.jsx("div",{className:`h-full transition-all duration-300 ease-linear relative z-0 ${o.stamina>50?"bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]":o.stamina>20?"bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]":"bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)] animate-pulse"}`,style:{width:`${Math.max(0,Math.min(100,o.stamina))}%`}})]})]})}),St.jsxs("div",{className:"flex flex-col items-end gap-1 md:gap-1.5",children:[St.jsxs("div",{className:"flex items-center gap-1.5 md:gap-2",children:[St.jsx("span",{className:"text-[10px] md:text-xs text-white/70 text-right",children:"KEYS:"}),St.jsxs("span",{className:"text-[10px] md:text-sm text-cyan-400 font-bold font-mono",children:[o.keysCollected," / ",o.keysRequired]})]}),St.jsxs("div",{className:"flex items-center gap-1.5 md:gap-2",children:[St.jsx("span",{className:"text-[10px] md:text-xs text-white/70 text-right",children:"FLASHLIGHT:"}),St.jsx("span",{className:`text-[10px] md:text-sm font-mono font-bold ${o.flashlightOn?"text-[#ffb000]":"text-white/30"}`,children:o.flashlightOn?"ON":"OFF"})]}),St.jsxs("div",{className:"flex items-center gap-1.5 md:gap-2",children:[St.jsx("span",{className:"text-[10px] md:text-xs text-white/70 text-right",children:"PWR:"}),St.jsx("div",{className:"w-16 md:w-24 h-1.5 md:h-2.5 bg-black/50 border border-white/20 p-0.5 rounded-sm",children:St.jsx("div",{className:`h-full ${o.flashlightBattery<15&&!o.flashlightOn?"bg-red-500":"bg-[#ffb000]"}`,style:{width:`${Math.max(0,Math.min(100,o.flashlightBattery))}%`}})})]})]})]}),h&&St.jsxs("div",{className:"absolute inset-0 pointer-events-auto bg-black/90 flex flex-col items-center justify-center p-6 text-center z-30",children:[St.jsx("div",{className:"text-red-600 text-5xl md:text-7xl font-bold tracking-widest uppercase mb-4 animate-pulse select-none",style:{textShadow:"3px 3px 0px rgba(0,0,0,0.8), -3px -3px 0px rgba(0,0,0,0.8)"},children:"SIGNAL LOST"}),St.jsx("p",{className:"text-white/60 font-mono text-sm md:text-base max-w-lg mb-8 leading-relaxed",children:"Your camera feed has terminated unexpectedly. No rescue signals detected at this depth. Your trace has been erased from Level 0."}),St.jsx("button",{id:"retry-btn",onClick:i,className:"px-8 py-3 bg-red-700 hover:bg-red-600 text-white font-mono uppercase tracking-widest text-sm rounded border-2 border-red-500 cursor-pointer active:scale-95 transition-transform",children:"RE-ESTABLISH CONNECTION"})]}),p&&St.jsxs("div",{className:"absolute inset-0 pointer-events-auto bg-black/95 flex flex-col items-center justify-center p-6 text-center z-30",style:{animation:"fade-in 2s ease-in-out forwards"},children:[St.jsx("div",{className:"text-red-600 text-3xl md:text-5xl font-vt tracking-widest uppercase mb-8 select-none",style:{textShadow:"0 0 20px rgba(220, 38, 38, 0.6), 2px 2px 0px rgba(0,0,0,0.9)",animation:"fade-in 4s ease-in-out forwards 1.5s",opacity:0},children:"You escaped... but something followed you out."}),St.jsx("p",{className:"text-white/40 font-mono text-sm md:text-base max-w-lg mb-12 leading-relaxed",style:{animation:"fade-in 4s ease-in-out forwards 4s",opacity:0},children:"The vault doors sealed, but the scratching on the other side hasn't stopped."}),St.jsx("button",{id:"menu-btn",onClick:i,className:"px-8 py-3 bg-red-900/20 hover:bg-red-800/40 text-red-500 font-mono uppercase tracking-widest text-sm rounded border border-red-900 cursor-pointer active:scale-95 transition-all",style:{animation:"fade-in 3s ease-in-out forwards 6s",opacity:0},children:"RETURN"})]})]})};function WA(){const[o,t]=$t.useState("MENU"),[i,s]=$t.useState({sensitivity:1.5,soundVolume:.5,lowResMode:!0,difficulty:"NORMAL"}),[l,c]=$t.useState({health:100,stamina:100,flashlightBattery:100,flashlightOn:!0,sanity:100,keysCollected:0,keysRequired:3}),[h,p]=$t.useState(0),m=v=>{s(v),c({health:100,stamina:100,flashlightBattery:100,flashlightOn:!0,sanity:100,keysCollected:0,keysRequired:3}),p(0),t("PLAYING")},d=()=>{t("MENU")},_=v=>{p(v)};return St.jsx("main",{className:"w-screen h-screen bg-[#0a0a05] text-white overflow-hidden relative font-mono select-none flex items-center justify-center",children:o==="MENU"?St.jsx(EM,{onStartGame:m}):St.jsxs("div",{className:"relative w-full h-full max-w-[1024px] max-h-[768px] aspect-[4/3] bg-black overflow-hidden border-4 border-amber-600/20 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)]",children:[St.jsx(XA,{settings:i,gameState:o,setGameState:t,playerStats:l,setPlayerStats:c,onUpdateNoise:_}),St.jsx(qA,{playerStats:l,gameState:o,onRestart:d,noiseIntensity:h})]})})}tM.createRoot(document.getElementById("root")).render(St.jsx($t.StrictMode,{children:St.jsx(WA,{})}));

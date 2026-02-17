(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function ob(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var cp={exports:{}},mu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tE;function _R(){if(tE)return mu;tE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var d=null;if(u!==void 0&&(d=""+u),o.key!==void 0&&(d=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:d,ref:o!==void 0?o:null,props:u}}return mu.Fragment=e,mu.jsx=t,mu.jsxs=t,mu}var nE;function vR(){return nE||(nE=1,cp.exports=_R()),cp.exports}var A=vR(),hp={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iE;function ER(){if(iE)return be;iE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),S=Symbol.iterator;function z(M){return M===null||typeof M!="object"?null:(M=S&&M[S]||M["@@iterator"],typeof M=="function"?M:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,Z={};function ce(M,X,re){this.props=M,this.context=X,this.refs=Z,this.updater=re||Y}ce.prototype.isReactComponent={},ce.prototype.setState=function(M,X){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,X,"setState")},ce.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function fe(){}fe.prototype=ce.prototype;function ue(M,X,re){this.props=M,this.context=X,this.refs=Z,this.updater=re||Y}var ye=ue.prototype=new fe;ye.constructor=ue,ee(ye,ce.prototype),ye.isPureReactComponent=!0;var Ce=Array.isArray;function J(){}var I={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function C(M,X,re){var oe=re.ref;return{$$typeof:i,type:M,key:X,ref:oe!==void 0?oe:null,props:re}}function D(M,X){return C(M.type,X,M.props)}function O(M){return typeof M=="object"&&M!==null&&M.$$typeof===i}function V(M){var X={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(re){return X[re]})}var N=/\/+/g;function nt(M,X){return typeof M=="object"&&M!==null&&M.key!=null?V(""+M.key):X.toString(36)}function vt(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(J,J):(M.status="pending",M.then(function(X){M.status==="pending"&&(M.status="fulfilled",M.value=X)},function(X){M.status==="pending"&&(M.status="rejected",M.reason=X)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function B(M,X,re,oe,Ee){var Re=typeof M;(Re==="undefined"||Re==="boolean")&&(M=null);var je=!1;if(M===null)je=!0;else switch(Re){case"bigint":case"string":case"number":je=!0;break;case"object":switch(M.$$typeof){case i:case e:je=!0;break;case v:return je=M._init,B(je(M._payload),X,re,oe,Ee)}}if(je)return Ee=Ee(M),je=oe===""?"."+nt(M,0):oe,Ce(Ee)?(re="",je!=null&&(re=je.replace(N,"$&/")+"/"),B(Ee,X,re,"",function(js){return js})):Ee!=null&&(O(Ee)&&(Ee=D(Ee,re+(Ee.key==null||M&&M.key===Ee.key?"":(""+Ee.key).replace(N,"$&/")+"/")+je)),X.push(Ee)),1;je=0;var zt=oe===""?".":oe+":";if(Ce(M))for(var ut=0;ut<M.length;ut++)oe=M[ut],Re=zt+nt(oe,ut),je+=B(oe,X,re,Re,Ee);else if(ut=z(M),typeof ut=="function")for(M=ut.call(M),ut=0;!(oe=M.next()).done;)oe=oe.value,Re=zt+nt(oe,ut++),je+=B(oe,X,re,Re,Ee);else if(Re==="object"){if(typeof M.then=="function")return B(vt(M),X,re,oe,Ee);throw X=String(M),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return je}function ne(M,X,re){if(M==null)return M;var oe=[],Ee=0;return B(M,oe,"","",function(Re){return X.call(re,Re,Ee++)}),oe}function he(M){if(M._status===-1){var X=M._result;X=X(),X.then(function(re){(M._status===0||M._status===-1)&&(M._status=1,M._result=re)},function(re){(M._status===0||M._status===-1)&&(M._status=2,M._result=re)}),M._status===-1&&(M._status=0,M._result=X)}if(M._status===1)return M._result.default;throw M._result}var Be=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},Ye={map:ne,forEach:function(M,X,re){ne(M,function(){X.apply(this,arguments)},re)},count:function(M){var X=0;return ne(M,function(){X++}),X},toArray:function(M){return ne(M,function(X){return X})||[]},only:function(M){if(!O(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return be.Activity=T,be.Children=Ye,be.Component=ce,be.Fragment=t,be.Profiler=o,be.PureComponent=ue,be.StrictMode=s,be.Suspense=p,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,be.__COMPILER_RUNTIME={__proto__:null,c:function(M){return I.H.useMemoCache(M)}},be.cache=function(M){return function(){return M.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(M,X,re){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var oe=ee({},M.props),Ee=M.key;if(X!=null)for(Re in X.key!==void 0&&(Ee=""+X.key),X)!R.call(X,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&X.ref===void 0||(oe[Re]=X[Re]);var Re=arguments.length-2;if(Re===1)oe.children=re;else if(1<Re){for(var je=Array(Re),zt=0;zt<Re;zt++)je[zt]=arguments[zt+2];oe.children=je}return C(M.type,Ee,oe)},be.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},be.createElement=function(M,X,re){var oe,Ee={},Re=null;if(X!=null)for(oe in X.key!==void 0&&(Re=""+X.key),X)R.call(X,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(Ee[oe]=X[oe]);var je=arguments.length-2;if(je===1)Ee.children=re;else if(1<je){for(var zt=Array(je),ut=0;ut<je;ut++)zt[ut]=arguments[ut+2];Ee.children=zt}if(M&&M.defaultProps)for(oe in je=M.defaultProps,je)Ee[oe]===void 0&&(Ee[oe]=je[oe]);return C(M,Re,Ee)},be.createRef=function(){return{current:null}},be.forwardRef=function(M){return{$$typeof:m,render:M}},be.isValidElement=O,be.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:he}},be.memo=function(M,X){return{$$typeof:y,type:M,compare:X===void 0?null:X}},be.startTransition=function(M){var X=I.T,re={};I.T=re;try{var oe=M(),Ee=I.S;Ee!==null&&Ee(re,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(J,Be)}catch(Re){Be(Re)}finally{X!==null&&re.types!==null&&(X.types=re.types),I.T=X}},be.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},be.use=function(M){return I.H.use(M)},be.useActionState=function(M,X,re){return I.H.useActionState(M,X,re)},be.useCallback=function(M,X){return I.H.useCallback(M,X)},be.useContext=function(M){return I.H.useContext(M)},be.useDebugValue=function(){},be.useDeferredValue=function(M,X){return I.H.useDeferredValue(M,X)},be.useEffect=function(M,X){return I.H.useEffect(M,X)},be.useEffectEvent=function(M){return I.H.useEffectEvent(M)},be.useId=function(){return I.H.useId()},be.useImperativeHandle=function(M,X,re){return I.H.useImperativeHandle(M,X,re)},be.useInsertionEffect=function(M,X){return I.H.useInsertionEffect(M,X)},be.useLayoutEffect=function(M,X){return I.H.useLayoutEffect(M,X)},be.useMemo=function(M,X){return I.H.useMemo(M,X)},be.useOptimistic=function(M,X){return I.H.useOptimistic(M,X)},be.useReducer=function(M,X,re){return I.H.useReducer(M,X,re)},be.useRef=function(M){return I.H.useRef(M)},be.useState=function(M){return I.H.useState(M)},be.useSyncExternalStore=function(M,X,re){return I.H.useSyncExternalStore(M,X,re)},be.useTransition=function(){return I.H.useTransition()},be.version="19.2.4",be}var rE;function fg(){return rE||(rE=1,hp.exports=ER()),hp.exports}var Ne=fg();const TR=ob(Ne);var dp={exports:{}},pu={},fp={exports:{}},mp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sE;function bR(){return sE||(sE=1,(function(i){function e(B,ne){var he=B.length;B.push(ne);e:for(;0<he;){var Be=he-1>>>1,Ye=B[Be];if(0<o(Ye,ne))B[Be]=ne,B[he]=Ye,he=Be;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var ne=B[0],he=B.pop();if(he!==ne){B[0]=he;e:for(var Be=0,Ye=B.length,M=Ye>>>1;Be<M;){var X=2*(Be+1)-1,re=B[X],oe=X+1,Ee=B[oe];if(0>o(re,he))oe<Ye&&0>o(Ee,re)?(B[Be]=Ee,B[oe]=he,Be=oe):(B[Be]=re,B[X]=he,Be=X);else if(oe<Ye&&0>o(Ee,he))B[Be]=Ee,B[oe]=he,Be=oe;else break e}}return ne}function o(B,ne){var he=B.sortIndex-ne.sortIndex;return he!==0?he:B.id-ne.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,m=d.now();i.unstable_now=function(){return d.now()-m}}var p=[],y=[],v=1,T=null,S=3,z=!1,Y=!1,ee=!1,Z=!1,ce=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function ye(B){for(var ne=t(y);ne!==null;){if(ne.callback===null)s(y);else if(ne.startTime<=B)s(y),ne.sortIndex=ne.expirationTime,e(p,ne);else break;ne=t(y)}}function Ce(B){if(ee=!1,ye(B),!Y)if(t(p)!==null)Y=!0,J||(J=!0,V());else{var ne=t(y);ne!==null&&vt(Ce,ne.startTime-B)}}var J=!1,I=-1,R=5,C=-1;function D(){return Z?!0:!(i.unstable_now()-C<R)}function O(){if(Z=!1,J){var B=i.unstable_now();C=B;var ne=!0;try{e:{Y=!1,ee&&(ee=!1,fe(I),I=-1),z=!0;var he=S;try{t:{for(ye(B),T=t(p);T!==null&&!(T.expirationTime>B&&D());){var Be=T.callback;if(typeof Be=="function"){T.callback=null,S=T.priorityLevel;var Ye=Be(T.expirationTime<=B);if(B=i.unstable_now(),typeof Ye=="function"){T.callback=Ye,ye(B),ne=!0;break t}T===t(p)&&s(p),ye(B)}else s(p);T=t(p)}if(T!==null)ne=!0;else{var M=t(y);M!==null&&vt(Ce,M.startTime-B),ne=!1}}break e}finally{T=null,S=he,z=!1}ne=void 0}}finally{ne?V():J=!1}}}var V;if(typeof ue=="function")V=function(){ue(O)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,nt=N.port2;N.port1.onmessage=O,V=function(){nt.postMessage(null)}}else V=function(){ce(O,0)};function vt(B,ne){I=ce(function(){B(i.unstable_now())},ne)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function(B){switch(S){case 1:case 2:case 3:var ne=3;break;default:ne=S}var he=S;S=ne;try{return B()}finally{S=he}},i.unstable_requestPaint=function(){Z=!0},i.unstable_runWithPriority=function(B,ne){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var he=S;S=B;try{return ne()}finally{S=he}},i.unstable_scheduleCallback=function(B,ne,he){var Be=i.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?Be+he:Be):he=Be,B){case 1:var Ye=-1;break;case 2:Ye=250;break;case 5:Ye=1073741823;break;case 4:Ye=1e4;break;default:Ye=5e3}return Ye=he+Ye,B={id:v++,callback:ne,priorityLevel:B,startTime:he,expirationTime:Ye,sortIndex:-1},he>Be?(B.sortIndex=he,e(y,B),t(p)===null&&B===t(y)&&(ee?(fe(I),I=-1):ee=!0,vt(Ce,he-Be))):(B.sortIndex=Ye,e(p,B),Y||z||(Y=!0,J||(J=!0,V()))),B},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(B){var ne=S;return function(){var he=S;S=ne;try{return B.apply(this,arguments)}finally{S=he}}}})(mp)),mp}var aE;function AR(){return aE||(aE=1,fp.exports=bR()),fp.exports}var pp={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oE;function wR(){if(oE)return on;oE=1;var i=fg();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)y+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:T==null?null:""+T,children:p,containerInfo:y,implementation:v}}var d=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,on.createPortal=function(p,y){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(p,y,null,v)},on.flushSync=function(p){var y=d.T,v=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=y,s.p=v,s.d.f()}},on.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},on.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},on.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var v=y.as,T=m(v,y.crossOrigin),S=typeof y.integrity=="string"?y.integrity:void 0,z=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;v==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:z}):v==="script"&&s.d.X(p,{crossOrigin:T,integrity:S,fetchPriority:z,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},on.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var v=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},on.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var v=y.as,T=m(v,y.crossOrigin);s.d.L(p,v,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},on.preloadModule=function(p,y){if(typeof p=="string")if(y){var v=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},on.requestFormReset=function(p){s.d.r(p)},on.unstable_batchedUpdates=function(p,y){return p(y)},on.useFormState=function(p,y,v){return d.H.useFormState(p,y,v)},on.useFormStatus=function(){return d.H.useHostTransitionStatus()},on.version="19.2.4",on}var lE;function SR(){if(lE)return pp.exports;lE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),pp.exports=wR(),pp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uE;function RR(){if(uE)return pu;uE=1;var i=AR(),e=fg(),t=SR();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function d(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function m(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(s(188))}function y(n){var r=n.alternate;if(!r){if(r=u(n),r===null)throw Error(s(188));return r!==n?null:n}for(var a=n,l=r;;){var h=a.return;if(h===null)break;var f=h.alternate;if(f===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===a)return p(h),n;if(f===l)return p(h),r;f=f.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=f;else{for(var _=!1,b=h.child;b;){if(b===a){_=!0,a=h,l=f;break}if(b===l){_=!0,l=h,a=f;break}b=b.sibling}if(!_){for(b=f.child;b;){if(b===a){_=!0,a=f,l=h;break}if(b===l){_=!0,l=f,a=h;break}b=b.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:r}function v(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=v(n),r!==null)return r;n=n.sibling}return null}var T=Object.assign,S=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),fe=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var N=Symbol.for("react.client.reference");function nt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===N?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ee:return"Fragment";case ce:return"Profiler";case Z:return"StrictMode";case Ce:return"Suspense";case J:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case Y:return"Portal";case ue:return n.displayName||"Context";case fe:return(n._context.displayName||"Context")+".Consumer";case ye:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case I:return r=n.displayName||null,r!==null?r:nt(n.type)||"Memo";case R:r=n._payload,n=n._init;try{return nt(n(r))}catch{}}return null}var vt=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},Be=[],Ye=-1;function M(n){return{current:n}}function X(n){0>Ye||(n.current=Be[Ye],Be[Ye]=null,Ye--)}function re(n,r){Ye++,Be[Ye]=n.current,n.current=r}var oe=M(null),Ee=M(null),Re=M(null),je=M(null);function zt(n,r){switch(re(Re,r),re(Ee,n),re(oe,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?w0(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=w0(r),n=S0(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}X(oe),re(oe,n)}function ut(){X(oe),X(Ee),X(Re)}function js(n){n.memoizedState!==null&&re(je,n);var r=oe.current,a=S0(r,n.type);r!==a&&(re(Ee,n),re(oe,a))}function Va(n){Ee.current===n&&(X(oe),X(Ee)),je.current===n&&(X(je),cu._currentValue=he)}var La,Ua;function Ai(n){if(La===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);La=r&&r[1]||"",Ua=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+La+n+Ua}var cl=!1;function zs(n,r){if(!n||cl)return"";cl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(F){var q=F}Reflect.construct(n,[],$)}else{try{$.call()}catch(F){q=F}n.call($.prototype)}}else{try{throw Error()}catch(F){q=F}($=n())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(F){if(F&&q&&typeof F.stack=="string")return[F.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),_=f[0],b=f[1];if(_&&b){var x=_.split(`
`),j=b.split(`
`);for(h=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;h<j.length&&!j[h].includes("DetermineComponentFrameRoot");)h++;if(l===x.length||h===j.length)for(l=x.length-1,h=j.length-1;1<=l&&0<=h&&x[l]!==j[h];)h--;for(;1<=l&&0<=h;l--,h--)if(x[l]!==j[h]){if(l!==1||h!==1)do if(l--,h--,0>h||x[l]!==j[h]){var G=`
`+x[l].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=l&&0<=h);break}}}finally{cl=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Ai(a):""}function hl(n,r){switch(n.tag){case 26:case 27:case 5:return Ai(n.type);case 16:return Ai("Lazy");case 13:return n.child!==r&&r!==null?Ai("Suspense Fallback"):Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 15:return zs(n.type,!1);case 11:return zs(n.type.render,!1);case 1:return zs(n.type,!0);case 31:return Ai("Activity");default:return""}}function dl(n){try{var r="",a=null;do r+=hl(n,a),a=n,n=n.return;while(n);return r}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Rt=Object.prototype.hasOwnProperty,Bt=i.unstable_scheduleCallback,jr=i.unstable_cancelCallback,df=i.unstable_shouldYield,gc=i.unstable_requestPaint,fn=i.unstable_now,Bs=i.unstable_getCurrentPriorityLevel,fl=i.unstable_ImmediatePriority,ml=i.unstable_UserBlockingPriority,zr=i.unstable_NormalPriority,ff=i.unstable_LowPriority,yc=i.unstable_IdlePriority,_c=i.log,vc=i.unstable_setDisableYieldValue,si=null,Xt=null;function qn(n){if(typeof _c=="function"&&vc(n),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(si,n)}catch{}}var Et=Math.clz32?Math.clz32:Tc,Ec=Math.log,ja=Math.LN2;function Tc(n){return n>>>=0,n===0?32:31-(Ec(n)/ja|0)|0}var wi=256,qs=262144,It=4194304;function Si(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ri(n,r,a){var l=n.pendingLanes;if(l===0)return 0;var h=0,f=n.suspendedLanes,_=n.pingedLanes;n=n.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?h=Si(l):(_&=b,_!==0?h=Si(_):a||(a=b&~n,a!==0&&(h=Si(a))))):(b=l&~f,b!==0?h=Si(b):_!==0?h=Si(_):a||(a=l&~n,a!==0&&(h=Si(a)))),h===0?0:r!==0&&r!==h&&(r&f)===0&&(f=h&-h,a=r&-r,f>=a||f===32&&(a&4194048)!==0)?r:h}function ai(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function mf(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bc(){var n=It;return It<<=1,(It&62914560)===0&&(It=4194304),n}function Ii(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Hs(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function pf(n,r,a,l,h,f){var _=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var b=n.entanglements,x=n.expirationTimes,j=n.hiddenUpdates;for(a=_&~a;0<a;){var G=31-Et(a),$=1<<G;b[G]=0,x[G]=-1;var q=j[G];if(q!==null)for(j[G]=null,G=0;G<q.length;G++){var F=q[G];F!==null&&(F.lane&=-536870913)}a&=~$}l!==0&&Fs(n,l,0),f!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=f&~(_&~r))}function Fs(n,r,a){n.pendingLanes|=r,n.suspendedLanes&=~r;var l=31-Et(r);n.entangledLanes|=r,n.entanglements[l]=n.entanglements[l]|1073741824|a&261930}function pl(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var l=31-Et(a),h=1<<l;h&r|n[l]&r&&(n[l]|=r),a&=~h}}function gl(n,r){var a=r&-r;return a=(a&42)!==0?1:Gs(a),(a&(n.suspendedLanes|r))!==0?0:a}function Gs(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function sr(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ac(){var n=ne.p;return n!==0?n:(n=window.event,n===void 0?32:Q0(n.type))}function oi(n,r){var a=ne.p;try{return ne.p=n,r()}finally{ne.p=a}}var li=Math.random().toString(36).slice(2),Ct="__reactFiber$"+li,Gt="__reactProps$"+li,Ci="__reactContainer$"+li,za="__reactEvents$"+li,gf="__reactListeners$"+li,wc="__reactHandles$"+li,Sc="__reactResources$"+li,Ni="__reactMarker$"+li;function Ba(n){delete n[Ct],delete n[Gt],delete n[za],delete n[gf],delete n[wc]}function xi(n){var r=n[Ct];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ci]||a[Ct]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=O0(n);n!==null;){if(a=n[Ct])return a;n=O0(n)}return r}n=a,a=n.parentNode}return null}function Hn(n){if(n=n[Ct]||n[Ci]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function Cn(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function Di(n){var r=n[Sc];return r||(r=n[Sc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Nt(n){n[Ni]=!0}var yl=new Set,_l={};function Oi(n,r){ki(n,r),ki(n+"Capture",r)}function ki(n,r){for(_l[n]=r,n=0;n<r.length;n++)yl.add(r[n])}var vl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),El={},Tl={};function Rc(n){return Rt.call(Tl,n)?!0:Rt.call(El,n)?!1:vl.test(n)?Tl[n]=!0:(El[n]=!0,!1)}function qa(n,r,a){if(Rc(r))if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+a)}}function Nn(n,r,a){if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+a)}}function xt(n,r,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(r,a,""+l)}}function Kt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Br(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function bl(n,r,a){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,f=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Qe(n){if(!n._valueTracker){var r=Br(n)?"checked":"value";n._valueTracker=bl(n,r,""+n[r])}}function Ks(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return n&&(l=Br(n)?n.checked?"true":"false":n.value),n=l,n!==a?(r.setValue(n),!0):!1}function Mi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Ys=/[\n"\\]/g;function _n(n){return n.replace(Ys,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Ha(n,r,a,l,h,f,_,b){n.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?n.type=_:n.removeAttribute("type"),r!=null?_==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+Kt(r)):n.value!==""+Kt(r)&&(n.value=""+Kt(r)):_!=="submit"&&_!=="reset"||n.removeAttribute("value"),r!=null?Al(n,_,Kt(r)):a!=null?Al(n,_,Kt(a)):l!=null&&n.removeAttribute("value"),h==null&&f!=null&&(n.defaultChecked=!!f),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.name=""+Kt(b):n.removeAttribute("name")}function Ic(n,r,a,l,h,f,_,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(n.type=f),r!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||r!=null)){Qe(n);return}a=a!=null?""+Kt(a):"",r=r!=null?""+Kt(r):a,b||r===n.value||(n.value=r),n.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=b?n.checked:!!l,n.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.name=_),Qe(n)}function Al(n,r,a){r==="number"&&Mi(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function qr(n,r,a,l){if(n=n.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=r.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&l&&(n[a].defaultSelected=!0)}else{for(a=""+Kt(a),r=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,l&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Cc(n,r,a){if(r!=null&&(r=""+Kt(r),r!==n.value&&(n.value=r),a==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=a!=null?""+Kt(a):""}function Hr(n,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(vt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=Kt(r),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l),Qe(n)}function vn(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Nc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wl(n,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":l?n.setProperty(r,a):typeof a!="number"||a===0||Nc.has(r)?r==="float"?n.cssFloat=a:n[r]=(""+a).trim():n[r]=a+"px"}function Sl(n,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&a[h]!==l&&wl(n,h,l)}else for(var f in r)r.hasOwnProperty(f)&&wl(n,f,r[f])}function Fa(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ga(n){return Fr.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function ui(){}var Rl=null;function Fn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Gr=null,Pi=null;function Qs(n){var r=Hn(n);if(r&&(n=r.stateNode)){var a=n[Gt]||null;e:switch(n=r.stateNode,r.type){case"input":if(Ha(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_n(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==n&&l.form===n.form){var h=l[Gt]||null;if(!h)throw Error(s(90));Ha(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===n.form&&Ks(l)}break e;case"textarea":Cc(n,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&qr(n,!!a.multiple,r,!1)}}}var Ka=!1;function Kr(n,r,a){if(Ka)return n(r,a);Ka=!0;try{var l=n(r);return l}finally{if(Ka=!1,(Gr!==null||Pi!==null)&&(Ah(),Gr&&(r=Gr,n=Pi,Pi=Gr=null,Qs(r),n)))for(r=0;r<n.length;r++)Qs(n[r])}}function ci(n,r){var a=n.stateNode;if(a===null)return null;var l=a[Gt]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$s=!1;if(Gn)try{var We={};Object.defineProperty(We,"passive",{get:function(){$s=!0}}),window.addEventListener("test",We,We),window.removeEventListener("test",We,We)}catch{$s=!1}var Vi=null,Il=null,Xs=null;function Cl(){if(Xs)return Xs;var n,r=Il,a=r.length,l,h="value"in Vi?Vi.value:Vi.textContent,f=h.length;for(n=0;n<a&&r[n]===h[n];n++);var _=a-n;for(l=1;l<=_&&r[a-l]===h[f-l];l++);return Xs=h.slice(n,1<l?1-l:void 0)}function Ws(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ar(){return!0}function hi(){return!1}function Wt(n){function r(a,l,h,f,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var b in n)n.hasOwnProperty(b)&&(a=n[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ar:hi,this.isPropagationStopped=hi,this}return T(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),r}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=Wt(or),Yr=T({},or,{view:0,detail:0}),Nl=Wt(Yr),Qr,Ya,Ui,Qa=T({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$r,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ui&&(Ui&&n.type==="mousemove"?(Qr=n.screenX-Ui.screenX,Ya=n.screenY-Ui.screenY):Ya=Qr=0,Ui=n),Qr)},movementY:function(n){return"movementY"in n?n.movementY:Ya}}),xl=Wt(Qa),Js=T({},Qa,{dataTransfer:0}),Dc=Wt(Js),Oc=T({},Yr,{relatedTarget:0}),Zs=Wt(Oc),Dl=T({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),kc=Wt(Dl),$a=T({},or,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Mc=Wt($a),Pc=T({},or,{data:0}),ji=Wt(Pc),Vc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jc(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Uc[n])?!!r[n]:!1}function $r(){return jc}var mn=T({},Yr,{key:function(n){if(n.key){var r=Vc[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ws(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Lc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$r,charCode:function(n){return n.type==="keypress"?Ws(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ws(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),zc=Wt(mn),Bc=T({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lr=Wt(Bc),c=T({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$r}),g=Wt(c),E=T({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),w=Wt(E),L=T({},Qa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),H=Wt(L),ie=T({},or,{newState:0,oldState:0}),we=Wt(ie),Tt=[9,13,27,32],Fe=Gn&&"CompositionEvent"in window,ct=null;Gn&&"documentMode"in document&&(ct=document.documentMode);var Kn=Gn&&"TextEvent"in window&&!ct,zi=Gn&&(!Fe||ct&&8<ct&&11>=ct),di=" ",fi=!1;function ea(n,r){switch(n){case"keyup":return Tt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xa(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Wa=!1;function q1(n,r){switch(n){case"compositionend":return Xa(r);case"keypress":return r.which!==32?null:(fi=!0,di);case"textInput":return n=r.data,n===di&&fi?null:n;default:return null}}function H1(n,r){if(Wa)return n==="compositionend"||!Fe&&ea(n,r)?(n=Cl(),Xs=Il=Vi=null,Wa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return zi&&r.locale!=="ko"?null:r.data;default:return null}}var F1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Py(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!F1[n.type]:r==="textarea"}function Vy(n,r,a,l){Gr?Pi?Pi.push(l):Pi=[l]:Gr=l,r=xh(r,"onChange"),0<r.length&&(a=new Li("onChange","change",null,a,l),n.push({event:a,listeners:r}))}var Ol=null,kl=null;function G1(n){_0(n,0)}function qc(n){var r=Cn(n);if(Ks(r))return n}function Ly(n,r){if(n==="change")return r}var Uy=!1;if(Gn){var yf;if(Gn){var _f="oninput"in document;if(!_f){var jy=document.createElement("div");jy.setAttribute("oninput","return;"),_f=typeof jy.oninput=="function"}yf=_f}else yf=!1;Uy=yf&&(!document.documentMode||9<document.documentMode)}function zy(){Ol&&(Ol.detachEvent("onpropertychange",By),kl=Ol=null)}function By(n){if(n.propertyName==="value"&&qc(kl)){var r=[];Vy(r,kl,n,Fn(n)),Kr(G1,r)}}function K1(n,r,a){n==="focusin"?(zy(),Ol=r,kl=a,Ol.attachEvent("onpropertychange",By)):n==="focusout"&&zy()}function Y1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return qc(kl)}function Q1(n,r){if(n==="click")return qc(r)}function $1(n,r){if(n==="input"||n==="change")return qc(r)}function X1(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var xn=typeof Object.is=="function"?Object.is:X1;function Ml(n,r){if(xn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Rt.call(r,h)||!xn(n[h],r[h]))return!1}return!0}function qy(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hy(n,r){var a=qy(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=r&&l>=r)return{node:a,offset:r-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qy(a)}}function Fy(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Fy(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Gy(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Mi(n.document);r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Mi(n.document)}return r}function vf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var W1=Gn&&"documentMode"in document&&11>=document.documentMode,Ja=null,Ef=null,Pl=null,Tf=!1;function Ky(n,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tf||Ja==null||Ja!==Mi(l)||(l=Ja,"selectionStart"in l&&vf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Pl&&Ml(Pl,l)||(Pl=l,l=xh(Ef,"onSelect"),0<l.length&&(r=new Li("onSelect","select",null,r,a),n.push({event:r,listeners:l}),r.target=Ja)))}function ta(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Za={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionrun:ta("Transition","TransitionRun"),transitionstart:ta("Transition","TransitionStart"),transitioncancel:ta("Transition","TransitionCancel"),transitionend:ta("Transition","TransitionEnd")},bf={},Yy={};Gn&&(Yy=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function na(n){if(bf[n])return bf[n];if(!Za[n])return n;var r=Za[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Yy)return bf[n]=r[a];return n}var Qy=na("animationend"),$y=na("animationiteration"),Xy=na("animationstart"),J1=na("transitionrun"),Z1=na("transitionstart"),eS=na("transitioncancel"),Wy=na("transitionend"),Jy=new Map,Af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Af.push("scrollEnd");function mi(n,r){Jy.set(n,r),Oi(r,[n])}var Hc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Yn=[],eo=0,wf=0;function Fc(){for(var n=eo,r=wf=eo=0;r<n;){var a=Yn[r];Yn[r++]=null;var l=Yn[r];Yn[r++]=null;var h=Yn[r];Yn[r++]=null;var f=Yn[r];if(Yn[r++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}f!==0&&Zy(a,h,f)}}function Gc(n,r,a,l){Yn[eo++]=n,Yn[eo++]=r,Yn[eo++]=a,Yn[eo++]=l,wf|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Sf(n,r,a,l){return Gc(n,r,a,l),Kc(n)}function ia(n,r){return Gc(n,null,null,r),Kc(n)}function Zy(n,r,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var h=!1,f=n.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(n=f.stateNode,n===null||n._visibility&1||(h=!0)),n=f,f=f.return;return n.tag===3?(f=n.stateNode,h&&r!==null&&(h=31-Et(a),n=f.hiddenUpdates,l=n[h],l===null?n[h]=[r]:l.push(r),r.lane=a|536870912),f):null}function Kc(n){if(50<iu)throw iu=0,Mm=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var to={};function tS(n,r,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(n,r,a,l){return new tS(n,r,a,l)}function Rf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ur(n,r){var a=n.alternate;return a===null?(a=Dn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function e_(n,r){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,r=a.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Yc(n,r,a,l,h,f){var _=0;if(l=n,typeof n=="function")Rf(n)&&(_=1);else if(typeof n=="string")_=aR(n,a,oe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=Dn(31,a,r,h),n.elementType=C,n.lanes=f,n;case ee:return ra(a.children,h,f,r);case Z:_=8,h|=24;break;case ce:return n=Dn(12,a,r,h|2),n.elementType=ce,n.lanes=f,n;case Ce:return n=Dn(13,a,r,h),n.elementType=Ce,n.lanes=f,n;case J:return n=Dn(19,a,r,h),n.elementType=J,n.lanes=f,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ue:_=10;break e;case fe:_=9;break e;case ye:_=11;break e;case I:_=14;break e;case R:_=16,l=null;break e}_=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return r=Dn(_,a,r,h),r.elementType=n,r.type=l,r.lanes=f,r}function ra(n,r,a,l){return n=Dn(7,n,l,r),n.lanes=a,n}function If(n,r,a){return n=Dn(6,n,null,r),n.lanes=a,n}function t_(n){var r=Dn(18,null,null,0);return r.stateNode=n,r}function Cf(n,r,a){return r=Dn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var n_=new WeakMap;function Qn(n,r){if(typeof n=="object"&&n!==null){var a=n_.get(n);return a!==void 0?a:(r={value:n,source:r,stack:dl(r)},n_.set(n,r),r)}return{value:n,source:r,stack:dl(r)}}var no=[],io=0,Qc=null,Vl=0,$n=[],Xn=0,Xr=null,Bi=1,qi="";function cr(n,r){no[io++]=Vl,no[io++]=Qc,Qc=n,Vl=r}function i_(n,r,a){$n[Xn++]=Bi,$n[Xn++]=qi,$n[Xn++]=Xr,Xr=n;var l=Bi;n=qi;var h=32-Et(l)-1;l&=~(1<<h),a+=1;var f=32-Et(r)+h;if(30<f){var _=h-h%5;f=(l&(1<<_)-1).toString(32),l>>=_,h-=_,Bi=1<<32-Et(r)+h|a<<h|l,qi=f+n}else Bi=1<<f|a<<h|l,qi=n}function Nf(n){n.return!==null&&(cr(n,1),i_(n,1,0))}function xf(n){for(;n===Qc;)Qc=no[--io],no[io]=null,Vl=no[--io],no[io]=null;for(;n===Xr;)Xr=$n[--Xn],$n[Xn]=null,qi=$n[--Xn],$n[Xn]=null,Bi=$n[--Xn],$n[Xn]=null}function r_(n,r){$n[Xn++]=Bi,$n[Xn++]=qi,$n[Xn++]=Xr,Bi=r.id,qi=r.overflow,Xr=n}var Jt=null,rt=null,Ue=!1,Wr=null,Wn=!1,Df=Error(s(519));function Jr(n){var r=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ll(Qn(r,n)),Df}function s_(n){var r=n.stateNode,a=n.type,l=n.memoizedProps;switch(r[Ct]=n,r[Gt]=l,a){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(a=0;a<su.length;a++)De(su[a],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":De("invalid",r),Ic(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":De("invalid",r);break;case"textarea":De("invalid",r),Hr(r,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||b0(r.textContent,a)?(l.popover!=null&&(De("beforetoggle",r),De("toggle",r)),l.onScroll!=null&&De("scroll",r),l.onScrollEnd!=null&&De("scrollend",r),l.onClick!=null&&(r.onclick=ui),r=!0):r=!1,r||Jr(n,!0)}function a_(n){for(Jt=n.return;Jt;)switch(Jt.tag){case 5:case 31:case 13:Wn=!1;return;case 27:case 3:Wn=!0;return;default:Jt=Jt.return}}function ro(n){if(n!==Jt)return!1;if(!Ue)return a_(n),Ue=!0,!1;var r=n.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||$m(n.type,n.memoizedProps)),a=!a),a&&rt&&Jr(n),a_(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));rt=D0(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));rt=D0(n)}else r===27?(r=rt,ds(n.type)?(n=ep,ep=null,rt=n):rt=r):rt=Jt?Zn(n.stateNode.nextSibling):null;return!0}function sa(){rt=Jt=null,Ue=!1}function Of(){var n=Wr;return n!==null&&(An===null?An=n:An.push.apply(An,n),Wr=null),n}function Ll(n){Wr===null?Wr=[n]:Wr.push(n)}var kf=M(null),aa=null,hr=null;function Zr(n,r,a){re(kf,r._currentValue),r._currentValue=a}function dr(n){n._currentValue=kf.current,X(kf)}function Mf(n,r,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),n===a)break;n=n.return}}function Pf(n,r,a,l){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var f=h.dependencies;if(f!==null){var _=h.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=h;for(var x=0;x<r.length;x++)if(b.context===r[x]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Mf(f.return,a,n),l||(_=null);break e}f=b.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Mf(_,a,n),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===n){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function so(n,r,a,l){n=null;for(var h=r,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var b=h.type;xn(h.pendingProps.value,_.value)||(n!==null?n.push(b):n=[b])}}else if(h===je.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(cu):n=[cu])}h=h.return}n!==null&&Pf(r,n,a,l),r.flags|=262144}function $c(n){for(n=n.firstContext;n!==null;){if(!xn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function oa(n){aa=n,hr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Zt(n){return o_(aa,n)}function Xc(n,r){return aa===null&&oa(n),o_(n,r)}function o_(n,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},hr===null){if(n===null)throw Error(s(308));hr=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else hr=hr.next=r;return a}var nS=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){r.aborted=!0,n.forEach(function(a){return a()})}},iS=i.unstable_scheduleCallback,rS=i.unstable_NormalPriority,Dt={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vf(){return{controller:new nS,data:new Map,refCount:0}}function Ul(n){n.refCount--,n.refCount===0&&iS(rS,function(){n.controller.abort()})}var jl=null,Lf=0,ao=0,oo=null;function sS(n,r){if(jl===null){var a=jl=[];Lf=0,ao=zm(),oo={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Lf++,r.then(l_,l_),r}function l_(){if(--Lf===0&&jl!==null){oo!==null&&(oo.status="fulfilled");var n=jl;jl=null,ao=0,oo=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function aS(n,r){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return n.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<a.length;h++)(0,a[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var u_=B.S;B.S=function(n,r){Kv=fn(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&sS(n,r),u_!==null&&u_(n,r)};var la=M(null);function Uf(){var n=la.current;return n!==null?n:tt.pooledCache}function Wc(n,r){r===null?re(la,la.current):re(la,r.pool)}function c_(){var n=Uf();return n===null?null:{parent:Dt._currentValue,pool:n}}var lo=Error(s(460)),jf=Error(s(474)),Jc=Error(s(542)),Zc={then:function(){}};function h_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function d_(n,r,a){switch(a=n[a],a===void 0?n.push(r):a!==r&&(r.then(ui,ui),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,m_(n),n;default:if(typeof r.status=="string")r.then(ui,ui);else{if(n=tt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,m_(n),n}throw ca=r,lo}}function ua(n){try{var r=n._init;return r(n._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ca=a,lo):a}}var ca=null;function f_(){if(ca===null)throw Error(s(459));var n=ca;return ca=null,n}function m_(n){if(n===lo||n===Jc)throw Error(s(483))}var uo=null,zl=0;function eh(n){var r=zl;return zl+=1,uo===null&&(uo=[]),d_(uo,n,r)}function Bl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function th(n,r){throw r.$$typeof===S?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function p_(n){function r(P,k){if(n){var U=P.deletions;U===null?(P.deletions=[k],P.flags|=16):U.push(k)}}function a(P,k){if(!n)return null;for(;k!==null;)r(P,k),k=k.sibling;return null}function l(P){for(var k=new Map;P!==null;)P.key!==null?k.set(P.key,P):k.set(P.index,P),P=P.sibling;return k}function h(P,k){return P=ur(P,k),P.index=0,P.sibling=null,P}function f(P,k,U){return P.index=U,n?(U=P.alternate,U!==null?(U=U.index,U<k?(P.flags|=67108866,k):U):(P.flags|=67108866,k)):(P.flags|=1048576,k)}function _(P){return n&&P.alternate===null&&(P.flags|=67108866),P}function b(P,k,U,K){return k===null||k.tag!==6?(k=If(U,P.mode,K),k.return=P,k):(k=h(k,U),k.return=P,k)}function x(P,k,U,K){var me=U.type;return me===ee?G(P,k,U.props.children,K,U.key):k!==null&&(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===R&&ua(me)===k.type)?(k=h(k,U.props),Bl(k,U),k.return=P,k):(k=Yc(U.type,U.key,U.props,null,P.mode,K),Bl(k,U),k.return=P,k)}function j(P,k,U,K){return k===null||k.tag!==4||k.stateNode.containerInfo!==U.containerInfo||k.stateNode.implementation!==U.implementation?(k=Cf(U,P.mode,K),k.return=P,k):(k=h(k,U.children||[]),k.return=P,k)}function G(P,k,U,K,me){return k===null||k.tag!==7?(k=ra(U,P.mode,K,me),k.return=P,k):(k=h(k,U),k.return=P,k)}function $(P,k,U){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=If(""+k,P.mode,U),k.return=P,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case z:return U=Yc(k.type,k.key,k.props,null,P.mode,U),Bl(U,k),U.return=P,U;case Y:return k=Cf(k,P.mode,U),k.return=P,k;case R:return k=ua(k),$(P,k,U)}if(vt(k)||V(k))return k=ra(k,P.mode,U,null),k.return=P,k;if(typeof k.then=="function")return $(P,eh(k),U);if(k.$$typeof===ue)return $(P,Xc(P,k),U);th(P,k)}return null}function q(P,k,U,K){var me=k!==null?k.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return me!==null?null:b(P,k,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case z:return U.key===me?x(P,k,U,K):null;case Y:return U.key===me?j(P,k,U,K):null;case R:return U=ua(U),q(P,k,U,K)}if(vt(U)||V(U))return me!==null?null:G(P,k,U,K,null);if(typeof U.then=="function")return q(P,k,eh(U),K);if(U.$$typeof===ue)return q(P,k,Xc(P,U),K);th(P,U)}return null}function F(P,k,U,K,me){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return P=P.get(U)||null,b(k,P,""+K,me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case z:return P=P.get(K.key===null?U:K.key)||null,x(k,P,K,me);case Y:return P=P.get(K.key===null?U:K.key)||null,j(k,P,K,me);case R:return K=ua(K),F(P,k,U,K,me)}if(vt(K)||V(K))return P=P.get(U)||null,G(k,P,K,me,null);if(typeof K.then=="function")return F(P,k,U,eh(K),me);if(K.$$typeof===ue)return F(P,k,U,Xc(k,K),me);th(k,K)}return null}function le(P,k,U,K){for(var me=null,qe=null,de=k,Ie=k=0,Me=null;de!==null&&Ie<U.length;Ie++){de.index>Ie?(Me=de,de=null):Me=de.sibling;var He=q(P,de,U[Ie],K);if(He===null){de===null&&(de=Me);break}n&&de&&He.alternate===null&&r(P,de),k=f(He,k,Ie),qe===null?me=He:qe.sibling=He,qe=He,de=Me}if(Ie===U.length)return a(P,de),Ue&&cr(P,Ie),me;if(de===null){for(;Ie<U.length;Ie++)de=$(P,U[Ie],K),de!==null&&(k=f(de,k,Ie),qe===null?me=de:qe.sibling=de,qe=de);return Ue&&cr(P,Ie),me}for(de=l(de);Ie<U.length;Ie++)Me=F(de,P,Ie,U[Ie],K),Me!==null&&(n&&Me.alternate!==null&&de.delete(Me.key===null?Ie:Me.key),k=f(Me,k,Ie),qe===null?me=Me:qe.sibling=Me,qe=Me);return n&&de.forEach(function(ys){return r(P,ys)}),Ue&&cr(P,Ie),me}function ge(P,k,U,K){if(U==null)throw Error(s(151));for(var me=null,qe=null,de=k,Ie=k=0,Me=null,He=U.next();de!==null&&!He.done;Ie++,He=U.next()){de.index>Ie?(Me=de,de=null):Me=de.sibling;var ys=q(P,de,He.value,K);if(ys===null){de===null&&(de=Me);break}n&&de&&ys.alternate===null&&r(P,de),k=f(ys,k,Ie),qe===null?me=ys:qe.sibling=ys,qe=ys,de=Me}if(He.done)return a(P,de),Ue&&cr(P,Ie),me;if(de===null){for(;!He.done;Ie++,He=U.next())He=$(P,He.value,K),He!==null&&(k=f(He,k,Ie),qe===null?me=He:qe.sibling=He,qe=He);return Ue&&cr(P,Ie),me}for(de=l(de);!He.done;Ie++,He=U.next())He=F(de,P,Ie,He.value,K),He!==null&&(n&&He.alternate!==null&&de.delete(He.key===null?Ie:He.key),k=f(He,k,Ie),qe===null?me=He:qe.sibling=He,qe=He);return n&&de.forEach(function(yR){return r(P,yR)}),Ue&&cr(P,Ie),me}function et(P,k,U,K){if(typeof U=="object"&&U!==null&&U.type===ee&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case z:e:{for(var me=U.key;k!==null;){if(k.key===me){if(me=U.type,me===ee){if(k.tag===7){a(P,k.sibling),K=h(k,U.props.children),K.return=P,P=K;break e}}else if(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===R&&ua(me)===k.type){a(P,k.sibling),K=h(k,U.props),Bl(K,U),K.return=P,P=K;break e}a(P,k);break}else r(P,k);k=k.sibling}U.type===ee?(K=ra(U.props.children,P.mode,K,U.key),K.return=P,P=K):(K=Yc(U.type,U.key,U.props,null,P.mode,K),Bl(K,U),K.return=P,P=K)}return _(P);case Y:e:{for(me=U.key;k!==null;){if(k.key===me)if(k.tag===4&&k.stateNode.containerInfo===U.containerInfo&&k.stateNode.implementation===U.implementation){a(P,k.sibling),K=h(k,U.children||[]),K.return=P,P=K;break e}else{a(P,k);break}else r(P,k);k=k.sibling}K=Cf(U,P.mode,K),K.return=P,P=K}return _(P);case R:return U=ua(U),et(P,k,U,K)}if(vt(U))return le(P,k,U,K);if(V(U)){if(me=V(U),typeof me!="function")throw Error(s(150));return U=me.call(U),ge(P,k,U,K)}if(typeof U.then=="function")return et(P,k,eh(U),K);if(U.$$typeof===ue)return et(P,k,Xc(P,U),K);th(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,k!==null&&k.tag===6?(a(P,k.sibling),K=h(k,U),K.return=P,P=K):(a(P,k),K=If(U,P.mode,K),K.return=P,P=K),_(P)):a(P,k)}return function(P,k,U,K){try{zl=0;var me=et(P,k,U,K);return uo=null,me}catch(de){if(de===lo||de===Jc)throw de;var qe=Dn(29,de,null,P.mode);return qe.lanes=K,qe.return=P,qe}finally{}}}var ha=p_(!0),g_=p_(!1),es=!1;function zf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ts(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ns(n,r,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Kc(n),Zy(n,null,a),r}return Gc(n,l,r,a),Kc(n)}function ql(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,pl(n,a)}}function qf(n,r){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?h=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?h=f=r:f=f.next=r}else h=f=r;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}var Hf=!1;function Hl(){if(Hf){var n=oo;if(n!==null)throw n}}function Fl(n,r,a,l){Hf=!1;var h=n.updateQueue;es=!1;var f=h.firstBaseUpdate,_=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var x=b,j=x.next;x.next=null,_===null?f=j:_.next=j,_=x;var G=n.alternate;G!==null&&(G=G.updateQueue,b=G.lastBaseUpdate,b!==_&&(b===null?G.firstBaseUpdate=j:b.next=j,G.lastBaseUpdate=x))}if(f!==null){var $=h.baseState;_=0,G=j=x=null,b=f;do{var q=b.lane&-536870913,F=q!==b.lane;if(F?(ke&q)===q:(l&q)===q){q!==0&&q===ao&&(Hf=!0),G!==null&&(G=G.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var le=n,ge=b;q=r;var et=a;switch(ge.tag){case 1:if(le=ge.payload,typeof le=="function"){$=le.call(et,$,q);break e}$=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ge.payload,q=typeof le=="function"?le.call(et,$,q):le,q==null)break e;$=T({},$,q);break e;case 2:es=!0}}q=b.callback,q!==null&&(n.flags|=64,F&&(n.flags|=8192),F=h.callbacks,F===null?h.callbacks=[q]:F.push(q))}else F={lane:q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},G===null?(j=G=F,x=$):G=G.next=F,_|=q;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;F=b,b=F.next,F.next=null,h.lastBaseUpdate=F,h.shared.pending=null}}while(!0);G===null&&(x=$),h.baseState=x,h.firstBaseUpdate=j,h.lastBaseUpdate=G,f===null&&(h.shared.lanes=0),os|=_,n.lanes=_,n.memoizedState=$}}function y_(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function __(n,r){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)y_(a[n],r)}var co=M(null),nh=M(0);function v_(n,r){n=Tr,re(nh,n),re(co,r),Tr=n|r.baseLanes}function Ff(){re(nh,Tr),re(co,co.current)}function Gf(){Tr=nh.current,X(co),X(nh)}var On=M(null),Jn=null;function is(n){var r=n.alternate;re(bt,bt.current&1),re(On,n),Jn===null&&(r===null||co.current!==null||r.memoizedState!==null)&&(Jn=n)}function Kf(n){re(bt,bt.current),re(On,n),Jn===null&&(Jn=n)}function E_(n){n.tag===22?(re(bt,bt.current),re(On,n),Jn===null&&(Jn=n)):rs()}function rs(){re(bt,bt.current),re(On,On.current)}function kn(n){X(On),Jn===n&&(Jn=null),X(bt)}var bt=M(0);function ih(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jm(a)||Zm(a)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var fr=0,Se=null,Je=null,Ot=null,rh=!1,ho=!1,da=!1,sh=0,Gl=0,fo=null,oS=0;function pt(){throw Error(s(321))}function Yf(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!xn(n[a],r[a]))return!1;return!0}function Qf(n,r,a,l,h,f){return fr=f,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,B.H=n===null||n.memoizedState===null?iv:um,da=!1,f=a(l,h),da=!1,ho&&(f=b_(r,a,l,h)),T_(n),f}function T_(n){B.H=Ql;var r=Je!==null&&Je.next!==null;if(fr=0,Ot=Je=Se=null,rh=!1,Gl=0,fo=null,r)throw Error(s(300));n===null||kt||(n=n.dependencies,n!==null&&$c(n)&&(kt=!0))}function b_(n,r,a,l){Se=n;var h=0;do{if(ho&&(fo=null),Gl=0,ho=!1,25<=h)throw Error(s(301));if(h+=1,Ot=Je=null,n.updateQueue!=null){var f=n.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=rv,f=r(a,l)}while(ho);return f}function lS(){var n=B.H,r=n.useState()[0];return r=typeof r.then=="function"?Kl(r):r,n=n.useState()[0],(Je!==null?Je.memoizedState:null)!==n&&(Se.flags|=1024),r}function $f(){var n=sh!==0;return sh=0,n}function Xf(n,r,a){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~a}function Wf(n){if(rh){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}rh=!1}fr=0,Ot=Je=Se=null,ho=!1,Gl=sh=0,fo=null}function pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?Se.memoizedState=Ot=n:Ot=Ot.next=n,Ot}function At(){if(Je===null){var n=Se.alternate;n=n!==null?n.memoizedState:null}else n=Je.next;var r=Ot===null?Se.memoizedState:Ot.next;if(r!==null)Ot=r,Je=n;else{if(n===null)throw Se.alternate===null?Error(s(467)):Error(s(310));Je=n,n={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Ot===null?Se.memoizedState=Ot=n:Ot=Ot.next=n}return Ot}function ah(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kl(n){var r=Gl;return Gl+=1,fo===null&&(fo=[]),n=d_(fo,n,r),r=Se,(Ot===null?r.memoizedState:Ot.next)===null&&(r=r.alternate,B.H=r===null||r.memoizedState===null?iv:um),n}function oh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Kl(n);if(n.$$typeof===ue)return Zt(n)}throw Error(s(438,String(n)))}function Jf(n){var r=null,a=Se.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=ah(),Se.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(n),l=0;l<n;l++)a[l]=D;return r.index++,a}function mr(n,r){return typeof r=="function"?r(n):r}function lh(n){var r=At();return Zf(r,Je,n)}function Zf(n,r,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=n.baseQueue,f=l.pending;if(f!==null){if(h!==null){var _=h.next;h.next=f.next,f.next=_}r.baseQueue=h=f,l.pending=null}if(f=n.baseState,h===null)n.memoizedState=f;else{r=h.next;var b=_=null,x=null,j=r,G=!1;do{var $=j.lane&-536870913;if($!==j.lane?(ke&$)===$:(fr&$)===$){var q=j.revertLane;if(q===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),$===ao&&(G=!0);else if((fr&q)===q){j=j.next,q===ao&&(G=!0);continue}else $={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},x===null?(b=x=$,_=f):x=x.next=$,Se.lanes|=q,os|=q;$=j.action,da&&a(f,$),f=j.hasEagerState?j.eagerState:a(f,$)}else q={lane:$,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},x===null?(b=x=q,_=f):x=x.next=q,Se.lanes|=$,os|=$;j=j.next}while(j!==null&&j!==r);if(x===null?_=f:x.next=b,!xn(f,n.memoizedState)&&(kt=!0,G&&(a=oo,a!==null)))throw a;n.memoizedState=f,n.baseState=_,n.baseQueue=x,l.lastRenderedState=f}return h===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function em(n){var r=At(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,h=a.pending,f=r.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do f=n(f,_.action),_=_.next;while(_!==h);xn(f,r.memoizedState)||(kt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,l]}function A_(n,r,a){var l=Se,h=At(),f=Ue;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=r();var _=!xn((Je||h).memoizedState,a);if(_&&(h.memoizedState=a,kt=!0),h=h.queue,im(R_.bind(null,l,h,n),[n]),h.getSnapshot!==r||_||Ot!==null&&Ot.memoizedState.tag&1){if(l.flags|=2048,mo(9,{destroy:void 0},S_.bind(null,l,h,a,r),null),tt===null)throw Error(s(349));f||(fr&127)!==0||w_(l,r,a)}return a}function w_(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Se.updateQueue,r===null?(r=ah(),Se.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function S_(n,r,a,l){r.value=a,r.getSnapshot=l,I_(r)&&C_(n)}function R_(n,r,a){return a(function(){I_(r)&&C_(n)})}function I_(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!xn(n,a)}catch{return!0}}function C_(n){var r=ia(n,2);r!==null&&wn(r,n,2)}function tm(n){var r=pn();if(typeof n=="function"){var a=n;if(n=a(),da){qn(!0);try{a()}finally{qn(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:n},r}function N_(n,r,a,l){return n.baseState=a,Zf(n,Je,typeof l=="function"?l:mr)}function uS(n,r,a,l,h){if(hh(n))throw Error(s(485));if(n=r.action,n!==null){var f={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};B.T!==null?a(!0):f.isTransition=!1,l(f),a=r.pending,a===null?(f.next=r.pending=f,x_(r,f)):(f.next=a.next,r.pending=a.next=f)}}function x_(n,r){var a=r.action,l=r.payload,h=n.state;if(r.isTransition){var f=B.T,_={};B.T=_;try{var b=a(h,l),x=B.S;x!==null&&x(_,b),D_(n,r,b)}catch(j){nm(n,r,j)}finally{f!==null&&_.types!==null&&(f.types=_.types),B.T=f}}else try{f=a(h,l),D_(n,r,f)}catch(j){nm(n,r,j)}}function D_(n,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){O_(n,r,l)},function(l){return nm(n,r,l)}):O_(n,r,a)}function O_(n,r,a){r.status="fulfilled",r.value=a,k_(r),n.state=a,r=n.pending,r!==null&&(a=r.next,a===r?n.pending=null:(a=a.next,r.next=a,x_(n,a)))}function nm(n,r,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,k_(r),r=r.next;while(r!==l)}n.action=null}function k_(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function M_(n,r){return r}function P_(n,r){if(Ue){var a=tt.formState;if(a!==null){e:{var l=Se;if(Ue){if(rt){t:{for(var h=rt,f=Wn;h.nodeType!==8;){if(!f){h=null;break t}if(h=Zn(h.nextSibling),h===null){h=null;break t}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){rt=Zn(h.nextSibling),l=h.data==="F!";break e}}Jr(l)}l=!1}l&&(r=a[0])}}return a=pn(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:M_,lastRenderedState:r},a.queue=l,a=ev.bind(null,Se,l),l.dispatch=a,l=tm(!1),f=lm.bind(null,Se,!1,l.queue),l=pn(),h={state:r,dispatch:null,action:n,pending:null},l.queue=h,a=uS.bind(null,Se,h,f,a),h.dispatch=a,l.memoizedState=n,[r,a,!1]}function V_(n){var r=At();return L_(r,Je,n)}function L_(n,r,a){if(r=Zf(n,r,M_)[0],n=lh(mr)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=Kl(r)}catch(_){throw _===lo?Jc:_}else l=r;r=At();var h=r.queue,f=h.dispatch;return a!==r.memoizedState&&(Se.flags|=2048,mo(9,{destroy:void 0},cS.bind(null,h,a),null)),[l,f,n]}function cS(n,r){n.action=r}function U_(n){var r=At(),a=Je;if(a!==null)return L_(r,a,n);At(),r=r.memoizedState,a=At();var l=a.queue.dispatch;return a.memoizedState=n,[r,l,!1]}function mo(n,r,a,l){return n={tag:n,create:a,deps:l,inst:r,next:null},r=Se.updateQueue,r===null&&(r=ah(),Se.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,r.lastEffect=n),n}function j_(){return At().memoizedState}function uh(n,r,a,l){var h=pn();Se.flags|=n,h.memoizedState=mo(1|r,{destroy:void 0},a,l===void 0?null:l)}function ch(n,r,a,l){var h=At();l=l===void 0?null:l;var f=h.memoizedState.inst;Je!==null&&l!==null&&Yf(l,Je.memoizedState.deps)?h.memoizedState=mo(r,f,a,l):(Se.flags|=n,h.memoizedState=mo(1|r,f,a,l))}function z_(n,r){uh(8390656,8,n,r)}function im(n,r){ch(2048,8,n,r)}function hS(n){Se.flags|=4;var r=Se.updateQueue;if(r===null)r=ah(),Se.updateQueue=r,r.events=[n];else{var a=r.events;a===null?r.events=[n]:a.push(n)}}function B_(n){var r=At().memoizedState;return hS({ref:r,nextImpl:n}),function(){if((Ge&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}function q_(n,r){return ch(4,2,n,r)}function H_(n,r){return ch(4,4,n,r)}function F_(n,r){if(typeof r=="function"){n=n();var a=r(n);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function G_(n,r,a){a=a!=null?a.concat([n]):null,ch(4,4,F_.bind(null,r,n),a)}function rm(){}function K_(n,r){var a=At();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&Yf(r,l[1])?l[0]:(a.memoizedState=[n,r],n)}function Y_(n,r){var a=At();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&Yf(r,l[1]))return l[0];if(l=n(),da){qn(!0);try{n()}finally{qn(!1)}}return a.memoizedState=[l,r],l}function sm(n,r,a){return a===void 0||(fr&1073741824)!==0&&(ke&261930)===0?n.memoizedState=r:(n.memoizedState=a,n=Qv(),Se.lanes|=n,os|=n,a)}function Q_(n,r,a,l){return xn(a,r)?a:co.current!==null?(n=sm(n,a,l),xn(n,r)||(kt=!0),n):(fr&42)===0||(fr&1073741824)!==0&&(ke&261930)===0?(kt=!0,n.memoizedState=a):(n=Qv(),Se.lanes|=n,os|=n,r)}function $_(n,r,a,l,h){var f=ne.p;ne.p=f!==0&&8>f?f:8;var _=B.T,b={};B.T=b,lm(n,!1,r,a);try{var x=h(),j=B.S;if(j!==null&&j(b,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var G=aS(x,l);Yl(n,r,G,Vn(n))}else Yl(n,r,l,Vn(n))}catch($){Yl(n,r,{then:function(){},status:"rejected",reason:$},Vn())}finally{ne.p=f,_!==null&&b.types!==null&&(_.types=b.types),B.T=_}}function dS(){}function am(n,r,a,l){if(n.tag!==5)throw Error(s(476));var h=X_(n).queue;$_(n,h,r,he,a===null?dS:function(){return W_(n),a(l)})}function X_(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:he},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:a},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function W_(n){var r=X_(n);r.next===null&&(r=n.alternate.memoizedState),Yl(n,r.next.queue,{},Vn())}function om(){return Zt(cu)}function J_(){return At().memoizedState}function Z_(){return At().memoizedState}function fS(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var a=Vn();n=ts(a);var l=ns(r,n,a);l!==null&&(wn(l,r,a),ql(l,r,a)),r={cache:Vf()},n.payload=r;return}r=r.return}}function mS(n,r,a){var l=Vn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hh(n)?tv(r,a):(a=Sf(n,r,a,l),a!==null&&(wn(a,n,l),nv(a,r,l)))}function ev(n,r,a){var l=Vn();Yl(n,r,a,l)}function Yl(n,r,a,l){var h={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hh(n))tv(r,h);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var _=r.lastRenderedState,b=f(_,a);if(h.hasEagerState=!0,h.eagerState=b,xn(b,_))return Gc(n,r,h,0),tt===null&&Fc(),!1}catch{}finally{}if(a=Sf(n,r,h,l),a!==null)return wn(a,n,l),nv(a,r,l),!0}return!1}function lm(n,r,a,l){if(l={lane:2,revertLane:zm(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},hh(n)){if(r)throw Error(s(479))}else r=Sf(n,a,l,2),r!==null&&wn(r,n,2)}function hh(n){var r=n.alternate;return n===Se||r!==null&&r===Se}function tv(n,r){ho=rh=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function nv(n,r,a){if((a&4194048)!==0){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,pl(n,a)}}var Ql={readContext:Zt,use:oh,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt};Ql.useEffectEvent=pt;var iv={readContext:Zt,use:oh,useCallback:function(n,r){return pn().memoizedState=[n,r===void 0?null:r],n},useContext:Zt,useEffect:z_,useImperativeHandle:function(n,r,a){a=a!=null?a.concat([n]):null,uh(4194308,4,F_.bind(null,r,n),a)},useLayoutEffect:function(n,r){return uh(4194308,4,n,r)},useInsertionEffect:function(n,r){uh(4,2,n,r)},useMemo:function(n,r){var a=pn();r=r===void 0?null:r;var l=n();if(da){qn(!0);try{n()}finally{qn(!1)}}return a.memoizedState=[l,r],l},useReducer:function(n,r,a){var l=pn();if(a!==void 0){var h=a(r);if(da){qn(!0);try{a(r)}finally{qn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},l.queue=n,n=n.dispatch=mS.bind(null,Se,n),[l.memoizedState,n]},useRef:function(n){var r=pn();return n={current:n},r.memoizedState=n},useState:function(n){n=tm(n);var r=n.queue,a=ev.bind(null,Se,r);return r.dispatch=a,[n.memoizedState,a]},useDebugValue:rm,useDeferredValue:function(n,r){var a=pn();return sm(a,n,r)},useTransition:function(){var n=tm(!1);return n=$_.bind(null,Se,n.queue,!0,!1),pn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,a){var l=Se,h=pn();if(Ue){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),tt===null)throw Error(s(349));(ke&127)!==0||w_(l,r,a)}h.memoizedState=a;var f={value:a,getSnapshot:r};return h.queue=f,z_(R_.bind(null,l,f,n),[n]),l.flags|=2048,mo(9,{destroy:void 0},S_.bind(null,l,f,a,r),null),a},useId:function(){var n=pn(),r=tt.identifierPrefix;if(Ue){var a=qi,l=Bi;a=(l&~(1<<32-Et(l)-1)).toString(32)+a,r="_"+r+"R_"+a,a=sh++,0<a&&(r+="H"+a.toString(32)),r+="_"}else a=oS++,r="_"+r+"r_"+a.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:om,useFormState:P_,useActionState:P_,useOptimistic:function(n){var r=pn();r.memoizedState=r.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=lm.bind(null,Se,!0,a),a.dispatch=r,[n,r]},useMemoCache:Jf,useCacheRefresh:function(){return pn().memoizedState=fS.bind(null,Se)},useEffectEvent:function(n){var r=pn(),a={impl:n};return r.memoizedState=a,function(){if((Ge&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},um={readContext:Zt,use:oh,useCallback:K_,useContext:Zt,useEffect:im,useImperativeHandle:G_,useInsertionEffect:q_,useLayoutEffect:H_,useMemo:Y_,useReducer:lh,useRef:j_,useState:function(){return lh(mr)},useDebugValue:rm,useDeferredValue:function(n,r){var a=At();return Q_(a,Je.memoizedState,n,r)},useTransition:function(){var n=lh(mr)[0],r=At().memoizedState;return[typeof n=="boolean"?n:Kl(n),r]},useSyncExternalStore:A_,useId:J_,useHostTransitionStatus:om,useFormState:V_,useActionState:V_,useOptimistic:function(n,r){var a=At();return N_(a,Je,n,r)},useMemoCache:Jf,useCacheRefresh:Z_};um.useEffectEvent=B_;var rv={readContext:Zt,use:oh,useCallback:K_,useContext:Zt,useEffect:im,useImperativeHandle:G_,useInsertionEffect:q_,useLayoutEffect:H_,useMemo:Y_,useReducer:em,useRef:j_,useState:function(){return em(mr)},useDebugValue:rm,useDeferredValue:function(n,r){var a=At();return Je===null?sm(a,n,r):Q_(a,Je.memoizedState,n,r)},useTransition:function(){var n=em(mr)[0],r=At().memoizedState;return[typeof n=="boolean"?n:Kl(n),r]},useSyncExternalStore:A_,useId:J_,useHostTransitionStatus:om,useFormState:U_,useActionState:U_,useOptimistic:function(n,r){var a=At();return Je!==null?N_(a,Je,n,r):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Jf,useCacheRefresh:Z_};rv.useEffectEvent=B_;function cm(n,r,a,l){r=n.memoizedState,a=a(l,r),a=a==null?r:T({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var hm={enqueueSetState:function(n,r,a){n=n._reactInternals;var l=Vn(),h=ts(l);h.payload=r,a!=null&&(h.callback=a),r=ns(n,h,l),r!==null&&(wn(r,n,l),ql(r,n,l))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var l=Vn(),h=ts(l);h.tag=1,h.payload=r,a!=null&&(h.callback=a),r=ns(n,h,l),r!==null&&(wn(r,n,l),ql(r,n,l))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Vn(),l=ts(a);l.tag=2,r!=null&&(l.callback=r),r=ns(n,l,a),r!==null&&(wn(r,n,a),ql(r,n,a))}};function sv(n,r,a,l,h,f,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,f,_):r.prototype&&r.prototype.isPureReactComponent?!Ml(a,l)||!Ml(h,f):!0}function av(n,r,a,l){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==n&&hm.enqueueReplaceState(r,r.state,null)}function fa(n,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(n=n.defaultProps){a===r&&(a=T({},a));for(var h in n)a[h]===void 0&&(a[h]=n[h])}return a}function ov(n){Hc(n)}function lv(n){console.error(n)}function uv(n){Hc(n)}function dh(n,r){try{var a=n.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function cv(n,r,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function dm(n,r,a){return a=ts(a),a.tag=3,a.payload={element:null},a.callback=function(){dh(n,r)},a}function hv(n){return n=ts(n),n.tag=3,n}function dv(n,r,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var f=l.value;n.payload=function(){return h(f)},n.callback=function(){cv(r,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(n.callback=function(){cv(r,a,l),typeof h!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function pS(n,r,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&so(r,a,h,!0),a=On.current,a!==null){switch(a.tag){case 31:case 13:return Jn===null?wh():a.alternate===null&&gt===0&&(gt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Zc?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),Lm(n,l,h)),!1;case 22:return a.flags|=65536,l===Zc?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),Lm(n,l,h)),!1}throw Error(s(435,a.tag))}return Lm(n,l,h),wh(),!1}if(Ue)return r=On.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==Df&&(n=Error(s(422),{cause:l}),Ll(Qn(n,a)))):(l!==Df&&(r=Error(s(423),{cause:l}),Ll(Qn(r,a))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,l=Qn(l,a),h=dm(n.stateNode,l,h),qf(n,h),gt!==4&&(gt=2)),!1;var f=Error(s(520),{cause:l});if(f=Qn(f,a),nu===null?nu=[f]:nu.push(f),gt!==4&&(gt=2),r===null)return!0;l=Qn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,n=h&-h,a.lanes|=n,n=dm(a.stateNode,l,n),qf(a,n),!1;case 1:if(r=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ls===null||!ls.has(f))))return a.flags|=65536,h&=-h,a.lanes|=h,h=hv(h),dv(h,n,a,l),qf(a,h),!1}a=a.return}while(a!==null);return!1}var fm=Error(s(461)),kt=!1;function en(n,r,a,l){r.child=n===null?g_(r,null,a,l):ha(r,n.child,a,l)}function fv(n,r,a,l,h){a=a.render;var f=r.ref;if("ref"in l){var _={};for(var b in l)b!=="ref"&&(_[b]=l[b])}else _=l;return oa(r),l=Qf(n,r,a,_,f,h),b=$f(),n!==null&&!kt?(Xf(n,r,h),pr(n,r,h)):(Ue&&b&&Nf(r),r.flags|=1,en(n,r,l,h),r.child)}function mv(n,r,a,l,h){if(n===null){var f=a.type;return typeof f=="function"&&!Rf(f)&&f.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=f,pv(n,r,f,l,h)):(n=Yc(a.type,null,l,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,!Tm(n,h)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ml,a(_,l)&&n.ref===r.ref)return pr(n,r,h)}return r.flags|=1,n=ur(f,l),n.ref=r.ref,n.return=r,r.child=n}function pv(n,r,a,l,h){if(n!==null){var f=n.memoizedProps;if(Ml(f,l)&&n.ref===r.ref)if(kt=!1,r.pendingProps=l=f,Tm(n,h))(n.flags&131072)!==0&&(kt=!0);else return r.lanes=n.lanes,pr(n,r,h)}return mm(n,r,a,l,h)}function gv(n,r,a,l){var h=l.children,f=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((r.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,n!==null){for(l=r.child=n.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~f}else l=0,r.child=null;return yv(n,r,f,a,l)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Wc(r,f!==null?f.cachePool:null),f!==null?v_(r,f):Ff(),E_(r);else return l=r.lanes=536870912,yv(n,r,f!==null?f.baseLanes|a:a,a,l)}else f!==null?(Wc(r,f.cachePool),v_(r,f),rs(),r.memoizedState=null):(n!==null&&Wc(r,null),Ff(),rs());return en(n,r,h,a),r.child}function $l(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function yv(n,r,a,l,h){var f=Uf();return f=f===null?null:{parent:Dt._currentValue,pool:f},r.memoizedState={baseLanes:a,cachePool:f},n!==null&&Wc(r,null),Ff(),E_(r),n!==null&&so(n,r,l,!0),r.childLanes=h,null}function fh(n,r){return r=ph({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function _v(n,r,a){return ha(r,n.child,null,a),n=fh(r,r.pendingProps),n.flags|=2,kn(r),r.memoizedState=null,n}function gS(n,r,a){var l=r.pendingProps,h=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(Ue){if(l.mode==="hidden")return n=fh(r,l),r.lanes=536870912,$l(null,n);if(Kf(r),(n=rt)?(n=x0(n,Wn),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:Xr!==null?{id:Bi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=t_(n),a.return=r,r.child=a,Jt=r,rt=null)):n=null,n===null)throw Jr(r);return r.lanes=536870912,null}return fh(r,l)}var f=n.memoizedState;if(f!==null){var _=f.dehydrated;if(Kf(r),h)if(r.flags&256)r.flags&=-257,r=_v(n,r,a);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(s(558));else if(kt||so(n,r,a,!1),h=(a&n.childLanes)!==0,kt||h){if(l=tt,l!==null&&(_=gl(l,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ia(n,_),wn(l,n,_),fm;wh(),r=_v(n,r,a)}else n=f.treeContext,rt=Zn(_.nextSibling),Jt=r,Ue=!0,Wr=null,Wn=!1,n!==null&&r_(r,n),r=fh(r,l),r.flags|=4096;return r}return n=ur(n.child,{mode:l.mode,children:l.children}),n.ref=r.ref,r.child=n,n.return=r,n}function mh(n,r){var a=r.ref;if(a===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(r.flags|=4194816)}}function mm(n,r,a,l,h){return oa(r),a=Qf(n,r,a,l,void 0,h),l=$f(),n!==null&&!kt?(Xf(n,r,h),pr(n,r,h)):(Ue&&l&&Nf(r),r.flags|=1,en(n,r,a,h),r.child)}function vv(n,r,a,l,h,f){return oa(r),r.updateQueue=null,a=b_(r,l,a,h),T_(n),l=$f(),n!==null&&!kt?(Xf(n,r,f),pr(n,r,f)):(Ue&&l&&Nf(r),r.flags|=1,en(n,r,a,f),r.child)}function Ev(n,r,a,l,h){if(oa(r),r.stateNode===null){var f=to,_=a.contextType;typeof _=="object"&&_!==null&&(f=Zt(_)),f=new a(l,f),r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=hm,r.stateNode=f,f._reactInternals=r,f=r.stateNode,f.props=l,f.state=r.memoizedState,f.refs={},zf(r),_=a.contextType,f.context=typeof _=="object"&&_!==null?Zt(_):to,f.state=r.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(cm(r,a,_,l),f.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&hm.enqueueReplaceState(f,f.state,null),Fl(r,l,f,h),Hl(),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(n===null){f=r.stateNode;var b=r.memoizedProps,x=fa(a,b);f.props=x;var j=f.context,G=a.contextType;_=to,typeof G=="object"&&G!==null&&(_=Zt(G));var $=a.getDerivedStateFromProps;G=typeof $=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,G||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||j!==_)&&av(r,f,l,_),es=!1;var q=r.memoizedState;f.state=q,Fl(r,l,f,h),Hl(),j=r.memoizedState,b||q!==j||es?(typeof $=="function"&&(cm(r,a,$,l),j=r.memoizedState),(x=es||sv(r,a,x,l,q,j,_))?(G||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(r.flags|=4194308)):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=j),f.props=l,f.state=j,f.context=_,l=x):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{f=r.stateNode,Bf(n,r),_=r.memoizedProps,G=fa(a,_),f.props=G,$=r.pendingProps,q=f.context,j=a.contextType,x=to,typeof j=="object"&&j!==null&&(x=Zt(j)),b=a.getDerivedStateFromProps,(j=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==$||q!==x)&&av(r,f,l,x),es=!1,q=r.memoizedState,f.state=q,Fl(r,l,f,h),Hl();var F=r.memoizedState;_!==$||q!==F||es||n!==null&&n.dependencies!==null&&$c(n.dependencies)?(typeof b=="function"&&(cm(r,a,b,l),F=r.memoizedState),(G=es||sv(r,a,G,l,q,F,x)||n!==null&&n.dependencies!==null&&$c(n.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,F,x),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,F,x)),typeof f.componentDidUpdate=="function"&&(r.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=F),f.props=l,f.state=F,f.context=x,l=G):(typeof f.componentDidUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),l=!1)}return f=l,mh(n,r),l=(r.flags&128)!==0,f||l?(f=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),r.flags|=1,n!==null&&l?(r.child=ha(r,n.child,null,h),r.child=ha(r,null,a,h)):en(n,r,a,h),r.memoizedState=f.state,n=r.child):n=pr(n,r,h),n}function Tv(n,r,a,l){return sa(),r.flags|=256,en(n,r,a,l),r.child}var pm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gm(n){return{baseLanes:n,cachePool:c_()}}function ym(n,r,a){return n=n!==null?n.childLanes&~a:0,r&&(n|=Pn),n}function bv(n,r,a){var l=r.pendingProps,h=!1,f=(r.flags&128)!==0,_;if((_=f)||(_=n!==null&&n.memoizedState===null?!1:(bt.current&2)!==0),_&&(h=!0,r.flags&=-129),_=(r.flags&32)!==0,r.flags&=-33,n===null){if(Ue){if(h?is(r):rs(),(n=rt)?(n=x0(n,Wn),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:Xr!==null?{id:Bi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=t_(n),a.return=r,r.child=a,Jt=r,rt=null)):n=null,n===null)throw Jr(r);return Zm(n)?r.lanes=32:r.lanes=536870912,null}var b=l.children;return l=l.fallback,h?(rs(),h=r.mode,b=ph({mode:"hidden",children:b},h),l=ra(l,h,a,null),b.return=r,l.return=r,b.sibling=l,r.child=b,l=r.child,l.memoizedState=gm(a),l.childLanes=ym(n,_,a),r.memoizedState=pm,$l(null,l)):(is(r),_m(r,b))}var x=n.memoizedState;if(x!==null&&(b=x.dehydrated,b!==null)){if(f)r.flags&256?(is(r),r.flags&=-257,r=vm(n,r,a)):r.memoizedState!==null?(rs(),r.child=n.child,r.flags|=128,r=null):(rs(),b=l.fallback,h=r.mode,l=ph({mode:"visible",children:l.children},h),b=ra(b,h,a,null),b.flags|=2,l.return=r,b.return=r,l.sibling=b,r.child=l,ha(r,n.child,null,a),l=r.child,l.memoizedState=gm(a),l.childLanes=ym(n,_,a),r.memoizedState=pm,r=$l(null,l));else if(is(r),Zm(b)){if(_=b.nextSibling&&b.nextSibling.dataset,_)var j=_.dgst;_=j,l=Error(s(419)),l.stack="",l.digest=_,Ll({value:l,source:null,stack:null}),r=vm(n,r,a)}else if(kt||so(n,r,a,!1),_=(a&n.childLanes)!==0,kt||_){if(_=tt,_!==null&&(l=gl(_,a),l!==0&&l!==x.retryLane))throw x.retryLane=l,ia(n,l),wn(_,n,l),fm;Jm(b)||wh(),r=vm(n,r,a)}else Jm(b)?(r.flags|=192,r.child=n.child,r=null):(n=x.treeContext,rt=Zn(b.nextSibling),Jt=r,Ue=!0,Wr=null,Wn=!1,n!==null&&r_(r,n),r=_m(r,l.children),r.flags|=4096);return r}return h?(rs(),b=l.fallback,h=r.mode,x=n.child,j=x.sibling,l=ur(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,j!==null?b=ur(j,b):(b=ra(b,h,a,null),b.flags|=2),b.return=r,l.return=r,l.sibling=b,r.child=l,$l(null,l),l=r.child,b=n.child.memoizedState,b===null?b=gm(a):(h=b.cachePool,h!==null?(x=Dt._currentValue,h=h.parent!==x?{parent:x,pool:x}:h):h=c_(),b={baseLanes:b.baseLanes|a,cachePool:h}),l.memoizedState=b,l.childLanes=ym(n,_,a),r.memoizedState=pm,$l(n.child,l)):(is(r),a=n.child,n=a.sibling,a=ur(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,n!==null&&(_=r.deletions,_===null?(r.deletions=[n],r.flags|=16):_.push(n)),r.child=a,r.memoizedState=null,a)}function _m(n,r){return r=ph({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function ph(n,r){return n=Dn(22,n,null,r),n.lanes=0,n}function vm(n,r,a){return ha(r,n.child,null,a),n=_m(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Av(n,r,a){n.lanes|=r;var l=n.alternate;l!==null&&(l.lanes|=r),Mf(n.return,r,a)}function Em(n,r,a,l,h,f){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h,treeForkCount:f}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=l,_.tail=a,_.tailMode=h,_.treeForkCount=f)}function wv(n,r,a){var l=r.pendingProps,h=l.revealOrder,f=l.tail;l=l.children;var _=bt.current,b=(_&2)!==0;if(b?(_=_&1|2,r.flags|=128):_&=1,re(bt,_),en(n,r,l,a),l=Ue?Vl:0,!b&&n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Av(n,a,r);else if(n.tag===19)Av(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(h){case"forwards":for(a=r.child,h=null;a!==null;)n=a.alternate,n!==null&&ih(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),Em(r,!1,h,a,f,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&ih(n)===null){r.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Em(r,!0,a,null,f,l);break;case"together":Em(r,!1,null,null,void 0,l);break;default:r.memoizedState=null}return r.child}function pr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),os|=r.lanes,(a&r.childLanes)===0)if(n!==null){if(so(n,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,a=ur(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ur(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Tm(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&$c(n)))}function yS(n,r,a){switch(r.tag){case 3:zt(r,r.stateNode.containerInfo),Zr(r,Dt,n.memoizedState.cache),sa();break;case 27:case 5:js(r);break;case 4:zt(r,r.stateNode.containerInfo);break;case 10:Zr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,Kf(r),null;break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(is(r),r.flags|=128,null):(a&r.child.childLanes)!==0?bv(n,r,a):(is(r),n=pr(n,r,a),n!==null?n.sibling:null);is(r);break;case 19:var h=(n.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(so(n,r,a,!1),l=(a&r.childLanes)!==0),h){if(l)return wv(n,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),re(bt,bt.current),l)break;return null;case 22:return r.lanes=0,gv(n,r,a,r.pendingProps);case 24:Zr(r,Dt,n.memoizedState.cache)}return pr(n,r,a)}function Sv(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps)kt=!0;else{if(!Tm(n,a)&&(r.flags&128)===0)return kt=!1,yS(n,r,a);kt=(n.flags&131072)!==0}else kt=!1,Ue&&(r.flags&1048576)!==0&&i_(r,Vl,r.index);switch(r.lanes=0,r.tag){case 16:e:{var l=r.pendingProps;if(n=ua(r.elementType),r.type=n,typeof n=="function")Rf(n)?(l=fa(n,l),r.tag=1,r=Ev(null,r,n,l,a)):(r.tag=0,r=mm(null,r,n,l,a));else{if(n!=null){var h=n.$$typeof;if(h===ye){r.tag=11,r=fv(null,r,n,l,a);break e}else if(h===I){r.tag=14,r=mv(null,r,n,l,a);break e}}throw r=nt(n)||n,Error(s(306,r,""))}}return r;case 0:return mm(n,r,r.type,r.pendingProps,a);case 1:return l=r.type,h=fa(l,r.pendingProps),Ev(n,r,l,h,a);case 3:e:{if(zt(r,r.stateNode.containerInfo),n===null)throw Error(s(387));l=r.pendingProps;var f=r.memoizedState;h=f.element,Bf(n,r),Fl(r,l,null,a);var _=r.memoizedState;if(l=_.cache,Zr(r,Dt,l),l!==f.cache&&Pf(r,[Dt],a,!0),Hl(),l=_.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:_.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=Tv(n,r,l,a);break e}else if(l!==h){h=Qn(Error(s(424)),r),Ll(h),r=Tv(n,r,l,a);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(rt=Zn(n.firstChild),Jt=r,Ue=!0,Wr=null,Wn=!0,a=g_(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(sa(),l===h){r=pr(n,r,a);break e}en(n,r,l,a)}r=r.child}return r;case 26:return mh(n,r),n===null?(a=V0(r.type,null,r.pendingProps,null))?r.memoizedState=a:Ue||(a=r.type,n=r.pendingProps,l=Dh(Re.current).createElement(a),l[Ct]=r,l[Gt]=n,tn(l,a,n),Nt(l),r.stateNode=l):r.memoizedState=V0(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return js(r),n===null&&Ue&&(l=r.stateNode=k0(r.type,r.pendingProps,Re.current),Jt=r,Wn=!0,h=rt,ds(r.type)?(ep=h,rt=Zn(l.firstChild)):rt=h),en(n,r,r.pendingProps.children,a),mh(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Ue&&((h=l=rt)&&(l=YS(l,r.type,r.pendingProps,Wn),l!==null?(r.stateNode=l,Jt=r,rt=Zn(l.firstChild),Wn=!1,h=!0):h=!1),h||Jr(r)),js(r),h=r.type,f=r.pendingProps,_=n!==null?n.memoizedProps:null,l=f.children,$m(h,f)?l=null:_!==null&&$m(h,_)&&(r.flags|=32),r.memoizedState!==null&&(h=Qf(n,r,lS,null,null,a),cu._currentValue=h),mh(n,r),en(n,r,l,a),r.child;case 6:return n===null&&Ue&&((n=a=rt)&&(a=QS(a,r.pendingProps,Wn),a!==null?(r.stateNode=a,Jt=r,rt=null,n=!0):n=!1),n||Jr(r)),null;case 13:return bv(n,r,a);case 4:return zt(r,r.stateNode.containerInfo),l=r.pendingProps,n===null?r.child=ha(r,null,l,a):en(n,r,l,a),r.child;case 11:return fv(n,r,r.type,r.pendingProps,a);case 7:return en(n,r,r.pendingProps,a),r.child;case 8:return en(n,r,r.pendingProps.children,a),r.child;case 12:return en(n,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,Zr(r,r.type,l.value),en(n,r,l.children,a),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,oa(r),h=Zt(h),l=l(h),r.flags|=1,en(n,r,l,a),r.child;case 14:return mv(n,r,r.type,r.pendingProps,a);case 15:return pv(n,r,r.type,r.pendingProps,a);case 19:return wv(n,r,a);case 31:return gS(n,r,a);case 22:return gv(n,r,a,r.pendingProps);case 24:return oa(r),l=Zt(Dt),n===null?(h=Uf(),h===null&&(h=tt,f=Vf(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=a),h=f),r.memoizedState={parent:l,cache:h},zf(r),Zr(r,Dt,h)):((n.lanes&a)!==0&&(Bf(n,r),Fl(r,null,null,a),Hl()),h=n.memoizedState,f=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Zr(r,Dt,l)):(l=f.cache,Zr(r,Dt,l),l!==h.cache&&Pf(r,[Dt],a,!0))),en(n,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function gr(n){n.flags|=4}function bm(n,r,a,l,h){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(h&335544128)===h)if(n.stateNode.complete)n.flags|=8192;else if(Jv())n.flags|=8192;else throw ca=Zc,jf}else n.flags&=-16777217}function Rv(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!B0(r))if(Jv())n.flags|=8192;else throw ca=Zc,jf}function gh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?bc():536870912,n.lanes|=r,_o|=r)}function Xl(n,r){if(!Ue)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function st(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(r)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=l,n.childLanes=a,r}function _S(n,r,a){var l=r.pendingProps;switch(xf(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(r),null;case 1:return st(r),null;case 3:return a=r.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),dr(Dt),ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(ro(r)?gr(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Of())),st(r),null;case 26:var h=r.type,f=r.memoizedState;return n===null?(gr(r),f!==null?(st(r),Rv(r,f)):(st(r),bm(r,h,null,l,a))):f?f!==n.memoizedState?(gr(r),st(r),Rv(r,f)):(st(r),r.flags&=-16777217):(n=n.memoizedProps,n!==l&&gr(r),st(r),bm(r,h,n,l,a)),null;case 27:if(Va(r),a=Re.current,h=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&gr(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return st(r),null}n=oe.current,ro(r)?s_(r):(n=k0(h,l,a),r.stateNode=n,gr(r))}return st(r),null;case 5:if(Va(r),h=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&gr(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return st(r),null}if(f=oe.current,ro(r))s_(r);else{var _=Dh(Re.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof l.is=="string"?_.createElement("select",{is:l.is}):_.createElement("select"),l.multiple?f.multiple=!0:l.size&&(f.size=l.size);break;default:f=typeof l.is=="string"?_.createElement(h,{is:l.is}):_.createElement(h)}}f[Ct]=r,f[Gt]=l;e:for(_=r.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===r)break e;for(;_.sibling===null;){if(_.return===null||_.return===r)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}r.stateNode=f;e:switch(tn(f,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&gr(r)}}return st(r),bm(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,a),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==l&&gr(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(n=Re.current,ro(r)){if(n=r.stateNode,a=r.memoizedProps,l=null,h=Jt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}n[Ct]=r,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||b0(n.nodeValue,a)),n||Jr(r,!0)}else n=Dh(n).createTextNode(l),n[Ct]=r,r.stateNode=n}return st(r),null;case 31:if(a=r.memoizedState,n===null||n.memoizedState!==null){if(l=ro(r),a!==null){if(n===null){if(!l)throw Error(s(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(557));n[Ct]=r}else sa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;st(r),n=!1}else a=Of(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),n=!0;if(!n)return r.flags&256?(kn(r),r):(kn(r),null);if((r.flags&128)!==0)throw Error(s(558))}return st(r),null;case 13:if(l=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=ro(r),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(s(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ct]=r}else sa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;st(r),h=!1}else h=Of(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(kn(r),r):(kn(r),null)}return kn(r),(r.flags&128)!==0?(r.lanes=a,r):(a=l!==null,n=n!==null&&n.memoizedState!==null,a&&(l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),f=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==h&&(l.flags|=2048)),a!==n&&a&&(r.child.flags|=8192),gh(r,r.updateQueue),st(r),null);case 4:return ut(),n===null&&Fm(r.stateNode.containerInfo),st(r),null;case 10:return dr(r.type),st(r),null;case 19:if(X(bt),l=r.memoizedState,l===null)return st(r),null;if(h=(r.flags&128)!==0,f=l.rendering,f===null)if(h)Xl(l,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(f=ih(n),f!==null){for(r.flags|=128,Xl(l,!1),n=f.updateQueue,r.updateQueue=n,gh(r,n),r.subtreeFlags=0,n=a,a=r.child;a!==null;)e_(a,n),a=a.sibling;return re(bt,bt.current&1|2),Ue&&cr(r,l.treeForkCount),r.child}n=n.sibling}l.tail!==null&&fn()>Th&&(r.flags|=128,h=!0,Xl(l,!1),r.lanes=4194304)}else{if(!h)if(n=ih(f),n!==null){if(r.flags|=128,h=!0,n=n.updateQueue,r.updateQueue=n,gh(r,n),Xl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!f.alternate&&!Ue)return st(r),null}else 2*fn()-l.renderingStartTime>Th&&a!==536870912&&(r.flags|=128,h=!0,Xl(l,!1),r.lanes=4194304);l.isBackwards?(f.sibling=r.child,r.child=f):(n=l.last,n!==null?n.sibling=f:r.child=f,l.last=f)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=fn(),n.sibling=null,a=bt.current,re(bt,h?a&1|2:a&1),Ue&&cr(r,l.treeForkCount),n):(st(r),null);case 22:case 23:return kn(r),Gf(),l=r.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(st(r),r.subtreeFlags&6&&(r.flags|=8192)):st(r),a=r.updateQueue,a!==null&&gh(r,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),n!==null&&X(la),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),dr(Dt),st(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function vS(n,r){switch(xf(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return dr(Dt),ut(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Va(r),null;case 31:if(r.memoizedState!==null){if(kn(r),r.alternate===null)throw Error(s(340));sa()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(kn(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));sa()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return X(bt),null;case 4:return ut(),null;case 10:return dr(r.type),null;case 22:case 23:return kn(r),Gf(),n!==null&&X(la),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return dr(Dt),null;case 25:return null;default:return null}}function Iv(n,r){switch(xf(r),r.tag){case 3:dr(Dt),ut();break;case 26:case 27:case 5:Va(r);break;case 4:ut();break;case 31:r.memoizedState!==null&&kn(r);break;case 13:kn(r);break;case 19:X(bt);break;case 10:dr(r.type);break;case 22:case 23:kn(r),Gf(),n!==null&&X(la);break;case 24:dr(Dt)}}function Wl(n,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&n)===n){l=void 0;var f=a.create,_=a.inst;l=f(),_.destroy=l}a=a.next}while(a!==h)}}catch(b){Xe(r,r.return,b)}}function ss(n,r,a){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var f=h.next;l=f;do{if((l.tag&n)===n){var _=l.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,h=r;var x=a,j=b;try{j()}catch(G){Xe(h,x,G)}}}l=l.next}while(l!==f)}}catch(G){Xe(r,r.return,G)}}function Cv(n){var r=n.updateQueue;if(r!==null){var a=n.stateNode;try{__(r,a)}catch(l){Xe(n,n.return,l)}}}function Nv(n,r,a){a.props=fa(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){Xe(n,r,l)}}function Jl(n,r){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(h){Xe(n,r,h)}}function Hi(n,r){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Xe(n,r,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xe(n,r,h)}else a.current=null}function xv(n){var r=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Xe(n,n.return,h)}}function Am(n,r,a){try{var l=n.stateNode;BS(l,n.type,a,r),l[Gt]=r}catch(h){Xe(n,n.return,h)}}function Dv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ds(n.type)||n.tag===4}function wm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Dv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ds(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sm(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(n),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=ui));else if(l!==4&&(l===27&&ds(n.type)&&(a=n.stateNode,r=null),n=n.child,n!==null))for(Sm(n,r,a),n=n.sibling;n!==null;)Sm(n,r,a),n=n.sibling}function yh(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(l!==4&&(l===27&&ds(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(yh(n,r,a),n=n.sibling;n!==null;)yh(n,r,a),n=n.sibling}function Ov(n){var r=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);tn(r,l,a),r[Ct]=n,r[Gt]=a}catch(f){Xe(n,n.return,f)}}var yr=!1,Mt=!1,Rm=!1,kv=typeof WeakSet=="function"?WeakSet:Set,Yt=null;function ES(n,r){if(n=n.containerInfo,Ym=Uh,n=Gy(n),vf(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,b=-1,x=-1,j=0,G=0,$=n,q=null;t:for(;;){for(var F;$!==a||h!==0&&$.nodeType!==3||(b=_+h),$!==f||l!==0&&$.nodeType!==3||(x=_+l),$.nodeType===3&&(_+=$.nodeValue.length),(F=$.firstChild)!==null;)q=$,$=F;for(;;){if($===n)break t;if(q===a&&++j===h&&(b=_),q===f&&++G===l&&(x=_),(F=$.nextSibling)!==null)break;$=q,q=$.parentNode}$=F}a=b===-1||x===-1?null:{start:b,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qm={focusedElem:n,selectionRange:a},Uh=!1,Yt=r;Yt!==null;)if(r=Yt,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Yt=n;else for(;Yt!==null;){switch(r=Yt,f=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(a=0;a<n.length;a++)h=n[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&f!==null){n=void 0,a=r,h=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var le=fa(a.type,h);n=l.getSnapshotBeforeUpdate(le,f),l.__reactInternalSnapshotBeforeUpdate=n}catch(ge){Xe(a,a.return,ge)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,a=n.nodeType,a===9)Wm(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Wm(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,Yt=n;break}Yt=r.return}}function Mv(n,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:vr(n,a),l&4&&Wl(5,a);break;case 1:if(vr(n,a),l&4)if(n=a.stateNode,r===null)try{n.componentDidMount()}catch(_){Xe(a,a.return,_)}else{var h=fa(a.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(h,r,n.__reactInternalSnapshotBeforeUpdate)}catch(_){Xe(a,a.return,_)}}l&64&&Cv(a),l&512&&Jl(a,a.return);break;case 3:if(vr(n,a),l&64&&(n=a.updateQueue,n!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{__(n,r)}catch(_){Xe(a,a.return,_)}}break;case 27:r===null&&l&4&&Ov(a);case 26:case 5:vr(n,a),r===null&&l&4&&xv(a),l&512&&Jl(a,a.return);break;case 12:vr(n,a);break;case 31:vr(n,a),l&4&&Lv(n,a);break;case 13:vr(n,a),l&4&&Uv(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=NS.bind(null,a),$S(n,a))));break;case 22:if(l=a.memoizedState!==null||yr,!l){r=r!==null&&r.memoizedState!==null||Mt,h=yr;var f=Mt;yr=l,(Mt=r)&&!f?Er(n,a,(a.subtreeFlags&8772)!==0):vr(n,a),yr=h,Mt=f}break;case 30:break;default:vr(n,a)}}function Pv(n){var r=n.alternate;r!==null&&(n.alternate=null,Pv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Ba(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ht=null,En=!1;function _r(n,r,a){for(a=a.child;a!==null;)Vv(n,r,a),a=a.sibling}function Vv(n,r,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(si,a)}catch{}switch(a.tag){case 26:Mt||Hi(a,r),_r(n,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Mt||Hi(a,r);var l=ht,h=En;ds(a.type)&&(ht=a.stateNode,En=!1),_r(n,r,a),ou(a.stateNode),ht=l,En=h;break;case 5:Mt||Hi(a,r);case 6:if(l=ht,h=En,ht=null,_r(n,r,a),ht=l,En=h,ht!==null)if(En)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(a.stateNode)}catch(f){Xe(a,r,f)}else try{ht.removeChild(a.stateNode)}catch(f){Xe(a,r,f)}break;case 18:ht!==null&&(En?(n=ht,C0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),Ro(n)):C0(ht,a.stateNode));break;case 4:l=ht,h=En,ht=a.stateNode.containerInfo,En=!0,_r(n,r,a),ht=l,En=h;break;case 0:case 11:case 14:case 15:ss(2,a,r),Mt||ss(4,a,r),_r(n,r,a);break;case 1:Mt||(Hi(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Nv(a,r,l)),_r(n,r,a);break;case 21:_r(n,r,a);break;case 22:Mt=(l=Mt)||a.memoizedState!==null,_r(n,r,a),Mt=l;break;default:_r(n,r,a)}}function Lv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Ro(n)}catch(a){Xe(r,r.return,a)}}}function Uv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ro(n)}catch(a){Xe(r,r.return,a)}}function TS(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new kv),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new kv),r;default:throw Error(s(435,n.tag))}}function _h(n,r){var a=TS(n);r.forEach(function(l){if(!a.has(l)){a.add(l);var h=xS.bind(null,n,l);l.then(h,h)}})}function Tn(n,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],f=n,_=r,b=_;e:for(;b!==null;){switch(b.tag){case 27:if(ds(b.type)){ht=b.stateNode,En=!1;break e}break;case 5:ht=b.stateNode,En=!1;break e;case 3:case 4:ht=b.stateNode.containerInfo,En=!0;break e}b=b.return}if(ht===null)throw Error(s(160));Vv(f,_,h),ht=null,En=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)jv(r,n),r=r.sibling}var pi=null;function jv(n,r){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Tn(r,n),bn(n),l&4&&(ss(3,n,n.return),Wl(3,n),ss(5,n,n.return));break;case 1:Tn(r,n),bn(n),l&512&&(Mt||a===null||Hi(a,a.return)),l&64&&yr&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=pi;if(Tn(r,n),bn(n),l&512&&(Mt||a===null||Hi(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":f=h.getElementsByTagName("title")[0],(!f||f[Ni]||f[Ct]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(l),h.head.insertBefore(f,h.querySelector("head > title"))),tn(f,l,a),f[Ct]=n,Nt(f),l=f;break e;case"link":var _=j0("link","href",h).get(l+(a.href||""));if(_){for(var b=0;b<_.length;b++)if(f=_[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(b,1);break t}}f=h.createElement(l),tn(f,l,a),h.head.appendChild(f);break;case"meta":if(_=j0("meta","content",h).get(l+(a.content||""))){for(b=0;b<_.length;b++)if(f=_[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(b,1);break t}}f=h.createElement(l),tn(f,l,a),h.head.appendChild(f);break;default:throw Error(s(468,l))}f[Ct]=n,Nt(f),l=f}n.stateNode=l}else z0(h,n.type,n.stateNode);else n.stateNode=U0(h,l,n.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?z0(h,n.type,n.stateNode):U0(h,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Am(n,n.memoizedProps,a.memoizedProps)}break;case 27:Tn(r,n),bn(n),l&512&&(Mt||a===null||Hi(a,a.return)),a!==null&&l&4&&Am(n,n.memoizedProps,a.memoizedProps);break;case 5:if(Tn(r,n),bn(n),l&512&&(Mt||a===null||Hi(a,a.return)),n.flags&32){h=n.stateNode;try{vn(h,"")}catch(le){Xe(n,n.return,le)}}l&4&&n.stateNode!=null&&(h=n.memoizedProps,Am(n,h,a!==null?a.memoizedProps:h)),l&1024&&(Rm=!0);break;case 6:if(Tn(r,n),bn(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(le){Xe(n,n.return,le)}}break;case 3:if(Mh=null,h=pi,pi=Oh(r.containerInfo),Tn(r,n),pi=h,bn(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ro(r.containerInfo)}catch(le){Xe(n,n.return,le)}Rm&&(Rm=!1,zv(n));break;case 4:l=pi,pi=Oh(n.stateNode.containerInfo),Tn(r,n),bn(n),pi=l;break;case 12:Tn(r,n),bn(n);break;case 31:Tn(r,n),bn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,_h(n,l)));break;case 13:Tn(r,n),bn(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Eh=fn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,_h(n,l)));break;case 22:h=n.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,j=yr,G=Mt;if(yr=j||h,Mt=G||x,Tn(r,n),Mt=G,yr=j,bn(n),l&8192)e:for(r=n.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(a===null||x||yr||Mt||ma(n)),a=null,r=n;;){if(r.tag===5||r.tag===26){if(a===null){x=a=r;try{if(f=x.stateNode,h)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{b=x.stateNode;var $=x.memoizedProps.style,q=$!=null&&$.hasOwnProperty("display")?$.display:null;b.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(le){Xe(x,x.return,le)}}}else if(r.tag===6){if(a===null){x=r;try{x.stateNode.nodeValue=h?"":x.memoizedProps}catch(le){Xe(x,x.return,le)}}}else if(r.tag===18){if(a===null){x=r;try{var F=x.stateNode;h?N0(F,!0):N0(x.stateNode,!1)}catch(le){Xe(x,x.return,le)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,_h(n,a))));break;case 19:Tn(r,n),bn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,_h(n,l)));break;case 30:break;case 21:break;default:Tn(r,n),bn(n)}}function bn(n){var r=n.flags;if(r&2){try{for(var a,l=n.return;l!==null;){if(Dv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,f=wm(n);yh(n,f,h);break;case 5:var _=a.stateNode;a.flags&32&&(vn(_,""),a.flags&=-33);var b=wm(n);yh(n,b,_);break;case 3:case 4:var x=a.stateNode.containerInfo,j=wm(n);Sm(n,j,x);break;default:throw Error(s(161))}}catch(G){Xe(n,n.return,G)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function zv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;zv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function vr(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Mv(n,r.alternate,r),r=r.sibling}function ma(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:ss(4,r,r.return),ma(r);break;case 1:Hi(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&Nv(r,r.return,a),ma(r);break;case 27:ou(r.stateNode);case 26:case 5:Hi(r,r.return),ma(r);break;case 22:r.memoizedState===null&&ma(r);break;case 30:ma(r);break;default:ma(r)}n=n.sibling}}function Er(n,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=n,f=r,_=f.flags;switch(f.tag){case 0:case 11:case 15:Er(h,f,a),Wl(4,f);break;case 1:if(Er(h,f,a),l=f,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(j){Xe(l,l.return,j)}if(l=f,h=l.updateQueue,h!==null){var b=l.stateNode;try{var x=h.shared.hiddenCallbacks;if(x!==null)for(h.shared.hiddenCallbacks=null,h=0;h<x.length;h++)y_(x[h],b)}catch(j){Xe(l,l.return,j)}}a&&_&64&&Cv(f),Jl(f,f.return);break;case 27:Ov(f);case 26:case 5:Er(h,f,a),a&&l===null&&_&4&&xv(f),Jl(f,f.return);break;case 12:Er(h,f,a);break;case 31:Er(h,f,a),a&&_&4&&Lv(h,f);break;case 13:Er(h,f,a),a&&_&4&&Uv(h,f);break;case 22:f.memoizedState===null&&Er(h,f,a),Jl(f,f.return);break;case 30:break;default:Er(h,f,a)}r=r.sibling}}function Im(n,r){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Ul(a))}function Cm(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ul(n))}function gi(n,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Bv(n,r,a,l),r=r.sibling}function Bv(n,r,a,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:gi(n,r,a,l),h&2048&&Wl(9,r);break;case 1:gi(n,r,a,l);break;case 3:gi(n,r,a,l),h&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ul(n)));break;case 12:if(h&2048){gi(n,r,a,l),n=r.stateNode;try{var f=r.memoizedProps,_=f.id,b=f.onPostCommit;typeof b=="function"&&b(_,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(x){Xe(r,r.return,x)}}else gi(n,r,a,l);break;case 31:gi(n,r,a,l);break;case 13:gi(n,r,a,l);break;case 23:break;case 22:f=r.stateNode,_=r.alternate,r.memoizedState!==null?f._visibility&2?gi(n,r,a,l):Zl(n,r):f._visibility&2?gi(n,r,a,l):(f._visibility|=2,po(n,r,a,l,(r.subtreeFlags&10256)!==0||!1)),h&2048&&Im(_,r);break;case 24:gi(n,r,a,l),h&2048&&Cm(r.alternate,r);break;default:gi(n,r,a,l)}}function po(n,r,a,l,h){for(h=h&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var f=n,_=r,b=a,x=l,j=_.flags;switch(_.tag){case 0:case 11:case 15:po(f,_,b,x,h),Wl(8,_);break;case 23:break;case 22:var G=_.stateNode;_.memoizedState!==null?G._visibility&2?po(f,_,b,x,h):Zl(f,_):(G._visibility|=2,po(f,_,b,x,h)),h&&j&2048&&Im(_.alternate,_);break;case 24:po(f,_,b,x,h),h&&j&2048&&Cm(_.alternate,_);break;default:po(f,_,b,x,h)}r=r.sibling}}function Zl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=n,l=r,h=l.flags;switch(l.tag){case 22:Zl(a,l),h&2048&&Im(l.alternate,l);break;case 24:Zl(a,l),h&2048&&Cm(l.alternate,l);break;default:Zl(a,l)}r=r.sibling}}var eu=8192;function go(n,r,a){if(n.subtreeFlags&eu)for(n=n.child;n!==null;)qv(n,r,a),n=n.sibling}function qv(n,r,a){switch(n.tag){case 26:go(n,r,a),n.flags&eu&&n.memoizedState!==null&&oR(a,pi,n.memoizedState,n.memoizedProps);break;case 5:go(n,r,a);break;case 3:case 4:var l=pi;pi=Oh(n.stateNode.containerInfo),go(n,r,a),pi=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=eu,eu=16777216,go(n,r,a),eu=l):go(n,r,a));break;default:go(n,r,a)}}function Hv(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function tu(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Yt=l,Gv(l,n)}Hv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fv(n),n=n.sibling}function Fv(n){switch(n.tag){case 0:case 11:case 15:tu(n),n.flags&2048&&ss(9,n,n.return);break;case 3:tu(n);break;case 12:tu(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,vh(n)):tu(n);break;default:tu(n)}}function vh(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Yt=l,Gv(l,n)}Hv(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:ss(8,r,r.return),vh(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,vh(r));break;default:vh(r)}n=n.sibling}}function Gv(n,r){for(;Yt!==null;){var a=Yt;switch(a.tag){case 0:case 11:case 15:ss(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ul(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Yt=l;else e:for(a=n;Yt!==null;){l=Yt;var h=l.sibling,f=l.return;if(Pv(l),l===a){Yt=null;break e}if(h!==null){h.return=f,Yt=h;break e}Yt=f}}}var bS={getCacheForType:function(n){var r=Zt(Dt),a=r.data.get(n);return a===void 0&&(a=n(),r.data.set(n,a)),a},cacheSignal:function(){return Zt(Dt).controller.signal}},AS=typeof WeakMap=="function"?WeakMap:Map,Ge=0,tt=null,xe=null,ke=0,$e=0,Mn=null,as=!1,yo=!1,Nm=!1,Tr=0,gt=0,os=0,pa=0,xm=0,Pn=0,_o=0,nu=null,An=null,Dm=!1,Eh=0,Kv=0,Th=1/0,bh=null,ls=null,qt=0,us=null,vo=null,br=0,Om=0,km=null,Yv=null,iu=0,Mm=null;function Vn(){return(Ge&2)!==0&&ke!==0?ke&-ke:B.T!==null?zm():Ac()}function Qv(){if(Pn===0)if((ke&536870912)===0||Ue){var n=qs;qs<<=1,(qs&3932160)===0&&(qs=262144),Pn=n}else Pn=536870912;return n=On.current,n!==null&&(n.flags|=32),Pn}function wn(n,r,a){(n===tt&&($e===2||$e===9)||n.cancelPendingCommit!==null)&&(Eo(n,0),cs(n,ke,Pn,!1)),Hs(n,a),((Ge&2)===0||n!==tt)&&(n===tt&&((Ge&2)===0&&(pa|=a),gt===4&&cs(n,ke,Pn,!1)),Fi(n))}function $v(n,r,a){if((Ge&6)!==0)throw Error(s(327));var l=!a&&(r&127)===0&&(r&n.expiredLanes)===0||ai(n,r),h=l?RS(n,r):Vm(n,r,!0),f=l;do{if(h===0){yo&&!l&&cs(n,r,0,!1);break}else{if(a=n.current.alternate,f&&!wS(a)){h=Vm(n,r,!1),f=!1;continue}if(h===2){if(f=r,n.errorRecoveryDisabledLanes&f)var _=0;else _=n.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){r=_;e:{var b=n;h=nu;var x=b.current.memoizedState.isDehydrated;if(x&&(Eo(b,_).flags|=256),_=Vm(b,_,!1),_!==2){if(Nm&&!x){b.errorRecoveryDisabledLanes|=f,pa|=f,h=4;break e}f=An,An=h,f!==null&&(An===null?An=f:An.push.apply(An,f))}h=_}if(f=!1,h!==2)continue}}if(h===1){Eo(n,0),cs(n,r,0,!0);break}e:{switch(l=n,f=h,f){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:cs(l,r,Pn,!as);break e;case 2:An=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(h=Eh+300-fn(),10<h)){if(cs(l,r,Pn,!as),Ri(l,0,!0)!==0)break e;br=r,l.timeoutHandle=R0(Xv.bind(null,l,a,An,bh,Dm,r,Pn,pa,_o,as,f,"Throttled",-0,0),h);break e}Xv(l,a,An,bh,Dm,r,Pn,pa,_o,as,f,null,-0,0)}}break}while(!0);Fi(n)}function Xv(n,r,a,l,h,f,_,b,x,j,G,$,q,F){if(n.timeoutHandle=-1,$=r.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ui},qv(r,f,$);var le=(f&62914560)===f?Eh-fn():(f&4194048)===f?Kv-fn():0;if(le=lR($,le),le!==null){br=f,n.cancelPendingCommit=le(r0.bind(null,n,r,f,a,l,h,_,b,x,G,$,null,q,F)),cs(n,f,_,!j);return}}r0(n,r,f,a,l,h,_,b,x)}function wS(n){for(var r=n;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],f=h.getSnapshot;h=h.value;try{if(!xn(f(),h))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function cs(n,r,a,l){r&=~xm,r&=~pa,n.suspendedLanes|=r,n.pingedLanes&=~r,l&&(n.warmLanes|=r),l=n.expirationTimes;for(var h=r;0<h;){var f=31-Et(h),_=1<<f;l[f]=-1,h&=~_}a!==0&&Fs(n,a,r)}function Ah(){return(Ge&6)===0?(ru(0),!1):!0}function Pm(){if(xe!==null){if($e===0)var n=xe.return;else n=xe,hr=aa=null,Wf(n),uo=null,zl=0,n=xe;for(;n!==null;)Iv(n.alternate,n),n=n.return;xe=null}}function Eo(n,r){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,FS(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),br=0,Pm(),tt=n,xe=a=ur(n.current,null),ke=r,$e=0,Mn=null,as=!1,yo=ai(n,r),Nm=!1,_o=Pn=xm=pa=os=gt=0,An=nu=null,Dm=!1,(r&8)!==0&&(r|=r&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=r;0<l;){var h=31-Et(l),f=1<<h;r|=n[h],l&=~f}return Tr=r,Fc(),a}function Wv(n,r){Se=null,B.H=Ql,r===lo||r===Jc?(r=f_(),$e=3):r===jf?(r=f_(),$e=4):$e=r===fm?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Mn=r,xe===null&&(gt=1,dh(n,Qn(r,n.current)))}function Jv(){var n=On.current;return n===null?!0:(ke&4194048)===ke?Jn===null:(ke&62914560)===ke||(ke&536870912)!==0?n===Jn:!1}function Zv(){var n=B.H;return B.H=Ql,n===null?Ql:n}function e0(){var n=B.A;return B.A=bS,n}function wh(){gt=4,as||(ke&4194048)!==ke&&On.current!==null||(yo=!0),(os&134217727)===0&&(pa&134217727)===0||tt===null||cs(tt,ke,Pn,!1)}function Vm(n,r,a){var l=Ge;Ge|=2;var h=Zv(),f=e0();(tt!==n||ke!==r)&&(bh=null,Eo(n,r)),r=!1;var _=gt;e:do try{if($e!==0&&xe!==null){var b=xe,x=Mn;switch($e){case 8:Pm(),_=6;break e;case 3:case 2:case 9:case 6:On.current===null&&(r=!0);var j=$e;if($e=0,Mn=null,To(n,b,x,j),a&&yo){_=0;break e}break;default:j=$e,$e=0,Mn=null,To(n,b,x,j)}}SS(),_=gt;break}catch(G){Wv(n,G)}while(!0);return r&&n.shellSuspendCounter++,hr=aa=null,Ge=l,B.H=h,B.A=f,xe===null&&(tt=null,ke=0,Fc()),_}function SS(){for(;xe!==null;)t0(xe)}function RS(n,r){var a=Ge;Ge|=2;var l=Zv(),h=e0();tt!==n||ke!==r?(bh=null,Th=fn()+500,Eo(n,r)):yo=ai(n,r);e:do try{if($e!==0&&xe!==null){r=xe;var f=Mn;t:switch($e){case 1:$e=0,Mn=null,To(n,r,f,1);break;case 2:case 9:if(h_(f)){$e=0,Mn=null,n0(r);break}r=function(){$e!==2&&$e!==9||tt!==n||($e=7),Fi(n)},f.then(r,r);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:h_(f)?($e=0,Mn=null,n0(r)):($e=0,Mn=null,To(n,r,f,7));break;case 5:var _=null;switch(xe.tag){case 26:_=xe.memoizedState;case 5:case 27:var b=xe;if(_?B0(_):b.stateNode.complete){$e=0,Mn=null;var x=b.sibling;if(x!==null)xe=x;else{var j=b.return;j!==null?(xe=j,Sh(j)):xe=null}break t}}$e=0,Mn=null,To(n,r,f,5);break;case 6:$e=0,Mn=null,To(n,r,f,6);break;case 8:Pm(),gt=6;break e;default:throw Error(s(462))}}IS();break}catch(G){Wv(n,G)}while(!0);return hr=aa=null,B.H=l,B.A=h,Ge=a,xe!==null?0:(tt=null,ke=0,Fc(),gt)}function IS(){for(;xe!==null&&!df();)t0(xe)}function t0(n){var r=Sv(n.alternate,n,Tr);n.memoizedProps=n.pendingProps,r===null?Sh(n):xe=r}function n0(n){var r=n,a=r.alternate;switch(r.tag){case 15:case 0:r=vv(a,r,r.pendingProps,r.type,void 0,ke);break;case 11:r=vv(a,r,r.pendingProps,r.type.render,r.ref,ke);break;case 5:Wf(r);default:Iv(a,r),r=xe=e_(r,Tr),r=Sv(a,r,Tr)}n.memoizedProps=n.pendingProps,r===null?Sh(n):xe=r}function To(n,r,a,l){hr=aa=null,Wf(r),uo=null,zl=0;var h=r.return;try{if(pS(n,h,r,a,ke)){gt=1,dh(n,Qn(a,n.current)),xe=null;return}}catch(f){if(h!==null)throw xe=h,f;gt=1,dh(n,Qn(a,n.current)),xe=null;return}r.flags&32768?(Ue||l===1?n=!0:yo||(ke&536870912)!==0?n=!1:(as=n=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),i0(r,n)):Sh(r)}function Sh(n){var r=n;do{if((r.flags&32768)!==0){i0(r,as);return}n=r.return;var a=_S(r.alternate,r,Tr);if(a!==null){xe=a;return}if(r=r.sibling,r!==null){xe=r;return}xe=r=n}while(r!==null);gt===0&&(gt=5)}function i0(n,r){do{var a=vS(n.alternate,n);if(a!==null){a.flags&=32767,xe=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(n=n.sibling,n!==null)){xe=n;return}xe=n=a}while(n!==null);gt=6,xe=null}function r0(n,r,a,l,h,f,_,b,x){n.cancelPendingCommit=null;do Rh();while(qt!==0);if((Ge&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(f=r.lanes|r.childLanes,f|=wf,pf(n,a,f,_,b,x),n===tt&&(xe=tt=null,ke=0),vo=r,us=n,br=a,Om=f,km=h,Yv=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,DS(zr,function(){return u0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,h=ne.p,ne.p=2,_=Ge,Ge|=4;try{ES(n,r,a)}finally{Ge=_,ne.p=h,B.T=l}}qt=1,s0(),a0(),o0()}}function s0(){if(qt===1){qt=0;var n=us,r=vo,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var l=ne.p;ne.p=2;var h=Ge;Ge|=4;try{jv(r,n);var f=Qm,_=Gy(n.containerInfo),b=f.focusedElem,x=f.selectionRange;if(_!==b&&b&&b.ownerDocument&&Fy(b.ownerDocument.documentElement,b)){if(x!==null&&vf(b)){var j=x.start,G=x.end;if(G===void 0&&(G=j),"selectionStart"in b)b.selectionStart=j,b.selectionEnd=Math.min(G,b.value.length);else{var $=b.ownerDocument||document,q=$&&$.defaultView||window;if(q.getSelection){var F=q.getSelection(),le=b.textContent.length,ge=Math.min(x.start,le),et=x.end===void 0?ge:Math.min(x.end,le);!F.extend&&ge>et&&(_=et,et=ge,ge=_);var P=Hy(b,ge),k=Hy(b,et);if(P&&k&&(F.rangeCount!==1||F.anchorNode!==P.node||F.anchorOffset!==P.offset||F.focusNode!==k.node||F.focusOffset!==k.offset)){var U=$.createRange();U.setStart(P.node,P.offset),F.removeAllRanges(),ge>et?(F.addRange(U),F.extend(k.node,k.offset)):(U.setEnd(k.node,k.offset),F.addRange(U))}}}}for($=[],F=b;F=F.parentNode;)F.nodeType===1&&$.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<$.length;b++){var K=$[b];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Uh=!!Ym,Qm=Ym=null}finally{Ge=h,ne.p=l,B.T=a}}n.current=r,qt=2}}function a0(){if(qt===2){qt=0;var n=us,r=vo,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var l=ne.p;ne.p=2;var h=Ge;Ge|=4;try{Mv(n,r.alternate,r)}finally{Ge=h,ne.p=l,B.T=a}}qt=3}}function o0(){if(qt===4||qt===3){qt=0,gc();var n=us,r=vo,a=br,l=Yv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?qt=5:(qt=0,vo=us=null,l0(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(ls=null),sr(a),r=r.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(si,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=B.T,h=ne.p,ne.p=2,B.T=null;try{for(var f=n.onRecoverableError,_=0;_<l.length;_++){var b=l[_];f(b.value,{componentStack:b.stack})}}finally{B.T=r,ne.p=h}}(br&3)!==0&&Rh(),Fi(n),h=n.pendingLanes,(a&261930)!==0&&(h&42)!==0?n===Mm?iu++:(iu=0,Mm=n):iu=0,ru(0)}}function l0(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Ul(r)))}function Rh(){return s0(),a0(),o0(),u0()}function u0(){if(qt!==5)return!1;var n=us,r=Om;Om=0;var a=sr(br),l=B.T,h=ne.p;try{ne.p=32>a?32:a,B.T=null,a=km,km=null;var f=us,_=br;if(qt=0,vo=us=null,br=0,(Ge&6)!==0)throw Error(s(331));var b=Ge;if(Ge|=4,Fv(f.current),Bv(f,f.current,_,a),Ge=b,ru(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(si,f)}catch{}return!0}finally{ne.p=h,B.T=l,l0(n,r)}}function c0(n,r,a){r=Qn(a,r),r=dm(n.stateNode,r,2),n=ns(n,r,2),n!==null&&(Hs(n,2),Fi(n))}function Xe(n,r,a){if(n.tag===3)c0(n,n,a);else for(;r!==null;){if(r.tag===3){c0(r,n,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ls===null||!ls.has(l))){n=Qn(a,n),a=hv(2),l=ns(r,a,2),l!==null&&(dv(a,l,r,n),Hs(l,2),Fi(l));break}}r=r.return}}function Lm(n,r,a){var l=n.pingCache;if(l===null){l=n.pingCache=new AS;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(a)||(Nm=!0,h.add(a),n=CS.bind(null,n,r,a),r.then(n,n))}function CS(n,r,a){var l=n.pingCache;l!==null&&l.delete(r),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,tt===n&&(ke&a)===a&&(gt===4||gt===3&&(ke&62914560)===ke&&300>fn()-Eh?(Ge&2)===0&&Eo(n,0):xm|=a,_o===ke&&(_o=0)),Fi(n)}function h0(n,r){r===0&&(r=bc()),n=ia(n,r),n!==null&&(Hs(n,r),Fi(n))}function NS(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),h0(n,a)}function xS(n,r){var a=0;switch(n.tag){case 31:case 13:var l=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),h0(n,a)}function DS(n,r){return Bt(n,r)}var Ih=null,bo=null,Um=!1,Ch=!1,jm=!1,hs=0;function Fi(n){n!==bo&&n.next===null&&(bo===null?Ih=bo=n:bo=bo.next=n),Ch=!0,Um||(Um=!0,kS())}function ru(n,r){if(!jm&&Ch){jm=!0;do for(var a=!1,l=Ih;l!==null;){if(n!==0){var h=l.pendingLanes;if(h===0)var f=0;else{var _=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-Et(42|n)+1)-1,f&=h&~(_&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,p0(l,f))}else f=ke,f=Ri(l,l===tt?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||ai(l,f)||(a=!0,p0(l,f));l=l.next}while(a);jm=!1}}function OS(){d0()}function d0(){Ch=Um=!1;var n=0;hs!==0&&HS()&&(n=hs);for(var r=fn(),a=null,l=Ih;l!==null;){var h=l.next,f=f0(l,r);f===0?(l.next=null,a===null?Ih=h:a.next=h,h===null&&(bo=a)):(a=l,(n!==0||(f&3)!==0)&&(Ch=!0)),l=h}qt!==0&&qt!==5||ru(n),hs!==0&&(hs=0)}function f0(n,r){for(var a=n.suspendedLanes,l=n.pingedLanes,h=n.expirationTimes,f=n.pendingLanes&-62914561;0<f;){var _=31-Et(f),b=1<<_,x=h[_];x===-1?((b&a)===0||(b&l)!==0)&&(h[_]=mf(b,r)):x<=r&&(n.expiredLanes|=b),f&=~b}if(r=tt,a=ke,a=Ri(n,n===r?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===r&&($e===2||$e===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&jr(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||ai(n,a)){if(r=a&-a,r===n.callbackPriority)return r;switch(l!==null&&jr(l),sr(a)){case 2:case 8:a=ml;break;case 32:a=zr;break;case 268435456:a=yc;break;default:a=zr}return l=m0.bind(null,n),a=Bt(a,l),n.callbackPriority=r,n.callbackNode=a,r}return l!==null&&l!==null&&jr(l),n.callbackPriority=2,n.callbackNode=null,2}function m0(n,r){if(qt!==0&&qt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(Rh()&&n.callbackNode!==a)return null;var l=ke;return l=Ri(n,n===tt?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:($v(n,l,r),f0(n,fn()),n.callbackNode!=null&&n.callbackNode===a?m0.bind(null,n):null)}function p0(n,r){if(Rh())return null;$v(n,r,!0)}function kS(){GS(function(){(Ge&6)!==0?Bt(fl,OS):d0()})}function zm(){if(hs===0){var n=ao;n===0&&(n=wi,wi<<=1,(wi&261888)===0&&(wi=256)),hs=n}return hs}function g0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ga(""+n)}function y0(n,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,n.id&&a.setAttribute("form",n.id),r.parentNode.insertBefore(a,r),n=new FormData(n),a.parentNode.removeChild(a),n}function MS(n,r,a,l,h){if(r==="submit"&&a&&a.stateNode===h){var f=g0((h[Gt]||null).action),_=l.submitter;_&&(r=(r=_[Gt]||null)?g0(r.formAction):_.getAttribute("formAction"),r!==null&&(f=r,_=null));var b=new Li("action","action",null,l,h);n.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(hs!==0){var x=_?y0(h,_):new FormData(h);am(a,{pending:!0,data:x,method:h.method,action:f},null,x)}}else typeof f=="function"&&(b.preventDefault(),x=_?y0(h,_):new FormData(h),am(a,{pending:!0,data:x,method:h.method,action:f},f,x))},currentTarget:h}]})}}for(var Bm=0;Bm<Af.length;Bm++){var qm=Af[Bm],PS=qm.toLowerCase(),VS=qm[0].toUpperCase()+qm.slice(1);mi(PS,"on"+VS)}mi(Qy,"onAnimationEnd"),mi($y,"onAnimationIteration"),mi(Xy,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(J1,"onTransitionRun"),mi(Z1,"onTransitionStart"),mi(eS,"onTransitionCancel"),mi(Wy,"onTransitionEnd"),ki("onMouseEnter",["mouseout","mouseover"]),ki("onMouseLeave",["mouseout","mouseover"]),ki("onPointerEnter",["pointerout","pointerover"]),ki("onPointerLeave",["pointerout","pointerover"]),Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function _0(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],h=l.event;l=l.listeners;e:{var f=void 0;if(r)for(var _=l.length-1;0<=_;_--){var b=l[_],x=b.instance,j=b.currentTarget;if(b=b.listener,x!==f&&h.isPropagationStopped())break e;f=b,h.currentTarget=j;try{f(h)}catch(G){Hc(G)}h.currentTarget=null,f=x}else for(_=0;_<l.length;_++){if(b=l[_],x=b.instance,j=b.currentTarget,b=b.listener,x!==f&&h.isPropagationStopped())break e;f=b,h.currentTarget=j;try{f(h)}catch(G){Hc(G)}h.currentTarget=null,f=x}}}}function De(n,r){var a=r[za];a===void 0&&(a=r[za]=new Set);var l=n+"__bubble";a.has(l)||(v0(r,n,2,!1),a.add(l))}function Hm(n,r,a){var l=0;r&&(l|=4),v0(a,n,l,r)}var Nh="_reactListening"+Math.random().toString(36).slice(2);function Fm(n){if(!n[Nh]){n[Nh]=!0,yl.forEach(function(a){a!=="selectionchange"&&(LS.has(a)||Hm(a,!1,n),Hm(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Nh]||(r[Nh]=!0,Hm("selectionchange",!1,r))}}function v0(n,r,a,l){switch(Q0(r)){case 2:var h=hR;break;case 8:h=dR;break;default:h=sp}a=h.bind(null,r,a,n),h=void 0,!$s||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?n.addEventListener(r,a,{capture:!0,passive:h}):n.addEventListener(r,a,!0):h!==void 0?n.addEventListener(r,a,{passive:h}):n.addEventListener(r,a,!1)}function Gm(n,r,a,l,h){var f=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var b=l.stateNode.containerInfo;if(b===h)break;if(_===4)for(_=l.return;_!==null;){var x=_.tag;if((x===3||x===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;b!==null;){if(_=xi(b),_===null)return;if(x=_.tag,x===5||x===6||x===26||x===27){l=f=_;continue e}b=b.parentNode}}l=l.return}Kr(function(){var j=f,G=Fn(a),$=[];e:{var q=Jy.get(n);if(q!==void 0){var F=Li,le=n;switch(n){case"keypress":if(Ws(a)===0)break e;case"keydown":case"keyup":F=zc;break;case"focusin":le="focus",F=Zs;break;case"focusout":le="blur",F=Zs;break;case"beforeblur":case"afterblur":F=Zs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Dc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=g;break;case Qy:case $y:case Xy:F=kc;break;case Wy:F=w;break;case"scroll":case"scrollend":F=Nl;break;case"wheel":F=H;break;case"copy":case"cut":case"paste":F=Mc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=lr;break;case"toggle":case"beforetoggle":F=we}var ge=(r&4)!==0,et=!ge&&(n==="scroll"||n==="scrollend"),P=ge?q!==null?q+"Capture":null:q;ge=[];for(var k=j,U;k!==null;){var K=k;if(U=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||U===null||P===null||(K=ci(k,P),K!=null&&ge.push(au(k,K,U))),et)break;k=k.return}0<ge.length&&(q=new F(q,le,null,a,G),$.push({event:q,listeners:ge}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",F=n==="mouseout"||n==="pointerout",q&&a!==Rl&&(le=a.relatedTarget||a.fromElement)&&(xi(le)||le[Ci]))break e;if((F||q)&&(q=G.window===G?G:(q=G.ownerDocument)?q.defaultView||q.parentWindow:window,F?(le=a.relatedTarget||a.toElement,F=j,le=le?xi(le):null,le!==null&&(et=u(le),ge=le.tag,le!==et||ge!==5&&ge!==27&&ge!==6)&&(le=null)):(F=null,le=j),F!==le)){if(ge=xl,K="onMouseLeave",P="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(ge=lr,K="onPointerLeave",P="onPointerEnter",k="pointer"),et=F==null?q:Cn(F),U=le==null?q:Cn(le),q=new ge(K,k+"leave",F,a,G),q.target=et,q.relatedTarget=U,K=null,xi(G)===j&&(ge=new ge(P,k+"enter",le,a,G),ge.target=U,ge.relatedTarget=et,K=ge),et=K,F&&le)t:{for(ge=US,P=F,k=le,U=0,K=P;K;K=ge(K))U++;K=0;for(var me=k;me;me=ge(me))K++;for(;0<U-K;)P=ge(P),U--;for(;0<K-U;)k=ge(k),K--;for(;U--;){if(P===k||k!==null&&P===k.alternate){ge=P;break t}P=ge(P),k=ge(k)}ge=null}else ge=null;F!==null&&E0($,q,F,ge,!1),le!==null&&et!==null&&E0($,et,le,ge,!0)}}e:{if(q=j?Cn(j):window,F=q.nodeName&&q.nodeName.toLowerCase(),F==="select"||F==="input"&&q.type==="file")var qe=Ly;else if(Py(q))if(Uy)qe=$1;else{qe=Y1;var de=K1}else F=q.nodeName,!F||F.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?j&&Fa(j.elementType)&&(qe=Ly):qe=Q1;if(qe&&(qe=qe(n,j))){Vy($,qe,a,G);break e}de&&de(n,q,j),n==="focusout"&&j&&q.type==="number"&&j.memoizedProps.value!=null&&Al(q,"number",q.value)}switch(de=j?Cn(j):window,n){case"focusin":(Py(de)||de.contentEditable==="true")&&(Ja=de,Ef=j,Pl=null);break;case"focusout":Pl=Ef=Ja=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,Ky($,a,G);break;case"selectionchange":if(W1)break;case"keydown":case"keyup":Ky($,a,G)}var Ie;if(Fe)e:{switch(n){case"compositionstart":var Me="onCompositionStart";break e;case"compositionend":Me="onCompositionEnd";break e;case"compositionupdate":Me="onCompositionUpdate";break e}Me=void 0}else Wa?ea(n,a)&&(Me="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(zi&&a.locale!=="ko"&&(Wa||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Wa&&(Ie=Cl()):(Vi=G,Il="value"in Vi?Vi.value:Vi.textContent,Wa=!0)),de=xh(j,Me),0<de.length&&(Me=new ji(Me,n,null,a,G),$.push({event:Me,listeners:de}),Ie?Me.data=Ie:(Ie=Xa(a),Ie!==null&&(Me.data=Ie)))),(Ie=Kn?q1(n,a):H1(n,a))&&(Me=xh(j,"onBeforeInput"),0<Me.length&&(de=new ji("onBeforeInput","beforeinput",null,a,G),$.push({event:de,listeners:Me}),de.data=Ie)),MS($,n,j,a,G)}_0($,r)})}function au(n,r,a){return{instance:n,listener:r,currentTarget:a}}function xh(n,r){for(var a=r+"Capture",l=[];n!==null;){var h=n,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=ci(n,a),h!=null&&l.unshift(au(n,h,f)),h=ci(n,r),h!=null&&l.push(au(n,h,f))),n.tag===3)return l;n=n.return}return[]}function US(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function E0(n,r,a,l,h){for(var f=r._reactName,_=[];a!==null&&a!==l;){var b=a,x=b.alternate,j=b.stateNode;if(b=b.tag,x!==null&&x===l)break;b!==5&&b!==26&&b!==27||j===null||(x=j,h?(j=ci(a,f),j!=null&&_.unshift(au(a,j,x))):h||(j=ci(a,f),j!=null&&_.push(au(a,j,x)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var jS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function T0(n){return(typeof n=="string"?n:""+n).replace(jS,`
`).replace(zS,"")}function b0(n,r){return r=T0(r),T0(n)===r}function Ze(n,r,a,l,h,f){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||vn(n,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&vn(n,""+l);break;case"className":Nn(n,"class",l);break;case"tabIndex":Nn(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Nn(n,a,l);break;case"style":Sl(n,l,f);break;case"data":if(r!=="object"){Nn(n,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Ga(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(r!=="input"&&Ze(n,r,"name",h.name,h,null),Ze(n,r,"formEncType",h.formEncType,h,null),Ze(n,r,"formMethod",h.formMethod,h,null),Ze(n,r,"formTarget",h.formTarget,h,null)):(Ze(n,r,"encType",h.encType,h,null),Ze(n,r,"method",h.method,h,null),Ze(n,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Ga(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=ui);break;case"onScroll":l!=null&&De("scroll",n);break;case"onScrollEnd":l!=null&&De("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=Ga(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":De("beforetoggle",n),De("toggle",n),qa(n,"popover",l);break;case"xlinkActuate":xt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":xt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":xt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":xt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":xt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":xt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":xt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":xt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":xt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":qa(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xc.get(a)||a,qa(n,a,l))}}function Km(n,r,a,l,h,f){switch(a){case"style":Sl(n,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?vn(n,l):(typeof l=="number"||typeof l=="bigint")&&vn(n,""+l);break;case"onScroll":l!=null&&De("scroll",n);break;case"onScrollEnd":l!=null&&De("scrollend",n);break;case"onClick":l!=null&&(n.onclick=ui);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_l.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),r=a.slice(2,h?a.length-7:void 0),f=n[Gt]||null,f=f!=null?f[a]:null,typeof f=="function"&&n.removeEventListener(r,f,h),typeof l=="function")){typeof f!="function"&&f!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(r,l,h);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):qa(n,a,l)}}}function tn(n,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",n),De("load",n);var l=!1,h=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Ze(n,r,f,_,a,null)}}h&&Ze(n,r,"srcSet",a.srcSet,a,null),l&&Ze(n,r,"src",a.src,a,null);return;case"input":De("invalid",n);var b=f=_=h=null,x=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":_=G;break;case"checked":x=G;break;case"defaultChecked":j=G;break;case"value":f=G;break;case"defaultValue":b=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:Ze(n,r,l,G,a,null)}}Ic(n,f,b,x,j,_,h,!1);return;case"select":De("invalid",n),l=_=f=null;for(h in a)if(a.hasOwnProperty(h)&&(b=a[h],b!=null))switch(h){case"value":f=b;break;case"defaultValue":_=b;break;case"multiple":l=b;default:Ze(n,r,h,b,a,null)}r=f,a=_,n.multiple=!!l,r!=null?qr(n,!!l,r,!1):a!=null&&qr(n,!!l,a,!0);return;case"textarea":De("invalid",n),f=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(b=a[_],b!=null))switch(_){case"value":l=b;break;case"defaultValue":h=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ze(n,r,_,b,a,null)}Hr(n,l,h,f);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(l=a[x],l!=null))switch(x){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ze(n,r,x,l,a,null)}return;case"dialog":De("beforetoggle",n),De("toggle",n),De("cancel",n),De("close",n);break;case"iframe":case"object":De("load",n);break;case"video":case"audio":for(l=0;l<su.length;l++)De(su[l],n);break;case"image":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"embed":case"source":case"link":De("error",n),De("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Ze(n,r,j,l,a,null)}return;default:if(Fa(r)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&Km(n,r,G,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&Ze(n,r,b,l,a,null))}function BS(n,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,_=null,b=null,x=null,j=null,G=null;for(F in a){var $=a[F];if(a.hasOwnProperty(F)&&$!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":x=$;default:l.hasOwnProperty(F)||Ze(n,r,F,null,l,$)}}for(var q in l){var F=l[q];if($=a[q],l.hasOwnProperty(q)&&(F!=null||$!=null))switch(q){case"type":f=F;break;case"name":h=F;break;case"checked":j=F;break;case"defaultChecked":G=F;break;case"value":_=F;break;case"defaultValue":b=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==$&&Ze(n,r,q,F,l,$)}}Ha(n,_,b,x,j,G,f,h);return;case"select":F=_=b=q=null;for(f in a)if(x=a[f],a.hasOwnProperty(f)&&x!=null)switch(f){case"value":break;case"multiple":F=x;default:l.hasOwnProperty(f)||Ze(n,r,f,null,l,x)}for(h in l)if(f=l[h],x=a[h],l.hasOwnProperty(h)&&(f!=null||x!=null))switch(h){case"value":q=f;break;case"defaultValue":b=f;break;case"multiple":_=f;default:f!==x&&Ze(n,r,h,f,l,x)}r=b,a=_,l=F,q!=null?qr(n,!!a,q,!1):!!l!=!!a&&(r!=null?qr(n,!!a,r,!0):qr(n,!!a,a?[]:"",!1));return;case"textarea":F=q=null;for(b in a)if(h=a[b],a.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ze(n,r,b,null,l,h)}for(_ in l)if(h=l[_],f=a[_],l.hasOwnProperty(_)&&(h!=null||f!=null))switch(_){case"value":q=h;break;case"defaultValue":F=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==f&&Ze(n,r,_,h,l,f)}Cc(n,q,F);return;case"option":for(var le in a)if(q=a[le],a.hasOwnProperty(le)&&q!=null&&!l.hasOwnProperty(le))switch(le){case"selected":n.selected=!1;break;default:Ze(n,r,le,null,l,q)}for(x in l)if(q=l[x],F=a[x],l.hasOwnProperty(x)&&q!==F&&(q!=null||F!=null))switch(x){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Ze(n,r,x,q,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)q=a[ge],a.hasOwnProperty(ge)&&q!=null&&!l.hasOwnProperty(ge)&&Ze(n,r,ge,null,l,q);for(j in l)if(q=l[j],F=a[j],l.hasOwnProperty(j)&&q!==F&&(q!=null||F!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:Ze(n,r,j,q,l,F)}return;default:if(Fa(r)){for(var et in a)q=a[et],a.hasOwnProperty(et)&&q!==void 0&&!l.hasOwnProperty(et)&&Km(n,r,et,void 0,l,q);for(G in l)q=l[G],F=a[G],!l.hasOwnProperty(G)||q===F||q===void 0&&F===void 0||Km(n,r,G,q,l,F);return}}for(var P in a)q=a[P],a.hasOwnProperty(P)&&q!=null&&!l.hasOwnProperty(P)&&Ze(n,r,P,null,l,q);for($ in l)q=l[$],F=a[$],!l.hasOwnProperty($)||q===F||q==null&&F==null||Ze(n,r,$,q,l,F)}function A0(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qS(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var h=a[l],f=h.transferSize,_=h.initiatorType,b=h.duration;if(f&&b&&A0(_)){for(_=0,b=h.responseEnd,l+=1;l<a.length;l++){var x=a[l],j=x.startTime;if(j>b)break;var G=x.transferSize,$=x.initiatorType;G&&A0($)&&(x=x.responseEnd,_+=G*(x<b?1:(b-j)/(x-j)))}if(--l,r+=8*(f+_)/(h.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Ym=null,Qm=null;function Dh(n){return n.nodeType===9?n:n.ownerDocument}function w0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function $m(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Xm=null;function HS(){var n=window.event;return n&&n.type==="popstate"?n===Xm?!1:(Xm=n,!0):(Xm=null,!1)}var R0=typeof setTimeout=="function"?setTimeout:void 0,FS=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,GS=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(n){return I0.resolve(null).then(n).catch(KS)}:R0;function KS(n){setTimeout(function(){throw n})}function ds(n){return n==="head"}function C0(n,r){var a=r,l=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(l===0){n.removeChild(h),Ro(r);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")ou(n.ownerDocument.documentElement);else if(a==="head"){a=n.ownerDocument.head,ou(a);for(var f=a.firstChild;f;){var _=f.nextSibling,b=f.nodeName;f[Ni]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&ou(n.ownerDocument.body);a=h}while(a);Ro(r)}function N0(n,r){var a=n;n=0;do{var l=a.nextSibling;if(a.nodeType===1?r?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(r?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(n===0)break;n--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||n++;a=l}while(a)}function Wm(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wm(a),Ba(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function YS(n,r,a,l){for(;n.nodeType===1;){var h=a;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Ni])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(f=n.getAttribute("rel"),f==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(f!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(f=n.getAttribute("src"),(f!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===f)return n}else return n;if(n=Zn(n.nextSibling),n===null)break}return null}function QS(n,r,a){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Zn(n.nextSibling),n===null))return null;return n}function x0(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=Zn(n.nextSibling),n===null))return null;return n}function Jm(n){return n.data==="$?"||n.data==="$~"}function Zm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function $S(n,r){var a=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||a.readyState!=="loading")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function Zn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var ep=null;function D0(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"||a==="/&"){if(r===0)return Zn(n.nextSibling);r--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||r++}n=n.nextSibling}return null}function O0(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(r===0)return n;r--}else a!=="/$"&&a!=="/&"||r++}n=n.previousSibling}return null}function k0(n,r,a){switch(r=Dh(a),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function ou(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Ba(n)}var ei=new Map,M0=new Set;function Oh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ar=ne.d;ne.d={f:XS,r:WS,D:JS,C:ZS,L:eR,m:tR,X:iR,S:nR,M:rR};function XS(){var n=Ar.f(),r=Ah();return n||r}function WS(n){var r=Hn(n);r!==null&&r.tag===5&&r.type==="form"?W_(r):Ar.r(n)}var Ao=typeof document>"u"?null:document;function P0(n,r,a){var l=Ao;if(l&&typeof r=="string"&&r){var h=_n(r);h='link[rel="'+n+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),M0.has(h)||(M0.add(h),n={rel:n,crossOrigin:a,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),tn(r,"link",n),Nt(r),l.head.appendChild(r)))}}function JS(n){Ar.D(n),P0("dns-prefetch",n,null)}function ZS(n,r){Ar.C(n,r),P0("preconnect",n,r)}function eR(n,r,a){Ar.L(n,r,a);var l=Ao;if(l&&n&&r){var h='link[rel="preload"][as="'+_n(r)+'"]';r==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+_n(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+_n(a.imageSizes)+'"]')):h+='[href="'+_n(n)+'"]';var f=h;switch(r){case"style":f=wo(n);break;case"script":f=So(n)}ei.has(f)||(n=T({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:n,as:r},a),ei.set(f,n),l.querySelector(h)!==null||r==="style"&&l.querySelector(lu(f))||r==="script"&&l.querySelector(uu(f))||(r=l.createElement("link"),tn(r,"link",n),Nt(r),l.head.appendChild(r)))}}function tR(n,r){Ar.m(n,r);var a=Ao;if(a&&n){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+_n(l)+'"][href="'+_n(n)+'"]',f=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=So(n)}if(!ei.has(f)&&(n=T({rel:"modulepreload",href:n},r),ei.set(f,n),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(uu(f)))return}l=a.createElement("link"),tn(l,"link",n),Nt(l),a.head.appendChild(l)}}}function nR(n,r,a){Ar.S(n,r,a);var l=Ao;if(l&&n){var h=Di(l).hoistableStyles,f=wo(n);r=r||"default";var _=h.get(f);if(!_){var b={loading:0,preload:null};if(_=l.querySelector(lu(f)))b.loading=5;else{n=T({rel:"stylesheet",href:n,"data-precedence":r},a),(a=ei.get(f))&&tp(n,a);var x=_=l.createElement("link");Nt(x),tn(x,"link",n),x._p=new Promise(function(j,G){x.onload=j,x.onerror=G}),x.addEventListener("load",function(){b.loading|=1}),x.addEventListener("error",function(){b.loading|=2}),b.loading|=4,kh(_,r,l)}_={type:"stylesheet",instance:_,count:1,state:b},h.set(f,_)}}}function iR(n,r){Ar.X(n,r);var a=Ao;if(a&&n){var l=Di(a).hoistableScripts,h=So(n),f=l.get(h);f||(f=a.querySelector(uu(h)),f||(n=T({src:n,async:!0},r),(r=ei.get(h))&&np(n,r),f=a.createElement("script"),Nt(f),tn(f,"link",n),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function rR(n,r){Ar.M(n,r);var a=Ao;if(a&&n){var l=Di(a).hoistableScripts,h=So(n),f=l.get(h);f||(f=a.querySelector(uu(h)),f||(n=T({src:n,async:!0,type:"module"},r),(r=ei.get(h))&&np(n,r),f=a.createElement("script"),Nt(f),tn(f,"link",n),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function V0(n,r,a,l){var h=(h=Re.current)?Oh(h):null;if(!h)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=wo(a.href),a=Di(h).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=wo(a.href);var f=Di(h).hoistableStyles,_=f.get(n);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(n,_),(f=h.querySelector(lu(n)))&&!f._p&&(_.instance=f,_.state.loading=5),ei.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ei.set(n,a),f||sR(h,n,a,_.state))),r&&l===null)throw Error(s(528,""));return _}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=So(a),a=Di(h).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function wo(n){return'href="'+_n(n)+'"'}function lu(n){return'link[rel="stylesheet"]['+n+"]"}function L0(n){return T({},n,{"data-precedence":n.precedence,precedence:null})}function sR(n,r,a,l){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=n.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),tn(r,"link",a),Nt(r),n.head.appendChild(r))}function So(n){return'[src="'+_n(n)+'"]'}function uu(n){return"script[async]"+n}function U0(n,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=n.querySelector('style[data-href~="'+_n(a.href)+'"]');if(l)return r.instance=l,Nt(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Nt(l),tn(l,"style",h),kh(l,a.precedence,n),r.instance=l;case"stylesheet":h=wo(a.href);var f=n.querySelector(lu(h));if(f)return r.state.loading|=4,r.instance=f,Nt(f),f;l=L0(a),(h=ei.get(h))&&tp(l,h),f=(n.ownerDocument||n).createElement("link"),Nt(f);var _=f;return _._p=new Promise(function(b,x){_.onload=b,_.onerror=x}),tn(f,"link",l),r.state.loading|=4,kh(f,a.precedence,n),r.instance=f;case"script":return f=So(a.src),(h=n.querySelector(uu(f)))?(r.instance=h,Nt(h),h):(l=a,(h=ei.get(f))&&(l=T({},a),np(l,h)),n=n.ownerDocument||n,h=n.createElement("script"),Nt(h),tn(h,"link",l),n.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,kh(l,a.precedence,n));return r.instance}function kh(n,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,f=h,_=0;_<l.length;_++){var b=l[_];if(b.dataset.precedence===r)f=b;else if(f!==h)break}f?f.parentNode.insertBefore(n,f.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(n,r.firstChild))}function tp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function np(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Mh=null;function j0(n,r,a){if(Mh===null){var l=new Map,h=Mh=new Map;h.set(a,l)}else h=Mh,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),h=0;h<a.length;h++){var f=a[h];if(!(f[Ni]||f[Ct]||n==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(r)||"";_=n+_;var b=l.get(_);b?b.push(f):l.set(_,[f])}}return l}function z0(n,r,a){n=n.ownerDocument||n,n.head.insertBefore(a,r==="title"?n.querySelector("head > title"):null)}function aR(n,r,a){if(a===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function B0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function oR(n,r,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=wo(l.href),f=r.querySelector(lu(h));if(f){r=f._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=Ph.bind(n),r.then(n,n)),a.state.loading|=4,a.instance=f,Nt(f);return}f=r.ownerDocument||r,l=L0(l),(h=ei.get(h))&&tp(l,h),f=f.createElement("link"),Nt(f);var _=f;_._p=new Promise(function(b,x){_.onload=b,_.onerror=x}),tn(f,"link",l),a.instance=f}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(a,r),(r=a.state.preload)&&(a.state.loading&3)===0&&(n.count++,a=Ph.bind(n),r.addEventListener("load",a),r.addEventListener("error",a))}}var ip=0;function lR(n,r){return n.stylesheets&&n.count===0&&Lh(n,n.stylesheets),0<n.count||0<n.imgCount?function(a){var l=setTimeout(function(){if(n.stylesheets&&Lh(n,n.stylesheets),n.unsuspend){var f=n.unsuspend;n.unsuspend=null,f()}},6e4+r);0<n.imgBytes&&ip===0&&(ip=62500*qS());var h=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Lh(n,n.stylesheets),n.unsuspend)){var f=n.unsuspend;n.unsuspend=null,f()}},(n.imgBytes>ip?50:800)+r);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Ph(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Vh=null;function Lh(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Vh=new Map,r.forEach(uR,n),Vh=null,Ph.call(n))}function uR(n,r){if(!(r.state.loading&4)){var a=Vh.get(n);if(a)var l=a.get(null);else{a=new Map,Vh.set(n,a);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var _=h[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=r.instance,_=h.getAttribute("data-precedence"),f=a.get(_)||l,f===l&&a.set(null,h),a.set(_,h),this.count++,l=Ph.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),f?f.parentNode.insertBefore(h,f.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),r.state.loading|=4}}var cu={$$typeof:ue,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function cR(n,r,a,l,h,f,_,b,x){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ii(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.hiddenUpdates=Ii(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function q0(n,r,a,l,h,f,_,b,x,j,G,$){return n=new cR(n,r,a,_,x,j,G,$,b),r=1,f===!0&&(r|=24),f=Dn(3,null,null,r),n.current=f,f.stateNode=n,r=Vf(),r.refCount++,n.pooledCache=r,r.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:r},zf(f),n}function H0(n){return n?(n=to,n):to}function F0(n,r,a,l,h,f){h=H0(h),l.context===null?l.context=h:l.pendingContext=h,l=ts(r),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=ns(n,l,r),a!==null&&(wn(a,n,r),ql(a,n,r))}function G0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function rp(n,r){G0(n,r),(n=n.alternate)&&G0(n,r)}function K0(n){if(n.tag===13||n.tag===31){var r=ia(n,67108864);r!==null&&wn(r,n,67108864),rp(n,67108864)}}function Y0(n){if(n.tag===13||n.tag===31){var r=Vn();r=Gs(r);var a=ia(n,r);a!==null&&wn(a,n,r),rp(n,r)}}var Uh=!0;function hR(n,r,a,l){var h=B.T;B.T=null;var f=ne.p;try{ne.p=2,sp(n,r,a,l)}finally{ne.p=f,B.T=h}}function dR(n,r,a,l){var h=B.T;B.T=null;var f=ne.p;try{ne.p=8,sp(n,r,a,l)}finally{ne.p=f,B.T=h}}function sp(n,r,a,l){if(Uh){var h=ap(l);if(h===null)Gm(n,r,l,jh,a),$0(n,l);else if(mR(h,n,r,a,l))l.stopPropagation();else if($0(n,l),r&4&&-1<fR.indexOf(n)){for(;h!==null;){var f=Hn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Si(f.pendingLanes);if(_!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var x=1<<31-Et(_);b.entanglements[1]|=x,_&=~x}Fi(f),(Ge&6)===0&&(Th=fn()+500,ru(0))}}break;case 31:case 13:b=ia(f,2),b!==null&&wn(b,f,2),Ah(),rp(f,2)}if(f=ap(l),f===null&&Gm(n,r,l,jh,a),f===h)break;h=f}h!==null&&l.stopPropagation()}else Gm(n,r,l,null,a)}}function ap(n){return n=Fn(n),op(n)}var jh=null;function op(n){if(jh=null,n=xi(n),n!==null){var r=u(n);if(r===null)n=null;else{var a=r.tag;if(a===13){if(n=d(r),n!==null)return n;n=null}else if(a===31){if(n=m(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return jh=n,null}function Q0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bs()){case fl:return 2;case ml:return 8;case zr:case ff:return 32;case yc:return 268435456;default:return 32}default:return 32}}var lp=!1,fs=null,ms=null,ps=null,hu=new Map,du=new Map,gs=[],fR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $0(n,r){switch(n){case"focusin":case"focusout":fs=null;break;case"dragenter":case"dragleave":ms=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":hu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(r.pointerId)}}function fu(n,r,a,l,h,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[h]},r!==null&&(r=Hn(r),r!==null&&K0(r)),n):(n.eventSystemFlags|=l,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function mR(n,r,a,l,h){switch(r){case"focusin":return fs=fu(fs,n,r,a,l,h),!0;case"dragenter":return ms=fu(ms,n,r,a,l,h),!0;case"mouseover":return ps=fu(ps,n,r,a,l,h),!0;case"pointerover":var f=h.pointerId;return hu.set(f,fu(hu.get(f)||null,n,r,a,l,h)),!0;case"gotpointercapture":return f=h.pointerId,du.set(f,fu(du.get(f)||null,n,r,a,l,h)),!0}return!1}function X0(n){var r=xi(n.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=d(a),r!==null){n.blockedOn=r,oi(n.priority,function(){Y0(a)});return}}else if(r===31){if(r=m(a),r!==null){n.blockedOn=r,oi(n.priority,function(){Y0(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function zh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ap(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Rl=l,a.target.dispatchEvent(l),Rl=null}else return r=Hn(a),r!==null&&K0(r),n.blockedOn=a,!1;r.shift()}return!0}function W0(n,r,a){zh(n)&&a.delete(r)}function pR(){lp=!1,fs!==null&&zh(fs)&&(fs=null),ms!==null&&zh(ms)&&(ms=null),ps!==null&&zh(ps)&&(ps=null),hu.forEach(W0),du.forEach(W0)}function Bh(n,r){n.blockedOn===r&&(n.blockedOn=null,lp||(lp=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,pR)))}var qh=null;function J0(n){qh!==n&&(qh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){qh===n&&(qh=null);for(var r=0;r<n.length;r+=3){var a=n[r],l=n[r+1],h=n[r+2];if(typeof l!="function"){if(op(l||a)===null)continue;break}var f=Hn(a);f!==null&&(n.splice(r,3),r-=3,am(f,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Ro(n){function r(x){return Bh(x,n)}fs!==null&&Bh(fs,n),ms!==null&&Bh(ms,n),ps!==null&&Bh(ps,n),hu.forEach(r),du.forEach(r);for(var a=0;a<gs.length;a++){var l=gs[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<gs.length&&(a=gs[0],a.blockedOn===null);)X0(a),a.blockedOn===null&&gs.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],f=a[l+1],_=h[Gt]||null;if(typeof f=="function")_||J0(a);else if(_){var b=null;if(f&&f.hasAttribute("formAction")){if(h=f,_=f[Gt]||null)b=_.formAction;else if(op(h)!==null)continue}else b=_.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),J0(a)}}}function Z0(){function n(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return h=_})},focusReset:"manual",scroll:"manual"})}function r(){h!==null&&(h(),h=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),h!==null&&(h(),h=null)}}}function up(n){this._internalRoot=n}Hh.prototype.render=up.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=Vn();F0(a,l,n,r,null,null)},Hh.prototype.unmount=up.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;F0(n.current,2,null,n,null,null),Ah(),r[Ci]=null}};function Hh(n){this._internalRoot=n}Hh.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ac();n={blockedOn:null,target:n,priority:r};for(var a=0;a<gs.length&&r!==0&&r<gs[a].priority;a++);gs.splice(a,0,n),a===0&&X0(n)}};var eE=e.version;if(eE!=="19.2.4")throw Error(s(527,eE,"19.2.4"));ne.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=y(r),n=n!==null?v(n):null,n=n===null?null:n.stateNode,n};var gR={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fh.isDisabled&&Fh.supportsFiber)try{si=Fh.inject(gR),Xt=Fh}catch{}}return pu.createRoot=function(n,r){if(!o(n))throw Error(s(299));var a=!1,l="",h=ov,f=lv,_=uv;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(f=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError)),r=q0(n,1,!1,null,null,a,l,null,h,f,_,Z0),n[Ci]=r.current,Fm(n),new up(r)},pu.hydrateRoot=function(n,r,a){if(!o(n))throw Error(s(299));var l=!1,h="",f=ov,_=lv,b=uv,x=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),r=q0(n,1,!0,r,a??null,l,h,x,f,_,b,Z0),r.context=H0(null),a=r.current,l=Vn(),l=Gs(l),h=ts(l),h.callback=null,ns(a,h,l),a=l,r.current.lanes=a,Hs(r,a),Fi(r),n[Ci]=r.current,Fm(n),new Hh(r)},pu.version="19.2.4",pu}var cE;function IR(){if(cE)return dp.exports;cE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),dp.exports=RR(),dp.exports}var CR=IR();const NR=ob(CR),xR=()=>{};var hE={};/**
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
 */const lb=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},DR=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],d=i[t++],m=i[t++],p=((o&7)<<18|(u&63)<<12|(d&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[t++],d=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return e.join("")},ub={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],d=o+1<i.length,m=d?i[o+1]:0,p=o+2<i.length,y=p?i[o+2]:0,v=u>>2,T=(u&3)<<4|m>>4;let S=(m&15)<<2|y>>6,z=y&63;p||(z=64,d||(S=64)),s.push(t[v],t[T],t[S],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(lb(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):DR(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const y=o<i.length?t[i.charAt(o)]:64;++o;const T=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||y==null||T==null)throw new OR;const S=u<<2|m>>4;if(s.push(S),y!==64){const z=m<<4&240|y>>2;if(s.push(z),T!==64){const Y=y<<6&192|T;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class OR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kR=function(i){const e=lb(i);return ub.encodeByteArray(e,!0)},cd=function(i){return kR(i).replace(/\./g,"")},mg=function(i){try{return ub.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function hd(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!MR(t)||(i[t]=hd(i[t],e[t]));return i}function MR(i){return i!=="__proto__"}/**
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
 */function cb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PR=()=>cb().__FIREBASE_DEFAULTS__,VR=()=>{if(typeof process>"u"||typeof hE>"u")return;const i=hE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},LR=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&mg(i[1]);return e&&JSON.parse(e)},Dd=()=>{try{return xR()||PR()||VR()||LR()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},UR=i=>{var e,t;return(t=(e=Dd())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},jR=i=>{const e=UR(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},pg=()=>{var i;return(i=Dd())==null?void 0:i.config},zR=i=>{var e;return(e=Dd())==null?void 0:e[`_${i}`]};/**
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
 */class BR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ms(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gg(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function hb(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[cd(JSON.stringify(t)),cd(JSON.stringify(d)),""].join(".")}const xu={};function qR(){const i={prod:[],emulator:[]};for(const e of Object.keys(xu))xu[e]?i.emulator.push(e):i.prod.push(e);return i}function HR(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let dE=!1;function yg(i,e){if(typeof window>"u"||typeof document>"u"||!Ms(window.location.host)||xu[i]===e||xu[i]||dE)return;xu[i]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",u=qR().prod.length>0;function d(){const S=document.getElementById(s);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,z){S.setAttribute("width","24"),S.setAttribute("id",z),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function y(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{dE=!0,d()},S}function v(S,z){S.setAttribute("id",z),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=HR(s),z=t("text"),Y=document.getElementById(z)||document.createElement("span"),ee=t("learnmore"),Z=document.getElementById(ee)||document.createElement("a"),ce=t("preprendIcon"),fe=document.getElementById(ce)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ue=S.element;m(ue),v(Z,ee);const ye=y();p(fe,ce),ue.append(fe,Y,Z,ye),document.body.appendChild(ue)}u?(Y.innerText="Preview backend disconnected.",fe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(fe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Y.innerText="Preview backend running in this workspace."),Y.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function _g(){var e;const i=(e=Dd())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GR(){return typeof window<"u"||db()}function db(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function KR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fb(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mb(){const i=jt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function YR(){return!_g()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dd(){try{return typeof indexedDB=="object"}catch{return!1}}function QR(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const $R="FirebaseError";class dn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=$R,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xa.prototype.create)}}class xa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],d=u?XR(u,s):"Error",m=`${this.serviceName}: ${d} (${o}).`;return new dn(o,m,s)}}function XR(i,e){return i.replace(WR,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const WR=/\{\$([^}]+)}/g;/**
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
 */function fE(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function JR(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function qo(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],d=e[o];if(mE(u)&&mE(d)){if(!qo(u,d))return!1}else if(u!==d)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function mE(i){return i!==null&&typeof i=="object"}/**
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
 */function Zo(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ko(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Au(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function pb(i,e){const t=new ZR(i,e);return t.subscribe.bind(t)}class ZR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");eI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=gp),o.error===void 0&&(o.error=gp),o.complete===void 0&&(o.complete=gp);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eI(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function gp(){}/**
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
 */function ve(i){return i&&i._delegate?i._delegate:i}class vi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ga="[DEFAULT]";/**
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
 */class tI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new BR;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iI(e))try{this.getOrInitializeService({instanceIdentifier:ga})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ga){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ga){return this.instances.has(e)}getOptions(e=ga){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,d]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&d.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ga){return this.component?this.component.multipleInstances?e:ga:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nI(i){return i===ga?void 0:i}function iI(i){return i.instantiationMode==="EAGER"}/**
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
 */class gb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Eg=[];var Oe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Oe||(Oe={}));const yb={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},rI=Oe.INFO,sI={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},aI=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=sI[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Od{constructor(e){this.name=e,this._logLevel=rI,this._logHandler=aI,this._userLogHandler=null,Eg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}function oI(i){Eg.forEach(e=>{e.setLogLevel(i)})}function lI(i,e){for(const t of Eg){let s=null;e&&e.level&&(s=yb[e.level]),i===null?t.userLogHandler=null:t.userLogHandler=(o,u,...d)=>{const m=d.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");u>=(s??o.logLevel)&&i({level:Oe[u].toLowerCase(),message:m,args:d,type:o.name})}}}const uI=(i,e)=>e.some(t=>i instanceof t);let pE,gE;function cI(){return pE||(pE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hI(){return gE||(gE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _b=new WeakMap,Pp=new WeakMap,vb=new WeakMap,yp=new WeakMap,Tg=new WeakMap;function dI(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{t(Ts(i.result)),o()},d=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(t=>{t instanceof IDBCursor&&_b.set(t,i)}).catch(()=>{}),Tg.set(e,i),e}function fI(i){if(Pp.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{t(),o()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});Pp.set(i,e)}let Vp={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Pp.get(i);if(e==="objectStoreNames")return i.objectStoreNames||vb.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ts(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function mI(i){Vp=i(Vp)}function pI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(_p(this),e,...t);return vb.set(s,e.sort?e.sort():[e]),Ts(s)}:hI().includes(i)?function(...e){return i.apply(_p(this),e),Ts(_b.get(this))}:function(...e){return Ts(i.apply(_p(this),e))}}function gI(i){return typeof i=="function"?pI(i):(i instanceof IDBTransaction&&fI(i),uI(i,cI())?new Proxy(i,Vp):i)}function Ts(i){if(i instanceof IDBRequest)return dI(i);if(yp.has(i))return yp.get(i);const e=gI(i);return e!==i&&(yp.set(i,e),Tg.set(e,i)),e}const _p=i=>Tg.get(i);function yI(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const d=indexedDB.open(i,e),m=Ts(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Ts(d.result),p.oldVersion,p.newVersion,Ts(d.transaction),p)}),t&&d.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const _I=["get","getKey","getAll","getAllKeys","count"],vI=["put","add","delete","clear"],vp=new Map;function yE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(vp.get(e))return vp.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=vI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||_I.includes(t)))return;const u=async function(d,...m){const p=this.transaction(d,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[t](...m),o&&p.done]))[0]};return vp.set(e,u),u}mI(i=>({...i,get:(e,t,s)=>yE(e,t)||i.get(e,t,s),has:(e,t)=>!!yE(e,t)||i.has(e,t)}));/**
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
 */class EI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(TI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function TI(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fd="@firebase/app",Lp="0.14.8";/**
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
 */const Nr=new Od("@firebase/app"),bI="@firebase/app-compat",AI="@firebase/analytics-compat",wI="@firebase/analytics",SI="@firebase/app-check-compat",RI="@firebase/app-check",II="@firebase/auth",CI="@firebase/auth-compat",NI="@firebase/database",xI="@firebase/data-connect",DI="@firebase/database-compat",OI="@firebase/functions",kI="@firebase/functions-compat",MI="@firebase/installations",PI="@firebase/installations-compat",VI="@firebase/messaging",LI="@firebase/messaging-compat",UI="@firebase/performance",jI="@firebase/performance-compat",zI="@firebase/remote-config",BI="@firebase/remote-config-compat",qI="@firebase/storage",HI="@firebase/storage-compat",FI="@firebase/firestore",GI="@firebase/ai",KI="@firebase/firestore-compat",YI="firebase",QI="12.9.0";/**
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
 */const Rs="[DEFAULT]",$I={[fd]:"fire-core",[bI]:"fire-core-compat",[wI]:"fire-analytics",[AI]:"fire-analytics-compat",[RI]:"fire-app-check",[SI]:"fire-app-check-compat",[II]:"fire-auth",[CI]:"fire-auth-compat",[NI]:"fire-rtdb",[xI]:"fire-data-connect",[DI]:"fire-rtdb-compat",[OI]:"fire-fn",[kI]:"fire-fn-compat",[MI]:"fire-iid",[PI]:"fire-iid-compat",[VI]:"fire-fcm",[LI]:"fire-fcm-compat",[UI]:"fire-perf",[jI]:"fire-perf-compat",[zI]:"fire-rc",[BI]:"fire-rc-compat",[qI]:"fire-gcs",[HI]:"fire-gcs-compat",[FI]:"fire-fst",[KI]:"fire-fst-compat",[GI]:"fire-vertex","fire-js":"fire-js",[YI]:"fire-js-all"};/**
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
 */const Is=new Map,Ho=new Map,Fo=new Map;function qu(i,e){try{i.container.addComponent(e)}catch(t){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Eb(i,e){i.container.addOrOverwriteComponent(e)}function xr(i){const e=i.name;if(Fo.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;Fo.set(e,i);for(const t of Is.values())qu(t,i);for(const t of Ho.values())qu(t,i);return!0}function bg(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function XI(i,e,t=Rs){bg(i,e).clearInstance(t)}function Ag(i){return i.options!==void 0}function Tb(i){return Ag(i)?!1:"authIdToken"in i||"appCheckToken"in i||"releaseOnDeref"in i||"automaticDataCollectionEnabled"in i}function ot(i){return i==null?!1:i.settings!==void 0}function WI(){Fo.clear()}/**
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
 */const JI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zn=new xa("app","Firebase",JI);/**
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
 */let bb=class{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
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
 */function _E(i,e){const t=mg(i.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const o=JSON.parse(t).exp*1e3,u=new Date().getTime();o-u<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class ZI extends bb{constructor(e,t,s,o){const u=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,d={name:s,automaticDataCollectionEnabled:u};if(e.apiKey!==void 0)super(e,d,o);else{const m=e;super(m.options,d,o)}this._serverConfig={automaticDataCollectionEnabled:u,...t},this._serverConfig.authIdToken&&_E(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&_E(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Bn(fd,Lp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Sg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw zn.create("server-app-deleted")}}/**
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
 */const Pr=QI;function wg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:Rs,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw zn.create("bad-app-name",{appName:String(o)});if(t||(t=pg()),!t)throw zn.create("no-options");const u=Is.get(o);if(u){if(qo(t,u.options)&&qo(s,u.config))return u;throw zn.create("duplicate-app",{appName:o})}const d=new gb(o);for(const p of Fo.values())d.addComponent(p);const m=new bb(t,s,d);return Is.set(o,m),m}function eC(i,e={}){if(GR()&&!db())throw zn.create("invalid-server-app-environment");let t,s=e||{};if(i&&(Ag(i)?t=i.options:Tb(i)?s=i:t=i),s.automaticDataCollectionEnabled===void 0&&(s.automaticDataCollectionEnabled=!0),t||(t=pg()),!t)throw zn.create("no-options");const o={...s,...t};o.releaseOnDeref!==void 0&&delete o.releaseOnDeref;const u=v=>[...v].reduce((T,S)=>Math.imul(31,T)+S.charCodeAt(0)|0,0);if(s.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw zn.create("finalization-registry-not-supported",{});const d=""+u(JSON.stringify(o)),m=Ho.get(d);if(m)return m.incRefCount(s.releaseOnDeref),m;const p=new gb(d);for(const v of Fo.values())p.addComponent(v);const y=new ZI(t,s,d,p);return Ho.set(d,y),y}function Ab(i=Rs){const e=Is.get(i);if(!e&&i===Rs&&pg())return wg();if(!e)throw zn.create("no-app",{appName:i});return e}function tC(){return Array.from(Is.values())}async function Sg(i){let e=!1;const t=i.name;Is.has(t)?(e=!0,Is.delete(t)):Ho.has(t)&&i.decRefCount()<=0&&(Ho.delete(t),e=!0),e&&(await Promise.all(i.container.getProviders().map(s=>s.delete())),i.isDeleted=!0)}function Bn(i,e,t){let s=$I[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${s}" with version "${e}":`];o&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(d.join(" "));return}xr(new vi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function wb(i,e){if(i!==null&&typeof i!="function")throw zn.create("invalid-log-argument");lI(i,e)}function Sb(i){oI(i)}/**
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
 */const nC="firebase-heartbeat-database",iC=1,Hu="firebase-heartbeat-store";let Ep=null;function Rb(){return Ep||(Ep=yI(nC,iC,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Hu)}catch(t){console.warn(t)}}}}).catch(i=>{throw zn.create("idb-open",{originalErrorMessage:i.message})})),Ep}async function rC(i){try{const t=(await Rb()).transaction(Hu),s=await t.objectStore(Hu).get(Ib(i));return await t.done,s}catch(e){if(e instanceof dn)Nr.warn(e.message);else{const t=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nr.warn(t.message)}}}async function vE(i,e){try{const s=(await Rb()).transaction(Hu,"readwrite");await s.objectStore(Hu).put(e,Ib(i)),await s.done}catch(t){if(t instanceof dn)Nr.warn(t.message);else{const s=zn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Nr.warn(s.message)}}}function Ib(i){return`${i.name}!${i.options.appId}`}/**
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
 */const sC=1024,aC=30;class oC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=EE();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>aC){const d=cC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=EE(),{heartbeatsToSend:s,unsentEntries:o}=lC(this._heartbeatsCache.heartbeats),u=cd(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Nr.warn(t),""}}}function EE(){return new Date().toISOString().substring(0,10)}function lC(i,e=sC){const t=[];let s=i.slice();for(const o of i){const u=t.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),TE(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),TE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class uC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dd()?QR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return vE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return vE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function TE(i){return cd(JSON.stringify({version:2,heartbeats:i})).length}function cC(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function hC(i){xr(new vi("platform-logger",e=>new EI(e),"PRIVATE")),xr(new vi("heartbeat",e=>new oC(e),"PRIVATE")),Bn(fd,Lp,i),Bn(fd,Lp,"esm2020"),Bn("fire-js","")}hC("");const dC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:dn,SDK_VERSION:Pr,_DEFAULT_ENTRY_NAME:Rs,_addComponent:qu,_addOrOverwriteComponent:Eb,_apps:Is,_clearComponents:WI,_components:Fo,_getProvider:bg,_isFirebaseApp:Ag,_isFirebaseServerApp:ot,_isFirebaseServerAppSettings:Tb,_registerComponent:xr,_removeServiceInstance:XI,_serverApps:Ho,deleteApp:Sg,getApp:Ab,getApps:tC,initializeApp:wg,initializeServerApp:eC,onLog:wb,registerVersion:Bn,setLogLevel:Sb},Symbol.toStringTag,{value:"Module"}));/**
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
 */class fC{constructor(e,t){this._delegate=e,this.firebase=t,qu(e,new vi("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Sg(this._delegate)))}_getService(e,t=Rs){var o;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((o=s.getComponent())==null?void 0:o.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=Rs){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){qu(this._delegate,e)}_addOrOverwriteComponent(e){Eb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const mC={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},bE=new xa("app-compat","Firebase",mC);/**
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
 */function pC(i){const e={},t={__esModule:!0,initializeApp:u,app:o,registerVersion:Bn,setLogLevel:Sb,onLog:wb,apps:null,SDK_VERSION:Pr,INTERNAL:{registerComponent:m,removeApp:s,useAsService:p,modularAPIs:dC}};t.default=t,Object.defineProperty(t,"apps",{get:d});function s(y){delete e[y]}function o(y){if(y=y||Rs,!fE(e,y))throw bE.create("no-app",{appName:y});return e[y]}o.App=i;function u(y,v={}){const T=wg(y,v);if(fE(e,T.name))return e[T.name];const S=new i(T,t);return e[T.name]=S,S}function d(){return Object.keys(e).map(y=>e[y])}function m(y){const v=y.name,T=v.replace("-compat","");if(xr(y)&&y.type==="PUBLIC"){const S=(z=o())=>{if(typeof z[T]!="function")throw bE.create("invalid-app-argument",{appName:v});return z[T]()};y.serviceProps!==void 0&&hd(S,y.serviceProps),t[T]=S,i.prototype[T]=function(...z){return this._getService.bind(this,v).apply(this,y.multipleInstances?z:[])}}return y.type==="PUBLIC"?t[T]:null}function p(y,v){return v==="serverAuth"?null:v}return t}/**
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
 */function Cb(){const i=pC(fC);i.INTERNAL={...i.INTERNAL,createFirebaseNamespace:Cb,extendNamespace:e,createSubscribe:pb,ErrorFactory:xa,deepExtend:hd};function e(t){hd(i,t)}return i}const gC=Cb();/**
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
 */const AE=new Od("@firebase/app-compat"),yC="@firebase/app-compat",_C="0.5.8";/**
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
 */function vC(i){Bn(yC,_C,i)}/**
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
 */try{const i=cb();if(i.firebase!==void 0){AE.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=i.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&AE.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const bs=gC;vC();var EC="firebase",TC="12.9.0";/**
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
 */bs.registerVersion(EC,TC,"app-compat");const gu={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Io={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function bC(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function Nb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AC=bC,wC=Nb,xb=new xa("auth","Firebase",Nb());/**
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
 */const md=new Od("@firebase/auth");function SC(i,...e){md.logLevel<=Oe.WARN&&md.warn(`Auth (${Pr}): ${i}`,...e)}function ed(i,...e){md.logLevel<=Oe.ERROR&&md.error(`Auth (${Pr}): ${i}`,...e)}/**
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
 */function sn(i,...e){throw Ig(i,...e)}function Ht(i,...e){return Ig(i,...e)}function Rg(i,e,t){const s={...wC(),[e]:t};return new xa("auth","Firebase",s).create(e,{appName:i.name})}function $t(i){return Rg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function el(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&sn(i,"argument-error"),Rg(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ig(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return xb.create(i,...e)}function te(i,e,...t){if(!i)throw Ig(e,...t)}function Ji(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ed(e),new Error(e)}function Ei(i,e){i||Ji(e)}/**
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
 */function Fu(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function Cg(){return wE()==="http:"||wE()==="https:"}function wE(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function RC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cg()||fb()||"connection"in navigator)?navigator.onLine:!0}function IC(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class ic{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ei(t>e,"Short delay should be less than long delay!"),this.isMobile=FR()||vg()}get(){return RC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ng(i,e){Ei(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Db{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ji("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ji("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ji("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xC=new ic(3e4,6e4);function yt(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function _t(i,e,t,s,o={}){return Ob(i,o,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const m=Zo({key:i.config.apiKey,...d}).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const y={method:e,headers:p,...u};return KR()||(y.referrerPolicy="no-referrer"),i.emulatorConfig&&Ms(i.emulatorConfig.host)&&(y.credentials="include"),Db.fetch()(await kb(i,i.config.apiHost,t,m),y)})}async function Ob(i,e,t){i._canInitEmulator=!1;const s={...CC,...e};try{const o=new OC(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw wu(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const m=u.ok?d.errorMessage:d.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw wu(i,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw wu(i,"email-already-in-use",d);if(p==="USER_DISABLED")throw wu(i,"user-disabled",d);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Rg(i,v,y);sn(i,v)}}catch(o){if(o instanceof dn)throw o;sn(i,"network-request-failed",{message:String(o)})}}async function Vr(i,e,t,s,o={}){const u=await _t(i,e,t,s,o);return"mfaPendingCredential"in u&&sn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function kb(i,e,t,s){const o=`${e}${t}?${s}`,u=i,d=u.config.emulator?Ng(i.config,o):`${i.config.apiScheme}://${o}`;return NC.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}function DC(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ht(this.auth,"network-request-failed")),xC.get())})}}function wu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Ht(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */function SE(i){return i!==void 0&&i.getResponse!==void 0}function RE(i){return i!==void 0&&i.enterprise!==void 0}class Mb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return DC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function kC(i){return(await _t(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Pb(i,e){return _t(i,"GET","/v2/recaptchaConfig",yt(i,e))}/**
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
 */async function MC(i,e){return _t(i,"POST","/v1/accounts:delete",e)}async function PC(i,e){return _t(i,"POST","/v1/accounts:update",e)}async function pd(i,e){return _t(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Du(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VC(i,e=!1){const t=ve(i),s=await t.getIdToken(e),o=kd(s);te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Du(Tp(o.auth_time)),issuedAtTime:Du(Tp(o.iat)),expirationTime:Du(Tp(o.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Tp(i){return Number(i)*1e3}function kd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return ed("JWT malformed, contained fewer than 3 sections"),null;try{const o=mg(t);return o?JSON.parse(o):(ed("Failed to decode base64 JWT payload"),null)}catch(o){return ed("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function IE(i){const e=kd(i);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dr(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof dn&&LC(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function LC({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class UC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Up{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Du(this.lastLoginAt),this.creationTime=Du(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gu(i){var T;const e=i.auth,t=await i.getIdToken(),s=await Dr(i,pd(e,{idToken:t}));te(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(T=o.providerUserInfo)!=null&&T.length?Vb(o.providerUserInfo):[],d=zC(i.providerData,u),m=i.isAnonymous,p=!(i.email&&o.passwordHash)&&!(d!=null&&d.length),y=m?p:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Up(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(i,v)}async function jC(i){const e=ve(i);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zC(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Vb(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function BC(i,e){const t=await Ob(i,{},async()=>{const s=Zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,d=await kb(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return i.emulatorConfig&&Ms(i.emulatorConfig.host)&&(p.credentials="include"),Db.fetch()(d,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qC(i,e){return _t(i,"POST","/v2/accounts:revokeToken",yt(i,e))}/**
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
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):IE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=IE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await BC(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,d=new Mo;return s&&(te(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),o&&(te(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),u&&(te(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return Ji("not implemented")}}/**
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
 */function _s(i,e){te(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class yi{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new UC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Up(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VC(this,e)}reload(){return jC(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Gu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await Dr(this,MC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,d=t.photoURL??void 0,m=t.tenantId??void 0,p=t._redirectEventId??void 0,y=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:S,isAnonymous:z,providerData:Y,stsTokenManager:ee}=t;te(T&&ee,e,"internal-error");const Z=Mo.fromJSON(this.name,ee);te(typeof T=="string",e,"internal-error"),_s(s,e.name),_s(o,e.name),te(typeof S=="boolean",e,"internal-error"),te(typeof z=="boolean",e,"internal-error"),_s(u,e.name),_s(d,e.name),_s(m,e.name),_s(p,e.name),_s(y,e.name),_s(v,e.name);const ce=new yi({uid:T,auth:e,email:o,emailVerified:S,displayName:s,isAnonymous:z,photoURL:d,phoneNumber:u,tenantId:m,stsTokenManager:Z,createdAt:y,lastLoginAt:v});return Y&&Array.isArray(Y)&&(ce.providerData=Y.map(fe=>({...fe}))),p&&(ce._redirectEventId=p),ce}static async _fromIdTokenResponse(e,t,s=!1){const o=new Mo;o.updateFromServerResponse(t);const u=new yi({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Gu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];te(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Vb(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Mo;m.updateFromIdToken(s);const p=new yi({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:d}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Up(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
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
 */const CE=new Map;function Un(i){Ei(i instanceof Function,"Expected a class definition");let e=CE.get(i);return e?(Ei(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,CE.set(i,e),e)}/**
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
 */class Lb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lb.type="NONE";const Go=Lb;/**
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
 */function va(i,e,t){return`firebase:${i}:${e}:${t}`}class Po{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=va(this.userKey,o.apiKey,u),this.fullPersistenceKey=va("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await pd(this.auth,{idToken:e}).catch(()=>{});return t?yi._fromGetAccountInfoResponse(this.auth,t,e):null}return yi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Po(Un(Go),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Un(Go);const d=va(s,e.config.apiKey,e.name);let m=null;for(const y of t)try{const v=await y._get(d);if(v){let T;if(typeof v=="string"){const S=await pd(e,{idToken:v}).catch(()=>{});if(!S)break;T=await yi._fromGetAccountInfoResponse(e,S,v)}else T=yi._fromJSON(e,v);y!==u&&(m=T),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Po(u,e,s):(u=p[0],m&&await u._set(d,m.toJSON()),await Promise.all(t.map(async y=>{if(y!==u)try{await y._remove(d)}catch{}})),new Po(u,e,s))}}/**
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
 */function NE(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ub(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qb(e))return"Blackberry";if(Hb(e))return"Webos";if(jb(e))return"Safari";if((e.includes("chrome/")||zb(e))&&!e.includes("edge/"))return"Chrome";if(rc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ub(i=jt()){return/firefox\//i.test(i)}function jb(i=jt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zb(i=jt()){return/crios\//i.test(i)}function Bb(i=jt()){return/iemobile/i.test(i)}function rc(i=jt()){return/android/i.test(i)}function qb(i=jt()){return/blackberry/i.test(i)}function Hb(i=jt()){return/webos/i.test(i)}function sc(i=jt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function HC(i=jt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function FC(i=jt()){var e;return sc(i)&&!!((e=window.navigator)!=null&&e.standalone)}function GC(){return mb()&&document.documentMode===10}function Fb(i=jt()){return sc(i)||rc(i)||Hb(i)||qb(i)||/windows phone/i.test(i)||Bb(i)}/**
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
 */function Gb(i,e=[]){let t;switch(i){case"Browser":t=NE(jt());break;case"Worker":t=`${NE(jt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pr}/${s}`}/**
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
 */class KC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((d,m)=>{try{const p=e(u);d(p)}catch(p){m(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function YC(i,e={}){return _t(i,"GET","/v2/passwordPolicy",yt(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const QC=6;class $C{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??QC,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class XC{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xE(this),this.idTokenSubscription=new xE(this),this.beforeStateQueue=new KC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Un(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Po.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await pd(this,{idToken:e}),s=await yi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(ot(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===m)&&(p!=null&&p.user)&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(d){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject($t(this));const t=e?ve(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YC(this),t=new $C(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await qC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Un(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await Po.create(this,[Un(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let d=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(m,this,"internal-error"),m.then(()=>{d||u(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{d=!0,p()}}else{const p=e.addObserver(t);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&SC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function dt(i){return ve(i)}class xE{constructor(e){this.auth=e,this.observer=null,this.addObserver=pb(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WC(i){ac=i}function xg(i){return ac.loadJS(i)}function JC(){return ac.recaptchaV2Script}function ZC(){return ac.recaptchaEnterpriseScript}function e2(){return ac.gapiScript}function Kb(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */const t2=500,n2=6e4,Gh=1e12;class i2{constructor(e){this.auth=e,this.counter=Gh,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new a2(e,this.auth.name,t||{})),this.counter++,s}reset(e){var s;const t=e||Gh;(s=this._widgets.get(t))==null||s.delete(),this._widgets.delete(t)}getResponse(e){var s;const t=e||Gh;return((s=this._widgets.get(t))==null?void 0:s.getResponse())||""}async execute(e){var s;const t=e||Gh;return(s=this._widgets.get(t))==null||s.execute(),""}}class r2{constructor(){this.enterprise=new s2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class s2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class a2{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;te(o,"argument-error",{appName:t}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=o2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},n2)},t2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function o2(i){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<i;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const l2="recaptcha-enterprise",Ou="NO_RECAPTCHA";class Yb{constructor(e){this.type=l2,this.auth=dt(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,m)=>{Pb(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new Mb(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,d(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,d,m){const p=window.grecaptcha;RE(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(y=>{d(y)}).catch(()=>{d(Ou)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new r2().execute("siteKey",{action:"verify"}):new Promise((u,d)=>{s(this.auth).then(m=>{if(!t&&RE(window.grecaptcha))o(m,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=ZC();p.length!==0&&(p+=m),xg(p).then(()=>{o(m,u,d)}).catch(y=>{d(y)})}}).catch(m=>{d(m)})})}}async function yu(i,e,t,s=!1,o=!1){const u=new Yb(i);let d;if(o)d=Ou;else try{d=await u.verify(t)}catch{d=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:d}):Object.assign(m,{captchaResponse:d}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function As(i,e,t,s,o){var u,d;if(o==="EMAIL_PASSWORD_PROVIDER")if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const m=await yu(i,e,t,t==="getOobCode");return s(i,m)}else return s(i,e).catch(async m=>{if(m.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await yu(i,e,t,t==="getOobCode");return s(i,p)}else return Promise.reject(m)});else if(o==="PHONE_PROVIDER")if((d=i._getRecaptchaConfig())!=null&&d.isProviderEnabled("PHONE_PROVIDER")){const m=await yu(i,e,t);return s(i,m).catch(async p=>{var y;if(((y=i._getRecaptchaConfig())==null?void 0:y.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const v=await yu(i,e,t,!1,!0);return s(i,v)}return Promise.reject(p)})}else{const m=await yu(i,e,t,!1,!0);return s(i,m)}else return Promise.reject(o+" provider is not supported.")}async function u2(i){const e=dt(i),t=await Pb(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new Mb(t);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isAnyProviderEnabled()&&new Yb(e).verify()}function c2(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Un);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function h2(i,e,t){const s=dt(i);te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!!(t!=null&&t.disableWarnings),u=Qb(e),{host:d,port:m}=d2(e),p=m===null?"":`:${m}`,y={url:`${u}//${d}${p}/`},v=Object.freeze({host:d,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),te(qo(y,s.config.emulator)&&qo(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,Ms(d)?(gg(`${u}//${d}${p}`),yg("Auth",!0)):o||f2()}function Qb(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function d2(i){const e=Qb(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:DE(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:DE(d)}}}function DE(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function f2(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class tl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ji("not implemented")}_getIdTokenResponse(e){return Ji("not implemented")}_linkToIdToken(e,t){return Ji("not implemented")}_getReauthenticationResolver(e){return Ji("not implemented")}}/**
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
 */async function $b(i,e){return _t(i,"POST","/v1/accounts:resetPassword",yt(i,e))}async function m2(i,e){return _t(i,"POST","/v1/accounts:update",e)}async function p2(i,e){return _t(i,"POST","/v1/accounts:signUp",e)}async function g2(i,e){return _t(i,"POST","/v1/accounts:update",yt(i,e))}/**
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
 */async function y2(i,e){return Vr(i,"POST","/v1/accounts:signInWithPassword",yt(i,e))}async function Md(i,e){return _t(i,"POST","/v1/accounts:sendOobCode",yt(i,e))}async function _2(i,e){return Md(i,e)}async function v2(i,e){return Md(i,e)}async function E2(i,e){return Md(i,e)}async function T2(i,e){return Md(i,e)}/**
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
 */async function b2(i,e){return Vr(i,"POST","/v1/accounts:signInWithEmailLink",yt(i,e))}async function A2(i,e){return Vr(i,"POST","/v1/accounts:signInWithEmailLink",yt(i,e))}/**
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
 */class Ku extends tl{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ku(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ku(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return As(e,t,"signInWithPassword",y2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return b2(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return As(e,s,"signUpPassword",p2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return A2(e,{idToken:t,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rr(i,e){return Vr(i,"POST","/v1/accounts:signInWithIdp",yt(i,e))}/**
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
 */const w2="http://localhost";class ir extends tl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const d=new ir(s,o);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const t=this.buildRequest();return Rr(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Rr(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rr(e,t)}buildRequest(){const e={requestUri:w2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zo(t)}return e}}/**
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
 */async function OE(i,e){return _t(i,"POST","/v1/accounts:sendVerificationCode",yt(i,e))}async function S2(i,e){return Vr(i,"POST","/v1/accounts:signInWithPhoneNumber",yt(i,e))}async function R2(i,e){const t=await Vr(i,"POST","/v1/accounts:signInWithPhoneNumber",yt(i,e));if(t.temporaryProof)throw wu(i,"account-exists-with-different-credential",t);return t}const I2={USER_NOT_FOUND:"user-not-found"};async function C2(i,e){const t={...e,operation:"REAUTH"};return Vr(i,"POST","/v1/accounts:signInWithPhoneNumber",yt(i,t),I2)}/**
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
 */class Ea extends tl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ea({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ea({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return S2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return R2(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return C2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:o}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:o,temporaryProof:u}=e;return!s&&!t&&!o&&!u?null:new Ea({verificationId:t,verificationCode:s,phoneNumber:o,temporaryProof:u})}}/**
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
 */function N2(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function x2(i){const e=ko(Au(i)).link,t=e?ko(Au(e)).deep_link_id:null,s=ko(Au(i)).deep_link_id;return(s?ko(Au(s)).link:null)||s||t||e||i}class Pd{constructor(e){const t=ko(Au(e)),s=t.apiKey??null,o=t.oobCode??null,u=N2(t.mode??null);te(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=x2(e);try{return new Pd(t)}catch{return null}}}/**
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
 */class Ps{constructor(){this.providerId=Ps.PROVIDER_ID}static credential(e,t){return Ku._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Pd.parseLink(t);return te(s,"argument-error"),Ku._fromEmailAndCode(e,s.code,s.tenantId)}}Ps.PROVIDER_ID="password";Ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Lr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nl extends Lr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Vo extends nl{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return te("providerId"in t&&"signInMethod"in t,"argument-error"),ir._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return te(e.idToken||e.accessToken,"argument-error"),ir._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Vo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Vo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:u,nonce:d,providerId:m}=e;if(!s&&!o&&!t&&!u||!m)return null;try{return new Vo(m)._credential({idToken:t,accessToken:s,nonce:d,pendingToken:u})}catch{return null}}}/**
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
 */class Yi extends nl{constructor(){super("facebook.com")}static credential(e){return ir._fromParams({providerId:Yi.PROVIDER_ID,signInMethod:Yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yi.credentialFromTaggedObject(e)}static credentialFromError(e){return Yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yi.credential(e.oauthAccessToken)}catch{return null}}}Yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yi.PROVIDER_ID="facebook.com";/**
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
 */class Qi extends nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ir._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Qi.credential(t,s)}catch{return null}}}Qi.GOOGLE_SIGN_IN_METHOD="google.com";Qi.PROVIDER_ID="google.com";/**
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
 */class $i extends nl{constructor(){super("github.com")}static credential(e){return ir._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $i.credential(e.oauthAccessToken)}catch{return null}}}$i.GITHUB_SIGN_IN_METHOD="github.com";$i.PROVIDER_ID="github.com";/**
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
 */const D2="http://localhost";class Ko extends tl{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Rr(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Rr(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,pendingToken:u}=t;return!s||!o||!u||s!==o?null:new Ko(s,u)}static _create(e,t){return new Ko(e,t)}buildRequest(){return{requestUri:D2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const O2="saml.";class gd extends Lr{constructor(e){te(e.startsWith(O2),"argument-error"),super(e)}static credentialFromResult(e){return gd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return gd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ko.fromJSON(e);return te(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:s}=e;if(!t||!s)return null;try{return Ko._create(s,t)}catch{return null}}}/**
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
 */class Xi extends nl{constructor(){super("twitter.com")}static credential(e,t){return ir._fromParams({providerId:Xi.PROVIDER_ID,signInMethod:Xi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xi.credentialFromTaggedObject(e)}static credentialFromError(e){return Xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Xi.credential(t,s)}catch{return null}}}Xi.TWITTER_SIGN_IN_METHOD="twitter.com";Xi.PROVIDER_ID="twitter.com";/**
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
 */async function Xb(i,e){return Vr(i,"POST","/v1/accounts:signUp",yt(i,e))}/**
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
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await yi._fromIdTokenResponse(e,s,o),d=kE(s);return new ri({user:u,providerId:d,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=kE(s);return new ri({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function kE(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function k2(i){var o;if(ot(i.app))return Promise.reject($t(i));const e=dt(i);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new ri({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Xb(e,{returnSecureToken:!0}),s=await ri._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class yd extends dn{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,yd.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new yd(e,t,s,o)}}function Wb(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?yd._fromErrorAndOperation(i,u,e,s):u})}/**
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
 */function Jb(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function M2(i,e){const t=ve(i);await Vd(!0,t,e);const{providerUserInfo:s}=await PC(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),o=Jb(s||[]);return t.providerData=t.providerData.filter(u=>o.has(u.providerId)),o.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Dg(i,e,t=!1){const s=await Dr(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ri._forOperation(i,"link",s)}async function Vd(i,e,t){await Gu(e);const s=Jb(e.providerData),o=i===!1?"provider-already-linked":"no-such-provider";te(s.has(t)===i,e.auth,o)}/**
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
 */async function Zb(i,e,t=!1){const{auth:s}=i;if(ot(s.app))return Promise.reject($t(s));const o="reauthenticate";try{const u=await Dr(i,Wb(s,o,e,i),t);te(u.idToken,s,"internal-error");const d=kd(u.idToken);te(d,s,"internal-error");const{sub:m}=d;return te(i.uid===m,s,"user-mismatch"),ri._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&sn(s,"user-mismatch"),u}}/**
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
 */async function eA(i,e,t=!1){if(ot(i.app))return Promise.reject($t(i));const s="signIn",o=await Wb(i,s,e),u=await ri._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function Ld(i,e){return eA(dt(i),e)}async function tA(i,e){const t=ve(i);return await Vd(!1,t,e.providerId),Dg(t,e)}async function nA(i,e){return Zb(ve(i),e)}/**
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
 */async function P2(i,e){return Vr(i,"POST","/v1/accounts:signInWithCustomToken",yt(i,e))}/**
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
 */async function V2(i,e){if(ot(i.app))return Promise.reject($t(i));const t=dt(i),s=await P2(t,{token:e,returnSecureToken:!0}),o=await ri._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(o.user),o}/**
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
 */class oc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Og._fromServerResponse(e,t):"totpInfo"in t?kg._fromServerResponse(e,t):sn(e,"internal-error")}}class Og extends oc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Og(t)}}class kg extends oc{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new kg(t)}}/**
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
 */function Ud(i,e,t){var s;te(((s=t.url)==null?void 0:s.length)>0,i,"invalid-continue-uri"),te(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),te(typeof t.linkDomain>"u"||t.linkDomain.length>0,i,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(te(t.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(te(t.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Mg(i){const e=dt(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function L2(i,e,t){const s=dt(i),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Ud(s,o,t),await As(s,o,"getOobCode",v2,"EMAIL_PASSWORD_PROVIDER")}async function U2(i,e,t){await $b(ve(i),{oobCode:e,newPassword:t}).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Mg(i),s})}async function j2(i,e){await g2(ve(i),{oobCode:e})}async function iA(i,e){const t=ve(i),s=await $b(t,{oobCode:e}),o=s.requestType;switch(te(o,t,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":te(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":te(s.mfaInfo,t,"internal-error");default:te(s.email,t,"internal-error")}let u=null;return s.mfaInfo&&(u=oc._fromServerResponse(dt(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:u},operation:o}}async function z2(i,e){const{data:t}=await iA(ve(i),e);return t.email}async function B2(i,e,t){if(ot(i.app))return Promise.reject($t(i));const s=dt(i),d=await As(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xb,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Mg(i),p}),m=await ri._fromIdTokenResponse(s,"signIn",d);return await s._updateCurrentUser(m.user),m}function q2(i,e,t){return ot(i.app)?Promise.reject($t(i)):Ld(ve(i),Ps.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Mg(i),s})}/**
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
 */async function H2(i,e,t){const s=dt(i),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function u(d,m){te(m.handleCodeInApp,s,"argument-error"),m&&Ud(s,d,m)}u(o,t),await As(s,o,"getOobCode",E2,"EMAIL_PASSWORD_PROVIDER")}function F2(i,e){const t=Pd.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function G2(i,e,t){if(ot(i.app))return Promise.reject($t(i));const s=ve(i),o=Ps.credentialWithLink(e,t||Fu());return te(o._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),Ld(s,o)}/**
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
 */async function K2(i,e){return _t(i,"POST","/v1/accounts:createAuthUri",yt(i,e))}/**
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
 */async function Y2(i,e){const t=Cg()?Fu():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:o}=await K2(ve(i),s);return o||[]}async function Q2(i,e){const t=ve(i),o={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&Ud(t.auth,o,e);const{email:u}=await _2(t.auth,o);u!==i.email&&await i.reload()}async function $2(i,e,t){const s=ve(i),u={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};t&&Ud(s.auth,u,t);const{email:d}=await T2(s.auth,u);d!==i.email&&await i.reload()}/**
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
 */async function X2(i,e){return _t(i,"POST","/v1/accounts:update",e)}/**
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
 */async function W2(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=ve(i),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},d=await Dr(s,X2(s.auth,u));s.displayName=d.displayName||null,s.photoURL=d.photoUrl||null;const m=s.providerData.find(({providerId:p})=>p==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(d)}function J2(i,e){const t=ve(i);return ot(t.auth.app)?Promise.reject($t(t.auth)):rA(t,e,null)}function Z2(i,e){return rA(ve(i),null,e)}async function rA(i,e,t){const{auth:s}=i,u={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(u.email=e),t&&(u.password=t);const d=await Dr(i,m2(s,u));await i._updateTokensIfNecessary(d,!0)}/**
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
 */function eN(i){var o,u;if(!i)return null;const{providerId:e}=i,t=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},s=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(i!=null&&i.idToken)){const d=(u=(o=kd(i.idToken))==null?void 0:o.firebase)==null?void 0:u.sign_in_provider;if(d){const m=d!=="anonymous"&&d!=="custom"?d:null;return new Lo(s,m)}}if(!e)return null;switch(e){case"facebook.com":return new tN(s,t);case"github.com":return new nN(s,t);case"google.com":return new iN(s,t);case"twitter.com":return new rN(s,t,i.screenName||null);case"custom":case"anonymous":return new Lo(s,null);default:return new Lo(s,e,t)}}class Lo{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class sA extends Lo{constructor(e,t,s,o){super(e,t,s),this.username=o}}class tN extends Lo{constructor(e,t){super(e,"facebook.com",t)}}class nN extends sA{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class iN extends Lo{constructor(e,t){super(e,"google.com",t)}}class rN extends sA{constructor(e,t,s){super(e,"twitter.com",t,s)}}function sN(i){const{user:e,_tokenResponse:t}=i;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:eN(t)}/**
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
 */class ya{constructor(e,t,s){this.type=e,this.credential=t,this.user=s}static _fromIdtoken(e,t){return new ya("enroll",e,t)}static _fromMfaPendingCredential(e){return new ya("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return ya._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((s=e.multiFactorSession)!=null&&s.idToken)return ya._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Pg{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=dt(e),o=t.customData._serverResponse,u=(o.mfaInfo||[]).map(m=>oc._fromServerResponse(s,m));te(o.mfaPendingCredential,s,"internal-error");const d=ya._fromMfaPendingCredential(o.mfaPendingCredential);return new Pg(d,u,async m=>{const p=await m._process(s,d);delete o.mfaInfo,delete o.mfaPendingCredential;const y={...o,idToken:p.idToken,refreshToken:p.refreshToken};switch(t.operationType){case"signIn":const v=await ri._fromIdTokenResponse(s,t.operationType,y);return await s._updateCurrentUser(v.user),v;case"reauthenticate":return te(t.user,s,"internal-error"),ri._forOperation(t.user,t.operationType,y);default:sn(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function aN(i,e){var o;const t=ve(i),s=e;return te(e.customData.operationType,t,"argument-error"),te((o=s.customData._serverResponse)==null?void 0:o.mfaPendingCredential,t,"argument-error"),Pg._fromError(t,s)}/**
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
 */function ME(i,e){return _t(i,"POST","/v2/accounts/mfaEnrollment:start",yt(i,e))}function oN(i,e){return _t(i,"POST","/v2/accounts/mfaEnrollment:finalize",yt(i,e))}function lN(i,e){return _t(i,"POST","/v2/accounts/mfaEnrollment:withdraw",yt(i,e))}class Vg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(s=>oc._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Vg(e)}async getSession(){return ya._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const s=e,o=await this.getSession(),u=await Dr(this.user,s._process(this.user.auth,o,t));return await this.user._updateTokensIfNecessary(u),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const o=await Dr(this.user,lN(this.user.auth,{idToken:s,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:u})=>u!==t),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const bp=new WeakMap;function uN(i){const e=ve(i);return bp.has(e)||bp.set(e,Vg._fromUser(e)),bp.get(e)}const _d="__sak";/**
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
 */class aA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_d,"1"),this.storage.removeItem(_d),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cN=1e3,hN=10;class oA extends aA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((d,m,p)=>{this.notifyListeners(d,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(s);!t&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);GC()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,hN):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},cN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}oA.type="LOCAL";const Lg=oA;/**
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
 */class lA extends aA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lA.type="SESSION";const Aa=lA;/**
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
 */function dN(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class jd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new jd(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,d=this.handlersMap[o];if(!(d!=null&&d.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(d).map(async y=>y(t.origin,u)),p=await dN(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jd.receivers=[];/**
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
 */function lc(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class fN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,d;return new Promise((m,p)=>{const y=lc("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:o,onMessage(T){const S=T;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(S.data.response);break;default:clearTimeout(v),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function Vt(){return window}function mN(i){Vt().location.href=i}/**
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
 */function Ug(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function pN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gN(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function yN(){return Ug()?self:null}/**
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
 */const uA="firebaseLocalStorageDb",_N=1,vd="firebaseLocalStorage",cA="fbase_key";class uc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zd(i,e){return i.transaction([vd],e?"readwrite":"readonly").objectStore(vd)}function vN(){const i=indexedDB.deleteDatabase(uA);return new uc(i).toPromise()}function jp(){const i=indexedDB.open(uA,_N);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(vd,{keyPath:cA})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(vd)?e(s):(s.close(),await vN(),e(await jp()))})})}async function PE(i,e,t){const s=zd(i,!0).put({[cA]:e,value:t});return new uc(s).toPromise()}async function EN(i,e){const t=zd(i,!1).get(e),s=await new uc(t).toPromise();return s===void 0?null:s.value}function VE(i,e){const t=zd(i,!0).delete(e);return new uc(t).toPromise()}const TN=800,bN=3;class hA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>bN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ug()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jd._getInstance(yN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await pN(),!this.activeServiceWorker)return;this.sender=new fN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jp();return await PE(e,_d,"1"),await VE(e,_d),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>PE(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>EN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>VE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=zd(o,!1).getAll();return new uc(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hA.type="LOCAL";const Yu=hA;/**
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
 */function LE(i,e){return _t(i,"POST","/v2/accounts/mfaSignIn:start",yt(i,e))}function AN(i,e){return _t(i,"POST","/v2/accounts/mfaSignIn:finalize",yt(i,e))}/**
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
 */const Ap=Kb("rcb"),wN=new ic(3e4,6e4);class SN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Vt().grecaptcha)!=null&&e.render)}load(e,t=""){return te(RN(t),e,"argument-error"),this.shouldResolveImmediately(t)&&SE(Vt().grecaptcha)?Promise.resolve(Vt().grecaptcha):new Promise((s,o)=>{const u=Vt().setTimeout(()=>{o(Ht(e,"network-request-failed"))},wN.get());Vt()[Ap]=()=>{Vt().clearTimeout(u),delete Vt()[Ap];const m=Vt().grecaptcha;if(!m||!SE(m)){o(Ht(e,"internal-error"));return}const p=m.render;m.render=(y,v)=>{const T=p(y,v);return this.counter++,T},this.hostLanguage=t,s(m)};const d=`${JC()}?${Zo({onload:Ap,render:"explicit",hl:t})}`;xg(d).catch(()=>{clearTimeout(u),o(Ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Vt().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function RN(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class IN{async load(e){return new i2(e)}clearedOneInstance(){}}/**
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
 */const ku="recaptcha",CN={theme:"light",type:"image"};let NN=class{constructor(e,t,s={...CN}){this.parameters=s,this.type=ku,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=dt(e),this.isInvisible=this.parameters.size==="invisible",te(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof t=="string"?document.getElementById(t):t;te(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new IN:new SN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(o=>{const u=d=>{d&&(this.tokenChangeListeners.delete(u),o(d))};this.tokenChangeListeners.add(u),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){te(!this.parameters.sitekey,this.auth,"argument-error"),te(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),te(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=Vt()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){te(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){te(Cg()&&!Ug(),this.auth,"internal-error"),await xN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await kC(this.auth);te(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return te(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function xN(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
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
 */class jg{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Ea._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function DN(i,e,t){if(ot(i.app))return Promise.reject($t(i));const s=dt(i),o=await Bd(s,e,ve(t));return new jg(o,u=>Ld(s,u))}async function ON(i,e,t){const s=ve(i);await Vd(!1,s,"phone");const o=await Bd(s.auth,e,ve(t));return new jg(o,u=>tA(s,u))}async function kN(i,e,t){const s=ve(i);if(ot(s.auth.app))return Promise.reject($t(s.auth));const o=await Bd(s.auth,e,ve(t));return new jg(o,u=>nA(s,u))}async function Bd(i,e,t){var s;if(!i._getRecaptchaConfig())try{await u2(i)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const u=o.session;if("phoneNumber"in o){te(u.type==="enroll",i,"internal-error");const d={idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await As(i,d,"mfaSmsEnrollment",async(v,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===Ou){te((t==null?void 0:t.type)===ku,v,"argument-error");const S=await wp(v,T,t);return ME(v,S)}return ME(v,T)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneSessionInfo.sessionInfo}else{te(u.type==="signin",i,"internal-error");const d=((s=o.multiFactorHint)==null?void 0:s.uid)||o.multiFactorUid;te(d,i,"missing-multi-factor-info");const m={mfaPendingCredential:u.credential,mfaEnrollmentId:d,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await As(i,m,"mfaSmsSignIn",async(T,S)=>{if(S.phoneSignInInfo.captchaResponse===Ou){te((t==null?void 0:t.type)===ku,T,"argument-error");const z=await wp(T,S,t);return LE(T,z)}return LE(T,S)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const u={phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await As(i,u,"sendVerificationCode",async(y,v)=>{if(v.captchaResponse===Ou){te((t==null?void 0:t.type)===ku,y,"argument-error");const T=await wp(y,v,t);return OE(y,T)}return OE(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).sessionInfo}}finally{t==null||t._reset()}}async function MN(i,e){const t=ve(i);if(ot(t.auth.app))return Promise.reject($t(t.auth));await Dg(t,e)}async function wp(i,e,t){te(t.type===ku,i,"argument-error");const s=await t.verify();te(typeof s=="string",i,"argument-error");const o={...e};if("phoneEnrollmentInfo"in o){const u=o.phoneEnrollmentInfo.phoneNumber,d=o.phoneEnrollmentInfo.captchaResponse,m=o.phoneEnrollmentInfo.clientType,p=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:s,captchaResponse:d,clientType:m,recaptchaVersion:p}}),o}else if("phoneSignInInfo"in o){const u=o.phoneSignInInfo.captchaResponse,d=o.phoneSignInInfo.clientType,m=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:u,clientType:d,recaptchaVersion:m}}),o}else return Object.assign(o,{recaptchaToken:s}),o}/**
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
 */let wa=class td{constructor(e){this.providerId=td.PROVIDER_ID,this.auth=dt(e)}verifyPhoneNumber(e,t){return Bd(this.auth,e,ve(t))}static credential(e,t){return Ea._fromVerification(e,t)}static credentialFromResult(e){const t=e;return td.credentialFromTaggedObject(t)}static credentialFromError(e){return td.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:s}=e;return t&&s?Ea._fromTokenResponse(t,s):null}};wa.PROVIDER_ID="phone";wa.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Da(i,e){return e?Un(e):(te(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class zg extends tl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PN(i){return eA(i.auth,new zg(i),i.bypassAuthState)}function VN(i){const{auth:e,user:t}=i;return te(t,e,"internal-error"),Zb(t,new zg(i),i.bypassAuthState)}async function LN(i){const{auth:e,user:t}=i;return te(t,e,"internal-error"),Dg(t,new zg(i),i.bypassAuthState)}/**
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
 */class dA{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:d,type:m}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PN;case"linkViaPopup":case"linkViaRedirect":return LN;case"reauthViaPopup":case"reauthViaRedirect":return VN;default:sn(this.auth,"internal-error")}}resolve(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const UN=new ic(2e3,1e4);async function jN(i,e,t){if(ot(i.app))return Promise.reject(Ht(i,"operation-not-supported-in-this-environment"));const s=dt(i);el(i,e,Lr);const o=Da(s,t);return new Sr(s,"signInViaPopup",e,o).executeNotNull()}async function zN(i,e,t){const s=ve(i);if(ot(s.auth.app))return Promise.reject(Ht(s.auth,"operation-not-supported-in-this-environment"));el(s.auth,e,Lr);const o=Da(s.auth,t);return new Sr(s.auth,"reauthViaPopup",e,o,s).executeNotNull()}async function BN(i,e,t){const s=ve(i);el(s.auth,e,Lr);const o=Da(s.auth,t);return new Sr(s.auth,"linkViaPopup",e,o,s).executeNotNull()}class Sr extends dA{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Ei(this.filter.length===1,"Popup operations only handle one event");const e=lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UN.get())};e()}}Sr.currentPopupAction=null;/**
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
 */const qN="pendingRedirect",Mu=new Map;class HN extends dA{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Mu.get(this.auth._key());if(!e){try{const s=await FN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Mu.set(this.auth._key(),e)}return this.bypassAuthState||Mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FN(i,e){const t=mA(e),s=fA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}async function Bg(i,e){return fA(i)._set(mA(e),"true")}function GN(){Mu.clear()}function qg(i,e){Mu.set(i._key(),e)}function fA(i){return Un(i._redirectPersistence)}function mA(i){return va(qN,i.config.apiKey,i.name)}/**
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
 */function KN(i,e,t){return YN(i,e,t)}async function YN(i,e,t){if(ot(i.app))return Promise.reject($t(i));const s=dt(i);el(i,e,Lr),await s._initializationPromise;const o=Da(s,t);return await Bg(o,s),o._openRedirect(s,e,"signInViaRedirect")}function QN(i,e,t){return $N(i,e,t)}async function $N(i,e,t){const s=ve(i);if(el(s.auth,e,Lr),ot(s.auth.app))return Promise.reject($t(s.auth));await s.auth._initializationPromise;const o=Da(s.auth,t);await Bg(o,s.auth);const u=await pA(s);return o._openRedirect(s.auth,e,"reauthViaRedirect",u)}function XN(i,e,t){return WN(i,e,t)}async function WN(i,e,t){const s=ve(i);el(s.auth,e,Lr),await s.auth._initializationPromise;const o=Da(s.auth,t);await Vd(!1,s,e.providerId),await Bg(o,s.auth);const u=await pA(s);return o._openRedirect(s.auth,e,"linkViaRedirect",u)}async function JN(i,e){return await dt(i)._initializationPromise,qd(i,e,!1)}async function qd(i,e,t=!1){if(ot(i.app))return Promise.reject($t(i));const s=dt(i),o=Da(s,e),d=await new HN(s,o,t).execute();return d&&!t&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}async function pA(i){const e=lc(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
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
 */const ZN=600*1e3;class gA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ex(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!yA(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ht(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZN&&this.cachedEventUids.clear(),this.cachedEventUids.has(UE(e))}saveEventToCache(e){this.cachedEventUids.add(UE(e)),this.lastProcessedEventTime=Date.now()}}function UE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function yA({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ex(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yA(i);default:return!1}}/**
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
 */async function _A(i,e={}){return _t(i,"GET","/v1/projects",e)}/**
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
 */const tx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nx=/^https?/;async function ix(i){if(i.config.emulator)return;const{authorizedDomains:e}=await _A(i);for(const t of e)try{if(rx(t))return}catch{}sn(i,"unauthorized-domain")}function rx(i){const e=Fu(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&d.hostname===s}if(!nx.test(t))return!1;if(tx.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const sx=new ic(3e4,6e4);function jE(){const i=Vt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function ax(i){return new Promise((e,t)=>{var o,u,d;function s(){jE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jE(),t(Ht(i,"network-request-failed"))},timeout:sx.get()})}if((u=(o=Vt().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((d=Vt().gapi)!=null&&d.load)s();else{const m=Kb("iframefcb");return Vt()[m]=()=>{gapi.load?s():t(Ht(i,"network-request-failed"))},xg(`${e2()}?onload=${m}`).catch(p=>t(p))}}).catch(e=>{throw nd=null,e})}let nd=null;function ox(i){return nd=nd||ax(i),nd}/**
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
 */const lx=new ic(5e3,15e3),ux="__/auth/iframe",cx="emulator/auth/iframe",hx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fx(i){const e=i.config;te(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Ng(e,cx):`https://${i.config.authDomain}/${ux}`,s={apiKey:e.apiKey,appName:i.name,v:Pr},o=dx.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Zo(s).slice(1)}`}async function mx(i){const e=await ox(i),t=Vt().gapi;return te(t,i,"internal-error"),e.open({where:document.body,url:fx(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hx,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const d=Ht(i,"network-request-failed"),m=Vt().setTimeout(()=>{u(d)},lx.get());function p(){Vt().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const px={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gx=500,yx=600,_x="_blank",vx="http://localhost";class zE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ex(i,e,t,s=gx,o=yx){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p={...px,width:s.toString(),height:o.toString(),top:u,left:d},y=jt().toLowerCase();t&&(m=zb(y)?_x:t),Ub(y)&&(e=e||vx,p.scrollbars="yes");const v=Object.entries(p).reduce((S,[z,Y])=>`${S}${z}=${Y},`,"");if(FC(y)&&m!=="_self")return Tx(e||"",m),new zE(null);const T=window.open(e||"",m,v);te(T,i,"popup-blocked");try{T.focus()}catch{}return new zE(T)}function Tx(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const bx="__/auth/handler",Ax="emulator/auth/handler",wx=encodeURIComponent("fac");async function zp(i,e,t,s,o,u){te(i.config.authDomain,i,"auth-domain-config-required"),te(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Pr,eventId:o};if(e instanceof Lr){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",JR(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries(u||{}))d[v]=T}if(e instanceof nl){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(d.scopes=v.join(","))}i.tenantId&&(d.tid=i.tenantId);const m=d;for(const v of Object.keys(m))m[v]===void 0&&delete m[v];const p=await i._getAppCheckToken(),y=p?`#${wx}=${encodeURIComponent(p)}`:"";return`${Sx(i)}?${Zo(m).slice(1)}${y}`}function Sx({config:i}){return i.emulator?Ng(i,Ax):`https://${i.authDomain}/${bx}`}/**
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
 */const Sp="webStorageSupport";class Rx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Aa,this._completeRedirectFn=qd,this._overrideRedirectResult=qg}async _openPopup(e,t,s,o){var d;Ei((d=this.eventManagers[e._key()])==null?void 0:d.manager,"_initialize() not called before _openPopup()");const u=await zp(e,t,s,Fu(),o);return Ex(e,u,lc())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await zp(e,t,s,Fu(),o);return mN(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ei(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await mx(e),s=new gA(e);return t.register("authEvent",o=>(te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sp,{type:Sp},o=>{var d;const u=(d=o==null?void 0:o[0])==null?void 0:d[Sp];u!==void 0&&t(!!u),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ix(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fb()||jb()||sc()}}const Ix=Rx;class Cx{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ji("unexpected MultiFactorSessionType")}}}class Hg extends Cx{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Hg(e)}_finalizeEnroll(e,t,s){return oN(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return AN(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class vA{constructor(){}static assertion(e){return Hg._fromCredential(e)}}vA.FACTOR_ID="phone";var BE="@firebase/auth",qE="1.12.0";/**
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
 */class Nx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xx(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dx(i){xr(new vi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:m}=s.options;te(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gb(i)},y=new XC(s,o,u,p);return c2(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),xr(new vi("auth-internal",e=>{const t=dt(e.getProvider("auth").getImmediate());return(s=>new Nx(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(BE,qE,xx(i)),Bn(BE,qE,"esm2020")}/**
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
 */const Ox=300;zR("authIdTokenMaxAge");function kx(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}WC({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Ht("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",kx().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dx("Browser");/**
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
 */function Sa(){return window}/**
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
 */const Mx=2e3;async function Px(i,e,t){const{BuildInfo:s}=Sa();Ei(e.sessionId,"AuthEvent did not contain a session ID");const o=await zx(e.sessionId),u={};return sc()?u.ibi=s.packageName:rc()?u.apn=s.packageName:sn(i,"operation-not-supported-in-this-environment"),s.displayName&&(u.appDisplayName=s.displayName),u.sessionId=o,zp(i,t,e.type,void 0,e.eventId??void 0,u)}async function Vx(i){const{BuildInfo:e}=Sa(),t={};sc()?t.iosBundleId=e.packageName:rc()?t.androidPackageName=e.packageName:sn(i,"operation-not-supported-in-this-environment"),await _A(i,t)}function Lx(i){const{cordova:e}=Sa();return new Promise(t=>{e.plugins.browsertab.isAvailable(s=>{let o=null;s?e.plugins.browsertab.openUrl(i):o=e.InAppBrowser.open(i,HC()?"_blank":"_system","location=yes"),t(o)})})}async function Ux(i,e,t){const{cordova:s}=Sa();let o=()=>{};try{await new Promise((u,d)=>{let m=null;function p(){var S;u();const T=(S=s.plugins.browsertab)==null?void 0:S.close;typeof T=="function"&&T(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function y(){m||(m=window.setTimeout(()=>{d(Ht(i,"redirect-cancelled-by-user"))},Mx))}function v(){(document==null?void 0:document.visibilityState)==="visible"&&y()}e.addPassiveListener(p),document.addEventListener("resume",y,!1),rc()&&document.addEventListener("visibilitychange",v,!1),o=()=>{e.removePassiveListener(p),document.removeEventListener("resume",y,!1),document.removeEventListener("visibilitychange",v,!1),m&&window.clearTimeout(m)}})}finally{o()}}function jx(i){var t,s,o,u,d,m,p,y,v,T;const e=Sa();te(typeof((t=e==null?void 0:e.universalLinks)==null?void 0:t.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),te(typeof((s=e==null?void 0:e.BuildInfo)==null?void 0:s.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),te(typeof((d=(u=(o=e==null?void 0:e.cordova)==null?void 0:o.plugins)==null?void 0:u.browsertab)==null?void 0:d.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),te(typeof((y=(p=(m=e==null?void 0:e.cordova)==null?void 0:m.plugins)==null?void 0:p.browsertab)==null?void 0:y.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),te(typeof((T=(v=e==null?void 0:e.cordova)==null?void 0:v.InAppBrowser)==null?void 0:T.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function zx(i){const e=Bx(i),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(o=>o.toString(16).padStart(2,"0")).join("")}function Bx(i){if(Ei(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),t=new Uint8Array(e);for(let s=0;s<i.length;s++)t[s]=i.charCodeAt(s);return t}/**
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
 */const qx=20;class Hx extends gA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Fx(i,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:Yx(),postBody:null,tenantId:i.tenantId,error:Ht(i,"no-auth-event")}}function Gx(i,e){return Bp()._set(qp(i),e)}async function HE(i){const e=await Bp()._get(qp(i));return e&&await Bp()._remove(qp(i)),e}function Kx(i,e){var s,o;const t=$x(e);if(t.includes("/__/auth/callback")){const u=id(t),d=u.firebaseError?Qx(decodeURIComponent(u.firebaseError)):null,m=(o=(s=d==null?void 0:d.code)==null?void 0:s.split("auth/"))==null?void 0:o[1],p=m?Ht(m):null;return p?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:t,postBody:null}}return null}function Yx(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<qx;t++){const s=Math.floor(Math.random()*e.length);i.push(e.charAt(s))}return i.join("")}function Bp(){return Un(Lg)}function qp(i){return va("authEvent",i.config.apiKey,i.name)}function Qx(i){try{return JSON.parse(i)}catch{return null}}function $x(i){const e=id(i),t=e.link?decodeURIComponent(e.link):void 0,s=id(t).link,o=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return id(o).link||o||s||t||i}function id(i){if(!(i!=null&&i.includes("?")))return{};const[e,...t]=i.split("?");return ko(t.join("?"))}/**
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
 */const Xx=500;class Wx{constructor(){this._redirectPersistence=Aa,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=qd,this._overrideRedirectResult=qg}async _initialize(e){const t=e._key();let s=this.eventManagers.get(t);return s||(s=new Hx(e),this.eventManagers.set(t,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){sn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,s,o){jx(e);const u=await this._initialize(e);await u.initialized(),u.resetRedirect(),GN(),await this._originValidation(e);const d=Fx(e,s,o);await Gx(e,d);const m=await Px(e,d,t),p=await Lx(m);return Ux(e,u,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vx(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:s,handleOpenURL:o,BuildInfo:u}=Sa(),d=setTimeout(async()=>{await HE(e),t.onEvent(FE())},Xx),m=async v=>{clearTimeout(d);const T=await HE(e);let S=null;T&&(v!=null&&v.url)&&(S=Kx(T,v.url)),t.onEvent(S||FE())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,m);const p=o,y=`${u.packageName.toLowerCase()}://`;Sa().handleOpenURL=async v=>{if(v.toLowerCase().startsWith(y)&&m({url:v}),typeof p=="function")try{p(v)}catch(T){console.error(T)}}}}const Jx=Wx;function FE(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ht("no-auth-event")}}/**
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
 */function Zx(i,e){dt(i)._logFramework(e)}var eD="@firebase/auth-compat",tD="0.6.2";/**
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
 */const nD=1e3;function Pu(){var i;return((i=self==null?void 0:self.location)==null?void 0:i.protocol)||null}function iD(){return Pu()==="http:"||Pu()==="https:"}function EA(i=jt()){return!!((Pu()==="file:"||Pu()==="ionic:"||Pu()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function rD(){return vg()||_g()}function sD(){return mb()&&(document==null?void 0:document.documentMode)===11}function aD(i=jt()){return/Edge\/\d+/.test(i)}function oD(i=jt()){return sD()||aD(i)}function TA(){try{const i=self.localStorage,e=lc();if(i)return i.setItem(e,"1"),i.removeItem(e),oD()?dd():!0}catch{return Fg()&&dd()}return!1}function Fg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Rp(){return(iD()||fb()||EA())&&!rD()&&TA()&&!Fg()}function bA(){return EA()&&typeof document<"u"}async function lD(){return bA()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},nD);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function uD(){return typeof window<"u"?window:null}/**
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
 */const Ln={LOCAL:"local",NONE:"none",SESSION:"session"},_u=te,AA="persistence";function cD(i,e){if(_u(Object.values(Ln).includes(e),i,"invalid-persistence-type"),vg()){_u(e!==Ln.SESSION,i,"unsupported-persistence-type");return}if(_g()){_u(e===Ln.NONE,i,"unsupported-persistence-type");return}if(Fg()){_u(e===Ln.NONE||e===Ln.LOCAL&&dd(),i,"unsupported-persistence-type");return}_u(e===Ln.NONE||TA(),i,"unsupported-persistence-type")}async function Hp(i){await i._initializationPromise;const e=wA(),t=va(AA,i.config.apiKey,i.name);e&&e.setItem(t,i._getPersistenceType())}function hD(i,e){const t=wA();if(!t)return[];const s=va(AA,i,e);switch(t.getItem(s)){case Ln.NONE:return[Go];case Ln.LOCAL:return[Yu,Aa];case Ln.SESSION:return[Aa];default:return[]}}function wA(){var i;try{return((i=uD())==null?void 0:i.sessionStorage)||null}catch{return null}}/**
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
 */const dD=te;class vs{constructor(){this.browserResolver=Un(Ix),this.cordovaResolver=Un(Jx),this.underlyingResolver=null,this._redirectPersistence=Aa,this._completeRedirectFn=qd,this._overrideRedirectResult=qg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,s,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,s,o)}async _openRedirect(e,t,s,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,s,o)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return bA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return dD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await lD();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function SA(i){return i.unwrap()}function fD(i){return i.wrapped()}/**
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
 */function mD(i){return RA(i)}function pD(i,e){var s;const t=(s=e.customData)==null?void 0:s._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const o=e;o.resolver=new gD(i,aN(i,e))}else if(t){const o=RA(e),u=e;o&&(u.credential=o,u.tenantId=t.tenantId||void 0,u.email=t.email||void 0,u.phoneNumber=t.phoneNumber||void 0)}}function RA(i){const{_tokenResponse:e}=i instanceof dn?i.customData:i;if(!e)return null;if(!(i instanceof dn)&&"temporaryProof"in e&&"phoneNumber"in e)return wa.credentialFromResult(i);const t=e.providerId;if(!t||t===gu.PASSWORD)return null;let s;switch(t){case gu.GOOGLE:s=Qi;break;case gu.FACEBOOK:s=Yi;break;case gu.GITHUB:s=$i;break;case gu.TWITTER:s=Xi;break;default:const{oauthIdToken:o,oauthAccessToken:u,oauthTokenSecret:d,pendingToken:m,nonce:p}=e;return!u&&!d&&!o&&!m?null:m?t.startsWith("saml.")?Ko._create(t,m):ir._fromParams({providerId:t,signInMethod:t,pendingToken:m,idToken:o,accessToken:u}):new Vo(t).credential({idToken:o,accessToken:u,rawNonce:p})}return i instanceof dn?s.credentialFromError(i):s.credentialFromResult(i)}function Sn(i,e){return e.catch(t=>{throw t instanceof dn&&pD(i,t),t}).then(t=>{const s=t.operationType,o=t.user;return{operationType:s,credential:mD(t),additionalUserInfo:sN(t),user:Hd.getOrCreate(o)}})}async function Fp(i,e){const t=await e;return{verificationId:t.verificationId,confirm:s=>Sn(i,t.confirm(s))}}class gD{constructor(e,t){this.resolver=t,this.auth=fD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Sn(SA(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Hd=class Su{constructor(e){this._delegate=e,this.multiFactor=uN(e)}static getOrCreate(e){return Su.USER_MAP.has(e)||Su.USER_MAP.set(e,new Su(e)),Su.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Sn(this.auth,tA(this._delegate,e))}async linkWithPhoneNumber(e,t){return Fp(this.auth,ON(this._delegate,e,t))}async linkWithPopup(e){return Sn(this.auth,BN(this._delegate,e,vs))}async linkWithRedirect(e){return await Hp(dt(this.auth)),XN(this._delegate,e,vs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Sn(this.auth,nA(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Fp(this.auth,kN(this._delegate,e,t))}reauthenticateWithPopup(e){return Sn(this.auth,zN(this._delegate,e,vs))}async reauthenticateWithRedirect(e){return await Hp(dt(this.auth)),QN(this._delegate,e,vs)}sendEmailVerification(e){return Q2(this._delegate,e)}async unlink(e){return await M2(this._delegate,e),this}updateEmail(e){return J2(this._delegate,e)}updatePassword(e){return Z2(this._delegate,e)}updatePhoneNumber(e){return MN(this._delegate,e)}updateProfile(e){return W2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return $2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Hd.USER_MAP=new WeakMap;/**
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
 */const vu=te;class Gp{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;vu(s,"invalid-api-key",{appName:e.name}),vu(s,"invalid-api-key",{appName:e.name});const o=typeof window<"u"?vs:void 0;this._delegate=t.initialize({options:{persistence:yD(s,e.name),popupRedirectResolver:o}}),this._delegate._updateErrorMap(AC),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Hd.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){h2(this._delegate,e,t)}applyActionCode(e){return j2(this._delegate,e)}checkActionCode(e){return iA(this._delegate,e)}confirmPasswordReset(e,t){return U2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Sn(this._delegate,B2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Y2(this._delegate,e)}isSignInWithEmailLink(e){return F2(this._delegate,e)}async getRedirectResult(){vu(Rp(),this._delegate,"operation-not-supported-in-this-environment");const e=await JN(this._delegate,vs);return e?Sn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Zx(this._delegate,e)}onAuthStateChanged(e,t,s){const{next:o,error:u,complete:d}=GE(e,t,s);return this._delegate.onAuthStateChanged(o,u,d)}onIdTokenChanged(e,t,s){const{next:o,error:u,complete:d}=GE(e,t,s);return this._delegate.onIdTokenChanged(o,u,d)}sendSignInLinkToEmail(e,t){return H2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return L2(this._delegate,e,t||void 0)}async setPersistence(e){cD(this._delegate,e);let t;switch(e){case Ln.SESSION:t=Aa;break;case Ln.LOCAL:t=await Un(Yu)._isAvailable()?Yu:Lg;break;case Ln.NONE:t=Go;break;default:return sn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Sn(this._delegate,k2(this._delegate))}signInWithCredential(e){return Sn(this._delegate,Ld(this._delegate,e))}signInWithCustomToken(e){return Sn(this._delegate,V2(this._delegate,e))}signInWithEmailAndPassword(e,t){return Sn(this._delegate,q2(this._delegate,e,t))}signInWithEmailLink(e,t){return Sn(this._delegate,G2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Fp(this._delegate,DN(this._delegate,e,t))}async signInWithPopup(e){return vu(Rp(),this._delegate,"operation-not-supported-in-this-environment"),Sn(this._delegate,jN(this._delegate,e,vs))}async signInWithRedirect(e){return vu(Rp(),this._delegate,"operation-not-supported-in-this-environment"),await Hp(this._delegate),KN(this._delegate,e,vs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return z2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Gp.Persistence=Ln;function GE(i,e,t){let s=i;typeof i!="function"&&({next:s,error:e,complete:t}=i);const o=s;return{next:d=>o(d&&Hd.getOrCreate(d)),error:e,complete:t}}function yD(i,e){const t=hD(i,e);if(typeof self<"u"&&!t.includes(Yu)&&t.push(Yu),typeof window<"u")for(const s of[Lg,Aa])t.includes(s)||t.push(s);return t.includes(Go)||t.push(Go),t}/**
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
 */class Gg{static credential(e,t){return wa.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new wa(SA(bs.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Gg.PHONE_SIGN_IN_METHOD=wa.PHONE_SIGN_IN_METHOD;Gg.PROVIDER_ID=wa.PROVIDER_ID;/**
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
 */const _D=te;class vD{constructor(e,t,s=bs.app()){var o;_D((o=s.options)==null?void 0:o.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new NN(s.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const ED="auth-compat";function TD(i){i.INTERNAL.registerComponent(new vi(ED,e=>{const t=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new Gp(t,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Io.EMAIL_SIGNIN,PASSWORD_RESET:Io.PASSWORD_RESET,RECOVER_EMAIL:Io.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Io.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Io.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Io.VERIFY_EMAIL}},EmailAuthProvider:Ps,FacebookAuthProvider:Yi,GithubAuthProvider:$i,GoogleAuthProvider:Qi,OAuthProvider:Vo,SAMLAuthProvider:gd,PhoneAuthProvider:Gg,PhoneMultiFactorGenerator:vA,RecaptchaVerifier:vD,TwitterAuthProvider:Xi,Auth:Gp,AuthCredential:tl,Error:dn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(eD,tD)}TD(bs);/**
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
 */const IA="firebasestorage.googleapis.com",CA="storageBucket",bD=120*1e3,AD=600*1e3,wD=1e3;/**
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
 */class mt extends dn{constructor(e,t,s=0){super(Ip(e),`Firebase Storage: ${t} (${Ip(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ip(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lt;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lt||(lt={}));function Ip(i){return"storage/"+i}function Kg(){const i="An unknown error occurred, please check the error payload for server response.";return new mt(lt.UNKNOWN,i)}function SD(i){return new mt(lt.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")}function RD(i){return new mt(lt.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ID(){const i="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new mt(lt.UNAUTHENTICATED,i)}function CD(){return new mt(lt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ND(i){return new mt(lt.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")}function NA(){return new mt(lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xA(){return new mt(lt.CANCELED,"User canceled the upload/download.")}function xD(i){return new mt(lt.INVALID_URL,"Invalid URL '"+i+"'.")}function DD(i){return new mt(lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function OD(){return new mt(lt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+CA+"' property when initializing the app?")}function DA(){return new mt(lt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function kD(){return new mt(lt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function MD(){return new mt(lt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function PD(i){return new mt(lt.UNSUPPORTED_ENVIRONMENT,`${i} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Uo(i){return new mt(lt.INVALID_ARGUMENT,i)}function OA(){return new mt(lt.APP_DELETED,"The Firebase app was deleted.")}function kA(i){return new mt(lt.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Vu(i,e){return new mt(lt.INVALID_FORMAT,"String does not match format '"+i+"': "+e)}function Eu(i){throw new mt(lt.INTERNAL_ERROR,"Internal error: "+i)}/**
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
 */class hn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=hn.makeFromUrl(e,t)}catch{return new hn(e,"")}if(s.path==="")return s;throw DD(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(ye){ye.path.charAt(ye.path.length-1)==="/"&&(ye.path_=ye.path_.slice(0,-1))}const d="(/(.*))?$",m=new RegExp("^gs://"+o+d,"i"),p={bucket:1,path:3};function y(ye){ye.path_=decodeURIComponent(ye.path)}const v="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",z=new RegExp(`^https?://${T}/${v}/b/${o}/o${S}`,"i"),Y={bucket:1,path:3},ee=t===IA?"(?:storage.googleapis.com|storage.cloud.google.com)":t,Z="([^?#]*)",ce=new RegExp(`^https?://${ee}/${o}/${Z}`,"i"),ue=[{regex:m,indices:p,postModify:u},{regex:z,indices:Y,postModify:y},{regex:ce,indices:{bucket:1,path:2},postModify:y}];for(let ye=0;ye<ue.length;ye++){const Ce=ue[ye],J=Ce.regex.exec(e);if(J){const I=J[Ce.indices.bucket];let R=J[Ce.indices.path];R||(R=""),s=new hn(I,R),Ce.postModify(s);break}}if(s==null)throw xD(e);return s}}class VD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function LD(i,e,t){let s=1,o=null,u=null,d=!1,m=0;function p(){return m===2}let y=!1;function v(...Z){y||(y=!0,e.apply(null,Z))}function T(Z){o=setTimeout(()=>{o=null,i(z,p())},Z)}function S(){u&&clearTimeout(u)}function z(Z,...ce){if(y){S();return}if(Z){S(),v.call(null,Z,...ce);return}if(p()||d){S(),v.call(null,Z,...ce);return}s<64&&(s*=2);let ue;m===1?(m=2,ue=0):ue=(s+Math.random())*1e3,T(ue)}let Y=!1;function ee(Z){Y||(Y=!0,S(),!y&&(o!==null?(Z||(m=2),clearTimeout(o),T(0)):Z||(m=1)))}return T(0),u=setTimeout(()=>{d=!0,ee(!0)},t),ee}function UD(i){i(!1)}/**
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
 */function jD(i){return i!==void 0}function zD(i){return typeof i=="function"}function BD(i){return typeof i=="object"&&!Array.isArray(i)}function Fd(i){return typeof i=="string"||i instanceof String}function KE(i){return Yg()&&i instanceof Blob}function Yg(){return typeof Blob<"u"}function Kp(i,e,t,s){if(s<e)throw Uo(`Invalid value for '${i}'. Expected ${e} or greater.`);if(s>t)throw Uo(`Invalid value for '${i}'. Expected ${t} or less.`)}/**
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
 */function Vs(i,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${i}`}function MA(i){const e=encodeURIComponent;let t="?";for(const s in i)if(i.hasOwnProperty(s)){const o=e(s)+"="+e(i[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ta;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(Ta||(Ta={}));/**
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
 */function PA(i,e){const t=i>=500&&i<600,o=[408,429].indexOf(i)!==-1,u=e.indexOf(i)!==-1;return t||o||u}/**
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
 */class qD{constructor(e,t,s,o,u,d,m,p,y,v,T,S=!0,z=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=d,this.callback_=m,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=T,this.retry=S,this.isUsingEmulator=z,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((Y,ee)=>{this.resolve_=Y,this.reject_=ee,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Kh(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const d=m=>{const p=m.loaded,y=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&u.addUploadProgressListener(d),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(d),this.pendingConnection_=null;const m=u.getErrorCode()===Ta.NO_ERROR,p=u.getStatus();if(!m||PA(p,this.additionalRetryCodes_)&&this.retry){const v=u.getErrorCode()===Ta.ABORT;s(!1,new Kh(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;s(!0,new Kh(y,u))})},t=(s,o)=>{const u=this.resolve_,d=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());jD(p)?u(p):u()}catch(p){d(p)}else if(m!==null){const p=Kg();p.serverResponse=m.getErrorText(),this.errorCallback_?d(this.errorCallback_(m,p)):d(p)}else if(o.canceled){const p=this.appDelete_?OA():xA();d(p)}else{const p=NA();d(p)}};this.canceled_?t(!1,new Kh(!1,null,!0)):this.backoffId_=LD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kh{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function HD(i,e){e!==null&&e.length>0&&(i.Authorization="Firebase "+e)}function FD(i,e){i["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function GD(i,e){e&&(i["X-Firebase-GMPID"]=e)}function KD(i,e){e!==null&&(i["X-Firebase-AppCheck"]=e)}function YD(i,e,t,s,o,u,d=!0,m=!1){const p=MA(i.urlParams),y=i.url+p,v=Object.assign({},i.headers);return GD(v,e),HD(v,t),FD(v,u),KD(v,s),new qD(y,i.method,v,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,d,m)}/**
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
 */function QD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $D(...i){const e=QD();if(e!==void 0){const t=new e;for(let s=0;s<i.length;s++)t.append(i[s]);return t.getBlob()}else{if(Yg())return new Blob(i);throw new mt(lt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function XD(i,e,t){return i.webkitSlice?i.webkitSlice(e,t):i.mozSlice?i.mozSlice(e,t):i.slice?i.slice(e,t):null}/**
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
 */function WD(i){if(typeof atob>"u")throw PD("base-64");return atob(i)}/**
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
 */const ni={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Cp{constructor(e,t){this.data=e,this.contentType=t||null}}function VA(i,e){switch(i){case ni.RAW:return new Cp(LA(e));case ni.BASE64:case ni.BASE64URL:return new Cp(UA(i,e));case ni.DATA_URL:return new Cp(ZD(e),eO(e))}throw Kg()}function LA(i){const e=[];for(let t=0;t<i.length;t++){let s=i.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<i.length-1&&(i.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const u=s,d=i.charCodeAt(++t);s=65536|(u&1023)<<10|d&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function JD(i){let e;try{e=decodeURIComponent(i)}catch{throw Vu(ni.DATA_URL,"Malformed data URL.")}return LA(e)}function UA(i,e){switch(i){case ni.BASE64:{const o=e.indexOf("-")!==-1,u=e.indexOf("_")!==-1;if(o||u)throw Vu(i,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case ni.BASE64URL:{const o=e.indexOf("+")!==-1,u=e.indexOf("/")!==-1;if(o||u)throw Vu(i,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=WD(e)}catch(o){throw o.message.includes("polyfill")?o:Vu(i,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class jA{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Vu(ni.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=tO(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function ZD(i){const e=new jA(i);return e.base64?UA(ni.BASE64,e.rest):JD(e.rest)}function eO(i){return new jA(i).contentType}function tO(i,e){return i.length>=e.length?i.substring(i.length-e.length)===e:!1}/**
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
 */class wr{constructor(e,t){let s=0,o="";KE(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(KE(this.data_)){const s=this.data_,o=XD(s,e,t);return o===null?null:new wr(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new wr(s,!0)}}static getBlob(...e){if(Yg()){const t=e.map(s=>s instanceof wr?s.data_:s);return new wr($D.apply(null,t))}else{const t=e.map(d=>Fd(d)?VA(ni.RAW,d).data:d.data_);let s=0;t.forEach(d=>{s+=d.byteLength});const o=new Uint8Array(s);let u=0;return t.forEach(d=>{for(let m=0;m<d.length;m++)o[u++]=d[m]}),new wr(o,!0)}}uploadData(){return this.data_}}/**
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
 */function Qg(i){let e;try{e=JSON.parse(i)}catch{return null}return BD(e)?e:null}/**
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
 */function nO(i){if(i.length===0)return null;const e=i.lastIndexOf("/");return e===-1?"":i.slice(0,e)}function iO(i,e){const t=e.split("/").filter(s=>s.length>0).join("/");return i.length===0?t:i+"/"+t}function zA(i){const e=i.lastIndexOf("/",i.length-2);return e===-1?i:i.slice(e+1)}/**
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
 */function rO(i,e){return e}class gn{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||rO}}let Yh=null;function sO(i){return!Fd(i)||i.length<2?i:zA(i)}function Gd(){if(Yh)return Yh;const i=[];i.push(new gn("bucket")),i.push(new gn("generation")),i.push(new gn("metageneration")),i.push(new gn("name","fullPath",!0));function e(u,d){return sO(d)}const t=new gn("name");t.xform=e,i.push(t);function s(u,d){return d!==void 0?Number(d):d}const o=new gn("size");return o.xform=s,i.push(o),i.push(new gn("timeCreated")),i.push(new gn("updated")),i.push(new gn("md5Hash",null,!0)),i.push(new gn("cacheControl",null,!0)),i.push(new gn("contentDisposition",null,!0)),i.push(new gn("contentEncoding",null,!0)),i.push(new gn("contentLanguage",null,!0)),i.push(new gn("contentType",null,!0)),i.push(new gn("metadata","customMetadata",!0)),Yh=i,Yh}function aO(i,e){function t(){const s=i.bucket,o=i.fullPath,u=new hn(s,o);return e._makeStorageReference(u)}Object.defineProperty(i,"ref",{get:t})}function oO(i,e,t){const s={};s.type="file";const o=t.length;for(let u=0;u<o;u++){const d=t[u];s[d.local]=d.xform(s,e[d.server])}return aO(s,i),s}function BA(i,e,t){const s=Qg(e);return s===null?null:oO(i,s,t)}function lO(i,e,t,s){const o=Qg(e);if(o===null||!Fd(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const d=encodeURIComponent;return u.split(",").map(y=>{const v=i.bucket,T=i.fullPath,S="/b/"+d(v)+"/o/"+d(T),z=Vs(S,t,s),Y=MA({alt:"media",token:y});return z+Y})[0]}function $g(i,e){const t={},s=e.length;for(let o=0;o<s;o++){const u=e[o];u.writable&&(t[u.server]=i[u.local])}return JSON.stringify(t)}/**
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
 */const YE="prefixes",QE="items";function uO(i,e,t){const s={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[YE])for(const o of t[YE]){const u=o.replace(/\/$/,""),d=i._makeStorageReference(new hn(e,u));s.prefixes.push(d)}if(t[QE])for(const o of t[QE]){const u=i._makeStorageReference(new hn(e,o.name));s.items.push(u)}return s}function cO(i,e,t){const s=Qg(t);return s===null?null:uO(i,e,s)}class Ur{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Zi(i){if(!i)throw Kg()}function Kd(i,e){function t(s,o){const u=BA(i,o,e);return Zi(u!==null),u}return t}function hO(i,e){function t(s,o){const u=cO(i,e,o);return Zi(u!==null),u}return t}function dO(i,e){function t(s,o){const u=BA(i,o,e);return Zi(u!==null),lO(u,o,i.host,i._protocol)}return t}function il(i){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=CD():o=ID():t.getStatus()===402?o=RD(i.bucket):t.getStatus()===403?o=ND(i.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function Yd(i){const e=il(i);function t(s,o){let u=e(s,o);return s.getStatus()===404&&(u=SD(i.path)),u.serverResponse=o.serverResponse,u}return t}function qA(i,e,t){const s=e.fullServerUrl(),o=Vs(s,i.host,i._protocol),u="GET",d=i.maxOperationRetryTime,m=new Ur(o,u,Kd(i,t),d);return m.errorHandler=Yd(e),m}function fO(i,e,t,s,o){const u={};e.isRoot?u.prefix="":u.prefix=e.path+"/",t.length>0&&(u.delimiter=t),s&&(u.pageToken=s),o&&(u.maxResults=o);const d=e.bucketOnlyServerUrl(),m=Vs(d,i.host,i._protocol),p="GET",y=i.maxOperationRetryTime,v=new Ur(m,p,hO(i,e.bucket),y);return v.urlParams=u,v.errorHandler=il(e),v}function mO(i,e,t){const s=e.fullServerUrl(),o=Vs(s,i.host,i._protocol),u="GET",d=i.maxOperationRetryTime,m=new Ur(o,u,dO(i,t),d);return m.errorHandler=Yd(e),m}function pO(i,e,t,s){const o=e.fullServerUrl(),u=Vs(o,i.host,i._protocol),d="PATCH",m=$g(t,s),p={"Content-Type":"application/json; charset=utf-8"},y=i.maxOperationRetryTime,v=new Ur(u,d,Kd(i,s),y);return v.headers=p,v.body=m,v.errorHandler=Yd(e),v}function gO(i,e){const t=e.fullServerUrl(),s=Vs(t,i.host,i._protocol),o="DELETE",u=i.maxOperationRetryTime;function d(p,y){}const m=new Ur(s,o,d,u);return m.successCodes=[200,204],m.errorHandler=Yd(e),m}function yO(i,e){return i&&i.contentType||e&&e.type()||"application/octet-stream"}function HA(i,e,t){const s=Object.assign({},t);return s.fullPath=i.path,s.size=e.size(),s.contentType||(s.contentType=yO(null,e)),s}function _O(i,e,t,s,o){const u=e.bucketOnlyServerUrl(),d={"X-Goog-Upload-Protocol":"multipart"};function m(){let ue="";for(let ye=0;ye<2;ye++)ue=ue+Math.random().toString().slice(2);return ue}const p=m();d["Content-Type"]="multipart/related; boundary="+p;const y=HA(e,s,o),v=$g(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,S=`\r
--`+p+"--",z=wr.getBlob(T,s,S);if(z===null)throw DA();const Y={name:y.fullPath},ee=Vs(u,i.host,i._protocol),Z="POST",ce=i.maxUploadRetryTime,fe=new Ur(ee,Z,Kd(i,t),ce);return fe.urlParams=Y,fe.headers=d,fe.body=z.uploadData(),fe.errorHandler=il(e),fe}class Ed{constructor(e,t,s,o){this.current=e,this.total=t,this.finalized=!!s,this.metadata=o||null}}function Xg(i,e){let t=null;try{t=i.getResponseHeader("X-Goog-Upload-Status")}catch{Zi(!1)}return Zi(!!t&&(e||["active"]).indexOf(t)!==-1),t}function vO(i,e,t,s,o){const u=e.bucketOnlyServerUrl(),d=HA(e,s,o),m={name:d.fullPath},p=Vs(u,i.host,i._protocol),y="POST",v={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":d.contentType,"Content-Type":"application/json; charset=utf-8"},T=$g(d,t),S=i.maxUploadRetryTime;function z(ee){Xg(ee);let Z;try{Z=ee.getResponseHeader("X-Goog-Upload-URL")}catch{Zi(!1)}return Zi(Fd(Z)),Z}const Y=new Ur(p,y,z,S);return Y.urlParams=m,Y.headers=v,Y.body=T,Y.errorHandler=il(e),Y}function EO(i,e,t,s){const o={"X-Goog-Upload-Command":"query"};function u(y){const v=Xg(y,["active","final"]);let T=null;try{T=y.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Zi(!1)}T||Zi(!1);const S=Number(T);return Zi(!isNaN(S)),new Ed(S,s.size(),v==="final")}const d="POST",m=i.maxUploadRetryTime,p=new Ur(t,d,u,m);return p.headers=o,p.errorHandler=il(e),p}const $E=256*1024;function TO(i,e,t,s,o,u,d,m){const p=new Ed(0,0);if(d?(p.current=d.current,p.total=d.total):(p.current=0,p.total=s.size()),s.size()!==p.total)throw kD();const y=p.total-p.current;let v=y;o>0&&(v=Math.min(v,o));const T=p.current,S=T+v;let z="";v===0?z="finalize":y===v?z="upload, finalize":z="upload";const Y={"X-Goog-Upload-Command":z,"X-Goog-Upload-Offset":`${p.current}`},ee=s.slice(T,S);if(ee===null)throw DA();function Z(ye,Ce){const J=Xg(ye,["active","final"]),I=p.current+v,R=s.size();let C;return J==="final"?C=Kd(e,u)(ye,Ce):C=null,new Ed(I,R,J==="final",C)}const ce="POST",fe=e.maxUploadRetryTime,ue=new Ur(t,ce,Z,fe);return ue.headers=Y,ue.body=ee.uploadData(),ue.progressCallback=m||null,ue.errorHandler=il(i),ue}/**
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
 */const bO={STATE_CHANGED:"state_changed"},yn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Np(i){switch(i){case"running":case"pausing":case"canceling":return yn.RUNNING;case"paused":return yn.PAUSED;case"success":return yn.SUCCESS;case"canceled":return yn.CANCELED;case"error":return yn.ERROR;default:return yn.ERROR}}/**
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
 */class AO{constructor(e,t,s){if(zD(e)||t!=null||s!=null)this.next=e,this.error=t??void 0,this.complete=s??void 0;else{const u=e;this.next=u.next,this.error=u.error,this.complete=u.complete}}}/**
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
 */function Co(i){return(...e)=>{Promise.resolve().then(()=>i(...e))}}class wO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ta.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ta.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ta.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o,u){if(this.sent_)throw Eu("cannot .send() more than once");if(Ms(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),u!==void 0)for(const d in u)u.hasOwnProperty(d)&&this.xhr_.setRequestHeader(d,u[d].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Eu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Eu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Eu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Eu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class SO extends wO{initXhr(){this.xhr_.responseType="text"}}function Wi(){return new SO}/**
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
 */class FA{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=Gd(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=o=>{if(this._request=void 0,this._chunkMultiplier=1,o._codeEquals(lt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const u=this.isExponentialBackoffExpired();if(PA(o.status,[]))if(u)o=NA();else{this.sleepTime=Math.max(this.sleepTime*2,wD),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=o,this._transition("error")}},this._metadataErrorHandler=o=>{this._request=void 0,o._codeEquals(lt.CANCELED)?this.completeTransitions_():(this._error=o,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((o,u)=>{this._resolve=o,this._reject=u,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=vO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(s,Wi,e,t);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._uploadUrl=u,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const o=EO(this._ref.storage,this._ref._location,e,this._blob),u=this._ref.storage._makeRequest(o,Wi,t,s);this._request=u,u.getPromise().then(d=>{d=d,this._request=void 0,this._updateProgress(d.current),this._needToFetchStatus=!1,d.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=$E*this._chunkMultiplier,t=new Ed(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((o,u)=>{let d;try{d=TO(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(p){this._error=p,this._transition("error");return}const m=this._ref.storage._makeRequest(d,Wi,o,u,!1);this._request=m,m.getPromise().then(p=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(p.current),p.finalized?(this._metadata=p.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){$E*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=qA(this._ref.storage,this._ref._location,this._mappings),o=this._ref.storage._makeRequest(s,Wi,e,t);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._metadata=u,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=_O(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(s,Wi,e,t);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._metadata=u,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=xA(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Np(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,o){const u=new AO(t||void 0,s||void 0,o||void 0);return this._addObserver(u),()=>{this._removeObserver(u)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Np(this._state)){case yn.SUCCESS:Co(this._resolve.bind(null,this.snapshot))();break;case yn.CANCELED:case yn.ERROR:const t=this._reject;Co(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Np(this._state)){case yn.RUNNING:case yn.PAUSED:e.next&&Co(e.next.bind(e,this.snapshot))();break;case yn.SUCCESS:e.complete&&Co(e.complete.bind(e))();break;case yn.CANCELED:case yn.ERROR:e.error&&Co(e.error.bind(e,this._error))();break;default:e.error&&Co(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Ra{constructor(e,t){this._service=e,t instanceof hn?this._location=t:this._location=hn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ra(e,t)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zA(this._location.path)}get storage(){return this._service}get parent(){const e=nO(this._location.path);if(e===null)return null;const t=new hn(this._location.bucket,e);return new Ra(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw kA(e)}}function RO(i,e,t){return i._throwIfRoot("uploadBytesResumable"),new FA(i,new wr(e),t)}function IO(i){const e={prefixes:[],items:[]};return GA(i,e).then(()=>e)}async function GA(i,e,t){const o=await KA(i,{pageToken:t});e.prefixes.push(...o.prefixes),e.items.push(...o.items),o.nextPageToken!=null&&await GA(i,e,o.nextPageToken)}function KA(i,e){e!=null&&typeof e.maxResults=="number"&&Kp("options.maxResults",1,1e3,e.maxResults);const t=e||{},s=fO(i.storage,i._location,"/",t.pageToken,t.maxResults);return i.storage.makeRequestWithTokens(s,Wi)}function CO(i){i._throwIfRoot("getMetadata");const e=qA(i.storage,i._location,Gd());return i.storage.makeRequestWithTokens(e,Wi)}function NO(i,e){i._throwIfRoot("updateMetadata");const t=pO(i.storage,i._location,e,Gd());return i.storage.makeRequestWithTokens(t,Wi)}function xO(i){i._throwIfRoot("getDownloadURL");const e=mO(i.storage,i._location,Gd());return i.storage.makeRequestWithTokens(e,Wi).then(t=>{if(t===null)throw MD();return t})}function DO(i){i._throwIfRoot("deleteObject");const e=gO(i.storage,i._location);return i.storage.makeRequestWithTokens(e,Wi)}function YA(i,e){const t=iO(i._location.path,e),s=new hn(i._location.bucket,t);return new Ra(i.storage,s)}/**
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
 */function OO(i){return/^[A-Za-z]+:\/\//.test(i)}function kO(i,e){return new Ra(i,e)}function QA(i,e){if(i instanceof Wg){const t=i;if(t._bucket==null)throw OD();const s=new Ra(t,t._bucket);return e!=null?QA(s,e):s}else return e!==void 0?YA(i,e):i}function MO(i,e){if(e&&OO(e)){if(i instanceof Wg)return kO(i,e);throw Uo("To use ref(service, url), the first argument must be a Storage instance.")}else return QA(i,e)}function XE(i,e){const t=e==null?void 0:e[CA];return t==null?null:hn.makeFromBucketSpec(t,i)}function PO(i,e,t,s={}){i.host=`${e}:${t}`;const o=Ms(e);o&&(gg(`https://${i.host}/b`),yg("Storage",!0)),i._isUsingEmulator=!0,i._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(i._overrideAuthToken=typeof u=="string"?u:hb(u,i.app.options.projectId))}class Wg{constructor(e,t,s,o,u,d=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=d,this._bucket=null,this._host=IA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bD,this._maxUploadRetryTime=AD,this._requests=new Set,o!=null?this._bucket=hn.makeFromBucketSpec(o,this._host):this._bucket=XE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=XE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ra(this,e)}_makeRequest(e,t,s,o,u=!0){if(this._deleted)return new VD(OA());{const d=YD(e,this._appId,s,o,t,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(d),d.getPromise().then(()=>this._requests.delete(d),()=>this._requests.delete(d)),d}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const WE="@firebase/storage",JE="0.14.0";/**
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
 */const VO="storage";function LO(i,e,t){return i=ve(i),RO(i,e,t)}function UO(i){return i=ve(i),CO(i)}function jO(i,e){return i=ve(i),NO(i,e)}function zO(i,e){return i=ve(i),KA(i,e)}function BO(i){return i=ve(i),IO(i)}function qO(i){return i=ve(i),xO(i)}function HO(i){return i=ve(i),DO(i)}function ZE(i,e){return i=ve(i),MO(i,e)}function FO(i,e){return YA(i,e)}function GO(i,e,t,s={}){PO(i,e,t,s)}function KO(i,{instanceIdentifier:e}){const t=i.getProvider("app").getImmediate(),s=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new Wg(t,s,o,e,Pr)}function YO(){xr(new vi(VO,KO,"PUBLIC").setMultipleInstances(!0)),Bn(WE,JE,""),Bn(WE,JE,"esm2020")}YO();/**
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
 */class Qh{constructor(e,t,s){this._delegate=e,this.task=t,this.ref=s}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class eT{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Qh(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(s=>{if(e)return e(new Qh(s,this,this._ref))},t)}on(e,t,s,o){let u;return t&&(typeof t=="function"?u=d=>t(new Qh(d,this,this._ref)):u={next:t.next?d=>t.next(new Qh(d,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,u,s||void 0,o||void 0)}}class tT{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Ir(e,this._service))}get items(){return this._delegate.items.map(e=>new Ir(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=FO(this._delegate,e);return new Ir(t,this.storage)}get root(){return new Ir(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Ir(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new eT(LO(this._delegate,e,t),this)}putString(e,t=ni.RAW,s){this._throwIfRoot("putString");const o=VA(t,e),u={...s};return u.contentType==null&&o.contentType!=null&&(u.contentType=o.contentType),new eT(new FA(this._delegate,new wr(o.data,!0),u),this)}listAll(){return BO(this._delegate).then(e=>new tT(e,this.storage))}list(e){return zO(this._delegate,e||void 0).then(t=>new tT(t,this.storage))}getMetadata(){return UO(this._delegate)}updateMetadata(e){return jO(this._delegate,e)}getDownloadURL(){return qO(this._delegate)}delete(){return this._throwIfRoot("delete"),HO(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw kA(e)}}/**
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
 */class $A{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(nT(e))throw Uo("ref() expected a child path but got a URL, use refFromURL instead.");return new Ir(ZE(this._delegate,e),this)}refFromURL(e){if(!nT(e))throw Uo("refFromURL() expected a full URL but got a child path, use ref() instead.");try{hn.makeFromUrl(e,this._delegate.host)}catch{throw Uo("refFromUrl() expected a valid full URL but got an invalid one.")}return new Ir(ZE(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,s={}){GO(this._delegate,e,t,s)}}function nT(i){return/^[A-Za-z]+:\/\//.test(i)}const QO="@firebase/storage-compat",$O="0.4.0";/**
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
 */const XO="storage-compat";function WO(i,{instanceIdentifier:e}){const t=i.getProvider("app-compat").getImmediate(),s=i.getProvider("storage").getImmediate({identifier:e});return new $A(t,s)}function JO(i){const e={TaskState:yn,TaskEvent:bO,StringFormat:ni,Storage:$A,Reference:Ir};i.INTERNAL.registerComponent(new vi(XO,WO,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),i.registerVersion(QO,$O)}JO(bs);var iT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ws,XA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,R){function C(){}C.prototype=R.prototype,I.F=R.prototype,I.prototype=new C,I.prototype.constructor=I,I.D=function(D,O,V){for(var N=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)N[nt-2]=arguments[nt];return R.prototype[O].apply(D,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,R,C){C||(C=0);const D=Array(16);if(typeof R=="string")for(var O=0;O<16;++O)D[O]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(O=0;O<16;++O)D[O]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=I.g[0],C=I.g[1],O=I.g[2];let V=I.g[3],N;N=R+(V^C&(O^V))+D[0]+3614090360&4294967295,R=C+(N<<7&4294967295|N>>>25),N=V+(O^R&(C^O))+D[1]+3905402710&4294967295,V=R+(N<<12&4294967295|N>>>20),N=O+(C^V&(R^C))+D[2]+606105819&4294967295,O=V+(N<<17&4294967295|N>>>15),N=C+(R^O&(V^R))+D[3]+3250441966&4294967295,C=O+(N<<22&4294967295|N>>>10),N=R+(V^C&(O^V))+D[4]+4118548399&4294967295,R=C+(N<<7&4294967295|N>>>25),N=V+(O^R&(C^O))+D[5]+1200080426&4294967295,V=R+(N<<12&4294967295|N>>>20),N=O+(C^V&(R^C))+D[6]+2821735955&4294967295,O=V+(N<<17&4294967295|N>>>15),N=C+(R^O&(V^R))+D[7]+4249261313&4294967295,C=O+(N<<22&4294967295|N>>>10),N=R+(V^C&(O^V))+D[8]+1770035416&4294967295,R=C+(N<<7&4294967295|N>>>25),N=V+(O^R&(C^O))+D[9]+2336552879&4294967295,V=R+(N<<12&4294967295|N>>>20),N=O+(C^V&(R^C))+D[10]+4294925233&4294967295,O=V+(N<<17&4294967295|N>>>15),N=C+(R^O&(V^R))+D[11]+2304563134&4294967295,C=O+(N<<22&4294967295|N>>>10),N=R+(V^C&(O^V))+D[12]+1804603682&4294967295,R=C+(N<<7&4294967295|N>>>25),N=V+(O^R&(C^O))+D[13]+4254626195&4294967295,V=R+(N<<12&4294967295|N>>>20),N=O+(C^V&(R^C))+D[14]+2792965006&4294967295,O=V+(N<<17&4294967295|N>>>15),N=C+(R^O&(V^R))+D[15]+1236535329&4294967295,C=O+(N<<22&4294967295|N>>>10),N=R+(O^V&(C^O))+D[1]+4129170786&4294967295,R=C+(N<<5&4294967295|N>>>27),N=V+(C^O&(R^C))+D[6]+3225465664&4294967295,V=R+(N<<9&4294967295|N>>>23),N=O+(R^C&(V^R))+D[11]+643717713&4294967295,O=V+(N<<14&4294967295|N>>>18),N=C+(V^R&(O^V))+D[0]+3921069994&4294967295,C=O+(N<<20&4294967295|N>>>12),N=R+(O^V&(C^O))+D[5]+3593408605&4294967295,R=C+(N<<5&4294967295|N>>>27),N=V+(C^O&(R^C))+D[10]+38016083&4294967295,V=R+(N<<9&4294967295|N>>>23),N=O+(R^C&(V^R))+D[15]+3634488961&4294967295,O=V+(N<<14&4294967295|N>>>18),N=C+(V^R&(O^V))+D[4]+3889429448&4294967295,C=O+(N<<20&4294967295|N>>>12),N=R+(O^V&(C^O))+D[9]+568446438&4294967295,R=C+(N<<5&4294967295|N>>>27),N=V+(C^O&(R^C))+D[14]+3275163606&4294967295,V=R+(N<<9&4294967295|N>>>23),N=O+(R^C&(V^R))+D[3]+4107603335&4294967295,O=V+(N<<14&4294967295|N>>>18),N=C+(V^R&(O^V))+D[8]+1163531501&4294967295,C=O+(N<<20&4294967295|N>>>12),N=R+(O^V&(C^O))+D[13]+2850285829&4294967295,R=C+(N<<5&4294967295|N>>>27),N=V+(C^O&(R^C))+D[2]+4243563512&4294967295,V=R+(N<<9&4294967295|N>>>23),N=O+(R^C&(V^R))+D[7]+1735328473&4294967295,O=V+(N<<14&4294967295|N>>>18),N=C+(V^R&(O^V))+D[12]+2368359562&4294967295,C=O+(N<<20&4294967295|N>>>12),N=R+(C^O^V)+D[5]+4294588738&4294967295,R=C+(N<<4&4294967295|N>>>28),N=V+(R^C^O)+D[8]+2272392833&4294967295,V=R+(N<<11&4294967295|N>>>21),N=O+(V^R^C)+D[11]+1839030562&4294967295,O=V+(N<<16&4294967295|N>>>16),N=C+(O^V^R)+D[14]+4259657740&4294967295,C=O+(N<<23&4294967295|N>>>9),N=R+(C^O^V)+D[1]+2763975236&4294967295,R=C+(N<<4&4294967295|N>>>28),N=V+(R^C^O)+D[4]+1272893353&4294967295,V=R+(N<<11&4294967295|N>>>21),N=O+(V^R^C)+D[7]+4139469664&4294967295,O=V+(N<<16&4294967295|N>>>16),N=C+(O^V^R)+D[10]+3200236656&4294967295,C=O+(N<<23&4294967295|N>>>9),N=R+(C^O^V)+D[13]+681279174&4294967295,R=C+(N<<4&4294967295|N>>>28),N=V+(R^C^O)+D[0]+3936430074&4294967295,V=R+(N<<11&4294967295|N>>>21),N=O+(V^R^C)+D[3]+3572445317&4294967295,O=V+(N<<16&4294967295|N>>>16),N=C+(O^V^R)+D[6]+76029189&4294967295,C=O+(N<<23&4294967295|N>>>9),N=R+(C^O^V)+D[9]+3654602809&4294967295,R=C+(N<<4&4294967295|N>>>28),N=V+(R^C^O)+D[12]+3873151461&4294967295,V=R+(N<<11&4294967295|N>>>21),N=O+(V^R^C)+D[15]+530742520&4294967295,O=V+(N<<16&4294967295|N>>>16),N=C+(O^V^R)+D[2]+3299628645&4294967295,C=O+(N<<23&4294967295|N>>>9),N=R+(O^(C|~V))+D[0]+4096336452&4294967295,R=C+(N<<6&4294967295|N>>>26),N=V+(C^(R|~O))+D[7]+1126891415&4294967295,V=R+(N<<10&4294967295|N>>>22),N=O+(R^(V|~C))+D[14]+2878612391&4294967295,O=V+(N<<15&4294967295|N>>>17),N=C+(V^(O|~R))+D[5]+4237533241&4294967295,C=O+(N<<21&4294967295|N>>>11),N=R+(O^(C|~V))+D[12]+1700485571&4294967295,R=C+(N<<6&4294967295|N>>>26),N=V+(C^(R|~O))+D[3]+2399980690&4294967295,V=R+(N<<10&4294967295|N>>>22),N=O+(R^(V|~C))+D[10]+4293915773&4294967295,O=V+(N<<15&4294967295|N>>>17),N=C+(V^(O|~R))+D[1]+2240044497&4294967295,C=O+(N<<21&4294967295|N>>>11),N=R+(O^(C|~V))+D[8]+1873313359&4294967295,R=C+(N<<6&4294967295|N>>>26),N=V+(C^(R|~O))+D[15]+4264355552&4294967295,V=R+(N<<10&4294967295|N>>>22),N=O+(R^(V|~C))+D[6]+2734768916&4294967295,O=V+(N<<15&4294967295|N>>>17),N=C+(V^(O|~R))+D[13]+1309151649&4294967295,C=O+(N<<21&4294967295|N>>>11),N=R+(O^(C|~V))+D[4]+4149444226&4294967295,R=C+(N<<6&4294967295|N>>>26),N=V+(C^(R|~O))+D[11]+3174756917&4294967295,V=R+(N<<10&4294967295|N>>>22),N=O+(R^(V|~C))+D[2]+718787259&4294967295,O=V+(N<<15&4294967295|N>>>17),N=C+(V^(O|~R))+D[9]+3951481745&4294967295,I.g[0]=I.g[0]+R&4294967295,I.g[1]=I.g[1]+(O+(N<<21&4294967295|N>>>11))&4294967295,I.g[2]=I.g[2]+O&4294967295,I.g[3]=I.g[3]+V&4294967295}s.prototype.v=function(I,R){R===void 0&&(R=I.length);const C=R-this.blockSize,D=this.C;let O=this.h,V=0;for(;V<R;){if(O==0)for(;V<=C;)o(this,I,V),V+=this.blockSize;if(typeof I=="string"){for(;V<R;)if(D[O++]=I.charCodeAt(V++),O==this.blockSize){o(this,D),O=0;break}}else for(;V<R;)if(D[O++]=I[V++],O==this.blockSize){o(this,D),O=0;break}}this.h=O,this.o+=R},s.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var R=1;R<I.length-8;++R)I[R]=0;R=this.o*8;for(var C=I.length-8;C<I.length;++C)I[C]=R&255,R/=256;for(this.v(I),I=Array(16),R=0,C=0;C<4;++C)for(let D=0;D<32;D+=8)I[R++]=this.g[C]>>>D&255;return I};function u(I,R){var C=m;return Object.prototype.hasOwnProperty.call(C,I)?C[I]:C[I]=R(I)}function d(I,R){this.h=R;const C=[];let D=!0;for(let O=I.length-1;O>=0;O--){const V=I[O]|0;D&&V==R||(C[O]=V,D=!1)}this.g=C}var m={};function p(I){return-128<=I&&I<128?u(I,function(R){return new d([R|0],R<0?-1:0)}):new d([I|0],I<0?-1:0)}function y(I){if(isNaN(I)||!isFinite(I))return T;if(I<0)return Z(y(-I));const R=[];let C=1;for(let D=0;I>=C;D++)R[D]=I/C|0,C*=4294967296;return new d(R,0)}function v(I,R){if(I.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(I.charAt(0)=="-")return Z(v(I.substring(1),R));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(R,8));let D=T;for(let V=0;V<I.length;V+=8){var O=Math.min(8,I.length-V);const N=parseInt(I.substring(V,V+O),R);O<8?(O=y(Math.pow(R,O)),D=D.j(O).add(y(N))):(D=D.j(C),D=D.add(y(N)))}return D}var T=p(0),S=p(1),z=p(16777216);i=d.prototype,i.m=function(){if(ee(this))return-Z(this).m();let I=0,R=1;for(let C=0;C<this.g.length;C++){const D=this.i(C);I+=(D>=0?D:4294967296+D)*R,R*=4294967296}return I},i.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(Y(this))return"0";if(ee(this))return"-"+Z(this).toString(I);const R=y(Math.pow(I,6));var C=this;let D="";for(;;){const O=ye(C,R).g;C=ce(C,O.j(R));let V=((C.g.length>0?C.g[0]:C.h)>>>0).toString(I);if(C=O,Y(C))return V+D;for(;V.length<6;)V="0"+V;D=V+D}},i.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function Y(I){if(I.h!=0)return!1;for(let R=0;R<I.g.length;R++)if(I.g[R]!=0)return!1;return!0}function ee(I){return I.h==-1}i.l=function(I){return I=ce(this,I),ee(I)?-1:Y(I)?0:1};function Z(I){const R=I.g.length,C=[];for(let D=0;D<R;D++)C[D]=~I.g[D];return new d(C,~I.h).add(S)}i.abs=function(){return ee(this)?Z(this):this},i.add=function(I){const R=Math.max(this.g.length,I.g.length),C=[];let D=0;for(let O=0;O<=R;O++){let V=D+(this.i(O)&65535)+(I.i(O)&65535),N=(V>>>16)+(this.i(O)>>>16)+(I.i(O)>>>16);D=N>>>16,V&=65535,N&=65535,C[O]=N<<16|V}return new d(C,C[C.length-1]&-2147483648?-1:0)};function ce(I,R){return I.add(Z(R))}i.j=function(I){if(Y(this)||Y(I))return T;if(ee(this))return ee(I)?Z(this).j(Z(I)):Z(Z(this).j(I));if(ee(I))return Z(this.j(Z(I)));if(this.l(z)<0&&I.l(z)<0)return y(this.m()*I.m());const R=this.g.length+I.g.length,C=[];for(var D=0;D<2*R;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(let O=0;O<I.g.length;O++){const V=this.i(D)>>>16,N=this.i(D)&65535,nt=I.i(O)>>>16,vt=I.i(O)&65535;C[2*D+2*O]+=N*vt,fe(C,2*D+2*O),C[2*D+2*O+1]+=V*vt,fe(C,2*D+2*O+1),C[2*D+2*O+1]+=N*nt,fe(C,2*D+2*O+1),C[2*D+2*O+2]+=V*nt,fe(C,2*D+2*O+2)}for(I=0;I<R;I++)C[I]=C[2*I+1]<<16|C[2*I];for(I=R;I<2*R;I++)C[I]=0;return new d(C,0)};function fe(I,R){for(;(I[R]&65535)!=I[R];)I[R+1]+=I[R]>>>16,I[R]&=65535,R++}function ue(I,R){this.g=I,this.h=R}function ye(I,R){if(Y(R))throw Error("division by zero");if(Y(I))return new ue(T,T);if(ee(I))return R=ye(Z(I),R),new ue(Z(R.g),Z(R.h));if(ee(R))return R=ye(I,Z(R)),new ue(Z(R.g),R.h);if(I.g.length>30){if(ee(I)||ee(R))throw Error("slowDivide_ only works with positive integers.");for(var C=S,D=R;D.l(I)<=0;)C=Ce(C),D=Ce(D);var O=J(C,1),V=J(D,1);for(D=J(D,2),C=J(C,2);!Y(D);){var N=V.add(D);N.l(I)<=0&&(O=O.add(C),V=N),D=J(D,1),C=J(C,1)}return R=ce(I,O.j(R)),new ue(O,R)}for(O=T;I.l(R)>=0;){for(C=Math.max(1,Math.floor(I.m()/R.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),V=y(C),N=V.j(R);ee(N)||N.l(I)>0;)C-=D,V=y(C),N=V.j(R);Y(V)&&(V=S),O=O.add(V),I=ce(I,N)}return new ue(O,I)}i.B=function(I){return ye(this,I).h},i.and=function(I){const R=Math.max(this.g.length,I.g.length),C=[];for(let D=0;D<R;D++)C[D]=this.i(D)&I.i(D);return new d(C,this.h&I.h)},i.or=function(I){const R=Math.max(this.g.length,I.g.length),C=[];for(let D=0;D<R;D++)C[D]=this.i(D)|I.i(D);return new d(C,this.h|I.h)},i.xor=function(I){const R=Math.max(this.g.length,I.g.length),C=[];for(let D=0;D<R;D++)C[D]=this.i(D)^I.i(D);return new d(C,this.h^I.h)};function Ce(I){const R=I.g.length+1,C=[];for(let D=0;D<R;D++)C[D]=I.i(D)<<1|I.i(D-1)>>>31;return new d(C,I.h)}function J(I,R){const C=R>>5;R%=32;const D=I.g.length-C,O=[];for(let V=0;V<D;V++)O[V]=R>0?I.i(V+C)>>>R|I.i(V+C+1)<<32-R:I.i(V+C);return new d(O,I.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,XA=s,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=v,ws=d}).apply(typeof iT<"u"?iT:typeof self<"u"?self:typeof window<"u"?window:{});var $h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var WA,Ru,JA,rd,Yp,ZA,ew,tw;(function(){var i,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof $h=="object"&&$h];for(var g=0;g<c.length;++g){var E=c[g];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var s=t(this);function o(c,g){if(g)e:{var E=s;c=c.split(".");for(var w=0;w<c.length-1;w++){var L=c[w];if(!(L in E))break e;E=E[L]}c=c[c.length-1],w=E[c],g=g(w),g!=w&&g!=null&&e(E,c,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(g){var E=[],w;for(w in g)Object.prototype.hasOwnProperty.call(g,w)&&E.push([w,g[w]]);return E}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function p(c,g,E){return c.call.apply(c.bind,arguments)}function y(c,g,E){return y=p,y.apply(null,arguments)}function v(c,g){var E=Array.prototype.slice.call(arguments,1);return function(){var w=E.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function T(c,g){function E(){}E.prototype=g.prototype,c.Z=g.prototype,c.prototype=new E,c.prototype.constructor=c,c.Ob=function(w,L,H){for(var ie=Array(arguments.length-2),we=2;we<arguments.length;we++)ie[we-2]=arguments[we];return g.prototype[L].apply(w,ie)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function z(c){const g=c.length;if(g>0){const E=Array(g);for(let w=0;w<g;w++)E[w]=c[w];return E}return[]}function Y(c,g){for(let w=1;w<arguments.length;w++){const L=arguments[w];var E=typeof L;if(E=E!="object"?E:L?Array.isArray(L)?"array":E:"null",E=="array"||E=="object"&&typeof L.length=="number"){E=c.length||0;const H=L.length||0;c.length=E+H;for(let ie=0;ie<H;ie++)c[E+ie]=L[ie]}else c.push(L)}}class ee{constructor(g,E){this.i=g,this.j=E,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function Z(c){d.setTimeout(()=>{throw c},0)}function ce(){var c=I;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class fe{constructor(){this.h=this.g=null}add(g,E){const w=ue.get();w.set(g,E),this.h?this.h.next=w:this.g=w,this.h=w}}var ue=new ee(()=>new ye,c=>c.reset());class ye{constructor(){this.next=this.g=this.h=null}set(g,E){this.h=g,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,J=!1,I=new fe,R=()=>{const c=Promise.resolve(void 0);Ce=()=>{c.then(C)}};function C(){for(var c;c=ce();){try{c.h.call(c.g)}catch(E){Z(E)}var g=ue;g.j(c),g.h<100&&(g.h++,c.next=g.g,g.g=c)}J=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};d.addEventListener("test",E,g),d.removeEventListener("test",E,g)}catch{}return c})();function N(c){return/^[\s\xa0]*$/.test(c)}function nt(c,g){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,g)}T(nt,O),nt.prototype.init=function(c,g){const E=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget,g||(E=="mouseover"?g=c.fromElement:E=="mouseout"&&(g=c.toElement)),this.relatedTarget=g,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&nt.Z.h.call(this)},nt.prototype.h=function(){nt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var vt="closure_listenable_"+(Math.random()*1e6|0),B=0;function ne(c,g,E,w,L){this.listener=c,this.proxy=null,this.src=g,this.type=E,this.capture=!!w,this.ha=L,this.key=++B,this.da=this.fa=!1}function he(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Be(c,g,E){for(const w in c)g.call(E,c[w],w,c)}function Ye(c,g){for(const E in c)g.call(void 0,c[E],E,c)}function M(c){const g={};for(const E in c)g[E]=c[E];return g}const X="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function re(c,g){let E,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(E in w)c[E]=w[E];for(let H=0;H<X.length;H++)E=X[H],Object.prototype.hasOwnProperty.call(w,E)&&(c[E]=w[E])}}function oe(c){this.src=c,this.g={},this.h=0}oe.prototype.add=function(c,g,E,w,L){const H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);const ie=Re(c,g,w,L);return ie>-1?(g=c[ie],E||(g.fa=!1)):(g=new ne(g,this.src,H,!!w,L),g.fa=E,c.push(g)),g};function Ee(c,g){const E=g.type;if(E in c.g){var w=c.g[E],L=Array.prototype.indexOf.call(w,g,void 0),H;(H=L>=0)&&Array.prototype.splice.call(w,L,1),H&&(he(g),c.g[E].length==0&&(delete c.g[E],c.h--))}}function Re(c,g,E,w){for(let L=0;L<c.length;++L){const H=c[L];if(!H.da&&H.listener==g&&H.capture==!!E&&H.ha==w)return L}return-1}var je="closure_lm_"+(Math.random()*1e6|0),zt={};function ut(c,g,E,w,L){if(Array.isArray(g)){for(let H=0;H<g.length;H++)ut(c,g[H],E,w,L);return null}return E=dl(E),c&&c[vt]?c.J(g,E,m(w)?!!w.capture:!1,L):js(c,g,E,!1,w,L)}function js(c,g,E,w,L,H){if(!g)throw Error("Invalid event type");const ie=m(L)?!!L.capture:!!L;let we=zs(c);if(we||(c[je]=we=new oe(c)),E=we.add(g,E,w,ie,H),E.proxy)return E;if(w=Va(),E.proxy=w,w.src=c,w.listener=E,c.addEventListener)V||(L=ie),L===void 0&&(L=!1),c.addEventListener(g.toString(),w,L);else if(c.attachEvent)c.attachEvent(Ai(g.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Va(){function c(E){return g.call(c.src,c.listener,E)}const g=cl;return c}function La(c,g,E,w,L){if(Array.isArray(g))for(var H=0;H<g.length;H++)La(c,g[H],E,w,L);else w=m(w)?!!w.capture:!!w,E=dl(E),c&&c[vt]?(c=c.i,H=String(g).toString(),H in c.g&&(g=c.g[H],E=Re(g,E,w,L),E>-1&&(he(g[E]),Array.prototype.splice.call(g,E,1),g.length==0&&(delete c.g[H],c.h--)))):c&&(c=zs(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Re(g,E,w,L)),(E=c>-1?g[c]:null)&&Ua(E))}function Ua(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[vt])Ee(g.i,c);else{var E=c.type,w=c.proxy;g.removeEventListener?g.removeEventListener(E,w,c.capture):g.detachEvent?g.detachEvent(Ai(E),w):g.addListener&&g.removeListener&&g.removeListener(w),(E=zs(g))?(Ee(E,c),E.h==0&&(E.src=null,g[je]=null)):he(c)}}}function Ai(c){return c in zt?zt[c]:zt[c]="on"+c}function cl(c,g){if(c.da)c=!0;else{g=new nt(g,this);const E=c.listener,w=c.ha||c.src;c.fa&&Ua(c),c=E.call(w,g)}return c}function zs(c){return c=c[je],c instanceof oe?c:null}var hl="__closure_events_fn_"+(Math.random()*1e9>>>0);function dl(c){return typeof c=="function"?c:(c[hl]||(c[hl]=function(g){return c.handleEvent(g)}),c[hl])}function Rt(){D.call(this),this.i=new oe(this),this.M=this,this.G=null}T(Rt,D),Rt.prototype[vt]=!0,Rt.prototype.removeEventListener=function(c,g,E,w){La(this,c,g,E,w)};function Bt(c,g){var E,w=c.G;if(w)for(E=[];w;w=w.G)E.push(w);if(c=c.M,w=g.type||g,typeof g=="string")g=new O(g,c);else if(g instanceof O)g.target=g.target||c;else{var L=g;g=new O(w,c),re(g,L)}L=!0;let H,ie;if(E)for(ie=E.length-1;ie>=0;ie--)H=g.g=E[ie],L=jr(H,w,!0,g)&&L;if(H=g.g=c,L=jr(H,w,!0,g)&&L,L=jr(H,w,!1,g)&&L,E)for(ie=0;ie<E.length;ie++)H=g.g=E[ie],L=jr(H,w,!1,g)&&L}Rt.prototype.N=function(){if(Rt.Z.N.call(this),this.i){var c=this.i;for(const g in c.g){const E=c.g[g];for(let w=0;w<E.length;w++)he(E[w]);delete c.g[g],c.h--}}this.G=null},Rt.prototype.J=function(c,g,E,w){return this.i.add(String(c),g,!1,E,w)},Rt.prototype.K=function(c,g,E,w){return this.i.add(String(c),g,!0,E,w)};function jr(c,g,E,w){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();let L=!0;for(let H=0;H<g.length;++H){const ie=g[H];if(ie&&!ie.da&&ie.capture==E){const we=ie.listener,Tt=ie.ha||ie.src;ie.fa&&Ee(c.i,ie),L=we.call(Tt,w)!==!1&&L}}return L&&!w.defaultPrevented}function df(c,g){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=y(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:d.setTimeout(c,g||0)}function gc(c){c.g=df(()=>{c.g=null,c.i&&(c.i=!1,gc(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class fn extends D{constructor(g,E){super(),this.m=g,this.l=E,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:gc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bs(c){D.call(this),this.h=c,this.g={}}T(Bs,D);var fl=[];function ml(c){Be(c.g,function(g,E){this.g.hasOwnProperty(E)&&Ua(g)},c),c.g={}}Bs.prototype.N=function(){Bs.Z.N.call(this),ml(this)},Bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zr=d.JSON.stringify,ff=d.JSON.parse,yc=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function _c(){}function vc(){}var si={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Xt(){O.call(this,"d")}T(Xt,O);function qn(){O.call(this,"c")}T(qn,O);var Et={},Ec=null;function ja(){return Ec=Ec||new Rt}Et.Ia="serverreachability";function Tc(c){O.call(this,Et.Ia,c)}T(Tc,O);function wi(c){const g=ja();Bt(g,new Tc(g))}Et.STAT_EVENT="statevent";function qs(c,g){O.call(this,Et.STAT_EVENT,c),this.stat=g}T(qs,O);function It(c){const g=ja();Bt(g,new qs(g,c))}Et.Ja="timingevent";function Si(c,g){O.call(this,Et.Ja,c),this.size=g}T(Si,O);function Ri(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function ai(){this.g=!0}ai.prototype.ua=function(){this.g=!1};function mf(c,g,E,w,L,H){c.info(function(){if(c.g)if(H){var ie="",we=H.split("&");for(let Fe=0;Fe<we.length;Fe++){var Tt=we[Fe].split("=");if(Tt.length>1){const ct=Tt[0];Tt=Tt[1];const Kn=ct.split("_");ie=Kn.length>=2&&Kn[1]=="type"?ie+(ct+"="+Tt+"&"):ie+(ct+"=redacted&")}}}else ie=null;else ie=H;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+g+`
`+E+`
`+ie})}function bc(c,g,E,w,L,H,ie){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+g+`
`+E+`
`+H+" "+ie})}function Ii(c,g,E,w){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+pf(c,E)+(w?" "+w:"")})}function Hs(c,g){c.info(function(){return"TIMEOUT: "+g})}ai.prototype.info=function(){};function pf(c,g){if(!c.g)return g;if(!g)return null;try{const H=JSON.parse(g);if(H){for(c=0;c<H.length;c++)if(Array.isArray(H[c])){var E=H[c];if(!(E.length<2)){var w=E[1];if(Array.isArray(w)&&!(w.length<1)){var L=w[0];if(L!="noop"&&L!="stop"&&L!="close")for(let ie=1;ie<w.length;ie++)w[ie]=""}}}}return zr(H)}catch{return g}}var Fs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},pl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},gl;function Gs(){}T(Gs,_c),Gs.prototype.g=function(){return new XMLHttpRequest},gl=new Gs;function sr(c){return encodeURIComponent(String(c))}function Ac(c){var g=1;c=c.split(":");const E=[];for(;g>0&&c.length;)E.push(c.shift()),g--;return c.length&&E.push(c.join(":")),E}function oi(c,g,E,w){this.j=c,this.i=g,this.l=E,this.S=w||1,this.V=new Bs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new li}function li(){this.i=null,this.g="",this.h=!1}var Ct={},Gt={};function Ci(c,g,E){c.M=1,c.A=Ks(xt(g)),c.u=E,c.R=!0,za(c,null)}function za(c,g){c.F=Date.now(),Ni(c),c.B=xt(c.A);var E=c.B,w=c.S;Array.isArray(w)||(w=[String(w)]),Fa(E.i,"t",w),c.C=0,E=c.j.L,c.h=new li,c.g=Uc(c.j,E?g:null,!c.u),c.P>0&&(c.O=new fn(y(c.Y,c,c.g),c.P)),g=c.V,E=c.g,w=c.ba;var L="readystatechange";Array.isArray(L)||(L&&(fl[0]=L.toString()),L=fl);for(let H=0;H<L.length;H++){const ie=ut(E,L[H],w||g.handleEvent,!1,g.h||g);if(!ie)break;g.g[ie.key]=ie}g=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,g)):(c.v="GET",c.g.ea(c.B,c.v,null,g)),wi(),mf(c.i,c.v,c.B,c.l,c.S,c.u)}oi.prototype.ba=function(c){c=c.target;const g=this.O;g&&hi(c)==3?g.j():this.Y(c)},oi.prototype.Y=function(c){try{if(c==this.g)e:{const we=hi(this.g),Tt=this.g.ya(),Fe=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||Wt(this.g)))){this.K||we!=4||Tt==7||(Tt==8||Fe<=0?wi(3):wi(2)),xi(this);var g=this.g.ca();this.X=g;var E=gf(this);if(this.o=g==200,bc(this.i,this.v,this.B,this.l,this.S,we,g),this.o){if(this.U&&!this.L){t:{if(this.g){var w,L=this.g;if((w=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(w)){var H=w;break t}}H=null}if(c=H)Ii(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Di(this,c);else{this.o=!1,this.m=3,It(12),Cn(this),Hn(this);break e}}if(this.R){c=!0;let ct;for(;!this.K&&this.C<E.length;)if(ct=Sc(this,E),ct==Gt){we==4&&(this.m=4,It(14),c=!1),Ii(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Ct){this.m=4,It(15),Ii(this.i,this.l,E,"[Invalid Chunk]"),c=!1;break}else Ii(this.i,this.l,ct,null),Di(this,ct);if(wc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||E.length!=0||this.h.h||(this.m=1,It(16),c=!1),this.o=this.o&&c,!c)Ii(this.i,this.l,E,"[Invalid Chunked Response]"),Cn(this),Hn(this);else if(E.length>0&&!this.W){this.W=!0;var ie=this.j;ie.g==this&&ie.aa&&!ie.P&&(ie.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),Dl(ie),ie.P=!0,It(11))}}else Ii(this.i,this.l,E,null),Di(this,E);we==4&&Cn(this),this.o&&!this.K&&(we==4?Mc(this.j,this):(this.o=!1,Ni(this)))}else or(this.g),g==400&&E.indexOf("Unknown SID")>0?(this.m=3,It(12)):(this.m=0,It(13)),Cn(this),Hn(this)}}}catch{}finally{}};function gf(c){if(!wc(c))return c.g.la();const g=Wt(c.g);if(g==="")return"";let E="";const w=g.length,L=hi(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Cn(c),Hn(c),"";c.h.i=new d.TextDecoder}for(let H=0;H<w;H++)c.h.h=!0,E+=c.h.i.decode(g[H],{stream:!(L&&H==w-1)});return g.length=0,c.h.g+=E,c.C=0,c.h.g}function wc(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Sc(c,g){var E=c.C,w=g.indexOf(`
`,E);return w==-1?Gt:(E=Number(g.substring(E,w)),isNaN(E)?Ct:(w+=1,w+E>g.length?Gt:(g=g.slice(w,w+E),c.C=w+E,g)))}oi.prototype.cancel=function(){this.K=!0,Cn(this)};function Ni(c){c.T=Date.now()+c.H,Ba(c,c.H)}function Ba(c,g){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Ri(y(c.aa,c),g)}function xi(c){c.D&&(d.clearTimeout(c.D),c.D=null)}oi.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Hs(this.i,this.B),this.M!=2&&(wi(),It(17)),Cn(this),this.m=2,Hn(this)):Ba(this,this.T-c)};function Hn(c){c.j.I==0||c.K||Mc(c.j,c)}function Cn(c){xi(c);var g=c.O;g&&typeof g.dispose=="function"&&g.dispose(),c.O=null,ml(c.V),c.g&&(g=c.g,c.g=null,g.abort(),g.dispose())}function Di(c,g){try{var E=c.j;if(E.I!=0&&(E.g==c||ki(E.h,c))){if(!c.L&&ki(E.h,c)&&E.I==3){try{var w=E.Ba.g.parse(g)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!E.v){if(E.g)if(E.g.F+3e3<c.F)$a(E),Qr(E);else break e;Zs(E),It(18)}}else E.xa=L[1],0<E.xa-E.K&&L[2]<37500&&E.F&&E.A==0&&!E.C&&(E.C=Ri(y(E.Va,E),6e3));Oi(E.h)<=1&&E.ta&&(E.ta=void 0)}else ji(E,11)}else if((c.L||E.g==c)&&$a(E),!N(g))for(L=E.Ba.g.parse(g),g=0;g<L.length;g++){let Fe=L[g];const ct=Fe[0];if(!(ct<=E.K))if(E.K=ct,Fe=Fe[1],E.I==2)if(Fe[0]=="c"){E.M=Fe[1],E.ba=Fe[2];const Kn=Fe[3];Kn!=null&&(E.ka=Kn,E.j.info("VER="+E.ka));const zi=Fe[4];zi!=null&&(E.za=zi,E.j.info("SVER="+E.za));const di=Fe[5];di!=null&&typeof di=="number"&&di>0&&(w=1.5*di,E.O=w,E.j.info("backChannelRequestTimeoutMs_="+w)),w=E;const fi=c.g;if(fi){const ea=fi.g?fi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ea){var H=w.h;H.g||ea.indexOf("spdy")==-1&&ea.indexOf("quic")==-1&&ea.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(vl(H,H.h),H.h=null))}if(w.G){const Xa=fi.g?fi.g.getResponseHeader("X-HTTP-Session-Id"):null;Xa&&(w.wa=Xa,Qe(w.J,w.G,Xa))}}E.I=3,E.l&&E.l.ra(),E.aa&&(E.T=Date.now()-c.F,E.j.info("Handshake RTT: "+E.T+"ms")),w=E;var ie=c;if(w.na=Lc(w,w.L?w.ba:null,w.W),ie.L){El(w.h,ie);var we=ie,Tt=w.O;Tt&&(we.H=Tt),we.D&&(xi(we),Ni(we)),w.g=ie}else Oc(w);E.i.length>0&&Ui(E)}else Fe[0]!="stop"&&Fe[0]!="close"||ji(E,7);else E.I==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?ji(E,7):Nl(E):Fe[0]!="noop"&&E.l&&E.l.qa(Fe),E.A=0)}}wi(4)}catch{}}var Nt=class{constructor(c,g){this.g=c,this.map=g}};function yl(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function _l(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Oi(c){return c.h?1:c.g?c.g.size:0}function ki(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function vl(c,g){c.g?c.g.add(g):c.h=g}function El(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}yl.prototype.cancel=function(){if(this.i=Tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Tl(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const E of c.g.values())g=g.concat(E.G);return g}return z(c.i)}var Rc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qa(c,g){if(c){c=c.split("&");for(let E=0;E<c.length;E++){const w=c[E].indexOf("=");let L,H=null;w>=0?(L=c[E].substring(0,w),H=c[E].substring(w+1)):L=c[E],g(L,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function Nn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;c instanceof Nn?(this.l=c.l,Kt(this,c.j),this.o=c.o,this.g=c.g,Br(this,c.u),this.h=c.h,bl(this,xc(c.i)),this.m=c.m):c&&(g=String(c).match(Rc))?(this.l=!1,Kt(this,g[1]||"",!0),this.o=Mi(g[2]||""),this.g=Mi(g[3]||"",!0),Br(this,g[4]),this.h=Mi(g[5]||"",!0),bl(this,g[6]||"",!0),this.m=Mi(g[7]||"")):(this.l=!1,this.i=new Hr(null,this.l))}Nn.prototype.toString=function(){const c=[];var g=this.j;g&&c.push(Ys(g,Ha,!0),":");var E=this.g;return(E||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ys(g,Ha,!0),"@"),c.push(sr(E).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.u,E!=null&&c.push(":",String(E))),(E=this.h)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(Ys(E,E.charAt(0)=="/"?Al:Ic,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",Ys(E,Cc)),c.join("")},Nn.prototype.resolve=function(c){const g=xt(this);let E=!!c.j;E?Kt(g,c.j):E=!!c.o,E?g.o=c.o:E=!!c.g,E?g.g=c.g:E=c.u!=null;var w=c.h;if(E)Br(g,c.u);else if(E=!!c.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var L=g.h.lastIndexOf("/");L!=-1&&(w=g.h.slice(0,L+1)+w)}if(L=w,L==".."||L==".")w="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){w=L.lastIndexOf("/",0)==0,L=L.split("/");const H=[];for(let ie=0;ie<L.length;){const we=L[ie++];we=="."?w&&ie==L.length&&H.push(""):we==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),w&&ie==L.length&&H.push("")):(H.push(we),w=!0)}w=H.join("/")}else w=L}return E?g.h=w:E=c.i.toString()!=="",E?bl(g,xc(c.i)):E=!!c.m,E&&(g.m=c.m),g};function xt(c){return new Nn(c)}function Kt(c,g,E){c.j=E?Mi(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Br(c,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);c.u=g}else c.u=null}function bl(c,g,E){g instanceof Hr?(c.i=g,Ga(c.i,c.l)):(E||(g=Ys(g,qr)),c.i=new Hr(g,c.l))}function Qe(c,g,E){c.i.set(g,E)}function Ks(c){return Qe(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Mi(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ys(c,g,E){return typeof c=="string"?(c=encodeURI(c).replace(g,_n),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function _n(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ha=/[#\/\?@]/g,Ic=/[#\?:]/g,Al=/[#\?]/g,qr=/[#\?@]/g,Cc=/#/g;function Hr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function vn(c){c.g||(c.g=new Map,c.h=0,c.i&&qa(c.i,function(g,E){c.add(decodeURIComponent(g.replace(/\+/g," ")),E)}))}i=Hr.prototype,i.add=function(c,g){vn(this),this.i=null,c=Fr(this,c);let E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(g),this.h+=1,this};function Nc(c,g){vn(c),g=Fr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function wl(c,g){return vn(c),g=Fr(c,g),c.g.has(g)}i.forEach=function(c,g){vn(this),this.g.forEach(function(E,w){E.forEach(function(L){c.call(g,L,w,this)},this)},this)};function Sl(c,g){vn(c);let E=[];if(typeof g=="string")wl(c,g)&&(E=E.concat(c.g.get(Fr(c,g))));else for(c=Array.from(c.g.values()),g=0;g<c.length;g++)E=E.concat(c[g]);return E}i.set=function(c,g){return vn(this),this.i=null,c=Fr(this,c),wl(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},i.get=function(c,g){return c?(c=Sl(this,c),c.length>0?String(c[0]):g):g};function Fa(c,g,E){Nc(c,g),E.length>0&&(c.i=null,c.g.set(Fr(c,g),z(E)),c.h+=E.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(let w=0;w<g.length;w++){var E=g[w];const L=sr(E);E=Sl(this,E);for(let H=0;H<E.length;H++){let ie=L;E[H]!==""&&(ie+="="+sr(E[H])),c.push(ie)}}return this.i=c.join("&")};function xc(c){const g=new Hr;return g.i=c.i,c.g&&(g.g=new Map(c.g),g.h=c.h),g}function Fr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Ga(c,g){g&&!c.j&&(vn(c),c.i=null,c.g.forEach(function(E,w){const L=w.toLowerCase();w!=L&&(Nc(this,w),Fa(this,L,E))},c)),c.j=g}function ui(c,g){const E=new ai;if(d.Image){const w=new Image;w.onload=v(Fn,E,"TestLoadImage: loaded",!0,g,w),w.onerror=v(Fn,E,"TestLoadImage: error",!1,g,w),w.onabort=v(Fn,E,"TestLoadImage: abort",!1,g,w),w.ontimeout=v(Fn,E,"TestLoadImage: timeout",!1,g,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else g(!1)}function Rl(c,g){const E=new ai,w=new AbortController,L=setTimeout(()=>{w.abort(),Fn(E,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:w.signal}).then(H=>{clearTimeout(L),H.ok?Fn(E,"TestPingServer: ok",!0,g):Fn(E,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(L),Fn(E,"TestPingServer: error",!1,g)})}function Fn(c,g,E,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(E)}catch{}}function Gr(){this.g=new yc}function Pi(c){this.i=c.Sb||null,this.h=c.ab||!1}T(Pi,_c),Pi.prototype.g=function(){return new Qs(this.i,this.h)};function Qs(c,g){Rt.call(this),this.H=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(Qs,Rt),i=Qs.prototype,i.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=g,this.readyState=1,ci(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(g.body=c),(this.H||d).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Kr(this)),this.readyState=0},i.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ka(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ka(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}i.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Kr(this):ci(this),this.readyState==3&&Ka(this)}},i.Oa=function(c){this.g&&(this.response=this.responseText=c,Kr(this))},i.Na=function(c){this.g&&(this.response=c,Kr(this))},i.ga=function(){this.g&&Kr(this)};function Kr(c){c.readyState=4,c.l=null,c.j=null,c.B=null,ci(c)}i.setRequestHeader=function(c,g){this.A.append(c,g)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var E=g.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=g.next();return c.join(`\r
`)};function ci(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Gn(c){let g="";return Be(c,function(E,w){g+=w,g+=":",g+=E,g+=`\r
`}),g}function $s(c,g,E){e:{for(w in E){var w=!1;break e}w=!0}w||(E=Gn(E),typeof c=="string"?E!=null&&sr(E):Qe(c,g,E))}function We(c){Rt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(We,Rt);var Vi=/^https?$/i,Il=["POST","PUT"];i=We.prototype,i.Fa=function(c){this.H=c},i.ea=function(c,g,E,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():gl.g(),this.g.onreadystatechange=S(y(this.Ca,this));try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){Xs(this,H);return}if(c=E||"",E=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)E.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const H of w.keys())E.set(H,w.get(H));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(E.keys()).find(H=>H.toLowerCase()=="content-type"),L=d.FormData&&c instanceof d.FormData,!(Array.prototype.indexOf.call(Il,g,void 0)>=0)||w||L||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ie]of E)this.g.setRequestHeader(H,ie);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(H){Xs(this,H)}};function Xs(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.o=5,Cl(c),ar(c)}function Cl(c){c.A||(c.A=!0,Bt(c,"complete"),Bt(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Bt(this,"complete"),Bt(this,"abort"),ar(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ar(this,!0)),We.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Ws(this):this.Xa())},i.Xa=function(){Ws(this)};function Ws(c){if(c.h&&typeof u<"u"){if(c.v&&hi(c)==4)setTimeout(c.Ca.bind(c),0);else if(Bt(c,"readystatechange"),hi(c)==4){c.h=!1;try{const H=c.ca();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var E;if(!(E=g)){var w;if(w=H===0){let ie=String(c.D).match(Rc)[1]||null;!ie&&d.self&&d.self.location&&(ie=d.self.location.protocol.slice(0,-1)),w=!Vi.test(ie?ie.toLowerCase():"")}E=w}if(E)Bt(c,"complete"),Bt(c,"success");else{c.o=6;try{var L=hi(c)>2?c.g.statusText:""}catch{L=""}c.l=L+" ["+c.ca()+"]",Cl(c)}}finally{ar(c)}}}}function ar(c,g){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const E=c.g;c.g=null,g||Bt(c,"ready");try{E.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function hi(c){return c.g?c.g.readyState:0}i.ca=function(){try{return hi(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),ff(g)}};function Wt(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function or(c){const g={};c=(c.g&&hi(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(N(c[w]))continue;var E=Ac(c[w]);const L=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const H=g[L]||[];g[L]=H,H.push(E)}Ye(g,function(w){return w.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Li(c,g,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||g}function Yr(c){this.za=0,this.i=[],this.j=new ai,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Li("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Li("baseRetryDelayMs",5e3,c),this.Za=Li("retryDelaySeedMs",1e4,c),this.Ta=Li("forwardChannelMaxRetries",2,c),this.va=Li("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new yl(c&&c.concurrentRequestLimit),this.Ba=new Gr,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Yr.prototype,i.ka=8,i.I=1,i.connect=function(c,g,E,w){It(0),this.W=c,this.H=g||{},E&&w!==void 0&&(this.H.OSID=E,this.H.OAID=w),this.F=this.X,this.J=Lc(this,null,this.W),Ui(this)};function Nl(c){if(Ya(c),c.I==3){var g=c.V++,E=xt(c.J);if(Qe(E,"SID",c.M),Qe(E,"RID",g),Qe(E,"TYPE","terminate"),Js(c,E),g=new oi(c,c.j,g),g.M=2,g.A=Ks(xt(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(g.A.toString(),"")}catch{}!E&&d.Image&&(new Image().src=g.A,E=!0),E||(g.g=Uc(g.j,null),g.g.ea(g.A)),g.F=Date.now(),Ni(g)}Vc(c)}function Qr(c){c.g&&(Dl(c),c.g.cancel(),c.g=null)}function Ya(c){Qr(c),c.v&&(d.clearTimeout(c.v),c.v=null),$a(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&d.clearTimeout(c.m),c.m=null)}function Ui(c){if(!_l(c.h)&&!c.m){c.m=!0;var g=c.Ea;Ce||R(),J||(Ce(),J=!0),I.add(g,c),c.D=0}}function Qa(c,g){return Oi(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=g.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Ri(y(c.Ea,c,g),Pc(c,c.D)),c.D++,!0)}i.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const L=new oi(this,this.j,c);let H=this.o;if(this.U&&(H?(H=M(H),re(H,this.U)):H=this.U),this.u!==null||this.R||(L.J=H,H=null),this.S)e:{for(var g=0,E=0;E<this.i.length;E++){t:{var w=this.i[E];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(g+=w,g>4096){g=E;break e}if(g===4096||E===this.i.length-1){g=E+1;break e}}g=1e3}else g=1e3;g=Dc(this,L,g),E=xt(this.J),Qe(E,"RID",c),Qe(E,"CVER",22),this.G&&Qe(E,"X-HTTP-Session-Id",this.G),Js(this,E),H&&(this.R?g="headers="+sr(Gn(H))+"&"+g:this.u&&$s(E,this.u,H)),vl(this.h,L),this.Ra&&Qe(E,"TYPE","init"),this.S?(Qe(E,"$req",g),Qe(E,"SID","null"),L.U=!0,Ci(L,E,null)):Ci(L,E,g),this.I=2}}else this.I==3&&(c?xl(this,c):this.i.length==0||_l(this.h)||xl(this))};function xl(c,g){var E;g?E=g.l:E=c.V++;const w=xt(c.J);Qe(w,"SID",c.M),Qe(w,"RID",E),Qe(w,"AID",c.K),Js(c,w),c.u&&c.o&&$s(w,c.u,c.o),E=new oi(c,c.j,E,c.D+1),c.u===null&&(E.J=c.o),g&&(c.i=g.G.concat(c.i)),g=Dc(c,E,1e3),E.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),vl(c.h,E),Ci(E,w,g)}function Js(c,g){c.H&&Be(c.H,function(E,w){Qe(g,w,E)}),c.l&&Be({},function(E,w){Qe(g,w,E)})}function Dc(c,g,E){E=Math.min(c.i.length,E);const w=c.l?y(c.l.Ka,c.l,c):null;e:{var L=c.i;let we=-1;for(;;){const Tt=["count="+E];we==-1?E>0?(we=L[0].g,Tt.push("ofs="+we)):we=0:Tt.push("ofs="+we);let Fe=!0;for(let ct=0;ct<E;ct++){var H=L[ct].g;const Kn=L[ct].map;if(H-=we,H<0)we=Math.max(0,L[ct].g-100),Fe=!1;else try{H="req"+H+"_"||"";try{var ie=Kn instanceof Map?Kn:Object.entries(Kn);for(const[zi,di]of ie){let fi=di;m(di)&&(fi=zr(di)),Tt.push(H+zi+"="+encodeURIComponent(fi))}}catch(zi){throw Tt.push(H+"type="+encodeURIComponent("_badmap")),zi}}catch{w&&w(Kn)}}if(Fe){ie=Tt.join("&");break e}}ie=void 0}return c=c.i.splice(0,E),g.G=c,ie}function Oc(c){if(!c.g&&!c.v){c.Y=1;var g=c.Da;Ce||R(),J||(Ce(),J=!0),I.add(g,c),c.A=0}}function Zs(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Ri(y(c.Da,c),Pc(c,c.A)),c.A++,!0)}i.Da=function(){if(this.v=null,kc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Ri(y(this.Wa,this),c)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,It(10),Qr(this),kc(this))};function Dl(c){c.B!=null&&(d.clearTimeout(c.B),c.B=null)}function kc(c){c.g=new oi(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var g=xt(c.na);Qe(g,"RID","rpc"),Qe(g,"SID",c.M),Qe(g,"AID",c.K),Qe(g,"CI",c.F?"0":"1"),!c.F&&c.ia&&Qe(g,"TO",c.ia),Qe(g,"TYPE","xmlhttp"),Js(c,g),c.u&&c.o&&$s(g,c.u,c.o),c.O&&(c.g.H=c.O);var E=c.g;c=c.ba,E.M=1,E.A=Ks(xt(g)),E.u=null,E.R=!0,za(E,c)}i.Va=function(){this.C!=null&&(this.C=null,Qr(this),Zs(this),It(19))};function $a(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Mc(c,g){var E=null;if(c.g==g){$a(c),Dl(c),c.g=null;var w=2}else if(ki(c.h,g))E=g.G,El(c.h,g),w=1;else return;if(c.I!=0){if(g.o)if(w==1){E=g.u?g.u.length:0,g=Date.now()-g.F;var L=c.D;w=ja(),Bt(w,new Si(w,E)),Ui(c)}else Oc(c);else if(L=g.m,L==3||L==0&&g.X>0||!(w==1&&Qa(c,g)||w==2&&Zs(c)))switch(E&&E.length>0&&(g=c.h,g.i=g.i.concat(E)),L){case 1:ji(c,5);break;case 4:ji(c,10);break;case 3:ji(c,6);break;default:ji(c,2)}}}function Pc(c,g){let E=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(E*=2),E*g}function ji(c,g){if(c.j.info("Error code "+g),g==2){var E=y(c.bb,c),w=c.Ua;const L=!w;w=new Nn(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Kt(w,"https"),Ks(w),L?ui(w.toString(),E):Rl(w.toString(),E)}else It(2);c.I=0,c.l&&c.l.pa(g),Vc(c),Ya(c)}i.bb=function(c){c?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Vc(c){if(c.I=0,c.ja=[],c.l){const g=Tl(c.h);(g.length!=0||c.i.length!=0)&&(Y(c.ja,g),Y(c.ja,c.i),c.h.i.length=0,z(c.i),c.i.length=0),c.l.oa()}}function Lc(c,g,E){var w=E instanceof Nn?xt(E):new Nn(E);if(w.g!="")g&&(w.g=g+"."+w.g),Br(w,w.u);else{var L=d.location;w=L.protocol,g=g?g+"."+L.hostname:L.hostname,L=+L.port;const H=new Nn(null);w&&Kt(H,w),g&&(H.g=g),L&&Br(H,L),E&&(H.h=E),w=H}return E=c.G,g=c.wa,E&&g&&Qe(w,E,g),Qe(w,"VER",c.ka),Js(c,w),w}function Uc(c,g,E){if(g&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Aa&&!c.ma?new We(new Pi({ab:E})):new We(c.ma),g.Fa(c.L),g}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function jc(){}i=jc.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function $r(){}$r.prototype.g=function(c,g){return new mn(c,g)};function mn(c,g){Rt.call(this),this.g=new Yr(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(c?c["X-WebChannel-Client-Profile"]=g.sa:c={"X-WebChannel-Client-Profile":g.sa}),this.g.U=c,(c=g&&g.Qb)&&!N(c)&&(this.g.u=c),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!N(g)&&(this.g.G=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new lr(this)}T(mn,Rt),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Nl(this.g)},mn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.v&&(E={},E.__data__=zr(c),c=E);g.i.push(new Nt(g.Ya++,c)),g.I==3&&Ui(g)},mn.prototype.N=function(){this.g.l=null,delete this.j,Nl(this.g),delete this.g,mn.Z.N.call(this)};function zc(c){Xt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const E in g){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}T(zc,Xt);function Bc(){qn.call(this),this.status=1}T(Bc,qn);function lr(c){this.g=c}T(lr,jc),lr.prototype.ra=function(){Bt(this.g,"a")},lr.prototype.qa=function(c){Bt(this.g,new zc(c))},lr.prototype.pa=function(c){Bt(this.g,new Bc)},lr.prototype.oa=function(){Bt(this.g,"b")},$r.prototype.createWebChannel=$r.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,tw=function(){return new $r},ew=function(){return ja()},ZA=Et,Yp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fs.NO_ERROR=0,Fs.TIMEOUT=8,Fs.HTTP_ERROR=6,rd=Fs,pl.COMPLETE="complete",JA=pl,vc.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",Rt.prototype.listen=Rt.prototype.J,Ru=vc,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,WA=We}).apply(typeof $h<"u"?$h:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let un=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};un.UNAUTHENTICATED=new un(null),un.GOOGLE_CREDENTIALS=new un("google-credentials-uid"),un.FIRST_PARTY=new un("first-party-uid"),un.MOCK_USER=new un("mock-user");/**
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
 */let rl="12.9.0";function ZO(i){rl=i}/**
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
 *//**
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
 */const Ia=new Od("@firebase/firestore");function No(){return Ia.logLevel}function ae(i,...e){if(Ia.logLevel<=Oe.DEBUG){const t=e.map(Jg);Ia.debug(`Firestore (${rl}): ${i}`,...t)}}function Or(i,...e){if(Ia.logLevel<=Oe.ERROR){const t=e.map(Jg);Ia.error(`Firestore (${rl}): ${i}`,...t)}}function Ca(i,...e){if(Ia.logLevel<=Oe.WARN){const t=e.map(Jg);Ia.warn(`Firestore (${rl}): ${i}`,...t)}}function Jg(i){if(typeof i=="string")return i;try{return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
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
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,nw(i,s,t)}function nw(i,e,t){let s=`FIRESTORE (${rl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Or(s),new Error(s)}function Ke(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||nw(e,o,s)}function Ae(i,e){return i}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends dn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class iw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ek{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(un.UNAUTHENTICATED)))}shutdown(){}}class tk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class nk{constructor(e){this.t=e,this.currentUser=un.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let u=new Cr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Cr,e.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const p=u;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Cr)}}),0),d()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ke(typeof s.accessToken=="string",31837,{l:s}),new iw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new un(e)}}class ik{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=un.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class rk{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new ik(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(un.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class rT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sk{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0,3512);const s=u=>{u.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,ae("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new rT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new rT(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ak(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Zg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=ak(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Pe(i,e){return i<e?-1:i>e?1:0}function Qp(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return xp(o)===xp(u)?Pe(o,u):xp(o)?1:-1}return Pe(i.length,e.length)}const ok=55296,lk=57343;function xp(i){const e=i.charCodeAt(0);return e>=ok&&e<=lk}function Yo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const sT="__name__";class Ki{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ki.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ki?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Ki.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Pe(e.length,t.length)}static compareSegments(e,t){const s=Ki.isNumericId(e),o=Ki.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Ki.extractNumericId(e).compare(Ki.extractNumericId(t)):Qp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ws.fromString(e.substring(4,e.length-2))}}class it extends Ki{construct(e,t,s){return new it(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new it(t)}static emptyPath(){return new it([])}}const uk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Ki{construct(e,t,s){return new rn(e,t,s)}static isValidIdentifier(e){return uk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sT}static keyField(){return new rn([sT])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new se(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let d=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new se(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new se(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(d=!d,o++):m!=="."||d?(s+=m,o++):(u(),o++)}if(u(),d)throw new se(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(t)}static emptyPath(){return new rn([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(it.fromString(e))}static fromName(e){return new pe(it.fromString(e).popFirst(5))}static empty(){return new pe(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return it.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new it(e.slice()))}}/**
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
 */function rw(i,e,t){if(!t)throw new se(Q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function ck(i,e,t,s){if(e===!0&&s===!0)throw new se(Q.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function aT(i){if(!pe.isDocumentKey(i))throw new se(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function oT(i){if(pe.isDocumentKey(i))throw new se(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function sw(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Qd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function Ti(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new se(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qd(i);throw new se(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ut(i,e){const t={typeString:i};return e&&(t.value=e),t}function cc(i,e){if(!sw(i))throw new se(Q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const d=i[s];if(o&&typeof d!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&d!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new se(Q.INVALID_ARGUMENT,t);return!0}/**
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
 */const lT=-62135596800,uT=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*uT);return new at(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lT)throw new se(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uT}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:at._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cc(e,at._jsonSchema))return new at(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}at._jsonSchemaVersion="firestore/timestamp/1.0",at._jsonSchema={type:Ut("string",at._jsonSchemaVersion),seconds:Ut("number"),nanoseconds:Ut("number")};/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new at(0,0))}static max(){return new Te(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qu=-1;function hk(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new at(t+1,0):new at(t,s));return new Cs(o,pe.empty(),e)}function dk(i){return new Cs(i.readTime,i.key,Qu)}class Cs{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Cs(Te.min(),pe.empty(),Qu)}static max(){return new Cs(Te.max(),pe.empty(),Qu)}}function fk(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(i.documentKey,e.documentKey),t!==0?t:Pe(i.largestBatchId,e.largestBatchId))}/**
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
 */const mk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function sl(i){if(i.code!==Q.FAILED_PRECONDITION||i.message!==mk)throw i;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,s)=>{t(e)}))}static reject(e){return new W(((t,s)=>{s(e)}))}static waitFor(e){return new W(((t,s)=>{let o=0,u=0,d=!1;e.forEach((m=>{++o,m.next((()=>{++u,d&&u===o&&t()}),(p=>s(p)))})),d=!0,u===o&&t()}))}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next((o=>o?W.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new W(((s,o)=>{const u=e.length,d=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;t(e[y]).next((v=>{d[y]=v,++m,m===u&&s(d)}),(v=>o(v)))}}))}static doWhile(e,t){return new W(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function gk(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function al(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class $d{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}$d.ce=-1;/**
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
 */const ey=-1;function Xd(i){return i==null}function Td(i){return i===0&&1/i==-1/0}function yk(i){return typeof i=="number"&&Number.isInteger(i)&&!Td(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const aw="";function _k(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=cT(e)),e=vk(i.get(t),e);return cT(e)}function vk(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case aw:t+="";break;default:t+=u}}return t}function cT(i){return i+aw+""}/**
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
 */function hT(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ls(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function ow(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class ft{constructor(e,t){this.comparator=e,this.root=t||nn.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nn.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xh(this.root,e,this.comparator,!0)}}class Xh{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nn{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??nn.RED,this.left=o??nn.EMPTY,this.right=u??nn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new nn(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return nn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return nn.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}nn.EMPTY=null,nn.RED=!0,nn.BLACK=!1;nn.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new nn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ft{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new dT(this.data.getIterator())}getIteratorFrom(e){return new dT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ft(this.comparator);return t.data=e,t}}class dT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jn{constructor(e){this.fields=e,e.sort(rn.comparator)}static empty(){return new jn([])}unionWith(e){let t=new Ft(rn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class lw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class an{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new lw("Invalid base64 string: "+u):u}})(e);return new an(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let d=0;d<o.length;++d)u+=String.fromCharCode(o[d]);return u})(e);return new an(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}an.EMPTY_BYTE_STRING=new an("");const Ek=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ns(i){if(Ke(!!i,39018),typeof i=="string"){let e=0;const t=Ek.exec(i);if(Ke(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:wt(i.seconds),nanos:wt(i.nanos)}}function wt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function xs(i){return typeof i=="string"?an.fromBase64String(i):an.fromUint8Array(i)}/**
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
 */const uw="server_timestamp",cw="__type__",hw="__previous_value__",dw="__local_write_time__";function ty(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[cw])==null?void 0:s.stringValue)===uw}function Wd(i){const e=i.mapValue.fields[hw];return ty(e)?Wd(e):e}function $u(i){const e=Ns(i.mapValue.fields[dw].timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class Tk{constructor(e,t,s,o,u,d,m,p,y,v,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=d,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=v,this.apiKey=T}}const bd="(default)";class Xu{constructor(e,t){this.projectId=e,this.database=t||bd}static empty(){return new Xu("","")}get isDefaultDatabase(){return this.database===bd}isEqual(e){return e instanceof Xu&&e.projectId===this.projectId&&e.database===this.database}}function bk(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new se(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xu(i.options.projectId,e)}/**
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
 */const fw="__type__",Ak="__max__",Wh={mapValue:{}},mw="__vector__",Ad="value";function Ds(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?ty(i)?4:Sk(i)?9007199254740991:wk(i)?10:11:_e(28295,{value:i})}function rr(i,e){if(i===e)return!0;const t=Ds(i);if(t!==Ds(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return $u(i).isEqual($u(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const d=Ns(o.timestampValue),m=Ns(u.timestampValue);return d.seconds===m.seconds&&d.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return xs(o.bytesValue).isEqual(xs(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return wt(o.geoPointValue.latitude)===wt(u.geoPointValue.latitude)&&wt(o.geoPointValue.longitude)===wt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return wt(o.integerValue)===wt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const d=wt(o.doubleValue),m=wt(u.doubleValue);return d===m?Td(d)===Td(m):isNaN(d)&&isNaN(m)}return!1})(i,e);case 9:return Yo(i.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return(function(o,u){const d=o.mapValue.fields||{},m=u.mapValue.fields||{};if(hT(d)!==hT(m))return!1;for(const p in d)if(d.hasOwnProperty(p)&&(m[p]===void 0||!rr(d[p],m[p])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function Wu(i,e){return(i.values||[]).find((t=>rr(t,e)))!==void 0}function Qo(i,e){if(i===e)return 0;const t=Ds(i),s=Ds(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(i.booleanValue,e.booleanValue);case 2:return(function(u,d){const m=wt(u.integerValue||u.doubleValue),p=wt(d.integerValue||d.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(i,e);case 3:return fT(i.timestampValue,e.timestampValue);case 4:return fT($u(i),$u(e));case 5:return Qp(i.stringValue,e.stringValue);case 6:return(function(u,d){const m=xs(u),p=xs(d);return m.compareTo(p)})(i.bytesValue,e.bytesValue);case 7:return(function(u,d){const m=u.split("/"),p=d.split("/");for(let y=0;y<m.length&&y<p.length;y++){const v=Pe(m[y],p[y]);if(v!==0)return v}return Pe(m.length,p.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,d){const m=Pe(wt(u.latitude),wt(d.latitude));return m!==0?m:Pe(wt(u.longitude),wt(d.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return mT(i.arrayValue,e.arrayValue);case 10:return(function(u,d){var S,z,Y,ee;const m=u.fields||{},p=d.fields||{},y=(S=m[Ad])==null?void 0:S.arrayValue,v=(z=p[Ad])==null?void 0:z.arrayValue,T=Pe(((Y=y==null?void 0:y.values)==null?void 0:Y.length)||0,((ee=v==null?void 0:v.values)==null?void 0:ee.length)||0);return T!==0?T:mT(y,v)})(i.mapValue,e.mapValue);case 11:return(function(u,d){if(u===Wh.mapValue&&d===Wh.mapValue)return 0;if(u===Wh.mapValue)return 1;if(d===Wh.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=d.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const S=Qp(p[T],v[T]);if(S!==0)return S;const z=Qo(m[p[T]],y[v[T]]);if(z!==0)return z}return Pe(p.length,v.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function fT(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Pe(i,e);const t=Ns(i),s=Ns(e),o=Pe(t.seconds,s.seconds);return o!==0?o:Pe(t.nanos,s.nanos)}function mT(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Qo(t[o],s[o]);if(u)return u}return Pe(t.length,s.length)}function $o(i){return $p(i)}function $p(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Ns(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return xs(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return pe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=$p(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const d of s)u?u=!1:o+=",",o+=`${d}:${$p(t.fields[d])}`;return o+"}"})(i.mapValue):_e(61005,{value:i})}function sd(i){switch(Ds(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wd(i);return e?16+sd(e):16;case 5:return 2*i.stringValue.length;case 6:return xs(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+sd(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Ls(s.fields,((u,d)=>{o+=u.length+sd(d)})),o})(i.mapValue);default:throw _e(13486,{value:i})}}function pT(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Xp(i){return!!i&&"integerValue"in i}function ny(i){return!!i&&"arrayValue"in i}function gT(i){return!!i&&"nullValue"in i}function yT(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function ad(i){return!!i&&"mapValue"in i}function wk(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[fw])==null?void 0:s.stringValue)===mw}function Lu(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Ls(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Lu(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Lu(i.arrayValue.values[t]);return e}return{...i}}function Sk(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Ak}/**
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
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ad(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lu(t)}setAll(e){let t=rn.emptyPath(),s={},o=[];e.forEach(((d,m)=>{if(!t.isImmediateParentOf(m)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=m.popLast()}d?s[m.lastSegment()]=Lu(d):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());ad(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];ad(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ls(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new In(Lu(this.value))}}function pw(i){const e=[];return Ls(i.fields,((t,s)=>{const o=new rn([t]);if(ad(s)){const u=pw(s.mapValue).fields;if(u.length===0)e.push(o);else for(const d of u)e.push(o.child(d))}else e.push(o)})),new jn(e)}/**
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
 */class cn{constructor(e,t,s,o,u,d,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=d,this.documentState=m}static newInvalidDocument(e){return new cn(e,0,Te.min(),Te.min(),Te.min(),In.empty(),0)}static newFoundDocument(e,t,s,o){return new cn(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new cn(e,2,t,Te.min(),Te.min(),In.empty(),0)}static newUnknownDocument(e,t){return new cn(e,3,t,Te.min(),Te.min(),In.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wd{constructor(e,t){this.position=e,this.inclusive=t}}function _T(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],d=i.position[o];if(u.field.isKeyField()?s=pe.comparator(pe.fromName(d.referenceValue),t.key):s=Qo(d,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function vT(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!rr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ju{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rk(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class gw{}class Lt extends gw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Ck(e,t,s):t==="array-contains"?new Dk(e,s):t==="in"?new Ok(e,s):t==="not-in"?new kk(e,s):t==="array-contains-any"?new Mk(e,s):new Lt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Nk(e,s):new xk(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Qo(t,this.value)):t!==null&&Ds(this.value)===Ds(t)&&this.matchesComparison(Qo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bi extends gw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new bi(e,t)}matches(e){return yw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function yw(i){return i.op==="and"}function _w(i){return Ik(i)&&yw(i)}function Ik(i){for(const e of i.filters)if(e instanceof bi)return!1;return!0}function Wp(i){if(i instanceof Lt)return i.field.canonicalString()+i.op.toString()+$o(i.value);if(_w(i))return i.filters.map((e=>Wp(e))).join(",");{const e=i.filters.map((t=>Wp(t))).join(",");return`${i.op}(${e})`}}function vw(i,e){return i instanceof Lt?(function(s,o){return o instanceof Lt&&s.op===o.op&&s.field.isEqual(o.field)&&rr(s.value,o.value)})(i,e):i instanceof bi?(function(s,o){return o instanceof bi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,d,m)=>u&&vw(d,o.filters[m])),!0):!1})(i,e):void _e(19439)}function Ew(i){return i instanceof Lt?(function(t){return`${t.field.canonicalString()} ${t.op} ${$o(t.value)}`})(i):i instanceof bi?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ew).join(" ,")+"}"})(i):"Filter"}class Ck extends Lt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class Nk extends Lt{constructor(e,t){super(e,"in",t),this.keys=Tw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class xk extends Lt{constructor(e,t){super(e,"not-in",t),this.keys=Tw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Tw(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>pe.fromName(s.referenceValue)))}class Dk extends Lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ny(t)&&Wu(t.arrayValue,this.value)}}class Ok extends Lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wu(this.value.arrayValue,t)}}class kk extends Lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Wu(this.value.arrayValue,t)}}class Mk extends Lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ny(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Wu(this.value.arrayValue,s)))}}/**
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
 */class Pk{constructor(e,t=null,s=[],o=[],u=null,d=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=d,this.endAt=m,this.Te=null}}function ET(i,e=null,t=[],s=[],o=null,u=null,d=null){return new Pk(i,e,t,s,o,u,d)}function iy(i){const e=Ae(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Wp(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Xd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>$o(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>$o(s))).join(",")),e.Te=t}return e.Te}function ry(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!Rk(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!vw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!vT(i.startAt,e.startAt)&&vT(i.endAt,e.endAt)}function Jp(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class ol{constructor(e,t=null,s=[],o=[],u=null,d="F",m=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=d,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Vk(i,e,t,s,o,u,d,m){return new ol(i,e,t,s,o,u,d,m)}function sy(i){return new ol(i)}function TT(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Lk(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function bw(i){return i.collectionGroup!==null}function Uu(i){const e=Ae(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let m=new Ft(rn.comparator);return d.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(m=m.add(y.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Ju(u,s))})),t.has(rn.keyField().canonicalString())||e.Ie.push(new Ju(rn.keyField(),s))}return e.Ie}function er(i){const e=Ae(i);return e.Ee||(e.Ee=Uk(e,Uu(i))),e.Ee}function Uk(i,e){if(i.limitType==="F")return ET(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ju(o.field,u)}));const t=i.endAt?new wd(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new wd(i.startAt.position,i.startAt.inclusive):null;return ET(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Zp(i,e){const t=i.filters.concat([e]);return new ol(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function jk(i,e){const t=i.explicitOrderBy.concat([e]);return new ol(i.path,i.collectionGroup,t,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}function eg(i,e,t){return new ol(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Jd(i,e){return ry(er(i),er(e))&&i.limitType===e.limitType}function Aw(i){return`${iy(er(i))}|lt:${i.limitType}`}function xo(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Ew(o))).join(", ")}]`),Xd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>$o(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>$o(o))).join(",")),`Target(${s})`})(er(i))}; limitType=${i.limitType})`}function Zd(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Uu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(d,m,p){const y=_T(d,m,p);return d.inclusive?y<=0:y<0})(s.startAt,Uu(s),o)||s.endAt&&!(function(d,m,p){const y=_T(d,m,p);return d.inclusive?y>=0:y>0})(s.endAt,Uu(s),o))})(i,e)}function zk(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function ww(i){return(e,t)=>{let s=!1;for(const o of Uu(i)){const u=Bk(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function Bk(i,e,t){const s=i.field.isKeyField()?pe.comparator(e.key,t.key):(function(u,d,m){const p=d.data.field(u),y=m.data.field(u);return p!==null&&y!==null?Qo(p,y):_e(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
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
 */class Oa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ls(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return ow(this.inner)}size(){return this.innerSize}}/**
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
 */const qk=new ft(pe.comparator);function kr(){return qk}const Sw=new ft(pe.comparator);function Iu(...i){let e=Sw;for(const t of i)e=e.insert(t.key,t);return e}function Rw(i){let e=Sw;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function _a(){return ju()}function Iw(){return ju()}function ju(){return new Oa((i=>i.toString()),((i,e)=>i.isEqual(e)))}const Hk=new ft(pe.comparator),Fk=new Ft(pe.comparator);function Ve(...i){let e=Fk;for(const t of i)e=e.add(t);return e}const Gk=new Ft(Pe);function Kk(){return Gk}/**
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
 */function ay(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Td(e)?"-0":e}}function Cw(i){return{integerValue:""+i}}function Yk(i,e){return yk(e)?Cw(e):ay(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ef{constructor(){this._=void 0}}function Qk(i,e,t){return i instanceof Zu?(function(o,u){const d={fields:{[cw]:{stringValue:uw},[dw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&ty(u)&&(u=Wd(u)),u&&(d.fields[hw]=u),{mapValue:d}})(t,e):i instanceof ec?xw(i,e):i instanceof tc?Dw(i,e):(function(o,u){const d=Nw(o,u),m=bT(d)+bT(o.Ae);return Xp(d)&&Xp(o.Ae)?Cw(m):ay(o.serializer,m)})(i,e)}function $k(i,e,t){return i instanceof ec?xw(i,e):i instanceof tc?Dw(i,e):t}function Nw(i,e){return i instanceof Sd?(function(s){return Xp(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Zu extends ef{}class ec extends ef{constructor(e){super(),this.elements=e}}function xw(i,e){const t=Ow(e);for(const s of i.elements)t.some((o=>rr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class tc extends ef{constructor(e){super(),this.elements=e}}function Dw(i,e){let t=Ow(e);for(const s of i.elements)t=t.filter((o=>!rr(o,s)));return{arrayValue:{values:t}}}class Sd extends ef{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function bT(i){return wt(i.integerValue||i.doubleValue)}function Ow(i){return ny(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class Xk{constructor(e,t){this.field=e,this.transform=t}}function Wk(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof ec&&o instanceof ec||s instanceof tc&&o instanceof tc?Yo(s.elements,o.elements,rr):s instanceof Sd&&o instanceof Sd?rr(s.Ae,o.Ae):s instanceof Zu&&o instanceof Zu})(i.transform,e.transform)}class Jk{constructor(e,t){this.version=e,this.transformResults=t}}class ii{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ii}static exists(e){return new ii(void 0,e)}static updateTime(e){return new ii(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function od(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class tf{}function kw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new oy(i.key,ii.none()):new hc(i.key,i.data,ii.none());{const t=i.data,s=In.empty();let o=new Ft(rn.comparator);for(let u of e.fields)if(!o.has(u)){let d=t.field(u);d===null&&u.length>1&&(u=u.popLast(),d=t.field(u)),d===null?s.delete(u):s.set(u,d),o=o.add(u)}return new Us(i.key,s,new jn(o.toArray()),ii.none())}}function Zk(i,e,t){i instanceof hc?(function(o,u,d){const m=o.value.clone(),p=wT(o.fieldTransforms,u,d.transformResults);m.setAll(p),u.convertToFoundDocument(d.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Us?(function(o,u,d){if(!od(o.precondition,u))return void u.convertToUnknownDocument(d.version);const m=wT(o.fieldTransforms,u,d.transformResults),p=u.data;p.setAll(Mw(o)),p.setAll(m),u.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(i,e,t):(function(o,u,d){u.convertToNoDocument(d.version).setHasCommittedMutations()})(0,e,t)}function zu(i,e,t,s){return i instanceof hc?(function(u,d,m,p){if(!od(u.precondition,d))return m;const y=u.value.clone(),v=ST(u.fieldTransforms,p,d);return y.setAll(v),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null})(i,e,t,s):i instanceof Us?(function(u,d,m,p){if(!od(u.precondition,d))return m;const y=ST(u.fieldTransforms,p,d),v=d.data;return v.setAll(Mw(u)),v.setAll(y),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((T=>T.field)))})(i,e,t,s):(function(u,d,m){return od(u.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):m})(i,e,t)}function e4(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=Nw(s.transform,o||null);u!=null&&(t===null&&(t=In.empty()),t.set(s.field,u))}return t||null}function AT(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Yo(s,o,((u,d)=>Wk(u,d)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class hc extends tf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Us extends tf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Mw(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function wT(i,e,t){const s=new Map;Ke(i.length===t.length,32656,{Ve:t.length,de:i.length});for(let o=0;o<t.length;o++){const u=i[o],d=u.transform,m=e.data.field(u.field);s.set(u.field,$k(d,m,t[o]))}return s}function ST(i,e,t){const s=new Map;for(const o of i){const u=o.transform,d=t.data.field(o.field);s.set(o.field,Qk(u,d,e))}return s}class oy extends tf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t4 extends tf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class n4{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&Zk(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=zu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=zu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Iw();return this.mutations.forEach((o=>{const u=e.get(o.key),d=u.overlayedDocument;let m=this.applyToLocalView(d,u.mutatedFields);m=t.has(o.key)?null:m;const p=kw(d,m);p!==null&&s.set(o.key,p),d.isValidDocument()||d.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&Yo(this.mutations,e.mutations,((t,s)=>AT(t,s)))&&Yo(this.baseMutations,e.baseMutations,((t,s)=>AT(t,s)))}}class ly{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ke(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return Hk})();const u=e.mutations;for(let d=0;d<u.length;d++)o=o.insert(u[d].key,s[d].version);return new ly(e,t,s,o)}}/**
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
 */class i4{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class r4{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Pt,ze;function s4(i){switch(i){case Q.OK:return _e(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function Pw(i){if(i===void 0)return Or("GRPC error has no .code"),Q.UNKNOWN;switch(i){case Pt.OK:return Q.OK;case Pt.CANCELLED:return Q.CANCELLED;case Pt.UNKNOWN:return Q.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return Q.INTERNAL;case Pt.UNAVAILABLE:return Q.UNAVAILABLE;case Pt.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case Pt.NOT_FOUND:return Q.NOT_FOUND;case Pt.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case Pt.ABORTED:return Q.ABORTED;case Pt.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case Pt.DATA_LOSS:return Q.DATA_LOSS;default:return _e(39323,{code:i})}}(ze=Pt||(Pt={}))[ze.OK=0]="OK",ze[ze.CANCELLED=1]="CANCELLED",ze[ze.UNKNOWN=2]="UNKNOWN",ze[ze.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ze[ze.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ze[ze.NOT_FOUND=5]="NOT_FOUND",ze[ze.ALREADY_EXISTS=6]="ALREADY_EXISTS",ze[ze.PERMISSION_DENIED=7]="PERMISSION_DENIED",ze[ze.UNAUTHENTICATED=16]="UNAUTHENTICATED",ze[ze.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ze[ze.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ze[ze.ABORTED=10]="ABORTED",ze[ze.OUT_OF_RANGE=11]="OUT_OF_RANGE",ze[ze.UNIMPLEMENTED=12]="UNIMPLEMENTED",ze[ze.INTERNAL=13]="INTERNAL",ze[ze.UNAVAILABLE=14]="UNAVAILABLE",ze[ze.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function a4(){return new TextEncoder}/**
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
 */const o4=new ws([4294967295,4294967295],0);function RT(i){const e=a4().encode(i),t=new XA;return t.update(e),new Uint8Array(t.digest())}function IT(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ws([t,s],0),new ws([o,u],0)]}class uy{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Cu(`Invalid padding: ${t}`);if(s<0)throw new Cu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Cu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Cu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ws.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(ws.fromNumber(s)));return o.compare(o4)===1&&(o=new ws([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=RT(e),[s,o]=IT(t);for(let u=0;u<this.hashCount;u++){const d=this.ye(s,o,u);if(!this.we(d))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),d=new uy(u,o,t);return s.forEach((m=>d.insert(m))),d}insert(e){if(this.ge===0)return;const t=RT(e),[s,o]=IT(t);for(let u=0;u<this.hashCount;u++){const d=this.ye(s,o,u);this.be(d)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Cu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nf{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,dc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new nf(Te.min(),o,new ft(Pe),kr(),Ve())}}class dc{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new dc(s,t,Ve(),Ve(),Ve())}}/**
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
 */class ld{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Vw{constructor(e,t){this.targetId=e,this.Ce=t}}class Lw{constructor(e,t,s=an.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class CT{constructor(){this.ve=0,this.Fe=NT(),this.Me=an.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ve(),t=Ve(),s=Ve();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new dc(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=NT()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ke(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class l4{constructor(e){this.Ge=e,this.ze=new Map,this.je=kr(),this.He=Jh(),this.Je=Jh(),this.Ze=new ft(Pe)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Jp(u))if(s===0){const d=new pe(u.path);this.et(t,d,cn.newNoDocument(d,Te.min()))}else Ke(s===1,20013,{expectedCount:s});else{const d=this._t(t);if(d!==s){const m=this.ut(e),p=m?this.ct(m,e,d):1;if(p!==0){this.it(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let d,m;try{d=xs(s).toUint8Array()}catch(p){if(p instanceof lw)return Ca("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new uy(d,o,u)}catch(p){return Ca(p instanceof Cu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const d=this.Ge.ht(),m=`projects/${d.projectId}/databases/${d.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,d)=>{const m=this.ot(d);if(m){if(u.current&&Jp(m.target)){const p=new pe(m.target.path);this.It(p).has(d)||this.Et(d,p)||this.et(d,p,cn.newNoDocument(p,e))}u.Be&&(t.set(d,u.ke()),u.Ke())}}));let s=Ve();this.Je.forEach(((u,d)=>{let m=!0;d.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,d)=>d.setReadTime(e)));const o=new nf(e,t,this.Ze,this.je,s);return this.je=kr(),this.He=Jh(),this.Je=Jh(),this.Ze=new ft(Pe),o}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new CT,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ft(Pe),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ft(Pe),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new CT),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Jh(){return new ft(pe.comparator)}function NT(){return new ft(pe.comparator)}const u4={asc:"ASCENDING",desc:"DESCENDING"},c4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},h4={and:"AND",or:"OR"};class d4{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function tg(i,e){return i.useProto3Json||Xd(e)?e:{value:e}}function Rd(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function f4(i,e){return Rd(i,e.toTimestamp())}function tr(i){return Ke(!!i,49232),Te.fromTimestamp((function(t){const s=Ns(t);return new at(s.seconds,s.nanos)})(i))}function cy(i,e){return ng(i,e).canonicalString()}function ng(i,e){const t=(function(o){return new it(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function jw(i){const e=it.fromString(i);return Ke(Fw(e),10190,{key:e.toString()}),e}function ig(i,e){return cy(i.databaseId,e.path)}function Dp(i,e){const t=jw(e);if(t.get(1)!==i.databaseId.projectId)throw new se(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new se(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new pe(Bw(t))}function zw(i,e){return cy(i.databaseId,e)}function m4(i){const e=jw(i);return e.length===4?it.emptyPath():Bw(e)}function rg(i){return new it(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Bw(i){return Ke(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function xT(i,e,t){return{name:ig(i,e),fields:t.value.mapValue.fields}}function p4(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(y,v){return y.useProto3Json?(Ke(v===void 0||typeof v=="string",58123),an.fromBase64String(v||"")):(Ke(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),an.fromUint8Array(v||new Uint8Array))})(i,e.targetChange.resumeToken),d=e.targetChange.cause,m=d&&(function(y){const v=y.code===void 0?Q.UNKNOWN:Pw(y.code);return new se(v,y.message||"")})(d);t=new Lw(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Dp(i,s.document.name),u=tr(s.document.updateTime),d=s.document.createTime?tr(s.document.createTime):Te.min(),m=new In({mapValue:{fields:s.document.fields}}),p=cn.newFoundDocument(o,u,d,m),y=s.targetIds||[],v=s.removedTargetIds||[];t=new ld(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Dp(i,s.document),u=s.readTime?tr(s.readTime):Te.min(),d=cn.newNoDocument(o,u),m=s.removedTargetIds||[];t=new ld([],m,d.key,d)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Dp(i,s.document),u=s.removedTargetIds||[];t=new ld([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,d=new r4(o,u),m=s.targetId;t=new Vw(m,d)}}return t}function g4(i,e){let t;if(e instanceof hc)t={update:xT(i,e.key,e.value)};else if(e instanceof oy)t={delete:ig(i,e.key)};else if(e instanceof Us)t={update:xT(i,e.key,e.data),updateMask:S4(e.fieldMask)};else{if(!(e instanceof t4))return _e(16599,{dt:e.type});t={verify:ig(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,d){const m=d.transform;if(m instanceof Zu)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof ec)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof tc)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Sd)return{fieldPath:d.field.canonicalString(),increment:m.Ae};throw _e(20930,{transform:d.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:f4(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(i,e.precondition)),t}function y4(i,e){return i&&i.length>0?(Ke(e!==void 0,14353),i.map((t=>(function(o,u){let d=o.updateTime?tr(o.updateTime):tr(u);return d.isEqual(Te.min())&&(d=tr(u)),new Jk(d,o.transformResults||[])})(t,e)))):[]}function _4(i,e){return{documents:[zw(i,e.path)]}}function v4(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=zw(i,o);const u=(function(y){if(y.length!==0)return Hw(bi.create(y,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const d=(function(y){if(y.length!==0)return y.map((v=>(function(S){return{field:Do(S.field),direction:b4(S.dir)}})(v)))})(e.orderBy);d&&(t.structuredQuery.orderBy=d);const m=tg(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function E4(i){let e=m4(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ke(s===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let u=[];t.where&&(u=(function(T){const S=qw(T);return S instanceof bi&&_w(S)?S.getFilters():[S]})(t.where));let d=[];t.orderBy&&(d=(function(T){return T.map((S=>(function(Y){return new Ju(Oo(Y.field),(function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(S)))})(t.orderBy));let m=null;t.limit&&(m=(function(T){let S;return S=typeof T=="object"?T.value:T,Xd(S)?null:S})(t.limit));let p=null;t.startAt&&(p=(function(T){const S=!!T.before,z=T.values||[];return new wd(z,S)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const S=!T.before,z=T.values||[];return new wd(z,S)})(t.endAt)),Vk(e,o,d,u,m,"F",p,y)}function T4(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qw(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Oo(t.unaryFilter.field);return Lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Oo(t.unaryFilter.field);return Lt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Oo(t.unaryFilter.field);return Lt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Oo(t.unaryFilter.field);return Lt.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(t){return Lt.create(Oo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return bi.create(t.compositeFilter.filters.map((s=>qw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(i):_e(30097,{filter:i})}function b4(i){return u4[i]}function A4(i){return c4[i]}function w4(i){return h4[i]}function Do(i){return{fieldPath:i.canonicalString()}}function Oo(i){return rn.fromServerFormat(i.fieldPath)}function Hw(i){return i instanceof Lt?(function(t){if(t.op==="=="){if(yT(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NAN"}};if(gT(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(yT(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NAN"}};if(gT(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Do(t.field),op:A4(t.op),value:t.value}}})(i):i instanceof bi?(function(t){const s=t.getFilters().map((o=>Hw(o)));return s.length===1?s[0]:{compositeFilter:{op:w4(t.op),filters:s}}})(i):_e(54877,{filter:i})}function S4(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Fw(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function Gw(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
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
 */class Es{constructor(e,t,s,o,u=Te.min(),d=Te.min(),m=an.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class R4{constructor(e){this.yt=e}}function I4(i){const e=E4({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?eg(e,e.limit,"L"):e}/**
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
 */class C4{constructor(){this.Sn=new N4}addToCollectionParentIndex(e,t){return this.Sn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Cs.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Cs.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class N4{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Ft(it.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ft(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const DT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kw=41943040;class Rn{static withCacheSize(e){return new Rn(e,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Rn.DEFAULT_COLLECTION_PERCENTILE=10,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rn.DEFAULT=new Rn(Kw,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rn.DISABLED=new Rn(-1,0,0);/**
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
 */class Xo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Xo(0)}static ar(){return new Xo(-1)}}/**
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
 */const OT="LruGarbageCollector",x4=1048576;function kT([i,e],[t,s]){const o=Pe(i,t);return o===0?Pe(e,s):o}class D4{constructor(e){this.Pr=e,this.buffer=new Ft(kT),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();kT(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class O4{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ae(OT,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){al(t)?ae(OT,"Ignoring IndexedDB error during garbage collection: ",t):await sl(t)}await this.Ar(3e5)}))}}class k4{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return W.resolve($d.ce);const s=new D4(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(DT)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),DT):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,d,m,p,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,d=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,m=Date.now(),this.removeTargets(e,s,t)))).next((T=>(u=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(y=Date.now(),No()<=Oe.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-v}ms
	Determined least recently used ${o} in `+(m-d)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-v}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T}))))}}function M4(i,e){return new k4(i,e)}/**
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
 */class P4{constructor(){this.changes=new Oa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class V4{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class L4{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&zu(s.mutation,o,jn.empty(),at.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ve()){const o=_a();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let d=Iu();return u.forEach(((m,p)=>{d=d.insert(m,p.overlayedDocument)})),d}))))}getOverlayedDocuments(e,t){const s=_a();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ve())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((d,m)=>{t.set(d,m)}))}))}computeViews(e,t,s,o){let u=kr();const d=ju(),m=(function(){return ju()})();return t.forEach(((p,y)=>{const v=s.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Us)?u=u.insert(y.key,y):v!==void 0?(d.set(y.key,v.mutation.getFieldMask()),zu(v.mutation,y,v.mutation.getFieldMask(),at.now())):d.set(y.key,jn.empty())})),this.recalculateAndSaveOverlays(e,u).next((p=>(p.forEach(((y,v)=>d.set(y,v))),t.forEach(((y,v)=>m.set(y,new V4(v,d.get(y)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=ju();let o=new ft(((d,m)=>d-m)),u=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((d=>{for(const m of d)m.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let v=s.get(p)||jn.empty();v=m.applyToLocalView(y,v),s.set(p,v);const T=(o.get(m.batchId)||Ve()).add(p);o=o.insert(m.batchId,T)}))})).next((()=>{const d=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,v=p.value,T=Iw();v.forEach((S=>{if(!u.has(S)){const z=kw(t.get(S),s.get(S));z!==null&&T.set(S,z),u=u.add(S)}})),d.push(this.documentOverlayCache.saveOverlays(e,y,T))}return W.waitFor(d)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return Lk(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const d=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):W.resolve(_a());let m=Qu,p=u;return d.next((y=>W.forEach(y,((v,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),u.get(v)?W.resolve():this.remoteDocumentCache.getEntry(e,v).next((S=>{p=p.insert(v,S)}))))).next((()=>this.populateOverlays(e,y,u))).next((()=>this.computeViews(e,p,y,Ve()))).next((v=>({batchId:m,changes:Rw(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let o=Iu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let d=Iu();return this.indexManager.getCollectionParents(e,u).next((m=>W.forEach(m,(p=>{const y=(function(T,S){return new ol(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((v=>{v.forEach(((T,S)=>{d=d.insert(T,S)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((d=>(u=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((d=>{u.forEach(((p,y)=>{const v=y.getKey();d.get(v)===null&&(d=d.insert(v,cn.newInvalidDocument(v)))}));let m=Iu();return d.forEach(((p,y)=>{const v=u.get(p);v!==void 0&&zu(v.mutation,y,jn.empty(),at.now()),Zd(t,y)&&(m=m.insert(p,y))})),m}))}}/**
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
 */class U4{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return W.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:tr(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:I4(o.bundledQuery),readTime:tr(o.readTime)}})(t)),W.resolve()}}/**
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
 */class j4{constructor(){this.overlays=new ft(pe.comparator),this.Lr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=_a();return W.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.bt(e,t,u)})),W.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const o=_a(),u=t.length+1,d=new pe(t.child("")),m=this.overlays.getIteratorFrom(d);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new ft(((y,v)=>y-v));const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let v=u.get(y.largestBatchId);v===null&&(v=_a(),u=u.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const m=_a(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,v)=>m.set(y,v))),!(m.size()>=o)););return W.resolve(m)}bt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const d=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new i4(t,s));let u=this.Lr.get(t);u===void 0&&(u=Ve(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class z4{constructor(){this.sessionToken=an.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class hy{constructor(){this.kr=new Ft(Qt.Kr),this.qr=new Ft(Qt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Qt(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Qt(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new pe(new it([])),s=new Qt(t,e),o=new Qt(t,e+1),u=[];return this.qr.forEachInRange([s,o],(d=>{this.Wr(d),u.push(d.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new pe(new it([])),s=new Qt(t,e),o=new Qt(t,e+1);let u=Ve();return this.qr.forEachInRange([s,o],(d=>{u=u.add(d.key)})),u}containsKey(e){const t=new Qt(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Qt{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return pe.comparator(e.key,t.key)||Pe(e.Hr,t.Hr)}static Ur(e,t){return Pe(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
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
 */class B4{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ft(Qt.Kr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new n4(u,t,s,o);this.mutationQueue.push(d);for(const m of o)this.Jr=this.Jr.add(new Qt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(d)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?ey:this.Yn-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Qt(t,0),o=new Qt(t,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([s,o],(d=>{const m=this.Zr(d.Hr);u.push(m)})),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ft(Pe);return t.forEach((o=>{const u=new Qt(o,0),d=new Qt(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,d],(m=>{s=s.add(m.Hr)}))})),W.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;pe.isDocumentKey(u)||(u=u.child(""));const d=new Qt(new pe(u),0);let m=new Ft(Pe);return this.Jr.forEachWhile((p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Hr)),!0)}),d),W.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ke(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return W.forEach(t.mutations,(o=>{const u=new Qt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new Qt(t,0),o=this.Jr.firstAfterOrEqual(s);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class q4{constructor(e){this.ti=e,this.docs=(function(){return new ft(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,d=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:d}),this.size+=d-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():cn.newInvalidDocument(t))}getEntries(e,t){let s=kr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():cn.newInvalidDocument(o))})),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=kr();const d=t.path,m=new pe(d.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||fk(dk(v),s)<=0||(o.has(v.key)||Zd(t,v))&&(u=u.insert(v.key,v.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ni(e,t){return W.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new H4(this)}getSize(e){return W.resolve(this.size)}}class H4 extends P4{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),W.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class F4{constructor(e){this.persistence=e,this.ri=new Oa((t=>iy(t)),ry),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.ii=0,this.si=new hy,this.targetCount=0,this.oi=Xo._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),W.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Xo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.lr(t),W.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((d,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(d),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),W.waitFor(u).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),W.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((d=>{u.push(o.markPotentiallyOrphaned(e,d))})),W.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this.si.containsKey(t))}}/**
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
 */class Yw{constructor(e,t){this._i={},this.overlays={},this.ai=new $d(0),this.ui=!1,this.ui=!0,this.ci=new z4,this.referenceDelegate=e(this),this.li=new F4(this),this.indexManager=new C4,this.remoteDocumentCache=(function(o){return new q4(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new R4(t),this.Pi=new U4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new j4,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new B4(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const o=new G4(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ii(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return W.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class G4 extends pk{constructor(e){super(),this.currentSequenceNumber=e}}class dy{constructor(e){this.persistence=e,this.Ri=new hy,this.Ai=null}static Vi(e){return new dy(e)}get di(){if(this.Ai)return this.Ai;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.di,(s=>{const o=pe.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Id{constructor(e,t){this.persistence=e,this.fi=new Oa((s=>_k(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=M4(this,t)}static Vi(e,t){return new Id(e,t)}Ti(){}Ii(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return W.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?W.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(d=>this.wr(e,d,t).next((m=>{m||(s++,u.removeEntry(d,Te.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),W.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=sd(e.data.value)),t}wr(e,t,s){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class fy{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=o}static Es(e,t){let s=Ve(),o=Ve();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new fy(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class K4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Y4{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return YR()?8:gk(jt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((d=>{u.result=d})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((d=>{u.result=d}))})).next((()=>{if(u.result)return;const d=new K4;return this.ys(e,t,d).next((m=>{if(u.result=m,this.As)return this.ws(e,t,d,m.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(No()<=Oe.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",xo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(No()<=Oe.DEBUG&&ae("QueryEngine","Query:",xo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(No()<=Oe.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",xo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(t))):W.resolve())}gs(e,t){if(TT(t))return W.resolve(null);let s=er(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=eg(t,null,"F"),s=er(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const d=Ve(...u);return this.fs.getDocuments(e,d).next((m=>this.indexManager.getMinOffset(e,s).next((p=>{const y=this.bs(t,m);return this.Ss(t,y,d,p.readTime)?this.gs(e,eg(t,null,"F")):this.Ds(e,y,t,p)}))))})))))}ps(e,t,s,o){return TT(t)||o.isEqual(Te.min())?W.resolve(null):this.fs.getDocuments(e,s).next((u=>{const d=this.bs(t,u);return this.Ss(t,d,s,o)?W.resolve(null):(No()<=Oe.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),xo(t)),this.Ds(e,d,t,hk(o,Qu)).next((m=>m)))}))}bs(e,t){let s=new Ft(ww(e));return t.forEach(((o,u)=>{Zd(e,u)&&(s=s.add(u))})),s}Ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return No()<=Oe.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",xo(t)),this.fs.getDocumentsMatchingQuery(e,t,Cs.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((d=>{u=u.insert(d.key,d)})),u)))}}/**
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
 */const my="LocalStore",Q4=3e8;class $4{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new ft(Pe),this.Fs=new Oa((u=>iy(u)),ry),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new L4(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function X4(i,e,t,s){return new $4(i,e,t,s)}async function Qw(i,e){const t=Ae(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const d=[],m=[];let p=Ve();for(const y of o){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of u){m.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(s,p).next((y=>({Ns:y,removedBatchIds:d,addedBatchIds:m})))}))}))}function W4(i,e){const t=Ae(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,p,y,v){const T=y.batch,S=T.keys();let z=W.resolve();return S.forEach((Y=>{z=z.next((()=>v.getEntry(p,Y))).next((ee=>{const Z=y.docVersions.get(Y);Ke(Z!==null,48541),ee.version.compareTo(Z)<0&&(T.applyToRemoteDocument(ee,y),ee.isValidDocument()&&(ee.setReadTime(y.commitVersion),v.addEntry(ee)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let p=Ve();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function $w(i){const e=Ae(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function J4(i,e){const t=Ae(i),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const d=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((v,T)=>{const S=o.get(T);if(!S)return;m.push(t.li.removeMatchingKeys(u,v.removedDocuments,T).next((()=>t.li.addMatchingKeys(u,v.addedDocuments,T))));let z=S.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?z=z.withResumeToken(an.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):v.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(v.resumeToken,s)),o=o.insert(T,z),(function(ee,Z,ce){return ee.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-ee.snapshotVersion.toMicroseconds()>=Q4?!0:ce.addedDocuments.size+ce.modifiedDocuments.size+ce.removedDocuments.size>0})(S,z,v)&&m.push(t.li.updateTargetData(u,z))}));let p=kr(),y=Ve();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,v))})),m.push(Z4(u,d,e.documentUpdates).next((v=>{p=v.Bs,y=v.Ls}))),!s.isEqual(Te.min())){const v=t.li.getLastRemoteSnapshotVersion(u).next((T=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(v)}return W.waitFor(m).next((()=>d.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,p,y))).next((()=>p))})).then((u=>(t.vs=o,u)))}function Z4(i,e,t){let s=Ve(),o=Ve();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let d=kr();return t.forEach(((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(m,p.readTime),d=d.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),d=d.insert(m,p)):ae(my,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)})),{Bs:d,Ls:o}}))}function eM(i,e){const t=Ae(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=ey),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function tM(i,e){const t=Ae(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,W.resolve(o)):t.li.allocateTargetId(s).next((d=>(o=new Es(e,d,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function sg(i,e,t){const s=Ae(i),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(d=>s.persistence.referenceDelegate.removeTarget(d,o)))}catch(d){if(!al(d))throw d;ae(my,`Failed to update sequence numbers for target ${e}: ${d}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function MT(i,e,t){const s=Ae(i);let o=Te.min(),u=Ve();return s.persistence.runTransaction("Execute query","readwrite",(d=>(function(p,y,v){const T=Ae(p),S=T.Fs.get(v);return S!==void 0?W.resolve(T.vs.get(S)):T.li.getTargetData(y,v)})(s,d,er(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(d,m.targetId).next((p=>{u=p}))})).next((()=>s.Cs.getDocumentsMatchingQuery(d,e,t?o:Te.min(),t?u:Ve()))).next((m=>(nM(s,zk(e),m),{documents:m,ks:u})))))}function nM(i,e,t){let s=i.Ms.get(e)||Te.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Ms.set(e,s)}class PT{constructor(){this.activeTargetIds=Kk()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iM{constructor(){this.vo=new PT,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new PT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rM{Mo(e){}shutdown(){}}/**
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
 */const VT="ConnectivityMonitor";class LT{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ae(VT,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ae(VT,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Zh=null;function ag(){return Zh===null?Zh=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zh++,"0x"+Zh.toString(16)}/**
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
 */const Op="RestConnection",sM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class aM{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===bd?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const d=ag(),m=this.Qo(e,t.toUriEncodedString());ae(Op,`Sending RPC '${e}' ${d}:`,m,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,o,u);const{host:y}=new URL(m),v=Ms(y);return this.zo(e,m,p,s,v).then((T=>(ae(Op,`Received RPC '${e}' ${d}: `,T),T)),(T=>{throw Ca(Op,`RPC '${e}' ${d} failed with error: `,T,"url: ",m,"request:",s),T}))}jo(e,t,s,o,u,d){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+rl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=sM[e];let o=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class oM{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const ln="WebChannelConnection",Tu=(i,e,t)=>{i.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class jo extends aM{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!jo.c_){const e=ew();Tu(e,ZA.STAT_EVENT,(t=>{t.stat===Yp.PROXY?ae(ln,"STAT_EVENT: detected buffering proxy"):t.stat===Yp.NOPROXY&&ae(ln,"STAT_EVENT: detected no buffering proxy")})),jo.c_=!0}}zo(e,t,s,o,u){const d=ag();return new Promise(((m,p)=>{const y=new WA;y.setWithCredentials(!0),y.listenOnce(JA.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case rd.NO_ERROR:const T=y.getResponseJson();ae(ln,`XHR for RPC '${e}' ${d} received:`,JSON.stringify(T)),m(T);break;case rd.TIMEOUT:ae(ln,`RPC '${e}' ${d} timed out`),p(new se(Q.DEADLINE_EXCEEDED,"Request time out"));break;case rd.HTTP_ERROR:const S=y.getStatus();if(ae(ln,`RPC '${e}' ${d} failed with status:`,S,"response text:",y.getResponseText()),S>0){let z=y.getResponseJson();Array.isArray(z)&&(z=z[0]);const Y=z==null?void 0:z.error;if(Y&&Y.status&&Y.message){const ee=(function(ce){const fe=ce.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(fe)>=0?fe:Q.UNKNOWN})(Y.status);p(new se(ee,Y.message))}else p(new se(Q.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new se(Q.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:d,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ae(ln,`RPC '${e}' ${d} completed.`)}}));const v=JSON.stringify(o);ae(ln,`RPC '${e}' ${d} sending request:`,o),y.send(t,"POST",v,s,15)}))}T_(e,t,s){const o=ag(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const y=u.join("");ae(ln,`Creating RPC '${e}' stream ${o}: ${y}`,m);const v=d.createWebChannel(y,m);this.I_(v);let T=!1,S=!1;const z=new oM({Ho:Y=>{S?ae(ln,`Not sending because RPC '${e}' stream ${o} is closed:`,Y):(T||(ae(ln,`Opening RPC '${e}' stream ${o} transport.`),v.open(),T=!0),ae(ln,`RPC '${e}' stream ${o} sending:`,Y),v.send(Y))},Jo:()=>v.close()});return Tu(v,Ru.EventType.OPEN,(()=>{S||(ae(ln,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),Tu(v,Ru.EventType.CLOSE,(()=>{S||(S=!0,ae(ln,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.E_(v))})),Tu(v,Ru.EventType.ERROR,(Y=>{S||(S=!0,Ca(ln,`RPC '${e}' stream ${o} transport errored. Name:`,Y.name,"Message:",Y.message),z.o_(new se(Q.UNAVAILABLE,"The operation could not be completed")))})),Tu(v,Ru.EventType.MESSAGE,(Y=>{var ee;if(!S){const Z=Y.data[0];Ke(!!Z,16349);const ce=Z,fe=(ce==null?void 0:ce.error)||((ee=ce[0])==null?void 0:ee.error);if(fe){ae(ln,`RPC '${e}' stream ${o} received error:`,fe);const ue=fe.status;let ye=(function(I){const R=Pt[I];if(R!==void 0)return Pw(R)})(ue),Ce=fe.message;ue==="NOT_FOUND"&&Ce.includes("database")&&Ce.includes("does not exist")&&Ce.includes(this.databaseId.database)&&Ca(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ye===void 0&&(ye=Q.INTERNAL,Ce="Unknown error status: "+ue+" with message "+fe.message),S=!0,z.o_(new se(ye,Ce)),v.close()}else ae(ln,`RPC '${e}' stream ${o} received:`,Z),z.__(Z)}})),jo.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return tw()}}/**
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
 */function lM(i){return new jo(i)}function kp(){return typeof document<"u"?document:null}/**
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
 */function rf(i){return new d4(i,!0)}/**
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
 */jo.c_=!1;class Xw{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const UT="PersistentStream";class Ww{constructor(e,t,s,o,u,d,m,p){this.Ci=e,this.b_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Xw(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Or(t.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new se(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(UT,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ae(UT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uM extends Ww{constructor(e,t,s,o,u,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,d),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=p4(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Te.min();const d=u.targetChange;return d.targetIds&&d.targetIds.length?Te.min():d.readTime?tr(d.readTime):Te.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=rg(this.serializer),t.addTarget=(function(u,d){let m;const p=d.target;if(m=Jp(p)?{documents:_4(u,p)}:{query:v4(u,p).ft},m.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){m.resumeToken=Uw(u,d.resumeToken);const y=tg(u,d.expectedCount);y!==null&&(m.expectedCount=y)}else if(d.snapshotVersion.compareTo(Te.min())>0){m.readTime=Rd(u,d.snapshotVersion.toTimestamp());const y=tg(u,d.expectedCount);y!==null&&(m.expectedCount=y)}return m})(this.serializer,e);const s=T4(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=rg(this.serializer),t.removeTarget=e,this.K_(t)}}class cM extends Ww{constructor(e,t,s,o,u,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,d),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=y4(e.writeResults,e.commitTime),s=tr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=rg(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>g4(this.serializer,s)))};this.K_(t)}}/**
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
 */class hM{}class dM extends hM{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new se(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Wo(e,ng(t,s),o,u,d))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(Q.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,m])=>this.connection.jo(e,ng(t,s),o,d,m,u))).catch((d=>{throw d.name==="FirebaseError"?(d.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new se(Q.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function fM(i,e,t,s){return new dM(i,e,t,s)}class mM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Or(t),this.aa=!1):ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Na="RemoteStore";class pM{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((d=>{s.enqueueAndForget((async()=>{ka(this)&&(ae(Na,"Restarting streams for network reachability change."),await(async function(p){const y=Ae(p);y.Ea.add(4),await fc(y),y.Va.set("Unknown"),y.Ea.delete(4),await sf(y)})(this))}))})),this.Va=new mM(s,o)}}async function sf(i){if(ka(i))for(const e of i.Ra)await e(!0)}async function fc(i){for(const e of i.Ra)await e(!1)}function Jw(i,e){const t=Ae(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),_y(t)?yy(t):ll(t).O_()&&gy(t,e))}function py(i,e){const t=Ae(i),s=ll(t);t.Ia.delete(e),s.O_()&&Zw(t,e),t.Ia.size===0&&(s.O_()?s.L_():ka(t)&&t.Va.set("Unknown"))}function gy(i,e){if(i.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ll(i).Z_(e)}function Zw(i,e){i.da.$e(e),ll(i).X_(e)}function yy(i){i.da=new l4({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),ll(i).start(),i.Va.ua()}function _y(i){return ka(i)&&!ll(i).x_()&&i.Ia.size>0}function ka(i){return Ae(i).Ea.size===0}function e1(i){i.da=void 0}async function gM(i){i.Va.set("Online")}async function yM(i){i.Ia.forEach(((e,t)=>{gy(i,e)}))}async function _M(i,e){e1(i),_y(i)?(i.Va.ha(e),yy(i)):i.Va.set("Unknown")}async function vM(i,e,t){if(i.Va.set("Online"),e instanceof Lw&&e.state===2&&e.cause)try{await(async function(o,u){const d=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,d),o.Ia.delete(m),o.da.removeTarget(m))})(i,e)}catch(s){ae(Na,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Cd(i,s)}else if(e instanceof ld?i.da.Xe(e):e instanceof Vw?i.da.st(e):i.da.tt(e),!t.isEqual(Te.min()))try{const s=await $w(i.localStore);t.compareTo(s)>=0&&await(function(u,d){const m=u.da.Tt(d);return m.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=u.Ia.get(y);v&&u.Ia.set(y,v.withResumeToken(p.resumeToken,d))}})),m.targetMismatches.forEach(((p,y)=>{const v=u.Ia.get(p);if(!v)return;u.Ia.set(p,v.withResumeToken(an.EMPTY_BYTE_STRING,v.snapshotVersion)),Zw(u,p);const T=new Es(v.target,p,y,v.sequenceNumber);gy(u,T)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ae(Na,"Failed to raise snapshot:",s),await Cd(i,s)}}async function Cd(i,e,t){if(!al(e))throw e;i.Ea.add(1),await fc(i),i.Va.set("Offline"),t||(t=()=>$w(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ae(Na,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await sf(i)}))}function t1(i,e){return e().catch((t=>Cd(i,t,e)))}async function af(i){const e=Ae(i),t=Os(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ey;for(;EM(e);)try{const o=await eM(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,TM(e,o)}catch(o){await Cd(e,o)}n1(e)&&i1(e)}function EM(i){return ka(i)&&i.Ta.length<10}function TM(i,e){i.Ta.push(e);const t=Os(i);t.O_()&&t.Y_&&t.ea(e.mutations)}function n1(i){return ka(i)&&!Os(i).x_()&&i.Ta.length>0}function i1(i){Os(i).start()}async function bM(i){Os(i).ra()}async function AM(i){const e=Os(i);for(const t of i.Ta)e.ea(t.mutations)}async function wM(i,e,t){const s=i.Ta.shift(),o=ly.from(s,e,t);await t1(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await af(i)}async function SM(i,e){e&&Os(i).Y_&&await(async function(s,o){if((function(d){return s4(d)&&d!==Q.ABORTED})(o.code)){const u=s.Ta.shift();Os(s).B_(),await t1(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await af(s)}})(i,e),n1(i)&&i1(i)}async function jT(i,e){const t=Ae(i);t.asyncQueue.verifyOperationInProgress(),ae(Na,"RemoteStore received new credentials");const s=ka(t);t.Ea.add(3),await fc(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await sf(t)}async function RM(i,e){const t=Ae(i);e?(t.Ea.delete(2),await sf(t)):e||(t.Ea.add(2),await fc(t),t.Va.set("Unknown"))}function ll(i){return i.ma||(i.ma=(function(t,s,o){const u=Ae(t);return u.sa(),new uM(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:gM.bind(null,i),Yo:yM.bind(null,i),t_:_M.bind(null,i),J_:vM.bind(null,i)}),i.Ra.push((async e=>{e?(i.ma.B_(),_y(i)?yy(i):i.Va.set("Unknown")):(await i.ma.stop(),e1(i))}))),i.ma}function Os(i){return i.fa||(i.fa=(function(t,s,o){const u=Ae(t);return u.sa(),new cM(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:bM.bind(null,i),t_:SM.bind(null,i),ta:AM.bind(null,i),na:wM.bind(null,i)}),i.Ra.push((async e=>{e?(i.fa.B_(),await af(i)):(await i.fa.stop(),i.Ta.length>0&&(ae(Na,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class vy{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const d=Date.now()+s,m=new vy(e,t,d,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ey(i,e){if(Or("AsyncQueue",`${e}: ${i}`),al(i))return new se(Q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class zo{static emptySet(e){return new zo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=Iu(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new zo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class zT{constructor(){this.ga=new ft(pe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Wo{constructor(e,t,s,o,u,d,m,p,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=d,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,u){const d=[];return t.forEach((m=>{d.push({type:0,doc:m})})),new Wo(e,t,zo.emptySet(t),d,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class IM{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class CM{constructor(){this.queries=BT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ae(t),u=o.queries;o.queries=BT(),u.forEach(((d,m)=>{for(const p of m.ba)p.onError(s)}))})(this,new se(Q.ABORTED,"Firestore shutting down"))}}function BT(){return new Oa((i=>Aw(i)),Jd)}async function r1(i,e){const t=Ae(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.Da()&&(s=2):(u=new IM,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(d){const m=Ey(d,`Initialization of query '${xo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ba.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Ty(t)}async function s1(i,e){const t=Ae(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const d=u.ba.indexOf(e);d>=0&&(u.ba.splice(d,1),u.ba.length===0?o=e.Da()?0:1:!u.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function NM(i,e){const t=Ae(i);let s=!1;for(const o of e){const u=o.query,d=t.queries.get(u);if(d){for(const m of d.ba)m.Fa(o)&&(s=!0);d.wa=o}}s&&Ty(t)}function xM(i,e,t){const s=Ae(i),o=s.queries.get(e);if(o)for(const u of o.ba)u.onError(t);s.queries.delete(e)}function Ty(i){i.Ca.forEach((e=>{e.next()}))}var og,qT;(qT=og||(og={})).Ma="default",qT.Cache="cache";class a1{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Wo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==og.Cache}}/**
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
 */class o1{constructor(e){this.key=e}}class l1{constructor(e){this.key=e}}class DM{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ve(),this.mutatedKeys=Ve(),this.eu=ww(e),this.tu=new zo(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new zT,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,d=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,T)=>{const S=o.get(v),z=Zd(this.query,T)?T:null,Y=!!S&&this.mutatedKeys.has(S.key),ee=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let Z=!1;S&&z?S.data.isEqual(z.data)?Y!==ee&&(s.track({type:3,doc:z}),Z=!0):this.su(S,z)||(s.track({type:2,doc:z}),Z=!0,(p&&this.eu(z,p)>0||y&&this.eu(z,y)<0)&&(m=!0)):!S&&z?(s.track({type:0,doc:z}),Z=!0):S&&!z&&(s.track({type:1,doc:S}),Z=!0,(p||y)&&(m=!0)),Z&&(z?(d=d.add(z),u=ee?u.add(v):u.delete(v)):(d=d.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const v=this.query.limitType==="F"?d.last():d.first();d=d.delete(v.key),u=u.delete(v.key),s.track({type:1,doc:v})}return{tu:d,iu:s,Ss:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const d=e.iu.ya();d.sort(((v,T)=>(function(z,Y){const ee=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Vt:Z})}};return ee(z)-ee(Y)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Xa;return this.Xa=p,d.length!==0||y?{snapshot:new Wo(this.query,e.tu,u,d,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new zT,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Ve(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new l1(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new o1(s))})),t}cu(e){this.Za=e.ks,this.Ya=Ve();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Wo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const by="SyncEngine";class OM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class kM{constructor(e){this.key=e,this.hu=!1}}class MM{constructor(e,t,s,o,u,d){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new Oa((m=>Aw(m)),Jd),this.Iu=new Map,this.Eu=new Set,this.Ru=new ft(pe.comparator),this.Au=new Map,this.Vu=new hy,this.du={},this.mu=new Map,this.fu=Xo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function PM(i,e,t=!0){const s=m1(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await u1(s,e,t,!0),o}async function VM(i,e){const t=m1(i);await u1(t,e,!0,!1)}async function u1(i,e,t,s){const o=await tM(i.localStore,er(e)),u=o.targetId,d=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await LM(i,e,u,d==="current",o.resumeToken)),i.isPrimaryClient&&t&&Jw(i.remoteStore,o),m}async function LM(i,e,t,s,o){i.pu=(T,S,z)=>(async function(ee,Z,ce,fe){let ue=Z.view.ru(ce);ue.Ss&&(ue=await MT(ee.localStore,Z.query,!1).then((({documents:I})=>Z.view.ru(I,ue))));const ye=fe&&fe.targetChanges.get(Z.targetId),Ce=fe&&fe.targetMismatches.get(Z.targetId)!=null,J=Z.view.applyChanges(ue,ee.isPrimaryClient,ye,Ce);return FT(ee,Z.targetId,J.au),J.snapshot})(i,T,S,z);const u=await MT(i.localStore,e,!0),d=new DM(e,u.ks),m=d.ru(u.documents),p=dc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),y=d.applyChanges(m,i.isPrimaryClient,p);FT(i,t,y.au);const v=new OM(e,t,d);return i.Tu.set(e,v),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),y.snapshot}async function UM(i,e,t){const s=Ae(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((d=>!Jd(d,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await sg(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&py(s.remoteStore,o.targetId),lg(s,o.targetId)})).catch(sl)):(lg(s,o.targetId),await sg(s.localStore,o.targetId,!0))}async function jM(i,e){const t=Ae(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),py(t.remoteStore,s.targetId))}async function zM(i,e,t){const s=YM(i);try{const o=await(function(d,m){const p=Ae(d),y=at.now(),v=m.reduce(((z,Y)=>z.add(Y.key)),Ve());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Y=kr(),ee=Ve();return p.xs.getEntries(z,v).next((Z=>{Y=Z,Y.forEach(((ce,fe)=>{fe.isValidDocument()||(ee=ee.add(ce))}))})).next((()=>p.localDocuments.getOverlayedDocuments(z,Y))).next((Z=>{T=Z;const ce=[];for(const fe of m){const ue=e4(fe,T.get(fe.key).overlayedDocument);ue!=null&&ce.push(new Us(fe.key,ue,pw(ue.value.mapValue),ii.exists(!0)))}return p.mutationQueue.addMutationBatch(z,y,ce,m)})).next((Z=>{S=Z;const ce=Z.applyToLocalDocumentSet(T,ee);return p.documentOverlayCache.saveOverlays(z,Z.batchId,ce)}))})).then((()=>({batchId:S.batchId,changes:Rw(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(d,m,p){let y=d.du[d.currentUser.toKey()];y||(y=new ft(Pe)),y=y.insert(m,p),d.du[d.currentUser.toKey()]=y})(s,o.batchId,t),await mc(s,o.changes),await af(s.remoteStore)}catch(o){const u=Ey(o,"Failed to persist write");t.reject(u)}}async function c1(i,e){const t=Ae(i);try{const s=await J4(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const d=t.Au.get(u);d&&(Ke(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?d.hu=!0:o.modifiedDocuments.size>0?Ke(d.hu,14607):o.removedDocuments.size>0&&(Ke(d.hu,42227),d.hu=!1))})),await mc(t,s,e)}catch(s){await sl(s)}}function HT(i,e,t){const s=Ae(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,d)=>{const m=d.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(d,m){const p=Ae(d);p.onlineState=m;let y=!1;p.queries.forEach(((v,T)=>{for(const S of T.ba)S.va(m)&&(y=!0)})),y&&Ty(p)})(s.eventManager,e),o.length&&s.Pu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function BM(i,e,t){const s=Ae(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let d=new ft(pe.comparator);d=d.insert(u,cn.newNoDocument(u,Te.min()));const m=Ve().add(u),p=new nf(Te.min(),new Map,new ft(Pe),d,m);await c1(s,p),s.Ru=s.Ru.remove(u),s.Au.delete(e),Ay(s)}else await sg(s.localStore,e,!1).then((()=>lg(s,e,t))).catch(sl)}async function qM(i,e){const t=Ae(i),s=e.batch.batchId;try{const o=await W4(t.localStore,e);d1(t,s,null),h1(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await mc(t,o)}catch(o){await sl(o)}}async function HM(i,e,t){const s=Ae(i);try{const o=await(function(d,m){const p=Ae(d);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let v;return p.mutationQueue.lookupMutationBatch(y,m).next((T=>(Ke(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(y,T)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v))).next((()=>p.localDocuments.getDocuments(y,v)))}))})(s.localStore,e);d1(s,e,t),h1(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await mc(s,o)}catch(o){await sl(o)}}function h1(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function d1(i,e,t){const s=Ae(i);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function lg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Vu.Gr(e).forEach((s=>{i.Vu.containsKey(s)||f1(i,s)}))}function f1(i,e){i.Eu.delete(e.path.canonicalString());const t=i.Ru.get(e);t!==null&&(py(i.remoteStore,t),i.Ru=i.Ru.remove(e),i.Au.delete(t),Ay(i))}function FT(i,e,t){for(const s of t)s instanceof o1?(i.Vu.addReference(s.key,e),FM(i,s)):s instanceof l1?(ae(by,"Document no longer in limbo: "+s.key),i.Vu.removeReference(s.key,e),i.Vu.containsKey(s.key)||f1(i,s.key)):_e(19791,{wu:s})}function FM(i,e){const t=e.key,s=t.path.canonicalString();i.Ru.get(t)||i.Eu.has(s)||(ae(by,"New document in limbo: "+t),i.Eu.add(s),Ay(i))}function Ay(i){for(;i.Eu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new pe(it.fromString(e)),s=i.fu.next();i.Au.set(s,new kM(t)),i.Ru=i.Ru.insert(t,s),Jw(i.remoteStore,new Es(er(sy(t.path)),s,"TargetPurposeLimboResolution",$d.ce))}}async function mc(i,e,t){const s=Ae(i),o=[],u=[],d=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,p)=>{d.push(s.pu(p,e,t).then((y=>{var v;if((y||t)&&s.isPrimaryClient){const T=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:v.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=fy.Es(p.targetId,y);u.push(T)}})))})),await Promise.all(d),s.Pu.J_(o),await(async function(p,y){const v=Ae(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>W.forEach(y,(S=>W.forEach(S.Ts,(z=>v.persistence.referenceDelegate.addReference(T,S.targetId,z))).next((()=>W.forEach(S.Is,(z=>v.persistence.referenceDelegate.removeReference(T,S.targetId,z)))))))))}catch(T){if(!al(T))throw T;ae(my,"Failed to update sequence numbers: "+T)}for(const T of y){const S=T.targetId;if(!T.fromCache){const z=v.vs.get(S),Y=z.snapshotVersion,ee=z.withLastLimboFreeSnapshotVersion(Y);v.vs=v.vs.insert(S,ee)}}})(s.localStore,u))}async function GM(i,e){const t=Ae(i);if(!t.currentUser.isEqual(e)){ae(by,"User change. New user:",e.toKey());const s=await Qw(t.localStore,e);t.currentUser=e,(function(u,d){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new se(Q.CANCELLED,d))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await mc(t,s.Ns)}}function KM(i,e){const t=Ae(i),s=t.Au.get(e);if(s&&s.hu)return Ve().add(s.key);{let o=Ve();const u=t.Iu.get(e);if(!u)return o;for(const d of u){const m=t.Tu.get(d);o=o.unionWith(m.view.nu)}return o}}function m1(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=c1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BM.bind(null,e),e.Pu.J_=NM.bind(null,e.eventManager),e.Pu.yu=xM.bind(null,e.eventManager),e}function YM(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HM.bind(null,e),e}class Nd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return X4(this.persistence,new Y4,e.initialUser,this.serializer)}Cu(e){return new Yw(dy.Vi,this.serializer)}Du(e){return new iM}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nd.provider={build:()=>new Nd};class QM extends Nd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ke(this.persistence.referenceDelegate instanceof Id,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new O4(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Rn.withCacheSize(this.cacheSizeBytes):Rn.DEFAULT;return new Yw((s=>Id.Vi(s,t)),this.serializer)}}class ug{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>HT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=GM.bind(null,this.syncEngine),await RM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new CM})()}createDatastore(e){const t=rf(e.databaseInfo.databaseId),s=lM(e.databaseInfo);return fM(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,d,m){return new pM(s,o,u,d,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>HT(this.syncEngine,t,0)),(function(){return LT.v()?new LT:new rM})())}createSyncEngine(e,t){return(function(o,u,d,m,p,y,v){const T=new MM(o,u,d,m,p,y);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ae(o);ae(Na,"RemoteStore shutting down."),u.Ea.add(5),await fc(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ug.provider={build:()=>new ug};/**
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
 *//**
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
 */class p1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const ks="FirestoreClient";class $M{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=un.UNAUTHENTICATED,this.clientId=Zg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async d=>{ae(ks,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(s,(d=>(ae(ks,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ey(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Mp(i,e){i.asyncQueue.verifyOperationInProgress(),ae(ks,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Qw(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function GT(i,e){i.asyncQueue.verifyOperationInProgress();const t=await XM(i);ae(ks,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>jT(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>jT(e.remoteStore,o))),i._onlineComponents=e}async function XM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ae(ks,"Using user provided OfflineComponentProvider");try{await Mp(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ca("Error using user provided cache. Falling back to memory cache: "+t),await Mp(i,new Nd)}}else ae(ks,"Using default OfflineComponentProvider"),await Mp(i,new QM(void 0));return i._offlineComponents}async function g1(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ae(ks,"Using user provided OnlineComponentProvider"),await GT(i,i._uninitializedComponentsProvider._online)):(ae(ks,"Using default OnlineComponentProvider"),await GT(i,new ug))),i._onlineComponents}function WM(i){return g1(i).then((e=>e.syncEngine))}async function y1(i){const e=await g1(i),t=e.eventManager;return t.onListen=PM.bind(null,e.syncEngine),t.onUnlisten=UM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=VM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jM.bind(null,e.syncEngine),t}function JM(i,e,t={}){const s=new Cr;return i.asyncQueue.enqueueAndForget((async()=>(function(u,d,m,p,y){const v=new p1({next:S=>{v.Nu(),d.enqueueAndForget((()=>s1(u,T)));const z=S.docs.has(m);!z&&S.fromCache?y.reject(new se(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&S.fromCache&&p&&p.source==="server"?y.reject(new se(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),T=new a1(sy(m.path),v,{includeMetadataChanges:!0,Ka:!0});return r1(u,T)})(await y1(i),i.asyncQueue,e,t,s))),s.promise}function ZM(i,e,t={}){const s=new Cr;return i.asyncQueue.enqueueAndForget((async()=>(function(u,d,m,p,y){const v=new p1({next:S=>{v.Nu(),d.enqueueAndForget((()=>s1(u,T))),S.fromCache&&p.source==="server"?y.reject(new se(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(S)},error:S=>y.reject(S)}),T=new a1(m,v,{includeMetadataChanges:!0,Ka:!0});return r1(u,T)})(await y1(i),i.asyncQueue,e,t,s))),s.promise}function eP(i,e){const t=new Cr;return i.asyncQueue.enqueueAndForget((async()=>zM(await WM(i),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function _1(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const tP="ComponentProvider",KT=new Map;function nP(i,e,t,s,o){return new Tk(i,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,_1(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const v1="firestore.googleapis.com",YT=!0;class QT{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=v1,this.ssl=YT}else this.host=e.host,this.ssl=e.ssl??YT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<x4)throw new se(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ck("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_1(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class of{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new QT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new QT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new ek;switch(s.type){case"firstParty":return new rk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=KT.get(t);s&&(ae(tP,"Removing Datastore"),KT.delete(t),s.terminate())})(this),Promise.resolve()}}function iP(i,e,t,s={}){var y;i=Ti(i,of);const o=Ms(e),u=i._getSettings(),d={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(gg(`https://${m}`),yg("Firestore",!0)),u.host!==v1&&u.host!==m&&Ca("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:s};if(!qo(p,d)&&(i._setSettings(p),s.mockUserToken)){let v,T;if(typeof s.mockUserToken=="string")v=s.mockUserToken,T=un.MOCK_USER;else{v=hb(s.mockUserToken,(y=i._app)==null?void 0:y.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new se(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new un(S)}i._authCredentials=new tk(new iw(v,T))}}/**
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
 */class Ma{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ma(this.firestore,e,this._query)}}class St{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}toJSON(){return{type:St._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(cc(t,St._jsonSchema))return new St(e,s||null,new pe(it.fromString(t.referencePath)))}}St._jsonSchemaVersion="firestore/documentReference/1.0",St._jsonSchema={type:Ut("string",St._jsonSchemaVersion),referencePath:Ut("string")};class Ss extends Ma{constructor(e,t,s){super(e,t,sy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new pe(e))}withConverter(e){return new Ss(this.firestore,e,this._path)}}function wy(i,e,...t){if(i=ve(i),rw("collection","path",e),i instanceof of){const s=it.fromString(e,...t);return oT(s),new Ss(i,null,s)}{if(!(i instanceof St||i instanceof Ss))throw new se(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(it.fromString(e,...t));return oT(s),new Ss(i.firestore,null,s)}}function ul(i,e,...t){if(i=ve(i),arguments.length===1&&(e=Zg.newId()),rw("doc","path",e),i instanceof of){const s=it.fromString(e,...t);return aT(s),new St(i,null,new pe(s))}{if(!(i instanceof St||i instanceof Ss))throw new se(Q.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(it.fromString(e,...t));return aT(s),new St(i.firestore,i instanceof Ss?i.converter:null,new pe(s))}}/**
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
 */const $T="AsyncQueue";class XT{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Xw(this,"async_queue_retry"),this._c=()=>{const s=kp();s&&ae($T,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=kp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=kp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Cr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!al(e))throw e;ae($T,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Or("INTERNAL UNHANDLED ERROR: ",WT(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=vy.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:WT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function WT(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Pa extends of{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new XT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new XT(e),this._firestoreClient=void 0,await e}}}function rP(i,e){const t=typeof i=="object"?i:Ab(),s=typeof i=="string"?i:bd,o=bg(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=jR("firestore");u&&iP(o,...u)}return o}function Sy(i){if(i._terminated)throw new se(Q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||sP(i),i._firestoreClient}function sP(i){var s,o,u,d;const e=i._freezeSettings(),t=nP(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,(o=i._app)==null?void 0:o.options.apiKey,e);i._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((d=e.localCache)!=null&&d._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new $M(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}})(i._componentsProvider))}/**
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
 */class ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ti(an.fromBase64String(e))}catch(t){throw new se(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ti(an.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ti._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cc(e,ti._jsonSchema))return ti.fromBase64String(e.bytes)}}ti._jsonSchemaVersion="firestore/bytes/1.0",ti._jsonSchema={type:Ut("string",ti._jsonSchemaVersion),bytes:Ut("string")};/**
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
 */class Ry{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class lf{constructor(e){this._methodName=e}}/**
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
 */class nr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nr._jsonSchemaVersion}}static fromJSON(e){if(cc(e,nr._jsonSchema))return new nr(e.latitude,e.longitude)}}nr._jsonSchemaVersion="firestore/geoPoint/1.0",nr._jsonSchema={type:Ut("string",nr._jsonSchemaVersion),latitude:Ut("number"),longitude:Ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class _i{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_i._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cc(e,_i._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new _i(e.vectorValues);throw new se(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_i._jsonSchemaVersion="firestore/vectorValue/1.0",_i._jsonSchema={type:Ut("string",_i._jsonSchemaVersion),vectorValues:Ut("object")};/**
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
 */const aP=/^__.*__$/;class oP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Us(e,this.data,this.fieldMask,t,this.fieldTransforms):new hc(e,this.data,t,this.fieldTransforms)}}class E1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Us(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function T1(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{dataSource:i})}}class Iy{constructor(e,t,s,o,u,d){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.validatePath(),this.fieldTransforms=u||[],this.fieldMask=d||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Iy({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return xd(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(T1(this.dataSource)&&aP.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class lP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||rf(e)}createContext(e,t,s,o=!1){return new Iy({dataSource:e,methodName:t,targetDoc:s,path:rn.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uf(i){const e=i._freezeSettings(),t=rf(i._databaseId);return new lP(i._databaseId,!!e.ignoreUndefinedProperties,t)}function b1(i,e,t,s,o,u={}){const d=i.createContext(u.merge||u.mergeFields?2:0,e,t,o);Ny("Data must be an object, but it was:",d,s);const m=A1(s,d);let p,y;if(u.merge)p=new jn(d.fieldMask),y=d.fieldTransforms;else if(u.mergeFields){const v=[];for(const T of u.mergeFields){const S=Jo(e,T,t);if(!d.contains(S))throw new se(Q.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);R1(v,S)||v.push(S)}p=new jn(v),y=d.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,y=d.fieldTransforms;return new oP(new In(m),p,y)}class cf extends lf{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cf}}class Cy extends lf{_toFieldTransform(e){return new Xk(e.path,new Zu)}isEqual(e){return e instanceof Cy}}function uP(i,e,t,s){const o=i.createContext(1,e,t);Ny("Data must be an object, but it was:",o,s);const u=[],d=In.empty();Ls(s,((p,y)=>{const v=S1(e,p,t);y=ve(y);const T=o.childContextForFieldPath(v);if(y instanceof cf)u.push(v);else{const S=pc(y,T);S!=null&&(u.push(v),d.set(v,S))}}));const m=new jn(u);return new E1(d,m,o.fieldTransforms)}function cP(i,e,t,s,o,u){const d=i.createContext(1,e,t),m=[Jo(e,s,t)],p=[o];if(u.length%2!=0)throw new se(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<u.length;S+=2)m.push(Jo(e,u[S])),p.push(u[S+1]);const y=[],v=In.empty();for(let S=m.length-1;S>=0;--S)if(!R1(y,m[S])){const z=m[S];let Y=p[S];Y=ve(Y);const ee=d.childContextForFieldPath(z);if(Y instanceof cf)y.push(z);else{const Z=pc(Y,ee);Z!=null&&(y.push(z),v.set(z,Z))}}const T=new jn(y);return new E1(v,T,d.fieldTransforms)}function hP(i,e,t,s=!1){return pc(t,i.createContext(s?4:3,e))}function pc(i,e){if(w1(i=ve(i)))return Ny("Unsupported field value:",e,i),A1(i,e);if(i instanceof lf)return(function(s,o){if(!T1(o.dataSource))throw o.createError(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,o){const u=[];let d=0;for(const m of s){let p=pc(m,o.childContextForArray(d));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),d++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=ve(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Yk(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=at.fromDate(s);return{timestampValue:Rd(o.serializer,u)}}if(s instanceof at){const u=new at(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Rd(o.serializer,u)}}if(s instanceof nr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ti)return{bytesValue:Uw(o.serializer,s._byteString)};if(s instanceof St){const u=o.databaseId,d=s.firestore._databaseId;if(!d.isEqual(u))throw o.createError(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:cy(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof _i)return(function(d,m){const p=d instanceof _i?d.toArray():d;return{mapValue:{fields:{[fw]:{stringValue:mw},[Ad]:{arrayValue:{values:p.map((v=>{if(typeof v!="number")throw m.createError("VectorValues must only contain numeric values.");return ay(m.serializer,v)}))}}}}}})(s,o);if(Gw(s))return s._toProto(o.serializer);throw o.createError(`Unsupported field value: ${Qd(s)}`)})(i,e)}function A1(i,e){const t={};return ow(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ls(i,((s,o)=>{const u=pc(o,e.childContextForField(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function w1(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof at||i instanceof nr||i instanceof ti||i instanceof St||i instanceof lf||i instanceof _i||Gw(i))}function Ny(i,e,t){if(!w1(t)||!sw(t)){const s=Qd(t);throw s==="an object"?e.createError(i+" a custom object"):e.createError(i+" "+s)}}function Jo(i,e,t){if((e=ve(e))instanceof Ry)return e._internalPath;if(typeof e=="string")return S1(i,e);throw xd("Field path arguments must be of type string or ",i,!1,void 0,t)}const dP=new RegExp("[~\\*/\\[\\]]");function S1(i,e,t){if(e.search(dP)>=0)throw xd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Ry(...e.split("."))._internalPath}catch{throw xd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function xd(i,e,t,s,o){const u=s&&!s.isEmpty(),d=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||d)&&(p+=" (found",u&&(p+=` in field ${s}`),d&&(p+=` in document ${o}`),p+=")"),new se(Q.INVALID_ARGUMENT,m+i+p)}function R1(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class fP{convertValue(e,t="none"){switch(Ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ls(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Ad].arrayValue)==null?void 0:o.values)==null?void 0:u.map((d=>wt(d.doubleValue)));return new _i(t)}convertGeoPoint(e){return new nr(wt(e.latitude),wt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Wd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp($u(e));default:return null}}convertTimestamp(e){const t=Ns(e);return new at(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=it.fromString(e);Ke(Fw(s),9688,{name:e});const o=new Xu(s.get(1),s.get(3)),u=new pe(s.popFirst(5));return o.isEqual(t)||Or(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class I1 extends fP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ti(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,t)}}function cg(){return new Cy("serverTimestamp")}const JT="@firebase/firestore",ZT="4.11.0";/**
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
 */class C1{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Jo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mP extends C1{data(){return super.data()}}/**
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
 */function pP(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new se(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xy{}class N1 extends xy{}function x1(i,e,...t){let s=[];e instanceof xy&&s.push(e),s=s.concat(t),(function(u){const d=u.filter((p=>p instanceof Oy)).length,m=u.filter((p=>p instanceof Dy)).length;if(d>1||d>0&&m>0)throw new se(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Dy extends N1{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Dy(e,t,s)}_apply(e){const t=this._parse(e);return O1(e._query,t),new Ma(e.firestore,e.converter,Zp(e._query,t))}_parse(e){const t=uf(e.firestore);return(function(u,d,m,p,y,v,T){let S;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new se(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){tb(T,v);const Y=[];for(const ee of T)Y.push(eb(p,u,ee));S={arrayValue:{values:Y}}}else S=eb(p,u,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||tb(T,v),S=hP(m,d,T,v==="in"||v==="not-in");return Lt.create(y,v,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Oy extends xy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Oy(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:bi.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let d=o;const m=u.getFlattenedFilters();for(const p of m)O1(d,p),d=Zp(d,p)})(e._query,t),new Ma(e.firestore,e.converter,Zp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ky extends N1{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ky(e,t)}_apply(e){const t=(function(o,u,d){if(o.startAt!==null)throw new se(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ju(u,d)})(e._query,this._field,this._direction);return new Ma(e.firestore,e.converter,jk(e._query,t))}}function D1(i,e="asc"){const t=e,s=Jo("orderBy",i);return ky._create(s,t)}function eb(i,e,t){if(typeof(t=ve(t))=="string"){if(t==="")throw new se(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bw(e)&&t.indexOf("/")!==-1)throw new se(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(it.fromString(t));if(!pe.isDocumentKey(s))throw new se(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return pT(i,new pe(s))}if(t instanceof St)return pT(i,t._key);throw new se(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qd(t)}.`)}function tb(i,e){if(!Array.isArray(i)||i.length===0)throw new se(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function O1(i,e){const t=(function(o,u){for(const d of o)for(const m of d.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function k1(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}class Nu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ba extends C1{constructor(e,t,s,o,u,d){super(e,t,s,o,d),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ud(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Jo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ba._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ba._jsonSchemaVersion="firestore/documentSnapshot/1.0",ba._jsonSchema={type:Ut("string",ba._jsonSchemaVersion),bundleSource:Ut("string","DocumentSnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class ud extends ba{data(e={}){return super.data(e)}}class Bo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Nu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ud(this._firestore,this._userDataWriter,s.key,s,new Nu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((m=>{const p=new ud(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Nu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new ud(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Nu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return m.type!==0&&(y=d.indexOf(m.doc.key),d=d.delete(m.doc.key)),m.type!==1&&(d=d.add(m.doc),v=d.indexOf(m.doc.key)),{type:gP(m.type),doc:p,oldIndex:y,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Bo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gP(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}/**
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
 */Bo._jsonSchemaVersion="firestore/querySnapshot/1.0",Bo._jsonSchema={type:Ut("string",Bo._jsonSchemaVersion),bundleSource:Ut("string","QuerySnapshot"),bundleName:Ut("string"),bundle:Ut("string")};/**
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
 */function yP(i){i=Ti(i,St);const e=Ti(i.firestore,Pa),t=Sy(e);return JM(t,i._key).then((s=>TP(e,i,s)))}function M1(i){i=Ti(i,Ma);const e=Ti(i.firestore,Pa),t=Sy(e),s=new I1(e);return pP(i._query),ZM(t,i._query).then((o=>new Bo(e,s,i,o)))}function _P(i,e,t){i=Ti(i,St);const s=Ti(i.firestore,Pa),o=k1(i.converter,e,t),u=uf(s);return hf(s,[b1(u,"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,ii.none())])}function P1(i,e,t,...s){i=Ti(i,St);const o=Ti(i.firestore,Pa),u=uf(o);let d;return d=typeof(e=ve(e))=="string"||e instanceof Ry?cP(u,"updateDoc",i._key,e,t,s):uP(u,"updateDoc",i._key,e),hf(o,[d.toMutation(i._key,ii.exists(!0))])}function vP(i){return hf(Ti(i.firestore,Pa),[new oy(i._key,ii.none())])}function EP(i,e){const t=Ti(i.firestore,Pa),s=ul(i),o=k1(i.converter,e),u=uf(i.firestore);return hf(t,[b1(u,"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,ii.exists(!1))]).then((()=>s))}function hf(i,e){const t=Sy(i);return eP(t,e)}function TP(i,e,t){const s=t.docs.get(e._key),o=new I1(i);return new ba(i,o,e._key,s,new Nu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){ZO(Pr),xr(new vi("firestore",((s,{instanceIdentifier:o,options:u})=>{const d=s.getProvider("app").getImmediate(),m=new Pa(new nk(s.getProvider("auth-internal")),new sk(d,s.getProvider("app-check-internal")),bk(d,o),d);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Bn(JT,ZT,e),Bn(JT,ZT,"esm2020")})();let bu,Bu,Mr;const bP=i=>{bs.apps.length?bu=bs.app():bu=bs.initializeApp(i),Bu=bu.auth(),Mr=rP(bu),bu.storage()};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=i=>{const e=wP(i);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=Ne.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:d,...m},p)=>Ne.createElement("svg",{ref:p,...SP,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:V1("lucide",o),...!u&&!RP(m)&&{"aria-hidden":"true"},...m},[...d.map(([y,v])=>Ne.createElement(y,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=(i,e)=>{const t=Ne.forwardRef(({className:s,...o},u)=>Ne.createElement(IP,{ref:u,iconNode:e,className:V1(`lucide-${AP(nb(i))}`,`lucide-${i}`,s),...o}));return t.displayName=nb(i),t};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],NP=Le("activity",CP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],DP=Le("archive",xP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],kP=Le("award",OP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ib=Le("book-open",MP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],VP=Le("book",PP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],UP=Le("calendar",LP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],zP=Le("chart-column",jP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],qP=Le("check",BP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],FP=Le("chevron-down",HP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],KP=Le("chevron-up",GP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],L1=Le("circle-alert",YP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],$P=Le("circle-check-big",QP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],WP=Le("circle-plus",XP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],ZP=Le("circle-x",JP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],U1=Le("clock",eV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],nV=Le("copy",tV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],rV=Le("file-text",iV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],aV=Le("globe",sV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],lV=Le("key",oV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],cV=Le("layout-dashboard",uV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],hg=Le("loader-circle",hV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],fV=Le("lock",dV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],pV=Le("log-out",mV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],yV=Le("menu",gV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],vV=Le("pen",_V);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],TV=Le("plus",EV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],j1=Le("save",bV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],wV=Le("search",AV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],RV=Le("settings",SV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],dg=Le("shield-check",IV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],NV=Le("tag",CV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],My=Le("trash-2",xV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],rb=Le("type",DV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],kV=Le("user",OV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],PV=Le("users",MV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],LV=Le("x",VV),UV=({children:i,currentView:e,onNavigate:t})=>{const[s,o]=Ne.useState(!1),u=()=>{Bu.signOut()},d=p=>{t(p),o(!1)},m=()=>A.jsxs("div",{className:"flex flex-col h-full bg-white text-gray-800",children:[A.jsxs("div",{className:"p-6 border-b border-gray-100 flex items-center justify-center gap-2",children:[A.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white",children:A.jsx(dg,{size:18})}),A.jsx("h1",{className:"text-xl font-bold text-primary tracking-tight",children:"Admin Portal"})]}),A.jsxs("nav",{className:"flex-1 p-4 space-y-2",children:[A.jsxs("button",{onClick:()=>d("dashboard"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${e==="dashboard"?"bg-primary text-white shadow-md":"text-gray-600 hover:bg-gray-50"}`,children:[A.jsx(cV,{size:20}),"ড্যাশবোর্ড (Dashboard)"]}),A.jsxs("button",{onClick:()=>d("create"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${e==="create"?"bg-primary text-white shadow-md":"text-gray-600 hover:bg-gray-50"}`,children:[A.jsx(WP,{size:20}),"নতুন কুইজ (New Quiz)"]}),A.jsxs("button",{onClick:()=>d("results"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${e==="results"?"bg-primary text-white shadow-md":"text-gray-600 hover:bg-gray-50"}`,children:[A.jsx(zP,{size:20}),"ফলাফল (Results)"]}),A.jsxs("button",{onClick:()=>d("settings"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${e==="settings"?"bg-primary text-white shadow-md":"text-gray-600 hover:bg-gray-50"}`,children:[A.jsx(RV,{size:20}),"সেটিংস (Settings)"]})]}),A.jsx("div",{className:"p-4 border-t border-gray-100",children:A.jsxs("button",{onClick:u,className:"w-full flex items-center gap-3 px-4 py-3 rounded-lg text-accent hover:bg-red-50 transition-colors font-medium",children:[A.jsx(pV,{size:20}),"লগ আউট (Log Out)"]})})]});return A.jsxs("div",{className:"min-h-screen bg-cream flex flex-col md:flex-row",children:[A.jsxs("div",{className:"md:hidden bg-white border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-30 shadow-sm",children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white",children:A.jsx(dg,{size:18})}),A.jsx("span",{className:"font-bold text-lg text-gray-800",children:"Admin Portal"})]}),A.jsx("button",{onClick:()=>o(!0),className:"p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",children:A.jsx(yV,{size:24})})]}),s&&A.jsxs("div",{className:"fixed inset-0 z-40 md:hidden",children:[A.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity",onClick:()=>o(!1)}),A.jsx("div",{className:"absolute top-0 right-0 w-64 h-full shadow-2xl transform transition-transform duration-300 ease-in-out bg-white",children:A.jsxs("div",{className:"relative h-full",children:[A.jsx("button",{onClick:()=>o(!1),className:"absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors z-50",children:A.jsx(LV,{size:20})}),A.jsx(m,{})]})})]}),A.jsx("aside",{className:"hidden md:block w-64 border-r border-gray-200 bg-white sticky top-0 h-screen z-10",children:A.jsx(m,{})}),A.jsx("main",{className:"flex-1 p-4 md:p-8 overflow-y-auto",children:A.jsx("div",{className:"max-w-5xl mx-auto",children:i})})]})},jV=({quizzes:i,onEdit:e,onDelete:t,onToggleStatus:s})=>{const o=i.length,u=i.filter(v=>v.isActive).length,d=o-u,[m,p]=Ne.useState(null),y=v=>{navigator.clipboard.writeText(v),p(v),setTimeout(()=>p(null),2e3)};return A.jsxs("div",{className:"space-y-8",children:[A.jsxs("div",{children:[A.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-6",children:"কুইজ তালিকা (Manage Quizzes)"}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[A.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4",children:[A.jsx("div",{className:"p-3 bg-blue-50 text-blue-600 rounded-lg",children:A.jsx(ib,{size:24})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"মোট কুইজ"}),A.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:o})]})]}),A.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4",children:[A.jsx("div",{className:"p-3 bg-green-50 text-primary rounded-lg",children:A.jsx(NP,{size:24})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"রানিং (Active)"}),A.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:u})]})]}),A.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4",children:[A.jsx("div",{className:"p-3 bg-orange-50 text-orange-600 rounded-lg",children:A.jsx(DP,{size:24})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"ড্রাফট (Draft)"}),A.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:d})]})]})]})]}),i.length===0?A.jsxs("div",{className:"text-center py-20 bg-white rounded-xl shadow-sm border border-dashed border-gray-300",children:[A.jsx("div",{className:"w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4",children:A.jsx(ib,{className:"text-gray-400",size:32})}),A.jsx("h3",{className:"text-xl font-medium text-gray-800 mb-2",children:"কোনো কুইজ নেই"}),A.jsx("p",{className:"text-gray-400",children:'নতুন কুইজ তৈরি করতে "New Quiz" ট্যাবে যান।'})]}):A.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map(v=>{var T;return A.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full",children:[A.jsx("div",{className:`h-1.5 w-full ${v.isActive?"bg-primary":"bg-gray-300"}`}),A.jsxs("div",{className:"p-6 flex-1",children:[A.jsxs("div",{className:"flex justify-between items-start mb-4",children:[A.jsxs("div",{className:"flex flex-col gap-1",children:[A.jsx("span",{className:`self-start px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${v.isActive?"bg-green-100 text-green-700":"bg-gray-100 text-gray-500"}`,children:v.isActive?"Live":"Draft"}),v.category&&A.jsx("span",{className:"self-start px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-200",children:v.category})]}),A.jsxs("div",{className:"flex gap-2",children:[A.jsx("button",{onClick:()=>e(v),className:"p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Edit",children:A.jsx(vV,{size:18})}),A.jsx("button",{onClick:()=>t(v.id),className:"p-2 text-gray-400 hover:text-accent hover:bg-red-50 rounded-lg transition-colors",title:"Delete",children:A.jsx(My,{size:18})})]})]}),A.jsx("h3",{className:"text-lg font-bold text-gray-800 mb-1 line-clamp-2 leading-tight",children:v.title}),A.jsxs("div",{className:"flex flex-col gap-1 mb-4 text-xs text-gray-500",children:[v.subject&&A.jsxs("div",{className:"flex items-center gap-1.5 font-medium text-gray-700",children:[A.jsx(VP,{size:12,className:"text-primary"}),v.subject]}),v.chapter&&A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx(NV,{size:12}),v.chapter]})]}),A.jsxs("div",{className:"flex items-center gap-4 text-xs font-medium text-gray-500 bg-gray-50 p-3 rounded-lg mt-auto",children:[A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx(U1,{size:14,className:"text-primary"}),A.jsxs("span",{children:[Math.round(v.durationSeconds/60)," মি."]})]}),A.jsx("div",{className:"h-4 w-px bg-gray-300"}),A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx("span",{className:"text-gray-700 font-bold",children:v.questions.length}),A.jsx("span",{children:"টি প্রশ্ন"})]}),A.jsx("div",{className:"h-4 w-px bg-gray-300"}),A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx("span",{className:"text-gray-700 font-bold",children:v.totalMarks}),A.jsx("span",{children:"মার্কস"})]})]}),A.jsx("div",{className:"mt-4 flex items-center justify-between",children:A.jsxs("div",{className:"text-[10px] text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-2",children:["ID: ",(T=v.id)==null?void 0:T.substring(0,8),"...",A.jsx("button",{onClick:()=>y(v.id),className:"hover:text-primary transition-colors",title:"Copy Full ID",children:m===v.id?A.jsx(qP,{size:12,className:"text-green-600"}):A.jsx(nV,{size:12})})]})})]}),A.jsx("div",{className:"px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center mt-auto",children:A.jsx("button",{onClick:()=>s(v.id,v.isActive),className:`w-full flex items-center justify-center gap-2 text-sm font-semibold py-2 rounded-lg transition-colors ${v.isActive?"text-accent bg-red-50 hover:bg-red-100 border border-red-100":"text-primary bg-green-50 hover:bg-green-100 border border-green-100"}`,children:v.isActive?A.jsxs(A.Fragment,{children:[A.jsx(ZP,{size:16})," ডিএক্টিভ করুন"]}):A.jsxs(A.Fragment,{children:[A.jsx($P,{size:16})," পাবলিশ করুন"]})})})]},v.id)})})]})},nc="quizzes",zV="attempts",z1="settings",BV=async()=>{const i=x1(wy(Mr,nc),D1("createdAt","desc"));return(await M1(i)).docs.map(t=>({id:t.id,...t.data()}))},qV=async i=>{const e={...i};if(e.updatedAt=cg(),i.id){const t=ul(Mr,nc,i.id),{id:s,...o}=e;await P1(t,o)}else e.createdAt=cg(),await EP(wy(Mr,nc),e)},HV=async i=>{await vP(ul(Mr,nc,i))},FV=async(i,e)=>{const t=ul(Mr,nc,i);await P1(t,{isActive:!e,updatedAt:cg()})},GV=async()=>{const i=x1(wy(Mr,zV),D1("timestamp","desc"));return(await M1(i)).docs.map(t=>({id:t.id,...t.data()}))},KV=async()=>{try{const i=ul(Mr,z1,"general"),e=await yP(i);if(e.exists())return e.data()}catch(i){console.warn("Could not fetch settings (likely permission or network issue). Using defaults.",i)}return{siteName:"Science Noob",tagline:"Learn Science Easily"}},YV=async i=>{const e=ul(Mr,z1,"general");await _P(e,i,{merge:!0})},QV=["SSC","HSC","Admission"],Gi={SSC:{"তথ্য ও যোগাযোগ প্রযুক্তি (ICT)":["তথ্য ও যোগাযোগ প্রযুক্তি এবং আমাদের বাংলাদেশ","কম্পিউটার রক্ষণাবেক্ষণ ও সাইবার নিরাপত্তা","ইন্টারনেট ও ওয়েব পরিচিতি","আমার লেখালেখি ও হিসাব","মাল্টিমিডিয়া ও গ্রাফিক্স","প্রোগ্রামিংয়ের মাধ্যমে সমস্যা সমাধান"],"পদার্থবিজ্ঞান (Physics)":["ভৌত রাশি ও পরিমাপ","গতি (Motion)","বল (Force)","কাজ, ক্ষমতা ও শক্তি","পদার্থের অবস্থা ও চাপ","বস্তুর উপর তাপের প্রভাব","তরঙ্গ ও শব্দ","আলোর প্রতিফলন","আলোর প্রতিসরণ","স্থির তড়িৎ","চল তড়িৎ","তড়িৎ ও চৌম্বক ক্রিয়া","আধুনিক পদার্থবিজ্ঞান ও ইলেকট্রনিক্স","জীবন বাঁচাতে পদার্থবিজ্ঞান"],"রসায়ন (Chemistry)":["রসায়নের ধারণা","পদার্থের অবস্থা","পদার্থের গঠন","পর্যায় সারণি","রাসায়নিক বন্ধন","মোল ও রাসায়নিক গণনা","রাসায়নিক বিক্রিয়া","রসায়ন ও শক্তি","এসিড-ক্ষার সমতা","খনিজ সম্পদ: ধাতু-অধাতু","খনিজ সম্পদ: জীবাশ্ম","আমাদের জীবনে রসায়ন"],"জীববিজ্ঞান (Biology)":["জীবন পাঠ","জীবকোষ ও টিস্যু","কোষ বিভাজন","জীবনীশক্তি","খাদ্য, পুষ্টি ও পরিপাক","জীবে পরিবহণ","গ্যাসীয় বিনিময়","রেচন প্রক্রিয়া","দৃঢ়তা প্রদান ও চলন","সমন্বয়","জীবের প্রজনন","জীবের বংশগতি ও বিবর্তন","জীবের পরিবেশ","জীবপ্রযুক্তি"],"উচ্চতর গণিত (Higher Math)":["সেট ও ফাংশন","বীজগাণিতিক রাশি","জ্যামিতি","জ্যামিতিক অংকন","সমীকরণ","অসমতা","অসীম ধারা","ত্রিকোণমিতি","সূচক ও লগারিদমীয় ফাংশন","দ্বিপদী বিস্তৃতি","স্থানাঙ্ক জ্যামিতি","সমতলীয় ভেক্টর","ঘন জ্যামিতি","সম্ভাবনা"]},HSC:{"তথ্য ও যোগাযোগ প্রযুক্তি (ICT)":["তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত","কমিউনিকেশন সিস্টেম ও নেটওয়ার্কিং","সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস","ওয়েব ডিজাইন পরিচিতি এবং এইচটিএমএল","প্রোগ্রামিং ভাষা","ডেটাবেজ ম্যানেজমেন্ট সিস্টেম"],"পদার্থবিজ্ঞান ১ম পত্র":["ভৌত জগৎ ও পরিমাপ","ভেক্টর","গতিবিদ্যা","নিউটনীয় বলবিদ্যা","কাজ, শক্তি ও ক্ষমতা","মহাকর্ষ ও অভিকর্ষ","পদার্থের গাঠনিক ধর্ম","পর্যায়বৃত্ত গতি","আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব"],"পদার্থবিজ্ঞান ২য় পত্র":["তাপগতিবিদ্যা","স্থির তড়িৎ","চল তড়িৎ","তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব","তাড়িতচৌম্বক আবেশ ও দিক পরিবর্তী প্রবাহ","জ্যামিতিক আলোকবিজ্ঞান","ভৌত আলোকবিজ্ঞান","আধুনিক পদার্থবিজ্ঞানের সূচনা","পরমাণুর মডেল এবং নিউক্লিয়ার পদার্থবিজ্ঞান","সেমিকন্ডাক্টর ও ইলেকট্রনিক্স"],"রসায়ন ১ম পত্র":["ল্যাবরেটরির নিরাপদ ব্যবহার","গুণগত রসায়ন","মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন","রাসায়নিক পরিবর্তন","কর্মমুখী রসায়ন"],"রসায়ন ২য় পত্র":["পরিবেশ রসায়ন","জৈব রসায়ন","পরিমাণগত রসায়ন","তড়িৎ রসায়ন","অর্থনৈতিক রসায়ন"],"জীববিজ্ঞান ১ম পত্র (Botany)":["কোষ ও এর গঠন","কোষ বিভাজন","কোষ রসায়ন","অণুজীব","শৈবাল ও ছত্রাক","ব্রায়োফাইটা ও টেরিডোফাইটা","নগ্নবীজী ও আবৃতবীজী উদ্ভিদ","টিস্যু ও টিস্যুতন্ত্র","উদ্ভিদ শরীরতত্ত্ব","উদ্ভিদ প্রজনন","জীবপ্রযুক্তি","জীবের পরিবেশ, বিস্তার ও সংরক্ষণ"],"জীববিজ্ঞান ২য় পত্র (Zoology)":["প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস","প্রাণীর পরিচিতি","মানব শরীরতত্ত্ব: পরিপাক ও শোষণ","মানব শরীরতত্ত্ব: রক্ত ও সঞ্চালন","মানব শরীরতত্ত্ব: শ্বাসক্রিয়া ও শ্বসন","মানব শরীরতত্ত্ব: বর্জ্য ও নিষ্কাশন","মানব শরীরতত্ত্ব: চলন ও অঙ্গচালনা","মানব শরীরতত্ত্ব: সমন্বয় ও নিয়ন্ত্রণ","মানব জীবনের ধারাবাহিকতা","মানবদেহের প্রতিরক্ষা","জিনতত্ত্ব ও বিবর্তন","প্রাণীর আচরণ"]}},sb=()=>({id:Date.now().toString(),text:"",options:["","","",""],correctAnswerIndex:0,explanation:""}),$V=({initialQuiz:i,onSaveComplete:e,onCancel:t})=>{const[s,o]=Ne.useState(!1),[u,d]=Ne.useState(10),[m,p]=Ne.useState([]),[y,v]=Ne.useState([]),[T,S]=Ne.useState({title:"",description:"",category:"SSC",subject:"",chapter:"",durationSeconds:600,totalMarks:100,isActive:!0,questions:[sb()],createdAt:null}),[z,Y]=Ne.useState(null);Ne.useEffect(()=>{i?(S(i),d(Math.floor(i.durationSeconds/60)),i.questions.length>0&&Y(i.questions[0].id),i.category&&Gi[i.category]&&(p(Object.keys(Gi[i.category])),i.subject&&Gi[i.category][i.subject]&&v(Gi[i.category][i.subject]))):(Y(T.questions[0].id),p(Object.keys(Gi.SSC)))},[i]);const ee=(J,I)=>{S(R=>{const C={...R,[J]:I};if(J==="category"){const D=Gi[I]?Object.keys(Gi[I]):[];p(D),C.subject="",C.chapter="",v([])}if(J==="subject"){const D=Gi[C.category]&&Gi[C.category][I]?Gi[C.category][I]:[];v(D),C.chapter=""}return C})},Z=J=>{d(J),ee("durationSeconds",J*60)},ce=(J,I,R)=>{S(C=>({...C,questions:C.questions.map(D=>D.id===J?{...D,[I]:R}:D)}))},fe=(J,I,R)=>{S(C=>({...C,questions:C.questions.map(D=>{if(D.id!==J)return D;const O=[...D.options];return O[I]=R,{...D,options:O}})}))},ue=()=>{const J=sb();S(I=>({...I,questions:[...I.questions,J]})),Y(J.id)},ye=J=>{T.questions.length!==1&&S(I=>({...I,questions:I.questions.filter(R=>R.id!==J)}))},Ce=async J=>{if(J.preventDefault(),!T.category||!T.subject||!T.chapter){alert("অনুগ্রহ করে ক্যাটাগরি, বিষয় এবং অধ্যায় নির্বাচন করুন।");return}o(!0);try{await qV(T),e()}catch(I){console.error("Error saving quiz",I),alert("Error saving quiz. Check console/permissions.")}finally{o(!1)}};return A.jsxs("form",{onSubmit:Ce,className:"max-w-4xl mx-auto pb-12",children:[A.jsxs("div",{className:"flex justify-between items-center mb-6",children:[A.jsxs("div",{children:[A.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:i?"কুইজ এডিট করুন":"নতুন কুইজ তৈরি করুন"}),A.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"শিক্ষার্থীদের জন্য একটি নতুন কুইজ সেটআপ করুন"})]}),A.jsxs("div",{className:"flex gap-3",children:[A.jsx("button",{type:"button",onClick:t,className:"px-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-medium transition-colors",children:"বাতিল"}),A.jsxs("button",{type:"submit",disabled:s,className:`px-6 py-2 text-white rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all disabled:opacity-50 font-medium ${T.isActive?"bg-primary hover:bg-green-700":"bg-gray-600 hover:bg-gray-700"}`,children:[A.jsx(j1,{size:18}),s?"সংরক্ষণ হচ্ছে...":T.isActive?"পাবলিশ করুন (Publish)":"ড্রাফট হিসেবে সেভ করুন"]})]})]}),A.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8 space-y-6",children:[A.jsxs("div",{className:"flex justify-between items-center border-b pb-4 mb-2",children:[A.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"কুইজ তথ্য (Quiz Meta)"}),A.jsxs("div",{className:"flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-200",children:[A.jsx("span",{className:`text-sm font-bold ${T.isActive?"text-primary":"text-gray-500"}`,children:T.isActive?"Live":"Draft"}),A.jsx("button",{type:"button",onClick:()=>ee("isActive",!T.isActive),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${T.isActive?"bg-primary":"bg-gray-300"}`,children:A.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${T.isActive?"translate-x-6":"translate-x-1"}`})})]})]}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 bg-blue-50/50 p-6 rounded-xl border border-blue-100",children:[A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"ক্যাটাগরি (Category)"}),A.jsx("select",{value:T.category,onChange:J=>ee("category",J.target.value),className:"w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary outline-none",children:QV.map(J=>A.jsx("option",{value:J,children:J},J))})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"বিষয় (Subject)"}),A.jsxs("select",{value:T.subject,onChange:J=>ee("subject",J.target.value),disabled:!m.length,className:"w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary outline-none disabled:bg-gray-100 disabled:text-gray-400",children:[A.jsx("option",{value:"",children:"বিষয় নির্বাচন করুন"}),m.map(J=>A.jsx("option",{value:J,children:J},J))]})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"অধ্যায় (Chapter)"}),A.jsxs("select",{value:T.chapter,onChange:J=>ee("chapter",J.target.value),disabled:!y.length,className:"w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary outline-none disabled:bg-gray-100 disabled:text-gray-400",children:[A.jsx("option",{value:"",children:"অধ্যায় নির্বাচন করুন"}),y.map(J=>A.jsx("option",{value:J,children:J},J))]})]})]}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[A.jsxs("div",{className:"col-span-1 md:col-span-2",children:[A.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"কুইজ শিরোনাম (Title)"}),A.jsx("input",{type:"text",required:!0,value:T.title,onChange:J=>ee("title",J.target.value),placeholder:"e.g. নিউটনের গতিসূত্র কুইজ ১",className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"})]}),A.jsxs("div",{className:"col-span-1 md:col-span-2",children:[A.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"বিবরণ (Description)"}),A.jsx("textarea",{rows:2,value:T.description,onChange:J=>ee("description",J.target.value),className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm",placeholder:"কুইজ সম্পর্কে বিস্তারিত লিখুন..."})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"সময় (মিনিট)"}),A.jsxs("div",{className:"relative",children:[A.jsx("input",{type:"number",min:"1",required:!0,value:u,onChange:J=>Z(parseInt(J.target.value)||0),className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"}),A.jsx("span",{className:"absolute right-4 top-3.5 text-gray-400 text-sm",children:"মিনিট"})]}),A.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["সেভ হবে: ",A.jsx("span",{className:"font-bold",children:T.durationSeconds})," সেকেন্ড"]})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"মোট নম্বর (Total Marks)"}),A.jsxs("div",{className:"relative",children:[A.jsx("input",{type:"number",min:"1",required:!0,value:T.totalMarks,onChange:J=>ee("totalMarks",parseInt(J.target.value)),className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"}),A.jsx("span",{className:"absolute right-4 top-3.5 text-gray-400 text-sm",children:"মার্কস"})]})]})]})]}),A.jsxs("div",{className:"space-y-6",children:[A.jsxs("div",{className:"flex justify-between items-center px-2",children:[A.jsxs("h3",{className:"text-xl font-bold text-gray-800",children:["প্রশ্নসমূহ (",T.questions.length,")"]}),A.jsxs("button",{type:"button",onClick:ue,className:"bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 text-sm transition-colors",children:[A.jsx(TV,{size:18}),"নতুন প্রশ্ন যোগ করুন"]})]}),T.questions.map((J,I)=>{const R=z===J.id;return A.jsxs("div",{className:`bg-white rounded-xl border transition-all duration-300 ${R?"border-primary ring-1 ring-primary shadow-lg":"border-gray-200 shadow-sm hover:border-gray-300"}`,children:[A.jsxs("div",{className:`p-5 flex justify-between items-center cursor-pointer rounded-t-xl transition-colors ${R?"bg-primary/5":"hover:bg-gray-50"}`,onClick:()=>Y(R?null:J.id),children:[A.jsxs("div",{className:"flex items-center gap-3 overflow-hidden",children:[A.jsx("span",{className:`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${R?"bg-primary text-white":"bg-gray-100 text-gray-500"}`,children:I+1}),A.jsx("h4",{className:`font-medium truncate pr-4 text-lg ${J.text?"text-gray-800":"text-gray-400 italic"}`,children:J.text||"প্রশ্ন লিখুন..."})]}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("button",{type:"button",onClick:C=>{C.stopPropagation(),ye(J.id)},className:"text-gray-400 hover:text-accent hover:bg-red-50 p-2 rounded-lg transition-colors",title:"Delete Question",children:A.jsx(My,{size:18})}),A.jsx("div",{className:"text-gray-400 p-1",children:R?A.jsx(KP,{size:20}):A.jsx(FP,{size:20})})]})]}),R&&A.jsxs("div",{className:"p-6 border-t border-primary/10 animate-in fade-in slide-in-from-top-2 duration-200",children:[A.jsxs("div",{className:"mb-6",children:[A.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"প্রশ্ন (Question)"}),A.jsx("input",{type:"text",required:!0,value:J.text,onChange:C=>ce(J.id,"text",C.target.value),placeholder:"e.g. মহাকর্ষ ধ্রুবক G এর মান কত?",className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm"})]}),A.jsxs("div",{className:"space-y-4 mb-8",children:[A.jsxs("div",{className:"flex justify-between items-center mb-2",children:[A.jsx("label",{className:"block text-sm font-bold text-gray-700",children:"অপশনসমূহ (Options)"}),A.jsx("span",{className:"text-xs text-primary bg-primary/10 px-2 py-1 rounded",children:"সঠিক উত্তরটি সিলেক্ট করুন"})]}),J.options.map((C,D)=>A.jsxs("div",{className:`flex items-center gap-3 p-2 rounded-lg border transition-colors ${J.correctAnswerIndex===D?"bg-green-50 border-green-200":"border-transparent hover:bg-gray-50"}`,children:[A.jsxs("div",{className:"relative flex items-center justify-center",children:[A.jsx("input",{type:"radio",name:`correct-${J.id}`,checked:J.correctAnswerIndex===D,onChange:()=>ce(J.id,"correctAnswerIndex",D),className:"peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-primary checked:bg-primary cursor-pointer transition-all"}),A.jsx("div",{className:"absolute w-2.5 h-2.5 bg-white rounded-full pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"})]}),A.jsx("input",{type:"text",required:!0,value:C,onChange:O=>fe(J.id,D,O.target.value),placeholder:`অপশন ${D+1}`,className:`flex-1 px-4 py-2.5 rounded-lg border bg-white text-gray-900 ${J.correctAnswerIndex===D?"border-green-300 focus:ring-green-500":"border-gray-300 focus:ring-primary"} focus:ring-2 focus:border-transparent outline-none transition-all`})]},D))]}),A.jsxs("div",{className:"bg-blue-50/50 p-4 rounded-xl border border-blue-100",children:[A.jsxs("label",{className:"flex items-center gap-2 text-sm font-bold text-blue-800 mb-2",children:[A.jsx(L1,{size:16}),"ব্যাখ্যা (Explanation - Optional)"]}),A.jsx("textarea",{rows:2,value:J.explanation||"",onChange:C=>ce(J.id,"explanation",C.target.value),placeholder:"শিক্ষার্থীদের জন্য সঠিক উত্তরের ব্যাখ্যা দিন...",className:"w-full px-4 py-3 rounded-lg border border-blue-200 bg-white text-gray-900 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none shadow-sm"})]})]})]},J.id)})]})]})},XV=({results:i})=>{const[e,t]=Ne.useState("submissions"),[s,o]=Ne.useState(""),u=Ne.useMemo(()=>{const v={};return i.forEach(T=>{v[T.userId]||(v[T.userId]={userId:T.userId,userName:T.userName||"Unknown",userEmail:T.userEmail||"",totalQuizzes:0,totalScore:0,totalQuestions:0,totalTimeSeconds:0,lastActive:T.timestamp}),v[T.userId].totalQuizzes+=1,v[T.userId].totalScore+=T.score,v[T.userId].totalQuestions+=T.totalQuestions,v[T.userId].totalTimeSeconds+=T.timeTakenSeconds,T.timestamp>v[T.userId].lastActive&&(v[T.userId].lastActive=T.timestamp)}),Object.values(v)},[i]),d=i.filter(v=>{var T,S;return((T=v.userName)==null?void 0:T.toLowerCase().includes(s.toLowerCase()))||""||((S=v.quizTitle)==null?void 0:S.toLowerCase().includes(s.toLowerCase()))||""}),m=u.filter(v=>v.userName.toLowerCase().includes(s.toLowerCase())||""||v.userEmail.toLowerCase().includes(s.toLowerCase())||""),p=v=>{const T=Math.floor(v/60),S=v%60;return`${T}m ${S}s`},y=v=>new Date(v).toLocaleDateString("bn-BD",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return A.jsxs("div",{className:"space-y-6",children:[A.jsxs("header",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8",children:[A.jsxs("div",{children:[A.jsx("h2",{className:"text-3xl font-bold text-gray-800",children:"ফলাফল ও পরিসংখ্যান"}),A.jsx("p",{className:"text-gray-500 mt-2",children:"শিক্ষার্থীদের পারফর্মেন্স বিশ্লেষণ করুন।"})]}),A.jsxs("div",{className:"bg-white p-1 rounded-lg border border-gray-200 inline-flex shadow-sm",children:[A.jsxs("button",{onClick:()=>t("submissions"),className:`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${e==="submissions"?"bg-primary text-white shadow-sm":"text-gray-600 hover:bg-gray-50"}`,children:[A.jsx(rV,{size:16}),"সব ফলাফল"]}),A.jsxs("button",{onClick:()=>t("students"),className:`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${e==="students"?"bg-primary text-white shadow-sm":"text-gray-600 hover:bg-gray-50"}`,children:[A.jsx(PV,{size:16}),"শিক্ষার্থী রিপোর্ট"]})]})]}),A.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden min-h-[500px]",children:[A.jsx("div",{className:"p-4 border-b border-gray-100 flex gap-4 bg-gray-50/50",children:A.jsxs("div",{className:"relative flex-1 max-w-md",children:[A.jsx(wV,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:18}),A.jsx("input",{type:"text",value:s,onChange:v=>o(v.target.value),placeholder:e==="submissions"?"নাম বা কুইজ দিয়ে খুঁজুন...":"শিক্ষার্থীর নাম দিয়ে খুঁজুন...",className:"w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm transition-all"})]})}),A.jsx("div",{className:"overflow-x-auto",children:e==="submissions"?A.jsxs("table",{className:"w-full text-left text-sm text-gray-600",children:[A.jsx("thead",{className:"bg-gray-50 text-xs uppercase font-bold text-gray-500 border-b border-gray-100",children:A.jsxs("tr",{children:[A.jsx("th",{className:"px-6 py-4",children:"শিক্ষার্থী (Student)"}),A.jsx("th",{className:"px-6 py-4",children:"কুইজ (Quiz)"}),A.jsx("th",{className:"px-6 py-4 text-center",children:"স্কোর (Score)"}),A.jsx("th",{className:"px-6 py-4 text-center",children:"সময় (Time)"}),A.jsx("th",{className:"px-6 py-4 text-right",children:"তারিখ (Date)"})]})}),A.jsx("tbody",{className:"divide-y divide-gray-100",children:d.length===0?A.jsx("tr",{children:A.jsx("td",{colSpan:5,className:"text-center py-12 text-gray-400",children:"কোন ফলাফল পাওয়া যায়নি"})}):d.map(v=>{const T=Math.round(v.score/v.totalQuestions*100)||0;return A.jsxs("tr",{className:"hover:bg-gray-50 transition-colors group",children:[A.jsxs("td",{className:"px-6 py-4 font-medium text-gray-800",children:[v.userName||"Anonymous",A.jsx("div",{className:"text-xs text-gray-400 font-normal group-hover:text-primary transition-colors",children:v.userEmail||"No Email"})]}),A.jsx("td",{className:"px-6 py-4 text-gray-700 font-medium",children:v.quizTitle}),A.jsx("td",{className:"px-6 py-4 text-center",children:A.jsxs("div",{className:"flex flex-col items-center",children:[A.jsxs("span",{className:`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${T>=80?"bg-green-100 text-green-700":T>=50?"bg-yellow-100 text-yellow-700":"bg-red-100 text-red-700"}`,children:[T,"%"]}),A.jsxs("span",{className:"text-[10px] text-gray-400 mt-1",children:[v.score," / ",v.totalQuestions]})]})}),A.jsx("td",{className:"px-6 py-4 text-center",children:A.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-gray-600",children:[A.jsx(U1,{size:14}),A.jsx("span",{children:p(v.timeTakenSeconds)})]})}),A.jsx("td",{className:"px-6 py-4 text-right text-gray-500 text-xs",children:y(v.timestamp)})]},v.id)})})]}):A.jsxs("table",{className:"w-full text-left text-sm text-gray-600",children:[A.jsx("thead",{className:"bg-gray-50 text-xs uppercase font-bold text-gray-500 border-b border-gray-100",children:A.jsxs("tr",{children:[A.jsx("th",{className:"px-6 py-4",children:"শিক্ষার্থী (Student)"}),A.jsx("th",{className:"px-6 py-4 text-center",children:"মোট কুইজ"}),A.jsx("th",{className:"px-6 py-4 text-center",children:"গড় স্কোর (Avg)"}),A.jsx("th",{className:"px-6 py-4 text-center",children:"সর্বশেষ অ্যাক্টিভ"})]})}),A.jsx("tbody",{className:"divide-y divide-gray-100",children:m.length===0?A.jsx("tr",{children:A.jsx("td",{colSpan:4,className:"text-center py-12 text-gray-400",children:"কোন শিক্ষার্থী পাওয়া যায়নি"})}):m.map(v=>{const T=v.totalQuizzes>0?Math.round(v.totalScore/v.totalQuestions*100):0;return A.jsxs("tr",{className:"hover:bg-gray-50 transition-colors",children:[A.jsx("td",{className:"px-6 py-4",children:A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold",children:v.userName.charAt(0).toUpperCase()}),A.jsxs("div",{children:[A.jsx("div",{className:"font-bold text-gray-800",children:v.userName}),A.jsx("div",{className:"text-xs text-gray-400",children:v.userEmail})]})]})}),A.jsx("td",{className:"px-6 py-4 text-center",children:A.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold",children:[A.jsx(kP,{size:14}),v.totalQuizzes," টি"]})}),A.jsx("td",{className:"px-6 py-4 text-center",children:A.jsx("div",{className:"flex flex-col items-center",children:A.jsxs("span",{className:`text-lg font-bold ${T>=80?"text-green-600":T>=50?"text-yellow-600":"text-red-500"}`,children:[T,"%"]})})}),A.jsx("td",{className:"px-6 py-4 text-center text-gray-500",children:A.jsxs("div",{className:"flex items-center justify-center gap-2 text-xs",children:[A.jsx(UP,{size:14}),y(v.lastActive)]})})]},v.userId)})})]})})]})]})},WV=()=>{const[i,e]=Ne.useState(!0),[t,s]=Ne.useState(!1),[o,u]=Ne.useState(""),[d,m]=Ne.useState(""),[p,y]=Ne.useState(null);Ne.useEffect(()=>{v()},[]);const v=async()=>{try{const S=await KV();u(S.siteName),m(S.tagline)}catch(S){console.error("Error fetching settings:",S),y({type:"error",text:"সেটিংস লোড করতে সমস্যা হয়েছে।"})}finally{e(!1)}},T=async S=>{S.preventDefault(),s(!0),y(null);try{await YV({siteName:o,tagline:d}),y({type:"success",text:"সেটিংস সফলভাবে আপডেট হয়েছে!"}),setTimeout(()=>y(null),3e3)}catch(z){console.error("Error updating settings:",z),y({type:"error",text:"সেটিংস সেভ করতে সমস্যা হয়েছে।"})}finally{s(!1)}};return i?A.jsx("div",{className:"flex items-center justify-center h-64",children:A.jsx(hg,{className:"animate-spin text-primary",size:32})}):A.jsxs("div",{className:"max-w-2xl mx-auto",children:[A.jsxs("div",{className:"mb-8",children:[A.jsx("h2",{className:"text-3xl font-bold text-gray-800",children:"ওয়েবসাইট সেটিংস"}),A.jsx("p",{className:"text-gray-500 mt-2",children:"ওয়েবসাইটের নাম এবং ট্যাগলাইন পরিবর্তন করুন।"})]}),A.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",children:[A.jsx("div",{className:"p-6 border-b border-gray-100 bg-gray-50/50",children:A.jsxs("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[A.jsx(aV,{size:18,className:"text-primary"}),"সাধারণ তথ্য (General Info)"]})}),A.jsxs("form",{onSubmit:T,className:"p-8 space-y-6",children:[A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"ওয়েবসাইট নাম (Website Name)"}),A.jsxs("div",{className:"relative group",children:[A.jsx(rb,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors",size:18}),A.jsx("input",{type:"text",required:!0,value:o,onChange:S=>u(S.target.value),placeholder:"e.g. Science Noob",className:"w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"})]})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"ট্যাগলাইন (Tagline)"}),A.jsxs("div",{className:"relative group",children:[A.jsx(rb,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors",size:18}),A.jsx("input",{type:"text",required:!0,value:d,onChange:S=>m(S.target.value),placeholder:"e.g. Learn Science Easily",className:"w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"})]})]}),p&&A.jsx("div",{className:`p-4 rounded-lg text-sm font-medium animate-in fade-in slide-in-from-top-2 ${p.type==="success"?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:p.text}),A.jsx("div",{className:"pt-4 flex justify-end",children:A.jsxs("button",{type:"submit",disabled:t,className:"px-6 py-2.5 bg-primary hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed",children:[t?A.jsx(hg,{size:18,className:"animate-spin"}):A.jsx(j1,{size:18}),t?"সংরক্ষণ হচ্ছে...":"সেভ করুন (Save Changes)"]})})]})]})]})},JV="NOOB_ADMIN_2025",ZV=()=>{const[i,e]=Ne.useState(null),[t,s]=Ne.useState(!0),[o,u]=Ne.useState("dashboard"),[d,m]=Ne.useState([]),[p,y]=Ne.useState([]),[v,T]=Ne.useState(null),[S,z]=Ne.useState({isOpen:!1,quizId:null}),[Y,ee]=Ne.useState(!1),[Z,ce]=Ne.useState(""),[fe,ue]=Ne.useState(""),[ye,Ce]=Ne.useState(""),[J,I]=Ne.useState("");Ne.useEffect(()=>{const B=Bu.onAuthStateChanged(ne=>{e(ne),s(!1)});return()=>B()},[]),Ne.useEffect(()=>{i&&(o==="dashboard"&&R(),o==="results"&&C())},[i,o]);const R=async()=>{s(!0);try{const B=await BV();m(B)}catch(B){console.error(B)}finally{s(!1)}},C=async()=>{s(!0);try{const B=await GV();y(B)}catch(B){console.error(B)}finally{s(!1)}},D=B=>`${B.toLowerCase().replace(/\s+/g,"")}@admin.portal.com`,O=async B=>{B.preventDefault(),I("");const ne=D(Z);try{if(Y){if(ye!==JV){I("ভুল সিক্রেট কোড! আপনি কি অ্যাডমিন?");return}await Bu.createUserWithEmailAndPassword(ne,fe)}else await Bu.signInWithEmailAndPassword(ne,fe)}catch(he){console.error(he),he.code==="auth/invalid-credential"||he.code==="auth/user-not-found"||he.code==="auth/wrong-password"?I("ইউজারনেম বা পাসওয়ার্ড ভুল হয়েছে।"):he.code==="auth/email-already-in-use"?I("এই ইউজারনেমটি ইতিমধ্যে ব্যবহার করা হয়েছে।"):he.code==="auth/weak-password"?I("পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে।"):I("সমস্যা হয়েছে: "+he.message)}},V=B=>{z({isOpen:!0,quizId:B})},N=async()=>{if(S.quizId)try{await HV(S.quizId),await R()}catch(B){console.error("Error deleting quiz:",B),alert("কুইজ ডিলিট করতে সমস্যা হয়েছে।")}finally{z({isOpen:!1,quizId:null})}},nt=async(B,ne)=>{await FV(B,ne),R()},vt=B=>{T(B),u("create")};return t&&!i?A.jsx("div",{className:"h-screen w-full flex items-center justify-center bg-cream",children:A.jsx(hg,{className:"animate-spin text-primary",size:48})}):i?A.jsxs(A.Fragment,{children:[A.jsxs(UV,{currentView:v?"create":o,onNavigate:B=>{B==="create"&&T(null),u(B)},children:[o==="dashboard"&&A.jsx(jV,{quizzes:d,onDelete:V,onEdit:vt,onToggleStatus:nt}),o==="create"&&A.jsx($V,{initialQuiz:v,onSaveComplete:()=>{T(null),u("dashboard")},onCancel:()=>{T(null),u("dashboard")}}),o==="results"&&A.jsx(XV,{results:p}),o==="settings"&&A.jsx(WV,{})]}),S.isOpen&&A.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200",children:A.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all scale-100",children:[A.jsx("div",{className:"flex justify-center mb-6",children:A.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center",children:A.jsx(My,{className:"text-red-600",size:32})})}),A.jsx("h3",{className:"text-xl font-bold text-center text-gray-800 mb-2",children:"আপনি কি নিশ্চিত?"}),A.jsx("p",{className:"text-center text-gray-500 mb-8",children:"আপনি এই কুইজটি ডিলিট করতে যাচ্ছেন। এটি আর ফিরিয়ে আনা যাবে না।"}),A.jsxs("div",{className:"flex gap-3",children:[A.jsx("button",{onClick:()=>z({isOpen:!1,quizId:null}),className:"flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors",children:"বাতিল করুন"}),A.jsx("button",{onClick:N,className:"flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-red-200",children:"হ্যাঁ, ডিলিট করুন"})]})]})})]}):A.jsxs("div",{className:"min-h-screen w-full flex items-center justify-center bg-cream p-4 relative overflow-hidden",children:[A.jsxs("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none",children:[A.jsx("div",{className:"absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl"}),A.jsx("div",{className:"absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-3xl"})]}),A.jsxs("div",{className:"bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-xl max-w-md w-full border border-white/50 relative z-10",children:[A.jsxs("div",{className:"text-center mb-8",children:[A.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-primary to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg transform rotate-3",children:A.jsx(dg,{className:"text-white",size:32})}),A.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2 tracking-tight",children:"Admin Portal"}),A.jsx("p",{className:"text-gray-500 font-medium",children:Y?"অ্যাডমিন অ্যাকাউন্ট তৈরি করুন":"অ্যাডমিন প্যানেল"})]}),A.jsxs("form",{onSubmit:O,className:"space-y-5",children:[A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-1.5 ml-1",children:"ইউজারনেম (Username)"}),A.jsxs("div",{className:"relative group",children:[A.jsx(kV,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors",size:18}),A.jsx("input",{type:"text",required:!0,placeholder:"আপনার নাম (ইংরেজিতে)",value:Z,onChange:B=>ce(B.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"})]})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-1.5 ml-1",children:"পাসওয়ার্ড (Password)"}),A.jsxs("div",{className:"relative group",children:[A.jsx(fV,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors",size:18}),A.jsx("input",{type:"password",required:!0,placeholder:"******",value:fe,onChange:B=>ue(B.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"})]})]}),Y&&A.jsxs("div",{className:"bg-orange-50 p-5 rounded-xl border border-orange-100 animate-in fade-in slide-in-from-top-4 shadow-sm",children:[A.jsx("label",{className:"block text-sm font-bold text-orange-800 mb-1.5",children:"সিক্রেট কোড (Secret Code)"}),A.jsxs("div",{className:"relative group",children:[A.jsx(lV,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 group-focus-within:text-orange-600 transition-colors",size:18}),A.jsx("input",{type:"text",required:!0,placeholder:"কোডটি শুধুমাত্র এডমিন জানেন",value:ye,onChange:B=>Ce(B.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl border border-orange-200 bg-white text-gray-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none shadow-sm transition-all"})]}),A.jsx("p",{className:"text-xs text-orange-600 mt-2 font-medium",children:"* নতুন অ্যাকাউন্ট খুলতে সিক্রেট কোড প্রয়োজন।"})]}),J&&A.jsxs("div",{className:"text-red-600 text-sm bg-red-50 p-4 rounded-xl text-center font-semibold border border-red-100 flex items-center justify-center gap-2 animate-pulse",children:[A.jsx(L1,{size:16}),J]}),A.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-primary to-green-600 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:to-green-700 transition-all transform active:scale-[0.98]",children:Y?"অ্যাকাউন্ট তৈরি করুন":"প্রবেশ করুন"}),A.jsx("div",{className:"text-center pt-2",children:A.jsx("button",{type:"button",onClick:()=>{ee(!Y),I(""),Ce("")},className:"text-sm text-gray-500 hover:text-primary transition-colors font-medium hover:underline",children:Y?"ইতোমধ্যে অ্যাকাউন্ট আছে? লগইন করুন":"অ্যাডমিন অ্যাকাউন্ট নেই? নতুন তৈরি করুন"})})]})]}),A.jsx("div",{className:"absolute bottom-4 text-center w-full text-xs text-gray-400",children:"© 2025 Admin Portal. All rights reserved."})]})},B1=document.getElementById("root");if(!B1)throw new Error("Could not find root element to mount to");const ab=NR.createRoot(B1),e6=async()=>{try{const i=await fetch("/config.json");if(!i.ok)throw new Error(`Failed to load config: ${i.status} ${i.statusText}`);const e=await i.json();bP(e),ab.render(A.jsx(TR.StrictMode,{children:A.jsx(ZV,{})}))}catch(i){console.error("Initialization failed:",i),ab.render(A.jsx("div",{className:"min-h-screen flex items-center justify-center bg-red-50 p-4",children:A.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-lg max-w-lg w-full border border-red-100",children:[A.jsx("h1",{className:"text-2xl font-bold text-red-600 mb-4",children:"Configuration Error"}),A.jsxs("p",{className:"text-gray-700 mb-4",children:["Could not start the application. Please ensure ",A.jsx("code",{children:"public/config.json"})," exists and contains valid Firebase credentials."]}),A.jsx("div",{className:"bg-gray-100 p-4 rounded text-sm font-mono overflow-auto text-gray-800",children:i instanceof Error?i.message:String(i)})]})}))}};e6();

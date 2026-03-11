(()=>{var Hb=Object.create;var r0=Object.defineProperty;var Gb=Object.getOwnPropertyDescriptor;var kb=Object.getOwnPropertyNames;var Xb=Object.getPrototypeOf,Wb=Object.prototype.hasOwnProperty;var xi=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var qb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of kb(t))!Wb.call(e,s)&&s!==n&&r0(e,s,{get:()=>t[s],enumerable:!(i=Gb(t,s))||i.enumerable});return e};var ys=(e,t,n)=>(n=e!=null?Hb(Xb(e)):{},qb(t||!e||!e.__esModule?r0(n,"default",{value:e,enumerable:!0}):n,e));var v0=xi(It=>{"use strict";var kd=Symbol.for("react.transitional.element"),Yb=Symbol.for("react.portal"),Zb=Symbol.for("react.fragment"),Jb=Symbol.for("react.strict_mode"),jb=Symbol.for("react.profiler"),Kb=Symbol.for("react.consumer"),Qb=Symbol.for("react.context"),$b=Symbol.for("react.forward_ref"),tM=Symbol.for("react.suspense"),eM=Symbol.for("react.memo"),h0=Symbol.for("react.lazy"),nM=Symbol.for("react.activity"),o0=Symbol.iterator;function iM(e){return e===null||typeof e!="object"?null:(e=o0&&e[o0]||e["@@iterator"],typeof e=="function"?e:null)}var d0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f0=Object.assign,p0={};function nr(e,t,n){this.props=e,this.context=t,this.refs=p0,this.updater=n||d0}nr.prototype.isReactComponent={};nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function m0(){}m0.prototype=nr.prototype;function Xd(e,t,n){this.props=e,this.context=t,this.refs=p0,this.updater=n||d0}var Wd=Xd.prototype=new m0;Wd.constructor=Xd;f0(Wd,nr.prototype);Wd.isPureReactComponent=!0;var l0=Array.isArray;function Gd(){}var _e={H:null,A:null,T:null,S:null},g0=Object.prototype.hasOwnProperty;function qd(e,t,n){var i=n.ref;return{$$typeof:kd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function sM(e,t){return qd(e.type,t,e.props)}function Yd(e){return typeof e=="object"&&e!==null&&e.$$typeof===kd}function aM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var c0=/\/+/g;function Hd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?aM(""+e.key):t.toString(36)}function rM(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Gd,Gd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function er(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case kd:case Yb:r=!0;break;case h0:return r=e._init,er(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Hd(e,0):i,l0(s)?(n="",r!=null&&(n=r.replace(c0,"$&/")+"/"),er(s,t,n,"",function(c){return c})):s!=null&&(Yd(s)&&(s=sM(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(c0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(l0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Hd(i,l),r+=er(i,t,n,a,s);else if(l=iM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Hd(i,l++),r+=er(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return er(rM(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function lc(e,t,n){if(e==null)return e;var i=[],s=0;return er(e,i,"","",function(a){return t.call(n,a,s++)}),i}function oM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var u0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},lM={map:lc,forEach:function(e,t,n){lc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lc(e,function(){t++}),t},toArray:function(e){return lc(e,function(t){return t})||[]},only:function(e){if(!Yd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};It.Activity=nM;It.Children=lM;It.Component=nr;It.Fragment=Zb;It.Profiler=jb;It.PureComponent=Xd;It.StrictMode=Jb;It.Suspense=tM;It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_e;It.__COMPILER_RUNTIME={__proto__:null,c:function(e){return _e.H.useMemoCache(e)}};It.cache=function(e){return function(){return e.apply(null,arguments)}};It.cacheSignal=function(){return null};It.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=f0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!g0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return qd(e.type,s,i)};It.createContext=function(e){return e={$$typeof:Qb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Kb,_context:e},e};It.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)g0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return qd(e,a,s)};It.createRef=function(){return{current:null}};It.forwardRef=function(e){return{$$typeof:$b,render:e}};It.isValidElement=Yd;It.lazy=function(e){return{$$typeof:h0,_payload:{_status:-1,_result:e},_init:oM}};It.memo=function(e,t){return{$$typeof:eM,type:e,compare:t===void 0?null:t}};It.startTransition=function(e){var t=_e.T,n={};_e.T=n;try{var i=e(),s=_e.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Gd,u0)}catch(a){u0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),_e.T=t}};It.unstable_useCacheRefresh=function(){return _e.H.useCacheRefresh()};It.use=function(e){return _e.H.use(e)};It.useActionState=function(e,t,n){return _e.H.useActionState(e,t,n)};It.useCallback=function(e,t){return _e.H.useCallback(e,t)};It.useContext=function(e){return _e.H.useContext(e)};It.useDebugValue=function(){};It.useDeferredValue=function(e,t){return _e.H.useDeferredValue(e,t)};It.useEffect=function(e,t){return _e.H.useEffect(e,t)};It.useEffectEvent=function(e){return _e.H.useEffectEvent(e)};It.useId=function(){return _e.H.useId()};It.useImperativeHandle=function(e,t,n){return _e.H.useImperativeHandle(e,t,n)};It.useInsertionEffect=function(e,t){return _e.H.useInsertionEffect(e,t)};It.useLayoutEffect=function(e,t){return _e.H.useLayoutEffect(e,t)};It.useMemo=function(e,t){return _e.H.useMemo(e,t)};It.useOptimistic=function(e,t){return _e.H.useOptimistic(e,t)};It.useReducer=function(e,t,n){return _e.H.useReducer(e,t,n)};It.useRef=function(e){return _e.H.useRef(e)};It.useState=function(e){return _e.H.useState(e)};It.useSyncExternalStore=function(e,t,n){return _e.H.useSyncExternalStore(e,t,n)};It.useTransition=function(){return _e.H.useTransition()};It.version="19.2.4"});var bo=xi((f2,_0)=>{"use strict";_0.exports=v0()});var C0=xi(Te=>{"use strict";function Kd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<cc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Si(e){return e.length===0?null:e[0]}function hc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>cc(o,n))l<s&&0>cc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>cc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function cc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Te.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(y0=performance,Te.unstable_now=function(){return y0.now()}):(Zd=Date,x0=Zd.now(),Te.unstable_now=function(){return Zd.now()-x0});var y0,Zd,x0,Hi=[],xs=[],cM=1,Yn=null,cn=3,Qd=!1,Mo=!1,To=!1,$d=!1,M0=typeof setTimeout=="function"?setTimeout:null,T0=typeof clearTimeout=="function"?clearTimeout:null,S0=typeof setImmediate<"u"?setImmediate:null;function uc(e){for(var t=Si(xs);t!==null;){if(t.callback===null)hc(xs);else if(t.startTime<=e)hc(xs),t.sortIndex=t.expirationTime,Kd(Hi,t);else break;t=Si(xs)}}function tf(e){if(To=!1,uc(e),!Mo)if(Si(Hi)!==null)Mo=!0,sr||(sr=!0,ir());else{var t=Si(xs);t!==null&&ef(tf,t.startTime-e)}}var sr=!1,Eo=-1,E0=5,A0=-1;function w0(){return $d?!0:!(Te.unstable_now()-A0<E0)}function Jd(){if($d=!1,sr){var e=Te.unstable_now();A0=e;var t=!0;try{t:{Mo=!1,To&&(To=!1,T0(Eo),Eo=-1),Qd=!0;var n=cn;try{e:{for(uc(e),Yn=Si(Hi);Yn!==null&&!(Yn.expirationTime>e&&w0());){var i=Yn.callback;if(typeof i=="function"){Yn.callback=null,cn=Yn.priorityLevel;var s=i(Yn.expirationTime<=e);if(e=Te.unstable_now(),typeof s=="function"){Yn.callback=s,uc(e),t=!0;break e}Yn===Si(Hi)&&hc(Hi),uc(e)}else hc(Hi);Yn=Si(Hi)}if(Yn!==null)t=!0;else{var a=Si(xs);a!==null&&ef(tf,a.startTime-e),t=!1}}break t}finally{Yn=null,cn=n,Qd=!1}t=void 0}}finally{t?ir():sr=!1}}}var ir;typeof S0=="function"?ir=function(){S0(Jd)}:typeof MessageChannel<"u"?(jd=new MessageChannel,b0=jd.port2,jd.port1.onmessage=Jd,ir=function(){b0.postMessage(null)}):ir=function(){M0(Jd,0)};var jd,b0;function ef(e,t){Eo=M0(function(){e(Te.unstable_now())},t)}Te.unstable_IdlePriority=5;Te.unstable_ImmediatePriority=1;Te.unstable_LowPriority=4;Te.unstable_NormalPriority=3;Te.unstable_Profiling=null;Te.unstable_UserBlockingPriority=2;Te.unstable_cancelCallback=function(e){e.callback=null};Te.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E0=0<e?Math.floor(1e3/e):5};Te.unstable_getCurrentPriorityLevel=function(){return cn};Te.unstable_next=function(e){switch(cn){case 1:case 2:case 3:var t=3;break;default:t=cn}var n=cn;cn=t;try{return e()}finally{cn=n}};Te.unstable_requestPaint=function(){$d=!0};Te.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=cn;cn=e;try{return t()}finally{cn=n}};Te.unstable_scheduleCallback=function(e,t,n){var i=Te.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:cM++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Kd(xs,e),Si(Hi)===null&&e===Si(xs)&&(To?(T0(Eo),Eo=-1):To=!0,ef(tf,n-i))):(e.sortIndex=s,Kd(Hi,e),Mo||Qd||(Mo=!0,sr||(sr=!0,ir()))),e};Te.unstable_shouldYield=w0;Te.unstable_wrapCallback=function(e){var t=cn;return function(){var n=cn;cn=t;try{return e.apply(this,arguments)}finally{cn=n}}}});var D0=xi((m2,R0)=>{"use strict";R0.exports=C0()});var N0=xi(mn=>{"use strict";var uM=bo();function U0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ss(){}var pn={d:{f:Ss,r:function(){throw Error(U0(522))},D:Ss,C:Ss,L:Ss,m:Ss,X:Ss,S:Ss,M:Ss},p:0,findDOMNode:null},hM=Symbol.for("react.portal");function dM(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hM,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ao=uM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function dc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pn;mn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(U0(299));return dM(e,t,null,n)};mn.flushSync=function(e){var t=Ao.T,n=pn.p;try{if(Ao.T=null,pn.p=2,e)return e()}finally{Ao.T=t,pn.p=n,pn.d.f()}};mn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,pn.d.C(e,t))};mn.prefetchDNS=function(e){typeof e=="string"&&pn.d.D(e)};mn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=dc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?pn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&pn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};mn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=dc(t.as,t.crossOrigin);pn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&pn.d.M(e)};mn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=dc(n,t.crossOrigin);pn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};mn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=dc(t.as,t.crossOrigin);pn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else pn.d.m(e)};mn.requestFormReset=function(e){pn.d.r(e)};mn.unstable_batchedUpdates=function(e,t){return e(t)};mn.useFormState=function(e,t,n){return Ao.H.useFormState(e,t,n)};mn.useFormStatus=function(){return Ao.H.useHostTransitionStatus()};mn.version="19.2.4"});var nf=xi((v2,I0)=>{"use strict";function L0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L0)}catch(e){console.error(e)}}L0(),I0.exports=N0()});var qx=xi(Bu=>{"use strict";var Xe=D0(),r_=bo(),fM=nf();function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function l_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O0(e){if(dl(e)!==e)throw Error(j(188))}function pM(e){var t=e.alternate;if(!t){if(t=dl(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return O0(s),e;if(a===i)return O0(s),t;a=a.sibling}throw Error(j(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function u_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=u_(e),t!==null)return t;e=e.sibling}return null}var Se=Object.assign,mM=Symbol.for("react.element"),fc=Symbol.for("react.transitional.element"),Io=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),h_=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),d_=Symbol.for("react.consumer"),Ji=Symbol.for("react.context"),Np=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),zf=Symbol.for("react.suspense_list"),Lp=Symbol.for("react.memo"),bs=Symbol.for("react.lazy"),Vf=Symbol.for("react.activity"),gM=Symbol.for("react.memo_cache_sentinel"),P0=Symbol.iterator;function wo(e){return e===null||typeof e!="object"?null:(e=P0&&e[P0]||e["@@iterator"],typeof e=="function"?e:null)}var vM=Symbol.for("react.client.reference");function Hf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===vM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case Bf:return"Profiler";case h_:return"StrictMode";case Ff:return"Suspense";case zf:return"SuspenseList";case Vf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Io:return"Portal";case Ji:return e.displayName||"Context";case d_:return(e._context.displayName||"Context")+".Consumer";case Np:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lp:return t=e.displayName||null,t!==null?t:Hf(e.type)||"Memo";case bs:t=e._payload,e=e._init;try{return Hf(e(t))}catch{}}return null}var Oo=Array.isArray,Ct=r_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=fM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ma={pending:!1,data:null,method:null,action:null},Gf=[],hr=-1;function Ai(e){return{current:e}}function Ke(e){0>hr||(e.current=Gf[hr],Gf[hr]=null,hr--)}function ge(e,t){hr++,Gf[hr]=e.current,e.current=t}var Ei=Ai(null),Qo=Ai(null),Ls=Ai(null),qc=Ai(null);function Yc(e,t){switch(ge(Ls,t),ge(Qo,e),ge(Ei,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?kv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=kv(t),e=Nx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ke(Ei),ge(Ei,e)}function Rr(){Ke(Ei),Ke(Qo),Ke(Ls)}function kf(e){e.memoizedState!==null&&ge(qc,e);var t=Ei.current,n=Nx(t,e.type);t!==n&&(ge(Qo,e),ge(Ei,n))}function Zc(e){Qo.current===e&&(Ke(Ei),Ke(Qo)),qc.current===e&&(Ke(qc),cl._currentValue=Ma)}var sf,B0;function ya(e){if(sf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sf=t&&t[1]||"",B0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+sf+e+B0}var af=!1;function rf(e,t){if(!e||af)return"";af=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(f){var u=f}Reflect.construct(e,[],p)}else{try{p.call()}catch(f){u=f}e.call(p.prototype)}}else{try{throw Error()}catch(f){u=f}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(f){if(f&&u&&typeof f.stack=="string")return[f.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=s);break}}}finally{af=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ya(n):""}function _M(e,t){switch(e.tag){case 26:case 27:case 5:return ya(e.type);case 16:return ya("Lazy");case 13:return e.child!==t&&t!==null?ya("Suspense Fallback"):ya("Suspense");case 19:return ya("SuspenseList");case 0:case 15:return rf(e.type,!1);case 11:return rf(e.type.render,!1);case 1:return rf(e.type,!0);case 31:return ya("Activity");default:return""}}function F0(e){try{var t="",n=null;do t+=_M(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Xf=Object.prototype.hasOwnProperty,Ip=Xe.unstable_scheduleCallback,of=Xe.unstable_cancelCallback,yM=Xe.unstable_shouldYield,xM=Xe.unstable_requestPaint,In=Xe.unstable_now,SM=Xe.unstable_getCurrentPriorityLevel,f_=Xe.unstable_ImmediatePriority,p_=Xe.unstable_UserBlockingPriority,Jc=Xe.unstable_NormalPriority,bM=Xe.unstable_LowPriority,m_=Xe.unstable_IdlePriority,MM=Xe.log,TM=Xe.unstable_setDisableYieldValue,fl=null,On=null;function Cs(e){if(typeof MM=="function"&&TM(e),On&&typeof On.setStrictMode=="function")try{On.setStrictMode(fl,e)}catch{}}var Pn=Math.clz32?Math.clz32:wM,EM=Math.log,AM=Math.LN2;function wM(e){return e>>>=0,e===0?32:31-(EM(e)/AM|0)|0}var pc=256,mc=262144,gc=4194304;function xa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Su(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=xa(i):(r&=o,r!==0?s=xa(r):n||(n=o&~e,n!==0&&(s=xa(n))))):(o=i&~a,o!==0?s=xa(o):r!==0?s=xa(r):n||(n=i&~e,n!==0&&(s=xa(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function pl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function CM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g_(){var e=gc;return gc<<=1,(gc&62914560)===0&&(gc=4194304),e}function lf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ml(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function RM(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var d=31-Pn(n),p=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var f=u[d];f!==null&&(f.lane&=-536870913)}n&=~p}i!==0&&v_(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function v_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Pn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function __(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Pn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function y_(e,t){var n=t&-t;return n=(n&42)!==0?1:Op(n),(n&(e.suspendedLanes|t))!==0?0:n}function Op(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pp(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function x_(){var e=te.p;return e!==0?e:(e=window.event,e===void 0?32:kx(e.type))}function z0(e,t){var n=te.p;try{return te.p=e,t()}finally{te.p=n}}var qs=Math.random().toString(36).slice(2),en="__reactFiber$"+qs,Tn="__reactProps$"+qs,Vr="__reactContainer$"+qs,Wf="__reactEvents$"+qs,DM="__reactListeners$"+qs,UM="__reactHandles$"+qs,V0="__reactResources$"+qs,gl="__reactMarker$"+qs;function Bp(e){delete e[en],delete e[Tn],delete e[Wf],delete e[DM],delete e[UM]}function dr(e){var t=e[en];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vr]||n[en]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zv(e);e!==null;){if(n=e[en])return n;e=Zv(e)}return t}e=n,n=e.parentNode}return null}function Hr(e){if(e=e[en]||e[Vr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Po(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function br(e){var t=e[V0];return t||(t=e[V0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[gl]=!0}var S_=new Set,b_={};function La(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(b_[e]=t,e=0;e<t.length;e++)S_.add(t[e])}var NM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),H0={},G0={};function LM(e){return Xf.call(G0,e)?!0:Xf.call(H0,e)?!1:NM.test(e)?G0[e]=!0:(H0[e]=!0,!1)}function Uc(e,t,n){if(LM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function vc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Gi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Jn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function M_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function IM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qf(e){if(!e._valueTracker){var t=M_(e)?"checked":"value";e._valueTracker=IM(e,t,""+e[t])}}function T_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=M_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function jc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var OM=/[\n"\\]/g;function Qn(e){return e.replace(OM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yf(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Jn(t)):e.value!==""+Jn(t)&&(e.value=""+Jn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Zf(e,r,Jn(t)):n!=null?Zf(e,r,Jn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Jn(o):e.removeAttribute("name")}function E_(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){qf(e);return}n=n!=null?""+Jn(n):"",t=t!=null?""+Jn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),qf(e)}function Zf(e,t,n){t==="number"&&jc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Mr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Jn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function A_(e,t,n){if(t!=null&&(t=""+Jn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Jn(n):""}function w_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(j(92));if(Oo(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Jn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),qf(e)}function Ur(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var PM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function k0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||PM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function C_(e,t,n){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&k0(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&k0(e,a,t[a])}function Fp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var BM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),FM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nc(e){return FM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var Jf=null;function zp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fr=null,Tr=null;function X0(e){var t=Hr(e);if(t&&(e=t.stateNode)){var n=e[Tn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Yf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Tn]||null;if(!s)throw Error(j(90));Yf(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&T_(i)}break t;case"textarea":A_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Mr(e,!!n.multiple,t,!1)}}}var cf=!1;function R_(e,t,n){if(cf)return e(t,n);cf=!0;try{var i=e(t);return i}finally{if(cf=!1,(fr!==null||Tr!==null)&&(Lu(),fr&&(t=fr,e=Tr,Tr=fr=null,X0(t),e)))for(t=0;t<e.length;t++)X0(e[t])}}function $o(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Tn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var es=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jf=!1;if(es)try{ar={},Object.defineProperty(ar,"passive",{get:function(){jf=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{jf=!1}var ar,Rs=null,Vp=null,Lc=null;function D_(){if(Lc)return Lc;var e,t=Vp,n=t.length,i,s="value"in Rs?Rs.value:Rs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Lc=s.slice(e,1<i?1-i:void 0)}function Ic(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _c(){return!0}function W0(){return!1}function En(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?_c:W0,this.isPropagationStopped=W0,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_c)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_c)},persist:function(){},isPersistent:_c}),t}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bu=En(Ia),vl=Se({},Ia,{view:0,detail:0}),zM=En(vl),uf,hf,Co,Mu=Se({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Co&&(Co&&e.type==="mousemove"?(uf=e.screenX-Co.screenX,hf=e.screenY-Co.screenY):hf=uf=0,Co=e),uf)},movementY:function(e){return"movementY"in e?e.movementY:hf}}),q0=En(Mu),VM=Se({},Mu,{dataTransfer:0}),HM=En(VM),GM=Se({},vl,{relatedTarget:0}),df=En(GM),kM=Se({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),XM=En(kM),WM=Se({},Ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qM=En(WM),YM=Se({},Ia,{data:0}),Y0=En(YM),ZM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jM[e])?!!t[e]:!1}function Hp(){return KM}var QM=Se({},vl,{key:function(e){if(e.key){var t=ZM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ic(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?JM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hp,charCode:function(e){return e.type==="keypress"?Ic(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ic(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$M=En(QM),t1=Se({},Mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Z0=En(t1),e1=Se({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hp}),n1=En(e1),i1=Se({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),s1=En(i1),a1=Se({},Mu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),r1=En(a1),o1=Se({},Ia,{newState:0,oldState:0}),l1=En(o1),c1=[9,13,27,32],Gp=es&&"CompositionEvent"in window,zo=null;es&&"documentMode"in document&&(zo=document.documentMode);var u1=es&&"TextEvent"in window&&!zo,U_=es&&(!Gp||zo&&8<zo&&11>=zo),J0=" ",j0=!1;function N_(e,t){switch(e){case"keyup":return c1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function h1(e,t){switch(e){case"compositionend":return L_(t);case"keypress":return t.which!==32?null:(j0=!0,J0);case"textInput":return e=t.data,e===J0&&j0?null:e;default:return null}}function d1(e,t){if(pr)return e==="compositionend"||!Gp&&N_(e,t)?(e=D_(),Lc=Vp=Rs=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return U_&&t.locale!=="ko"?null:t.data;default:return null}}var f1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f1[e.type]:t==="textarea"}function I_(e,t,n,i){fr?Tr?Tr.push(i):Tr=[i]:fr=i,t=pu(t,"onChange"),0<t.length&&(n=new bu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Vo=null,tl=null;function p1(e){Rx(e,0)}function Tu(e){var t=Po(e);if(T_(t))return e}function Q0(e,t){if(e==="change")return t}var O_=!1;es&&(es?(xc="oninput"in document,xc||(ff=document.createElement("div"),ff.setAttribute("oninput","return;"),xc=typeof ff.oninput=="function"),yc=xc):yc=!1,O_=yc&&(!document.documentMode||9<document.documentMode));var yc,xc,ff;function $0(){Vo&&(Vo.detachEvent("onpropertychange",P_),tl=Vo=null)}function P_(e){if(e.propertyName==="value"&&Tu(tl)){var t=[];I_(t,tl,e,zp(e)),R_(p1,t)}}function m1(e,t,n){e==="focusin"?($0(),Vo=t,tl=n,Vo.attachEvent("onpropertychange",P_)):e==="focusout"&&$0()}function g1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tu(tl)}function v1(e,t){if(e==="click")return Tu(t)}function _1(e,t){if(e==="input"||e==="change")return Tu(t)}function y1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fn=typeof Object.is=="function"?Object.is:y1;function el(e,t){if(Fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Xf.call(t,s)||!Fn(e[s],t[s]))return!1}return!0}function tv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ev(e,t){var n=tv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=tv(n)}}function B_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?B_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function F_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jc(e.document)}return t}function kp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var x1=es&&"documentMode"in document&&11>=document.documentMode,mr=null,Kf=null,Ho=null,Qf=!1;function nv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qf||mr==null||mr!==jc(i)||(i=mr,"selectionStart"in i&&kp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ho&&el(Ho,i)||(Ho=i,i=pu(Kf,"onSelect"),0<i.length&&(t=new bu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=mr)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gr={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},pf={},z_={};es&&(z_=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Oa(e){if(pf[e])return pf[e];if(!gr[e])return e;var t=gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in z_)return pf[e]=t[n];return e}var V_=Oa("animationend"),H_=Oa("animationiteration"),G_=Oa("animationstart"),S1=Oa("transitionrun"),b1=Oa("transitionstart"),M1=Oa("transitioncancel"),k_=Oa("transitionend"),X_=new Map,$f="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$f.push("scrollEnd");function ui(e,t){X_.set(e,t),La(t,[e])}var Kc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zn=[],vr=0,Xp=0;function Eu(){for(var e=vr,t=Xp=vr=0;t<e;){var n=Zn[t];Zn[t++]=null;var i=Zn[t];Zn[t++]=null;var s=Zn[t];Zn[t++]=null;var a=Zn[t];if(Zn[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&W_(n,s,a)}}function Au(e,t,n,i){Zn[vr++]=e,Zn[vr++]=t,Zn[vr++]=n,Zn[vr++]=i,Xp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Wp(e,t,n,i){return Au(e,t,n,i),Qc(e)}function Pa(e,t){return Au(e,null,null,t),Qc(e)}function W_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Pn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Qc(e){if(50<jo)throw jo=0,xp=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _r={};function T1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,t,n,i){return new T1(e,t,n,i)}function qp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,t){var n=e.alternate;return n===null?(n=Nn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function q_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Oc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")qp(e)&&(r=1);else if(typeof e=="string")r=wT(e,n,Ei.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Vf:return e=Nn(31,n,t,s),e.elementType=Vf,e.lanes=a,e;case ur:return Ta(n.children,s,a,t);case h_:r=8,s|=24;break;case Bf:return e=Nn(12,n,t,s|2),e.elementType=Bf,e.lanes=a,e;case Ff:return e=Nn(13,n,t,s),e.elementType=Ff,e.lanes=a,e;case zf:return e=Nn(19,n,t,s),e.elementType=zf,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ji:r=10;break t;case d_:r=9;break t;case Np:r=11;break t;case Lp:r=14;break t;case bs:r=16,i=null;break t}r=29,n=Error(j(130,e===null?"null":typeof e,"")),i=null}return t=Nn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ta(e,t,n,i){return e=Nn(7,e,i,t),e.lanes=n,e}function mf(e,t,n){return e=Nn(6,e,null,t),e.lanes=n,e}function Y_(e){var t=Nn(18,null,null,0);return t.stateNode=e,t}function gf(e,t,n){return t=Nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var iv=new WeakMap;function $n(e,t){if(typeof e=="object"&&e!==null){var n=iv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:F0(t)},iv.set(e,t),t)}return{value:e,source:t,stack:F0(t)}}var yr=[],xr=0,$c=null,nl=0,jn=[],Kn=0,Gs=null,bi=1,Mi="";function Yi(e,t){yr[xr++]=nl,yr[xr++]=$c,$c=e,nl=t}function Z_(e,t,n){jn[Kn++]=bi,jn[Kn++]=Mi,jn[Kn++]=Gs,Gs=e;var i=bi;e=Mi;var s=32-Pn(i)-1;i&=~(1<<s),n+=1;var a=32-Pn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,bi=1<<32-Pn(t)+s|n<<s|i,Mi=a+e}else bi=1<<a|n<<s|i,Mi=e}function Yp(e){e.return!==null&&(Yi(e,1),Z_(e,1,0))}function Zp(e){for(;e===$c;)$c=yr[--xr],yr[xr]=null,nl=yr[--xr],yr[xr]=null;for(;e===Gs;)Gs=jn[--Kn],jn[Kn]=null,Mi=jn[--Kn],jn[Kn]=null,bi=jn[--Kn],jn[Kn]=null}function J_(e,t){jn[Kn++]=bi,jn[Kn++]=Mi,jn[Kn++]=Gs,bi=t.id,Mi=t.overflow,Gs=e}var nn=null,xe=null,Yt=!1,Is=null,ti=!1,tp=Error(j(519));function ks(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw il($n(t,e)),tp}function sv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[en]=e,t[Tn]=i,n){case"dialog":Xt("cancel",t),Xt("close",t);break;case"iframe":case"object":case"embed":Xt("load",t);break;case"video":case"audio":for(n=0;n<ol.length;n++)Xt(ol[n],t);break;case"source":Xt("error",t);break;case"img":case"image":case"link":Xt("error",t),Xt("load",t);break;case"details":Xt("toggle",t);break;case"input":Xt("invalid",t),E_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Xt("invalid",t);break;case"textarea":Xt("invalid",t),w_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Ux(t.textContent,n)?(i.popover!=null&&(Xt("beforetoggle",t),Xt("toggle",t)),i.onScroll!=null&&Xt("scroll",t),i.onScrollEnd!=null&&Xt("scrollend",t),i.onClick!=null&&(t.onclick=ji),t=!0):t=!1,t||ks(e,!0)}function av(e){for(nn=e.return;nn;)switch(nn.tag){case 5:case 31:case 13:ti=!1;return;case 27:case 3:ti=!0;return;default:nn=nn.return}}function rr(e){if(e!==nn)return!1;if(!Yt)return av(e),Yt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ep(e.type,e.memoizedProps)),n=!n),n&&xe&&ks(e),av(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));xe=Yv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));xe=Yv(e)}else t===27?(t=xe,Ys(e.type)?(e=Rp,Rp=null,xe=e):xe=t):xe=nn?ni(e.stateNode.nextSibling):null;return!0}function Ca(){xe=nn=null,Yt=!1}function vf(){var e=Is;return e!==null&&(bn===null?bn=e:bn.push.apply(bn,e),Is=null),e}function il(e){Is===null?Is=[e]:Is.push(e)}var ep=Ai(null),Ba=null,Ki=null;function Ts(e,t,n){ge(ep,t._currentValue),t._currentValue=n}function $i(e){e._currentValue=ep.current,Ke(ep)}function np(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ip(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),np(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(j(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),np(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Gr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var o=s.type;Fn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===qc.current){if(r=s.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(cl):e=[cl])}s=s.return}e!==null&&ip(t,e,n,i),t.flags|=262144}function tu(e){for(e=e.firstContext;e!==null;){if(!Fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ra(e){Ba=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sn(e){return j_(Ba,e)}function Sc(e,t){return Ba===null&&Ra(e),j_(e,t)}function j_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(j(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var E1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},A1=Xe.unstable_scheduleCallback,w1=Xe.unstable_NormalPriority,Ve={$$typeof:Ji,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jp(){return{controller:new E1,data:new Map,refCount:0}}function _l(e){e.refCount--,e.refCount===0&&A1(w1,function(){e.controller.abort()})}var Go=null,sp=0,Nr=0,Er=null;function C1(e,t){if(Go===null){var n=Go=[];sp=0,Nr=xm(),Er={status:"pending",value:void 0,then:function(i){n.push(i)}}}return sp++,t.then(rv,rv),t}function rv(){if(--sp===0&&Go!==null){Er!==null&&(Er.status="fulfilled");var e=Go;Go=null,Nr=0,Er=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function R1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var ov=Ct.S;Ct.S=function(e,t){ux=In(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&C1(e,t),ov!==null&&ov(e,t)};var Ea=Ai(null);function jp(){var e=Ea.current;return e!==null?e:fe.pooledCache}function Pc(e,t){t===null?ge(Ea,Ea.current):ge(Ea,t.pool)}function K_(){var e=jp();return e===null?null:{parent:Ve._currentValue,pool:e}}var kr=Error(j(460)),Kp=Error(j(474)),wu=Error(j(542)),eu={then:function(){}};function lv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Q_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ji,ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uv(e),e;default:if(typeof t.status=="string")t.then(ji,ji);else{if(e=fe,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uv(e),e}throw Aa=t,kr}}function Sa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Aa=n,kr):n}}var Aa=null;function cv(){if(Aa===null)throw Error(j(459));var e=Aa;return Aa=null,e}function uv(e){if(e===kr||e===wu)throw Error(j(483))}var Ar=null,sl=0;function bc(e){var t=sl;return sl+=1,Ar===null&&(Ar=[]),Q_(Ar,e,t)}function Ro(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Mc(e,t){throw t.$$typeof===mM?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $_(e){function t(h,m){if(e){var _=h.deletions;_===null?(h.deletions=[m],h.flags|=16):_.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function i(h){for(var m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function s(h,m){return h=Qi(h,m),h.index=0,h.sibling=null,h}function a(h,m,_){return h.index=_,e?(_=h.alternate,_!==null?(_=_.index,_<m?(h.flags|=67108866,m):_):(h.flags|=67108866,m)):(h.flags|=1048576,m)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,m,_,S){return m===null||m.tag!==6?(m=mf(_,h.mode,S),m.return=h,m):(m=s(m,_),m.return=h,m)}function l(h,m,_,S){var A=_.type;return A===ur?d(h,m,_.props.children,S,_.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===bs&&Sa(A)===m.type)?(m=s(m,_.props),Ro(m,_),m.return=h,m):(m=Oc(_.type,_.key,_.props,null,h.mode,S),Ro(m,_),m.return=h,m)}function c(h,m,_,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=gf(_,h.mode,S),m.return=h,m):(m=s(m,_.children||[]),m.return=h,m)}function d(h,m,_,S,A){return m===null||m.tag!==7?(m=Ta(_,h.mode,S,A),m.return=h,m):(m=s(m,_),m.return=h,m)}function p(h,m,_){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=mf(""+m,h.mode,_),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fc:return _=Oc(m.type,m.key,m.props,null,h.mode,_),Ro(_,m),_.return=h,_;case Io:return m=gf(m,h.mode,_),m.return=h,m;case bs:return m=Sa(m),p(h,m,_)}if(Oo(m)||wo(m))return m=Ta(m,h.mode,_,null),m.return=h,m;if(typeof m.then=="function")return p(h,bc(m),_);if(m.$$typeof===Ji)return p(h,Sc(h,m),_);Mc(h,m)}return null}function u(h,m,_,S){var A=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return A!==null?null:o(h,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fc:return _.key===A?l(h,m,_,S):null;case Io:return _.key===A?c(h,m,_,S):null;case bs:return _=Sa(_),u(h,m,_,S)}if(Oo(_)||wo(_))return A!==null?null:d(h,m,_,S,null);if(typeof _.then=="function")return u(h,m,bc(_),S);if(_.$$typeof===Ji)return u(h,m,Sc(h,_),S);Mc(h,_)}return null}function f(h,m,_,S,A){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return h=h.get(_)||null,o(m,h,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fc:return h=h.get(S.key===null?_:S.key)||null,l(m,h,S,A);case Io:return h=h.get(S.key===null?_:S.key)||null,c(m,h,S,A);case bs:return S=Sa(S),f(h,m,_,S,A)}if(Oo(S)||wo(S))return h=h.get(_)||null,d(m,h,S,A,null);if(typeof S.then=="function")return f(h,m,_,bc(S),A);if(S.$$typeof===Ji)return f(h,m,_,Sc(m,S),A);Mc(m,S)}return null}function v(h,m,_,S){for(var A=null,w=null,C=m,x=m=0,T=null;C!==null&&x<_.length;x++){C.index>x?(T=C,C=null):T=C.sibling;var I=u(h,C,_[x],S);if(I===null){C===null&&(C=T);break}e&&C&&I.alternate===null&&t(h,C),m=a(I,m,x),w===null?A=I:w.sibling=I,w=I,C=T}if(x===_.length)return n(h,C),Yt&&Yi(h,x),A;if(C===null){for(;x<_.length;x++)C=p(h,_[x],S),C!==null&&(m=a(C,m,x),w===null?A=C:w.sibling=C,w=C);return Yt&&Yi(h,x),A}for(C=i(C);x<_.length;x++)T=f(C,h,x,_[x],S),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?x:T.key),m=a(T,m,x),w===null?A=T:w.sibling=T,w=T);return e&&C.forEach(function(R){return t(h,R)}),Yt&&Yi(h,x),A}function b(h,m,_,S){if(_==null)throw Error(j(151));for(var A=null,w=null,C=m,x=m=0,T=null,I=_.next();C!==null&&!I.done;x++,I=_.next()){C.index>x?(T=C,C=null):T=C.sibling;var R=u(h,C,I.value,S);if(R===null){C===null&&(C=T);break}e&&C&&R.alternate===null&&t(h,C),m=a(R,m,x),w===null?A=R:w.sibling=R,w=R,C=T}if(I.done)return n(h,C),Yt&&Yi(h,x),A;if(C===null){for(;!I.done;x++,I=_.next())I=p(h,I.value,S),I!==null&&(m=a(I,m,x),w===null?A=I:w.sibling=I,w=I);return Yt&&Yi(h,x),A}for(C=i(C);!I.done;x++,I=_.next())I=f(C,h,x,I.value,S),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?x:I.key),m=a(I,m,x),w===null?A=I:w.sibling=I,w=I);return e&&C.forEach(function(P){return t(h,P)}),Yt&&Yi(h,x),A}function g(h,m,_,S){if(typeof _=="object"&&_!==null&&_.type===ur&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case fc:t:{for(var A=_.key;m!==null;){if(m.key===A){if(A=_.type,A===ur){if(m.tag===7){n(h,m.sibling),S=s(m,_.props.children),S.return=h,h=S;break t}}else if(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===bs&&Sa(A)===m.type){n(h,m.sibling),S=s(m,_.props),Ro(S,_),S.return=h,h=S;break t}n(h,m);break}else t(h,m);m=m.sibling}_.type===ur?(S=Ta(_.props.children,h.mode,S,_.key),S.return=h,h=S):(S=Oc(_.type,_.key,_.props,null,h.mode,S),Ro(S,_),S.return=h,h=S)}return r(h);case Io:t:{for(A=_.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(h,m.sibling),S=s(m,_.children||[]),S.return=h,h=S;break t}else{n(h,m);break}else t(h,m);m=m.sibling}S=gf(_,h.mode,S),S.return=h,h=S}return r(h);case bs:return _=Sa(_),g(h,m,_,S)}if(Oo(_))return v(h,m,_,S);if(wo(_)){if(A=wo(_),typeof A!="function")throw Error(j(150));return _=A.call(_),b(h,m,_,S)}if(typeof _.then=="function")return g(h,m,bc(_),S);if(_.$$typeof===Ji)return g(h,m,Sc(h,_),S);Mc(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,m!==null&&m.tag===6?(n(h,m.sibling),S=s(m,_),S.return=h,h=S):(n(h,m),S=mf(_,h.mode,S),S.return=h,h=S),r(h)):n(h,m)}return function(h,m,_,S){try{sl=0;var A=g(h,m,_,S);return Ar=null,A}catch(C){if(C===kr||C===wu)throw C;var w=Nn(29,C,null,h.mode);return w.lanes=S,w.return=h,w}}}var Da=$_(!0),ty=$_(!1),Ms=!1;function Qp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ap(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Os(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ps(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,($t&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Qc(e),W_(e,null,n),t}return Au(e,i,t,n),Qc(e)}function ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,__(e,n)}}function _f(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var rp=!1;function Xo(){if(rp){var e=Er;if(e!==null)throw e}}function Wo(e,t,n,i){rp=!1;var s=e.updateQueue;Ms=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,d=c=l=null,o=a;do{var u=o.lane&-536870913,f=u!==o.lane;if(f?(qt&u)===u:(i&u)===u){u!==0&&u===Nr&&(rp=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,b=o;u=t;var g=n;switch(b.tag){case 1:if(v=b.payload,typeof v=="function"){p=v.call(g,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,u=typeof v=="function"?v.call(g,p,u):v,u==null)break t;p=Se({},p,u);break t;case 2:Ms=!0}}u=o.callback,u!==null&&(e.flags|=64,f&&(e.flags|=8192),f=s.callbacks,f===null?s.callbacks=[u]:f.push(u))}else f={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=f,l=p):d=d.next=f,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;f=o,o=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);d===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=d,a===null&&(s.shared.lanes=0),Ws|=r,e.lanes=r,e.memoizedState=p}}function ey(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function ny(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ey(n[e],t)}var Lr=Ai(null),nu=Ai(0);function hv(e,t){e=as,ge(nu,e),ge(Lr,t),as=e|t.baseLanes}function op(){ge(nu,as),ge(Lr,Lr.current)}function $p(){as=nu.current,Ke(Lr),Ke(nu)}var zn=Ai(null),ei=null;function Es(e){var t=e.alternate;ge(Le,Le.current&1),ge(zn,e),ei===null&&(t===null||Lr.current!==null||t.memoizedState!==null)&&(ei=e)}function lp(e){ge(Le,Le.current),ge(zn,e),ei===null&&(ei=e)}function iy(e){e.tag===22?(ge(Le,Le.current),ge(zn,e),ei===null&&(ei=e)):As(e)}function As(){ge(Le,Le.current),ge(zn,zn.current)}function Un(e){Ke(zn),ei===e&&(ei=null),Ke(Le)}var Le=Ai(0);function iu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||wp(n)||Cp(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ns=0,Pt=null,ue=null,Fe=null,su=!1,wr=!1,Ua=!1,au=0,al=0,Cr=null,D1=0;function Ce(){throw Error(j(321))}function tm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fn(e[n],t[n]))return!1;return!0}function em(e,t,n,i,s,a){return ns=a,Pt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ct.H=e===null||e.memoizedState===null?Iy:dm,Ua=!1,a=n(i,s),Ua=!1,wr&&(a=ay(t,n,i,s)),sy(e),a}function sy(e){Ct.H=rl;var t=ue!==null&&ue.next!==null;if(ns=0,Fe=ue=Pt=null,su=!1,al=0,Cr=null,t)throw Error(j(300));e===null||He||(e=e.dependencies,e!==null&&tu(e)&&(He=!0))}function ay(e,t,n,i){Pt=e;var s=0;do{if(wr&&(Cr=null),al=0,wr=!1,25<=s)throw Error(j(301));if(s+=1,Fe=ue=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ct.H=Oy,a=t(n,i)}while(wr);return a}function U1(){var e=Ct.H,t=e.useState()[0];return t=typeof t.then=="function"?yl(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(Pt.flags|=1024),t}function nm(){var e=au!==0;return au=0,e}function im(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function sm(e){if(su){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}su=!1}ns=0,Fe=ue=Pt=null,wr=!1,al=au=0,Cr=null}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Pt.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ie(){if(ue===null){var e=Pt.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Fe===null?Pt.memoizedState:Fe.next;if(t!==null)Fe=t,ue=e;else{if(e===null)throw Pt.alternate===null?Error(j(467)):Error(j(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Fe===null?Pt.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yl(e){var t=al;return al+=1,Cr===null&&(Cr=[]),e=Q_(Cr,e,t),t=Pt,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,Ct.H=t===null||t.memoizedState===null?Iy:dm),e}function Ru(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yl(e);if(e.$$typeof===Ji)return sn(e)}throw Error(j(438,String(e)))}function am(e){var t=null,n=Pt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Pt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Cu(),Pt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=gM;return t.index++,n}function is(e,t){return typeof t=="function"?t(e):t}function Bc(e){var t=Ie();return rm(t,ue,e)}function rm(e,t,n){var i=e.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,d=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(qt&p)===p:(ns&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Nr&&(d=!0);else if((ns&u)===u){c=c.next,u===Nr&&(d=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Pt.lanes|=u,Ws|=u;p=c.action,Ua&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Pt.lanes|=p,Ws|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Fn(a,e.memoizedState)&&(He=!0,d&&(n=Er,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function yf(e){var t=Ie(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Fn(a,t.memoizedState)||(He=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function ry(e,t,n){var i=Pt,s=Ie(),a=Yt;if(a){if(n===void 0)throw Error(j(407));n=n()}else n=t();var r=!Fn((ue||s).memoizedState,n);if(r&&(s.memoizedState=n,He=!0),s=s.queue,om(cy.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,Ir(9,{destroy:void 0},ly.bind(null,i,s,n,t),null),fe===null)throw Error(j(349));a||(ns&127)!==0||oy(i,t,n)}return n}function oy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pt.updateQueue,t===null?(t=Cu(),Pt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ly(e,t,n,i){t.value=n,t.getSnapshot=i,uy(t)&&hy(e)}function cy(e,t,n){return n(function(){uy(t)&&hy(e)})}function uy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fn(e,n)}catch{return!0}}function hy(e){var t=Pa(e,2);t!==null&&Mn(t,e,2)}function cp(e){var t=gn();if(typeof e=="function"){var n=e;if(e=n(),Ua){Cs(!0);try{n()}finally{Cs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t}function dy(e,t,n,i){return e.baseState=n,rm(e,ue,typeof i=="function"?i:is)}function N1(e,t,n,i,s){if(Uu(e))throw Error(j(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ct.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,fy(t,a)):(a.next=n.next,t.pending=n.next=a)}}function fy(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ct.T,r={};Ct.T=r;try{var o=n(s,i),l=Ct.S;l!==null&&l(r,o),dv(e,t,o)}catch(c){up(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ct.T=a}}else try{a=n(s,i),dv(e,t,a)}catch(c){up(e,t,c)}}function dv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){fv(e,t,i)},function(i){return up(e,t,i)}):fv(e,t,n)}function fv(e,t,n){t.status="fulfilled",t.value=n,py(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,fy(e,n)))}function up(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,py(t),t=t.next;while(t!==i)}e.action=null}function py(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function my(e,t){return t}function pv(e,t){if(Yt){var n=fe.formState;if(n!==null){t:{var i=Pt;if(Yt){if(xe){e:{for(var s=xe,a=ti;s.nodeType!==8;){if(!a){s=null;break e}if(s=ni(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){xe=ni(s.nextSibling),i=s.data==="F!";break t}}ks(i)}i=!1}i&&(t=n[0])}}return n=gn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:my,lastRenderedState:t},n.queue=i,n=Uy.bind(null,Pt,i),i.dispatch=n,i=cp(!1),a=hm.bind(null,Pt,!1,i.queue),i=gn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=N1.bind(null,Pt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function mv(e){var t=Ie();return gy(t,ue,e)}function gy(e,t,n){if(t=rm(e,t,my)[0],e=Bc(is)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=yl(t)}catch(r){throw r===kr?wu:r}else i=t;t=Ie();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Pt.flags|=2048,Ir(9,{destroy:void 0},L1.bind(null,s,n),null)),[i,a,e]}function L1(e,t){e.action=t}function gv(e){var t=Ie(),n=ue;if(n!==null)return gy(t,n,e);Ie(),t=t.memoizedState,n=Ie();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ir(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Pt.updateQueue,t===null&&(t=Cu(),Pt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function vy(){return Ie().memoizedState}function Fc(e,t,n,i){var s=gn();Pt.flags|=e,s.memoizedState=Ir(1|t,{destroy:void 0},n,i===void 0?null:i)}function Du(e,t,n,i){var s=Ie();i=i===void 0?null:i;var a=s.memoizedState.inst;ue!==null&&i!==null&&tm(i,ue.memoizedState.deps)?s.memoizedState=Ir(t,a,n,i):(Pt.flags|=e,s.memoizedState=Ir(1|t,a,n,i))}function vv(e,t){Fc(8390656,8,e,t)}function om(e,t){Du(2048,8,e,t)}function I1(e){Pt.flags|=4;var t=Pt.updateQueue;if(t===null)t=Cu(),Pt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _y(e){var t=Ie().memoizedState;return I1({ref:t,nextImpl:e}),function(){if(($t&2)!==0)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function yy(e,t){return Du(4,2,e,t)}function xy(e,t){return Du(4,4,e,t)}function Sy(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function by(e,t,n){n=n!=null?n.concat([e]):null,Du(4,4,Sy.bind(null,t,e),n)}function lm(){}function My(e,t){var n=Ie();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&tm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ty(e,t){var n=Ie();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&tm(t,i[1]))return i[0];if(i=e(),Ua){Cs(!0);try{e()}finally{Cs(!1)}}return n.memoizedState=[i,t],i}function cm(e,t,n){return n===void 0||(ns&1073741824)!==0&&(qt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=dx(),Pt.lanes|=e,Ws|=e,n)}function Ey(e,t,n,i){return Fn(n,t)?n:Lr.current!==null?(e=cm(e,n,i),Fn(e,t)||(He=!0),e):(ns&42)===0||(ns&1073741824)!==0&&(qt&261930)===0?(He=!0,e.memoizedState=n):(e=dx(),Pt.lanes|=e,Ws|=e,t)}function Ay(e,t,n,i,s){var a=te.p;te.p=a!==0&&8>a?a:8;var r=Ct.T,o={};Ct.T=o,hm(e,!1,t,n);try{var l=s(),c=Ct.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=R1(l,i);qo(e,t,d,Bn(e))}else qo(e,t,i,Bn(e))}catch(p){qo(e,t,{then:function(){},status:"rejected",reason:p},Bn())}finally{te.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ct.T=r}}function O1(){}function hp(e,t,n,i){if(e.tag!==5)throw Error(j(476));var s=wy(e).queue;Ay(e,s,t,Ma,n===null?O1:function(){return Cy(e),n(i)})}function wy(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ma,baseState:Ma,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:Ma},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cy(e){var t=wy(e);t.next===null&&(t=e.alternate.memoizedState),qo(e,t.next.queue,{},Bn())}function um(){return sn(cl)}function Ry(){return Ie().memoizedState}function Dy(){return Ie().memoizedState}function P1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Bn();e=Os(n);var i=Ps(t,e,n);i!==null&&(Mn(i,t,n),ko(i,t,n)),t={cache:Jp()},e.payload=t;return}t=t.return}}function B1(e,t,n){var i=Bn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Uu(e)?Ny(t,n):(n=Wp(e,t,n,i),n!==null&&(Mn(n,e,i),Ly(n,t,i)))}function Uy(e,t,n){var i=Bn();qo(e,t,n,i)}function qo(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uu(e))Ny(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Fn(o,r))return Au(e,t,s,0),fe===null&&Eu(),!1}catch{}if(n=Wp(e,t,s,i),n!==null)return Mn(n,e,i),Ly(n,t,i),!0}return!1}function hm(e,t,n,i){if(i={lane:2,revertLane:xm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Uu(e)){if(t)throw Error(j(479))}else t=Wp(e,n,i,2),t!==null&&Mn(t,e,2)}function Uu(e){var t=e.alternate;return e===Pt||t!==null&&t===Pt}function Ny(e,t){wr=su=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ly(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,__(e,n)}}var rl={readContext:sn,use:Ru,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce};rl.useEffectEvent=Ce;var Iy={readContext:sn,use:Ru,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:sn,useEffect:vv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Fc(4194308,4,Sy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fc(4194308,4,e,t)},useInsertionEffect:function(e,t){Fc(4,2,e,t)},useMemo:function(e,t){var n=gn();t=t===void 0?null:t;var i=e();if(Ua){Cs(!0);try{e()}finally{Cs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=gn();if(n!==void 0){var s=n(t);if(Ua){Cs(!0);try{n(t)}finally{Cs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=B1.bind(null,Pt,e),[i.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:function(e){e=cp(e);var t=e.queue,n=Uy.bind(null,Pt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:lm,useDeferredValue:function(e,t){var n=gn();return cm(n,e,t)},useTransition:function(){var e=cp(!1);return e=Ay.bind(null,Pt,e.queue,!0,!1),gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Pt,s=gn();if(Yt){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),fe===null)throw Error(j(349));(qt&127)!==0||oy(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,vv(cy.bind(null,i,a,e),[e]),i.flags|=2048,Ir(9,{destroy:void 0},ly.bind(null,i,a,n,t),null),n},useId:function(){var e=gn(),t=fe.identifierPrefix;if(Yt){var n=Mi,i=bi;n=(i&~(1<<32-Pn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=au++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=D1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:um,useFormState:pv,useActionState:pv,useOptimistic:function(e){var t=gn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=hm.bind(null,Pt,!0,n),n.dispatch=t,[e,t]},useMemoCache:am,useCacheRefresh:function(){return gn().memoizedState=P1.bind(null,Pt)},useEffectEvent:function(e){var t=gn(),n={impl:e};return t.memoizedState=n,function(){if(($t&2)!==0)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},dm={readContext:sn,use:Ru,useCallback:My,useContext:sn,useEffect:om,useImperativeHandle:by,useInsertionEffect:yy,useLayoutEffect:xy,useMemo:Ty,useReducer:Bc,useRef:vy,useState:function(){return Bc(is)},useDebugValue:lm,useDeferredValue:function(e,t){var n=Ie();return Ey(n,ue.memoizedState,e,t)},useTransition:function(){var e=Bc(is)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:yl(e),t]},useSyncExternalStore:ry,useId:Ry,useHostTransitionStatus:um,useFormState:mv,useActionState:mv,useOptimistic:function(e,t){var n=Ie();return dy(n,ue,e,t)},useMemoCache:am,useCacheRefresh:Dy};dm.useEffectEvent=_y;var Oy={readContext:sn,use:Ru,useCallback:My,useContext:sn,useEffect:om,useImperativeHandle:by,useInsertionEffect:yy,useLayoutEffect:xy,useMemo:Ty,useReducer:yf,useRef:vy,useState:function(){return yf(is)},useDebugValue:lm,useDeferredValue:function(e,t){var n=Ie();return ue===null?cm(n,e,t):Ey(n,ue.memoizedState,e,t)},useTransition:function(){var e=yf(is)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:yl(e),t]},useSyncExternalStore:ry,useId:Ry,useHostTransitionStatus:um,useFormState:gv,useActionState:gv,useOptimistic:function(e,t){var n=Ie();return ue!==null?dy(n,ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:am,useCacheRefresh:Dy};Oy.useEffectEvent=_y;function xf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Bn(),s=Os(i);s.payload=t,n!=null&&(s.callback=n),t=Ps(e,s,i),t!==null&&(Mn(t,e,i),ko(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Bn(),s=Os(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ps(e,s,i),t!==null&&(Mn(t,e,i),ko(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Bn(),i=Os(n);i.tag=2,t!=null&&(i.callback=t),t=Ps(e,i,n),t!==null&&(Mn(t,e,n),ko(t,e,n))}};function _v(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!el(n,i)||!el(s,a):!0}function yv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&dp.enqueueReplaceState(t,t.state,null)}function Na(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Se({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Py(e){Kc(e)}function By(e){console.error(e)}function Fy(e){Kc(e)}function ru(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function xv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function fp(e,t,n){return n=Os(n),n.tag=3,n.payload={element:null},n.callback=function(){ru(e,t)},n}function zy(e){return e=Os(e),e.tag=3,e}function Vy(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){xv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){xv(t,n,i),typeof s!="function"&&(Bs===null?Bs=new Set([this]):Bs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function F1(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Gr(t,n,s,!0),n=zn.current,n!==null){switch(n.tag){case 31:case 13:return ei===null?hu():n.alternate===null&&Re===0&&(Re=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===eu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Uf(e,i,s)),!1;case 22:return n.flags|=65536,i===eu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Uf(e,i,s)),!1}throw Error(j(435,n.tag))}return Uf(e,i,s),hu(),!1}if(Yt)return t=zn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==tp&&(e=Error(j(422),{cause:i}),il($n(e,n)))):(i!==tp&&(t=Error(j(423),{cause:i}),il($n(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=$n(i,n),s=fp(e.stateNode,i,s),_f(e,s),Re!==4&&(Re=2)),!1;var a=Error(j(520),{cause:i});if(a=$n(a,n),Jo===null?Jo=[a]:Jo.push(a),Re!==4&&(Re=2),t===null)return!0;i=$n(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=fp(n.stateNode,i,e),_f(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Bs===null||!Bs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=zy(s),Vy(s,e,n,i),_f(n,s),!1}n=n.return}while(n!==null);return!1}var fm=Error(j(461)),He=!1;function tn(e,t,n,i){t.child=e===null?ty(t,null,n,i):Da(t,e.child,n,i)}function Sv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ra(t),i=em(e,t,n,r,a,s),o=nm(),e!==null&&!He?(im(e,t,s),ss(e,t,s)):(Yt&&o&&Yp(t),t.flags|=1,tn(e,t,i,s),t.child)}function bv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!qp(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Hy(e,t,a,i,s)):(e=Oc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!pm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:el,n(r,i)&&e.ref===t.ref)return ss(e,t,s)}return t.flags|=1,e=Qi(a,i),e.ref=t.ref,e.return=t,t.child=e}function Hy(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(el(a,i)&&e.ref===t.ref)if(He=!1,t.pendingProps=i=a,pm(e,s))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,ss(e,t,s)}return pp(e,t,n,i,s)}function Gy(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Mv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pc(t,a!==null?a.cachePool:null),a!==null?hv(t,a):op(),iy(t);else return i=t.lanes=536870912,Mv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Pc(t,a.cachePool),hv(t,a),As(t),t.memoizedState=null):(e!==null&&Pc(t,null),op(),As(t));return tn(e,t,s,n),t.child}function Bo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Mv(e,t,n,i,s){var a=jp();return a=a===null?null:{parent:Ve._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Pc(t,null),op(),iy(t),e!==null&&Gr(e,t,i,!0),t.childLanes=s,null}function zc(e,t){return t=ou({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Tv(e,t,n){return Da(t,e.child,null,n),e=zc(t,t.pendingProps),e.flags|=2,Un(t),t.memoizedState=null,e}function z1(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Yt){if(i.mode==="hidden")return e=zc(t,i),t.lanes=536870912,Bo(null,e);if(lp(t),(e=xe)?(e=Ix(e,ti),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gs!==null?{id:bi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},n=Y_(e),n.return=t,t.child=n,nn=t,xe=null)):e=null,e===null)throw ks(t);return t.lanes=536870912,null}return zc(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(lp(t),s)if(t.flags&256)t.flags&=-257,t=Tv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(He||Gr(e,t,n,!1),s=(n&e.childLanes)!==0,He||s){if(i=fe,i!==null&&(r=y_(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Pa(e,r),Mn(i,e,r),fm;hu(),t=Tv(e,t,n)}else e=a.treeContext,xe=ni(r.nextSibling),nn=t,Yt=!0,Is=null,ti=!1,e!==null&&J_(t,e),t=zc(t,i),t.flags|=4096;return t}return e=Qi(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pp(e,t,n,i,s){return Ra(t),n=em(e,t,n,i,void 0,s),i=nm(),e!==null&&!He?(im(e,t,s),ss(e,t,s)):(Yt&&i&&Yp(t),t.flags|=1,tn(e,t,n,s),t.child)}function Ev(e,t,n,i,s,a){return Ra(t),t.updateQueue=null,n=ay(t,i,n,s),sy(e),i=nm(),e!==null&&!He?(im(e,t,a),ss(e,t,a)):(Yt&&i&&Yp(t),t.flags|=1,tn(e,t,n,a),t.child)}function Av(e,t,n,i,s){if(Ra(t),t.stateNode===null){var a=_r,r=n.contextType;typeof r=="object"&&r!==null&&(a=sn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=dp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Qp(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?sn(r):_r,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(xf(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&dp.enqueueReplaceState(a,a.state,null),Wo(t,i,a,s),Xo(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Na(n,o);a.props=l;var c=a.context,d=n.contextType;r=_r,typeof d=="object"&&d!==null&&(r=sn(d));var p=n.getDerivedStateFromProps;d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&yv(t,a,i,r),Ms=!1;var u=t.memoizedState;a.state=u,Wo(t,i,a,s),Xo(),c=t.memoizedState,o||u!==c||Ms?(typeof p=="function"&&(xf(t,n,p,i),c=t.memoizedState),(l=Ms||_v(t,n,l,i,u,c,r))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,ap(e,t),r=t.memoizedProps,d=Na(n,r),a.props=d,p=t.pendingProps,u=a.context,c=n.contextType,l=_r,typeof c=="object"&&c!==null&&(l=sn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&yv(t,a,i,l),Ms=!1,u=t.memoizedState,a.state=u,Wo(t,i,a,s),Xo();var f=t.memoizedState;r!==p||u!==f||Ms||e!==null&&e.dependencies!==null&&tu(e.dependencies)?(typeof o=="function"&&(xf(t,n,o,i),f=t.memoizedState),(d=Ms||_v(t,n,d,i,u,f,l)||e!==null&&e.dependencies!==null&&tu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,f,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,f,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=f),a.props=i,a.state=f,a.context=l,i=d):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Vc(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Da(t,e.child,null,s),t.child=Da(t,null,n,s)):tn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ss(e,t,s),e}function wv(e,t,n,i){return Ca(),t.flags|=256,tn(e,t,n,i),t.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(e){return{baseLanes:e,cachePool:K_()}}function Mf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ln),e}function ky(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Yt){if(s?Es(t):As(t),(e=xe)?(e=Ix(e,ti),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gs!==null?{id:bi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},n=Y_(e),n.return=t,t.child=n,nn=t,xe=null)):e=null,e===null)throw ks(t);return Cp(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(As(t),s=t.mode,o=ou({mode:"hidden",children:o},s),i=Ta(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=bf(n),i.childLanes=Mf(e,r,n),t.memoizedState=Sf,Bo(null,i)):(Es(t),mp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Es(t),t.flags&=-257,t=Tf(e,t,n)):t.memoizedState!==null?(As(t),t.child=e.child,t.flags|=128,t=null):(As(t),o=i.fallback,s=t.mode,i=ou({mode:"visible",children:i.children},s),o=Ta(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Da(t,e.child,null,n),i=t.child,i.memoizedState=bf(n),i.childLanes=Mf(e,r,n),t.memoizedState=Sf,t=Bo(null,i));else if(Es(t),Cp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(j(419)),i.stack="",i.digest=r,il({value:i,source:null,stack:null}),t=Tf(e,t,n)}else if(He||Gr(e,t,n,!1),r=(n&e.childLanes)!==0,He||r){if(r=fe,r!==null&&(i=y_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Pa(e,i),Mn(r,e,i),fm;wp(o)||hu(),t=Tf(e,t,n)}else wp(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,xe=ni(o.nextSibling),nn=t,Yt=!0,Is=null,ti=!1,e!==null&&J_(t,e),t=mp(t,i.children),t.flags|=4096);return t}return s?(As(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=Qi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Qi(c,o):(o=Ta(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Bo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=bf(n):(s=o.cachePool,s!==null?(l=Ve._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=K_(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Mf(e,r,n),t.memoizedState=Sf,Bo(e.child,i)):(Es(t),n=e.child,e=n.sibling,n=Qi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function mp(e,t){return t=ou({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ou(e,t){return e=Nn(22,e,null,t),e.lanes=0,e}function Tf(e,t,n){return Da(t,e.child,null,n),e=mp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),np(e.return,t,n)}function Ef(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Xy(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Le.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ge(Le,r),tn(e,t,i,n),i=Yt?nl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cv(e,n,t);else if(e.tag===19)Cv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&iu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Ef(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&iu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Ef(t,!0,n,null,a,i);break;case"together":Ef(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ss(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ws|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Gr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Qi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&tu(e)))}function V1(e,t,n){switch(t.tag){case 3:Yc(t,t.stateNode.containerInfo),Ts(t,Ve,e.memoizedState.cache),Ca();break;case 27:case 5:kf(t);break;case 4:Yc(t,t.stateNode.containerInfo);break;case 10:Ts(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lp(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Es(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ky(e,t,n):(Es(t),e=ss(e,t,n),e!==null?e.sibling:null);Es(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Gr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Xy(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(Le,Le.current),i)break;return null;case 22:return t.lanes=0,Gy(e,t,n,t.pendingProps);case 24:Ts(t,Ve,e.memoizedState.cache)}return ss(e,t,n)}function Wy(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!pm(e,n)&&(t.flags&128)===0)return He=!1,V1(e,t,n);He=(e.flags&131072)!==0}else He=!1,Yt&&(t.flags&1048576)!==0&&Z_(t,nl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Sa(t.elementType),t.type=e,typeof e=="function")qp(e)?(i=Na(e,i),t.tag=1,t=Av(null,t,e,i,n)):(t.tag=0,t=pp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Np){t.tag=11,t=Sv(null,t,e,i,n);break t}else if(s===Lp){t.tag=14,t=bv(null,t,e,i,n);break t}}throw t=Hf(e)||e,Error(j(306,t,""))}}return t;case 0:return pp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Na(i,t.pendingProps),Av(e,t,i,s,n);case 3:t:{if(Yc(t,t.stateNode.containerInfo),e===null)throw Error(j(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,ap(e,t),Wo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ts(t,Ve,i),i!==a.cache&&ip(t,[Ve],n,!0),Xo(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=wv(e,t,i,n);break t}else if(i!==s){s=$n(Error(j(424)),t),il(s),t=wv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,xe=ni(e.firstChild),nn=t,Yt=!0,Is=null,ti=!0,n=ty(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ca(),i===s){t=ss(e,t,n);break t}tn(e,t,i,n)}t=t.child}return t;case 26:return Vc(e,t),e===null?(n=jv(t.type,null,t.pendingProps,null))?t.memoizedState=n:Yt||(n=t.type,e=t.pendingProps,i=mu(Ls.current).createElement(n),i[en]=t,i[Tn]=e,an(i,n,e),je(i),t.stateNode=i):t.memoizedState=jv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return kf(t),e===null&&Yt&&(i=t.stateNode=Ox(t.type,t.pendingProps,Ls.current),nn=t,ti=!0,s=xe,Ys(t.type)?(Rp=s,xe=ni(i.firstChild)):xe=s),tn(e,t,t.pendingProps.children,n),Vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Yt&&((s=i=xe)&&(i=pT(i,t.type,t.pendingProps,ti),i!==null?(t.stateNode=i,nn=t,xe=ni(i.firstChild),ti=!1,s=!0):s=!1),s||ks(t)),kf(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Ep(s,a)?i=null:r!==null&&Ep(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=em(e,t,U1,null,null,n),cl._currentValue=s),Vc(e,t),tn(e,t,i,n),t.child;case 6:return e===null&&Yt&&((e=n=xe)&&(n=mT(n,t.pendingProps,ti),n!==null?(t.stateNode=n,nn=t,xe=null,e=!0):e=!1),e||ks(t)),null;case 13:return ky(e,t,n);case 4:return Yc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Da(t,null,i,n):tn(e,t,i,n),t.child;case 11:return Sv(e,t,t.type,t.pendingProps,n);case 7:return tn(e,t,t.pendingProps,n),t.child;case 8:return tn(e,t,t.pendingProps.children,n),t.child;case 12:return tn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ts(t,t.type,i.value),tn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ra(t),s=sn(s),i=i(s),t.flags|=1,tn(e,t,i,n),t.child;case 14:return bv(e,t,t.type,t.pendingProps,n);case 15:return Hy(e,t,t.type,t.pendingProps,n);case 19:return Xy(e,t,n);case 31:return z1(e,t,n);case 22:return Gy(e,t,n,t.pendingProps);case 24:return Ra(t),i=sn(Ve),e===null?(s=jp(),s===null&&(s=fe,a=Jp(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Qp(t),Ts(t,Ve,s)):((e.lanes&n)!==0&&(ap(e,t),Wo(t,null,null,n),Xo()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ts(t,Ve,i)):(i=a.cache,Ts(t,Ve,i),i!==s.cache&&ip(t,[Ve],n,!0))),tn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function ki(e){e.flags|=4}function Af(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(mx())e.flags|=8192;else throw Aa=eu,Kp}else e.flags&=-16777217}function Rv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fx(t))if(mx())e.flags|=8192;else throw Aa=eu,Kp}function Tc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?g_():536870912,e.lanes|=t,Or|=t)}function Do(e,t){if(!Yt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function H1(e,t,n){var i=t.pendingProps;switch(Zp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return ye(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),$i(Ve),Rr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(rr(t)?ki(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vf())),ye(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(ki(t),a!==null?(ye(t),Rv(t,a)):(ye(t),Af(t,s,null,i,n))):a?a!==e.memoizedState?(ki(t),ye(t),Rv(t,a)):(ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ki(t),ye(t),Af(t,s,e,i,n)),null;case 27:if(Zc(t),n=Ls.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ki(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return ye(t),null}e=Ei.current,rr(t)?sv(t,e):(e=Ox(s,i,n),t.stateNode=e,ki(t))}return ye(t),null;case 5:if(Zc(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ki(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return ye(t),null}if(a=Ei.current,rr(t))sv(t,a);else{var r=mu(Ls.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[en]=t,a[Tn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(an(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ki(t)}}return ye(t),Af(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ki(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(e=Ls.current,rr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=nn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[en]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Ux(e.nodeValue,n)),e||ks(t,!0)}else e=mu(e).createTextNode(i),e[en]=t,t.stateNode=e}return ye(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=rr(t),n!==null){if(e===null){if(!i)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[en]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ye(t),e=!1}else n=vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Un(t),t):(Un(t),null);if((t.flags&128)!==0)throw Error(j(558))}return ye(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=rr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[en]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ye(t),s=!1}else s=vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Un(t),t):(Un(t),null)}return Un(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Tc(t,t.updateQueue),ye(t),null);case 4:return Rr(),e===null&&Sm(t.stateNode.containerInfo),ye(t),null;case 10:return $i(t.type),ye(t),null;case 19:if(Ke(Le),i=t.memoizedState,i===null)return ye(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Do(i,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=iu(e),a!==null){for(t.flags|=128,Do(i,!1),e=a.updateQueue,t.updateQueue=e,Tc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)q_(n,e),n=n.sibling;return ge(Le,Le.current&1|2),Yt&&Yi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&In()>cu&&(t.flags|=128,s=!0,Do(i,!1),t.lanes=4194304)}else{if(!s)if(e=iu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Tc(t,e),Do(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Yt)return ye(t),null}else 2*In()-i.renderingStartTime>cu&&n!==536870912&&(t.flags|=128,s=!0,Do(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=In(),e.sibling=null,n=Le.current,ge(Le,s?n&1|2:n&1),Yt&&Yi(t,i.treeForkCount),e):(ye(t),null);case 22:case 23:return Un(t),$p(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),n=t.updateQueue,n!==null&&Tc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Ke(Ea),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$i(Ve),ye(t),null;case 25:return null;case 30:return null}throw Error(j(156,t.tag))}function G1(e,t){switch(Zp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(Ve),Rr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Zc(t),null;case 31:if(t.memoizedState!==null){if(Un(t),t.alternate===null)throw Error(j(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Un(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ke(Le),null;case 4:return Rr(),null;case 10:return $i(t.type),null;case 22:case 23:return Un(t),$p(),e!==null&&Ke(Ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $i(Ve),null;case 25:return null;default:return null}}function qy(e,t){switch(Zp(t),t.tag){case 3:$i(Ve),Rr();break;case 26:case 27:case 5:Zc(t);break;case 4:Rr();break;case 31:t.memoizedState!==null&&Un(t);break;case 13:Un(t);break;case 19:Ke(Le);break;case 10:$i(t.type);break;case 22:case 23:Un(t),$p(),e!==null&&Ke(Ea);break;case 24:$i(Ve)}}function xl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){re(t,t.return,o)}}function Xs(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(d){re(s,l,d)}}}i=i.next}while(i!==a)}}catch(d){re(t,t.return,d)}}function Yy(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ny(t,n)}catch(i){re(e,e.return,i)}}}function Zy(e,t,n){n.props=Na(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){re(e,t,i)}}function Yo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){re(e,t,s)}}function Ti(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){re(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){re(e,t,s)}else n.current=null}function Jy(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){re(e,e.return,s)}}function wf(e,t,n){try{var i=e.stateNode;lT(i,e.type,n,t),i[Tn]=t}catch(s){re(e,e.return,s)}}function jy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ys(e.type)||e.tag===4}function Cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||jy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ys(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji));else if(i!==4&&(i===27&&Ys(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(gp(e,t,n),e=e.sibling;e!==null;)gp(e,t,n),e=e.sibling}function lu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ys(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}function Ky(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);an(t,i,n),t[en]=e,t[Tn]=n}catch(a){re(e,e.return,a)}}var Zi=!1,ze=!1,Rf=!1,Dv=typeof WeakSet=="function"?WeakSet:Set,Je=null;function k1(e,t){if(e=e.containerInfo,Mp=yu,e=F_(e),kp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,d=0,p=e,u=null;e:for(;;){for(var f;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(f=p.firstChild)!==null;)u=p,p=f;for(;;){if(p===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++d===i&&(l=r),(f=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=f}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tp={focusedElem:e,selectionRange:n},yu=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var v=Na(n.type,s);e=i.getSnapshotBeforeUpdate(v,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(b){re(n,n.return,b)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ap(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ap(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(j(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function Qy(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Wi(e,n),i&4&&xl(5,n);break;case 1:if(Wi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){re(n,n.return,r)}else{var s=Na(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){re(n,n.return,r)}}i&64&&Yy(n),i&512&&Yo(n,n.return);break;case 3:if(Wi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ny(e,t)}catch(r){re(n,n.return,r)}}break;case 27:t===null&&i&4&&Ky(n);case 26:case 5:Wi(e,n),t===null&&i&4&&Jy(n),i&512&&Yo(n,n.return);break;case 12:Wi(e,n);break;case 31:Wi(e,n),i&4&&ex(e,n);break;case 13:Wi(e,n),i&4&&nx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Q1.bind(null,n),gT(e,n))));break;case 22:if(i=n.memoizedState!==null||Zi,!i){t=t!==null&&t.memoizedState!==null||ze,s=Zi;var a=ze;Zi=i,(ze=t)&&!a?qi(e,n,(n.subtreeFlags&8772)!==0):Wi(e,n),Zi=s,ze=a}break;case 30:break;default:Wi(e,n)}}function $y(e){var t=e.alternate;t!==null&&(e.alternate=null,$y(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,Sn=!1;function Xi(e,t,n){for(n=n.child;n!==null;)tx(e,t,n),n=n.sibling}function tx(e,t,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(fl,n)}catch{}switch(n.tag){case 26:ze||Ti(n,t),Xi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ze||Ti(n,t);var i=Ee,s=Sn;Ys(n.type)&&(Ee=n.stateNode,Sn=!1),Xi(e,t,n),Ko(n.stateNode),Ee=i,Sn=s;break;case 5:ze||Ti(n,t);case 6:if(i=Ee,s=Sn,Ee=null,Xi(e,t,n),Ee=i,Sn=s,Ee!==null)if(Sn)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(n.stateNode)}catch(a){re(n,t,a)}else try{Ee.removeChild(n.stateNode)}catch(a){re(n,t,a)}break;case 18:Ee!==null&&(Sn?(e=Ee,Wv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),zr(e)):Wv(Ee,n.stateNode));break;case 4:i=Ee,s=Sn,Ee=n.stateNode.containerInfo,Sn=!0,Xi(e,t,n),Ee=i,Sn=s;break;case 0:case 11:case 14:case 15:Xs(2,n,t),ze||Xs(4,n,t),Xi(e,t,n);break;case 1:ze||(Ti(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Zy(n,t,i)),Xi(e,t,n);break;case 21:Xi(e,t,n);break;case 22:ze=(i=ze)||n.memoizedState!==null,Xi(e,t,n),ze=i;break;default:Xi(e,t,n)}}function ex(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zr(e)}catch(n){re(t,t.return,n)}}}function nx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zr(e)}catch(n){re(t,t.return,n)}}function X1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Dv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Dv),t;default:throw Error(j(435,e.tag))}}function Ec(e,t){var n=X1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=$1.bind(null,e,i);i.then(s,s)}})}function yn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Ys(o.type)){Ee=o.stateNode,Sn=!1;break t}break;case 5:Ee=o.stateNode,Sn=!1;break t;case 3:case 4:Ee=o.stateNode.containerInfo,Sn=!0;break t}o=o.return}if(Ee===null)throw Error(j(160));tx(a,r,s),Ee=null,Sn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ix(t,e),t=t.sibling}var ci=null;function ix(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yn(t,e),xn(e),i&4&&(Xs(3,e,e.return),xl(3,e),Xs(5,e,e.return));break;case 1:yn(t,e),xn(e),i&512&&(ze||n===null||Ti(n,n.return)),i&64&&Zi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=ci;if(yn(t,e),xn(e),i&512&&(ze||n===null||Ti(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[gl]||a[en]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),an(a,i,n),a[en]=e,je(a),i=a;break t;case"link":var r=Qv("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),an(a,i,n),s.head.appendChild(a);break;case"meta":if(r=Qv("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),an(a,i,n),s.head.appendChild(a);break;default:throw Error(j(468,i))}a[en]=e,je(a),i=a}e.stateNode=i}else $v(s,e.type,e.stateNode);else e.stateNode=Kv(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?$v(s,e.type,e.stateNode):Kv(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&wf(e,e.memoizedProps,n.memoizedProps)}break;case 27:yn(t,e),xn(e),i&512&&(ze||n===null||Ti(n,n.return)),n!==null&&i&4&&wf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(yn(t,e),xn(e),i&512&&(ze||n===null||Ti(n,n.return)),e.flags&32){s=e.stateNode;try{Ur(s,"")}catch(v){re(e,e.return,v)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,wf(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Rf=!0);break;case 6:if(yn(t,e),xn(e),i&4){if(e.stateNode===null)throw Error(j(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){re(e,e.return,v)}}break;case 3:if(kc=null,s=ci,ci=gu(t.containerInfo),yn(t,e),ci=s,xn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{zr(t.containerInfo)}catch(v){re(e,e.return,v)}Rf&&(Rf=!1,sx(e));break;case 4:i=ci,ci=gu(e.stateNode.containerInfo),yn(t,e),xn(e),ci=i;break;case 12:yn(t,e),xn(e);break;case 31:yn(t,e),xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ec(e,i)));break;case 13:yn(t,e),xn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Nu=In()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ec(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Zi,d=ze;if(Zi=c||s,ze=d||l,yn(t,e),ze=d,Zi=c,xn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||Zi||ze||ba(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(v){re(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(v){re(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var f=l.stateNode;s?qv(f,!0):qv(l.stateNode,!1)}catch(v){re(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ec(e,n))));break;case 19:yn(t,e),xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ec(e,i)));break;case 30:break;case 21:break;default:yn(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(jy(i)){n=i;break}i=i.return}if(n==null)throw Error(j(160));switch(n.tag){case 27:var s=n.stateNode,a=Cf(e);lu(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Ur(r,""),n.flags&=-33);var o=Cf(e);lu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Cf(e);gp(e,c,l);break;default:throw Error(j(161))}}catch(d){re(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qy(e,t.alternate,t),t=t.sibling}function ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xs(4,t,t.return),ba(t);break;case 1:Ti(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Zy(t,t.return,n),ba(t);break;case 27:Ko(t.stateNode);case 26:case 5:Ti(t,t.return),ba(t);break;case 22:t.memoizedState===null&&ba(t);break;case 30:ba(t);break;default:ba(t)}e=e.sibling}}function qi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:qi(s,a,n),xl(4,a);break;case 1:if(qi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){re(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)ey(l[s],o)}catch(c){re(i,i.return,c)}}n&&r&64&&Yy(a),Yo(a,a.return);break;case 27:Ky(a);case 26:case 5:qi(s,a,n),n&&i===null&&r&4&&Jy(a),Yo(a,a.return);break;case 12:qi(s,a,n);break;case 31:qi(s,a,n),n&&r&4&&ex(s,a);break;case 13:qi(s,a,n),n&&r&4&&nx(s,a);break;case 22:a.memoizedState===null&&qi(s,a,n),Yo(a,a.return);break;case 30:break;default:qi(s,a,n)}t=t.sibling}}function mm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&_l(n))}function gm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_l(e))}function li(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ax(e,t,n,i),t=t.sibling}function ax(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:li(e,t,n,i),s&2048&&xl(9,t);break;case 1:li(e,t,n,i);break;case 3:li(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_l(e)));break;case 12:if(s&2048){li(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){re(t,t.return,l)}}else li(e,t,n,i);break;case 31:li(e,t,n,i);break;case 13:li(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?li(e,t,n,i):Zo(e,t):a._visibility&2?li(e,t,n,i):(a._visibility|=2,lr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&mm(r,t);break;case 24:li(e,t,n,i),s&2048&&gm(t.alternate,t);break;default:li(e,t,n,i)}}function lr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:lr(a,r,o,l,s),xl(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?lr(a,r,o,l,s):Zo(a,r):(d._visibility|=2,lr(a,r,o,l,s)),s&&c&2048&&mm(r.alternate,r);break;case 24:lr(a,r,o,l,s),s&&c&2048&&gm(r.alternate,r);break;default:lr(a,r,o,l,s)}t=t.sibling}}function Zo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Zo(n,i),s&2048&&mm(i.alternate,i);break;case 24:Zo(n,i),s&2048&&gm(i.alternate,i);break;default:Zo(n,i)}t=t.sibling}}var Fo=8192;function or(e,t,n){if(e.subtreeFlags&Fo)for(e=e.child;e!==null;)rx(e,t,n),e=e.sibling}function rx(e,t,n){switch(e.tag){case 26:or(e,t,n),e.flags&Fo&&e.memoizedState!==null&&CT(n,ci,e.memoizedState,e.memoizedProps);break;case 5:or(e,t,n);break;case 3:case 4:var i=ci;ci=gu(e.stateNode.containerInfo),or(e,t,n),ci=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Fo,Fo=16777216,or(e,t,n),Fo=i):or(e,t,n));break;default:or(e,t,n)}}function ox(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Uo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,cx(i,e)}ox(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lx(e),e=e.sibling}function lx(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&Xs(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hc(e)):Uo(e);break;default:Uo(e)}}function Hc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,cx(i,e)}ox(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xs(8,t,t.return),Hc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Hc(t));break;default:Hc(t)}e=e.sibling}}function cx(e,t){for(;Je!==null;){var n=Je;switch(n.tag){case 0:case 11:case 15:Xs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:_l(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Je=i;else t:for(n=e;Je!==null;){i=Je;var s=i.sibling,a=i.return;if($y(i),i===n){Je=null;break t}if(s!==null){s.return=a,Je=s;break t}Je=a}}}var W1={getCacheForType:function(e){var t=sn(Ve),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sn(Ve).controller.signal}},q1=typeof WeakMap=="function"?WeakMap:Map,$t=0,fe=null,Wt=null,qt=0,ae=0,Dn=null,Ds=!1,Xr=!1,vm=!1,as=0,Re=0,Ws=0,wa=0,_m=0,Ln=0,Or=0,Jo=null,bn=null,vp=!1,Nu=0,ux=0,cu=1/0,uu=null,Bs=null,ke=0,Fs=null,Pr=null,ts=0,_p=0,yp=null,hx=null,jo=0,xp=null;function Bn(){return($t&2)!==0&&qt!==0?qt&-qt:Ct.T!==null?xm():x_()}function dx(){if(Ln===0)if((qt&536870912)===0||Yt){var e=mc;mc<<=1,(mc&3932160)===0&&(mc=262144),Ln=e}else Ln=536870912;return e=zn.current,e!==null&&(e.flags|=32),Ln}function Mn(e,t,n){(e===fe&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(Br(e,0),Us(e,qt,Ln,!1)),ml(e,n),(($t&2)===0||e!==fe)&&(e===fe&&(($t&2)===0&&(wa|=n),Re===4&&Us(e,qt,Ln,!1)),wi(e))}function fx(e,t,n){if(($t&6)!==0)throw Error(j(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||pl(e,t),s=i?J1(e,t):Df(e,t,!0),a=i;do{if(s===0){Xr&&!i&&Us(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!Y1(n)){s=Df(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Jo;var l=o.current.memoizedState.isDehydrated;if(l&&(Br(o,r).flags|=256),r=Df(o,r,!1),r!==2){if(vm&&!l){o.errorRecoveryDisabledLanes|=a,wa|=a,s=4;break t}a=bn,bn=s,a!==null&&(bn===null?bn=a:bn.push.apply(bn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Br(e,0),Us(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t)break;case 6:Us(i,t,Ln,!Ds);break t;case 2:bn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(s=Nu+300-In(),10<s)){if(Us(i,t,Ln,!Ds),Su(i,0,!0)!==0)break t;ts=t,i.timeoutHandle=Lx(Uv.bind(null,i,n,bn,uu,vp,t,Ln,wa,Or,Ds,a,"Throttled",-0,0),s);break t}Uv(i,n,bn,uu,vp,t,Ln,wa,Or,Ds,a,null,-0,0)}}break}while(!0);wi(e)}function Uv(e,t,n,i,s,a,r,o,l,c,d,p,u,f){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},rx(t,a,p);var v=(a&62914560)===a?Nu-In():(a&4194048)===a?ux-In():0;if(v=RT(p,v),v!==null){ts=a,e.cancelPendingCommit=v(Lv.bind(null,e,t,a,n,i,s,r,o,l,d,p,null,u,f)),Us(e,a,r,!c);return}}Lv(e,t,a,n,i,s,r,o,l)}function Y1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Fn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Us(e,t,n,i){t&=~_m,t&=~wa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Pn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&v_(e,n,t)}function Lu(){return($t&6)===0?(Sl(0,!1),!1):!0}function ym(){if(Wt!==null){if(ae===0)var e=Wt.return;else e=Wt,Ki=Ba=null,sm(e),Ar=null,sl=0,e=Wt;for(;e!==null;)qy(e.alternate,e),e=e.return;Wt=null}}function Br(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,hT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ts=0,ym(),fe=e,Wt=n=Qi(e.current,null),qt=t,ae=0,Dn=null,Ds=!1,Xr=pl(e,t),vm=!1,Or=Ln=_m=wa=Ws=Re=0,bn=Jo=null,vp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Pn(i),a=1<<s;t|=e[s],i&=~a}return as=t,Eu(),n}function px(e,t){Pt=null,Ct.H=rl,t===kr||t===wu?(t=cv(),ae=3):t===Kp?(t=cv(),ae=4):ae=t===fm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dn=t,Wt===null&&(Re=1,ru(e,$n(t,e.current)))}function mx(){var e=zn.current;return e===null?!0:(qt&4194048)===qt?ei===null:(qt&62914560)===qt||(qt&536870912)!==0?e===ei:!1}function gx(){var e=Ct.H;return Ct.H=rl,e===null?rl:e}function vx(){var e=Ct.A;return Ct.A=W1,e}function hu(){Re=4,Ds||(qt&4194048)!==qt&&zn.current!==null||(Xr=!0),(Ws&134217727)===0&&(wa&134217727)===0||fe===null||Us(fe,qt,Ln,!1)}function Df(e,t,n){var i=$t;$t|=2;var s=gx(),a=vx();(fe!==e||qt!==t)&&(uu=null,Br(e,t)),t=!1;var r=Re;t:do try{if(ae!==0&&Wt!==null){var o=Wt,l=Dn;switch(ae){case 8:ym(),r=6;break t;case 3:case 2:case 9:case 6:zn.current===null&&(t=!0);var c=ae;if(ae=0,Dn=null,Sr(e,o,l,c),n&&Xr){r=0;break t}break;default:c=ae,ae=0,Dn=null,Sr(e,o,l,c)}}Z1(),r=Re;break}catch(d){px(e,d)}while(!0);return t&&e.shellSuspendCounter++,Ki=Ba=null,$t=i,Ct.H=s,Ct.A=a,Wt===null&&(fe=null,qt=0,Eu()),r}function Z1(){for(;Wt!==null;)_x(Wt)}function J1(e,t){var n=$t;$t|=2;var i=gx(),s=vx();fe!==e||qt!==t?(uu=null,cu=In()+500,Br(e,t)):Xr=pl(e,t);t:do try{if(ae!==0&&Wt!==null){t=Wt;var a=Dn;e:switch(ae){case 1:ae=0,Dn=null,Sr(e,t,a,1);break;case 2:case 9:if(lv(a)){ae=0,Dn=null,Nv(t);break}t=function(){ae!==2&&ae!==9||fe!==e||(ae=7),wi(e)},a.then(t,t);break t;case 3:ae=7;break t;case 4:ae=5;break t;case 7:lv(a)?(ae=0,Dn=null,Nv(t)):(ae=0,Dn=null,Sr(e,t,a,7));break;case 5:var r=null;switch(Wt.tag){case 26:r=Wt.memoizedState;case 5:case 27:var o=Wt;if(r?Fx(r):o.stateNode.complete){ae=0,Dn=null;var l=o.sibling;if(l!==null)Wt=l;else{var c=o.return;c!==null?(Wt=c,Iu(c)):Wt=null}break e}}ae=0,Dn=null,Sr(e,t,a,5);break;case 6:ae=0,Dn=null,Sr(e,t,a,6);break;case 8:ym(),Re=6;break t;default:throw Error(j(462))}}j1();break}catch(d){px(e,d)}while(!0);return Ki=Ba=null,Ct.H=i,Ct.A=s,$t=n,Wt!==null?0:(fe=null,qt=0,Eu(),Re)}function j1(){for(;Wt!==null&&!yM();)_x(Wt)}function _x(e){var t=Wy(e.alternate,e,as);e.memoizedProps=e.pendingProps,t===null?Iu(e):Wt=t}function Nv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ev(n,t,t.pendingProps,t.type,void 0,qt);break;case 11:t=Ev(n,t,t.pendingProps,t.type.render,t.ref,qt);break;case 5:sm(t);default:qy(n,t),t=Wt=q_(t,as),t=Wy(n,t,as)}e.memoizedProps=e.pendingProps,t===null?Iu(e):Wt=t}function Sr(e,t,n,i){Ki=Ba=null,sm(t),Ar=null,sl=0;var s=t.return;try{if(F1(e,s,t,n,qt)){Re=1,ru(e,$n(n,e.current)),Wt=null;return}}catch(a){if(s!==null)throw Wt=s,a;Re=1,ru(e,$n(n,e.current)),Wt=null;return}t.flags&32768?(Yt||i===1?e=!0:Xr||(qt&536870912)!==0?e=!1:(Ds=e=!0,(i===2||i===9||i===3||i===6)&&(i=zn.current,i!==null&&i.tag===13&&(i.flags|=16384))),yx(t,e)):Iu(t)}function Iu(e){var t=e;do{if((t.flags&32768)!==0){yx(t,Ds);return}e=t.return;var n=H1(t.alternate,t,as);if(n!==null){Wt=n;return}if(t=t.sibling,t!==null){Wt=t;return}Wt=t=e}while(t!==null);Re===0&&(Re=5)}function yx(e,t){do{var n=G1(e.alternate,e);if(n!==null){n.flags&=32767,Wt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Wt=e;return}Wt=e=n}while(e!==null);Re=6,Wt=null}function Lv(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do Ou();while(ke!==0);if(($t&6)!==0)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));if(a=t.lanes|t.childLanes,a|=Xp,RM(e,n,a,r,o,l),e===fe&&(Wt=fe=null,qt=0),Pr=t,Fs=e,ts=n,_p=a,yp=s,hx=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tT(Jc,function(){return Tx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ct.T,Ct.T=null,s=te.p,te.p=2,r=$t,$t|=4;try{k1(e,t,n)}finally{$t=r,te.p=s,Ct.T=i}}ke=1,xx(),Sx(),bx()}}function xx(){if(ke===1){ke=0;var e=Fs,t=Pr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Ct.T,Ct.T=null;var i=te.p;te.p=2;var s=$t;$t|=4;try{ix(t,e);var a=Tp,r=F_(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&B_(o.ownerDocument.documentElement,o)){if(l!==null&&kp(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var f=u.getSelection(),v=o.textContent.length,b=Math.min(l.start,v),g=l.end===void 0?b:Math.min(l.end,v);!f.extend&&b>g&&(r=g,g=b,b=r);var h=ev(o,b),m=ev(o,g);if(h&&m&&(f.rangeCount!==1||f.anchorNode!==h.node||f.anchorOffset!==h.offset||f.focusNode!==m.node||f.focusOffset!==m.offset)){var _=p.createRange();_.setStart(h.node,h.offset),f.removeAllRanges(),b>g?(f.addRange(_),f.extend(m.node,m.offset)):(_.setEnd(m.node,m.offset),f.addRange(_))}}}}for(p=[],f=o;f=f.parentNode;)f.nodeType===1&&p.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var S=p[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}yu=!!Mp,Tp=Mp=null}finally{$t=s,te.p=i,Ct.T=n}}e.current=t,ke=2}}function Sx(){if(ke===2){ke=0;var e=Fs,t=Pr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ct.T,Ct.T=null;var i=te.p;te.p=2;var s=$t;$t|=4;try{Qy(e,t.alternate,t)}finally{$t=s,te.p=i,Ct.T=n}}ke=3}}function bx(){if(ke===4||ke===3){ke=0,xM();var e=Fs,t=Pr,n=ts,i=hx;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ke=5:(ke=0,Pr=Fs=null,Mx(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Bs=null),Pp(n),t=t.stateNode,On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(fl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ct.T,s=te.p,te.p=2,Ct.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Ct.T=t,te.p=s}}(ts&3)!==0&&Ou(),wi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===xp?jo++:(jo=0,xp=e):jo=0,Sl(0,!1)}}function Mx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,_l(t)))}function Ou(){return xx(),Sx(),bx(),Tx()}function Tx(){if(ke!==5)return!1;var e=Fs,t=_p;_p=0;var n=Pp(ts),i=Ct.T,s=te.p;try{te.p=32>n?32:n,Ct.T=null,n=yp,yp=null;var a=Fs,r=ts;if(ke=0,Pr=Fs=null,ts=0,($t&6)!==0)throw Error(j(331));var o=$t;if($t|=4,lx(a.current),ax(a,a.current,r,n),$t=o,Sl(0,!1),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(fl,a)}catch{}return!0}finally{te.p=s,Ct.T=i,Mx(e,t)}}function Iv(e,t,n){t=$n(n,t),t=fp(e.stateNode,t,2),e=Ps(e,t,2),e!==null&&(ml(e,2),wi(e))}function re(e,t,n){if(e.tag===3)Iv(e,e,n);else for(;t!==null;){if(t.tag===3){Iv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bs===null||!Bs.has(i))){e=$n(n,e),n=zy(2),i=Ps(t,n,2),i!==null&&(Vy(n,i,t,e),ml(i,2),wi(i));break}}t=t.return}}function Uf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new q1;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(vm=!0,s.add(n),e=K1.bind(null,e,t,n),t.then(e,e))}function K1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,fe===e&&(qt&n)===n&&(Re===4||Re===3&&(qt&62914560)===qt&&300>In()-Nu?($t&2)===0&&Br(e,0):_m|=n,Or===qt&&(Or=0)),wi(e)}function Ex(e,t){t===0&&(t=g_()),e=Pa(e,t),e!==null&&(ml(e,t),wi(e))}function Q1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ex(e,n)}function $1(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),Ex(e,n)}function tT(e,t){return Ip(e,t)}var du=null,cr=null,Sp=!1,fu=!1,Nf=!1,Ns=0;function wi(e){e!==cr&&e.next===null&&(cr===null?du=cr=e:cr=cr.next=e),fu=!0,Sp||(Sp=!0,nT())}function Sl(e,t){if(!Nf&&fu){Nf=!0;do for(var n=!1,i=du;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Pn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Ov(i,a))}else a=qt,a=Su(i,i===fe?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||pl(i,a)||(n=!0,Ov(i,a));i=i.next}while(n);Nf=!1}}function eT(){Ax()}function Ax(){fu=Sp=!1;var e=0;Ns!==0&&uT()&&(e=Ns);for(var t=In(),n=null,i=du;i!==null;){var s=i.next,a=wx(i,t);a===0?(i.next=null,n===null?du=s:n.next=s,s===null&&(cr=n)):(n=i,(e!==0||(a&3)!==0)&&(fu=!0)),i=s}ke!==0&&ke!==5||Sl(e,!1),Ns!==0&&(Ns=0)}function wx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Pn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=CM(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=fe,n=qt,n=Su(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&of(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||pl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&of(i),Pp(n)){case 2:case 8:n=p_;break;case 32:n=Jc;break;case 268435456:n=m_;break;default:n=Jc}return i=Cx.bind(null,e),n=Ip(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&of(i),e.callbackPriority=2,e.callbackNode=null,2}function Cx(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ou()&&e.callbackNode!==n)return null;var i=qt;return i=Su(e,e===fe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(fx(e,i,t),wx(e,In()),e.callbackNode!=null&&e.callbackNode===n?Cx.bind(null,e):null)}function Ov(e,t){if(Ou())return null;fx(e,t,!0)}function nT(){dT(function(){($t&6)!==0?Ip(f_,eT):Ax()})}function xm(){if(Ns===0){var e=Nr;e===0&&(e=pc,pc<<=1,(pc&261888)===0&&(pc=256)),Ns=e}return Ns}function Pv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Nc(""+e)}function Bv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function iT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Pv((s[Tn]||null).action),r=i.submitter;r&&(t=(t=r[Tn]||null)?Pv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new bu("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ns!==0){var l=r?Bv(s,r):new FormData(s);hp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?Bv(s,r):new FormData(s),hp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Ac=0;Ac<$f.length;Ac++)wc=$f[Ac],Fv=wc.toLowerCase(),zv=wc[0].toUpperCase()+wc.slice(1),ui(Fv,"on"+zv);var wc,Fv,zv,Ac;ui(V_,"onAnimationEnd");ui(H_,"onAnimationIteration");ui(G_,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(S1,"onTransitionRun");ui(b1,"onTransitionStart");ui(M1,"onTransitionCancel");ui(k_,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));La("onBeforeInput",["compositionend","keypress","textInput","paste"]);La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function Rx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(d){Kc(d)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(d){Kc(d)}s.currentTarget=null,a=l}}}}function Xt(e,t){var n=t[Wf];n===void 0&&(n=t[Wf]=new Set);var i=e+"__bubble";n.has(i)||(Dx(t,e,2,!1),n.add(i))}function Lf(e,t,n){var i=0;t&&(i|=4),Dx(n,e,i,t)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function Sm(e){if(!e[Cc]){e[Cc]=!0,S_.forEach(function(n){n!=="selectionchange"&&(sT.has(n)||Lf(n,!1,e),Lf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cc]||(t[Cc]=!0,Lf("selectionchange",!1,t))}}function Dx(e,t,n,i){switch(kx(t)){case 2:var s=NT;break;case 8:s=LT;break;default:s=Em}n=s.bind(null,t,n,e),s=void 0,!jf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function If(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=dr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}R_(function(){var c=a,d=zp(n),p=[];t:{var u=X_.get(e);if(u!==void 0){var f=bu,v=e;switch(e){case"keypress":if(Ic(n)===0)break t;case"keydown":case"keyup":f=$M;break;case"focusin":v="focus",f=df;break;case"focusout":v="blur",f=df;break;case"beforeblur":case"afterblur":f=df;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=q0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=HM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=n1;break;case V_:case H_:case G_:f=XM;break;case k_:f=s1;break;case"scroll":case"scrollend":f=zM;break;case"wheel":f=r1;break;case"copy":case"cut":case"paste":f=qM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Z0;break;case"toggle":case"beforetoggle":f=l1}var b=(t&4)!==0,g=!b&&(e==="scroll"||e==="scrollend"),h=b?u!==null?u+"Capture":null:u;b=[];for(var m=c,_;m!==null;){var S=m;if(_=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||_===null||h===null||(S=$o(m,h),S!=null&&b.push(ll(m,S,_))),g)break;m=m.return}0<b.length&&(u=new f(u,v,null,n,d),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",u&&n!==Jf&&(v=n.relatedTarget||n.fromElement)&&(dr(v)||v[Vr]))break t;if((f||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=c,v=v?dr(v):null,v!==null&&(g=dl(v),b=v.tag,v!==g||b!==5&&b!==27&&b!==6)&&(v=null)):(f=null,v=c),f!==v)){if(b=q0,S="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=Z0,S="onPointerLeave",h="onPointerEnter",m="pointer"),g=f==null?u:Po(f),_=v==null?u:Po(v),u=new b(S,m+"leave",f,n,d),u.target=g,u.relatedTarget=_,S=null,dr(d)===c&&(b=new b(h,m+"enter",v,n,d),b.target=_,b.relatedTarget=g,S=b),g=S,f&&v)e:{for(b=aT,h=f,m=v,_=0,S=h;S;S=b(S))_++;S=0;for(var A=m;A;A=b(A))S++;for(;0<_-S;)h=b(h),_--;for(;0<S-_;)m=b(m),S--;for(;_--;){if(h===m||m!==null&&h===m.alternate){b=h;break e}h=b(h),m=b(m)}b=null}else b=null;f!==null&&Vv(p,u,f,b,!1),v!==null&&g!==null&&Vv(p,g,v,b,!0)}}t:{if(u=c?Po(c):window,f=u.nodeName&&u.nodeName.toLowerCase(),f==="select"||f==="input"&&u.type==="file")var w=Q0;else if(K0(u))if(O_)w=_1;else{w=g1;var C=m1}else f=u.nodeName,!f||f.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Fp(c.elementType)&&(w=Q0):w=v1;if(w&&(w=w(e,c))){I_(p,w,n,d);break t}C&&C(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Zf(u,"number",u.value)}switch(C=c?Po(c):window,e){case"focusin":(K0(C)||C.contentEditable==="true")&&(mr=C,Kf=c,Ho=null);break;case"focusout":Ho=Kf=mr=null;break;case"mousedown":Qf=!0;break;case"contextmenu":case"mouseup":case"dragend":Qf=!1,nv(p,n,d);break;case"selectionchange":if(x1)break;case"keydown":case"keyup":nv(p,n,d)}var x;if(Gp)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else pr?N_(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(U_&&n.locale!=="ko"&&(pr||T!=="onCompositionStart"?T==="onCompositionEnd"&&pr&&(x=D_()):(Rs=d,Vp="value"in Rs?Rs.value:Rs.textContent,pr=!0)),C=pu(c,T),0<C.length&&(T=new Y0(T,e,null,n,d),p.push({event:T,listeners:C}),x?T.data=x:(x=L_(n),x!==null&&(T.data=x)))),(x=u1?h1(e,n):d1(e,n))&&(T=pu(c,"onBeforeInput"),0<T.length&&(C=new Y0("onBeforeInput","beforeinput",null,n,d),p.push({event:C,listeners:T}),C.data=x)),iT(p,e,c,n,d)}Rx(p,t)})}function ll(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=$o(e,n),s!=null&&i.unshift(ll(e,s,a)),s=$o(e,t),s!=null&&i.push(ll(e,s,a))),e.tag===3)return i;e=e.return}return[]}function aT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=$o(n,a),c!=null&&r.unshift(ll(n,c,l))):s||(c=$o(n,a),c!=null&&r.push(ll(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var rT=/\r\n?/g,oT=/\u0000|\uFFFD/g;function Hv(e){return(typeof e=="string"?e:""+e).replace(rT,`
`).replace(oT,"")}function Ux(e,t){return t=Hv(t),Hv(e)===t}function ce(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ur(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ur(e,""+i);break;case"className":vc(e,"class",i);break;case"tabIndex":vc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":vc(e,n,i);break;case"style":C_(e,i,a);break;case"data":if(t!=="object"){vc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Nc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ce(e,t,"name",s.name,s,null),ce(e,t,"formEncType",s.formEncType,s,null),ce(e,t,"formMethod",s.formMethod,s,null),ce(e,t,"formTarget",s.formTarget,s,null)):(ce(e,t,"encType",s.encType,s,null),ce(e,t,"method",s.method,s,null),ce(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Nc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ji);break;case"onScroll":i!=null&&Xt("scroll",e);break;case"onScrollEnd":i!=null&&Xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Nc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Xt("beforetoggle",e),Xt("toggle",e),Uc(e,"popover",i);break;case"xlinkActuate":Gi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Gi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Gi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Gi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Gi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Gi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Gi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Gi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Gi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Uc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=BM.get(n)||n,Uc(e,n,i))}}function bp(e,t,n,i,s,a){switch(n){case"style":C_(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ur(e,i):(typeof i=="number"||typeof i=="bigint")&&Ur(e,""+i);break;case"onScroll":i!=null&&Xt("scroll",e);break;case"onScrollEnd":i!=null&&Xt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!b_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Tn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Uc(e,n,i)}}}function an(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xt("error",e),Xt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:ce(e,t,a,r,n,null)}}s&&ce(e,t,"srcSet",n.srcSet,n,null),i&&ce(e,t,"src",n.src,n,null);return;case"input":Xt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":s=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":a=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(j(137,t));break;default:ce(e,t,i,d,n,null)}}E_(e,a,o,l,c,r,s,!1);return;case"select":Xt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ce(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Mr(e,!!i,t,!1):n!=null&&Mr(e,!!i,n,!0);return;case"textarea":Xt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:ce(e,t,r,o,n,null)}w_(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ce(e,t,l,i,n,null));return;case"dialog":Xt("beforetoggle",e),Xt("toggle",e),Xt("cancel",e),Xt("close",e);break;case"iframe":case"object":Xt("load",e);break;case"video":case"audio":for(i=0;i<ol.length;i++)Xt(ol[i],e);break;case"image":Xt("error",e),Xt("load",e);break;case"details":Xt("toggle",e);break;case"embed":case"source":case"link":Xt("error",e),Xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:ce(e,t,c,i,n,null)}return;default:if(Fp(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&bp(e,t,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ce(e,t,o,i,n,null))}function lT(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,d=null;for(f in n){var p=n[f];if(n.hasOwnProperty(f)&&p!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(f)||ce(e,t,f,null,i,p)}}for(var u in i){var f=i[u];if(p=n[u],i.hasOwnProperty(u)&&(f!=null||p!=null))switch(u){case"type":a=f;break;case"name":s=f;break;case"checked":c=f;break;case"defaultChecked":d=f;break;case"value":r=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(j(137,t));break;default:f!==p&&ce(e,t,u,f,i,p)}}Yf(e,r,o,l,c,d,a,s);return;case"select":f=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":f=l;default:i.hasOwnProperty(a)||ce(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&ce(e,t,s,a,i,l)}t=o,n=r,i=f,u!=null?Mr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Mr(e,!!n,t,!0):Mr(e,!!n,n?[]:"",!1));return;case"textarea":f=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ce(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":f=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(j(91));break;default:s!==a&&ce(e,t,r,s,i,a)}A_(e,u,f);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:ce(e,t,v,null,i,u));for(l in i)u=i[l],f=n[l],i.hasOwnProperty(l)&&u!==f&&(u!=null||f!=null)&&(l==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":ce(e,t,l,u,i,f));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&ce(e,t,b,null,i,u);for(c in i)if(u=i[c],f=n[c],i.hasOwnProperty(c)&&u!==f&&(u!=null||f!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(j(137,t));break;default:ce(e,t,c,u,i,f)}return;default:if(Fp(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&bp(e,t,g,void 0,i,u);for(d in i)u=i[d],f=n[d],!i.hasOwnProperty(d)||u===f||u===void 0&&f===void 0||bp(e,t,d,u,i,f);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&ce(e,t,h,null,i,u);for(p in i)u=i[p],f=n[p],!i.hasOwnProperty(p)||u===f||u==null&&f==null||ce(e,t,p,u,i,f)}function Gv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Gv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,p=l.initiatorType;d&&Gv(p)&&(l=l.responseEnd,r+=d*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mp=null,Tp=null;function mu(e){return e.nodeType===9?e:e.ownerDocument}function kv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ep(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Of=null;function uT(){var e=window.event;return e&&e.type==="popstate"?e===Of?!1:(Of=e,!0):(Of=null,!1)}var Lx=typeof setTimeout=="function"?setTimeout:void 0,hT=typeof clearTimeout=="function"?clearTimeout:void 0,Xv=typeof Promise=="function"?Promise:void 0,dT=typeof queueMicrotask=="function"?queueMicrotask:typeof Xv<"u"?function(e){return Xv.resolve(null).then(e).catch(fT)}:Lx;function fT(e){setTimeout(function(){throw e})}function Ys(e){return e==="head"}function Wv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),zr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ko(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ko(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[gl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Ko(e.ownerDocument.body);n=s}while(n);zr(t)}function qv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Ap(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ap(n),Bp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function pT(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[gl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ni(e.nextSibling),e===null)break}return null}function mT(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ni(e.nextSibling),e===null))return null;return e}function Ix(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ni(e.nextSibling),e===null))return null;return e}function wp(e){return e.data==="$?"||e.data==="$~"}function Cp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function gT(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ni(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Rp=null;function Yv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ni(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Zv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ox(e,t,n){switch(t=mu(n),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function Ko(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bp(e)}var ii=new Map,Jv=new Set;function gu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rs=te.d;te.d={f:vT,r:_T,D:yT,C:xT,L:ST,m:bT,X:TT,S:MT,M:ET};function vT(){var e=rs.f(),t=Lu();return e||t}function _T(e){var t=Hr(e);t!==null&&t.tag===5&&t.type==="form"?Cy(t):rs.r(e)}var Wr=typeof document>"u"?null:document;function Px(e,t,n){var i=Wr;if(i&&typeof t=="string"&&t){var s=Qn(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Jv.has(s)||(Jv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),an(t,"link",e),je(t),i.head.appendChild(t)))}}function yT(e){rs.D(e),Px("dns-prefetch",e,null)}function xT(e,t){rs.C(e,t),Px("preconnect",e,t)}function ST(e,t,n){rs.L(e,t,n);var i=Wr;if(i&&e&&t){var s='link[rel="preload"][as="'+Qn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Qn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Qn(n.imageSizes)+'"]')):s+='[href="'+Qn(e)+'"]';var a=s;switch(t){case"style":a=Fr(e);break;case"script":a=qr(e)}ii.has(a)||(e=Se({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ii.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(bl(a))||t==="script"&&i.querySelector(Ml(a))||(t=i.createElement("link"),an(t,"link",e),je(t),i.head.appendChild(t)))}}function bT(e,t){rs.m(e,t);var n=Wr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Qn(i)+'"][href="'+Qn(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=qr(e)}if(!ii.has(a)&&(e=Se({rel:"modulepreload",href:e},t),ii.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ml(a)))return}i=n.createElement("link"),an(i,"link",e),je(i),n.head.appendChild(i)}}}function MT(e,t,n){rs.S(e,t,n);var i=Wr;if(i&&e){var s=br(i).hoistableStyles,a=Fr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(bl(a)))o.loading=5;else{e=Se({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ii.get(a))&&bm(e,n);var l=r=i.createElement("link");je(l),an(l,"link",e),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Gc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function TT(e,t){rs.X(e,t);var n=Wr;if(n&&e){var i=br(n).hoistableScripts,s=qr(e),a=i.get(s);a||(a=n.querySelector(Ml(s)),a||(e=Se({src:e,async:!0},t),(t=ii.get(s))&&Mm(e,t),a=n.createElement("script"),je(a),an(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function ET(e,t){rs.M(e,t);var n=Wr;if(n&&e){var i=br(n).hoistableScripts,s=qr(e),a=i.get(s);a||(a=n.querySelector(Ml(s)),a||(e=Se({src:e,async:!0,type:"module"},t),(t=ii.get(s))&&Mm(e,t),a=n.createElement("script"),je(a),an(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function jv(e,t,n,i){var s=(s=Ls.current)?gu(s):null;if(!s)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Fr(n.href),n=br(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Fr(n.href);var a=br(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(bl(e)))&&!a._p&&(r.instance=a,r.state.loading=5),ii.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ii.set(e,n),a||AT(s,e,n,r.state))),t&&i===null)throw Error(j(528,""));return r}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=qr(n),n=br(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function Fr(e){return'href="'+Qn(e)+'"'}function bl(e){return'link[rel="stylesheet"]['+e+"]"}function Bx(e){return Se({},e,{"data-precedence":e.precedence,precedence:null})}function AT(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),an(t,"link",n),je(t),e.head.appendChild(t))}function qr(e){return'[src="'+Qn(e)+'"]'}function Ml(e){return"script[async]"+e}function Kv(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Qn(n.href)+'"]');if(i)return t.instance=i,je(i),i;var s=Se({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),je(i),an(i,"style",s),Gc(i,n.precedence,e),t.instance=i;case"stylesheet":s=Fr(n.href);var a=e.querySelector(bl(s));if(a)return t.state.loading|=4,t.instance=a,je(a),a;i=Bx(n),(s=ii.get(s))&&bm(i,s),a=(e.ownerDocument||e).createElement("link"),je(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),an(a,"link",i),t.state.loading|=4,Gc(a,n.precedence,e),t.instance=a;case"script":return a=qr(n.src),(s=e.querySelector(Ml(a)))?(t.instance=s,je(s),s):(i=n,(s=ii.get(a))&&(i=Se({},n),Mm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),je(s),an(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Gc(i,n.precedence,e));return t.instance}function Gc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function bm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var kc=null;function Qv(e,t,n){if(kc===null){var i=new Map,s=kc=new Map;s.set(n,i)}else s=kc,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[gl]||a[en]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function $v(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function wT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Fx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function CT(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Fr(i.href),a=t.querySelector(bl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,je(a);return}a=t.ownerDocument||t,i=Bx(i),(s=ii.get(s))&&bm(i,s),a=a.createElement("link"),je(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),an(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=vu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Pf=0;function RT(e,t){return e.stylesheets&&e.count===0&&Xc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Xc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Pf===0&&(Pf=62500*cT());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xc(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Pf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function vu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _u=null;function Xc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_u=new Map,t.forEach(DT,e),_u=null,vu.call(e))}function DT(e,t){if(!(t.state.loading&4)){var n=_u.get(e);if(n)var i=n.get(null);else{n=new Map,_u.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=vu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var cl={$$typeof:Ji,Provider:null,Consumer:null,_currentValue:Ma,_currentValue2:Ma,_threadCount:0};function UT(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lf(0),this.hiddenUpdates=lf(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function zx(e,t,n,i,s,a,r,o,l,c,d,p){return e=new UT(e,t,n,r,l,c,d,p,o),t=1,a===!0&&(t|=24),a=Nn(3,null,null,t),e.current=a,a.stateNode=e,t=Jp(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Qp(a),e}function Vx(e){return e?(e=_r,e):_r}function Hx(e,t,n,i,s,a){s=Vx(s),i.context===null?i.context=s:i.pendingContext=s,i=Os(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Ps(e,i,t),n!==null&&(Mn(n,e,t),ko(n,e,t))}function t_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tm(e,t){t_(e,t),(e=e.alternate)&&t_(e,t)}function Gx(e){if(e.tag===13||e.tag===31){var t=Pa(e,67108864);t!==null&&Mn(t,e,67108864),Tm(e,67108864)}}function e_(e){if(e.tag===13||e.tag===31){var t=Bn();t=Op(t);var n=Pa(e,t);n!==null&&Mn(n,e,t),Tm(e,t)}}var yu=!0;function NT(e,t,n,i){var s=Ct.T;Ct.T=null;var a=te.p;try{te.p=2,Em(e,t,n,i)}finally{te.p=a,Ct.T=s}}function LT(e,t,n,i){var s=Ct.T;Ct.T=null;var a=te.p;try{te.p=8,Em(e,t,n,i)}finally{te.p=a,Ct.T=s}}function Em(e,t,n,i){if(yu){var s=Dp(i);if(s===null)If(e,t,i,xu,n),n_(e,i);else if(OT(s,e,t,n,i))i.stopPropagation();else if(n_(e,i),t&4&&-1<IT.indexOf(e)){for(;s!==null;){var a=Hr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=xa(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Pn(r);o.entanglements[1]|=l,r&=~l}wi(a),($t&6)===0&&(cu=In()+500,Sl(0,!1))}}break;case 31:case 13:o=Pa(a,2),o!==null&&Mn(o,a,2),Lu(),Tm(a,2)}if(a=Dp(i),a===null&&If(e,t,i,xu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else If(e,t,i,null,n)}}function Dp(e){return e=zp(e),Am(e)}var xu=null;function Am(e){if(xu=null,e=dr(e),e!==null){var t=dl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=l_(t),e!==null)return e;e=null}else if(n===31){if(e=c_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xu=e,null}function kx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(SM()){case f_:return 2;case p_:return 8;case Jc:case bM:return 32;case m_:return 268435456;default:return 32}default:return 32}}var Up=!1,zs=null,Vs=null,Hs=null,ul=new Map,hl=new Map,ws=[],IT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n_(e,t){switch(e){case"focusin":case"focusout":zs=null;break;case"dragenter":case"dragleave":Vs=null;break;case"mouseover":case"mouseout":Hs=null;break;case"pointerover":case"pointerout":ul.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(t.pointerId)}}function No(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Hr(t),t!==null&&Gx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function OT(e,t,n,i,s){switch(t){case"focusin":return zs=No(zs,e,t,n,i,s),!0;case"dragenter":return Vs=No(Vs,e,t,n,i,s),!0;case"mouseover":return Hs=No(Hs,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return ul.set(a,No(ul.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,hl.set(a,No(hl.get(a)||null,e,t,n,i,s)),!0}return!1}function Xx(e){var t=dr(e.target);if(t!==null){var n=dl(t);if(n!==null){if(t=n.tag,t===13){if(t=l_(n),t!==null){e.blockedOn=t,z0(e.priority,function(){e_(n)});return}}else if(t===31){if(t=c_(n),t!==null){e.blockedOn=t,z0(e.priority,function(){e_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Jf=i,n.target.dispatchEvent(i),Jf=null}else return t=Hr(n),t!==null&&Gx(t),e.blockedOn=n,!1;t.shift()}return!0}function i_(e,t,n){Wc(e)&&n.delete(t)}function PT(){Up=!1,zs!==null&&Wc(zs)&&(zs=null),Vs!==null&&Wc(Vs)&&(Vs=null),Hs!==null&&Wc(Hs)&&(Hs=null),ul.forEach(i_),hl.forEach(i_)}function Rc(e,t){e.blockedOn===t&&(e.blockedOn=null,Up||(Up=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,PT)))}var Dc=null;function s_(e){Dc!==e&&(Dc=e,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,function(){Dc===e&&(Dc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Am(i||n)===null)continue;break}var a=Hr(n);a!==null&&(e.splice(t,3),t-=3,hp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function zr(e){function t(l){return Rc(l,e)}zs!==null&&Rc(zs,e),Vs!==null&&Rc(Vs,e),Hs!==null&&Rc(Hs,e),ul.forEach(t),hl.forEach(t);for(var n=0;n<ws.length;n++){var i=ws[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ws.length&&(n=ws[0],n.blockedOn===null);)Xx(n),n.blockedOn===null&&ws.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Tn]||null;if(typeof a=="function")r||s_(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Tn]||null)o=r.formAction;else if(Am(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),s_(n)}}}function Wx(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function wm(e){this._internalRoot=e}Pu.prototype.render=wm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var n=t.current,i=Bn();Hx(n,i,e,t,null,null)};Pu.prototype.unmount=wm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hx(e.current,2,null,e,null,null),Lu(),t[Vr]=null}};function Pu(e){this._internalRoot=e}Pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=x_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ws.length&&t!==0&&t<ws[n].priority;n++);ws.splice(n,0,e),n===0&&Xx(e)}};var a_=r_.version;if(a_!=="19.2.4")throw Error(j(527,a_,"19.2.4"));te.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=pM(t),e=e!==null?u_(e):null,e=e===null?null:e.stateNode,e};var BT={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:Ct,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Lo.isDisabled&&Lo.supportsFiber))try{fl=Lo.inject(BT),On=Lo}catch{}var Lo;Bu.createRoot=function(e,t){if(!o_(e))throw Error(j(299));var n=!1,i="",s=Py,a=By,r=Fy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=zx(e,1,!1,null,null,n,i,null,s,a,r,Wx),e[Vr]=t.current,Sm(e),new wm(t)};Bu.hydrateRoot=function(e,t,n){if(!o_(e))throw Error(j(299));var i=!1,s="",a=Py,r=By,o=Fy,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=zx(e,1,!0,t,n??null,i,s,l,a,r,o,Wx),t.context=Vx(null),n=t.current,i=Bn(),i=Op(i),s=Os(i),s.callback=null,Ps(n,s,i),n=i,t.current.lanes=n,ml(t,n),wi(t),e[Vr]=t.current,Sm(e),new Pu(t)};Bu.version="19.2.4"});var Jx=xi((y2,Zx)=>{"use strict";function Yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yx)}catch(e){console.error(e)}}Yx(),Zx.exports=qx()});var Rb=xi(Pd=>{"use strict";var s2=Symbol.for("react.transitional.element"),a2=Symbol.for("react.fragment");function Cb(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:s2,type:e,key:i,ref:t!==void 0?t:null,props:n}}Pd.Fragment=a2;Pd.jsx=Cb;Pd.jsxs=Cb});var ac=xi((eN,Db)=>{"use strict";Db.exports=Rb()});var Fd=ys(bo()),Nb=ys(Jx());var pa=ys(bo()),Ub=ys(nf());var gS=0,og=1,vS=2;var Yl=1,_S=2,go=3,ps=0,_n=1,Ii=2,Oi=0,ka=1,lg=2,cg=3,ug=4,yS=5;var ea=100,xS=101,SS=102,bS=103,MS=104,TS=200,ES=201,AS=202,wS=203,rh=204,oh=205,CS=206,RS=207,DS=208,US=209,NS=210,LS=211,IS=212,OS=213,PS=214,lh=0,ch=1,uh=2,Xa=3,hh=4,dh=5,fh=6,ph=7,hg=0,BS=1,FS=2,gi=0,dg=1,fg=2,pg=3,Zl=4,mg=5,gg=6,vg=7;var _g=300,ua=301,Ya=302,Vh=303,Hh=304,Jl=306,mh=1e3,Di=1001,gh=1002,Oe=1003,zS=1004;var jl=1005;var on=1006,Gh=1007;var ha=1008;var Cn=1009,yg=1010,xg=1011,vo=1012,kh=1013,vi=1014,_i=1015,Pi=1016,Xh=1017,Wh=1018,_o=1020,Sg=35902,bg=35899,Mg=1021,Tg=1022,ri=1023,Ui=1026,da=1027,Eg=1028,qh=1029,Za=1030,Yh=1031;var Zh=1033,Kl=33776,Ql=33777,$l=33778,tc=33779,Jh=35840,jh=35841,Kh=35842,Qh=35843,$h=36196,td=37492,ed=37496,nd=37488,id=37489,sd=37490,ad=37491,rd=37808,od=37809,ld=37810,cd=37811,ud=37812,hd=37813,dd=37814,fd=37815,pd=37816,md=37817,gd=37818,vd=37819,_d=37820,yd=37821,xd=36492,Sd=36494,bd=36495,Md=36283,Td=36284,Ed=36285,Ad=36286;var Rl=2300,vh=2301,sh=2302,Qm=2303,$m=2400,tg=2401,eg=2402;var VS=3200;var Ag=0,HS=1,gs="",dn="srgb",Wa="srgb-linear",Dl="linear",ne="srgb";var Ga=7680;var ng=519,GS=512,kS=513,XS=514,wd=515,WS=516,qS=517,Cd=518,YS=519,ig=35044;var wg="300 es",pi=2e3,oo=2001;function FT(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function zT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function lo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ZS(){let e=lo("canvas");return e.style.display="block",e}var jx={},co=null;function Cg(...e){let t="THREE."+e.shift();co?co("log",t,...e):console.log(t,...e)}function JS(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Dt(...e){e=JS(e);let t="THREE."+e.shift();if(co)co("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Rt(...e){e=JS(e);let t="THREE."+e.shift();if(co)co("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ul(...e){let t=e.join(" ");t in jx||(jx[t]=!0,Dt(...e))}function jS(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var KS={[lh]:ch,[uh]:fh,[hh]:ph,[Xa]:dh,[ch]:lh,[fh]:uh,[ph]:hh,[dh]:Xa},ms=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Cm=Math.PI/180,_h=180/Math.PI;function ec(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[e&255]+un[e>>8&255]+un[e>>16&255]+un[e>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Zt(e,t,n){return Math.max(t,Math.min(n,e))}function VT(e,t){return(e%t+t)%t}function Rm(e,t,n){return(1-n)*e+n*t}function Tl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function An(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Qt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Zt(this.x,t.x,n.x),this.y=Zt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Zt(this.x,t,n),this.y=Zt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ni=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],d=i[s+2],p=i[s+3],u=a[r+0],f=a[r+1],v=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==f||d!==v){let g=l*u+c*f+d*v+p*b;g<0&&(u=-u,f=-f,v=-v,b=-b,g=-g);let h=1-o;if(g<.9995){let m=Math.acos(g),_=Math.sin(m);h=Math.sin(h*m)/_,o=Math.sin(o*m)/_,l=l*h+u*o,c=c*h+f*o,d=d*h+v*o,p=p*h+b*o}else{l=l*h+u*o,c=c*h+f*o,d=d*h+v*o,p=p*h+b*o;let m=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=m,c*=m,d*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],p=a[r],u=a[r+1],f=a[r+2],v=a[r+3];return t[n]=o*v+d*p+l*f-c*u,t[n+1]=l*v+d*u+c*p-o*f,t[n+2]=c*v+d*f+o*u-l*p,t[n+3]=d*v-o*p-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),p=o(a/2),u=l(i/2),f=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*d*p+c*f*v,this._y=c*f*p-u*d*v,this._z=c*d*v+u*f*p,this._w=c*d*p-u*f*v;break;case"YXZ":this._x=u*d*p+c*f*v,this._y=c*f*p-u*d*v,this._z=c*d*v-u*f*p,this._w=c*d*p+u*f*v;break;case"ZXY":this._x=u*d*p-c*f*v,this._y=c*f*p+u*d*v,this._z=c*d*v+u*f*p,this._w=c*d*p-u*f*v;break;case"ZYX":this._x=u*d*p-c*f*v,this._y=c*f*p+u*d*v,this._z=c*d*v-u*f*p,this._w=c*d*p+u*f*v;break;case"YZX":this._x=u*d*p+c*f*v,this._y=c*f*p+u*d*v,this._z=c*d*v-u*f*p,this._w=c*d*p-u*f*v;break;case"XZY":this._x=u*d*p-c*f*v,this._y=c*f*p-u*d*v,this._z=c*d*v+u*f*p,this._w=c*d*p+u*f*v;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],p=n[10],u=i+o+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(i>o&&i>p){let f=2*Math.sqrt(1+i-o-p);this._w=(d-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-i-p);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+p-i-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+s*c-a*l,this._y=s*d+r*l+a*o-i*c,this._z=a*d+r*c+i*l-s*o,this._w=r*d-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Kx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Kx.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),d=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*d,this.y=i+l*d+o*c-a*p,this.z=s+l*p+a*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Zt(this.x,t.x,n.x),this.y=Zt(this.y,t.y,n.y),this.z=Zt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Zt(this.x,t,n),this.y=Zt(this.y,t,n),this.z=Zt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Dm.copy(this).projectOnVector(t),this.sub(Dm)}reflect(t){return this.sub(Dm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dm=new V,Kx=new Ni,Bt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=n,d[4]=a,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],u=i[2],f=i[5],v=i[8],b=s[0],g=s[3],h=s[6],m=s[1],_=s[4],S=s[7],A=s[2],w=s[5],C=s[8];return a[0]=r*b+o*m+l*A,a[3]=r*g+o*_+l*w,a[6]=r*h+o*S+l*C,a[1]=c*b+d*m+p*A,a[4]=c*g+d*_+p*w,a[7]=c*h+d*S+p*C,a[2]=u*b+f*m+v*A,a[5]=u*g+f*_+v*w,a[8]=u*h+f*S+v*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return n*r*d-n*o*c-i*a*d+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=d*r-o*c,u=o*l-d*a,f=c*a-r*l,v=n*p+i*u+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=p*b,t[1]=(s*c-d*i)*b,t[2]=(o*i-s*r)*b,t[3]=u*b,t[4]=(d*n-s*l)*b,t[5]=(s*a-o*n)*b,t[6]=f*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*a)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Um.makeScale(t,n)),this}rotate(t){return this.premultiply(Um.makeRotation(-t)),this}translate(t,n){return this.premultiply(Um.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Um=new Bt,Qx=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$x=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HT(){let e={enabled:!0,workingColorSpace:Wa,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ne&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ne&&(s.r=ro(s.r),s.g=ro(s.g),s.b=ro(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gs?Dl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ul("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ul("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Wa]:{primaries:t,whitePoint:i,transfer:Dl,toXYZ:Qx,fromXYZ:$x,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:i,transfer:ne,toXYZ:Qx,fromXYZ:$x,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),e}var Jt=HT();function fs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ro(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Yr,yh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Yr===void 0&&(Yr=lo("canvas")),Yr.width=t.width,Yr.height=t.height;let s=Yr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Yr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=lo("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=fs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fs(n[i]/255)*255):n[i]=fs(n[i]);return{data:n,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},GT=0,uo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=ec(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Nm(s[r].image)):a.push(Nm(s[r]))}else a=Nm(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Nm(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?yh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var kT=0,Lm=new V,vn=class e extends ms{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Di,s=Di,a=on,r=ha,o=ri,l=Cn,c=e.DEFAULT_ANISOTROPY,d=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=ec(),this.name="",this.source=new uo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lm).x}get height(){return this.source.getSize(Lm).y}get depth(){return this.source.getSize(Lm).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Dt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_g)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mh:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case gh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mh:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case gh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=_g;vn.DEFAULT_ANISOTROPY=1;var Ae=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],d=l[4],p=l[8],u=l[1],f=l[5],v=l[9],b=l[2],g=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-b)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+b)<.1&&Math.abs(v+g)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,S=(f+1)/2,A=(h+1)/2,w=(d+u)/4,C=(p+b)/4,x=(v+g)/4;return _>S&&_>A?_<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(_),s=w/i,a=C/i):S>A?S<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(S),i=w/s,a=x/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=C/a,s=x/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-v)*(g-v)+(p-b)*(p-b)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(p-b)/m,this.z=(u-d)/m,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Zt(this.x,t.x,n.x),this.y=Zt(this.y,t.y,n.y),this.z=Zt(this.z,t.z,n.z),this.w=Zt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Zt(this.x,t,n),this.y=Zt(this.y,t,n),this.z=Zt(this.z,t,n),this.w=Zt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xh=class extends ms{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ae(0,0,t,n),this.scissorTest=!1,this.viewport=new Ae(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new vn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new uo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends xh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Nl=class extends vn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sh=class extends vn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var De=class e{constructor(t,n,i,s,a,r,o,l,c,d,p,u,f,v,b,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,d,p,u,f,v,b,g)}set(t,n,i,s,a,r,o,l,c,d,p,u,f,v,b,g){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=p,h[14]=u,h[3]=f,h[7]=v,h[11]=b,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Zr.setFromMatrixColumn(t,0).length(),a=1/Zr.setFromMatrixColumn(t,1).length(),r=1/Zr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*d,f=r*p,v=o*d,b=o*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=f+v*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=v+f*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*d,f=l*p,v=c*d,b=c*p;n[0]=u+b*o,n[4]=v*o-f,n[8]=r*c,n[1]=r*p,n[5]=r*d,n[9]=-o,n[2]=f*o-v,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*d,f=l*p,v=c*d,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=v+f*o,n[1]=f+v*o,n[5]=r*d,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*d,f=r*p,v=o*d,b=o*p;n[0]=l*d,n[4]=v*c-f,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=f*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,f=r*c,v=o*l,b=o*c;n[0]=l*d,n[4]=b-u*p,n[8]=v*p+f,n[1]=p,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=f*p+v,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,f=r*c,v=o*l,b=o*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=u*p+b,n[5]=r*d,n[9]=f*p-v,n[2]=v*p-f,n[6]=o*d,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(XT,t,WT)}lookAt(t,n,i){let s=this.elements;return Vn.subVectors(t,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Zs.crossVectors(i,Vn),Zs.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Zs.crossVectors(i,Vn)),Zs.normalize(),Fu.crossVectors(Vn,Zs),s[0]=Zs.x,s[4]=Fu.x,s[8]=Vn.x,s[1]=Zs.y,s[5]=Fu.y,s[9]=Vn.y,s[2]=Zs.z,s[6]=Fu.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],u=i[9],f=i[13],v=i[2],b=i[6],g=i[10],h=i[14],m=i[3],_=i[7],S=i[11],A=i[15],w=s[0],C=s[4],x=s[8],T=s[12],I=s[1],R=s[5],P=s[9],H=s[13],X=s[2],G=s[6],z=s[10],B=s[14],Z=s[3],Q=s[7],lt=s[11],mt=s[15];return a[0]=r*w+o*I+l*X+c*Z,a[4]=r*C+o*R+l*G+c*Q,a[8]=r*x+o*P+l*z+c*lt,a[12]=r*T+o*H+l*B+c*mt,a[1]=d*w+p*I+u*X+f*Z,a[5]=d*C+p*R+u*G+f*Q,a[9]=d*x+p*P+u*z+f*lt,a[13]=d*T+p*H+u*B+f*mt,a[2]=v*w+b*I+g*X+h*Z,a[6]=v*C+b*R+g*G+h*Q,a[10]=v*x+b*P+g*z+h*lt,a[14]=v*T+b*H+g*B+h*mt,a[3]=m*w+_*I+S*X+A*Z,a[7]=m*C+_*R+S*G+A*Q,a[11]=m*x+_*P+S*z+A*lt,a[15]=m*T+_*H+S*B+A*mt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],p=t[6],u=t[10],f=t[14],v=t[3],b=t[7],g=t[11],h=t[15],m=l*f-c*u,_=o*f-c*p,S=o*u-l*p,A=r*f-c*d,w=r*u-l*d,C=r*p-o*d;return n*(b*m-g*_+h*S)-i*(v*m-g*A+h*w)+s*(v*_-b*A+h*C)-a*(v*S-b*w+g*C)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],u=t[10],f=t[11],v=t[12],b=t[13],g=t[14],h=t[15],m=n*o-i*r,_=n*l-s*r,S=n*c-a*r,A=i*l-s*o,w=i*c-a*o,C=s*c-a*l,x=d*b-p*v,T=d*g-u*v,I=d*h-f*v,R=p*g-u*b,P=p*h-f*b,H=u*h-f*g,X=m*H-_*P+S*R+A*I-w*T+C*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/X;return t[0]=(o*H-l*P+c*R)*G,t[1]=(s*P-i*H-a*R)*G,t[2]=(b*C-g*w+h*A)*G,t[3]=(u*w-p*C-f*A)*G,t[4]=(l*I-r*H-c*T)*G,t[5]=(n*H-s*I+a*T)*G,t[6]=(g*S-v*C-h*_)*G,t[7]=(d*C-u*S+f*_)*G,t[8]=(r*P-o*I+c*x)*G,t[9]=(i*I-n*P-a*x)*G,t[10]=(v*w-b*S+h*m)*G,t[11]=(p*S-d*w-f*m)*G,t[12]=(o*T-r*R-l*x)*G,t[13]=(n*R-i*T+s*x)*G,t[14]=(b*_-v*A-g*m)*G,t[15]=(d*A-p*_+u*m)*G,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,d=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*r,0,c*l-s*o,d*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,d=r+r,p=o+o,u=a*c,f=a*d,v=a*p,b=r*d,g=r*p,h=o*p,m=l*c,_=l*d,S=l*p,A=i.x,w=i.y,C=i.z;return s[0]=(1-(b+h))*A,s[1]=(f+S)*A,s[2]=(v-_)*A,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(u+h))*w,s[6]=(g+m)*w,s[7]=0,s[8]=(v+_)*C,s[9]=(g-m)*C,s[10]=(1-(u+b))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinant();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Zr.set(s[0],s[1],s[2]).length(),o=Zr.set(s[4],s[5],s[6]).length(),l=Zr.set(s[8],s[9],s[10]).length();a<0&&(r=-r),hi.copy(this);let c=1/r,d=1/o,p=1/l;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=d,hi.elements[5]*=d,hi.elements[6]*=d,hi.elements[8]*=p,hi.elements[9]*=p,hi.elements[10]*=p,n.setFromRotationMatrix(hi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=pi,l=!1){let c=this.elements,d=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),f=(i+s)/(i-s),v,b;if(l)v=a/(r-a),b=r*a/(r-a);else if(o===pi)v=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===oo)v=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=pi,l=!1){let c=this.elements,d=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),f=-(i+s)/(i-s),v,b;if(l)v=1/(r-a),b=r/(r-a);else if(o===pi)v=-2/(r-a),b=-(r+a)/(r-a);else if(o===oo)v=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Zr=new V,hi=new De,XT=new V(0,0,0),WT=new V(1,1,1),Zs=new V,Fu=new V,Vn=new V,tS=new De,eS=new Ni,mi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],d=s[9],p=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return tS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return eS.setFromEuler(this),this.setFromQuaternion(eS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var Ll=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qT=0,nS=new V,Jr=new Ni,os=new De,zu=new V,El=new V,YT=new V,ZT=new Ni,iS=new V(1,0,0),sS=new V(0,1,0),aS=new V(0,0,1),rS={type:"added"},JT={type:"removed"},jr={type:"childadded",child:null},Im={type:"childremoved",child:null},Xn=class e extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=ec(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new mi,i=new Ni,s=new V(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new Bt}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(iS,t)}rotateY(t){return this.rotateOnAxis(sS,t)}rotateZ(t){return this.rotateOnAxis(aS,t)}translateOnAxis(t,n){return nS.copy(t).applyQuaternion(this.quaternion),this.position.add(nS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(iS,t)}translateY(t){return this.translateOnAxis(sS,t)}translateZ(t){return this.translateOnAxis(aS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?zu.copy(t):zu.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(El,zu,this.up):os.lookAt(zu,El,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Jr.setFromRotationMatrix(os),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rS),jr.child=t,this.dispatchEvent(jr),jr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(JT),Im.child=t,this.dispatchEvent(Im),Im.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),os.multiply(t.parent.matrixWorld)),t.applyMatrix4(os),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rS),jr.child=t,this.dispatchEvent(jr),jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,t,YT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,ZT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),p=r(t.shapes),u=r(t.skeletons),f=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Xn.DEFAULT_UP=new V(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ds=class extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},jT={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let g=n.getJointPose(b,i),h=this._getHandJoint(c,b);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),f=.02,v=.005;c.inputState.pinching&&u>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jT)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},QS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Js={h:0,s:0,l:0},Vu={h:0,s:0,l:0};function Om(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var kt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Jt.workingColorSpace){if(t=VT(t,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Om(r,a,t+1/3),this.g=Om(r,a,t),this.b=Om(r,a,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,n=dn){function i(a){a!==void 0&&parseFloat(a)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=dn){let i=QS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}copyLinearToSRGB(t){return this.r=ro(t.r),this.g=ro(t.g),this.b=ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return Jt.workingToColorSpace(hn.copy(this),t),Math.round(Zt(hn.r*255,0,255))*65536+Math.round(Zt(hn.g*255,0,255))*256+Math.round(Zt(hn.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.workingToColorSpace(hn.copy(this),n);let i=hn.r,s=hn.g,a=hn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,d=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=d<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=Jt.workingColorSpace){return Jt.workingToColorSpace(hn.copy(this),n),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=dn){Jt.workingToColorSpace(hn.copy(this),t);let n=hn.r,i=hn.g,s=hn.b;return t!==dn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Js),this.setHSL(Js.h+t,Js.s+n,Js.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Js),t.getHSL(Vu);let i=Rm(Js.h,Vu.h,n),s=Rm(Js.s,Vu.s,n),a=Rm(Js.l,Vu.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new kt;kt.NAMES=QS;var Il=class extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},di=new V,ls=new V,Pm=new V,cs=new V,Kr=new V,Qr=new V,oS=new V,Bm=new V,Fm=new V,zm=new V,Vm=new Ae,Hm=new Ae,Gm=new Ae,ta=class e{constructor(t=new V,n=new V,i=new V){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),di.subVectors(t,n),s.cross(di);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){di.subVectors(s,n),ls.subVectors(i,n),Pm.subVectors(t,n);let r=di.dot(di),o=di.dot(ls),l=di.dot(Pm),c=ls.dot(ls),d=ls.dot(Pm),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,f=(c*l-o*d)*u,v=(r*d-o*l)*u;return a.set(1-f-v,v,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,cs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,cs.x),l.addScaledVector(r,cs.y),l.addScaledVector(o,cs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Vm.setScalar(0),Hm.setScalar(0),Gm.setScalar(0),Vm.fromBufferAttribute(t,n),Hm.fromBufferAttribute(t,i),Gm.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Vm,a.x),r.addScaledVector(Hm,a.y),r.addScaledVector(Gm,a.z),r}static isFrontFacing(t,n,i,s){return di.subVectors(i,n),ls.subVectors(t,n),di.cross(ls).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),di.cross(ls).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Kr.subVectors(s,i),Qr.subVectors(a,i),Bm.subVectors(t,i);let l=Kr.dot(Bm),c=Qr.dot(Bm);if(l<=0&&c<=0)return n.copy(i);Fm.subVectors(t,s);let d=Kr.dot(Fm),p=Qr.dot(Fm);if(d>=0&&p<=d)return n.copy(s);let u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(i).addScaledVector(Kr,r);zm.subVectors(t,a);let f=Kr.dot(zm),v=Qr.dot(zm);if(v>=0&&f<=v)return n.copy(a);let b=f*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Qr,o);let g=d*v-f*p;if(g<=0&&p-d>=0&&f-v>=0)return oS.subVectors(a,s),o=(p-d)/(p-d+(f-v)),n.copy(s).addScaledVector(oS,o);let h=1/(g+b+u);return r=b*h,o=u*h,n.copy(i).addScaledVector(Kr,r).addScaledVector(Qr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},na=class{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(fi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=fi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,fi):fi.fromBufferAttribute(a,r),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hu.copy(i.boundingBox)),Hu.applyMatrix4(t.matrixWorld),this.union(Hu)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Al),Gu.subVectors(this.max,Al),$r.subVectors(t.a,Al),to.subVectors(t.b,Al),eo.subVectors(t.c,Al),js.subVectors(to,$r),Ks.subVectors(eo,to),Fa.subVectors($r,eo);let n=[0,-js.z,js.y,0,-Ks.z,Ks.y,0,-Fa.z,Fa.y,js.z,0,-js.x,Ks.z,0,-Ks.x,Fa.z,0,-Fa.x,-js.y,js.x,0,-Ks.y,Ks.x,0,-Fa.y,Fa.x,0];return!km(n,$r,to,eo,Gu)||(n=[1,0,0,0,1,0,0,0,1],!km(n,$r,to,eo,Gu))?!1:(ku.crossVectors(js,Ks),n=[ku.x,ku.y,ku.z],km(n,$r,to,eo,Gu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(us),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},us=[new V,new V,new V,new V,new V,new V,new V,new V],fi=new V,Hu=new na,$r=new V,to=new V,eo=new V,js=new V,Ks=new V,Fa=new V,Al=new V,Gu=new V,ku=new V,za=new V;function km(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){za.fromArray(e,a);let o=s.x*Math.abs(za.x)+s.y*Math.abs(za.y)+s.z*Math.abs(za.z),l=t.dot(za),c=n.dot(za),d=i.dot(za);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Ge=new V,Xu=new Qt,KT=0,Gn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=ig,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xu.fromBufferAttribute(this,n),Xu.applyMatrix3(t),this.setXY(n,Xu.x,Xu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.applyMatrix3(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.applyMatrix4(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.applyNormalMatrix(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.transformDirection(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Tl(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=An(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Tl(n,this.array)),n}setX(t,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Tl(n,this.array)),n}setY(t,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Tl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Tl(n,this.array)),n}setW(t,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),s=An(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),s=An(s,this.array),a=An(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ig&&(t.usage=this.usage),t}};var Ol=class extends Gn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Pl=class extends Gn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ai=class extends Gn{constructor(t,n,i){super(new Float32Array(t),n,i)}},QT=new na,wl=new V,Xm=new V,fo=class{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):QT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wl.subVectors(t,this.center);let n=wl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(wl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wl.copy(t.center).add(Xm)),this.expandByPoint(wl.copy(t.center).sub(Xm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$T=0,si=new De,Wm=new Xn,no=new V,Hn=new na,Cl=new na,Qe=new V,Li=class e extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=ec(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(FT(t)?Pl:Ol)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Bt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,n,i){return si.makeTranslation(t,n,i),this.applyMatrix4(si),this}scale(t,n,i){return si.makeScale(t,n,i),this.applyMatrix4(si),this}lookAt(t){return Wm.lookAt(t),Wm.updateMatrix(),this.applyMatrix4(Wm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ai(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Hn.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Cl.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Hn.min,Cl.min),Hn.expandByPoint(Qe),Qe.addVectors(Hn.max,Cl.max),Hn.expandByPoint(Qe)):(Hn.expandByPoint(Cl.min),Hn.expandByPoint(Cl.max))}Hn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)Qe.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Qe));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Qe.fromBufferAttribute(o,c),l&&(no.fromBufferAttribute(t,c),Qe.add(no)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new V,l[x]=new V;let c=new V,d=new V,p=new V,u=new Qt,f=new Qt,v=new Qt,b=new V,g=new V;function h(x,T,I){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,T),p.fromBufferAttribute(i,I),u.fromBufferAttribute(a,x),f.fromBufferAttribute(a,T),v.fromBufferAttribute(a,I),d.sub(c),p.sub(c),f.sub(u),v.sub(u);let R=1/(f.x*v.y-v.x*f.y);isFinite(R)&&(b.copy(d).multiplyScalar(v.y).addScaledVector(p,-f.y).multiplyScalar(R),g.copy(p).multiplyScalar(f.x).addScaledVector(d,-v.x).multiplyScalar(R),o[x].add(b),o[T].add(b),o[I].add(b),l[x].add(g),l[T].add(g),l[I].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let x=0,T=m.length;x<T;++x){let I=m[x],R=I.start,P=I.count;for(let H=R,X=R+P;H<X;H+=3)h(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let _=new V,S=new V,A=new V,w=new V;function C(x){A.fromBufferAttribute(s,x),w.copy(A);let T=o[x];_.copy(T),_.sub(A.multiplyScalar(A.dot(T))).normalize(),S.crossVectors(w,T);let R=S.dot(l[x])<0?-1:1;r.setXYZW(x,_.x,_.y,_.z,R)}for(let x=0,T=m.length;x<T;++x){let I=m[x],R=I.start,P=I.count;for(let H=R,X=R+P;H<X;H+=3)C(t.getX(H+0)),C(t.getX(H+1)),C(t.getX(H+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new V,a=new V,r=new V,o=new V,l=new V,c=new V,d=new V,p=new V;if(t)for(let u=0,f=t.count;u<f;u+=3){let v=t.getX(u+0),b=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,g),d.subVectors(r,a),p.subVectors(s,a),d.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,a),p.subVectors(s,a),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Qe.fromBufferAttribute(t,n),Qe.normalize(),t.setXYZ(n,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d),f=0,v=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*d;for(let h=0;h<d;h++)u[v++]=c[f++]}return new Gn(u,d,p)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let d=0,p=c.length;d<p;d++){let u=c[d],f=t(u,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];d.push(f.toJSON(t.data))}d.length>0&&(s[l]=d,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(n))}let a=t.morphAttributes;for(let c in a){let d=[],p=a[c];for(let u=0,f=p.length;u<f;u++)d.push(p[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,d=r.length;c<d;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tE=0,ia=class extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=ec(),this.name="",this.type="Material",this.blending=ka,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Dt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ka&&(i.blending=this.blending),this.side!==ps&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rh&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==ea&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ng&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ga&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ga&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ga&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var hs=new V,qm=new V,Wu=new V,Qs=new V,Ym=new V,qu=new V,Zm=new V,bh=class{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=hs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(hs.copy(this.origin).addScaledVector(this.direction,n),hs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){qm.copy(t).add(n).multiplyScalar(.5),Wu.copy(n).sub(t).normalize(),Qs.copy(this.origin).sub(qm);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Wu),o=Qs.dot(this.direction),l=-Qs.dot(Wu),c=Qs.lengthSq(),d=Math.abs(1-r*r),p,u,f,v;if(d>0)if(p=r*l-o,u=r*o-l,v=a*d,p>=0)if(u>=-v)if(u<=v){let b=1/d;p*=b,u*=b,f=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(qm).addScaledVector(Wu,u),f}intersectSphere(t,n){hs.subVectors(t.center,this.origin);let i=hs.dot(this.direction),s=hs.dot(hs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),d>=0?(a=(t.min.y-u.y)*d,r=(t.max.y-u.y)*d):(a=(t.max.y-u.y)*d,r=(t.min.y-u.y)*d),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,hs)!==null}intersectTriangle(t,n,i,s,a){Ym.subVectors(n,t),qu.subVectors(i,t),Zm.crossVectors(Ym,qu);let r=this.direction.dot(Zm),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Qs.subVectors(this.origin,t);let l=o*this.direction.dot(qu.crossVectors(Qs,qu));if(l<0)return null;let c=o*this.direction.dot(Ym.cross(Qs));if(c<0||l+c>r)return null;let d=-o*Qs.dot(Zm);return d<0?null:this.at(d/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bl=class extends ia{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lS=new De,Va=new bh,Yu=new fo,cS=new V,Zu=new V,Ju=new V,ju=new V,Jm=new V,Ku=new V,uS=new V,Qu=new V,Pe=class extends Xn{constructor(t=new Li,n=new Bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Ku.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let d=o[l],p=a[l];d!==0&&(Jm.fromBufferAttribute(p,t),r?Ku.addScaledVector(Jm,d):Ku.addScaledVector(Jm.sub(n),d))}n.add(Ku)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yu.copy(i.boundingSphere),Yu.applyMatrix4(a),Va.copy(t.ray).recast(t.near),!(Yu.containsPoint(Va.origin)===!1&&(Va.intersectSphere(Yu,cS)===null||Va.origin.distanceToSquared(cS)>(t.far-t.near)**2))&&(lS.copy(a).invert(),Va.copy(t.ray).applyMatrix4(lS),!(i.boundingBox!==null&&Va.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Va)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let g=u[v],h=r[g.materialIndex],m=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=m,A=_;S<A;S+=3){let w=o.getX(S),C=o.getX(S+1),x=o.getX(S+2);s=$u(this,h,t,i,c,d,p,w,C,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let v=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=v,h=b;g<h;g+=3){let m=o.getX(g),_=o.getX(g+1),S=o.getX(g+2);s=$u(this,r,t,i,c,d,p,m,_,S),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let g=u[v],h=r[g.materialIndex],m=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=m,A=_;S<A;S+=3){let w=S,C=S+1,x=S+2;s=$u(this,h,t,i,c,d,p,w,C,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let v=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=v,h=b;g<h;g+=3){let m=g,_=g+1,S=g+2;s=$u(this,r,t,i,c,d,p,m,_,S),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function eE(e,t,n,i,s,a,r,o){let l;if(t.side===_n?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===ps,o),l===null)return null;Qu.copy(o),Qu.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Qu);return c<n.near||c>n.far?null:{distance:c,point:Qu.clone(),object:e}}function $u(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Zu),e.getVertexPosition(l,Ju),e.getVertexPosition(c,ju);let d=eE(e,t,n,i,Zu,Ju,ju,uS);if(d){let p=new V;ta.getBarycoord(uS,Zu,Ju,ju,p),s&&(d.uv=ta.getInterpolatedAttribute(s,o,l,c,p,new Qt)),a&&(d.uv1=ta.getInterpolatedAttribute(a,o,l,c,p,new Qt)),r&&(d.normal=ta.getInterpolatedAttribute(r,o,l,c,p,new V),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new V,materialIndex:0};ta.getNormal(Zu,Ju,ju,u.normal),d.face=u,d.barycoord=p}return d}var Mh=class extends vn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=Oe,d=Oe,p,u){super(null,r,o,l,c,d,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jm=new V,nE=new V,iE=new Bt,Ri=class{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=jm.subVectors(i,n).cross(nE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(jm),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||iE.getNormalMatrix(t),s=this.coplanarPoint(jm).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ha=new fo,sE=new Qt(.5,.5),th=new V,po=class{constructor(t=new Ri,n=new Ri,i=new Ri,s=new Ri,a=new Ri,r=new Ri){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=pi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],d=a[4],p=a[5],u=a[6],f=a[7],v=a[8],b=a[9],g=a[10],h=a[11],m=a[12],_=a[13],S=a[14],A=a[15];if(s[0].setComponents(c-r,f-d,h-v,A-m).normalize(),s[1].setComponents(c+r,f+d,h+v,A+m).normalize(),s[2].setComponents(c+o,f+p,h+b,A+_).normalize(),s[3].setComponents(c-o,f-p,h-b,A-_).normalize(),i)s[4].setComponents(l,u,g,S).normalize(),s[5].setComponents(c-l,f-u,h-g,A-S).normalize();else if(s[4].setComponents(c-l,f-u,h-g,A-S).normalize(),n===pi)s[5].setComponents(c+l,f+u,h+g,A+S).normalize();else if(n===oo)s[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ha.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ha)}intersectsSprite(t){Ha.center.set(0,0,0);let n=sE.distanceTo(t.center);return Ha.radius=.7071067811865476+n,Ha.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ha)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(th.x=s.normal.x>0?t.max.x:t.min.x,th.y=s.normal.y>0?t.max.y:t.min.y,th.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(th)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fl=class extends vn{constructor(t=[],n=ua,i,s,a,r,o,l,c,d){super(t,n,i,s,a,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var sa=class extends vn{constructor(t,n,i=vi,s,a,r,o=Oe,l=Oe,c,d=Ui,p=1){if(d!==Ui&&d!==da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Th=class extends sa{constructor(t,n=vi,i=ua,s,a,r=Oe,o=Oe,l,c=Ui){let d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zl=class extends vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},wn=class e extends Li{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],d=[],p=[],u=0,f=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(d,3)),this.setAttribute("uv",new ai(p,2));function v(b,g,h,m,_,S,A,w,C,x,T){let I=S/C,R=A/x,P=S/2,H=A/2,X=w/2,G=C+1,z=x+1,B=0,Z=0,Q=new V;for(let lt=0;lt<z;lt++){let mt=lt*R-H;for(let ht=0;ht<G;ht++){let Lt=ht*I-P;Q[b]=Lt*m,Q[g]=mt*_,Q[h]=X,c.push(Q.x,Q.y,Q.z),Q[b]=0,Q[g]=0,Q[h]=w>0?1:-1,d.push(Q.x,Q.y,Q.z),p.push(ht/C),p.push(1-lt/x),B+=1}}for(let lt=0;lt<x;lt++)for(let mt=0;mt<C;mt++){let ht=u+mt+G*lt,Lt=u+mt+G*(lt+1),Me=u+(mt+1)+G*(lt+1),ve=u+(mt+1)+G*lt;l.push(ht,Lt,ve),l.push(Lt,Me,ve),Z+=6}o.addGroup(f,Z,T),f+=Z,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qa=class e extends Li{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,p=t/o,u=n/l,f=[],v=[],b=[],g=[];for(let h=0;h<d;h++){let m=h*u-r;for(let _=0;_<c;_++){let S=_*p-a;v.push(S,-m,0),b.push(0,0,1),g.push(_/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let _=m+c*h,S=m+c*(h+1),A=m+1+c*(h+1),w=m+1+c*h;f.push(_,S,w),f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new ai(v,3)),this.setAttribute("normal",new ai(b,3)),this.setAttribute("uv",new ai(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ja(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function fn(e){let t={};for(let n=0;n<e.length;n++){let i=Ja(e[n]);for(let s in i)t[s]=i[s]}return t}function aE(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Rg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var $S={clone:Ja,merge:fn},rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wn=class extends ia{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=oE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ja(t.uniforms),this.uniformsGroups=aE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Eh=class extends Wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},aa=class extends ia{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ag,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ah=class extends ia{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wh=class extends ia{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function eh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var ra=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ch=class extends ra{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$m,endingEnd:$m}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case tg:a=t,o=2*n-i;break;case eg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case tg:r=t,l=2*i-n;break;case eg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,d=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*d,this._offsetNext=r*d}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,v=(i-n)/(s-n),b=v*v,g=b*v,h=-u*g+2*u*b-u*v,m=(1+u)*g+(-1.5-2*u)*b+(-.5+u)*v+1,_=(-1-f)*g+(1.5+f)*b+.5*v,S=f*g-f*b;for(let A=0;A!==o;++A)a[A]=h*r[d+A]+m*r[c+A]+_*r[l+A]+S*r[p+A];return a}},Rh=class extends ra{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=(i-n)/(s-n),p=1-d;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*d;return a}},Dh=class extends ra{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Uh=class extends ra{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this.settings||this.DefaultSettings_,p=d.inTangents,u=d.outTangents;if(!p||!u){let b=(i-n)/(s-n),g=1-b;for(let h=0;h!==o;++h)a[h]=r[c+h]*g+r[l+h]*b;return a}let f=o*2,v=t-1;for(let b=0;b!==o;++b){let g=r[c+b],h=r[l+b],m=v*f+b*2,_=u[m],S=u[m+1],A=t*f+b*2,w=p[A],C=p[A+1],x=(i-n)/(s-n),T,I,R,P,H;for(let X=0;X<8;X++){T=x*x,I=T*x,R=1-x,P=R*R,H=P*R;let z=H*n+3*P*x*_+3*R*T*w+I*s-i;if(Math.abs(z)<1e-10)break;let B=3*P*(_-n)+6*R*x*(w-_)+3*T*(s-w);if(Math.abs(B)<1e-10)break;x=x-z/B,x=Math.max(0,Math.min(1,x))}a[b]=H*g+3*P*x*S+3*R*T*C+I*h}return a}},qn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=eh(n,this.TimeBufferType),this.values=eh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:eh(t.times,Array),values:eh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ch(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Uh(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.settings=this.settings),n}setInterpolation(t){let n;switch(t){case Rl:n=this.InterpolantFactoryMethodDiscrete;break;case vh:n=this.InterpolantFactoryMethodLinear;break;case sh:n=this.InterpolantFactoryMethodSmooth;break;case Qm:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Dt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rl;case this.InterpolantFactoryMethodLinear:return vh;case this.InterpolantFactoryMethodSmooth:return sh;case this.InterpolantFactoryMethodBezier:return Qm}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Rt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Rt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Rt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Rt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&zT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Rt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],d=t[o+1];if(c!==d&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,f=p+i;for(let v=0;v!==i;++v){let b=n[p+v];if(b!==n[u+v]||b!==n[f+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let f=0;f!==i;++f)n[u+f]=n[p+f]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=vh;var oa=class extends qn{constructor(t,n,i){super(t,n,i)}};oa.prototype.ValueTypeName="bool";oa.prototype.ValueBufferType=Array;oa.prototype.DefaultInterpolation=Rl;oa.prototype.InterpolantFactoryMethodLinear=void 0;oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Nh=class extends qn{constructor(t,n,i,s){super(t,n,i,s)}};Nh.prototype.ValueTypeName="color";var Lh=class extends qn{constructor(t,n,i,s){super(t,n,i,s)}};Lh.prototype.ValueTypeName="number";var Ih=class extends ra{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let d=c+o;c!==d;c+=4)Ni.slerpFlat(a,0,r,c-o,r,c,l);return a}},Vl=class extends qn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Ih(this.times,this.values,this.getValueSize(),t)}};Vl.prototype.ValueTypeName="quaternion";Vl.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends qn{constructor(t,n,i){super(t,n,i)}};la.prototype.ValueTypeName="string";la.prototype.ValueBufferType=Array;la.prototype.DefaultInterpolation=Rl;la.prototype.InterpolantFactoryMethodLinear=void 0;la.prototype.InterpolantFactoryMethodSmooth=void 0;var Oh=class extends qn{constructor(t,n,i,s){super(t,n,i,s)}};Oh.prototype.ValueTypeName="vector";var ah={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(hS(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!hS(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function hS(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ph=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,a===!1&&s.onStart!==void 0&&s.onStart(d,r,o),a=!0},this.itemEnd=function(d){r++,s.onProgress!==void 0&&s.onProgress(d,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return c.push(d,p),this},this.removeHandler=function(d){let p=c.indexOf(d);return p!==-1&&c.splice(p,2),this},this.getHandler=function(d){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],v=c[p+1];if(f.global&&(f.lastIndex=0),f.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tb=new Ph,mo=class{constructor(t){this.manager=t!==void 0?t:tb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var io=new WeakMap,Bh=class extends mo{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,r=ah.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(r),a.manager.itemEnd(t)},0);else{let p=io.get(r);p===void 0&&(p=[],io.set(r,p)),p.push({onLoad:n,onError:s})}return r}let o=lo("img");function l(){d(),n&&n(this);let p=io.get(this)||[];for(let u=0;u<p.length;u++){let f=p[u];f.onLoad&&f.onLoad(this)}io.delete(this),a.manager.itemEnd(t)}function c(p){d(),s&&s(p),ah.remove(`image:${t}`);let u=io.get(this)||[];for(let f=0;f<u.length;f++){let v=u[f];v.onError&&v.onError(p)}io.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ah.add(`image:${t}`,o),a.manager.itemStart(t),o.src=t,o}};var Hl=class extends mo{constructor(t){super(t)}load(t,n,i,s){let a=new vn,r=new Bh(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}},Gl=class extends Xn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var Km=new De,dS=new V,fS=new V,sg=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;dS.setFromMatrixPosition(t.matrixWorld),n.position.copy(dS),fS.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(fS),n.updateMatrixWorld(),Km.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Km,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===oo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Km)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},nh=new V,ih=new Ni,Ci=new V,kl=class extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nh,ih,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nh,ih,Ci.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(nh,ih,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nh,ih,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$s=new V,pS=new Qt,mS=new Qt,rn=class extends kl{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=_h*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cm*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(Cm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){$s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($s.x,$s.y).multiplyScalar(-t/$s.z),$s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($s.x,$s.y).multiplyScalar(-t/$s.z)}getViewSize(t,n){return this.getViewBounds(t,pS,mS),n.subVectors(mS,pS)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Cm*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var ag=class extends sg{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},ca=class extends Gl{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ag}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},Xl=class extends kl{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Wl=class extends Gl{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var so=-90,ao=1,Fh=class extends Xn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(so,ao,t,n);s.layers=this.layers,this.add(s);let a=new rn(so,ao,t,n);a.layers=this.layers,this.add(a);let r=new rn(so,ao,t,n);r.layers=this.layers,this.add(r);let o=new rn(so,ao,t,n);o.layers=this.layers,this.add(o);let l=new rn(so,ao,t,n);l.layers=this.layers,this.add(l);let c=new rn(so,ao,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,d]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(p,u,f),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},zh=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dg="\\[\\]\\.:\\/",lE=new RegExp("["+Dg+"]","g"),Ug="[^"+Dg+"]",cE="[^"+Dg.replace("\\.","")+"]",uE=/((?:WC+[\/:])*)/.source.replace("WC",Ug),hE=/(WCOD+)?/.source.replace("WCOD",cE),dE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ug),fE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ug),pE=new RegExp("^"+uE+hE+dE+fE+"$"),mE=["material","materials","bones","map"],rg=class{constructor(t,n,i){let s=i||be.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},be=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lE,"")}static parseTrackName(t){let n=pE.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);mE.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Rt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=rg;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x2=new Float32Array(1);var ql=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Dt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};function Ng(e,t,n,i){let s=gE(i);switch(n){case Mg:return e*t;case Eg:return e*t/s.components*s.byteLength;case qh:return e*t/s.components*s.byteLength;case Za:return e*t*2/s.components*s.byteLength;case Yh:return e*t*2/s.components*s.byteLength;case Tg:return e*t*3/s.components*s.byteLength;case ri:return e*t*4/s.components*s.byteLength;case Zh:return e*t*4/s.components*s.byteLength;case Kl:case Ql:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $l:case tc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case jh:case Qh:return Math.max(e,16)*Math.max(t,8)/4;case Jh:case Kh:return Math.max(e,8)*Math.max(t,8)/2;case $h:case td:case nd:case id:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ed:case sd:case ad:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case rd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case od:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ld:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case cd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ud:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case hd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case dd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case fd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case pd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case md:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case gd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case vd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case _d:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case yd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case xd:case Sd:case bd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Md:case Td:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ed:case Ad:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function gE(e){switch(e){case Cn:case yg:return{byteLength:1,components:1};case vo:case xg:case Pi:return{byteLength:2,components:1};case Xh:case Wh:return{byteLength:2,components:4};case vi:case kh:case _i:return{byteLength:4,components:1};case Sg:case bg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function Mb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function _E(e){let t=new WeakMap;function n(o,l){let c=o.array,d=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let d=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,d);else{p.sort((f,v)=>f.start-v.start);let u=0;for(let f=1;f<p.length;f++){let v=p[u],b=p[f];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++u,p[u]=b)}p.length=u+1;for(let f=0,v=p.length;f<v;f++){let b=p[f];e.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var yE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xE=`#ifdef USE_ALPHAHASH
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
#endif`,SE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EE=`#ifdef USE_AOMAP
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
#endif`,AE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wE=`#ifdef USE_BATCHING
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
#endif`,CE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NE=`#ifdef USE_IRIDESCENCE
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
#endif`,LE=`#ifdef USE_BUMPMAP
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,HE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,GE=`#define PI 3.141592653589793
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
} // validated`,kE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XE=`vec3 transformedNormal = objectNormal;
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
#endif`,WE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JE="gl_FragColor = linearToOutputTexel( gl_FragColor );",jE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
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
#endif`,tA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eA=`#ifdef USE_ENVMAP
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
#endif`,nA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rA=`#ifdef USE_GRADIENTMAP
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
}`,oA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uA=`uniform bool receiveShadow;
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
#endif`,hA=`#ifdef USE_ENVMAP
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
#endif`,dA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gA=`PhysicalMaterial material;
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
#endif`,vA=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
}`,_A=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yA=`#if defined( RE_IndirectDiffuse )
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
#endif`,xA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CA=`#if defined( USE_POINTS_UV )
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
#endif`,RA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IA=`#ifdef USE_MORPHTARGETS
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
#endif`,OA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HA=`#ifdef USE_NORMALMAP
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
#endif`,GA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$A=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,iw=`float getShadowMask() {
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
}`,sw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aw=`#ifdef USE_SKINNING
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
#endif`,rw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ow=`#ifdef USE_SKINNING
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
#endif`,lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dw=`#ifdef USE_TRANSMISSION
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
#endif`,fw=`#ifdef USE_TRANSMISSION
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
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_w=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yw=`uniform sampler2D t2D;
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
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tw=`#include <common>
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
}`,Ew=`#if DEPTH_PACKING == 3200
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
}`,Aw=`#define DISTANCE
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
}`,ww=`#define DISTANCE
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
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`uniform float scale;
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
}`,Uw=`uniform vec3 diffuse;
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
}`,Nw=`#include <common>
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
}`,Lw=`uniform vec3 diffuse;
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
}`,Iw=`#define LAMBERT
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
}`,Ow=`#define LAMBERT
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
}`,Pw=`#define MATCAP
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
}`,Bw=`#define MATCAP
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
}`,Fw=`#define NORMAL
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
}`,zw=`#define NORMAL
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
}`,Vw=`#define PHONG
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
}`,Hw=`#define PHONG
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
}`,Gw=`#define STANDARD
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
}`,kw=`#define STANDARD
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
}`,Xw=`#define TOON
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
}`,Ww=`#define TOON
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
}`,qw=`uniform float size;
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
}`,Yw=`uniform vec3 diffuse;
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
}`,Zw=`#include <common>
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
}`,Jw=`uniform vec3 color;
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
}`,jw=`uniform float rotation;
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
}`,Kw=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:yE,alphahash_pars_fragment:xE,alphamap_fragment:SE,alphamap_pars_fragment:bE,alphatest_fragment:ME,alphatest_pars_fragment:TE,aomap_fragment:EE,aomap_pars_fragment:AE,batching_pars_vertex:wE,batching_vertex:CE,begin_vertex:RE,beginnormal_vertex:DE,bsdfs:UE,iridescence_fragment:NE,bumpmap_pars_fragment:LE,clipping_planes_fragment:IE,clipping_planes_pars_fragment:OE,clipping_planes_pars_vertex:PE,clipping_planes_vertex:BE,color_fragment:FE,color_pars_fragment:zE,color_pars_vertex:VE,color_vertex:HE,common:GE,cube_uv_reflection_fragment:kE,defaultnormal_vertex:XE,displacementmap_pars_vertex:WE,displacementmap_vertex:qE,emissivemap_fragment:YE,emissivemap_pars_fragment:ZE,colorspace_fragment:JE,colorspace_pars_fragment:jE,envmap_fragment:KE,envmap_common_pars_fragment:QE,envmap_pars_fragment:$E,envmap_pars_vertex:tA,envmap_physical_pars_fragment:hA,envmap_vertex:eA,fog_vertex:nA,fog_pars_vertex:iA,fog_fragment:sA,fog_pars_fragment:aA,gradientmap_pars_fragment:rA,lightmap_pars_fragment:oA,lights_lambert_fragment:lA,lights_lambert_pars_fragment:cA,lights_pars_begin:uA,lights_toon_fragment:dA,lights_toon_pars_fragment:fA,lights_phong_fragment:pA,lights_phong_pars_fragment:mA,lights_physical_fragment:gA,lights_physical_pars_fragment:vA,lights_fragment_begin:_A,lights_fragment_maps:yA,lights_fragment_end:xA,logdepthbuf_fragment:SA,logdepthbuf_pars_fragment:bA,logdepthbuf_pars_vertex:MA,logdepthbuf_vertex:TA,map_fragment:EA,map_pars_fragment:AA,map_particle_fragment:wA,map_particle_pars_fragment:CA,metalnessmap_fragment:RA,metalnessmap_pars_fragment:DA,morphinstance_vertex:UA,morphcolor_vertex:NA,morphnormal_vertex:LA,morphtarget_pars_vertex:IA,morphtarget_vertex:OA,normal_fragment_begin:PA,normal_fragment_maps:BA,normal_pars_fragment:FA,normal_pars_vertex:zA,normal_vertex:VA,normalmap_pars_fragment:HA,clearcoat_normal_fragment_begin:GA,clearcoat_normal_fragment_maps:kA,clearcoat_pars_fragment:XA,iridescence_pars_fragment:WA,opaque_fragment:qA,packing:YA,premultiplied_alpha_fragment:ZA,project_vertex:JA,dithering_fragment:jA,dithering_pars_fragment:KA,roughnessmap_fragment:QA,roughnessmap_pars_fragment:$A,shadowmap_pars_fragment:tw,shadowmap_pars_vertex:ew,shadowmap_vertex:nw,shadowmask_pars_fragment:iw,skinbase_vertex:sw,skinning_pars_vertex:aw,skinning_vertex:rw,skinnormal_vertex:ow,specularmap_fragment:lw,specularmap_pars_fragment:cw,tonemapping_fragment:uw,tonemapping_pars_fragment:hw,transmission_fragment:dw,transmission_pars_fragment:fw,uv_pars_fragment:pw,uv_pars_vertex:mw,uv_vertex:gw,worldpos_vertex:vw,background_vert:_w,background_frag:yw,backgroundCube_vert:xw,backgroundCube_frag:Sw,cube_vert:bw,cube_frag:Mw,depth_vert:Tw,depth_frag:Ew,distance_vert:Aw,distance_frag:ww,equirect_vert:Cw,equirect_frag:Rw,linedashed_vert:Dw,linedashed_frag:Uw,meshbasic_vert:Nw,meshbasic_frag:Lw,meshlambert_vert:Iw,meshlambert_frag:Ow,meshmatcap_vert:Pw,meshmatcap_frag:Bw,meshnormal_vert:Fw,meshnormal_frag:zw,meshphong_vert:Vw,meshphong_frag:Hw,meshphysical_vert:Gw,meshphysical_frag:kw,meshtoon_vert:Xw,meshtoon_frag:Ww,points_vert:qw,points_frag:Yw,shadow_vert:Zw,shadow_frag:Jw,sprite_vert:jw,sprite_frag:Kw},ot={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Fi={basic:{uniforms:fn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:fn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:fn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:fn([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:fn([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new kt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:fn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:fn([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:fn([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:fn([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:fn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:fn([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:fn([ot.common,ot.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:fn([ot.lights,ot.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Fi.physical={uniforms:fn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Rd={r:0,b:0,g:0},ja=new mi,Qw=new De;function $w(e,t,n,i,s,a){let r=new kt(0),o=s===!0?0:1,l,c,d=null,p=0,u=null;function f(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){let S=m.backgroundBlurriness>0;_=t.get(_,S)}return _}function v(m){let _=!1,S=f(m);S===null?g(r,o):S&&S.isColor&&(g(S,1),_=!0);let A=e.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(m,_){let S=f(_);S&&(S.isCubeTexture||S.mapping===Jl)?(c===void 0&&(c=new Pe(new wn(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Ja(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ja.copy(_.backgroundRotation),ja.x*=-1,ja.y*=-1,ja.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ja.y*=-1,ja.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qw.makeRotationFromEuler(ja)),c.material.toneMapped=Jt.getTransfer(S.colorSpace)!==ne,(d!==S||p!==S.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,d=S,p=S.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pe(new qa(2,2),new Wn({name:"BackgroundMaterial",uniforms:Ja(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(S.colorSpace)!==ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,d=S,p=S.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(Rd,Rg(e)),n.buffers.color.setClear(Rd.r,Rd.g,Rd.b,_,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,_=1){r.set(m),o=_,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:b,dispose:h}}function tC(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(R,P,H,X,G){let z=!1,B=p(R,X,H,P);a!==B&&(a=B,c(a.object)),z=f(R,X,H,G),z&&v(R,X,H,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,S(R,P,H,X),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function c(R){return e.bindVertexArray(R)}function d(R){return e.deleteVertexArray(R)}function p(R,P,H,X){let G=X.wireframe===!0,z=i[P.id];z===void 0&&(z={},i[P.id]=z);let B=R.isInstancedMesh===!0?R.id:0,Z=z[B];Z===void 0&&(Z={},z[B]=Z);let Q=Z[H.id];Q===void 0&&(Q={},Z[H.id]=Q);let lt=Q[G];return lt===void 0&&(lt=u(l()),Q[G]=lt),lt}function u(R){let P=[],H=[],X=[];for(let G=0;G<n;G++)P[G]=0,H[G]=0,X[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:X,object:R,attributes:{},index:null}}function f(R,P,H,X){let G=a.attributes,z=P.attributes,B=0,Z=H.getAttributes();for(let Q in Z)if(Z[Q].location>=0){let mt=G[Q],ht=z[Q];if(ht===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ht=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ht=R.instanceColor)),mt===void 0||mt.attribute!==ht||ht&&mt.data!==ht.data)return!0;B++}return a.attributesNum!==B||a.index!==X}function v(R,P,H,X){let G={},z=P.attributes,B=0,Z=H.getAttributes();for(let Q in Z)if(Z[Q].location>=0){let mt=z[Q];mt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor));let ht={};ht.attribute=mt,mt&&mt.data&&(ht.data=mt.data),G[Q]=ht,B++}a.attributes=G,a.attributesNum=B,a.index=X}function b(){let R=a.newAttributes;for(let P=0,H=R.length;P<H;P++)R[P]=0}function g(R){h(R,0)}function h(R,P){let H=a.newAttributes,X=a.enabledAttributes,G=a.attributeDivisors;H[R]=1,X[R]===0&&(e.enableVertexAttribArray(R),X[R]=1),G[R]!==P&&(e.vertexAttribDivisor(R,P),G[R]=P)}function m(){let R=a.newAttributes,P=a.enabledAttributes;for(let H=0,X=P.length;H<X;H++)P[H]!==R[H]&&(e.disableVertexAttribArray(H),P[H]=0)}function _(R,P,H,X,G,z,B){B===!0?e.vertexAttribIPointer(R,P,H,G,z):e.vertexAttribPointer(R,P,H,X,G,z)}function S(R,P,H,X){b();let G=X.attributes,z=H.getAttributes(),B=P.defaultAttributeValues;for(let Z in z){let Q=z[Z];if(Q.location>=0){let lt=G[Z];if(lt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(lt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(lt=R.instanceColor)),lt!==void 0){let mt=lt.normalized,ht=lt.itemSize,Lt=t.get(lt);if(Lt===void 0)continue;let Me=Lt.buffer,ve=Lt.type,J=Lt.bytesPerElement,it=ve===e.INT||ve===e.UNSIGNED_INT||lt.gpuType===kh;if(lt.isInterleavedBufferAttribute){let rt=lt.data,Ft=rt.stride,At=lt.offset;if(rt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<Q.locationSize;Ut++)h(Q.location+Ut,rt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ut=0;Ut<Q.locationSize;Ut++)g(Q.location+Ut);e.bindBuffer(e.ARRAY_BUFFER,Me);for(let Ut=0;Ut<Q.locationSize;Ut++)_(Q.location+Ut,ht/Q.locationSize,ve,mt,Ft*J,(At+ht/Q.locationSize*Ut)*J,it)}else{if(lt.isInstancedBufferAttribute){for(let rt=0;rt<Q.locationSize;rt++)h(Q.location+rt,lt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let rt=0;rt<Q.locationSize;rt++)g(Q.location+rt);e.bindBuffer(e.ARRAY_BUFFER,Me);for(let rt=0;rt<Q.locationSize;rt++)_(Q.location+rt,ht/Q.locationSize,ve,mt,ht*J,ht/Q.locationSize*rt*J,it)}}else if(B!==void 0){let mt=B[Z];if(mt!==void 0)switch(mt.length){case 2:e.vertexAttrib2fv(Q.location,mt);break;case 3:e.vertexAttrib3fv(Q.location,mt);break;case 4:e.vertexAttrib4fv(Q.location,mt);break;default:e.vertexAttrib1fv(Q.location,mt)}}}}m()}function A(){T();for(let R in i){let P=i[R];for(let H in P){let X=P[H];for(let G in X){let z=X[G];for(let B in z)d(z[B].object),delete z[B];delete X[G]}}delete i[R]}}function w(R){if(i[R.id]===void 0)return;let P=i[R.id];for(let H in P){let X=P[H];for(let G in X){let z=X[G];for(let B in z)d(z[B].object),delete z[B];delete X[G]}}delete i[R.id]}function C(R){for(let P in i){let H=i[P];for(let X in H){let G=H[X];if(G[R.id]===void 0)continue;let z=G[R.id];for(let B in z)d(z[B].object),delete z[B];delete G[R.id]}}}function x(R){for(let P in i){let H=i[P],X=R.isInstancedMesh===!0?R.id:0,G=H[X];if(G!==void 0){for(let z in G){let B=G[z];for(let Z in B)d(B[Z].object),delete B[Z];delete G[z]}delete H[X],Object.keys(H).length===0&&delete i[P]}}}function T(){I(),r=!0,a!==s&&(a=s,c(a.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:g,disableUnusedAttributes:m}}function eC(e,t,n){let i;function s(c){i=c}function a(c,d){e.drawArrays(i,c,d),n.update(d,i,1)}function r(c,d,p){p!==0&&(e.drawArraysInstanced(i,c,d,p),n.update(d,i,p))}function o(c,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let f=0;for(let v=0;v<p;v++)f+=d[v];n.update(f,i,1)}function l(c,d,p,u){if(p===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)r(c[v],d[v],u[v]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,p);let v=0;for(let b=0;b<p;b++)v+=d[b]*u[b];n.update(v,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function nC(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==ri&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Cn&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_i&&!x)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",d=l(c);d!==c&&(Dt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:S,maxSamples:A,samples:w}}function iC(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Ri,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||i!==0||s;return s=u,i=p.length,f},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=d(p,u,0)},this.setState=function(p,u,f){let v=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,h=e.get(p);if(!s||v===null||v.length===0||a&&!g)a?d(null):c();else{let m=a?0:i,_=m*4,S=h.clippingState||null;l.value=S,S=d(v,u,_,f);for(let A=0;A!==_;++A)S[A]=n[A];h.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,u,f,v){let b=p!==null?p.length:0,g=null;if(b!==0){if(g=l.value,v!==!0||g===null){let h=f+b*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let _=0,S=f;_!==b;++_,S+=4)r.copy(p[_]).applyMatrix4(m,o),r.normal.toArray(g,S),g[S+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var fa=4,eb=[.125,.215,.35,.446,.526,.582],Qa=20,sC=256,nc=new Xl,nb=new kt,Lg=null,Ig=0,Og=0,Pg=!1,aC=new V,Ud=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=aC}=a;Lg=this._renderer.getRenderTarget(),Ig=this._renderer.getActiveCubeFace(),Og=this._renderer.getActiveMipmapLevel(),Pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ab(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lg,Ig,Og),this._renderer.xr.enabled=Pg,t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ua||t.mapping===Ya?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lg=this._renderer.getRenderTarget(),Ig=this._renderer.getActiveCubeFace(),Og=this._renderer.getActiveMipmapLevel(),Pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Pi,format:ri,colorSpace:Wa,depthBuffer:!1},s=ib(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ib(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rC(a)),this._blurMaterial=lC(a,t,n),this._ggxMaterial=oC(a,t,n)}return s}_compileMaterial(t){let n=new Pe(new Li,t);this._renderer.compile(n,nc)}_sceneToCubeUV(t,n,i,s,a){let l=new rn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(nb),p.toneMapping=gi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new wn,new Bl({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,h=!1,m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,h=!0):(g.color.copy(nb),h=!0);for(let _=0;_<6;_++){let S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[_],a.y,a.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[_],a.z)):(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[_]));let A=this._cubeSize;yo(s,S*A,_>2?A:0,A,A),p.setRenderTarget(s),h&&p.render(b,l),p.render(t,l)}p.toneMapping=f,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===ua||t.mapping===Ya;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ab()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;yo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,nc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=0+c*1.25,f=p*u,{_lodMax:v}=this,b=this._sizeLods[i],g=3*b*(i>v-fa?i-v+fa:0),h=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=v-n,yo(a,g,h,3*b,2*b),s.setRenderTarget(a),s.render(o,nc),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-i,yo(t,g,h,3*b,2*b),s.setRenderTarget(t),s.render(o,nc)}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");let d=3,p=this._lodMeshes[s];p.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Qa-1),b=a/v,g=isFinite(a)?1+Math.floor(d*b):Qa;g>Qa&&Dt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qa}`);let h=[],m=0;for(let C=0;C<Qa;++C){let x=C/b,T=Math.exp(-x*x/2);h.push(T),C===0?m+=T:C<g&&(m+=2*T)}for(let C=0;C<h.length;C++)h[C]=h[C]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;let S=this._sizeLods[s],A=3*S*(s>_-fa?s-_+fa:0),w=4*(this._cubeSize-S);yo(n,A,w,3*S,2*S),l.setRenderTarget(n),l.render(p,nc)}};function rC(e){let t=[],n=[],i=[],s=e,a=e-fa+1+eb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);t.push(o);let l=1/o;r>e-fa?l=eb[r-e+fa-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],f=6,v=6,b=3,g=2,h=1,m=new Float32Array(b*v*f),_=new Float32Array(g*v*f),S=new Float32Array(h*v*f);for(let w=0;w<f;w++){let C=w%3*2/3-1,x=w>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];m.set(T,b*v*w),_.set(u,g*v*w);let I=[w,w,w,w,w,w];S.set(I,h*v*w)}let A=new Li;A.setAttribute("position",new Gn(m,b)),A.setAttribute("uv",new Gn(_,g)),A.setAttribute("faceIndex",new Gn(S,h)),i.push(new Pe(A,null)),s>fa&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function ib(e,t,n){let i=new kn(e,t,n);return i.texture.mapping=Jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function oC(e,t,n){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function lC(e,t,n){let i=new Float32Array(Qa),s=new V(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Qa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function sb(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function ab(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Id(){return`

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
	`}var Nd=class extends kn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Fl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),a=new Wn({name:"CubemapFromEquirect",uniforms:Ja(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Oi});a.uniforms.tEquirect.value=n;let r=new Pe(s,a),o=n.minFilter;return n.minFilter===ha&&(n.minFilter=on),new Fh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function cC(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?r(u):a(u)}function a(u){if(u&&u.isTexture){let f=u.mapping;if(f===Vh||f===Hh)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let b=new Nd(v.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let f=u.mapping,v=f===Vh||f===Hh,b=f===ua||f===Ya;if(v||b){let g=n.get(u),h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Ud(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return v&&m&&m.height>0||b&&m&&l(m)?(i===null&&(i=new Ud(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,f){return f===Vh?u.mapping=ua:f===Hh&&(u.mapping=Ya),u}function l(u){let f=0,v=6;for(let b=0;b<v;b++)u[b]!==void 0&&f++;return f===v}function c(u){let f=u.target;f.removeEventListener("dispose",c);let v=t.get(f);v!==void 0&&(t.delete(f),v.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let v=n.get(f);v!==void 0&&(n.delete(f),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function uC(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ul("WebGLRenderer: "+i+" extension not supported."),s}}}function hC(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete s[u.id];let f=a.get(u);f&&(t.remove(f),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let f in u)t.update(u[f],e.ARRAY_BUFFER)}function c(p){let u=[],f=p.index,v=p.attributes.position,b=0;if(v===void 0)return;if(f!==null){let m=f.array;b=f.version;for(let _=0,S=m.length;_<S;_+=3){let A=m[_+0],w=m[_+1],C=m[_+2];u.push(A,w,w,C,C,A)}}else{let m=v.array;b=v.version;for(let _=0,S=m.length/3-1;_<S;_+=3){let A=_+0,w=_+1,C=_+2;u.push(A,w,w,C,C,A)}}let g=new(v.count>=65535?Pl:Ol)(u,1);g.version=b;let h=a.get(p);h&&t.remove(h),a.set(p,g)}function d(p){let u=a.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function dC(e,t,n){let i;function s(u){i=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,f){e.drawElements(i,f,a,u*r),n.update(f,i,1)}function c(u,f,v){v!==0&&(e.drawElementsInstanced(i,f,a,u*r,v),n.update(f,i,v))}function d(u,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,u,0,v);let g=0;for(let h=0;h<v;h++)g+=f[h];n.update(g,i,1)}function p(u,f,v,b){if(v===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<u.length;h++)c(u[h]/r,f[h],b[h]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,a,u,0,b,0,v);let h=0;for(let m=0;m<v;m++)h+=f[m]*b[m];n.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function fC(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Rt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function pC(e,t,n){let i=new WeakMap,s=new Ae;function a(r,o,l){let c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,u=i.get(o);if(u===void 0||u.count!==p){let T=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],_=0;f===!0&&(_=1),v===!0&&(_=2),b===!0&&(_=3);let S=o.attributes.position.count*_,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*A*4*p),C=new Nl(w,S,A,p);C.type=_i,C.needsUpdate=!0;let x=_*4;for(let I=0;I<p;I++){let R=g[I],P=h[I],H=m[I],X=S*A*4*I;for(let G=0;G<R.count;G++){let z=G*x;f===!0&&(s.fromBufferAttribute(R,G),w[X+z+0]=s.x,w[X+z+1]=s.y,w[X+z+2]=s.z,w[X+z+3]=0),v===!0&&(s.fromBufferAttribute(P,G),w[X+z+4]=s.x,w[X+z+5]=s.y,w[X+z+6]=s.z,w[X+z+7]=0),b===!0&&(s.fromBufferAttribute(H,G),w[X+z+8]=s.x,w[X+z+9]=s.y,w[X+z+10]=s.z,w[X+z+11]=H.itemSize===4?s.w:1)}}u={count:p,texture:C,size:new Qt(S,A)},i.set(o,u),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function mC(e,t,n,i,s){let a=new WeakMap;function r(c){let d=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==d&&(t.update(u),a.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==d&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;a.get(f)!==d&&(f.update(),a.set(f,d))}return u}function o(){a=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:o}}var gC={[dg]:"LINEAR_TONE_MAPPING",[fg]:"REINHARD_TONE_MAPPING",[pg]:"CINEON_TONE_MAPPING",[Zl]:"ACES_FILMIC_TONE_MAPPING",[gg]:"AGX_TONE_MAPPING",[vg]:"NEUTRAL_TONE_MAPPING",[mg]:"CUSTOM_TONE_MAPPING"};function vC(e,t,n,i,s){let a=new kn(t,n,{type:e,depthBuffer:i,stencilBuffer:s}),r=new kn(t,n,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),o=new Li;o.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ai([0,2,0,0,2,0],2));let l=new Eh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Pe(o,l),d=new Xl(-1,1,1,-1,0,1),p=null,u=null,f=!1,v,b=null,g=[],h=!1;this.setSize=function(m,_){a.setSize(m,_),r.setSize(m,_);for(let S=0;S<g.length;S++){let A=g[S];A.setSize&&A.setSize(m,_)}},this.setEffects=function(m){g=m,h=g.length>0&&g[0].isRenderPass===!0;let _=a.width,S=a.height;for(let A=0;A<g.length;A++){let w=g[A];w.setSize&&w.setSize(_,S)}},this.begin=function(m,_){if(f||m.toneMapping===gi&&g.length===0)return!1;if(b=_,_!==null){let S=_.width,A=_.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return h===!1&&m.setRenderTarget(a),v=m.toneMapping,m.toneMapping=gi,!0},this.hasRenderPass=function(){return h},this.end=function(m,_){m.toneMapping=v,f=!0;let S=a,A=r;for(let w=0;w<g.length;w++){let C=g[w];if(C.enabled!==!1&&(C.render(m,A,S,_),C.needsSwap!==!1)){let x=S;S=A,A=x}}if(p!==m.outputColorSpace||u!==m.toneMapping){p=m.outputColorSpace,u=m.toneMapping,l.defines={},Jt.getTransfer(p)===ne&&(l.defines.SRGB_TRANSFER="");let w=gC[u];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(b),m.render(c,d),b=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),r.dispose(),o.dispose(),l.dispose()}}var Tb=new vn,zg=new sa(1,1),Eb=new Nl,Ab=new Sh,wb=new Fl,rb=[],ob=[],lb=new Float32Array(16),cb=new Float32Array(9),ub=new Float32Array(4);function So(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=rb[s];if(a===void 0&&(a=new Float32Array(s),rb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function We(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Od(e,t){let n=ob[t];n===void 0&&(n=new Int32Array(t),ob[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function _C(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function yC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(We(n,t))return;e.uniform2fv(this.addr,t),qe(n,t)}}function xC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(We(n,t))return;e.uniform3fv(this.addr,t),qe(n,t)}}function SC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(We(n,t))return;e.uniform4fv(this.addr,t),qe(n,t)}}function bC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(We(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qe(n,t)}else{if(We(n,i))return;ub.set(i),e.uniformMatrix2fv(this.addr,!1,ub),qe(n,i)}}function MC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(We(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qe(n,t)}else{if(We(n,i))return;cb.set(i),e.uniformMatrix3fv(this.addr,!1,cb),qe(n,i)}}function TC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(We(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qe(n,t)}else{if(We(n,i))return;lb.set(i),e.uniformMatrix4fv(this.addr,!1,lb),qe(n,i)}}function EC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function AC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(We(n,t))return;e.uniform2iv(this.addr,t),qe(n,t)}}function wC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(We(n,t))return;e.uniform3iv(this.addr,t),qe(n,t)}}function CC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(We(n,t))return;e.uniform4iv(this.addr,t),qe(n,t)}}function RC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function DC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(We(n,t))return;e.uniform2uiv(this.addr,t),qe(n,t)}}function UC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(We(n,t))return;e.uniform3uiv(this.addr,t),qe(n,t)}}function NC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(We(n,t))return;e.uniform4uiv(this.addr,t),qe(n,t)}}function LC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(zg.compareFunction=n.isReversedDepthBuffer()?Cd:wd,a=zg):a=Tb,n.setTexture2D(t||a,s)}function IC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Ab,s)}function OC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||wb,s)}function PC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Eb,s)}function BC(e){switch(e){case 5126:return _C;case 35664:return yC;case 35665:return xC;case 35666:return SC;case 35674:return bC;case 35675:return MC;case 35676:return TC;case 5124:case 35670:return EC;case 35667:case 35671:return AC;case 35668:case 35672:return wC;case 35669:case 35673:return CC;case 5125:return RC;case 36294:return DC;case 36295:return UC;case 36296:return NC;case 35678:case 36198:case 36298:case 36306:case 35682:return LC;case 35679:case 36299:case 36307:return IC;case 35680:case 36300:case 36308:case 36293:return OC;case 36289:case 36303:case 36311:case 36292:return PC}}function FC(e,t){e.uniform1fv(this.addr,t)}function zC(e,t){let n=So(t,this.size,2);e.uniform2fv(this.addr,n)}function VC(e,t){let n=So(t,this.size,3);e.uniform3fv(this.addr,n)}function HC(e,t){let n=So(t,this.size,4);e.uniform4fv(this.addr,n)}function GC(e,t){let n=So(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function kC(e,t){let n=So(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function XC(e,t){let n=So(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function WC(e,t){e.uniform1iv(this.addr,t)}function qC(e,t){e.uniform2iv(this.addr,t)}function YC(e,t){e.uniform3iv(this.addr,t)}function ZC(e,t){e.uniform4iv(this.addr,t)}function JC(e,t){e.uniform1uiv(this.addr,t)}function jC(e,t){e.uniform2uiv(this.addr,t)}function KC(e,t){e.uniform3uiv(this.addr,t)}function QC(e,t){e.uniform4uiv(this.addr,t)}function $C(e,t,n){let i=this.cache,s=t.length,a=Od(n,s);We(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=zg:r=Tb;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function tR(e,t,n){let i=this.cache,s=t.length,a=Od(n,s);We(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Ab,a[r])}function eR(e,t,n){let i=this.cache,s=t.length,a=Od(n,s);We(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||wb,a[r])}function nR(e,t,n){let i=this.cache,s=t.length,a=Od(n,s);We(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Eb,a[r])}function iR(e){switch(e){case 5126:return FC;case 35664:return zC;case 35665:return VC;case 35666:return HC;case 35674:return GC;case 35675:return kC;case 35676:return XC;case 5124:case 35670:return WC;case 35667:case 35671:return qC;case 35668:case 35672:return YC;case 35669:case 35673:return ZC;case 5125:return JC;case 36294:return jC;case 36295:return KC;case 36296:return QC;case 35678:case 36198:case 36298:case 36306:case 35682:return $C;case 35679:case 36299:case 36307:return tR;case 35680:case 36300:case 36308:case 36293:return eR;case 36289:case 36303:case 36311:case 36292:return nR}}var Vg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BC(n.type)}},Hg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iR(n.type)}},Gg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Bg=/(\w+)(\])?(\[|\.)?/g;function hb(e,t){e.seq.push(t),e.map[t.id]=t}function sR(e,t,n){let i=e.name,s=i.length;for(Bg.lastIndex=0;;){let a=Bg.exec(i),r=Bg.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){hb(n,c===void 0?new Vg(o,e,t):new Hg(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new Gg(o),hb(n,p)),n=p}}}var xo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);sR(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function db(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var aR=37297,rR=0;function oR(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var fb=new Bt;function lR(e){Jt._getMatrix(fb,Jt.workingColorSpace,e);let t=`mat3( ${fb.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case Dl:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function pb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+oR(e.getShaderSource(t),o)}else return a}function cR(e,t){let n=lR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var uR={[dg]:"Linear",[fg]:"Reinhard",[pg]:"Cineon",[Zl]:"ACESFilmic",[gg]:"AgX",[vg]:"Neutral",[mg]:"Custom"};function hR(e,t){let n=uR[t];return n===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Dd=new V;function dR(){Jt.getLuminanceCoefficients(Dd);let e=Dd.x.toFixed(4),t=Dd.y.toFixed(4),n=Dd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sc).join(`
`)}function pR(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function mR(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function sc(e){return e!==""}function mb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gR=/^[ \t]*#include +<([\w\d./]+)>/gm;function kg(e){return e.replace(gR,_R)}var vR=new Map;function _R(e,t){let n=zt[t];if(n===void 0){let i=vR.get(t);if(i!==void 0)n=zt[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kg(n)}var yR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vb(e){return e.replace(yR,xR)}function xR(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function _b(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var SR={[Yl]:"SHADOWMAP_TYPE_PCF",[go]:"SHADOWMAP_TYPE_VSM"};function bR(e){return SR[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var MR={[ua]:"ENVMAP_TYPE_CUBE",[Ya]:"ENVMAP_TYPE_CUBE",[Jl]:"ENVMAP_TYPE_CUBE_UV"};function TR(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":MR[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var ER={[Ya]:"ENVMAP_MODE_REFRACTION"};function AR(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":ER[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wR={[hg]:"ENVMAP_BLENDING_MULTIPLY",[BS]:"ENVMAP_BLENDING_MIX",[FS]:"ENVMAP_BLENDING_ADD"};function CR(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":wR[e.combine]||"ENVMAP_BLENDING_NONE"}function RR(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function DR(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=bR(n),c=TR(n),d=AR(n),p=CR(n),u=RR(n),f=fR(n),v=pR(a),b=s.createProgram(),g,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(sc).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(sc).join(`
`),h.length>0&&(h+=`
`)):(g=[_b(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sc).join(`
`),h=[_b(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gi?"#define TONE_MAPPING":"",n.toneMapping!==gi?zt.tonemapping_pars_fragment:"",n.toneMapping!==gi?hR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,cR("linearToOutputTexel",n.outputColorSpace),dR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sc).join(`
`)),r=kg(r),r=mb(r,n),r=gb(r,n),o=kg(o),o=mb(o,n),o=gb(o,n),r=vb(r),o=vb(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let _=m+g+r,S=m+h+o,A=db(s,s.VERTEX_SHADER,_),w=db(s,s.FRAGMENT_SHADER,S);s.attachShader(b,A),s.attachShader(b,w),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(R){if(e.debug.checkShaderErrors){let P=s.getProgramInfoLog(b)||"",H=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(w)||"",G=P.trim(),z=H.trim(),B=X.trim(),Z=!0,Q=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,b,A,w);else{let lt=pb(s,A,"vertex"),mt=pb(s,w,"fragment");Rt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+lt+`
`+mt)}else G!==""?Dt("WebGLProgram: Program Info Log:",G):(z===""||B==="")&&(Q=!1);Q&&(R.diagnostics={runnable:Z,programLog:G,vertexShader:{log:z,prefix:g},fragmentShader:{log:B,prefix:h}})}s.deleteShader(A),s.deleteShader(w),x=new xo(s,b),T=mR(s,b)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(b,aR)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=w,this}var UR=0,Xg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Wg(t),n.set(t,i)),i}},Wg=class{constructor(t){this.id=UR++,this.code=t,this.usedTimes=0}};function NR(e,t,n,i,s,a){let r=new Ll,o=new Xg,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,T,I,R,P){let H=R.fog,X=P.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=t.get(x.envMap||G,z),Z=B&&B.mapping===Jl?B.image.height:null,Q=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=lt!==void 0?lt.length:0,ht=0;X.morphAttributes.position!==void 0&&(ht=1),X.morphAttributes.normal!==void 0&&(ht=2),X.morphAttributes.color!==void 0&&(ht=3);let Lt,Me,ve,J;if(Q){let se=Fi[Q];Lt=se.vertexShader,Me=se.fragmentShader}else Lt=x.vertexShader,Me=x.fragmentShader,o.update(x),ve=o.getVertexShaderID(x),J=o.getFragmentShaderID(x);let it=e.getRenderTarget(),rt=e.state.buffers.depth.getReversed(),Ft=P.isInstancedMesh===!0,At=P.isBatchedMesh===!0,Ut=!!x.map,Ye=!!x.matcap,jt=!!B,ie=!!x.aoMap,he=!!x.lightMap,Vt=!!x.bumpMap,Ue=!!x.normalMap,D=!!x.displacementMap,Be=!!x.emissiveMap,ee=!!x.metalnessMap,pe=!!x.roughnessMap,St=x.anisotropy>0,E=x.clearcoat>0,y=x.dispersion>0,N=x.iridescence>0,Y=x.sheen>0,K=x.transmission>0,q=St&&!!x.anisotropyMap,gt=E&&!!x.clearcoatMap,st=E&&!!x.clearcoatNormalMap,Et=E&&!!x.clearcoatRoughnessMap,wt=N&&!!x.iridescenceMap,$=N&&!!x.iridescenceThicknessMap,et=Y&&!!x.sheenColorMap,vt=Y&&!!x.sheenRoughnessMap,yt=!!x.specularMap,dt=!!x.specularColorMap,Ht=!!x.specularIntensityMap,U=K&&!!x.transmissionMap,at=K&&!!x.thicknessMap,nt=!!x.gradientMap,pt=!!x.alphaMap,tt=x.alphaTest>0,W=!!x.alphaHash,_t=!!x.extensions,Nt=gi;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Nt=e.toneMapping);let me={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Lt,fragmentShader:Me,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:At,batchingColor:At&&P._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&P.instanceColor!==null,instancingMorph:Ft&&P.morphTexture!==null,outputColorSpace:it===null?e.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Wa,alphaToCoverage:!!x.alphaToCoverage,map:Ut,matcap:Ye,envMap:jt,envMapMode:jt&&B.mapping,envMapCubeUVHeight:Z,aoMap:ie,lightMap:he,bumpMap:Vt,normalMap:Ue,displacementMap:D,emissiveMap:Be,normalMapObjectSpace:Ue&&x.normalMapType===HS,normalMapTangentSpace:Ue&&x.normalMapType===Ag,metalnessMap:ee,roughnessMap:pe,anisotropy:St,anisotropyMap:q,clearcoat:E,clearcoatMap:gt,clearcoatNormalMap:st,clearcoatRoughnessMap:Et,dispersion:y,iridescence:N,iridescenceMap:wt,iridescenceThicknessMap:$,sheen:Y,sheenColorMap:et,sheenRoughnessMap:vt,specularMap:yt,specularColorMap:dt,specularIntensityMap:Ht,transmission:K,transmissionMap:U,thicknessMap:at,gradientMap:nt,opaque:x.transparent===!1&&x.blending===ka&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:tt,alphaHash:W,combine:x.combine,mapUv:Ut&&v(x.map.channel),aoMapUv:ie&&v(x.aoMap.channel),lightMapUv:he&&v(x.lightMap.channel),bumpMapUv:Vt&&v(x.bumpMap.channel),normalMapUv:Ue&&v(x.normalMap.channel),displacementMapUv:D&&v(x.displacementMap.channel),emissiveMapUv:Be&&v(x.emissiveMap.channel),metalnessMapUv:ee&&v(x.metalnessMap.channel),roughnessMapUv:pe&&v(x.roughnessMap.channel),anisotropyMapUv:q&&v(x.anisotropyMap.channel),clearcoatMapUv:gt&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:$&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:et&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:vt&&v(x.sheenRoughnessMap.channel),specularMapUv:yt&&v(x.specularMap.channel),specularColorMapUv:dt&&v(x.specularColorMap.channel),specularIntensityMapUv:Ht&&v(x.specularIntensityMap.channel),transmissionMapUv:U&&v(x.transmissionMap.channel),thicknessMapUv:at&&v(x.thicknessMap.channel),alphaMapUv:pt&&v(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ue||St),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!X.attributes.uv&&(Ut||pt),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&Ue===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:rt,skinning:P.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:ht,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Ut&&x.map.isVideoTexture===!0&&Jt.getTransfer(x.map.colorSpace)===ne,decodeVideoTextureEmissive:Be&&x.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(x.emissiveMap.colorSpace)===ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ii,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_t&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&x.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function g(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(h(T,x),m(T,x),T.push(e.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function h(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function m(x,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),x.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),x.push(r.mask)}function _(x){let T=f[x.type],I;if(T){let R=Fi[T];I=$S.clone(R.uniforms)}else I=x.uniforms;return I}function S(x,T){let I=d.get(T);return I!==void 0?++I.usedTimes:(I=new DR(e,T,x,s),c.push(I),d.set(T,I)),I}function A(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:_,acquireProgram:S,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:C}}function LR(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function IR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function yb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function xb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,v,b,g,h){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:v,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:g,group:h},e[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=v,m.materialVariant=r(u),m.groupOrder=b,m.renderOrder=u.renderOrder,m.z=g,m.group=h),t++,m}function l(u,f,v,b,g,h){let m=o(u,f,v,b,g,h);v.transmission>0?i.push(m):v.transparent===!0?s.push(m):n.push(m)}function c(u,f,v,b,g,h){let m=o(u,f,v,b,g,h);v.transmission>0?i.unshift(m):v.transparent===!0?s.unshift(m):n.unshift(m)}function d(u,f){n.length>1&&n.sort(u||IR),i.length>1&&i.sort(f||yb),s.length>1&&s.sort(f||yb)}function p(){for(let u=t,f=e.length;u<f;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:d}}function OR(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new xb,e.set(i,[r])):s>=a.length?(r=new xb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function PR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new V,color:new kt};break;case"SpotLight":n={position:new V,direction:new V,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new kt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":n={color:new kt,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function BR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var FR=0;function zR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function VR(e){let t=new PR,n=BR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,a=new De,r=new De;function o(c){let d=0,p=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,v=0,b=0,g=0,h=0,m=0,_=0,S=0,A=0,w=0,C=0;c.sort(zR);for(let T=0,I=c.length;T<I;T++){let R=c[T],P=R.color,H=R.intensity,X=R.distance,G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Za?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=P.r*H,p+=P.g*H,u+=P.b*H;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],H);C++}else if(R.isDirectionalLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let B=R.shadow,Z=n.get(R);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=R.shadow.matrix,m++}i.directional[f]=z,f++}else if(R.isSpotLight){let z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(P).multiplyScalar(H),z.distance=X,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[b]=z;let B=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,B.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[b]=B.matrix,R.castShadow){let Z=n.get(R);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,i.spotShadow[b]=Z,i.spotShadowMap[b]=G,S++}b++}else if(R.isRectAreaLight){let z=t.get(R);z.color.copy(P).multiplyScalar(H),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=z,g++}else if(R.isPointLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let B=R.shadow,Z=n.get(R);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,i.pointShadow[v]=Z,i.pointShadowMap[v]=G,i.pointShadowMatrix[v]=R.shadow.matrix,_++}i.point[v]=z,v++}else if(R.isHemisphereLight){let z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(H),z.groundColor.copy(R.groundColor).multiplyScalar(H),i.hemi[h]=z,h++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==f||x.pointLength!==v||x.spotLength!==b||x.rectAreaLength!==g||x.hemiLength!==h||x.numDirectionalShadows!==m||x.numPointShadows!==_||x.numSpotShadows!==S||x.numSpotMaps!==A||x.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=b,i.rectArea.length=g,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,x.directionalLength=f,x.pointLength=v,x.spotLength=b,x.rectAreaLength=g,x.hemiLength=h,x.numDirectionalShadows=m,x.numPointShadows=_,x.numSpotShadows=S,x.numSpotMaps=A,x.numLightProbes=C,i.version=FR++)}function l(c,d){let p=0,u=0,f=0,v=0,b=0,g=d.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){let _=c[h];if(_.isDirectionalLight){let S=i.directional[p];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(_.isSpotLight){let S=i.spot[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),r.identity(),a.copy(_.matrixWorld),a.premultiply(g),r.extractRotation(a),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){let S=i.point[u];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){let S=i.hemi[b];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:i}}function Sb(e){let t=new VR(e),n=[],i=[];function s(d){c.camera=d,n.length=0,i.length=0}function a(d){n.push(d)}function r(d){i.push(d)}function o(){t.setup(n)}function l(d){t.setupView(n,d)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function HR(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Sb(e),t.set(s,[o])):a>=r.length?(o=new Sb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var GR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kR=`uniform sampler2D shadow_pass;
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
}`,XR=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],WR=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],bb=new De,ic=new V,Fg=new V;function qR(e,t,n){let i=new po,s=new Qt,a=new Qt,r=new Ae,o=new Ah,l=new wh,c={},d=n.maxTextureSize,p={[ps]:_n,[_n]:ps,[Ii]:Ii},u=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:GR,fragmentShader:kR}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let v=new Li;v.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Pe(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let h=this.type;this.render=function(w,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===_S&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yl);let T=e.getRenderTarget(),I=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),P=e.state;P.setBlending(Oi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let H=h!==this.type;H&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(G=>G.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,G=w.length;X<G;X++){let z=w[X],B=z.shadow;if(B===void 0){Dt("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Z=B.getFrameExtents();s.multiply(Z),a.copy(B.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/Z.x),s.x=a.x*Z.x,B.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/Z.y),s.y=a.y*Z.y,B.mapSize.y=a.y));let Q=e.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Q,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===go){if(z.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new kn(s.x,s.y,{format:Za,type:Pi,minFilter:on,magFilter:on,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new sa(s.x,s.y,_i),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=Ui,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Oe,B.map.depthTexture.magFilter=Oe}else z.isPointLight?(B.map=new Nd(s.x),B.map.depthTexture=new Th(s.x,vi)):(B.map=new kn(s.x,s.y),B.map.depthTexture=new sa(s.x,s.y,vi)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=Ui,this.type===Yl?(B.map.depthTexture.compareFunction=Q?Cd:wd,B.map.depthTexture.minFilter=on,B.map.depthTexture.magFilter=on):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Oe,B.map.depthTexture.magFilter=Oe);B.camera.updateProjectionMatrix()}let lt=B.map.isWebGLCubeRenderTarget?6:1;for(let mt=0;mt<lt;mt++){if(B.map.isWebGLCubeRenderTarget)e.setRenderTarget(B.map,mt),e.clear();else{mt===0&&(e.setRenderTarget(B.map),e.clear());let ht=B.getViewport(mt);r.set(a.x*ht.x,a.y*ht.y,a.x*ht.z,a.y*ht.w),P.viewport(r)}if(z.isPointLight){let ht=B.camera,Lt=B.matrix,Me=z.distance||ht.far;Me!==ht.far&&(ht.far=Me,ht.updateProjectionMatrix()),ic.setFromMatrixPosition(z.matrixWorld),ht.position.copy(ic),Fg.copy(ht.position),Fg.add(XR[mt]),ht.up.copy(WR[mt]),ht.lookAt(Fg),ht.updateMatrixWorld(),Lt.makeTranslation(-ic.x,-ic.y,-ic.z),bb.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),B._frustum.setFromProjectionMatrix(bb,ht.coordinateSystem,ht.reversedDepth)}else B.updateMatrices(z);i=B.getFrustum(),S(C,x,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===go&&m(B,x),B.needsUpdate=!1}h=this.type,g.needsUpdate=!1,e.setRenderTarget(T,I,R)};function m(w,C){let x=t.update(b);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new kn(s.x,s.y,{format:Za,type:Pi})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(C,null,x,u,b,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(C,null,x,f,b,null)}function _(w,C,x,T){let I=null,R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)I=R;else if(I=x.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let P=I.uuid,H=C.uuid,X=c[P];X===void 0&&(X={},c[P]=X);let G=X[H];G===void 0&&(G=I.clone(),X[H]=G,C.addEventListener("dispose",A)),I=G}if(I.visible=C.visible,I.wireframe=C.wireframe,T===go?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:p[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let P=e.properties.get(I);P.light=x}return I}function S(w,C,x,T,I){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===go)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let H=t.update(w),X=w.material;if(Array.isArray(X)){let G=H.groups;for(let z=0,B=G.length;z<B;z++){let Z=G[z],Q=X[Z.materialIndex];if(Q&&Q.visible){let lt=_(w,Q,T,I);w.onBeforeShadow(e,w,C,x,H,lt,Z),e.renderBufferDirect(x,null,H,lt,w,Z),w.onAfterShadow(e,w,C,x,H,lt,Z)}}}else if(X.visible){let G=_(w,X,T,I);w.onBeforeShadow(e,w,C,x,H,G,null),e.renderBufferDirect(x,null,H,G,w,null),w.onAfterShadow(e,w,C,x,H,G,null)}}let P=w.children;for(let H=0,X=P.length;H<X;H++)S(P[H],C,x,T,I)}function A(w){w.target.removeEventListener("dispose",A);for(let x in c){let T=c[x],I=w.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function YR(e,t){function n(){let U=!1,at=new Ae,nt=null,pt=new Ae(0,0,0,0);return{setMask:function(tt){nt!==tt&&!U&&(e.colorMask(tt,tt,tt,tt),nt=tt)},setLocked:function(tt){U=tt},setClear:function(tt,W,_t,Nt,me){me===!0&&(tt*=Nt,W*=Nt,_t*=Nt),at.set(tt,W,_t,Nt),pt.equals(at)===!1&&(e.clearColor(tt,W,_t,Nt),pt.copy(at))},reset:function(){U=!1,nt=null,pt.set(-1,0,0,0)}}}function i(){let U=!1,at=!1,nt=null,pt=null,tt=null;return{setReversed:function(W){if(at!==W){let _t=t.get("EXT_clip_control");W?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),at=W;let Nt=tt;tt=null,this.setClear(Nt)}},getReversed:function(){return at},setTest:function(W){W?it(e.DEPTH_TEST):rt(e.DEPTH_TEST)},setMask:function(W){nt!==W&&!U&&(e.depthMask(W),nt=W)},setFunc:function(W){if(at&&(W=KS[W]),pt!==W){switch(W){case lh:e.depthFunc(e.NEVER);break;case ch:e.depthFunc(e.ALWAYS);break;case uh:e.depthFunc(e.LESS);break;case Xa:e.depthFunc(e.LEQUAL);break;case hh:e.depthFunc(e.EQUAL);break;case dh:e.depthFunc(e.GEQUAL);break;case fh:e.depthFunc(e.GREATER);break;case ph:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pt=W}},setLocked:function(W){U=W},setClear:function(W){tt!==W&&(tt=W,at&&(W=1-W),e.clearDepth(W))},reset:function(){U=!1,nt=null,pt=null,tt=null,at=!1}}}function s(){let U=!1,at=null,nt=null,pt=null,tt=null,W=null,_t=null,Nt=null,me=null;return{setTest:function(se){U||(se?it(e.STENCIL_TEST):rt(e.STENCIL_TEST))},setMask:function(se){at!==se&&!U&&(e.stencilMask(se),at=se)},setFunc:function(se,zi,Vi){(nt!==se||pt!==zi||tt!==Vi)&&(e.stencilFunc(se,zi,Vi),nt=se,pt=zi,tt=Vi)},setOp:function(se,zi,Vi){(W!==se||_t!==zi||Nt!==Vi)&&(e.stencilOp(se,zi,Vi),W=se,_t=zi,Nt=Vi)},setLocked:function(se){U=se},setClear:function(se){me!==se&&(e.clearStencil(se),me=se)},reset:function(){U=!1,at=null,nt=null,pt=null,tt=null,W=null,_t=null,Nt=null,me=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,d={},p={},u=new WeakMap,f=[],v=null,b=!1,g=null,h=null,m=null,_=null,S=null,A=null,w=null,C=new kt(0,0,0),x=0,T=!1,I=null,R=null,P=null,H=null,X=null,G=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,B=0,Z=e.getParameter(e.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=B>=2);let Q=null,lt={},mt=e.getParameter(e.SCISSOR_BOX),ht=e.getParameter(e.VIEWPORT),Lt=new Ae().fromArray(mt),Me=new Ae().fromArray(ht);function ve(U,at,nt,pt){let tt=new Uint8Array(4),W=e.createTexture();e.bindTexture(U,W),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let _t=0;_t<nt;_t++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(at,0,e.RGBA,1,1,pt,0,e.RGBA,e.UNSIGNED_BYTE,tt):e.texImage2D(at+_t,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,tt);return W}let J={};J[e.TEXTURE_2D]=ve(e.TEXTURE_2D,e.TEXTURE_2D,1),J[e.TEXTURE_CUBE_MAP]=ve(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[e.TEXTURE_2D_ARRAY]=ve(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),J[e.TEXTURE_3D]=ve(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),it(e.DEPTH_TEST),r.setFunc(Xa),Vt(!1),Ue(og),it(e.CULL_FACE),ie(Oi);function it(U){d[U]!==!0&&(e.enable(U),d[U]=!0)}function rt(U){d[U]!==!1&&(e.disable(U),d[U]=!1)}function Ft(U,at){return p[U]!==at?(e.bindFramebuffer(U,at),p[U]=at,U===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=at),U===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=at),!0):!1}function At(U,at){let nt=f,pt=!1;if(U){nt=u.get(at),nt===void 0&&(nt=[],u.set(at,nt));let tt=U.textures;if(nt.length!==tt.length||nt[0]!==e.COLOR_ATTACHMENT0){for(let W=0,_t=tt.length;W<_t;W++)nt[W]=e.COLOR_ATTACHMENT0+W;nt.length=tt.length,pt=!0}}else nt[0]!==e.BACK&&(nt[0]=e.BACK,pt=!0);pt&&e.drawBuffers(nt)}function Ut(U){return v!==U?(e.useProgram(U),v=U,!0):!1}let Ye={[ea]:e.FUNC_ADD,[xS]:e.FUNC_SUBTRACT,[SS]:e.FUNC_REVERSE_SUBTRACT};Ye[bS]=e.MIN,Ye[MS]=e.MAX;let jt={[TS]:e.ZERO,[ES]:e.ONE,[AS]:e.SRC_COLOR,[rh]:e.SRC_ALPHA,[NS]:e.SRC_ALPHA_SATURATE,[DS]:e.DST_COLOR,[CS]:e.DST_ALPHA,[wS]:e.ONE_MINUS_SRC_COLOR,[oh]:e.ONE_MINUS_SRC_ALPHA,[US]:e.ONE_MINUS_DST_COLOR,[RS]:e.ONE_MINUS_DST_ALPHA,[LS]:e.CONSTANT_COLOR,[IS]:e.ONE_MINUS_CONSTANT_COLOR,[OS]:e.CONSTANT_ALPHA,[PS]:e.ONE_MINUS_CONSTANT_ALPHA};function ie(U,at,nt,pt,tt,W,_t,Nt,me,se){if(U===Oi){b===!0&&(rt(e.BLEND),b=!1);return}if(b===!1&&(it(e.BLEND),b=!0),U!==yS){if(U!==g||se!==T){if((h!==ea||S!==ea)&&(e.blendEquation(e.FUNC_ADD),h=ea,S=ea),se)switch(U){case ka:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case lg:e.blendFunc(e.ONE,e.ONE);break;case cg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ug:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Rt("WebGLState: Invalid blending: ",U);break}else switch(U){case ka:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case lg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case cg:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ug:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",U);break}m=null,_=null,A=null,w=null,C.set(0,0,0),x=0,g=U,T=se}return}tt=tt||at,W=W||nt,_t=_t||pt,(at!==h||tt!==S)&&(e.blendEquationSeparate(Ye[at],Ye[tt]),h=at,S=tt),(nt!==m||pt!==_||W!==A||_t!==w)&&(e.blendFuncSeparate(jt[nt],jt[pt],jt[W],jt[_t]),m=nt,_=pt,A=W,w=_t),(Nt.equals(C)===!1||me!==x)&&(e.blendColor(Nt.r,Nt.g,Nt.b,me),C.copy(Nt),x=me),g=U,T=!1}function he(U,at){U.side===Ii?rt(e.CULL_FACE):it(e.CULL_FACE);let nt=U.side===_n;at&&(nt=!nt),Vt(nt),U.blending===ka&&U.transparent===!1?ie(Oi):ie(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let pt=U.stencilWrite;o.setTest(pt),pt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(e.SAMPLE_ALPHA_TO_COVERAGE):rt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(U){I!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),I=U)}function Ue(U){U!==gS?(it(e.CULL_FACE),U!==R&&(U===og?e.cullFace(e.BACK):U===vS?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):rt(e.CULL_FACE),R=U}function D(U){U!==P&&(z&&e.lineWidth(U),P=U)}function Be(U,at,nt){U?(it(e.POLYGON_OFFSET_FILL),(H!==at||X!==nt)&&(H=at,X=nt,r.getReversed()&&(at=-at),e.polygonOffset(at,nt))):rt(e.POLYGON_OFFSET_FILL)}function ee(U){U?it(e.SCISSOR_TEST):rt(e.SCISSOR_TEST)}function pe(U){U===void 0&&(U=e.TEXTURE0+G-1),Q!==U&&(e.activeTexture(U),Q=U)}function St(U,at,nt){nt===void 0&&(Q===null?nt=e.TEXTURE0+G-1:nt=Q);let pt=lt[nt];pt===void 0&&(pt={type:void 0,texture:void 0},lt[nt]=pt),(pt.type!==U||pt.texture!==at)&&(Q!==nt&&(e.activeTexture(nt),Q=nt),e.bindTexture(U,at||J[U]),pt.type=U,pt.texture=at)}function E(){let U=lt[Q];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{e.compressedTexImage2D(...arguments)}catch(U){Rt("WebGLState:",U)}}function N(){try{e.compressedTexImage3D(...arguments)}catch(U){Rt("WebGLState:",U)}}function Y(){try{e.texSubImage2D(...arguments)}catch(U){Rt("WebGLState:",U)}}function K(){try{e.texSubImage3D(...arguments)}catch(U){Rt("WebGLState:",U)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Rt("WebGLState:",U)}}function gt(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Rt("WebGLState:",U)}}function st(){try{e.texStorage2D(...arguments)}catch(U){Rt("WebGLState:",U)}}function Et(){try{e.texStorage3D(...arguments)}catch(U){Rt("WebGLState:",U)}}function wt(){try{e.texImage2D(...arguments)}catch(U){Rt("WebGLState:",U)}}function $(){try{e.texImage3D(...arguments)}catch(U){Rt("WebGLState:",U)}}function et(U){Lt.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),Lt.copy(U))}function vt(U){Me.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Me.copy(U))}function yt(U,at){let nt=c.get(at);nt===void 0&&(nt=new WeakMap,c.set(at,nt));let pt=nt.get(U);pt===void 0&&(pt=e.getUniformBlockIndex(at,U.name),nt.set(U,pt))}function dt(U,at){let pt=c.get(at).get(U);l.get(at)!==pt&&(e.uniformBlockBinding(at,pt,U.__bindingPointIndex),l.set(at,pt))}function Ht(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},Q=null,lt={},p={},u=new WeakMap,f=[],v=null,b=!1,g=null,h=null,m=null,_=null,S=null,A=null,w=null,C=new kt(0,0,0),x=0,T=!1,I=null,R=null,P=null,H=null,X=null,Lt.set(0,0,e.canvas.width,e.canvas.height),Me.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:it,disable:rt,bindFramebuffer:Ft,drawBuffers:At,useProgram:Ut,setBlending:ie,setMaterial:he,setFlipSided:Vt,setCullFace:Ue,setLineWidth:D,setPolygonOffset:Be,setScissorTest:ee,activeTexture:pe,bindTexture:St,unbindTexture:E,compressedTexImage2D:y,compressedTexImage3D:N,texImage2D:wt,texImage3D:$,updateUBOMapping:yt,uniformBlockBinding:dt,texStorage2D:st,texStorage3D:Et,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:gt,scissor:et,viewport:vt,reset:Ht}}function ZR(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,d=new WeakMap,p,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,y){return f?new OffscreenCanvas(E,y):lo("canvas")}function b(E,y,N){let Y=1,K=St(E);if((K.width>N||K.height>N)&&(Y=N/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let q=Math.floor(Y*K.width),gt=Math.floor(Y*K.height);p===void 0&&(p=v(q,gt));let st=y?v(q,gt):p;return st.width=q,st.height=gt,st.getContext("2d").drawImage(E,0,0,q,gt),Dt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+gt+")."),st}else return"data"in E&&Dt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function g(E){return E.generateMipmaps}function h(E){e.generateMipmap(E)}function m(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(E,y,N,Y,K=!1){if(E!==null){if(e[E]!==void 0)return e[E];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=y;if(y===e.RED&&(N===e.FLOAT&&(q=e.R32F),N===e.HALF_FLOAT&&(q=e.R16F),N===e.UNSIGNED_BYTE&&(q=e.R8)),y===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(q=e.R8UI),N===e.UNSIGNED_SHORT&&(q=e.R16UI),N===e.UNSIGNED_INT&&(q=e.R32UI),N===e.BYTE&&(q=e.R8I),N===e.SHORT&&(q=e.R16I),N===e.INT&&(q=e.R32I)),y===e.RG&&(N===e.FLOAT&&(q=e.RG32F),N===e.HALF_FLOAT&&(q=e.RG16F),N===e.UNSIGNED_BYTE&&(q=e.RG8)),y===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(q=e.RG8UI),N===e.UNSIGNED_SHORT&&(q=e.RG16UI),N===e.UNSIGNED_INT&&(q=e.RG32UI),N===e.BYTE&&(q=e.RG8I),N===e.SHORT&&(q=e.RG16I),N===e.INT&&(q=e.RG32I)),y===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&(q=e.RGB8UI),N===e.UNSIGNED_SHORT&&(q=e.RGB16UI),N===e.UNSIGNED_INT&&(q=e.RGB32UI),N===e.BYTE&&(q=e.RGB8I),N===e.SHORT&&(q=e.RGB16I),N===e.INT&&(q=e.RGB32I)),y===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),N===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),N===e.UNSIGNED_INT&&(q=e.RGBA32UI),N===e.BYTE&&(q=e.RGBA8I),N===e.SHORT&&(q=e.RGBA16I),N===e.INT&&(q=e.RGBA32I)),y===e.RGB&&(N===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),N===e.UNSIGNED_INT_10F_11F_11F_REV&&(q=e.R11F_G11F_B10F)),y===e.RGBA){let gt=K?Dl:Jt.getTransfer(Y);N===e.FLOAT&&(q=e.RGBA32F),N===e.HALF_FLOAT&&(q=e.RGBA16F),N===e.UNSIGNED_BYTE&&(q=gt===ne?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(E,y){let N;return E?y===null||y===vi||y===_o?N=e.DEPTH24_STENCIL8:y===_i?N=e.DEPTH32F_STENCIL8:y===vo&&(N=e.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===vi||y===_o?N=e.DEPTH_COMPONENT24:y===_i?N=e.DEPTH_COMPONENT32F:y===vo&&(N=e.DEPTH_COMPONENT16),N}function A(E,y){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Oe&&E.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function w(E){let y=E.target;y.removeEventListener("dispose",w),x(y),y.isVideoTexture&&d.delete(y)}function C(E){let y=E.target;y.removeEventListener("dispose",C),I(y)}function x(E){let y=i.get(E);if(y.__webglInit===void 0)return;let N=E.source,Y=u.get(N);if(Y){let K=Y[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(E),Object.keys(Y).length===0&&u.delete(N)}i.remove(E)}function T(E){let y=i.get(E);e.deleteTexture(y.__webglTexture);let N=E.source,Y=u.get(N);delete Y[y.__cacheKey],r.memory.textures--}function I(E){let y=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let K=0;K<y.__webglFramebuffer[Y].length;K++)e.deleteFramebuffer(y.__webglFramebuffer[Y][K]);else e.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)e.deleteFramebuffer(y.__webglFramebuffer[Y]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let N=E.textures;for(let Y=0,K=N.length;Y<K;Y++){let q=i.get(N[Y]);q.__webglTexture&&(e.deleteTexture(q.__webglTexture),r.memory.textures--),i.remove(N[Y])}i.remove(E)}let R=0;function P(){R=0}function H(){let E=R;return E>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function X(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function G(E,y){let N=i.get(E);if(E.isVideoTexture&&ee(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){let Y=E.image;if(Y===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{J(N,E,y);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+y)}function z(E,y){let N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){J(N,E,y);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+y)}function B(E,y){let N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){J(N,E,y);return}n.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+y)}function Z(E,y){let N=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){it(N,E,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+y)}let Q={[mh]:e.REPEAT,[Di]:e.CLAMP_TO_EDGE,[gh]:e.MIRRORED_REPEAT},lt={[Oe]:e.NEAREST,[zS]:e.NEAREST_MIPMAP_NEAREST,[jl]:e.NEAREST_MIPMAP_LINEAR,[on]:e.LINEAR,[Gh]:e.LINEAR_MIPMAP_NEAREST,[ha]:e.LINEAR_MIPMAP_LINEAR},mt={[GS]:e.NEVER,[YS]:e.ALWAYS,[kS]:e.LESS,[wd]:e.LEQUAL,[XS]:e.EQUAL,[Cd]:e.GEQUAL,[WS]:e.GREATER,[qS]:e.NOTEQUAL};function ht(E,y){if(y.type===_i&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===Gh||y.magFilter===jl||y.magFilter===ha||y.minFilter===on||y.minFilter===Gh||y.minFilter===jl||y.minFilter===ha)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Q[y.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Q[y.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Q[y.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,lt[y.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,lt[y.minFilter]),y.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,mt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Oe||y.minFilter!==jl&&y.minFilter!==ha||y.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Lt(E,y){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",w));let Y=y.source,K=u.get(Y);K===void 0&&(K={},u.set(Y,K));let q=X(y);if(q!==E.__cacheKey){K[q]===void 0&&(K[q]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,N=!0),K[q].usedTimes++;let gt=K[E.__cacheKey];gt!==void 0&&(K[E.__cacheKey].usedTimes--,gt.usedTimes===0&&T(y)),E.__cacheKey=q,E.__webglTexture=K[q].texture}return N}function Me(E,y,N){return Math.floor(Math.floor(E/N)/y)}function ve(E,y,N,Y){let q=E.updateRanges;if(q.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,N,Y,y.data);else{q.sort(($,et)=>$.start-et.start);let gt=0;for(let $=1;$<q.length;$++){let et=q[gt],vt=q[$],yt=et.start+et.count,dt=Me(vt.start,y.width,4),Ht=Me(et.start,y.width,4);vt.start<=yt+1&&dt===Ht&&Me(vt.start+vt.count-1,y.width,4)===dt?et.count=Math.max(et.count,vt.start+vt.count-et.start):(++gt,q[gt]=vt)}q.length=gt+1;let st=e.getParameter(e.UNPACK_ROW_LENGTH),Et=e.getParameter(e.UNPACK_SKIP_PIXELS),wt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let $=0,et=q.length;$<et;$++){let vt=q[$],yt=Math.floor(vt.start/4),dt=Math.ceil(vt.count/4),Ht=yt%y.width,U=Math.floor(yt/y.width),at=dt,nt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,Ht,U,at,nt,N,Y,y.data)}E.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,st),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(e.UNPACK_SKIP_ROWS,wt)}}function J(E,y,N){let Y=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=e.TEXTURE_3D);let K=Lt(E,y),q=y.source;n.bindTexture(Y,E.__webglTexture,e.TEXTURE0+N);let gt=i.get(q);if(q.version!==gt.__version||K===!0){n.activeTexture(e.TEXTURE0+N);let st=Jt.getPrimaries(Jt.workingColorSpace),Et=y.colorSpace===gs?null:Jt.getPrimaries(y.colorSpace),wt=y.colorSpace===gs||st===Et?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let $=b(y.image,!1,s.maxTextureSize);$=pe(y,$);let et=a.convert(y.format,y.colorSpace),vt=a.convert(y.type),yt=_(y.internalFormat,et,vt,y.colorSpace,y.isVideoTexture);ht(Y,y);let dt,Ht=y.mipmaps,U=y.isVideoTexture!==!0,at=gt.__version===void 0||K===!0,nt=q.dataReady,pt=A(y,$);if(y.isDepthTexture)yt=S(y.format===da,y.type),at&&(U?n.texStorage2D(e.TEXTURE_2D,1,yt,$.width,$.height):n.texImage2D(e.TEXTURE_2D,0,yt,$.width,$.height,0,et,vt,null));else if(y.isDataTexture)if(Ht.length>0){U&&at&&n.texStorage2D(e.TEXTURE_2D,pt,yt,Ht[0].width,Ht[0].height);for(let tt=0,W=Ht.length;tt<W;tt++)dt=Ht[tt],U?nt&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,dt.width,dt.height,et,vt,dt.data):n.texImage2D(e.TEXTURE_2D,tt,yt,dt.width,dt.height,0,et,vt,dt.data);y.generateMipmaps=!1}else U?(at&&n.texStorage2D(e.TEXTURE_2D,pt,yt,$.width,$.height),nt&&ve(y,$,et,vt)):n.texImage2D(e.TEXTURE_2D,0,yt,$.width,$.height,0,et,vt,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&at&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,yt,Ht[0].width,Ht[0].height,$.depth);for(let tt=0,W=Ht.length;tt<W;tt++)if(dt=Ht[tt],y.format!==ri)if(et!==null)if(U){if(nt)if(y.layerUpdates.size>0){let _t=Ng(dt.width,dt.height,y.format,y.type);for(let Nt of y.layerUpdates){let me=dt.data.subarray(Nt*_t/dt.data.BYTES_PER_ELEMENT,(Nt+1)*_t/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,Nt,dt.width,dt.height,1,et,me)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,$.depth,et,dt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,tt,yt,dt.width,dt.height,$.depth,0,dt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?nt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,$.depth,et,vt,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,tt,yt,dt.width,dt.height,$.depth,0,et,vt,dt.data)}else{U&&at&&n.texStorage2D(e.TEXTURE_2D,pt,yt,Ht[0].width,Ht[0].height);for(let tt=0,W=Ht.length;tt<W;tt++)dt=Ht[tt],y.format!==ri?et!==null?U?nt&&n.compressedTexSubImage2D(e.TEXTURE_2D,tt,0,0,dt.width,dt.height,et,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,tt,yt,dt.width,dt.height,0,dt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?nt&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,dt.width,dt.height,et,vt,dt.data):n.texImage2D(e.TEXTURE_2D,tt,yt,dt.width,dt.height,0,et,vt,dt.data)}else if(y.isDataArrayTexture)if(U){if(at&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,yt,$.width,$.height,$.depth),nt)if(y.layerUpdates.size>0){let tt=Ng($.width,$.height,y.format,y.type);for(let W of y.layerUpdates){let _t=$.data.subarray(W*tt/$.data.BYTES_PER_ELEMENT,(W+1)*tt/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,W,$.width,$.height,1,et,vt,_t)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,et,vt,$.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,yt,$.width,$.height,$.depth,0,et,vt,$.data);else if(y.isData3DTexture)U?(at&&n.texStorage3D(e.TEXTURE_3D,pt,yt,$.width,$.height,$.depth),nt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,et,vt,$.data)):n.texImage3D(e.TEXTURE_3D,0,yt,$.width,$.height,$.depth,0,et,vt,$.data);else if(y.isFramebufferTexture){if(at)if(U)n.texStorage2D(e.TEXTURE_2D,pt,yt,$.width,$.height);else{let tt=$.width,W=$.height;for(let _t=0;_t<pt;_t++)n.texImage2D(e.TEXTURE_2D,_t,yt,tt,W,0,et,vt,null),tt>>=1,W>>=1}}else if(Ht.length>0){if(U&&at){let tt=St(Ht[0]);n.texStorage2D(e.TEXTURE_2D,pt,yt,tt.width,tt.height)}for(let tt=0,W=Ht.length;tt<W;tt++)dt=Ht[tt],U?nt&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,et,vt,dt):n.texImage2D(e.TEXTURE_2D,tt,yt,et,vt,dt);y.generateMipmaps=!1}else if(U){if(at){let tt=St($);n.texStorage2D(e.TEXTURE_2D,pt,yt,tt.width,tt.height)}nt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,et,vt,$)}else n.texImage2D(e.TEXTURE_2D,0,yt,et,vt,$);g(y)&&h(Y),gt.__version=q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function it(E,y,N){if(y.image.length!==6)return;let Y=Lt(E,y),K=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+N);let q=i.get(K);if(K.version!==q.__version||Y===!0){n.activeTexture(e.TEXTURE0+N);let gt=Jt.getPrimaries(Jt.workingColorSpace),st=y.colorSpace===gs?null:Jt.getPrimaries(y.colorSpace),Et=y.colorSpace===gs||gt===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let wt=y.isCompressedTexture||y.image[0].isCompressedTexture,$=y.image[0]&&y.image[0].isDataTexture,et=[];for(let W=0;W<6;W++)!wt&&!$?et[W]=b(y.image[W],!0,s.maxCubemapSize):et[W]=$?y.image[W].image:y.image[W],et[W]=pe(y,et[W]);let vt=et[0],yt=a.convert(y.format,y.colorSpace),dt=a.convert(y.type),Ht=_(y.internalFormat,yt,dt,y.colorSpace),U=y.isVideoTexture!==!0,at=q.__version===void 0||Y===!0,nt=K.dataReady,pt=A(y,vt);ht(e.TEXTURE_CUBE_MAP,y);let tt;if(wt){U&&at&&n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Ht,vt.width,vt.height);for(let W=0;W<6;W++){tt=et[W].mipmaps;for(let _t=0;_t<tt.length;_t++){let Nt=tt[_t];y.format!==ri?yt!==null?U?nt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,_t,0,0,Nt.width,Nt.height,yt,Nt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,_t,Ht,Nt.width,Nt.height,0,Nt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?nt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,_t,0,0,Nt.width,Nt.height,yt,dt,Nt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,_t,Ht,Nt.width,Nt.height,0,yt,dt,Nt.data)}}}else{if(tt=y.mipmaps,U&&at){tt.length>0&&pt++;let W=St(et[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Ht,W.width,W.height)}for(let W=0;W<6;W++)if($){U?nt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,et[W].width,et[W].height,yt,dt,et[W].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ht,et[W].width,et[W].height,0,yt,dt,et[W].data);for(let _t=0;_t<tt.length;_t++){let me=tt[_t].image[W].image;U?nt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,_t+1,0,0,me.width,me.height,yt,dt,me.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,_t+1,Ht,me.width,me.height,0,yt,dt,me.data)}}else{U?nt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,yt,dt,et[W]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ht,yt,dt,et[W]);for(let _t=0;_t<tt.length;_t++){let Nt=tt[_t];U?nt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,_t+1,0,0,yt,dt,Nt.image[W]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,_t+1,Ht,yt,dt,Nt.image[W])}}}g(y)&&h(e.TEXTURE_CUBE_MAP),q.__version=K.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function rt(E,y,N,Y,K,q){let gt=a.convert(N.format,N.colorSpace),st=a.convert(N.type),Et=_(N.internalFormat,gt,st,N.colorSpace),wt=i.get(y),$=i.get(N);if($.__renderTarget=y,!wt.__hasExternalTextures){let et=Math.max(1,y.width>>q),vt=Math.max(1,y.height>>q);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?n.texImage3D(K,q,Et,et,vt,y.depth,0,gt,st,null):n.texImage2D(K,q,Et,et,vt,0,gt,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,E),Be(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,K,$.__webglTexture,0,D(y)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,K,$.__webglTexture,q),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ft(E,y,N){if(e.bindRenderbuffer(e.RENDERBUFFER,E),y.depthBuffer){let Y=y.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,q=S(y.stencilBuffer,K),gt=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Be(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,D(y),q,y.width,y.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,D(y),q,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,q,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,gt,e.RENDERBUFFER,E)}else{let Y=y.textures;for(let K=0;K<Y.length;K++){let q=Y[K],gt=a.convert(q.format,q.colorSpace),st=a.convert(q.type),Et=_(q.internalFormat,gt,st,q.colorSpace);Be(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,D(y),Et,y.width,y.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,D(y),Et,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,Et,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function At(E,y,N){let Y=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),ht(e.TEXTURE_CUBE_MAP,y.depthTexture);let wt=a.convert(y.depthTexture.format),$=a.convert(y.depthTexture.type),et;y.depthTexture.format===Ui?et=e.DEPTH_COMPONENT24:y.depthTexture.format===da&&(et=e.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,et,y.width,y.height,0,wt,$,null)}}else G(y.depthTexture,0);let q=K.__webglTexture,gt=D(y),st=Y?e.TEXTURE_CUBE_MAP_POSITIVE_X+N:e.TEXTURE_2D,Et=y.depthTexture.format===da?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ui)Be(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Et,st,q,0,gt):e.framebufferTexture2D(e.FRAMEBUFFER,Et,st,q,0);else if(y.depthTexture.format===da)Be(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Et,st,q,0,gt):e.framebufferTexture2D(e.FRAMEBUFFER,Et,st,q,0);else throw new Error("Unknown depthTexture format")}function Ut(E){let y=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let Y=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=Y}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)At(y.__webglFramebuffer[Y],E,Y);else{let Y=E.texture.mipmaps;Y&&Y.length>0?At(y.__webglFramebuffer[0],E,0):At(y.__webglFramebuffer,E,0)}else if(N){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=e.createRenderbuffer(),Ft(y.__webglDepthbuffer[Y],E,!1);else{let K=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,q)}}else{let Y=E.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),Ft(y.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,q)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ye(E,y,N){let Y=i.get(E);y!==void 0&&rt(Y.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&Ut(E)}function jt(E){let y=E.texture,N=i.get(E),Y=i.get(y);E.addEventListener("dispose",C);let K=E.textures,q=E.isWebGLCubeRenderTarget===!0,gt=K.length>1;if(gt||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=y.version,r.memory.textures++),q){N.__webglFramebuffer=[];for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[st]=[];for(let Et=0;Et<y.mipmaps.length;Et++)N.__webglFramebuffer[st][Et]=e.createFramebuffer()}else N.__webglFramebuffer[st]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let st=0;st<y.mipmaps.length;st++)N.__webglFramebuffer[st]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(gt)for(let st=0,Et=K.length;st<Et;st++){let wt=i.get(K[st]);wt.__webglTexture===void 0&&(wt.__webglTexture=e.createTexture(),r.memory.textures++)}if(E.samples>0&&Be(E)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let st=0;st<K.length;st++){let Et=K[st];N.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[st]);let wt=a.convert(Et.format,Et.colorSpace),$=a.convert(Et.type),et=_(Et.internalFormat,wt,$,Et.colorSpace,E.isXRRenderTarget===!0),vt=D(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,vt,et,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,N.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),Ft(N.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),ht(e.TEXTURE_CUBE_MAP,y);for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)rt(N.__webglFramebuffer[st][Et],E,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et);else rt(N.__webglFramebuffer[st],E,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);g(y)&&h(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(gt){for(let st=0,Et=K.length;st<Et;st++){let wt=K[st],$=i.get(wt),et=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(et=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(et,$.__webglTexture),ht(et,wt),rt(N.__webglFramebuffer,E,wt,e.COLOR_ATTACHMENT0+st,et,0),g(wt)&&h(et)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(st=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,Y.__webglTexture),ht(st,y),y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)rt(N.__webglFramebuffer[Et],E,y,e.COLOR_ATTACHMENT0,st,Et);else rt(N.__webglFramebuffer,E,y,e.COLOR_ATTACHMENT0,st,0);g(y)&&h(st),n.unbindTexture()}E.depthBuffer&&Ut(E)}function ie(E){let y=E.textures;for(let N=0,Y=y.length;N<Y;N++){let K=y[N];if(g(K)){let q=m(E),gt=i.get(K).__webglTexture;n.bindTexture(q,gt),h(q),n.unbindTexture()}}}let he=[],Vt=[];function Ue(E){if(E.samples>0){if(Be(E)===!1){let y=E.textures,N=E.width,Y=E.height,K=e.COLOR_BUFFER_BIT,q=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,gt=i.get(E),st=y.length>1;if(st)for(let wt=0;wt<y.length;wt++)n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+wt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+wt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let Et=E.texture.mipmaps;Et&&Et.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let wt=0;wt<y.length;wt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,gt.__webglColorRenderbuffer[wt]);let $=i.get(y[wt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,$,0)}e.blitFramebuffer(0,0,N,Y,0,0,N,Y,K,e.NEAREST),l===!0&&(he.length=0,Vt.length=0,he.push(e.COLOR_ATTACHMENT0+wt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(he.push(q),Vt.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Vt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,he))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let wt=0;wt<y.length;wt++){n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+wt,e.RENDERBUFFER,gt.__webglColorRenderbuffer[wt]);let $=i.get(y[wt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+wt,e.TEXTURE_2D,$,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let y=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function D(E){return Math.min(s.maxSamples,E.samples)}function Be(E){let y=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ee(E){let y=r.render.frame;d.get(E)!==y&&(d.set(E,y),E.update())}function pe(E,y){let N=E.colorSpace,Y=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Wa&&N!==gs&&(Jt.getTransfer(N)===ne?(Y!==ri||K!==Cn)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",N)),y}function St(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=Ye,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function JR(e,t){function n(i,s=gs){let a,r=Jt.getTransfer(s);if(i===Cn)return e.UNSIGNED_BYTE;if(i===Xh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Wh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Sg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===bg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===yg)return e.BYTE;if(i===xg)return e.SHORT;if(i===vo)return e.UNSIGNED_SHORT;if(i===kh)return e.INT;if(i===vi)return e.UNSIGNED_INT;if(i===_i)return e.FLOAT;if(i===Pi)return e.HALF_FLOAT;if(i===Mg)return e.ALPHA;if(i===Tg)return e.RGB;if(i===ri)return e.RGBA;if(i===Ui)return e.DEPTH_COMPONENT;if(i===da)return e.DEPTH_STENCIL;if(i===Eg)return e.RED;if(i===qh)return e.RED_INTEGER;if(i===Za)return e.RG;if(i===Yh)return e.RG_INTEGER;if(i===Zh)return e.RGBA_INTEGER;if(i===Kl||i===Ql||i===$l||i===tc)if(r===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Kl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Kl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$l)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jh||i===jh||i===Kh||i===Qh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Jh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$h||i===td||i===ed||i===nd||i===id||i===sd||i===ad)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===$h||i===td)return r===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ed)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===nd)return a.COMPRESSED_R11_EAC;if(i===id)return a.COMPRESSED_SIGNED_R11_EAC;if(i===sd)return a.COMPRESSED_RG11_EAC;if(i===ad)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rd||i===od||i===ld||i===cd||i===ud||i===hd||i===dd||i===fd||i===pd||i===md||i===gd||i===vd||i===_d||i===yd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===rd)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===od)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ld)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cd)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ud)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hd)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dd)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fd)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pd)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===md)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gd)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vd)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_d)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yd)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xd||i===Sd||i===bd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===xd)return r===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Md||i===Td||i===Ed||i===Ad)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Md)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Td)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ed)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ad)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var jR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KR=`
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

}`,qg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new zl(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Wn({vertexShader:jR,fragmentShader:KR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pe(new qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yg=class extends ms{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,f=null,v=null,b=typeof XRWebGLBinding<"u",g=new qg,h={},m=n.getContextAttributes(),_=null,S=null,A=[],w=[],C=new Qt,x=null,T=new rn;T.viewport=new Ae;let I=new rn;I.viewport=new Ae;let R=[T,I],P=new zh,H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let it=A[J];return it===void 0&&(it=new ho,A[J]=it),it.getTargetRaySpace()},this.getControllerGrip=function(J){let it=A[J];return it===void 0&&(it=new ho,A[J]=it),it.getGripSpace()},this.getHand=function(J){let it=A[J];return it===void 0&&(it=new ho,A[J]=it),it.getHandSpace()};function G(J){let it=w.indexOf(J.inputSource);if(it===-1)return;let rt=A[it];rt!==void 0&&(rt.update(J.inputSource,J.frame,c||r),rt.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",B);for(let J=0;J<A.length;J++){let it=w[J];it!==null&&(w[J]=null,A[J].disconnect(it))}H=null,X=null,g.reset();for(let J in h)delete h[J];t.setRenderTarget(_),f=null,u=null,p=null,s=null,S=null,ve.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",z),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,Ft=null,At=null;m.depth&&(At=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,rt=m.stencil?da:Ui,Ft=m.stencil?_o:vi);let Ut={colorFormat:n.RGBA8,depthFormat:At,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new kn(u.textureWidth,u.textureHeight,{format:ri,type:Cn,depthTexture:new sa(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,n,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new kn(f.framebufferWidth,f.framebufferHeight,{format:ri,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(J){for(let it=0;it<J.removed.length;it++){let rt=J.removed[it],Ft=w.indexOf(rt);Ft>=0&&(w[Ft]=null,A[Ft].disconnect(rt))}for(let it=0;it<J.added.length;it++){let rt=J.added[it],Ft=w.indexOf(rt);if(Ft===-1){for(let Ut=0;Ut<A.length;Ut++)if(Ut>=w.length){w.push(rt),Ft=Ut;break}else if(w[Ut]===null){w[Ut]=rt,Ft=Ut;break}if(Ft===-1)break}let At=A[Ft];At&&At.connect(rt)}}let Z=new V,Q=new V;function lt(J,it,rt){Z.setFromMatrixPosition(it.matrixWorld),Q.setFromMatrixPosition(rt.matrixWorld);let Ft=Z.distanceTo(Q),At=it.projectionMatrix.elements,Ut=rt.projectionMatrix.elements,Ye=At[14]/(At[10]-1),jt=At[14]/(At[10]+1),ie=(At[9]+1)/At[5],he=(At[9]-1)/At[5],Vt=(At[8]-1)/At[0],Ue=(Ut[8]+1)/Ut[0],D=Ye*Vt,Be=Ye*Ue,ee=Ft/(-Vt+Ue),pe=ee*-Vt;if(it.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(pe),J.translateZ(ee),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),At[10]===-1)J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let St=Ye+ee,E=jt+ee,y=D-pe,N=Be+(Ft-pe),Y=ie*jt/E*St,K=he*jt/E*St;J.projectionMatrix.makePerspective(y,N,Y,K,St,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function mt(J,it){it===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(it.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let it=J.near,rt=J.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(rt=g.depthFar)),P.near=I.near=T.near=it,P.far=I.far=T.far=rt,(H!==P.near||X!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),H=P.near,X=P.far),P.layers.mask=J.layers.mask|6,T.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;let Ft=J.parent,At=P.cameras;mt(P,Ft);for(let Ut=0;Ut<At.length;Ut++)mt(At[Ut],Ft);At.length===2?lt(P,T,I):P.projectionMatrix.copy(T.projectionMatrix),ht(J,P,Ft)};function ht(J,it,rt){rt===null?J.matrix.copy(it.matrixWorld):(J.matrix.copy(rt.matrixWorld),J.matrix.invert(),J.matrix.multiply(it.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=_h*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(J){return h[J]};let Lt=null;function Me(J,it){if(d=it.getViewerPose(c||r),v=it,d!==null){let rt=d.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Ft=!1;rt.length!==P.cameras.length&&(P.cameras.length=0,Ft=!0);for(let jt=0;jt<rt.length;jt++){let ie=rt[jt],he=null;if(f!==null)he=f.getViewport(ie);else{let Ue=p.getViewSubImage(u,ie);he=Ue.viewport,jt===0&&(t.setRenderTargetTextures(S,Ue.colorTexture,Ue.depthStencilTexture),t.setRenderTarget(S))}let Vt=R[jt];Vt===void 0&&(Vt=new rn,Vt.layers.enable(jt),Vt.viewport=new Ae,R[jt]=Vt),Vt.matrix.fromArray(ie.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(ie.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(he.x,he.y,he.width,he.height),jt===0&&(P.matrix.copy(Vt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ft===!0&&P.cameras.push(Vt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let jt=p.getDepthInformation(rt[0]);jt&&jt.isValid&&jt.texture&&g.init(jt,s.renderState)}if(At&&At.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let jt=0;jt<rt.length;jt++){let ie=rt[jt].camera;if(ie){let he=h[ie];he||(he=new zl,h[ie]=he);let Vt=p.getCameraImage(ie);he.sourceTexture=Vt}}}}for(let rt=0;rt<A.length;rt++){let Ft=w[rt],At=A[rt];Ft!==null&&At!==void 0&&At.update(Ft,it,c||r)}Lt&&Lt(J,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),v=null}let ve=new Mb;ve.setAnimationLoop(Me),this.setAnimationLoop=function(J){Lt=J},this.dispose=function(){}}},Ka=new mi,QR=new De;function $R(e,t){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Rg(e)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,m,_,S){h.isMeshBasicMaterial?a(g,h):h.isMeshLambertMaterial?(a(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(g,h),p(g,h)):h.isMeshPhongMaterial?(a(g,h),d(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(g,h),u(g,h),h.isMeshPhysicalMaterial&&f(g,h,S)):h.isMeshMatcapMaterial?(a(g,h),v(g,h)):h.isMeshDepthMaterial?a(g,h):h.isMeshDistanceMaterial?(a(g,h),b(g,h)):h.isMeshNormalMaterial?a(g,h):h.isLineBasicMaterial?(r(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,m,_):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===_n&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===_n&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let m=t.get(h),_=m.envMap,S=m.envMapRotation;_&&(g.envMap.value=_,Ka.copy(S),Ka.x*=-1,Ka.y*=-1,Ka.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ka.y*=-1,Ka.z*=-1),g.envMapRotation.value.setFromMatrix4(QR.makeRotationFromEuler(Ka)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function r(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,_){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=_*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function d(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function f(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function b(g,h){let m=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function t2(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){let S=_.program;i.uniformBlockBinding(m,S)}function c(m,_){let S=s[m.id];S===void 0&&(v(m),S=d(m),s[m.id]=S,m.addEventListener("dispose",g));let A=_.program;i.updateUBOMapping(m,A);let w=t.render.frame;a[m.id]!==w&&(u(m),a[m.id]=w)}function d(m){let _=p();m.__bindingPointIndex=_;let S=e.createBuffer(),A=m.__size,w=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,A,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,S),S}function p(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){let _=s[m.id],S=m.uniforms,A=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let w=0,C=S.length;w<C;w++){let x=Array.isArray(S[w])?S[w]:[S[w]];for(let T=0,I=x.length;T<I;T++){let R=x[T];if(f(R,w,T,A)===!0){let P=R.__offset,H=Array.isArray(R.value)?R.value:[R.value],X=0;for(let G=0;G<H.length;G++){let z=H[G],B=b(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,e.bufferSubData(e.UNIFORM_BUFFER,P+X,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,X),X+=B.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,P,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(m,_,S,A){let w=m.value,C=_+"_"+S;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{let x=A[C];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return A[C]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function v(m){let _=m.uniforms,S=0,A=16;for(let C=0,x=_.length;C<x;C++){let T=Array.isArray(_[C])?_[C]:[_[C]];for(let I=0,R=T.length;I<R;I++){let P=T[I],H=Array.isArray(P.value)?P.value:[P.value];for(let X=0,G=H.length;X<G;X++){let z=H[X],B=b(z),Z=S%A,Q=Z%B.boundary,lt=Z+Q;S+=Q,lt!==0&&A-lt<B.storage&&(S+=A-lt),P.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,S+=B.storage}}}let w=S%A;return w>0&&(S+=A-w),m.__size=S,m.__cache={},this}function b(m){let _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Dt("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){let _=m.target;_.removeEventListener("dispose",g);let S=r.indexOf(_.__bindingPointIndex);r.splice(S,1),e.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function h(){for(let m in s)e.deleteBuffer(s[m]);r=[],s={},a={}}return{bind:l,update:c,dispose:h}}var e2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function n2(){return Bi===null&&(Bi=new Mh(e2,16,16,Za,Pi),Bi.name="DFG_LUT",Bi.minFilter=on,Bi.magFilter=on,Bi.wrapS=Di,Bi.wrapT=Di,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var Ld=class{constructor(t={}){let{canvas:n=ZS(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Cn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let b=f,g=new Set([Zh,Yh,qh]),h=new Set([Cn,vi,vo,_o,Xh,Wh]),m=new Uint32Array(4),_=new Int32Array(4),S=null,A=null,w=[],C=[],x=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,I=!1;this._outputColorSpace=dn;let R=0,P=0,H=null,X=-1,G=null,z=new Ae,B=new Ae,Z=null,Q=new kt(0),lt=0,mt=n.width,ht=n.height,Lt=1,Me=null,ve=null,J=new Ae(0,0,mt,ht),it=new Ae(0,0,mt,ht),rt=!1,Ft=new po,At=!1,Ut=!1,Ye=new De,jt=new V,ie=new Ae,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function Ue(){return H===null?Lt:1}let D=i;function Be(M,L){return n.getContext(M,L)}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"183"}`),n.addEventListener("webglcontextlost",_t,!1),n.addEventListener("webglcontextrestored",Nt,!1),n.addEventListener("webglcontextcreationerror",me,!1),D===null){let L="webgl2";if(D=Be(L,M),D===null)throw Be(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Rt("WebGLRenderer: "+M.message),M}let ee,pe,St,E,y,N,Y,K,q,gt,st,Et,wt,$,et,vt,yt,dt,Ht,U,at,nt,pt;function tt(){ee=new uC(D),ee.init(),at=new JR(D,ee),pe=new nC(D,ee,t,at),St=new YR(D,ee),pe.reversedDepthBuffer&&u&&St.buffers.depth.setReversed(!0),E=new fC(D),y=new LR,N=new ZR(D,ee,St,y,pe,at,E),Y=new cC(T),K=new _E(D),nt=new tC(D,K),q=new hC(D,K,E,nt),gt=new mC(D,q,K,nt,E),dt=new pC(D,pe,N),et=new iC(y),st=new NR(T,Y,ee,pe,nt,et),Et=new $R(T,y),wt=new OR,$=new HR(ee),yt=new $w(T,Y,St,gt,v,l),vt=new qR(T,gt,pe),pt=new t2(D,E,pe,St),Ht=new eC(D,ee,E),U=new dC(D,ee,E),E.programs=st.programs,T.capabilities=pe,T.extensions=ee,T.properties=y,T.renderLists=wt,T.shadowMap=vt,T.state=St,T.info=E}tt(),b!==Cn&&(x=new vC(b,n.width,n.height,s,a));let W=new Yg(T,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Lt},this.setPixelRatio=function(M){M!==void 0&&(Lt=M,this.setSize(mt,ht,!1))},this.getSize=function(M){return M.set(mt,ht)},this.setSize=function(M,L,k=!0){if(W.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=M,ht=L,n.width=Math.floor(M*Lt),n.height=Math.floor(L*Lt),k===!0&&(n.style.width=M+"px",n.style.height=L+"px"),x!==null&&x.setSize(n.width,n.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(mt*Lt,ht*Lt).floor()},this.setDrawingBufferSize=function(M,L,k){mt=M,ht=L,Lt=k,n.width=Math.floor(M*k),n.height=Math.floor(L*k),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(b===Cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,L,k,F){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,L,k,F),St.viewport(z.copy(J).multiplyScalar(Lt).round())},this.getScissor=function(M){return M.copy(it)},this.setScissor=function(M,L,k,F){M.isVector4?it.set(M.x,M.y,M.z,M.w):it.set(M,L,k,F),St.scissor(B.copy(it).multiplyScalar(Lt).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(M){St.setScissorTest(rt=M)},this.setOpaqueSort=function(M){Me=M},this.setTransparentSort=function(M){ve=M},this.getClearColor=function(M){return M.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,k=!0){let F=0;if(M){let O=!1;if(H!==null){let ct=H.texture.format;O=g.has(ct)}if(O){let ct=H.texture.type,ft=h.has(ct),ut=yt.getClearColor(),xt=yt.getClearAlpha(),Mt=ut.r,Ot=ut.g,Gt=ut.b;ft?(m[0]=Mt,m[1]=Ot,m[2]=Gt,m[3]=xt,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Mt,_[1]=Ot,_[2]=Gt,_[3]=xt,D.clearBufferiv(D.COLOR,0,_))}else F|=D.COLOR_BUFFER_BIT}L&&(F|=D.DEPTH_BUFFER_BIT),k&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_t,!1),n.removeEventListener("webglcontextrestored",Nt,!1),n.removeEventListener("webglcontextcreationerror",me,!1),yt.dispose(),wt.dispose(),$.dispose(),y.dispose(),Y.dispose(),gt.dispose(),nt.dispose(),pt.dispose(),st.dispose(),W.dispose(),W.removeEventListener("sessionstart",Qg),W.removeEventListener("sessionend",$g),ga.stop()};function _t(M){M.preventDefault(),Cg("WebGLRenderer: Context Lost."),I=!0}function Nt(){Cg("WebGLRenderer: Context Restored."),I=!1;let M=E.autoReset,L=vt.enabled,k=vt.autoUpdate,F=vt.needsUpdate,O=vt.type;tt(),E.autoReset=M,vt.enabled=L,vt.autoUpdate=k,vt.needsUpdate=F,vt.type=O}function me(M){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function se(M){let L=M.target;L.removeEventListener("dispose",se),zi(L)}function zi(M){Vi(M),y.remove(M)}function Vi(M){let L=y.get(M).programs;L!==void 0&&(L.forEach(function(k){st.releaseProgram(k)}),M.isShaderMaterial&&st.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,k,F,O,ct){L===null&&(L=he);let ft=O.isMesh&&O.matrixWorld.determinant()<0,ut=Ob(M,L,k,F,O);St.setMaterial(F,ft);let xt=k.index,Mt=1;if(F.wireframe===!0){if(xt=q.getWireframeAttribute(k),xt===void 0)return;Mt=2}let Ot=k.drawRange,Gt=k.attributes.position,Tt=Ot.start*Mt,oe=(Ot.start+Ot.count)*Mt;ct!==null&&(Tt=Math.max(Tt,ct.start*Mt),oe=Math.min(oe,(ct.start+ct.count)*Mt)),xt!==null?(Tt=Math.max(Tt,0),oe=Math.min(oe,xt.count)):Gt!=null&&(Tt=Math.max(Tt,0),oe=Math.min(oe,Gt.count));let Ne=oe-Tt;if(Ne<0||Ne===1/0)return;nt.setup(O,F,ut,k,xt);let we,le=Ht;if(xt!==null&&(we=K.get(xt),le=U,le.setIndex(we)),O.isMesh)F.wireframe===!0?(St.setLineWidth(F.wireframeLinewidth*Ue()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(O.isLine){let ln=F.linewidth;ln===void 0&&(ln=1),St.setLineWidth(ln*Ue()),O.isLineSegments?le.setMode(D.LINES):O.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else O.isPoints?le.setMode(D.POINTS):O.isSprite&&le.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ul("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))le.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let ln=O._multiDrawStarts,bt=O._multiDrawCounts,Rn=O._multiDrawCount,Kt=xt?K.get(xt).bytesPerElement:1,oi=y.get(F).currentProgram.getUniforms();for(let yi=0;yi<Rn;yi++)oi.setValue(D,"_gl_DrawID",yi),le.render(ln[yi]/Kt,bt[yi])}else if(O.isInstancedMesh)le.renderInstances(Tt,Ne,O.count);else if(k.isInstancedBufferGeometry){let ln=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,bt=Math.min(k.instanceCount,ln);le.renderInstances(Tt,Ne,bt)}else le.render(Tt,Ne)};function Kg(M,L,k){M.transparent===!0&&M.side===Ii&&M.forceSinglePass===!1?(M.side=_n,M.needsUpdate=!0,oc(M,L,k),M.side=ps,M.needsUpdate=!0,oc(M,L,k),M.side=Ii):oc(M,L,k)}this.compile=function(M,L,k=null){k===null&&(k=M),A=$.get(k),A.init(L),C.push(A),k.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),M!==k&&M.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),A.setupLights();let F=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ct=O.material;if(ct)if(Array.isArray(ct))for(let ft=0;ft<ct.length;ft++){let ut=ct[ft];Kg(ut,k,O),F.add(ut)}else Kg(ct,k,O),F.add(ct)}),A=C.pop(),F},this.compileAsync=function(M,L,k=null){let F=this.compile(M,L,k);return new Promise(O=>{function ct(){if(F.forEach(function(ft){y.get(ft).currentProgram.isReady()&&F.delete(ft)}),F.size===0){O(M);return}setTimeout(ct,10)}ee.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let zd=null;function Ib(M){zd&&zd(M)}function Qg(){ga.stop()}function $g(){ga.start()}let ga=new Mb;ga.setAnimationLoop(Ib),typeof self<"u"&&ga.setContext(self),this.setAnimationLoop=function(M){zd=M,W.setAnimationLoop(M),M===null?ga.stop():ga.start()},W.addEventListener("sessionstart",Qg),W.addEventListener("sessionend",$g),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;let k=W.enabled===!0&&W.isPresenting===!0,F=x!==null&&(H===null||k)&&x.begin(T,H);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,L,H),A=$.get(M,C.length),A.init(L),C.push(A),Ye.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ft.setFromProjectionMatrix(Ye,pi,L.reversedDepth),Ut=this.localClippingEnabled,At=et.init(this.clippingPlanes,Ut),S=wt.get(M,w.length),S.init(),w.push(S),W.enabled===!0&&W.isPresenting===!0){let ft=T.xr.getDepthSensingMesh();ft!==null&&Vd(ft,L,-1/0,T.sortObjects)}Vd(M,L,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(Me,ve),Vt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Vt&&yt.addToRenderList(S,M),this.info.render.frame++,At===!0&&et.beginShadows();let O=A.state.shadowsArray;if(vt.render(O,M,L),At===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(F&&x.hasRenderPass())===!1){let ft=S.opaque,ut=S.transmissive;if(A.setupLights(),L.isArrayCamera){let xt=L.cameras;if(ut.length>0)for(let Mt=0,Ot=xt.length;Mt<Ot;Mt++){let Gt=xt[Mt];e0(ft,ut,M,Gt)}Vt&&yt.render(M);for(let Mt=0,Ot=xt.length;Mt<Ot;Mt++){let Gt=xt[Mt];t0(S,M,Gt,Gt.viewport)}}else ut.length>0&&e0(ft,ut,M,L),Vt&&yt.render(M),t0(S,M,L)}H!==null&&P===0&&(N.updateMultisampleRenderTarget(H),N.updateRenderTargetMipmap(H)),F&&x.end(T),M.isScene===!0&&M.onAfterRender(T,M,L),nt.resetDefaultState(),X=-1,G=null,C.pop(),C.length>0?(A=C[C.length-1],At===!0&&et.setGlobalState(T.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Vd(M,L,k,F){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ft.intersectsSprite(M)){F&&ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ye);let ft=gt.update(M),ut=M.material;ut.visible&&S.push(M,ft,ut,k,ie.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ft.intersectsObject(M))){let ft=gt.update(M),ut=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ie.copy(M.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),ie.copy(ft.boundingSphere.center)),ie.applyMatrix4(M.matrixWorld).applyMatrix4(Ye)),Array.isArray(ut)){let xt=ft.groups;for(let Mt=0,Ot=xt.length;Mt<Ot;Mt++){let Gt=xt[Mt],Tt=ut[Gt.materialIndex];Tt&&Tt.visible&&S.push(M,ft,Tt,k,ie.z,Gt)}}else ut.visible&&S.push(M,ft,ut,k,ie.z,null)}}let ct=M.children;for(let ft=0,ut=ct.length;ft<ut;ft++)Vd(ct[ft],L,k,F)}function t0(M,L,k,F){let{opaque:O,transmissive:ct,transparent:ft}=M;A.setupLightsView(k),At===!0&&et.setGlobalState(T.clippingPlanes,k),F&&St.viewport(z.copy(F)),O.length>0&&rc(O,L,k),ct.length>0&&rc(ct,L,k),ft.length>0&&rc(ft,L,k),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function e0(M,L,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[F.id]===void 0){let Tt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[F.id]=new kn(1,1,{generateMipmaps:!0,type:Tt?Pi:Cn,minFilter:ha,samples:Math.max(4,pe.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let ct=A.state.transmissionRenderTarget[F.id],ft=F.viewport||z;ct.setSize(ft.z*T.transmissionResolutionScale,ft.w*T.transmissionResolutionScale);let ut=T.getRenderTarget(),xt=T.getActiveCubeFace(),Mt=T.getActiveMipmapLevel();T.setRenderTarget(ct),T.getClearColor(Q),lt=T.getClearAlpha(),lt<1&&T.setClearColor(16777215,.5),T.clear(),Vt&&yt.render(k);let Ot=T.toneMapping;T.toneMapping=gi;let Gt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),A.setupLightsView(F),At===!0&&et.setGlobalState(T.clippingPlanes,F),rc(M,k,F),N.updateMultisampleRenderTarget(ct),N.updateRenderTargetMipmap(ct),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let oe=0,Ne=L.length;oe<Ne;oe++){let we=L[oe],{object:le,geometry:ln,material:bt,group:Rn}=we;if(bt.side===Ii&&le.layers.test(F.layers)){let Kt=bt.side;bt.side=_n,bt.needsUpdate=!0,n0(le,k,F,ln,bt,Rn),bt.side=Kt,bt.needsUpdate=!0,Tt=!0}}Tt===!0&&(N.updateMultisampleRenderTarget(ct),N.updateRenderTargetMipmap(ct))}T.setRenderTarget(ut,xt,Mt),T.setClearColor(Q,lt),Gt!==void 0&&(F.viewport=Gt),T.toneMapping=Ot}function rc(M,L,k){let F=L.isScene===!0?L.overrideMaterial:null;for(let O=0,ct=M.length;O<ct;O++){let ft=M[O],{object:ut,geometry:xt,group:Mt}=ft,Ot=ft.material;Ot.allowOverride===!0&&F!==null&&(Ot=F),ut.layers.test(k.layers)&&n0(ut,L,k,xt,Ot,Mt)}}function n0(M,L,k,F,O,ct){M.onBeforeRender(T,L,k,F,O,ct),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(T,L,k,F,M,ct),O.transparent===!0&&O.side===Ii&&O.forceSinglePass===!1?(O.side=_n,O.needsUpdate=!0,T.renderBufferDirect(k,L,F,O,M,ct),O.side=ps,O.needsUpdate=!0,T.renderBufferDirect(k,L,F,O,M,ct),O.side=Ii):T.renderBufferDirect(k,L,F,O,M,ct),M.onAfterRender(T,L,k,F,O,ct)}function oc(M,L,k){L.isScene!==!0&&(L=he);let F=y.get(M),O=A.state.lights,ct=A.state.shadowsArray,ft=O.state.version,ut=st.getParameters(M,O.state,ct,L,k),xt=st.getProgramCacheKey(ut),Mt=F.programs;F.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,F.fog=L.fog;let Ot=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;F.envMap=Y.get(M.envMap||F.environment,Ot),F.envMapRotation=F.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Mt===void 0&&(M.addEventListener("dispose",se),Mt=new Map,F.programs=Mt);let Gt=Mt.get(xt);if(Gt!==void 0){if(F.currentProgram===Gt&&F.lightsStateVersion===ft)return s0(M,ut),Gt}else ut.uniforms=st.getUniforms(M),M.onBeforeCompile(ut,T),Gt=st.acquireProgram(ut,xt),Mt.set(xt,Gt),F.uniforms=ut.uniforms;let Tt=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=et.uniform),s0(M,ut),F.needsLights=Bb(M),F.lightsStateVersion=ft,F.needsLights&&(Tt.ambientLightColor.value=O.state.ambient,Tt.lightProbe.value=O.state.probe,Tt.directionalLights.value=O.state.directional,Tt.directionalLightShadows.value=O.state.directionalShadow,Tt.spotLights.value=O.state.spot,Tt.spotLightShadows.value=O.state.spotShadow,Tt.rectAreaLights.value=O.state.rectArea,Tt.ltc_1.value=O.state.rectAreaLTC1,Tt.ltc_2.value=O.state.rectAreaLTC2,Tt.pointLights.value=O.state.point,Tt.pointLightShadows.value=O.state.pointShadow,Tt.hemisphereLights.value=O.state.hemi,Tt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Tt.spotLightMatrix.value=O.state.spotLightMatrix,Tt.spotLightMap.value=O.state.spotLightMap,Tt.pointShadowMatrix.value=O.state.pointShadowMatrix),F.currentProgram=Gt,F.uniformsList=null,Gt}function i0(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=xo.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function s0(M,L){let k=y.get(M);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function Ob(M,L,k,F,O){L.isScene!==!0&&(L=he),N.resetTextureUnits();let ct=L.fog,ft=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?L.environment:null,ut=H===null?T.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Wa,xt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Mt=Y.get(F.envMap||ft,xt),Ot=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Gt=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Tt=!!k.morphAttributes.position,oe=!!k.morphAttributes.normal,Ne=!!k.morphAttributes.color,we=gi;F.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(we=T.toneMapping);let le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ln=le!==void 0?le.length:0,bt=y.get(F),Rn=A.state.lights;if(At===!0&&(Ut===!0||M!==G)){let Ze=M===G&&F.id===X;et.setState(F,M,Ze)}let Kt=!1;F.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Rn.state.version||bt.outputColorSpace!==ut||O.isBatchedMesh&&bt.batching===!1||!O.isBatchedMesh&&bt.batching===!0||O.isBatchedMesh&&bt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&bt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&bt.instancing===!1||!O.isInstancedMesh&&bt.instancing===!0||O.isSkinnedMesh&&bt.skinning===!1||!O.isSkinnedMesh&&bt.skinning===!0||O.isInstancedMesh&&bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&bt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&bt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&bt.instancingMorph===!1&&O.morphTexture!==null||bt.envMap!==Mt||F.fog===!0&&bt.fog!==ct||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==et.numPlanes||bt.numIntersection!==et.numIntersection)||bt.vertexAlphas!==Ot||bt.vertexTangents!==Gt||bt.morphTargets!==Tt||bt.morphNormals!==oe||bt.morphColors!==Ne||bt.toneMapping!==we||bt.morphTargetsCount!==ln)&&(Kt=!0):(Kt=!0,bt.__version=F.version);let oi=bt.currentProgram;Kt===!0&&(oi=oc(F,L,O));let yi=!1,va=!1,$a=!1,de=oi.getUniforms(),$e=bt.uniforms;if(St.useProgram(oi.program)&&(yi=!0,va=!0,$a=!0),F.id!==X&&(X=F.id,va=!0),yi||G!==M){St.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),de.setValue(D,"projectionMatrix",M.projectionMatrix),de.setValue(D,"viewMatrix",M.matrixWorldInverse);let _s=de.map.cameraPosition;_s!==void 0&&_s.setValue(D,jt.setFromMatrixPosition(M.matrixWorld)),pe.logarithmicDepthBuffer&&de.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&de.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),G!==M&&(G=M,va=!0,$a=!0)}if(bt.needsLights&&(Rn.state.directionalShadowMap.length>0&&de.setValue(D,"directionalShadowMap",Rn.state.directionalShadowMap,N),Rn.state.spotShadowMap.length>0&&de.setValue(D,"spotShadowMap",Rn.state.spotShadowMap,N),Rn.state.pointShadowMap.length>0&&de.setValue(D,"pointShadowMap",Rn.state.pointShadowMap,N)),O.isSkinnedMesh){de.setOptional(D,O,"bindMatrix"),de.setOptional(D,O,"bindMatrixInverse");let Ze=O.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),de.setValue(D,"boneTexture",Ze.boneTexture,N))}O.isBatchedMesh&&(de.setOptional(D,O,"batchingTexture"),de.setValue(D,"batchingTexture",O._matricesTexture,N),de.setOptional(D,O,"batchingIdTexture"),de.setValue(D,"batchingIdTexture",O._indirectTexture,N),de.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&de.setValue(D,"batchingColorTexture",O._colorsTexture,N));let vs=k.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&dt.update(O,k,oi),(va||bt.receiveShadow!==O.receiveShadow)&&(bt.receiveShadow=O.receiveShadow,de.setValue(D,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&L.environment!==null&&($e.envMapIntensity.value=L.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=n2()),va&&(de.setValue(D,"toneMappingExposure",T.toneMappingExposure),bt.needsLights&&Pb($e,$a),ct&&F.fog===!0&&Et.refreshFogUniforms($e,ct),Et.refreshMaterialUniforms($e,F,Lt,ht,A.state.transmissionRenderTarget[M.id]),xo.upload(D,i0(bt),$e,N)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(xo.upload(D,i0(bt),$e,N),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&de.setValue(D,"center",O.center),de.setValue(D,"modelViewMatrix",O.modelViewMatrix),de.setValue(D,"normalMatrix",O.normalMatrix),de.setValue(D,"modelMatrix",O.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let Ze=F.uniformsGroups;for(let _s=0,tr=Ze.length;_s<tr;_s++){let a0=Ze[_s];pt.update(a0,oi),pt.bind(a0,oi)}}return oi}function Pb(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Bb(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(M,L,k){let F=y.get(M);F.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),y.get(M.texture).__webglTexture=L,y.get(M.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let k=y.get(M);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0};let Fb=D.createFramebuffer();this.setRenderTarget=function(M,L=0,k=0){H=M,R=L,P=k;let F=null,O=!1,ct=!1;if(M){let ut=y.get(M);if(ut.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(D.FRAMEBUFFER,ut.__webglFramebuffer),z.copy(M.viewport),B.copy(M.scissor),Z=M.scissorTest,St.viewport(z),St.scissor(B),St.setScissorTest(Z),X=-1;return}else if(ut.__webglFramebuffer===void 0)N.setupRenderTarget(M);else if(ut.__hasExternalTextures)N.rebindTextures(M,y.get(M.texture).__webglTexture,y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ot=M.depthTexture;if(ut.__boundDepthTexture!==Ot){if(Ot!==null&&y.has(Ot)&&(M.width!==Ot.image.width||M.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(M)}}let xt=M.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ct=!0);let Mt=y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Mt[L])?F=Mt[L][k]:F=Mt[L],O=!0):M.samples>0&&N.useMultisampledRTT(M)===!1?F=y.get(M).__webglMultisampledFramebuffer:Array.isArray(Mt)?F=Mt[k]:F=Mt,z.copy(M.viewport),B.copy(M.scissor),Z=M.scissorTest}else z.copy(J).multiplyScalar(Lt).floor(),B.copy(it).multiplyScalar(Lt).floor(),Z=rt;if(k!==0&&(F=Fb),St.bindFramebuffer(D.FRAMEBUFFER,F)&&St.drawBuffers(M,F),St.viewport(z),St.scissor(B),St.setScissorTest(Z),O){let ut=y.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,ut.__webglTexture,k)}else if(ct){let ut=L;for(let xt=0;xt<M.textures.length;xt++){let Mt=y.get(M.textures[xt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+xt,Mt.__webglTexture,k,ut)}}else if(M!==null&&k!==0){let ut=y.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ut.__webglTexture,k)}X=-1},this.readRenderTargetPixels=function(M,L,k,F,O,ct,ft,ut=0){if(!(M&&M.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){St.bindFramebuffer(D.FRAMEBUFFER,xt);try{let Mt=M.textures[ut],Ot=Mt.format,Gt=Mt.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut),!pe.textureFormatReadable(Ot)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Gt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-F&&k>=0&&k<=M.height-O&&D.readPixels(L,k,F,O,at.convert(Ot),at.convert(Gt),ct)}finally{let Mt=H!==null?y.get(H).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(M,L,k,F,O,ct,ft,ut=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt)if(L>=0&&L<=M.width-F&&k>=0&&k<=M.height-O){St.bindFramebuffer(D.FRAMEBUFFER,xt);let Mt=M.textures[ut],Ot=Mt.format,Gt=Mt.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut),!pe.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),D.readPixels(L,k,F,O,at.convert(Ot),at.convert(Gt),0);let oe=H!==null?y.get(H).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,oe);let Ne=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jS(D,Ne,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(Tt),D.deleteSync(Ne),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,k=0){let F=Math.pow(2,-k),O=Math.floor(M.image.width*F),ct=Math.floor(M.image.height*F),ft=L!==null?L.x:0,ut=L!==null?L.y:0;N.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ft,ut,O,ct),St.unbindTexture()};let zb=D.createFramebuffer(),Vb=D.createFramebuffer();this.copyTextureToTexture=function(M,L,k=null,F=null,O=0,ct=0){let ft,ut,xt,Mt,Ot,Gt,Tt,oe,Ne,we=M.isCompressedTexture?M.mipmaps[ct]:M.image;if(k!==null)ft=k.max.x-k.min.x,ut=k.max.y-k.min.y,xt=k.isBox3?k.max.z-k.min.z:1,Mt=k.min.x,Ot=k.min.y,Gt=k.isBox3?k.min.z:0;else{let $e=Math.pow(2,-O);ft=Math.floor(we.width*$e),ut=Math.floor(we.height*$e),M.isDataArrayTexture?xt=we.depth:M.isData3DTexture?xt=Math.floor(we.depth*$e):xt=1,Mt=0,Ot=0,Gt=0}F!==null?(Tt=F.x,oe=F.y,Ne=F.z):(Tt=0,oe=0,Ne=0);let le=at.convert(L.format),ln=at.convert(L.type),bt;L.isData3DTexture?(N.setTexture3D(L,0),bt=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(N.setTexture2DArray(L,0),bt=D.TEXTURE_2D_ARRAY):(N.setTexture2D(L,0),bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let Rn=D.getParameter(D.UNPACK_ROW_LENGTH),Kt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),oi=D.getParameter(D.UNPACK_SKIP_PIXELS),yi=D.getParameter(D.UNPACK_SKIP_ROWS),va=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gt);let $a=M.isDataArrayTexture||M.isData3DTexture,de=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let $e=y.get(M),vs=y.get(L),Ze=y.get($e.__renderTarget),_s=y.get(vs.__renderTarget);St.bindFramebuffer(D.READ_FRAMEBUFFER,Ze.__webglFramebuffer),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,_s.__webglFramebuffer);for(let tr=0;tr<xt;tr++)$a&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,y.get(M).__webglTexture,O,Gt+tr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,y.get(L).__webglTexture,ct,Ne+tr)),D.blitFramebuffer(Mt,Ot,ft,ut,Tt,oe,ft,ut,D.DEPTH_BUFFER_BIT,D.NEAREST);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||y.has(M)){let $e=y.get(M),vs=y.get(L);St.bindFramebuffer(D.READ_FRAMEBUFFER,zb),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,Vb);for(let Ze=0;Ze<xt;Ze++)$a?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$e.__webglTexture,O,Gt+Ze):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$e.__webglTexture,O),de?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vs.__webglTexture,ct,Ne+Ze):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vs.__webglTexture,ct),O!==0?D.blitFramebuffer(Mt,Ot,ft,ut,Tt,oe,ft,ut,D.COLOR_BUFFER_BIT,D.NEAREST):de?D.copyTexSubImage3D(bt,ct,Tt,oe,Ne+Ze,Mt,Ot,ft,ut):D.copyTexSubImage2D(bt,ct,Tt,oe,Mt,Ot,ft,ut);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else de?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(bt,ct,Tt,oe,Ne,ft,ut,xt,le,ln,we.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(bt,ct,Tt,oe,Ne,ft,ut,xt,le,we.data):D.texSubImage3D(bt,ct,Tt,oe,Ne,ft,ut,xt,le,ln,we):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ct,Tt,oe,ft,ut,le,ln,we.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ct,Tt,oe,we.width,we.height,le,we.data):D.texSubImage2D(D.TEXTURE_2D,ct,Tt,oe,ft,ut,le,ln,we);D.pixelStorei(D.UNPACK_ROW_LENGTH,Rn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Kt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,oi),D.pixelStorei(D.UNPACK_SKIP_ROWS,yi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,va),ct===0&&L.generateMipmaps&&D.generateMipmap(bt),St.unbindTexture()},this.initRenderTarget=function(M){y.get(M).__webglFramebuffer===void 0&&N.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?N.setTextureCube(M,0):M.isData3DTexture?N.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?N.setTexture2DArray(M,0):N.setTexture2D(M,0),St.unbindTexture()},this.resetState=function(){R=0,P=0,H=null,St.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}};var Bd=ys(ac()),r2="/assets/pynqcast-white.png";function o2({hostSlot:e}){let t=(0,pa.useRef)(null),n=(0,pa.useRef)(null);return(0,pa.useEffect)(()=>{let i=t.current,s=n.current,a=e?.closest(".about-sprite-wrap");if(!i||!s||!a)return()=>{};a.classList.add("board-ready");let r=Math.max(320,Math.round(i.clientWidth||480)),o=Math.max(280,Math.round(i.clientHeight||280)),l=new Ld({antialias:!1,alpha:!0});l.setSize(Math.floor(r/4),Math.floor(o/4)),l.domElement.style.width=`${r}px`,l.domElement.style.height=`${o}px`,l.domElement.style.imageRendering="pixelated",l.setClearColor(0,0),l.toneMapping=Zl,l.toneMappingExposure=.7,l.setPixelRatio(1),"outputColorSpace"in l&&(l.outputColorSpace=dn),i.appendChild(l.domElement);let c=new Il,d=new rn(38,r/o,.1,100);d.position.set(0,.2,6.2),c.add(new Wl(3342336,2.5));let p=new ca(14492160,80,16),u=new ca(16777215,55,7),f=new ca(16772829,40,6),v=new ca(1127338,18,10);v.position.set(-2.4,1.6,-2.8),p.position.set(2.5,1.8,3),u.position.set(1,1.5,2.5),f.position.set(-1.6,1.1,2),c.add(p),c.add(u),c.add(f),c.add(v);let b=new ds;c.add(b);let g=new aa({color:3801088,metalness:.85,roughness:.12,emissive:new kt("#0a0000"),emissiveIntensity:.4}),h=new aa({color:2424832,metalness:.8,roughness:.2}),m=new aa({color:16758784,metalness:1,roughness:.04,emissive:new kt("#221100"),emissiveIntensity:.15}),_=new Pe(new wn(3.55,2.3,.16),h);b.add(_);let S=new Pe(new wn(3.35,2.1,.11),g);S.position.z=.03,b.add(S);let A=new Pe(new wn(3.35,2.1,.11),g);A.position.z=-.03,b.add(A);let w=(Z,Q,lt,mt,ht=.012)=>{let Lt=new Pe(new wn(lt,mt,ht),m);Lt.position.set(Z,Q,.09),b.add(Lt)};w(-.92,.62,1.12,.08),w(.38,.62,1.32,.08),w(-1.08,.16,.18,.86),w(1.16,.12,.18,.92),w(-.24,-.3,2.12,.08),w(0,-.72,1.52,.08),w(-.78,-.95,.18,.54),w(.84,-.9,.18,.42);let C=new Pe(new wn(1.22,.92,.16),h);C.position.set(.08,.04,.13),b.add(C);let x=new Pe(new wn(1.08,.78,.04),g);x.position.set(.08,.04,.21),b.add(x);for(let Z=0;Z<10;Z+=1){let Q=new Pe(new wn(.12,.08,.06),m);Q.position.set(-1.54+Z*.34,1.23,.04),b.add(Q);let lt=Q.clone();lt.position.y=-1.23,b.add(lt)}let I=new Hl().load(r2,()=>{I.magFilter=Oe,I.minFilter=Oe,I.generateMipmaps=!1,"colorSpace"in I&&(I.colorSpace=dn),I.needsUpdate=!0}),R=new aa({map:I,color:16777215,metalness:.18,roughness:.36,emissive:new kt("#220000"),emissiveIntensity:.2,transparent:!0,alphaTest:.08}),P=new Pe(new qa(2.28,1.28),R);P.position.set(.02,.1,.106),b.add(P);let H=[g,h,m,R],X=[_.geometry,S.geometry,A.geometry,C.geometry,x.geometry,P.geometry];b.children.forEach(Z=>{Z!==_&&Z!==S&&Z!==A&&Z!==C&&Z!==x&&Z!==P&&X.push(Z.geometry)});let G=0,z=new ql,B=()=>{let Z=z.getElapsedTime(),Q=(Math.sin(Z*1.4)+1)/2;b.rotation.y=Z*1.1,b.rotation.x=.25+Math.sin(Z*.5)*.08,b.rotation.z=Math.sin(Z*.7)*.06,b.position.y=Math.sin(Z*1.4)*.18,p.position.x=Math.cos(Z*.6)*4,p.position.z=Math.sin(Z*.6)*4+2,u.position.x=Math.cos(Z*2.2)*2.5,u.position.y=Math.sin(Z*1.6)*2,u.position.z=2.5,f.position.x=Math.cos(Z*1.8+Math.PI)*2,f.position.y=Math.sin(Z*2.1+Math.PI)*1.5,f.position.z=2,s.style.transform=`translateX(-50%) scaleX(${(.88+Q*.28).toFixed(3)}) scaleY(${(.7+Q*.3).toFixed(3)})`,s.style.opacity=(.4+Q*.45).toFixed(3),l.render(c,d),G=requestAnimationFrame(B)};return B(),()=>{a.classList.remove("board-ready"),cancelAnimationFrame(G),I.dispose(),H.forEach(Z=>Z.dispose()),X.forEach(Z=>Z?.dispose()),l.dispose(),t.current&&l.domElement.parentNode===t.current&&t.current.removeChild(l.domElement)}},[e]),(0,Bd.jsx)("div",{ref:t,style:{width:"100%",height:280,position:"relative"},children:(0,Bd.jsx)("div",{ref:n,style:{position:"absolute",bottom:12,left:"50%",width:200,height:18,background:"radial-gradient(ellipse at center, rgba(180,20,20,0.6) 0%, transparent 70%)",pointerEvents:"none",transformOrigin:"center center"}})})}function Zg({hostRef:e}){let[t,n]=(0,pa.useState)(null);return(0,pa.useEffect)(()=>{let i=e?.current?.querySelector(".about-react-board-slot");n(i||null)},[e]),t?(0,Ub.createPortal)((0,Bd.jsx)(o2,{hostSlot:t}),t):null}var Jg={pynq:`<div class="app-shell">
  <header class="topbar">
    <div class="brand-lockup">
      <div class="brand-title">PYNQ CAST</div>
      <div class="brand-sub">distributed FPGA raycaster monitor</div>
    </div>
    <nav class="top-nav">
      <button id="tab-game" class="nav-tab active" type="button" onclick="setActiveTab('game')">Game View</button>
      <button id="tab-server" class="nav-tab" type="button" onclick="setActiveTab('server')">Server Monitoring</button>
      <button id="tab-controls" class="nav-tab" type="button" onclick="setActiveTab('controls')">Controls &amp; Config</button>
      <button id="tab-about" class="nav-tab" type="button" onclick="setActiveTab('about')">About</button>
    </nav>
    <div class="top-status">
      <span id="status" class="disconnected">\u25CF DISCONNECTED</span>
      <span id="game-chip">no game</span>
    </div>
  </header>

  <div id="pause-banner" class="pause-banner" hidden></div>

  <main class="page-shell">
    <section id="page-game" class="page">
      <div class="section-label">Game View</div>

      <div class="hud-grid">
        <div class="panel-raised hud-card">
          <div class="hud-label">Render Rate</div>
          <div class="fps-stack">
            <span id="fps">0</span>
            <span class="fps-unit">FPS</span>
          </div>
          <div id="hud-frame-ms" class="hud-sub">0.0 ms/frame</div>
        </div>

        <div class="panel-raised hud-card">
          <div class="hud-label">Game Mode</div>
          <div id="hud-view-mode" class="hud-value">chase</div>
          <div id="hud-map-name" class="hud-sub">chase</div>
        </div>

        <div class="panel-raised hud-card">
          <div class="hud-label">Match State</div>
          <div id="hud-match-state" class="hud-value">Idle</div>
          <div id="hud-player-count" class="hud-sub">0 entities online</div>
        </div>

        <div class="panel-raised hud-card">
          <div class="hud-label">Socket Feed</div>
          <div id="hud-ws-rate" class="hud-value">0 / s</div>
          <div class="hud-sub">browser update stream</div>
        </div>

        <div class="panel-terminal hud-events-card">
          <div class="hud-events-head">
            <div class="hud-label">Live Event Feed</div>
            <span id="hud-event-count" class="micro-chip">idle</span>
          </div>
          <div id="game-event-list" class="hud-events-list">
            <div class="hud-feed-empty">waiting for first match event...</div>
          </div>
        </div>
      </div>

      <div class="game-layout">
        <div class="panel-raised viewport-card">
          <div class="panel-head viewport-head">
            <h2>Raycast Arena</h2>
            <div class="viewport-head-meta">
              <span id="canvas-label" class="panel-head-note">fpga live \xB7 loading map\u2026</span>
              <div class="viewport-action-row">
                <button class="viewport-control-btn start" type="button" onclick="sendControl('restart', 'start match')">Start</button>
                <button class="viewport-control-btn stop" type="button" onclick="sendControl('force_end', 'force end match')">End</button>
                <button
                  id="archive-toggle"
                  class="archive-toggle-btn"
                  type="button"
                  aria-controls="archive-drawer"
                  aria-expanded="false"
                  onclick="toggleArchiveDrawer()"
                >Archive</button>
              </div>
            </div>
          </div>
          <div class="viewport-wrap">
            <canvas id="arena" width="480" height="480"></canvas>
          </div>
          <aside id="archive-drawer" class="panel-raised archive-drawer" hidden>
            <div class="archive-drawer-head">
              <h2>DynamoDB + Replay</h2>
              <button class="archive-close-btn" type="button" onclick="toggleArchiveDrawer(false)">Close</button>
            </div>
            <div class="archive-drawer-body">
              <div>
                <div class="panel-head">
                  <h2>Archive</h2>
                  <span class="micro-chip">warm tier</span>
                </div>
                <div id="match-list"><span style="color:#90a3c4">loading...</span></div>
                <div class="ddb-note">warm tier only \xB7 recent META rows kept in DynamoDB \xB7 older match rows archived to S3</div>
              </div>

              <div>
                <div class="panel-head">
                  <h2>Replay</h2>
                  <span class="micro-chip">S3</span>
                </div>
                <div class="metric-note" id="replay-status">no replay loaded</div>
                <div class="replay-list" id="replay-list">
                  <button class="replay-btn empty" disabled>waiting for replayable matches...</button>
                </div>
                <div class="control-stack">
                  <button class="control-btn stop" type="button" onclick="stopReplay()">Stop Replay</button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div class="game-sidebar">
          <div class="panel-raised frame-panel sidebar-profiler-panel">
            <div class="panel-head">
              <h2>Pipeline Frame Timing</h2>
              <span class="micro-chip">stacked profiler</span>
            </div>
            <div class="frame-chart-container">
              <div class="target-lines">
                <div class="target-line target-60fps">
                  <span class="target-label">16.7MS (60FPS)</span>
                </div>
                <div class="target-line target-30fps">
                  <span class="target-label">33.3MS (30FPS)</span>
                </div>
              </div>

              <div class="stacked-bars" id="stacked-frame-chart"></div>

              <div class="bar-time-axis">
                <span>oldest</span>
                <span>newest</span>
              </div>
            </div>

            <div class="legend">
              <div class="legend-item"><span class="legend-swatch" style="background:var(--stage-dispatch)"></span>Dispatch</div>
              <div class="legend-item"><span class="legend-swatch" style="background:var(--stage-compute)"></span>FPGA Compute</div>
              <div class="legend-item"><span class="legend-swatch" style="background:var(--stage-network)"></span>Network</div>
              <div class="legend-item"><span class="legend-swatch" style="background:var(--stage-composite)"></span>Composite</div>
            </div>

            <div class="metric-note profiler-note">Development timing shim for now. Replace this buffer with real per-stage frame telemetry once the websocket exposes it.</div>
          </div>

          <div class="panel-raised player-panel">
            <div class="panel-head">
              <h2>Player Stats</h2>
              <span class="micro-chip">live</span>
            </div>
            <div class="player-table-wrap">
              <table class="player-table">
                <thead><tr><th>ID</th><th>role</th><th>X</th><th>Y</th><th>angle</th><th>dist</th><th>status</th></tr></thead>
                <tbody id="player-tbody"></tbody>
              </table>
            </div>
          </div>

          <div class="panel-raised objective-panel">
            <div class="panel-head">
              <h2>Objective State</h2>
              <span class="micro-chip">bits</span>
            </div>
            <div class="metric-row"><span>mode</span><span id="bits-mode">\u2014</span></div>
            <div class="metric-row"><span>remaining</span><span id="bits-remaining">\u2014</span></div>
            <div class="metric-row"><span>collected</span><span id="bits-collected">\u2014</span></div>
            <div class="metric-row"><span>progress</span><span id="bits-progress">\u2014</span></div>
            <div class="bits-track"><div class="bits-fill" id="bits-fill"></div></div>
            <div class="metric-note" id="bits-note">runner wins by clearing every bit in chase_bits mode.</div>
          </div>
        </div>
      </div>
    </section>

    <section id="page-server" class="page" hidden>
      <div class="section-label">Server Monitoring</div>

      <div class="server-grid">
        <div class="panel-raised server-health">
          <div class="panel-head">
            <h2>Node Health</h2>
            <span class="micro-chip">live</span>
          </div>
          <div class="status-grid">
            <div class="panel-inset status-card">
              <span class="status-name">Server</span>
              <span id="svc-server" class="status-slot">\u2014</span>
            </div>
            <div class="panel-inset status-card">
              <span class="status-name">Sidecar</span>
              <span id="svc-sidecar" class="status-slot">\u2014</span>
            </div>
            <div class="panel-inset status-card">
              <span class="status-name">Monitor</span>
              <span id="svc-monitor" class="status-slot">\u2014</span>
            </div>
            <div class="panel-inset status-card">
              <span class="status-name">P1 Node</span>
              <span id="node1-link" class="status-slot">offline \xB7 fpga</span>
            </div>
            <div class="panel-inset status-card">
              <span class="status-name">P2 Node</span>
              <span id="node2-link" class="status-slot">offline \xB7 fpga</span>
            </div>
            <div class="panel-inset status-card">
              <span class="status-name">Live View</span>
              <span id="server-view-card" class="status-slot">game telemetry</span>
            </div>
          </div>
        </div>

        <div class="panel-raised pipeline-panel">
          <div class="panel-head">
            <h2>SEDA Pipeline</h2>
            <span class="micro-chip">actual runtime</span>
          </div>
          <div class="pipeline-board">
            <div class="pipeline-summary">Flow is \`nodes -> T1 -> T2\`, then \`T2 -> T3 -> nodes\` for broadcast and \`T2 -> T4 -> Redis -> sidecar -> AWS\` for persistence.</div>

            <div class="pipeline-lane">
              <div class="pipeline-lane-tag">Input Path</div>
              <div class="pipe-card stage-net">
                <div class="pipe-card-label">clients</div>
                <div class="pipe-card-title">PYNQ Boards</div>
                <div class="pipe-card-desc">register, heartbeat, and movement packets</div>
                <div class="pipe-card-val">UDP gameplay traffic</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">UDP 9000</div>
              </div>

              <div class="pipe-card stage-net">
                <div class="pipe-card-label">asyncio</div>
                <div class="pipe-card-title">T1 UDPReceiver</div>
                <div class="pipe-card-desc">shared EC2:9000 socket ingress</div>
                <div class="pipe-card-val">raw datagrams in</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">packet_queue</div>
              </div>

              <div class="pipe-card stage-logic">
                <div class="pipe-card-label">asyncio \xB7 20 Hz</div>
                <div class="pipe-card-title">T2 GameTick</div>
                <div class="pipe-card-desc">authoritative state, tags, bits, and broadcast build</div>
                <div class="pipe-card-val"><span id="pp-players">0</span> live players</div>
              </div>
            </div>

            <div class="pipeline-lane">
              <div class="pipeline-lane-tag">Broadcast</div>
              <div class="pipe-jump pipe-jump-source">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">from T2</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">broadcast_queue</div>
              </div>

              <div class="pipe-card stage-net">
                <div class="pipe-card-label">asyncio</div>
                <div class="pipe-card-title">T3 Broadcaster</div>
                <div class="pipe-card-desc">same EC2:9000 socket back out to nodes</div>
                <div class="pipe-card-val">UDP fan-out</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">shared EC2:9000</div>
              </div>

              <div class="pipe-card stage-net">
                <div class="pipe-card-label">outbound</div>
                <div class="pipe-card-title">Active Nodes</div>
                <div class="pipe-card-desc">frame slices and state updates return to the players</div>
                <div class="pipe-card-val">same clients, reverse path</div>
              </div>
            </div>

            <div class="pipeline-lane">
              <div class="pipeline-lane-tag">Persistence</div>
              <div class="pipe-jump pipe-jump-source">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">from T2</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">write_queue</div>
              </div>

              <div class="pipe-card stage-io">
                <div class="pipe-card-label">OS thread</div>
                <div class="pipe-card-title">T4 RedisWriter</div>
                <div class="pipe-card-desc">batches HSET and LPUSH, mirrors monitor events</div>
                <div class="pipe-card-val"><span id="pp-ops">\u2014</span> Redis ops/s</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">local Redis</div>
              </div>

              <div class="pipe-card stage-store">
                <div class="pipe-card-label">hot tier</div>
                <div class="pipe-card-title">Redis</div>
                <div class="pipe-card-desc">state hashes plus event and replay lists</div>
                <div class="pipe-card-val">cache + queues</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">BRPOP events + replay</div>
              </div>

              <div class="pipe-card stage-store">
                <div class="pipe-card-label">process</div>
                <div class="pipe-card-title">Sidecar</div>
                <div class="pipe-card-desc">blocks on events and replay, manages retention</div>
                <div class="pipe-card-metrics">
                  <div class="pipe-card-metric"><span id="pp-blocked">\u2014</span> blocked</div>
                  <div class="pipe-card-metric"><span id="pp-events">\u2014</span> events</div>
                </div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">AWS fan-out</div>
              </div>

              <div class="pipe-card stage-ext">
                <div class="pipe-card-label">AWS warm tier</div>
                <div class="pipe-card-title">DynamoDB</div>
                <div class="pipe-card-desc">recent META plus tag and bit rows</div>
                <div class="pipe-card-val"><span id="pp-ddb">\u2014</span> warm matches</div>
              </div>

              <div class="pipe-card stage-ext">
                <div class="pipe-card-label">AWS cold tier</div>
                <div class="pipe-card-title">S3</div>
                <div class="pipe-card-desc">compressed replays and DynamoDB archives</div>
                <div class="pipe-card-val">cold storage</div>
              </div>

              <div class="pipe-card stage-ext">
                <div class="pipe-card-label">AWS async trigger</div>
                <div class="pipe-card-title">SNS / Lambda</div>
                <div class="pipe-card-desc">post-match summary path on \`match_end\`</div>
                <div class="pipe-card-val">summary hook</div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-raised storage-panel">
          <div class="panel-head">
            <h2>Redis Hot Cache</h2>
            <span class="micro-chip">telemetry</span>
          </div>
          <div class="metric-row"><span>ops / sec</span><span id="r-ops">\u2014</span></div>
          <div class="metric-row"><span>memory</span><span id="r-mem">\u2014</span></div>
          <div class="metric-row"><span>clients</span><span id="r-clients">\u2014</span></div>
          <div class="metric-row"><span>blocked</span><span id="r-blocked">\u2014</span></div>
          <div class="metric-row"><span>pub/sub</span><span id="r-pubsub">\u2014</span></div>
          <div class="metric-row"><span>monitor load</span><span id="r-poll">\u2014</span></div>
          <div class="metric-note" id="redis-note">measuring live Redis load...</div>
        </div>

        <div class="panel-raised profiler-panel server-frame-panel">
          <div class="panel-head">
            <h2>Frame Timing</h2>
            <span class="micro-chip">sparkline</span>
          </div>
          <canvas id="frame-chart" width="560" height="88"></canvas>
          <div class="metric-note">Recent monitor render times. Taller bars mean slower browser-side drawing.</div>
        </div>
      </div>
    </section>

    <section id="page-controls" class="page" hidden>
      <div class="section-label">Controls &amp; Config</div>

      <div class="controls-grid">
        <div class="panel-raised controls-actions">
          <div class="panel-head">
            <h2>EC2 Service Controls</h2>
            <span class="micro-chip">services</span>
          </div>
          <div class="control-stack">
            <button class="control-btn start" type="button" onclick="sendControl('start_server', 'start server')">Start Server</button>
            <button class="control-btn stop" type="button" onclick="sendControl('stop_server', 'stop server')">Stop Server</button>
            <button class="control-btn start" type="button" onclick="sendControl('start_sidecar', 'start sidecar')">Start Sidecar</button>
            <button class="control-btn stop" type="button" onclick="sendControl('stop_sidecar', 'stop sidecar')">Stop Sidecar</button>
            <button class="control-btn restart" type="button" onclick="sendControl('restart_stack', 'restart stack')">Restart Stack</button>
          </div>
          <div class="metric-note" id="svc-note">controls run on EC2 only; FPGA boards stay connected over UDP</div>
        </div>

        <div class="panel-raised controls-sim">
          <div class="panel-head">
            <h2>Match Config</h2>
            <span class="micro-chip">fpga live</span>
          </div>
          <div>
            <div class="metric-note">Server ghost controls add pressure on the EC2 side without changing the board firmware.</div>
            <div class="metric-note" style="margin-top:12px;">Ghost Taggers</div>
            <div class="control-stack">
              <button class="control-btn" type="button" onclick="sendControl('set_ghosts_0', 'ghost count \u2192 0')">0 Ghosts</button>
              <button class="control-btn" type="button" onclick="sendControl('set_ghosts_1', 'ghost count \u2192 1')">1 Ghost</button>
              <button class="control-btn" type="button" onclick="sendControl('set_ghosts_2', 'ghost count \u2192 2')">2 Ghosts</button>
              <button class="control-btn" type="button" onclick="sendControl('set_ghosts_3', 'ghost count \u2192 3')">3 Ghosts</button>
            </div>
            <div class="metric-note" style="margin-top:12px;">Map Selection</div>
            <div class="control-stack" id="map-btn-list">
              <span style="color:#90a3c4">loading maps...</span>
            </div>
            <div class="metric-note">Map changes publish to the live server and take effect on the next match reset.</div>
          </div>
        </div>

        <div class="panel-raised controls-notes">
          <div class="panel-head">
            <h2>Operator Notes</h2>
            <span class="micro-chip">quick guide</span>
          </div>
          <div class="note-list">
            <div class="metric-note">Game View keeps the FPGA arena, player state, replay drawer, and browser-side timing together in one place.</div>
            <div class="metric-note">Server Monitoring is the EC2 ops deck: service health, SEDA flow, Redis, warm/cold storage, and the stacked frame profiler.</div>
            <div class="metric-note">Controls &amp; Config only changes server-side match state. Board-side firmware and transport behavior still live in the PYNQ clients.</div>
          </div>
        </div>
      </div>
    </section>

    <section id="page-about" class="page about-page" hidden>
      <div class="section-label">About PYNQCAST</div>

      <section class="about-hero">
        <div class="about-stage">
          <div class="about-stage-grid" aria-hidden="true"></div>
          <div class="about-light-cone" aria-hidden="true"></div>
          <div class="about-sprite-wrap">
            <div class="about-react-board-slot" aria-label="spinning PYNQ board showcase"></div>
          </div>
          <div class="about-stage-label">dropped relic \xB7 live node cluster</div>
        </div>

        <div class="about-copy-column">
          <div class="about-title-row">
            <h2 class="about-title">&#9638; About PYNQCAST</h2>
            <span class="micro-chip">v1.0</span>
          </div>

          <div class="about-copy">
DISTRIBUTED FPGA RAY CASTER
4x PYNQ-Z2 \xB7 REDIS \xB7 KAFKA \xB7 AWS
BUILT @ IMPERIAL COLLEGE LONDON
          </div>

          <div class="about-credit-strip">
            <span class="about-credit-chip">retro ops HUD</span>
            <span class="about-credit-chip">ec2 + fpga transport</span>
            <span class="about-credit-chip">sidecar archive path</span>
          </div>
        </div>
      </section>
    </section>
  </main>
</div>`,sim:`<div class="app-shell">
  <header class="topbar">
    <div class="brand-lockup">
      <div class="brand-title">PYNQ CAST</div>
      <div class="brand-sub">distributed FPGA raycaster monitor</div>
    </div>
    <nav class="top-nav">
      <button id="tab-game" class="nav-tab active" type="button" onclick="setActiveTab('game')">Game View</button>
      <button id="tab-server" class="nav-tab" type="button" onclick="setActiveTab('server')">Server Monitoring</button>
      <button id="tab-controls" class="nav-tab" type="button" onclick="setActiveTab('controls')">Controls &amp; Config</button>
      <button id="tab-about" class="nav-tab" type="button" onclick="setActiveTab('about')">About</button>
    </nav>
    <div class="top-status">
      <span id="status" class="disconnected">\u25CF DISCONNECTED</span>
      <span id="game-chip">no game</span>
    </div>
  </header>

  <div id="pause-banner" class="pause-banner" hidden></div>

  <main class="page-shell">
    <section id="page-game" class="page">
      <div class="section-label">Game View</div>

      <div class="hud-grid">
        <div class="panel-raised hud-card">
          <div class="hud-label">Render Rate</div>
          <div class="fps-stack">
            <span id="fps">0</span>
            <span class="fps-unit">FPS</span>
          </div>
          <div id="hud-frame-ms" class="hud-sub">0.0 ms/frame</div>
        </div>

        <div class="panel-raised hud-card">
          <div class="hud-label">View Mode</div>
          <div id="hud-view-mode" class="hud-value">Map Play</div>
          <div id="hud-map-name" class="hud-sub">chase</div>
        </div>

        <div class="panel-raised hud-card">
          <div class="hud-label">Match State</div>
          <div id="hud-match-state" class="hud-value">Idle</div>
          <div id="hud-player-count" class="hud-sub">0 entities online</div>
        </div>

        <div class="panel-raised hud-card">
          <div class="hud-label">Socket Feed</div>
          <div id="hud-ws-rate" class="hud-value">0 / s</div>
          <div class="hud-sub">browser update stream</div>
        </div>

        <div class="panel-terminal hud-events-card">
          <div class="hud-events-head">
            <div class="hud-label">Live Event Feed</div>
            <span id="hud-event-count" class="micro-chip">idle</span>
          </div>
          <div id="game-event-list" class="hud-events-list">
            <div class="hud-feed-empty">waiting for first match event...</div>
          </div>
        </div>
      </div>

      <div class="game-layout">
        <div class="panel-raised viewport-card">
          <div class="panel-head viewport-head">
            <h2>Raycast Arena</h2>
            <div class="viewport-head-meta">
              <span id="canvas-label" class="panel-head-note">map play \xB7 loading map\u2026</span>
              <div class="viewport-action-row">
                <button class="viewport-control-btn start" type="button" onclick="sendControl('restart', 'start match')">Start</button>
                <button class="viewport-control-btn stop" type="button" onclick="sendControl('force_end', 'force end match')">End</button>
                <button
                  id="archive-toggle"
                  class="archive-toggle-btn"
                  type="button"
                  aria-controls="archive-drawer"
                  aria-expanded="false"
                  onclick="toggleArchiveDrawer()"
                >Archive</button>
              </div>
            </div>
          </div>
          <div class="viewport-wrap">
            <canvas id="arena" width="480" height="480"></canvas>
          </div>
          <aside id="archive-drawer" class="panel-raised archive-drawer" hidden>
            <div class="archive-drawer-head">
              <h2>DynamoDB + Replay</h2>
              <button class="archive-close-btn" type="button" onclick="toggleArchiveDrawer(false)">Close</button>
            </div>
            <div class="archive-drawer-body">
              <div>
                <div class="panel-head">
                  <h2>Archive</h2>
                  <span class="micro-chip">warm tier</span>
                </div>
                <div id="match-list"><span style="color:#90a3c4">loading...</span></div>
                <div class="ddb-note">warm tier only \xB7 recent META rows kept in DynamoDB \xB7 older match rows archived to S3</div>
              </div>

              <div>
                <div class="panel-head">
                  <h2>Replay</h2>
                  <span class="micro-chip">S3</span>
                </div>
                <div class="metric-note" id="replay-status">no replay loaded</div>
                <div class="replay-list" id="replay-list">
                  <button class="replay-btn empty" disabled>waiting for replayable matches...</button>
                </div>
                <div class="control-stack">
                  <button class="control-btn stop" type="button" onclick="stopReplay()">Stop Replay</button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div class="game-sidebar">
          <div class="panel-raised frame-panel sidebar-profiler-panel">
            <div class="panel-head">
              <h2>Pipeline Frame Timing</h2>
              <span class="micro-chip">stacked profiler</span>
            </div>
            <div class="frame-chart-container">
              <div class="target-lines">
                <div class="target-line target-60fps">
                  <span class="target-label">16.7MS (60FPS)</span>
                </div>
                <div class="target-line target-30fps">
                  <span class="target-label">33.3MS (30FPS)</span>
                </div>
              </div>

              <div class="stacked-bars" id="stacked-frame-chart"></div>

              <div class="bar-time-axis">
                <span>oldest</span>
                <span>newest</span>
              </div>
            </div>

            <div class="legend">
              <div class="legend-item"><span class="legend-swatch" style="background:var(--stage-dispatch)"></span>Dispatch</div>
              <div class="legend-item"><span class="legend-swatch" style="background:var(--stage-compute)"></span>FPGA Compute</div>
              <div class="legend-item"><span class="legend-swatch" style="background:var(--stage-network)"></span>Network</div>
              <div class="legend-item"><span class="legend-swatch" style="background:var(--stage-composite)"></span>Composite</div>
            </div>

            <div class="metric-note profiler-note">Development timing shim for now. Replace this buffer with real per-stage frame telemetry once the websocket exposes it.</div>
          </div>

          <div class="panel-raised player-panel">
            <div class="panel-head">
              <h2>Player Stats</h2>
              <span class="micro-chip">live</span>
            </div>
            <div class="player-table-wrap">
              <table class="player-table">
                <thead><tr><th>ID</th><th>role</th><th>X</th><th>Y</th><th>angle</th><th>dist</th><th>status</th></tr></thead>
                <tbody id="player-tbody"></tbody>
              </table>
            </div>
          </div>

          <div class="panel-raised objective-panel">
            <div class="panel-head">
              <h2>Objective State</h2>
              <span class="micro-chip">bits</span>
            </div>
            <div class="metric-row"><span>mode</span><span id="bits-mode">\u2014</span></div>
            <div class="metric-row"><span>remaining</span><span id="bits-remaining">\u2014</span></div>
            <div class="metric-row"><span>collected</span><span id="bits-collected">\u2014</span></div>
            <div class="metric-row"><span>progress</span><span id="bits-progress">\u2014</span></div>
            <div class="bits-track"><div class="bits-fill" id="bits-fill"></div></div>
            <div class="metric-note" id="bits-note">runner wins by clearing every bit in chase_bits mode.</div>
          </div>
        </div>
      </div>
    </section>

    <section id="page-server" class="page" hidden>
      <div class="section-label">Server Monitoring</div>

      <div class="server-grid">
        <div class="panel-raised server-health">
          <div class="panel-head">
            <h2>Node Health</h2>
            <span class="micro-chip">live</span>
          </div>
          <div class="status-grid">
            <div class="panel-inset status-card">
              <span class="status-name">Server</span>
              <span id="svc-server" class="status-slot">\u2014</span>
            </div>
            <div class="panel-inset status-card">
              <span class="status-name">Sidecar</span>
              <span id="svc-sidecar" class="status-slot">\u2014</span>
            </div>
            <div class="panel-inset status-card">
              <span class="status-name">Monitor</span>
              <span id="svc-monitor" class="status-slot">\u2014</span>
            </div>
            <div class="panel-inset status-card">
              <span class="status-name">P1 Node</span>
              <span id="node1-link" class="status-slot">offline \xB7 manual</span>
            </div>
            <div class="panel-inset status-card">
              <span class="status-name">P2 Node</span>
              <span id="node2-link" class="status-slot">offline \xB7 manual</span>
            </div>
            <div class="panel-inset status-card">
              <span class="status-name">Live View</span>
              <span id="server-view-card" class="status-slot">game telemetry</span>
            </div>
          </div>
        </div>

        <div class="panel-raised pipeline-panel">
          <div class="panel-head">
            <h2>SEDA Pipeline</h2>
            <span class="micro-chip">actual runtime</span>
          </div>
          <div class="pipeline-board">
            <div class="pipeline-summary">Flow is \`nodes -> T1 -> T2\`, then \`T2 -> T3 -> nodes\` for broadcast and \`T2 -> T4 -> Redis -> sidecar -> AWS\` for persistence.</div>

            <div class="pipeline-lane">
              <div class="pipeline-lane-tag">Input Path</div>
              <div class="pipe-card stage-net">
                <div class="pipe-card-label">clients</div>
                <div class="pipe-card-title">PYNQ + Node Sims</div>
                <div class="pipe-card-desc">register, heartbeat, and movement packets</div>
                <div class="pipe-card-val">UDP gameplay traffic</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">UDP 9000</div>
              </div>

              <div class="pipe-card stage-net">
                <div class="pipe-card-label">asyncio</div>
                <div class="pipe-card-title">T1 UDPReceiver</div>
                <div class="pipe-card-desc">shared EC2:9000 socket ingress</div>
                <div class="pipe-card-val">raw datagrams in</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">packet_queue</div>
              </div>

              <div class="pipe-card stage-logic">
                <div class="pipe-card-label">asyncio \xB7 20 Hz</div>
                <div class="pipe-card-title">T2 GameTick</div>
                <div class="pipe-card-desc">authoritative state, tags, bits, and broadcast build</div>
                <div class="pipe-card-val"><span id="pp-players">0</span> live players</div>
              </div>
            </div>

            <div class="pipeline-lane">
              <div class="pipeline-lane-tag">Broadcast</div>
              <div class="pipe-jump pipe-jump-source">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">from T2</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">broadcast_queue</div>
              </div>

              <div class="pipe-card stage-net">
                <div class="pipe-card-label">asyncio</div>
                <div class="pipe-card-title">T3 Broadcaster</div>
                <div class="pipe-card-desc">same EC2:9000 socket back out to nodes</div>
                <div class="pipe-card-val">UDP fan-out</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">shared EC2:9000</div>
              </div>

              <div class="pipe-card stage-net">
                <div class="pipe-card-label">outbound</div>
                <div class="pipe-card-title">Active Nodes</div>
                <div class="pipe-card-desc">frame slices and state updates return to the players</div>
                <div class="pipe-card-val">same clients, reverse path</div>
              </div>
            </div>

            <div class="pipeline-lane">
              <div class="pipeline-lane-tag">Persistence</div>
              <div class="pipe-jump pipe-jump-source">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">from T2</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">write_queue</div>
              </div>

              <div class="pipe-card stage-io">
                <div class="pipe-card-label">OS thread</div>
                <div class="pipe-card-title">T4 RedisWriter</div>
                <div class="pipe-card-desc">batches HSET and LPUSH, mirrors monitor events</div>
                <div class="pipe-card-val"><span id="pp-ops">\u2014</span> Redis ops/s</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">local Redis</div>
              </div>

              <div class="pipe-card stage-store">
                <div class="pipe-card-label">hot tier</div>
                <div class="pipe-card-title">Redis</div>
                <div class="pipe-card-desc">state hashes plus event and replay lists</div>
                <div class="pipe-card-val">cache + queues</div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">BRPOP events + replay</div>
              </div>

              <div class="pipe-card stage-store">
                <div class="pipe-card-label">process</div>
                <div class="pipe-card-title">Sidecar</div>
                <div class="pipe-card-desc">blocks on events and replay, manages retention</div>
                <div class="pipe-card-metrics">
                  <div class="pipe-card-metric"><span id="pp-blocked">\u2014</span> blocked</div>
                  <div class="pipe-card-metric"><span id="pp-events">\u2014</span> events</div>
                </div>
              </div>

              <div class="pipe-jump">
                <div class="pipe-jump-arrow">\u2192</div>
                <div class="pipe-jump-label">AWS fan-out</div>
              </div>

              <div class="pipe-card stage-ext">
                <div class="pipe-card-label">AWS warm tier</div>
                <div class="pipe-card-title">DynamoDB</div>
                <div class="pipe-card-desc">recent META plus tag and bit rows</div>
                <div class="pipe-card-val"><span id="pp-ddb">\u2014</span> warm matches</div>
              </div>

              <div class="pipe-card stage-ext">
                <div class="pipe-card-label">AWS cold tier</div>
                <div class="pipe-card-title">S3</div>
                <div class="pipe-card-desc">compressed replays and DynamoDB archives</div>
                <div class="pipe-card-val">cold storage</div>
              </div>

              <div class="pipe-card stage-ext">
                <div class="pipe-card-label">AWS async trigger</div>
                <div class="pipe-card-title">SNS / Lambda</div>
                <div class="pipe-card-desc">post-match summary path on \`match_end\`</div>
                <div class="pipe-card-val">summary hook</div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-raised storage-panel">
          <div class="panel-head">
            <h2>Redis Hot Cache</h2>
            <span class="micro-chip">telemetry</span>
          </div>
          <div class="metric-row"><span>ops / sec</span><span id="r-ops">\u2014</span></div>
          <div class="metric-row"><span>memory</span><span id="r-mem">\u2014</span></div>
          <div class="metric-row"><span>clients</span><span id="r-clients">\u2014</span></div>
          <div class="metric-row"><span>blocked</span><span id="r-blocked">\u2014</span></div>
          <div class="metric-row"><span>pub/sub</span><span id="r-pubsub">\u2014</span></div>
          <div class="metric-row"><span>monitor load</span><span id="r-poll">\u2014</span></div>
          <div class="metric-note" id="redis-note">measuring live Redis load...</div>
        </div>

        <div class="panel-raised profiler-panel server-frame-panel">
          <div class="panel-head">
            <h2>Frame Timing</h2>
            <span class="micro-chip">sparkline</span>
          </div>
          <canvas id="frame-chart" width="560" height="88"></canvas>
          <div class="metric-note">Recent monitor render times. Taller bars mean slower browser-side drawing.</div>
        </div>
      </div>
    </section>

    <section id="page-controls" class="page" hidden>
      <div class="section-label">Controls &amp; Config</div>

      <div class="controls-grid">
        <div class="panel-raised controls-actions">
          <div class="panel-head">
            <h2>EC2 Service Controls</h2>
            <span class="micro-chip">services</span>
          </div>
          <div class="control-stack">
            <button class="control-btn start" type="button" onclick="sendControl('start_server', 'start server')">Start Server</button>
            <button class="control-btn stop" type="button" onclick="sendControl('stop_server', 'stop server')">Stop Server</button>
            <button class="control-btn start" type="button" onclick="sendControl('start_sidecar', 'start sidecar')">Start Sidecar</button>
            <button class="control-btn stop" type="button" onclick="sendControl('stop_sidecar', 'stop sidecar')">Stop Sidecar</button>
            <button class="control-btn restart" type="button" onclick="sendControl('restart_stack', 'restart stack')">Restart Stack</button>
          </div>
          <div class="metric-note" id="svc-note">controls run on EC2 only; node simulators still start locally</div>
        </div>

        <div class="panel-raised controls-sim">
          <div class="panel-head">
            <h2>Simulation Mode</h2>
            <span class="micro-chip">manual / auto</span>
          </div>
          <div class="metric-note">View Mode</div>
          <div class="control-pair" id="view-mode-btns"></div>
          <div class="metric-note" id="view-mode-note">map play is the default and forces both simulator nodes back to manual control.</div>

          <div id="orbit-mode-controls" hidden>
            <div class="metric-note" style="margin-top:12px;">Orbit Test Controls</div>
            <div class="metric-note">Orbit view is only for smoke-testing server movement. Auto/manual switching stays here.</div>
            <div class="metric-note" style="margin-top:12px;">Node 1</div>
            <div class="control-pair">
              <button class="control-btn start" type="button" onclick="requestNodeMode(1, 'auto')">P1 Auto</button>
              <button class="control-btn restart" type="button" onclick="requestNodeMode(1, 'manual')">P1 Manual</button>
            </div>
            <div class="metric-note" style="margin-top:12px;">Node 2</div>
            <div class="control-pair">
              <button class="control-btn start" type="button" onclick="requestNodeMode(2, 'auto')">P2 Auto</button>
              <button class="control-btn restart" type="button" onclick="requestNodeMode(2, 'manual')">P2 Manual</button>
            </div>
          </div>

          <div id="map-play-controls">
            <div class="metric-note" style="margin-top:12px;">Ghost Taggers (simulates PYNQ menu)</div>
            <div class="control-stack">
              <button class="control-btn" type="button" onclick="sendControl('set_ghosts_0', 'ghost count \u2192 0')">0 Ghosts</button>
              <button class="control-btn" type="button" onclick="sendControl('set_ghosts_1', 'ghost count \u2192 1')">1 Ghost</button>
              <button class="control-btn" type="button" onclick="sendControl('set_ghosts_2', 'ghost count \u2192 2')">2 Ghosts</button>
              <button class="control-btn" type="button" onclick="sendControl('set_ghosts_3', 'ghost count \u2192 3')">3 Ghosts</button>
            </div>
            <div class="metric-note" style="margin-top:12px;">Map (hot-swap mid-session)</div>
            <div class="control-stack" id="map-btn-list">
              <span style="color:#90a3c4">loading maps...</span>
            </div>
            <div class="metric-note">Map play is manual-only. Focus the relevant tmux pane before using arrow keys.</div>
          </div>
        </div>

        <div class="panel-raised controls-notes">
          <div class="panel-head">
            <h2>Operator Notes</h2>
            <span class="micro-chip">quick guide</span>
          </div>
          <div class="note-list">
            <div class="metric-note">Game View is the showpiece: viewport, player state, bit progress, and frame timing stay together there.</div>
            <div class="metric-note">Server Monitoring is the ops deck: health, pipeline throughput, storage tiers, replay archive, and the stacked frame profiler.</div>
            <div class="metric-note">Controls &amp; Config keeps the active knobs isolated so runtime actions stop fighting with the visual telemetry pages.</div>
          </div>
        </div>
      </div>
    </section>

    <section id="page-about" class="page about-page" hidden>
      <div class="section-label">About PYNQCAST</div>

      <section class="about-hero">
        <div class="about-stage">
          <div class="about-stage-grid" aria-hidden="true"></div>
          <div class="about-light-cone" aria-hidden="true"></div>
          <div class="about-sprite-wrap">
            <div class="about-react-board-slot" aria-label="spinning PYNQ board showcase"></div>
          </div>
          <div class="about-stage-label">dropped relic \xB7 live node cluster</div>
        </div>

        <div class="about-copy-column">
          <div class="about-title-row">
            <h2 class="about-title">&#9638; About PYNQCAST</h2>
            <span class="micro-chip">v1.0</span>
          </div>

          <div class="about-copy">
DISTRIBUTED FPGA RAY CASTER
4x PYNQ-Z2 \xB7 REDIS \xB7 KAFKA \xB7 AWS
BUILT @ IMPERIAL COLLEGE LONDON
          </div>

          <div class="about-credit-strip">
            <span class="about-credit-chip">retro ops HUD</span>
            <span class="about-credit-chip">ec2 + fpga transport</span>
            <span class="about-credit-chip">sidecar archive path</span>
          </div>
        </div>
      </section>
    </section>
  </main>
</div>`};var ma=ys(ac()),jg=["/monitor-state.js","/monitor-render.js","/monitor-app.js"];function l2(){if(window.__monitorLegacyBootstrapped)return;window.__monitorLegacyBootstrapped=!0;let e=t=>{if(t>=jg.length){window.dispatchEvent(new Event("monitor:legacy-ready"));return}let n=document.createElement("script");n.src=jg[t],n.async=!1,n.onload=()=>e(t+1),n.onerror=()=>{console.error(`[monitor-ui] failed to load legacy script: ${jg[t]}`)},document.body.appendChild(n)};e(0)}function c2({mode:e}){let t=(0,Fd.useRef)(null);return(0,Fd.useEffect)(()=>{l2()},[]),(0,ma.jsxs)(ma.Fragment,{children:[(0,ma.jsx)("div",{ref:t,className:"react-monitor-root",dangerouslySetInnerHTML:{__html:Jg[e]||Jg.pynq}}),(0,ma.jsx)(Zg,{hostRef:t})]})}var u2=window.__MONITOR_MODE__==="sim"?"sim":"pynq",Lb=document.getElementById("root");if(!Lb)throw new Error("Missing #root for monitor React mount");(0,Nb.createRoot)(Lb).render((0,ma.jsx)(c2,{mode:u2}));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

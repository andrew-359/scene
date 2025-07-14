(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},No=[],Fn=()=>{},qp=()=>!1,la=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ac=n=>n.startsWith("onUpdate:"),Gt=Object.assign,Rc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Kp=Object.prototype.hasOwnProperty,rt=(n,e)=>Kp.call(n,e),Ve=Array.isArray,Bo=n=>ca(n)==="[object Map]",Df=n=>ca(n)==="[object Set]",He=n=>typeof n=="function",At=n=>typeof n=="string",mr=n=>typeof n=="symbol",Tt=n=>n!==null&&typeof n=="object",Lf=n=>(Tt(n)||He(n))&&He(n.then)&&He(n.catch),kf=Object.prototype.toString,ca=n=>kf.call(n),Zp=n=>ca(n).slice(8,-1),If=n=>ca(n)==="[object Object]",Pc=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,gi=Cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Jp=/-(\w)/g,bn=da(n=>n.replace(Jp,(e,t)=>t?t.toUpperCase():"")),Qp=/\B([A-Z])/g,fo=da(n=>n.replace(Qp,"-$1").toLowerCase()),ua=da(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ea=da(n=>n?`on${ua(n)}`:""),Lr=(n,e)=>!Object.is(n,e),wa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},_l=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},em=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let _d;const fa=()=>_d||(_d=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dc(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],o=At(r)?om(r):Dc(r);if(o)for(const i in o)e[i]=o[i]}return e}else if(At(n)||Tt(n))return n}const tm=/;(?![^(]*\))/g,nm=/:([^]+)/,rm=/\/\*[^]*?\*\//g;function om(n){const e={};return n.replace(rm,"").split(tm).forEach(t=>{if(t){const r=t.split(nm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function wi(n){let e="";if(At(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const r=wi(n[t]);r&&(e+=r+" ")}else if(Tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const im="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sm=Cc(im);function Uf(n){return!!n||n===""}const Of=n=>!!(n&&n.__v_isRef===!0),Yo=n=>At(n)?n:n==null?"":Ve(n)||Tt(n)&&(n.toString===kf||!He(n.toString))?Of(n)?Yo(n.value):JSON.stringify(n,Nf,2):String(n),Nf=(n,e)=>Of(e)?Nf(n,e.value):Bo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,o],i)=>(t[Ta(r,i)+" =>"]=o,t),{})}:Df(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ta(t))}:mr(e)?Ta(e):Tt(e)&&!Ve(e)&&!If(e)?String(e):e,Ta=(n,e="")=>{var t;return mr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class am{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=nn;try{return nn=this,e()}finally{nn=t}}}on(){++this._on===1&&(this.prevScope=nn,nn=this)}off(){this._on>0&&--this._on===0&&(nn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function lm(){return nn}let mt;const Ca=new WeakSet;class Bf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nn&&nn.active&&nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yd(this),$f(this);const e=mt,t=An;mt=this,An=!0;try{return this.fn()}finally{Hf(this),mt=e,An=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ic(e);this.deps=this.depsTail=void 0,yd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yl(this)&&this.run()}get dirty(){return yl(this)}}let Ff=0,vi,bi;function zf(n,e=!1){if(n.flags|=8,e){n.next=bi,bi=n;return}n.next=vi,vi=n}function Lc(){Ff++}function kc(){if(--Ff>0)return;if(bi){let e=bi;for(bi=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;vi;){let e=vi;for(vi=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function $f(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hf(n){let e,t=n.depsTail,r=t;for(;r;){const o=r.prevDep;r.version===-1?(r===t&&(t=o),Ic(r),cm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}n.deps=e,n.depsTail=t}function yl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Vf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ti)||(n.globalVersion=Ti,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!yl(n))))return;n.flags|=2;const e=n.dep,t=mt,r=An;mt=n,An=!0;try{$f(n);const o=n.fn(n._value);(e.version===0||Lr(o,n._value))&&(n.flags|=128,n._value=o,e.version++)}catch(o){throw e.version++,o}finally{mt=t,An=r,Hf(n),n.flags&=-3}}function Ic(n,e=!1){const{dep:t,prevSub:r,nextSub:o}=n;if(r&&(r.nextSub=o,n.prevSub=void 0),o&&(o.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Ic(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function cm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let An=!0;const Gf=[];function ur(){Gf.push(An),An=!1}function fr(){const n=Gf.pop();An=n===void 0?!0:n}function yd(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=mt;mt=void 0;try{e()}finally{mt=t}}}let Ti=0;class dm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Uc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!mt||!An||mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==mt)t=this.activeLink=new dm(mt,this),mt.deps?(t.prevDep=mt.depsTail,mt.depsTail.nextDep=t,mt.depsTail=t):mt.deps=mt.depsTail=t,Wf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=mt.depsTail,t.nextDep=void 0,mt.depsTail.nextDep=t,mt.depsTail=t,mt.deps===t&&(mt.deps=r)}return t}trigger(e){this.version++,Ti++,this.notify(e)}notify(e){Lc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{kc()}}}function Wf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Wf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const xl=new WeakMap,io=Symbol(""),Sl=Symbol(""),Ci=Symbol("");function zt(n,e,t){if(An&&mt){let r=xl.get(n);r||xl.set(n,r=new Map);let o=r.get(t);o||(r.set(t,o=new Uc),o.map=r,o.key=t),o.track()}}function tr(n,e,t,r,o,i){const s=xl.get(n);if(!s){Ti++;return}const a=l=>{l&&l.trigger()};if(Lc(),e==="clear")s.forEach(a);else{const l=Ve(n),c=l&&Pc(t);if(l&&t==="length"){const d=Number(r);s.forEach((u,f)=>{(f==="length"||f===Ci||!mr(f)&&f>=d)&&a(u)})}else switch((t!==void 0||s.has(void 0))&&a(s.get(t)),c&&a(s.get(Ci)),e){case"add":l?c&&a(s.get("length")):(a(s.get(io)),Bo(n)&&a(s.get(Sl)));break;case"delete":l||(a(s.get(io)),Bo(n)&&a(s.get(Sl)));break;case"set":Bo(n)&&a(s.get(io));break}}kc()}function mo(n){const e=nt(n);return e===n?e:(zt(e,"iterate",Ci),Rn(n)?e:e.map(Yt))}function Oc(n){return zt(n=nt(n),"iterate",Ci),n}const um={__proto__:null,[Symbol.iterator](){return Aa(this,Symbol.iterator,Yt)},concat(...n){return mo(this).concat(...n.map(e=>Ve(e)?mo(e):e))},entries(){return Aa(this,"entries",n=>(n[1]=Yt(n[1]),n))},every(n,e){return Xn(this,"every",n,e,void 0,arguments)},filter(n,e){return Xn(this,"filter",n,e,t=>t.map(Yt),arguments)},find(n,e){return Xn(this,"find",n,e,Yt,arguments)},findIndex(n,e){return Xn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Xn(this,"findLast",n,e,Yt,arguments)},findLastIndex(n,e){return Xn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Xn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ra(this,"includes",n)},indexOf(...n){return Ra(this,"indexOf",n)},join(n){return mo(this).join(n)},lastIndexOf(...n){return Ra(this,"lastIndexOf",n)},map(n,e){return Xn(this,"map",n,e,void 0,arguments)},pop(){return ri(this,"pop")},push(...n){return ri(this,"push",n)},reduce(n,...e){return xd(this,"reduce",n,e)},reduceRight(n,...e){return xd(this,"reduceRight",n,e)},shift(){return ri(this,"shift")},some(n,e){return Xn(this,"some",n,e,void 0,arguments)},splice(...n){return ri(this,"splice",n)},toReversed(){return mo(this).toReversed()},toSorted(n){return mo(this).toSorted(n)},toSpliced(...n){return mo(this).toSpliced(...n)},unshift(...n){return ri(this,"unshift",n)},values(){return Aa(this,"values",Yt)}};function Aa(n,e,t){const r=Oc(n),o=r[e]();return r!==n&&!Rn(n)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=t(i.value)),i}),o}const fm=Array.prototype;function Xn(n,e,t,r,o,i){const s=Oc(n),a=s!==n&&!Rn(n),l=s[e];if(l!==fm[e]){const u=l.apply(n,i);return a?Yt(u):u}let c=t;s!==n&&(a?c=function(u,f){return t.call(this,Yt(u),f,n)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,n)}));const d=l.call(s,c,r);return a&&o?o(d):d}function xd(n,e,t,r){const o=Oc(n);let i=t;return o!==n&&(Rn(n)?t.length>3&&(i=function(s,a,l){return t.call(this,s,a,l,n)}):i=function(s,a,l){return t.call(this,s,Yt(a),l,n)}),o[e](i,...r)}function Ra(n,e,t){const r=nt(n);zt(r,"iterate",Ci);const o=r[e](...t);return(o===-1||o===!1)&&zc(t[0])?(t[0]=nt(t[0]),r[e](...t)):o}function ri(n,e,t=[]){ur(),Lc();const r=nt(n)[e].apply(n,t);return kc(),fr(),r}const hm=Cc("__proto__,__v_isRef,__isVue"),Xf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(mr));function pm(n){mr(n)||(n=String(n));const e=nt(this);return zt(e,"has",n),e.hasOwnProperty(n)}class jf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const o=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!o;if(t==="__v_isReadonly")return o;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(o?i?Em:Zf:i?Kf:qf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=Ve(e);if(!o){let l;if(s&&(l=um[t]))return l;if(t==="hasOwnProperty")return pm}const a=Reflect.get(e,t,Ht(e)?e:r);return(mr(t)?Xf.has(t):hm(t))||(o||zt(e,"get",t),i)?a:Ht(a)?s&&Pc(t)?a:a.value:Tt(a)?o?Bc(a):ha(a):a}}class Yf extends jf{constructor(e=!1){super(!1,e)}set(e,t,r,o){let i=e[t];if(!this._isShallow){const l=ao(i);if(!Rn(r)&&!ao(r)&&(i=nt(i),r=nt(r)),!Ve(e)&&Ht(i)&&!Ht(r))return l?!1:(i.value=r,!0)}const s=Ve(e)&&Pc(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,r,Ht(e)?e:o);return e===nt(o)&&(s?Lr(r,i)&&tr(e,"set",t,r):tr(e,"add",t,r)),a}deleteProperty(e,t){const r=rt(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&r&&tr(e,"delete",t,void 0),o}has(e,t){const r=Reflect.has(e,t);return(!mr(t)||!Xf.has(t))&&zt(e,"has",t),r}ownKeys(e){return zt(e,"iterate",Ve(e)?"length":io),Reflect.ownKeys(e)}}class mm extends jf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const gm=new Yf,vm=new mm,bm=new Yf(!0);const Ml=n=>n,ls=n=>Reflect.getPrototypeOf(n);function _m(n,e,t){return function(...r){const o=this.__v_raw,i=nt(o),s=Bo(i),a=n==="entries"||n===Symbol.iterator&&s,l=n==="keys"&&s,c=o[n](...r),d=t?Ml:e?El:Yt;return!e&&zt(i,"iterate",l?Sl:io),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function cs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ym(n,e){const t={get(o){const i=this.__v_raw,s=nt(i),a=nt(o);n||(Lr(o,a)&&zt(s,"get",o),zt(s,"get",a));const{has:l}=ls(s),c=e?Ml:n?El:Yt;if(l.call(s,o))return c(i.get(o));if(l.call(s,a))return c(i.get(a));i!==s&&i.get(o)},get size(){const o=this.__v_raw;return!n&&zt(nt(o),"iterate",io),Reflect.get(o,"size",o)},has(o){const i=this.__v_raw,s=nt(i),a=nt(o);return n||(Lr(o,a)&&zt(s,"has",o),zt(s,"has",a)),o===a?i.has(o):i.has(o)||i.has(a)},forEach(o,i){const s=this,a=s.__v_raw,l=nt(a),c=e?Ml:n?El:Yt;return!n&&zt(l,"iterate",io),a.forEach((d,u)=>o.call(i,c(d),c(u),s))}};return Gt(t,n?{add:cs("add"),set:cs("set"),delete:cs("delete"),clear:cs("clear")}:{add(o){!e&&!Rn(o)&&!ao(o)&&(o=nt(o));const i=nt(this);return ls(i).has.call(i,o)||(i.add(o),tr(i,"add",o,o)),this},set(o,i){!e&&!Rn(i)&&!ao(i)&&(i=nt(i));const s=nt(this),{has:a,get:l}=ls(s);let c=a.call(s,o);c||(o=nt(o),c=a.call(s,o));const d=l.call(s,o);return s.set(o,i),c?Lr(i,d)&&tr(s,"set",o,i):tr(s,"add",o,i),this},delete(o){const i=nt(this),{has:s,get:a}=ls(i);let l=s.call(i,o);l||(o=nt(o),l=s.call(i,o)),a&&a.call(i,o);const c=i.delete(o);return l&&tr(i,"delete",o,void 0),c},clear(){const o=nt(this),i=o.size!==0,s=o.clear();return i&&tr(o,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=_m(o,n,e)}),t}function Nc(n,e){const t=ym(n,e);return(r,o,i)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?r:Reflect.get(rt(t,o)&&o in r?t:r,o,i)}const xm={get:Nc(!1,!1)},Sm={get:Nc(!1,!0)},Mm={get:Nc(!0,!1)};const qf=new WeakMap,Kf=new WeakMap,Zf=new WeakMap,Em=new WeakMap;function wm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tm(n){return n.__v_skip||!Object.isExtensible(n)?0:wm(Zp(n))}function ha(n){return ao(n)?n:Fc(n,!1,gm,xm,qf)}function Cm(n){return Fc(n,!1,bm,Sm,Kf)}function Bc(n){return Fc(n,!0,vm,Mm,Zf)}function Fc(n,e,t,r,o){if(!Tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=Tm(n);if(i===0)return n;const s=o.get(n);if(s)return s;const a=new Proxy(n,i===2?r:t);return o.set(n,a),a}function _i(n){return ao(n)?_i(n.__v_raw):!!(n&&n.__v_isReactive)}function ao(n){return!!(n&&n.__v_isReadonly)}function Rn(n){return!!(n&&n.__v_isShallow)}function zc(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function Am(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&_l(n,"__v_skip",!0),n}const Yt=n=>Tt(n)?ha(n):n,El=n=>Tt(n)?Bc(n):n;function Ht(n){return n?n.__v_isRef===!0:!1}function Nn(n){return Rm(n,!1)}function Rm(n,e){return Ht(n)?n:new Pm(n,e)}class Pm{constructor(e,t){this.dep=new Uc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:Yt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Rn(e)||ao(e);e=r?e:nt(e),Lr(e,t)&&(this._rawValue=e,this._value=r?e:Yt(e),this.dep.trigger())}}function kr(n){return Ht(n)?n.value:n}const Dm={get:(n,e,t)=>e==="__v_raw"?n:kr(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const o=n[e];return Ht(o)&&!Ht(t)?(o.value=t,!0):Reflect.set(n,e,t,r)}};function Jf(n){return _i(n)?n:new Proxy(n,Dm)}class Lm{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Uc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ti-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&mt!==this)return zf(this,!0),!0}get value(){const e=this.dep.track();return Vf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function km(n,e,t=!1){let r,o;return He(n)?r=n:(r=n.get,o=n.set),new Lm(r,o,t)}const ds={},Ks=new WeakMap;let Qr;function Im(n,e=!1,t=Qr){if(t){let r=Ks.get(t);r||Ks.set(t,r=[]),r.push(n)}}function Um(n,e,t=ut){const{immediate:r,deep:o,once:i,scheduler:s,augmentJob:a,call:l}=t,c=b=>o?b:Rn(b)||o===!1||o===0?nr(b,1):nr(b);let d,u,f,p,g=!1,_=!1;if(Ht(n)?(u=()=>n.value,g=Rn(n)):_i(n)?(u=()=>c(n),g=!0):Ve(n)?(_=!0,g=n.some(b=>_i(b)||Rn(b)),u=()=>n.map(b=>{if(Ht(b))return b.value;if(_i(b))return c(b);if(He(b))return l?l(b,2):b()})):He(n)?e?u=l?()=>l(n,2):n:u=()=>{if(f){ur();try{f()}finally{fr()}}const b=Qr;Qr=d;try{return l?l(n,3,[p]):n(p)}finally{Qr=b}}:u=Fn,e&&o){const b=u,A=o===!0?1/0:o;u=()=>nr(b(),A)}const m=lm(),h=()=>{d.stop(),m&&m.active&&Rc(m.effects,d)};if(i&&e){const b=e;e=(...A)=>{b(...A),h()}}let w=_?new Array(n.length).fill(ds):ds;const E=b=>{if(!(!(d.flags&1)||!d.dirty&&!b))if(e){const A=d.run();if(o||g||(_?A.some((D,R)=>Lr(D,w[R])):Lr(A,w))){f&&f();const D=Qr;Qr=d;try{const R=[A,w===ds?void 0:_&&w[0]===ds?[]:w,p];w=A,l?l(e,3,R):e(...R)}finally{Qr=D}}}else d.run()};return a&&a(E),d=new Bf(u),d.scheduler=s?()=>s(E,!1):E,p=b=>Im(b,!1,d),f=d.onStop=()=>{const b=Ks.get(d);if(b){if(l)l(b,4);else for(const A of b)A();Ks.delete(d)}},e?r?E(!0):w=d.run():s?s(E.bind(null,!0),!0):d.run(),h.pause=d.pause.bind(d),h.resume=d.resume.bind(d),h.stop=h,h}function nr(n,e=1/0,t){if(e<=0||!Tt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ht(n))nr(n.value,e,t);else if(Ve(n))for(let r=0;r<n.length;r++)nr(n[r],e,t);else if(Df(n)||Bo(n))n.forEach(r=>{nr(r,e,t)});else if(If(n)){for(const r in n)nr(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&nr(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ki(n,e,t,r){try{return r?n(...r):n()}catch(o){pa(o,e,t)}}function Hn(n,e,t,r){if(He(n)){const o=Ki(n,e,t,r);return o&&Lf(o)&&o.catch(i=>{pa(i,e,t)}),o}if(Ve(n)){const o=[];for(let i=0;i<n.length;i++)o.push(Hn(n[i],e,t,r));return o}}function pa(n,e,t,r=!0){const o=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const d=a.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](n,l,c)===!1)return}a=a.parent}if(i){ur(),Ki(i,null,10,[n,l,c]),fr();return}}Om(n,t,o,r,s)}function Om(n,e,t,r=!0,o=!1){if(o)throw n;console.error(n)}const qt=[];let kn=-1;const Fo=[];let wr=null,Do=0;const Qf=Promise.resolve();let Zs=null;function eh(n){const e=Zs||Qf;return n?e.then(this?n.bind(this):n):e}function Nm(n){let e=kn+1,t=qt.length;for(;e<t;){const r=e+t>>>1,o=qt[r],i=Ai(o);i<n||i===n&&o.flags&2?e=r+1:t=r}return e}function $c(n){if(!(n.flags&1)){const e=Ai(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=Ai(t)?qt.push(n):qt.splice(Nm(e),0,n),n.flags|=1,th()}}function th(){Zs||(Zs=Qf.then(rh))}function Bm(n){Ve(n)?Fo.push(...n):wr&&n.id===-1?wr.splice(Do+1,0,n):n.flags&1||(Fo.push(n),n.flags|=1),th()}function Sd(n,e,t=kn+1){for(;t<qt.length;t++){const r=qt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;qt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nh(n){if(Fo.length){const e=[...new Set(Fo)].sort((t,r)=>Ai(t)-Ai(r));if(Fo.length=0,wr){wr.push(...e);return}for(wr=e,Do=0;Do<wr.length;Do++){const t=wr[Do];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}wr=null,Do=0}}const Ai=n=>n.id==null?n.flags&2?-1:1/0:n.id;function rh(n){try{for(kn=0;kn<qt.length;kn++){const e=qt[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ki(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<qt.length;kn++){const e=qt[kn];e&&(e.flags&=-2)}kn=-1,qt.length=0,nh(),Zs=null,(qt.length||Fo.length)&&rh()}}let It=null,oh=null;function Js(n){const e=It;return It=n,oh=n&&n.type.__scopeId||null,e}function Hc(n,e=It,t){if(!e||n._n)return n;const r=(...o)=>{r._d&&kd(-1);const i=Js(e);let s;try{s=n(...o)}finally{Js(i),r._d&&kd(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Fm(n,e){if(It===null)return n;const t=ba(It),r=n.dirs||(n.dirs=[]);for(let o=0;o<e.length;o++){let[i,s,a,l=ut]=e[o];i&&(He(i)&&(i={mounted:i,updated:i}),i.deep&&nr(s),r.push({dir:i,instance:t,value:s,oldValue:void 0,arg:a,modifiers:l}))}return n}function Wr(n,e,t,r){const o=n.dirs,i=e&&e.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let l=a.dir[r];l&&(ur(),Hn(l,t,8,[n.el,a,n,e]),fr())}}const zm=Symbol("_vte"),$m=n=>n.__isTeleport;function Vc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Vc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Zi(n,e){return He(n)?Gt({name:n.name},e,{setup:n}):n}function Hm(){const n=Rl();return n?(n.appContext.config.idPrefix||"v")+"-"+n.ids[0]+n.ids[1]++:""}function ih(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function yi(n,e,t,r,o=!1){if(Ve(n)){n.forEach((g,_)=>yi(g,e&&(Ve(e)?e[_]:e),t,r,o));return}if(zo(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&yi(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ba(r.component):r.el,s=o?null:i,{i:a,r:l}=n,c=e&&e.r,d=a.refs===ut?a.refs={}:a.refs,u=a.setupState,f=nt(u),p=u===ut?()=>!1:g=>rt(f,g);if(c!=null&&c!==l&&(At(c)?(d[c]=null,p(c)&&(u[c]=null)):Ht(c)&&(c.value=null)),He(l))Ki(l,a,12,[s,d]);else{const g=At(l),_=Ht(l);if(g||_){const m=()=>{if(n.f){const h=g?p(l)?u[l]:d[l]:l.value;o?Ve(h)&&Rc(h,i):Ve(h)?h.includes(i)||h.push(i):g?(d[l]=[i],p(l)&&(u[l]=d[l])):(l.value=[i],n.k&&(d[n.k]=l.value))}else g?(d[l]=s,p(l)&&(u[l]=s)):_&&(l.value=s,n.k&&(d[n.k]=s))};s?(m.id=-1,ln(m,t)):m()}}}fa().requestIdleCallback;fa().cancelIdleCallback;const zo=n=>!!n.type.__asyncLoader,sh=n=>n.type.__isKeepAlive;function Vm(n,e){ah(n,"a",e)}function Gm(n,e){ah(n,"da",e)}function ah(n,e,t=Ot){const r=n.__wdc||(n.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(ma(e,r,t),t){let o=t.parent;for(;o&&o.parent;)sh(o.parent.vnode)&&Wm(r,e,t,o),o=o.parent}}function Wm(n,e,t,r){const o=ma(e,n,r,!0);dh(()=>{Rc(r[e],o)},t)}function ma(n,e,t=Ot,r=!1){if(t){const o=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...s)=>{ur();const a=Ji(t),l=Hn(e,t,n,s);return a(),fr(),l});return r?o.unshift(i):o.push(i),i}}const gr=n=>(e,t=Ot)=>{(!Pi||n==="sp")&&ma(n,(...r)=>e(...r),t)},lh=gr("bm"),Gc=gr("m"),Xm=gr("bu"),jm=gr("u"),ch=gr("bum"),dh=gr("um"),Ym=gr("sp"),qm=gr("rtg"),Km=gr("rtc");function Zm(n,e=Ot){ma("ec",n,e)}const Wc="components",Jm="directives";function Md(n,e){return Xc(Wc,n,!0,e)||n}const uh=Symbol.for("v-ndc");function Qm(n){return At(n)?Xc(Wc,n,!1)||n:n||uh}function eg(n){return Xc(Jm,n)}function Xc(n,e,t=!0,r=!1){const o=It||Ot;if(o){const i=o.type;if(n===Wc){const a=zg(i,!1);if(a&&(a===e||a===bn(e)||a===ua(bn(e))))return i}const s=Ed(o[n]||i[n],e)||Ed(o.appContext[n],e);return!s&&r?i:s}}function Ed(n,e){return n&&(n[e]||n[bn(e)]||n[ua(bn(e))])}function ko(n,e,t={},r,o){if(It.ce||It.parent&&zo(It.parent)&&It.parent.ce)return e!=="default"&&(t.name=e),bt(),ar(vn,null,[Pt("slot",t,r&&r())],64);let i=n[e];i&&i._c&&(i._d=!1),bt();const s=i&&fh(i(t)),a=t.key||s&&s.key,l=ar(vn,{key:(a&&!mr(a)?a:`_${e}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&n._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function fh(n){return n.some(e=>qc(e)?!(e.type===hr||e.type===vn&&!fh(e.children)):!0)?n:null}const wl=n=>n?kh(n)?ba(n):wl(n.parent):null,xi=Gt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wl(n.parent),$root:n=>wl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ph(n),$forceUpdate:n=>n.f||(n.f=()=>{$c(n.update)}),$nextTick:n=>n.n||(n.n=eh.bind(n.proxy)),$watch:n=>Sg.bind(n)}),Pa=(n,e)=>n!==ut&&!n.__isScriptSetup&&rt(n,e),tg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:o,props:i,accessCache:s,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=s[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return o[e];case 4:return t[e];case 3:return i[e]}else{if(Pa(r,e))return s[e]=1,r[e];if(o!==ut&&rt(o,e))return s[e]=2,o[e];if((c=n.propsOptions[0])&&rt(c,e))return s[e]=3,i[e];if(t!==ut&&rt(t,e))return s[e]=4,t[e];Tl&&(s[e]=0)}}const d=xi[e];let u,f;if(d)return e==="$attrs"&&zt(n.attrs,"get",""),d(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ut&&rt(t,e))return s[e]=4,t[e];if(f=l.config.globalProperties,rt(f,e))return f[e]},set({_:n},e,t){const{data:r,setupState:o,ctx:i}=n;return Pa(o,e)?(o[e]=t,!0):r!==ut&&rt(r,e)?(r[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:o,propsOptions:i}},s){let a;return!!t[s]||n!==ut&&rt(n,s)||Pa(e,s)||(a=i[0])&&rt(a,s)||rt(r,s)||rt(xi,s)||rt(o.config.globalProperties,s)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function wd(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Tl=!0;function ng(n){const e=ph(n),t=n.proxy,r=n.ctx;Tl=!1,e.beforeCreate&&Td(e.beforeCreate,n,"bc");const{data:o,computed:i,methods:s,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:f,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:h,beforeUnmount:w,destroyed:E,unmounted:b,render:A,renderTracked:D,renderTriggered:R,errorCaptured:U,serverPrefetch:T,expose:M,inheritAttrs:L,components:V,directives:H,filters:te}=e;if(c&&rg(c,r,null),s)for(const J in s){const F=s[J];He(F)&&(r[J]=F.bind(t))}if(o){const J=o.call(t,t);Tt(J)&&(n.data=ha(J))}if(Tl=!0,i)for(const J in i){const F=i[J],ue=He(F)?F.bind(t,t):He(F.get)?F.get.bind(t,t):Fn,he=!He(F)&&He(F.set)?F.set.bind(t):Fn,be=Hg({get:ue,set:he});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>be.value,set:ke=>be.value=ke})}if(a)for(const J in a)hh(a[J],r,t,J);if(l){const J=He(l)?l.call(t):l;Reflect.ownKeys(J).forEach(F=>{cg(F,J[F])})}d&&Td(d,n,"c");function K(J,F){Ve(F)?F.forEach(ue=>J(ue.bind(t))):F&&J(F.bind(t))}if(K(lh,u),K(Gc,f),K(Xm,p),K(jm,g),K(Vm,_),K(Gm,m),K(Zm,U),K(Km,D),K(qm,R),K(ch,w),K(dh,b),K(Ym,T),Ve(M))if(M.length){const J=n.exposed||(n.exposed={});M.forEach(F=>{Object.defineProperty(J,F,{get:()=>t[F],set:ue=>t[F]=ue})})}else n.exposed||(n.exposed={});A&&n.render===Fn&&(n.render=A),L!=null&&(n.inheritAttrs=L),V&&(n.components=V),H&&(n.directives=H),T&&ih(n)}function rg(n,e,t=Fn){Ve(n)&&(n=Cl(n));for(const r in n){const o=n[r];let i;Tt(o)?"default"in o?i=Ns(o.from||r,o.default,!0):i=Ns(o.from||r):i=Ns(o),Ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[r]=i}}function Td(n,e,t){Hn(Ve(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function hh(n,e,t,r){let o=r.includes(".")?Ch(t,r):()=>t[r];if(At(n)){const i=e[n];He(i)&&or(o,i)}else if(He(n))or(o,n.bind(t));else if(Tt(n))if(Ve(n))n.forEach(i=>hh(i,e,t,r));else{const i=He(n.handler)?n.handler.bind(t):e[n.handler];He(i)&&or(o,i,n)}}function ph(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=n.appContext,a=i.get(e);let l;return a?l=a:!o.length&&!t&&!r?l=e:(l={},o.length&&o.forEach(c=>Qs(l,c,s,!0)),Qs(l,e,s)),Tt(e)&&i.set(e,l),l}function Qs(n,e,t,r=!1){const{mixins:o,extends:i}=e;i&&Qs(n,i,t,!0),o&&o.forEach(s=>Qs(n,s,t,!0));for(const s in e)if(!(r&&s==="expose")){const a=og[s]||t&&t[s];n[s]=a?a(n[s],e[s]):e[s]}return n}const og={data:Cd,props:Ad,emits:Ad,methods:fi,computed:fi,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:fi,directives:fi,watch:sg,provide:Cd,inject:ig};function Cd(n,e){return e?n?function(){return Gt(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function ig(n,e){return fi(Cl(n),Cl(e))}function Cl(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function fi(n,e){return n?Gt(Object.create(null),n,e):e}function Ad(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Gt(Object.create(null),wd(n),wd(e??{})):e}function sg(n,e){if(!n)return e;if(!e)return n;const t=Gt(Object.create(null),n);for(const r in e)t[r]=Xt(n[r],e[r]);return t}function mh(){return{app:null,config:{isNativeTag:qp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ag=0;function lg(n,e){return function(r,o=null){He(r)||(r=Gt({},r)),o!=null&&!Tt(o)&&(o=null);const i=mh(),s=new WeakSet,a=[];let l=!1;const c=i.app={_uid:ag++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Vg,get config(){return i.config},set config(d){},use(d,...u){return s.has(d)||(d&&He(d.install)?(s.add(d),d.install(c,...u)):He(d)&&(s.add(d),d(c,...u))),c},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),c},component(d,u){return u?(i.components[d]=u,c):i.components[d]},directive(d,u){return u?(i.directives[d]=u,c):i.directives[d]},mount(d,u,f){if(!l){const p=c._ceVNode||Pt(r,o);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),n(p,d,f),l=!0,c._container=d,d.__vue_app__=c,ba(p.component)}},onUnmount(d){a.push(d)},unmount(){l&&(Hn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(d,u){return i.provides[d]=u,c},runWithContext(d){const u=$o;$o=c;try{return d()}finally{$o=u}}};return c}}let $o=null;function cg(n,e){if(Ot){let t=Ot.provides;const r=Ot.parent&&Ot.parent.provides;r===t&&(t=Ot.provides=Object.create(r)),t[n]=e}}function Ns(n,e,t=!1){const r=Ot||It;if(r||$o){let o=$o?$o._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&n in o)return o[n];if(arguments.length>1)return t&&He(e)?e.call(r&&r.proxy):e}}const gh={},vh=()=>Object.create(gh),bh=n=>Object.getPrototypeOf(n)===gh;function dg(n,e,t,r=!1){const o={},i=vh();n.propsDefaults=Object.create(null),_h(n,e,o,i);for(const s in n.propsOptions[0])s in o||(o[s]=void 0);t?n.props=r?o:Cm(o):n.type.props?n.props=o:n.props=i,n.attrs=i}function ug(n,e,t,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=n,a=nt(o),[l]=n.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=n.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(ga(n.emitsOptions,f))continue;const p=e[f];if(l)if(rt(i,f))p!==i[f]&&(i[f]=p,c=!0);else{const g=bn(f);o[g]=Al(l,a,g,p,n,!1)}else p!==i[f]&&(i[f]=p,c=!0)}}}else{_h(n,e,o,i)&&(c=!0);let d;for(const u in a)(!e||!rt(e,u)&&((d=fo(u))===u||!rt(e,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(o[u]=Al(l,a,u,void 0,n,!0)):delete o[u]);if(i!==a)for(const u in i)(!e||!rt(e,u))&&(delete i[u],c=!0)}c&&tr(n.attrs,"set","")}function _h(n,e,t,r){const[o,i]=n.propsOptions;let s=!1,a;if(e)for(let l in e){if(gi(l))continue;const c=e[l];let d;o&&rt(o,d=bn(l))?!i||!i.includes(d)?t[d]=c:(a||(a={}))[d]=c:ga(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=nt(t),c=a||ut;for(let d=0;d<i.length;d++){const u=i[d];t[u]=Al(o,l,u,c[u],n,!rt(c,u))}}return s}function Al(n,e,t,r,o,i){const s=n[t];if(s!=null){const a=rt(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&He(l)){const{propsDefaults:c}=o;if(t in c)r=c[t];else{const d=Ji(o);r=c[t]=l.call(null,e),d()}}else r=l;o.ce&&o.ce._setProp(t,r)}s[0]&&(i&&!a?r=!1:s[1]&&(r===""||r===fo(t))&&(r=!0))}return r}const fg=new WeakMap;function yh(n,e,t=!1){const r=t?fg:e.propsCache,o=r.get(n);if(o)return o;const i=n.props,s={},a=[];let l=!1;if(!He(n)){const d=u=>{l=!0;const[f,p]=yh(u,e,!0);Gt(s,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Tt(n)&&r.set(n,No),No;if(Ve(i))for(let d=0;d<i.length;d++){const u=bn(i[d]);Rd(u)&&(s[u]=ut)}else if(i)for(const d in i){const u=bn(d);if(Rd(u)){const f=i[d],p=s[u]=Ve(f)||He(f)?{type:f}:Gt({},f),g=p.type;let _=!1,m=!0;if(Ve(g))for(let h=0;h<g.length;++h){const w=g[h],E=He(w)&&w.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=He(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||rt(p,"default"))&&a.push(u)}}const c=[s,a];return Tt(n)&&r.set(n,c),c}function Rd(n){return n[0]!=="$"&&!gi(n)}const jc=n=>n[0]==="_"||n==="$stable",Yc=n=>Ve(n)?n.map(In):[In(n)],hg=(n,e,t)=>{if(e._n)return e;const r=Hc((...o)=>Yc(e(...o)),t);return r._c=!1,r},xh=(n,e,t)=>{const r=n._ctx;for(const o in n){if(jc(o))continue;const i=n[o];if(He(i))e[o]=hg(o,i,r);else if(i!=null){const s=Yc(i);e[o]=()=>s}}},Sh=(n,e)=>{const t=Yc(e);n.slots.default=()=>t},Mh=(n,e,t)=>{for(const r in e)(t||!jc(r))&&(n[r]=e[r])},pg=(n,e,t)=>{const r=n.slots=vh();if(n.vnode.shapeFlag&32){const o=e.__;o&&_l(r,"__",o,!0);const i=e._;i?(Mh(r,e,t),t&&_l(r,"_",i,!0)):xh(e,r)}else e&&Sh(n,e)},mg=(n,e,t)=>{const{vnode:r,slots:o}=n;let i=!0,s=ut;if(r.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:Mh(o,e,t):(i=!e.$stable,xh(e,o)),s=e}else e&&(Sh(n,e),s={default:1});if(i)for(const a in o)!jc(a)&&s[a]==null&&delete o[a]},ln=Rg;function gg(n){return vg(n)}function vg(n,e){const t=fa();t.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:f,setScopeId:p=Fn,insertStaticContent:g}=n,_=(C,P,y,oe=null,Y=null,Q=null,q=void 0,ne=null,j=!!P.dynamicChildren)=>{if(C===P)return;C&&!oi(C,P)&&(oe=me(C),ke(C,Y,Q,!0),C=null),P.patchFlag===-2&&(j=!1,P.dynamicChildren=null);const{type:X,ref:ge,shapeFlag:x}=P;switch(X){case va:m(C,P,y,oe);break;case hr:h(C,P,y,oe);break;case La:C==null&&w(P,y,oe,q);break;case vn:V(C,P,y,oe,Y,Q,q,ne,j);break;default:x&1?A(C,P,y,oe,Y,Q,q,ne,j):x&6?H(C,P,y,oe,Y,Q,q,ne,j):(x&64||x&128)&&X.process(C,P,y,oe,Y,Q,q,ne,j,Ie)}ge!=null&&Y?yi(ge,C&&C.ref,Q,P||C,!P):ge==null&&C&&C.ref!=null&&yi(C.ref,null,Q,C,!0)},m=(C,P,y,oe)=>{if(C==null)r(P.el=a(P.children),y,oe);else{const Y=P.el=C.el;P.children!==C.children&&c(Y,P.children)}},h=(C,P,y,oe)=>{C==null?r(P.el=l(P.children||""),y,oe):P.el=C.el},w=(C,P,y,oe)=>{[C.el,C.anchor]=g(C.children,P,y,oe,C.el,C.anchor)},E=({el:C,anchor:P},y,oe)=>{let Y;for(;C&&C!==P;)Y=f(C),r(C,y,oe),C=Y;r(P,y,oe)},b=({el:C,anchor:P})=>{let y;for(;C&&C!==P;)y=f(C),o(C),C=y;o(P)},A=(C,P,y,oe,Y,Q,q,ne,j)=>{P.type==="svg"?q="svg":P.type==="math"&&(q="mathml"),C==null?D(P,y,oe,Y,Q,q,ne,j):T(C,P,Y,Q,q,ne,j)},D=(C,P,y,oe,Y,Q,q,ne)=>{let j,X;const{props:ge,shapeFlag:x,transition:v,dirs:k}=C;if(j=C.el=s(C.type,Q,ge&&ge.is,ge),x&8?d(j,C.children):x&16&&U(C.children,j,null,oe,Y,Da(C,Q),q,ne),k&&Wr(C,null,oe,"created"),R(j,C,C.scopeId,q,oe),ge){for(const Z in ge)Z!=="value"&&!gi(Z)&&i(j,Z,null,ge[Z],Q,oe);"value"in ge&&i(j,"value",null,ge.value,Q),(X=ge.onVnodeBeforeMount)&&Dn(X,oe,C)}k&&Wr(C,null,oe,"beforeMount");const $=bg(Y,v);$&&v.beforeEnter(j),r(j,P,y),((X=ge&&ge.onVnodeMounted)||$||k)&&ln(()=>{X&&Dn(X,oe,C),$&&v.enter(j),k&&Wr(C,null,oe,"mounted")},Y)},R=(C,P,y,oe,Y)=>{if(y&&p(C,y),oe)for(let Q=0;Q<oe.length;Q++)p(C,oe[Q]);if(Y){let Q=Y.subTree;if(P===Q||Rh(Q.type)&&(Q.ssContent===P||Q.ssFallback===P)){const q=Y.vnode;R(C,q,q.scopeId,q.slotScopeIds,Y.parent)}}},U=(C,P,y,oe,Y,Q,q,ne,j=0)=>{for(let X=j;X<C.length;X++){const ge=C[X]=ne?Tr(C[X]):In(C[X]);_(null,ge,P,y,oe,Y,Q,q,ne)}},T=(C,P,y,oe,Y,Q,q)=>{const ne=P.el=C.el;let{patchFlag:j,dynamicChildren:X,dirs:ge}=P;j|=C.patchFlag&16;const x=C.props||ut,v=P.props||ut;let k;if(y&&Xr(y,!1),(k=v.onVnodeBeforeUpdate)&&Dn(k,y,P,C),ge&&Wr(P,C,y,"beforeUpdate"),y&&Xr(y,!0),(x.innerHTML&&v.innerHTML==null||x.textContent&&v.textContent==null)&&d(ne,""),X?M(C.dynamicChildren,X,ne,y,oe,Da(P,Y),Q):q||F(C,P,ne,null,y,oe,Da(P,Y),Q,!1),j>0){if(j&16)L(ne,x,v,y,Y);else if(j&2&&x.class!==v.class&&i(ne,"class",null,v.class,Y),j&4&&i(ne,"style",x.style,v.style,Y),j&8){const $=P.dynamicProps;for(let Z=0;Z<$.length;Z++){const z=$[Z],xe=x[z],de=v[z];(de!==xe||z==="value")&&i(ne,z,xe,de,Y,y)}}j&1&&C.children!==P.children&&d(ne,P.children)}else!q&&X==null&&L(ne,x,v,y,Y);((k=v.onVnodeUpdated)||ge)&&ln(()=>{k&&Dn(k,y,P,C),ge&&Wr(P,C,y,"updated")},oe)},M=(C,P,y,oe,Y,Q,q)=>{for(let ne=0;ne<P.length;ne++){const j=C[ne],X=P[ne],ge=j.el&&(j.type===vn||!oi(j,X)||j.shapeFlag&198)?u(j.el):y;_(j,X,ge,null,oe,Y,Q,q,!0)}},L=(C,P,y,oe,Y)=>{if(P!==y){if(P!==ut)for(const Q in P)!gi(Q)&&!(Q in y)&&i(C,Q,P[Q],null,Y,oe);for(const Q in y){if(gi(Q))continue;const q=y[Q],ne=P[Q];q!==ne&&Q!=="value"&&i(C,Q,ne,q,Y,oe)}"value"in y&&i(C,"value",P.value,y.value,Y)}},V=(C,P,y,oe,Y,Q,q,ne,j)=>{const X=P.el=C?C.el:a(""),ge=P.anchor=C?C.anchor:a("");let{patchFlag:x,dynamicChildren:v,slotScopeIds:k}=P;k&&(ne=ne?ne.concat(k):k),C==null?(r(X,y,oe),r(ge,y,oe),U(P.children||[],y,ge,Y,Q,q,ne,j)):x>0&&x&64&&v&&C.dynamicChildren?(M(C.dynamicChildren,v,y,Y,Q,q,ne),(P.key!=null||Y&&P===Y.subTree)&&Eh(C,P,!0)):F(C,P,y,ge,Y,Q,q,ne,j)},H=(C,P,y,oe,Y,Q,q,ne,j)=>{P.slotScopeIds=ne,C==null?P.shapeFlag&512?Y.ctx.activate(P,y,oe,q,j):te(P,y,oe,Y,Q,q,j):re(C,P,j)},te=(C,P,y,oe,Y,Q,q)=>{const ne=C.component=Ug(C,oe,Y);if(sh(C)&&(ne.ctx.renderer=Ie),Og(ne,!1,q),ne.asyncDep){if(Y&&Y.registerDep(ne,K,q),!C.el){const j=ne.subTree=Pt(hr);h(null,j,P,y)}}else K(ne,C,P,y,Y,Q,q)},re=(C,P,y)=>{const oe=P.component=C.component;if(Cg(C,P,y))if(oe.asyncDep&&!oe.asyncResolved){J(oe,P,y);return}else oe.next=P,oe.update();else P.el=C.el,oe.vnode=P},K=(C,P,y,oe,Y,Q,q)=>{const ne=()=>{if(C.isMounted){let{next:x,bu:v,u:k,parent:$,vnode:Z}=C;{const Ee=wh(C);if(Ee){x&&(x.el=Z.el,J(C,x,q)),Ee.asyncDep.then(()=>{C.isUnmounted||ne()});return}}let z=x,xe;Xr(C,!1),x?(x.el=Z.el,J(C,x,q)):x=Z,v&&wa(v),(xe=x.props&&x.props.onVnodeBeforeUpdate)&&Dn(xe,$,x,Z),Xr(C,!0);const de=Dd(C),Se=C.subTree;C.subTree=de,_(Se,de,u(Se.el),me(Se),C,Y,Q),x.el=de.el,z===null&&Ag(C,de.el),k&&ln(k,Y),(xe=x.props&&x.props.onVnodeUpdated)&&ln(()=>Dn(xe,$,x,Z),Y)}else{let x;const{el:v,props:k}=P,{bm:$,m:Z,parent:z,root:xe,type:de}=C,Se=zo(P);Xr(C,!1),$&&wa($),!Se&&(x=k&&k.onVnodeBeforeMount)&&Dn(x,z,P),Xr(C,!0);{xe.ce&&xe.ce._def.shadowRoot!==!1&&xe.ce._injectChildStyle(de);const Ee=C.subTree=Dd(C);_(null,Ee,y,oe,C,Y,Q),P.el=Ee.el}if(Z&&ln(Z,Y),!Se&&(x=k&&k.onVnodeMounted)){const Ee=P;ln(()=>Dn(x,z,Ee),Y)}(P.shapeFlag&256||z&&zo(z.vnode)&&z.vnode.shapeFlag&256)&&C.a&&ln(C.a,Y),C.isMounted=!0,P=y=oe=null}};C.scope.on();const j=C.effect=new Bf(ne);C.scope.off();const X=C.update=j.run.bind(j),ge=C.job=j.runIfDirty.bind(j);ge.i=C,ge.id=C.uid,j.scheduler=()=>$c(ge),Xr(C,!0),X()},J=(C,P,y)=>{P.component=C;const oe=C.vnode.props;C.vnode=P,C.next=null,ug(C,P.props,oe,y),mg(C,P.children,y),ur(),Sd(C),fr()},F=(C,P,y,oe,Y,Q,q,ne,j=!1)=>{const X=C&&C.children,ge=C?C.shapeFlag:0,x=P.children,{patchFlag:v,shapeFlag:k}=P;if(v>0){if(v&128){he(X,x,y,oe,Y,Q,q,ne,j);return}else if(v&256){ue(X,x,y,oe,Y,Q,q,ne,j);return}}k&8?(ge&16&&Te(X,Y,Q),x!==X&&d(y,x)):ge&16?k&16?he(X,x,y,oe,Y,Q,q,ne,j):Te(X,Y,Q,!0):(ge&8&&d(y,""),k&16&&U(x,y,oe,Y,Q,q,ne,j))},ue=(C,P,y,oe,Y,Q,q,ne,j)=>{C=C||No,P=P||No;const X=C.length,ge=P.length,x=Math.min(X,ge);let v;for(v=0;v<x;v++){const k=P[v]=j?Tr(P[v]):In(P[v]);_(C[v],k,y,null,Y,Q,q,ne,j)}X>ge?Te(C,Y,Q,!0,!1,x):U(P,y,oe,Y,Q,q,ne,j,x)},he=(C,P,y,oe,Y,Q,q,ne,j)=>{let X=0;const ge=P.length;let x=C.length-1,v=ge-1;for(;X<=x&&X<=v;){const k=C[X],$=P[X]=j?Tr(P[X]):In(P[X]);if(oi(k,$))_(k,$,y,null,Y,Q,q,ne,j);else break;X++}for(;X<=x&&X<=v;){const k=C[x],$=P[v]=j?Tr(P[v]):In(P[v]);if(oi(k,$))_(k,$,y,null,Y,Q,q,ne,j);else break;x--,v--}if(X>x){if(X<=v){const k=v+1,$=k<ge?P[k].el:oe;for(;X<=v;)_(null,P[X]=j?Tr(P[X]):In(P[X]),y,$,Y,Q,q,ne,j),X++}}else if(X>v)for(;X<=x;)ke(C[X],Y,Q,!0),X++;else{const k=X,$=X,Z=new Map;for(X=$;X<=v;X++){const Ae=P[X]=j?Tr(P[X]):In(P[X]);Ae.key!=null&&Z.set(Ae.key,X)}let z,xe=0;const de=v-$+1;let Se=!1,Ee=0;const se=new Array(de);for(X=0;X<de;X++)se[X]=0;for(X=k;X<=x;X++){const Ae=C[X];if(xe>=de){ke(Ae,Y,Q,!0);continue}let Re;if(Ae.key!=null)Re=Z.get(Ae.key);else for(z=$;z<=v;z++)if(se[z-$]===0&&oi(Ae,P[z])){Re=z;break}Re===void 0?ke(Ae,Y,Q,!0):(se[Re-$]=X+1,Re>=Ee?Ee=Re:Se=!0,_(Ae,P[Re],y,null,Y,Q,q,ne,j),xe++)}const Me=Se?_g(se):No;for(z=Me.length-1,X=de-1;X>=0;X--){const Ae=$+X,Re=P[Ae],pe=Ae+1<ge?P[Ae+1].el:oe;se[X]===0?_(null,Re,y,pe,Y,Q,q,ne,j):Se&&(z<0||X!==Me[z]?be(Re,y,pe,2):z--)}}},be=(C,P,y,oe,Y=null)=>{const{el:Q,type:q,transition:ne,children:j,shapeFlag:X}=C;if(X&6){be(C.component.subTree,P,y,oe);return}if(X&128){C.suspense.move(P,y,oe);return}if(X&64){q.move(C,P,y,Ie);return}if(q===vn){r(Q,P,y);for(let x=0;x<j.length;x++)be(j[x],P,y,oe);r(C.anchor,P,y);return}if(q===La){E(C,P,y);return}if(oe!==2&&X&1&&ne)if(oe===0)ne.beforeEnter(Q),r(Q,P,y),ln(()=>ne.enter(Q),Y);else{const{leave:x,delayLeave:v,afterLeave:k}=ne,$=()=>{C.ctx.isUnmounted?o(Q):r(Q,P,y)},Z=()=>{x(Q,()=>{$(),k&&k()})};v?v(Q,$,Z):Z()}else r(Q,P,y)},ke=(C,P,y,oe=!1,Y=!1)=>{const{type:Q,props:q,ref:ne,children:j,dynamicChildren:X,shapeFlag:ge,patchFlag:x,dirs:v,cacheIndex:k}=C;if(x===-2&&(Y=!1),ne!=null&&(ur(),yi(ne,null,y,C,!0),fr()),k!=null&&(P.renderCache[k]=void 0),ge&256){P.ctx.deactivate(C);return}const $=ge&1&&v,Z=!zo(C);let z;if(Z&&(z=q&&q.onVnodeBeforeUnmount)&&Dn(z,P,C),ge&6)fe(C.component,y,oe);else{if(ge&128){C.suspense.unmount(y,oe);return}$&&Wr(C,null,P,"beforeUnmount"),ge&64?C.type.remove(C,P,y,Ie,oe):X&&!X.hasOnce&&(Q!==vn||x>0&&x&64)?Te(X,P,y,!1,!0):(Q===vn&&x&384||!Y&&ge&16)&&Te(j,P,y),oe&&Ze(C)}(Z&&(z=q&&q.onVnodeUnmounted)||$)&&ln(()=>{z&&Dn(z,P,C),$&&Wr(C,null,P,"unmounted")},y)},Ze=C=>{const{type:P,el:y,anchor:oe,transition:Y}=C;if(P===vn){ee(y,oe);return}if(P===La){b(C);return}const Q=()=>{o(y),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(C.shapeFlag&1&&Y&&!Y.persisted){const{leave:q,delayLeave:ne}=Y,j=()=>q(y,Q);ne?ne(C.el,Q,j):j()}else Q()},ee=(C,P)=>{let y;for(;C!==P;)y=f(C),o(C),C=y;o(P)},fe=(C,P,y)=>{const{bum:oe,scope:Y,job:Q,subTree:q,um:ne,m:j,a:X,parent:ge,slots:{__:x}}=C;Pd(j),Pd(X),oe&&wa(oe),ge&&Ve(x)&&x.forEach(v=>{ge.renderCache[v]=void 0}),Y.stop(),Q&&(Q.flags|=8,ke(q,C,P,y)),ne&&ln(ne,P),ln(()=>{C.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Te=(C,P,y,oe=!1,Y=!1,Q=0)=>{for(let q=Q;q<C.length;q++)ke(C[q],P,y,oe,Y)},me=C=>{if(C.shapeFlag&6)return me(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const P=f(C.anchor||C.el),y=P&&P[zm];return y?f(y):P};let Le=!1;const Ye=(C,P,y)=>{C==null?P._vnode&&ke(P._vnode,null,null,!0):_(P._vnode||null,C,P,null,null,null,y),P._vnode=C,Le||(Le=!0,Sd(),nh(),Le=!1)},Ie={p:_,um:ke,m:be,r:Ze,mt:te,mc:U,pc:F,pbc:M,n:me,o:n};return{render:Ye,hydrate:void 0,createApp:lg(Ye)}}function Da({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Xr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function bg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Eh(n,e,t=!1){const r=n.children,o=e.children;if(Ve(r)&&Ve(o))for(let i=0;i<r.length;i++){const s=r[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=Tr(o[i]),a.el=s.el),!t&&a.patchFlag!==-2&&Eh(s,a)),a.type===va&&(a.el=s.el),a.type===hr&&!a.el&&(a.el=s.el)}}function _g(n){const e=n.slice(),t=[0];let r,o,i,s,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(o=t[t.length-1],n[o]<c){e[r]=o,t.push(r);continue}for(i=0,s=t.length-1;i<s;)a=i+s>>1,n[t[a]]<c?i=a+1:s=a;c<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,s=t[i-1];i-- >0;)t[i]=s,s=e[s];return t}function wh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:wh(e)}function Pd(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const yg=Symbol.for("v-scx"),xg=()=>Ns(yg);function or(n,e,t){return Th(n,e,t)}function Th(n,e,t=ut){const{immediate:r,deep:o,flush:i,once:s}=t,a=Gt({},t),l=e&&r||!e&&i!=="post";let c;if(Pi){if(i==="sync"){const p=xg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Fn,p.resume=Fn,p.pause=Fn,p}}const d=Ot;a.call=(p,g,_)=>Hn(p,d,g,_);let u=!1;i==="post"?a.scheduler=p=>{ln(p,d&&d.suspense)}:i!=="sync"&&(u=!0,a.scheduler=(p,g)=>{g?p():$c(p)}),a.augmentJob=p=>{e&&(p.flags|=4),u&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const f=Um(n,e,a);return Pi&&(c?c.push(f):l&&f()),f}function Sg(n,e,t){const r=this.proxy,o=At(n)?n.includes(".")?Ch(r,n):()=>r[n]:n.bind(r,r);let i;He(e)?i=e:(i=e.handler,t=e);const s=Ji(this),a=Th(o,i.bind(r),t);return s(),a}function Ch(n,e){const t=e.split(".");return()=>{let r=n;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}const Mg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${bn(e)}Modifiers`]||n[`${fo(e)}Modifiers`];function Eg(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||ut;let o=t;const i=e.startsWith("update:"),s=i&&Mg(r,e.slice(7));s&&(s.trim&&(o=t.map(d=>At(d)?d.trim():d)),s.number&&(o=t.map(em)));let a,l=r[a=Ea(e)]||r[a=Ea(bn(e))];!l&&i&&(l=r[a=Ea(fo(e))]),l&&Hn(l,n,6,o);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Hn(c,n,6,o)}}function Ah(n,e,t=!1){const r=e.emitsCache,o=r.get(n);if(o!==void 0)return o;const i=n.emits;let s={},a=!1;if(!He(n)){const l=c=>{const d=Ah(c,e,!0);d&&(a=!0,Gt(s,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!a?(Tt(n)&&r.set(n,null),null):(Ve(i)?i.forEach(l=>s[l]=null):Gt(s,i),Tt(n)&&r.set(n,s),s)}function ga(n,e){return!n||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,fo(e))||rt(n,e))}function Dd(n){const{type:e,vnode:t,proxy:r,withProxy:o,propsOptions:[i],slots:s,attrs:a,emit:l,render:c,renderCache:d,props:u,data:f,setupState:p,ctx:g,inheritAttrs:_}=n,m=Js(n);let h,w;try{if(t.shapeFlag&4){const b=o||r,A=b;h=In(c.call(A,b,d,u,p,f,g)),w=a}else{const b=e;h=In(b.length>1?b(u,{attrs:a,slots:s,emit:l}):b(u,null)),w=e.props?a:wg(a)}}catch(b){Si.length=0,pa(b,n,1),h=Pt(hr)}let E=h;if(w&&_!==!1){const b=Object.keys(w),{shapeFlag:A}=E;b.length&&A&7&&(i&&b.some(Ac)&&(w=Tg(w,i)),E=qo(E,w,!1,!0))}return t.dirs&&(E=qo(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Vc(E,t.transition),h=E,Js(m),h}const wg=n=>{let e;for(const t in n)(t==="class"||t==="style"||la(t))&&((e||(e={}))[t]=n[t]);return e},Tg=(n,e)=>{const t={};for(const r in n)(!Ac(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Cg(n,e,t){const{props:r,children:o,component:i}=n,{props:s,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Ld(r,s,c):!!s;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(s[f]!==r[f]&&!ga(c,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?Ld(r,s,c):!0:!!s;return!1}function Ld(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(e[i]!==n[i]&&!ga(t,i))return!0}return!1}function Ag({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Rh=n=>n.__isSuspense;function Rg(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):Bm(n)}const vn=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),hr=Symbol.for("v-cmt"),La=Symbol.for("v-stc"),Si=[];let un=null;function bt(n=!1){Si.push(un=n?null:[])}function Pg(){Si.pop(),un=Si[Si.length-1]||null}let Ri=1;function kd(n,e=!1){Ri+=n,n<0&&un&&e&&(un.hasOnce=!0)}function Ph(n){return n.dynamicChildren=Ri>0?un||No:null,Pg(),Ri>0&&un&&un.push(n),n}function $t(n,e,t,r,o,i){return Ph(wt(n,e,t,r,o,i,!0))}function ar(n,e,t,r,o){return Ph(Pt(n,e,t,r,o,!0))}function qc(n){return n?n.__v_isVNode===!0:!1}function oi(n,e){return n.type===e.type&&n.key===e.key}const Dh=({key:n})=>n??null,Bs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||Ht(n)||He(n)?{i:It,r:n,k:e,f:!!t}:n:null);function wt(n,e=null,t=null,r=0,o=null,i=n===vn?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Dh(e),ref:e&&Bs(e),scopeId:oh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:It};return a?(Kc(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),Ri>0&&!s&&un&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&un.push(l),l}const Pt=Dg;function Dg(n,e=null,t=null,r=0,o=null,i=!1){if((!n||n===uh)&&(n=hr),qc(n)){const a=qo(n,e,!0);return t&&Kc(a,t),Ri>0&&!i&&un&&(a.shapeFlag&6?un[un.indexOf(n)]=a:un.push(a)),a.patchFlag=-2,a}if($g(n)&&(n=n.__vccOpts),e){e=Lg(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=wi(a)),Tt(l)&&(zc(l)&&!Ve(l)&&(l=Gt({},l)),e.style=Dc(l))}const s=At(n)?1:Rh(n)?128:$m(n)?64:Tt(n)?4:He(n)?2:0;return wt(n,e,t,r,o,s,i,!0)}function Lg(n){return n?zc(n)||bh(n)?Gt({},n):n:null}function qo(n,e,t=!1,r=!1){const{props:o,ref:i,patchFlag:s,children:a,transition:l}=n,c=e?xt(o||{},e):o,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Dh(c),ref:e&&e.ref?t&&i?Ve(i)?i.concat(Bs(e)):[i,Bs(e)]:Bs(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==vn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&qo(n.ssContent),ssFallback:n.ssFallback&&qo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&Vc(d,l.clone(d)),d}function Lh(n=" ",e=0){return Pt(va,null,n,e)}function Ir(n="",e=!1){return e?(bt(),ar(hr,null,n)):Pt(hr,null,n)}function In(n){return n==null||typeof n=="boolean"?Pt(hr):Ve(n)?Pt(vn,null,n.slice()):qc(n)?Tr(n):Pt(va,null,String(n))}function Tr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:qo(n)}function Kc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(r&65){const o=e.default;o&&(o._c&&(o._d=!1),Kc(n,o()),o._c&&(o._d=!0));return}else{t=32;const o=e._;!o&&!bh(e)?e._ctx=It:o===3&&It&&(It.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:It},t=32):(e=String(e),r&64?(t=16,e=[Lh(e)]):t=8);n.children=e,n.shapeFlag|=t}function xt(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const o in r)if(o==="class")e.class!==r.class&&(e.class=wi([e.class,r.class]));else if(o==="style")e.style=Dc([e.style,r.style]);else if(la(o)){const i=e[o],s=r[o];s&&i!==s&&!(Ve(i)&&i.includes(s))&&(e[o]=i?[].concat(i,s):s)}else o!==""&&(e[o]=r[o])}return e}function Dn(n,e,t,r=null){Hn(n,e,7,[t,r])}const kg=mh();let Ig=0;function Ug(n,e,t){const r=n.type,o=(e?e.appContext:n.appContext)||kg,i={uid:Ig++,vnode:n,type:r,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new am(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yh(r,o),emitsOptions:Ah(r,o),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:r.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Eg.bind(null,i),n.ce&&n.ce(i),i}let Ot=null;const Rl=()=>Ot||It;let ea,Pl;{const n=fa(),e=(t,r)=>{let o;return(o=n[t])||(o=n[t]=[]),o.push(r),i=>{o.length>1?o.forEach(s=>s(i)):o[0](i)}};ea=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),Pl=e("__VUE_SSR_SETTERS__",t=>Pi=t)}const Ji=n=>{const e=Ot;return ea(n),n.scope.on(),()=>{n.scope.off(),ea(e)}},Id=()=>{Ot&&Ot.scope.off(),ea(null)};function kh(n){return n.vnode.shapeFlag&4}let Pi=!1;function Og(n,e=!1,t=!1){e&&Pl(e);const{props:r,children:o}=n.vnode,i=kh(n);dg(n,r,i,e),pg(n,o,t||e);const s=i?Ng(n,e):void 0;return e&&Pl(!1),s}function Ng(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,tg);const{setup:r}=t;if(r){ur();const o=n.setupContext=r.length>1?Fg(n):null,i=Ji(n),s=Ki(r,n,0,[n.props,o]),a=Lf(s);if(fr(),i(),(a||n.sp)&&!zo(n)&&ih(n),a){if(s.then(Id,Id),e)return s.then(l=>{Ud(n,l)}).catch(l=>{pa(l,n,0)});n.asyncDep=s}else Ud(n,s)}else Ih(n)}function Ud(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Tt(e)&&(n.setupState=Jf(e)),Ih(n)}function Ih(n,e,t){const r=n.type;n.render||(n.render=r.render||Fn);{const o=Ji(n);ur();try{ng(n)}finally{fr(),o()}}}const Bg={get(n,e){return zt(n,"get",""),n[e]}};function Fg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Bg),slots:n.slots,emit:n.emit,expose:e}}function ba(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Jf(Am(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in xi)return xi[t](n)},has(e,t){return t in e||t in xi}})):n.proxy}function zg(n,e=!0){return He(n)?n.displayName||n.name:n.name||e&&n.__name}function $g(n){return He(n)&&"__vccOpts"in n}const Hg=(n,e)=>km(n,e,Pi),Vg="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dl;const Od=typeof window<"u"&&window.trustedTypes;if(Od)try{Dl=Od.createPolicy("vue",{createHTML:n=>n})}catch{}const Uh=Dl?n=>Dl.createHTML(n):n=>n,Gg="http://www.w3.org/2000/svg",Wg="http://www.w3.org/1998/Math/MathML",er=typeof document<"u"?document:null,Nd=er&&er.createElement("template"),Xg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const o=e==="svg"?er.createElementNS(Gg,n):e==="mathml"?er.createElementNS(Wg,n):t?er.createElement(n,{is:t}):er.createElement(n);return n==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:n=>er.createTextNode(n),createComment:n=>er.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>er.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,o,i){const s=t?t.previousSibling:e.lastChild;if(o&&(o===i||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),t),!(o===i||!(o=o.nextSibling)););else{Nd.innerHTML=Uh(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=Nd.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[s?s.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},jg=Symbol("_vtc");function Yg(n,e,t){const r=n[jg];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Bd=Symbol("_vod"),qg=Symbol("_vsh"),Kg=Symbol(""),Zg=/(^|;)\s*display\s*:/;function Jg(n,e,t){const r=n.style,o=At(t);let i=!1;if(t&&!o){if(e)if(At(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();t[a]==null&&Fs(r,a,"")}else for(const s in e)t[s]==null&&Fs(r,s,"");for(const s in t)s==="display"&&(i=!0),Fs(r,s,t[s])}else if(o){if(e!==t){const s=r[Kg];s&&(t+=";"+s),r.cssText=t,i=Zg.test(t)}}else e&&n.removeAttribute("style");Bd in n&&(n[Bd]=i?r.display:"",n[qg]&&(r.display="none"))}const Fd=/\s*!important$/;function Fs(n,e,t){if(Ve(t))t.forEach(r=>Fs(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Qg(n,e);Fd.test(t)?n.setProperty(fo(r),t.replace(Fd,""),"important"):n[r]=t}}const zd=["Webkit","Moz","ms"],ka={};function Qg(n,e){const t=ka[e];if(t)return t;let r=bn(e);if(r!=="filter"&&r in n)return ka[e]=r;r=ua(r);for(let o=0;o<zd.length;o++){const i=zd[o]+r;if(i in n)return ka[e]=i}return e}const $d="http://www.w3.org/1999/xlink";function Hd(n,e,t,r,o,i=sm(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS($d,e.slice(6,e.length)):n.setAttributeNS($d,e,t):t==null||i&&!Uf(t)?n.removeAttribute(e):n.setAttribute(e,i?"":mr(t)?String(t):t)}function Vd(n,e,t,r,o){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Uh(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Uf(t):t==null&&a==="string"?(t="",s=!0):a==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(o||e)}function e0(n,e,t,r){n.addEventListener(e,t,r)}function t0(n,e,t,r){n.removeEventListener(e,t,r)}const Gd=Symbol("_vei");function n0(n,e,t,r,o=null){const i=n[Gd]||(n[Gd]={}),s=i[e];if(r&&s)s.value=r;else{const[a,l]=r0(e);if(r){const c=i[e]=s0(r,o);e0(n,a,c,l)}else s&&(t0(n,a,s,l),i[e]=void 0)}}const Wd=/(?:Once|Passive|Capture)$/;function r0(n){let e;if(Wd.test(n)){e={};let r;for(;r=n.match(Wd);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):fo(n.slice(2)),e]}let Ia=0;const o0=Promise.resolve(),i0=()=>Ia||(o0.then(()=>Ia=0),Ia=Date.now());function s0(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Hn(a0(r,t.value),e,5,[r])};return t.value=n,t.attached=i0(),t}function a0(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>o=>!o._stopped&&r&&r(o))}else return e}const Xd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,l0=(n,e,t,r,o,i)=>{const s=o==="svg";e==="class"?Yg(n,r,s):e==="style"?Jg(n,t,r):la(e)?Ac(e)||n0(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):c0(n,e,r,s))?(Vd(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hd(n,e,r,s,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!At(r))?Vd(n,bn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Hd(n,e,r,s))};function c0(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Xd(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=n.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Xd(e)&&At(t)?!1:e in n}const d0=Gt({patchProp:l0},Xg);let jd;function u0(){return jd||(jd=gg(d0))}const f0=(...n)=>{const e=u0().createApp(...n),{mount:t}=e;return e.mount=r=>{const o=p0(r);if(!o)return;const i=e._component;!He(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const s=t(o,!1,h0(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e};function h0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function p0(n){return At(n)?document.querySelector(n):n}var m0=Object.defineProperty,Yd=Object.getOwnPropertySymbols,g0=Object.prototype.hasOwnProperty,v0=Object.prototype.propertyIsEnumerable,qd=(n,e,t)=>e in n?m0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,b0=(n,e)=>{for(var t in e||(e={}))g0.call(e,t)&&qd(n,t,e[t]);if(Yd)for(var t of Yd(e))v0.call(e,t)&&qd(n,t,e[t]);return n};function Br(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&typeof n=="object"&&Object.keys(n).length===0}function Zc(n){return typeof n=="function"&&"call"in n&&"apply"in n}function pt(n){return!Br(n)}function pr(n,e=!0){return n instanceof Object&&n.constructor===Object&&(e||Object.keys(n).length!==0)}function Oh(n={},e={}){let t=b0({},n);return Object.keys(e).forEach(r=>{let o=r;pr(e[o])&&o in n&&pr(n[o])?t[o]=Oh(n[o],e[o]):t[o]=e[o]}),t}function Nh(...n){return n.reduce((e,t,r)=>r===0?t:Oh(e,t),{})}function fn(n,...e){return Zc(n)?n(...e):n}function hn(n,e=!0){return typeof n=="string"&&(e||n!=="")}function On(n){return hn(n)?n.replace(/(-|_)/g,"").toLowerCase():n}function Jc(n,e="",t={}){let r=On(e).split("."),o=r.shift();if(o){if(pr(n)){let i=Object.keys(n).find(s=>On(s)===o)||"";return Jc(fn(n[i],t),r.join("."),t)}return}return fn(n,t)}function Bh(n,e=!0){return Array.isArray(n)&&(e||n.length!==0)}function _0(n){return pt(n)&&!isNaN(n)}function Ho(n,e){if(e){let t=e.test(n);return e.lastIndex=0,t}return!1}function y0(...n){return Nh(...n)}function Mi(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function x0(n){return hn(n,!1)?n[0].toUpperCase()+n.slice(1):n}function Fh(n){return hn(n)?n.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,t)=>t===0?e:"-"+e.toLowerCase()).toLowerCase():n}function zh(){let n=new Map;return{on(e,t){let r=n.get(e);return r?r.push(t):r=[t],n.set(e,r),this},off(e,t){let r=n.get(e);return r&&r.splice(r.indexOf(t)>>>0,1),this},emit(e,t){let r=n.get(e);r&&r.forEach(o=>{o(t)})},clear(){n.clear()}}}function Vo(...n){if(n){let e=[];for(let t=0;t<n.length;t++){let r=n[t];if(!r)continue;let o=typeof r;if(o==="string"||o==="number")e.push(r);else if(o==="object"){let i=Array.isArray(r)?[Vo(...r)]:Object.entries(r).map(([s,a])=>a?s:void 0);e=i.length?e.concat(i.filter(s=>!!s)):e}}return e.join(" ").trim()}}function $h(n,e){return n?n.classList?n.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(n.className):!1}function Hh(n,e){if(n&&e){let t=r=>{$h(n,r)||(n.classList?n.classList.add(r):n.className+=" "+r)};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function zs(n,e){if(n&&e){let t=r=>{n.classList?n.classList.remove(r):n.className=n.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function Ua(){let n=window,e=document,t=e.documentElement,r=e.getElementsByTagName("body")[0],o=n.innerWidth||t.clientWidth||r.clientWidth,i=n.innerHeight||t.clientHeight||r.clientHeight;return{width:o,height:i}}function Ll(n){return n?Math.abs(n.scrollLeft):0}function Vh(){let n=document.documentElement;return(window.pageXOffset||Ll(n))-(n.clientLeft||0)}function Gh(){let n=document.documentElement;return(window.pageYOffset||n.scrollTop)-(n.clientTop||0)}function S0(n){return n?getComputedStyle(n).direction==="rtl":!1}function Mr(n,e){return n instanceof HTMLElement?n.offsetWidth:0}function Wh(n){if(n){let e=n.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function Xh(n){return!!(n!==null&&typeof n<"u"&&n.nodeName&&Wh(n))}function Qi(n){return typeof Element<"u"?n instanceof Element:n!==null&&typeof n=="object"&&n.nodeType===1&&typeof n.nodeName=="string"}function ta(n,e={}){if(Qi(n)){let t=(r,o)=>{var i,s;let a=(i=n?.$attrs)!=null&&i[r]?[(s=n?.$attrs)==null?void 0:s[r]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let u=Array.isArray(c)?t(r,c):Object.entries(c).map(([f,p])=>r==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=u.length?l.concat(u.filter(f=>!!f)):l}}return l},a)};Object.entries(e).forEach(([r,o])=>{if(o!=null){let i=r.match(/^on(.+)/);i?n.addEventListener(i[1].toLowerCase(),o):r==="p-bind"||r==="pBind"?ta(n,o):(o=r==="class"?[...new Set(t("class",o))].join(" ").trim():r==="style"?t("style",o).join(";").trim():o,(n.$attrs=n.$attrs||{})&&(n.$attrs[r]=o),n.setAttribute(r,o))}})}}function $s(n,e={},...t){if(n){let r=document.createElement(n);return ta(r,e),r.append(...t),r}}function M0(n,e){if(n){n.style.opacity="0";let t=+new Date,r="0",o=function(){r=`${+n.style.opacity+(new Date().getTime()-t)/e}`,n.style.opacity=r,t=+new Date,+r<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function na(n,e){return Qi(n)?n.matches(e)?n:n.querySelector(e):null}function Cr(n,e){if(Qi(n)){let t=n.getAttribute(e);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function Kd(n){if(n){let e=n.offsetHeight,t=getComputedStyle(n);return e-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),e}return 0}function E0(n){if(n){let e=n.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||Ll(document.documentElement)||Ll(document.body)||0)}}return{top:"auto",left:"auto"}}function Er(n,e){return n?n.offsetHeight:0}function jh(n,e=[]){let t=Wh(n);return t===null?e:jh(t,e.concat([t]))}function w0(n){let e=[];if(n){let t=jh(n),r=/(auto|scroll)/,o=i=>{try{let s=window.getComputedStyle(i,null);return r.test(s.getPropertyValue("overflow"))||r.test(s.getPropertyValue("overflowX"))||r.test(s.getPropertyValue("overflowY"))}catch{return!1}};for(let i of t){let s=i.nodeType===1&&i.dataset.scrollselectors;if(s){let a=s.split(",");for(let l of a){let c=na(i,l);c&&o(c)&&e.push(c)}}i.nodeType!==9&&o(i)&&e.push(i)}}return e}function Zd(n){if(n){let e=n.offsetWidth,t=getComputedStyle(n);return e-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),e}return 0}function T0(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function C0(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function A0(n,e="",t){Qi(n)&&t!==null&&t!==void 0&&n.setAttribute(e,t)}var us={};function hi(n="pui_id_"){return Object.hasOwn(us,n)||(us[n]=0),us[n]++,`${n}${us[n]}`}function R0(){let n=[],e=(s,a,l=999)=>{let c=o(s,a,l),d=c.value+(c.key===s?0:l)+1;return n.push({key:s,value:d}),d},t=s=>{n=n.filter(a=>a.value!==s)},r=(s,a)=>o(s).value,o=(s,a,l=0)=>[...n].reverse().find(c=>!0)||{key:s,value:l},i=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:i,set:(s,a,l)=>{a&&(a.style.zIndex=String(e(s,!0,l)))},clear:s=>{s&&(t(i(s)),s.style.zIndex="")},getCurrent:s=>r(s)}}var Jd=R0(),P0=Object.defineProperty,D0=Object.defineProperties,L0=Object.getOwnPropertyDescriptors,ra=Object.getOwnPropertySymbols,Yh=Object.prototype.hasOwnProperty,qh=Object.prototype.propertyIsEnumerable,Qd=(n,e,t)=>e in n?P0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,En=(n,e)=>{for(var t in e||(e={}))Yh.call(e,t)&&Qd(n,t,e[t]);if(ra)for(var t of ra(e))qh.call(e,t)&&Qd(n,t,e[t]);return n},Oa=(n,e)=>D0(n,L0(e)),jn=(n,e)=>{var t={};for(var r in n)Yh.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&ra)for(var r of ra(n))e.indexOf(r)<0&&qh.call(n,r)&&(t[r]=n[r]);return t};function k0(...n){return Nh(...n)}var I0=zh(),Ut=I0,kl=/{([^}]*)}/g,U0=/(\d+\s+[\+\-\*\/]\s+\d+)/g,O0=/var\([^)]+\)/g;function N0(n){return pr(n)&&n.hasOwnProperty("$value")&&n.hasOwnProperty("$type")?n.$value:n}function B0(n){return n.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Il(n="",e=""){return B0(`${hn(n,!1)&&hn(e,!1)?`${n}-`:n}${e}`)}function Kh(n="",e=""){return`--${Il(n,e)}`}function F0(n=""){let e=(n.match(/{/g)||[]).length,t=(n.match(/}/g)||[]).length;return(e+t)%2!==0}function Zh(n,e="",t="",r=[],o){if(hn(n)){let i=n.trim();if(F0(i))return;if(Ho(i,kl)){let s=i.replaceAll(kl,a=>{let l=a.replace(/{|}/g,"").split(".").filter(c=>!r.some(d=>Ho(c,d)));return`var(${Kh(t,Fh(l.join("-")))}${pt(o)?`, ${o}`:""})`});return Ho(s.replace(O0,"0"),U0)?`calc(${s})`:s}return i}else if(_0(n))return n}function z0(n,e,t){hn(e,!1)&&n.push(`${e}:${t};`)}function Lo(n,e){return n?`${n}{${e}}`:""}function Jh(n,e){if(n.indexOf("dt(")===-1)return n;function t(s,a){let l=[],c=0,d="",u=null,f=0;for(;c<=s.length;){let p=s[c];if((p==='"'||p==="'"||p==="`")&&s[c-1]!=="\\"&&(u=u===p?null:p),!u&&(p==="("&&f++,p===")"&&f--,(p===","||c===s.length)&&f===0)){let g=d.trim();g.startsWith("dt(")?l.push(Jh(g,a)):l.push(r(g)),d="",c++;continue}p!==void 0&&(d+=p),c++}return l}function r(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let o=[],i=[];for(let s=0;s<n.length;s++)if(n[s]==="d"&&n.slice(s,s+3)==="dt(")i.push(s),s+=2;else if(n[s]===")"&&i.length>0){let a=i.pop();i.length===0&&o.push([a,s])}if(!o.length)return n;for(let s=o.length-1;s>=0;s--){let[a,l]=o[s],c=n.slice(a+3,l),d=t(c,e),u=e(...d);n=n.slice(0,a)+u+n.slice(l+1)}return n}var so=(...n)=>$0(at.getTheme(),...n),$0=(n={},e,t,r)=>{if(e){let{variable:o,options:i}=at.defaults||{},{prefix:s,transform:a}=n?.options||i||{},l=Ho(e,kl)?e:`{${e}}`;return r==="value"||Br(r)&&a==="strict"?at.getTokenValue(e):Zh(l,void 0,s,[o.excludedKeyRegex],t)}return""};function fs(n,...e){if(n instanceof Array){let t=n.reduce((r,o,i)=>{var s;return r+o+((s=fn(e[i],{dt:so}))!=null?s:"")},"");return Jh(t,so)}return fn(n,{dt:so})}function H0(n,e={}){let t=at.defaults.variable,{prefix:r=t.prefix,selector:o=t.selector,excludedKeyRegex:i=t.excludedKeyRegex}=e,s=[],a=[],l=[{node:n,path:r}];for(;l.length;){let{node:d,path:u}=l.pop();for(let f in d){let p=d[f],g=N0(p),_=Ho(f,i)?Il(u):Il(u,Fh(f));if(pr(g))l.push({node:g,path:_});else{let m=Kh(_),h=Zh(g,_,r,[i]);z0(a,m,h);let w=_;r&&w.startsWith(r+"-")&&(w=w.slice(r.length+1)),s.push(w.replace(/-/g,"."))}}}let c=a.join("");return{value:a,tokens:s,declarations:c,css:Lo(o,c)}}var yn={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(n){return{type:"class",selector:n,matched:this.pattern.test(n.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(n){return{type:"attr",selector:`:root${n}`,matched:this.pattern.test(n.trim())}}},media:{pattern:/^@media (.*)$/,resolve(n){return{type:"media",selector:n,matched:this.pattern.test(n.trim())}}},system:{pattern:/^system$/,resolve(n){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(n.trim())}}},custom:{resolve(n){return{type:"custom",selector:n,matched:!0}}}},resolve(n){let e=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[n].flat().map(t=>{var r;return(r=e.map(o=>o.resolve(t)).find(o=>o.matched))!=null?r:this.rules.custom.resolve(t)})}},_toVariables(n,e){return H0(n,{prefix:e?.prefix})},getCommon({name:n="",theme:e={},params:t,set:r,defaults:o}){var i,s,a,l,c,d,u;let{preset:f,options:p}=e,g,_,m,h,w,E,b;if(pt(f)&&p.transform!=="strict"){let{primitive:A,semantic:D,extend:R}=f,U=D||{},{colorScheme:T}=U,M=jn(U,["colorScheme"]),L=R||{},{colorScheme:V}=L,H=jn(L,["colorScheme"]),te=T||{},{dark:re}=te,K=jn(te,["dark"]),J=V||{},{dark:F}=J,ue=jn(J,["dark"]),he=pt(A)?this._toVariables({primitive:A},p):{},be=pt(M)?this._toVariables({semantic:M},p):{},ke=pt(K)?this._toVariables({light:K},p):{},Ze=pt(re)?this._toVariables({dark:re},p):{},ee=pt(H)?this._toVariables({semantic:H},p):{},fe=pt(ue)?this._toVariables({light:ue},p):{},Te=pt(F)?this._toVariables({dark:F},p):{},[me,Le]=[(i=he.declarations)!=null?i:"",he.tokens],[Ye,Ie]=[(s=be.declarations)!=null?s:"",be.tokens||[]],[ht,C]=[(a=ke.declarations)!=null?a:"",ke.tokens||[]],[P,y]=[(l=Ze.declarations)!=null?l:"",Ze.tokens||[]],[oe,Y]=[(c=ee.declarations)!=null?c:"",ee.tokens||[]],[Q,q]=[(d=fe.declarations)!=null?d:"",fe.tokens||[]],[ne,j]=[(u=Te.declarations)!=null?u:"",Te.tokens||[]];g=this.transformCSS(n,me,"light","variable",p,r,o),_=Le;let X=this.transformCSS(n,`${Ye}${ht}`,"light","variable",p,r,o),ge=this.transformCSS(n,`${P}`,"dark","variable",p,r,o);m=`${X}${ge}`,h=[...new Set([...Ie,...C,...y])];let x=this.transformCSS(n,`${oe}${Q}color-scheme:light`,"light","variable",p,r,o),v=this.transformCSS(n,`${ne}color-scheme:dark`,"dark","variable",p,r,o);w=`${x}${v}`,E=[...new Set([...Y,...q,...j])],b=fn(f.css,{dt:so})}return{primitive:{css:g,tokens:_},semantic:{css:m,tokens:h},global:{css:w,tokens:E},style:b}},getPreset({name:n="",preset:e={},options:t,params:r,set:o,defaults:i,selector:s}){var a,l,c;let d,u,f;if(pt(e)&&t.transform!=="strict"){let p=n.replace("-directive",""),g=e,{colorScheme:_,extend:m,css:h}=g,w=jn(g,["colorScheme","extend","css"]),E=m||{},{colorScheme:b}=E,A=jn(E,["colorScheme"]),D=_||{},{dark:R}=D,U=jn(D,["dark"]),T=b||{},{dark:M}=T,L=jn(T,["dark"]),V=pt(w)?this._toVariables({[p]:En(En({},w),A)},t):{},H=pt(U)?this._toVariables({[p]:En(En({},U),L)},t):{},te=pt(R)?this._toVariables({[p]:En(En({},R),M)},t):{},[re,K]=[(a=V.declarations)!=null?a:"",V.tokens||[]],[J,F]=[(l=H.declarations)!=null?l:"",H.tokens||[]],[ue,he]=[(c=te.declarations)!=null?c:"",te.tokens||[]],be=this.transformCSS(p,`${re}${J}`,"light","variable",t,o,i,s),ke=this.transformCSS(p,ue,"dark","variable",t,o,i,s);d=`${be}${ke}`,u=[...new Set([...K,...F,...he])],f=fn(h,{dt:so})}return{css:d,tokens:u,style:f}},getPresetC({name:n="",theme:e={},params:t,set:r,defaults:o}){var i;let{preset:s,options:a}=e,l=(i=s?.components)==null?void 0:i[n];return this.getPreset({name:n,preset:l,options:a,params:t,set:r,defaults:o})},getPresetD({name:n="",theme:e={},params:t,set:r,defaults:o}){var i,s;let a=n.replace("-directive",""),{preset:l,options:c}=e,d=((i=l?.components)==null?void 0:i[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:d,options:c,params:t,set:r,defaults:o})},applyDarkColorScheme(n){return!(n.darkModeSelector==="none"||n.darkModeSelector===!1)},getColorSchemeOption(n,e){var t;return this.applyDarkColorScheme(n)?this.regex.resolve(n.darkModeSelector===!0?e.options.darkModeSelector:(t=n.darkModeSelector)!=null?t:e.options.darkModeSelector):[]},getLayerOrder(n,e={},t,r){let{cssLayer:o}=e;return o?`@layer ${fn(o.order||o.name||"primeui",t)}`:""},getCommonStyleSheet({name:n="",theme:e={},params:t,props:r={},set:o,defaults:i}){let s=this.getCommon({name:n,theme:e,params:t,set:o,defaults:i}),a=Object.entries(r).reduce((l,[c,d])=>l.push(`${c}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,d])=>{if(pr(d)&&Object.hasOwn(d,"css")){let u=Mi(d.css),f=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${u}</style>`)}return l},[]).join("")},getStyleSheet({name:n="",theme:e={},params:t,props:r={},set:o,defaults:i}){var s;let a={name:n,theme:e,params:t,set:o,defaults:i},l=(s=n.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(r).reduce((d,[u,f])=>d.push(`${u}="${f}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${n}-variables" ${c}>${Mi(l)}</style>`:""},createTokens(n={},e,t="",r="",o={}){return{}},getTokenValue(n,e,t){var r;let o=(a=>a.split(".").filter(l=>!Ho(l.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(e),i=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,s=[(r=n[o])==null?void 0:r.computed(i)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let c=l,{colorScheme:d}=c,u=jn(c,["colorScheme"]);return a[d]=u,a},void 0)},getSelectorRule(n,e,t,r){return t==="class"||t==="attr"?Lo(pt(e)?`${n}${e},${n} ${e}`:n,r):Lo(n,Lo(e??":root",r))},transformCSS(n,e,t,r,o={},i,s,a){if(pt(e)){let{cssLayer:l}=o;if(r!=="style"){let c=this.getColorSchemeOption(o,s);e=t==="dark"?c.reduce((d,{type:u,selector:f})=>(pt(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",e):this.getSelectorRule(f,a,u,e)),d),""):Lo(a??":root",e)}if(l){let c={name:"primeui"};pr(l)&&(c.name=fn(l.name,{name:n,type:r})),pt(c.name)&&(e=Lo(`@layer ${c.name}`,e),i?.layerNames(c.name))}return e}return""}},at={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(n={}){let{theme:e}=n;e&&(this._theme=Oa(En({},e),{options:En(En({},this.defaults.options),e.options)}),this._tokens=yn.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var n;return((n=this.theme)==null?void 0:n.preset)||{}},get options(){var n;return((n=this.theme)==null?void 0:n.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(n){this.update({theme:n}),Ut.emit("theme:change",n)},getPreset(){return this.preset},setPreset(n){this._theme=Oa(En({},this.theme),{preset:n}),this._tokens=yn.createTokens(n,this.defaults),this.clearLoadedStyleNames(),Ut.emit("preset:change",n),Ut.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(n){this._theme=Oa(En({},this.theme),{options:n}),this.clearLoadedStyleNames(),Ut.emit("options:change",n),Ut.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(n){this._layerNames.add(n)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(n){return this._loadedStyleNames.has(n)},setLoadedStyleName(n){this._loadedStyleNames.add(n)},deleteLoadedStyleName(n){this._loadedStyleNames.delete(n)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(n){return yn.getTokenValue(this.tokens,n,this.defaults)},getCommon(n="",e){return yn.getCommon({name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(n="",e){let t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return yn.getPresetC(t)},getDirective(n="",e){let t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return yn.getPresetD(t)},getCustomPreset(n="",e,t,r){let o={name:n,preset:e,options:this.options,selector:t,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return yn.getPreset(o)},getLayerOrderCSS(n=""){return yn.getLayerOrder(n,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(n="",e,t="style",r){return yn.transformCSS(n,e,r,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(n="",e,t={}){return yn.getCommonStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(n,e,t={}){return yn.getStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(n){this._loadingStyles.add(n)},onStyleUpdated(n){this._loadingStyles.add(n)},onStyleLoaded(n,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),Ut.emit(`theme:${e}:load`,n),!this._loadingStyles.size&&Ut.emit("theme:load"))}},Nt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},V0=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;function Di(n){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Di(n)}function eu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function tu(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?eu(Object(t),!0).forEach(function(r){G0(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):eu(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function G0(n,e,t){return(e=W0(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function W0(n){var e=X0(n,"string");return Di(e)=="symbol"?e:e+""}function X0(n,e){if(Di(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function j0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Rl()&&Rl().components?Gc(n):e?n():eh(n)}var Y0=0;function q0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=Nn(!1),r=Nn(n),o=Nn(null),i=T0()?window.document:void 0,s=e.document,a=s===void 0?i:s,l=e.immediate,c=l===void 0?!0:l,d=e.manual,u=d===void 0?!1:d,f=e.name,p=f===void 0?"style_".concat(++Y0):f,g=e.id,_=g===void 0?void 0:g,m=e.media,h=m===void 0?void 0:m,w=e.nonce,E=w===void 0?void 0:w,b=e.first,A=b===void 0?!1:b,D=e.onMounted,R=D===void 0?void 0:D,U=e.onUpdated,T=U===void 0?void 0:U,M=e.onLoad,L=M===void 0?void 0:M,V=e.props,H=V===void 0?{}:V,te=function(){},re=function(F){var ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var he=tu(tu({},H),ue),be=he.name||p,ke=he.id||_,Ze=he.nonce||E;o.value=a.querySelector('style[data-primevue-style-id="'.concat(be,'"]'))||a.getElementById(ke)||a.createElement("style"),o.value.isConnected||(r.value=F||n,ta(o.value,{type:"text/css",id:ke,media:h,nonce:Ze}),A?a.head.prepend(o.value):a.head.appendChild(o.value),A0(o.value,"data-primevue-style-id",be),ta(o.value,he),o.value.onload=function(ee){return L?.(ee,{name:be})},R?.(be)),!t.value&&(te=or(r,function(ee){o.value.textContent=ee,T?.(be)},{immediate:!0}),t.value=!0)}},K=function(){!a||!t.value||(te(),Xh(o.value)&&a.head.removeChild(o.value),t.value=!1,o.value=null)};return c&&!u&&j0(re),{id:_,name:p,el:o,css:r,unload:K,load:re,isLoaded:Bc(t)}}function Li(n){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Li(n)}var nu,ru,ou,iu;function su(n,e){return Q0(n)||J0(n,e)||Z0(n,e)||K0()}function K0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z0(n,e){if(n){if(typeof n=="string")return au(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?au(n,e):void 0}}function au(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function J0(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(l=(r=i.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function Q0(n){if(Array.isArray(n))return n}function lu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Na(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?lu(Object(t),!0).forEach(function(r){ev(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):lu(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function ev(n,e,t){return(e=tv(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function tv(n){var e=nv(n,"string");return Li(e)=="symbol"?e:e+""}function nv(n,e){if(Li(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Li(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function hs(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var rv=function(e){var t=e.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(t("scrollbar.width"),`;
}
`)},ov={},iv={},ft={name:"base",css:rv,style:V0,classes:ov,inlineStyles:iv,load:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},o=r(fs(nu||(nu=hs(["",""])),e));return pt(o)?q0(Mi(o),Na({name:this.name},t)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadStyle:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.style,t,function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return at.transformCSS(t.name||e.name,"".concat(o).concat(fs(ru||(ru=hs(["",""])),r)))})},getCommonTheme:function(e){return at.getCommon(this.name,e)},getComponentTheme:function(e){return at.getComponent(this.name,e)},getDirectiveTheme:function(e){return at.getDirective(this.name,e)},getPresetTheme:function(e,t,r){return at.getCustomPreset(this.name,e,t,r)},getLayerOrderThemeCSS:function(){return at.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=fn(this.css,{dt:so})||"",o=Mi(fs(ou||(ou=hs(["","",""])),r,e)),i=Object.entries(t).reduce(function(s,a){var l=su(a,2),c=l[0],d=l[1];return s.push("".concat(c,'="').concat(d,'"'))&&s},[]).join(" ");return pt(o)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(o,"</style>"):""}return""},getCommonThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return at.getCommonStyleSheet(this.name,e,t)},getThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[at.getStyleSheet(this.name,e,t)];if(this.style){var o=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=fs(iu||(iu=hs(["",""])),fn(this.style,{dt:so})),s=Mi(at.transformCSS(o,i)),a=Object.entries(t).reduce(function(l,c){var d=su(c,2),u=d[0],f=d[1];return l.push("".concat(u,'="').concat(f,'"'))&&l},[]).join(" ");pt(s)&&r.push('<style type="text/css" data-primevue-style-id="'.concat(o,'" ').concat(a,">").concat(s,"</style>"))}return r.join("")},extend:function(e){return Na(Na({},this),{},{css:void 0,style:void 0},e)}},Dr=zh();function ki(n){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ki(n)}function cu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function ps(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?cu(Object(t),!0).forEach(function(r){sv(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):cu(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function sv(n,e,t){return(e=av(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function av(n){var e=lv(n,"string");return ki(e)=="symbol"?e:e+""}function lv(n,e){if(ki(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var cv={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Nt.STARTS_WITH,Nt.CONTAINS,Nt.NOT_CONTAINS,Nt.ENDS_WITH,Nt.EQUALS,Nt.NOT_EQUALS],numeric:[Nt.EQUALS,Nt.NOT_EQUALS,Nt.LESS_THAN,Nt.LESS_THAN_OR_EQUAL_TO,Nt.GREATER_THAN,Nt.GREATER_THAN_OR_EQUAL_TO],date:[Nt.DATE_IS,Nt.DATE_IS_NOT,Nt.DATE_BEFORE,Nt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},dv=Symbol();function uv(n,e){var t={config:ha(e)};return n.config.globalProperties.$primevue=t,n.provide(dv,t),fv(),hv(n,t),t}var Io=[];function fv(){Ut.clear(),Io.forEach(function(n){return n?.()}),Io=[]}function hv(n,e){var t=Nn(!1),r=function(){var c;if(((c=e.config)===null||c===void 0?void 0:c.theme)!=="none"&&!at.isStyleNameLoaded("common")){var d,u,f=((d=ft.getCommonTheme)===null||d===void 0?void 0:d.call(ft))||{},p=f.primitive,g=f.semantic,_=f.global,m=f.style,h={nonce:(u=e.config)===null||u===void 0||(u=u.csp)===null||u===void 0?void 0:u.nonce};ft.load(p?.css,ps({name:"primitive-variables"},h)),ft.load(g?.css,ps({name:"semantic-variables"},h)),ft.load(_?.css,ps({name:"global-variables"},h)),ft.loadStyle(ps({name:"global-style"},h),m),at.setLoadedStyleName("common")}};Ut.on("theme:change",function(l){t.value||(n.config.globalProperties.$primevue.config.theme=l,t.value=!0)});var o=or(e.config,function(l,c){Dr.emit("config:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),i=or(function(){return e.config.ripple},function(l,c){Dr.emit("config:ripple:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),s=or(function(){return e.config.theme},function(l,c){t.value||at.setTheme(l),e.config.unstyled||r(),t.value=!1,Dr.emit("config:theme:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!1}),a=or(function(){return e.config.unstyled},function(l,c){!l&&e.config.theme&&r(),Dr.emit("config:unstyled:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0});Io.push(o),Io.push(i),Io.push(s),Io.push(a)}var pv={install:function(e,t){var r=y0(cv,t);uv(e,r)}};const du={appTitle:"vue3-treeJS"},mv={class:"bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"},gv={class:"bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50"},vv={class:"container mx-auto px-6 py-4"},bv={class:"text-center"},_v={class:"text-3xl font-bold text-white mb-2"},yv={class:"scene-wrapper"},xv=Zi({__name:"Layout",props:{title:{default:"/forgoten_config =(/"}},setup(n){return(e,t)=>(bt(),$t("div",mv,[wt("header",gv,[wt("div",vv,[wt("div",bv,[wt("h1",_v,Yo(e.title),1)])])]),wt("main",yv,[ko(e.$slots,"default",{},void 0,!0)])]))}}),Qh=(n,e)=>{const t=n.__vccOpts||n;for(const[r,o]of e)t[r]=o;return t},Sv=Qh(xv,[["__scopeId","data-v-36c07181"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="178",Go={ROTATE:0,DOLLY:1,PAN:2},Uo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mv=0,uu=1,Ev=2,ep=1,tp=2,Qn=3,Fr=0,Kt=1,rr=2,Ur=0,Wo=1,fu=2,hu=3,pu=4,wv=5,to=100,Tv=101,Cv=102,Av=103,Rv=104,Pv=200,Dv=201,Lv=202,kv=203,Ul=204,Ol=205,Iv=206,Uv=207,Ov=208,Nv=209,Bv=210,Fv=211,zv=212,$v=213,Hv=214,Nl=0,Bl=1,Fl=2,Ko=3,zl=4,$l=5,Hl=6,Vl=7,np=0,Vv=1,Gv=2,Or=0,Wv=1,Xv=2,jv=3,rp=4,Yv=5,qv=6,Kv=7,op=300,Zo=301,Jo=302,Gl=303,Wl=304,_a=306,Ii=1e3,Tn=1001,Xl=1002,Pn=1003,Zv=1004,ms=1005,Bn=1006,Ba=1007,ro=1008,Vn=1009,ip=1010,sp=1011,Ui=1012,ed=1013,lo=1014,ir=1015,es=1016,td=1017,nd=1018,Oi=1020,ap=35902,lp=1021,cp=1022,Cn=1023,Ni=1026,Bi=1027,dp=1028,rd=1029,up=1030,od=1031,id=1033,Hs=33776,Vs=33777,Gs=33778,Ws=33779,jl=35840,Yl=35841,ql=35842,Kl=35843,Zl=36196,Jl=37492,Ql=37496,ec=37808,tc=37809,nc=37810,rc=37811,oc=37812,ic=37813,sc=37814,ac=37815,lc=37816,cc=37817,dc=37818,uc=37819,fc=37820,hc=37821,Xs=36492,pc=36494,mc=36495,fp=36283,gc=36284,vc=36285,bc=36286,Jv=3200,Qv=3201,hp=0,eb=1,Rr="",cn="srgb",Qo="srgb-linear",oa="linear",st="srgb",go=7680,mu=519,tb=512,nb=513,rb=514,pp=515,ob=516,ib=517,sb=518,ab=519,gu=35044,vu="300 es",sr=2e3,ia=2001;class ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const i=o.indexOf(t);i!==-1&&o.splice(i,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let i=0,s=o.length;i<s;i++)o[i].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,_c=180/Math.PI;function ts(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[r&255]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function lb(n,e){return(n%e+e)%e}function Fa(n,e,t){return(1-t)*n+t*e}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const cb={DEG2RAD:js};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*o+e.x,this.y=i*o+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class co{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,i,s,a){let l=r[o+0],c=r[o+1],d=r[o+2],u=r[o+3];const f=i[s+0],p=i[s+1],g=i[s+2],_=i[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==p||d!==g){let m=1-a;const h=l*f+c*p+d*g+u*_,w=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const A=Math.sqrt(E),D=Math.atan2(A,h*w);m=Math.sin(m*D)/A,a=Math.sin(a*D)/A}const b=a*w;if(l=l*m+f*b,c=c*m+p*b,d=d*m+g*b,u=u*m+_*b,m===1-a){const A=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=A,c*=A,d*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,r,o,i,s){const a=r[o],l=r[o+1],c=r[o+2],d=r[o+3],u=i[s],f=i[s+1],p=i[s+2],g=i[s+3];return e[t]=a*g+d*u+l*p-c*f,e[t+1]=l*g+d*f+c*u-a*p,e[t+2]=c*g+d*p+a*f-l*u,e[t+3]=d*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,i=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(r/2),d=a(o/2),u=a(i/2),f=l(r/2),p=l(o/2),g=l(i/2);switch(s){case"XYZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"YXZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"ZXY":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"ZYX":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"YZX":this._x=f*d*u+c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u-f*p*g;break;case"XZY":this._x=f*d*u-c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],i=t[8],s=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=r+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(i-c)*p,this._z=(s-o)*p}else if(r>a&&r>u){const p=2*Math.sqrt(1+r-a-u);this._w=(d-l)/p,this._x=.25*p,this._y=(o+s)/p,this._z=(i+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-r-u);this._w=(i-c)/p,this._x=(o+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-r-a);this._w=(s-o)/p,this._x=(i+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,i=e._z,s=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=r*d+s*a+o*c-i*l,this._y=o*d+s*l+i*a-r*c,this._z=i*d+s*c+r*l-o*a,this._w=s*d-r*a-o*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,i=this._z,s=this._w;let a=s*e._w+r*e._x+o*e._y+i*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=o,this._z=i,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*r+t*this._x,this._y=p*o+t*this._y,this._z=p*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=s*u+this._w*f,this._x=r*u+this._x*f,this._y=o*u+this._y*f,this._z=i*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,r=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*o,this.y=i[1]*t+i[4]*r+i[7]*o,this.z=i[2]*t+i[5]*r+i[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,i=e.elements,s=1/(i[3]*t+i[7]*r+i[11]*o+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*o+i[12])*s,this.y=(i[1]*t+i[5]*r+i[9]*o+i[13])*s,this.z=(i[2]*t+i[6]*r+i[10]*o+i[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,i=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*o-a*r),d=2*(a*t-i*o),u=2*(i*r-s*t);return this.x=t+l*c+s*u-a*d,this.y=r+l*d+a*c-i*u,this.z=o+l*u+i*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*o,this.y=i[1]*t+i[5]*r+i[9]*o,this.z=i[2]*t+i[6]*r+i[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,i=e.z,s=t.x,a=t.y,l=t.z;return this.x=o*l-i*a,this.y=i*s-r*l,this.z=r*a-o*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new B,bu=new co;class We{constructor(e,t,r,o,i,s,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,i,s,a,l,c)}set(e,t,r,o,i,s,a,l,c){const d=this.elements;return d[0]=e,d[1]=o,d[2]=a,d[3]=t,d[4]=i,d[5]=l,d[6]=r,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,i=this.elements,s=r[0],a=r[3],l=r[6],c=r[1],d=r[4],u=r[7],f=r[2],p=r[5],g=r[8],_=o[0],m=o[3],h=o[6],w=o[1],E=o[4],b=o[7],A=o[2],D=o[5],R=o[8];return i[0]=s*_+a*w+l*A,i[3]=s*m+a*E+l*D,i[6]=s*h+a*b+l*R,i[1]=c*_+d*w+u*A,i[4]=c*m+d*E+u*D,i[7]=c*h+d*b+u*R,i[2]=f*_+p*w+g*A,i[5]=f*m+p*E+g*D,i[8]=f*h+p*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*a*c-r*i*d+r*a*l+o*i*c-o*s*l}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*s-a*c,f=a*l-d*i,p=c*i-s*l,g=t*u+r*f+o*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(o*c-d*r)*_,e[2]=(a*r-o*s)*_,e[3]=f*_,e[4]=(d*t-o*l)*_,e[5]=(o*i-a*t)*_,e[6]=p*_,e[7]=(r*l-c*t)*_,e[8]=(s*t-r*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,i,s,a){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*s+c*a)+s+e,-o*c,o*l,-o*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new We;function mp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function db(){const n=sa("canvas");return n.style.display="block",n}const _u={};function Xo(n){n in _u||(_u[n]=!0,console.warn(n))}function ub(n,e,t){return new Promise(function(r,o){function i(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}function fb(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hb(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pb(){const n={enabled:!0,workingColorSpace:Qo,spaces:{},convert:function(o,i,s){return this.enabled===!1||i===s||!i||!s||(this.spaces[i].transfer===st&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[i].primaries!==this.spaces[s].primaries&&(o.applyMatrix3(this.spaces[i].toXYZ),o.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===st&&(o.r=jo(o.r),o.g=jo(o.g),o.b=jo(o.b))),o},workingToColorSpace:function(o,i){return this.convert(o,this.workingColorSpace,i)},colorSpaceToWorking:function(o,i){return this.convert(o,i,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Rr?oa:this.spaces[o].transfer},getLuminanceCoefficients:function(o,i=this.workingColorSpace){return o.fromArray(this.spaces[i].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,i,s){return o.copy(this.spaces[i].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,i){return Xo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,i)},toWorkingColorSpace:function(o,i){return Xo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Qo]:{primaries:e,whitePoint:r,transfer:oa,toXYZ:yu,fromXYZ:xu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:r,transfer:st,toXYZ:yu,fromXYZ:xu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const tt=pb();function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vo;class mb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{vo===void 0&&(vo=sa("canvas")),vo.width=e.width,vo.height=e.height;const o=vo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=vo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sa("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),i=o.data;for(let s=0;s<i.length;s++)i[s]=lr(i[s]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gb=0;class sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let i;if(Array.isArray(o)){i=[];for(let s=0,a=o.length;s<a;s++)o[s].isDataTexture?i.push(Ha(o[s].image)):i.push(Ha(o[s]))}else i=Ha(o);r.url=i}return t||(e.images[this.uuid]=r),r}}function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vb=0;const Va=new B;class Zt extends ho{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,r=Tn,o=Tn,i=Bn,s=ro,a=Cn,l=Vn,c=Zt.DEFAULT_ANISOTROPY,d=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=ts(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Va).x}get height(){return this.source.getSize(Va).y}get depth(){return this.source.getSize(Va).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=op;Zt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,r=0,o=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*o+s[12]*i,this.y=s[1]*t+s[5]*r+s[9]*o+s[13]*i,this.z=s[2]*t+s[6]*r+s[10]*o+s[14]*i,this.w=s[3]*t+s[7]*r+s[11]*o+s[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,i;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(p+1)/2,A=(h+1)/2,D=(d+f)/4,R=(u+_)/4,U=(g+m)/4;return E>b&&E>A?E<.01?(r=0,o=.707106781,i=.707106781):(r=Math.sqrt(E),o=D/r,i=R/r):b>A?b<.01?(r=.707106781,o=0,i=.707106781):(o=Math.sqrt(b),r=D/o,i=U/o):A<.01?(r=.707106781,o=.707106781,i=0):(i=Math.sqrt(A),r=R/i,o=U/i),this.set(r,o,i,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(f-d)/w,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bb extends ho{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const o={width:e,height:t,depth:r.depth},i=new Zt(o);this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=i.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,i=this.textures.length;o<i;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new sd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uo extends bb{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class gp extends Zt{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _b extends Zt{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=i.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,xn):xn.fromBufferAttribute(i,s),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gs.copy(r.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const o=e.children;for(let i=0,s=o.length;i<s;i++)this.expandByObject(o[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(si),vs.subVectors(this.max,si),bo.subVectors(e.a,si),_o.subVectors(e.b,si),yo.subVectors(e.c,si),vr.subVectors(_o,bo),br.subVectors(yo,_o),jr.subVectors(bo,yo);let t=[0,-vr.z,vr.y,0,-br.z,br.y,0,-jr.z,jr.y,vr.z,0,-vr.x,br.z,0,-br.x,jr.z,0,-jr.x,-vr.y,vr.x,0,-br.y,br.x,0,-jr.y,jr.x,0];return!Ga(t,bo,_o,yo,vs)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,bo,_o,yo,vs))?!1:(bs.crossVectors(vr,br),t=[bs.x,bs.y,bs.z],Ga(t,bo,_o,yo,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new B,new B,new B,new B,new B,new B,new B,new B],xn=new B,gs=new ns,bo=new B,_o=new B,yo=new B,vr=new B,br=new B,jr=new B,si=new B,vs=new B,bs=new B,Yr=new B;function Ga(n,e,t,r,o){for(let i=0,s=n.length-3;i<=s;i+=3){Yr.fromArray(n,i);const a=o.x*Math.abs(Yr.x)+o.y*Math.abs(Yr.y)+o.z*Math.abs(Yr.z),l=e.dot(Yr),c=t.dot(Yr),d=r.dot(Yr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const yb=new ns,ai=new B,Wa=new B;class ad{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):yb.setFromPoints(e).getCenter(r);let o=0;for(let i=0,s=e.length;i<s;i++)o=Math.max(o,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ai.subVectors(e,this.center);const t=ai.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ai,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ai.copy(e.center).add(Wa)),this.expandByPoint(ai.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qn=new B,Xa=new B,_s=new B,_r=new B,ja=new B,ys=new B,Ya=new B;class vp{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Xa.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Xa);const i=e.distanceTo(t)*.5,s=-this.direction.dot(_s),a=_r.dot(this.direction),l=-_r.dot(_s),c=_r.lengthSq(),d=Math.abs(1-s*s);let u,f,p,g;if(d>0)if(u=s*l-a,f=s*a-l,g=i*d,u>=0)if(f>=-g)if(f<=g){const _=1/d;u*=_,f*=_,p=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=i,u=Math.max(0,-(s*f+a)),p=-u*u+f*(f+2*l)+c;else f=-i,u=Math.max(0,-(s*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-s*i+a)),f=u>0?-i:Math.min(Math.max(-i,-l),i),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-i,-l),i),p=f*(f+2*l)+c):(u=Math.max(0,-(s*i+a)),f=u>0?i:Math.min(Math.max(-i,-l),i),p=-u*u+f*(f+2*l)+c);else f=s>0?-i:i,u=Math.max(0,-(s*f+a)),p=-u*u+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,u),o&&o.copy(Xa).addScaledVector(_s,f),p}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const r=qn.dot(this.direction),o=qn.dot(qn)-r*r,i=e.radius*e.radius;if(o>i)return null;const s=Math.sqrt(i-o),a=r-s,l=r+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,i,s,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,o=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,o=(e.min.x-f.x)*c),d>=0?(i=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(i=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),r>s||i>o||((i>r||isNaN(r))&&(r=i),(s<o||isNaN(o))&&(o=s),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),r>l||a>o)||((a>r||r!==r)&&(r=a),(l<o||o!==o)&&(o=l),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,r,o,i){ja.subVectors(t,e),ys.subVectors(r,e),Ya.crossVectors(ja,ys);let s=this.direction.dot(Ya),a;if(s>0){if(o)return null;a=1}else if(s<0)a=-1,s=-s;else return null;_r.subVectors(this.origin,e);const l=a*this.direction.dot(ys.crossVectors(_r,ys));if(l<0)return null;const c=a*this.direction.dot(ja.cross(_r));if(c<0||l+c>s)return null;const d=-a*_r.dot(Ya);return d<0?null:this.at(d/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,r,o,i,s,a,l,c,d,u,f,p,g,_,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,i,s,a,l,c,d,u,f,p,g,_,m)}set(e,t,r,o,i,s,a,l,c,d,u,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=r,h[12]=o,h[1]=i,h[5]=s,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/xo.setFromMatrixColumn(e,0).length(),i=1/xo.setFromMatrixColumn(e,1).length(),s=1/xo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,i=e.z,s=Math.cos(r),a=Math.sin(r),l=Math.cos(o),c=Math.sin(o),d=Math.cos(i),u=Math.sin(i);if(e.order==="XYZ"){const f=s*d,p=s*u,g=a*d,_=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*d,p=l*u,g=c*d,_=c*u;t[0]=f+_*a,t[4]=g*a-p,t[8]=s*c,t[1]=s*u,t[5]=s*d,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*d,p=l*u,g=c*d,_=c*u;t[0]=f-_*a,t[4]=-s*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=s*d,t[9]=_-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*d,p=s*u,g=a*d,_=a*u;t[0]=l*d,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*c,g=a*l,_=a*c;t[0]=l*d,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=s*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=s*l,p=s*c,g=a*l,_=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+_,t[5]=s*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*d,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xb,e,Sb)}lookAt(e,t,r){const o=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),yr.crossVectors(r,sn),yr.lengthSq()===0&&(Math.abs(r.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),yr.crossVectors(r,sn)),yr.normalize(),xs.crossVectors(sn,yr),o[0]=yr.x,o[4]=xs.x,o[8]=sn.x,o[1]=yr.y,o[5]=xs.y,o[9]=sn.y,o[2]=yr.z,o[6]=xs.z,o[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,i=this.elements,s=r[0],a=r[4],l=r[8],c=r[12],d=r[1],u=r[5],f=r[9],p=r[13],g=r[2],_=r[6],m=r[10],h=r[14],w=r[3],E=r[7],b=r[11],A=r[15],D=o[0],R=o[4],U=o[8],T=o[12],M=o[1],L=o[5],V=o[9],H=o[13],te=o[2],re=o[6],K=o[10],J=o[14],F=o[3],ue=o[7],he=o[11],be=o[15];return i[0]=s*D+a*M+l*te+c*F,i[4]=s*R+a*L+l*re+c*ue,i[8]=s*U+a*V+l*K+c*he,i[12]=s*T+a*H+l*J+c*be,i[1]=d*D+u*M+f*te+p*F,i[5]=d*R+u*L+f*re+p*ue,i[9]=d*U+u*V+f*K+p*he,i[13]=d*T+u*H+f*J+p*be,i[2]=g*D+_*M+m*te+h*F,i[6]=g*R+_*L+m*re+h*ue,i[10]=g*U+_*V+m*K+h*he,i[14]=g*T+_*H+m*J+h*be,i[3]=w*D+E*M+b*te+A*F,i[7]=w*R+E*L+b*re+A*ue,i[11]=w*U+E*V+b*K+A*he,i[15]=w*T+E*H+b*J+A*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],i=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+i*l*u-o*c*u-i*a*f+r*c*f+o*a*p-r*l*p)+_*(+t*l*p-t*c*f+i*s*f-o*s*p+o*c*d-i*l*d)+m*(+t*c*u-t*a*p-i*s*u+r*s*p+i*a*d-r*c*d)+h*(-o*a*d-t*l*u+t*a*f+o*s*u-r*s*f+r*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],w=u*m*c-_*f*c+_*l*p-a*m*p-u*l*h+a*f*h,E=g*f*c-d*m*c-g*l*p+s*m*p+d*l*h-s*f*h,b=d*_*c-g*u*c+g*a*p-s*_*p-d*a*h+s*u*h,A=g*u*l-d*_*l-g*a*f+s*_*f+d*a*m-s*u*m,D=t*w+r*E+o*b+i*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=w*R,e[1]=(_*f*i-u*m*i-_*o*p+r*m*p+u*o*h-r*f*h)*R,e[2]=(a*m*i-_*l*i+_*o*c-r*m*c-a*o*h+r*l*h)*R,e[3]=(u*l*i-a*f*i-u*o*c+r*f*c+a*o*p-r*l*p)*R,e[4]=E*R,e[5]=(d*m*i-g*f*i+g*o*p-t*m*p-d*o*h+t*f*h)*R,e[6]=(g*l*i-s*m*i-g*o*c+t*m*c+s*o*h-t*l*h)*R,e[7]=(s*f*i-d*l*i+d*o*c-t*f*c-s*o*p+t*l*p)*R,e[8]=b*R,e[9]=(g*u*i-d*_*i-g*r*p+t*_*p+d*r*h-t*u*h)*R,e[10]=(s*_*i-g*a*i+g*r*c-t*_*c-s*r*h+t*a*h)*R,e[11]=(d*a*i-s*u*i-d*r*c+t*u*c+s*r*p-t*a*p)*R,e[12]=A*R,e[13]=(d*_*o-g*u*o+g*r*f-t*_*f-d*r*m+t*u*m)*R,e[14]=(g*a*o-s*_*o-g*r*l+t*_*l+s*r*m-t*a*m)*R,e[15]=(s*u*o-d*a*o+d*r*l-t*u*l-s*r*f+t*a*f)*R,this}scale(e){const t=this.elements,r=e.x,o=e.y,i=e.z;return t[0]*=r,t[4]*=o,t[8]*=i,t[1]*=r,t[5]*=o,t[9]*=i,t[2]*=r,t[6]*=o,t[10]*=i,t[3]*=r,t[7]*=o,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),i=1-r,s=e.x,a=e.y,l=e.z,c=i*s,d=i*a;return this.set(c*s+r,c*a-o*l,c*l+o*a,0,c*a+o*l,d*a+r,d*l-o*s,0,c*l-o*a,d*l+o*s,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,i,s){return this.set(1,r,i,0,e,1,s,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,i=t._x,s=t._y,a=t._z,l=t._w,c=i+i,d=s+s,u=a+a,f=i*c,p=i*d,g=i*u,_=s*d,m=s*u,h=a*u,w=l*c,E=l*d,b=l*u,A=r.x,D=r.y,R=r.z;return o[0]=(1-(_+h))*A,o[1]=(p+b)*A,o[2]=(g-E)*A,o[3]=0,o[4]=(p-b)*D,o[5]=(1-(f+h))*D,o[6]=(m+w)*D,o[7]=0,o[8]=(g+E)*R,o[9]=(m-w)*R,o[10]=(1-(f+_))*R,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let i=xo.set(o[0],o[1],o[2]).length();const s=xo.set(o[4],o[5],o[6]).length(),a=xo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(i=-i),e.x=o[12],e.y=o[13],e.z=o[14],Sn.copy(this);const c=1/i,d=1/s,u=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=d,Sn.elements[5]*=d,Sn.elements[6]*=d,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),r.x=i,r.y=s,r.z=a,this}makePerspective(e,t,r,o,i,s,a=sr){const l=this.elements,c=2*i/(t-e),d=2*i/(r-o),u=(t+e)/(t-e),f=(r+o)/(r-o);let p,g;if(a===sr)p=-(s+i)/(s-i),g=-2*s*i/(s-i);else if(a===ia)p=-s/(s-i),g=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,o,i,s,a=sr){const l=this.elements,c=1/(t-e),d=1/(r-o),u=1/(s-i),f=(t+e)*c,p=(r+o)*d;let g,_;if(a===sr)g=(s+i)*u,_=-2*u;else if(a===ia)g=i*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const xo=new B,Sn=new Mt,xb=new B(0,0,0),Sb=new B(1,1,1),yr=new B,xs=new B,sn=new B,Su=new Mt,Mu=new co;class Gn{constructor(e=0,t=0,r=0,o=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,i=o[0],s=o[4],a=o[8],l=o[1],c=o[5],d=o[9],u=o[2],f=o[6],p=o[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,i)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mb=0;const Eu=new B,So=new co,Kn=new Mt,Ss=new B,li=new B,Eb=new B,wb=new co,wu=new B(1,0,0),Tu=new B(0,1,0),Cu=new B(0,0,1),Au={type:"added"},Tb={type:"removed"},Mo={type:"childadded",child:null},qa={type:"childremoved",child:null};class Vt extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new B,t=new Gn,r=new co,o=new B(1,1,1);function i(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Mt},normalMatrix:{value:new We}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return So.setFromAxisAngle(e,t),this.quaternion.multiply(So),this}rotateOnWorldAxis(e,t){return So.setFromAxisAngle(e,t),this.quaternion.premultiply(So),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Eu.copy(e).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ss.copy(e):Ss.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(li,Ss,this.up):Kn.lookAt(Ss,li,this.up),this.quaternion.setFromRotationMatrix(Kn),o&&(Kn.extractRotation(o.matrixWorld),So.setFromRotationMatrix(Kn),this.quaternion.premultiply(So.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tb),qa.child=e,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let i=0,s=o.length;i<s;i++)o[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,e,Eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,wb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let i=0,s=o.length;i<s;i++)o[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(a=>({...a})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function i(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=i(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];i(e.shapes,u)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(i(e.materials,this.material[l]));o.material=a}else o.material=i(e.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];o.animations.push(i(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),u=s(e.shapes),f=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),d.length>0&&(r.images=d),u.length>0&&(r.shapes=u),f.length>0&&(r.skeletons=f),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=o,r;function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Vt.DEFAULT_UP=new B(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new B,Zn=new B,Ka=new B,Jn=new B,Eo=new B,wo=new B,Ru=new B,Za=new B,Ja=new B,Qa=new B,el=new ct,tl=new ct,nl=new ct;class wn{constructor(e=new B,t=new B,r=new B){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mn.subVectors(e,t),o.cross(Mn);const i=o.lengthSq();return i>0?o.multiplyScalar(1/Math.sqrt(i)):o.set(0,0,0)}static getBarycoord(e,t,r,o,i){Mn.subVectors(o,t),Zn.subVectors(r,t),Ka.subVectors(e,t);const s=Mn.dot(Mn),a=Mn.dot(Zn),l=Mn.dot(Ka),c=Zn.dot(Zn),d=Zn.dot(Ka),u=s*c-a*a;if(u===0)return i.set(0,0,0),null;const f=1/u,p=(c*l-a*d)*f,g=(s*d-a*l)*f;return i.set(1-p-g,g,p)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,r,o,i,s,a,l){return this.getBarycoord(e,t,r,o,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,Jn.x),l.addScaledVector(s,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(e,t,r,o,i,s){return el.setScalar(0),tl.setScalar(0),nl.setScalar(0),el.fromBufferAttribute(e,t),tl.fromBufferAttribute(e,r),nl.fromBufferAttribute(e,o),s.setScalar(0),s.addScaledVector(el,i.x),s.addScaledVector(tl,i.y),s.addScaledVector(nl,i.z),s}static isFrontFacing(e,t,r,o){return Mn.subVectors(r,t),Zn.subVectors(e,t),Mn.cross(Zn).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Mn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,i){return wn.getInterpolation(e,this.a,this.b,this.c,t,r,o,i)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,i=this.c;let s,a;Eo.subVectors(o,r),wo.subVectors(i,r),Za.subVectors(e,r);const l=Eo.dot(Za),c=wo.dot(Za);if(l<=0&&c<=0)return t.copy(r);Ja.subVectors(e,o);const d=Eo.dot(Ja),u=wo.dot(Ja);if(d>=0&&u<=d)return t.copy(o);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(r).addScaledVector(Eo,s);Qa.subVectors(e,i);const p=Eo.dot(Qa),g=wo.dot(Qa);if(g>=0&&p<=g)return t.copy(i);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(r).addScaledVector(wo,a);const m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return Ru.subVectors(i,o),a=(u-d)/(u-d+(p-g)),t.copy(o).addScaledVector(Ru,a);const h=1/(m+_+f);return s=_*h,a=f*h,t.copy(r).addScaledVector(Eo,s).addScaledVector(wo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function rl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,tt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=tt.workingColorSpace){if(e=lb(e,1),t=je(t,0,1),r=je(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,s=2*r-i;this.r=rl(s,i,e+1/3),this.g=rl(s,i,e),this.b=rl(s,i,e-1/3)}return tt.colorSpaceToWorking(this,o),this}setStyle(e,t=cn){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=o[1],a=o[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=o[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const r=_p[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=jo(e.r),this.g=jo(e.g),this.b=jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return tt.workingToColorSpace(Ft.copy(this),e),Math.round(je(Ft.r*255,0,255))*65536+Math.round(je(Ft.g*255,0,255))*256+Math.round(je(Ft.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ft.copy(this),t);const r=Ft.r,o=Ft.g,i=Ft.b,s=Math.max(r,o,i),a=Math.min(r,o,i);let l,c;const d=(a+s)/2;if(a===s)l=0,c=0;else{const u=s-a;switch(c=d<=.5?u/(s+a):u/(2-s-a),s){case r:l=(o-i)/u+(o<i?6:0);break;case o:l=(i-r)/u+2;break;case i:l=(r-o)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=cn){tt.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,r=Ft.g,o=Ft.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(Ms);const r=Fa(xr.h,Ms.h,t),o=Fa(xr.s,Ms.s,t),i=Fa(xr.l,Ms.l,t);return this.setHSL(r,o,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*o,this.g=i[1]*t+i[4]*r+i[7]*o,this.b=i[2]*t+i[5]*r+i[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Je;Je.NAMES=_p;let Cb=0;class rs extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Wo,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Ol,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Wo&&(r.blending=this.blending),this.side!==Fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ul&&(r.blendSrc=this.blendSrc),this.blendDst!==Ol&&(r.blendDst=this.blendDst),this.blendEquation!==to&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(r.stencilFail=this.stencilFail),this.stencilZFail!==go&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(i){const s=[];for(const a in i){const l=i[a];delete l.metadata,s.push(l)}return s}if(t){const i=o(e.textures),s=o(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let i=0;i!==o;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ya extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new B,Es=new ze;let Ab=0;class zn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ab++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=gu,this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,i=this.itemSize;o<i;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ii(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Qt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),r=Qt(r,this.array),o=Qt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),r=Qt(r,this.array),o=Qt(o,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),e}}class yp extends zn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class xp extends zn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $n extends zn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Rb=0;const gn=new Mt,ol=new Vt,To=new B,an=new ns,ci=new ns,kt=new B;class Hr extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mp(e)?xp:yp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new We().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,r){return gn.makeTranslation(e,t,r),this.applyMatrix4(gn),this}scale(e,t,r){return gn.makeScale(e,t,r),this.applyMatrix4(gn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,i=e.length;o<i;o++){const s=e[o];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new $n(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const i=e[o];t.setXYZ(o,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const i=t[r];an.setFromBufferAttribute(i),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ad);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const r=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ci.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(an.min,ci.min),an.expandByPoint(kt),kt.addVectors(an.max,ci.max),an.expandByPoint(kt)):(an.expandByPoint(ci.min),an.expandByPoint(ci.max))}an.getCenter(r);let o=0;for(let i=0,s=e.count;i<s;i++)kt.fromBufferAttribute(e,i),o=Math.max(o,r.distanceToSquared(kt));if(t)for(let i=0,s=t.length;i<s;i++){const a=t[i],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)kt.fromBufferAttribute(a,c),l&&(To.fromBufferAttribute(e,c),kt.add(To)),o=Math.max(o,r.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<r.count;U++)a[U]=new B,l[U]=new B;const c=new B,d=new B,u=new B,f=new ze,p=new ze,g=new ze,_=new B,m=new B;function h(U,T,M){c.fromBufferAttribute(r,U),d.fromBufferAttribute(r,T),u.fromBufferAttribute(r,M),f.fromBufferAttribute(i,U),p.fromBufferAttribute(i,T),g.fromBufferAttribute(i,M),d.sub(c),u.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(L),a[U].add(_),a[T].add(_),a[M].add(_),l[U].add(m),l[T].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,T=w.length;U<T;++U){const M=w[U],L=M.start,V=M.count;for(let H=L,te=L+V;H<te;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new B,b=new B,A=new B,D=new B;function R(U){A.fromBufferAttribute(o,U),D.copy(A);const T=a[U];E.copy(T),E.sub(A.multiplyScalar(A.dot(T))).normalize(),b.crossVectors(D,T);const L=b.dot(l[U])<0?-1:1;s.setXYZW(U,E.x,E.y,E.z,L)}for(let U=0,T=w.length;U<T;++U){const M=w[U],L=M.start,V=M.count;for(let H=L,te=L+V;H<te;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,p=r.count;f<p;f++)r.setXYZ(f,0,0,0);const o=new B,i=new B,s=new B,a=new B,l=new B,c=new B,d=new B,u=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);o.fromBufferAttribute(t,g),i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),d.subVectors(s,i),u.subVectors(o,i),d.cross(u),a.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,m),a.add(d),l.add(d),c.add(d),r.setXYZ(g,a.x,a.y,a.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)o.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),d.subVectors(s,i),u.subVectors(o,i),d.cross(u),r.setXYZ(f+0,d.x,d.y,d.z),r.setXYZ(f+1,d.x,d.y,d.z),r.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*d;for(let h=0;h<d;h++)f[g++]=c[p++]}return new zn(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hr,r=this.index.array,o=this.attributes;for(const a in o){const l=o[a],c=e(l,r);t.setAttribute(a,c)}const i=this.morphAttributes;for(const a in i){const l=[],c=i[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=e(f,r);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const o={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(o[l]=d,i=!0)}i&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const c in o){const d=o[c];this.setAttribute(c,d.clone(t))}const i=e.morphAttributes;for(const c in i){const d=[],u=i[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new Mt,qr=new vp,ws=new ad,Du=new B,Ts=new B,Cs=new B,As=new B,il=new B,Rs=new B,Lu=new B,Ps=new B;class St extends Vt{constructor(e=new Hr,t=new ya){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=o.length;i<s;i++){const a=o[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const a=this.morphTargetInfluences;if(i&&a){Rs.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const d=a[l],u=i[l];d!==0&&(il.fromBufferAttribute(u,e),s?Rs.addScaledVector(il,d):Rs.addScaledVector(il.sub(t),d))}t.add(Rs)}return t}raycast(e,t){const r=this.geometry,o=this.material,i=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ws.copy(r.boundingSphere),ws.applyMatrix4(i),qr.copy(e.ray).recast(e.near),!(ws.containsPoint(qr.origin)===!1&&(qr.intersectSphere(ws,Du)===null||qr.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Pu.copy(i).invert(),qr.copy(e.ray).applyMatrix4(Pu),!(r.boundingBox!==null&&qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,r){let o;const i=this.geometry,s=this.material,a=i.index,l=i.attributes.position,c=i.attributes.uv,d=i.attributes.uv1,u=i.attributes.normal,f=i.groups,p=i.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=s[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=w,A=E;b<A;b+=3){const D=a.getX(b),R=a.getX(b+1),U=a.getX(b+2);o=Ds(this,h,e,r,c,d,u,D,R,U),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const w=a.getX(m),E=a.getX(m+1),b=a.getX(m+2);o=Ds(this,s,e,r,c,d,u,w,E,b),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=s[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=w,A=E;b<A;b+=3){const D=b,R=b+1,U=b+2;o=Ds(this,h,e,r,c,d,u,D,R,U),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const w=m,E=m+1,b=m+2;o=Ds(this,s,e,r,c,d,u,w,E,b),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Pb(n,e,t,r,o,i,s,a){let l;if(e.side===Kt?l=r.intersectTriangle(s,i,o,!0,a):l=r.intersectTriangle(o,i,s,e.side===Fr,a),l===null)return null;Ps.copy(a),Ps.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ps);return c<t.near||c>t.far?null:{distance:c,point:Ps.clone(),object:n}}function Ds(n,e,t,r,o,i,s,a,l,c){n.getVertexPosition(a,Ts),n.getVertexPosition(l,Cs),n.getVertexPosition(c,As);const d=Pb(n,e,t,r,Ts,Cs,As,Lu);if(d){const u=new B;wn.getBarycoord(Lu,Ts,Cs,As,u),o&&(d.uv=wn.getInterpolatedAttribute(o,a,l,c,u,new ze)),i&&(d.uv1=wn.getInterpolatedAttribute(i,a,l,c,u,new ze)),s&&(d.normal=wn.getInterpolatedAttribute(s,a,l,c,u,new B),d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};wn.getNormal(Ts,Cs,As,f.normal),d.face=f,d.barycoord=u}return d}class cr extends Hr{constructor(e=1,t=1,r=1,o=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:i,depthSegments:s};const a=this;o=Math.floor(o),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],d=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,r,t,e,s,i,0),g("z","y","x",1,-1,r,t,-e,s,i,1),g("x","z","y",1,1,e,r,t,o,s,2),g("x","z","y",1,-1,e,r,-t,o,s,3),g("x","y","z",1,-1,e,t,r,o,i,4),g("x","y","z",-1,-1,e,t,-r,o,i,5),this.setIndex(l),this.setAttribute("position",new $n(c,3)),this.setAttribute("normal",new $n(d,3)),this.setAttribute("uv",new $n(u,2));function g(_,m,h,w,E,b,A,D,R,U,T){const M=b/R,L=A/U,V=b/2,H=A/2,te=D/2,re=R+1,K=U+1;let J=0,F=0;const ue=new B;for(let he=0;he<K;he++){const be=he*L-H;for(let ke=0;ke<re;ke++){const Ze=ke*M-V;ue[_]=Ze*w,ue[m]=be*E,ue[h]=te,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[h]=D>0?1:-1,d.push(ue.x,ue.y,ue.z),u.push(ke/R),u.push(1-he/U),J+=1}}for(let he=0;he<U;he++)for(let be=0;be<R;be++){const ke=f+be+re*he,Ze=f+be+re*(he+1),ee=f+(be+1)+re*(he+1),fe=f+(be+1)+re*he;l.push(ke,Ze,fe),l.push(Ze,ee,fe),F+=6}a.addGroup(p,F,T),p+=F,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ei(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const r=ei(n[t]);for(const o in r)e[o]=r[o]}return e}function Db(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Lb={clone:ei,merge:jt};var kb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ib=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kb,this.fragmentShader=Ib,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ei(e.uniforms),this.uniformsGroups=Db(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const s=this.uniforms[o].value;s&&s.isTexture?t.uniforms[o]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[o]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[o]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[o]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[o]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[o]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[o]={type:"m4",value:s.toArray()}:t.uniforms[o]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Mp extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new B,ku=new ze,Iu=new ze;class dn extends Mp{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_c*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,ku,Iu),t.subVectors(Iu,ku)}setViewOffset(e,t,r,o,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,i=-.5*o;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*o/l,t-=s.offsetY*r/c,o*=s.width/l,r*=s.height/c}const a=this.filmOffset;a!==0&&(i+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Co=-90,Ao=1;class Ep extends Vt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new dn(Co,Ao,e,t);o.layers=this.layers,this.add(o);const i=new dn(Co,Ao,e,t);i.layers=this.layers,this.add(i);const s=new dn(Co,Ao,e,t);s.layers=this.layers,this.add(s);const a=new dn(Co,Ao,e,t);a.layers=this.layers,this.add(a);const l=new dn(Co,Ao,e,t);l.layers=this.layers,this.add(l);const c=new dn(Co,Ao,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,i,s,a,l]=t;for(const c of t)this.remove(c);if(e===sr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,i),e.setRenderTarget(r,1,o),e.render(t,s),e.setRenderTarget(r,2,o),e.render(t,a),e.setRenderTarget(r,3,o),e.render(t,l),e.setRenderTarget(r,4,o),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,o),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class wp extends Zt{constructor(e=[],t=Zo,r,o,i,s,a,l,c,d){super(e,t,r,o,i,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tp extends uo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new wp(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new cr(5,5,5),i=new zr({name:"CubemapFromEquirect",uniforms:ei(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kt,blending:Ur});i.uniforms.tEquirect.value=t;const s=new St(o,i),a=t.minFilter;return t.minFilter===ro&&(t.minFilter=Bn),new Ep(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,o);e.setRenderTarget(i)}}class oo extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ub={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,i=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,r),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&i!==null&&(o=i),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ub)))}return a!==null&&(a.visible=o!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new oo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Ob extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const al=new B,Nb=new B,Bb=new We;class Ar{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=al.subVectors(r,t).cross(Nb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(al),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/o;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Bb.getNormalMatrix(e),o=this.coplanarPoint(al).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new ad,Fb=new ze(.5,.5),Ls=new B;class ld{constructor(e=new Ar,t=new Ar,r=new Ar,o=new Ar,i=new Ar,s=new Ar){this.planes=[e,t,r,o,i,s]}set(e,t,r,o,i,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(o),a[4].copy(i),a[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=sr){const r=this.planes,o=e.elements,i=o[0],s=o[1],a=o[2],l=o[3],c=o[4],d=o[5],u=o[6],f=o[7],p=o[8],g=o[9],_=o[10],m=o[11],h=o[12],w=o[13],E=o[14],b=o[15];if(r[0].setComponents(l-i,f-c,m-p,b-h).normalize(),r[1].setComponents(l+i,f+c,m+p,b+h).normalize(),r[2].setComponents(l+s,f+d,m+g,b+w).normalize(),r[3].setComponents(l-s,f-d,m-g,b-w).normalize(),r[4].setComponents(l-a,f-u,m-_,b-E).normalize(),t===sr)r[5].setComponents(l+a,f+u,m+_,b+E).normalize();else if(t===ia)r[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const t=Fb.distanceTo(e.center);return Kr.radius=.7071067811865476+t,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ls.x=o.normal.x>0?e.max.x:e.min.x,Ls.y=o.normal.y>0?e.max.y:e.min.y,Ls.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fi extends Zt{constructor(e,t,r,o,i,s,a,l,c){super(e,t,r,o,i,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cp extends Zt{constructor(e,t,r=lo,o,i,s,a=Pn,l=Pn,c,d=Ni,u=1){if(d!==Ni&&d!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,o,i,s,a,l,d,r,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class os extends Hr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const i=e/2,s=t/2,a=Math.floor(r),l=Math.floor(o),c=a+1,d=l+1,u=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let h=0;h<d;h++){const w=h*f-s;for(let E=0;E<c;E++){const b=E*u-i;g.push(b,-w,0),_.push(0,0,1),m.push(E/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){const E=w+c*h,b=w+c*(h+1),A=w+1+c*(h+1),D=w+1+c*h;p.push(E,b,D),p.push(b,A,D)}this.setIndex(p),this.setAttribute("position",new $n(g,3)),this.setAttribute("normal",new $n(_,3)),this.setAttribute("uv",new $n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.widthSegments,e.heightSegments)}}class dr extends Hr{constructor(e=1,t=32,r=16,o=0,i=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:i,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(s+a,Math.PI);let c=0;const d=[],u=new B,f=new B,p=[],g=[],_=[],m=[];for(let h=0;h<=r;h++){const w=[],E=h/r;let b=0;h===0&&s===0?b=.5/t:h===r&&l===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){const D=A/t;u.x=-e*Math.cos(o+D*i)*Math.sin(s+E*a),u.y=e*Math.cos(s+E*a),u.z=e*Math.sin(o+D*i)*Math.sin(s+E*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(D+b,1-E),w.push(c++)}d.push(w)}for(let h=0;h<r;h++)for(let w=0;w<t;w++){const E=d[h][w+1],b=d[h][w],A=d[h+1][w],D=d[h+1][w+1];(h!==0||s>0)&&p.push(E,b,D),(h!==r-1||l<Math.PI)&&p.push(b,A,D)}this.setIndex(p),this.setAttribute("position",new $n(g,3)),this.setAttribute("normal",new $n(_,3)),this.setAttribute("uv",new $n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $r extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hp,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zb extends $r{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $b extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hb extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cd extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ll=new Mt,Uu=new B,Ou=new B;class Ap{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ld,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uu),Ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ou),t.updateMatrixWorld(),ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nu=new Mt,di=new B,cl=new B;class Vb extends Ap{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),di.setFromMatrixPosition(e.matrixWorld),r.position.copy(di),cl.copy(r.position),cl.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(cl),r.updateMatrixWorld(),o.makeTranslation(-di.x,-di.y,-di.z),Nu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu)}}class Gb extends cd{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Vb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rp extends Mp{constructor(e=-1,t=1,r=1,o=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let i=r-e,s=r+e,a=o+t,l=o-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(i,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wb extends Ap{constructor(){super(new Rp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xb extends cd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Wb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jb extends cd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yb extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bu{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qb extends ho{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Fu(n,e,t,r){const o=Kb(r);switch(t){case lp:return n*e;case dp:return n*e/o.components*o.byteLength;case rd:return n*e/o.components*o.byteLength;case up:return n*e*2/o.components*o.byteLength;case od:return n*e*2/o.components*o.byteLength;case cp:return n*e*3/o.components*o.byteLength;case Cn:return n*e*4/o.components*o.byteLength;case id:return n*e*4/o.components*o.byteLength;case Hs:case Vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gs:case Ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:case Kl:return Math.max(n,16)*Math.max(e,8)/4;case jl:case ql:return Math.max(n,8)*Math.max(e,8)/2;case Zl:case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xs:case pc:case mc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fp:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vc:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kb(n){switch(n){case Vn:case ip:return{byteLength:1,components:1};case Ui:case sp:case es:return{byteLength:2,components:1};case td:case nd:return{byteLength:2,components:4};case lo:case ed:case ir:return{byteLength:4,components:1};case ap:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pp(){let n=null,e=!1,t=null,r=null;function o(i,s){t(i,s),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){n=i}}}function Zb(n){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function r(a,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function i(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:o,remove:i,update:s}}var Jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qb=`#ifdef USE_ALPHAHASH
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
#endif`,e_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o_=`#ifdef USE_AOMAP
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
#endif`,i_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s_=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,a_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u_=`#ifdef USE_IRIDESCENCE
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
#endif`,f_=`#ifdef USE_BUMPMAP
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
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,y_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,x_=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,S_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M_=`vec3 transformedNormal = objectNormal;
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
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A_="gl_FragColor = linearToOutputTexel( gl_FragColor );",R_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P_=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L_=`#ifdef USE_ENVMAP
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
#endif`,k_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
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
#endif`,U_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
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
}`,z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V_=`uniform bool receiveShadow;
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
#endif`,G_=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,W_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,K_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Z_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ty=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ay=`#if defined( USE_POINTS_UV )
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
#endif`,ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
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
#endif`,py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yy=`#ifdef USE_NORMALMAP
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
#endif`,xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,My=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ty=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Oy=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,By=`#ifdef USE_SKINNING
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
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wy=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xy=`#ifdef USE_TRANSMISSION
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jy=`uniform sampler2D t2D;
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ix=`#define DISTANCE
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
}`,sx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,fx=`uniform vec3 diffuse;
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
}`,hx=`#define LAMBERT
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
}`,px=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,mx=`#define MATCAP
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
}`,gx=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,bx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_x=`#define PHONG
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
}`,yx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,xx=`#define STANDARD
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
}`,Sx=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Mx=`#define TOON
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
}`,Ex=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wx=`uniform float size;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Ax=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Rx=`uniform float rotation;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Jb,alphahash_pars_fragment:Qb,alphamap_fragment:e_,alphamap_pars_fragment:t_,alphatest_fragment:n_,alphatest_pars_fragment:r_,aomap_fragment:o_,aomap_pars_fragment:i_,batching_pars_vertex:s_,batching_vertex:a_,begin_vertex:l_,beginnormal_vertex:c_,bsdfs:d_,iridescence_fragment:u_,bumpmap_pars_fragment:f_,clipping_planes_fragment:h_,clipping_planes_pars_fragment:p_,clipping_planes_pars_vertex:m_,clipping_planes_vertex:g_,color_fragment:v_,color_pars_fragment:b_,color_pars_vertex:__,color_vertex:y_,common:x_,cube_uv_reflection_fragment:S_,defaultnormal_vertex:M_,displacementmap_pars_vertex:E_,displacementmap_vertex:w_,emissivemap_fragment:T_,emissivemap_pars_fragment:C_,colorspace_fragment:A_,colorspace_pars_fragment:R_,envmap_fragment:P_,envmap_common_pars_fragment:D_,envmap_pars_fragment:L_,envmap_pars_vertex:k_,envmap_physical_pars_fragment:G_,envmap_vertex:I_,fog_vertex:U_,fog_pars_vertex:O_,fog_fragment:N_,fog_pars_fragment:B_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:z_,lights_lambert_fragment:$_,lights_lambert_pars_fragment:H_,lights_pars_begin:V_,lights_toon_fragment:W_,lights_toon_pars_fragment:X_,lights_phong_fragment:j_,lights_phong_pars_fragment:Y_,lights_physical_fragment:q_,lights_physical_pars_fragment:K_,lights_fragment_begin:Z_,lights_fragment_maps:J_,lights_fragment_end:Q_,logdepthbuf_fragment:ey,logdepthbuf_pars_fragment:ty,logdepthbuf_pars_vertex:ny,logdepthbuf_vertex:ry,map_fragment:oy,map_pars_fragment:iy,map_particle_fragment:sy,map_particle_pars_fragment:ay,metalnessmap_fragment:ly,metalnessmap_pars_fragment:cy,morphinstance_vertex:dy,morphcolor_vertex:uy,morphnormal_vertex:fy,morphtarget_pars_vertex:hy,morphtarget_vertex:py,normal_fragment_begin:my,normal_fragment_maps:gy,normal_pars_fragment:vy,normal_pars_vertex:by,normal_vertex:_y,normalmap_pars_fragment:yy,clearcoat_normal_fragment_begin:xy,clearcoat_normal_fragment_maps:Sy,clearcoat_pars_fragment:My,iridescence_pars_fragment:Ey,opaque_fragment:wy,packing:Ty,premultiplied_alpha_fragment:Cy,project_vertex:Ay,dithering_fragment:Ry,dithering_pars_fragment:Py,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Ly,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:Iy,shadowmap_vertex:Uy,shadowmask_pars_fragment:Oy,skinbase_vertex:Ny,skinning_pars_vertex:By,skinning_vertex:Fy,skinnormal_vertex:zy,specularmap_fragment:$y,specularmap_pars_fragment:Hy,tonemapping_fragment:Vy,tonemapping_pars_fragment:Gy,transmission_fragment:Wy,transmission_pars_fragment:Xy,uv_pars_fragment:jy,uv_pars_vertex:Yy,uv_vertex:qy,worldpos_vertex:Ky,background_vert:Zy,background_frag:Jy,backgroundCube_vert:Qy,backgroundCube_frag:ex,cube_vert:tx,cube_frag:nx,depth_vert:rx,depth_frag:ox,distanceRGBA_vert:ix,distanceRGBA_frag:sx,equirect_vert:ax,equirect_frag:lx,linedashed_vert:cx,linedashed_frag:dx,meshbasic_vert:ux,meshbasic_frag:fx,meshlambert_vert:hx,meshlambert_frag:px,meshmatcap_vert:mx,meshmatcap_frag:gx,meshnormal_vert:vx,meshnormal_frag:bx,meshphong_vert:_x,meshphong_frag:yx,meshphysical_vert:xx,meshphysical_frag:Sx,meshtoon_vert:Mx,meshtoon_frag:Ex,points_vert:wx,points_frag:Tx,shadow_vert:Cx,shadow_frag:Ax,sprite_vert:Rx,sprite_frag:Px},ve={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Un={basic:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:jt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:jt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:jt([ve.points,ve.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:jt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:jt([ve.common,ve.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:jt([ve.sprite,ve.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:jt([ve.common,ve.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:jt([ve.lights,ve.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Un.physical={uniforms:jt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ks={r:0,b:0,g:0},Zr=new Gn,Dx=new Mt;function Lx(n,e,t,r,o,i,s){const a=new Je(0);let l=i===!0?0:1,c,d,u=null,f=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function _(E){let b=!1;const A=g(E);A===null?h(a,l):A&&A.isColor&&(h(A,1),b=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,b){const A=g(b);A&&(A.isCubeTexture||A.mapping===_a)?(d===void 0&&(d=new St(new cr(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:ei(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),Zr.copy(b.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(Zr)),d.material.toneMapped=tt.getTransfer(A.colorSpace)!==st,(u!==A||f!==A.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=A,f=A.version,p=n.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new St(new os(2,2),new zr({name:"BackgroundMaterial",uniforms:ei(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=tt.getTransfer(A.colorSpace)!==st,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,b){E.getRGB(ks,Sp(n)),r.buffers.color.setClear(ks.r,ks.g,ks.b,b,s)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),l=b,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:_,addToRenderList:m,dispose:w}}function kx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=f(null);let i=o,s=!1;function a(M,L,V,H,te){let re=!1;const K=u(H,V,L);i!==K&&(i=K,c(i.object)),re=p(M,H,V,te),re&&g(M,H,V,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(re||s)&&(s=!1,b(M,L,V,H),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function d(M){return n.deleteVertexArray(M)}function u(M,L,V){const H=V.wireframe===!0;let te=r[M.id];te===void 0&&(te={},r[M.id]=te);let re=te[L.id];re===void 0&&(re={},te[L.id]=re);let K=re[H];return K===void 0&&(K=f(l()),re[H]=K),K}function f(M){const L=[],V=[],H=[];for(let te=0;te<t;te++)L[te]=0,V[te]=0,H[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,L,V,H){const te=i.attributes,re=L.attributes;let K=0;const J=V.getAttributes();for(const F in J)if(J[F].location>=0){const he=te[F];let be=re[F];if(be===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),he===void 0||he.attribute!==be||be&&he.data!==be.data)return!0;K++}return i.attributesNum!==K||i.index!==H}function g(M,L,V,H){const te={},re=L.attributes;let K=0;const J=V.getAttributes();for(const F in J)if(J[F].location>=0){let he=re[F];he===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const be={};be.attribute=he,he&&he.data&&(be.data=he.data),te[F]=be,K++}i.attributes=te,i.attributesNum=K,i.index=H}function _(){const M=i.newAttributes;for(let L=0,V=M.length;L<V;L++)M[L]=0}function m(M){h(M,0)}function h(M,L){const V=i.newAttributes,H=i.enabledAttributes,te=i.attributeDivisors;V[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),te[M]!==L&&(n.vertexAttribDivisor(M,L),te[M]=L)}function w(){const M=i.newAttributes,L=i.enabledAttributes;for(let V=0,H=L.length;V<H;V++)L[V]!==M[V]&&(n.disableVertexAttribArray(V),L[V]=0)}function E(M,L,V,H,te,re,K){K===!0?n.vertexAttribIPointer(M,L,V,te,re):n.vertexAttribPointer(M,L,V,H,te,re)}function b(M,L,V,H){_();const te=H.attributes,re=V.getAttributes(),K=L.defaultAttributeValues;for(const J in re){const F=re[J];if(F.location>=0){let ue=te[J];if(ue===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const he=ue.normalized,be=ue.itemSize,ke=e.get(ue);if(ke===void 0)continue;const Ze=ke.buffer,ee=ke.type,fe=ke.bytesPerElement,Te=ee===n.INT||ee===n.UNSIGNED_INT||ue.gpuType===ed;if(ue.isInterleavedBufferAttribute){const me=ue.data,Le=me.stride,Ye=ue.offset;if(me.isInstancedInterleavedBuffer){for(let Ie=0;Ie<F.locationSize;Ie++)h(F.location+Ie,me.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ie=0;Ie<F.locationSize;Ie++)m(F.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let Ie=0;Ie<F.locationSize;Ie++)E(F.location+Ie,be/F.locationSize,ee,he,Le*fe,(Ye+be/F.locationSize*Ie)*fe,Te)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<F.locationSize;me++)h(F.location+me,ue.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<F.locationSize;me++)m(F.location+me);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let me=0;me<F.locationSize;me++)E(F.location+me,be/F.locationSize,ee,he,be*fe,be/F.locationSize*me*fe,Te)}}else if(K!==void 0){const he=K[J];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(F.location,he);break;case 3:n.vertexAttrib3fv(F.location,he);break;case 4:n.vertexAttrib4fv(F.location,he);break;default:n.vertexAttrib1fv(F.location,he)}}}}w()}function A(){U();for(const M in r){const L=r[M];for(const V in L){const H=L[V];for(const te in H)d(H[te].object),delete H[te];delete L[V]}delete r[M]}}function D(M){if(r[M.id]===void 0)return;const L=r[M.id];for(const V in L){const H=L[V];for(const te in H)d(H[te].object),delete H[te];delete L[V]}delete r[M.id]}function R(M){for(const L in r){const V=r[L];if(V[M.id]===void 0)continue;const H=V[M.id];for(const te in H)d(H[te].object),delete H[te];delete V[M.id]}}function U(){T(),s=!0,i!==o&&(i=o,c(i.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Ix(n,e,t){let r;function o(c){r=c}function i(c,d){n.drawArrays(r,c,d),t.update(d,r,1)}function s(c,d,u){u!==0&&(n.drawArraysInstanced(r,c,d,u),t.update(d,r,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];t.update(p,r,1)}function l(c,d,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(r,c,0,d,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*f[_];t.update(g,r,1)}}this.setMode=o,this.render=i,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ux(n,e,t,r){let o;function i(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function s(R){return!(R!==Cn&&r.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const U=R===es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Vn&&r.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ir&&!U)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:A,maxSamples:D}}function Ox(n){const e=this;let t=null,r=0,o=!1,i=!1;const s=new Ar,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||r!==0||o;return o=f,r=u.length,p},this.beginShadows=function(){i=!0,d(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,h=n.get(u);if(!o||g===null||g.length===0||i&&!m)i?d(null):c();else{const w=i?0:r,E=w*4;let b=h.clippingState||null;l.value=b,b=d(g,f,E,p);for(let A=0;A!==E;++A)b[A]=t[A];h.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function d(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,b=p;E!==_;++E,b+=4)s.copy(u[E]).applyMatrix4(w,a),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Nx(n){let e=new WeakMap;function t(s,a){return a===Gl?s.mapping=Zo:a===Wl&&(s.mapping=Jo),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===Gl||a===Wl)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Tp(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",o),t(c.texture,s.mapping)}else return null}}return s}function o(s){const a=s.target;a.removeEventListener("dispose",o);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}const Oo=4,zu=[.125,.215,.35,.446,.526,.582],no=20,dl=new Rp,$u=new Je;let ul=null,fl=0,hl=0,pl=!1;const eo=(1+Math.sqrt(5))/2,Ro=1/eo,Hu=[new B(-eo,Ro,0),new B(eo,Ro,0),new B(-Ro,0,eo),new B(Ro,0,eo),new B(0,eo,-Ro),new B(0,eo,Ro),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Bx=new B;class Vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,i={}){const{size:s=256,position:a=Bx}=i;ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,fl,hl),this._renderer.xr.enabled=pl,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zo||e.mapping===Jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:es,format:Cn,colorSpace:Qo,depthBuffer:!1},o=Gu(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fx(i)),this._blurMaterial=zx(i,e,t)}return o}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,r,o,i){const l=new dn(90,1,t,r),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor($u),u.toneMapping=Or,u.autoClear=!1;const g=new ya({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),_=new St(new cr,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy($u),m=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(l.up.set(0,c[w],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x+d[w],i.y,i.z)):E===1?(l.up.set(0,0,c[w]),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y+d[w],i.z)):(l.up.set(0,c[w],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y,i.z+d[w]));const b=this._cubeSize;Is(o,E*b,w>2?b:0,b,b),u.setRenderTarget(o),m&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=h}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Zo||e.mapping===Jo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());const i=o?this._cubemapMaterial:this._equirectMaterial,s=new St(this._lodPlanes[0],i),a=i.uniforms;a.envMap.value=e;const l=this._cubeSize;Is(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,dl)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let i=1;i<o;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Hu[(o-i-1)%Hu.length];this._blur(e,i-1,i,s,a)}t.autoClear=r}_blur(e,t,r,o,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,o,"latitudinal",i),this._halfBlur(s,e,r,r,o,"longitudinal",i)}_halfBlur(e,t,r,o,i,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new St(this._lodPlanes[o],c),f=c.uniforms,p=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*p):2*Math.PI/(2*no-1),_=i/g,m=isFinite(i)?1+Math.floor(d*_):no;m>no&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${no}`);const h=[];let w=0;for(let R=0;R<no;++R){const U=R/_,T=Math.exp(-U*U/2);h.push(T),R===0?w+=T:R<m&&(w+=2*T)}for(let R=0;R<h.length;R++)h[R]=h[R]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-r;const b=this._sizeLods[o],A=3*b*(o>E-Oo?o-E+Oo:0),D=4*(this._cubeSize-b);Is(t,A,D,3*b,2*b),l.setRenderTarget(t),l.render(u,dl)}}function Fx(n){const e=[],t=[],r=[];let o=n;const i=n-Oo+1+zu.length;for(let s=0;s<i;s++){const a=Math.pow(2,o);t.push(a);let l=1/a;s>n-Oo?l=zu[s-n+Oo-1]:s===0&&(l=0),r.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,_=3,m=2,h=1,w=new Float32Array(_*g*p),E=new Float32Array(m*g*p),b=new Float32Array(h*g*p);for(let D=0;D<p;D++){const R=D%3*2/3-1,U=D>2?0:-1,T=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];w.set(T,_*g*D),E.set(f,m*g*D);const M=[D,D,D,D,D,D];b.set(M,h*g*D)}const A=new Hr;A.setAttribute("position",new zn(w,_)),A.setAttribute("uv",new zn(E,m)),A.setAttribute("faceIndex",new zn(b,h)),e.push(A),o>Oo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Gu(n,e,t){const r=new uo(n,e,t);return r.texture.mapping=_a,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Is(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function zx(n,e,t){const r=new Float32Array(no),o=new B(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:no,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:dd(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Wu(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Xu(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function dd(){return`

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
	`}function $x(n){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gl||l===Wl,d=l===Zo||l===Jo;if(c||d){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Vu(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&o(p)?(t===null&&(t=new Vu(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",i),u.texture):null}}}return a}function o(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function i(a){const l=a.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function Hx(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Xo("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function Vx(n,e,t,r){const o={},i=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete o[f.id];const p=i.get(f);p&&(e.remove(p),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return o[f.id]===!0||(f.addEventListener("dispose",s),o[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let E=0,b=w.length;E<b;E+=3){const A=w[E+0],D=w[E+1],R=w[E+2];f.push(A,D,D,R,R,A)}}else if(g!==void 0){const w=g.array;_=g.version;for(let E=0,b=w.length/3-1;E<b;E+=3){const A=E+0,D=E+1,R=E+2;f.push(A,D,D,R,R,A)}}else return;const m=new(mp(f)?xp:yp)(f,1);m.version=_;const h=i.get(u);h&&e.remove(h),i.set(u,m)}function d(u){const f=i.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return i.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Gx(n,e,t){let r;function o(f){r=f}let i,s;function a(f){i=f.type,s=f.bytesPerElement}function l(f,p){n.drawElements(r,p,i,f*s),t.update(p,r,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(r,p,i,f*s,g),t.update(p,r,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,i,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,r,1)}function u(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/s,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,i,f,0,_,0,g);let h=0;for(let w=0;w<g;w++)h+=p[w]*_[w];t.update(h,r,1)}}this.setMode=o,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Wx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(i/3);break;case n.LINES:t.lines+=a*(i/2);break;case n.LINE_STRIP:t.lines+=a*(i-1);break;case n.LINE_LOOP:t.lines+=a*i;break;case n.POINTS:t.points+=a*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Xx(n,e,t){const r=new WeakMap,o=new ct;function i(s,a,l){const c=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=r.get(a);if(f===void 0||f.count!==u){let M=function(){U.dispose(),r.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let A=a.attributes.position.count*b,D=1;A>e.maxTextureSize&&(D=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*D*4*u),U=new gp(R,A,D,u);U.type=ir,U.needsUpdate=!0;const T=b*4;for(let L=0;L<u;L++){const V=h[L],H=w[L],te=E[L],re=A*D*4*L;for(let K=0;K<V.count;K++){const J=K*T;g===!0&&(o.fromBufferAttribute(V,K),R[re+J+0]=o.x,R[re+J+1]=o.y,R[re+J+2]=o.z,R[re+J+3]=0),_===!0&&(o.fromBufferAttribute(H,K),R[re+J+4]=o.x,R[re+J+5]=o.y,R[re+J+6]=o.z,R[re+J+7]=0),m===!0&&(o.fromBufferAttribute(te,K),R[re+J+8]=o.x,R[re+J+9]=o.y,R[re+J+10]=o.z,R[re+J+11]=te.itemSize===4?o.w:1)}}f={count:u,texture:U,size:new ze(A,D)},r.set(a,f),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:i}}function jx(n,e,t,r){let o=new WeakMap;function i(l){const c=r.render.frame,d=l.geometry,u=e.get(l,d);if(o.get(u)!==c&&(e.update(u),o.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),o.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;o.get(f)!==c&&(f.update(),o.set(f,c))}return u}function s(){o=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:s}}const Dp=new Zt,ju=new Cp(1,1),Lp=new gp,kp=new _b,Ip=new wp,Yu=[],qu=[],Ku=new Float32Array(16),Zu=new Float32Array(9),Ju=new Float32Array(4);function ti(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let i=Yu[o];if(i===void 0&&(i=new Float32Array(o),Yu[o]=i),e!==0){r.toArray(i,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(i,a)}return i}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function xa(n,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function Yx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Jx(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,r))return;Ju.set(r),n.uniformMatrix2fv(this.addr,!1,Ju),Lt(t,r)}}function Qx(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,r))return;Zu.set(r),n.uniformMatrix3fv(this.addr,!1,Zu),Lt(t,r)}}function eS(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,r))return;Ku.set(r),n.uniformMatrix4fv(this.addr,!1,Ku),Lt(t,r)}}function tS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function oS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function iS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function aS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function cS(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let i;this.type===n.SAMPLER_2D_SHADOW?(ju.compareFunction=pp,i=ju):i=Dp,t.setTexture2D(e||i,o)}function dS(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||kp,o)}function uS(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Ip,o)}function fS(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Lp,o)}function hS(n){switch(n){case 5126:return Yx;case 35664:return qx;case 35665:return Kx;case 35666:return Zx;case 35674:return Jx;case 35675:return Qx;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return rS;case 35669:case 35673:return oS;case 5125:return iS;case 36294:return sS;case 36295:return aS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return fS}}function pS(n,e){n.uniform1fv(this.addr,e)}function mS(n,e){const t=ti(e,this.size,2);n.uniform2fv(this.addr,t)}function gS(n,e){const t=ti(e,this.size,3);n.uniform3fv(this.addr,t)}function vS(n,e){const t=ti(e,this.size,4);n.uniform4fv(this.addr,t)}function bS(n,e){const t=ti(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _S(n,e){const t=ti(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yS(n,e){const t=ti(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xS(n,e){n.uniform1iv(this.addr,e)}function SS(n,e){n.uniform2iv(this.addr,e)}function MS(n,e){n.uniform3iv(this.addr,e)}function ES(n,e){n.uniform4iv(this.addr,e)}function wS(n,e){n.uniform1uiv(this.addr,e)}function TS(n,e){n.uniform2uiv(this.addr,e)}function CS(n,e){n.uniform3uiv(this.addr,e)}function AS(n,e){n.uniform4uiv(this.addr,e)}function RS(n,e,t){const r=this.cache,o=e.length,i=xa(t,o);Dt(r,i)||(n.uniform1iv(this.addr,i),Lt(r,i));for(let s=0;s!==o;++s)t.setTexture2D(e[s]||Dp,i[s])}function PS(n,e,t){const r=this.cache,o=e.length,i=xa(t,o);Dt(r,i)||(n.uniform1iv(this.addr,i),Lt(r,i));for(let s=0;s!==o;++s)t.setTexture3D(e[s]||kp,i[s])}function DS(n,e,t){const r=this.cache,o=e.length,i=xa(t,o);Dt(r,i)||(n.uniform1iv(this.addr,i),Lt(r,i));for(let s=0;s!==o;++s)t.setTextureCube(e[s]||Ip,i[s])}function LS(n,e,t){const r=this.cache,o=e.length,i=xa(t,o);Dt(r,i)||(n.uniform1iv(this.addr,i),Lt(r,i));for(let s=0;s!==o;++s)t.setTexture2DArray(e[s]||Lp,i[s])}function kS(n){switch(n){case 5126:return pS;case 35664:return mS;case 35665:return gS;case 35666:return vS;case 35674:return bS;case 35675:return _S;case 35676:return yS;case 5124:case 35670:return xS;case 35667:case 35671:return SS;case 35668:case 35672:return MS;case 35669:case 35673:return ES;case 5125:return wS;case 36294:return TS;case 36295:return CS;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return LS}}class IS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=hS(t.type)}}class US{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kS(t.type)}}class OS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let i=0,s=o.length;i!==s;++i){const a=o[i];a.setValue(e,t[a.id],r)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function Qu(n,e){n.seq.push(e),n.map[e.id]=e}function NS(n,e,t){const r=n.name,o=r.length;for(ml.lastIndex=0;;){const i=ml.exec(r),s=ml.lastIndex;let a=i[1];const l=i[2]==="]",c=i[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===o){Qu(t,c===void 0?new IS(a,n,e):new US(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new OS(a),Qu(t,u)),t=u}}}class Ys{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const i=e.getActiveUniform(t,o),s=e.getUniformLocation(t,i.name);NS(i,s,this)}}setValue(e,t,r,o){const i=this.map[t];i!==void 0&&i.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let i=0,s=t.length;i!==s;++i){const a=t[i],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,i=e.length;o!==i;++o){const s=e[o];s.id in t&&r.push(s)}return r}}function ef(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const BS=37297;let FS=0;function zS(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=o;s<i;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return r.join(`
`)}const tf=new We;function $S(n){tt._getMatrix(tf,tt.workingColorSpace,n);const e=`mat3( ${tf.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case oa:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nf(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const i=/ERROR: 0:(\d+)/.exec(o);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+o+`

`+zS(n.getShaderSource(e),s)}else return o}function HS(n,e){const t=$S(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function VS(n,e){let t;switch(e){case Wv:t="Linear";break;case Xv:t="Reinhard";break;case jv:t="Cineon";break;case rp:t="ACESFilmic";break;case qv:t="AgX";break;case Kv:t="Neutral";break;case Yv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new B;function GS(){tt.getLuminanceCoefficients(Us);const n=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pi).join(`
`)}function XS(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function jS(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const i=n.getActiveAttrib(e,o),s=i.name;let a=1;i.type===n.FLOAT_MAT2&&(a=2),i.type===n.FLOAT_MAT3&&(a=3),i.type===n.FLOAT_MAT4&&(a=4),t[s]={type:i.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function pi(n){return n!==""}function rf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function of(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YS=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(n){return n.replace(YS,KS)}const qS=new Map;function KS(n,e){let t=Xe[e];if(t===void 0){const r=qS.get(e);if(r!==void 0)t=Xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const ZS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(n){return n.replace(ZS,JS)}function JS(n,e,t,r){let o="";for(let i=parseInt(e);i<parseInt(t);i++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return o}function af(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ep?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function eM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zo:case Jo:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Jo:e="ENVMAP_MODE_REFRACTION";break}return e}function nM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case np:e="ENVMAP_BLENDING_MULTIPLY";break;case Vv:e="ENVMAP_BLENDING_MIX";break;case Gv:e="ENVMAP_BLENDING_ADD";break}return e}function rM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function oM(n,e,t,r){const o=n.getContext(),i=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=QS(t),c=eM(t),d=tM(t),u=nM(t),f=rM(t),p=WS(t),g=XS(i),_=o.createProgram();let m,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pi).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pi).join(`
`),h.length>0&&(h+=`
`)):(m=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pi).join(`
`),h=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Or?VS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,HS("linearToOutputTexel",t.outputColorSpace),GS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pi).join(`
`)),s=yc(s),s=rf(s,t),s=of(s,t),a=yc(a),a=rf(a,t),a=of(a,t),s=sf(s),a=sf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=w+m+s,b=w+h+a,A=ef(o,o.VERTEX_SHADER,E),D=ef(o,o.FRAGMENT_SHADER,b);o.attachShader(_,A),o.attachShader(_,D),t.index0AttributeName!==void 0?o.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(_,0,"position"),o.linkProgram(_);function R(L){if(n.debug.checkShaderErrors){const V=o.getProgramInfoLog(_).trim(),H=o.getShaderInfoLog(A).trim(),te=o.getShaderInfoLog(D).trim();let re=!0,K=!0;if(o.getProgramParameter(_,o.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,_,A,D);else{const J=nf(o,A,"vertex"),F=nf(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(_,o.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+J+`
`+F)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||te==="")&&(K=!1);K&&(L.diagnostics={runnable:re,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:te,prefix:h}})}o.deleteShader(A),o.deleteShader(D),U=new Ys(o,_),T=jS(o,_)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=o.getProgramParameter(_,BS)),M},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=D,this}let iM=0;class sM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(o)===!1&&(s.add(o),o.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new aM(e),t.set(e,r)),r}}class aM{constructor(e){this.id=iM++,this.code=e,this.usedTimes=0}}function lM(n,e,t,r,o,i,s){const a=new bp,l=new sM,c=new Set,d=[],u=o.logarithmicDepthBuffer,f=o.vertexTextures;let p=o.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,L,V,H){const te=V.fog,re=H.geometry,K=T.isMeshStandardMaterial?V.environment:null,J=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),F=J&&J.mapping===_a?J.image.height:null,ue=g[T.type];T.precision!==null&&(p=o.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const he=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,be=he!==void 0?he.length:0;let ke=0;re.morphAttributes.position!==void 0&&(ke=1),re.morphAttributes.normal!==void 0&&(ke=2),re.morphAttributes.color!==void 0&&(ke=3);let Ze,ee,fe,Te;if(ue){const ot=Un[ue];Ze=ot.vertexShader,ee=ot.fragmentShader}else Ze=T.vertexShader,ee=T.fragmentShader,l.update(T),fe=l.getVertexShaderID(T),Te=l.getFragmentShaderID(T);const me=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Ye=H.isInstancedMesh===!0,Ie=H.isBatchedMesh===!0,ht=!!T.map,C=!!T.matcap,P=!!J,y=!!T.aoMap,oe=!!T.lightMap,Y=!!T.bumpMap,Q=!!T.normalMap,q=!!T.displacementMap,ne=!!T.emissiveMap,j=!!T.metalnessMap,X=!!T.roughnessMap,ge=T.anisotropy>0,x=T.clearcoat>0,v=T.dispersion>0,k=T.iridescence>0,$=T.sheen>0,Z=T.transmission>0,z=ge&&!!T.anisotropyMap,xe=x&&!!T.clearcoatMap,de=x&&!!T.clearcoatNormalMap,Se=x&&!!T.clearcoatRoughnessMap,Ee=k&&!!T.iridescenceMap,se=k&&!!T.iridescenceThicknessMap,Me=$&&!!T.sheenColorMap,Ae=$&&!!T.sheenRoughnessMap,Re=!!T.specularMap,pe=!!T.specularColorMap,Fe=!!T.specularIntensityMap,I=Z&&!!T.transmissionMap,_e=Z&&!!T.thicknessMap,ae=!!T.gradientMap,Ce=!!T.alphaMap,le=T.alphaTest>0,ie=!!T.alphaHash,Pe=!!T.extensions;let $e=Or;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&($e=n.toneMapping);const gt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:Ze,fragmentShader:ee,defines:T.defines,customVertexShaderID:fe,customFragmentShaderID:Te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&H._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&H.instanceColor!==null,instancingMorph:Ye&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Qo,alphaToCoverage:!!T.alphaToCoverage,map:ht,matcap:C,envMap:P,envMapMode:P&&J.mapping,envMapCubeUVHeight:F,aoMap:y,lightMap:oe,bumpMap:Y,normalMap:Q,displacementMap:f&&q,emissiveMap:ne,normalMapObjectSpace:Q&&T.normalMapType===eb,normalMapTangentSpace:Q&&T.normalMapType===hp,metalnessMap:j,roughnessMap:X,anisotropy:ge,anisotropyMap:z,clearcoat:x,clearcoatMap:xe,clearcoatNormalMap:de,clearcoatRoughnessMap:Se,dispersion:v,iridescence:k,iridescenceMap:Ee,iridescenceThicknessMap:se,sheen:$,sheenColorMap:Me,sheenRoughnessMap:Ae,specularMap:Re,specularColorMap:pe,specularIntensityMap:Fe,transmission:Z,transmissionMap:I,thicknessMap:_e,gradientMap:ae,opaque:T.transparent===!1&&T.blending===Wo&&T.alphaToCoverage===!1,alphaMap:Ce,alphaTest:le,alphaHash:ie,combine:T.combine,mapUv:ht&&_(T.map.channel),aoMapUv:y&&_(T.aoMap.channel),lightMapUv:oe&&_(T.lightMap.channel),bumpMapUv:Y&&_(T.bumpMap.channel),normalMapUv:Q&&_(T.normalMap.channel),displacementMapUv:q&&_(T.displacementMap.channel),emissiveMapUv:ne&&_(T.emissiveMap.channel),metalnessMapUv:j&&_(T.metalnessMap.channel),roughnessMapUv:X&&_(T.roughnessMap.channel),anisotropyMapUv:z&&_(T.anisotropyMap.channel),clearcoatMapUv:xe&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(T.sheenRoughnessMap.channel),specularMapUv:Re&&_(T.specularMap.channel),specularColorMapUv:pe&&_(T.specularColorMap.channel),specularIntensityMapUv:Fe&&_(T.specularIntensityMap.channel),transmissionMapUv:I&&_(T.transmissionMap.channel),thicknessMapUv:_e&&_(T.thicknessMap.channel),alphaMapUv:Ce&&_(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Q||ge),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!re.attributes.uv&&(ht||Ce),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Le,skinning:H.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:ht&&T.map.isVideoTexture===!0&&tt.getTransfer(T.map.colorSpace)===st,decodeVideoTextureEmissive:ne&&T.emissiveMap.isVideoTexture===!0&&tt.getTransfer(T.emissiveMap.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===rr,flipSided:T.side===Kt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&T.extensions.multiDraw===!0||Ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function h(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)M.push(L),M.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(w(M,T),E(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function w(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function E(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function b(T){const M=g[T.type];let L;if(M){const V=Un[M];L=Lb.clone(V.uniforms)}else L=T.uniforms;return L}function A(T,M){let L;for(let V=0,H=d.length;V<H;V++){const te=d[V];if(te.cacheKey===M){L=te,++L.usedTimes;break}}return L===void 0&&(L=new oM(n,M,T,i),d.push(L)),L}function D(T){if(--T.usedTimes===0){const M=d.indexOf(T);d[M]=d[d.length-1],d.pop(),T.destroy()}}function R(T){l.remove(T)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:A,releaseProgram:D,releaseShaderCache:R,programs:d,dispose:U}}function cM(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function r(s){n.delete(s)}function o(s,a,l){n.get(s)[a]=l}function i(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:i}}function dM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cf(){const n=[];let e=0;const t=[],r=[],o=[];function i(){e=0,t.length=0,r.length=0,o.length=0}function s(u,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=_,h.group=m),e++,h}function a(u,f,p,g,_,m){const h=s(u,f,p,g,_,m);p.transmission>0?r.push(h):p.transparent===!0?o.push(h):t.push(h)}function l(u,f,p,g,_,m){const h=s(u,f,p,g,_,m);p.transmission>0?r.unshift(h):p.transparent===!0?o.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||dM),r.length>1&&r.sort(f||lf),o.length>1&&o.sort(f||lf)}function d(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:r,transparent:o,init:i,push:a,unshift:l,finish:d,sort:c}}function uM(){let n=new WeakMap;function e(r,o){const i=n.get(r);let s;return i===void 0?(s=new cf,n.set(r,[s])):o>=i.length?(s=new cf,i.push(s)):s=i[o],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function fM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Je};break;case"SpotLight":t={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function hM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pM=0;function mM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gM(n){const e=new fM,t=hM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new B);const o=new B,i=new Mt,s=new Mt;function a(c){let d=0,u=0,f=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,w=0,E=0,b=0,A=0,D=0,R=0;c.sort(mM);for(let T=0,M=c.length;T<M;T++){const L=c[T],V=L.color,H=L.intensity,te=L.distance,re=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=V.r*H,u+=V.g*H,f+=V.b*H;else if(L.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(L.sh.coefficients[K],H);R++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,F=t.get(L);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,r.directionalShadow[p]=F,r.directionalShadowMap[p]=re,r.directionalShadowMatrix[p]=L.shadow.matrix,w++}r.directional[p]=K,p++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(V).multiplyScalar(H),K.distance=te,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,r.spot[_]=K;const J=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,J.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[_]=J.matrix,L.castShadow){const F=t.get(L);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,r.spotShadow[_]=F,r.spotShadowMap[_]=re,b++}_++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(V).multiplyScalar(H),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),r.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const J=L.shadow,F=t.get(L);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,r.pointShadow[g]=F,r.pointShadowMap[g]=re,r.pointShadowMatrix[g]=L.shadow.matrix,E++}r.point[g]=K,g++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(H),K.groundColor.copy(L.groundColor).multiplyScalar(H),r.hemi[h]=K,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2)),r.ambient[0]=d,r.ambient[1]=u,r.ambient[2]=f;const U=r.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==w||U.numPointShadows!==E||U.numSpotShadows!==b||U.numSpotMaps!==A||U.numLightProbes!==R)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=m,r.point.length=g,r.hemi.length=h,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=b+A-D,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=R,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=w,U.numPointShadows=E,U.numSpotShadows=b,U.numSpotMaps=A,U.numLightProbes=R,r.version=pM++)}function l(c,d){let u=0,f=0,p=0,g=0,_=0;const m=d.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const E=c[h];if(E.isDirectionalLight){const b=r.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(m),u++}else if(E.isSpotLight){const b=r.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const b=r.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),s.identity(),i.copy(E.matrixWorld),i.premultiply(m),s.extractRotation(i),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),g++}else if(E.isPointLight){const b=r.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const b=r.hemi[_];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:r}}function df(n){const e=new gM(n),t=[],r=[];function o(d){c.camera=d,t.length=0,r.length=0}function i(d){t.push(d)}function s(d){r.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:a,setupLightsView:l,pushLight:i,pushShadow:s}}function vM(n){let e=new WeakMap;function t(o,i=0){const s=e.get(o);let a;return s===void 0?(a=new df(n),e.set(o,[a])):i>=s.length?(a=new df(n),s.push(a)):a=s[i],a}function r(){e=new WeakMap}return{get:t,dispose:r}}const bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_M=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yM(n,e,t){let r=new ld;const o=new ze,i=new ze,s=new ct,a=new $b({depthPacking:Qv}),l=new Hb,c={},d=t.maxTextureSize,u={[Fr]:Kt,[Kt]:Fr,[rr]:rr},f=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:bM,fragmentShader:_M}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Hr;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ep;let h=this.type;this.render=function(D,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const T=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ur),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=h!==Qn&&this.type===Qn,te=h===Qn&&this.type!==Qn;for(let re=0,K=D.length;re<K;re++){const J=D[re],F=J.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const ue=F.getFrameExtents();if(o.multiply(ue),i.copy(F.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(i.x=Math.floor(d/ue.x),o.x=i.x*ue.x,F.mapSize.x=i.x),o.y>d&&(i.y=Math.floor(d/ue.y),o.y=i.y*ue.y,F.mapSize.y=i.y)),F.map===null||H===!0||te===!0){const be=this.type!==Qn?{minFilter:Pn,magFilter:Pn}:{};F.map!==null&&F.map.dispose(),F.map=new uo(o.x,o.y,be),F.map.texture.name=J.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const he=F.getViewportCount();for(let be=0;be<he;be++){const ke=F.getViewport(be);s.set(i.x*ke.x,i.y*ke.y,i.x*ke.z,i.y*ke.w),V.viewport(s),F.updateMatrices(J,be),r=F.getFrustum(),b(R,U,F.camera,J,this.type)}F.isPointLightShadow!==!0&&this.type===Qn&&w(F,U),F.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,L)};function w(D,R){const U=e.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new uo(o.x,o.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(R,null,U,f,_,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(R,null,U,p,_,null)}function E(D,R,U,T){let M=null;const L=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)M=L;else if(M=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const V=M.uuid,H=R.uuid;let te=c[V];te===void 0&&(te={},c[V]=te);let re=te[H];re===void 0&&(re=M.clone(),te[H]=re,R.addEventListener("dispose",A)),M=re}if(M.visible=R.visible,M.wireframe=R.wireframe,T===Qn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=n.properties.get(M);V.light=U}return M}function b(D,R,U,T,M){if(D.visible===!1)return;if(D.layers.test(R.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===Qn)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);const H=e.update(D),te=D.material;if(Array.isArray(te)){const re=H.groups;for(let K=0,J=re.length;K<J;K++){const F=re[K],ue=te[F.materialIndex];if(ue&&ue.visible){const he=E(D,ue,T,M);D.onBeforeShadow(n,D,R,U,H,he,F),n.renderBufferDirect(U,null,H,he,D,F),D.onAfterShadow(n,D,R,U,H,he,F)}}}else if(te.visible){const re=E(D,te,T,M);D.onBeforeShadow(n,D,R,U,H,re,null),n.renderBufferDirect(U,null,H,re,D,null),D.onAfterShadow(n,D,R,U,H,re,null)}}const V=D.children;for(let H=0,te=V.length;H<te;H++)b(V[H],R,U,T,M)}function A(D){D.target.removeEventListener("dispose",A);for(const U in c){const T=c[U],M=D.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const xM={[Nl]:Bl,[Fl]:Hl,[zl]:Vl,[Ko]:$l,[Bl]:Nl,[Hl]:Fl,[Vl]:zl,[$l]:Ko};function SM(n,e){function t(){let I=!1;const _e=new ct;let ae=null;const Ce=new ct(0,0,0,0);return{setMask:function(le){ae!==le&&!I&&(n.colorMask(le,le,le,le),ae=le)},setLocked:function(le){I=le},setClear:function(le,ie,Pe,$e,gt){gt===!0&&(le*=$e,ie*=$e,Pe*=$e),_e.set(le,ie,Pe,$e),Ce.equals(_e)===!1&&(n.clearColor(le,ie,Pe,$e),Ce.copy(_e))},reset:function(){I=!1,ae=null,Ce.set(-1,0,0,0)}}}function r(){let I=!1,_e=!1,ae=null,Ce=null,le=null;return{setReversed:function(ie){if(_e!==ie){const Pe=e.get("EXT_clip_control");ie?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),_e=ie;const $e=le;le=null,this.setClear($e)}},getReversed:function(){return _e},setTest:function(ie){ie?me(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(ie){ae!==ie&&!I&&(n.depthMask(ie),ae=ie)},setFunc:function(ie){if(_e&&(ie=xM[ie]),Ce!==ie){switch(ie){case Nl:n.depthFunc(n.NEVER);break;case Bl:n.depthFunc(n.ALWAYS);break;case Fl:n.depthFunc(n.LESS);break;case Ko:n.depthFunc(n.LEQUAL);break;case zl:n.depthFunc(n.EQUAL);break;case $l:n.depthFunc(n.GEQUAL);break;case Hl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=ie}},setLocked:function(ie){I=ie},setClear:function(ie){le!==ie&&(_e&&(ie=1-ie),n.clearDepth(ie),le=ie)},reset:function(){I=!1,ae=null,Ce=null,le=null,_e=!1}}}function o(){let I=!1,_e=null,ae=null,Ce=null,le=null,ie=null,Pe=null,$e=null,gt=null;return{setTest:function(ot){I||(ot?me(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(ot){_e!==ot&&!I&&(n.stencilMask(ot),_e=ot)},setFunc:function(ot,_n,Wn){(ae!==ot||Ce!==_n||le!==Wn)&&(n.stencilFunc(ot,_n,Wn),ae=ot,Ce=_n,le=Wn)},setOp:function(ot,_n,Wn){(ie!==ot||Pe!==_n||$e!==Wn)&&(n.stencilOp(ot,_n,Wn),ie=ot,Pe=_n,$e=Wn)},setLocked:function(ot){I=ot},setClear:function(ot){gt!==ot&&(n.clearStencil(ot),gt=ot)},reset:function(){I=!1,_e=null,ae=null,Ce=null,le=null,ie=null,Pe=null,$e=null,gt=null}}}const i=new t,s=new r,a=new o,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,w=null,E=null,b=null,A=null,D=null,R=new Je(0,0,0),U=0,T=!1,M=null,L=null,V=null,H=null,te=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,J=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(F)[1]),K=J>=1):F.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),K=J>=2);let ue=null,he={};const be=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),Ze=new ct().fromArray(be),ee=new ct().fromArray(ke);function fe(I,_e,ae,Ce){const le=new Uint8Array(4),ie=n.createTexture();n.bindTexture(I,ie),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<ae;Pe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(_e+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ie}const Te={};Te[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),me(n.DEPTH_TEST),s.setFunc(Ko),Y(!1),Q(uu),me(n.CULL_FACE),y(Ur);function me(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function Le(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function Ye(I,_e){return u[I]!==_e?(n.bindFramebuffer(I,_e),u[I]=_e,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_e),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ie(I,_e){let ae=p,Ce=!1;if(I){ae=f.get(_e),ae===void 0&&(ae=[],f.set(_e,ae));const le=I.textures;if(ae.length!==le.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Pe=le.length;ie<Pe;ie++)ae[ie]=n.COLOR_ATTACHMENT0+ie;ae.length=le.length,Ce=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(ae)}function ht(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const C={[to]:n.FUNC_ADD,[Tv]:n.FUNC_SUBTRACT,[Cv]:n.FUNC_REVERSE_SUBTRACT};C[Av]=n.MIN,C[Rv]=n.MAX;const P={[Pv]:n.ZERO,[Dv]:n.ONE,[Lv]:n.SRC_COLOR,[Ul]:n.SRC_ALPHA,[Bv]:n.SRC_ALPHA_SATURATE,[Ov]:n.DST_COLOR,[Iv]:n.DST_ALPHA,[kv]:n.ONE_MINUS_SRC_COLOR,[Ol]:n.ONE_MINUS_SRC_ALPHA,[Nv]:n.ONE_MINUS_DST_COLOR,[Uv]:n.ONE_MINUS_DST_ALPHA,[Fv]:n.CONSTANT_COLOR,[zv]:n.ONE_MINUS_CONSTANT_COLOR,[$v]:n.CONSTANT_ALPHA,[Hv]:n.ONE_MINUS_CONSTANT_ALPHA};function y(I,_e,ae,Ce,le,ie,Pe,$e,gt,ot){if(I===Ur){_===!0&&(Le(n.BLEND),_=!1);return}if(_===!1&&(me(n.BLEND),_=!0),I!==wv){if(I!==m||ot!==T){if((h!==to||b!==to)&&(n.blendEquation(n.FUNC_ADD),h=to,b=to),ot)switch(I){case Wo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fu:n.blendFunc(n.ONE,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,E=null,A=null,D=null,R.set(0,0,0),U=0,m=I,T=ot}return}le=le||_e,ie=ie||ae,Pe=Pe||Ce,(_e!==h||le!==b)&&(n.blendEquationSeparate(C[_e],C[le]),h=_e,b=le),(ae!==w||Ce!==E||ie!==A||Pe!==D)&&(n.blendFuncSeparate(P[ae],P[Ce],P[ie],P[Pe]),w=ae,E=Ce,A=ie,D=Pe),($e.equals(R)===!1||gt!==U)&&(n.blendColor($e.r,$e.g,$e.b,gt),R.copy($e),U=gt),m=I,T=!1}function oe(I,_e){I.side===rr?Le(n.CULL_FACE):me(n.CULL_FACE);let ae=I.side===Kt;_e&&(ae=!ae),Y(ae),I.blending===Wo&&I.transparent===!1?y(Ur):y(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),i.setMask(I.colorWrite);const Ce=I.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Q(I){I!==Mv?(me(n.CULL_FACE),I!==L&&(I===uu?n.cullFace(n.BACK):I===Ev?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),L=I}function q(I){I!==V&&(K&&n.lineWidth(I),V=I)}function ne(I,_e,ae){I?(me(n.POLYGON_OFFSET_FILL),(H!==_e||te!==ae)&&(n.polygonOffset(_e,ae),H=_e,te=ae)):Le(n.POLYGON_OFFSET_FILL)}function j(I){I?me(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function X(I){I===void 0&&(I=n.TEXTURE0+re-1),ue!==I&&(n.activeTexture(I),ue=I)}function ge(I,_e,ae){ae===void 0&&(ue===null?ae=n.TEXTURE0+re-1:ae=ue);let Ce=he[ae];Ce===void 0&&(Ce={type:void 0,texture:void 0},he[ae]=Ce),(Ce.type!==I||Ce.texture!==_e)&&(ue!==ae&&(n.activeTexture(ae),ue=ae),n.bindTexture(I,_e||Te[I]),Ce.type=I,Ce.texture=_e)}function x(){const I=he[ue];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(I){Ze.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function Ae(I){ee.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ee.copy(I))}function Re(I,_e){let ae=c.get(_e);ae===void 0&&(ae=new WeakMap,c.set(_e,ae));let Ce=ae.get(I);Ce===void 0&&(Ce=n.getUniformBlockIndex(_e,I.name),ae.set(I,Ce))}function pe(I,_e){const Ce=c.get(_e).get(I);l.get(_e)!==Ce&&(n.uniformBlockBinding(_e,Ce,I.__bindingPointIndex),l.set(_e,Ce))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ue=null,he={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,w=null,E=null,b=null,A=null,D=null,R=new Je(0,0,0),U=0,T=!1,M=null,L=null,V=null,H=null,te=null,Ze.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:me,disable:Le,bindFramebuffer:Ye,drawBuffers:Ie,useProgram:ht,setBlending:y,setMaterial:oe,setFlipSided:Y,setCullFace:Q,setLineWidth:q,setPolygonOffset:ne,setScissorTest:j,activeTexture:X,bindTexture:ge,unbindTexture:x,compressedTexImage2D:v,compressedTexImage3D:k,texImage2D:Ee,texImage3D:se,updateUBOMapping:Re,uniformBlockBinding:pe,texStorage2D:de,texStorage3D:Se,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:z,compressedTexSubImage3D:xe,scissor:Me,viewport:Ae,reset:Fe}}function MM(n,e,t,r,o,i,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,d=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,v){return p?new OffscreenCanvas(x,v):sa("canvas")}function _(x,v,k){let $=1;const Z=ge(x);if((Z.width>k||Z.height>k)&&($=k/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const z=Math.floor($*Z.width),xe=Math.floor($*Z.height);u===void 0&&(u=g(z,xe));const de=v?g(z,xe):u;return de.width=z,de.height=xe,de.getContext("2d").drawImage(x,0,0,z,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+xe+")."),de}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),x;return x}function m(x){return x.generateMipmaps}function h(x){n.generateMipmap(x)}function w(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(x,v,k,$,Z=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let z=v;if(v===n.RED&&(k===n.FLOAT&&(z=n.R32F),k===n.HALF_FLOAT&&(z=n.R16F),k===n.UNSIGNED_BYTE&&(z=n.R8)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(z=n.R8UI),k===n.UNSIGNED_SHORT&&(z=n.R16UI),k===n.UNSIGNED_INT&&(z=n.R32UI),k===n.BYTE&&(z=n.R8I),k===n.SHORT&&(z=n.R16I),k===n.INT&&(z=n.R32I)),v===n.RG&&(k===n.FLOAT&&(z=n.RG32F),k===n.HALF_FLOAT&&(z=n.RG16F),k===n.UNSIGNED_BYTE&&(z=n.RG8)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(z=n.RG8UI),k===n.UNSIGNED_SHORT&&(z=n.RG16UI),k===n.UNSIGNED_INT&&(z=n.RG32UI),k===n.BYTE&&(z=n.RG8I),k===n.SHORT&&(z=n.RG16I),k===n.INT&&(z=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(z=n.RGB16UI),k===n.UNSIGNED_INT&&(z=n.RGB32UI),k===n.BYTE&&(z=n.RGB8I),k===n.SHORT&&(z=n.RGB16I),k===n.INT&&(z=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),k===n.UNSIGNED_INT&&(z=n.RGBA32UI),k===n.BYTE&&(z=n.RGBA8I),k===n.SHORT&&(z=n.RGBA16I),k===n.INT&&(z=n.RGBA32I)),v===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),v===n.RGBA){const xe=Z?oa:tt.getTransfer($);k===n.FLOAT&&(z=n.RGBA32F),k===n.HALF_FLOAT&&(z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(z=xe===st?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function b(x,v){let k;return x?v===null||v===lo||v===Oi?k=n.DEPTH24_STENCIL8:v===ir?k=n.DEPTH32F_STENCIL8:v===Ui&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===lo||v===Oi?k=n.DEPTH_COMPONENT24:v===ir?k=n.DEPTH_COMPONENT32F:v===Ui&&(k=n.DEPTH_COMPONENT16),k}function A(x,v){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Pn&&x.minFilter!==Bn?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function D(x){const v=x.target;v.removeEventListener("dispose",D),U(v),v.isVideoTexture&&d.delete(v)}function R(x){const v=x.target;v.removeEventListener("dispose",R),M(v)}function U(x){const v=r.get(x);if(v.__webglInit===void 0)return;const k=x.source,$=f.get(k);if($){const Z=$[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(x),Object.keys($).length===0&&f.delete(k)}r.remove(x)}function T(x){const v=r.get(x);n.deleteTexture(v.__webglTexture);const k=x.source,$=f.get(k);delete $[v.__cacheKey],s.memory.textures--}function M(x){const v=r.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),r.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Z=0;Z<v.__webglFramebuffer[$].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[$][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=x.textures;for(let $=0,Z=k.length;$<Z;$++){const z=r.get(k[$]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),s.memory.textures--),r.remove(k[$])}r.remove(x)}let L=0;function V(){L=0}function H(){const x=L;return x>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+o.maxTextures),L+=1,x}function te(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function re(x,v){const k=r.get(x);if(x.isVideoTexture&&j(x),x.isRenderTargetTexture===!1&&x.version>0&&k.__version!==x.version){const $=x.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(k,x,v);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function K(x,v){const k=r.get(x);if(x.version>0&&k.__version!==x.version){Te(k,x,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function J(x,v){const k=r.get(x);if(x.version>0&&k.__version!==x.version){Te(k,x,v);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function F(x,v){const k=r.get(x);if(x.version>0&&k.__version!==x.version){me(k,x,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}const ue={[Ii]:n.REPEAT,[Tn]:n.CLAMP_TO_EDGE,[Xl]:n.MIRRORED_REPEAT},he={[Pn]:n.NEAREST,[Zv]:n.NEAREST_MIPMAP_NEAREST,[ms]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[Ba]:n.LINEAR_MIPMAP_NEAREST,[ro]:n.LINEAR_MIPMAP_LINEAR},be={[tb]:n.NEVER,[ab]:n.ALWAYS,[nb]:n.LESS,[pp]:n.LEQUAL,[rb]:n.EQUAL,[sb]:n.GEQUAL,[ob]:n.GREATER,[ib]:n.NOTEQUAL};function ke(x,v){if(v.type===ir&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Bn||v.magFilter===Ba||v.magFilter===ms||v.magFilter===ro||v.minFilter===Bn||v.minFilter===Ba||v.minFilter===ms||v.minFilter===ro)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ue[v.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ue[v.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ue[v.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,he[v.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,be[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pn||v.minFilter!==ms&&v.minFilter!==ro||v.type===ir&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,o.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(x,v){let k=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",D));const $=v.source;let Z=f.get($);Z===void 0&&(Z={},f.set($,Z));const z=te(v);if(z!==x.__cacheKey){Z[z]===void 0&&(Z[z]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,k=!0),Z[z].usedTimes++;const xe=Z[x.__cacheKey];xe!==void 0&&(Z[x.__cacheKey].usedTimes--,xe.usedTimes===0&&T(v)),x.__cacheKey=z,x.__webglTexture=Z[z].texture}return k}function ee(x,v,k){return Math.floor(Math.floor(x/k)/v)}function fe(x,v,k,$){const z=x.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,k,$,v.data);else{z.sort((se,Me)=>se.start-Me.start);let xe=0;for(let se=1;se<z.length;se++){const Me=z[xe],Ae=z[se],Re=Me.start+Me.count,pe=ee(Ae.start,v.width,4),Fe=ee(Me.start,v.width,4);Ae.start<=Re+1&&pe===Fe&&ee(Ae.start+Ae.count-1,v.width,4)===pe?Me.count=Math.max(Me.count,Ae.start+Ae.count-Me.start):(++xe,z[xe]=Ae)}z.length=xe+1;const de=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let se=0,Me=z.length;se<Me;se++){const Ae=z[se],Re=Math.floor(Ae.start/4),pe=Math.ceil(Ae.count/4),Fe=Re%v.width,I=Math.floor(Re/v.width),_e=pe,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Fe,I,_e,ae,k,$,v.data)}x.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function Te(x,v,k){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const Z=Ze(x,v),z=v.source;t.bindTexture($,x.__webglTexture,n.TEXTURE0+k);const xe=r.get(z);if(z.version!==xe.__version||Z===!0){t.activeTexture(n.TEXTURE0+k);const de=tt.getPrimaries(tt.workingColorSpace),Se=v.colorSpace===Rr?null:tt.getPrimaries(v.colorSpace),Ee=v.colorSpace===Rr||de===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let se=_(v.image,!1,o.maxTextureSize);se=X(v,se);const Me=i.convert(v.format,v.colorSpace),Ae=i.convert(v.type);let Re=E(v.internalFormat,Me,Ae,v.colorSpace,v.isVideoTexture);ke($,v);let pe;const Fe=v.mipmaps,I=v.isVideoTexture!==!0,_e=xe.__version===void 0||Z===!0,ae=z.dataReady,Ce=A(v,se);if(v.isDepthTexture)Re=b(v.format===Bi,v.type),_e&&(I?t.texStorage2D(n.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Re,se.width,se.height,0,Me,Ae,null));else if(v.isDataTexture)if(Fe.length>0){I&&_e&&t.texStorage2D(n.TEXTURE_2D,Ce,Re,Fe[0].width,Fe[0].height);for(let le=0,ie=Fe.length;le<ie;le++)pe=Fe[le],I?ae&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,pe.width,pe.height,Me,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,le,Re,pe.width,pe.height,0,Me,Ae,pe.data);v.generateMipmaps=!1}else I?(_e&&t.texStorage2D(n.TEXTURE_2D,Ce,Re,se.width,se.height),ae&&fe(v,se,Me,Ae)):t.texImage2D(n.TEXTURE_2D,0,Re,se.width,se.height,0,Me,Ae,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Re,Fe[0].width,Fe[0].height,se.depth);for(let le=0,ie=Fe.length;le<ie;le++)if(pe=Fe[le],v.format!==Cn)if(Me!==null)if(I){if(ae)if(v.layerUpdates.size>0){const Pe=Fu(pe.width,pe.height,v.format,v.type);for(const $e of v.layerUpdates){const gt=pe.data.subarray($e*Pe/pe.data.BYTES_PER_ELEMENT,($e+1)*Pe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,$e,pe.width,pe.height,1,Me,gt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,pe.width,pe.height,se.depth,Me,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Re,pe.width,pe.height,se.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,pe.width,pe.height,se.depth,Me,Ae,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Re,pe.width,pe.height,se.depth,0,Me,Ae,pe.data)}else{I&&_e&&t.texStorage2D(n.TEXTURE_2D,Ce,Re,Fe[0].width,Fe[0].height);for(let le=0,ie=Fe.length;le<ie;le++)pe=Fe[le],v.format!==Cn?Me!==null?I?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,pe.width,pe.height,Me,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Re,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,pe.width,pe.height,Me,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,le,Re,pe.width,pe.height,0,Me,Ae,pe.data)}else if(v.isDataArrayTexture)if(I){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Re,se.width,se.height,se.depth),ae)if(v.layerUpdates.size>0){const le=Fu(se.width,se.height,v.format,v.type);for(const ie of v.layerUpdates){const Pe=se.data.subarray(ie*le/se.data.BYTES_PER_ELEMENT,(ie+1)*le/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,se.width,se.height,1,Me,Ae,Pe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,Ae,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,Me,Ae,se.data);else if(v.isData3DTexture)I?(_e&&t.texStorage3D(n.TEXTURE_3D,Ce,Re,se.width,se.height,se.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,Ae,se.data)):t.texImage3D(n.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,Me,Ae,se.data);else if(v.isFramebufferTexture){if(_e)if(I)t.texStorage2D(n.TEXTURE_2D,Ce,Re,se.width,se.height);else{let le=se.width,ie=se.height;for(let Pe=0;Pe<Ce;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Re,le,ie,0,Me,Ae,null),le>>=1,ie>>=1}}else if(Fe.length>0){if(I&&_e){const le=ge(Fe[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Re,le.width,le.height)}for(let le=0,ie=Fe.length;le<ie;le++)pe=Fe[le],I?ae&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Me,Ae,pe):t.texImage2D(n.TEXTURE_2D,le,Re,Me,Ae,pe);v.generateMipmaps=!1}else if(I){if(_e){const le=ge(se);t.texStorage2D(n.TEXTURE_2D,Ce,Re,le.width,le.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ae,se)}else t.texImage2D(n.TEXTURE_2D,0,Re,Me,Ae,se);m(v)&&h($),xe.__version=z.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function me(x,v,k){if(v.image.length!==6)return;const $=Ze(x,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+k);const z=r.get(Z);if(Z.version!==z.__version||$===!0){t.activeTexture(n.TEXTURE0+k);const xe=tt.getPrimaries(tt.workingColorSpace),de=v.colorSpace===Rr?null:tt.getPrimaries(v.colorSpace),Se=v.colorSpace===Rr||xe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let ie=0;ie<6;ie++)!Ee&&!se?Me[ie]=_(v.image[ie],!0,o.maxCubemapSize):Me[ie]=se?v.image[ie].image:v.image[ie],Me[ie]=X(v,Me[ie]);const Ae=Me[0],Re=i.convert(v.format,v.colorSpace),pe=i.convert(v.type),Fe=E(v.internalFormat,Re,pe,v.colorSpace),I=v.isVideoTexture!==!0,_e=z.__version===void 0||$===!0,ae=Z.dataReady;let Ce=A(v,Ae);ke(n.TEXTURE_CUBE_MAP,v);let le;if(Ee){I&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Fe,Ae.width,Ae.height);for(let ie=0;ie<6;ie++){le=Me[ie].mipmaps;for(let Pe=0;Pe<le.length;Pe++){const $e=le[Pe];v.format!==Cn?Re!==null?I?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,$e.width,$e.height,Re,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Fe,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,$e.width,$e.height,Re,pe,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Fe,$e.width,$e.height,0,Re,pe,$e.data)}}}else{if(le=v.mipmaps,I&&_e){le.length>0&&Ce++;const ie=ge(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(se){I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Me[ie].width,Me[ie].height,Re,pe,Me[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,Me[ie].width,Me[ie].height,0,Re,pe,Me[ie].data);for(let Pe=0;Pe<le.length;Pe++){const gt=le[Pe].image[ie].image;I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,gt.width,gt.height,Re,pe,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Fe,gt.width,gt.height,0,Re,pe,gt.data)}}else{I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,pe,Me[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,Re,pe,Me[ie]);for(let Pe=0;Pe<le.length;Pe++){const $e=le[Pe];I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,Re,pe,$e.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Fe,Re,pe,$e.image[ie])}}}m(v)&&h(n.TEXTURE_CUBE_MAP),z.__version=Z.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function Le(x,v,k,$,Z,z){const xe=i.convert(k.format,k.colorSpace),de=i.convert(k.type),Se=E(k.internalFormat,xe,de,k.colorSpace),Ee=r.get(v),se=r.get(k);if(se.__renderTarget=v,!Ee.__hasExternalTextures){const Me=Math.max(1,v.width>>z),Ae=Math.max(1,v.height>>z);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,z,Se,Me,Ae,v.depth,0,xe,de,null):t.texImage2D(Z,z,Se,Me,Ae,0,xe,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),ne(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Z,se.__webglTexture,0,q(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Z,se.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(x,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,x),v.depthBuffer){const $=v.depthTexture,Z=$&&$.isDepthTexture?$.type:null,z=b(v.stencilBuffer,Z),xe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=q(v);ne(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,z,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,x)}else{const $=v.textures;for(let Z=0;Z<$.length;Z++){const z=$[Z],xe=i.convert(z.format,z.colorSpace),de=i.convert(z.type),Se=E(z.internalFormat,xe,de,z.colorSpace),Ee=q(v);k&&ne(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Se,v.width,v.height):ne(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,Se,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Se,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=r.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),re(v.depthTexture,0);const Z=$.__webglTexture,z=q(v);if(v.depthTexture.format===Ni)ne(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Bi)ne(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ht(x){const v=r.get(x),k=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const $=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=$}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const $=x.texture.mipmaps;$&&$.length>0?Ie(v.__webglFramebuffer[0],x):Ie(v.__webglFramebuffer,x)}else if(k){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),Ye(v.__webglDepthbuffer[$],x,!1);else{const Z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}else{const $=x.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ye(v.__webglDepthbuffer,x,!1);else{const Z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(x,v,k){const $=r.get(x);v!==void 0&&Le($.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&ht(x)}function P(x){const v=x.texture,k=r.get(x),$=r.get(v);x.addEventListener("dispose",R);const Z=x.textures,z=x.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,s.memory.textures++),z){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let Se=0;Se<v.mipmaps.length;Se++)k.__webglFramebuffer[de][Se]=n.createFramebuffer()}else k.__webglFramebuffer[de]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)k.__webglFramebuffer[de]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(xe)for(let de=0,Se=Z.length;de<Se;de++){const Ee=r.get(Z[de]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),s.memory.textures++)}if(x.samples>0&&ne(x)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<Z.length;de++){const Se=Z[de];k.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[de]);const Ee=i.convert(Se.format,Se.colorSpace),se=i.convert(Se.type),Me=E(Se.internalFormat,Ee,se,Se.colorSpace,x.isXRRenderTarget===!0),Ae=q(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Me,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,k.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ye(k.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ke(n.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)Le(k.__webglFramebuffer[de][Se],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se);else Le(k.__webglFramebuffer[de],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(v)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let de=0,Se=Z.length;de<Se;de++){const Ee=Z[de],se=r.get(Ee);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),ke(n.TEXTURE_2D,Ee),Le(k.__webglFramebuffer,x,Ee,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(Ee)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(de=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),ke(de,v),v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)Le(k.__webglFramebuffer[Se],x,v,n.COLOR_ATTACHMENT0,de,Se);else Le(k.__webglFramebuffer,x,v,n.COLOR_ATTACHMENT0,de,0);m(v)&&h(de),t.unbindTexture()}x.depthBuffer&&ht(x)}function y(x){const v=x.textures;for(let k=0,$=v.length;k<$;k++){const Z=v[k];if(m(Z)){const z=w(x),xe=r.get(Z).__webglTexture;t.bindTexture(z,xe),h(z),t.unbindTexture()}}}const oe=[],Y=[];function Q(x){if(x.samples>0){if(ne(x)===!1){const v=x.textures,k=x.width,$=x.height;let Z=n.COLOR_BUFFER_BIT;const z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=r.get(x),de=v.length>1;if(de)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Se=x.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const se=r.get(v[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,Z,n.NEAREST),l===!0&&(oe.length=0,Y.length=0,oe.push(n.COLOR_ATTACHMENT0+Ee),x.depthBuffer&&x.resolveDepthBuffer===!1&&(oe.push(z),Y.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const se=r.get(v[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const v=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function q(x){return Math.min(o.maxSamples,x.samples)}function ne(x){const v=r.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function j(x){const v=s.render.frame;d.get(x)!==v&&(d.set(x,v),x.update())}function X(x,v){const k=x.colorSpace,$=x.format,Z=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||k!==Qo&&k!==Rr&&(tt.getTransfer(k)===st?($!==Cn||Z!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function ge(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=re,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=F,this.rebindTextures=C,this.setupRenderTarget=P,this.updateRenderTargetMipmap=y,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=ne}function EM(n,e){function t(r,o=Rr){let i;const s=tt.getTransfer(o);if(r===Vn)return n.UNSIGNED_BYTE;if(r===td)return n.UNSIGNED_SHORT_4_4_4_4;if(r===nd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===ap)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===ip)return n.BYTE;if(r===sp)return n.SHORT;if(r===Ui)return n.UNSIGNED_SHORT;if(r===ed)return n.INT;if(r===lo)return n.UNSIGNED_INT;if(r===ir)return n.FLOAT;if(r===es)return n.HALF_FLOAT;if(r===lp)return n.ALPHA;if(r===cp)return n.RGB;if(r===Cn)return n.RGBA;if(r===Ni)return n.DEPTH_COMPONENT;if(r===Bi)return n.DEPTH_STENCIL;if(r===dp)return n.RED;if(r===rd)return n.RED_INTEGER;if(r===up)return n.RG;if(r===od)return n.RG_INTEGER;if(r===id)return n.RGBA_INTEGER;if(r===Hs||r===Vs||r===Gs||r===Ws)if(s===st)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===Hs)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ws)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===Hs)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vs)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gs)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ws)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jl||r===Yl||r===ql||r===Kl)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===jl)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yl)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ql)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kl)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zl||r===Jl||r===Ql)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===Zl||r===Jl)return s===st?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===Ql)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ec||r===tc||r===nc||r===rc||r===oc||r===ic||r===sc||r===ac||r===lc||r===cc||r===dc||r===uc||r===fc||r===hc)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===ec)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ic)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ac)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===uc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xs||r===pc||r===mc)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===Xs)return s===st?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pc)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===mc)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fp||r===gc||r===vc||r===bc)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===Xs)return i.COMPRESSED_RED_RGTC1_EXT;if(r===gc)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vc)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bc)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oi?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const wM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TM=`
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

}`;class CM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Zt,i=e.properties.get(o);i.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new zr({vertexShader:wM,fragmentShader:TM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new os(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AM extends ho{constructor(e,t){super();const r=this;let o=null,i=1,s=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,g=null;const _=new CM,m=t.getContextAttributes();let h=null,w=null;const E=[],b=[],A=new ze;let D=null;const R=new dn;R.viewport=new ct;const U=new dn;U.viewport=new ct;const T=[R,U],M=new Yb;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=E[ee];return fe===void 0&&(fe=new sl,E[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=E[ee];return fe===void 0&&(fe=new sl,E[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=E[ee];return fe===void 0&&(fe=new sl,E[ee]=fe),fe.getHandSpace()};function H(ee){const fe=b.indexOf(ee.inputSource);if(fe===-1)return;const Te=E[fe];Te!==void 0&&(Te.update(ee.inputSource,ee.frame,c||s),Te.dispatchEvent({type:ee.type,data:ee.inputSource}))}function te(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",re);for(let ee=0;ee<E.length;ee++){const fe=b[ee];fe!==null&&(b[ee]=null,E[ee].disconnect(fe))}L=null,V=null,_.reset(),e.setRenderTarget(h),p=null,f=null,u=null,o=null,w=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){i=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(h=e.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",te),o.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,me=null,Le=null;m.depth&&(Le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=m.stencil?Bi:Ni,me=m.stencil?Oi:lo);const Ye={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:i};u=new XRWebGLBinding(o,t),f=u.createProjectionLayer(Ye),o.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new uo(f.textureWidth,f.textureHeight,{format:Cn,type:Vn,depthTexture:new Cp(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(o,t,Te),o.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new uo(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await o.requestReferenceSpace(a),Ze.setContext(o),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(ee){for(let fe=0;fe<ee.removed.length;fe++){const Te=ee.removed[fe],me=b.indexOf(Te);me>=0&&(b[me]=null,E[me].disconnect(Te))}for(let fe=0;fe<ee.added.length;fe++){const Te=ee.added[fe];let me=b.indexOf(Te);if(me===-1){for(let Ye=0;Ye<E.length;Ye++)if(Ye>=b.length){b.push(Te),me=Ye;break}else if(b[Ye]===null){b[Ye]=Te,me=Ye;break}if(me===-1)break}const Le=E[me];Le&&Le.connect(Te)}}const K=new B,J=new B;function F(ee,fe,Te){K.setFromMatrixPosition(fe.matrixWorld),J.setFromMatrixPosition(Te.matrixWorld);const me=K.distanceTo(J),Le=fe.projectionMatrix.elements,Ye=Te.projectionMatrix.elements,Ie=Le[14]/(Le[10]-1),ht=Le[14]/(Le[10]+1),C=(Le[9]+1)/Le[5],P=(Le[9]-1)/Le[5],y=(Le[8]-1)/Le[0],oe=(Ye[8]+1)/Ye[0],Y=Ie*y,Q=Ie*oe,q=me/(-y+oe),ne=q*-y;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ne),ee.translateZ(q),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Le[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const j=Ie+q,X=ht+q,ge=Y-ne,x=Q+(me-ne),v=C*ht/X*j,k=P*ht/X*j;ee.projectionMatrix.makePerspective(ge,x,v,k,j,X),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let fe=ee.near,Te=ee.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(Te=_.depthFar)),M.near=U.near=R.near=fe,M.far=U.far=R.far=Te,(L!==M.near||V!==M.far)&&(o.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,V=M.far),R.layers.mask=ee.layers.mask|2,U.layers.mask=ee.layers.mask|4,M.layers.mask=R.layers.mask|U.layers.mask;const me=ee.parent,Le=M.cameras;ue(M,me);for(let Ye=0;Ye<Le.length;Ye++)ue(Le[Ye],me);Le.length===2?F(M,R,U):M.projectionMatrix.copy(R.projectionMatrix),he(ee,M,me)};function he(ee,fe,Te){Te===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Te.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=_c*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let be=null;function ke(ee,fe){if(d=fe.getViewerPose(c||s),g=fe,d!==null){const Te=d.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let me=!1;Te.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let Ie=0;Ie<Te.length;Ie++){const ht=Te[Ie];let C=null;if(p!==null)C=p.getViewport(ht);else{const y=u.getViewSubImage(f,ht);C=y.viewport,Ie===0&&(e.setRenderTargetTextures(w,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(w))}let P=T[Ie];P===void 0&&(P=new dn,P.layers.enable(Ie),P.viewport=new ct,T[Ie]=P),P.matrix.fromArray(ht.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(ht.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(C.x,C.y,C.width,C.height),Ie===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(P)}const Le=o.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&u){const Ie=u.getDepthInformation(Te[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,o.renderState)}}for(let Te=0;Te<E.length;Te++){const me=b[Te],Le=E[Te];me!==null&&Le!==void 0&&Le.update(me,fe,c||s)}be&&be(ee,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Ze=new Pp;Ze.setAnimationLoop(ke),this.setAnimationLoop=function(ee){be=ee},this.dispose=function(){}}}const Jr=new Gn,RM=new Mt;function PM(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function r(m,h){h.color.getRGB(m.fogColor.value,Sp(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function o(m,h,w,E,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(m,h):h.isMeshToonMaterial?(i(m,h),u(m,h)):h.isMeshPhongMaterial?(i(m,h),d(m,h)):h.isMeshStandardMaterial?(i(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(i(m,h),g(m,h)):h.isMeshDepthMaterial?i(m,h):h.isMeshDistanceMaterial?(i(m,h),_(m,h)):h.isMeshNormalMaterial?i(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,w,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Kt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Kt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=e.get(h),E=w.envMap,b=w.envMapRotation;E&&(m.envMap.value=E,Jr.copy(b),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),m.envMapRotation.value.setFromMatrix4(RM.makeRotationFromEuler(Jr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,w,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=E*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Kt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function DM(n,e,t,r){let o={},i={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const b=E.program;r.uniformBlockBinding(w,b)}function c(w,E){let b=o[w.id];b===void 0&&(g(w),b=d(w),o[w.id]=b,w.addEventListener("dispose",m));const A=E.program;r.updateUBOMapping(w,A);const D=e.render.frame;i[w.id]!==D&&(f(w),i[w.id]=D)}function d(w){const E=u();w.__bindingPointIndex=E;const b=n.createBuffer(),A=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function u(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const E=o[w.id],b=w.uniforms,A=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let D=0,R=b.length;D<R;D++){const U=Array.isArray(b[D])?b[D]:[b[D]];for(let T=0,M=U.length;T<M;T++){const L=U[T];if(p(L,D,T,A)===!0){const V=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let te=0;for(let re=0;re<H.length;re++){const K=H[re],J=_(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,V+te,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,te),te+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,E,b,A){const D=w.value,R=E+"_"+b;if(A[R]===void 0)return typeof D=="number"||typeof D=="boolean"?A[R]=D:A[R]=D.clone(),!0;{const U=A[R];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return A[R]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function g(w){const E=w.uniforms;let b=0;const A=16;for(let R=0,U=E.length;R<U;R++){const T=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,L=T.length;M<L;M++){const V=T[M],H=Array.isArray(V.value)?V.value:[V.value];for(let te=0,re=H.length;te<re;te++){const K=H[te],J=_(K),F=b%A,ue=F%J.boundary,he=F+ue;b+=ue,he!==0&&A-he<J.storage&&(b+=A-he),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=J.storage}}}const D=b%A;return D>0&&(b+=A-D),w.__size=b,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const b=s.indexOf(E.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(o[E.id]),delete o[E.id],delete i[E.id]}function h(){for(const w in o)n.deleteBuffer(o[w]);s=[],o={},i={}}return{bind:l,update:c,dispose:h}}class LM{constructor(e={}){const{canvas:t=db(),context:r=null,depth:o=!0,stencil:i=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let A=!1;this._outputColorSpace=cn;let D=0,R=0,U=null,T=-1,M=null;const L=new ct,V=new ct;let H=null;const te=new Je(0);let re=0,K=t.width,J=t.height,F=1,ue=null,he=null;const be=new ct(0,0,K,J),ke=new ct(0,0,K,J);let Ze=!1;const ee=new ld;let fe=!1,Te=!1;const me=new Mt,Le=new Mt,Ye=new B,Ie=new ct,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function P(){return U===null?F:1}let y=r;function oe(S,O){return t.getContext(S,O)}try{const S={alpha:!0,depth:o,stencil:i,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ie,!1),y===null){const O="webgl2";if(y=oe(O,S),y===null)throw oe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Y,Q,q,ne,j,X,ge,x,v,k,$,Z,z,xe,de,Se,Ee,se,Me,Ae,Re,pe,Fe,I;function _e(){Y=new Hx(y),Y.init(),pe=new EM(y,Y),Q=new Ux(y,Y,e,pe),q=new SM(y,Y),Q.reverseDepthBuffer&&f&&q.buffers.depth.setReversed(!0),ne=new Wx(y),j=new cM,X=new MM(y,Y,q,j,Q,pe,ne),ge=new Nx(b),x=new $x(b),v=new Zb(y),Fe=new kx(y,v),k=new Vx(y,v,ne,Fe),$=new jx(y,k,v,ne),Me=new Xx(y,Q,X),Se=new Ox(j),Z=new lM(b,ge,x,Y,Q,Fe,Se),z=new PM(b,j),xe=new uM,de=new vM(Y),se=new Lx(b,ge,x,q,$,p,l),Ee=new yM(b,$,Q),I=new DM(y,ne,Q,q),Ae=new Ix(y,Y,ne),Re=new Gx(y,Y,ne),ne.programs=Z.programs,b.capabilities=Q,b.extensions=Y,b.properties=j,b.renderLists=xe,b.shadowMap=Ee,b.state=q,b.info=ne}_e();const ae=new AM(b,y);this.xr=ae,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const S=Y.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Y.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(K,J,!1))},this.getSize=function(S){return S.set(K,J)},this.setSize=function(S,O,G=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,J=O,t.width=Math.floor(S*F),t.height=Math.floor(O*F),G===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(K*F,J*F).floor()},this.setDrawingBufferSize=function(S,O,G){K=S,J=O,F=G,t.width=Math.floor(S*G),t.height=Math.floor(O*G),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,O,G,W){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,O,G,W),q.viewport(L.copy(be).multiplyScalar(F).round())},this.getScissor=function(S){return S.copy(ke)},this.setScissor=function(S,O,G,W){S.isVector4?ke.set(S.x,S.y,S.z,S.w):ke.set(S,O,G,W),q.scissor(V.copy(ke).multiplyScalar(F).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(S){q.setScissorTest(Ze=S)},this.setOpaqueSort=function(S){ue=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,G=!0){let W=0;if(S){let N=!1;if(U!==null){const ce=U.texture.format;N=ce===id||ce===od||ce===rd}if(N){const ce=U.texture.type,ye=ce===Vn||ce===lo||ce===Ui||ce===Oi||ce===td||ce===nd,De=se.getClearColor(),we=se.getClearAlpha(),Ne=De.r,Be=De.g,Ue=De.b;ye?(g[0]=Ne,g[1]=Be,g[2]=Ue,g[3]=we,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=Ne,_[1]=Be,_[2]=Ue,_[3]=we,y.clearBufferiv(y.COLOR,0,_))}else W|=y.COLOR_BUFFER_BIT}O&&(W|=y.DEPTH_BUFFER_BIT),G&&(W|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),se.dispose(),xe.dispose(),de.dispose(),j.dispose(),ge.dispose(),x.dispose(),$.dispose(),Fe.dispose(),I.dispose(),Z.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",fd),ae.removeEventListener("sessionend",hd),Vr.stop()};function Ce(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=ne.autoReset,O=Ee.enabled,G=Ee.autoUpdate,W=Ee.needsUpdate,N=Ee.type;_e(),ne.autoReset=S,Ee.enabled=O,Ee.autoUpdate=G,Ee.needsUpdate=W,Ee.type=N}function ie(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Pe(S){const O=S.target;O.removeEventListener("dispose",Pe),$e(O)}function $e(S){gt(S),j.remove(S)}function gt(S){const O=j.get(S).programs;O!==void 0&&(O.forEach(function(G){Z.releaseProgram(G)}),S.isShaderMaterial&&Z.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,G,W,N,ce){O===null&&(O=ht);const ye=N.isMesh&&N.matrixWorld.determinant()<0,De=Vp(S,O,G,W,N);q.setMaterial(W,ye);let we=G.index,Ne=1;if(W.wireframe===!0){if(we=k.getWireframeAttribute(G),we===void 0)return;Ne=2}const Be=G.drawRange,Ue=G.attributes.position;let qe=Be.start*Ne,it=(Be.start+Be.count)*Ne;ce!==null&&(qe=Math.max(qe,ce.start*Ne),it=Math.min(it,(ce.start+ce.count)*Ne)),we!==null?(qe=Math.max(qe,0),it=Math.min(it,we.count)):Ue!=null&&(qe=Math.max(qe,0),it=Math.min(it,Ue.count));const Et=it-qe;if(Et<0||Et===1/0)return;Fe.setup(N,W,De,G,we);let vt,dt=Ae;if(we!==null&&(vt=v.get(we),dt=Re,dt.setIndex(vt)),N.isMesh)W.wireframe===!0?(q.setLineWidth(W.wireframeLinewidth*P()),dt.setMode(y.LINES)):dt.setMode(y.TRIANGLES);else if(N.isLine){let Oe=W.linewidth;Oe===void 0&&(Oe=1),q.setLineWidth(Oe*P()),N.isLineSegments?dt.setMode(y.LINES):N.isLineLoop?dt.setMode(y.LINE_LOOP):dt.setMode(y.LINE_STRIP)}else N.isPoints?dt.setMode(y.POINTS):N.isSprite&&dt.setMode(y.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Xo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))dt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Oe=N._multiDrawStarts,yt=N._multiDrawCounts,et=N._multiDrawCount,rn=we?v.get(we).bytesPerElement:1,po=j.get(W).currentProgram.getUniforms();for(let on=0;on<et;on++)po.setValue(y,"_gl_DrawID",on),dt.render(Oe[on]/rn,yt[on])}else if(N.isInstancedMesh)dt.renderInstances(qe,Et,N.count);else if(G.isInstancedBufferGeometry){const Oe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,yt=Math.min(G.instanceCount,Oe);dt.renderInstances(qe,Et,yt)}else dt.render(qe,Et)};function ot(S,O,G){S.transparent===!0&&S.side===rr&&S.forceSinglePass===!1?(S.side=Kt,S.needsUpdate=!0,as(S,O,G),S.side=Fr,S.needsUpdate=!0,as(S,O,G),S.side=rr):as(S,O,G)}this.compile=function(S,O,G=null){G===null&&(G=S),h=de.get(G),h.init(O),E.push(h),G.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),S!==G&&S.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const W=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ce=N.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){const De=ce[ye];ot(De,G,N),W.add(De)}else ot(ce,G,N),W.add(ce)}),h=E.pop(),W},this.compileAsync=function(S,O,G=null){const W=this.compile(S,O,G);return new Promise(N=>{function ce(){if(W.forEach(function(ye){j.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){N(S);return}setTimeout(ce,10)}Y.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let _n=null;function Wn(S){_n&&_n(S)}function fd(){Vr.stop()}function hd(){Vr.start()}const Vr=new Pp;Vr.setAnimationLoop(Wn),typeof self<"u"&&Vr.setContext(self),this.setAnimationLoop=function(S){_n=S,ae.setAnimationLoop(S),S===null?Vr.stop():Vr.start()},ae.addEventListener("sessionstart",fd),ae.addEventListener("sessionend",hd),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,O,U),h=de.get(S,E.length),h.init(O),E.push(h),Le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(Le),Te=this.localClippingEnabled,fe=Se.init(this.clippingPlanes,Te),m=xe.get(S,w.length),m.init(),w.push(m),ae.enabled===!0&&ae.isPresenting===!0){const ce=b.xr.getDepthSensingMesh();ce!==null&&Sa(ce,O,-1/0,b.sortObjects)}Sa(S,O,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ue,he),C=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,C&&se.addToRenderList(m,S),this.info.render.frame++,fe===!0&&Se.beginShadows();const G=h.state.shadowsArray;Ee.render(G,S,O),fe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,N=m.transmissive;if(h.setupLights(),O.isArrayCamera){const ce=O.cameras;if(N.length>0)for(let ye=0,De=ce.length;ye<De;ye++){const we=ce[ye];md(W,N,S,we)}C&&se.render(S);for(let ye=0,De=ce.length;ye<De;ye++){const we=ce[ye];pd(m,S,we,we.viewport)}}else N.length>0&&md(W,N,S,O),C&&se.render(S),pd(m,S,O);U!==null&&R===0&&(X.updateMultisampleRenderTarget(U),X.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(b,S,O),Fe.resetDefaultState(),T=-1,M=null,E.pop(),E.length>0?(h=E[E.length-1],fe===!0&&Se.setGlobalState(b.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Sa(S,O,G,W){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ee.intersectsSprite(S)){W&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Le);const ye=$.update(S),De=S.material;De.visible&&m.push(S,ye,De,G,Ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ee.intersectsObject(S))){const ye=$.update(S),De=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ie.copy(ye.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(Le)),Array.isArray(De)){const we=ye.groups;for(let Ne=0,Be=we.length;Ne<Be;Ne++){const Ue=we[Ne],qe=De[Ue.materialIndex];qe&&qe.visible&&m.push(S,ye,qe,G,Ie.z,Ue)}}else De.visible&&m.push(S,ye,De,G,Ie.z,null)}}const ce=S.children;for(let ye=0,De=ce.length;ye<De;ye++)Sa(ce[ye],O,G,W)}function pd(S,O,G,W){const N=S.opaque,ce=S.transmissive,ye=S.transparent;h.setupLightsView(G),fe===!0&&Se.setGlobalState(b.clippingPlanes,G),W&&q.viewport(L.copy(W)),N.length>0&&ss(N,O,G),ce.length>0&&ss(ce,O,G),ye.length>0&&ss(ye,O,G),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function md(S,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new uo(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?es:Vn,minFilter:ro,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ce=h.state.transmissionRenderTarget[W.id],ye=W.viewport||L;ce.setSize(ye.z*b.transmissionResolutionScale,ye.w*b.transmissionResolutionScale);const De=b.getRenderTarget(),we=b.getActiveCubeFace(),Ne=b.getActiveMipmapLevel();b.setRenderTarget(ce),b.getClearColor(te),re=b.getClearAlpha(),re<1&&b.setClearColor(16777215,.5),b.clear(),C&&se.render(G);const Be=b.toneMapping;b.toneMapping=Or;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),fe===!0&&Se.setGlobalState(b.clippingPlanes,W),ss(S,G,W),X.updateMultisampleRenderTarget(ce),X.updateRenderTargetMipmap(ce),Y.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let it=0,Et=O.length;it<Et;it++){const vt=O[it],dt=vt.object,Oe=vt.geometry,yt=vt.material,et=vt.group;if(yt.side===rr&&dt.layers.test(W.layers)){const rn=yt.side;yt.side=Kt,yt.needsUpdate=!0,gd(dt,G,W,Oe,yt,et),yt.side=rn,yt.needsUpdate=!0,qe=!0}}qe===!0&&(X.updateMultisampleRenderTarget(ce),X.updateRenderTargetMipmap(ce))}b.setRenderTarget(De,we,Ne),b.setClearColor(te,re),Ue!==void 0&&(W.viewport=Ue),b.toneMapping=Be}function ss(S,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let N=0,ce=S.length;N<ce;N++){const ye=S[N],De=ye.object,we=ye.geometry,Ne=ye.group;let Be=ye.material;Be.allowOverride===!0&&W!==null&&(Be=W),De.layers.test(G.layers)&&gd(De,O,G,we,Be,Ne)}}function gd(S,O,G,W,N,ce){S.onBeforeRender(b,O,G,W,N,ce),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(b,O,G,W,S,ce),N.transparent===!0&&N.side===rr&&N.forceSinglePass===!1?(N.side=Kt,N.needsUpdate=!0,b.renderBufferDirect(G,O,W,N,S,ce),N.side=Fr,N.needsUpdate=!0,b.renderBufferDirect(G,O,W,N,S,ce),N.side=rr):b.renderBufferDirect(G,O,W,N,S,ce),S.onAfterRender(b,O,G,W,N,ce)}function as(S,O,G){O.isScene!==!0&&(O=ht);const W=j.get(S),N=h.state.lights,ce=h.state.shadowsArray,ye=N.state.version,De=Z.getParameters(S,N.state,ce,O,G),we=Z.getProgramCacheKey(De);let Ne=W.programs;W.environment=S.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(S.isMeshStandardMaterial?x:ge).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",Pe),Ne=new Map,W.programs=Ne);let Be=Ne.get(we);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===ye)return bd(S,De),Be}else De.uniforms=Z.getUniforms(S),S.onBeforeCompile(De,b),Be=Z.acquireProgram(De,we),Ne.set(we,Be),W.uniforms=De.uniforms;const Ue=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=Se.uniform),bd(S,De),W.needsLights=Wp(S),W.lightsStateVersion=ye,W.needsLights&&(Ue.ambientLightColor.value=N.state.ambient,Ue.lightProbe.value=N.state.probe,Ue.directionalLights.value=N.state.directional,Ue.directionalLightShadows.value=N.state.directionalShadow,Ue.spotLights.value=N.state.spot,Ue.spotLightShadows.value=N.state.spotShadow,Ue.rectAreaLights.value=N.state.rectArea,Ue.ltc_1.value=N.state.rectAreaLTC1,Ue.ltc_2.value=N.state.rectAreaLTC2,Ue.pointLights.value=N.state.point,Ue.pointLightShadows.value=N.state.pointShadow,Ue.hemisphereLights.value=N.state.hemi,Ue.directionalShadowMap.value=N.state.directionalShadowMap,Ue.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ue.spotShadowMap.value=N.state.spotShadowMap,Ue.spotLightMatrix.value=N.state.spotLightMatrix,Ue.spotLightMap.value=N.state.spotLightMap,Ue.pointShadowMap.value=N.state.pointShadowMap,Ue.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function vd(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Ys.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function bd(S,O){const G=j.get(S);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Vp(S,O,G,W,N){O.isScene!==!0&&(O=ht),X.resetTextureUnits();const ce=O.fog,ye=W.isMeshStandardMaterial?O.environment:null,De=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Qo,we=(W.isMeshStandardMaterial?x:ge).get(W.envMap||ye),Ne=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,it=!!G.morphAttributes.color;let Et=Or;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Et=b.toneMapping);const vt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=vt!==void 0?vt.length:0,Oe=j.get(W),yt=h.state.lights;if(fe===!0&&(Te===!0||S!==M)){const Wt=S===M&&W.id===T;Se.setState(W,S,Wt)}let et=!1;W.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==yt.state.version||Oe.outputColorSpace!==De||N.isBatchedMesh&&Oe.batching===!1||!N.isBatchedMesh&&Oe.batching===!0||N.isBatchedMesh&&Oe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Oe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Oe.instancing===!1||!N.isInstancedMesh&&Oe.instancing===!0||N.isSkinnedMesh&&Oe.skinning===!1||!N.isSkinnedMesh&&Oe.skinning===!0||N.isInstancedMesh&&Oe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Oe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Oe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Oe.instancingMorph===!1&&N.morphTexture!==null||Oe.envMap!==we||W.fog===!0&&Oe.fog!==ce||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Se.numPlanes||Oe.numIntersection!==Se.numIntersection)||Oe.vertexAlphas!==Ne||Oe.vertexTangents!==Be||Oe.morphTargets!==Ue||Oe.morphNormals!==qe||Oe.morphColors!==it||Oe.toneMapping!==Et||Oe.morphTargetsCount!==dt)&&(et=!0):(et=!0,Oe.__version=W.version);let rn=Oe.currentProgram;et===!0&&(rn=as(W,O,N));let po=!1,on=!1,ni=!1;const _t=rn.getUniforms(),pn=Oe.uniforms;if(q.useProgram(rn.program)&&(po=!0,on=!0,ni=!0),W.id!==T&&(T=W.id,on=!0),po||M!==S){q.buffers.depth.getReversed()?(me.copy(S.projectionMatrix),fb(me),hb(me),_t.setValue(y,"projectionMatrix",me)):_t.setValue(y,"projectionMatrix",S.projectionMatrix),_t.setValue(y,"viewMatrix",S.matrixWorldInverse);const Jt=_t.map.cameraPosition;Jt!==void 0&&Jt.setValue(y,Ye.setFromMatrixPosition(S.matrixWorld)),Q.logarithmicDepthBuffer&&_t.setValue(y,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_t.setValue(y,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,on=!0,ni=!0)}if(N.isSkinnedMesh){_t.setOptional(y,N,"bindMatrix"),_t.setOptional(y,N,"bindMatrixInverse");const Wt=N.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),_t.setValue(y,"boneTexture",Wt.boneTexture,X))}N.isBatchedMesh&&(_t.setOptional(y,N,"batchingTexture"),_t.setValue(y,"batchingTexture",N._matricesTexture,X),_t.setOptional(y,N,"batchingIdTexture"),_t.setValue(y,"batchingIdTexture",N._indirectTexture,X),_t.setOptional(y,N,"batchingColorTexture"),N._colorsTexture!==null&&_t.setValue(y,"batchingColorTexture",N._colorsTexture,X));const mn=G.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Me.update(N,G,rn),(on||Oe.receiveShadow!==N.receiveShadow)&&(Oe.receiveShadow=N.receiveShadow,_t.setValue(y,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(pn.envMap.value=we,pn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(pn.envMapIntensity.value=O.environmentIntensity),on&&(_t.setValue(y,"toneMappingExposure",b.toneMappingExposure),Oe.needsLights&&Gp(pn,ni),ce&&W.fog===!0&&z.refreshFogUniforms(pn,ce),z.refreshMaterialUniforms(pn,W,F,J,h.state.transmissionRenderTarget[S.id]),Ys.upload(y,vd(Oe),pn,X)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ys.upload(y,vd(Oe),pn,X),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_t.setValue(y,"center",N.center),_t.setValue(y,"modelViewMatrix",N.modelViewMatrix),_t.setValue(y,"normalMatrix",N.normalMatrix),_t.setValue(y,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Wt=W.uniformsGroups;for(let Jt=0,Ma=Wt.length;Jt<Ma;Jt++){const Gr=Wt[Jt];I.update(Gr,rn),I.bind(Gr,rn)}}return rn}function Gp(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Wp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,O,G){const W=j.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),j.get(S.texture).__webglTexture=O,j.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const G=j.get(S);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const Xp=y.createFramebuffer();this.setRenderTarget=function(S,O=0,G=0){U=S,D=O,R=G;let W=!0,N=null,ce=!1,ye=!1;if(S){const we=j.get(S);if(we.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(y.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)X.setupRenderTarget(S);else if(we.__hasExternalTextures)X.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ue=S.depthTexture;if(we.__boundDepthTexture!==Ue){if(Ue!==null&&j.has(Ue)&&(S.width!==Ue.image.width||S.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(S)}}const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const Be=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?N=Be[O][G]:N=Be[O],ce=!0):S.samples>0&&X.useMultisampledRTT(S)===!1?N=j.get(S).__webglMultisampledFramebuffer:Array.isArray(Be)?N=Be[G]:N=Be,L.copy(S.viewport),V.copy(S.scissor),H=S.scissorTest}else L.copy(be).multiplyScalar(F).floor(),V.copy(ke).multiplyScalar(F).floor(),H=Ze;if(G!==0&&(N=Xp),q.bindFramebuffer(y.FRAMEBUFFER,N)&&W&&q.drawBuffers(S,N),q.viewport(L),q.scissor(V),q.setScissorTest(H),ce){const we=j.get(S.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,G)}else if(ye){const we=j.get(S.texture),Ne=O;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,we.__webglTexture,G,Ne)}else if(S!==null&&G!==0){const we=j.get(S.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,we.__webglTexture,G)}T=-1},this.readRenderTargetPixels=function(S,O,G,W,N,ce,ye,De=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){q.bindFramebuffer(y.FRAMEBUFFER,we);try{const Ne=S.textures[De],Be=Ne.format,Ue=Ne.type;if(!Q.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-W&&G>=0&&G<=S.height-N&&(S.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+De),y.readPixels(O,G,W,N,pe.convert(Be),pe.convert(Ue),ce))}finally{const Ne=U!==null?j.get(U).__webglFramebuffer:null;q.bindFramebuffer(y.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,O,G,W,N,ce,ye,De=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we)if(O>=0&&O<=S.width-W&&G>=0&&G<=S.height-N){q.bindFramebuffer(y.FRAMEBUFFER,we);const Ne=S.textures[De],Be=Ne.format,Ue=Ne.type;if(!Q.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,qe),y.bufferData(y.PIXEL_PACK_BUFFER,ce.byteLength,y.STREAM_READ),S.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+De),y.readPixels(O,G,W,N,pe.convert(Be),pe.convert(Ue),0);const it=U!==null?j.get(U).__webglFramebuffer:null;q.bindFramebuffer(y.FRAMEBUFFER,it);const Et=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await ub(y,Et,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,qe),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ce),y.deleteBuffer(qe),y.deleteSync(Et),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,G=0){const W=Math.pow(2,-G),N=Math.floor(S.image.width*W),ce=Math.floor(S.image.height*W),ye=O!==null?O.x:0,De=O!==null?O.y:0;X.setTexture2D(S,0),y.copyTexSubImage2D(y.TEXTURE_2D,G,0,0,ye,De,N,ce),q.unbindTexture()};const jp=y.createFramebuffer(),Yp=y.createFramebuffer();this.copyTextureToTexture=function(S,O,G=null,W=null,N=0,ce=null){ce===null&&(N!==0?(Xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=N,N=0):ce=0);let ye,De,we,Ne,Be,Ue,qe,it,Et;const vt=S.isCompressedTexture?S.mipmaps[ce]:S.image;if(G!==null)ye=G.max.x-G.min.x,De=G.max.y-G.min.y,we=G.isBox3?G.max.z-G.min.z:1,Ne=G.min.x,Be=G.min.y,Ue=G.isBox3?G.min.z:0;else{const mn=Math.pow(2,-N);ye=Math.floor(vt.width*mn),De=Math.floor(vt.height*mn),S.isDataArrayTexture?we=vt.depth:S.isData3DTexture?we=Math.floor(vt.depth*mn):we=1,Ne=0,Be=0,Ue=0}W!==null?(qe=W.x,it=W.y,Et=W.z):(qe=0,it=0,Et=0);const dt=pe.convert(O.format),Oe=pe.convert(O.type);let yt;O.isData3DTexture?(X.setTexture3D(O,0),yt=y.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(X.setTexture2DArray(O,0),yt=y.TEXTURE_2D_ARRAY):(X.setTexture2D(O,0),yt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,O.unpackAlignment);const et=y.getParameter(y.UNPACK_ROW_LENGTH),rn=y.getParameter(y.UNPACK_IMAGE_HEIGHT),po=y.getParameter(y.UNPACK_SKIP_PIXELS),on=y.getParameter(y.UNPACK_SKIP_ROWS),ni=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,vt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,vt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ne),y.pixelStorei(y.UNPACK_SKIP_ROWS,Be),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ue);const _t=S.isDataArrayTexture||S.isData3DTexture,pn=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const mn=j.get(S),Wt=j.get(O),Jt=j.get(mn.__renderTarget),Ma=j.get(Wt.__renderTarget);q.bindFramebuffer(y.READ_FRAMEBUFFER,Jt.__webglFramebuffer),q.bindFramebuffer(y.DRAW_FRAMEBUFFER,Ma.__webglFramebuffer);for(let Gr=0;Gr<we;Gr++)_t&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,j.get(S).__webglTexture,N,Ue+Gr),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,j.get(O).__webglTexture,ce,Et+Gr)),y.blitFramebuffer(Ne,Be,ye,De,qe,it,ye,De,y.DEPTH_BUFFER_BIT,y.NEAREST);q.bindFramebuffer(y.READ_FRAMEBUFFER,null),q.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||j.has(S)){const mn=j.get(S),Wt=j.get(O);q.bindFramebuffer(y.READ_FRAMEBUFFER,jp),q.bindFramebuffer(y.DRAW_FRAMEBUFFER,Yp);for(let Jt=0;Jt<we;Jt++)_t?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,mn.__webglTexture,N,Ue+Jt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,mn.__webglTexture,N),pn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Wt.__webglTexture,ce,Et+Jt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Wt.__webglTexture,ce),N!==0?y.blitFramebuffer(Ne,Be,ye,De,qe,it,ye,De,y.COLOR_BUFFER_BIT,y.NEAREST):pn?y.copyTexSubImage3D(yt,ce,qe,it,Et+Jt,Ne,Be,ye,De):y.copyTexSubImage2D(yt,ce,qe,it,Ne,Be,ye,De);q.bindFramebuffer(y.READ_FRAMEBUFFER,null),q.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else pn?S.isDataTexture||S.isData3DTexture?y.texSubImage3D(yt,ce,qe,it,Et,ye,De,we,dt,Oe,vt.data):O.isCompressedArrayTexture?y.compressedTexSubImage3D(yt,ce,qe,it,Et,ye,De,we,dt,vt.data):y.texSubImage3D(yt,ce,qe,it,Et,ye,De,we,dt,Oe,vt):S.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ce,qe,it,ye,De,dt,Oe,vt.data):S.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ce,qe,it,vt.width,vt.height,dt,vt.data):y.texSubImage2D(y.TEXTURE_2D,ce,qe,it,ye,De,dt,Oe,vt);y.pixelStorei(y.UNPACK_ROW_LENGTH,et),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,rn),y.pixelStorei(y.UNPACK_SKIP_PIXELS,po),y.pixelStorei(y.UNPACK_SKIP_ROWS,on),y.pixelStorei(y.UNPACK_SKIP_IMAGES,ni),ce===0&&O.generateMipmaps&&y.generateMipmap(yt),q.unbindTexture()},this.copyTextureToTexture3D=function(S,O,G=null,W=null,N=0){return Xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,G,W,N)},this.initRenderTarget=function(S){j.get(S).__webglFramebuffer===void 0&&X.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?X.setTextureCube(S,0):S.isData3DTexture?X.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?X.setTexture2DArray(S,0):X.setTexture2D(S,0),q.unbindTexture()},this.resetState=function(){D=0,R=0,U=null,q.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const kM=16,IM=12,Po=1024,UM=400,uf=.2,OM=.7,ff=.05,NM=.05,BM="#01030a",FM=24,zM=()=>{let n=null;return{create:()=>{const o=new dr(FM,kM,IM),i=document.createElement("canvas");i.width=Po,i.height=Po;const s=i.getContext("2d");if(s){s.fillStyle=BM,s.fillRect(0,0,Po,Po);for(let d=0;d<UM;d++){const u=Math.random()*Po,f=Math.random()*Po,p=Math.random()*(OM-uf)+uf;let g="white";const _=Math.random();_<ff?g="#00ff00":_<ff+NM&&(g="#ff3333"),s.beginPath(),s.arc(u,f,p,0,Math.PI*2),s.fillStyle=g,s.globalAlpha=Math.random()*.5+.5,s.fill()}s.globalAlpha=1}const a=new Fi(i);a.wrapS=Ii,a.wrapT=Ii;const l=new ya({map:a,side:Kt}),c=new St(o,l);return c.position.set(0,0,0),n=c,n},get:()=>n,dispose:()=>{n=null}}},xc=50,Ei=1,$M=[-2,.51,-2],aa=1.5,Up=[-2.5,-.1,2.5],HM=.5,gl={x:.2,y:1.8,z:.3},VM=1.1,Sc=1.25,GM=.3,WM={x:2,y:1.9+.3,z:1.4},hf={groundSize:xc,cubeSize:Ei,sphereCenter:WM,minDistance:Sc+Ei/2+.2,maxDistance:9},XM="#228B22",jM=.1,YM=.8,qM=()=>{let n=null;return{create:()=>{const o=new os(xc,xc),i=new $r({color:XM,metalness:jM,roughness:YM});return n=new St(o,i),n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n},get:()=>n,dispose:()=>{n=null}}},KM="/scene/assets/box-DlOjVJXT.png",ZM=(n,e,t)=>{const r=[];for(let o=0;o<6;o++){const i=document.createElement("canvas");i.width=e,i.height=e;const s=i.getContext("2d");if(s){const a=new window.Image;a.onload=()=>{s.drawImage(a,0,0,e,e),s.fillStyle="#000",s.fillRect(0,0,e,t),s.fillRect(0,e-t,e,t),s.fillRect(0,0,t,e),s.fillRect(e-t,0,t,e),s.save(),s.strokeStyle="#000",s.lineWidth=7,s.beginPath();const l=Math.random()*(e-80)+40,c=Math.random()*(e-80)+40;s.moveTo(l,c);for(let u=0;u<4;u++){const f=l+Math.random()*100-50,p=c+Math.random()*100-50,g=l+Math.random()*120-60,_=c+Math.random()*120-60;s.bezierCurveTo(f,p,f,p,g,_)}s.stroke(),s.restore();const d=new Fi(i);d.wrapS=1e3,d.wrapT=1e3,r[o]=new $r({metalness:.2,roughness:.6,map:d})},a.src=n}}return r};function JM(n=256,e=512){const t=document.createElement("canvas");t.width=n,t.height=e;const r=t.getContext("2d");r.fillStyle="#e6c89f",r.fillRect(0,0,n,e),r.strokeStyle="#b98c5a",r.lineWidth=6,r.globalAlpha=.25;for(let s=0;s<18;s++){r.beginPath();const a=s/18*e;r.moveTo(0,a);for(let l=0;l<n;l++)r.lineTo(l,a+Math.sin(l/30+s)*7);r.stroke()}r.globalAlpha=1;const o=[{x:.2,y:.3,r:18,angle:.2},{x:.4,y:.7,r:14,angle:.7},{x:.6,y:.5,r:16,angle:1.1},{x:.8,y:.2,r:12,angle:.5},{x:.7,y:.8,r:15,angle:.9}];for(const s of o){const a=s.x*n,l=s.y*e,c=s.r;r.save(),r.globalAlpha=.5,r.beginPath(),r.ellipse(a,l,c,c*.9,s.angle,0,Math.PI*2),r.fillStyle="#b98c5a",r.fill(),r.globalAlpha=.7,r.beginPath(),r.ellipse(a,l,c*.5,c*.3,s.angle+.5,0,Math.PI*2),r.fillStyle="#a67c52",r.fill(),r.restore()}const i=new Fi(t);return i.wrapS=i.wrapT=1e3,i.repeat.set(1,1),new $r({map:i,roughness:.5,metalness:.15})}const QM={left:[-1,0,0],right:[1,0,0],forward:[0,0,-1],back:[0,0,1]};function eE(n,e,t=1){const r=QM[n];return r?e.clone().add(new B(r[0]*t,r[1]*t,r[2]*t)):e.clone()}const tE=256,nE=12,rE=()=>{let n=null;return{create:()=>{const a=ZM(KM,tE,nE);return n=new St(new cr(Ei,Ei,Ei),a),n.position.set(...$M),n.castShadow=!0,n.receiveShadow=!0,n},get:()=>n,move:(a,l)=>{if(!n)return;const d=eE(a,n.position,1),{groundSize:u,cubeSize:f,sphereCenter:p,minDistance:g,maxDistance:_}=l,m=u/2-f/2;d.x=Math.max(-m,Math.min(m,d.x)),d.z=Math.max(-m,Math.min(m,d.z));const h=d.x-p.x,w=d.z-p.z,E=Math.sqrt(h*h+w*w);E<g||E>_||n.position.copy(d)},teleport:a=>{if(!n)return;const{groundSize:l,cubeSize:c,sphereCenter:d,minDistance:u,maxDistance:f}=a,p=l/2-c/2;for(let g=0;g<30;g++){const _=Math.random()*(p*2)-p,m=Math.random()*(p*2)-p,h=new B(_,n.position.y,m),w=_-d.x,E=m-d.z,b=Math.sqrt(w*w+E*E);if(!(b<u)&&!(b>f)){n.position.copy(h);return}}},getCoordinates:()=>n?n.position.clone():null,dispose:()=>{n=null}}},oE=()=>{let n=null,e=null,t=null,r=null,o=null,i=!1;return{create:()=>{if(n)return;n=new oo;const g=new dr(HM,26,90,4),_=256,m=document.createElement("canvas");m.width=_,m.height=_;const h=m.getContext("2d");if(h){const V=h.createLinearGradient(_/2,0,_/2,_);V.addColorStop(0,"#000000"),V.addColorStop(.4,"#000000"),V.addColorStop(.45,"#ff0000"),V.addColorStop(.55,"#ff0000"),V.addColorStop(.6,"#000000"),V.addColorStop(1,"#000000"),h.fillStyle=V,h.fillRect(0,0,_,_)}const w=new Fi(m);w.wrapS=Tn,w.wrapT=Tn;const E=new $r({map:w,metalness:.1,roughness:.3});e=new St(g,E),e.position.set(2,1.9,1.4),e.scale.set(gl.x,gl.y,gl.z),e.castShadow=!1,n.add(e);const b=new dr(VM,15,15),A=256,D=document.createElement("canvas");D.width=A,D.height=A;const R=D.getContext("2d");if(R){const V=R.createRadialGradient(A/2,A/2,A/8,A/2,A/2,A/2);V.addColorStop(0,"#0000FF"),V.addColorStop(1,"#ff0000"),R.fillStyle=V,R.fillRect(0,0,A,A)}const U=new Fi(D);U.wrapS=Tn,U.wrapT=Tn;const T=new $r({map:U,transparent:!0,opacity:.6,roughness:.3,metalness:.1});t=new St(b,T),t.position.copy(e.position),t.castShadow=!0,n.add(t);const M=new dr(Sc,20,20),L=new ya({visible:!1});r=new St(M,L),r.position.copy(e.position),r.position.y+=GM,n.add(r),o=new Gb(16777215,10,40),o.castShadow=!0,o.position.copy(r.position)},getGroup:()=>n,getLight:()=>o,toggle:()=>{i=!i},syncPosition:g=>{if(!r||!o)return;const _=r.position.clone(),m=g.clone().sub(_).normalize(),h=_.clone().add(m.multiplyScalar(Sc));o.position.copy(h)},dispose:()=>{n&&n.clear(),[e,t,r].forEach(g=>{g&&(g.geometry.dispose(),Array.isArray(g.material)?g.material.forEach(_=>_.dispose()):g.material.dispose())}),o&&o.dispose(),n=null,e=null,t=null,r=null,o=null},getIsOn:()=>i,getCoordinates:()=>e?e.position.clone():null}},pf={type:"change"},ud={type:"start"},Op={type:"end"},Os=new vp,mf=new Ar,iE=Math.cos(70*cb.DEG2RAD),Rt=new B,en=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vl=1e-6;class sE extends qb{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Go.ROTATE,MIDDLE:Go.DOLLY,RIGHT:Go.PAN},this.touches={ONE:Uo.ROTATE,TWO:Uo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new co,this._lastTargetPosition=new B,this._quat=new co().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bu,this._sphericalDelta=new Bu,this._scale=1,this._panOffset=new B,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new B,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lE.bind(this),this._onPointerDown=aE.bind(this),this._onPointerUp=cE.bind(this),this._onContextMenu=gE.bind(this),this._onMouseWheel=fE.bind(this),this._onKeyDown=hE.bind(this),this._onTouchStart=pE.bind(this),this._onTouchMove=mE.bind(this),this._onMouseDown=dE.bind(this),this._onMouseMove=uE.bind(this),this._interceptControlDown=vE.bind(this),this._interceptControlUp=bE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pf),this.update(),this.state=lt.NONE}update(e=null){const t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=en:r>Math.PI&&(r-=en),o<-Math.PI?o+=en:o>Math.PI&&(o-=en),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=s!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=Rt.length();s=this._clampDistance(a*this._scale);const l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),i=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),s=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Os.origin.copy(this.object.position),Os.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Os.direction))<iE?this.object.lookAt(this.target):(mf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Os.intersectPlane(mf,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>vl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vl||this._lastTargetPosition.distanceToSquared(this.target)>vl?(this.dispatchEvent(pf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Rt.copy(o).sub(this.target);let i=Rt.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/r.clientHeight,this.object.matrix),this._panUp(2*t*i/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,i=t-r.top,s=r.width,a=r.height;this._mouse.x=o/s*2-1,this._mouse.y=-(i/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,i=Math.sqrt(r*r+o*o);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),i=.5*(e.pageY+r.y);this._rotateEnd.set(o,i)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,i=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,i),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function aE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function lE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function cE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Op),this.state=lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function dE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Go.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=lt.DOLLY;break;case Go.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}break;case Go.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(ud)}function uE(n){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function fE(n){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(n.preventDefault(),this.dispatchEvent(ud),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Op))}function hE(n){this.enabled!==!1&&this._handleKeyDown(n)}function pE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Uo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=lt.TOUCH_ROTATE;break;case Uo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Uo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=lt.TOUCH_DOLLY_PAN;break;case Uo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(ud)}function mE(n){switch(this._trackPointer(n),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=lt.NONE}}function gE(n){this.enabled!==!1&&n.preventDefault()}function vE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _E=()=>{let n=null,e=null,t=null,r=null;return{create:d=>{n=new LM({canvas:d,antialias:!0}),n.setClearColor("#e0e7ef"),n.setSize(d.clientWidth,d.clientHeight,!1),n.shadowMap.enabled=!0,n.shadowMap.type=tp,n.toneMapping=rp,n.toneMappingExposure=1.2,n.outputColorSpace=cn,e=new dn(60,d.clientWidth/d.clientHeight,.1,100),e.position.set(-5.3,4.4,1.1),e.lookAt(0,0,0),t=new sE(e,n.domElement),t.enableDamping=!0,t.dampingFactor=.05,t.enableZoom=!0,t.enablePan=!0,t.minPolarAngle=.3,t.maxPolarAngle=Math.PI/2,t.target.set(0,1,0);const u=24,f=.5;t.maxDistance=u-f,t.minDistance=2,r=new Ob},getRenderer:()=>n,getCamera:()=>e,getControls:()=>t,getScene:()=>r,dispose:()=>{n?.dispose(),t?.dispose(),n=null,e=null,t=null,r=null}}},yE=()=>{let n=null,e=null,t=!1;const r=()=>{if(n||e)return;n=new jb(16777215,.6),e=new Xb(16777215,1),e.position.set(5,5,5),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048;const c=15;e.shadow.camera.left=-c,e.shadow.camera.right=c,e.shadow.camera.top=c,e.shadow.camera.bottom=-c,e.shadow.camera.near=.1,e.shadow.camera.far=50},o=()=>n,i=()=>e,s=()=>t,a=()=>{n?.dispose(),e?.dispose(),n=null,e=null,t=!1};return{create:r,getAmbient:o,getDirectional:i,getState:s,dispose:a,toggle:()=>{const c=[],d=[];return t?(n&&d.push(n),e&&d.push(e),a(),t=!1):(r(),n&&c.push(n),e&&c.push(e),t=!0),{add:c,remove:d}}}},xE=()=>{let n=null;return{create:({width:s=aa,height:a=aa*2,depth:l=.2,position:c=Up}={})=>{const d=new oo;let u,f,p,g,_,m,h;const w=()=>{d.clear();const E=JM(),b=new $r({color:6045747,roughness:.7,metalness:.1}),A=new $r({color:13421772,metalness:.8,roughness:.2}),D=new cr(s,a,l);u=new St(D,E),u.position.set(0,a/2,0),u.castShadow=!0,u.receiveShadow=!0;const R=.1,U=l+.05,T=s+R*2,M=new cr(T,R,U);f=new St(M,b),f.position.set(0,a+R/2,0),f.castShadow=!0,f.receiveShadow=!0,p=new St(M,b),p.position.set(0,-R/2,0),p.castShadow=!0,p.receiveShadow=!0;const L=new cr(R,a,U);g=new St(L,b),g.position.set(-s/2-R/2,a/2,0),g.castShadow=!0,g.receiveShadow=!0,_=new St(L,b),_.position.set(s/2+R/2,a/2,0),_.castShadow=!0,_.receiveShadow=!0;const V=.08,H=a*.33,te=-s/2+V*2;m=new St(new dr(V,24,24),A),m.position.set(te,H,l/2+V),h=new St(new dr(V,24,24),A),h.position.set(te,H,-l/2-V),d.add(u,f,p,g,_,m,h),d.position.set(c[0],c[1],c[2])};return w(),d.setSize=({width:E,height:b,depth:A})=>{s=E??s,a=b??a,l=A??l,w()},n=d,d},get:()=>n,setSize:s=>{n&&typeof n.setSize=="function"&&n.setSize(s)},lookAt:s=>{if(!n)return;const a=s instanceof B?s:new B(...s);a.y=n.position.y,n.lookAt(a)},dispose:()=>{n&&n.clear(),n=null}}},SE=()=>{let n=null,e=null,t=null,r=null;return{create:(c,d=1)=>{if(n)return;const u=new Tp(256);t=new Ep(.1,100,u),t.position.set(...c);const f=new zb({metalness:1,roughness:0,clearcoat:1,clearcoatRoughness:0,reflectivity:1,envMap:t.renderTarget.texture,envMapIntensity:1}),p=new dr(d/2,48,32);e=new St(p,f),e.position.set(...c),e.castShadow=!0,e.receiveShadow=!0,n=new oo,n.add(e),n.add(t),r=(g,_)=>{!e||!t||(e.visible=!1,t.update(g,_),e.visible=!0)}},getGroup:()=>n,getCamera:()=>t,getUpdate:()=>r,dispose:()=>{n&&n.clear(),e&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(c=>c.dispose()):e.material.dispose()),n=null,e=null,t=null,r=null}}};function ME(n,e){let t=0,r=null,o;return function(...s){const a=Date.now();o=s,a-t>=e?(t=a,n.apply(this,s)):r||(r=setTimeout(()=>{t=Date.now(),r=null,n.apply(this,o)},e-(a-t)))}}const EE=()=>{const n=[];return{subscribe:(r,o=500)=>{let i=()=>console.log(r);o>0&&(i=ME(i,o)),n.push({log:i})},tick:()=>{for(const{log:r}of n)r()}}},wE=()=>{let n=null;const e=_E(),t=zM(),r=qM(),o=yE(),i=rE(),s=oE(),a=xE(),l=SE(),c=m=>{e.create(m);const h=e.getScene();if(!h)throw new Error("Scene not initialized");t.create(),h.add(t.get()),r.create(),h.add(r.get()),o.create(),i.create(),h.add(i.get()),s.create(),h.add(s.getGroup()),p(),s.syncPosition(i.getCoordinates()),l.create([2,.5,-2],1),h.add(l.getGroup()),a.create({width:aa,height:aa*2,depth:.2,position:Up}),h.add(a.get()),a.lookAt(s.getCoordinates());const w=e.getControls(),E=e.getCamera(),b=e.getRenderer(),A=EE();A.subscribe(E?.position,1e3);const D=()=>{w?.update();const R=l.getUpdate();R&&b&&R(b,h),E&&b&&b.render(h,E),n=requestAnimationFrame(D),A.tick()};return D(),h},d=()=>{const{add:m,remove:h}=o.toggle(),w=e.getScene();w&&(m.forEach(E=>w.add(E)),h.forEach(E=>w.remove(E)))},u=m=>{i.move(m,hf),s.syncPosition(i.getCoordinates())},f=()=>{i.teleport(hf),s.syncPosition(i.getCoordinates())},p=()=>{const m=e.getScene();if(!m)return;const h=s.getLight();h&&(s.toggle(),s.getIsOn()?m.add(h):m.remove(h))};return{mount:c,destroy:()=>{n&&(cancelAnimationFrame(n),n=null),a.dispose(),e.dispose()},toggleAmbientLight:d,toggleEyeLight:p,moveCube:u,teleportCube:f,setDoorSize:({width:m,height:h})=>{a.setSize({width:m,height:h})}}};var Pr={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function TE(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pc",e=Hm();return"".concat(n).concat(e.replace("v-","").replaceAll("-","_"))}var gf=ft.extend({name:"common"});function zi(n){"@babel/helpers - typeof";return zi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zi(n)}function CE(n){return Fp(n)||AE(n)||Bp(n)||Np()}function AE(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ui(n,e){return Fp(n)||RE(n,e)||Bp(n,e)||Np()}function Np(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bp(n,e){if(n){if(typeof n=="string")return vf(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?vf(n,e):void 0}}function vf(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function RE(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function Fp(n){if(Array.isArray(n))return n}function bf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Ke(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?bf(Object(t),!0).forEach(function(r){mi(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):bf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function mi(n,e,t){return(e=PE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function PE(n){var e=DE(n,"string");return zi(e)=="symbol"?e:e+""}function DE(n,e){if(zi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(zi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var is={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){Ut.off("theme:change",this._loadCoreStyles),e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e,t){var r=this;Ut.off("theme:change",this._themeScopedListener),e?(this._loadScopedThemeStyles(e),this._themeScopedListener=function(){return r._loadScopedThemeStyles(e)},this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,uid:void 0,$attrSelector:void 0,beforeCreate:function(){var e,t,r,o,i,s,a,l,c,d,u,f=(e=this.pt)===null||e===void 0?void 0:e._usept,p=f?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,g=f?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(o=g||p)===null||o===void 0||(o=o.hooks)===null||o===void 0||(i=o.onBeforeCreate)===null||i===void 0||i.call(o);var _=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,m=_?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,h=_?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(d=h||m)===null||d===void 0||(d=d[this.$.type.name])===null||d===void 0||(d=d.hooks)===null||d===void 0||(u=d.onBeforeCreate)===null||u===void 0||u.call(d),this.$attrSelector=TE(),this.uid=this.$attrs.id||this.$attrSelector.replace("pc","pv_id_")},created:function(){this._hook("onCreated")},beforeMount:function(){var e;this.rootEl=na(Qi(this.$el)?this.$el:(e=this.$el)===null||e===void 0?void 0:e.parentElement,"[".concat(this.$attrSelector,"]")),this.rootEl&&(this.rootEl.$pc=Ke({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t?.(),r?.()}},_mergeProps:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return Zc(e)?e.apply(void 0,r):xt.apply(void 0,r)},_load:function(){Pr.isStyleNameLoaded("base")||(ft.loadCSS(this.$styleOptions),this._loadGlobalStyles(),Pr.setLoadedStyleName("base")),this._loadThemeStyles()},_loadStyles:function(){this._load(),this._themeChangeListener(this._load)},_loadCoreStyles:function(){var e,t;!Pr.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name&&(gf.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),Pr.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);pt(e)&&ft.load(e,Ke({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,t;if(!(this.isUnstyled||this.$theme==="none")){if(!at.isStyleNameLoaded("common")){var r,o,i=((r=this.$style)===null||r===void 0||(o=r.getCommonTheme)===null||o===void 0?void 0:o.call(r))||{},s=i.primitive,a=i.semantic,l=i.global,c=i.style;ft.load(s?.css,Ke({name:"primitive-variables"},this.$styleOptions)),ft.load(a?.css,Ke({name:"semantic-variables"},this.$styleOptions)),ft.load(l?.css,Ke({name:"global-variables"},this.$styleOptions)),ft.loadStyle(Ke({name:"global-style"},this.$styleOptions),c),at.setLoadedStyleName("common")}if(!at.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name){var d,u,f,p,g=((d=this.$style)===null||d===void 0||(u=d.getComponentTheme)===null||u===void 0?void 0:u.call(d))||{},_=g.css,m=g.style;(f=this.$style)===null||f===void 0||f.load(_,Ke({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(p=this.$style)===null||p===void 0||p.loadStyle(Ke({name:"".concat(this.$style.name,"-style")},this.$styleOptions),m),at.setLoadedStyleName(this.$style.name)}if(!at.isStyleNameLoaded("layer-order")){var h,w,E=(h=this.$style)===null||h===void 0||(w=h.getLayerOrderThemeCSS)===null||w===void 0?void 0:w.call(h);ft.load(E,Ke({name:"layer-order",first:!0},this.$styleOptions)),at.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var t,r,o,i=((t=this.$style)===null||t===void 0||(r=t.getPresetTheme)===null||r===void 0?void 0:r.call(t,e,"[".concat(this.$attrSelector,"]")))||{},s=i.css,a=(o=this.$style)===null||o===void 0?void 0:o.load(s,Ke({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Pr.clearLoadedStyleNames(),Ut.on("theme:change",e)},_removeThemeListeners:function(){Ut.off("theme:change",this._loadCoreStyles),Ut.off("theme:change",this._load),Ut.off("theme:change",this._themeScopedListener)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Jc(e,t,r)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!o[r.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,d=a.mergeProps,u=d===void 0?!1:d,f=i?s?this._useGlobalPT(this._getPTClassValue,r,o):this._useDefaultPT(this._getPTClassValue,r,o):void 0,p=s?void 0:this._getPTSelf(t,this._getPTClassValue,r,Ke(Ke({},o),{},{global:f||{}})),g=this._getPTDatasets(r);return c||!c&&p?u?this._mergeProps(u,f,p,g):Ke(Ke(Ke({},f),p),g):Ke(Ke({},p),g)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return xt(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o="data-pc-",i=r==="root"&&pt((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&Ke(Ke({},r==="root"&&Ke(Ke(mi({},"".concat(o,"name"),On(i?(t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]:this.$.type.name)),i&&mi({},"".concat(o,"extend"),On(this.$.type.name))),{},mi({},"".concat(this.$attrSelector),""))),{},mi({},"".concat(o,"section"),On(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return hn(e)||Bh(e)?{class:e}:e},_getPT:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,i=function(a){var l,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=o?o(a):a,u=On(r),f=On(t.$name);return(l=c?u!==f?d?.[u]:void 0:d?.[u])!==null&&l!==void 0?l:d};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e,!0)},_usePT:function(e,t,r,o){var i=function(_){return t(_,r,o)};if(e!=null&&e.hasOwnProperty("_usept")){var s,a=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,d=a.mergeProps,u=d===void 0?!1:d,f=i(e.originalValue),p=i(e.value);return f===void 0&&p===void 0?void 0:hn(p)?p:hn(f)?f:c||!c&&p?u?this._mergeProps(u,f,p):Ke(Ke({},f),p):p}return i(e)},_useGlobalPT:function(e,t,r){return this._usePT(this.globalPT,e,t,r)},_useDefaultPT:function(e,t,r){return this._usePT(this.defaultPT,e,t,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,Ke(Ke({},this.$params),t))},ptmi:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=xt(this.$_attrsWithoutPT,this.ptm(t,r));return o?.hasOwnProperty("id")&&((e=o.id)!==null&&e!==void 0||(o.id=this.$id)),o},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,Ke({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,Ke(Ke({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var o=this._getOptionValue(this.$style.inlineStyles,e,Ke(Ke({},this.$params),r)),i=this._getOptionValue(gf.inlineStyles,e,Ke(Ke({},this.$params),r));return[i,o]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return fn(r,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return t._getOptionValue(r,t.$name,Ke({},t.$params))||fn(r,Ke({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$id:function(){return this.$attrs.id||this.uid},$inProps:function(){var e,t=Object.keys(((e=this.$.vnode)===null||e===void 0?void 0:e.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(r){var o=ui(r,1),i=o[0];return t?.includes(i)}))},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return Ke(Ke({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e?.$props,state:e?.$data,attrs:e?.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=ui(e,1),r=t[0];return r?.startsWith("pt:")}).reduce(function(e,t){var r=ui(t,2),o=r[0],i=r[1],s=o.split(":"),a=CE(s),l=a.slice(1);return l?.reduce(function(c,d,u,f){return!c[d]&&(c[d]=u===f.length-1?i:{}),c[d]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=ui(e,1),r=t[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,t){var r=ui(t,2),o=r[0],i=r[1];return e[o]=i,e},{})}}},LE=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,kE={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},IE=ft.extend({name:"progressspinner",style:LE,classes:kE}),UE={name:"BaseProgressSpinner",extends:is,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:IE,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},zp={name:"ProgressSpinner",extends:UE,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},OE=["fill","stroke-width"];function NE(n,e,t,r,o,i){return bt(),$t("div",xt({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(bt(),$t("svg",xt({class:n.cx("spin"),viewBox:"25 25 50 50",style:i.svgStyle},n.ptm("spin")),[wt("circle",xt({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,OE)],16))],16)}zp.render=NE;const BE={style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},FE=Zi({__name:"Loader",setup(n){return(e,t)=>(bt(),$t("div",BE,[Pt(kr(zp),{style:{width:"50px",height:"50px"},strokeWidth:"4",animationDuration:"1s","aria-label":"Loading"})]))}});var zE=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,$E=ft.extend({name:"baseicon",css:zE});function $i(n){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$i(n)}function _f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function yf(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?_f(Object(t),!0).forEach(function(r){HE(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_f(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function HE(n,e,t){return(e=VE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function VE(n){var e=GE(n,"string");return $i(e)=="symbol"?e:e+""}function GE(n,e){if($i(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if($i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var WE={name:"BaseIcon",extends:is,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:$E,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=Br(this.label);return yf(yf({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},$p={name:"SpinnerIcon",extends:WE};function XE(n,e,t,r,o,i){return bt(),$t("svg",xt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[wt("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}$p.render=XE;var jE=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`,YE={root:function(e){var t=e.props,r=e.instance;return["p-badge p-component",{"p-badge-circle":pt(t.value)&&String(t.value).length===1,"p-badge-dot":Br(t.value)&&!r.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]}},qE=ft.extend({name:"badge",style:jE,classes:YE}),KE={name:"BaseBadge",extends:is,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:qE,provide:function(){return{$pcBadge:this,$parentInstance:this}}};function Hi(n){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hi(n)}function xf(n,e,t){return(e=ZE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ZE(n){var e=JE(n,"string");return Hi(e)=="symbol"?e:e+""}function JE(n,e){if(Hi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Hp={name:"Badge",extends:KE,inheritAttrs:!1,computed:{dataP:function(){return Vo(xf(xf({circle:this.value!=null&&String(this.value).length===1,empty:this.value==null&&!this.$slots.default},this.severity,this.severity),this.size,this.size))}}},QE=["data-p"];function ew(n,e,t,r,o,i){return bt(),$t("span",xt({class:n.cx("root"),"data-p":i.dataP},n.ptmi("root")),[ko(n.$slots,"default",{},function(){return[Lh(Yo(n.value),1)]})],16,QE)}Hp.render=ew;function Vi(n){"@babel/helpers - typeof";return Vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vi(n)}function Sf(n,e){return ow(n)||rw(n,e)||nw(n,e)||tw()}function tw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nw(n,e){if(n){if(typeof n=="string")return Mf(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Mf(n,e):void 0}}function Mf(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function rw(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(l=(r=i.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function ow(n){if(Array.isArray(n))return n}function Ef(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Qe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ef(Object(t),!0).forEach(function(r){Mc(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ef(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Mc(n,e,t){return(e=iw(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function iw(n){var e=sw(n,"string");return Vi(e)=="symbol"?e:e+""}function sw(n,e){if(Vi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Ge={_getMeta:function(){return[pr(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],fn(pr(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,t){var r,o,i;return(r=(e==null||(o=e.instance)===null||o===void 0?void 0:o.$primevue)||(t==null||(i=t.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:Jc,_getPTValue:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var w=Ge._getOptionValue.apply(Ge,arguments);return hn(w)||Bh(w)?{class:w}:w},c=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((t=r.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},d=c.mergeSections,u=d===void 0?!0:d,f=c.mergeProps,p=f===void 0?!1:f,g=a?Ge._useDefaultPT(r,r.defaultPT(),l,i,s):void 0,_=Ge._usePT(r,Ge._getPT(o,r.$name),l,i,Qe(Qe({},s),{},{global:g||{}})),m=Ge._getPTDatasets(r,i);return u||!u&&_?p?Ge._mergeProps(r,p,g,_,m):Qe(Qe(Qe({},g),_),m):Qe(Qe({},_),m)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return Qe(Qe({},t==="root"&&Mc({},"".concat(r,"name"),On(e.$name))),{},Mc({},"".concat(r,"section"),On(t)))},_getPT:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=function(s){var a,l=r?r(s):s,c=On(t);return(a=l?.[c])!==null&&a!==void 0?a:l};return e&&Object.hasOwn(e,"_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,s=function(m){return r(m,o,i)};if(t&&Object.hasOwn(t,"_usept")){var a,l=t._usept||((a=e.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},c=l.mergeSections,d=c===void 0?!0:c,u=l.mergeProps,f=u===void 0?!1:u,p=s(t.originalValue),g=s(t.value);return p===void 0&&g===void 0?void 0:hn(g)?g:hn(p)?p:d||!d&&g?f?Ge._mergeProps(e,f,p,g):Qe(Qe({},p),g):g}return s(t)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return Ge._usePT(e,t,r,o,i)},_loadStyles:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,i=Ge._getConfig(r,o),s={nonce:i==null||(e=i.csp)===null||e===void 0?void 0:e.nonce};Ge._loadCoreStyles(t,s),Ge._loadThemeStyles(t,s),Ge._loadScopedThemeStyles(t,s),Ge._removeThemeListeners(t),t.$loadStyles=function(){return Ge._loadThemeStyles(t,s)},Ge._themeChangeListener(t.$loadStyles)},_loadCoreStyles:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!Pr.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(t=r.$style)!==null&&t!==void 0&&t.name){var i;ft.loadCSS(o),(i=r.$style)===null||i===void 0||i.loadCSS(o),Pr.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var e,t,r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!(o!=null&&o.isUnstyled()||(o==null||(e=o.theme)===null||e===void 0?void 0:e.call(o))==="none")){if(!at.isStyleNameLoaded("common")){var s,a,l=((s=o.$style)===null||s===void 0||(a=s.getCommonTheme)===null||a===void 0?void 0:a.call(s))||{},c=l.primitive,d=l.semantic,u=l.global,f=l.style;ft.load(c?.css,Qe({name:"primitive-variables"},i)),ft.load(d?.css,Qe({name:"semantic-variables"},i)),ft.load(u?.css,Qe({name:"global-variables"},i)),ft.loadStyle(Qe({name:"global-style"},i),f),at.setLoadedStyleName("common")}if(!at.isStyleNameLoaded((t=o.$style)===null||t===void 0?void 0:t.name)&&(r=o.$style)!==null&&r!==void 0&&r.name){var p,g,_,m,h=((p=o.$style)===null||p===void 0||(g=p.getDirectiveTheme)===null||g===void 0?void 0:g.call(p))||{},w=h.css,E=h.style;(_=o.$style)===null||_===void 0||_.load(w,Qe({name:"".concat(o.$style.name,"-variables")},i)),(m=o.$style)===null||m===void 0||m.loadStyle(Qe({name:"".concat(o.$style.name,"-style")},i),E),at.setLoadedStyleName(o.$style.name)}if(!at.isStyleNameLoaded("layer-order")){var b,A,D=(b=o.$style)===null||b===void 0||(A=b.getLayerOrderThemeCSS)===null||A===void 0?void 0:A.call(b);ft.load(D,Qe({name:"layer-order",first:!0},i)),at.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=e.preset();if(r&&e.$attrSelector){var o,i,s,a=((o=e.$style)===null||o===void 0||(i=o.getPresetTheme)===null||i===void 0?void 0:i.call(o,r,"[".concat(e.$attrSelector,"]")))||{},l=a.css,c=(s=e.$style)===null||s===void 0?void 0:s.load(l,Qe({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},t));e.scopedStyleEl=c.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Pr.clearLoadedStyleNames(),Ut.on("theme:change",e)},_removeThemeListeners:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ut.off("theme:change",e.$loadStyles),e.$loadStyles=void 0},_hook:function(e,t,r,o,i,s){var a,l,c="on".concat(x0(t)),d=Ge._getConfig(o,i),u=r?.$instance,f=Ge._usePT(u,Ge._getPT(o==null||(a=o.value)===null||a===void 0?void 0:a.pt,e),Ge._getOptionValue,"hooks.".concat(c)),p=Ge._useDefaultPT(u,d==null||(l=d.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[e],Ge._getOptionValue,"hooks.".concat(c)),g={el:r,binding:o,vnode:i,prevVnode:s};f?.(u,g),p?.(u,g)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,t=arguments.length,r=new Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return Zc(e)?e.apply(void 0,r):xt.apply(void 0,r)},_extend:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(a,l,c,d,u){var f,p,g,_;l._$instances=l._$instances||{};var m=Ge._getConfig(c,d),h=l._$instances[e]||{},w=Br(h)?Qe(Qe({},t),t?.methods):{};l._$instances[e]=Qe(Qe({},h),{},{$name:e,$host:l,$binding:c,$modifiers:c?.modifiers,$value:c?.value,$el:h.$el||l||void 0,$style:Qe({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},t?.style),$primevueConfig:m,$attrSelector:(f=l.$pd)===null||f===void 0||(f=f[e])===null||f===void 0?void 0:f.attrSelector,defaultPT:function(){return Ge._getPT(m?.pt,void 0,function(b){var A;return b==null||(A=b.directives)===null||A===void 0?void 0:A[e]})},isUnstyled:function(){var b,A;return((b=l._$instances[e])===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.unstyled)!==void 0?(A=l._$instances[e])===null||A===void 0||(A=A.$binding)===null||A===void 0||(A=A.value)===null||A===void 0?void 0:A.unstyled:m?.unstyled},theme:function(){var b;return(b=l._$instances[e])===null||b===void 0||(b=b.$primevueConfig)===null||b===void 0?void 0:b.theme},preset:function(){var b;return(b=l._$instances[e])===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.dt},ptm:function(){var b,A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ge._getPTValue(l._$instances[e],(b=l._$instances[e])===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.pt,A,Qe({},D))},ptmo:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Ge._getPTValue(l._$instances[e],b,A,D,!1)},cx:function(){var b,A,D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(b=l._$instances[e])!==null&&b!==void 0&&b.isUnstyled()?void 0:Ge._getOptionValue((A=l._$instances[e])===null||A===void 0||(A=A.$style)===null||A===void 0?void 0:A.classes,D,Qe({},R))},sx:function(){var b,A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return D?Ge._getOptionValue((b=l._$instances[e])===null||b===void 0||(b=b.$style)===null||b===void 0?void 0:b.inlineStyles,A,Qe({},R)):void 0}},w),l.$instance=l._$instances[e],(p=(g=l.$instance)[a])===null||p===void 0||p.call(g,l,c,d,u),l["$".concat(e)]=l.$instance,Ge._hook(e,a,l,c,d,u),l.$pd||(l.$pd={}),l.$pd[e]=Qe(Qe({},(_=l.$pd)===null||_===void 0?void 0:_[e]),{},{name:e,instance:l._$instances[e]})},o=function(a){var l,c,d,u=a._$instances[e],f=u?.watch,p=function(m){var h,w=m.newValue,E=m.oldValue;return f==null||(h=f.config)===null||h===void 0?void 0:h.call(u,w,E)},g=function(m){var h,w=m.newValue,E=m.oldValue;return f==null||(h=f["config.ripple"])===null||h===void 0?void 0:h.call(u,w,E)};u.$watchersCallback={config:p,"config.ripple":g},f==null||(l=f.config)===null||l===void 0||l.call(u,u?.$primevueConfig),Dr.on("config:change",p),f==null||(c=f["config.ripple"])===null||c===void 0||c.call(u,u==null||(d=u.$primevueConfig)===null||d===void 0?void 0:d.ripple),Dr.on("config:ripple:change",g)},i=function(a){var l=a._$instances[e].$watchersCallback;l&&(Dr.off("config:change",l.config),Dr.off("config:ripple:change",l["config.ripple"]),a._$instances[e].$watchersCallback=void 0)};return{created:function(a,l,c,d){a.$pd||(a.$pd={}),a.$pd[e]={name:e,attrSelector:hi("pd")},r("created",a,l,c,d)},beforeMount:function(a,l,c,d){var u;Ge._loadStyles((u=a.$pd[e])===null||u===void 0?void 0:u.instance,l,c),r("beforeMount",a,l,c,d),o(a)},mounted:function(a,l,c,d){var u;Ge._loadStyles((u=a.$pd[e])===null||u===void 0?void 0:u.instance,l,c),r("mounted",a,l,c,d)},beforeUpdate:function(a,l,c,d){r("beforeUpdate",a,l,c,d)},updated:function(a,l,c,d){var u;Ge._loadStyles((u=a.$pd[e])===null||u===void 0?void 0:u.instance,l,c),r("updated",a,l,c,d)},beforeUnmount:function(a,l,c,d){var u;i(a),Ge._removeThemeListeners((u=a.$pd[e])===null||u===void 0?void 0:u.instance),r("beforeUnmount",a,l,c,d)},unmounted:function(a,l,c,d){var u;(u=a.$pd[e])===null||u===void 0||(u=u.instance)===null||u===void 0||(u=u.scopedStyleEl)===null||u===void 0||(u=u.value)===null||u===void 0||u.remove(),r("unmounted",a,l,c,d)}}},extend:function(){var e=Ge._getMeta.apply(Ge,arguments),t=Sf(e,2),r=t[0],o=t[1];return Qe({extend:function(){var s=Ge._getMeta.apply(Ge,arguments),a=Sf(s,2),l=a[0],c=a[1];return Ge.extend(l,Qe(Qe(Qe({},o),o?.methods),c))}},Ge._extend(r,o))}},aw=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,lw={root:"p-ink"},cw=ft.extend({name:"ripple-directive",style:aw,classes:lw}),dw=Ge.extend({style:cw});function Gi(n){"@babel/helpers - typeof";return Gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gi(n)}function uw(n){return mw(n)||pw(n)||hw(n)||fw()}function fw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hw(n,e){if(n){if(typeof n=="string")return Ec(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ec(n,e):void 0}}function pw(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function mw(n){if(Array.isArray(n))return Ec(n)}function Ec(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function wf(n,e,t){return(e=gw(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function gw(n){var e=vw(n,"string");return Gi(e)=="symbol"?e:e+""}function vw(n,e){if(Gi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var bw=dw.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var t=this.getInk(e);t||(t=$s("span",wf(wf({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root"))),e.appendChild(t),this.$el=t)},remove:function(e){var t=this.getInk(e);t&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),t.removeEventListener("animationend",this.onAnimationEnd),t.remove())},onMouseDown:function(e){var t=this,r=e.currentTarget,o=this.getInk(r);if(!(!o||getComputedStyle(o,null).display==="none")){if(!this.isUnstyled()&&zs(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"),!Kd(o)&&!Zd(o)){var i=Math.max(Mr(r),Er(r));o.style.height=i+"px",o.style.width=i+"px"}var s=E0(r),a=e.pageX-s.left+document.body.scrollTop-Zd(o)/2,l=e.pageY-s.top+document.body.scrollLeft-Kd(o)/2;o.style.top=l+"px",o.style.left=a+"px",!this.isUnstyled()&&Hh(o,"p-ink-active"),o.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){o&&(!t.isUnstyled()&&zs(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&zs(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?uw(e.children).find(function(t){return Cr(t,"data-pc-name")==="ripple"}):void 0}}}),_w=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;function Wi(n){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wi(n)}function Ln(n,e,t){return(e=yw(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function yw(n){var e=xw(n,"string");return Wi(e)=="symbol"?e:e+""}function xw(n,e){if(Wi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Sw={root:function(e){var t=e.instance,r=e.props;return["p-button p-component",Ln(Ln(Ln(Ln(Ln(Ln(Ln(Ln(Ln({"p-button-icon-only":t.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link||r.variant==="link"},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text||r.variant==="text"),"p-button-outlined",r.outlined||r.variant==="outlined"),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",t.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var t=e.props;return["p-button-icon",Ln({},"p-button-icon-".concat(t.iconPos),t.label)]},label:"p-button-label"},Mw=ft.extend({name:"button",style:_w,classes:Sw}),Ew={name:"BaseButton",extends:is,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:Mw,provide:function(){return{$pcButton:this,$parentInstance:this}}};function Xi(n){"@babel/helpers - typeof";return Xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xi(n)}function tn(n,e,t){return(e=ww(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ww(n){var e=Tw(n,"string");return Xi(e)=="symbol"?e:e+""}function Tw(n,e){if(Xi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Xi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var qs={name:"Button",extends:Ew,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return xt(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Br(this.fluid)?!!this.$pcFluid:this.fluid},dataP:function(){return Vo(tn(tn(tn(tn(tn(tn(tn(tn(tn(tn({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge),"loading",this.loading),"fluid",this.hasFluid),"rounded",this.rounded),"raised",this.raised),"outlined",this.outlined||this.variant==="outlined"),"text",this.text||this.variant==="text"),"link",this.link||this.variant==="link"),"vertical",(this.iconPos==="top"||this.iconPos==="bottom")&&this.label))},dataIconP:function(){return Vo(tn(tn({},this.iconPos,this.iconPos),this.size,this.size))},dataLabelP:function(){return Vo(tn(tn({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge))}},components:{SpinnerIcon:$p,Badge:Hp},directives:{ripple:bw}},Cw=["data-p"],Aw=["data-p"];function Rw(n,e,t,r,o,i){var s=Md("SpinnerIcon"),a=Md("Badge"),l=eg("ripple");return n.asChild?ko(n.$slots,"default",{key:1,class:wi(n.cx("root")),a11yAttrs:i.a11yAttrs}):Fm((bt(),ar(Qm(n.as),xt({key:0,class:n.cx("root"),"data-p":i.dataP},i.attrs),{default:Hc(function(){return[ko(n.$slots,"default",{},function(){return[n.loading?ko(n.$slots,"loadingicon",xt({key:0,class:[n.cx("loadingIcon"),n.cx("icon")]},n.ptm("loadingIcon")),function(){return[n.loadingIcon?(bt(),$t("span",xt({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(bt(),ar(s,xt({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):ko(n.$slots,"icon",xt({key:1,class:[n.cx("icon")]},n.ptm("icon")),function(){return[n.icon?(bt(),$t("span",xt({key:0,class:[n.cx("icon"),n.icon,n.iconClass],"data-p":i.dataIconP},n.ptm("icon")),null,16,Cw)):Ir("",!0)]}),n.label?(bt(),$t("span",xt({key:2,class:n.cx("label")},n.ptm("label"),{"data-p":i.dataLabelP}),Yo(n.label),17,Aw)):Ir("",!0),n.badge?(bt(),ar(a,{key:3,value:n.badge,class:wi(n.badgeClass),severity:n.badgeSeverity,unstyled:n.unstyled,pt:n.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):Ir("",!0)]})]}),_:3},16,["class","data-p"])),[[l]])}qs.render=Rw;const Pw={},Dw={class:"scene-hints"};function Lw(n,e){return bt(),$t("div",Dw,e[0]||(e[0]=[wt("div",{class:"hint-title"},"Управление кубом:",-1),wt("ul",{class:"hint-list"},[wt("li",null,"⬅️ ⬆️ ⬇️ ➡️ — перемещение куба по земле"),wt("li",null,"Колесо мыши — приближение/отдаление камеры")],-1)]))}const kw=Qh(Pw,[["render",Lw],["__scopeId","data-v-ebb42e84"]]);var Iw={name:"BaseEditableHolder",extends:is,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue!==void 0?this.defaultValue:this.modelValue}},watch:{modelValue:function(e){this.d_value=e},defaultValue:function(e){this.d_value=e},$formName:{immediate:!0,handler:function(e){var t,r;this.formField=((t=this.$pcForm)===null||t===void 0||(r=t.register)===null||r===void 0?void 0:r.call(t,e,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(e){var t,r;this.formField=((t=this.$pcForm)===null||t===void 0||(r=t.register)===null||r===void 0?void 0:r.call(t,this.$formName,e))||{}}},$formDefaultValue:{immediate:!0,handler:function(e){this.d_value!==e&&(this.d_value=e)}},$formValue:{immediate:!1,handler:function(e){var t;(t=this.$pcForm)!==null&&t!==void 0&&t.getFieldState(this.$formName)&&e!==this.d_value&&(this.d_value=e)}}},formField:{},methods:{writeValue:function(e,t){var r,o;this.controlled&&(this.d_value=e,this.$emit("update:modelValue",e)),this.$emit("value-change",e),(r=(o=this.formField).onChange)===null||r===void 0||r.call(o,{originalEvent:t,value:e})},findNonEmpty:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.find(pt)}},computed:{$filled:function(){return pt(this.d_value)},$invalid:function(){var e,t;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(e=this.$pcFormField)===null||e===void 0||(e=e.$field)===null||e===void 0?void 0:e.invalid,(t=this.$pcForm)===null||t===void 0||(t=t.getFieldState(this.$formName))===null||t===void 0?void 0:t.invalid)},$formName:function(){var e;return this.$formNovalidate?void 0:this.name||((e=this.$formControl)===null||e===void 0?void 0:e.name)},$formControl:function(){var e;return this.formControl||((e=this.$pcFormField)===null||e===void 0?void 0:e.formControl)},$formNovalidate:function(){var e;return(e=this.$formControl)===null||e===void 0?void 0:e.novalidate},$formDefaultValue:function(){var e,t;return this.findNonEmpty(this.d_value,(e=this.$pcFormField)===null||e===void 0?void 0:e.initialValue,(t=this.$pcForm)===null||t===void 0||(t=t.initialValues)===null||t===void 0?void 0:t[this.$formName])},$formValue:function(){var e,t;return this.findNonEmpty((e=this.$pcFormField)===null||e===void 0||(e=e.$field)===null||e===void 0?void 0:e.value,(t=this.$pcForm)===null||t===void 0||(t=t.getFieldState(this.$formName))===null||t===void 0?void 0:t.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},Uw=`
    .p-slider {
        display: block;
        position: relative;
        background: dt('slider.track.background');
        border-radius: dt('slider.track.border.radius');
    }

    .p-slider-handle {
        cursor: grab;
        touch-action: none;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: dt('slider.handle.height');
        width: dt('slider.handle.width');
        background: dt('slider.handle.background');
        border-radius: dt('slider.handle.border.radius');
        transition:
            background dt('slider.transition.duration'),
            color dt('slider.transition.duration'),
            border-color dt('slider.transition.duration'),
            box-shadow dt('slider.transition.duration'),
            outline-color dt('slider.transition.duration');
        outline-color: transparent;
    }

    .p-slider-handle::before {
        content: '';
        width: dt('slider.handle.content.width');
        height: dt('slider.handle.content.height');
        display: block;
        background: dt('slider.handle.content.background');
        border-radius: dt('slider.handle.content.border.radius');
        box-shadow: dt('slider.handle.content.shadow');
        transition: background dt('slider.transition.duration');
    }

    .p-slider:not(.p-disabled) .p-slider-handle:hover {
        background: dt('slider.handle.hover.background');
    }

    .p-slider:not(.p-disabled) .p-slider-handle:hover::before {
        background: dt('slider.handle.content.hover.background');
    }

    .p-slider-handle:focus-visible {
        box-shadow: dt('slider.handle.focus.ring.shadow');
        outline: dt('slider.handle.focus.ring.width') dt('slider.handle.focus.ring.style') dt('slider.handle.focus.ring.color');
        outline-offset: dt('slider.handle.focus.ring.offset');
    }

    .p-slider-range {
        display: block;
        background: dt('slider.range.background');
        border-radius: dt('slider.track.border.radius');
    }

    .p-slider.p-slider-horizontal {
        height: dt('slider.track.size');
    }

    .p-slider-horizontal .p-slider-range {
        inset-block-start: 0;
        inset-inline-start: 0;
        height: 100%;
    }

    .p-slider-horizontal .p-slider-handle {
        inset-block-start: 50%;
        margin-block-start: calc(-1 * calc(dt('slider.handle.height') / 2));
        margin-inline-start: calc(-1 * calc(dt('slider.handle.width') / 2));
    }

    .p-slider-vertical {
        min-height: 100px;
        width: dt('slider.track.size');
    }

    .p-slider-vertical .p-slider-handle {
        inset-inline-start: 50%;
        margin-inline-start: calc(-1 * calc(dt('slider.handle.width') / 2));
        margin-block-end: calc(-1 * calc(dt('slider.handle.height') / 2));
    }

    .p-slider-vertical .p-slider-range {
        inset-block-end: 0;
        inset-inline-start: 0;
        width: 100%;
    }
`,Ow={handle:{position:"absolute"},range:{position:"absolute"}},Nw={root:function(e){var t=e.instance,r=e.props;return["p-slider p-component",{"p-disabled":r.disabled,"p-invalid":t.$invalid,"p-slider-horizontal":r.orientation==="horizontal","p-slider-vertical":r.orientation==="vertical"}]},range:"p-slider-range",handle:"p-slider-handle"},Bw=ft.extend({name:"slider",style:Uw,classes:Nw,inlineStyles:Ow}),Fw={name:"BaseSlider",extends:Iw,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Bw,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function ji(n){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ji(n)}function zw(n,e,t){return(e=$w(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function $w(n){var e=Hw(n,"string");return ji(e)=="symbol"?e:e+""}function Hw(n,e){if(ji(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Vw(n){return jw(n)||Xw(n)||Ww(n)||Gw()}function Gw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ww(n,e){if(n){if(typeof n=="string")return wc(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?wc(n,e):void 0}}function Xw(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function jw(n){if(Array.isArray(n))return wc(n)}function wc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}var Tc={name:"Slider",extends:Fw,inheritAttrs:!1,emits:["change","slideend"],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var e=this.$el.getBoundingClientRect();this.initX=e.left+Vh(),this.initY=e.top+Gh(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(e){var t,r=e.touches?e.touches[0].pageX:e.pageX,o=e.touches?e.touches[0].pageY:e.pageY;this.orientation==="horizontal"?S0(this.$el)?t=(this.initX+this.barWidth-r)*100/this.barWidth:t=(r-this.initX)*100/this.barWidth:t=(this.initY+this.barHeight-o)*100/this.barHeight;var i=(this.max-this.min)*(t/100)+this.min;if(this.step){var s=this.range?this.value[this.handleIndex]:this.value,a=i-s;a<0?i=s+Math.ceil(i/this.step-s/this.step)*this.step:a>0&&(i=s+Math.floor(i/this.step-s/this.step)*this.step)}else i=Math.floor(i);this.updateModel(e,i)},updateModel:function(e,t){var r=Math.round(t*100)/100,o;this.range?(o=this.value?Vw(this.value):[],this.handleIndex==0?(r<this.min?r=this.min:r>=this.max&&(r=this.max),o[0]=r):(r>this.max?r=this.max:r<=this.min&&(r=this.min),o[1]=r)):(r<this.min?r=this.min:r>this.max&&(r=this.max),o=r),this.writeValue(o,e),this.$emit("change",o)},onDragStart:function(e,t){this.disabled||(this.$el.setAttribute("data-p-sliding",!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=t,e.currentTarget.focus())},onDrag:function(e){this.dragging&&this.setValue(e)},onDragEnd:function(e){this.dragging&&(this.dragging=!1,this.$el.setAttribute("data-p-sliding",!1),this.$emit("slideend",{originalEvent:e,value:this.value}))},onBarClick:function(e){this.disabled||Cr(e.target,"data-pc-section")!=="handle"&&(this.updateDomData(),this.setValue(e))},onMouseDown:function(e,t){this.bindDragListeners(),this.onDragStart(e,t)},onKeyDown:function(e,t){switch(this.handleIndex=t,e.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(e,t),e.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(e,t),e.preventDefault();break;case"PageDown":this.decrementValue(e,t,!0),e.preventDefault();break;case"PageUp":this.incrementValue(e,t,!0),e.preventDefault();break;case"Home":this.updateModel(e,this.min),e.preventDefault();break;case"End":this.updateModel(e,this.max),e.preventDefault();break}},onBlur:function(e,t){var r,o;(r=(o=this.formField).onBlur)===null||r===void 0||r.call(o,e)},decrementValue:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o;this.range?this.step?o=this.value[t]-this.step:o=this.value[t]-1:this.step?o=this.value-this.step:!this.step&&r?o=this.value-10:o=this.value-1,this.updateModel(e,o),e.preventDefault()},incrementValue:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o;this.range?this.step?o=this.value[t]+this.step:o=this.value[t]+1:this.step?o=this.value+this.step:!this.step&&r?o=this.value+10:o=this.value+1,this.updateModel(e,o),e.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&(document.removeEventListener("mousemove",this.dragListener),this.dragListener=null),this.dragEndListener&&(document.removeEventListener("mouseup",this.dragEndListener),this.dragEndListener=null)},rangeStyle:function(){if(this.range){var e=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,t=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":t+"%",width:e+"%"}:{bottom:t+"%",height:e+"%"}}else return this.horizontal?{width:this.handlePosition+"%"}:{height:this.handlePosition+"%"}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+"%"}:{bottom:this.handlePosition+"%"}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+"%"}:{bottom:this.rangeStartPosition+"%"}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+"%"}:{bottom:this.rangeEndPosition+"%"}}},computed:{value:function(){var e;if(this.range){var t,r,o,i;return[(t=(r=this.d_value)===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:this.min,(o=(i=this.d_value)===null||i===void 0?void 0:i[1])!==null&&o!==void 0?o:this.max]}return(e=this.d_value)!==null&&e!==void 0?e:this.min},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100},dataP:function(){return Vo(zw({},this.orientation,this.orientation))}}},Yw=["data-p"],qw=["data-p"],Kw=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"],Zw=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"],Jw=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"];function Qw(n,e,t,r,o,i){return bt(),$t("div",xt({class:n.cx("root"),onClick:e[18]||(e[18]=function(){return i.onBarClick&&i.onBarClick.apply(i,arguments)})},n.ptmi("root"),{"data-p-sliding":!1,"data-p":i.dataP}),[wt("span",xt({class:n.cx("range"),style:[n.sx("range"),i.rangeStyle()]},n.ptm("range"),{"data-p":i.dataP}),null,16,qw),n.range?Ir("",!0):(bt(),$t("span",xt({key:0,class:n.cx("handle"),style:[n.sx("handle"),i.handleStyle()],onTouchstartPassive:e[0]||(e[0]=function(s){return i.onDragStart(s)}),onTouchmovePassive:e[1]||(e[1]=function(s){return i.onDrag(s)}),onTouchend:e[2]||(e[2]=function(s){return i.onDragEnd(s)}),onMousedown:e[3]||(e[3]=function(s){return i.onMouseDown(s)}),onKeydown:e[4]||(e[4]=function(s){return i.onKeyDown(s)}),onBlur:e[5]||(e[5]=function(s){return i.onBlur(s)}),tabindex:n.tabindex,role:"slider","aria-valuemin":n.min,"aria-valuenow":n.d_value,"aria-valuemax":n.max,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-orientation":n.orientation},n.ptm("handle"),{"data-p":i.dataP}),null,16,Kw)),n.range?(bt(),$t("span",xt({key:1,class:n.cx("handle"),style:[n.sx("handle"),i.rangeStartHandleStyle()],onTouchstartPassive:e[6]||(e[6]=function(s){return i.onDragStart(s,0)}),onTouchmovePassive:e[7]||(e[7]=function(s){return i.onDrag(s)}),onTouchend:e[8]||(e[8]=function(s){return i.onDragEnd(s)}),onMousedown:e[9]||(e[9]=function(s){return i.onMouseDown(s,0)}),onKeydown:e[10]||(e[10]=function(s){return i.onKeyDown(s,0)}),onBlur:e[11]||(e[11]=function(s){return i.onBlur(s,0)}),tabindex:n.tabindex,role:"slider","aria-valuemin":n.min,"aria-valuenow":n.d_value?n.d_value[0]:null,"aria-valuemax":n.max,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-orientation":n.orientation},n.ptm("startHandler"),{"data-p":i.dataP}),null,16,Zw)):Ir("",!0),n.range?(bt(),$t("span",xt({key:2,class:n.cx("handle"),style:[n.sx("handle"),i.rangeEndHandleStyle()],onTouchstartPassive:e[12]||(e[12]=function(s){return i.onDragStart(s,1)}),onTouchmovePassive:e[13]||(e[13]=function(s){return i.onDrag(s)}),onTouchend:e[14]||(e[14]=function(s){return i.onDragEnd(s)}),onMousedown:e[15]||(e[15]=function(s){return i.onMouseDown(s,1)}),onKeydown:e[16]||(e[16]=function(s){return i.onKeyDown(s,1)}),onBlur:e[17]||(e[17]=function(s){return i.onBlur(s,1)}),tabindex:n.tabindex,role:"slider","aria-valuemin":n.min,"aria-valuenow":n.d_value?n.d_value[1]:null,"aria-valuemax":n.max,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-orientation":n.orientation},n.ptm("endHandler"),{"data-p":i.dataP}),null,16,Jw)):Ir("",!0)],16,Yw)}Tc.render=Qw;const eT={class:"my-2 w-50"},tT={class:"my-2 w-50"},nT=1.5,rT=3,Tf=Zi({__name:"DoorSizeControl",emits:["update:doorSize"],setup(n,{emit:e}){const t=e,r=Nn(nT),o=Nn(rT);return or([r,o],([i,s])=>{t("update:doorSize",{width:i,height:s})}),(i,s)=>(bt(),$t("div",null,[wt("div",eT,"Ширина двери: "+Yo(r.value),1),Pt(kr(Tc),{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=a=>r.value=a),min:.5,max:3,step:.01,style:{width:"100%"}},null,8,["modelValue"]),wt("div",tT,"Высота двери: "+Yo(o.value),1),Pt(kr(Tc),{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=a=>o.value=a),min:1.5,max:5,step:.01,style:{width:"100%"}},null,8,["modelValue"])]))}}),oT={class:"scene-layout"},iT={class:"scene-wrapper"},sT={class:"light-controls flex gap-2 md:gap-3 mt-4 md:mt-6 justify-center w-full"},aT={class:"door-sliders mobile-only"},lT={class:"scene-sidebar desktop-only"},cT={class:"door-sliders"},dT=Zi({__name:"Scene",setup(n){const e=Nn(null),t=Nn(!0),r=Nn(null),o=u=>{r.value&&(u.key==="ArrowLeft"&&r.value.moveCube("left"),u.key==="ArrowRight"&&r.value.moveCube("right"),u.key==="ArrowUp"&&r.value.moveCube("forward"),u.key==="ArrowDown"&&r.value.moveCube("back"))},i=Nn(!1);typeof window<"u"&&(i.value=window.matchMedia("(max-width: 700px)").matches);const s=()=>{if(e.value)try{r.value=wE(),r.value.mount(e.value)}catch(u){console.error("Failed to mount scene:",u)}finally{t.value=!1}};Gc(async()=>{s(),window.addEventListener("keydown",o)}),ch(()=>{window.removeEventListener("keydown",o),r.value?.destroy()});const a=({width:u,height:f})=>{r.value?.setDoorSize({width:u,height:f})},l=()=>{r.value?.toggleAmbientLight()},c=()=>{r.value?.toggleEyeLight()},d=()=>{r.value?.teleportCube()};return(u,f)=>(bt(),$t("div",oT,[wt("div",iT,[wt("canvas",{ref_key:"canvasRef",ref:e,style:{width:"100%",height:"100%",display:"block"}},null,512),t.value?(bt(),ar(FE,{key:0,class:"loader-overlay"})):Ir("",!0),wt("div",sT,[Pt(kr(qs),{onClick:l,icon:"pi pi-sun",label:"Общий свет",severity:"secondary",size:"small",class:"min-w-[120px] md:min-w-[180px] text-[0.95rem] md:text-base px-3 py-2 md:px-5 md:py-2 font-medium text-center"}),Pt(kr(qs),{onClick:c,icon:"pi pi-eye",label:"Свет глаза",severity:"secondary",size:"small",class:"min-w-[120px] md:min-w-[180px] text-[0.95rem] md:text-base px-3 py-2 md:px-5 md:py-2 font-medium text-center"}),Pt(kr(qs),{onClick:d,icon:"pi pi-refresh",label:"Телепорт куба",severity:"secondary",size:"small",class:"min-w-[120px] md:min-w-[180px] text-[0.95rem] md:text-base px-3 py-2 md:px-5 md:py-2 font-medium text-center"})]),wt("div",aT,[Pt(Tf,{"onUpdate:doorSize":a})])]),wt("div",lT,[wt("div",cT,[Pt(Tf,{"onUpdate:doorSize":a})]),i.value?Ir("",!0):(bt(),ar(kw,{key:0}))])]))}}),uT=Zi({__name:"App",setup(n){return lh(()=>{document.title=du.appTitle}),(e,t)=>(bt(),ar(Sv,{title:kr(du).appTitle},{default:Hc(()=>[Pt(dT)]),_:1},8,["title"]))}});var fT={transitionDuration:"{transition.duration}"},hT={borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},pT={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},mT={borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"},gT={root:fT,panel:hT,header:pT,content:mT},vT={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},bT={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},_T={padding:"{list.padding}",gap:"{list.gap}"},yT={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},xT={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},ST={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},MT={borderRadius:"{border.radius.sm}"},ET={padding:"{list.option.padding}"},wT={light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},TT={root:vT,overlay:bT,list:_T,option:yT,optionGroup:xT,dropdown:ST,chip:MT,emptyMessage:ET,colorScheme:wT},CT={width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},AT={size:"1rem"},RT={borderColor:"{content.background}",offset:"-0.75rem"},PT={width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},DT={width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}},LT={root:CT,icon:AT,group:RT,lg:PT,xl:DT},kT={borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},IT={size:"0.5rem"},UT={fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},OT={fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},NT={fontSize:"1rem",minWidth:"2rem",height:"2rem"},BT={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},FT={root:kT,dot:IT,sm:UT,lg:OT,xl:NT,colorScheme:BT},zT={borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},$T={transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}},HT={primitive:zT,semantic:$T},VT={borderRadius:"{content.border.radius}"},GT={root:VT},WT={padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},XT={color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},jT={color:"{navigation.item.icon.color}"},YT={root:WT,item:XT,separator:jT},qT={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},KT={light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},ZT={root:qT,colorScheme:KT},JT={background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},QT={padding:"1.25rem",gap:"0.5rem"},e1={gap:"0.5rem"},t1={fontSize:"1.25rem",fontWeight:"500"},n1={color:"{text.muted.color}"},r1={root:JT,body:QT,caption:e1,title:t1,subtitle:n1},o1={transitionDuration:"{transition.duration}"},i1={gap:"0.25rem"},s1={padding:"1rem",gap:"0.5rem"},a1={width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},l1={light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},c1={root:o1,content:i1,indicatorList:s1,indicator:a1,colorScheme:l1},d1={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},u1={width:"2.5rem",color:"{form.field.icon.color}"},f1={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},h1={padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},p1={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},m1={color:"{form.field.icon.color}"},g1={root:d1,dropdown:u1,overlay:f1,list:h1,option:p1,clearIcon:m1},v1={borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},b1={size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},_1={root:v1,icon:b1},y1={borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},x1={width:"2rem",height:"2rem"},S1={size:"1rem"},M1={size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},E1={light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}},w1={root:y1,image:x1,icon:S1,removeIcon:M1,colorScheme:E1},T1={transitionDuration:"{transition.duration}"},C1={width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},A1={shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},R1={light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}},P1={root:T1,preview:C1,panel:A1,colorScheme:R1},D1={size:"2rem",color:"{overlay.modal.color}"},L1={gap:"1rem"},k1={icon:D1,content:L1},I1={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},U1={padding:"{overlay.popover.padding}",gap:"1rem"},O1={size:"1.5rem",color:"{overlay.popover.color}"},N1={gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"},B1={root:I1,content:U1,icon:O1,footer:N1},F1={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},z1={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},$1={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},H1={mobileIndent:"1rem"},V1={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},G1={borderColor:"{content.border.color}"},W1={root:F1,list:z1,item:$1,submenu:H1,submenuIcon:V1,separator:G1},X1={transitionDuration:"{transition.duration}"},j1={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Y1={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},q1={fontWeight:"600"},K1={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Z1={borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},J1={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Q1={fontWeight:"600"},eC={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},tC={color:"{primary.color}"},nC={width:"0.5rem"},rC={width:"1px",color:"{primary.color}"},oC={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},iC={size:"2rem"},sC={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},aC={inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},lC={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},cC={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},dC={light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},uC={root:X1,header:j1,headerCell:Y1,columnTitle:q1,row:K1,bodyCell:Z1,footerCell:J1,columnFooter:Q1,footer:eC,dropPoint:tC,columnResizer:nC,resizeIndicator:rC,sortIcon:oC,loadingIcon:iC,rowToggleButton:sC,filter:aC,paginatorTop:lC,paginatorBottom:cC,colorScheme:dC},fC={borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},hC={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},pC={background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},mC={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},gC={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},vC={borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"},bC={root:fC,header:hC,content:pC,footer:mC,paginatorTop:gC,paginatorBottom:vC},_C={transitionDuration:"{transition.duration}"},yC={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},xC={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},SC={gap:"0.5rem",fontWeight:"500"},MC={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},EC={color:"{form.field.icon.color}"},wC={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},TC={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},CC={borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},AC={margin:"0.5rem 0 0 0"},RC={padding:"0.25rem",fontWeight:"500",color:"{content.color}"},PC={hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},DC={margin:"0.5rem 0 0 0"},LC={padding:"0.375rem",borderRadius:"{content.border.radius}"},kC={margin:"0.5rem 0 0 0"},IC={padding:"0.375rem",borderRadius:"{content.border.radius}"},UC={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},OC={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},NC={light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},BC={root:_C,panel:yC,header:xC,title:SC,dropdown:MC,inputIcon:EC,selectMonth:wC,selectYear:TC,group:CC,dayView:AC,weekDay:RC,date:PC,monthView:DC,month:LC,yearView:kC,year:IC,buttonbar:UC,timePicker:OC,colorScheme:NC},FC={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},zC={padding:"{overlay.modal.padding}",gap:"0.5rem"},$C={fontSize:"1.25rem",fontWeight:"600"},HC={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},VC={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"},GC={root:FC,header:zC,title:$C,content:HC,footer:VC},WC={borderColor:"{content.border.color}"},XC={background:"{content.background}",color:"{text.color}"},jC={margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},YC={margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}},qC={root:WC,content:XC,horizontal:jC,vertical:YC},KC={background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},ZC={borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},JC={root:KC,item:ZC},QC={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},eA={padding:"{overlay.modal.padding}"},tA={fontSize:"1.5rem",fontWeight:"600"},nA={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},rA={padding:"{overlay.modal.padding}"},oA={root:QC,header:eA,title:tA,content:nA,footer:rA},iA={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},sA={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},aA={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},lA={focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},cA={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},dA={toolbar:iA,toolbarItem:sA,overlay:aA,overlayOption:lA,content:cA},uA={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},fA={background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},hA={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},pA={padding:"0"},mA={root:uA,legend:fA,toggleIcon:hA,content:pA},gA={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},vA={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},bA={highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},_A={padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},yA={gap:"0.5rem"},xA={height:"0.25rem"},SA={gap:"0.5rem"},MA={root:gA,header:vA,content:bA,file:_A,fileList:yA,progressbar:xA,basic:SA},EA={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},wA={active:{top:"-1.25rem"}},TA={input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},CA={borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}},AA={root:EA,over:wA,in:TA,on:CA},RA={borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},PA={background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},DA={size:"1.5rem"},LA={background:"{content.background}",padding:"1rem 0.25rem"},kA={size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},IA={size:"1rem"},UA={background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},OA={gap:"0.5rem",padding:"1rem"},NA={width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},BA={background:"rgba(0, 0, 0, 0.5)"},FA={background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},zA={size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},$A={size:"1.5rem"},HA={light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}},VA={root:RA,navButton:PA,navIcon:DA,thumbnailsContent:LA,thumbnailNavButton:kA,thumbnailNavButtonIcon:IA,caption:UA,indicatorList:OA,indicatorButton:NA,insetIndicatorList:BA,insetIndicatorButton:FA,closeButton:zA,closeButtonIcon:$A,colorScheme:HA},GA={color:"{form.field.icon.color}"},WA={icon:GA},XA={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},jA={paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},YA={root:XA,input:jA},qA={transitionDuration:"{transition.duration}"},KA={icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},ZA={position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},JA={hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},QA={root:qA,preview:KA,toolbar:ZA,action:JA},eR={size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},tR={handle:eR},nR={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},rR={fontWeight:"500"},oR={size:"1rem"},iR={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}},sR={root:nR,text:rR,icon:oR,colorScheme:iR},aR={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},lR={hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"},cR={root:aR,display:lR},dR={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},uR={borderRadius:"{border.radius.sm}"},fR={light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}},hR={root:dR,chip:uR,colorScheme:fR},pR={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"},mR={addon:pR},gR={transitionDuration:"{transition.duration}"},vR={width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},bR={light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},_R={root:gR,button:vR,colorScheme:bR},yR={gap:"0.5rem"},xR={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}},SR={root:yR,input:xR},MR={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},ER={root:MR},wR={transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},TR={background:"{primary.color}"},CR={background:"{content.border.color}"},AR={color:"{text.muted.color}"},RR={root:wR,value:TR,range:CR,text:AR},PR={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},DR={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},LR={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},kR={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},IR={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},UR={padding:"{list.option.padding}"},OR={light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},NR={root:PR,list:DR,option:LR,optionGroup:kR,checkmark:IR,emptyMessage:UR,colorScheme:OR},BR={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},FR={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},zR={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},$R={padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},HR={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},VR={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},GR={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},WR={borderColor:"{content.border.color}"},XR={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},jR={root:BR,baseItem:FR,item:zR,overlay:$R,submenu:HR,submenuLabel:VR,submenuIcon:GR,separator:WR,mobileButton:XR},YR={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},qR={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},KR={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},ZR={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},JR={borderColor:"{content.border.color}"},QR={root:YR,list:qR,item:KR,submenuLabel:ZR,separator:JR},eP={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},tP={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},nP={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},rP={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},oP={borderColor:"{content.border.color}"},iP={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},sP={root:eP,baseItem:tP,item:nP,submenu:rP,separator:oP,mobileButton:iP},aP={borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},lP={padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},cP={fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},dP={size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},uP={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},fP={size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},hP={root:{borderWidth:"1px"}},pP={content:{padding:"0"}},mP={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}},gP={root:aP,content:lP,text:cP,icon:dP,closeButton:uP,closeIcon:fP,outlined:hP,simple:pP,colorScheme:mP},vP={borderRadius:"{content.border.radius}",gap:"1rem"},bP={background:"{content.border.color}",size:"0.5rem"},_P={gap:"0.5rem"},yP={size:"0.5rem"},xP={size:"1rem"},SP={verticalGap:"0.5rem",horizontalGap:"1rem"},MP={root:vP,meters:bP,label:_P,labelMarker:yP,labelIcon:xP,labelList:SP},EP={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},wP={width:"2.5rem",color:"{form.field.icon.color}"},TP={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},CP={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},AP={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},RP={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},PP={color:"{form.field.icon.color}"},DP={borderRadius:"{border.radius.sm}"},LP={padding:"{list.option.padding}"},kP={root:EP,dropdown:wP,overlay:TP,list:CP,option:AP,optionGroup:RP,chip:DP,clearIcon:PP,emptyMessage:LP},IP={gap:"1.125rem"},UP={gap:"0.5rem"},OP={root:IP,controls:UP},NP={gutter:"0.75rem",transitionDuration:"{transition.duration}"},BP={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},FP={background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},zP={color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"},$P={root:NP,node:BP,nodeToggleButton:FP,connector:zP},HP={outline:{width:"2px",color:"{content.background}"}},VP={root:HP},GP={padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},WP={background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},XP={color:"{text.muted.color}"},jP={maxWidth:"2.5rem"},YP={root:GP,navButton:WP,currentPageReport:XP,jumpToPageInput:jP},qP={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},KP={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},ZP={padding:"0.375rem 1.125rem"},JP={fontWeight:"600"},QP={padding:"0 1.125rem 1.125rem 1.125rem"},e2={padding:"0 1.125rem 1.125rem 1.125rem"},t2={root:qP,header:KP,toggleableHeader:ZP,title:JP,content:QP,footer:e2},n2={gap:"0.5rem",transitionDuration:"{transition.duration}"},r2={background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},o2={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},i2={indent:"1rem"},s2={color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},a2={root:n2,panel:r2,item:o2,submenu:i2,submenuIcon:s2},l2={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},c2={color:"{form.field.icon.color}"},d2={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},u2={gap:"0.5rem"},f2={light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}},h2={meter:l2,icon:c2,overlay:d2,content:u2,colorScheme:f2},p2={gap:"1.125rem"},m2={gap:"0.5rem"},g2={root:p2,controls:m2},v2={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},b2={padding:"{overlay.popover.padding}"},_2={root:v2,content:b2},y2={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},x2={background:"{primary.color}"},S2={color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"},M2={root:y2,value:x2,label:S2},E2={light:{root:{colorOne:"{red.500}",colorTwo:"{blue.500}",colorThree:"{green.500}",colorFour:"{yellow.500}"}},dark:{root:{colorOne:"{red.400}",colorTwo:"{blue.400}",colorThree:"{green.400}",colorFour:"{yellow.400}"}}},w2={colorScheme:E2},T2={width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},C2={size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}},A2={root:T2,icon:C2},R2={gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},P2={size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},D2={root:R2,icon:P2},L2={light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}},k2={colorScheme:L2},I2={transitionDuration:"{transition.duration}"},U2={size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},O2={light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}},N2={root:I2,bar:U2,colorScheme:O2},B2={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},F2={width:"2.5rem",color:"{form.field.icon.color}"},z2={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},$2={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},H2={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},V2={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},G2={color:"{form.field.icon.color}"},W2={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},X2={padding:"{list.option.padding}"},j2={root:B2,dropdown:F2,overlay:z2,list:$2,option:H2,optionGroup:V2,clearIcon:G2,checkmark:W2,emptyMessage:X2},Y2={borderRadius:"{form.field.border.radius}"},q2={light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}},K2={root:Y2,colorScheme:q2},Z2={borderRadius:"{content.border.radius}"},J2={light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}},Q2={root:Z2,colorScheme:J2},eD={transitionDuration:"{transition.duration}"},tD={background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},nD={background:"{primary.color}"},rD={width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},oD={light:{handle:{content:{background:"{surface.0}"}}},dark:{handle:{content:{background:"{surface.950}"}}}},iD={root:eD,track:tD,range:nD,handle:rD,colorScheme:oD},sD={gap:"0.5rem",transitionDuration:"{transition.duration}"},aD={root:sD},lD={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"},cD={root:lD},dD={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},uD={background:"{content.border.color}"},fD={size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},hD={root:dD,gutter:uD,handle:fD},pD={transitionDuration:"{transition.duration}"},mD={background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},gD={padding:"0.5rem",gap:"1rem"},vD={padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},bD={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},_D={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},yD={padding:"0.875rem 0.5rem 1.125rem 0.5rem"},xD={background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},SD={root:pD,separator:mD,step:gD,stepHeader:vD,stepTitle:bD,stepNumber:_D,steppanels:yD,steppanel:xD},MD={transitionDuration:"{transition.duration}"},ED={background:"{content.border.color}"},wD={borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},TD={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},CD={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},AD={root:MD,separator:ED,itemLink:wD,itemLabel:TD,itemNumber:CD},RD={transitionDuration:"{transition.duration}"},PD={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},DD={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},LD={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},kD={height:"1px",bottom:"-1px",background:"{primary.color}"},ID={root:RD,tablist:PD,item:DD,itemIcon:LD,activeBar:kD},UD={transitionDuration:"{transition.duration}"},OD={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},ND={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},BD={background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},FD={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},zD={height:"1px",bottom:"-1px",background:"{primary.color}"},$D={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},HD={root:UD,tablist:OD,tab:ND,tabpanel:BD,navButton:FD,activeBar:zD,colorScheme:$D},VD={transitionDuration:"{transition.duration}"},GD={background:"{content.background}",borderColor:"{content.border.color}"},WD={borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},XD={background:"{content.background}",color:"{content.color}"},jD={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},YD={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},qD={root:VD,tabList:GD,tab:WD,tabPanel:XD,navButton:jD,colorScheme:YD},KD={fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},ZD={size:"0.75rem"},JD={light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},QD={root:KD,icon:ZD,colorScheme:JD},eL={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},tL={gap:"0.25rem"},nL={margin:"2px 0"},rL={root:eL,prompt:tL,commandResponse:nL},oL={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},iL={root:oL},sL={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},aL={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},lL={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},cL={mobileIndent:"1rem"},dL={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},uL={borderColor:"{content.border.color}"},fL={root:sL,list:aL,item:lL,submenu:cL,submenuIcon:dL,separator:uL},hL={minHeight:"5rem"},pL={eventContent:{padding:"1rem 0"}},mL={eventContent:{padding:"0 1rem"}},gL={size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},vL={color:"{content.border.color}",size:"2px"},bL={event:hL,horizontal:pL,vertical:mL,eventMarker:gL,eventConnector:vL},_L={width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},yL={size:"1.125rem"},xL={padding:"{overlay.popover.padding}",gap:"0.5rem"},SL={gap:"0.5rem"},ML={fontWeight:"500",fontSize:"1rem"},EL={fontWeight:"500",fontSize:"0.875rem"},wL={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},TL={size:"1rem"},CL={light:{root:{blur:"1.5px"},info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{root:{blur:"10px"},info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}},AL={root:_L,icon:yL,content:xL,text:SL,summary:ML,detail:EL,closeButton:wL,closeIcon:TL,colorScheme:CL},RL={padding:"0.25rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.25rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.25rem"}},PL={disabledColor:"{form.field.disabled.color}"},DL={padding:"0.25rem 0.75rem",borderRadius:"{content.border.radius}",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",sm:{padding:"0.25rem 0.75rem"},lg:{padding:"0.25rem 0.75rem"}},LL={light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}},kL={root:RL,icon:PL,content:DL,colorScheme:LL},IL={width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},UL={borderRadius:"50%",size:"1rem"},OL={light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}},NL={root:IL,handle:UL,colorScheme:OL},BL={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"},FL={root:BL},zL={maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},$L={light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}},HL={root:zL,colorScheme:$L},VL={background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},GL={padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},WL={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},XL={borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},jL={size:"2rem"},YL={margin:"0 0 0.5rem 0"},qL={root:VL,node:GL,nodeIcon:WL,nodeToggleButton:XL,loadingIcon:jL,filter:YL},KL={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},ZL={width:"2.5rem",color:"{form.field.icon.color}"},JL={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},QL={padding:"{list.padding}"},ek={padding:"{list.option.padding}"},tk={borderRadius:"{border.radius.sm}"},nk={color:"{form.field.icon.color}"},rk={root:KL,dropdown:ZL,overlay:JL,tree:QL,emptyMessage:ek,chip:tk,clearIcon:nk},ok={transitionDuration:"{transition.duration}"},ik={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},sk={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},ak={fontWeight:"600"},lk={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},ck={borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},dk={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},uk={fontWeight:"600"},fk={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},hk={width:"0.5rem"},pk={width:"1px",color:"{primary.color}"},mk={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},gk={size:"2rem"},vk={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},bk={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},_k={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},yk={light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},xk={root:ok,header:ik,headerCell:sk,columnTitle:ak,row:lk,bodyCell:ck,footerCell:dk,columnFooter:uk,footer:fk,columnResizer:hk,resizeIndicator:pk,sortIcon:mk,loadingIcon:gk,nodeToggleButton:vk,paginatorTop:bk,paginatorBottom:_k,colorScheme:yk},Sk={mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}},Mk={loader:Sk};function Yi(n){"@babel/helpers - typeof";return Yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yi(n)}function Cf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Af(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Cf(Object(t),!0).forEach(function(r){Ek(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Cf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Ek(n,e,t){return(e=wk(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function wk(n){var e=Tk(n,"string");return Yi(e)=="symbol"?e:e+""}function Tk(n,e){if(Yi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Ck=Af(Af({},HT),{},{components:{accordion:gT,autocomplete:TT,avatar:LT,badge:FT,blockui:GT,breadcrumb:YT,button:ZT,datepicker:BC,card:r1,carousel:c1,cascadeselect:g1,checkbox:_1,chip:w1,colorpicker:P1,confirmdialog:k1,confirmpopup:B1,contextmenu:W1,dataview:bC,datatable:uC,dialog:GC,divider:qC,dock:JC,drawer:oA,editor:dA,fieldset:mA,fileupload:MA,iftalabel:YA,floatlabel:AA,galleria:VA,iconfield:WA,image:QA,imagecompare:tR,inlinemessage:sR,inplace:cR,inputchips:hR,inputgroup:mR,inputnumber:_R,inputotp:SR,inputtext:ER,knob:RR,listbox:NR,megamenu:jR,menu:QR,menubar:sP,message:gP,metergroup:MP,multiselect:kP,orderlist:OP,organizationchart:$P,overlaybadge:VP,popover:_2,paginator:YP,password:h2,panel:t2,panelmenu:a2,picklist:g2,progressbar:M2,progressspinner:w2,radiobutton:A2,rating:D2,ripple:k2,scrollpanel:N2,select:j2,selectbutton:K2,skeleton:Q2,slider:iD,speeddial:aD,splitter:hD,splitbutton:cD,stepper:SD,steps:AD,tabmenu:ID,tabs:HD,tabview:qD,textarea:iL,tieredmenu:fL,tag:QD,terminal:rL,timeline:bL,togglebutton:kL,toggleswitch:NL,tree:qL,treeselect:rk,treetable:xk,toast:AL,toolbar:FL,tooltip:HL,virtualscroller:Mk}});const Ak=k0(Ck,{semantic:{primary:{50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"}}});function qi(n){"@babel/helpers - typeof";return qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qi(n)}function Rk(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Pk(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,Lk(r.key),r)}}function Dk(n,e,t){return e&&Pk(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function Lk(n){var e=kk(n,"string");return qi(e)=="symbol"?e:e+""}function kk(n,e){if(qi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(qi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var Ik=function(){function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};Rk(this,n),this.element=e,this.listener=t}return Dk(n,[{key:"bindScrollListener",value:function(){this.scrollableParents=w0(this.element);for(var t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}(),Uk=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`,Ok={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Nk=ft.extend({name:"tooltip-directive",style:Uk,classes:Ok}),Bk=Ge.extend({style:Nk});function Fk(n,e){return Vk(n)||Hk(n,e)||$k(n,e)||zk()}function zk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $k(n,e){if(n){if(typeof n=="string")return Rf(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Rf(n,e):void 0}}function Rf(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function Hk(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(l=(r=i.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function Vk(n){if(Array.isArray(n))return n}function Pf(n,e,t){return(e=Gk(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Gk(n){var e=Wk(n,"string");return Nr(e)=="symbol"?e:e+""}function Wk(n,e){if(Nr(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Nr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Nr(n){"@babel/helpers - typeof";return Nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nr(n)}var Xk=Bk.extend("tooltip",{beforeMount:function(e,t){var r,o=this.getTarget(e);if(o.$_ptooltipModifiers=this.getModifiers(t),t.value){if(typeof t.value=="string")o.$_ptooltipValue=t.value,o.$_ptooltipDisabled=!1,o.$_ptooltipEscape=!0,o.$_ptooltipClass=null,o.$_ptooltipFitContent=!0,o.$_ptooltipIdAttr=hi("pv_id")+"_tooltip",o.$_ptooltipShowDelay=0,o.$_ptooltipHideDelay=0,o.$_ptooltipAutoHide=!0;else if(Nr(t.value)==="object"&&t.value){if(Br(t.value.value)||t.value.value.trim()==="")return;o.$_ptooltipValue=t.value.value,o.$_ptooltipDisabled=!!t.value.disabled===t.value.disabled?t.value.disabled:!1,o.$_ptooltipEscape=!!t.value.escape===t.value.escape?t.value.escape:!0,o.$_ptooltipClass=t.value.class||"",o.$_ptooltipFitContent=!!t.value.fitContent===t.value.fitContent?t.value.fitContent:!0,o.$_ptooltipIdAttr=t.value.id||hi("pv_id")+"_tooltip",o.$_ptooltipShowDelay=t.value.showDelay||0,o.$_ptooltipHideDelay=t.value.hideDelay||0,o.$_ptooltipAutoHide=!!t.value.autoHide===t.value.autoHide?t.value.autoHide:!0}}else return;o.$_ptooltipZIndex=(r=t.instance.$primevue)===null||r===void 0||(r=r.config)===null||r===void 0||(r=r.zIndex)===null||r===void 0?void 0:r.tooltip,this.bindEvents(o,t),e.setAttribute("data-pd-tooltip",!0)},updated:function(e,t){var r=this.getTarget(e);if(r.$_ptooltipModifiers=this.getModifiers(t),this.unbindEvents(r),!!t.value){if(typeof t.value=="string")r.$_ptooltipValue=t.value,r.$_ptooltipDisabled=!1,r.$_ptooltipEscape=!0,r.$_ptooltipClass=null,r.$_ptooltipIdAttr=r.$_ptooltipIdAttr||hi("pv_id")+"_tooltip",r.$_ptooltipShowDelay=0,r.$_ptooltipHideDelay=0,r.$_ptooltipAutoHide=!0,this.bindEvents(r,t);else if(Nr(t.value)==="object"&&t.value)if(Br(t.value.value)||t.value.value.trim()===""){this.unbindEvents(r,t);return}else r.$_ptooltipValue=t.value.value,r.$_ptooltipDisabled=!!t.value.disabled===t.value.disabled?t.value.disabled:!1,r.$_ptooltipEscape=!!t.value.escape===t.value.escape?t.value.escape:!0,r.$_ptooltipClass=t.value.class||"",r.$_ptooltipFitContent=!!t.value.fitContent===t.value.fitContent?t.value.fitContent:!0,r.$_ptooltipIdAttr=t.value.id||r.$_ptooltipIdAttr||hi("pv_id")+"_tooltip",r.$_ptooltipShowDelay=t.value.showDelay||0,r.$_ptooltipHideDelay=t.value.hideDelay||0,r.$_ptooltipAutoHide=!!t.value.autoHide===t.value.autoHide?t.value.autoHide:!0,this.bindEvents(r,t)}},unmounted:function(e,t){var r=this.getTarget(e);this.hide(e,0),this.remove(r),this.unbindEvents(r,t),r.$_ptooltipScrollHandler&&(r.$_ptooltipScrollHandler.destroy(),r.$_ptooltipScrollHandler=null)},timer:void 0,methods:{bindEvents:function(e,t){var r=this,o=e.$_ptooltipModifiers;o.focus?(e.$_ptooltipFocusEvent=function(i){return r.onFocus(i,t)},e.$_ptooltipBlurEvent=this.onBlur.bind(this),e.addEventListener("focus",e.$_ptooltipFocusEvent),e.addEventListener("blur",e.$_ptooltipBlurEvent)):(e.$_ptooltipMouseEnterEvent=function(i){return r.onMouseEnter(i,t)},e.$_ptooltipMouseLeaveEvent=this.onMouseLeave.bind(this),e.$_ptooltipClickEvent=this.onClick.bind(this),e.addEventListener("mouseenter",e.$_ptooltipMouseEnterEvent),e.addEventListener("mouseleave",e.$_ptooltipMouseLeaveEvent),e.addEventListener("click",e.$_ptooltipClickEvent)),e.$_ptooltipKeydownEvent=this.onKeydown.bind(this),e.addEventListener("keydown",e.$_ptooltipKeydownEvent),e.$_pWindowResizeEvent=this.onWindowResize.bind(this,e)},unbindEvents:function(e){var t=e.$_ptooltipModifiers;t.focus?(e.removeEventListener("focus",e.$_ptooltipFocusEvent),e.$_ptooltipFocusEvent=null,e.removeEventListener("blur",e.$_ptooltipBlurEvent),e.$_ptooltipBlurEvent=null):(e.removeEventListener("mouseenter",e.$_ptooltipMouseEnterEvent),e.$_ptooltipMouseEnterEvent=null,e.removeEventListener("mouseleave",e.$_ptooltipMouseLeaveEvent),e.$_ptooltipMouseLeaveEvent=null,e.removeEventListener("click",e.$_ptooltipClickEvent),e.$_ptooltipClickEvent=null),e.removeEventListener("keydown",e.$_ptooltipKeydownEvent),window.removeEventListener("resize",e.$_pWindowResizeEvent),e.$_ptooltipId&&this.remove(e)},bindScrollListener:function(e){var t=this;e.$_ptooltipScrollHandler||(e.$_ptooltipScrollHandler=new Ik(e,function(){t.hide(e)})),e.$_ptooltipScrollHandler.bindScrollListener()},unbindScrollListener:function(e){e.$_ptooltipScrollHandler&&e.$_ptooltipScrollHandler.unbindScrollListener()},onMouseEnter:function(e,t){var r=e.currentTarget,o=r.$_ptooltipShowDelay;this.show(r,t,o)},onMouseLeave:function(e){var t=e.currentTarget,r=t.$_ptooltipHideDelay,o=t.$_ptooltipAutoHide;if(o)this.hide(t,r);else{var i=Cr(e.target,"data-pc-name")==="tooltip"||Cr(e.target,"data-pc-section")==="arrow"||Cr(e.target,"data-pc-section")==="text"||Cr(e.relatedTarget,"data-pc-name")==="tooltip"||Cr(e.relatedTarget,"data-pc-section")==="arrow"||Cr(e.relatedTarget,"data-pc-section")==="text";!i&&this.hide(t,r)}},onFocus:function(e,t){var r=e.currentTarget,o=r.$_ptooltipShowDelay;this.show(r,t,o)},onBlur:function(e){var t=e.currentTarget,r=t.$_ptooltipHideDelay;this.hide(t,r)},onClick:function(e){var t=e.currentTarget,r=t.$_ptooltipHideDelay;this.hide(t,r)},onKeydown:function(e){var t=e.currentTarget,r=t.$_ptooltipHideDelay;e.code==="Escape"&&this.hide(e.currentTarget,r)},onWindowResize:function(e){C0()||this.hide(e),window.removeEventListener("resize",e.$_pWindowResizeEvent)},tooltipActions:function(e,t){if(!(e.$_ptooltipDisabled||!Xh(e))){var r=this.create(e,t);this.align(e),!this.isUnstyled()&&M0(r,250);var o=this;window.addEventListener("resize",e.$_pWindowResizeEvent),r.addEventListener("mouseleave",function i(){o.hide(e),r.removeEventListener("mouseleave",i),e.removeEventListener("mouseenter",e.$_ptooltipMouseEnterEvent),setTimeout(function(){return e.addEventListener("mouseenter",e.$_ptooltipMouseEnterEvent)},50)}),this.bindScrollListener(e),Jd.set("tooltip",r,e.$_ptooltipZIndex)}},show:function(e,t,r){var o=this;r!==void 0?this.timer=setTimeout(function(){return o.tooltipActions(e,t)},r):this.tooltipActions(e,t)},tooltipRemoval:function(e){this.remove(e),this.unbindScrollListener(e),window.removeEventListener("resize",e.$_pWindowResizeEvent)},hide:function(e,t){var r=this;clearTimeout(this.timer),t!==void 0?setTimeout(function(){return r.tooltipRemoval(e)},t):this.tooltipRemoval(e)},getTooltipElement:function(e){return document.getElementById(e.$_ptooltipId)},getArrowElement:function(e){var t=this.getTooltipElement(e);return na(t,'[data-pc-section="arrow"]')},create:function(e){var t=e.$_ptooltipModifiers,r=$s("div",{class:!this.isUnstyled()&&this.cx("arrow"),"p-bind":this.ptm("arrow",{context:t})}),o=$s("div",{class:!this.isUnstyled()&&this.cx("text"),"p-bind":this.ptm("text",{context:t})});e.$_ptooltipEscape?(o.innerHTML="",o.appendChild(document.createTextNode(e.$_ptooltipValue))):o.innerHTML=e.$_ptooltipValue;var i=$s("div",Pf(Pf({id:e.$_ptooltipIdAttr,role:"tooltip",style:{display:"inline-block",width:e.$_ptooltipFitContent?"fit-content":void 0,pointerEvents:!this.isUnstyled()&&e.$_ptooltipAutoHide&&"none"},class:[!this.isUnstyled()&&this.cx("root"),e.$_ptooltipClass]},this.$attrSelector,""),"p-bind",this.ptm("root",{context:t})),r,o);return document.body.appendChild(i),e.$_ptooltipId=i.id,this.$el=i,i},remove:function(e){if(e){var t=this.getTooltipElement(e);t&&t.parentElement&&(Jd.clear(t),document.body.removeChild(t)),e.$_ptooltipId=null}},align:function(e){var t=e.$_ptooltipModifiers;t.top?(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignTop(e))):t.left?(this.alignLeft(e),this.isOutOfBounds(e)&&(this.alignRight(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignLeft(e))))):t.bottom?(this.alignBottom(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&this.alignBottom(e))):(this.alignRight(e),this.isOutOfBounds(e)&&(this.alignLeft(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignRight(e)))))},getHostOffset:function(e){var t=e.getBoundingClientRect(),r=t.left+Vh(),o=t.top+Gh();return{left:r,top:o}},alignRight:function(e){this.preAlign(e,"right");var t=this.getTooltipElement(e),r=this.getArrowElement(e),o=this.getHostOffset(e),i=o.left+Mr(e),s=o.top+(Er(e)-Er(t))/2;t.style.left=i+"px",t.style.top=s+"px",r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"},alignLeft:function(e){this.preAlign(e,"left");var t=this.getTooltipElement(e),r=this.getArrowElement(e),o=this.getHostOffset(e),i=o.left-Mr(t),s=o.top+(Er(e)-Er(t))/2;t.style.left=i+"px",t.style.top=s+"px",r.style.top="50%",r.style.right="0",r.style.bottom=null,r.style.left=null},alignTop:function(e){this.preAlign(e,"top");var t=this.getTooltipElement(e),r=this.getArrowElement(e),o=Mr(t),i=Mr(e),s=Ua(),a=s.width,l=this.getHostOffset(e),c=l.left+(i-o)/2,d=l.top-Er(t);c<0?c=0:c+o>a&&(c=Math.floor(l.left+i-o)),t.style.left=c+"px",t.style.top=d+"px";var u=l.left-this.getHostOffset(t).left+i/2;r.style.top=null,r.style.right=null,r.style.bottom="0",r.style.left=u+"px"},alignBottom:function(e){this.preAlign(e,"bottom");var t=this.getTooltipElement(e),r=this.getArrowElement(e),o=Mr(t),i=Mr(e),s=Ua(),a=s.width,l=this.getHostOffset(e),c=l.left+(i-o)/2,d=l.top+Er(e);c<0?c=0:c+o>a&&(c=Math.floor(l.left+i-o)),t.style.left=c+"px",t.style.top=d+"px";var u=l.left-this.getHostOffset(t).left+i/2;r.style.top="0",r.style.right=null,r.style.bottom=null,r.style.left=u+"px"},preAlign:function(e,t){var r=this.getTooltipElement(e);r.style.left="-999px",r.style.top="-999px",zs(r,"p-tooltip-".concat(r.$_ptooltipPosition)),!this.isUnstyled()&&Hh(r,"p-tooltip-".concat(t)),r.$_ptooltipPosition=t,r.setAttribute("data-p-position",t)},isOutOfBounds:function(e){var t=this.getTooltipElement(e),r=t.getBoundingClientRect(),o=r.top,i=r.left,s=Mr(t),a=Er(t),l=Ua();return i+s>l.width||i<0||o<0||o+a>l.height},getTarget:function(e){var t;return $h(e,"p-inputwrapper")&&(t=na(e,"input"))!==null&&t!==void 0?t:e},getModifiers:function(e){return e.modifiers&&Object.keys(e.modifiers).length?e.modifiers:e.arg&&Nr(e.arg)==="object"?Object.entries(e.arg).reduce(function(t,r){var o=Fk(r,2),i=o[0],s=o[1];return(i==="event"||i==="position")&&(t[s]=!0),t},{}):{}}}});const bl=f0(uT),jk=()=>{bl.use(pv,{ripple:!0,theme:{preset:Ak,options:{cssLayer:{name:"primevue",order:"theme, base, primevue"}}}}),bl.directive("tooltip",Xk),bl.mount("#app")};jk();

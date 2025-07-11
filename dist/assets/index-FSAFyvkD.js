(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},Fo=[],zn=()=>{},Hp=()=>!1,aa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ac=n=>n.startsWith("onUpdate:"),Gt=Object.assign,Rc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Vp=Object.prototype.hasOwnProperty,rt=(n,e)=>Vp.call(n,e),Ve=Array.isArray,zo=n=>la(n)==="[object Map]",Pf=n=>la(n)==="[object Set]",He=n=>typeof n=="function",wt=n=>typeof n=="string",pr=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",Df=n=>(Mt(n)||He(n))&&He(n.then)&&He(n.catch),Lf=Object.prototype.toString,la=n=>Lf.call(n),Gp=n=>la(n).slice(8,-1),kf=n=>la(n)==="[object Object]",Pc=n=>wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,_i=Cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Wp=/-(\w)/g,yn=ca(n=>n.replace(Wp,(e,t)=>t?t.toUpperCase():"")),Xp=/\B([A-Z])/g,ho=ca(n=>n.replace(Xp,"-$1").toLowerCase()),da=ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ta=ca(n=>n?`on${da(n)}`:""),Dr=(n,e)=>!Object.is(n,e),Ca=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},xl=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},jp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let yd;const ua=()=>yd||(yd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dc(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],o=wt(r)?Zp(r):Dc(r);if(o)for(const i in o)e[i]=o[i]}return e}else if(wt(n)||Mt(n))return n}const Yp=/;(?![^(]*\))/g,qp=/:([^]+)/,Kp=/\/\*[^]*?\*\//g;function Zp(n){const e={};return n.replace(Kp,"").split(Yp).forEach(t=>{if(t){const r=t.split(qp);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ri(n){let e="";if(wt(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const r=Ri(n[t]);r&&(e+=r+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qp=Cc(Jp);function If(n){return!!n||n===""}const Uf=n=>!!(n&&n.__v_isRef===!0),fa=n=>wt(n)?n:n==null?"":Ve(n)||Mt(n)&&(n.toString===Lf||!He(n.toString))?Uf(n)?fa(n.value):JSON.stringify(n,Of,2):String(n),Of=(n,e)=>Uf(e)?Of(n,e.value):zo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,o],i)=>(t[Aa(r,i)+" =>"]=o,t),{})}:Pf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Aa(t))}:pr(e)?Aa(e):Mt(e)&&!Ve(e)&&!kf(e)?String(e):e,Aa=(n,e="")=>{var t;return pr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class em{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=nn;try{return nn=this,e()}finally{nn=t}}}on(){++this._on===1&&(this.prevScope=nn,nn=this)}off(){this._on>0&&--this._on===0&&(nn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function tm(){return nn}let ht;const Ra=new WeakSet;class Nf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nn&&nn.active&&nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ra.has(this)&&(Ra.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ff(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xd(this),zf(this);const e=ht,t=Rn;ht=this,Rn=!0;try{return this.fn()}finally{$f(this),ht=e,Rn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ic(e);this.deps=this.depsTail=void 0,xd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ra.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sl(this)&&this.run()}get dirty(){return Sl(this)}}let Bf=0,yi,xi;function Ff(n,e=!1){if(n.flags|=8,e){n.next=xi,xi=n;return}n.next=yi,yi=n}function Lc(){Bf++}function kc(){if(--Bf>0)return;if(xi){let e=xi;for(xi=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;yi;){let e=yi;for(yi=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function zf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $f(n){let e,t=n.depsTail,r=t;for(;r;){const o=r.prevDep;r.version===-1?(r===t&&(t=o),Ic(r),nm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}n.deps=e,n.depsTail=t}function Sl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Hf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Hf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Pi)||(n.globalVersion=Pi,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Sl(n))))return;n.flags|=2;const e=n.dep,t=ht,r=Rn;ht=n,Rn=!0;try{zf(n);const o=n.fn(n._value);(e.version===0||Dr(o,n._value))&&(n.flags|=128,n._value=o,e.version++)}catch(o){throw e.version++,o}finally{ht=t,Rn=r,$f(n),n.flags&=-3}}function Ic(n,e=!1){const{dep:t,prevSub:r,nextSub:o}=n;if(r&&(r.nextSub=o,n.prevSub=void 0),o&&(o.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Ic(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function nm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Rn=!0;const Vf=[];function dr(){Vf.push(Rn),Rn=!1}function ur(){const n=Vf.pop();Rn=n===void 0?!0:n}function xd(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let Pi=0;class rm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Uc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!Rn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new rm(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,Gf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=r)}return t}trigger(e){this.version++,Pi++,this.notify(e)}notify(e){Lc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{kc()}}}function Gf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Gf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ml=new WeakMap,ro=Symbol(""),El=Symbol(""),Di=Symbol("");function Ft(n,e,t){if(Rn&&ht){let r=Ml.get(n);r||Ml.set(n,r=new Map);let o=r.get(t);o||(r.set(t,o=new Uc),o.map=r,o.key=t),o.track()}}function rr(n,e,t,r,o,i){const s=Ml.get(n);if(!s){Pi++;return}const a=l=>{l&&l.trigger()};if(Lc(),e==="clear")s.forEach(a);else{const l=Ve(n),c=l&&Pc(t);if(l&&t==="length"){const d=Number(r);s.forEach((u,f)=>{(f==="length"||f===Di||!pr(f)&&f>=d)&&a(u)})}else switch((t!==void 0||s.has(void 0))&&a(s.get(t)),c&&a(s.get(Di)),e){case"add":l?c&&a(s.get("length")):(a(s.get(ro)),zo(n)&&a(s.get(El)));break;case"delete":l||(a(s.get(ro)),zo(n)&&a(s.get(El)));break;case"set":zo(n)&&a(s.get(ro));break}}kc()}function go(n){const e=nt(n);return e===n?e:(Ft(e,"iterate",Di),Pn(n)?e:e.map(Yt))}function Oc(n){return Ft(n=nt(n),"iterate",Di),n}const om={__proto__:null,[Symbol.iterator](){return Pa(this,Symbol.iterator,Yt)},concat(...n){return go(this).concat(...n.map(e=>Ve(e)?go(e):e))},entries(){return Pa(this,"entries",n=>(n[1]=Yt(n[1]),n))},every(n,e){return jn(this,"every",n,e,void 0,arguments)},filter(n,e){return jn(this,"filter",n,e,t=>t.map(Yt),arguments)},find(n,e){return jn(this,"find",n,e,Yt,arguments)},findIndex(n,e){return jn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return jn(this,"findLast",n,e,Yt,arguments)},findLastIndex(n,e){return jn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return jn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Da(this,"includes",n)},indexOf(...n){return Da(this,"indexOf",n)},join(n){return go(this).join(n)},lastIndexOf(...n){return Da(this,"lastIndexOf",n)},map(n,e){return jn(this,"map",n,e,void 0,arguments)},pop(){return ii(this,"pop")},push(...n){return ii(this,"push",n)},reduce(n,...e){return Sd(this,"reduce",n,e)},reduceRight(n,...e){return Sd(this,"reduceRight",n,e)},shift(){return ii(this,"shift")},some(n,e){return jn(this,"some",n,e,void 0,arguments)},splice(...n){return ii(this,"splice",n)},toReversed(){return go(this).toReversed()},toSorted(n){return go(this).toSorted(n)},toSpliced(...n){return go(this).toSpliced(...n)},unshift(...n){return ii(this,"unshift",n)},values(){return Pa(this,"values",Yt)}};function Pa(n,e,t){const r=Oc(n),o=r[e]();return r!==n&&!Pn(n)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=t(i.value)),i}),o}const im=Array.prototype;function jn(n,e,t,r,o,i){const s=Oc(n),a=s!==n&&!Pn(n),l=s[e];if(l!==im[e]){const u=l.apply(n,i);return a?Yt(u):u}let c=t;s!==n&&(a?c=function(u,f){return t.call(this,Yt(u),f,n)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,n)}));const d=l.call(s,c,r);return a&&o?o(d):d}function Sd(n,e,t,r){const o=Oc(n);let i=t;return o!==n&&(Pn(n)?t.length>3&&(i=function(s,a,l){return t.call(this,s,a,l,n)}):i=function(s,a,l){return t.call(this,s,Yt(a),l,n)}),o[e](i,...r)}function Da(n,e,t){const r=nt(n);Ft(r,"iterate",Di);const o=r[e](...t);return(o===-1||o===!1)&&zc(t[0])?(t[0]=nt(t[0]),r[e](...t)):o}function ii(n,e,t=[]){dr(),Lc();const r=nt(n)[e].apply(n,t);return kc(),ur(),r}const sm=Cc("__proto__,__v_isRef,__isVue"),Wf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(pr));function am(n){pr(n)||(n=String(n));const e=nt(this);return Ft(e,"has",n),e.hasOwnProperty(n)}class Xf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const o=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!o;if(t==="__v_isReadonly")return o;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(o?i?vm:Kf:i?qf:Yf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=Ve(e);if(!o){let l;if(s&&(l=om[t]))return l;if(t==="hasOwnProperty")return am}const a=Reflect.get(e,t,Ht(e)?e:r);return(pr(t)?Wf.has(t):sm(t))||(o||Ft(e,"get",t),i)?a:Ht(a)?s&&Pc(t)?a:a.value:Mt(a)?o?Bc(a):ha(a):a}}class jf extends Xf{constructor(e=!1){super(!1,e)}set(e,t,r,o){let i=e[t];if(!this._isShallow){const l=ao(i);if(!Pn(r)&&!ao(r)&&(i=nt(i),r=nt(r)),!Ve(e)&&Ht(i)&&!Ht(r))return l?!1:(i.value=r,!0)}const s=Ve(e)&&Pc(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,r,Ht(e)?e:o);return e===nt(o)&&(s?Dr(r,i)&&rr(e,"set",t,r):rr(e,"add",t,r)),a}deleteProperty(e,t){const r=rt(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&r&&rr(e,"delete",t,void 0),o}has(e,t){const r=Reflect.has(e,t);return(!pr(t)||!Wf.has(t))&&Ft(e,"has",t),r}ownKeys(e){return Ft(e,"iterate",Ve(e)?"length":ro),Reflect.ownKeys(e)}}class lm extends Xf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const cm=new jf,dm=new lm,um=new jf(!0);const wl=n=>n,as=n=>Reflect.getPrototypeOf(n);function fm(n,e,t){return function(...r){const o=this.__v_raw,i=nt(o),s=zo(i),a=n==="entries"||n===Symbol.iterator&&s,l=n==="keys"&&s,c=o[n](...r),d=t?wl:e?Tl:Yt;return!e&&Ft(i,"iterate",l?El:ro),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function ls(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function hm(n,e){const t={get(o){const i=this.__v_raw,s=nt(i),a=nt(o);n||(Dr(o,a)&&Ft(s,"get",o),Ft(s,"get",a));const{has:l}=as(s),c=e?wl:n?Tl:Yt;if(l.call(s,o))return c(i.get(o));if(l.call(s,a))return c(i.get(a));i!==s&&i.get(o)},get size(){const o=this.__v_raw;return!n&&Ft(nt(o),"iterate",ro),Reflect.get(o,"size",o)},has(o){const i=this.__v_raw,s=nt(i),a=nt(o);return n||(Dr(o,a)&&Ft(s,"has",o),Ft(s,"has",a)),o===a?i.has(o):i.has(o)||i.has(a)},forEach(o,i){const s=this,a=s.__v_raw,l=nt(a),c=e?wl:n?Tl:Yt;return!n&&Ft(l,"iterate",ro),a.forEach((d,u)=>o.call(i,c(d),c(u),s))}};return Gt(t,n?{add:ls("add"),set:ls("set"),delete:ls("delete"),clear:ls("clear")}:{add(o){!e&&!Pn(o)&&!ao(o)&&(o=nt(o));const i=nt(this);return as(i).has.call(i,o)||(i.add(o),rr(i,"add",o,o)),this},set(o,i){!e&&!Pn(i)&&!ao(i)&&(i=nt(i));const s=nt(this),{has:a,get:l}=as(s);let c=a.call(s,o);c||(o=nt(o),c=a.call(s,o));const d=l.call(s,o);return s.set(o,i),c?Dr(i,d)&&rr(s,"set",o,i):rr(s,"add",o,i),this},delete(o){const i=nt(this),{has:s,get:a}=as(i);let l=s.call(i,o);l||(o=nt(o),l=s.call(i,o)),a&&a.call(i,o);const c=i.delete(o);return l&&rr(i,"delete",o,void 0),c},clear(){const o=nt(this),i=o.size!==0,s=o.clear();return i&&rr(o,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=fm(o,n,e)}),t}function Nc(n,e){const t=hm(n,e);return(r,o,i)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?r:Reflect.get(rt(t,o)&&o in r?t:r,o,i)}const pm={get:Nc(!1,!1)},mm={get:Nc(!1,!0)},gm={get:Nc(!0,!1)};const Yf=new WeakMap,qf=new WeakMap,Kf=new WeakMap,vm=new WeakMap;function bm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _m(n){return n.__v_skip||!Object.isExtensible(n)?0:bm(Gp(n))}function ha(n){return ao(n)?n:Fc(n,!1,cm,pm,Yf)}function ym(n){return Fc(n,!1,um,mm,qf)}function Bc(n){return Fc(n,!0,dm,gm,Kf)}function Fc(n,e,t,r,o){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=_m(n);if(i===0)return n;const s=o.get(n);if(s)return s;const a=new Proxy(n,i===2?r:t);return o.set(n,a),a}function Si(n){return ao(n)?Si(n.__v_raw):!!(n&&n.__v_isReactive)}function ao(n){return!!(n&&n.__v_isReadonly)}function Pn(n){return!!(n&&n.__v_isShallow)}function zc(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function xm(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&xl(n,"__v_skip",!0),n}const Yt=n=>Mt(n)?ha(n):n,Tl=n=>Mt(n)?Bc(n):n;function Ht(n){return n?n.__v_isRef===!0:!1}function oo(n){return Sm(n,!1)}function Sm(n,e){return Ht(n)?n:new Mm(n,e)}class Mm{constructor(e,t){this.dep=new Uc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:Yt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Pn(e)||ao(e);e=r?e:nt(e),Dr(e,t)&&(this._rawValue=e,this._value=r?e:Yt(e),this.dep.trigger())}}function $o(n){return Ht(n)?n.value:n}const Em={get:(n,e,t)=>e==="__v_raw"?n:$o(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const o=n[e];return Ht(o)&&!Ht(t)?(o.value=t,!0):Reflect.set(n,e,t,r)}};function Zf(n){return Si(n)?n:new Proxy(n,Em)}class wm{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Uc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return Ff(this,!0),!0}get value(){const e=this.dep.track();return Hf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Tm(n,e,t=!1){let r,o;return He(n)?r=n:(r=n.get,o=n.set),new wm(r,o,t)}const cs={},Ks=new WeakMap;let Zr;function Cm(n,e=!1,t=Zr){if(t){let r=Ks.get(t);r||Ks.set(t,r=[]),r.push(n)}}function Am(n,e,t=ut){const{immediate:r,deep:o,once:i,scheduler:s,augmentJob:a,call:l}=t,c=b=>o?b:Pn(b)||o===!1||o===0?or(b,1):or(b);let d,u,f,p,g=!1,_=!1;if(Ht(n)?(u=()=>n.value,g=Pn(n)):Si(n)?(u=()=>c(n),g=!0):Ve(n)?(_=!0,g=n.some(b=>Si(b)||Pn(b)),u=()=>n.map(b=>{if(Ht(b))return b.value;if(Si(b))return c(b);if(He(b))return l?l(b,2):b()})):He(n)?e?u=l?()=>l(n,2):n:u=()=>{if(f){dr();try{f()}finally{ur()}}const b=Zr;Zr=d;try{return l?l(n,3,[p]):n(p)}finally{Zr=b}}:u=zn,e&&o){const b=u,A=o===!0?1/0:o;u=()=>or(b(),A)}const m=tm(),h=()=>{d.stop(),m&&m.active&&Rc(m.effects,d)};if(i&&e){const b=e;e=(...A)=>{b(...A),h()}}let T=_?new Array(n.length).fill(cs):cs;const E=b=>{if(!(!(d.flags&1)||!d.dirty&&!b))if(e){const A=d.run();if(o||g||(_?A.some((D,R)=>Dr(D,T[R])):Dr(A,T))){f&&f();const D=Zr;Zr=d;try{const R=[A,T===cs?void 0:_&&T[0]===cs?[]:T,p];T=A,l?l(e,3,R):e(...R)}finally{Zr=D}}}else d.run()};return a&&a(E),d=new Nf(u),d.scheduler=s?()=>s(E,!1):E,p=b=>Cm(b,!1,d),f=d.onStop=()=>{const b=Ks.get(d);if(b){if(l)l(b,4);else for(const A of b)A();Ks.delete(d)}},e?r?E(!0):T=d.run():s?s(E.bind(null,!0),!0):d.run(),h.pause=d.pause.bind(d),h.resume=d.resume.bind(d),h.stop=h,h}function or(n,e=1/0,t){if(e<=0||!Mt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ht(n))or(n.value,e,t);else if(Ve(n))for(let r=0;r<n.length;r++)or(n[r],e,t);else if(Pf(n)||zo(n))n.forEach(r=>{or(r,e,t)});else if(kf(n)){for(const r in n)or(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&or(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zi(n,e,t,r){try{return r?n(...r):n()}catch(o){pa(o,e,t)}}function Vn(n,e,t,r){if(He(n)){const o=Zi(n,e,t,r);return o&&Df(o)&&o.catch(i=>{pa(i,e,t)}),o}if(Ve(n)){const o=[];for(let i=0;i<n.length;i++)o.push(Vn(n[i],e,t,r));return o}}function pa(n,e,t,r=!0){const o=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const d=a.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](n,l,c)===!1)return}a=a.parent}if(i){dr(),Zi(i,null,10,[n,l,c]),ur();return}}Rm(n,t,o,r,s)}function Rm(n,e,t,r=!0,o=!1){if(o)throw n;console.error(n)}const qt=[];let Un=-1;const Ho=[];let Er=null,ko=0;const Jf=Promise.resolve();let Zs=null;function Qf(n){const e=Zs||Jf;return n?e.then(this?n.bind(this):n):e}function Pm(n){let e=Un+1,t=qt.length;for(;e<t;){const r=e+t>>>1,o=qt[r],i=Li(o);i<n||i===n&&o.flags&2?e=r+1:t=r}return e}function $c(n){if(!(n.flags&1)){const e=Li(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=Li(t)?qt.push(n):qt.splice(Pm(e),0,n),n.flags|=1,eh()}}function eh(){Zs||(Zs=Jf.then(nh))}function Dm(n){Ve(n)?Ho.push(...n):Er&&n.id===-1?Er.splice(ko+1,0,n):n.flags&1||(Ho.push(n),n.flags|=1),eh()}function Md(n,e,t=Un+1){for(;t<qt.length;t++){const r=qt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;qt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function th(n){if(Ho.length){const e=[...new Set(Ho)].sort((t,r)=>Li(t)-Li(r));if(Ho.length=0,Er){Er.push(...e);return}for(Er=e,ko=0;ko<Er.length;ko++){const t=Er[ko];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Er=null,ko=0}}const Li=n=>n.id==null?n.flags&2?-1:1/0:n.id;function nh(n){try{for(Un=0;Un<qt.length;Un++){const e=qt[Un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Un<qt.length;Un++){const e=qt[Un];e&&(e.flags&=-2)}Un=-1,qt.length=0,th(),Zs=null,(qt.length||Ho.length)&&nh()}}let Lt=null,rh=null;function Js(n){const e=Lt;return Lt=n,rh=n&&n.type.__scopeId||null,e}function Hc(n,e=Lt,t){if(!e||n._n)return n;const r=(...o)=>{r._d&&Id(-1);const i=Js(e);let s;try{s=n(...o)}finally{Js(i),r._d&&Id(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Lm(n,e){if(Lt===null)return n;const t=_a(Lt),r=n.dirs||(n.dirs=[]);for(let o=0;o<e.length;o++){let[i,s,a,l=ut]=e[o];i&&(He(i)&&(i={mounted:i,updated:i}),i.deep&&or(s),r.push({dir:i,instance:t,value:s,oldValue:void 0,arg:a,modifiers:l}))}return n}function Vr(n,e,t,r){const o=n.dirs,i=e&&e.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let l=a.dir[r];l&&(dr(),Vn(l,t,8,[n.el,a,n,e]),ur())}}const km=Symbol("_vte"),Im=n=>n.__isTeleport;function Vc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Vc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ma(n,e){return He(n)?Gt({name:n.name},e,{setup:n}):n}function Um(){const n=Dl();return n?(n.appContext.config.idPrefix||"v")+"-"+n.ids[0]+n.ids[1]++:""}function oh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Mi(n,e,t,r,o=!1){if(Ve(n)){n.forEach((g,_)=>Mi(g,e&&(Ve(e)?e[_]:e),t,r,o));return}if(Vo(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mi(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?_a(r.component):r.el,s=o?null:i,{i:a,r:l}=n,c=e&&e.r,d=a.refs===ut?a.refs={}:a.refs,u=a.setupState,f=nt(u),p=u===ut?()=>!1:g=>rt(f,g);if(c!=null&&c!==l&&(wt(c)?(d[c]=null,p(c)&&(u[c]=null)):Ht(c)&&(c.value=null)),He(l))Zi(l,a,12,[s,d]);else{const g=wt(l),_=Ht(l);if(g||_){const m=()=>{if(n.f){const h=g?p(l)?u[l]:d[l]:l.value;o?Ve(h)&&Rc(h,i):Ve(h)?h.includes(i)||h.push(i):g?(d[l]=[i],p(l)&&(u[l]=d[l])):(l.value=[i],n.k&&(d[n.k]=l.value))}else g?(d[l]=s,p(l)&&(u[l]=s)):_&&(l.value=s,n.k&&(d[n.k]=s))};s?(m.id=-1,ln(m,t)):m()}}}ua().requestIdleCallback;ua().cancelIdleCallback;const Vo=n=>!!n.type.__asyncLoader,ih=n=>n.type.__isKeepAlive;function Om(n,e){sh(n,"a",e)}function Nm(n,e){sh(n,"da",e)}function sh(n,e,t=Ut){const r=n.__wdc||(n.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(ga(e,r,t),t){let o=t.parent;for(;o&&o.parent;)ih(o.parent.vnode)&&Bm(r,e,t,o),o=o.parent}}function Bm(n,e,t,r){const o=ga(e,n,r,!0);ch(()=>{Rc(r[e],o)},t)}function ga(n,e,t=Ut,r=!1){if(t){const o=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...s)=>{dr();const a=Ji(t),l=Vn(e,t,n,s);return a(),ur(),l});return r?o.unshift(i):o.push(i),i}}const mr=n=>(e,t=Ut)=>{(!Ii||n==="sp")&&ga(n,(...r)=>e(...r),t)},ah=mr("bm"),Gc=mr("m"),Fm=mr("bu"),zm=mr("u"),lh=mr("bum"),ch=mr("um"),$m=mr("sp"),Hm=mr("rtg"),Vm=mr("rtc");function Gm(n,e=Ut){ga("ec",n,e)}const Wc="components",Wm="directives";function Ed(n,e){return Xc(Wc,n,!0,e)||n}const dh=Symbol.for("v-ndc");function Xm(n){return wt(n)?Xc(Wc,n,!1)||n:n||dh}function jm(n){return Xc(Wm,n)}function Xc(n,e,t=!0,r=!1){const o=Lt||Ut;if(o){const i=o.type;if(n===Wc){const a=kg(i,!1);if(a&&(a===e||a===yn(e)||a===da(yn(e))))return i}const s=wd(o[n]||i[n],e)||wd(o.appContext[n],e);return!s&&r?i:s}}function wd(n,e){return n&&(n[e]||n[yn(e)]||n[da(yn(e))])}function Uo(n,e,t={},r,o){if(Lt.ce||Lt.parent&&Vo(Lt.parent)&&Lt.parent.ce)return e!=="default"&&(t.name=e),Ct(),Lr(dn,null,[$t("slot",t,r&&r())],64);let i=n[e];i&&i._c&&(i._d=!1),Ct();const s=i&&uh(i(t)),a=t.key||s&&s.key,l=Lr(dn,{key:(a&&!pr(a)?a:`_${e}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&n._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function uh(n){return n.some(e=>qc(e)?!(e.type===fr||e.type===dn&&!uh(e.children)):!0)?n:null}const Cl=n=>n?Lh(n)?_a(n):Cl(n.parent):null,Ei=Gt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Cl(n.parent),$root:n=>Cl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>hh(n),$forceUpdate:n=>n.f||(n.f=()=>{$c(n.update)}),$nextTick:n=>n.n||(n.n=Qf.bind(n.proxy)),$watch:n=>mg.bind(n)}),La=(n,e)=>n!==ut&&!n.__isScriptSetup&&rt(n,e),Ym={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:o,props:i,accessCache:s,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=s[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return o[e];case 4:return t[e];case 3:return i[e]}else{if(La(r,e))return s[e]=1,r[e];if(o!==ut&&rt(o,e))return s[e]=2,o[e];if((c=n.propsOptions[0])&&rt(c,e))return s[e]=3,i[e];if(t!==ut&&rt(t,e))return s[e]=4,t[e];Al&&(s[e]=0)}}const d=Ei[e];let u,f;if(d)return e==="$attrs"&&Ft(n.attrs,"get",""),d(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ut&&rt(t,e))return s[e]=4,t[e];if(f=l.config.globalProperties,rt(f,e))return f[e]},set({_:n},e,t){const{data:r,setupState:o,ctx:i}=n;return La(o,e)?(o[e]=t,!0):r!==ut&&rt(r,e)?(r[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:o,propsOptions:i}},s){let a;return!!t[s]||n!==ut&&rt(n,s)||La(e,s)||(a=i[0])&&rt(a,s)||rt(r,s)||rt(Ei,s)||rt(o.config.globalProperties,s)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Td(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Al=!0;function qm(n){const e=hh(n),t=n.proxy,r=n.ctx;Al=!1,e.beforeCreate&&Cd(e.beforeCreate,n,"bc");const{data:o,computed:i,methods:s,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:f,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:h,beforeUnmount:T,destroyed:E,unmounted:b,render:A,renderTracked:D,renderTriggered:R,errorCaptured:U,serverPrefetch:w,expose:M,inheritAttrs:L,components:Q,directives:H,filters:te}=e;if(c&&Km(c,r,null),s)for(const Z in s){const F=s[Z];He(F)&&(r[Z]=F.bind(t))}if(o){const Z=o.call(t,t);Mt(Z)&&(n.data=ha(Z))}if(Al=!0,i)for(const Z in i){const F=i[Z],ue=He(F)?F.bind(t,t):He(F.get)?F.get.bind(t,t):zn,he=!He(F)&&He(F.set)?F.set.bind(t):zn,be=Ug({get:ue,set:he});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>be.value,set:ke=>be.value=ke})}if(a)for(const Z in a)fh(a[Z],r,t,Z);if(l){const Z=He(l)?l.call(t):l;Reflect.ownKeys(Z).forEach(F=>{ng(F,Z[F])})}d&&Cd(d,n,"c");function q(Z,F){Ve(F)?F.forEach(ue=>Z(ue.bind(t))):F&&Z(F.bind(t))}if(q(ah,u),q(Gc,f),q(Fm,p),q(zm,g),q(Om,_),q(Nm,m),q(Gm,U),q(Vm,D),q(Hm,R),q(lh,T),q(ch,b),q($m,w),Ve(M))if(M.length){const Z=n.exposed||(n.exposed={});M.forEach(F=>{Object.defineProperty(Z,F,{get:()=>t[F],set:ue=>t[F]=ue})})}else n.exposed||(n.exposed={});A&&n.render===zn&&(n.render=A),L!=null&&(n.inheritAttrs=L),Q&&(n.components=Q),H&&(n.directives=H),w&&oh(n)}function Km(n,e,t=zn){Ve(n)&&(n=Rl(n));for(const r in n){const o=n[r];let i;Mt(o)?"default"in o?i=Os(o.from||r,o.default,!0):i=Os(o.from||r):i=Os(o),Ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[r]=i}}function Cd(n,e,t){Vn(Ve(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function fh(n,e,t,r){let o=r.includes(".")?Th(t,r):()=>t[r];if(wt(n)){const i=e[n];He(i)&&Rr(o,i)}else if(He(n))Rr(o,n.bind(t));else if(Mt(n))if(Ve(n))n.forEach(i=>fh(i,e,t,r));else{const i=He(n.handler)?n.handler.bind(t):e[n.handler];He(i)&&Rr(o,i,n)}}function hh(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=n.appContext,a=i.get(e);let l;return a?l=a:!o.length&&!t&&!r?l=e:(l={},o.length&&o.forEach(c=>Qs(l,c,s,!0)),Qs(l,e,s)),Mt(e)&&i.set(e,l),l}function Qs(n,e,t,r=!1){const{mixins:o,extends:i}=e;i&&Qs(n,i,t,!0),o&&o.forEach(s=>Qs(n,s,t,!0));for(const s in e)if(!(r&&s==="expose")){const a=Zm[s]||t&&t[s];n[s]=a?a(n[s],e[s]):e[s]}return n}const Zm={data:Ad,props:Rd,emits:Rd,methods:pi,computed:pi,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:pi,directives:pi,watch:Qm,provide:Ad,inject:Jm};function Ad(n,e){return e?n?function(){return Gt(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function Jm(n,e){return pi(Rl(n),Rl(e))}function Rl(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function pi(n,e){return n?Gt(Object.create(null),n,e):e}function Rd(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Gt(Object.create(null),Td(n),Td(e??{})):e}function Qm(n,e){if(!n)return e;if(!e)return n;const t=Gt(Object.create(null),n);for(const r in e)t[r]=Xt(n[r],e[r]);return t}function ph(){return{app:null,config:{isNativeTag:Hp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eg=0;function tg(n,e){return function(r,o=null){He(r)||(r=Gt({},r)),o!=null&&!Mt(o)&&(o=null);const i=ph(),s=new WeakSet,a=[];let l=!1;const c=i.app={_uid:eg++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Og,get config(){return i.config},set config(d){},use(d,...u){return s.has(d)||(d&&He(d.install)?(s.add(d),d.install(c,...u)):He(d)&&(s.add(d),d(c,...u))),c},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),c},component(d,u){return u?(i.components[d]=u,c):i.components[d]},directive(d,u){return u?(i.directives[d]=u,c):i.directives[d]},mount(d,u,f){if(!l){const p=c._ceVNode||$t(r,o);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),n(p,d,f),l=!0,c._container=d,d.__vue_app__=c,_a(p.component)}},onUnmount(d){a.push(d)},unmount(){l&&(Vn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(d,u){return i.provides[d]=u,c},runWithContext(d){const u=Go;Go=c;try{return d()}finally{Go=u}}};return c}}let Go=null;function ng(n,e){if(Ut){let t=Ut.provides;const r=Ut.parent&&Ut.parent.provides;r===t&&(t=Ut.provides=Object.create(r)),t[n]=e}}function Os(n,e,t=!1){const r=Ut||Lt;if(r||Go){let o=Go?Go._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&n in o)return o[n];if(arguments.length>1)return t&&He(e)?e.call(r&&r.proxy):e}}const mh={},gh=()=>Object.create(mh),vh=n=>Object.getPrototypeOf(n)===mh;function rg(n,e,t,r=!1){const o={},i=gh();n.propsDefaults=Object.create(null),bh(n,e,o,i);for(const s in n.propsOptions[0])s in o||(o[s]=void 0);t?n.props=r?o:ym(o):n.type.props?n.props=o:n.props=i,n.attrs=i}function og(n,e,t,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=n,a=nt(o),[l]=n.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=n.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(va(n.emitsOptions,f))continue;const p=e[f];if(l)if(rt(i,f))p!==i[f]&&(i[f]=p,c=!0);else{const g=yn(f);o[g]=Pl(l,a,g,p,n,!1)}else p!==i[f]&&(i[f]=p,c=!0)}}}else{bh(n,e,o,i)&&(c=!0);let d;for(const u in a)(!e||!rt(e,u)&&((d=ho(u))===u||!rt(e,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(o[u]=Pl(l,a,u,void 0,n,!0)):delete o[u]);if(i!==a)for(const u in i)(!e||!rt(e,u))&&(delete i[u],c=!0)}c&&rr(n.attrs,"set","")}function bh(n,e,t,r){const[o,i]=n.propsOptions;let s=!1,a;if(e)for(let l in e){if(_i(l))continue;const c=e[l];let d;o&&rt(o,d=yn(l))?!i||!i.includes(d)?t[d]=c:(a||(a={}))[d]=c:va(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=nt(t),c=a||ut;for(let d=0;d<i.length;d++){const u=i[d];t[u]=Pl(o,l,u,c[u],n,!rt(c,u))}}return s}function Pl(n,e,t,r,o,i){const s=n[t];if(s!=null){const a=rt(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&He(l)){const{propsDefaults:c}=o;if(t in c)r=c[t];else{const d=Ji(o);r=c[t]=l.call(null,e),d()}}else r=l;o.ce&&o.ce._setProp(t,r)}s[0]&&(i&&!a?r=!1:s[1]&&(r===""||r===ho(t))&&(r=!0))}return r}const ig=new WeakMap;function _h(n,e,t=!1){const r=t?ig:e.propsCache,o=r.get(n);if(o)return o;const i=n.props,s={},a=[];let l=!1;if(!He(n)){const d=u=>{l=!0;const[f,p]=_h(u,e,!0);Gt(s,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Mt(n)&&r.set(n,Fo),Fo;if(Ve(i))for(let d=0;d<i.length;d++){const u=yn(i[d]);Pd(u)&&(s[u]=ut)}else if(i)for(const d in i){const u=yn(d);if(Pd(u)){const f=i[d],p=s[u]=Ve(f)||He(f)?{type:f}:Gt({},f),g=p.type;let _=!1,m=!0;if(Ve(g))for(let h=0;h<g.length;++h){const T=g[h],E=He(T)&&T.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=He(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||rt(p,"default"))&&a.push(u)}}const c=[s,a];return Mt(n)&&r.set(n,c),c}function Pd(n){return n[0]!=="$"&&!_i(n)}const jc=n=>n[0]==="_"||n==="$stable",Yc=n=>Ve(n)?n.map(On):[On(n)],sg=(n,e,t)=>{if(e._n)return e;const r=Hc((...o)=>Yc(e(...o)),t);return r._c=!1,r},yh=(n,e,t)=>{const r=n._ctx;for(const o in n){if(jc(o))continue;const i=n[o];if(He(i))e[o]=sg(o,i,r);else if(i!=null){const s=Yc(i);e[o]=()=>s}}},xh=(n,e)=>{const t=Yc(e);n.slots.default=()=>t},Sh=(n,e,t)=>{for(const r in e)(t||!jc(r))&&(n[r]=e[r])},ag=(n,e,t)=>{const r=n.slots=gh();if(n.vnode.shapeFlag&32){const o=e.__;o&&xl(r,"__",o,!0);const i=e._;i?(Sh(r,e,t),t&&xl(r,"_",i,!0)):yh(e,r)}else e&&xh(n,e)},lg=(n,e,t)=>{const{vnode:r,slots:o}=n;let i=!0,s=ut;if(r.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:Sh(o,e,t):(i=!e.$stable,yh(e,o)),s=e}else e&&(xh(n,e),s={default:1});if(i)for(const a in o)!jc(a)&&s[a]==null&&delete o[a]},ln=Sg;function cg(n){return dg(n)}function dg(n,e){const t=ua();t.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:f,setScopeId:p=zn,insertStaticContent:g}=n,_=(C,P,y,oe=null,j=null,J=null,Y=void 0,ne=null,X=!!P.dynamicChildren)=>{if(C===P)return;C&&!si(C,P)&&(oe=me(C),ke(C,j,J,!0),C=null),P.patchFlag===-2&&(X=!1,P.dynamicChildren=null);const{type:W,ref:ge,shapeFlag:x}=P;switch(W){case ba:m(C,P,y,oe);break;case fr:h(C,P,y,oe);break;case Ia:C==null&&T(P,y,oe,Y);break;case dn:Q(C,P,y,oe,j,J,Y,ne,X);break;default:x&1?A(C,P,y,oe,j,J,Y,ne,X):x&6?H(C,P,y,oe,j,J,Y,ne,X):(x&64||x&128)&&W.process(C,P,y,oe,j,J,Y,ne,X,Ie)}ge!=null&&j?Mi(ge,C&&C.ref,J,P||C,!P):ge==null&&C&&C.ref!=null&&Mi(C.ref,null,J,C,!0)},m=(C,P,y,oe)=>{if(C==null)r(P.el=a(P.children),y,oe);else{const j=P.el=C.el;P.children!==C.children&&c(j,P.children)}},h=(C,P,y,oe)=>{C==null?r(P.el=l(P.children||""),y,oe):P.el=C.el},T=(C,P,y,oe)=>{[C.el,C.anchor]=g(C.children,P,y,oe,C.el,C.anchor)},E=({el:C,anchor:P},y,oe)=>{let j;for(;C&&C!==P;)j=f(C),r(C,y,oe),C=j;r(P,y,oe)},b=({el:C,anchor:P})=>{let y;for(;C&&C!==P;)y=f(C),o(C),C=y;o(P)},A=(C,P,y,oe,j,J,Y,ne,X)=>{P.type==="svg"?Y="svg":P.type==="math"&&(Y="mathml"),C==null?D(P,y,oe,j,J,Y,ne,X):w(C,P,j,J,Y,ne,X)},D=(C,P,y,oe,j,J,Y,ne)=>{let X,W;const{props:ge,shapeFlag:x,transition:v,dirs:k}=C;if(X=C.el=s(C.type,J,ge&&ge.is,ge),x&8?d(X,C.children):x&16&&U(C.children,X,null,oe,j,ka(C,J),Y,ne),k&&Vr(C,null,oe,"created"),R(X,C,C.scopeId,Y,oe),ge){for(const K in ge)K!=="value"&&!_i(K)&&i(X,K,null,ge[K],J,oe);"value"in ge&&i(X,"value",null,ge.value,J),(W=ge.onVnodeBeforeMount)&&kn(W,oe,C)}k&&Vr(C,null,oe,"beforeMount");const $=ug(j,v);$&&v.beforeEnter(X),r(X,P,y),((W=ge&&ge.onVnodeMounted)||$||k)&&ln(()=>{W&&kn(W,oe,C),$&&v.enter(X),k&&Vr(C,null,oe,"mounted")},j)},R=(C,P,y,oe,j)=>{if(y&&p(C,y),oe)for(let J=0;J<oe.length;J++)p(C,oe[J]);if(j){let J=j.subTree;if(P===J||Ah(J.type)&&(J.ssContent===P||J.ssFallback===P)){const Y=j.vnode;R(C,Y,Y.scopeId,Y.slotScopeIds,j.parent)}}},U=(C,P,y,oe,j,J,Y,ne,X=0)=>{for(let W=X;W<C.length;W++){const ge=C[W]=ne?wr(C[W]):On(C[W]);_(null,ge,P,y,oe,j,J,Y,ne)}},w=(C,P,y,oe,j,J,Y)=>{const ne=P.el=C.el;let{patchFlag:X,dynamicChildren:W,dirs:ge}=P;X|=C.patchFlag&16;const x=C.props||ut,v=P.props||ut;let k;if(y&&Gr(y,!1),(k=v.onVnodeBeforeUpdate)&&kn(k,y,P,C),ge&&Vr(P,C,y,"beforeUpdate"),y&&Gr(y,!0),(x.innerHTML&&v.innerHTML==null||x.textContent&&v.textContent==null)&&d(ne,""),W?M(C.dynamicChildren,W,ne,y,oe,ka(P,j),J):Y||F(C,P,ne,null,y,oe,ka(P,j),J,!1),X>0){if(X&16)L(ne,x,v,y,j);else if(X&2&&x.class!==v.class&&i(ne,"class",null,v.class,j),X&4&&i(ne,"style",x.style,v.style,j),X&8){const $=P.dynamicProps;for(let K=0;K<$.length;K++){const z=$[K],xe=x[z],de=v[z];(de!==xe||z==="value")&&i(ne,z,xe,de,j,y)}}X&1&&C.children!==P.children&&d(ne,P.children)}else!Y&&W==null&&L(ne,x,v,y,j);((k=v.onVnodeUpdated)||ge)&&ln(()=>{k&&kn(k,y,P,C),ge&&Vr(P,C,y,"updated")},oe)},M=(C,P,y,oe,j,J,Y)=>{for(let ne=0;ne<P.length;ne++){const X=C[ne],W=P[ne],ge=X.el&&(X.type===dn||!si(X,W)||X.shapeFlag&198)?u(X.el):y;_(X,W,ge,null,oe,j,J,Y,!0)}},L=(C,P,y,oe,j)=>{if(P!==y){if(P!==ut)for(const J in P)!_i(J)&&!(J in y)&&i(C,J,P[J],null,j,oe);for(const J in y){if(_i(J))continue;const Y=y[J],ne=P[J];Y!==ne&&J!=="value"&&i(C,J,ne,Y,j,oe)}"value"in y&&i(C,"value",P.value,y.value,j)}},Q=(C,P,y,oe,j,J,Y,ne,X)=>{const W=P.el=C?C.el:a(""),ge=P.anchor=C?C.anchor:a("");let{patchFlag:x,dynamicChildren:v,slotScopeIds:k}=P;k&&(ne=ne?ne.concat(k):k),C==null?(r(W,y,oe),r(ge,y,oe),U(P.children||[],y,ge,j,J,Y,ne,X)):x>0&&x&64&&v&&C.dynamicChildren?(M(C.dynamicChildren,v,y,j,J,Y,ne),(P.key!=null||j&&P===j.subTree)&&Mh(C,P,!0)):F(C,P,y,ge,j,J,Y,ne,X)},H=(C,P,y,oe,j,J,Y,ne,X)=>{P.slotScopeIds=ne,C==null?P.shapeFlag&512?j.ctx.activate(P,y,oe,Y,X):te(P,y,oe,j,J,Y,X):re(C,P,X)},te=(C,P,y,oe,j,J,Y)=>{const ne=C.component=Ag(C,oe,j);if(ih(C)&&(ne.ctx.renderer=Ie),Rg(ne,!1,Y),ne.asyncDep){if(j&&j.registerDep(ne,q,Y),!C.el){const X=ne.subTree=$t(fr);h(null,X,P,y)}}else q(ne,C,P,y,j,J,Y)},re=(C,P,y)=>{const oe=P.component=C.component;if(yg(C,P,y))if(oe.asyncDep&&!oe.asyncResolved){Z(oe,P,y);return}else oe.next=P,oe.update();else P.el=C.el,oe.vnode=P},q=(C,P,y,oe,j,J,Y)=>{const ne=()=>{if(C.isMounted){let{next:x,bu:v,u:k,parent:$,vnode:K}=C;{const Ee=Eh(C);if(Ee){x&&(x.el=K.el,Z(C,x,Y)),Ee.asyncDep.then(()=>{C.isUnmounted||ne()});return}}let z=x,xe;Gr(C,!1),x?(x.el=K.el,Z(C,x,Y)):x=K,v&&Ca(v),(xe=x.props&&x.props.onVnodeBeforeUpdate)&&kn(xe,$,x,K),Gr(C,!0);const de=Ld(C),Se=C.subTree;C.subTree=de,_(Se,de,u(Se.el),me(Se),C,j,J),x.el=de.el,z===null&&xg(C,de.el),k&&ln(k,j),(xe=x.props&&x.props.onVnodeUpdated)&&ln(()=>kn(xe,$,x,K),j)}else{let x;const{el:v,props:k}=P,{bm:$,m:K,parent:z,root:xe,type:de}=C,Se=Vo(P);Gr(C,!1),$&&Ca($),!Se&&(x=k&&k.onVnodeBeforeMount)&&kn(x,z,P),Gr(C,!0);{xe.ce&&xe.ce._def.shadowRoot!==!1&&xe.ce._injectChildStyle(de);const Ee=C.subTree=Ld(C);_(null,Ee,y,oe,C,j,J),P.el=Ee.el}if(K&&ln(K,j),!Se&&(x=k&&k.onVnodeMounted)){const Ee=P;ln(()=>kn(x,z,Ee),j)}(P.shapeFlag&256||z&&Vo(z.vnode)&&z.vnode.shapeFlag&256)&&C.a&&ln(C.a,j),C.isMounted=!0,P=y=oe=null}};C.scope.on();const X=C.effect=new Nf(ne);C.scope.off();const W=C.update=X.run.bind(X),ge=C.job=X.runIfDirty.bind(X);ge.i=C,ge.id=C.uid,X.scheduler=()=>$c(ge),Gr(C,!0),W()},Z=(C,P,y)=>{P.component=C;const oe=C.vnode.props;C.vnode=P,C.next=null,og(C,P.props,oe,y),lg(C,P.children,y),dr(),Md(C),ur()},F=(C,P,y,oe,j,J,Y,ne,X=!1)=>{const W=C&&C.children,ge=C?C.shapeFlag:0,x=P.children,{patchFlag:v,shapeFlag:k}=P;if(v>0){if(v&128){he(W,x,y,oe,j,J,Y,ne,X);return}else if(v&256){ue(W,x,y,oe,j,J,Y,ne,X);return}}k&8?(ge&16&&Te(W,j,J),x!==W&&d(y,x)):ge&16?k&16?he(W,x,y,oe,j,J,Y,ne,X):Te(W,j,J,!0):(ge&8&&d(y,""),k&16&&U(x,y,oe,j,J,Y,ne,X))},ue=(C,P,y,oe,j,J,Y,ne,X)=>{C=C||Fo,P=P||Fo;const W=C.length,ge=P.length,x=Math.min(W,ge);let v;for(v=0;v<x;v++){const k=P[v]=X?wr(P[v]):On(P[v]);_(C[v],k,y,null,j,J,Y,ne,X)}W>ge?Te(C,j,J,!0,!1,x):U(P,y,oe,j,J,Y,ne,X,x)},he=(C,P,y,oe,j,J,Y,ne,X)=>{let W=0;const ge=P.length;let x=C.length-1,v=ge-1;for(;W<=x&&W<=v;){const k=C[W],$=P[W]=X?wr(P[W]):On(P[W]);if(si(k,$))_(k,$,y,null,j,J,Y,ne,X);else break;W++}for(;W<=x&&W<=v;){const k=C[x],$=P[v]=X?wr(P[v]):On(P[v]);if(si(k,$))_(k,$,y,null,j,J,Y,ne,X);else break;x--,v--}if(W>x){if(W<=v){const k=v+1,$=k<ge?P[k].el:oe;for(;W<=v;)_(null,P[W]=X?wr(P[W]):On(P[W]),y,$,j,J,Y,ne,X),W++}}else if(W>v)for(;W<=x;)ke(C[W],j,J,!0),W++;else{const k=W,$=W,K=new Map;for(W=$;W<=v;W++){const Ae=P[W]=X?wr(P[W]):On(P[W]);Ae.key!=null&&K.set(Ae.key,W)}let z,xe=0;const de=v-$+1;let Se=!1,Ee=0;const se=new Array(de);for(W=0;W<de;W++)se[W]=0;for(W=k;W<=x;W++){const Ae=C[W];if(xe>=de){ke(Ae,j,J,!0);continue}let Re;if(Ae.key!=null)Re=K.get(Ae.key);else for(z=$;z<=v;z++)if(se[z-$]===0&&si(Ae,P[z])){Re=z;break}Re===void 0?ke(Ae,j,J,!0):(se[Re-$]=W+1,Re>=Ee?Ee=Re:Se=!0,_(Ae,P[Re],y,null,j,J,Y,ne,X),xe++)}const Me=Se?fg(se):Fo;for(z=Me.length-1,W=de-1;W>=0;W--){const Ae=$+W,Re=P[Ae],pe=Ae+1<ge?P[Ae+1].el:oe;se[W]===0?_(null,Re,y,pe,j,J,Y,ne,X):Se&&(z<0||W!==Me[z]?be(Re,y,pe,2):z--)}}},be=(C,P,y,oe,j=null)=>{const{el:J,type:Y,transition:ne,children:X,shapeFlag:W}=C;if(W&6){be(C.component.subTree,P,y,oe);return}if(W&128){C.suspense.move(P,y,oe);return}if(W&64){Y.move(C,P,y,Ie);return}if(Y===dn){r(J,P,y);for(let x=0;x<X.length;x++)be(X[x],P,y,oe);r(C.anchor,P,y);return}if(Y===Ia){E(C,P,y);return}if(oe!==2&&W&1&&ne)if(oe===0)ne.beforeEnter(J),r(J,P,y),ln(()=>ne.enter(J),j);else{const{leave:x,delayLeave:v,afterLeave:k}=ne,$=()=>{C.ctx.isUnmounted?o(J):r(J,P,y)},K=()=>{x(J,()=>{$(),k&&k()})};v?v(J,$,K):K()}else r(J,P,y)},ke=(C,P,y,oe=!1,j=!1)=>{const{type:J,props:Y,ref:ne,children:X,dynamicChildren:W,shapeFlag:ge,patchFlag:x,dirs:v,cacheIndex:k}=C;if(x===-2&&(j=!1),ne!=null&&(dr(),Mi(ne,null,y,C,!0),ur()),k!=null&&(P.renderCache[k]=void 0),ge&256){P.ctx.deactivate(C);return}const $=ge&1&&v,K=!Vo(C);let z;if(K&&(z=Y&&Y.onVnodeBeforeUnmount)&&kn(z,P,C),ge&6)fe(C.component,y,oe);else{if(ge&128){C.suspense.unmount(y,oe);return}$&&Vr(C,null,P,"beforeUnmount"),ge&64?C.type.remove(C,P,y,Ie,oe):W&&!W.hasOnce&&(J!==dn||x>0&&x&64)?Te(W,P,y,!1,!0):(J===dn&&x&384||!j&&ge&16)&&Te(X,P,y),oe&&Ze(C)}(K&&(z=Y&&Y.onVnodeUnmounted)||$)&&ln(()=>{z&&kn(z,P,C),$&&Vr(C,null,P,"unmounted")},y)},Ze=C=>{const{type:P,el:y,anchor:oe,transition:j}=C;if(P===dn){ee(y,oe);return}if(P===Ia){b(C);return}const J=()=>{o(y),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(C.shapeFlag&1&&j&&!j.persisted){const{leave:Y,delayLeave:ne}=j,X=()=>Y(y,J);ne?ne(C.el,J,X):X()}else J()},ee=(C,P)=>{let y;for(;C!==P;)y=f(C),o(C),C=y;o(P)},fe=(C,P,y)=>{const{bum:oe,scope:j,job:J,subTree:Y,um:ne,m:X,a:W,parent:ge,slots:{__:x}}=C;Dd(X),Dd(W),oe&&Ca(oe),ge&&Ve(x)&&x.forEach(v=>{ge.renderCache[v]=void 0}),j.stop(),J&&(J.flags|=8,ke(Y,C,P,y)),ne&&ln(ne,P),ln(()=>{C.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Te=(C,P,y,oe=!1,j=!1,J=0)=>{for(let Y=J;Y<C.length;Y++)ke(C[Y],P,y,oe,j)},me=C=>{if(C.shapeFlag&6)return me(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const P=f(C.anchor||C.el),y=P&&P[km];return y?f(y):P};let Le=!1;const Ye=(C,P,y)=>{C==null?P._vnode&&ke(P._vnode,null,null,!0):_(P._vnode||null,C,P,null,null,null,y),P._vnode=C,Le||(Le=!0,Md(),th(),Le=!1)},Ie={p:_,um:ke,m:be,r:Ze,mt:te,mc:U,pc:F,pbc:M,n:me,o:n};return{render:Ye,hydrate:void 0,createApp:tg(Ye)}}function ka({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Gr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ug(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Mh(n,e,t=!1){const r=n.children,o=e.children;if(Ve(r)&&Ve(o))for(let i=0;i<r.length;i++){const s=r[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=wr(o[i]),a.el=s.el),!t&&a.patchFlag!==-2&&Mh(s,a)),a.type===ba&&(a.el=s.el),a.type===fr&&!a.el&&(a.el=s.el)}}function fg(n){const e=n.slice(),t=[0];let r,o,i,s,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(o=t[t.length-1],n[o]<c){e[r]=o,t.push(r);continue}for(i=0,s=t.length-1;i<s;)a=i+s>>1,n[t[a]]<c?i=a+1:s=a;c<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,s=t[i-1];i-- >0;)t[i]=s,s=e[s];return t}function Eh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Eh(e)}function Dd(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const hg=Symbol.for("v-scx"),pg=()=>Os(hg);function Rr(n,e,t){return wh(n,e,t)}function wh(n,e,t=ut){const{immediate:r,deep:o,flush:i,once:s}=t,a=Gt({},t),l=e&&r||!e&&i!=="post";let c;if(Ii){if(i==="sync"){const p=pg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=zn,p.resume=zn,p.pause=zn,p}}const d=Ut;a.call=(p,g,_)=>Vn(p,d,g,_);let u=!1;i==="post"?a.scheduler=p=>{ln(p,d&&d.suspense)}:i!=="sync"&&(u=!0,a.scheduler=(p,g)=>{g?p():$c(p)}),a.augmentJob=p=>{e&&(p.flags|=4),u&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const f=Am(n,e,a);return Ii&&(c?c.push(f):l&&f()),f}function mg(n,e,t){const r=this.proxy,o=wt(n)?n.includes(".")?Th(r,n):()=>r[n]:n.bind(r,r);let i;He(e)?i=e:(i=e.handler,t=e);const s=Ji(this),a=wh(o,i.bind(r),t);return s(),a}function Th(n,e){const t=e.split(".");return()=>{let r=n;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}const gg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${yn(e)}Modifiers`]||n[`${ho(e)}Modifiers`];function vg(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||ut;let o=t;const i=e.startsWith("update:"),s=i&&gg(r,e.slice(7));s&&(s.trim&&(o=t.map(d=>wt(d)?d.trim():d)),s.number&&(o=t.map(jp)));let a,l=r[a=Ta(e)]||r[a=Ta(yn(e))];!l&&i&&(l=r[a=Ta(ho(e))]),l&&Vn(l,n,6,o);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Vn(c,n,6,o)}}function Ch(n,e,t=!1){const r=e.emitsCache,o=r.get(n);if(o!==void 0)return o;const i=n.emits;let s={},a=!1;if(!He(n)){const l=c=>{const d=Ch(c,e,!0);d&&(a=!0,Gt(s,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!a?(Mt(n)&&r.set(n,null),null):(Ve(i)?i.forEach(l=>s[l]=null):Gt(s,i),Mt(n)&&r.set(n,s),s)}function va(n,e){return!n||!aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,ho(e))||rt(n,e))}function Ld(n){const{type:e,vnode:t,proxy:r,withProxy:o,propsOptions:[i],slots:s,attrs:a,emit:l,render:c,renderCache:d,props:u,data:f,setupState:p,ctx:g,inheritAttrs:_}=n,m=Js(n);let h,T;try{if(t.shapeFlag&4){const b=o||r,A=b;h=On(c.call(A,b,d,u,p,f,g)),T=a}else{const b=e;h=On(b.length>1?b(u,{attrs:a,slots:s,emit:l}):b(u,null)),T=e.props?a:bg(a)}}catch(b){wi.length=0,pa(b,n,1),h=$t(fr)}let E=h;if(T&&_!==!1){const b=Object.keys(T),{shapeFlag:A}=E;b.length&&A&7&&(i&&b.some(Ac)&&(T=_g(T,i)),E=Ko(E,T,!1,!0))}return t.dirs&&(E=Ko(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Vc(E,t.transition),h=E,Js(m),h}const bg=n=>{let e;for(const t in n)(t==="class"||t==="style"||aa(t))&&((e||(e={}))[t]=n[t]);return e},_g=(n,e)=>{const t={};for(const r in n)(!Ac(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function yg(n,e,t){const{props:r,children:o,component:i}=n,{props:s,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?kd(r,s,c):!!s;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(s[f]!==r[f]&&!va(c,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?kd(r,s,c):!0:!!s;return!1}function kd(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(e[i]!==n[i]&&!va(t,i))return!0}return!1}function xg({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ah=n=>n.__isSuspense;function Sg(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):Dm(n)}const dn=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),fr=Symbol.for("v-cmt"),Ia=Symbol.for("v-stc"),wi=[];let fn=null;function Ct(n=!1){wi.push(fn=n?null:[])}function Mg(){wi.pop(),fn=wi[wi.length-1]||null}let ki=1;function Id(n,e=!1){ki+=n,n<0&&fn&&e&&(fn.hasOnce=!0)}function Rh(n){return n.dynamicChildren=ki>0?fn||Fo:null,Mg(),ki>0&&fn&&fn.push(n),n}function Dn(n,e,t,r,o,i){return Rh(zt(n,e,t,r,o,i,!0))}function Lr(n,e,t,r,o){return Rh($t(n,e,t,r,o,!0))}function qc(n){return n?n.__v_isVNode===!0:!1}function si(n,e){return n.type===e.type&&n.key===e.key}const Ph=({key:n})=>n??null,Ns=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?wt(n)||Ht(n)||He(n)?{i:Lt,r:n,k:e,f:!!t}:n:null);function zt(n,e=null,t=null,r=0,o=null,i=n===dn?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ph(e),ref:e&&Ns(e),scopeId:rh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Lt};return a?(Kc(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=wt(t)?8:16),ki>0&&!s&&fn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&fn.push(l),l}const $t=Eg;function Eg(n,e=null,t=null,r=0,o=null,i=!1){if((!n||n===dh)&&(n=fr),qc(n)){const a=Ko(n,e,!0);return t&&Kc(a,t),ki>0&&!i&&fn&&(a.shapeFlag&6?fn[fn.indexOf(n)]=a:fn.push(a)),a.patchFlag=-2,a}if(Ig(n)&&(n=n.__vccOpts),e){e=wg(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=Ri(a)),Mt(l)&&(zc(l)&&!Ve(l)&&(l=Gt({},l)),e.style=Dc(l))}const s=wt(n)?1:Ah(n)?128:Im(n)?64:Mt(n)?4:He(n)?2:0;return zt(n,e,t,r,o,s,i,!0)}function wg(n){return n?zc(n)||vh(n)?Gt({},n):n:null}function Ko(n,e,t=!1,r=!1){const{props:o,ref:i,patchFlag:s,children:a,transition:l}=n,c=e?Dt(o||{},e):o,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ph(c),ref:e&&e.ref?t&&i?Ve(i)?i.concat(Ns(e)):[i,Ns(e)]:Ns(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==dn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ko(n.ssContent),ssFallback:n.ssFallback&&Ko(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&Vc(d,l.clone(d)),d}function Dh(n=" ",e=0){return $t(ba,null,n,e)}function Bs(n="",e=!1){return e?(Ct(),Lr(fr,null,n)):$t(fr,null,n)}function On(n){return n==null||typeof n=="boolean"?$t(fr):Ve(n)?$t(dn,null,n.slice()):qc(n)?wr(n):$t(ba,null,String(n))}function wr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ko(n)}function Kc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(r&65){const o=e.default;o&&(o._c&&(o._d=!1),Kc(n,o()),o._c&&(o._d=!0));return}else{t=32;const o=e._;!o&&!vh(e)?e._ctx=Lt:o===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:Lt},t=32):(e=String(e),r&64?(t=16,e=[Dh(e)]):t=8);n.children=e,n.shapeFlag|=t}function Dt(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const o in r)if(o==="class")e.class!==r.class&&(e.class=Ri([e.class,r.class]));else if(o==="style")e.style=Dc([e.style,r.style]);else if(aa(o)){const i=e[o],s=r[o];s&&i!==s&&!(Ve(i)&&i.includes(s))&&(e[o]=i?[].concat(i,s):s)}else o!==""&&(e[o]=r[o])}return e}function kn(n,e,t,r=null){Vn(n,e,7,[t,r])}const Tg=ph();let Cg=0;function Ag(n,e,t){const r=n.type,o=(e?e.appContext:n.appContext)||Tg,i={uid:Cg++,vnode:n,type:r,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new em(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_h(r,o),emitsOptions:Ch(r,o),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:r.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vg.bind(null,i),n.ce&&n.ce(i),i}let Ut=null;const Dl=()=>Ut||Lt;let ea,Ll;{const n=ua(),e=(t,r)=>{let o;return(o=n[t])||(o=n[t]=[]),o.push(r),i=>{o.length>1?o.forEach(s=>s(i)):o[0](i)}};ea=e("__VUE_INSTANCE_SETTERS__",t=>Ut=t),Ll=e("__VUE_SSR_SETTERS__",t=>Ii=t)}const Ji=n=>{const e=Ut;return ea(n),n.scope.on(),()=>{n.scope.off(),ea(e)}},Ud=()=>{Ut&&Ut.scope.off(),ea(null)};function Lh(n){return n.vnode.shapeFlag&4}let Ii=!1;function Rg(n,e=!1,t=!1){e&&Ll(e);const{props:r,children:o}=n.vnode,i=Lh(n);rg(n,r,i,e),ag(n,o,t||e);const s=i?Pg(n,e):void 0;return e&&Ll(!1),s}function Pg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ym);const{setup:r}=t;if(r){dr();const o=n.setupContext=r.length>1?Lg(n):null,i=Ji(n),s=Zi(r,n,0,[n.props,o]),a=Df(s);if(ur(),i(),(a||n.sp)&&!Vo(n)&&oh(n),a){if(s.then(Ud,Ud),e)return s.then(l=>{Od(n,l)}).catch(l=>{pa(l,n,0)});n.asyncDep=s}else Od(n,s)}else kh(n)}function Od(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=Zf(e)),kh(n)}function kh(n,e,t){const r=n.type;n.render||(n.render=r.render||zn);{const o=Ji(n);dr();try{qm(n)}finally{ur(),o()}}}const Dg={get(n,e){return Ft(n,"get",""),n[e]}};function Lg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Dg),slots:n.slots,emit:n.emit,expose:e}}function _a(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Zf(xm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ei)return Ei[t](n)},has(e,t){return t in e||t in Ei}})):n.proxy}function kg(n,e=!0){return He(n)?n.displayName||n.name:n.name||e&&n.__name}function Ig(n){return He(n)&&"__vccOpts"in n}const Ug=(n,e)=>Tm(n,e,Ii),Og="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kl;const Nd=typeof window<"u"&&window.trustedTypes;if(Nd)try{kl=Nd.createPolicy("vue",{createHTML:n=>n})}catch{}const Ih=kl?n=>kl.createHTML(n):n=>n,Ng="http://www.w3.org/2000/svg",Bg="http://www.w3.org/1998/Math/MathML",nr=typeof document<"u"?document:null,Bd=nr&&nr.createElement("template"),Fg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const o=e==="svg"?nr.createElementNS(Ng,n):e==="mathml"?nr.createElementNS(Bg,n):t?nr.createElement(n,{is:t}):nr.createElement(n);return n==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:n=>nr.createTextNode(n),createComment:n=>nr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>nr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,o,i){const s=t?t.previousSibling:e.lastChild;if(o&&(o===i||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),t),!(o===i||!(o=o.nextSibling)););else{Bd.innerHTML=Ih(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=Bd.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[s?s.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},zg=Symbol("_vtc");function $g(n,e,t){const r=n[zg];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Fd=Symbol("_vod"),Hg=Symbol("_vsh"),Vg=Symbol(""),Gg=/(^|;)\s*display\s*:/;function Wg(n,e,t){const r=n.style,o=wt(t);let i=!1;if(t&&!o){if(e)if(wt(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();t[a]==null&&Fs(r,a,"")}else for(const s in e)t[s]==null&&Fs(r,s,"");for(const s in t)s==="display"&&(i=!0),Fs(r,s,t[s])}else if(o){if(e!==t){const s=r[Vg];s&&(t+=";"+s),r.cssText=t,i=Gg.test(t)}}else e&&n.removeAttribute("style");Fd in n&&(n[Fd]=i?r.display:"",n[Hg]&&(r.display="none"))}const zd=/\s*!important$/;function Fs(n,e,t){if(Ve(t))t.forEach(r=>Fs(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Xg(n,e);zd.test(t)?n.setProperty(ho(r),t.replace(zd,""),"important"):n[r]=t}}const $d=["Webkit","Moz","ms"],Ua={};function Xg(n,e){const t=Ua[e];if(t)return t;let r=yn(e);if(r!=="filter"&&r in n)return Ua[e]=r;r=da(r);for(let o=0;o<$d.length;o++){const i=$d[o]+r;if(i in n)return Ua[e]=i}return e}const Hd="http://www.w3.org/1999/xlink";function Vd(n,e,t,r,o,i=Qp(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hd,e.slice(6,e.length)):n.setAttributeNS(Hd,e,t):t==null||i&&!If(t)?n.removeAttribute(e):n.setAttribute(e,i?"":pr(t)?String(t):t)}function Gd(n,e,t,r,o){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ih(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=If(t):t==null&&a==="string"?(t="",s=!0):a==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(o||e)}function jg(n,e,t,r){n.addEventListener(e,t,r)}function Yg(n,e,t,r){n.removeEventListener(e,t,r)}const Wd=Symbol("_vei");function qg(n,e,t,r,o=null){const i=n[Wd]||(n[Wd]={}),s=i[e];if(r&&s)s.value=r;else{const[a,l]=Kg(e);if(r){const c=i[e]=Qg(r,o);jg(n,a,c,l)}else s&&(Yg(n,a,s,l),i[e]=void 0)}}const Xd=/(?:Once|Passive|Capture)$/;function Kg(n){let e;if(Xd.test(n)){e={};let r;for(;r=n.match(Xd);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ho(n.slice(2)),e]}let Oa=0;const Zg=Promise.resolve(),Jg=()=>Oa||(Zg.then(()=>Oa=0),Oa=Date.now());function Qg(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Vn(e0(r,t.value),e,5,[r])};return t.value=n,t.attached=Jg(),t}function e0(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>o=>!o._stopped&&r&&r(o))}else return e}const jd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,t0=(n,e,t,r,o,i)=>{const s=o==="svg";e==="class"?$g(n,r,s):e==="style"?Wg(n,t,r):aa(e)?Ac(e)||qg(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):n0(n,e,r,s))?(Gd(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vd(n,e,r,s,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!wt(r))?Gd(n,yn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Vd(n,e,r,s))};function n0(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&jd(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=n.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return jd(e)&&wt(t)?!1:e in n}const r0=Gt({patchProp:t0},Fg);let Yd;function o0(){return Yd||(Yd=cg(r0))}const i0=(...n)=>{const e=o0().createApp(...n),{mount:t}=e;return e.mount=r=>{const o=a0(r);if(!o)return;const i=e._component;!He(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const s=t(o,!1,s0(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e};function s0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function a0(n){return wt(n)?document.querySelector(n):n}var l0=Object.defineProperty,qd=Object.getOwnPropertySymbols,c0=Object.prototype.hasOwnProperty,d0=Object.prototype.propertyIsEnumerable,Kd=(n,e,t)=>e in n?l0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,u0=(n,e)=>{for(var t in e||(e={}))c0.call(e,t)&&Kd(n,t,e[t]);if(qd)for(var t of qd(e))d0.call(e,t)&&Kd(n,t,e[t]);return n};function Nr(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&typeof n=="object"&&Object.keys(n).length===0}function Zc(n){return typeof n=="function"&&"call"in n&&"apply"in n}function bt(n){return!Nr(n)}function hr(n,e=!0){return n instanceof Object&&n.constructor===Object&&(e||Object.keys(n).length!==0)}function Uh(n={},e={}){let t=u0({},n);return Object.keys(e).forEach(r=>{let o=r;hr(e[o])&&o in n&&hr(n[o])?t[o]=Uh(n[o],e[o]):t[o]=e[o]}),t}function Oh(...n){return n.reduce((e,t,r)=>r===0?t:Uh(e,t),{})}function hn(n,...e){return Zc(n)?n(...e):n}function mn(n,e=!0){return typeof n=="string"&&(e||n!=="")}function Bn(n){return mn(n)?n.replace(/(-|_)/g,"").toLowerCase():n}function Jc(n,e="",t={}){let r=Bn(e).split("."),o=r.shift();if(o){if(hr(n)){let i=Object.keys(n).find(s=>Bn(s)===o)||"";return Jc(hn(n[i],t),r.join("."),t)}return}return hn(n,t)}function Nh(n,e=!0){return Array.isArray(n)&&(e||n.length!==0)}function f0(n){return bt(n)&&!isNaN(n)}function Wo(n,e){if(e){let t=e.test(n);return e.lastIndex=0,t}return!1}function h0(...n){return Oh(...n)}function Ti(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function p0(n){return mn(n,!1)?n[0].toUpperCase()+n.slice(1):n}function Bh(n){return mn(n)?n.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,t)=>t===0?e:"-"+e.toLowerCase()).toLowerCase():n}function Fh(){let n=new Map;return{on(e,t){let r=n.get(e);return r?r.push(t):r=[t],n.set(e,r),this},off(e,t){let r=n.get(e);return r&&r.splice(r.indexOf(t)>>>0,1),this},emit(e,t){let r=n.get(e);r&&r.forEach(o=>{o(t)})},clear(){n.clear()}}}function Ci(...n){if(n){let e=[];for(let t=0;t<n.length;t++){let r=n[t];if(!r)continue;let o=typeof r;if(o==="string"||o==="number")e.push(r);else if(o==="object"){let i=Array.isArray(r)?[Ci(...r)]:Object.entries(r).map(([s,a])=>a?s:void 0);e=i.length?e.concat(i.filter(s=>!!s)):e}}return e.join(" ").trim()}}function zh(n,e){return n?n.classList?n.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(n.className):!1}function $h(n,e){if(n&&e){let t=r=>{zh(n,r)||(n.classList?n.classList.add(r):n.className+=" "+r)};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function zs(n,e){if(n&&e){let t=r=>{n.classList?n.classList.remove(r):n.className=n.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function Na(){let n=window,e=document,t=e.documentElement,r=e.getElementsByTagName("body")[0],o=n.innerWidth||t.clientWidth||r.clientWidth,i=n.innerHeight||t.clientHeight||r.clientHeight;return{width:o,height:i}}function Il(n){return n?Math.abs(n.scrollLeft):0}function m0(){let n=document.documentElement;return(window.pageXOffset||Il(n))-(n.clientLeft||0)}function g0(){let n=document.documentElement;return(window.pageYOffset||n.scrollTop)-(n.clientTop||0)}function Sr(n,e){return n instanceof HTMLElement?n.offsetWidth:0}function Hh(n){if(n){let e=n.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function Vh(n){return!!(n!==null&&typeof n<"u"&&n.nodeName&&Hh(n))}function Qi(n){return typeof Element<"u"?n instanceof Element:n!==null&&typeof n=="object"&&n.nodeType===1&&typeof n.nodeName=="string"}function ta(n,e={}){if(Qi(n)){let t=(r,o)=>{var i,s;let a=(i=n?.$attrs)!=null&&i[r]?[(s=n?.$attrs)==null?void 0:s[r]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let u=Array.isArray(c)?t(r,c):Object.entries(c).map(([f,p])=>r==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=u.length?l.concat(u.filter(f=>!!f)):l}}return l},a)};Object.entries(e).forEach(([r,o])=>{if(o!=null){let i=r.match(/^on(.+)/);i?n.addEventListener(i[1].toLowerCase(),o):r==="p-bind"||r==="pBind"?ta(n,o):(o=r==="class"?[...new Set(t("class",o))].join(" ").trim():r==="style"?t("style",o).join(";").trim():o,(n.$attrs=n.$attrs||{})&&(n.$attrs[r]=o),n.setAttribute(r,o))}})}}function $s(n,e={},...t){if(n){let r=document.createElement(n);return ta(r,e),r.append(...t),r}}function v0(n,e){if(n){n.style.opacity="0";let t=+new Date,r="0",o=function(){r=`${+n.style.opacity+(new Date().getTime()-t)/e}`,n.style.opacity=r,t=+new Date,+r<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function na(n,e){return Qi(n)?n.matches(e)?n:n.querySelector(e):null}function Jr(n,e){if(Qi(n)){let t=n.getAttribute(e);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function Zd(n){if(n){let e=n.offsetHeight,t=getComputedStyle(n);return e-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),e}return 0}function b0(n){if(n){let e=n.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||Il(document.documentElement)||Il(document.body)||0)}}return{top:"auto",left:"auto"}}function Mr(n,e){return n?n.offsetHeight:0}function Gh(n,e=[]){let t=Hh(n);return t===null?e:Gh(t,e.concat([t]))}function _0(n){let e=[];if(n){let t=Gh(n),r=/(auto|scroll)/,o=i=>{try{let s=window.getComputedStyle(i,null);return r.test(s.getPropertyValue("overflow"))||r.test(s.getPropertyValue("overflowX"))||r.test(s.getPropertyValue("overflowY"))}catch{return!1}};for(let i of t){let s=i.nodeType===1&&i.dataset.scrollselectors;if(s){let a=s.split(",");for(let l of a){let c=na(i,l);c&&o(c)&&e.push(c)}}i.nodeType!==9&&o(i)&&e.push(i)}}return e}function Jd(n){if(n){let e=n.offsetWidth,t=getComputedStyle(n);return e-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),e}return 0}function y0(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function x0(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function S0(n,e="",t){Qi(n)&&t!==null&&t!==void 0&&n.setAttribute(e,t)}var ds={};function mi(n="pui_id_"){return Object.hasOwn(ds,n)||(ds[n]=0),ds[n]++,`${n}${ds[n]}`}function M0(){let n=[],e=(s,a,l=999)=>{let c=o(s,a,l),d=c.value+(c.key===s?0:l)+1;return n.push({key:s,value:d}),d},t=s=>{n=n.filter(a=>a.value!==s)},r=(s,a)=>o(s).value,o=(s,a,l=0)=>[...n].reverse().find(c=>!0)||{key:s,value:l},i=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:i,set:(s,a,l)=>{a&&(a.style.zIndex=String(e(s,!0,l)))},clear:s=>{s&&(t(i(s)),s.style.zIndex="")},getCurrent:s=>r(s)}}var Qd=M0(),E0=Object.defineProperty,w0=Object.defineProperties,T0=Object.getOwnPropertyDescriptors,ra=Object.getOwnPropertySymbols,Wh=Object.prototype.hasOwnProperty,Xh=Object.prototype.propertyIsEnumerable,eu=(n,e,t)=>e in n?E0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Tn=(n,e)=>{for(var t in e||(e={}))Wh.call(e,t)&&eu(n,t,e[t]);if(ra)for(var t of ra(e))Xh.call(e,t)&&eu(n,t,e[t]);return n},Ba=(n,e)=>w0(n,T0(e)),Yn=(n,e)=>{var t={};for(var r in n)Wh.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&ra)for(var r of ra(n))e.indexOf(r)<0&&Xh.call(n,r)&&(t[r]=n[r]);return t};function C0(...n){return Oh(...n)}var A0=Fh(),It=A0,Ul=/{([^}]*)}/g,R0=/(\d+\s+[\+\-\*\/]\s+\d+)/g,P0=/var\([^)]+\)/g;function D0(n){return hr(n)&&n.hasOwnProperty("$value")&&n.hasOwnProperty("$type")?n.$value:n}function L0(n){return n.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Ol(n="",e=""){return L0(`${mn(n,!1)&&mn(e,!1)?`${n}-`:n}${e}`)}function jh(n="",e=""){return`--${Ol(n,e)}`}function k0(n=""){let e=(n.match(/{/g)||[]).length,t=(n.match(/}/g)||[]).length;return(e+t)%2!==0}function Yh(n,e="",t="",r=[],o){if(mn(n)){let i=n.trim();if(k0(i))return;if(Wo(i,Ul)){let s=i.replaceAll(Ul,a=>{let l=a.replace(/{|}/g,"").split(".").filter(c=>!r.some(d=>Wo(c,d)));return`var(${jh(t,Bh(l.join("-")))}${bt(o)?`, ${o}`:""})`});return Wo(s.replace(P0,"0"),R0)?`calc(${s})`:s}return i}else if(f0(n))return n}function I0(n,e,t){mn(e,!1)&&n.push(`${e}:${t};`)}function Io(n,e){return n?`${n}{${e}}`:""}function qh(n,e){if(n.indexOf("dt(")===-1)return n;function t(s,a){let l=[],c=0,d="",u=null,f=0;for(;c<=s.length;){let p=s[c];if((p==='"'||p==="'"||p==="`")&&s[c-1]!=="\\"&&(u=u===p?null:p),!u&&(p==="("&&f++,p===")"&&f--,(p===","||c===s.length)&&f===0)){let g=d.trim();g.startsWith("dt(")?l.push(qh(g,a)):l.push(r(g)),d="",c++;continue}p!==void 0&&(d+=p),c++}return l}function r(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let o=[],i=[];for(let s=0;s<n.length;s++)if(n[s]==="d"&&n.slice(s,s+3)==="dt(")i.push(s),s+=2;else if(n[s]===")"&&i.length>0){let a=i.pop();i.length===0&&o.push([a,s])}if(!o.length)return n;for(let s=o.length-1;s>=0;s--){let[a,l]=o[s],c=n.slice(a+3,l),d=t(c,e),u=e(...d);n=n.slice(0,a)+u+n.slice(l+1)}return n}var io=(...n)=>U0(at.getTheme(),...n),U0=(n={},e,t,r)=>{if(e){let{variable:o,options:i}=at.defaults||{},{prefix:s,transform:a}=n?.options||i||{},l=Wo(e,Ul)?e:`{${e}}`;return r==="value"||Nr(r)&&a==="strict"?at.getTokenValue(e):Yh(l,void 0,s,[o.excludedKeyRegex],t)}return""};function us(n,...e){if(n instanceof Array){let t=n.reduce((r,o,i)=>{var s;return r+o+((s=hn(e[i],{dt:io}))!=null?s:"")},"");return qh(t,io)}return hn(n,{dt:io})}function O0(n,e={}){let t=at.defaults.variable,{prefix:r=t.prefix,selector:o=t.selector,excludedKeyRegex:i=t.excludedKeyRegex}=e,s=[],a=[],l=[{node:n,path:r}];for(;l.length;){let{node:d,path:u}=l.pop();for(let f in d){let p=d[f],g=D0(p),_=Wo(f,i)?Ol(u):Ol(u,Bh(f));if(hr(g))l.push({node:g,path:_});else{let m=jh(_),h=Yh(g,_,r,[i]);I0(a,m,h);let T=_;r&&T.startsWith(r+"-")&&(T=T.slice(r.length+1)),s.push(T.replace(/-/g,"."))}}}let c=a.join("");return{value:a,tokens:s,declarations:c,css:Io(o,c)}}var Sn={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(n){return{type:"class",selector:n,matched:this.pattern.test(n.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(n){return{type:"attr",selector:`:root${n}`,matched:this.pattern.test(n.trim())}}},media:{pattern:/^@media (.*)$/,resolve(n){return{type:"media",selector:n,matched:this.pattern.test(n.trim())}}},system:{pattern:/^system$/,resolve(n){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(n.trim())}}},custom:{resolve(n){return{type:"custom",selector:n,matched:!0}}}},resolve(n){let e=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[n].flat().map(t=>{var r;return(r=e.map(o=>o.resolve(t)).find(o=>o.matched))!=null?r:this.rules.custom.resolve(t)})}},_toVariables(n,e){return O0(n,{prefix:e?.prefix})},getCommon({name:n="",theme:e={},params:t,set:r,defaults:o}){var i,s,a,l,c,d,u;let{preset:f,options:p}=e,g,_,m,h,T,E,b;if(bt(f)&&p.transform!=="strict"){let{primitive:A,semantic:D,extend:R}=f,U=D||{},{colorScheme:w}=U,M=Yn(U,["colorScheme"]),L=R||{},{colorScheme:Q}=L,H=Yn(L,["colorScheme"]),te=w||{},{dark:re}=te,q=Yn(te,["dark"]),Z=Q||{},{dark:F}=Z,ue=Yn(Z,["dark"]),he=bt(A)?this._toVariables({primitive:A},p):{},be=bt(M)?this._toVariables({semantic:M},p):{},ke=bt(q)?this._toVariables({light:q},p):{},Ze=bt(re)?this._toVariables({dark:re},p):{},ee=bt(H)?this._toVariables({semantic:H},p):{},fe=bt(ue)?this._toVariables({light:ue},p):{},Te=bt(F)?this._toVariables({dark:F},p):{},[me,Le]=[(i=he.declarations)!=null?i:"",he.tokens],[Ye,Ie]=[(s=be.declarations)!=null?s:"",be.tokens||[]],[ft,C]=[(a=ke.declarations)!=null?a:"",ke.tokens||[]],[P,y]=[(l=Ze.declarations)!=null?l:"",Ze.tokens||[]],[oe,j]=[(c=ee.declarations)!=null?c:"",ee.tokens||[]],[J,Y]=[(d=fe.declarations)!=null?d:"",fe.tokens||[]],[ne,X]=[(u=Te.declarations)!=null?u:"",Te.tokens||[]];g=this.transformCSS(n,me,"light","variable",p,r,o),_=Le;let W=this.transformCSS(n,`${Ye}${ft}`,"light","variable",p,r,o),ge=this.transformCSS(n,`${P}`,"dark","variable",p,r,o);m=`${W}${ge}`,h=[...new Set([...Ie,...C,...y])];let x=this.transformCSS(n,`${oe}${J}color-scheme:light`,"light","variable",p,r,o),v=this.transformCSS(n,`${ne}color-scheme:dark`,"dark","variable",p,r,o);T=`${x}${v}`,E=[...new Set([...j,...Y,...X])],b=hn(f.css,{dt:io})}return{primitive:{css:g,tokens:_},semantic:{css:m,tokens:h},global:{css:T,tokens:E},style:b}},getPreset({name:n="",preset:e={},options:t,params:r,set:o,defaults:i,selector:s}){var a,l,c;let d,u,f;if(bt(e)&&t.transform!=="strict"){let p=n.replace("-directive",""),g=e,{colorScheme:_,extend:m,css:h}=g,T=Yn(g,["colorScheme","extend","css"]),E=m||{},{colorScheme:b}=E,A=Yn(E,["colorScheme"]),D=_||{},{dark:R}=D,U=Yn(D,["dark"]),w=b||{},{dark:M}=w,L=Yn(w,["dark"]),Q=bt(T)?this._toVariables({[p]:Tn(Tn({},T),A)},t):{},H=bt(U)?this._toVariables({[p]:Tn(Tn({},U),L)},t):{},te=bt(R)?this._toVariables({[p]:Tn(Tn({},R),M)},t):{},[re,q]=[(a=Q.declarations)!=null?a:"",Q.tokens||[]],[Z,F]=[(l=H.declarations)!=null?l:"",H.tokens||[]],[ue,he]=[(c=te.declarations)!=null?c:"",te.tokens||[]],be=this.transformCSS(p,`${re}${Z}`,"light","variable",t,o,i,s),ke=this.transformCSS(p,ue,"dark","variable",t,o,i,s);d=`${be}${ke}`,u=[...new Set([...q,...F,...he])],f=hn(h,{dt:io})}return{css:d,tokens:u,style:f}},getPresetC({name:n="",theme:e={},params:t,set:r,defaults:o}){var i;let{preset:s,options:a}=e,l=(i=s?.components)==null?void 0:i[n];return this.getPreset({name:n,preset:l,options:a,params:t,set:r,defaults:o})},getPresetD({name:n="",theme:e={},params:t,set:r,defaults:o}){var i,s;let a=n.replace("-directive",""),{preset:l,options:c}=e,d=((i=l?.components)==null?void 0:i[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:d,options:c,params:t,set:r,defaults:o})},applyDarkColorScheme(n){return!(n.darkModeSelector==="none"||n.darkModeSelector===!1)},getColorSchemeOption(n,e){var t;return this.applyDarkColorScheme(n)?this.regex.resolve(n.darkModeSelector===!0?e.options.darkModeSelector:(t=n.darkModeSelector)!=null?t:e.options.darkModeSelector):[]},getLayerOrder(n,e={},t,r){let{cssLayer:o}=e;return o?`@layer ${hn(o.order||o.name||"primeui",t)}`:""},getCommonStyleSheet({name:n="",theme:e={},params:t,props:r={},set:o,defaults:i}){let s=this.getCommon({name:n,theme:e,params:t,set:o,defaults:i}),a=Object.entries(r).reduce((l,[c,d])=>l.push(`${c}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,d])=>{if(hr(d)&&Object.hasOwn(d,"css")){let u=Ti(d.css),f=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${u}</style>`)}return l},[]).join("")},getStyleSheet({name:n="",theme:e={},params:t,props:r={},set:o,defaults:i}){var s;let a={name:n,theme:e,params:t,set:o,defaults:i},l=(s=n.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(r).reduce((d,[u,f])=>d.push(`${u}="${f}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${n}-variables" ${c}>${Ti(l)}</style>`:""},createTokens(n={},e,t="",r="",o={}){return{}},getTokenValue(n,e,t){var r;let o=(a=>a.split(".").filter(l=>!Wo(l.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(e),i=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,s=[(r=n[o])==null?void 0:r.computed(i)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let c=l,{colorScheme:d}=c,u=Yn(c,["colorScheme"]);return a[d]=u,a},void 0)},getSelectorRule(n,e,t,r){return t==="class"||t==="attr"?Io(bt(e)?`${n}${e},${n} ${e}`:n,r):Io(n,Io(e??":root",r))},transformCSS(n,e,t,r,o={},i,s,a){if(bt(e)){let{cssLayer:l}=o;if(r!=="style"){let c=this.getColorSchemeOption(o,s);e=t==="dark"?c.reduce((d,{type:u,selector:f})=>(bt(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",e):this.getSelectorRule(f,a,u,e)),d),""):Io(a??":root",e)}if(l){let c={name:"primeui"};hr(l)&&(c.name=hn(l.name,{name:n,type:r})),bt(c.name)&&(e=Io(`@layer ${c.name}`,e),i?.layerNames(c.name))}return e}return""}},at={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(n={}){let{theme:e}=n;e&&(this._theme=Ba(Tn({},e),{options:Tn(Tn({},this.defaults.options),e.options)}),this._tokens=Sn.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var n;return((n=this.theme)==null?void 0:n.preset)||{}},get options(){var n;return((n=this.theme)==null?void 0:n.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(n){this.update({theme:n}),It.emit("theme:change",n)},getPreset(){return this.preset},setPreset(n){this._theme=Ba(Tn({},this.theme),{preset:n}),this._tokens=Sn.createTokens(n,this.defaults),this.clearLoadedStyleNames(),It.emit("preset:change",n),It.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(n){this._theme=Ba(Tn({},this.theme),{options:n}),this.clearLoadedStyleNames(),It.emit("options:change",n),It.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(n){this._layerNames.add(n)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(n){return this._loadedStyleNames.has(n)},setLoadedStyleName(n){this._loadedStyleNames.add(n)},deleteLoadedStyleName(n){this._loadedStyleNames.delete(n)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(n){return Sn.getTokenValue(this.tokens,n,this.defaults)},getCommon(n="",e){return Sn.getCommon({name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(n="",e){let t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Sn.getPresetC(t)},getDirective(n="",e){let t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Sn.getPresetD(t)},getCustomPreset(n="",e,t,r){let o={name:n,preset:e,options:this.options,selector:t,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Sn.getPreset(o)},getLayerOrderCSS(n=""){return Sn.getLayerOrder(n,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(n="",e,t="style",r){return Sn.transformCSS(n,e,r,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(n="",e,t={}){return Sn.getCommonStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(n,e,t={}){return Sn.getStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(n){this._loadingStyles.add(n)},onStyleUpdated(n){this._loadingStyles.add(n)},onStyleLoaded(n,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),It.emit(`theme:${e}:load`,n),!this._loadingStyles.size&&It.emit("theme:load"))}},Ot={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},N0=`
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
`;function Ui(n){"@babel/helpers - typeof";return Ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ui(n)}function tu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function nu(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?tu(Object(t),!0).forEach(function(r){B0(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):tu(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function B0(n,e,t){return(e=F0(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function F0(n){var e=z0(n,"string");return Ui(e)=="symbol"?e:e+""}function z0(n,e){if(Ui(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Ui(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function $0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Dl()&&Dl().components?Gc(n):e?n():Qf(n)}var H0=0;function V0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=oo(!1),r=oo(n),o=oo(null),i=y0()?window.document:void 0,s=e.document,a=s===void 0?i:s,l=e.immediate,c=l===void 0?!0:l,d=e.manual,u=d===void 0?!1:d,f=e.name,p=f===void 0?"style_".concat(++H0):f,g=e.id,_=g===void 0?void 0:g,m=e.media,h=m===void 0?void 0:m,T=e.nonce,E=T===void 0?void 0:T,b=e.first,A=b===void 0?!1:b,D=e.onMounted,R=D===void 0?void 0:D,U=e.onUpdated,w=U===void 0?void 0:U,M=e.onLoad,L=M===void 0?void 0:M,Q=e.props,H=Q===void 0?{}:Q,te=function(){},re=function(F){var ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var he=nu(nu({},H),ue),be=he.name||p,ke=he.id||_,Ze=he.nonce||E;o.value=a.querySelector('style[data-primevue-style-id="'.concat(be,'"]'))||a.getElementById(ke)||a.createElement("style"),o.value.isConnected||(r.value=F||n,ta(o.value,{type:"text/css",id:ke,media:h,nonce:Ze}),A?a.head.prepend(o.value):a.head.appendChild(o.value),S0(o.value,"data-primevue-style-id",be),ta(o.value,he),o.value.onload=function(ee){return L?.(ee,{name:be})},R?.(be)),!t.value&&(te=Rr(r,function(ee){o.value.textContent=ee,w?.(be)},{immediate:!0}),t.value=!0)}},q=function(){!a||!t.value||(te(),Vh(o.value)&&a.head.removeChild(o.value),t.value=!1,o.value=null)};return c&&!u&&$0(re),{id:_,name:p,el:o,css:r,unload:q,load:re,isLoaded:Bc(t)}}function Oi(n){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oi(n)}var ru,ou,iu,su;function au(n,e){return j0(n)||X0(n,e)||W0(n,e)||G0()}function G0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W0(n,e){if(n){if(typeof n=="string")return lu(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?lu(n,e):void 0}}function lu(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function X0(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(l=(r=i.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function j0(n){if(Array.isArray(n))return n}function cu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Fa(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?cu(Object(t),!0).forEach(function(r){Y0(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):cu(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Y0(n,e,t){return(e=q0(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function q0(n){var e=K0(n,"string");return Oi(e)=="symbol"?e:e+""}function K0(n,e){if(Oi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Oi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function fs(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var Z0=function(e){var t=e.dt;return`
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
`)},J0={},Q0={},pt={name:"base",css:Z0,style:N0,classes:J0,inlineStyles:Q0,load:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},o=r(us(ru||(ru=fs(["",""])),e));return bt(o)?V0(Ti(o),Fa({name:this.name},t)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadStyle:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.style,t,function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return at.transformCSS(t.name||e.name,"".concat(o).concat(us(ou||(ou=fs(["",""])),r)))})},getCommonTheme:function(e){return at.getCommon(this.name,e)},getComponentTheme:function(e){return at.getComponent(this.name,e)},getDirectiveTheme:function(e){return at.getDirective(this.name,e)},getPresetTheme:function(e,t,r){return at.getCustomPreset(this.name,e,t,r)},getLayerOrderThemeCSS:function(){return at.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=hn(this.css,{dt:io})||"",o=Ti(us(iu||(iu=fs(["","",""])),r,e)),i=Object.entries(t).reduce(function(s,a){var l=au(a,2),c=l[0],d=l[1];return s.push("".concat(c,'="').concat(d,'"'))&&s},[]).join(" ");return bt(o)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(o,"</style>"):""}return""},getCommonThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return at.getCommonStyleSheet(this.name,e,t)},getThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[at.getStyleSheet(this.name,e,t)];if(this.style){var o=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=us(su||(su=fs(["",""])),hn(this.style,{dt:io})),s=Ti(at.transformCSS(o,i)),a=Object.entries(t).reduce(function(l,c){var d=au(c,2),u=d[0],f=d[1];return l.push("".concat(u,'="').concat(f,'"'))&&l},[]).join(" ");bt(s)&&r.push('<style type="text/css" data-primevue-style-id="'.concat(o,'" ').concat(a,">").concat(s,"</style>"))}return r.join("")},extend:function(e){return Fa(Fa({},this),{},{css:void 0,style:void 0},e)}},Pr=Fh();function Ni(n){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ni(n)}function du(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function hs(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?du(Object(t),!0).forEach(function(r){ev(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):du(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function ev(n,e,t){return(e=tv(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function tv(n){var e=nv(n,"string");return Ni(e)=="symbol"?e:e+""}function nv(n,e){if(Ni(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var rv={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Ot.STARTS_WITH,Ot.CONTAINS,Ot.NOT_CONTAINS,Ot.ENDS_WITH,Ot.EQUALS,Ot.NOT_EQUALS],numeric:[Ot.EQUALS,Ot.NOT_EQUALS,Ot.LESS_THAN,Ot.LESS_THAN_OR_EQUAL_TO,Ot.GREATER_THAN,Ot.GREATER_THAN_OR_EQUAL_TO],date:[Ot.DATE_IS,Ot.DATE_IS_NOT,Ot.DATE_BEFORE,Ot.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},ov=Symbol();function iv(n,e){var t={config:ha(e)};return n.config.globalProperties.$primevue=t,n.provide(ov,t),sv(),av(n,t),t}var Oo=[];function sv(){It.clear(),Oo.forEach(function(n){return n?.()}),Oo=[]}function av(n,e){var t=oo(!1),r=function(){var c;if(((c=e.config)===null||c===void 0?void 0:c.theme)!=="none"&&!at.isStyleNameLoaded("common")){var d,u,f=((d=pt.getCommonTheme)===null||d===void 0?void 0:d.call(pt))||{},p=f.primitive,g=f.semantic,_=f.global,m=f.style,h={nonce:(u=e.config)===null||u===void 0||(u=u.csp)===null||u===void 0?void 0:u.nonce};pt.load(p?.css,hs({name:"primitive-variables"},h)),pt.load(g?.css,hs({name:"semantic-variables"},h)),pt.load(_?.css,hs({name:"global-variables"},h)),pt.loadStyle(hs({name:"global-style"},h),m),at.setLoadedStyleName("common")}};It.on("theme:change",function(l){t.value||(n.config.globalProperties.$primevue.config.theme=l,t.value=!0)});var o=Rr(e.config,function(l,c){Pr.emit("config:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),i=Rr(function(){return e.config.ripple},function(l,c){Pr.emit("config:ripple:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),s=Rr(function(){return e.config.theme},function(l,c){t.value||at.setTheme(l),e.config.unstyled||r(),t.value=!1,Pr.emit("config:theme:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!1}),a=Rr(function(){return e.config.unstyled},function(l,c){!l&&e.config.theme&&r(),Pr.emit("config:unstyled:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0});Oo.push(o),Oo.push(i),Oo.push(s),Oo.push(a)}var lv={install:function(e,t){var r=h0(rv,t);iv(e,r)}};const uu={appTitle:"vue3-treeJS"},cv={class:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"},dv={class:"bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50"},uv={class:"container mx-auto px-6 py-4"},fv={class:"text-center"},hv={class:"text-3xl font-bold text-white mb-2"},pv={class:"scene-wrapper"},mv=ma({__name:"Layout",props:{title:{default:"/forgoten_config =(/"}},setup(n){return(e,t)=>(Ct(),Dn("div",cv,[zt("header",dv,[zt("div",uv,[zt("div",fv,[zt("h1",hv,fa(e.title),1)])])]),zt("main",pv,[Uo(e.$slots,"default",{},void 0,!0)])]))}}),Qc=(n,e)=>{const t=n.__vccOpts||n;for(const[r,o]of e)t[r]=o;return t},gv=Qc(mv,[["__scopeId","data-v-f160c6b6"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ed="178",Xo={ROTATE:0,DOLLY:1,PAN:2},No={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vv=0,fu=1,bv=2,Kh=1,Zh=2,tr=3,Br=0,Kt=1,ir=2,kr=0,jo=1,hu=2,pu=3,mu=4,_v=5,eo=100,yv=101,xv=102,Sv=103,Mv=104,Ev=200,wv=201,Tv=202,Cv=203,Nl=204,Bl=205,Av=206,Rv=207,Pv=208,Dv=209,Lv=210,kv=211,Iv=212,Uv=213,Ov=214,Fl=0,zl=1,$l=2,Zo=3,Hl=4,Vl=5,Gl=6,Wl=7,Jh=0,Nv=1,Bv=2,Ir=0,Fv=1,zv=2,$v=3,Qh=4,Hv=5,Vv=6,Gv=7,ep=300,Jo=301,Qo=302,Xl=303,jl=304,ya=306,lo=1e3,pn=1001,Yl=1002,Ln=1003,Wv=1004,ps=1005,Fn=1006,za=1007,no=1008,Gn=1009,tp=1010,np=1011,Bi=1012,td=1013,co=1014,sr=1015,es=1016,nd=1017,rd=1018,Fi=1020,rp=35902,op=1021,ip=1022,An=1023,zi=1026,$i=1027,sp=1028,od=1029,ap=1030,id=1031,sd=1033,Hs=33776,Vs=33777,Gs=33778,Ws=33779,ql=35840,Kl=35841,Zl=35842,Jl=35843,Ql=36196,ec=37492,tc=37496,nc=37808,rc=37809,oc=37810,ic=37811,sc=37812,ac=37813,lc=37814,cc=37815,dc=37816,uc=37817,fc=37818,hc=37819,pc=37820,mc=37821,Xs=36492,gc=36494,vc=36495,lp=36283,bc=36284,_c=36285,yc=36286,Xv=3200,jv=3201,cp=0,Yv=1,Cr="",cn="srgb",ei="srgb-linear",oa="linear",st="srgb",vo=7680,gu=519,qv=512,Kv=513,Zv=514,dp=515,Jv=516,Qv=517,eb=518,tb=519,vu=35044,bu="300 es",ar=2e3,ia=2001;class po{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const i=o.indexOf(t);i!==-1&&o.splice(i,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let i=0,s=o.length;i<s;i++)o[i].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,xc=180/Math.PI;function ts(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function nb(n,e){return(n%e+e)%e}function $a(n,e,t){return(1-t)*n+t*e}function ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const rb={DEG2RAD:js};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*o+e.x,this.y=i*o+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class uo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,i,s,a){let l=r[o+0],c=r[o+1],d=r[o+2],u=r[o+3];const f=i[s+0],p=i[s+1],g=i[s+2],_=i[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==p||d!==g){let m=1-a;const h=l*f+c*p+d*g+u*_,T=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const A=Math.sqrt(E),D=Math.atan2(A,h*T);m=Math.sin(m*D)/A,a=Math.sin(a*D)/A}const b=a*T;if(l=l*m+f*b,c=c*m+p*b,d=d*m+g*b,u=u*m+_*b,m===1-a){const A=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=A,c*=A,d*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,r,o,i,s){const a=r[o],l=r[o+1],c=r[o+2],d=r[o+3],u=i[s],f=i[s+1],p=i[s+2],g=i[s+3];return e[t]=a*g+d*u+l*p-c*f,e[t+1]=l*g+d*f+c*u-a*p,e[t+2]=c*g+d*p+a*f-l*u,e[t+3]=d*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,i=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(r/2),d=a(o/2),u=a(i/2),f=l(r/2),p=l(o/2),g=l(i/2);switch(s){case"XYZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"YXZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"ZXY":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"ZYX":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"YZX":this._x=f*d*u+c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u-f*p*g;break;case"XZY":this._x=f*d*u-c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],i=t[8],s=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=r+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(i-c)*p,this._z=(s-o)*p}else if(r>a&&r>u){const p=2*Math.sqrt(1+r-a-u);this._w=(d-l)/p,this._x=.25*p,this._y=(o+s)/p,this._z=(i+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-r-u);this._w=(i-c)/p,this._x=(o+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-r-a);this._w=(s-o)/p,this._x=(i+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,i=e._z,s=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=r*d+s*a+o*c-i*l,this._y=o*d+s*l+i*a-r*c,this._z=i*d+s*c+r*l-o*a,this._w=s*d-r*a-o*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,i=this._z,s=this._w;let a=s*e._w+r*e._x+o*e._y+i*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=o,this._z=i,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*r+t*this._x,this._y=p*o+t*this._y,this._z=p*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=s*u+this._w*f,this._x=r*u+this._x*f,this._y=o*u+this._y*f,this._z=i*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,r=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*o,this.y=i[1]*t+i[4]*r+i[7]*o,this.z=i[2]*t+i[5]*r+i[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,i=e.elements,s=1/(i[3]*t+i[7]*r+i[11]*o+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*o+i[12])*s,this.y=(i[1]*t+i[5]*r+i[9]*o+i[13])*s,this.z=(i[2]*t+i[6]*r+i[10]*o+i[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,i=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*o-a*r),d=2*(a*t-i*o),u=2*(i*r-s*t);return this.x=t+l*c+s*u-a*d,this.y=r+l*d+a*c-i*u,this.z=o+l*u+i*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*o,this.y=i[1]*t+i[5]*r+i[9]*o,this.z=i[2]*t+i[6]*r+i[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,i=e.z,s=t.x,a=t.y,l=t.z;return this.x=o*l-i*a,this.y=i*s-r*l,this.z=r*a-o*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new B,_u=new uo;class We{constructor(e,t,r,o,i,s,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,i,s,a,l,c)}set(e,t,r,o,i,s,a,l,c){const d=this.elements;return d[0]=e,d[1]=o,d[2]=a,d[3]=t,d[4]=i,d[5]=l,d[6]=r,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,i=this.elements,s=r[0],a=r[3],l=r[6],c=r[1],d=r[4],u=r[7],f=r[2],p=r[5],g=r[8],_=o[0],m=o[3],h=o[6],T=o[1],E=o[4],b=o[7],A=o[2],D=o[5],R=o[8];return i[0]=s*_+a*T+l*A,i[3]=s*m+a*E+l*D,i[6]=s*h+a*b+l*R,i[1]=c*_+d*T+u*A,i[4]=c*m+d*E+u*D,i[7]=c*h+d*b+u*R,i[2]=f*_+p*T+g*A,i[5]=f*m+p*E+g*D,i[8]=f*h+p*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*a*c-r*i*d+r*a*l+o*i*c-o*s*l}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*s-a*c,f=a*l-d*i,p=c*i-s*l,g=t*u+r*f+o*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(o*c-d*r)*_,e[2]=(a*r-o*s)*_,e[3]=f*_,e[4]=(d*t-o*l)*_,e[5]=(o*i-a*t)*_,e[6]=p*_,e[7]=(r*l-c*t)*_,e[8]=(s*t-r*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,i,s,a){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*s+c*a)+s+e,-o*c,o*l,-o*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new We;function up(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ob(){const n=sa("canvas");return n.style.display="block",n}const yu={};function Yo(n){n in yu||(yu[n]=!0,console.warn(n))}function ib(n,e,t){return new Promise(function(r,o){function i(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}function sb(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ab(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lb(){const n={enabled:!0,workingColorSpace:ei,spaces:{},convert:function(o,i,s){return this.enabled===!1||i===s||!i||!s||(this.spaces[i].transfer===st&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[i].primaries!==this.spaces[s].primaries&&(o.applyMatrix3(this.spaces[i].toXYZ),o.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===st&&(o.r=qo(o.r),o.g=qo(o.g),o.b=qo(o.b))),o},workingToColorSpace:function(o,i){return this.convert(o,this.workingColorSpace,i)},colorSpaceToWorking:function(o,i){return this.convert(o,i,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cr?oa:this.spaces[o].transfer},getLuminanceCoefficients:function(o,i=this.workingColorSpace){return o.fromArray(this.spaces[i].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,i,s){return o.copy(this.spaces[i].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,i){return Yo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,i)},toWorkingColorSpace:function(o,i){return Yo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[ei]:{primaries:e,whitePoint:r,transfer:oa,toXYZ:xu,fromXYZ:Su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:r,transfer:st,toXYZ:xu,fromXYZ:Su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const et=lb();function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bo;class cb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{bo===void 0&&(bo=sa("canvas")),bo.width=e.width,bo.height=e.height;const o=bo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=bo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sa("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),i=o.data;for(let s=0;s<i.length;s++)i[s]=lr(i[s]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let db=0;class ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let i;if(Array.isArray(o)){i=[];for(let s=0,a=o.length;s<a;s++)o[s].isDataTexture?i.push(Ga(o[s].image)):i.push(Ga(o[s]))}else i=Ga(o);r.url=i}return t||(e.images[this.uuid]=r),r}}function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ub=0;const Wa=new B;class Zt extends po{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,r=pn,o=pn,i=Fn,s=no,a=An,l=Gn,c=Zt.DEFAULT_ANISOTROPY,d=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=ts(),this.name="",this.source=new ad(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=ep;Zt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,r=0,o=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*o+s[12]*i,this.y=s[1]*t+s[5]*r+s[9]*o+s[13]*i,this.z=s[2]*t+s[6]*r+s[10]*o+s[14]*i,this.w=s[3]*t+s[7]*r+s[11]*o+s[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,i;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(p+1)/2,A=(h+1)/2,D=(d+f)/4,R=(u+_)/4,U=(g+m)/4;return E>b&&E>A?E<.01?(r=0,o=.707106781,i=.707106781):(r=Math.sqrt(E),o=D/r,i=R/r):b>A?b<.01?(r=.707106781,o=0,i=.707106781):(o=Math.sqrt(b),r=D/o,i=U/o):A<.01?(r=.707106781,o=.707106781,i=0):(i=Math.sqrt(A),r=R/i,o=U/i),this.set(r,o,i,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-d)*(f-d));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(f-d)/T,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(je(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fb extends po{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const o={width:e,height:t,depth:r.depth},i=new Zt(o);this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=i.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,i=this.textures.length;o<i;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new ad(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fo extends fb{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class fp extends Zt{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hb extends Zt{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=i.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Mn):Mn.fromBufferAttribute(i,s),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ms.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ms.copy(r.boundingBox)),ms.applyMatrix4(e.matrixWorld),this.union(ms)}const o=e.children;for(let i=0,s=o.length;i<s;i++)this.expandByObject(o[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(li),gs.subVectors(this.max,li),_o.subVectors(e.a,li),yo.subVectors(e.b,li),xo.subVectors(e.c,li),gr.subVectors(yo,_o),vr.subVectors(xo,yo),Wr.subVectors(_o,xo);let t=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-Wr.z,Wr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,Wr.z,0,-Wr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-Wr.y,Wr.x,0];return!Xa(t,_o,yo,xo,gs)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,_o,yo,xo,gs))?!1:(vs.crossVectors(gr,vr),t=[vs.x,vs.y,vs.z],Xa(t,_o,yo,xo,gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new B,new B,new B,new B,new B,new B,new B,new B],Mn=new B,ms=new ns,_o=new B,yo=new B,xo=new B,gr=new B,vr=new B,Wr=new B,li=new B,gs=new B,vs=new B,Xr=new B;function Xa(n,e,t,r,o){for(let i=0,s=n.length-3;i<=s;i+=3){Xr.fromArray(n,i);const a=o.x*Math.abs(Xr.x)+o.y*Math.abs(Xr.y)+o.z*Math.abs(Xr.z),l=e.dot(Xr),c=t.dot(Xr),d=r.dot(Xr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const pb=new ns,ci=new B,ja=new B;class ld{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):pb.setFromPoints(e).getCenter(r);let o=0;for(let i=0,s=e.length;i<s;i++)o=Math.max(o,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ci.subVectors(e,this.center);const t=ci.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ci,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ci.copy(e.center).add(ja)),this.expandByPoint(ci.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Kn=new B,Ya=new B,bs=new B,br=new B,qa=new B,_s=new B,Ka=new B;class hp{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ya.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),br.copy(this.origin).sub(Ya);const i=e.distanceTo(t)*.5,s=-this.direction.dot(bs),a=br.dot(this.direction),l=-br.dot(bs),c=br.lengthSq(),d=Math.abs(1-s*s);let u,f,p,g;if(d>0)if(u=s*l-a,f=s*a-l,g=i*d,u>=0)if(f>=-g)if(f<=g){const _=1/d;u*=_,f*=_,p=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=i,u=Math.max(0,-(s*f+a)),p=-u*u+f*(f+2*l)+c;else f=-i,u=Math.max(0,-(s*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-s*i+a)),f=u>0?-i:Math.min(Math.max(-i,-l),i),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-i,-l),i),p=f*(f+2*l)+c):(u=Math.max(0,-(s*i+a)),f=u>0?i:Math.min(Math.max(-i,-l),i),p=-u*u+f*(f+2*l)+c);else f=s>0?-i:i,u=Math.max(0,-(s*f+a)),p=-u*u+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,u),o&&o.copy(Ya).addScaledVector(bs,f),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const r=Kn.dot(this.direction),o=Kn.dot(Kn)-r*r,i=e.radius*e.radius;if(o>i)return null;const s=Math.sqrt(i-o),a=r-s,l=r+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,i,s,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,o=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,o=(e.min.x-f.x)*c),d>=0?(i=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(i=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),r>s||i>o||((i>r||isNaN(r))&&(r=i),(s<o||isNaN(o))&&(o=s),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),r>l||a>o)||((a>r||r!==r)&&(r=a),(l<o||o!==o)&&(o=l),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,r,o,i){qa.subVectors(t,e),_s.subVectors(r,e),Ka.crossVectors(qa,_s);let s=this.direction.dot(Ka),a;if(s>0){if(o)return null;a=1}else if(s<0)a=-1,s=-s;else return null;br.subVectors(this.origin,e);const l=a*this.direction.dot(_s.crossVectors(br,_s));if(l<0)return null;const c=a*this.direction.dot(qa.cross(br));if(c<0||l+c>s)return null;const d=-a*br.dot(Ka);return d<0?null:this.at(d/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,r,o,i,s,a,l,c,d,u,f,p,g,_,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,i,s,a,l,c,d,u,f,p,g,_,m)}set(e,t,r,o,i,s,a,l,c,d,u,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=r,h[12]=o,h[1]=i,h[5]=s,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/So.setFromMatrixColumn(e,0).length(),i=1/So.setFromMatrixColumn(e,1).length(),s=1/So.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,i=e.z,s=Math.cos(r),a=Math.sin(r),l=Math.cos(o),c=Math.sin(o),d=Math.cos(i),u=Math.sin(i);if(e.order==="XYZ"){const f=s*d,p=s*u,g=a*d,_=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*d,p=l*u,g=c*d,_=c*u;t[0]=f+_*a,t[4]=g*a-p,t[8]=s*c,t[1]=s*u,t[5]=s*d,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*d,p=l*u,g=c*d,_=c*u;t[0]=f-_*a,t[4]=-s*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=s*d,t[9]=_-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*d,p=s*u,g=a*d,_=a*u;t[0]=l*d,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*c,g=a*l,_=a*c;t[0]=l*d,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=s*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=s*l,p=s*c,g=a*l,_=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+_,t[5]=s*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*d,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mb,e,gb)}lookAt(e,t,r){const o=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),_r.crossVectors(r,sn),_r.lengthSq()===0&&(Math.abs(r.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),_r.crossVectors(r,sn)),_r.normalize(),ys.crossVectors(sn,_r),o[0]=_r.x,o[4]=ys.x,o[8]=sn.x,o[1]=_r.y,o[5]=ys.y,o[9]=sn.y,o[2]=_r.z,o[6]=ys.z,o[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,i=this.elements,s=r[0],a=r[4],l=r[8],c=r[12],d=r[1],u=r[5],f=r[9],p=r[13],g=r[2],_=r[6],m=r[10],h=r[14],T=r[3],E=r[7],b=r[11],A=r[15],D=o[0],R=o[4],U=o[8],w=o[12],M=o[1],L=o[5],Q=o[9],H=o[13],te=o[2],re=o[6],q=o[10],Z=o[14],F=o[3],ue=o[7],he=o[11],be=o[15];return i[0]=s*D+a*M+l*te+c*F,i[4]=s*R+a*L+l*re+c*ue,i[8]=s*U+a*Q+l*q+c*he,i[12]=s*w+a*H+l*Z+c*be,i[1]=d*D+u*M+f*te+p*F,i[5]=d*R+u*L+f*re+p*ue,i[9]=d*U+u*Q+f*q+p*he,i[13]=d*w+u*H+f*Z+p*be,i[2]=g*D+_*M+m*te+h*F,i[6]=g*R+_*L+m*re+h*ue,i[10]=g*U+_*Q+m*q+h*he,i[14]=g*w+_*H+m*Z+h*be,i[3]=T*D+E*M+b*te+A*F,i[7]=T*R+E*L+b*re+A*ue,i[11]=T*U+E*Q+b*q+A*he,i[15]=T*w+E*H+b*Z+A*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],i=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+i*l*u-o*c*u-i*a*f+r*c*f+o*a*p-r*l*p)+_*(+t*l*p-t*c*f+i*s*f-o*s*p+o*c*d-i*l*d)+m*(+t*c*u-t*a*p-i*s*u+r*s*p+i*a*d-r*c*d)+h*(-o*a*d-t*l*u+t*a*f+o*s*u-r*s*f+r*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],i=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],T=u*m*c-_*f*c+_*l*p-a*m*p-u*l*h+a*f*h,E=g*f*c-d*m*c-g*l*p+s*m*p+d*l*h-s*f*h,b=d*_*c-g*u*c+g*a*p-s*_*p-d*a*h+s*u*h,A=g*u*l-d*_*l-g*a*f+s*_*f+d*a*m-s*u*m,D=t*T+r*E+o*b+i*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=T*R,e[1]=(_*f*i-u*m*i-_*o*p+r*m*p+u*o*h-r*f*h)*R,e[2]=(a*m*i-_*l*i+_*o*c-r*m*c-a*o*h+r*l*h)*R,e[3]=(u*l*i-a*f*i-u*o*c+r*f*c+a*o*p-r*l*p)*R,e[4]=E*R,e[5]=(d*m*i-g*f*i+g*o*p-t*m*p-d*o*h+t*f*h)*R,e[6]=(g*l*i-s*m*i-g*o*c+t*m*c+s*o*h-t*l*h)*R,e[7]=(s*f*i-d*l*i+d*o*c-t*f*c-s*o*p+t*l*p)*R,e[8]=b*R,e[9]=(g*u*i-d*_*i-g*r*p+t*_*p+d*r*h-t*u*h)*R,e[10]=(s*_*i-g*a*i+g*r*c-t*_*c-s*r*h+t*a*h)*R,e[11]=(d*a*i-s*u*i-d*r*c+t*u*c+s*r*p-t*a*p)*R,e[12]=A*R,e[13]=(d*_*o-g*u*o+g*r*f-t*_*f-d*r*m+t*u*m)*R,e[14]=(g*a*o-s*_*o-g*r*l+t*_*l+s*r*m-t*a*m)*R,e[15]=(s*u*o-d*a*o+d*r*l-t*u*l-s*r*f+t*a*f)*R,this}scale(e){const t=this.elements,r=e.x,o=e.y,i=e.z;return t[0]*=r,t[4]*=o,t[8]*=i,t[1]*=r,t[5]*=o,t[9]*=i,t[2]*=r,t[6]*=o,t[10]*=i,t[3]*=r,t[7]*=o,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),i=1-r,s=e.x,a=e.y,l=e.z,c=i*s,d=i*a;return this.set(c*s+r,c*a-o*l,c*l+o*a,0,c*a+o*l,d*a+r,d*l-o*s,0,c*l-o*a,d*l+o*s,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,i,s){return this.set(1,r,i,0,e,1,s,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,i=t._x,s=t._y,a=t._z,l=t._w,c=i+i,d=s+s,u=a+a,f=i*c,p=i*d,g=i*u,_=s*d,m=s*u,h=a*u,T=l*c,E=l*d,b=l*u,A=r.x,D=r.y,R=r.z;return o[0]=(1-(_+h))*A,o[1]=(p+b)*A,o[2]=(g-E)*A,o[3]=0,o[4]=(p-b)*D,o[5]=(1-(f+h))*D,o[6]=(m+T)*D,o[7]=0,o[8]=(g+E)*R,o[9]=(m-T)*R,o[10]=(1-(f+_))*R,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let i=So.set(o[0],o[1],o[2]).length();const s=So.set(o[4],o[5],o[6]).length(),a=So.set(o[8],o[9],o[10]).length();this.determinant()<0&&(i=-i),e.x=o[12],e.y=o[13],e.z=o[14],En.copy(this);const c=1/i,d=1/s,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=d,En.elements[5]*=d,En.elements[6]*=d,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),r.x=i,r.y=s,r.z=a,this}makePerspective(e,t,r,o,i,s,a=ar){const l=this.elements,c=2*i/(t-e),d=2*i/(r-o),u=(t+e)/(t-e),f=(r+o)/(r-o);let p,g;if(a===ar)p=-(s+i)/(s-i),g=-2*s*i/(s-i);else if(a===ia)p=-s/(s-i),g=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,o,i,s,a=ar){const l=this.elements,c=1/(t-e),d=1/(r-o),u=1/(s-i),f=(t+e)*c,p=(r+o)*d;let g,_;if(a===ar)g=(s+i)*u,_=-2*u;else if(a===ia)g=i*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const So=new B,En=new yt,mb=new B(0,0,0),gb=new B(1,1,1),_r=new B,ys=new B,sn=new B,Mu=new yt,Eu=new uo;class Wn{constructor(e=0,t=0,r=0,o=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,i=o[0],s=o[4],a=o[8],l=o[1],c=o[5],d=o[9],u=o[2],f=o[6],p=o[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,i)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vb=0;const wu=new B,Mo=new uo,Zn=new yt,xs=new B,di=new B,bb=new B,_b=new uo,Tu=new B(1,0,0),Cu=new B(0,1,0),Au=new B(0,0,1),Ru={type:"added"},yb={type:"removed"},Eo={type:"childadded",child:null},Za={type:"childremoved",child:null};class Vt extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new B,t=new Wn,r=new uo,o=new B(1,1,1);function i(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new yt},normalMatrix:{value:new We}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.premultiply(Mo),this}rotateX(e){return this.rotateOnAxis(Tu,e)}rotateY(e){return this.rotateOnAxis(Cu,e)}rotateZ(e){return this.rotateOnAxis(Au,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tu,e)}translateY(e){return this.translateOnAxis(Cu,e)}translateZ(e){return this.translateOnAxis(Au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?xs.copy(e):xs.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(di,xs,this.up):Zn.lookAt(xs,di,this.up),this.quaternion.setFromRotationMatrix(Zn),o&&(Zn.extractRotation(o.matrixWorld),Mo.setFromRotationMatrix(Zn),this.quaternion.premultiply(Mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ru),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yb),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ru),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let i=0,s=o.length;i<s;i++)o[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,e,bb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,_b,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let i=0,s=o.length;i<s;i++)o[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(a=>({...a})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function i(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=i(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];i(e.shapes,u)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(i(e.materials,this.material[l]));o.material=a}else o.material=i(e.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];o.animations.push(i(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),u=s(e.shapes),f=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),d.length>0&&(r.images=d),u.length>0&&(r.shapes=u),f.length>0&&(r.skeletons=f),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=o,r;function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Vt.DEFAULT_UP=new B(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new B,Jn=new B,Ja=new B,Qn=new B,wo=new B,To=new B,Pu=new B,Qa=new B,el=new B,tl=new B,nl=new ct,rl=new ct,ol=new ct;class Cn{constructor(e=new B,t=new B,r=new B){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),wn.subVectors(e,t),o.cross(wn);const i=o.lengthSq();return i>0?o.multiplyScalar(1/Math.sqrt(i)):o.set(0,0,0)}static getBarycoord(e,t,r,o,i){wn.subVectors(o,t),Jn.subVectors(r,t),Ja.subVectors(e,t);const s=wn.dot(wn),a=wn.dot(Jn),l=wn.dot(Ja),c=Jn.dot(Jn),d=Jn.dot(Ja),u=s*c-a*a;if(u===0)return i.set(0,0,0),null;const f=1/u,p=(c*l-a*d)*f,g=(s*d-a*l)*f;return i.set(1-p-g,g,p)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,r,o,i,s,a,l){return this.getBarycoord(e,t,r,o,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,Qn.x),l.addScaledVector(s,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,t,r,o,i,s){return nl.setScalar(0),rl.setScalar(0),ol.setScalar(0),nl.fromBufferAttribute(e,t),rl.fromBufferAttribute(e,r),ol.fromBufferAttribute(e,o),s.setScalar(0),s.addScaledVector(nl,i.x),s.addScaledVector(rl,i.y),s.addScaledVector(ol,i.z),s}static isFrontFacing(e,t,r,o){return wn.subVectors(r,t),Jn.subVectors(e,t),wn.cross(Jn).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),wn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,i){return Cn.getInterpolation(e,this.a,this.b,this.c,t,r,o,i)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,i=this.c;let s,a;wo.subVectors(o,r),To.subVectors(i,r),Qa.subVectors(e,r);const l=wo.dot(Qa),c=To.dot(Qa);if(l<=0&&c<=0)return t.copy(r);el.subVectors(e,o);const d=wo.dot(el),u=To.dot(el);if(d>=0&&u<=d)return t.copy(o);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(r).addScaledVector(wo,s);tl.subVectors(e,i);const p=wo.dot(tl),g=To.dot(tl);if(g>=0&&p<=g)return t.copy(i);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(r).addScaledVector(To,a);const m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return Pu.subVectors(i,o),a=(u-d)/(u-d+(p-g)),t.copy(o).addScaledVector(Pu,a);const h=1/(m+_+f);return s=_*h,a=f*h,t.copy(r).addScaledVector(wo,s).addScaledVector(To,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function il(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=et.workingColorSpace){return this.r=e,this.g=t,this.b=r,et.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=et.workingColorSpace){if(e=nb(e,1),t=je(t,0,1),r=je(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,s=2*r-i;this.r=il(s,i,e+1/3),this.g=il(s,i,e),this.b=il(s,i,e-1/3)}return et.colorSpaceToWorking(this,o),this}setStyle(e,t=cn){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=o[1],a=o[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=o[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const r=mp[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return et.workingToColorSpace(Bt.copy(this),e),Math.round(je(Bt.r*255,0,255))*65536+Math.round(je(Bt.g*255,0,255))*256+Math.round(je(Bt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Bt.copy(this),t);const r=Bt.r,o=Bt.g,i=Bt.b,s=Math.max(r,o,i),a=Math.min(r,o,i);let l,c;const d=(a+s)/2;if(a===s)l=0,c=0;else{const u=s-a;switch(c=d<=.5?u/(s+a):u/(2-s-a),s){case r:l=(o-i)/u+(o<i?6:0);break;case o:l=(i-r)/u+2;break;case i:l=(r-o)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=cn){et.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,r=Bt.g,o=Bt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(Ss);const r=$a(yr.h,Ss.h,t),o=$a(yr.s,Ss.s,t),i=$a(yr.l,Ss.l,t);return this.setHSL(r,o,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*o,this.g=i[1]*t+i[4]*r+i[7]*o,this.b=i[2]*t+i[5]*r+i[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new tt;tt.NAMES=mp;let xb=0;class rs extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=jo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Bl,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==jo&&(r.blending=this.blending),this.side!==Br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nl&&(r.blendSrc=this.blendSrc),this.blendDst!==Bl&&(r.blendDst=this.blendDst),this.blendEquation!==eo&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(i){const s=[];for(const a in i){const l=i[a];delete l.metadata,s.push(l)}return s}if(t){const i=o(e.textures),s=o(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let i=0;i!==o;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xa extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new B,Ms=new $e;let Sb=0;class $n{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=vu,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,i=this.itemSize;o<i;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ai(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Qt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),r=Qt(r,this.array),o=Qt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),r=Qt(r,this.array),o=Qt(o,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vu&&(e.usage=this.usage),e}}class gp extends $n{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class vp extends $n{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Hn extends $n{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Mb=0;const bn=new yt,sl=new Vt,Co=new B,an=new ns,ui=new ns,Pt=new B;class zr extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?vp:gp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new We().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,r){return bn.makeTranslation(e,t,r),this.applyMatrix4(bn),this}scale(e,t,r){return bn.makeScale(e,t,r),this.applyMatrix4(bn),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,i=e.length;o<i;o++){const s=e[o];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Hn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const i=e[o];t.setXYZ(o,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const i=t[r];an.setFromBufferAttribute(i),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ld);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const r=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ui.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(an.min,ui.min),an.expandByPoint(Pt),Pt.addVectors(an.max,ui.max),an.expandByPoint(Pt)):(an.expandByPoint(ui.min),an.expandByPoint(ui.max))}an.getCenter(r);let o=0;for(let i=0,s=e.count;i<s;i++)Pt.fromBufferAttribute(e,i),o=Math.max(o,r.distanceToSquared(Pt));if(t)for(let i=0,s=t.length;i<s;i++){const a=t[i],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Pt.fromBufferAttribute(a,c),l&&(Co.fromBufferAttribute(e,c),Pt.add(Co)),o=Math.max(o,r.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<r.count;U++)a[U]=new B,l[U]=new B;const c=new B,d=new B,u=new B,f=new $e,p=new $e,g=new $e,_=new B,m=new B;function h(U,w,M){c.fromBufferAttribute(r,U),d.fromBufferAttribute(r,w),u.fromBufferAttribute(r,M),f.fromBufferAttribute(i,U),p.fromBufferAttribute(i,w),g.fromBufferAttribute(i,M),d.sub(c),u.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(L),a[U].add(_),a[w].add(_),a[M].add(_),l[U].add(m),l[w].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,w=T.length;U<w;++U){const M=T[U],L=M.start,Q=M.count;for(let H=L,te=L+Q;H<te;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new B,b=new B,A=new B,D=new B;function R(U){A.fromBufferAttribute(o,U),D.copy(A);const w=a[U];E.copy(w),E.sub(A.multiplyScalar(A.dot(w))).normalize(),b.crossVectors(D,w);const L=b.dot(l[U])<0?-1:1;s.setXYZW(U,E.x,E.y,E.z,L)}for(let U=0,w=T.length;U<w;++U){const M=T[U],L=M.start,Q=M.count;for(let H=L,te=L+Q;H<te;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,p=r.count;f<p;f++)r.setXYZ(f,0,0,0);const o=new B,i=new B,s=new B,a=new B,l=new B,c=new B,d=new B,u=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);o.fromBufferAttribute(t,g),i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),d.subVectors(s,i),u.subVectors(o,i),d.cross(u),a.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,m),a.add(d),l.add(d),c.add(d),r.setXYZ(g,a.x,a.y,a.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)o.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),d.subVectors(s,i),u.subVectors(o,i),d.cross(u),r.setXYZ(f+0,d.x,d.y,d.z),r.setXYZ(f+1,d.x,d.y,d.z),r.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*d;for(let h=0;h<d;h++)f[g++]=c[p++]}return new $n(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zr,r=this.index.array,o=this.attributes;for(const a in o){const l=o[a],c=e(l,r);t.setAttribute(a,c)}const i=this.morphAttributes;for(const a in i){const l=[],c=i[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=e(f,r);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const o={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(o[l]=d,i=!0)}i&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const c in o){const d=o[c];this.setAttribute(c,d.clone(t))}const i=e.morphAttributes;for(const c in i){const d=[],u=i[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Du=new yt,jr=new hp,Es=new ld,Lu=new B,ws=new B,Ts=new B,Cs=new B,al=new B,As=new B,ku=new B,Rs=new B;class St extends Vt{constructor(e=new zr,t=new xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=o.length;i<s;i++){const a=o[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const a=this.morphTargetInfluences;if(i&&a){As.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const d=a[l],u=i[l];d!==0&&(al.fromBufferAttribute(u,e),s?As.addScaledVector(al,d):As.addScaledVector(al.sub(t),d))}t.add(As)}return t}raycast(e,t){const r=this.geometry,o=this.material,i=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Es.copy(r.boundingSphere),Es.applyMatrix4(i),jr.copy(e.ray).recast(e.near),!(Es.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Es,Lu)===null||jr.origin.distanceToSquared(Lu)>(e.far-e.near)**2))&&(Du.copy(i).invert(),jr.copy(e.ray).applyMatrix4(Du),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,r){let o;const i=this.geometry,s=this.material,a=i.index,l=i.attributes.position,c=i.attributes.uv,d=i.attributes.uv1,u=i.attributes.normal,f=i.groups,p=i.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=s[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,A=E;b<A;b+=3){const D=a.getX(b),R=a.getX(b+1),U=a.getX(b+2);o=Ps(this,h,e,r,c,d,u,D,R,U),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const T=a.getX(m),E=a.getX(m+1),b=a.getX(m+2);o=Ps(this,s,e,r,c,d,u,T,E,b),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=s[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,A=E;b<A;b+=3){const D=b,R=b+1,U=b+2;o=Ps(this,h,e,r,c,d,u,D,R,U),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const T=m,E=m+1,b=m+2;o=Ps(this,s,e,r,c,d,u,T,E,b),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Eb(n,e,t,r,o,i,s,a){let l;if(e.side===Kt?l=r.intersectTriangle(s,i,o,!0,a):l=r.intersectTriangle(o,i,s,e.side===Br,a),l===null)return null;Rs.copy(a),Rs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Rs);return c<t.near||c>t.far?null:{distance:c,point:Rs.clone(),object:n}}function Ps(n,e,t,r,o,i,s,a,l,c){n.getVertexPosition(a,ws),n.getVertexPosition(l,Ts),n.getVertexPosition(c,Cs);const d=Eb(n,e,t,r,ws,Ts,Cs,ku);if(d){const u=new B;Cn.getBarycoord(ku,ws,Ts,Cs,u),o&&(d.uv=Cn.getInterpolatedAttribute(o,a,l,c,u,new $e)),i&&(d.uv1=Cn.getInterpolatedAttribute(i,a,l,c,u,new $e)),s&&(d.normal=Cn.getInterpolatedAttribute(s,a,l,c,u,new B),d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};Cn.getNormal(ws,Ts,Cs,f.normal),d.face=f,d.barycoord=u}return d}class cr extends zr{constructor(e=1,t=1,r=1,o=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:i,depthSegments:s};const a=this;o=Math.floor(o),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],d=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,r,t,e,s,i,0),g("z","y","x",1,-1,r,t,-e,s,i,1),g("x","z","y",1,1,e,r,t,o,s,2),g("x","z","y",1,-1,e,r,-t,o,s,3),g("x","y","z",1,-1,e,t,r,o,i,4),g("x","y","z",-1,-1,e,t,-r,o,i,5),this.setIndex(l),this.setAttribute("position",new Hn(c,3)),this.setAttribute("normal",new Hn(d,3)),this.setAttribute("uv",new Hn(u,2));function g(_,m,h,T,E,b,A,D,R,U,w){const M=b/R,L=A/U,Q=b/2,H=A/2,te=D/2,re=R+1,q=U+1;let Z=0,F=0;const ue=new B;for(let he=0;he<q;he++){const be=he*L-H;for(let ke=0;ke<re;ke++){const Ze=ke*M-Q;ue[_]=Ze*T,ue[m]=be*E,ue[h]=te,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[h]=D>0?1:-1,d.push(ue.x,ue.y,ue.z),u.push(ke/R),u.push(1-he/U),Z+=1}}for(let he=0;he<U;he++)for(let be=0;be<R;be++){const ke=f+be+re*he,Ze=f+be+re*(he+1),ee=f+(be+1)+re*(he+1),fe=f+(be+1)+re*he;l.push(ke,Ze,fe),l.push(Ze,ee,fe),F+=6}a.addGroup(p,F,w),p+=F,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ti(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const r=ti(n[t]);for(const o in r)e[o]=r[o]}return e}function wb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Tb={clone:ti,merge:jt};var Cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ab=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cb,this.fragmentShader=Ab,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ti(e.uniforms),this.uniformsGroups=wb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const s=this.uniforms[o].value;s&&s.isTexture?t.uniforms[o]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[o]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[o]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[o]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[o]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[o]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[o]={type:"m4",value:s.toArray()}:t.uniforms[o]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class _p extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new B,Iu=new $e,Uu=new $e;class un extends _p{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Uu),t.subVectors(Uu,Iu)}setViewOffset(e,t,r,o,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,i=-.5*o;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*o/l,t-=s.offsetY*r/c,o*=s.width/l,r*=s.height/c}const a=this.filmOffset;a!==0&&(i+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ao=-90,Ro=1;class Rb extends Vt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new un(Ao,Ro,e,t);o.layers=this.layers,this.add(o);const i=new un(Ao,Ro,e,t);i.layers=this.layers,this.add(i);const s=new un(Ao,Ro,e,t);s.layers=this.layers,this.add(s);const a=new un(Ao,Ro,e,t);a.layers=this.layers,this.add(a);const l=new un(Ao,Ro,e,t);l.layers=this.layers,this.add(l);const c=new un(Ao,Ro,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,i,s,a,l]=t;for(const c of t)this.remove(c);if(e===ar)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,i),e.setRenderTarget(r,1,o),e.render(t,s),e.setRenderTarget(r,2,o),e.render(t,a),e.setRenderTarget(r,3,o),e.render(t,l),e.setRenderTarget(r,4,o),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,o),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class yp extends Zt{constructor(e=[],t=Jo,r,o,i,s,a,l,c,d){super(e,t,r,o,i,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pb extends fo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new yp(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new cr(5,5,5),i=new Fr({name:"CubemapFromEquirect",uniforms:ti(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kt,blending:kr});i.uniforms.tEquirect.value=t;const s=new St(o,i),a=t.minFilter;return t.minFilter===no&&(t.minFilter=Fn),new Rb(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,o);e.setRenderTarget(i)}}class gi extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Db={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,i=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,r),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&i!==null&&(o=i),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Db)))}return a!==null&&(a.visible=o!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new gi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}let Lb=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const cl=new B,kb=new B,Ib=new We;class Tr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=cl.subVectors(r,t).cross(kb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(cl),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/o;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ib.getNormalMatrix(e),o=this.coplanarPoint(cl).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new ld,Ub=new $e(.5,.5),Ds=new B;class cd{constructor(e=new Tr,t=new Tr,r=new Tr,o=new Tr,i=new Tr,s=new Tr){this.planes=[e,t,r,o,i,s]}set(e,t,r,o,i,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(o),a[4].copy(i),a[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ar){const r=this.planes,o=e.elements,i=o[0],s=o[1],a=o[2],l=o[3],c=o[4],d=o[5],u=o[6],f=o[7],p=o[8],g=o[9],_=o[10],m=o[11],h=o[12],T=o[13],E=o[14],b=o[15];if(r[0].setComponents(l-i,f-c,m-p,b-h).normalize(),r[1].setComponents(l+i,f+c,m+p,b+h).normalize(),r[2].setComponents(l+s,f+d,m+g,b+T).normalize(),r[3].setComponents(l-s,f-d,m-g,b-T).normalize(),r[4].setComponents(l-a,f-u,m-_,b-E).normalize(),t===ar)r[5].setComponents(l+a,f+u,m+_,b+E).normalize();else if(t===ia)r[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const t=Ub.distanceTo(e.center);return Yr.radius=.7071067811865476+t,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ds.x=o.normal.x>0?e.max.x:e.min.x,Ds.y=o.normal.y>0?e.max.y:e.min.y,Ds.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ni extends Zt{constructor(e,t,r,o,i,s,a,l,c){super(e,t,r,o,i,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xp extends Zt{constructor(e,t,r=co,o,i,s,a=Ln,l=Ln,c,d=zi,u=1){if(d!==zi&&d!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,o,i,s,a,l,d,r,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ad(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class os extends zr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const i=e/2,s=t/2,a=Math.floor(r),l=Math.floor(o),c=a+1,d=l+1,u=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let h=0;h<d;h++){const T=h*f-s;for(let E=0;E<c;E++){const b=E*u-i;g.push(b,-T,0),_.push(0,0,1),m.push(E/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<a;T++){const E=T+c*h,b=T+c*(h+1),A=T+1+c*(h+1),D=T+1+c*h;p.push(E,b,D),p.push(b,A,D)}this.setIndex(p),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ur extends zr{constructor(e=1,t=32,r=16,o=0,i=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:i,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(s+a,Math.PI);let c=0;const d=[],u=new B,f=new B,p=[],g=[],_=[],m=[];for(let h=0;h<=r;h++){const T=[],E=h/r;let b=0;h===0&&s===0?b=.5/t:h===r&&l===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){const D=A/t;u.x=-e*Math.cos(o+D*i)*Math.sin(s+E*a),u.y=e*Math.cos(s+E*a),u.z=e*Math.sin(o+D*i)*Math.sin(s+E*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(D+b,1-E),T.push(c++)}d.push(T)}for(let h=0;h<r;h++)for(let T=0;T<t;T++){const E=d[h][T+1],b=d[h][T],A=d[h+1][T],D=d[h+1][T+1];(h!==0||s>0)&&p.push(E,b,D),(h!==r-1||l<Math.PI)&&p.push(b,A,D)}this.setIndex(p),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class so extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cp,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ob extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nb extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dd extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const dl=new yt,Ou=new B,Nu=new B;class Sp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cd,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ou),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bu=new yt,fi=new B,ul=new B;class Bb extends Sp{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),fi.setFromMatrixPosition(e.matrixWorld),r.position.copy(fi),ul.copy(r.position),ul.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(ul),r.updateMatrixWorld(),o.makeTranslation(-fi.x,-fi.y,-fi.z),Bu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu)}}class Fb extends dd{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Bb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mp extends _p{constructor(e=-1,t=1,r=1,o=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let i=r-e,s=r+e,a=o+t,l=o-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(i,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zb extends Sp{constructor(){super(new Mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $b extends dd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new zb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hb extends dd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vb extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Fu{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gb extends po{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function zu(n,e,t,r){const o=Wb(r);switch(t){case op:return n*e;case sp:return n*e/o.components*o.byteLength;case od:return n*e/o.components*o.byteLength;case ap:return n*e*2/o.components*o.byteLength;case id:return n*e*2/o.components*o.byteLength;case ip:return n*e*3/o.components*o.byteLength;case An:return n*e*4/o.components*o.byteLength;case sd:return n*e*4/o.components*o.byteLength;case Hs:case Vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gs:case Ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:case Jl:return Math.max(n,16)*Math.max(e,8)/4;case ql:case Zl:return Math.max(n,8)*Math.max(e,8)/2;case Ql:case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xs:case gc:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lp:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _c:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wb(n){switch(n){case Gn:case tp:return{byteLength:1,components:1};case Bi:case np:case es:return{byteLength:2,components:1};case nd:case rd:return{byteLength:2,components:4};case co:case td:case sr:return{byteLength:4,components:1};case rp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ed}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ed);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ep(){let n=null,e=!1,t=null,r=null;function o(i,s){t(i,s),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){n=i}}}function Xb(n){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function r(a,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function i(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:o,remove:i,update:s}}var jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yb=`#ifdef USE_ALPHAHASH
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
#endif`,qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qb=`#ifdef USE_AOMAP
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
#endif`,e_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t_=`#ifdef USE_BATCHING
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
#endif`,n_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s_=`#ifdef USE_IRIDESCENCE
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
#endif`,a_=`#ifdef USE_BUMPMAP
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
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,g_=`#define PI 3.141592653589793
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
} // validated`,v_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b_=`vec3 transformedNormal = objectNormal;
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
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M_="gl_FragColor = linearToOutputTexel( gl_FragColor );",E_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I_=`#ifdef USE_GRADIENTMAP
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
}`,U_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B_=`uniform bool receiveShadow;
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
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G_=`PhysicalMaterial material;
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
#endif`,W_=`struct PhysicalMaterial {
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
}`,X_=`
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
#endif`,j_=`#if defined( RE_IndirectDiffuse )
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
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ny=`#if defined( USE_POINTS_UV )
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
#endif`,ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ly=`#ifdef USE_MORPHTARGETS
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
#endif`,cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,my=`#ifdef USE_NORMALMAP
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
#endif`,gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,by=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,My=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dy=`float getShadowMask() {
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
}`,Ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,Iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uy=`#ifdef USE_SKINNING
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
#endif`,Oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,By=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zy=`#ifdef USE_TRANSMISSION
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
#endif`,$y=`#ifdef USE_TRANSMISSION
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
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
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`#include <common>
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
}`,Qy=`#if DEPTH_PACKING == 3200
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
}`,ex=`#define DISTANCE
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
}`,tx=`#define DISTANCE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`uniform float scale;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,ax=`uniform vec3 diffuse;
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
}`,lx=`#define LAMBERT
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
}`,cx=`#define LAMBERT
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
}`,dx=`#define MATCAP
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
}`,ux=`#define MATCAP
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
}`,fx=`#define NORMAL
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
}`,hx=`#define NORMAL
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
}`,px=`#define PHONG
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
}`,mx=`#define PHONG
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
}`,gx=`#define STANDARD
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
}`,vx=`#define STANDARD
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
}`,bx=`#define TOON
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
}`,_x=`#define TOON
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
}`,yx=`uniform float size;
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
}`,xx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,Mx=`uniform vec3 color;
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
}`,Ex=`uniform float rotation;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:jb,alphahash_pars_fragment:Yb,alphamap_fragment:qb,alphamap_pars_fragment:Kb,alphatest_fragment:Zb,alphatest_pars_fragment:Jb,aomap_fragment:Qb,aomap_pars_fragment:e_,batching_pars_vertex:t_,batching_vertex:n_,begin_vertex:r_,beginnormal_vertex:o_,bsdfs:i_,iridescence_fragment:s_,bumpmap_pars_fragment:a_,clipping_planes_fragment:l_,clipping_planes_pars_fragment:c_,clipping_planes_pars_vertex:d_,clipping_planes_vertex:u_,color_fragment:f_,color_pars_fragment:h_,color_pars_vertex:p_,color_vertex:m_,common:g_,cube_uv_reflection_fragment:v_,defaultnormal_vertex:b_,displacementmap_pars_vertex:__,displacementmap_vertex:y_,emissivemap_fragment:x_,emissivemap_pars_fragment:S_,colorspace_fragment:M_,colorspace_pars_fragment:E_,envmap_fragment:w_,envmap_common_pars_fragment:T_,envmap_pars_fragment:C_,envmap_pars_vertex:A_,envmap_physical_pars_fragment:F_,envmap_vertex:R_,fog_vertex:P_,fog_pars_vertex:D_,fog_fragment:L_,fog_pars_fragment:k_,gradientmap_pars_fragment:I_,lightmap_pars_fragment:U_,lights_lambert_fragment:O_,lights_lambert_pars_fragment:N_,lights_pars_begin:B_,lights_toon_fragment:z_,lights_toon_pars_fragment:$_,lights_phong_fragment:H_,lights_phong_pars_fragment:V_,lights_physical_fragment:G_,lights_physical_pars_fragment:W_,lights_fragment_begin:X_,lights_fragment_maps:j_,lights_fragment_end:Y_,logdepthbuf_fragment:q_,logdepthbuf_pars_fragment:K_,logdepthbuf_pars_vertex:Z_,logdepthbuf_vertex:J_,map_fragment:Q_,map_pars_fragment:ey,map_particle_fragment:ty,map_particle_pars_fragment:ny,metalnessmap_fragment:ry,metalnessmap_pars_fragment:oy,morphinstance_vertex:iy,morphcolor_vertex:sy,morphnormal_vertex:ay,morphtarget_pars_vertex:ly,morphtarget_vertex:cy,normal_fragment_begin:dy,normal_fragment_maps:uy,normal_pars_fragment:fy,normal_pars_vertex:hy,normal_vertex:py,normalmap_pars_fragment:my,clearcoat_normal_fragment_begin:gy,clearcoat_normal_fragment_maps:vy,clearcoat_pars_fragment:by,iridescence_pars_fragment:_y,opaque_fragment:yy,packing:xy,premultiplied_alpha_fragment:Sy,project_vertex:My,dithering_fragment:Ey,dithering_pars_fragment:wy,roughnessmap_fragment:Ty,roughnessmap_pars_fragment:Cy,shadowmap_pars_fragment:Ay,shadowmap_pars_vertex:Ry,shadowmap_vertex:Py,shadowmask_pars_fragment:Dy,skinbase_vertex:Ly,skinning_pars_vertex:ky,skinning_vertex:Iy,skinnormal_vertex:Uy,specularmap_fragment:Oy,specularmap_pars_fragment:Ny,tonemapping_fragment:By,tonemapping_pars_fragment:Fy,transmission_fragment:zy,transmission_pars_fragment:$y,uv_pars_fragment:Hy,uv_pars_vertex:Vy,uv_vertex:Gy,worldpos_vertex:Wy,background_vert:Xy,background_frag:jy,backgroundCube_vert:Yy,backgroundCube_frag:qy,cube_vert:Ky,cube_frag:Zy,depth_vert:Jy,depth_frag:Qy,distanceRGBA_vert:ex,distanceRGBA_frag:tx,equirect_vert:nx,equirect_frag:rx,linedashed_vert:ox,linedashed_frag:ix,meshbasic_vert:sx,meshbasic_frag:ax,meshlambert_vert:lx,meshlambert_frag:cx,meshmatcap_vert:dx,meshmatcap_frag:ux,meshnormal_vert:fx,meshnormal_frag:hx,meshphong_vert:px,meshphong_frag:mx,meshphysical_vert:gx,meshphysical_frag:vx,meshtoon_vert:bx,meshtoon_frag:_x,points_vert:yx,points_frag:xx,shadow_vert:Sx,shadow_frag:Mx,sprite_vert:Ex,sprite_frag:wx},ve={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Nn={basic:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new tt(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:jt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:jt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new tt(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:jt([ve.points,ve.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:jt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:jt([ve.common,ve.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:jt([ve.sprite,ve.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:jt([ve.common,ve.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:jt([ve.lights,ve.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Nn.physical={uniforms:jt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ls={r:0,b:0,g:0},qr=new Wn,Tx=new yt;function Cx(n,e,t,r,o,i,s){const a=new tt(0);let l=i===!0?0:1,c,d,u=null,f=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function _(E){let b=!1;const A=g(E);A===null?h(a,l):A&&A.isColor&&(h(A,1),b=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,b){const A=g(b);A&&(A.isCubeTexture||A.mapping===ya)?(d===void 0&&(d=new St(new cr(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:ti(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),qr.copy(b.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(qr)),d.material.toneMapped=et.getTransfer(A.colorSpace)!==st,(u!==A||f!==A.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=A,f=A.version,p=n.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new St(new os(2,2),new Fr({name:"BackgroundMaterial",uniforms:ti(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=et.getTransfer(A.colorSpace)!==st,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,b){E.getRGB(Ls,bp(n)),r.buffers.color.setClear(Ls.r,Ls.g,Ls.b,b,s)}function T(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),l=b,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:_,addToRenderList:m,dispose:T}}function Ax(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=f(null);let i=o,s=!1;function a(M,L,Q,H,te){let re=!1;const q=u(H,Q,L);i!==q&&(i=q,c(i.object)),re=p(M,H,Q,te),re&&g(M,H,Q,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(re||s)&&(s=!1,b(M,L,Q,H),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function d(M){return n.deleteVertexArray(M)}function u(M,L,Q){const H=Q.wireframe===!0;let te=r[M.id];te===void 0&&(te={},r[M.id]=te);let re=te[L.id];re===void 0&&(re={},te[L.id]=re);let q=re[H];return q===void 0&&(q=f(l()),re[H]=q),q}function f(M){const L=[],Q=[],H=[];for(let te=0;te<t;te++)L[te]=0,Q[te]=0,H[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Q,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,L,Q,H){const te=i.attributes,re=L.attributes;let q=0;const Z=Q.getAttributes();for(const F in Z)if(Z[F].location>=0){const he=te[F];let be=re[F];if(be===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),he===void 0||he.attribute!==be||be&&he.data!==be.data)return!0;q++}return i.attributesNum!==q||i.index!==H}function g(M,L,Q,H){const te={},re=L.attributes;let q=0;const Z=Q.getAttributes();for(const F in Z)if(Z[F].location>=0){let he=re[F];he===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const be={};be.attribute=he,he&&he.data&&(be.data=he.data),te[F]=be,q++}i.attributes=te,i.attributesNum=q,i.index=H}function _(){const M=i.newAttributes;for(let L=0,Q=M.length;L<Q;L++)M[L]=0}function m(M){h(M,0)}function h(M,L){const Q=i.newAttributes,H=i.enabledAttributes,te=i.attributeDivisors;Q[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),te[M]!==L&&(n.vertexAttribDivisor(M,L),te[M]=L)}function T(){const M=i.newAttributes,L=i.enabledAttributes;for(let Q=0,H=L.length;Q<H;Q++)L[Q]!==M[Q]&&(n.disableVertexAttribArray(Q),L[Q]=0)}function E(M,L,Q,H,te,re,q){q===!0?n.vertexAttribIPointer(M,L,Q,te,re):n.vertexAttribPointer(M,L,Q,H,te,re)}function b(M,L,Q,H){_();const te=H.attributes,re=Q.getAttributes(),q=L.defaultAttributeValues;for(const Z in re){const F=re[Z];if(F.location>=0){let ue=te[Z];if(ue===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const he=ue.normalized,be=ue.itemSize,ke=e.get(ue);if(ke===void 0)continue;const Ze=ke.buffer,ee=ke.type,fe=ke.bytesPerElement,Te=ee===n.INT||ee===n.UNSIGNED_INT||ue.gpuType===td;if(ue.isInterleavedBufferAttribute){const me=ue.data,Le=me.stride,Ye=ue.offset;if(me.isInstancedInterleavedBuffer){for(let Ie=0;Ie<F.locationSize;Ie++)h(F.location+Ie,me.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ie=0;Ie<F.locationSize;Ie++)m(F.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let Ie=0;Ie<F.locationSize;Ie++)E(F.location+Ie,be/F.locationSize,ee,he,Le*fe,(Ye+be/F.locationSize*Ie)*fe,Te)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<F.locationSize;me++)h(F.location+me,ue.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<F.locationSize;me++)m(F.location+me);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let me=0;me<F.locationSize;me++)E(F.location+me,be/F.locationSize,ee,he,be*fe,be/F.locationSize*me*fe,Te)}}else if(q!==void 0){const he=q[Z];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(F.location,he);break;case 3:n.vertexAttrib3fv(F.location,he);break;case 4:n.vertexAttrib4fv(F.location,he);break;default:n.vertexAttrib1fv(F.location,he)}}}}T()}function A(){U();for(const M in r){const L=r[M];for(const Q in L){const H=L[Q];for(const te in H)d(H[te].object),delete H[te];delete L[Q]}delete r[M]}}function D(M){if(r[M.id]===void 0)return;const L=r[M.id];for(const Q in L){const H=L[Q];for(const te in H)d(H[te].object),delete H[te];delete L[Q]}delete r[M.id]}function R(M){for(const L in r){const Q=r[L];if(Q[M.id]===void 0)continue;const H=Q[M.id];for(const te in H)d(H[te].object),delete H[te];delete Q[M.id]}}function U(){w(),s=!0,i!==o&&(i=o,c(i.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Rx(n,e,t){let r;function o(c){r=c}function i(c,d){n.drawArrays(r,c,d),t.update(d,r,1)}function s(c,d,u){u!==0&&(n.drawArraysInstanced(r,c,d,u),t.update(d,r,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];t.update(p,r,1)}function l(c,d,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(r,c,0,d,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*f[_];t.update(g,r,1)}}this.setMode=o,this.render=i,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Px(n,e,t,r){let o;function i(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function s(R){return!(R!==An&&r.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const U=R===es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Gn&&r.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==sr&&!U)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:A,maxSamples:D}}function Dx(n){const e=this;let t=null,r=0,o=!1,i=!1;const s=new Tr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||r!==0||o;return o=f,r=u.length,p},this.beginShadows=function(){i=!0,d(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,h=n.get(u);if(!o||g===null||g.length===0||i&&!m)i?d(null):c();else{const T=i?0:r,E=T*4;let b=h.clippingState||null;l.value=b,b=d(g,f,E,p);for(let A=0;A!==E;++A)b[A]=t[A];h.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function d(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,b=p;E!==_;++E,b+=4)s.copy(u[E]).applyMatrix4(T,a),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Lx(n){let e=new WeakMap;function t(s,a){return a===Xl?s.mapping=Jo:a===jl&&(s.mapping=Qo),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===Xl||a===jl)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Pb(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",o),t(c.texture,s.mapping)}else return null}}return s}function o(s){const a=s.target;a.removeEventListener("dispose",o);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}const Bo=4,$u=[.125,.215,.35,.446,.526,.582],to=20,fl=new Mp,Hu=new tt;let hl=null,pl=0,ml=0,gl=!1;const Qr=(1+Math.sqrt(5))/2,Po=1/Qr,Vu=[new B(-Qr,Po,0),new B(Qr,Po,0),new B(-Po,0,Qr),new B(Po,0,Qr),new B(0,Qr,-Po),new B(0,Qr,Po),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],kx=new B;class Gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,i={}){const{size:s=256,position:a=kx}=i;hl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,pl,ml),this._renderer.xr.enabled=gl,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jo||e.mapping===Qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:es,format:An,colorSpace:ei,depthBuffer:!1},o=Wu(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(i)),this._blurMaterial=Ux(i,e,t)}return o}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,fl)}_sceneToCubeUV(e,t,r,o,i){const l=new un(90,1,t,r),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Hu),u.toneMapping=Ir,u.autoClear=!1;const g=new xa({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),_=new St(new cr,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(Hu),m=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x+d[T],i.y,i.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y+d[T],i.z)):(l.up.set(0,c[T],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y,i.z+d[T]));const b=this._cubeSize;ks(o,E*b,T>2?b:0,b,b),u.setRenderTarget(o),m&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=h}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Jo||e.mapping===Qo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());const i=o?this._cubemapMaterial:this._equirectMaterial,s=new St(this._lodPlanes[0],i),a=i.uniforms;a.envMap.value=e;const l=this._cubeSize;ks(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,fl)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let i=1;i<o;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Vu[(o-i-1)%Vu.length];this._blur(e,i-1,i,s,a)}t.autoClear=r}_blur(e,t,r,o,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,o,"latitudinal",i),this._halfBlur(s,e,r,r,o,"longitudinal",i)}_halfBlur(e,t,r,o,i,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new St(this._lodPlanes[o],c),f=c.uniforms,p=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*p):2*Math.PI/(2*to-1),_=i/g,m=isFinite(i)?1+Math.floor(d*_):to;m>to&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${to}`);const h=[];let T=0;for(let R=0;R<to;++R){const U=R/_,w=Math.exp(-U*U/2);h.push(w),R===0?T+=w:R<m&&(T+=2*w)}for(let R=0;R<h.length;R++)h[R]=h[R]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-r;const b=this._sizeLods[o],A=3*b*(o>E-Bo?o-E+Bo:0),D=4*(this._cubeSize-b);ks(t,A,D,3*b,2*b),l.setRenderTarget(t),l.render(u,fl)}}function Ix(n){const e=[],t=[],r=[];let o=n;const i=n-Bo+1+$u.length;for(let s=0;s<i;s++){const a=Math.pow(2,o);t.push(a);let l=1/a;s>n-Bo?l=$u[s-n+Bo-1]:s===0&&(l=0),r.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,_=3,m=2,h=1,T=new Float32Array(_*g*p),E=new Float32Array(m*g*p),b=new Float32Array(h*g*p);for(let D=0;D<p;D++){const R=D%3*2/3-1,U=D>2?0:-1,w=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];T.set(w,_*g*D),E.set(f,m*g*D);const M=[D,D,D,D,D,D];b.set(M,h*g*D)}const A=new zr;A.setAttribute("position",new $n(T,_)),A.setAttribute("uv",new $n(E,m)),A.setAttribute("faceIndex",new $n(b,h)),e.push(A),o>Bo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Wu(n,e,t){const r=new fo(n,e,t);return r.texture.mapping=ya,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ks(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function Ux(n,e,t){const r=new Float32Array(to),o=new B(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:to,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ud(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Xu(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ud(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function ju(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function ud(){return`

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
	`}function Ox(n){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xl||l===jl,d=l===Jo||l===Qo;if(c||d){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Gu(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&o(p)?(t===null&&(t=new Gu(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",i),u.texture):null}}}return a}function o(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function i(a){const l=a.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function Nx(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Yo("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function Bx(n,e,t,r){const o={},i=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete o[f.id];const p=i.get(f);p&&(e.remove(p),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return o[f.id]===!0||(f.addEventListener("dispose",s),o[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let E=0,b=T.length;E<b;E+=3){const A=T[E+0],D=T[E+1],R=T[E+2];f.push(A,D,D,R,R,A)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,b=T.length/3-1;E<b;E+=3){const A=E+0,D=E+1,R=E+2;f.push(A,D,D,R,R,A)}}else return;const m=new(up(f)?vp:gp)(f,1);m.version=_;const h=i.get(u);h&&e.remove(h),i.set(u,m)}function d(u){const f=i.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return i.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Fx(n,e,t){let r;function o(f){r=f}let i,s;function a(f){i=f.type,s=f.bytesPerElement}function l(f,p){n.drawElements(r,p,i,f*s),t.update(p,r,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(r,p,i,f*s,g),t.update(p,r,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,i,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,r,1)}function u(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/s,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,i,f,0,_,0,g);let h=0;for(let T=0;T<g;T++)h+=p[T]*_[T];t.update(h,r,1)}}this.setMode=o,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function zx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(i/3);break;case n.LINES:t.lines+=a*(i/2);break;case n.LINE_STRIP:t.lines+=a*(i-1);break;case n.LINE_LOOP:t.lines+=a*i;break;case n.POINTS:t.points+=a*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function $x(n,e,t){const r=new WeakMap,o=new ct;function i(s,a,l){const c=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=r.get(a);if(f===void 0||f.count!==u){let M=function(){U.dispose(),r.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let A=a.attributes.position.count*b,D=1;A>e.maxTextureSize&&(D=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*D*4*u),U=new fp(R,A,D,u);U.type=sr,U.needsUpdate=!0;const w=b*4;for(let L=0;L<u;L++){const Q=h[L],H=T[L],te=E[L],re=A*D*4*L;for(let q=0;q<Q.count;q++){const Z=q*w;g===!0&&(o.fromBufferAttribute(Q,q),R[re+Z+0]=o.x,R[re+Z+1]=o.y,R[re+Z+2]=o.z,R[re+Z+3]=0),_===!0&&(o.fromBufferAttribute(H,q),R[re+Z+4]=o.x,R[re+Z+5]=o.y,R[re+Z+6]=o.z,R[re+Z+7]=0),m===!0&&(o.fromBufferAttribute(te,q),R[re+Z+8]=o.x,R[re+Z+9]=o.y,R[re+Z+10]=o.z,R[re+Z+11]=te.itemSize===4?o.w:1)}}f={count:u,texture:U,size:new $e(A,D)},r.set(a,f),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:i}}function Hx(n,e,t,r){let o=new WeakMap;function i(l){const c=r.render.frame,d=l.geometry,u=e.get(l,d);if(o.get(u)!==c&&(e.update(u),o.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),o.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;o.get(f)!==c&&(f.update(),o.set(f,c))}return u}function s(){o=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:s}}const wp=new Zt,Yu=new xp(1,1),Tp=new fp,Cp=new hb,Ap=new yp,qu=[],Ku=[],Zu=new Float32Array(16),Ju=new Float32Array(9),Qu=new Float32Array(4);function ri(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let i=qu[o];if(i===void 0&&(i=new Float32Array(o),qu[o]=i),e!==0){r.toArray(i,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(i,a)}return i}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Sa(n,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function Vx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function Wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function jx(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,r))return;Qu.set(r),n.uniformMatrix2fv(this.addr,!1,Qu),Rt(t,r)}}function Yx(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,r))return;Ju.set(r),n.uniformMatrix3fv(this.addr,!1,Ju),Rt(t,r)}}function qx(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,r))return;Zu.set(r),n.uniformMatrix4fv(this.addr,!1,Zu),Rt(t,r)}}function Kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function Qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function eS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function oS(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let i;this.type===n.SAMPLER_2D_SHADOW?(Yu.compareFunction=dp,i=Yu):i=wp,t.setTexture2D(e||i,o)}function iS(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Cp,o)}function sS(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Ap,o)}function aS(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Tp,o)}function lS(n){switch(n){case 5126:return Vx;case 35664:return Gx;case 35665:return Wx;case 35666:return Xx;case 35674:return jx;case 35675:return Yx;case 35676:return qx;case 5124:case 35670:return Kx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return Qx;case 5125:return eS;case 36294:return tS;case 36295:return nS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return oS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return sS;case 36289:case 36303:case 36311:case 36292:return aS}}function cS(n,e){n.uniform1fv(this.addr,e)}function dS(n,e){const t=ri(e,this.size,2);n.uniform2fv(this.addr,t)}function uS(n,e){const t=ri(e,this.size,3);n.uniform3fv(this.addr,t)}function fS(n,e){const t=ri(e,this.size,4);n.uniform4fv(this.addr,t)}function hS(n,e){const t=ri(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pS(n,e){const t=ri(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mS(n,e){const t=ri(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gS(n,e){n.uniform1iv(this.addr,e)}function vS(n,e){n.uniform2iv(this.addr,e)}function bS(n,e){n.uniform3iv(this.addr,e)}function _S(n,e){n.uniform4iv(this.addr,e)}function yS(n,e){n.uniform1uiv(this.addr,e)}function xS(n,e){n.uniform2uiv(this.addr,e)}function SS(n,e){n.uniform3uiv(this.addr,e)}function MS(n,e){n.uniform4uiv(this.addr,e)}function ES(n,e,t){const r=this.cache,o=e.length,i=Sa(t,o);At(r,i)||(n.uniform1iv(this.addr,i),Rt(r,i));for(let s=0;s!==o;++s)t.setTexture2D(e[s]||wp,i[s])}function wS(n,e,t){const r=this.cache,o=e.length,i=Sa(t,o);At(r,i)||(n.uniform1iv(this.addr,i),Rt(r,i));for(let s=0;s!==o;++s)t.setTexture3D(e[s]||Cp,i[s])}function TS(n,e,t){const r=this.cache,o=e.length,i=Sa(t,o);At(r,i)||(n.uniform1iv(this.addr,i),Rt(r,i));for(let s=0;s!==o;++s)t.setTextureCube(e[s]||Ap,i[s])}function CS(n,e,t){const r=this.cache,o=e.length,i=Sa(t,o);At(r,i)||(n.uniform1iv(this.addr,i),Rt(r,i));for(let s=0;s!==o;++s)t.setTexture2DArray(e[s]||Tp,i[s])}function AS(n){switch(n){case 5126:return cS;case 35664:return dS;case 35665:return uS;case 35666:return fS;case 35674:return hS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return vS;case 35668:case 35672:return bS;case 35669:case 35673:return _S;case 5125:return yS;case 36294:return xS;case 36295:return SS;case 36296:return MS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return CS}}class RS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=lS(t.type)}}class PS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AS(t.type)}}class DS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let i=0,s=o.length;i!==s;++i){const a=o[i];a.setValue(e,t[a.id],r)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function ef(n,e){n.seq.push(e),n.map[e.id]=e}function LS(n,e,t){const r=n.name,o=r.length;for(vl.lastIndex=0;;){const i=vl.exec(r),s=vl.lastIndex;let a=i[1];const l=i[2]==="]",c=i[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===o){ef(t,c===void 0?new RS(a,n,e):new PS(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new DS(a),ef(t,u)),t=u}}}class Ys{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const i=e.getActiveUniform(t,o),s=e.getUniformLocation(t,i.name);LS(i,s,this)}}setValue(e,t,r,o){const i=this.map[t];i!==void 0&&i.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let i=0,s=t.length;i!==s;++i){const a=t[i],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,i=e.length;o!==i;++o){const s=e[o];s.id in t&&r.push(s)}return r}}function tf(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const kS=37297;let IS=0;function US(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=o;s<i;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return r.join(`
`)}const nf=new We;function OS(n){et._getMatrix(nf,et.workingColorSpace,n);const e=`mat3( ${nf.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case oa:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rf(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const i=/ERROR: 0:(\d+)/.exec(o);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+o+`

`+US(n.getShaderSource(e),s)}else return o}function NS(n,e){const t=OS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function BS(n,e){let t;switch(e){case Fv:t="Linear";break;case zv:t="Reinhard";break;case $v:t="Cineon";break;case Qh:t="ACESFilmic";break;case Vv:t="AgX";break;case Gv:t="Neutral";break;case Hv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Is=new B;function FS(){et.getLuminanceCoefficients(Is);const n=Is.x.toFixed(4),e=Is.y.toFixed(4),t=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vi).join(`
`)}function $S(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function HS(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const i=n.getActiveAttrib(e,o),s=i.name;let a=1;i.type===n.FLOAT_MAT2&&(a=2),i.type===n.FLOAT_MAT3&&(a=3),i.type===n.FLOAT_MAT4&&(a=4),t[s]={type:i.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function vi(n){return n!==""}function of(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(n){return n.replace(VS,WS)}const GS=new Map;function WS(n,e){let t=Xe[e];if(t===void 0){const r=GS.get(e);if(r!==void 0)t=Xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Sc(t)}const XS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(n){return n.replace(XS,jS)}function jS(n,e,t,r){let o="";for(let i=parseInt(e);i<parseInt(t);i++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return o}function lf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function YS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function qS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Jo:case Qo:e="ENVMAP_TYPE_CUBE";break;case ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qo:e="ENVMAP_MODE_REFRACTION";break}return e}function ZS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jh:e="ENVMAP_BLENDING_MULTIPLY";break;case Nv:e="ENVMAP_BLENDING_MIX";break;case Bv:e="ENVMAP_BLENDING_ADD";break}return e}function JS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function QS(n,e,t,r){const o=n.getContext(),i=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=YS(t),c=qS(t),d=KS(t),u=ZS(t),f=JS(t),p=zS(t),g=$S(i),_=o.createProgram();let m,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vi).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vi).join(`
`),h.length>0&&(h+=`
`)):(m=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),h=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ir?"#define TONE_MAPPING":"",t.toneMapping!==Ir?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Ir?BS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,NS("linearToOutputTexel",t.outputColorSpace),FS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vi).join(`
`)),s=Sc(s),s=of(s,t),s=sf(s,t),a=Sc(a),a=of(a,t),a=sf(a,t),s=af(s),a=af(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=T+m+s,b=T+h+a,A=tf(o,o.VERTEX_SHADER,E),D=tf(o,o.FRAGMENT_SHADER,b);o.attachShader(_,A),o.attachShader(_,D),t.index0AttributeName!==void 0?o.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(_,0,"position"),o.linkProgram(_);function R(L){if(n.debug.checkShaderErrors){const Q=o.getProgramInfoLog(_).trim(),H=o.getShaderInfoLog(A).trim(),te=o.getShaderInfoLog(D).trim();let re=!0,q=!0;if(o.getProgramParameter(_,o.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,_,A,D);else{const Z=rf(o,A,"vertex"),F=rf(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(_,o.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Q+`
`+Z+`
`+F)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(H===""||te==="")&&(q=!1);q&&(L.diagnostics={runnable:re,programLog:Q,vertexShader:{log:H,prefix:m},fragmentShader:{log:te,prefix:h}})}o.deleteShader(A),o.deleteShader(D),U=new Ys(o,_),w=HS(o,_)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=o.getProgramParameter(_,kS)),M},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=D,this}let eM=0;class tM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(o)===!1&&(s.add(o),o.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new nM(e),t.set(e,r)),r}}class nM{constructor(e){this.id=eM++,this.code=e,this.usedTimes=0}}function rM(n,e,t,r,o,i,s){const a=new pp,l=new tM,c=new Set,d=[],u=o.logarithmicDepthBuffer,f=o.vertexTextures;let p=o.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,L,Q,H){const te=Q.fog,re=H.geometry,q=w.isMeshStandardMaterial?Q.environment:null,Z=(w.isMeshStandardMaterial?t:e).get(w.envMap||q),F=Z&&Z.mapping===ya?Z.image.height:null,ue=g[w.type];w.precision!==null&&(p=o.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const he=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,be=he!==void 0?he.length:0;let ke=0;re.morphAttributes.position!==void 0&&(ke=1),re.morphAttributes.normal!==void 0&&(ke=2),re.morphAttributes.color!==void 0&&(ke=3);let Ze,ee,fe,Te;if(ue){const ot=Nn[ue];Ze=ot.vertexShader,ee=ot.fragmentShader}else Ze=w.vertexShader,ee=w.fragmentShader,l.update(w),fe=l.getVertexShaderID(w),Te=l.getFragmentShaderID(w);const me=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Ye=H.isInstancedMesh===!0,Ie=H.isBatchedMesh===!0,ft=!!w.map,C=!!w.matcap,P=!!Z,y=!!w.aoMap,oe=!!w.lightMap,j=!!w.bumpMap,J=!!w.normalMap,Y=!!w.displacementMap,ne=!!w.emissiveMap,X=!!w.metalnessMap,W=!!w.roughnessMap,ge=w.anisotropy>0,x=w.clearcoat>0,v=w.dispersion>0,k=w.iridescence>0,$=w.sheen>0,K=w.transmission>0,z=ge&&!!w.anisotropyMap,xe=x&&!!w.clearcoatMap,de=x&&!!w.clearcoatNormalMap,Se=x&&!!w.clearcoatRoughnessMap,Ee=k&&!!w.iridescenceMap,se=k&&!!w.iridescenceThicknessMap,Me=$&&!!w.sheenColorMap,Ae=$&&!!w.sheenRoughnessMap,Re=!!w.specularMap,pe=!!w.specularColorMap,Fe=!!w.specularIntensityMap,I=K&&!!w.transmissionMap,_e=K&&!!w.thicknessMap,ae=!!w.gradientMap,Ce=!!w.alphaMap,le=w.alphaTest>0,ie=!!w.alphaHash,Pe=!!w.extensions;let ze=Ir;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ze=n.toneMapping);const mt={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:ee,defines:w.defines,customVertexShaderID:fe,customFragmentShaderID:Te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&H._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&H.instanceColor!==null,instancingMorph:Ye&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ei,alphaToCoverage:!!w.alphaToCoverage,map:ft,matcap:C,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:F,aoMap:y,lightMap:oe,bumpMap:j,normalMap:J,displacementMap:f&&Y,emissiveMap:ne,normalMapObjectSpace:J&&w.normalMapType===Yv,normalMapTangentSpace:J&&w.normalMapType===cp,metalnessMap:X,roughnessMap:W,anisotropy:ge,anisotropyMap:z,clearcoat:x,clearcoatMap:xe,clearcoatNormalMap:de,clearcoatRoughnessMap:Se,dispersion:v,iridescence:k,iridescenceMap:Ee,iridescenceThicknessMap:se,sheen:$,sheenColorMap:Me,sheenRoughnessMap:Ae,specularMap:Re,specularColorMap:pe,specularIntensityMap:Fe,transmission:K,transmissionMap:I,thicknessMap:_e,gradientMap:ae,opaque:w.transparent===!1&&w.blending===jo&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:le,alphaHash:ie,combine:w.combine,mapUv:ft&&_(w.map.channel),aoMapUv:y&&_(w.aoMap.channel),lightMapUv:oe&&_(w.lightMap.channel),bumpMapUv:j&&_(w.bumpMap.channel),normalMapUv:J&&_(w.normalMap.channel),displacementMapUv:Y&&_(w.displacementMap.channel),emissiveMapUv:ne&&_(w.emissiveMap.channel),metalnessMapUv:X&&_(w.metalnessMap.channel),roughnessMapUv:W&&_(w.roughnessMap.channel),anisotropyMapUv:z&&_(w.anisotropyMap.channel),clearcoatMapUv:xe&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(w.sheenRoughnessMap.channel),specularMapUv:Re&&_(w.specularMap.channel),specularColorMapUv:pe&&_(w.specularColorMap.channel),specularIntensityMapUv:Fe&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:_e&&_(w.thicknessMap.channel),alphaMapUv:Ce&&_(w.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(J||ge),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!re.attributes.uv&&(ft||Ce),fog:!!te,useFog:w.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Le,skinning:H.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:ft&&w.map.isVideoTexture===!0&&et.getTransfer(w.map.colorSpace)===st,decodeVideoTextureEmissive:ne&&w.emissiveMap.isVideoTexture===!0&&et.getTransfer(w.emissiveMap.colorSpace)===st,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ir,flipSided:w.side===Kt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pe&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&w.extensions.multiDraw===!0||Ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function h(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(T(M,w),E(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function T(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function E(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function b(w){const M=g[w.type];let L;if(M){const Q=Nn[M];L=Tb.clone(Q.uniforms)}else L=w.uniforms;return L}function A(w,M){let L;for(let Q=0,H=d.length;Q<H;Q++){const te=d[Q];if(te.cacheKey===M){L=te,++L.usedTimes;break}}return L===void 0&&(L=new QS(n,M,w,i),d.push(L)),L}function D(w){if(--w.usedTimes===0){const M=d.indexOf(w);d[M]=d[d.length-1],d.pop(),w.destroy()}}function R(w){l.remove(w)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:A,releaseProgram:D,releaseShaderCache:R,programs:d,dispose:U}}function oM(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function r(s){n.delete(s)}function o(s,a,l){n.get(s)[a]=l}function i(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:i}}function iM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function df(){const n=[];let e=0;const t=[],r=[],o=[];function i(){e=0,t.length=0,r.length=0,o.length=0}function s(u,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=_,h.group=m),e++,h}function a(u,f,p,g,_,m){const h=s(u,f,p,g,_,m);p.transmission>0?r.push(h):p.transparent===!0?o.push(h):t.push(h)}function l(u,f,p,g,_,m){const h=s(u,f,p,g,_,m);p.transmission>0?r.unshift(h):p.transparent===!0?o.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||iM),r.length>1&&r.sort(f||cf),o.length>1&&o.sort(f||cf)}function d(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:r,transparent:o,init:i,push:a,unshift:l,finish:d,sort:c}}function sM(){let n=new WeakMap;function e(r,o){const i=n.get(r);let s;return i===void 0?(s=new df,n.set(r,[s])):o>=i.length?(s=new df,i.push(s)):s=i[o],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function aM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new tt};break;case"SpotLight":t={position:new B,direction:new B,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function lM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cM=0;function dM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function uM(n){const e=new aM,t=lM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new B);const o=new B,i=new yt,s=new yt;function a(c){let d=0,u=0,f=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,T=0,E=0,b=0,A=0,D=0,R=0;c.sort(dM);for(let w=0,M=c.length;w<M;w++){const L=c[w],Q=L.color,H=L.intensity,te=L.distance,re=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=Q.r*H,u+=Q.g*H,f+=Q.b*H;else if(L.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(L.sh.coefficients[q],H);R++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,F=t.get(L);F.shadowIntensity=Z.intensity,F.shadowBias=Z.bias,F.shadowNormalBias=Z.normalBias,F.shadowRadius=Z.radius,F.shadowMapSize=Z.mapSize,r.directionalShadow[p]=F,r.directionalShadowMap[p]=re,r.directionalShadowMatrix[p]=L.shadow.matrix,T++}r.directional[p]=q,p++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(Q).multiplyScalar(H),q.distance=te,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,r.spot[_]=q;const Z=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,Z.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[_]=Z.matrix,L.castShadow){const F=t.get(L);F.shadowIntensity=Z.intensity,F.shadowBias=Z.bias,F.shadowNormalBias=Z.normalBias,F.shadowRadius=Z.radius,F.shadowMapSize=Z.mapSize,r.spotShadow[_]=F,r.spotShadowMap[_]=re,b++}_++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(Q).multiplyScalar(H),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),r.rectArea[m]=q,m++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Z=L.shadow,F=t.get(L);F.shadowIntensity=Z.intensity,F.shadowBias=Z.bias,F.shadowNormalBias=Z.normalBias,F.shadowRadius=Z.radius,F.shadowMapSize=Z.mapSize,F.shadowCameraNear=Z.camera.near,F.shadowCameraFar=Z.camera.far,r.pointShadow[g]=F,r.pointShadowMap[g]=re,r.pointShadowMatrix[g]=L.shadow.matrix,E++}r.point[g]=q,g++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(H),q.groundColor.copy(L.groundColor).multiplyScalar(H),r.hemi[h]=q,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2)),r.ambient[0]=d,r.ambient[1]=u,r.ambient[2]=f;const U=r.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==T||U.numPointShadows!==E||U.numSpotShadows!==b||U.numSpotMaps!==A||U.numLightProbes!==R)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=m,r.point.length=g,r.hemi.length=h,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=b+A-D,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=R,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=T,U.numPointShadows=E,U.numSpotShadows=b,U.numSpotMaps=A,U.numLightProbes=R,r.version=cM++)}function l(c,d){let u=0,f=0,p=0,g=0,_=0;const m=d.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const E=c[h];if(E.isDirectionalLight){const b=r.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(m),u++}else if(E.isSpotLight){const b=r.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const b=r.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),s.identity(),i.copy(E.matrixWorld),i.premultiply(m),s.extractRotation(i),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),g++}else if(E.isPointLight){const b=r.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const b=r.hemi[_];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:r}}function uf(n){const e=new uM(n),t=[],r=[];function o(d){c.camera=d,t.length=0,r.length=0}function i(d){t.push(d)}function s(d){r.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:a,setupLightsView:l,pushLight:i,pushShadow:s}}function fM(n){let e=new WeakMap;function t(o,i=0){const s=e.get(o);let a;return s===void 0?(a=new uf(n),e.set(o,[a])):i>=s.length?(a=new uf(n),s.push(a)):a=s[i],a}function r(){e=new WeakMap}return{get:t,dispose:r}}const hM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pM=`uniform sampler2D shadow_pass;
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
}`;function mM(n,e,t){let r=new cd;const o=new $e,i=new $e,s=new ct,a=new Ob({depthPacking:jv}),l=new Nb,c={},d=t.maxTextureSize,u={[Br]:Kt,[Kt]:Br,[ir]:ir},f=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:hM,fragmentShader:pM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new zr;g.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let h=this.type;this.render=function(D,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const w=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(kr),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const H=h!==tr&&this.type===tr,te=h===tr&&this.type!==tr;for(let re=0,q=D.length;re<q;re++){const Z=D[re],F=Z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const ue=F.getFrameExtents();if(o.multiply(ue),i.copy(F.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(i.x=Math.floor(d/ue.x),o.x=i.x*ue.x,F.mapSize.x=i.x),o.y>d&&(i.y=Math.floor(d/ue.y),o.y=i.y*ue.y,F.mapSize.y=i.y)),F.map===null||H===!0||te===!0){const be=this.type!==tr?{minFilter:Ln,magFilter:Ln}:{};F.map!==null&&F.map.dispose(),F.map=new fo(o.x,o.y,be),F.map.texture.name=Z.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const he=F.getViewportCount();for(let be=0;be<he;be++){const ke=F.getViewport(be);s.set(i.x*ke.x,i.y*ke.y,i.x*ke.z,i.y*ke.w),Q.viewport(s),F.updateMatrices(Z,be),r=F.getFrustum(),b(R,U,F.camera,Z,this.type)}F.isPointLightShadow!==!0&&this.type===tr&&T(F,U),F.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,L)};function T(D,R){const U=e.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new fo(o.x,o.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(R,null,U,f,_,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(R,null,U,p,_,null)}function E(D,R,U,w){let M=null;const L=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)M=L;else if(M=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const Q=M.uuid,H=R.uuid;let te=c[Q];te===void 0&&(te={},c[Q]=te);let re=te[H];re===void 0&&(re=M.clone(),te[H]=re,R.addEventListener("dispose",A)),M=re}if(M.visible=R.visible,M.wireframe=R.wireframe,w===tr?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Q=n.properties.get(M);Q.light=U}return M}function b(D,R,U,w,M){if(D.visible===!1)return;if(D.layers.test(R.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===tr)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);const H=e.update(D),te=D.material;if(Array.isArray(te)){const re=H.groups;for(let q=0,Z=re.length;q<Z;q++){const F=re[q],ue=te[F.materialIndex];if(ue&&ue.visible){const he=E(D,ue,w,M);D.onBeforeShadow(n,D,R,U,H,he,F),n.renderBufferDirect(U,null,H,he,D,F),D.onAfterShadow(n,D,R,U,H,he,F)}}}else if(te.visible){const re=E(D,te,w,M);D.onBeforeShadow(n,D,R,U,H,re,null),n.renderBufferDirect(U,null,H,re,D,null),D.onAfterShadow(n,D,R,U,H,re,null)}}const Q=D.children;for(let H=0,te=Q.length;H<te;H++)b(Q[H],R,U,w,M)}function A(D){D.target.removeEventListener("dispose",A);for(const U in c){const w=c[U],M=D.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const gM={[Fl]:zl,[$l]:Gl,[Hl]:Wl,[Zo]:Vl,[zl]:Fl,[Gl]:$l,[Wl]:Hl,[Vl]:Zo};function vM(n,e){function t(){let I=!1;const _e=new ct;let ae=null;const Ce=new ct(0,0,0,0);return{setMask:function(le){ae!==le&&!I&&(n.colorMask(le,le,le,le),ae=le)},setLocked:function(le){I=le},setClear:function(le,ie,Pe,ze,mt){mt===!0&&(le*=ze,ie*=ze,Pe*=ze),_e.set(le,ie,Pe,ze),Ce.equals(_e)===!1&&(n.clearColor(le,ie,Pe,ze),Ce.copy(_e))},reset:function(){I=!1,ae=null,Ce.set(-1,0,0,0)}}}function r(){let I=!1,_e=!1,ae=null,Ce=null,le=null;return{setReversed:function(ie){if(_e!==ie){const Pe=e.get("EXT_clip_control");ie?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),_e=ie;const ze=le;le=null,this.setClear(ze)}},getReversed:function(){return _e},setTest:function(ie){ie?me(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(ie){ae!==ie&&!I&&(n.depthMask(ie),ae=ie)},setFunc:function(ie){if(_e&&(ie=gM[ie]),Ce!==ie){switch(ie){case Fl:n.depthFunc(n.NEVER);break;case zl:n.depthFunc(n.ALWAYS);break;case $l:n.depthFunc(n.LESS);break;case Zo:n.depthFunc(n.LEQUAL);break;case Hl:n.depthFunc(n.EQUAL);break;case Vl:n.depthFunc(n.GEQUAL);break;case Gl:n.depthFunc(n.GREATER);break;case Wl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=ie}},setLocked:function(ie){I=ie},setClear:function(ie){le!==ie&&(_e&&(ie=1-ie),n.clearDepth(ie),le=ie)},reset:function(){I=!1,ae=null,Ce=null,le=null,_e=!1}}}function o(){let I=!1,_e=null,ae=null,Ce=null,le=null,ie=null,Pe=null,ze=null,mt=null;return{setTest:function(ot){I||(ot?me(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(ot){_e!==ot&&!I&&(n.stencilMask(ot),_e=ot)},setFunc:function(ot,xn,Xn){(ae!==ot||Ce!==xn||le!==Xn)&&(n.stencilFunc(ot,xn,Xn),ae=ot,Ce=xn,le=Xn)},setOp:function(ot,xn,Xn){(ie!==ot||Pe!==xn||ze!==Xn)&&(n.stencilOp(ot,xn,Xn),ie=ot,Pe=xn,ze=Xn)},setLocked:function(ot){I=ot},setClear:function(ot){mt!==ot&&(n.clearStencil(ot),mt=ot)},reset:function(){I=!1,_e=null,ae=null,Ce=null,le=null,ie=null,Pe=null,ze=null,mt=null}}}const i=new t,s=new r,a=new o,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,T=null,E=null,b=null,A=null,D=null,R=new tt(0,0,0),U=0,w=!1,M=null,L=null,Q=null,H=null,te=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(F)[1]),q=Z>=1):F.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),q=Z>=2);let ue=null,he={};const be=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),Ze=new ct().fromArray(be),ee=new ct().fromArray(ke);function fe(I,_e,ae,Ce){const le=new Uint8Array(4),ie=n.createTexture();n.bindTexture(I,ie),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<ae;Pe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(_e+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ie}const Te={};Te[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),me(n.DEPTH_TEST),s.setFunc(Zo),j(!1),J(fu),me(n.CULL_FACE),y(kr);function me(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function Le(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function Ye(I,_e){return u[I]!==_e?(n.bindFramebuffer(I,_e),u[I]=_e,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_e),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ie(I,_e){let ae=p,Ce=!1;if(I){ae=f.get(_e),ae===void 0&&(ae=[],f.set(_e,ae));const le=I.textures;if(ae.length!==le.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Pe=le.length;ie<Pe;ie++)ae[ie]=n.COLOR_ATTACHMENT0+ie;ae.length=le.length,Ce=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(ae)}function ft(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const C={[eo]:n.FUNC_ADD,[yv]:n.FUNC_SUBTRACT,[xv]:n.FUNC_REVERSE_SUBTRACT};C[Sv]=n.MIN,C[Mv]=n.MAX;const P={[Ev]:n.ZERO,[wv]:n.ONE,[Tv]:n.SRC_COLOR,[Nl]:n.SRC_ALPHA,[Lv]:n.SRC_ALPHA_SATURATE,[Pv]:n.DST_COLOR,[Av]:n.DST_ALPHA,[Cv]:n.ONE_MINUS_SRC_COLOR,[Bl]:n.ONE_MINUS_SRC_ALPHA,[Dv]:n.ONE_MINUS_DST_COLOR,[Rv]:n.ONE_MINUS_DST_ALPHA,[kv]:n.CONSTANT_COLOR,[Iv]:n.ONE_MINUS_CONSTANT_COLOR,[Uv]:n.CONSTANT_ALPHA,[Ov]:n.ONE_MINUS_CONSTANT_ALPHA};function y(I,_e,ae,Ce,le,ie,Pe,ze,mt,ot){if(I===kr){_===!0&&(Le(n.BLEND),_=!1);return}if(_===!1&&(me(n.BLEND),_=!0),I!==_v){if(I!==m||ot!==w){if((h!==eo||b!==eo)&&(n.blendEquation(n.FUNC_ADD),h=eo,b=eo),ot)switch(I){case jo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hu:n.blendFunc(n.ONE,n.ONE);break;case pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case jo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,E=null,A=null,D=null,R.set(0,0,0),U=0,m=I,w=ot}return}le=le||_e,ie=ie||ae,Pe=Pe||Ce,(_e!==h||le!==b)&&(n.blendEquationSeparate(C[_e],C[le]),h=_e,b=le),(ae!==T||Ce!==E||ie!==A||Pe!==D)&&(n.blendFuncSeparate(P[ae],P[Ce],P[ie],P[Pe]),T=ae,E=Ce,A=ie,D=Pe),(ze.equals(R)===!1||mt!==U)&&(n.blendColor(ze.r,ze.g,ze.b,mt),R.copy(ze),U=mt),m=I,w=!1}function oe(I,_e){I.side===ir?Le(n.CULL_FACE):me(n.CULL_FACE);let ae=I.side===Kt;_e&&(ae=!ae),j(ae),I.blending===jo&&I.transparent===!1?y(kr):y(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),i.setMask(I.colorWrite);const Ce=I.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function J(I){I!==vv?(me(n.CULL_FACE),I!==L&&(I===fu?n.cullFace(n.BACK):I===bv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),L=I}function Y(I){I!==Q&&(q&&n.lineWidth(I),Q=I)}function ne(I,_e,ae){I?(me(n.POLYGON_OFFSET_FILL),(H!==_e||te!==ae)&&(n.polygonOffset(_e,ae),H=_e,te=ae)):Le(n.POLYGON_OFFSET_FILL)}function X(I){I?me(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function W(I){I===void 0&&(I=n.TEXTURE0+re-1),ue!==I&&(n.activeTexture(I),ue=I)}function ge(I,_e,ae){ae===void 0&&(ue===null?ae=n.TEXTURE0+re-1:ae=ue);let Ce=he[ae];Ce===void 0&&(Ce={type:void 0,texture:void 0},he[ae]=Ce),(Ce.type!==I||Ce.texture!==_e)&&(ue!==ae&&(n.activeTexture(ae),ue=ae),n.bindTexture(I,_e||Te[I]),Ce.type=I,Ce.texture=_e)}function x(){const I=he[ue];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(I){Ze.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function Ae(I){ee.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ee.copy(I))}function Re(I,_e){let ae=c.get(_e);ae===void 0&&(ae=new WeakMap,c.set(_e,ae));let Ce=ae.get(I);Ce===void 0&&(Ce=n.getUniformBlockIndex(_e,I.name),ae.set(I,Ce))}function pe(I,_e){const Ce=c.get(_e).get(I);l.get(_e)!==Ce&&(n.uniformBlockBinding(_e,Ce,I.__bindingPointIndex),l.set(_e,Ce))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ue=null,he={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,T=null,E=null,b=null,A=null,D=null,R=new tt(0,0,0),U=0,w=!1,M=null,L=null,Q=null,H=null,te=null,Ze.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:me,disable:Le,bindFramebuffer:Ye,drawBuffers:Ie,useProgram:ft,setBlending:y,setMaterial:oe,setFlipSided:j,setCullFace:J,setLineWidth:Y,setPolygonOffset:ne,setScissorTest:X,activeTexture:W,bindTexture:ge,unbindTexture:x,compressedTexImage2D:v,compressedTexImage3D:k,texImage2D:Ee,texImage3D:se,updateUBOMapping:Re,uniformBlockBinding:pe,texStorage2D:de,texStorage3D:Se,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:z,compressedTexSubImage3D:xe,scissor:Me,viewport:Ae,reset:Fe}}function bM(n,e,t,r,o,i,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,d=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,v){return p?new OffscreenCanvas(x,v):sa("canvas")}function _(x,v,k){let $=1;const K=ge(x);if((K.width>k||K.height>k)&&($=k/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const z=Math.floor($*K.width),xe=Math.floor($*K.height);u===void 0&&(u=g(z,xe));const de=v?g(z,xe):u;return de.width=z,de.height=xe,de.getContext("2d").drawImage(x,0,0,z,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+z+"x"+xe+")."),de}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),x;return x}function m(x){return x.generateMipmaps}function h(x){n.generateMipmap(x)}function T(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(x,v,k,$,K=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let z=v;if(v===n.RED&&(k===n.FLOAT&&(z=n.R32F),k===n.HALF_FLOAT&&(z=n.R16F),k===n.UNSIGNED_BYTE&&(z=n.R8)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(z=n.R8UI),k===n.UNSIGNED_SHORT&&(z=n.R16UI),k===n.UNSIGNED_INT&&(z=n.R32UI),k===n.BYTE&&(z=n.R8I),k===n.SHORT&&(z=n.R16I),k===n.INT&&(z=n.R32I)),v===n.RG&&(k===n.FLOAT&&(z=n.RG32F),k===n.HALF_FLOAT&&(z=n.RG16F),k===n.UNSIGNED_BYTE&&(z=n.RG8)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(z=n.RG8UI),k===n.UNSIGNED_SHORT&&(z=n.RG16UI),k===n.UNSIGNED_INT&&(z=n.RG32UI),k===n.BYTE&&(z=n.RG8I),k===n.SHORT&&(z=n.RG16I),k===n.INT&&(z=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(z=n.RGB16UI),k===n.UNSIGNED_INT&&(z=n.RGB32UI),k===n.BYTE&&(z=n.RGB8I),k===n.SHORT&&(z=n.RGB16I),k===n.INT&&(z=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),k===n.UNSIGNED_INT&&(z=n.RGBA32UI),k===n.BYTE&&(z=n.RGBA8I),k===n.SHORT&&(z=n.RGBA16I),k===n.INT&&(z=n.RGBA32I)),v===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),v===n.RGBA){const xe=K?oa:et.getTransfer($);k===n.FLOAT&&(z=n.RGBA32F),k===n.HALF_FLOAT&&(z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(z=xe===st?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function b(x,v){let k;return x?v===null||v===co||v===Fi?k=n.DEPTH24_STENCIL8:v===sr?k=n.DEPTH32F_STENCIL8:v===Bi&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===co||v===Fi?k=n.DEPTH_COMPONENT24:v===sr?k=n.DEPTH_COMPONENT32F:v===Bi&&(k=n.DEPTH_COMPONENT16),k}function A(x,v){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ln&&x.minFilter!==Fn?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function D(x){const v=x.target;v.removeEventListener("dispose",D),U(v),v.isVideoTexture&&d.delete(v)}function R(x){const v=x.target;v.removeEventListener("dispose",R),M(v)}function U(x){const v=r.get(x);if(v.__webglInit===void 0)return;const k=x.source,$=f.get(k);if($){const K=$[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(x),Object.keys($).length===0&&f.delete(k)}r.remove(x)}function w(x){const v=r.get(x);n.deleteTexture(v.__webglTexture);const k=x.source,$=f.get(k);delete $[v.__cacheKey],s.memory.textures--}function M(x){const v=r.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),r.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let K=0;K<v.__webglFramebuffer[$].length;K++)n.deleteFramebuffer(v.__webglFramebuffer[$][K]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=x.textures;for(let $=0,K=k.length;$<K;$++){const z=r.get(k[$]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),s.memory.textures--),r.remove(k[$])}r.remove(x)}let L=0;function Q(){L=0}function H(){const x=L;return x>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+o.maxTextures),L+=1,x}function te(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function re(x,v){const k=r.get(x);if(x.isVideoTexture&&X(x),x.isRenderTargetTexture===!1&&x.version>0&&k.__version!==x.version){const $=x.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(k,x,v);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function q(x,v){const k=r.get(x);if(x.version>0&&k.__version!==x.version){Te(k,x,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function Z(x,v){const k=r.get(x);if(x.version>0&&k.__version!==x.version){Te(k,x,v);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function F(x,v){const k=r.get(x);if(x.version>0&&k.__version!==x.version){me(k,x,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}const ue={[lo]:n.REPEAT,[pn]:n.CLAMP_TO_EDGE,[Yl]:n.MIRRORED_REPEAT},he={[Ln]:n.NEAREST,[Wv]:n.NEAREST_MIPMAP_NEAREST,[ps]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[za]:n.LINEAR_MIPMAP_NEAREST,[no]:n.LINEAR_MIPMAP_LINEAR},be={[qv]:n.NEVER,[tb]:n.ALWAYS,[Kv]:n.LESS,[dp]:n.LEQUAL,[Zv]:n.EQUAL,[eb]:n.GEQUAL,[Jv]:n.GREATER,[Qv]:n.NOTEQUAL};function ke(x,v){if(v.type===sr&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Fn||v.magFilter===za||v.magFilter===ps||v.magFilter===no||v.minFilter===Fn||v.minFilter===za||v.minFilter===ps||v.minFilter===no)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ue[v.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ue[v.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ue[v.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,he[v.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,be[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ln||v.minFilter!==ps&&v.minFilter!==no||v.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,o.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(x,v){let k=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",D));const $=v.source;let K=f.get($);K===void 0&&(K={},f.set($,K));const z=te(v);if(z!==x.__cacheKey){K[z]===void 0&&(K[z]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,k=!0),K[z].usedTimes++;const xe=K[x.__cacheKey];xe!==void 0&&(K[x.__cacheKey].usedTimes--,xe.usedTimes===0&&w(v)),x.__cacheKey=z,x.__webglTexture=K[z].texture}return k}function ee(x,v,k){return Math.floor(Math.floor(x/k)/v)}function fe(x,v,k,$){const z=x.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,k,$,v.data);else{z.sort((se,Me)=>se.start-Me.start);let xe=0;for(let se=1;se<z.length;se++){const Me=z[xe],Ae=z[se],Re=Me.start+Me.count,pe=ee(Ae.start,v.width,4),Fe=ee(Me.start,v.width,4);Ae.start<=Re+1&&pe===Fe&&ee(Ae.start+Ae.count-1,v.width,4)===pe?Me.count=Math.max(Me.count,Ae.start+Ae.count-Me.start):(++xe,z[xe]=Ae)}z.length=xe+1;const de=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let se=0,Me=z.length;se<Me;se++){const Ae=z[se],Re=Math.floor(Ae.start/4),pe=Math.ceil(Ae.count/4),Fe=Re%v.width,I=Math.floor(Re/v.width),_e=pe,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Fe,I,_e,ae,k,$,v.data)}x.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function Te(x,v,k){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const K=Ze(x,v),z=v.source;t.bindTexture($,x.__webglTexture,n.TEXTURE0+k);const xe=r.get(z);if(z.version!==xe.__version||K===!0){t.activeTexture(n.TEXTURE0+k);const de=et.getPrimaries(et.workingColorSpace),Se=v.colorSpace===Cr?null:et.getPrimaries(v.colorSpace),Ee=v.colorSpace===Cr||de===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let se=_(v.image,!1,o.maxTextureSize);se=W(v,se);const Me=i.convert(v.format,v.colorSpace),Ae=i.convert(v.type);let Re=E(v.internalFormat,Me,Ae,v.colorSpace,v.isVideoTexture);ke($,v);let pe;const Fe=v.mipmaps,I=v.isVideoTexture!==!0,_e=xe.__version===void 0||K===!0,ae=z.dataReady,Ce=A(v,se);if(v.isDepthTexture)Re=b(v.format===$i,v.type),_e&&(I?t.texStorage2D(n.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Re,se.width,se.height,0,Me,Ae,null));else if(v.isDataTexture)if(Fe.length>0){I&&_e&&t.texStorage2D(n.TEXTURE_2D,Ce,Re,Fe[0].width,Fe[0].height);for(let le=0,ie=Fe.length;le<ie;le++)pe=Fe[le],I?ae&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,pe.width,pe.height,Me,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,le,Re,pe.width,pe.height,0,Me,Ae,pe.data);v.generateMipmaps=!1}else I?(_e&&t.texStorage2D(n.TEXTURE_2D,Ce,Re,se.width,se.height),ae&&fe(v,se,Me,Ae)):t.texImage2D(n.TEXTURE_2D,0,Re,se.width,se.height,0,Me,Ae,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Re,Fe[0].width,Fe[0].height,se.depth);for(let le=0,ie=Fe.length;le<ie;le++)if(pe=Fe[le],v.format!==An)if(Me!==null)if(I){if(ae)if(v.layerUpdates.size>0){const Pe=zu(pe.width,pe.height,v.format,v.type);for(const ze of v.layerUpdates){const mt=pe.data.subarray(ze*Pe/pe.data.BYTES_PER_ELEMENT,(ze+1)*Pe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ze,pe.width,pe.height,1,Me,mt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,pe.width,pe.height,se.depth,Me,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Re,pe.width,pe.height,se.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,pe.width,pe.height,se.depth,Me,Ae,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Re,pe.width,pe.height,se.depth,0,Me,Ae,pe.data)}else{I&&_e&&t.texStorage2D(n.TEXTURE_2D,Ce,Re,Fe[0].width,Fe[0].height);for(let le=0,ie=Fe.length;le<ie;le++)pe=Fe[le],v.format!==An?Me!==null?I?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,pe.width,pe.height,Me,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Re,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,pe.width,pe.height,Me,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,le,Re,pe.width,pe.height,0,Me,Ae,pe.data)}else if(v.isDataArrayTexture)if(I){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Re,se.width,se.height,se.depth),ae)if(v.layerUpdates.size>0){const le=zu(se.width,se.height,v.format,v.type);for(const ie of v.layerUpdates){const Pe=se.data.subarray(ie*le/se.data.BYTES_PER_ELEMENT,(ie+1)*le/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,se.width,se.height,1,Me,Ae,Pe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,Ae,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,Me,Ae,se.data);else if(v.isData3DTexture)I?(_e&&t.texStorage3D(n.TEXTURE_3D,Ce,Re,se.width,se.height,se.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,Ae,se.data)):t.texImage3D(n.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,Me,Ae,se.data);else if(v.isFramebufferTexture){if(_e)if(I)t.texStorage2D(n.TEXTURE_2D,Ce,Re,se.width,se.height);else{let le=se.width,ie=se.height;for(let Pe=0;Pe<Ce;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Re,le,ie,0,Me,Ae,null),le>>=1,ie>>=1}}else if(Fe.length>0){if(I&&_e){const le=ge(Fe[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Re,le.width,le.height)}for(let le=0,ie=Fe.length;le<ie;le++)pe=Fe[le],I?ae&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Me,Ae,pe):t.texImage2D(n.TEXTURE_2D,le,Re,Me,Ae,pe);v.generateMipmaps=!1}else if(I){if(_e){const le=ge(se);t.texStorage2D(n.TEXTURE_2D,Ce,Re,le.width,le.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ae,se)}else t.texImage2D(n.TEXTURE_2D,0,Re,Me,Ae,se);m(v)&&h($),xe.__version=z.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function me(x,v,k){if(v.image.length!==6)return;const $=Ze(x,v),K=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+k);const z=r.get(K);if(K.version!==z.__version||$===!0){t.activeTexture(n.TEXTURE0+k);const xe=et.getPrimaries(et.workingColorSpace),de=v.colorSpace===Cr?null:et.getPrimaries(v.colorSpace),Se=v.colorSpace===Cr||xe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let ie=0;ie<6;ie++)!Ee&&!se?Me[ie]=_(v.image[ie],!0,o.maxCubemapSize):Me[ie]=se?v.image[ie].image:v.image[ie],Me[ie]=W(v,Me[ie]);const Ae=Me[0],Re=i.convert(v.format,v.colorSpace),pe=i.convert(v.type),Fe=E(v.internalFormat,Re,pe,v.colorSpace),I=v.isVideoTexture!==!0,_e=z.__version===void 0||$===!0,ae=K.dataReady;let Ce=A(v,Ae);ke(n.TEXTURE_CUBE_MAP,v);let le;if(Ee){I&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Fe,Ae.width,Ae.height);for(let ie=0;ie<6;ie++){le=Me[ie].mipmaps;for(let Pe=0;Pe<le.length;Pe++){const ze=le[Pe];v.format!==An?Re!==null?I?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,ze.width,ze.height,Re,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Fe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,ze.width,ze.height,Re,pe,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Fe,ze.width,ze.height,0,Re,pe,ze.data)}}}else{if(le=v.mipmaps,I&&_e){le.length>0&&Ce++;const ie=ge(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(se){I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Me[ie].width,Me[ie].height,Re,pe,Me[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,Me[ie].width,Me[ie].height,0,Re,pe,Me[ie].data);for(let Pe=0;Pe<le.length;Pe++){const mt=le[Pe].image[ie].image;I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,mt.width,mt.height,Re,pe,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Fe,mt.width,mt.height,0,Re,pe,mt.data)}}else{I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,pe,Me[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,Re,pe,Me[ie]);for(let Pe=0;Pe<le.length;Pe++){const ze=le[Pe];I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,Re,pe,ze.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Fe,Re,pe,ze.image[ie])}}}m(v)&&h(n.TEXTURE_CUBE_MAP),z.__version=K.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function Le(x,v,k,$,K,z){const xe=i.convert(k.format,k.colorSpace),de=i.convert(k.type),Se=E(k.internalFormat,xe,de,k.colorSpace),Ee=r.get(v),se=r.get(k);if(se.__renderTarget=v,!Ee.__hasExternalTextures){const Me=Math.max(1,v.width>>z),Ae=Math.max(1,v.height>>z);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,z,Se,Me,Ae,v.depth,0,xe,de,null):t.texImage2D(K,z,Se,Me,Ae,0,xe,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),ne(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,K,se.__webglTexture,0,Y(v)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,K,se.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(x,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,x),v.depthBuffer){const $=v.depthTexture,K=$&&$.isDepthTexture?$.type:null,z=b(v.stencilBuffer,K),xe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=Y(v);ne(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,z,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,x)}else{const $=v.textures;for(let K=0;K<$.length;K++){const z=$[K],xe=i.convert(z.format,z.colorSpace),de=i.convert(z.type),Se=E(z.internalFormat,xe,de,z.colorSpace),Ee=Y(v);k&&ne(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Se,v.width,v.height):ne(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,Se,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Se,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=r.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),re(v.depthTexture,0);const K=$.__webglTexture,z=Y(v);if(v.depthTexture.format===zi)ne(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(v.depthTexture.format===$i)ne(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ft(x){const v=r.get(x),k=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const $=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=$}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const $=x.texture.mipmaps;$&&$.length>0?Ie(v.__webglFramebuffer[0],x):Ie(v.__webglFramebuffer,x)}else if(k){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),Ye(v.__webglDepthbuffer[$],x,!1);else{const K=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,z)}}else{const $=x.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ye(v.__webglDepthbuffer,x,!1);else{const K=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(x,v,k){const $=r.get(x);v!==void 0&&Le($.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&ft(x)}function P(x){const v=x.texture,k=r.get(x),$=r.get(v);x.addEventListener("dispose",R);const K=x.textures,z=x.isWebGLCubeRenderTarget===!0,xe=K.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,s.memory.textures++),z){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let Se=0;Se<v.mipmaps.length;Se++)k.__webglFramebuffer[de][Se]=n.createFramebuffer()}else k.__webglFramebuffer[de]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)k.__webglFramebuffer[de]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(xe)for(let de=0,Se=K.length;de<Se;de++){const Ee=r.get(K[de]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),s.memory.textures++)}if(x.samples>0&&ne(x)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<K.length;de++){const Se=K[de];k.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[de]);const Ee=i.convert(Se.format,Se.colorSpace),se=i.convert(Se.type),Me=E(Se.internalFormat,Ee,se,Se.colorSpace,x.isXRRenderTarget===!0),Ae=Y(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Me,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,k.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ye(k.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ke(n.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)Le(k.__webglFramebuffer[de][Se],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se);else Le(k.__webglFramebuffer[de],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(v)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let de=0,Se=K.length;de<Se;de++){const Ee=K[de],se=r.get(Ee);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),ke(n.TEXTURE_2D,Ee),Le(k.__webglFramebuffer,x,Ee,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(Ee)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(de=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),ke(de,v),v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)Le(k.__webglFramebuffer[Se],x,v,n.COLOR_ATTACHMENT0,de,Se);else Le(k.__webglFramebuffer,x,v,n.COLOR_ATTACHMENT0,de,0);m(v)&&h(de),t.unbindTexture()}x.depthBuffer&&ft(x)}function y(x){const v=x.textures;for(let k=0,$=v.length;k<$;k++){const K=v[k];if(m(K)){const z=T(x),xe=r.get(K).__webglTexture;t.bindTexture(z,xe),h(z),t.unbindTexture()}}}const oe=[],j=[];function J(x){if(x.samples>0){if(ne(x)===!1){const v=x.textures,k=x.width,$=x.height;let K=n.COLOR_BUFFER_BIT;const z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=r.get(x),de=v.length>1;if(de)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Se=x.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const se=r.get(v[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,K,n.NEAREST),l===!0&&(oe.length=0,j.length=0,oe.push(n.COLOR_ATTACHMENT0+Ee),x.depthBuffer&&x.resolveDepthBuffer===!1&&(oe.push(z),j.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const se=r.get(v[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const v=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Y(x){return Math.min(o.maxSamples,x.samples)}function ne(x){const v=r.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function X(x){const v=s.render.frame;d.get(x)!==v&&(d.set(x,v),x.update())}function W(x,v){const k=x.colorSpace,$=x.format,K=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||k!==ei&&k!==Cr&&(et.getTransfer(k)===st?($!==An||K!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function ge(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=Q,this.setTexture2D=re,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=F,this.rebindTextures=C,this.setupRenderTarget=P,this.updateRenderTargetMipmap=y,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=ne}function _M(n,e){function t(r,o=Cr){let i;const s=et.getTransfer(o);if(r===Gn)return n.UNSIGNED_BYTE;if(r===nd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===rd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===rp)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===tp)return n.BYTE;if(r===np)return n.SHORT;if(r===Bi)return n.UNSIGNED_SHORT;if(r===td)return n.INT;if(r===co)return n.UNSIGNED_INT;if(r===sr)return n.FLOAT;if(r===es)return n.HALF_FLOAT;if(r===op)return n.ALPHA;if(r===ip)return n.RGB;if(r===An)return n.RGBA;if(r===zi)return n.DEPTH_COMPONENT;if(r===$i)return n.DEPTH_STENCIL;if(r===sp)return n.RED;if(r===od)return n.RED_INTEGER;if(r===ap)return n.RG;if(r===id)return n.RG_INTEGER;if(r===sd)return n.RGBA_INTEGER;if(r===Hs||r===Vs||r===Gs||r===Ws)if(s===st)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===Hs)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ws)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===Hs)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vs)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gs)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ws)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ql||r===Kl||r===Zl||r===Jl)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===ql)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kl)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zl)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jl)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ql||r===ec||r===tc)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===Ql||r===ec)return s===st?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===tc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nc||r===rc||r===oc||r===ic||r===sc||r===ac||r===lc||r===cc||r===dc||r===uc||r===fc||r===hc||r===pc||r===mc)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===nc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===oc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ic)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ac)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mc)return s===st?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xs||r===gc||r===vc)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===Xs)return s===st?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gc)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vc)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lp||r===bc||r===_c||r===yc)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===Xs)return i.COMPRESSED_RED_RGTC1_EXT;if(r===bc)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_c)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yc)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fi?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const yM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xM=`
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

}`;class SM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Zt,i=e.properties.get(o);i.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Fr({vertexShader:yM,fragmentShader:xM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new os(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MM extends po{constructor(e,t){super();const r=this;let o=null,i=1,s=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,g=null;const _=new SM,m=t.getContextAttributes();let h=null,T=null;const E=[],b=[],A=new $e;let D=null;const R=new un;R.viewport=new ct;const U=new un;U.viewport=new ct;const w=[R,U],M=new Vb;let L=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=E[ee];return fe===void 0&&(fe=new ll,E[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=E[ee];return fe===void 0&&(fe=new ll,E[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=E[ee];return fe===void 0&&(fe=new ll,E[ee]=fe),fe.getHandSpace()};function H(ee){const fe=b.indexOf(ee.inputSource);if(fe===-1)return;const Te=E[fe];Te!==void 0&&(Te.update(ee.inputSource,ee.frame,c||s),Te.dispatchEvent({type:ee.type,data:ee.inputSource}))}function te(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",re);for(let ee=0;ee<E.length;ee++){const fe=b[ee];fe!==null&&(b[ee]=null,E[ee].disconnect(fe))}L=null,Q=null,_.reset(),e.setRenderTarget(h),p=null,f=null,u=null,o=null,T=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){i=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(h=e.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",te),o.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,me=null,Le=null;m.depth&&(Le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=m.stencil?$i:zi,me=m.stencil?Fi:co);const Ye={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:i};u=new XRWebGLBinding(o,t),f=u.createProjectionLayer(Ye),o.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new fo(f.textureWidth,f.textureHeight,{format:An,type:Gn,depthTexture:new xp(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(o,t,Te),o.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new fo(p.framebufferWidth,p.framebufferHeight,{format:An,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await o.requestReferenceSpace(a),Ze.setContext(o),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(ee){for(let fe=0;fe<ee.removed.length;fe++){const Te=ee.removed[fe],me=b.indexOf(Te);me>=0&&(b[me]=null,E[me].disconnect(Te))}for(let fe=0;fe<ee.added.length;fe++){const Te=ee.added[fe];let me=b.indexOf(Te);if(me===-1){for(let Ye=0;Ye<E.length;Ye++)if(Ye>=b.length){b.push(Te),me=Ye;break}else if(b[Ye]===null){b[Ye]=Te,me=Ye;break}if(me===-1)break}const Le=E[me];Le&&Le.connect(Te)}}const q=new B,Z=new B;function F(ee,fe,Te){q.setFromMatrixPosition(fe.matrixWorld),Z.setFromMatrixPosition(Te.matrixWorld);const me=q.distanceTo(Z),Le=fe.projectionMatrix.elements,Ye=Te.projectionMatrix.elements,Ie=Le[14]/(Le[10]-1),ft=Le[14]/(Le[10]+1),C=(Le[9]+1)/Le[5],P=(Le[9]-1)/Le[5],y=(Le[8]-1)/Le[0],oe=(Ye[8]+1)/Ye[0],j=Ie*y,J=Ie*oe,Y=me/(-y+oe),ne=Y*-y;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ne),ee.translateZ(Y),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Le[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const X=Ie+Y,W=ft+Y,ge=j-ne,x=J+(me-ne),v=C*ft/W*X,k=P*ft/W*X;ee.projectionMatrix.makePerspective(ge,x,v,k,X,W),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let fe=ee.near,Te=ee.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(Te=_.depthFar)),M.near=U.near=R.near=fe,M.far=U.far=R.far=Te,(L!==M.near||Q!==M.far)&&(o.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,Q=M.far),R.layers.mask=ee.layers.mask|2,U.layers.mask=ee.layers.mask|4,M.layers.mask=R.layers.mask|U.layers.mask;const me=ee.parent,Le=M.cameras;ue(M,me);for(let Ye=0;Ye<Le.length;Ye++)ue(Le[Ye],me);Le.length===2?F(M,R,U):M.projectionMatrix.copy(R.projectionMatrix),he(ee,M,me)};function he(ee,fe,Te){Te===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Te.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=xc*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let be=null;function ke(ee,fe){if(d=fe.getViewerPose(c||s),g=fe,d!==null){const Te=d.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let me=!1;Te.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let Ie=0;Ie<Te.length;Ie++){const ft=Te[Ie];let C=null;if(p!==null)C=p.getViewport(ft);else{const y=u.getViewSubImage(f,ft);C=y.viewport,Ie===0&&(e.setRenderTargetTextures(T,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(T))}let P=w[Ie];P===void 0&&(P=new un,P.layers.enable(Ie),P.viewport=new ct,w[Ie]=P),P.matrix.fromArray(ft.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(ft.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(C.x,C.y,C.width,C.height),Ie===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(P)}const Le=o.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&u){const Ie=u.getDepthInformation(Te[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,o.renderState)}}for(let Te=0;Te<E.length;Te++){const me=b[Te],Le=E[Te];me!==null&&Le!==void 0&&Le.update(me,fe,c||s)}be&&be(ee,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Ze=new Ep;Ze.setAnimationLoop(ke),this.setAnimationLoop=function(ee){be=ee},this.dispose=function(){}}}const Kr=new Wn,EM=new yt;function wM(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function r(m,h){h.color.getRGB(m.fogColor.value,bp(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function o(m,h,T,E,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(m,h):h.isMeshToonMaterial?(i(m,h),u(m,h)):h.isMeshPhongMaterial?(i(m,h),d(m,h)):h.isMeshStandardMaterial?(i(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(i(m,h),g(m,h)):h.isMeshDepthMaterial?i(m,h):h.isMeshDistanceMaterial?(i(m,h),_(m,h)):h.isMeshNormalMaterial?i(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,T,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Kt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Kt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const T=e.get(h),E=T.envMap,b=T.envMapRotation;E&&(m.envMap.value=E,Kr.copy(b),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),m.envMapRotation.value.setFromMatrix4(EM.makeRotationFromEuler(Kr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,T,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*T,m.scale.value=E*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,T){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Kt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const T=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function TM(n,e,t,r){let o={},i={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const b=E.program;r.uniformBlockBinding(T,b)}function c(T,E){let b=o[T.id];b===void 0&&(g(T),b=d(T),o[T.id]=b,T.addEventListener("dispose",m));const A=E.program;r.updateUBOMapping(T,A);const D=e.render.frame;i[T.id]!==D&&(f(T),i[T.id]=D)}function d(T){const E=u();T.__bindingPointIndex=E;const b=n.createBuffer(),A=T.__size,D=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function u(){for(let T=0;T<a;T++)if(s.indexOf(T)===-1)return s.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=o[T.id],b=T.uniforms,A=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let D=0,R=b.length;D<R;D++){const U=Array.isArray(b[D])?b[D]:[b[D]];for(let w=0,M=U.length;w<M;w++){const L=U[w];if(p(L,D,w,A)===!0){const Q=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let te=0;for(let re=0;re<H.length;re++){const q=H[re],Z=_(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,Q+te,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,te),te+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,E,b,A){const D=T.value,R=E+"_"+b;if(A[R]===void 0)return typeof D=="number"||typeof D=="boolean"?A[R]=D:A[R]=D.clone(),!0;{const U=A[R];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return A[R]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function g(T){const E=T.uniforms;let b=0;const A=16;for(let R=0,U=E.length;R<U;R++){const w=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,L=w.length;M<L;M++){const Q=w[M],H=Array.isArray(Q.value)?Q.value:[Q.value];for(let te=0,re=H.length;te<re;te++){const q=H[te],Z=_(q),F=b%A,ue=F%Z.boundary,he=F+ue;b+=ue,he!==0&&A-he<Z.storage&&(b+=A-he),Q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=b,b+=Z.storage}}}const D=b%A;return D>0&&(b+=A-D),T.__size=b,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const b=s.indexOf(E.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(o[E.id]),delete o[E.id],delete i[E.id]}function h(){for(const T in o)n.deleteBuffer(o[T]);s=[],o={},i={}}return{bind:l,update:c,dispose:h}}class CM{constructor(e={}){const{canvas:t=ob(),context:r=null,depth:o=!0,stencil:i=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let A=!1;this._outputColorSpace=cn;let D=0,R=0,U=null,w=-1,M=null;const L=new ct,Q=new ct;let H=null;const te=new tt(0);let re=0,q=t.width,Z=t.height,F=1,ue=null,he=null;const be=new ct(0,0,q,Z),ke=new ct(0,0,q,Z);let Ze=!1;const ee=new cd;let fe=!1,Te=!1;const me=new yt,Le=new yt,Ye=new B,Ie=new ct,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function P(){return U===null?F:1}let y=r;function oe(S,O){return t.getContext(S,O)}try{const S={alpha:!0,depth:o,stencil:i,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ed}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ie,!1),y===null){const O="webgl2";if(y=oe(O,S),y===null)throw oe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let j,J,Y,ne,X,W,ge,x,v,k,$,K,z,xe,de,Se,Ee,se,Me,Ae,Re,pe,Fe,I;function _e(){j=new Nx(y),j.init(),pe=new _M(y,j),J=new Px(y,j,e,pe),Y=new vM(y,j),J.reverseDepthBuffer&&f&&Y.buffers.depth.setReversed(!0),ne=new zx(y),X=new oM,W=new bM(y,j,Y,X,J,pe,ne),ge=new Lx(b),x=new Ox(b),v=new Xb(y),Fe=new Ax(y,v),k=new Bx(y,v,ne,Fe),$=new Hx(y,k,v,ne),Me=new $x(y,J,W),Se=new Dx(X),K=new rM(b,ge,x,j,J,Fe,Se),z=new wM(b,X),xe=new sM,de=new fM(j),se=new Cx(b,ge,x,Y,$,p,l),Ee=new mM(b,$,J),I=new TM(y,ne,J,Y),Ae=new Rx(y,j,ne),Re=new Fx(y,j,ne),ne.programs=K.programs,b.capabilities=J,b.extensions=j,b.properties=X,b.renderLists=xe,b.shadowMap=Ee,b.state=Y,b.info=ne}_e();const ae=new MM(b,y);this.xr=ae,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const S=j.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=j.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(q,Z,!1))},this.getSize=function(S){return S.set(q,Z)},this.setSize=function(S,O,V=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,Z=O,t.width=Math.floor(S*F),t.height=Math.floor(O*F),V===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(q*F,Z*F).floor()},this.setDrawingBufferSize=function(S,O,V){q=S,Z=O,F=V,t.width=Math.floor(S*V),t.height=Math.floor(O*V),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,O,V,G){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,O,V,G),Y.viewport(L.copy(be).multiplyScalar(F).round())},this.getScissor=function(S){return S.copy(ke)},this.setScissor=function(S,O,V,G){S.isVector4?ke.set(S.x,S.y,S.z,S.w):ke.set(S,O,V,G),Y.scissor(Q.copy(ke).multiplyScalar(F).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(S){Y.setScissorTest(Ze=S)},this.setOpaqueSort=function(S){ue=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,V=!0){let G=0;if(S){let N=!1;if(U!==null){const ce=U.texture.format;N=ce===sd||ce===id||ce===od}if(N){const ce=U.texture.type,ye=ce===Gn||ce===co||ce===Bi||ce===Fi||ce===nd||ce===rd,De=se.getClearColor(),we=se.getClearAlpha(),Ne=De.r,Be=De.g,Ue=De.b;ye?(g[0]=Ne,g[1]=Be,g[2]=Ue,g[3]=we,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=Ne,_[1]=Be,_[2]=Ue,_[3]=we,y.clearBufferiv(y.COLOR,0,_))}else G|=y.COLOR_BUFFER_BIT}O&&(G|=y.DEPTH_BUFFER_BIT),V&&(G|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),se.dispose(),xe.dispose(),de.dispose(),X.dispose(),ge.dispose(),x.dispose(),$.dispose(),Fe.dispose(),I.dispose(),K.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",hd),ae.removeEventListener("sessionend",pd),$r.stop()};function Ce(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=ne.autoReset,O=Ee.enabled,V=Ee.autoUpdate,G=Ee.needsUpdate,N=Ee.type;_e(),ne.autoReset=S,Ee.enabled=O,Ee.autoUpdate=V,Ee.needsUpdate=G,Ee.type=N}function ie(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Pe(S){const O=S.target;O.removeEventListener("dispose",Pe),ze(O)}function ze(S){mt(S),X.remove(S)}function mt(S){const O=X.get(S).programs;O!==void 0&&(O.forEach(function(V){K.releaseProgram(V)}),S.isShaderMaterial&&K.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,V,G,N,ce){O===null&&(O=ft);const ye=N.isMesh&&N.matrixWorld.determinant()<0,De=Op(S,O,V,G,N);Y.setMaterial(G,ye);let we=V.index,Ne=1;if(G.wireframe===!0){if(we=k.getWireframeAttribute(V),we===void 0)return;Ne=2}const Be=V.drawRange,Ue=V.attributes.position;let qe=Be.start*Ne,it=(Be.start+Be.count)*Ne;ce!==null&&(qe=Math.max(qe,ce.start*Ne),it=Math.min(it,(ce.start+ce.count)*Ne)),we!==null?(qe=Math.max(qe,0),it=Math.min(it,we.count)):Ue!=null&&(qe=Math.max(qe,0),it=Math.min(it,Ue.count));const xt=it-qe;if(xt<0||xt===1/0)return;Fe.setup(N,G,De,V,we);let gt,dt=Ae;if(we!==null&&(gt=v.get(we),dt=Re,dt.setIndex(gt)),N.isMesh)G.wireframe===!0?(Y.setLineWidth(G.wireframeLinewidth*P()),dt.setMode(y.LINES)):dt.setMode(y.TRIANGLES);else if(N.isLine){let Oe=G.linewidth;Oe===void 0&&(Oe=1),Y.setLineWidth(Oe*P()),N.isLineSegments?dt.setMode(y.LINES):N.isLineLoop?dt.setMode(y.LINE_LOOP):dt.setMode(y.LINE_STRIP)}else N.isPoints?dt.setMode(y.POINTS):N.isSprite&&dt.setMode(y.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))dt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Oe=N._multiDrawStarts,_t=N._multiDrawCounts,Qe=N._multiDrawCount,rn=we?v.get(we).bytesPerElement:1,mo=X.get(G).currentProgram.getUniforms();for(let on=0;on<Qe;on++)mo.setValue(y,"_gl_DrawID",on),dt.render(Oe[on]/rn,_t[on])}else if(N.isInstancedMesh)dt.renderInstances(qe,xt,N.count);else if(V.isInstancedBufferGeometry){const Oe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_t=Math.min(V.instanceCount,Oe);dt.renderInstances(qe,xt,_t)}else dt.render(qe,xt)};function ot(S,O,V){S.transparent===!0&&S.side===ir&&S.forceSinglePass===!1?(S.side=Kt,S.needsUpdate=!0,ss(S,O,V),S.side=Br,S.needsUpdate=!0,ss(S,O,V),S.side=ir):ss(S,O,V)}this.compile=function(S,O,V=null){V===null&&(V=S),h=de.get(V),h.init(O),E.push(h),V.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),S!==V&&S.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const G=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ce=N.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){const De=ce[ye];ot(De,V,N),G.add(De)}else ot(ce,V,N),G.add(ce)}),h=E.pop(),G},this.compileAsync=function(S,O,V=null){const G=this.compile(S,O,V);return new Promise(N=>{function ce(){if(G.forEach(function(ye){X.get(ye).currentProgram.isReady()&&G.delete(ye)}),G.size===0){N(S);return}setTimeout(ce,10)}j.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let xn=null;function Xn(S){xn&&xn(S)}function hd(){$r.stop()}function pd(){$r.start()}const $r=new Ep;$r.setAnimationLoop(Xn),typeof self<"u"&&$r.setContext(self),this.setAnimationLoop=function(S){xn=S,ae.setAnimationLoop(S),S===null?$r.stop():$r.start()},ae.addEventListener("sessionstart",hd),ae.addEventListener("sessionend",pd),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,O,U),h=de.get(S,E.length),h.init(O),E.push(h),Le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(Le),Te=this.localClippingEnabled,fe=Se.init(this.clippingPlanes,Te),m=xe.get(S,T.length),m.init(),T.push(m),ae.enabled===!0&&ae.isPresenting===!0){const ce=b.xr.getDepthSensingMesh();ce!==null&&Ea(ce,O,-1/0,b.sortObjects)}Ea(S,O,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ue,he),C=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,C&&se.addToRenderList(m,S),this.info.render.frame++,fe===!0&&Se.beginShadows();const V=h.state.shadowsArray;Ee.render(V,S,O),fe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(h.setupLights(),O.isArrayCamera){const ce=O.cameras;if(N.length>0)for(let ye=0,De=ce.length;ye<De;ye++){const we=ce[ye];gd(G,N,S,we)}C&&se.render(S);for(let ye=0,De=ce.length;ye<De;ye++){const we=ce[ye];md(m,S,we,we.viewport)}}else N.length>0&&gd(G,N,S,O),C&&se.render(S),md(m,S,O);U!==null&&R===0&&(W.updateMultisampleRenderTarget(U),W.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(b,S,O),Fe.resetDefaultState(),w=-1,M=null,E.pop(),E.length>0?(h=E[E.length-1],fe===!0&&Se.setGlobalState(b.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ea(S,O,V,G){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ee.intersectsSprite(S)){G&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Le);const ye=$.update(S),De=S.material;De.visible&&m.push(S,ye,De,V,Ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ee.intersectsObject(S))){const ye=$.update(S),De=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ie.copy(ye.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(Le)),Array.isArray(De)){const we=ye.groups;for(let Ne=0,Be=we.length;Ne<Be;Ne++){const Ue=we[Ne],qe=De[Ue.materialIndex];qe&&qe.visible&&m.push(S,ye,qe,V,Ie.z,Ue)}}else De.visible&&m.push(S,ye,De,V,Ie.z,null)}}const ce=S.children;for(let ye=0,De=ce.length;ye<De;ye++)Ea(ce[ye],O,V,G)}function md(S,O,V,G){const N=S.opaque,ce=S.transmissive,ye=S.transparent;h.setupLightsView(V),fe===!0&&Se.setGlobalState(b.clippingPlanes,V),G&&Y.viewport(L.copy(G)),N.length>0&&is(N,O,V),ce.length>0&&is(ce,O,V),ye.length>0&&is(ye,O,V),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function gd(S,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new fo(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?es:Gn,minFilter:no,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ce=h.state.transmissionRenderTarget[G.id],ye=G.viewport||L;ce.setSize(ye.z*b.transmissionResolutionScale,ye.w*b.transmissionResolutionScale);const De=b.getRenderTarget(),we=b.getActiveCubeFace(),Ne=b.getActiveMipmapLevel();b.setRenderTarget(ce),b.getClearColor(te),re=b.getClearAlpha(),re<1&&b.setClearColor(16777215,.5),b.clear(),C&&se.render(V);const Be=b.toneMapping;b.toneMapping=Ir;const Ue=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),fe===!0&&Se.setGlobalState(b.clippingPlanes,G),is(S,V,G),W.updateMultisampleRenderTarget(ce),W.updateRenderTargetMipmap(ce),j.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let it=0,xt=O.length;it<xt;it++){const gt=O[it],dt=gt.object,Oe=gt.geometry,_t=gt.material,Qe=gt.group;if(_t.side===ir&&dt.layers.test(G.layers)){const rn=_t.side;_t.side=Kt,_t.needsUpdate=!0,vd(dt,V,G,Oe,_t,Qe),_t.side=rn,_t.needsUpdate=!0,qe=!0}}qe===!0&&(W.updateMultisampleRenderTarget(ce),W.updateRenderTargetMipmap(ce))}b.setRenderTarget(De,we,Ne),b.setClearColor(te,re),Ue!==void 0&&(G.viewport=Ue),b.toneMapping=Be}function is(S,O,V){const G=O.isScene===!0?O.overrideMaterial:null;for(let N=0,ce=S.length;N<ce;N++){const ye=S[N],De=ye.object,we=ye.geometry,Ne=ye.group;let Be=ye.material;Be.allowOverride===!0&&G!==null&&(Be=G),De.layers.test(V.layers)&&vd(De,O,V,we,Be,Ne)}}function vd(S,O,V,G,N,ce){S.onBeforeRender(b,O,V,G,N,ce),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(b,O,V,G,S,ce),N.transparent===!0&&N.side===ir&&N.forceSinglePass===!1?(N.side=Kt,N.needsUpdate=!0,b.renderBufferDirect(V,O,G,N,S,ce),N.side=Br,N.needsUpdate=!0,b.renderBufferDirect(V,O,G,N,S,ce),N.side=ir):b.renderBufferDirect(V,O,G,N,S,ce),S.onAfterRender(b,O,V,G,N,ce)}function ss(S,O,V){O.isScene!==!0&&(O=ft);const G=X.get(S),N=h.state.lights,ce=h.state.shadowsArray,ye=N.state.version,De=K.getParameters(S,N.state,ce,O,V),we=K.getProgramCacheKey(De);let Ne=G.programs;G.environment=S.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(S.isMeshStandardMaterial?x:ge).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",Pe),Ne=new Map,G.programs=Ne);let Be=Ne.get(we);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===ye)return _d(S,De),Be}else De.uniforms=K.getUniforms(S),S.onBeforeCompile(De,b),Be=K.acquireProgram(De,we),Ne.set(we,Be),G.uniforms=De.uniforms;const Ue=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=Se.uniform),_d(S,De),G.needsLights=Bp(S),G.lightsStateVersion=ye,G.needsLights&&(Ue.ambientLightColor.value=N.state.ambient,Ue.lightProbe.value=N.state.probe,Ue.directionalLights.value=N.state.directional,Ue.directionalLightShadows.value=N.state.directionalShadow,Ue.spotLights.value=N.state.spot,Ue.spotLightShadows.value=N.state.spotShadow,Ue.rectAreaLights.value=N.state.rectArea,Ue.ltc_1.value=N.state.rectAreaLTC1,Ue.ltc_2.value=N.state.rectAreaLTC2,Ue.pointLights.value=N.state.point,Ue.pointLightShadows.value=N.state.pointShadow,Ue.hemisphereLights.value=N.state.hemi,Ue.directionalShadowMap.value=N.state.directionalShadowMap,Ue.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ue.spotShadowMap.value=N.state.spotShadowMap,Ue.spotLightMatrix.value=N.state.spotLightMatrix,Ue.spotLightMap.value=N.state.spotLightMap,Ue.pointShadowMap.value=N.state.pointShadowMap,Ue.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function bd(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Ys.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function _d(S,O){const V=X.get(S);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Op(S,O,V,G,N){O.isScene!==!0&&(O=ft),W.resetTextureUnits();const ce=O.fog,ye=G.isMeshStandardMaterial?O.environment:null,De=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ei,we=(G.isMeshStandardMaterial?x:ge).get(G.envMap||ye),Ne=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ue=!!V.morphAttributes.position,qe=!!V.morphAttributes.normal,it=!!V.morphAttributes.color;let xt=Ir;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(xt=b.toneMapping);const gt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dt=gt!==void 0?gt.length:0,Oe=X.get(G),_t=h.state.lights;if(fe===!0&&(Te===!0||S!==M)){const Wt=S===M&&G.id===w;Se.setState(G,S,Wt)}let Qe=!1;G.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==_t.state.version||Oe.outputColorSpace!==De||N.isBatchedMesh&&Oe.batching===!1||!N.isBatchedMesh&&Oe.batching===!0||N.isBatchedMesh&&Oe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Oe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Oe.instancing===!1||!N.isInstancedMesh&&Oe.instancing===!0||N.isSkinnedMesh&&Oe.skinning===!1||!N.isSkinnedMesh&&Oe.skinning===!0||N.isInstancedMesh&&Oe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Oe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Oe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Oe.instancingMorph===!1&&N.morphTexture!==null||Oe.envMap!==we||G.fog===!0&&Oe.fog!==ce||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Se.numPlanes||Oe.numIntersection!==Se.numIntersection)||Oe.vertexAlphas!==Ne||Oe.vertexTangents!==Be||Oe.morphTargets!==Ue||Oe.morphNormals!==qe||Oe.morphColors!==it||Oe.toneMapping!==xt||Oe.morphTargetsCount!==dt)&&(Qe=!0):(Qe=!0,Oe.__version=G.version);let rn=Oe.currentProgram;Qe===!0&&(rn=ss(G,O,N));let mo=!1,on=!1,oi=!1;const vt=rn.getUniforms(),gn=Oe.uniforms;if(Y.useProgram(rn.program)&&(mo=!0,on=!0,oi=!0),G.id!==w&&(w=G.id,on=!0),mo||M!==S){Y.buffers.depth.getReversed()?(me.copy(S.projectionMatrix),sb(me),ab(me),vt.setValue(y,"projectionMatrix",me)):vt.setValue(y,"projectionMatrix",S.projectionMatrix),vt.setValue(y,"viewMatrix",S.matrixWorldInverse);const Jt=vt.map.cameraPosition;Jt!==void 0&&Jt.setValue(y,Ye.setFromMatrixPosition(S.matrixWorld)),J.logarithmicDepthBuffer&&vt.setValue(y,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(y,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,on=!0,oi=!0)}if(N.isSkinnedMesh){vt.setOptional(y,N,"bindMatrix"),vt.setOptional(y,N,"bindMatrixInverse");const Wt=N.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),vt.setValue(y,"boneTexture",Wt.boneTexture,W))}N.isBatchedMesh&&(vt.setOptional(y,N,"batchingTexture"),vt.setValue(y,"batchingTexture",N._matricesTexture,W),vt.setOptional(y,N,"batchingIdTexture"),vt.setValue(y,"batchingIdTexture",N._indirectTexture,W),vt.setOptional(y,N,"batchingColorTexture"),N._colorsTexture!==null&&vt.setValue(y,"batchingColorTexture",N._colorsTexture,W));const vn=V.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Me.update(N,V,rn),(on||Oe.receiveShadow!==N.receiveShadow)&&(Oe.receiveShadow=N.receiveShadow,vt.setValue(y,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(gn.envMap.value=we,gn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(gn.envMapIntensity.value=O.environmentIntensity),on&&(vt.setValue(y,"toneMappingExposure",b.toneMappingExposure),Oe.needsLights&&Np(gn,oi),ce&&G.fog===!0&&z.refreshFogUniforms(gn,ce),z.refreshMaterialUniforms(gn,G,F,Z,h.state.transmissionRenderTarget[S.id]),Ys.upload(y,bd(Oe),gn,W)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ys.upload(y,bd(Oe),gn,W),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(y,"center",N.center),vt.setValue(y,"modelViewMatrix",N.modelViewMatrix),vt.setValue(y,"normalMatrix",N.normalMatrix),vt.setValue(y,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Wt=G.uniformsGroups;for(let Jt=0,wa=Wt.length;Jt<wa;Jt++){const Hr=Wt[Jt];I.update(Hr,rn),I.bind(Hr,rn)}}return rn}function Np(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Bp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,O,V){const G=X.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(S.texture).__webglTexture=O,X.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const V=X.get(S);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};const Fp=y.createFramebuffer();this.setRenderTarget=function(S,O=0,V=0){U=S,D=O,R=V;let G=!0,N=null,ce=!1,ye=!1;if(S){const we=X.get(S);if(we.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(y.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)W.setupRenderTarget(S);else if(we.__hasExternalTextures)W.rebindTextures(S,X.get(S.texture).__webglTexture,X.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ue=S.depthTexture;if(we.__boundDepthTexture!==Ue){if(Ue!==null&&X.has(Ue)&&(S.width!==Ue.image.width||S.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(S)}}const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const Be=X.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?N=Be[O][V]:N=Be[O],ce=!0):S.samples>0&&W.useMultisampledRTT(S)===!1?N=X.get(S).__webglMultisampledFramebuffer:Array.isArray(Be)?N=Be[V]:N=Be,L.copy(S.viewport),Q.copy(S.scissor),H=S.scissorTest}else L.copy(be).multiplyScalar(F).floor(),Q.copy(ke).multiplyScalar(F).floor(),H=Ze;if(V!==0&&(N=Fp),Y.bindFramebuffer(y.FRAMEBUFFER,N)&&G&&Y.drawBuffers(S,N),Y.viewport(L),Y.scissor(Q),Y.setScissorTest(H),ce){const we=X.get(S.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,V)}else if(ye){const we=X.get(S.texture),Ne=O;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,we.__webglTexture,V,Ne)}else if(S!==null&&V!==0){const we=X.get(S.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,we.__webglTexture,V)}w=-1},this.readRenderTargetPixels=function(S,O,V,G,N,ce,ye,De=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Y.bindFramebuffer(y.FRAMEBUFFER,we);try{const Ne=S.textures[De],Be=Ne.format,Ue=Ne.type;if(!J.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-G&&V>=0&&V<=S.height-N&&(S.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+De),y.readPixels(O,V,G,N,pe.convert(Be),pe.convert(Ue),ce))}finally{const Ne=U!==null?X.get(U).__webglFramebuffer:null;Y.bindFramebuffer(y.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,O,V,G,N,ce,ye,De=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we)if(O>=0&&O<=S.width-G&&V>=0&&V<=S.height-N){Y.bindFramebuffer(y.FRAMEBUFFER,we);const Ne=S.textures[De],Be=Ne.format,Ue=Ne.type;if(!J.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,qe),y.bufferData(y.PIXEL_PACK_BUFFER,ce.byteLength,y.STREAM_READ),S.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+De),y.readPixels(O,V,G,N,pe.convert(Be),pe.convert(Ue),0);const it=U!==null?X.get(U).__webglFramebuffer:null;Y.bindFramebuffer(y.FRAMEBUFFER,it);const xt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await ib(y,xt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,qe),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ce),y.deleteBuffer(qe),y.deleteSync(xt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,V=0){const G=Math.pow(2,-V),N=Math.floor(S.image.width*G),ce=Math.floor(S.image.height*G),ye=O!==null?O.x:0,De=O!==null?O.y:0;W.setTexture2D(S,0),y.copyTexSubImage2D(y.TEXTURE_2D,V,0,0,ye,De,N,ce),Y.unbindTexture()};const zp=y.createFramebuffer(),$p=y.createFramebuffer();this.copyTextureToTexture=function(S,O,V=null,G=null,N=0,ce=null){ce===null&&(N!==0?(Yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=N,N=0):ce=0);let ye,De,we,Ne,Be,Ue,qe,it,xt;const gt=S.isCompressedTexture?S.mipmaps[ce]:S.image;if(V!==null)ye=V.max.x-V.min.x,De=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,Ne=V.min.x,Be=V.min.y,Ue=V.isBox3?V.min.z:0;else{const vn=Math.pow(2,-N);ye=Math.floor(gt.width*vn),De=Math.floor(gt.height*vn),S.isDataArrayTexture?we=gt.depth:S.isData3DTexture?we=Math.floor(gt.depth*vn):we=1,Ne=0,Be=0,Ue=0}G!==null?(qe=G.x,it=G.y,xt=G.z):(qe=0,it=0,xt=0);const dt=pe.convert(O.format),Oe=pe.convert(O.type);let _t;O.isData3DTexture?(W.setTexture3D(O,0),_t=y.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(W.setTexture2DArray(O,0),_t=y.TEXTURE_2D_ARRAY):(W.setTexture2D(O,0),_t=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,O.unpackAlignment);const Qe=y.getParameter(y.UNPACK_ROW_LENGTH),rn=y.getParameter(y.UNPACK_IMAGE_HEIGHT),mo=y.getParameter(y.UNPACK_SKIP_PIXELS),on=y.getParameter(y.UNPACK_SKIP_ROWS),oi=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,gt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,gt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ne),y.pixelStorei(y.UNPACK_SKIP_ROWS,Be),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ue);const vt=S.isDataArrayTexture||S.isData3DTexture,gn=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const vn=X.get(S),Wt=X.get(O),Jt=X.get(vn.__renderTarget),wa=X.get(Wt.__renderTarget);Y.bindFramebuffer(y.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Y.bindFramebuffer(y.DRAW_FRAMEBUFFER,wa.__webglFramebuffer);for(let Hr=0;Hr<we;Hr++)vt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,X.get(S).__webglTexture,N,Ue+Hr),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,X.get(O).__webglTexture,ce,xt+Hr)),y.blitFramebuffer(Ne,Be,ye,De,qe,it,ye,De,y.DEPTH_BUFFER_BIT,y.NEAREST);Y.bindFramebuffer(y.READ_FRAMEBUFFER,null),Y.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||X.has(S)){const vn=X.get(S),Wt=X.get(O);Y.bindFramebuffer(y.READ_FRAMEBUFFER,zp),Y.bindFramebuffer(y.DRAW_FRAMEBUFFER,$p);for(let Jt=0;Jt<we;Jt++)vt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,vn.__webglTexture,N,Ue+Jt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,vn.__webglTexture,N),gn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Wt.__webglTexture,ce,xt+Jt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Wt.__webglTexture,ce),N!==0?y.blitFramebuffer(Ne,Be,ye,De,qe,it,ye,De,y.COLOR_BUFFER_BIT,y.NEAREST):gn?y.copyTexSubImage3D(_t,ce,qe,it,xt+Jt,Ne,Be,ye,De):y.copyTexSubImage2D(_t,ce,qe,it,Ne,Be,ye,De);Y.bindFramebuffer(y.READ_FRAMEBUFFER,null),Y.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else gn?S.isDataTexture||S.isData3DTexture?y.texSubImage3D(_t,ce,qe,it,xt,ye,De,we,dt,Oe,gt.data):O.isCompressedArrayTexture?y.compressedTexSubImage3D(_t,ce,qe,it,xt,ye,De,we,dt,gt.data):y.texSubImage3D(_t,ce,qe,it,xt,ye,De,we,dt,Oe,gt):S.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ce,qe,it,ye,De,dt,Oe,gt.data):S.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ce,qe,it,gt.width,gt.height,dt,gt.data):y.texSubImage2D(y.TEXTURE_2D,ce,qe,it,ye,De,dt,Oe,gt);y.pixelStorei(y.UNPACK_ROW_LENGTH,Qe),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,rn),y.pixelStorei(y.UNPACK_SKIP_PIXELS,mo),y.pixelStorei(y.UNPACK_SKIP_ROWS,on),y.pixelStorei(y.UNPACK_SKIP_IMAGES,oi),ce===0&&O.generateMipmaps&&y.generateMipmap(_t),Y.unbindTexture()},this.copyTextureToTexture3D=function(S,O,V=null,G=null,N=0){return Yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,V,G,N)},this.initRenderTarget=function(S){X.get(S).__webglFramebuffer===void 0&&W.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?W.setTextureCube(S,0):S.isData3DTexture?W.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?W.setTexture2DArray(S,0):W.setTexture2D(S,0),Y.unbindTexture()},this.resetState=function(){D=0,R=0,U=null,Y.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const AM=16,RM=12,Do=1024,PM=400,ff=.2,DM=.7,hf=.05,LM=.05,kM="#01030a",IM=24,UM=()=>({createSky:()=>{const e=new Ur(IM,AM,RM),t=document.createElement("canvas");t.width=Do,t.height=Do;const r=t.getContext("2d");if(r){r.fillStyle=kM,r.fillRect(0,0,Do,Do);for(let a=0;a<PM;a++){const l=Math.random()*Do,c=Math.random()*Do,d=Math.random()*(DM-ff)+ff;let u="white";const f=Math.random();f<hf?u="#00ff00":f<hf+LM&&(u="#ff3333"),r.beginPath(),r.arc(l,c,d,0,Math.PI*2),r.fillStyle=u,r.globalAlpha=Math.random()*.5+.5,r.fill()}r.globalAlpha=1}const o=new ni(t);o.wrapS=lo,o.wrapT=lo;const i=new xa({map:o,side:Kt}),s=new St(e,i);return s.position.set(0,0,0),s}}),Mc=50,Ai=1,OM=[0,.5,0],er=1.5,kt=[0,.75,1+1.5/2+1.2],NM=.5,bl={x:.2,y:1.8,z:.3},BM=1.1,Ec=1.25,FM=.3,zM={x:2,y:1.9+.3,z:1.4},$M="#228B22",HM=.1,VM=.8,GM=()=>({createGround:()=>{const e=new os(Mc,Mc),t=new so({color:$M,metalness:HM,roughness:VM}),r=new St(e,t);return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,r}}),WM="/scene/assets/box-DlOjVJXT.png",_n=256,Lo=12,XM=()=>({createCube:()=>{const r=[];for(let s=0;s<6;s++){const a=document.createElement("canvas");a.width=_n,a.height=_n;const l=a.getContext("2d");if(l){const c=new window.Image;c.onload=()=>{l.drawImage(c,0,0,_n,_n),l.fillStyle="#000",l.fillRect(0,0,_n,Lo),l.fillRect(0,_n-Lo,_n,Lo),l.fillRect(0,0,Lo,_n),l.fillRect(_n-Lo,0,Lo,_n),l.save(),l.strokeStyle="#000",l.lineWidth=7,l.beginPath();const d=Math.random()*(_n-80)+40,u=Math.random()*(_n-80)+40;l.moveTo(d,u);for(let p=0;p<4;p++){const g=d+Math.random()*100-50,_=u+Math.random()*100-50,m=d+Math.random()*120-60,h=u+Math.random()*120-60;l.bezierCurveTo(g,_,g,_,m,h)}l.stroke(),l.restore();const f=new ni(a);f.wrapS=pn,f.wrapT=pn,r[s]=new so({metalness:.2,roughness:.6,map:f})},c.src=WM}}const o=new cr(Ai,Ai,Ai),i=new St(o,r);return i.position.set(...OM),i.castShadow=!0,i.receiveShadow=!0,i},moveCube:(r,o,i)=>{if(!r)return;const s=1,a=r.position.clone();switch(o){case"left":a.x-=s;break;case"right":a.x+=s;break;case"forward":a.z-=s;break;case"back":a.z+=s;break}if(!i){r.position.copy(a);return}const{groundSize:l,cubeSize:c,sphereCenter:d,minDistance:u,maxDistance:f}=i,p=l/2-c/2;a.x=Math.max(-p,Math.min(p,a.x)),a.z=Math.max(-p,Math.min(p,a.z));const g=a.x-d.x,_=a.z-d.z,m=Math.sqrt(g*g+_*_);m<u||m>f||r.position.copy(a)},teleportCube:(r,o)=>{if(!r)return;if(!o){r.position.x=(Math.random()-.5)*20,r.position.z=(Math.random()-.5)*20;return}const{groundSize:i,cubeSize:s,sphereCenter:a,minDistance:l,maxDistance:c}=o,d=i/2-s/2;let u=0;for(;u<100;){const f=Math.random()*(d*2)-d,p=Math.random()*(d*2)-d,g=f-a.x,_=p-a.z,m=Math.sqrt(g*g+_*_);if(m>=l&&m<=c){r.position.x=f,r.position.z=p;return}u++}}}),jM=()=>{let n=null,e=null,t=null,r=null,o=null,i=!1;const s=()=>{const p=new Ur(NM,26,90,4),g=256,_=document.createElement("canvas");_.width=g,_.height=g;const m=_.getContext("2d");if(m){const L=m.createLinearGradient(g/2,0,g/2,g);L.addColorStop(0,"#000000"),L.addColorStop(.4,"#000000"),L.addColorStop(.45,"#ff0000"),L.addColorStop(.55,"#ff0000"),L.addColorStop(.6,"#000000"),L.addColorStop(1,"#000000"),m.fillStyle=L,m.fillRect(0,0,g,g)}const h=new ni(_);h.wrapS=pn,h.wrapT=pn;const T=new so({map:h,metalness:.1,roughness:.3});n=new St(p,T),n.position.set(2,1.9,1.4),n.scale.set(bl.x,bl.y,bl.z),n.castShadow=!1;const E=new Ur(BM,15,15),b=256,A=document.createElement("canvas");A.width=b,A.height=b;const D=A.getContext("2d");if(D){const L=D.createRadialGradient(b/2,b/2,b/8,b/2,b/2,b/2);L.addColorStop(0,"#0000FF"),L.addColorStop(1,"#ff0000"),D.fillStyle=L,D.fillRect(0,0,b,b)}const R=new ni(A);R.wrapS=pn,R.wrapT=pn;const U=new so({map:R,transparent:!0,opacity:.6,roughness:.3,metalness:.1});e=new St(E,U),e.position.copy(n.position),e.castShadow=!0;const w=new Ur(Ec,20,20),M=new xa({visible:!1});t=new St(w,M),t.position.copy(n.position),t.position.y+=FM,r=new Fb(16777215,10,40),r.castShadow=!0},a=()=>{!o||!n||!e||!t||(o.add(n),o.add(e),o.add(t))},l=()=>{!o||!r||o.add(r)},c=()=>{!o||!r||o.remove(r)};return{init:p=>{o=p,n||s(),l(),a(),i=!0},toggle:()=>{o&&(i?(c(),i=!1):(l(),i=!0))},syncPosition:p=>{if(!t||!r)return;const g=t.position.clone(),_=p.clone().sub(g).normalize(),m=g.clone().add(_.multiplyScalar(Ec));r.position.copy(m)}}},pf={type:"change"},fd={type:"start"},Rp={type:"end"},Us=new hp,mf=new Tr,YM=Math.cos(70*rb.DEG2RAD),Tt=new B,en=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_l=1e-6;class qM extends Gb{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xo.ROTATE,MIDDLE:Xo.DOLLY,RIGHT:Xo.PAN},this.touches={ONE:No.ROTATE,TWO:No.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new uo,this._lastTargetPosition=new B,this._quat=new uo().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fu,this._sphericalDelta=new Fu,this._scale=1,this._panOffset=new B,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new B,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ZM.bind(this),this._onPointerDown=KM.bind(this),this._onPointerUp=JM.bind(this),this._onContextMenu=iE.bind(this),this._onMouseWheel=tE.bind(this),this._onKeyDown=nE.bind(this),this._onTouchStart=rE.bind(this),this._onTouchMove=oE.bind(this),this._onMouseDown=QM.bind(this),this._onMouseMove=eE.bind(this),this._interceptControlDown=sE.bind(this),this._interceptControlUp=aE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pf),this.update(),this.state=lt.NONE}update(e=null){const t=this.object.position;Tt.copy(t).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=en:r>Math.PI&&(r-=en),o<-Math.PI?o+=en:o>Math.PI&&(o-=en),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=s!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=Tt.length();s=this._clampDistance(a*this._scale);const l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),i=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),s=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Us.origin.copy(this.object.position),Us.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Us.direction))<YM?this.object.lookAt(this.target):(mf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Us.intersectPlane(mf,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>_l||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_l||this._lastTargetPosition.distanceToSquared(this.target)>_l?(this.dispatchEvent(pf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Tt.setFromMatrixColumn(t,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,t){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(t,1):(Tt.setFromMatrixColumn(t,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Tt.copy(o).sub(this.target);let i=Tt.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/r.clientHeight,this.object.matrix),this._panUp(2*t*i/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,i=t-r.top,s=r.width,a=r.height;this._mouse.x=o/s*2-1,this._mouse.y=-(i/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,i=Math.sqrt(r*r+o*o);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),i=.5*(e.pageY+r.y);this._rotateEnd.set(o,i)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,i=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,i),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function KM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ZM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function JM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rp),this.state=lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function QM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=lt.DOLLY;break;case Xo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}break;case Xo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(fd)}function eE(n){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function tE(n){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(n.preventDefault(),this.dispatchEvent(fd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Rp))}function nE(n){this.enabled!==!1&&this._handleKeyDown(n)}function rE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case No.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=lt.TOUCH_ROTATE;break;case No.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case No.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=lt.TOUCH_DOLLY_PAN;break;case No.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(fd)}function oE(n){switch(this._trackPointer(n),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=lt.NONE}}function iE(n){this.enabled!==!1&&n.preventDefault()}function sE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const lE=()=>{let n=null,e=null,t=null;return{create:o=>(n=new CM({canvas:o,antialias:!0}),n.setClearColor("#e0e7ef"),n.setSize(o.clientWidth,o.clientHeight,!1),n.shadowMap.enabled=!0,n.shadowMap.type=Zh,n.toneMapping=Qh,n.toneMappingExposure=1.2,n.outputColorSpace=cn,e=new un(60,o.clientWidth/o.clientHeight,.1,100),e.position.set(-3.5,3.03,-2.5),e.lookAt(0,0,0),t=new qM(e,n.domElement),t.enableDamping=!0,t.dampingFactor=.05,t.enableZoom=!0,t.enablePan=!0,t.minPolarAngle=.3,t.maxPolarAngle=Math.PI/2,t.target.set(0,1,0),{renderer:n,camera:e,controls:t})}},cE=()=>{let n=null,e=null,t=!1,r=null;const o=l=>{r=l},i=()=>{r&&(n||e||(n=new Hb(16777215,.6),e=new $b(16777215,1),e.position.set(5,5,5),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,r.add(n),r.add(e)))},s=()=>{r&&(n&&(r.remove(n),n.dispose(),n=null),e&&(r.remove(e),e.dispose(),e=null))};return{init:o,toggle:()=>{r&&(t?(s(),t=!1):(i(),t=!0))}}},dE=()=>{const t=document.createElement("canvas");t.width=256,t.height=512;const r=t.getContext("2d");r.fillStyle="#b98c5a",r.fillRect(0,0,256,512);const o=4;Array.from({length:o}).forEach((s,a)=>{const l=a*256/o,c=256/o-6+Math.random()*8;r.fillStyle=a%2===0?"#cfa66a":"#a97c50",r.fillRect(l,0,c,512),a>0&&(r.strokeStyle="#7a5a36",r.lineWidth=3,r.beginPath(),r.moveTo(l,0),r.lineTo(l,512),r.stroke())}),Array.from({length:12}).forEach((s,a)=>{r.strokeStyle="rgba(120, 80, 40, 0.18)",r.lineWidth=2+Math.random()*2,r.beginPath();let l=Math.random()*512;r.moveTo(0,l);for(let c=0;c<256;c+=16)l+=Math.sin(c/32+a)*2+Math.random()*2-1,r.lineTo(c,l);r.stroke()});const i=new ni(t);return i.wrapS=lo,i.wrapT=lo,i.repeat.set(1,1),i},uE=()=>{const e=document.createElement("canvas");e.width=32,e.height=32;const t=e.getContext("2d");return t.fillStyle="#7a4a1a",t.fillRect(0,0,32,32),new ni(e)},fE=()=>({createDoor:()=>{const e=new cr(er,er*2,.2),t=new so({color:16777215,map:dE()}),r=new St(e,t);r.position.set(...kt),r.castShadow=!0,r.receiveShadow=!0;const o=new so({color:8014362,map:uE()}),i=.15,s=.25,a=er*2+i*2,l=er+i*2,c=new cr(l,i,s),d=new St(c,o);d.position.set(kt[0],kt[1]+er+i/2,kt[2]);const u=new St(c,o);u.position.set(kt[0],kt[1]-er-i/2,kt[2]);const f=new cr(i,a,s),p=new St(f,o);p.position.set(kt[0]-(er/2+i/2),kt[1],kt[2]);const g=new St(f,o);g.position.set(kt[0]+(er/2+i/2),kt[1],kt[2]);const _=new gi;_.add(r),_.add(d),_.add(u),_.add(p),_.add(g);const m=.09,h=new so({color:12632256,metalness:.95,roughness:.25}),T=kt[1]+.3,E=kt[0]-er/2+m*1.2,b=new St(new Ur(m,24,24),h);b.position.set(E,T,kt[2]+.15);const A=new St(new Ur(m,24,24),h);return A.position.set(E,T,kt[2]-.15),_.add(b),_.add(A),_}}),hE=()=>{const n={renderer:null,camera:null,scene:null,controls:null,sky:null,ground:null,cube:null,door:null},{init:e,toggle:t}=cE(),{createCube:r,moveCube:o,teleportCube:i}=XM(),s=jM(),{createSky:a}=UM(),{createGround:l}=GM(),{createDoor:c}=fE(),d={groundSize:Mc,cubeSize:Ai,sphereCenter:zM,minDistance:Ec+Ai/2+.2,maxDistance:5};return{mount:m=>{const{create:h}=lE(),T=h(m);n.renderer=T.renderer,n.camera=T.camera,n.controls=T.controls,n.scene=new Lb;const E=a();n.scene.add(E),n.sky=E;const b=l();n.scene.add(b),n.ground=b,e(n.scene);const A=r();n.scene.add(A),n.cube=A,s.init(n.scene),s.syncPosition(A.position.clone());const D=c();n.scene.add(D),n.door=D;const R=()=>{n.renderer&&n.scene&&n.camera&&n.renderer.render(n.scene,n.camera),requestAnimationFrame(R)};R()},toggleAmbientLight:()=>{t()},toggleEyeLight:()=>{s.toggle()},moveCube:m=>{n.cube&&(o(n.cube,m,d),s.syncPosition(n.cube.position.clone()))},teleportCube:()=>{n.cube&&(i(n.cube,d),s.syncPosition(n.cube.position.clone()))}}};var Ar={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function pE(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pc",e=Um();return"".concat(n).concat(e.replace("v-","").replaceAll("-","_"))}var gf=pt.extend({name:"common"});function Hi(n){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hi(n)}function mE(n){return Lp(n)||gE(n)||Dp(n)||Pp()}function gE(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function hi(n,e){return Lp(n)||vE(n,e)||Dp(n,e)||Pp()}function Pp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dp(n,e){if(n){if(typeof n=="string")return vf(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?vf(n,e):void 0}}function vf(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function vE(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function Lp(n){if(Array.isArray(n))return n}function bf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Ke(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?bf(Object(t),!0).forEach(function(r){bi(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):bf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function bi(n,e,t){return(e=bE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function bE(n){var e=_E(n,"string");return Hi(e)=="symbol"?e:e+""}function _E(n,e){if(Hi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Ma={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){It.off("theme:change",this._loadCoreStyles),e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e,t){var r=this;It.off("theme:change",this._themeScopedListener),e?(this._loadScopedThemeStyles(e),this._themeScopedListener=function(){return r._loadScopedThemeStyles(e)},this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,uid:void 0,$attrSelector:void 0,beforeCreate:function(){var e,t,r,o,i,s,a,l,c,d,u,f=(e=this.pt)===null||e===void 0?void 0:e._usept,p=f?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,g=f?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(o=g||p)===null||o===void 0||(o=o.hooks)===null||o===void 0||(i=o.onBeforeCreate)===null||i===void 0||i.call(o);var _=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,m=_?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,h=_?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(d=h||m)===null||d===void 0||(d=d[this.$.type.name])===null||d===void 0||(d=d.hooks)===null||d===void 0||(u=d.onBeforeCreate)===null||u===void 0||u.call(d),this.$attrSelector=pE(),this.uid=this.$attrs.id||this.$attrSelector.replace("pc","pv_id_")},created:function(){this._hook("onCreated")},beforeMount:function(){var e;this.rootEl=na(Qi(this.$el)?this.$el:(e=this.$el)===null||e===void 0?void 0:e.parentElement,"[".concat(this.$attrSelector,"]")),this.rootEl&&(this.rootEl.$pc=Ke({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t?.(),r?.()}},_mergeProps:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return Zc(e)?e.apply(void 0,r):Dt.apply(void 0,r)},_load:function(){Ar.isStyleNameLoaded("base")||(pt.loadCSS(this.$styleOptions),this._loadGlobalStyles(),Ar.setLoadedStyleName("base")),this._loadThemeStyles()},_loadStyles:function(){this._load(),this._themeChangeListener(this._load)},_loadCoreStyles:function(){var e,t;!Ar.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name&&(gf.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),Ar.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);bt(e)&&pt.load(e,Ke({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,t;if(!(this.isUnstyled||this.$theme==="none")){if(!at.isStyleNameLoaded("common")){var r,o,i=((r=this.$style)===null||r===void 0||(o=r.getCommonTheme)===null||o===void 0?void 0:o.call(r))||{},s=i.primitive,a=i.semantic,l=i.global,c=i.style;pt.load(s?.css,Ke({name:"primitive-variables"},this.$styleOptions)),pt.load(a?.css,Ke({name:"semantic-variables"},this.$styleOptions)),pt.load(l?.css,Ke({name:"global-variables"},this.$styleOptions)),pt.loadStyle(Ke({name:"global-style"},this.$styleOptions),c),at.setLoadedStyleName("common")}if(!at.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name){var d,u,f,p,g=((d=this.$style)===null||d===void 0||(u=d.getComponentTheme)===null||u===void 0?void 0:u.call(d))||{},_=g.css,m=g.style;(f=this.$style)===null||f===void 0||f.load(_,Ke({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(p=this.$style)===null||p===void 0||p.loadStyle(Ke({name:"".concat(this.$style.name,"-style")},this.$styleOptions),m),at.setLoadedStyleName(this.$style.name)}if(!at.isStyleNameLoaded("layer-order")){var h,T,E=(h=this.$style)===null||h===void 0||(T=h.getLayerOrderThemeCSS)===null||T===void 0?void 0:T.call(h);pt.load(E,Ke({name:"layer-order",first:!0},this.$styleOptions)),at.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var t,r,o,i=((t=this.$style)===null||t===void 0||(r=t.getPresetTheme)===null||r===void 0?void 0:r.call(t,e,"[".concat(this.$attrSelector,"]")))||{},s=i.css,a=(o=this.$style)===null||o===void 0?void 0:o.load(s,Ke({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Ar.clearLoadedStyleNames(),It.on("theme:change",e)},_removeThemeListeners:function(){It.off("theme:change",this._loadCoreStyles),It.off("theme:change",this._load),It.off("theme:change",this._themeScopedListener)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Jc(e,t,r)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!o[r.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,d=a.mergeProps,u=d===void 0?!1:d,f=i?s?this._useGlobalPT(this._getPTClassValue,r,o):this._useDefaultPT(this._getPTClassValue,r,o):void 0,p=s?void 0:this._getPTSelf(t,this._getPTClassValue,r,Ke(Ke({},o),{},{global:f||{}})),g=this._getPTDatasets(r);return c||!c&&p?u?this._mergeProps(u,f,p,g):Ke(Ke(Ke({},f),p),g):Ke(Ke({},p),g)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return Dt(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o="data-pc-",i=r==="root"&&bt((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&Ke(Ke({},r==="root"&&Ke(Ke(bi({},"".concat(o,"name"),Bn(i?(t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]:this.$.type.name)),i&&bi({},"".concat(o,"extend"),Bn(this.$.type.name))),{},bi({},"".concat(this.$attrSelector),""))),{},bi({},"".concat(o,"section"),Bn(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return mn(e)||Nh(e)?{class:e}:e},_getPT:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,i=function(a){var l,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=o?o(a):a,u=Bn(r),f=Bn(t.$name);return(l=c?u!==f?d?.[u]:void 0:d?.[u])!==null&&l!==void 0?l:d};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e,!0)},_usePT:function(e,t,r,o){var i=function(_){return t(_,r,o)};if(e!=null&&e.hasOwnProperty("_usept")){var s,a=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,d=a.mergeProps,u=d===void 0?!1:d,f=i(e.originalValue),p=i(e.value);return f===void 0&&p===void 0?void 0:mn(p)?p:mn(f)?f:c||!c&&p?u?this._mergeProps(u,f,p):Ke(Ke({},f),p):p}return i(e)},_useGlobalPT:function(e,t,r){return this._usePT(this.globalPT,e,t,r)},_useDefaultPT:function(e,t,r){return this._usePT(this.defaultPT,e,t,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,Ke(Ke({},this.$params),t))},ptmi:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=Dt(this.$_attrsWithoutPT,this.ptm(t,r));return o?.hasOwnProperty("id")&&((e=o.id)!==null&&e!==void 0||(o.id=this.$id)),o},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,Ke({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,Ke(Ke({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var o=this._getOptionValue(this.$style.inlineStyles,e,Ke(Ke({},this.$params),r)),i=this._getOptionValue(gf.inlineStyles,e,Ke(Ke({},this.$params),r));return[i,o]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return hn(r,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return t._getOptionValue(r,t.$name,Ke({},t.$params))||hn(r,Ke({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$id:function(){return this.$attrs.id||this.uid},$inProps:function(){var e,t=Object.keys(((e=this.$.vnode)===null||e===void 0?void 0:e.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(r){var o=hi(r,1),i=o[0];return t?.includes(i)}))},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return Ke(Ke({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e?.$props,state:e?.$data,attrs:e?.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=hi(e,1),r=t[0];return r?.startsWith("pt:")}).reduce(function(e,t){var r=hi(t,2),o=r[0],i=r[1],s=o.split(":"),a=mE(s),l=a.slice(1);return l?.reduce(function(c,d,u,f){return!c[d]&&(c[d]=u===f.length-1?i:{}),c[d]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=hi(e,1),r=t[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,t){var r=hi(t,2),o=r[0],i=r[1];return e[o]=i,e},{})}}},yE=`
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
`,xE={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},SE=pt.extend({name:"progressspinner",style:yE,classes:xE}),ME={name:"BaseProgressSpinner",extends:Ma,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:SE,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},kp={name:"ProgressSpinner",extends:ME,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},EE=["fill","stroke-width"];function wE(n,e,t,r,o,i){return Ct(),Dn("div",Dt({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(Ct(),Dn("svg",Dt({class:n.cx("spin"),viewBox:"25 25 50 50",style:i.svgStyle},n.ptm("spin")),[zt("circle",Dt({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,EE)],16))],16)}kp.render=wE;const TE={style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},CE=ma({__name:"Loader",setup(n){return(e,t)=>(Ct(),Dn("div",TE,[$t($o(kp),{style:{width:"50px",height:"50px"},strokeWidth:"4",animationDuration:"1s","aria-label":"Loading"})]))}});var AE=`
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
`,RE=pt.extend({name:"baseicon",css:AE});function Vi(n){"@babel/helpers - typeof";return Vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vi(n)}function _f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function yf(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?_f(Object(t),!0).forEach(function(r){PE(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_f(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function PE(n,e,t){return(e=DE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function DE(n){var e=LE(n,"string");return Vi(e)=="symbol"?e:e+""}function LE(n,e){if(Vi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var kE={name:"BaseIcon",extends:Ma,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:RE,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=Nr(this.label);return yf(yf({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},Ip={name:"SpinnerIcon",extends:kE};function IE(n,e,t,r,o,i){return Ct(),Dn("svg",Dt({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[zt("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}Ip.render=IE;var UE=`
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
`,OE={root:function(e){var t=e.props,r=e.instance;return["p-badge p-component",{"p-badge-circle":bt(t.value)&&String(t.value).length===1,"p-badge-dot":Nr(t.value)&&!r.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]}},NE=pt.extend({name:"badge",style:UE,classes:OE}),BE={name:"BaseBadge",extends:Ma,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:NE,provide:function(){return{$pcBadge:this,$parentInstance:this}}};function Gi(n){"@babel/helpers - typeof";return Gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gi(n)}function xf(n,e,t){return(e=FE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function FE(n){var e=zE(n,"string");return Gi(e)=="symbol"?e:e+""}function zE(n,e){if(Gi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Up={name:"Badge",extends:BE,inheritAttrs:!1,computed:{dataP:function(){return Ci(xf(xf({circle:this.value!=null&&String(this.value).length===1,empty:this.value==null&&!this.$slots.default},this.severity,this.severity),this.size,this.size))}}},$E=["data-p"];function HE(n,e,t,r,o,i){return Ct(),Dn("span",Dt({class:n.cx("root"),"data-p":i.dataP},n.ptmi("root")),[Uo(n.$slots,"default",{},function(){return[Dh(fa(n.value),1)]})],16,$E)}Up.render=HE;function Wi(n){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wi(n)}function Sf(n,e){return XE(n)||WE(n,e)||GE(n,e)||VE()}function VE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GE(n,e){if(n){if(typeof n=="string")return Mf(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Mf(n,e):void 0}}function Mf(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function WE(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(l=(r=i.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function XE(n){if(Array.isArray(n))return n}function Ef(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Je(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ef(Object(t),!0).forEach(function(r){wc(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ef(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function wc(n,e,t){return(e=jE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function jE(n){var e=YE(n,"string");return Wi(e)=="symbol"?e:e+""}function YE(n,e){if(Wi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Ge={_getMeta:function(){return[hr(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],hn(hr(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,t){var r,o,i;return(r=(e==null||(o=e.instance)===null||o===void 0?void 0:o.$primevue)||(t==null||(i=t.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:Jc,_getPTValue:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var T=Ge._getOptionValue.apply(Ge,arguments);return mn(T)||Nh(T)?{class:T}:T},c=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((t=r.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},d=c.mergeSections,u=d===void 0?!0:d,f=c.mergeProps,p=f===void 0?!1:f,g=a?Ge._useDefaultPT(r,r.defaultPT(),l,i,s):void 0,_=Ge._usePT(r,Ge._getPT(o,r.$name),l,i,Je(Je({},s),{},{global:g||{}})),m=Ge._getPTDatasets(r,i);return u||!u&&_?p?Ge._mergeProps(r,p,g,_,m):Je(Je(Je({},g),_),m):Je(Je({},_),m)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return Je(Je({},t==="root"&&wc({},"".concat(r,"name"),Bn(e.$name))),{},wc({},"".concat(r,"section"),Bn(t)))},_getPT:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=function(s){var a,l=r?r(s):s,c=Bn(t);return(a=l?.[c])!==null&&a!==void 0?a:l};return e&&Object.hasOwn(e,"_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,s=function(m){return r(m,o,i)};if(t&&Object.hasOwn(t,"_usept")){var a,l=t._usept||((a=e.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},c=l.mergeSections,d=c===void 0?!0:c,u=l.mergeProps,f=u===void 0?!1:u,p=s(t.originalValue),g=s(t.value);return p===void 0&&g===void 0?void 0:mn(g)?g:mn(p)?p:d||!d&&g?f?Ge._mergeProps(e,f,p,g):Je(Je({},p),g):g}return s(t)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return Ge._usePT(e,t,r,o,i)},_loadStyles:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,i=Ge._getConfig(r,o),s={nonce:i==null||(e=i.csp)===null||e===void 0?void 0:e.nonce};Ge._loadCoreStyles(t,s),Ge._loadThemeStyles(t,s),Ge._loadScopedThemeStyles(t,s),Ge._removeThemeListeners(t),t.$loadStyles=function(){return Ge._loadThemeStyles(t,s)},Ge._themeChangeListener(t.$loadStyles)},_loadCoreStyles:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!Ar.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(t=r.$style)!==null&&t!==void 0&&t.name){var i;pt.loadCSS(o),(i=r.$style)===null||i===void 0||i.loadCSS(o),Ar.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var e,t,r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!(o!=null&&o.isUnstyled()||(o==null||(e=o.theme)===null||e===void 0?void 0:e.call(o))==="none")){if(!at.isStyleNameLoaded("common")){var s,a,l=((s=o.$style)===null||s===void 0||(a=s.getCommonTheme)===null||a===void 0?void 0:a.call(s))||{},c=l.primitive,d=l.semantic,u=l.global,f=l.style;pt.load(c?.css,Je({name:"primitive-variables"},i)),pt.load(d?.css,Je({name:"semantic-variables"},i)),pt.load(u?.css,Je({name:"global-variables"},i)),pt.loadStyle(Je({name:"global-style"},i),f),at.setLoadedStyleName("common")}if(!at.isStyleNameLoaded((t=o.$style)===null||t===void 0?void 0:t.name)&&(r=o.$style)!==null&&r!==void 0&&r.name){var p,g,_,m,h=((p=o.$style)===null||p===void 0||(g=p.getDirectiveTheme)===null||g===void 0?void 0:g.call(p))||{},T=h.css,E=h.style;(_=o.$style)===null||_===void 0||_.load(T,Je({name:"".concat(o.$style.name,"-variables")},i)),(m=o.$style)===null||m===void 0||m.loadStyle(Je({name:"".concat(o.$style.name,"-style")},i),E),at.setLoadedStyleName(o.$style.name)}if(!at.isStyleNameLoaded("layer-order")){var b,A,D=(b=o.$style)===null||b===void 0||(A=b.getLayerOrderThemeCSS)===null||A===void 0?void 0:A.call(b);pt.load(D,Je({name:"layer-order",first:!0},i)),at.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=e.preset();if(r&&e.$attrSelector){var o,i,s,a=((o=e.$style)===null||o===void 0||(i=o.getPresetTheme)===null||i===void 0?void 0:i.call(o,r,"[".concat(e.$attrSelector,"]")))||{},l=a.css,c=(s=e.$style)===null||s===void 0?void 0:s.load(l,Je({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},t));e.scopedStyleEl=c.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Ar.clearLoadedStyleNames(),It.on("theme:change",e)},_removeThemeListeners:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};It.off("theme:change",e.$loadStyles),e.$loadStyles=void 0},_hook:function(e,t,r,o,i,s){var a,l,c="on".concat(p0(t)),d=Ge._getConfig(o,i),u=r?.$instance,f=Ge._usePT(u,Ge._getPT(o==null||(a=o.value)===null||a===void 0?void 0:a.pt,e),Ge._getOptionValue,"hooks.".concat(c)),p=Ge._useDefaultPT(u,d==null||(l=d.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[e],Ge._getOptionValue,"hooks.".concat(c)),g={el:r,binding:o,vnode:i,prevVnode:s};f?.(u,g),p?.(u,g)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,t=arguments.length,r=new Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return Zc(e)?e.apply(void 0,r):Dt.apply(void 0,r)},_extend:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(a,l,c,d,u){var f,p,g,_;l._$instances=l._$instances||{};var m=Ge._getConfig(c,d),h=l._$instances[e]||{},T=Nr(h)?Je(Je({},t),t?.methods):{};l._$instances[e]=Je(Je({},h),{},{$name:e,$host:l,$binding:c,$modifiers:c?.modifiers,$value:c?.value,$el:h.$el||l||void 0,$style:Je({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},t?.style),$primevueConfig:m,$attrSelector:(f=l.$pd)===null||f===void 0||(f=f[e])===null||f===void 0?void 0:f.attrSelector,defaultPT:function(){return Ge._getPT(m?.pt,void 0,function(b){var A;return b==null||(A=b.directives)===null||A===void 0?void 0:A[e]})},isUnstyled:function(){var b,A;return((b=l._$instances[e])===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.unstyled)!==void 0?(A=l._$instances[e])===null||A===void 0||(A=A.$binding)===null||A===void 0||(A=A.value)===null||A===void 0?void 0:A.unstyled:m?.unstyled},theme:function(){var b;return(b=l._$instances[e])===null||b===void 0||(b=b.$primevueConfig)===null||b===void 0?void 0:b.theme},preset:function(){var b;return(b=l._$instances[e])===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.dt},ptm:function(){var b,A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ge._getPTValue(l._$instances[e],(b=l._$instances[e])===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.pt,A,Je({},D))},ptmo:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Ge._getPTValue(l._$instances[e],b,A,D,!1)},cx:function(){var b,A,D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(b=l._$instances[e])!==null&&b!==void 0&&b.isUnstyled()?void 0:Ge._getOptionValue((A=l._$instances[e])===null||A===void 0||(A=A.$style)===null||A===void 0?void 0:A.classes,D,Je({},R))},sx:function(){var b,A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return D?Ge._getOptionValue((b=l._$instances[e])===null||b===void 0||(b=b.$style)===null||b===void 0?void 0:b.inlineStyles,A,Je({},R)):void 0}},T),l.$instance=l._$instances[e],(p=(g=l.$instance)[a])===null||p===void 0||p.call(g,l,c,d,u),l["$".concat(e)]=l.$instance,Ge._hook(e,a,l,c,d,u),l.$pd||(l.$pd={}),l.$pd[e]=Je(Je({},(_=l.$pd)===null||_===void 0?void 0:_[e]),{},{name:e,instance:l._$instances[e]})},o=function(a){var l,c,d,u=a._$instances[e],f=u?.watch,p=function(m){var h,T=m.newValue,E=m.oldValue;return f==null||(h=f.config)===null||h===void 0?void 0:h.call(u,T,E)},g=function(m){var h,T=m.newValue,E=m.oldValue;return f==null||(h=f["config.ripple"])===null||h===void 0?void 0:h.call(u,T,E)};u.$watchersCallback={config:p,"config.ripple":g},f==null||(l=f.config)===null||l===void 0||l.call(u,u?.$primevueConfig),Pr.on("config:change",p),f==null||(c=f["config.ripple"])===null||c===void 0||c.call(u,u==null||(d=u.$primevueConfig)===null||d===void 0?void 0:d.ripple),Pr.on("config:ripple:change",g)},i=function(a){var l=a._$instances[e].$watchersCallback;l&&(Pr.off("config:change",l.config),Pr.off("config:ripple:change",l["config.ripple"]),a._$instances[e].$watchersCallback=void 0)};return{created:function(a,l,c,d){a.$pd||(a.$pd={}),a.$pd[e]={name:e,attrSelector:mi("pd")},r("created",a,l,c,d)},beforeMount:function(a,l,c,d){var u;Ge._loadStyles((u=a.$pd[e])===null||u===void 0?void 0:u.instance,l,c),r("beforeMount",a,l,c,d),o(a)},mounted:function(a,l,c,d){var u;Ge._loadStyles((u=a.$pd[e])===null||u===void 0?void 0:u.instance,l,c),r("mounted",a,l,c,d)},beforeUpdate:function(a,l,c,d){r("beforeUpdate",a,l,c,d)},updated:function(a,l,c,d){var u;Ge._loadStyles((u=a.$pd[e])===null||u===void 0?void 0:u.instance,l,c),r("updated",a,l,c,d)},beforeUnmount:function(a,l,c,d){var u;i(a),Ge._removeThemeListeners((u=a.$pd[e])===null||u===void 0?void 0:u.instance),r("beforeUnmount",a,l,c,d)},unmounted:function(a,l,c,d){var u;(u=a.$pd[e])===null||u===void 0||(u=u.instance)===null||u===void 0||(u=u.scopedStyleEl)===null||u===void 0||(u=u.value)===null||u===void 0||u.remove(),r("unmounted",a,l,c,d)}}},extend:function(){var e=Ge._getMeta.apply(Ge,arguments),t=Sf(e,2),r=t[0],o=t[1];return Je({extend:function(){var s=Ge._getMeta.apply(Ge,arguments),a=Sf(s,2),l=a[0],c=a[1];return Ge.extend(l,Je(Je(Je({},o),o?.methods),c))}},Ge._extend(r,o))}},qE=`
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
`,KE={root:"p-ink"},ZE=pt.extend({name:"ripple-directive",style:qE,classes:KE}),JE=Ge.extend({style:ZE});function Xi(n){"@babel/helpers - typeof";return Xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xi(n)}function QE(n){return rw(n)||nw(n)||tw(n)||ew()}function ew(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tw(n,e){if(n){if(typeof n=="string")return Tc(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Tc(n,e):void 0}}function nw(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function rw(n){if(Array.isArray(n))return Tc(n)}function Tc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function wf(n,e,t){return(e=ow(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ow(n){var e=iw(n,"string");return Xi(e)=="symbol"?e:e+""}function iw(n,e){if(Xi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Xi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var sw=JE.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var t=this.getInk(e);t||(t=$s("span",wf(wf({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root"))),e.appendChild(t),this.$el=t)},remove:function(e){var t=this.getInk(e);t&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),t.removeEventListener("animationend",this.onAnimationEnd),t.remove())},onMouseDown:function(e){var t=this,r=e.currentTarget,o=this.getInk(r);if(!(!o||getComputedStyle(o,null).display==="none")){if(!this.isUnstyled()&&zs(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"),!Zd(o)&&!Jd(o)){var i=Math.max(Sr(r),Mr(r));o.style.height=i+"px",o.style.width=i+"px"}var s=b0(r),a=e.pageX-s.left+document.body.scrollTop-Jd(o)/2,l=e.pageY-s.top+document.body.scrollLeft-Zd(o)/2;o.style.top=l+"px",o.style.left=a+"px",!this.isUnstyled()&&$h(o,"p-ink-active"),o.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){o&&(!t.isUnstyled()&&zs(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&zs(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?QE(e.children).find(function(t){return Jr(t,"data-pc-name")==="ripple"}):void 0}}}),aw=`
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
`;function ji(n){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ji(n)}function In(n,e,t){return(e=lw(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function lw(n){var e=cw(n,"string");return ji(e)=="symbol"?e:e+""}function cw(n,e){if(ji(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var dw={root:function(e){var t=e.instance,r=e.props;return["p-button p-component",In(In(In(In(In(In(In(In(In({"p-button-icon-only":t.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link||r.variant==="link"},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text||r.variant==="text"),"p-button-outlined",r.outlined||r.variant==="outlined"),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",t.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var t=e.props;return["p-button-icon",In({},"p-button-icon-".concat(t.iconPos),t.label)]},label:"p-button-label"},uw=pt.extend({name:"button",style:aw,classes:dw}),fw={name:"BaseButton",extends:Ma,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:uw,provide:function(){return{$pcButton:this,$parentInstance:this}}};function Yi(n){"@babel/helpers - typeof";return Yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yi(n)}function tn(n,e,t){return(e=hw(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function hw(n){var e=pw(n,"string");return Yi(e)=="symbol"?e:e+""}function pw(n,e){if(Yi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var qs={name:"Button",extends:fw,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return Dt(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Nr(this.fluid)?!!this.$pcFluid:this.fluid},dataP:function(){return Ci(tn(tn(tn(tn(tn(tn(tn(tn(tn(tn({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge),"loading",this.loading),"fluid",this.hasFluid),"rounded",this.rounded),"raised",this.raised),"outlined",this.outlined||this.variant==="outlined"),"text",this.text||this.variant==="text"),"link",this.link||this.variant==="link"),"vertical",(this.iconPos==="top"||this.iconPos==="bottom")&&this.label))},dataIconP:function(){return Ci(tn(tn({},this.iconPos,this.iconPos),this.size,this.size))},dataLabelP:function(){return Ci(tn(tn({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge))}},components:{SpinnerIcon:Ip,Badge:Up},directives:{ripple:sw}},mw=["data-p"],gw=["data-p"];function vw(n,e,t,r,o,i){var s=Ed("SpinnerIcon"),a=Ed("Badge"),l=jm("ripple");return n.asChild?Uo(n.$slots,"default",{key:1,class:Ri(n.cx("root")),a11yAttrs:i.a11yAttrs}):Lm((Ct(),Lr(Xm(n.as),Dt({key:0,class:n.cx("root"),"data-p":i.dataP},i.attrs),{default:Hc(function(){return[Uo(n.$slots,"default",{},function(){return[n.loading?Uo(n.$slots,"loadingicon",Dt({key:0,class:[n.cx("loadingIcon"),n.cx("icon")]},n.ptm("loadingIcon")),function(){return[n.loadingIcon?(Ct(),Dn("span",Dt({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(Ct(),Lr(s,Dt({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):Uo(n.$slots,"icon",Dt({key:1,class:[n.cx("icon")]},n.ptm("icon")),function(){return[n.icon?(Ct(),Dn("span",Dt({key:0,class:[n.cx("icon"),n.icon,n.iconClass],"data-p":i.dataIconP},n.ptm("icon")),null,16,mw)):Bs("",!0)]}),n.label?(Ct(),Dn("span",Dt({key:2,class:n.cx("label")},n.ptm("label"),{"data-p":i.dataLabelP}),fa(n.label),17,gw)):Bs("",!0),n.badge?(Ct(),Lr(a,{key:3,value:n.badge,class:Ri(n.badgeClass),severity:n.badgeSeverity,unstyled:n.unstyled,pt:n.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):Bs("",!0)]})]}),_:3},16,["class","data-p"])),[[l]])}qs.render=vw;const bw={},_w={class:"scene-hints"};function yw(n,e){return Ct(),Dn("div",_w,e[0]||(e[0]=[zt("div",{class:"hint-title"},"Управление кубом:",-1),zt("ul",{class:"hint-list"},[zt("li",null,"⬅️ ⬆️ ⬇️ ➡️ — перемещение куба по земле"),zt("li",null,"Колесо мыши — приближение/отдаление камеры")],-1)]))}const xw=Qc(bw,[["render",yw],["__scopeId","data-v-36261281"]]),Sw={class:"scene-wrapper"},Mw={class:"light-controls"},Ew=ma({__name:"Scene",setup(n){const e=oo(null),t=oo(!0),r=oo(null);Gc(async()=>{if(e.value)try{r.value=hE(),r.value.mount(e.value),t.value=!1}catch(l){console.error("Failed to mount scene:",l),t.value=!1}const a=l=>{r.value&&(l.key==="ArrowLeft"&&r.value.moveCube("left"),l.key==="ArrowRight"&&r.value.moveCube("right"),l.key==="ArrowUp"&&r.value.moveCube("forward"),l.key==="ArrowDown"&&r.value.moveCube("back"))};window.addEventListener("keydown",a),lh(()=>{window.removeEventListener("keydown",a)})});const o=()=>{r.value?.toggleAmbientLight()},i=()=>{r.value?.toggleEyeLight()},s=()=>{r.value?.teleportCube()};return(a,l)=>(Ct(),Dn(dn,null,[zt("div",Sw,[zt("canvas",{ref_key:"canvasRef",ref:e,style:{width:"100%",height:"100%",display:"block"}},null,512),t.value?(Ct(),Lr(CE,{key:0,class:"loader-overlay"})):Bs("",!0),zt("div",Mw,[$t($o(qs),{onClick:o,icon:"pi pi-sun",label:"Общий свет",severity:"secondary",class:"light-btn"}),$t($o(qs),{onClick:i,icon:"pi pi-eye",label:"Свет глаза",severity:"secondary",class:"light-btn"}),$t($o(qs),{onClick:s,icon:"pi pi-refresh",label:"Телепорт куба",severity:"secondary",class:"light-btn"})])]),$t(xw)],64))}}),ww=Qc(Ew,[["__scopeId","data-v-138cea7c"]]),Tw=ma({__name:"App",setup(n){return ah(()=>{document.title=uu.appTitle}),(e,t)=>(Ct(),Lr(gv,{title:$o(uu).appTitle},{default:Hc(()=>[$t(ww)]),_:1},8,["title"]))}});var Cw={transitionDuration:"{transition.duration}"},Aw={borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},Rw={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},Pw={borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"},Dw={root:Cw,panel:Aw,header:Rw,content:Pw},Lw={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},kw={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Iw={padding:"{list.padding}",gap:"{list.gap}"},Uw={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},Ow={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Nw={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Bw={borderRadius:"{border.radius.sm}"},Fw={padding:"{list.option.padding}"},zw={light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},$w={root:Lw,overlay:kw,list:Iw,option:Uw,optionGroup:Ow,dropdown:Nw,chip:Bw,emptyMessage:Fw,colorScheme:zw},Hw={width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Vw={size:"1rem"},Gw={borderColor:"{content.background}",offset:"-0.75rem"},Ww={width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},Xw={width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}},jw={root:Hw,icon:Vw,group:Gw,lg:Ww,xl:Xw},Yw={borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},qw={size:"0.5rem"},Kw={fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},Zw={fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},Jw={fontSize:"1rem",minWidth:"2rem",height:"2rem"},Qw={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},eT={root:Yw,dot:qw,sm:Kw,lg:Zw,xl:Jw,colorScheme:Qw},tT={borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},nT={transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}},rT={primitive:tT,semantic:nT},oT={borderRadius:"{content.border.radius}"},iT={root:oT},sT={padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},aT={color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},lT={color:"{navigation.item.icon.color}"},cT={root:sT,item:aT,separator:lT},dT={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},uT={light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},fT={root:dT,colorScheme:uT},hT={background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},pT={padding:"1.25rem",gap:"0.5rem"},mT={gap:"0.5rem"},gT={fontSize:"1.25rem",fontWeight:"500"},vT={color:"{text.muted.color}"},bT={root:hT,body:pT,caption:mT,title:gT,subtitle:vT},_T={transitionDuration:"{transition.duration}"},yT={gap:"0.25rem"},xT={padding:"1rem",gap:"0.5rem"},ST={width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},MT={light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},ET={root:_T,content:yT,indicatorList:xT,indicator:ST,colorScheme:MT},wT={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},TT={width:"2.5rem",color:"{form.field.icon.color}"},CT={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},AT={padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},RT={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},PT={color:"{form.field.icon.color}"},DT={root:wT,dropdown:TT,overlay:CT,list:AT,option:RT,clearIcon:PT},LT={borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},kT={size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},IT={root:LT,icon:kT},UT={borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},OT={width:"2rem",height:"2rem"},NT={size:"1rem"},BT={size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},FT={light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}},zT={root:UT,image:OT,icon:NT,removeIcon:BT,colorScheme:FT},$T={transitionDuration:"{transition.duration}"},HT={width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},VT={shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},GT={light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}},WT={root:$T,preview:HT,panel:VT,colorScheme:GT},XT={size:"2rem",color:"{overlay.modal.color}"},jT={gap:"1rem"},YT={icon:XT,content:jT},qT={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},KT={padding:"{overlay.popover.padding}",gap:"1rem"},ZT={size:"1.5rem",color:"{overlay.popover.color}"},JT={gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"},QT={root:qT,content:KT,icon:ZT,footer:JT},e1={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},t1={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},n1={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},r1={mobileIndent:"1rem"},o1={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},i1={borderColor:"{content.border.color}"},s1={root:e1,list:t1,item:n1,submenu:r1,submenuIcon:o1,separator:i1},a1={transitionDuration:"{transition.duration}"},l1={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},c1={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},d1={fontWeight:"600"},u1={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},f1={borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},h1={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},p1={fontWeight:"600"},m1={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},g1={color:"{primary.color}"},v1={width:"0.5rem"},b1={width:"1px",color:"{primary.color}"},_1={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},y1={size:"2rem"},x1={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},S1={inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},M1={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},E1={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},w1={light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},T1={root:a1,header:l1,headerCell:c1,columnTitle:d1,row:u1,bodyCell:f1,footerCell:h1,columnFooter:p1,footer:m1,dropPoint:g1,columnResizer:v1,resizeIndicator:b1,sortIcon:_1,loadingIcon:y1,rowToggleButton:x1,filter:S1,paginatorTop:M1,paginatorBottom:E1,colorScheme:w1},C1={borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},A1={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},R1={background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},P1={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},D1={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},L1={borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"},k1={root:C1,header:A1,content:R1,footer:P1,paginatorTop:D1,paginatorBottom:L1},I1={transitionDuration:"{transition.duration}"},U1={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},O1={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},N1={gap:"0.5rem",fontWeight:"500"},B1={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},F1={color:"{form.field.icon.color}"},z1={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},$1={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},H1={borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},V1={margin:"0.5rem 0 0 0"},G1={padding:"0.25rem",fontWeight:"500",color:"{content.color}"},W1={hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},X1={margin:"0.5rem 0 0 0"},j1={padding:"0.375rem",borderRadius:"{content.border.radius}"},Y1={margin:"0.5rem 0 0 0"},q1={padding:"0.375rem",borderRadius:"{content.border.radius}"},K1={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},Z1={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},J1={light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},Q1={root:I1,panel:U1,header:O1,title:N1,dropdown:B1,inputIcon:F1,selectMonth:z1,selectYear:$1,group:H1,dayView:V1,weekDay:G1,date:W1,monthView:X1,month:j1,yearView:Y1,year:q1,buttonbar:K1,timePicker:Z1,colorScheme:J1},eC={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},tC={padding:"{overlay.modal.padding}",gap:"0.5rem"},nC={fontSize:"1.25rem",fontWeight:"600"},rC={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},oC={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"},iC={root:eC,header:tC,title:nC,content:rC,footer:oC},sC={borderColor:"{content.border.color}"},aC={background:"{content.background}",color:"{text.color}"},lC={margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},cC={margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}},dC={root:sC,content:aC,horizontal:lC,vertical:cC},uC={background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},fC={borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},hC={root:uC,item:fC},pC={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},mC={padding:"{overlay.modal.padding}"},gC={fontSize:"1.5rem",fontWeight:"600"},vC={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},bC={padding:"{overlay.modal.padding}"},_C={root:pC,header:mC,title:gC,content:vC,footer:bC},yC={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},xC={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},SC={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},MC={focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},EC={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},wC={toolbar:yC,toolbarItem:xC,overlay:SC,overlayOption:MC,content:EC},TC={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},CC={background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},AC={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},RC={padding:"0"},PC={root:TC,legend:CC,toggleIcon:AC,content:RC},DC={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},LC={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},kC={highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},IC={padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},UC={gap:"0.5rem"},OC={height:"0.25rem"},NC={gap:"0.5rem"},BC={root:DC,header:LC,content:kC,file:IC,fileList:UC,progressbar:OC,basic:NC},FC={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},zC={active:{top:"-1.25rem"}},$C={input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},HC={borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}},VC={root:FC,over:zC,in:$C,on:HC},GC={borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},WC={background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},XC={size:"1.5rem"},jC={background:"{content.background}",padding:"1rem 0.25rem"},YC={size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},qC={size:"1rem"},KC={background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},ZC={gap:"0.5rem",padding:"1rem"},JC={width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},QC={background:"rgba(0, 0, 0, 0.5)"},eA={background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},tA={size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},nA={size:"1.5rem"},rA={light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}},oA={root:GC,navButton:WC,navIcon:XC,thumbnailsContent:jC,thumbnailNavButton:YC,thumbnailNavButtonIcon:qC,caption:KC,indicatorList:ZC,indicatorButton:JC,insetIndicatorList:QC,insetIndicatorButton:eA,closeButton:tA,closeButtonIcon:nA,colorScheme:rA},iA={color:"{form.field.icon.color}"},sA={icon:iA},aA={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},lA={paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},cA={root:aA,input:lA},dA={transitionDuration:"{transition.duration}"},uA={icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},fA={position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},hA={hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},pA={root:dA,preview:uA,toolbar:fA,action:hA},mA={size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},gA={handle:mA},vA={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},bA={fontWeight:"500"},_A={size:"1rem"},yA={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}},xA={root:vA,text:bA,icon:_A,colorScheme:yA},SA={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},MA={hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"},EA={root:SA,display:MA},wA={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},TA={borderRadius:"{border.radius.sm}"},CA={light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}},AA={root:wA,chip:TA,colorScheme:CA},RA={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"},PA={addon:RA},DA={transitionDuration:"{transition.duration}"},LA={width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},kA={light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},IA={root:DA,button:LA,colorScheme:kA},UA={gap:"0.5rem"},OA={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}},NA={root:UA,input:OA},BA={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},FA={root:BA},zA={transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},$A={background:"{primary.color}"},HA={background:"{content.border.color}"},VA={color:"{text.muted.color}"},GA={root:zA,value:$A,range:HA,text:VA},WA={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},XA={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},jA={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},YA={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},qA={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},KA={padding:"{list.option.padding}"},ZA={light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},JA={root:WA,list:XA,option:jA,optionGroup:YA,checkmark:qA,emptyMessage:KA,colorScheme:ZA},QA={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},eR={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},tR={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},nR={padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},rR={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},oR={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},iR={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},sR={borderColor:"{content.border.color}"},aR={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},lR={root:QA,baseItem:eR,item:tR,overlay:nR,submenu:rR,submenuLabel:oR,submenuIcon:iR,separator:sR,mobileButton:aR},cR={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},dR={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},uR={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},fR={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},hR={borderColor:"{content.border.color}"},pR={root:cR,list:dR,item:uR,submenuLabel:fR,separator:hR},mR={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},gR={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},vR={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},bR={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},_R={borderColor:"{content.border.color}"},yR={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},xR={root:mR,baseItem:gR,item:vR,submenu:bR,separator:_R,mobileButton:yR},SR={borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},MR={padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},ER={fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},wR={size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},TR={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},CR={size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},AR={root:{borderWidth:"1px"}},RR={content:{padding:"0"}},PR={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}},DR={root:SR,content:MR,text:ER,icon:wR,closeButton:TR,closeIcon:CR,outlined:AR,simple:RR,colorScheme:PR},LR={borderRadius:"{content.border.radius}",gap:"1rem"},kR={background:"{content.border.color}",size:"0.5rem"},IR={gap:"0.5rem"},UR={size:"0.5rem"},OR={size:"1rem"},NR={verticalGap:"0.5rem",horizontalGap:"1rem"},BR={root:LR,meters:kR,label:IR,labelMarker:UR,labelIcon:OR,labelList:NR},FR={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},zR={width:"2.5rem",color:"{form.field.icon.color}"},$R={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},HR={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},VR={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},GR={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},WR={color:"{form.field.icon.color}"},XR={borderRadius:"{border.radius.sm}"},jR={padding:"{list.option.padding}"},YR={root:FR,dropdown:zR,overlay:$R,list:HR,option:VR,optionGroup:GR,chip:XR,clearIcon:WR,emptyMessage:jR},qR={gap:"1.125rem"},KR={gap:"0.5rem"},ZR={root:qR,controls:KR},JR={gutter:"0.75rem",transitionDuration:"{transition.duration}"},QR={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},eP={background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},tP={color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"},nP={root:JR,node:QR,nodeToggleButton:eP,connector:tP},rP={outline:{width:"2px",color:"{content.background}"}},oP={root:rP},iP={padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},sP={background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},aP={color:"{text.muted.color}"},lP={maxWidth:"2.5rem"},cP={root:iP,navButton:sP,currentPageReport:aP,jumpToPageInput:lP},dP={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},uP={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},fP={padding:"0.375rem 1.125rem"},hP={fontWeight:"600"},pP={padding:"0 1.125rem 1.125rem 1.125rem"},mP={padding:"0 1.125rem 1.125rem 1.125rem"},gP={root:dP,header:uP,toggleableHeader:fP,title:hP,content:pP,footer:mP},vP={gap:"0.5rem",transitionDuration:"{transition.duration}"},bP={background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},_P={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},yP={indent:"1rem"},xP={color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},SP={root:vP,panel:bP,item:_P,submenu:yP,submenuIcon:xP},MP={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},EP={color:"{form.field.icon.color}"},wP={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},TP={gap:"0.5rem"},CP={light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}},AP={meter:MP,icon:EP,overlay:wP,content:TP,colorScheme:CP},RP={gap:"1.125rem"},PP={gap:"0.5rem"},DP={root:RP,controls:PP},LP={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},kP={padding:"{overlay.popover.padding}"},IP={root:LP,content:kP},UP={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},OP={background:"{primary.color}"},NP={color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"},BP={root:UP,value:OP,label:NP},FP={light:{root:{colorOne:"{red.500}",colorTwo:"{blue.500}",colorThree:"{green.500}",colorFour:"{yellow.500}"}},dark:{root:{colorOne:"{red.400}",colorTwo:"{blue.400}",colorThree:"{green.400}",colorFour:"{yellow.400}"}}},zP={colorScheme:FP},$P={width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},HP={size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}},VP={root:$P,icon:HP},GP={gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},WP={size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},XP={root:GP,icon:WP},jP={light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}},YP={colorScheme:jP},qP={transitionDuration:"{transition.duration}"},KP={size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ZP={light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}},JP={root:qP,bar:KP,colorScheme:ZP},QP={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},e2={width:"2.5rem",color:"{form.field.icon.color}"},t2={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},n2={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},r2={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},o2={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},i2={color:"{form.field.icon.color}"},s2={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},a2={padding:"{list.option.padding}"},l2={root:QP,dropdown:e2,overlay:t2,list:n2,option:r2,optionGroup:o2,clearIcon:i2,checkmark:s2,emptyMessage:a2},c2={borderRadius:"{form.field.border.radius}"},d2={light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}},u2={root:c2,colorScheme:d2},f2={borderRadius:"{content.border.radius}"},h2={light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}},p2={root:f2,colorScheme:h2},m2={transitionDuration:"{transition.duration}"},g2={background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},v2={background:"{primary.color}"},b2={width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},_2={light:{handle:{content:{background:"{surface.0}"}}},dark:{handle:{content:{background:"{surface.950}"}}}},y2={root:m2,track:g2,range:v2,handle:b2,colorScheme:_2},x2={gap:"0.5rem",transitionDuration:"{transition.duration}"},S2={root:x2},M2={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"},E2={root:M2},w2={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},T2={background:"{content.border.color}"},C2={size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},A2={root:w2,gutter:T2,handle:C2},R2={transitionDuration:"{transition.duration}"},P2={background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},D2={padding:"0.5rem",gap:"1rem"},L2={padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},k2={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},I2={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},U2={padding:"0.875rem 0.5rem 1.125rem 0.5rem"},O2={background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},N2={root:R2,separator:P2,step:D2,stepHeader:L2,stepTitle:k2,stepNumber:I2,steppanels:U2,steppanel:O2},B2={transitionDuration:"{transition.duration}"},F2={background:"{content.border.color}"},z2={borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},$2={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},H2={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},V2={root:B2,separator:F2,itemLink:z2,itemLabel:$2,itemNumber:H2},G2={transitionDuration:"{transition.duration}"},W2={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},X2={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},j2={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Y2={height:"1px",bottom:"-1px",background:"{primary.color}"},q2={root:G2,tablist:W2,item:X2,itemIcon:j2,activeBar:Y2},K2={transitionDuration:"{transition.duration}"},Z2={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},J2={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Q2={background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},eD={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tD={height:"1px",bottom:"-1px",background:"{primary.color}"},nD={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},rD={root:K2,tablist:Z2,tab:J2,tabpanel:Q2,navButton:eD,activeBar:tD,colorScheme:nD},oD={transitionDuration:"{transition.duration}"},iD={background:"{content.background}",borderColor:"{content.border.color}"},sD={borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},aD={background:"{content.background}",color:"{content.color}"},lD={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},cD={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},dD={root:oD,tabList:iD,tab:sD,tabPanel:aD,navButton:lD,colorScheme:cD},uD={fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},fD={size:"0.75rem"},hD={light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},pD={root:uD,icon:fD,colorScheme:hD},mD={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},gD={gap:"0.25rem"},vD={margin:"2px 0"},bD={root:mD,prompt:gD,commandResponse:vD},_D={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},yD={root:_D},xD={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},SD={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},MD={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},ED={mobileIndent:"1rem"},wD={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},TD={borderColor:"{content.border.color}"},CD={root:xD,list:SD,item:MD,submenu:ED,submenuIcon:wD,separator:TD},AD={minHeight:"5rem"},RD={eventContent:{padding:"1rem 0"}},PD={eventContent:{padding:"0 1rem"}},DD={size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},LD={color:"{content.border.color}",size:"2px"},kD={event:AD,horizontal:RD,vertical:PD,eventMarker:DD,eventConnector:LD},ID={width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},UD={size:"1.125rem"},OD={padding:"{overlay.popover.padding}",gap:"0.5rem"},ND={gap:"0.5rem"},BD={fontWeight:"500",fontSize:"1rem"},FD={fontWeight:"500",fontSize:"0.875rem"},zD={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},$D={size:"1rem"},HD={light:{root:{blur:"1.5px"},info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{root:{blur:"10px"},info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}},VD={root:ID,icon:UD,content:OD,text:ND,summary:BD,detail:FD,closeButton:zD,closeIcon:$D,colorScheme:HD},GD={padding:"0.25rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.25rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.25rem"}},WD={disabledColor:"{form.field.disabled.color}"},XD={padding:"0.25rem 0.75rem",borderRadius:"{content.border.radius}",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",sm:{padding:"0.25rem 0.75rem"},lg:{padding:"0.25rem 0.75rem"}},jD={light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}},YD={root:GD,icon:WD,content:XD,colorScheme:jD},qD={width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},KD={borderRadius:"50%",size:"1rem"},ZD={light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}},JD={root:qD,handle:KD,colorScheme:ZD},QD={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"},eL={root:QD},tL={maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},nL={light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}},rL={root:tL,colorScheme:nL},oL={background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},iL={padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},sL={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},aL={borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},lL={size:"2rem"},cL={margin:"0 0 0.5rem 0"},dL={root:oL,node:iL,nodeIcon:sL,nodeToggleButton:aL,loadingIcon:lL,filter:cL},uL={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},fL={width:"2.5rem",color:"{form.field.icon.color}"},hL={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},pL={padding:"{list.padding}"},mL={padding:"{list.option.padding}"},gL={borderRadius:"{border.radius.sm}"},vL={color:"{form.field.icon.color}"},bL={root:uL,dropdown:fL,overlay:hL,tree:pL,emptyMessage:mL,chip:gL,clearIcon:vL},_L={transitionDuration:"{transition.duration}"},yL={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},xL={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},SL={fontWeight:"600"},ML={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},EL={borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},wL={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},TL={fontWeight:"600"},CL={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},AL={width:"0.5rem"},RL={width:"1px",color:"{primary.color}"},PL={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},DL={size:"2rem"},LL={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},kL={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},IL={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},UL={light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},OL={root:_L,header:yL,headerCell:xL,columnTitle:SL,row:ML,bodyCell:EL,footerCell:wL,columnFooter:TL,footer:CL,columnResizer:AL,resizeIndicator:RL,sortIcon:PL,loadingIcon:DL,nodeToggleButton:LL,paginatorTop:kL,paginatorBottom:IL,colorScheme:UL},NL={mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}},BL={loader:NL};function qi(n){"@babel/helpers - typeof";return qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qi(n)}function Tf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Cf(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Tf(Object(t),!0).forEach(function(r){FL(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Tf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function FL(n,e,t){return(e=zL(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function zL(n){var e=$L(n,"string");return qi(e)=="symbol"?e:e+""}function $L(n,e){if(qi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(qi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var HL=Cf(Cf({},rT),{},{components:{accordion:Dw,autocomplete:$w,avatar:jw,badge:eT,blockui:iT,breadcrumb:cT,button:fT,datepicker:Q1,card:bT,carousel:ET,cascadeselect:DT,checkbox:IT,chip:zT,colorpicker:WT,confirmdialog:YT,confirmpopup:QT,contextmenu:s1,dataview:k1,datatable:T1,dialog:iC,divider:dC,dock:hC,drawer:_C,editor:wC,fieldset:PC,fileupload:BC,iftalabel:cA,floatlabel:VC,galleria:oA,iconfield:sA,image:pA,imagecompare:gA,inlinemessage:xA,inplace:EA,inputchips:AA,inputgroup:PA,inputnumber:IA,inputotp:NA,inputtext:FA,knob:GA,listbox:JA,megamenu:lR,menu:pR,menubar:xR,message:DR,metergroup:BR,multiselect:YR,orderlist:ZR,organizationchart:nP,overlaybadge:oP,popover:IP,paginator:cP,password:AP,panel:gP,panelmenu:SP,picklist:DP,progressbar:BP,progressspinner:zP,radiobutton:VP,rating:XP,ripple:YP,scrollpanel:JP,select:l2,selectbutton:u2,skeleton:p2,slider:y2,speeddial:S2,splitter:A2,splitbutton:E2,stepper:N2,steps:V2,tabmenu:q2,tabs:rD,tabview:dD,textarea:yD,tieredmenu:CD,tag:pD,terminal:bD,timeline:kD,togglebutton:YD,toggleswitch:JD,tree:dL,treeselect:bL,treetable:OL,toast:VD,toolbar:eL,tooltip:rL,virtualscroller:BL}});const VL=C0(HL,{semantic:{primary:{50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"}}});function Ki(n){"@babel/helpers - typeof";return Ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ki(n)}function GL(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function WL(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,jL(r.key),r)}}function XL(n,e,t){return e&&WL(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function jL(n){var e=YL(n,"string");return Ki(e)=="symbol"?e:e+""}function YL(n,e){if(Ki(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var qL=function(){function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};GL(this,n),this.element=e,this.listener=t}return XL(n,[{key:"bindScrollListener",value:function(){this.scrollableParents=_0(this.element);for(var t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}(),KL=`
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
`,ZL={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},JL=pt.extend({name:"tooltip-directive",style:KL,classes:ZL}),QL=Ge.extend({style:JL});function ek(n,e){return ok(n)||rk(n,e)||nk(n,e)||tk()}function tk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nk(n,e){if(n){if(typeof n=="string")return Af(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Af(n,e):void 0}}function Af(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function rk(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(l=(r=i.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function ok(n){if(Array.isArray(n))return n}function Rf(n,e,t){return(e=ik(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ik(n){var e=sk(n,"string");return Or(e)=="symbol"?e:e+""}function sk(n,e){if(Or(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Or(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Or(n){"@babel/helpers - typeof";return Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Or(n)}var ak=QL.extend("tooltip",{beforeMount:function(e,t){var r,o=this.getTarget(e);if(o.$_ptooltipModifiers=this.getModifiers(t),t.value){if(typeof t.value=="string")o.$_ptooltipValue=t.value,o.$_ptooltipDisabled=!1,o.$_ptooltipEscape=!0,o.$_ptooltipClass=null,o.$_ptooltipFitContent=!0,o.$_ptooltipIdAttr=mi("pv_id")+"_tooltip",o.$_ptooltipShowDelay=0,o.$_ptooltipHideDelay=0,o.$_ptooltipAutoHide=!0;else if(Or(t.value)==="object"&&t.value){if(Nr(t.value.value)||t.value.value.trim()==="")return;o.$_ptooltipValue=t.value.value,o.$_ptooltipDisabled=!!t.value.disabled===t.value.disabled?t.value.disabled:!1,o.$_ptooltipEscape=!!t.value.escape===t.value.escape?t.value.escape:!0,o.$_ptooltipClass=t.value.class||"",o.$_ptooltipFitContent=!!t.value.fitContent===t.value.fitContent?t.value.fitContent:!0,o.$_ptooltipIdAttr=t.value.id||mi("pv_id")+"_tooltip",o.$_ptooltipShowDelay=t.value.showDelay||0,o.$_ptooltipHideDelay=t.value.hideDelay||0,o.$_ptooltipAutoHide=!!t.value.autoHide===t.value.autoHide?t.value.autoHide:!0}}else return;o.$_ptooltipZIndex=(r=t.instance.$primevue)===null||r===void 0||(r=r.config)===null||r===void 0||(r=r.zIndex)===null||r===void 0?void 0:r.tooltip,this.bindEvents(o,t),e.setAttribute("data-pd-tooltip",!0)},updated:function(e,t){var r=this.getTarget(e);if(r.$_ptooltipModifiers=this.getModifiers(t),this.unbindEvents(r),!!t.value){if(typeof t.value=="string")r.$_ptooltipValue=t.value,r.$_ptooltipDisabled=!1,r.$_ptooltipEscape=!0,r.$_ptooltipClass=null,r.$_ptooltipIdAttr=r.$_ptooltipIdAttr||mi("pv_id")+"_tooltip",r.$_ptooltipShowDelay=0,r.$_ptooltipHideDelay=0,r.$_ptooltipAutoHide=!0,this.bindEvents(r,t);else if(Or(t.value)==="object"&&t.value)if(Nr(t.value.value)||t.value.value.trim()===""){this.unbindEvents(r,t);return}else r.$_ptooltipValue=t.value.value,r.$_ptooltipDisabled=!!t.value.disabled===t.value.disabled?t.value.disabled:!1,r.$_ptooltipEscape=!!t.value.escape===t.value.escape?t.value.escape:!0,r.$_ptooltipClass=t.value.class||"",r.$_ptooltipFitContent=!!t.value.fitContent===t.value.fitContent?t.value.fitContent:!0,r.$_ptooltipIdAttr=t.value.id||r.$_ptooltipIdAttr||mi("pv_id")+"_tooltip",r.$_ptooltipShowDelay=t.value.showDelay||0,r.$_ptooltipHideDelay=t.value.hideDelay||0,r.$_ptooltipAutoHide=!!t.value.autoHide===t.value.autoHide?t.value.autoHide:!0,this.bindEvents(r,t)}},unmounted:function(e,t){var r=this.getTarget(e);this.hide(e,0),this.remove(r),this.unbindEvents(r,t),r.$_ptooltipScrollHandler&&(r.$_ptooltipScrollHandler.destroy(),r.$_ptooltipScrollHandler=null)},timer:void 0,methods:{bindEvents:function(e,t){var r=this,o=e.$_ptooltipModifiers;o.focus?(e.$_ptooltipFocusEvent=function(i){return r.onFocus(i,t)},e.$_ptooltipBlurEvent=this.onBlur.bind(this),e.addEventListener("focus",e.$_ptooltipFocusEvent),e.addEventListener("blur",e.$_ptooltipBlurEvent)):(e.$_ptooltipMouseEnterEvent=function(i){return r.onMouseEnter(i,t)},e.$_ptooltipMouseLeaveEvent=this.onMouseLeave.bind(this),e.$_ptooltipClickEvent=this.onClick.bind(this),e.addEventListener("mouseenter",e.$_ptooltipMouseEnterEvent),e.addEventListener("mouseleave",e.$_ptooltipMouseLeaveEvent),e.addEventListener("click",e.$_ptooltipClickEvent)),e.$_ptooltipKeydownEvent=this.onKeydown.bind(this),e.addEventListener("keydown",e.$_ptooltipKeydownEvent),e.$_pWindowResizeEvent=this.onWindowResize.bind(this,e)},unbindEvents:function(e){var t=e.$_ptooltipModifiers;t.focus?(e.removeEventListener("focus",e.$_ptooltipFocusEvent),e.$_ptooltipFocusEvent=null,e.removeEventListener("blur",e.$_ptooltipBlurEvent),e.$_ptooltipBlurEvent=null):(e.removeEventListener("mouseenter",e.$_ptooltipMouseEnterEvent),e.$_ptooltipMouseEnterEvent=null,e.removeEventListener("mouseleave",e.$_ptooltipMouseLeaveEvent),e.$_ptooltipMouseLeaveEvent=null,e.removeEventListener("click",e.$_ptooltipClickEvent),e.$_ptooltipClickEvent=null),e.removeEventListener("keydown",e.$_ptooltipKeydownEvent),window.removeEventListener("resize",e.$_pWindowResizeEvent),e.$_ptooltipId&&this.remove(e)},bindScrollListener:function(e){var t=this;e.$_ptooltipScrollHandler||(e.$_ptooltipScrollHandler=new qL(e,function(){t.hide(e)})),e.$_ptooltipScrollHandler.bindScrollListener()},unbindScrollListener:function(e){e.$_ptooltipScrollHandler&&e.$_ptooltipScrollHandler.unbindScrollListener()},onMouseEnter:function(e,t){var r=e.currentTarget,o=r.$_ptooltipShowDelay;this.show(r,t,o)},onMouseLeave:function(e){var t=e.currentTarget,r=t.$_ptooltipHideDelay,o=t.$_ptooltipAutoHide;if(o)this.hide(t,r);else{var i=Jr(e.target,"data-pc-name")==="tooltip"||Jr(e.target,"data-pc-section")==="arrow"||Jr(e.target,"data-pc-section")==="text"||Jr(e.relatedTarget,"data-pc-name")==="tooltip"||Jr(e.relatedTarget,"data-pc-section")==="arrow"||Jr(e.relatedTarget,"data-pc-section")==="text";!i&&this.hide(t,r)}},onFocus:function(e,t){var r=e.currentTarget,o=r.$_ptooltipShowDelay;this.show(r,t,o)},onBlur:function(e){var t=e.currentTarget,r=t.$_ptooltipHideDelay;this.hide(t,r)},onClick:function(e){var t=e.currentTarget,r=t.$_ptooltipHideDelay;this.hide(t,r)},onKeydown:function(e){var t=e.currentTarget,r=t.$_ptooltipHideDelay;e.code==="Escape"&&this.hide(e.currentTarget,r)},onWindowResize:function(e){x0()||this.hide(e),window.removeEventListener("resize",e.$_pWindowResizeEvent)},tooltipActions:function(e,t){if(!(e.$_ptooltipDisabled||!Vh(e))){var r=this.create(e,t);this.align(e),!this.isUnstyled()&&v0(r,250);var o=this;window.addEventListener("resize",e.$_pWindowResizeEvent),r.addEventListener("mouseleave",function i(){o.hide(e),r.removeEventListener("mouseleave",i),e.removeEventListener("mouseenter",e.$_ptooltipMouseEnterEvent),setTimeout(function(){return e.addEventListener("mouseenter",e.$_ptooltipMouseEnterEvent)},50)}),this.bindScrollListener(e),Qd.set("tooltip",r,e.$_ptooltipZIndex)}},show:function(e,t,r){var o=this;r!==void 0?this.timer=setTimeout(function(){return o.tooltipActions(e,t)},r):this.tooltipActions(e,t)},tooltipRemoval:function(e){this.remove(e),this.unbindScrollListener(e),window.removeEventListener("resize",e.$_pWindowResizeEvent)},hide:function(e,t){var r=this;clearTimeout(this.timer),t!==void 0?setTimeout(function(){return r.tooltipRemoval(e)},t):this.tooltipRemoval(e)},getTooltipElement:function(e){return document.getElementById(e.$_ptooltipId)},getArrowElement:function(e){var t=this.getTooltipElement(e);return na(t,'[data-pc-section="arrow"]')},create:function(e){var t=e.$_ptooltipModifiers,r=$s("div",{class:!this.isUnstyled()&&this.cx("arrow"),"p-bind":this.ptm("arrow",{context:t})}),o=$s("div",{class:!this.isUnstyled()&&this.cx("text"),"p-bind":this.ptm("text",{context:t})});e.$_ptooltipEscape?(o.innerHTML="",o.appendChild(document.createTextNode(e.$_ptooltipValue))):o.innerHTML=e.$_ptooltipValue;var i=$s("div",Rf(Rf({id:e.$_ptooltipIdAttr,role:"tooltip",style:{display:"inline-block",width:e.$_ptooltipFitContent?"fit-content":void 0,pointerEvents:!this.isUnstyled()&&e.$_ptooltipAutoHide&&"none"},class:[!this.isUnstyled()&&this.cx("root"),e.$_ptooltipClass]},this.$attrSelector,""),"p-bind",this.ptm("root",{context:t})),r,o);return document.body.appendChild(i),e.$_ptooltipId=i.id,this.$el=i,i},remove:function(e){if(e){var t=this.getTooltipElement(e);t&&t.parentElement&&(Qd.clear(t),document.body.removeChild(t)),e.$_ptooltipId=null}},align:function(e){var t=e.$_ptooltipModifiers;t.top?(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignTop(e))):t.left?(this.alignLeft(e),this.isOutOfBounds(e)&&(this.alignRight(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignLeft(e))))):t.bottom?(this.alignBottom(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&this.alignBottom(e))):(this.alignRight(e),this.isOutOfBounds(e)&&(this.alignLeft(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignRight(e)))))},getHostOffset:function(e){var t=e.getBoundingClientRect(),r=t.left+m0(),o=t.top+g0();return{left:r,top:o}},alignRight:function(e){this.preAlign(e,"right");var t=this.getTooltipElement(e),r=this.getArrowElement(e),o=this.getHostOffset(e),i=o.left+Sr(e),s=o.top+(Mr(e)-Mr(t))/2;t.style.left=i+"px",t.style.top=s+"px",r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"},alignLeft:function(e){this.preAlign(e,"left");var t=this.getTooltipElement(e),r=this.getArrowElement(e),o=this.getHostOffset(e),i=o.left-Sr(t),s=o.top+(Mr(e)-Mr(t))/2;t.style.left=i+"px",t.style.top=s+"px",r.style.top="50%",r.style.right="0",r.style.bottom=null,r.style.left=null},alignTop:function(e){this.preAlign(e,"top");var t=this.getTooltipElement(e),r=this.getArrowElement(e),o=Sr(t),i=Sr(e),s=Na(),a=s.width,l=this.getHostOffset(e),c=l.left+(i-o)/2,d=l.top-Mr(t);c<0?c=0:c+o>a&&(c=Math.floor(l.left+i-o)),t.style.left=c+"px",t.style.top=d+"px";var u=l.left-this.getHostOffset(t).left+i/2;r.style.top=null,r.style.right=null,r.style.bottom="0",r.style.left=u+"px"},alignBottom:function(e){this.preAlign(e,"bottom");var t=this.getTooltipElement(e),r=this.getArrowElement(e),o=Sr(t),i=Sr(e),s=Na(),a=s.width,l=this.getHostOffset(e),c=l.left+(i-o)/2,d=l.top+Mr(e);c<0?c=0:c+o>a&&(c=Math.floor(l.left+i-o)),t.style.left=c+"px",t.style.top=d+"px";var u=l.left-this.getHostOffset(t).left+i/2;r.style.top="0",r.style.right=null,r.style.bottom=null,r.style.left=u+"px"},preAlign:function(e,t){var r=this.getTooltipElement(e);r.style.left="-999px",r.style.top="-999px",zs(r,"p-tooltip-".concat(r.$_ptooltipPosition)),!this.isUnstyled()&&$h(r,"p-tooltip-".concat(t)),r.$_ptooltipPosition=t,r.setAttribute("data-p-position",t)},isOutOfBounds:function(e){var t=this.getTooltipElement(e),r=t.getBoundingClientRect(),o=r.top,i=r.left,s=Sr(t),a=Mr(t),l=Na();return i+s>l.width||i<0||o<0||o+a>l.height},getTarget:function(e){var t;return zh(e,"p-inputwrapper")&&(t=na(e,"input"))!==null&&t!==void 0?t:e},getModifiers:function(e){return e.modifiers&&Object.keys(e.modifiers).length?e.modifiers:e.arg&&Or(e.arg)==="object"?Object.entries(e.arg).reduce(function(t,r){var o=ek(r,2),i=o[0],s=o[1];return(i==="event"||i==="position")&&(t[s]=!0),t},{}):{}}}});const yl=i0(Tw),lk=()=>{yl.use(lv,{ripple:!0,theme:{preset:VL,options:{cssLayer:{name:"primevue",order:"theme, base, primevue"}}}}),yl.directive("tooltip",ak),yl.mount("#app")};lk();

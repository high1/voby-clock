(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();var et=(t,e)=>{t instanceof Array?t.forEach(e):t&&e(t)},rt=(t,e,r)=>{const s=t[e];s instanceof Array?s.push(r):s?t[e]=[s,r]:t[e]=r},L=(t,e,r)=>{const s=t[e];if(s instanceof Set)s.add(r);else if(s){if(r!==s){const n=new Set;n.add(s),n.add(r),t[e]=n}}else t[e]=r},T=(t,e,r)=>{const s=t[e];s instanceof Set?s.delete(r):s===r&&(t[e]=void 0)},nt=(t,e)=>{if(t instanceof Set)for(const r of t)e(r);else t&&e(t)},Ae=(t,e)=>t instanceof Set?t.has(e):t===e,Se=t=>vt(t)?t:[t],Ut=t=>t instanceof Error?t:typeof t=="string"?new Error(t):new Error("Unknown error"),{isArray:vt}=Array,I=t=>typeof t=="function",_e=t=>typeof t=="number",ye=t=>t!==null&&typeof t=="object",be=(t,e)=>Math.max(t,e),Be=class{AC(t){rt(this,"A2",t)}AD(t){rt(this,"AE",t)}A6(t){rt(this,"E",t)}T(t){rt(this,"A1",t)}AF(t){L(this,"AB",t)}AG(t){T(this,"AB",t)}catch(t,e){const{AE:r,O:s}=this;if(r)return et(r,n=>n.call(n,t)),!0;if(s!=null&&s.catch(t,!0))return!0;if(e)return!1;throw t}U(t,e){const{A1:r,E:s,A2:n,AE:o,AH:i}=this;r&&(this.A1=void 0,et(r,a=>{a.U(!0,!0)})),s&&(this.E=void 0,e?et(s,a=>{!a.disposed&&!a.P.disposed&&a.A8(this)}):this.AI=s),n&&(this.A2=void 0,this.R=!0,et(n,a=>a.call(a)),this.R=!1),o&&(this.AE=void 0),i&&(this.AH=void 0)}V(){const t=this.AI;if(!t)return;this.AI=void 0;const e=this.E;if(t===e)return;const r=t instanceof Array?t:[t],s=e instanceof Array?e:e?[e]:[];let n;for(let o=0,i=r.length;o<i;o++){const a=r[o];a.disposed||a.P.disposed||a!==s[o]&&(n||(n=new Set(s)),!n.has(a)&&a.A8(this))}}I(t){const{AH:e,O:r}=this;return e&&t in e?e[t]:r==null?void 0:r.I(t)}K(t,e){this.AH||(this.AH={}),this.AH[t]=e}S(t,e=!1){const r=B.A,s=R.A;B.A=this,R.A=e;let n;try{n=t()}catch(o){this.catch(Ut(o),!1)}finally{B.A=r,R.A=s}return n}},Pt=Be,we=class extends Pt{constructor(){super(...arguments),this.disposed=!1}},Ee=we,q={A:void 0},it={A:0},me=()=>!1,pt=Object.is,$t=()=>{},Jt=new Ee,B={A:Jt},V={A:Jt},F=Symbol("Observable"),gt=Symbol("Frozen"),Oe=Symbol("Readable"),Ne=Symbol("Writable"),ot=Symbol("Store"),J=Symbol("Observable"),at=Symbol("Target"),Qt=Symbol("Values"),Et=Symbol("Uncached"),Zt=Symbol("Unwrapped"),R={A:!1},xe=()=>{it.A+=1,q.A||(q.A=new Map)},Le=()=>{if(it.A-=1,it.A)return;const t=q.A;!t||(q.A=void 0,t.size>1?(t.forEach(Re),t.forEach(Ht),t.forEach(Pe)):t.forEach(Ht))},Te=(t,e,r)=>{e();try{const s=t();return s instanceof Promise?s.finally(r):r(),s}catch(s){throw r(),s}},Re=(t,e)=>{e.Q(1,!1)},Pe=(t,e)=>{e.Q(-1,!1)},Ht=(t,e)=>{e.K(t)},Me=t=>Te(t,xe,Le),k=Me;function Ce(){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this}function Ie(t){if(arguments.length){if(t===F)return this;throw new Error("A readonly Observable can not be updated")}return this.I()}function Fe(t){return arguments.length?t===F?this:I(t)?this.J(t):this.K(t):this.I()}var Mt=t=>{const e=Ce.bind(t);return e[F]=!0,e[gt]=!0,e},Xt=t=>{if(t.disposed)return Mt(t.D);const e=Ie.bind(t);return e[F]=!0,e[Oe]=!0,e},Ke=t=>{const e=Fe.bind(t);return e[F]=!0,e[Ne]=!0,e},lt=t=>t&3,St=(t,e)=>t>>>2<<2|e,He=t=>!!(t&4),ke=(t,e)=>t|(e?4:0),mt=t=>t>>>3,Ve=(t,e)=>t+(e<<3),We=class extends Pt{constructor(){super(...arguments),this.O=B.A,this.P=V.A,this.status=0}Q(t,e){t<0&&!mt(this.status)||(this.status=Ve(this.status,t),this.status=ke(this.status,e),!mt(this.status)&&(e=He(this.status),this.status=lt(this.status),!this.R&&this.J(e)))}J(t){}S(t,e=!0){return super.S(t,e)}},qe=We,Ye=class{constructor(t,e,r){this.P=V.A,this.D=t,r&&(this.O=r),(e==null?void 0:e.equals)!==void 0&&(this.equals=e.equals||me)}A3(t){Ae(this.A4,t)||L(this,"A4",t)}T(t){L(this,"A1",t)}A5(){this.disposed||this.P.disposed||(R.A&&(this.T(B.A),B.A.A6(this)),this.O&&mt(this.O.status)&&(this.O.status=lt(this.O.status),this.O.J(!0)))}A7(t){T(this,"A4",t)}A8(t){T(this,"A1",t)}I(){return this.A5(),this.D}K(t){if(this.disposed)throw new Error("A disposed Observable can not be updated");if(q.A)return q.A.set(this,t),t;{const r=!(this.equals||pt)(t,this.D);if(!this.O){if(!r)return t;this.P.disposed||this.Q(1,r)}if(r){const s=this.D;this.D=t,this.A9(s)}return this.P.disposed||this.Q(-1,r),t}}J(t){const e=t(this.D);return this.K(e)}Q(t,e){if(this.disposed||this.P.disposed)return;const r=this.A1;if(r)if(r instanceof Set)for(const s of r)s.Q(t,e);else r.Q(t,e)}A9(t){if(this.disposed||this.P.disposed)return;const{A4:e}=this;if(e)if(e instanceof Set)for(const r of e)r.call(r,this.D,t);else e.call(e,this.D,t)}U(){this.disposed=!0}},Ct=Ye,Ge=t=>I(t)&&gt in t,zt=Ge,Ue=t=>{B.A.AC(t)},It=Ue;function $e(t,e){return arguments.length<2?B.A.I(t):B.A.K(t,e)}var Je=$e,Qe=()=>{const t=new Ct(!1);return It(()=>{t.K(!0)}),Xt(t)},Ze=Qe,Xe=()=>{},Dt=Xe,ze=class extends qe{constructor(t,e){super(),this.B=t,this.O.T(this),e&&Dt()?this.Q(1,!0):this.J(!0)}J(t){if(t&&!this.P.disposed){const e=lt(this.status);if(e)this.status=St(this.status,t?3:be(e,2));else{this.status=St(this.status,1),this.U();try{const r=this.S(this.B);this.V(),I(r)?this.AC(r):!this.A1&&!this.E&&!this.A2&&this.U(!0,!0)}catch(r){this.V(),this.catch(Ut(r),!1)}finally{const r=lt(this.status);this.status=St(this.status,0),r>1?this.J(r===3):this.E||(this.B=$t)}}}}},De=ze,je=t=>I(t)&&F in t,jt=je;function tr(t,e=!0){return(e?I:jt)(t)?t():t}var er=tr,rr=t=>ye(t)&&ot in t,j=rr;function sr(t){if(I(t)){const e=R.A;try{return R.A=!1,t()}finally{R.A=e}}else return t}var Ft=sr,nr=class extends Pt{constructor(t){super(),this.O=B.A,t&&_e(Dt())&&(this.AL=!0,this.O.AF(this))}U(t,e){this.disposed=!0,this.AL&&this.O.AG(this),super.U(t,e)}S(t){const e=this.U.bind(this,!0,!0),r=t.bind(void 0,e),s=V.A;V.A=this;try{return super.S(r)}finally{V.A=s}}},ir=nr;Mt(-1);Mt(-1);var or=()=>!!it.A,ar=or,lr=t=>I(t)?t(F):t,te=lr,ur=(t,e)=>{zt(t)||te(t).A7(e)},ee=ur,cr=(t,e)=>(zt(t)||te(t).A3(e),()=>{ee(t,e)}),fr=cr,dr=t=>{const e=new De(t);return e.U.bind(e,!0,!0)},re=dr,hr=t=>new ir(!0).S(t),vr=hr,x=class extends Map{B0(t,e){return super.set(t,e),e}},At=class{constructor(){this.F=0}B1(){this.F+=1,It(this)}call(){this.F-=1,!this.F&&this.U()}U(){}},pr=class extends At{constructor(t,e){super(),this.O=t,this.observable=e}U(){this.O.keys=void 0}},gr=class extends At{constructor(t,e){super(),this.O=t,this.observable=e}U(){this.O.values=void 0}},Ar=class extends At{constructor(t,e,r){super(),this.O=t,this.C=e,this.observable=r}U(){var t;(t=this.O.has)==null||t.delete(this.C)}},Sr=class extends At{constructor(t,e,r,s){super(),this.O=t,this.C=e,this.observable=r,this.B2=s}U(){var t;(t=this.O.B3)==null||t.delete(this.C)}},S={active:0,A4:new Set,nodes:new Set,prepare:()=>{const{A4:t,nodes:e}=S,r=new Set,s=n=>{r.has(n)||(r.add(n),nt(n.B4,s),nt(n.B5,o=>{t.add(o)}))};return e.forEach(s),()=>{t.forEach(n=>{n()})}},register:t=>{S.nodes.add(t),w.schedule()},reset:()=>{S.A4=new Set,S.nodes=new Set}},g={active:0,nodes:new Map,prepare:()=>{const{nodes:t}=g;return()=>{t.forEach((e,r)=>{const s=Array.from(e);nt(r.B6,n=>{n(s)})})}},register:(t,e)=>{const r=g.nodes.get(t)||new Set;r.add(e),g.nodes.set(t,r),w.schedule()},registerWith:(t,e,r)=>{if(e.B4){const s=new Set,n=o=>{s.has(o)||(s.add(o),nt(o.B4,i=>{i.B4||g.register(i,o.store),n(i)}))};n(t||e)}else{const s=(t==null?void 0:t.store)||Ft(()=>e.store[r]);g.register(e,s)}},reset:()=>{g.nodes=new Map}},w={active:!1,flush:()=>{const t=S.prepare(),e=g.prepare();w.reset(),t(),e()},flushIfNotBatching:()=>{ar()?setTimeout(w.flushIfNotBatching,0):w.flush()},reset:()=>{w.active=!1,S.reset(),g.reset()},schedule:()=>{w.active||(w.active=!0,queueMicrotask(w.flushIfNotBatching))}},Y=new WeakMap,_r=new Set([ot,J,at,Qt]),yr=new Set(["__proto__","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__","prototype","constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toSource","toString","valueOf"]),br={get:(t,e)=>{var r,s;if(_r.has(e)){if(e===ot)return!0;if(e===at)return t;if(e===Qt&&st()){const f=O(t);f.values||(f.values=wr(f)),f.values.B1(),f.values.observable.I()}if(e===J)return f=>{var c;f=typeof f=="number"?String(f):f;const h=O(t),p=(c=h.B7)==null?void 0:c.get(f);if(p)return p.bind(h.store);h.B3||(h.B3=new x);const d=t[f],v=h.B3.get(f)||h.B3.B0(f,kt(h,f,d));return v.observable||(v.observable=Q(h,d)),Xt(v.observable)}}if(yr.has(e))return t[e];const n=O(t),o=(r=n.B7)==null?void 0:r.get(e),i=o||t[e];n.B3||(n.B3=new x);const a=st(),l=W(i),u=a||l?n.B3.get(e)||n.B3.B0(e,kt(n,e,i)):void 0;return u!=null&&u.B2&&L(u.B2,"B4",n),a&&u&&(u.B1(),u.observable||(u.observable=Q(n,i)),u.observable.I()),o?o.call(n.store):typeof i=="function"&&i===Array.prototype[e]?function(){return k(()=>i.apply(n.store,arguments))}:((s=u==null?void 0:u.B2)==null?void 0:s.store)||i},set:(t,e,r)=>{var s;r=Z(r);const n=O(t),o=(s=n.B8)==null?void 0:s.get(e);if(o)k(()=>o.call(n.store,r));else{const i=t[e],a=!!i||e in t;if(a&&pt(r,i)&&(e!=="length"||!Array.isArray(t)))return!0;t[e]=r,k(()=>{var l,u,f,c,h,p;(l=n.values)==null||l.observable.K(0),a||((u=n.keys)==null||u.observable.K(0),(c=(f=n.has)==null?void 0:f.get(e))==null||c.observable.K(!0));const d=(h=n.B3)==null?void 0:h.get(e);d!=null&&d.B2&&T(d.B2,"B4",n),d&&((p=d.observable)==null||p.K(r),d.B2=W(r)?Y.get(r)||ut(r,n):void 0),d!=null&&d.B2&&L(d.B2,"B4",n),g.active&&g.registerWith(d==null?void 0:d.B2,n,e),S.active&&S.register(n)})}return!0},deleteProperty:(t,e)=>{if(!(e in t))return!0;if(!Reflect.deleteProperty(t,e))return!1;const n=O(t);return k(()=>{var o,i,a,l,u,f;(o=n.keys)==null||o.observable.K(0),(i=n.values)==null||i.observable.K(0),(l=(a=n.has)==null?void 0:a.get(e))==null||l.observable.K(!1);const c=(u=n.B3)==null?void 0:u.get(e);g.active&&g.registerWith(c==null?void 0:c.B2,n,e),c!=null&&c.B2&&T(c.B2,"B4",n),c&&((f=c.observable)==null||f.K(void 0),c.B2=void 0),S.active&&S.register(n)}),!0},defineProperty:(t,e,r)=>{const s=e in t,n=Reflect.getOwnPropertyDescriptor(t,e);if(n&&Nr(n,r))return!0;if(!Reflect.defineProperty(t,e,r))return!1;const i=O(t);return k(()=>{var a,l,u,f,c,h,p,d;r.get?r.get&&(i.B7||(i.B7=new x),i.B7.set(e,r.get)):(a=i.B7)==null||a.delete(e),r.set?r.set&&(i.B8||(i.B8=new x),i.B8.set(e,r.set)):(l=i.B8)==null||l.delete(e),s!==!!r.enumerable&&((u=i.keys)==null||u.observable.K(0),(c=(f=i.has)==null?void 0:f.get(e))==null||c.observable.K(!!r.enumerable));const v=(h=i.B3)==null?void 0:h.get(e);if(g.active&&g.registerWith(v==null?void 0:v.B2,i,e),v!=null&&v.B2&&T(v.B2,"B4",i),v)if("get"in r)(p=v.observable)==null||p.K(r.get),v.B2=void 0;else{const y=r.value;(d=v.observable)==null||d.K(y),v.B2=W(y)?Y.get(y)||ut(y,i):void 0}v!=null&&v.B2&&L(v.B2,"B4",i),g.active&&g.registerWith(v==null?void 0:v.B2,i,e),S.active&&S.register(i)}),!0},has:(t,e)=>{if(e===ot||e===at)return!0;const r=e in t;if(st()){const s=O(t);s.has||(s.has=new x);const n=s.has.get(e)||s.has.B0(e,Er(s,e,r));n.B1(),n.observable.I()}return r},ownKeys:t=>{const e=Reflect.ownKeys(t);if(st()){const r=O(t);r.keys||(r.keys=Br(r)),r.keys.B1(),r.keys.observable.I()}return e}},ut=(t,e)=>{const r=new Proxy(t,br),s=(e==null?void 0:e.P)||V.A,{B7:n,B8:o}=mr(t),i={B4:e,store:r,P:s};return n&&(i.B7=n),o&&(i.B8=o),Y.set(t,i),i},O=t=>{const e=Y.get(t);if(!e)throw new Error("Impossible");return e},se=t=>O(Z(t)),Br=t=>{const e=Q(t,0,{equals:!1});return new pr(t,e)},wr=t=>{const e=Q(t,0,{equals:!1});return new gr(t,e)},Er=(t,e,r)=>{const s=Q(t,r);return new Ar(t,e,s)},Q=(t,e,r)=>{const s=new Ct(e,r);return s.P=t.P,s},kt=(t,e,r)=>{const n=W(r)?Y.get(r)||ut(r,t):void 0,o=new Sr(t,e,void 0,n);return t.B3||(t.B3=new x),t.B3.set(e,o),o},mr=t=>{if(vt(t))return{};let e,r;const s=Reflect.ownKeys(t);for(let n=0,o=s.length;n<o;n++){const i=s[n],a=Object.getOwnPropertyDescriptor(t,i);if(!a)continue;const{get:l,set:u}=a;l&&(e||(e=new x),e.set(i,l)),u&&(r||(r=new x),r.set(i,u))}return{B7:e,B8:r}},Or=t=>j(t)?t:(Y.get(t)||ut(t)).store,Z=t=>j(t)?t[at]:t,Nr=(t,e)=>!!t.configurable==!!e.configurable&&!!t.enumerable==!!e.enumerable&&!!t.writable==!!e.writable&&pt(t.D,e.D)&&t.get===e.get&&t.set===e.set,st=()=>R.A,W=t=>{if(t===null||typeof t!="object")return!1;if(vt(t))return!0;const e=Object.getPrototypeOf(t);return e===null?!0:Object.getPrototypeOf(e)===null},tt=(t,e)=>W(t)?Or(t):t;tt.on=(t,e)=>{const r=Se(t),s=r.filter(I),n=r.filter(j).map(se);S.active+=1;const o=s.map(i=>{let a=!1;return re(()=>{a&&(S.A4.add(e),w.schedule()),a=!0,i()})});return n.forEach(i=>{L(i,"B5",e)}),()=>{S.active-=1,o.forEach(i=>{i()}),n.forEach(i=>{T(i,"B5",e)})}};tt._onRoots=(t,e)=>{if(!j(t))return $t;const r=se(t);if(r.B4)throw new Error("Only top-level stores are supported");return g.active+=1,L(r,"B6",e),()=>{g.active-=1,T(r,"B6",e)}};tt.reconcile=(()=>{const t=s=>vt(s)?1:W(s)?2:0,e=(s,n)=>{const o=Z(s),i=Z(n),a=Object.keys(o),l=Object.keys(i);for(let u=0,f=l.length;u<f;u++){const c=l[u],h=o[c],p=i[c];if(pt(h,p))h===void 0&&!(c in o)&&(s[c]=void 0);else{const d=t(h),v=t(p);d&&d===v?(e(s[c],p),d===1&&(s[c].length=p.length)):s[c]=p}}for(let u=0,f=a.length;u<f;u++){const c=a[u];c in i||delete s[c]}return s};return(s,n)=>k(()=>Ft(()=>e(s,n)))})();tt.unwrap=t=>Z(t);var xr=tt;function Lr(t,e){return Ke(new Ct(t,e))}var Tr=Lr,Rr=()=>{const t=B.A;return e=>t.S(()=>e())},ne=Rr,P=Ft,Pr=!!globalThis.VOBY_HMR,Mr=Symbol("Template Accessor"),Cr={},Ir=t=>(t[Zt]=!0,t),_t=Ir,Vt=document.createComment.bind(document,""),Fr=document.createElement.bind(document),Kr=document.createElementNS.bind(document,"http://www.w3.org/2000/svg"),X=document.createTextNode.bind(document),{assign:ie}=Object,oe=t=>M(t)?t:[t],Hr=t=>{for(let e=0,r=t.length;e<r;e++)if(!!M(t[e]))return t.flat(1/0);return t},{isArray:M}=Array,kr=t=>typeof t=="boolean",_=t=>typeof t=="function",E=t=>t==null,Vr=t=>t instanceof Node,C=t=>typeof t=="string",G=t=>!!t.isSVG,Wr=(()=>{const t=/^(t(ext$|s)|s[vwy]|g)|^set|tad|ker|p(at|s)|s(to|c$|ca|k)|r(ec|cl)|ew|us|f($|e|s)|cu|n[ei]|l[ty]|[GOP]/,e={};return r=>{const s=e[r];return s!==void 0?s:e[r]=!r.includes("-")&&t.test(r)}})(),qr=t=>_(t)&&Mr in t,ae=t=>t==null||typeof t=="boolean"||typeof t=="symbol",Yr=Ze,Gr=t=>{const e=Yr(),r=ne();queueMicrotask(()=>{e()||r(t)})},le=Gr,m=re,N=jt,Ot=j,z=er,Nt=xr,ue=It,Ur=t=>gt in t?t:t(F),H=class{constructor(t){this.observable=Ur(t)}init(t){fr(this.observable,this),this.call(t,P(t)),ue(this)}call(){arguments.length===1?this.cleanup():this.update(arguments[1],arguments[2])}cleanup(){ee(this.observable,this)}},$r=class extends H{constructor(t,e,r){super(t),this.element=e,this.key=r,this.init(t)}update(t){dt(this.element,this.key,t)}},Jr=class extends H{constructor(t,e,r){super(t),this.element=e,this.key=r,this.init(t)}update(t){D(this.element,this.key,t)}},Qr=class extends H{constructor(t,e,r){super(t),this.element=e,this.value=r,this.init(t)}update(t,e){Lt(this.element,this.value,t,e)}},Zr=class extends H{constructor(t,e,r){super(t),this.element=e,this.event=r,this.init(t)}update(t){he(this.element,this.event,t)}},Xr=class extends H{constructor(t,e,r){super(t),this.element=e,this.key=r,this.init(t)}update(t){Tt(this.element,this.key,t)}},zr=class extends H{constructor(t,e,r){super(t),this.element=e,this.key=r,this.init(t)}update(t){ht(this.element,this.key,t)}},Dr=class extends H{constructor(t,e){super(t),this.element=e,this.init(t)}update(t,e){Rt(this.element,t,e)}},jr=(t,e,r)=>{const{className:s}=t;if(C(s))if(s){if(!r&&s===e){t.className="";return}}else if(r){t.className=e;return}else return;e.includes(" ")?e.split(" ").forEach(n=>{!n.length||t.classList.toggle(n,!!r)}):t.classList.toggle(e,!!r)},ct=document.createComment(""),yt=[ct],bt=[ct],ts=(t,e,r,s)=>{if(e===r)return;e instanceof Node&&(yt[0]=e,e=yt),r instanceof Node&&(bt[0]=r,r=bt);const n=r.length;let o=e.length,i=n,a=0,l=0,u=null,f;for(;a<o||l<i;)if(o===a){const c=i<n?l?r[l-1].nextSibling:r[i-l]:s;l<i&&(c?c.before.apply(c,r.slice(l,i)):t.append.apply(t,r.slice(l,i)),l=i)}else if(i===l)for(;a<o;)(!u||!u.has(e[a]))&&(f=e[a],t.removeChild(f)),a++;else if(e[a]===r[l])a++,l++;else if(e[o-1]===r[i-1])o--,i--;else if(e[a]===r[i-1]&&r[l]===e[o-1]){const c=e[--o].nextSibling;t.insertBefore(r[l++],e[a++].nextSibling),t.insertBefore(r[--i],c),e[o]=r[i]}else{if(!u){u=new Map;let c=l;for(;c<i;)u.set(r[c],c++)}if(u.has(e[a])){const c=u.get(e[a]);if(l<c&&c<i){let h=a,p=1;for(;++h<o&&h<i&&u.get(e[h])===c+p;)p++;if(p>c-l){const d=e[a];l<c&&(d?d.before.apply(d,r.slice(l,c)):t.append.apply(t,r.slice(l,c)),l=c)}else t.replaceChild(r[l++],e[a++])}else a++}else f=e[a++],t.removeChild(f)}yt[0]=ct,bt[0]=ct},es=ts,rs=[],K={make:()=>({values:void 0,length:0}),makeWithNode:t=>({values:t,length:1}),makeWithFragment:t=>({values:t,fragmented:!0,length:1}),getChildrenFragmented:(t,e=[])=>{const{values:r,length:s}=t;if(!s)return e;if(r instanceof Array)for(let n=0,o=r.length;n<o;n++){const i=r[n];i instanceof Node?e.push(i):K.getChildrenFragmented(i,e)}else r instanceof Node?e.push(r):K.getChildrenFragmented(r,e);return e},getChildren:t=>t.length?t.fragmented?t.length===1?K.getChildren(t.values):K.getChildrenFragmented(t):t.values:rs,pushFragment:(t,e)=>{K.pushValue(t,e),t.fragmented=!0},pushNode:(t,e)=>{K.pushValue(t,e)},pushValue:(t,e)=>{const{values:r,length:s}=t;s===0?t.values=e:s===1?t.values=[r,e]:r.push(e),t.length+=1},replaceWithNode:(t,e)=>{t.values=e,delete t.fragmented,t.length=1},replaceWithFragment:(t,e)=>{t.values=e.values,t.fragmented=e.fragmented,t.length=e.length}},A=K,ft=(t,e,r=!1)=>{if(_(t))Zt in t||gt in t?ft(t(),e,r):m(()=>{ft(t(),e,!0)});else if(M(t)){const s=ss(t.flat(1/0));s[Et]=t[Et],s.some(N)?m(()=>{e(ce(s,[]),!0)}):e(s,r)}else e(t,r)},xt=(t,e={})=>{if(C(t))t.split(/\s+/g).filter(Boolean).filter(r=>{e[r]=!0});else if(_(t))xt(t(),e);else if(M(t))t.forEach(r=>{xt(r,e)});else if(t)for(const r in t){const s=t[r];!z(s)||(e[r]=!0)}return e},ce=(t,e)=>{for(;N(t);)t=t();if(M(t))for(let r=0,s=t.length;r<s;r++)ce(t[r],e);else ae(t)||e.push(t);return e},ss=t=>{for(let e=0,r=t.length;e<r;e++){const s=t[e],n=typeof s;(n==="string"||n==="number"||n==="bigint")&&(t[e]=X(s))}return t},dt=(()=>{const t=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),e=/e(r[HRWrv]|[Vawy])|Con|l(e[Tcs]|c)|s(eP|y)|a(t[rt]|u|v)|Of|Ex|f[XYa]|gt|hR|d[Pg]|t[TXYd]|[UZq]/,r={},s=/[A-Z]/g,n=o=>r[o]||(r[o]=e.test(o)?o:o.replace(s,i=>`-${i.toLowerCase()}`));return(o,i,a)=>{G(o)?(i=i==="xlinkHref"||i==="xlink:href"?"href":n(i),E(a)||a===!1&&t.has(i)?o.removeAttribute(i):o.setAttribute(i,String(a))):E(a)||a===!1&&t.has(i)?o.removeAttribute(i):(a=a===!0?"":String(a),o.setAttribute(i,a))}})(),ns=(t,e,r)=>{_(r)?N(r)?new $r(r,t,e):m(()=>{dt(t,e,r())}):dt(t,e,r)},is=(t,e)=>{if(e.nodeType===3)return e.nodeValue=t,e;{const r=e.parentElement;if(!r)throw new Error("Invalid child replacement");const s=X(t);return r.replaceChild(s,e),s}},fe=(t,e,r,s)=>{if(!s&&r===void 0)return;const n=A.getChildren(e),o=n instanceof Array,i=o?n.length:1,a=o?n[0]:n,l=o?n[i-1]:n,u=(l==null?void 0:l.nextSibling)||null;if(i===0){const d=typeof r;if(d==="string"||d==="number"||d==="bigint"){const v=X(r);t.appendChild(v),A.replaceWithNode(e,v);return}else if(d==="object"&&r!==null&&typeof r.nodeType=="number"){const v=r;t.insertBefore(v,null),A.replaceWithNode(e,v);return}}if(i===1){const d=typeof r;if(d==="string"||d==="number"||d==="bigint"){const v=is(String(r),a);A.replaceWithNode(e,v);return}}const f=A.make(),c=Array.isArray(r)?r:[r];for(let d=0,v=c.length;d<v;d++){const y=c[d],U=typeof y;if(U==="string"||U==="number"||U==="bigint")A.pushNode(f,X(y));else if(U==="object"&&y!==null&&typeof y.nodeType=="number")A.pushNode(f,y);else if(U==="function"){const Kt=A.make();A.pushFragment(f,Kt),ft(y,fe.bind(void 0,t,Kt))}}let h=A.getChildren(f),p=f.length;if(!(p===0&&i===1&&a.nodeType===8)){if(p===0||i===1&&a.nodeType===8||c[Et]){const{childNodes:d}=t;if(d.length===i){if(t.textContent="",p===0){const v=Vt();A.pushNode(f,v),h!==f.values&&(h=v,p+=1)}u?h instanceof Array?u.before.apply(u,h):t.insertBefore(h,u):h instanceof Array?t.append.apply(t,h):t.append(h),A.replaceWithFragment(e,f);return}}if(p===0){const d=Vt();A.pushNode(f,d),h!==f.values&&(h=d,p+=1)}try{es(t,n,h,u)}catch(d){if(Pr)console.error(d);else throw d}A.replaceWithFragment(e,f)}},de=(t,e,r=A.make())=>{ft(e,fe.bind(void 0,t,r))},D=jr,Bt=(t,e,r)=>{_(r)?N(r)?new Jr(r,t,e):m(()=>{D(t,e,r())}):D(t,e,r)},Lt=(t,e,r,s)=>{s&&s!==!0&&D(t,s,!1),r&&r!==!0&&D(t,r,e)},wt=(t,e,r)=>{if(_(r))if(N(r))new Qr(r,t,e);else{let s;m(()=>{const n=r();Lt(t,e,n,s),s=n})}else Lt(t,e,r)},Wt=(t,e,r)=>{if(C(e))G(t)?t.setAttribute("class",e):t.className=e;else{if(r)if(C(r))r&&(G(t)?t.setAttribute("class",""):t.className="");else if(M(r)){r=Nt(r);for(let s=0,n=r.length;s<n;s++)!r[s]||wt(t,!1,r[s])}else{r=Nt(r);for(const s in r)e&&s in e||Bt(t,s,!1)}if(M(e))if(Ot(e))for(let s=0,n=e.length;s<n;s++){const o=P(()=>_(e[s])?e[s]:e[J](String(s)));wt(t,!0,o)}else for(let s=0,n=e.length;s<n;s++)!e[s]||wt(t,!0,e[s]);else if(Ot(e))for(const s in e){const n=P(()=>_(e[s])?e[s]:e[J](s));Bt(t,s,n)}else for(const s in e)Bt(t,s,e[s])}},os=(t,e)=>{if(_(e)||M(e)){let r;m(()=>{const s=xt(e);Wt(t,s,r),r=s})}else Wt(t,e)},as=(()=>{const t=ne();return(e,r,s)=>{const n=Cr[r]||Symbol(),o=t(()=>Je(n));if(!o)throw new Error(`Directive "${r}" not found`);const i=()=>o.fn(e,...oe(s));o.immediate?i():le(i)}})(),he=(()=>{const t={onauxclick:["_onauxclick",!1],onbeforeinput:["_onbeforeinput",!1],onclick:["_onclick",!1],ondblclick:["_ondblclick",!1],onfocusin:["_onfocusin",!1],onfocusout:["_onfocusout",!1],oninput:["_oninput",!1],onkeydown:["_onkeydown",!1],onkeyup:["_onkeyup",!1],onmousedown:["_onmousedown",!1],onmouseup:["_onmouseup",!1]},e=r=>{const s=`_${r}`;document.addEventListener(r.slice(2),n=>{const o=n.composedPath(),i=o[0]||document;Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return i}});for(let a=0,l=o.length;a<l;a++){const u=o[a][s];if(!!u&&(u(n),n.cancelBubble))break}})};return(r,s,n)=>{const o=t[s];if(o)o[1]||(o[1]=!0,e(s)),r[o[0]]=n;else if(s.endsWith("passive")){const i=s.endsWith("capturepassive"),a=s.slice(2,-7-(i?7:0)),l=`_${s}`,u=r[l];u&&r.removeEventListener(a,u,{capture:i}),n&&r.addEventListener(a,n,{passive:!0,capture:i}),r[l]=n}else if(s.endsWith("capture")){const i=s.slice(2,-7),a=`_${s}`,l=r[a];l&&r.removeEventListener(i,l,{capture:!0}),n&&r.addEventListener(i,n,{capture:!0}),r[a]=n}else r[s]=n}})(),ls=(t,e,r)=>{N(r)?new Zr(r,t,e):he(t,e,r)},us=(t,e)=>{t.innerHTML=String(E(e)?"":e)},cs=(t,e)=>{m(()=>{us(t,z(z(e).__html))})},Tt=(t,e,r)=>{e==="tabIndex"&&kr(r)&&(r=r?0:void 0),t[e]=r,E(r)&&dt(t,e,null)},fs=(t,e,r)=>{_(r)?N(r)?new Xr(r,t,e):m(()=>{Tt(t,e,r())}):Tt(t,e,r)},ds=(t,e)=>{if(E(e))return;const r=Hr(oe(e));le(()=>r.forEach(s=>s==null?void 0:s(t)))},ht=(()=>{const t=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;return(e,r,s)=>{r.charCodeAt(0)===45?E(s)?e.style.removeProperty(r):e.style.setProperty(r,String(s)):E(s)?e.style[r]=null:e.style[r]=C(s)||t.test(r)?s:`${s}px`}})(),qt=(t,e,r)=>{_(r)?N(r)?new zr(r,t,e):m(()=>{ht(t,e,r())}):ht(t,e,r)},Rt=(t,e,r)=>{if(C(e))t.setAttribute("style",e);else{if(r)if(C(r))r&&(t.style.cssText="");else{r=Nt(r);for(const s in r)e&&s in e||ht(t,s,null)}if(Ot(e))for(const s in e){const n=P(()=>_(e[s])?e[s]:e[J](s));qt(t,s,n)}else for(const s in e)qt(t,s,e[s])}},hs=(t,e)=>{if(_(e))if(N(e))new Dr(e,t);else{let r;m(()=>{const s=e();Rt(t,s,r),r=s})}else Rt(t,e)},vs=(t,e,r)=>{if(e==="children"){const s=X("");t.insertBefore(s,null),r(t,"setChildReplacement",void 0,s)}else e==="ref"?r(t,"setRef"):e==="style"?r(t,"setStyles"):e==="class"?(G(t)||(t.className=""),r(t,"setClasses")):e==="dangerouslySetInnerHTML"?r(t,"setHTML"):e.charCodeAt(0)===111&&e.charCodeAt(1)===110?r(t,"setEvent",e.toLowerCase()):e.charCodeAt(0)===117&&e.charCodeAt(3)===58?r(t,"setDirective",e.slice(4)):e==="innerHTML"||e==="outerHTML"||e==="textContent"||e==="className"||(e in t&&!G(t)?r(t,"setProperty",e):(t.setAttribute(e,""),r(t,"setAttribute",e)))},ps=(t,e,r)=>{qr(r)?vs(t,e,r):e==="children"?de(t,r):e==="ref"?ds(t,r):e==="style"?hs(t,r):e==="class"?os(t,r):e==="dangerouslySetInnerHTML"?cs(t,r):e.charCodeAt(0)===111&&e.charCodeAt(1)===110?ls(t,e.toLowerCase(),r):e.charCodeAt(0)===117&&e.charCodeAt(3)===58?as(t,e.slice(4),r):e==="innerHTML"||e==="outerHTML"||e==="textContent"||e==="className"||(e in t&&!G(t)?fs(t,e,r):ns(t,e,r))},gs=(t,e)=>{for(const r in e)ps(t,r,e[r])},As=(t,e,...r)=>{const{children:s,key:n,ref:o,...i}=e||{},a=r.length===1?r[0]:r.length===0?s:r;if(_(t)){const l=i;return E(a)||(l.children=a),E(o)||(l.ref=o),_t(()=>P(()=>t.call(t,l)))}else if(C(t)){const l=i,u=Wr(t),f=u?Kr:Fr;return ae(a)||(l.children=a),E(o)||(l.ref=o),_t(()=>{const c=f(t);return u&&(c.isSVG=!0),P(()=>gs(c,l)),c})}else{if(Vr(t))return _t(()=>t);throw new Error("Invalid component")}},ve=As,b=(t,e)=>ve(t,e);var Ss=Tr,_s=vr,ys=(t,e)=>{if(!e||!(e instanceof HTMLElement))throw new Error("Invalid parent node");return e.textContent="",_s(r=>(de(e,t),()=>{r(),e.textContent=""}))},bs=ys,Bs=({loop:t,callback:e,cancel:r,schedule:s})=>{let n;const o=l=>{z(t)&&i(),z(e,!1)(l)},i=()=>{n=P(()=>s(o))},a=()=>{P(()=>r(n))};return i(),ue(a),a},ws=Bs,Es=t=>ws({callback:t,loop:!0,cancel:cancelAnimationFrame,schedule:requestAnimationFrame}),ms=Es,pe=function(t,e,r,s){var n;e[0]=0;for(var o=1;o<e.length;o++){var i=e[o++],a=e[o]?(e[0]|=i?1:2,r[e[o++]]):e[++o];i===3?s[0]=a:i===4?s[1]=Object.assign(s[1]||{},a):i===5?(s[1]=s[1]||{})[e[++o]]=a:i===6?s[1][e[++o]]+=a+"":i?(n=t.apply(a,pe(t,a,r,["",null])),s.push(n),a[0]?e[0]|=2:(e[o-2]=0,e[o]=n)):s.push(a)}return s},Yt=new Map;function Os(t){var e=Yt.get(this);return e||(e=new Map,Yt.set(this,e)),(e=pe(this,e.get(t)||(e.set(t,e=function(r){for(var s,n,o=1,i="",a="",l=[0],u=function(h){o===1&&(h||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,h,i):o===3&&(h||i)?(l.push(3,h,i),o=2):o===2&&i==="..."&&h?l.push(4,h,0):o===2&&i&&!h?l.push(5,0,!0,i):o>=5&&((i||!h&&o===5)&&(l.push(o,0,i,n),o=6),h&&(l.push(o,h,0,n),o=6)),i=""},f=0;f<r.length;f++){f&&(o===1&&u(),u(f));for(var c=0;c<r[f].length;c++)s=r[f][c],o===1?s==="<"?(u(),l=[l],o=3):i+=s:o===4?i==="--"&&s===">"?(o=1,i=""):i=s+i[0]:a?s===a?a="":i+=s:s==='"'||s==="'"?a=s:s===">"?(u(),o=1):o&&(s==="="?(o=5,n=i,i=""):s==="/"&&(o<5||r[f][c+1]===">")?(u(),o===3&&(l=l[0]),o=l,(l=l[0]).push(2,0,o),o=0):s===" "||s==="	"||s===`
`||s==="\r"?(u(),o=2):i+=s),o===3&&i==="!--"&&(o=4,l=l[0])}return u(),l}(t)),e),arguments,[])).length>1?e:e[0]}var ge={},Ns=(t,e,...r)=>ve(ge[t]||t,e,...r),xs=t=>void ie(ge,t);ie(Os.bind(Ns),{register:xs});const $=({length:t,limit:e=94,stationary:r,...s})=>b("line",{y1:r?t-e:void 0,y2:-(r?e:t),strokeLinecap:"round",...s}),Gt=60,Ls=()=>{const t=()=>(Date.now()-new Date().setHours(0,0,0,0))/1e3,e=Ss(t()),r=(a,l=1)=>`rotate(${(a*360).toFixed(l)})`,s=()=>r(e()%1,0),n=()=>r(e()%60/60),o=()=>r(e()/60%60/60),i=()=>r(e()/60/60%12/12);return ms(()=>e(t())),b("div",{class:"flex items-center justify-center h-screen @dark:bg-neutral-700",children:b("svg",{viewBox:"0 0 200 200",class:"h-95vmin",children:[b("g",{class:"translate-100px",children:[b("circle",{class:"stroke-neutral-900 @dark:stroke-neutral-100 fill-none",r:"99"}),Array.from({length:Gt},(a,l)=>({isHour:l%5===0})).map(({isHour:a},l)=>b($,{transform:r(l/Gt,0),class:a?"stroke-neutral-800 @dark:stroke-neutral-200 stroke-width-2":"stroke-neutral-400 @dark:stroke-neutral-600",length:a?7:3,stationary:!0}))]}),b("g",{class:"translate-100px",children:[b($,{transform:s,class:"stroke-neutral-200 @dark:stroke-neutral-600 stroke-width-5",length:83}),b($,{transform:i,class:"stroke-neutral-800 @dark:stroke-neutral-200 stroke-width-4",length:50}),b($,{transform:o,class:"stroke-neutral-800 @dark:stroke-neutral-200 stroke-width-3",length:70}),b($,{transform:n,class:"stroke-red-500 stroke-width-2",length:77})]})]})})};bs(b(Ls,{}),document.querySelector("#root"));

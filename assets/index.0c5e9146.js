(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();var $=(t,e)=>{t instanceof Array?t.forEach(e):t&&e(t)},J=(t,e,s)=>{const r=t[e];r instanceof Array?r.push(s):r?t[e]=[r,s]:t[e]=s},vt=(t,e,s)=>{const r=t[e];if(r instanceof Set)r.add(s);else if(r){const n=new Set;n.add(r),n.add(s),t[e]=n}else t[e]=s},pt=(t,e,s)=>{const r=t[e];r instanceof Set?r.delete(s):r===s&&(t[e]=void 0)},ae=(t,e)=>t instanceof Set?t.has(e):t===e,Pt=t=>t instanceof Error?t:typeof t=="string"?new Error(t):new Error("Unknown error"),{isArray:It}=Array,V=t=>typeof t=="function",le=t=>typeof t=="number",ue=t=>t!==null&&typeof t=="object",ce=(t,e)=>Math.max(t,e),fe=class{AC(t){J(this,"A2",t)}AD(t){J(this,"AE",t)}A6(t){J(this,"E",t)}T(t){J(this,"A1",t)}AF(t){vt(this,"AB",t)}AG(t){pt(this,"AB",t)}catch(t,e){const{AE:s,O:r}=this;if(s)return $(s,n=>n.call(n,t)),!0;if(r!=null&&r.catch(t,!0))return!0;if(e)return!1;throw t}U(t,e){const{A1:s,E:r,A2:n,AE:i,AH:o}=this;s&&(this.A1=void 0,$(s,a=>{a.U(!0,!0)})),r&&(this.E=void 0,e?$(r,a=>{!a.disposed&&!a.P.disposed&&a.A8(this)}):this.AI=r),n&&(this.A2=void 0,this.R=!0,$(n,a=>a.call(a)),this.R=!1),i&&(this.AE=void 0),o&&(this.AH=void 0)}V(){const t=this.AI;if(!t)return;this.AI=void 0;const e=this.E;if(t===e)return;const s=t instanceof Array?t:[t],r=e instanceof Array?e:e?[e]:[];let n;for(let i=0,o=s.length;i<o;i++){const a=s[i];a.disposed||a.P.disposed||a!==r[i]&&(n||(n=new Set(r)),!n.has(a)&&a.A8(this))}}I(t){const{AH:e,O:s}=this;return e&&t in e?e[t]:s==null?void 0:s.I(t)}K(t,e){this.AH||(this.AH={}),this.AH[t]=e}S(t,e=!1){const s=S.A,r=Z.A;S.A=this,Z.A=e;let n;try{n=t()}catch(i){this.catch(Pt(i),!1)}finally{S.A=s,Z.A=r}return n}},Et=fe,de=class extends Et{constructor(){super(...arguments),this.disposed=!1}},he=de,K={A:void 0},ve=()=>!1,pe=Object.is,ge=()=>{},Ft=new he,S={A:Ft},R={A:Ft},N=Symbol("Observable"),it=Symbol("Frozen"),Ae=Symbol("Readable"),Se=Symbol("Writable"),_e=Symbol("Unwrapped"),X=Symbol("Store"),U=Symbol("Observable"),z=Symbol("Target"),Ht=Symbol("Values"),be=Symbol("Untracked"),Z={A:!1},Nt=(t,e)=>e.K(t),ye=(t,e)=>e.Q(1,!1),we=(t,e)=>e.Q(-1,!1),Ee=t=>{if(K.A)return t();{const e=K.A=new Map;try{return t()}finally{K.A=void 0,e.size>1?(e.forEach(ye),e.forEach(Nt),e.forEach(we)):e.forEach(Nt)}}},F=Ee;function me(){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this}function Be(t){if(arguments.length){if(t===N)return this;throw new Error("A readonly Observable can not be updated")}return this.I()}function Oe(t){return arguments.length?t===N?this:V(t)?this.J(t):this.K(t):this.I()}var Kt=t=>{const e=me.bind(t);return e[N]=!0,e[it]=!0,e},kt=t=>{const e=Be.bind(t);return e[N]=!0,e[Ae]=!0,e},Ne=t=>{const e=Oe.bind(t);return e[N]=!0,e[Se]=!0,e},D=t=>t&3,lt=(t,e)=>t>>>2<<2|e,xe=t=>!!(t&4),Le=(t,e)=>t|(e?4:0),gt=t=>t>>>3,Te=(t,e)=>t+(e<<3),Re=class extends Et{constructor(){super(...arguments),this.O=S.A,this.P=R.A,this.status=0}Q(t,e){t<0&&!gt(this.status)||(this.status=Te(this.status,t),this.status=Le(this.status,e),!gt(this.status)&&(e=xe(this.status),this.status=D(this.status),!this.R&&this.J(e)))}J(t){}S(t,e=!0){return super.S(t,e)}},Ut=Re,Me=class{constructor(t,e,s){this.P=R.A,this.D=t,s&&(this.O=s),(e==null?void 0:e.equals)!==void 0&&(this.equals=e.equals||ve)}A3(t){t.call(t,this.D),!ae(this.A4,t)&&vt(this,"A4",t)}T(t){vt(this,"A1",t)}A5(){this.disposed||this.P.disposed||(Z.A&&(this.T(S.A),S.A.A6(this)),this.O&&gt(this.O.status)&&(this.O.status=D(this.O.status),this.O.J(!0)))}A7(t){pt(this,"A4",t)}A8(t){pt(this,"A1",t)}I(){return this.A5(),this.D}K(t){if(this.disposed)throw new Error("A disposed Observable can not be updated");if(K.A)return K.A.set(this,t),t;{const s=!(this.equals||pe)(t,this.D);if(!this.O){if(!s)return t;this.P.disposed||this.Q(1,s)}if(s){const r=this.D;this.D=t,this.A9(r)}return this.P.disposed||this.Q(-1,s),t}}J(t){const e=t(this.D);return this.K(e)}Q(t,e){if(this.disposed||this.P.disposed)return;const s=this.A1;if(s)if(s instanceof Set)for(const r of s)r.Q(t,e);else s.Q(t,e)}A9(t){if(this.disposed||this.P.disposed)return;const{A4:e}=this;if(e)if(e instanceof Set)for(const s of e)s.call(s,this.D,t);else e.call(e,this.D,t)}U(){this.disposed=!0}},nt=Me;new nt(void 0);var Ce=t=>V(t)&&N in t,ot=Ce,Pe=t=>ot(t)&&it in t,Wt=Pe,Ie=t=>{S.A.AC(t)},mt=Ie;function Fe(t,e){return arguments.length<2?S.A.I(t):S.A.K(t,e)}var He=Fe,Ke=()=>{const t=new nt(!1);return mt(()=>{t.K(!0)}),kt(t)},ke=Ke,Ue=()=>{},Yt=Ue,We=class extends Ut{constructor(t,e){super(),this.B=t,this.O.T(this),e&&Yt()?this.Q(1,!0):this.J(!0)}J(t){if(t&&!this.P.disposed){const e=D(this.status);if(e)this.status=lt(this.status,t?3:ce(e,2));else{this.status=lt(this.status,1),this.U();try{const s=this.S(this.B);this.V(),V(s)?this.AC(s):!this.A1&&!this.E&&!this.A2&&this.U(!0,!0)}catch(s){this.V(),this.catch(Pt(s),!1)}finally{const s=D(this.status);this.status=lt(this.status,0),s>1&&this.J(s===3)}}}}},Ye=We;function qe(t,e=!0){return(e?V:ot)(t)?t():t}var Ge=qe,Ve=t=>ue(t)&&X in t,Bt=Ve;function $e(t){return V(t)?S.A.S(()=>t(),!1):t}var Je=$e,Qe=class extends Et{constructor(t){super(),this.O=S.A,t&&le(Yt())&&(this.AL=!0,this.O.AF(this))}U(t,e){this.disposed=!0,this.AL&&this.O.AG(this),super.U(t,e)}S(t){const e=this.U.bind(this,!0,!0),s=t.bind(void 0,e),r=R.A;R.A=this;try{return super.S(s)}finally{R.A=r}}},Ze=Qe;Kt(-1);Kt(-1);var Xe=t=>ot(t)?t(N):t,qt=Xe,ze=(t,e)=>{Wt(t)||qt(t).A7(e)},Gt=ze,De=(t,e)=>(Wt(t)?e.call(e,t()):qt(t).A3(e),()=>{Gt(t,e)}),je=De,ts=t=>{const e=new Ye(t);return e.E||(e.B=ge),e.U.bind(e,!0,!0)},es=ts,ss=t=>new Ze(!0).S(t),rs=ss,B=class extends Map{B1(t,e){return super.set(t,e),e}},at=class{constructor(){this.F=0}B2(){this.F+=1,mt(this)}call(){this.F-=1,!this.F&&this.U()}U(){}},is=class extends at{constructor(t,e){super(),this.O=t,this.observable=e}U(){this.O.keys=void 0}},ns=class extends at{constructor(t,e){super(),this.O=t,this.observable=e}U(){this.O.values=void 0}},os=class extends at{constructor(t,e,s){super(),this.O=t,this.C=e,this.observable=s}U(){var t;(t=this.O.has)===null||t===void 0||t.delete(this.C)}},as=class extends at{constructor(t,e,s,r){super(),this.O=t,this.C=e,this.observable=s,this.B3=r}U(){var t;(t=this.O.B4)===null||t===void 0||t.delete(this.C)}},M=new WeakMap,ls=new Set([X,U,z,Ht]),us=new Set(["__proto__","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__","prototype","constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toSource","toString","valueOf"]),cs={get:(t,e)=>{var s,r;if(ls.has(e)){if(e===X)return!0;if(e===z)return t;if(e===Ht&&Q()){const c=m(t);c.values||(c.values=ds(c)),c.values.B2(),c.values.observable.I()}if(e===U)return c=>{var d;c=typeof c=="number"?String(c):c;const f=m(t),v=(d=f.B5)===null||d===void 0?void 0:d.get(c);if(v)return v.bind(f.store);f.B4||(f.B4=new B);const h=t[c],p=f.B4.get(c)||f.B4.B1(c,xt(f,c,h));return p.observable||(p.observable=W(f,h)),kt(p.observable)}}if(us.has(e))return t[e];const n=m(t),i=(s=n.B5)===null||s===void 0?void 0:s.get(e),o=i||t[e];n.B4||(n.B4=new B);const a=Q(),l=k(o),u=a||l?n.B4.get(e)||n.B4.B1(e,xt(n,e,o)):void 0;return a&&u&&(u.B2(),u.observable||(u.observable=W(n,o)),u.observable.I()),i?i.call(n.store):typeof o=="function"&&o===Array.prototype[e]?function(){return F(()=>o.apply(n.store,arguments))}:((r=u==null?void 0:u.B3)===null||r===void 0?void 0:r.store)||o},set:(t,e,s)=>{var r;s=Vt(s);const n=m(t),i=(r=n.B6)===null||r===void 0?void 0:r.get(e);if(i)F(()=>i.call(n.store,s));else{const o=e in t;t[e]=s,F(()=>{var a,l,u,c,d,f;(a=n.values)===null||a===void 0||a.observable.K(0),o||((l=n.keys)===null||l===void 0||l.observable.K(0),(c=(u=n.has)===null||u===void 0?void 0:u.get(e))===null||c===void 0||c.observable.K(!0));const v=(d=n.B4)===null||d===void 0?void 0:d.get(e);v&&((f=v.observable)===null||f===void 0||f.K(s),v.B3=k(s)?M.get(s)||j(s,n):void 0)})}return!0},deleteProperty:(t,e)=>{if(!(e in t))return!0;if(!Reflect.deleteProperty(t,e))return!1;const n=m(t);return F(()=>{var i,o,a,l,u,c;(i=n.keys)===null||i===void 0||i.observable.K(0),(o=n.values)===null||o===void 0||o.observable.K(0),(l=(a=n.has)===null||a===void 0?void 0:a.get(e))===null||l===void 0||l.observable.K(!1);const d=(u=n.B4)===null||u===void 0?void 0:u.get(e);d&&((c=d.observable)===null||c===void 0||c.K(void 0),d.B3=void 0)}),!0},defineProperty:(t,e,s)=>{const r=e in t;if(!Reflect.defineProperty(t,e,s))return!1;const i=m(t);return F(()=>{var o,a,l,u,c,d,f,v;s.get?s.get&&(i.B5||(i.B5=new B),i.B5.set(e,s.get)):(o=i.B5)===null||o===void 0||o.delete(e),s.set?s.set&&(i.B6||(i.B6=new B),i.B6.set(e,s.set)):(a=i.B6)===null||a===void 0||a.delete(e),r!==!!s.enumerable&&((l=i.keys)===null||l===void 0||l.observable.K(0),(c=(u=i.has)===null||u===void 0?void 0:u.get(e))===null||c===void 0||c.observable.K(!!s.enumerable));const h=(d=i.B4)===null||d===void 0?void 0:d.get(e);if(h)if("get"in s)(f=h.observable)===null||f===void 0||f.K(s.get),h.B3=void 0;else{const p=s.value;(v=h.observable)===null||v===void 0||v.K(p),h.B3=k(p)?M.get(p)||j(p,i):void 0}}),!0},has:(t,e)=>{if(e===X||e===z)return!0;const s=e in t;if(Q()){const r=m(t);r.has||(r.has=new B);const n=r.has.get(e)||r.has.B1(e,hs(r,e,s));n.B2(),n.observable.I()}return s},ownKeys:t=>{const e=Reflect.ownKeys(t);if(Q()){const s=m(t);s.keys||(s.keys=fs(s)),s.keys.B2(),s.keys.observable.I()}return e}},j=(t,e)=>{const s=new Proxy(t,cs),r=(e==null?void 0:e.P)||R.A,{B5:n,B6:i}=vs(t),o={store:s,P:r};return n&&(o.B5=n),i&&(o.B6=i),M.set(t,o),o},m=t=>{const e=M.get(t);if(!e)throw new Error("Impossible");return e},fs=t=>{const e=W(t,0,{equals:!1});return new is(t,e)},ds=t=>{const e=W(t,0,{equals:!1});return new ns(t,e)},hs=(t,e,s)=>{const r=W(t,s);return new os(t,e,r)},W=(t,e,s)=>{const r=new nt(e,s);return r.P=t.P,r},xt=(t,e,s)=>{const n=k(s)?M.get(s)||j(s,t):void 0,i=new as(t,e,void 0,n);return t.B4||(t.B4=new B),t.B4.set(e,i),i},vs=t=>{if(It(t))return{};let e,s;const r=Reflect.ownKeys(t);for(let n=0,i=r.length;n<i;n++){const o=r[n],a=Object.getOwnPropertyDescriptor(t,o);if(!a)continue;const{get:l,set:u}=a;l&&(e||(e=new B),e.set(o,l)),u&&(s||(s=new B),s.set(o,u))}return{B5:e,B6:s}},ps=t=>Bt(t)?t:(M.get(t)||j(t)).store,Vt=t=>Bt(t)?t[z]:t,Q=()=>S.A instanceof Ut,k=t=>{if(t===null||typeof t!="object")return!1;if(It(t))return!0;const e=Object.getPrototypeOf(t);return e===null?!0:Object.getPrototypeOf(e)===null},$t=(t,e)=>k(t)?ps(t):t;$t.unwrap=t=>Vt(t);var gs=$t;function As(t,e){return Ne(new nt(t,e))}var Ss=As,_s=()=>{const t=S.A;return e=>t.S(()=>e())},Jt=_s,C=Je,bs=ke,ys=t=>{const e=bs(),s=Jt();queueMicrotask(()=>{e()||s(t)})},Qt=ys,y=es,E=ot,At=Bt,Y=Ge,St=gs,Zt=mt,ws=!!globalThis.VOBY_HMR,Xt=Symbol("Element"),Es=Symbol("Template Accessor"),ms={};function Bs(){return C(this)}function Os(t){const e=Bs.bind(t);return e[Xt]=!0,e[_e]=!0,e[be]=!0,e}var ut=Os,Lt=document.createComment.bind(document,""),Ns=document.createElement.bind(document),xs=document.createElementNS.bind(document,"http://www.w3.org/2000/svg"),q=document.createTextNode.bind(document),{assign:zt}=Object,Dt=t=>O(t)?t:[t],Ls=t=>{for(let e=0,s=t.length;e<s;e++)if(!!O(t[e]))return t.flat(1/0);return t},{isArray:O}=Array,Ts=t=>typeof t=="boolean",A=t=>typeof t=="function",b=t=>t==null,Rs=t=>t instanceof Node,w=t=>typeof t=="string",P=t=>!!t.isSVG,Ms=(()=>{const t=/^(t(ext$|s)|s[vwy]|g)|^set|tad|ker|p(at|s)|s(to|c$|ca|k)|r(ec|cl)|ew|us|f($|e|s)|cu|n[ei]|l[ty]|[GOP]/,e={};return s=>s in e?e[s]:e[s]=t.test(s)&&s.indexOf("-")===-1})(),Cs=t=>A(t)&&Es in t,jt=t=>t==null||typeof t=="boolean"||typeof t=="symbol",Ps=t=>it in t?t:t(N),T=class{constructor(t){this.observable=Ps(t)}init(){je(this.observable,this),Zt(this)}call(){arguments.length===1?this.cleanup():this.update(arguments[1],arguments[2])}cleanup(){Gt(this.observable,this)}},Is=class extends T{constructor(t,e,s){super(t),this.element=e,this.key=s,this.init()}update(t){st(this.element,this.key,t)}},Fs=class extends T{constructor(t,e,s){super(t),this.element=e,this.key=s,this.init()}update(t){G(this.element,this.key,t)}},Hs=class extends T{constructor(t,e,s){super(t),this.element=e,this.value=s,this.init()}update(t,e){bt(this.element,this.value,t,e)}},Ks=class extends T{constructor(t,e,s){super(t),this.element=e,this.event=s,this.init()}update(t){re(this.element,this.event,t)}},ks=class extends T{constructor(t,e,s){super(t),this.element=e,this.key=s,this.init()}update(t){yt(this.element,this.key,t)}},Us=class extends T{constructor(t,e,s){super(t),this.element=e,this.key=s,this.init()}update(t){rt(this.element,this.key,t)}},Ws=class extends T{constructor(t,e){super(t),this.element=e,this.init()}update(t,e){wt(this.element,t,e)}},Ys=t=>t.includes(" ")?t.split(" ").filter(Boolean):[t],qs=(t,e,s)=>{const{className:r}=t;if(w(r))if(r){if(!s&&r===e){t.className="";return}}else if(s){t.className=e;return}else return;Ys(e).forEach(n=>{t.classList.toggle(n,!!s)})},tt=document.createComment(""),ct=[tt],ft=[tt],Gs=(t,e,s,r)=>{if(e===s)return;e instanceof Node&&(ct[0]=e,e=ct),s instanceof Node&&(ft[0]=s,s=ft);const n=s.length;let i=e.length,o=n,a=0,l=0,u=null,c;for(;a<i||l<o;)if(i===a){const d=o<n?l?s[l-1].nextSibling:s[o-l]:r;l<o&&(d?d.before.apply(d,s.slice(l,o)):t.append.apply(t,s.slice(l,o)),l=o)}else if(o===l)for(;a<i;)(!u||!u.has(e[a]))&&(c=e[a],t.removeChild(c)),a++;else if(e[a]===s[l])a++,l++;else if(e[i-1]===s[o-1])i--,o--;else if(e[a]===s[o-1]&&s[l]===e[i-1]){const d=e[--i].nextSibling;t.insertBefore(s[l++],e[a++].nextSibling),t.insertBefore(s[--o],d),e[i]=s[o]}else{if(!u){u=new Map;let d=l;for(;d<o;)u.set(s[d],d++)}if(u.has(e[a])){const d=u.get(e[a]);if(l<d&&d<o){let f=a,v=1;for(;++f<i&&f<o&&u.get(e[f])===d+v;)v++;if(v>d-l){const h=e[a];l<d&&(h?h.before.apply(h,s.slice(l,d)):t.append.apply(t,s.slice(l,d)),l=d)}else t.replaceChild(s[l++],e[a++])}else a++}else c=e[a++],t.removeChild(c)}ct[0]=tt,ft[0]=tt},Vs=Gs,$s=[],L={make:()=>({values:void 0,length:0}),makeWithNode:t=>({values:t,length:1}),makeWithFragment:t=>({values:t,fragmented:!0,length:1}),getChildrenFragmented:(t,e=[])=>{const{values:s,length:r}=t;if(!r)return e;if(s instanceof Array)for(let n=0,i=s.length;n<i;n++){const o=s[n];o instanceof Node?e.push(o):L.getChildrenFragmented(o,e)}else s instanceof Node?e.push(s):L.getChildrenFragmented(s,e);return e},getChildren:t=>t.length?t.fragmented?t.length===1?L.getChildren(t.values):L.getChildrenFragmented(t):t.values:$s,pushFragment:(t,e)=>{L.pushValue(t,e),t.fragmented=!0},pushNode:(t,e)=>{L.pushValue(t,e)},pushValue:(t,e)=>{const{values:s,length:r}=t;r===0?t.values=e:r===1?t.values=[s,e]:s.push(e),t.length+=1},replaceWithNode:(t,e)=>{t.values=e,delete t.fragmented,t.length=1},replaceWithFragment:(t,e)=>{t.values=e.values,t.fragmented=e.fragmented,t.length=e.length}},g=L,et=(t,e,s=!1)=>{if(A(t))Xt in t||it in t?et(t(),e,s):y(()=>{et(t(),e,!0)});else if(O(t)){const r=Js(t.flat(1/0));r.some(E)?y(()=>{e(te(r,[]),!0)}):e(r,s)}else e(t,s)},_t=(t,e={})=>{if(w(t))t.split(/\s+/g).filter(Boolean).filter(s=>{e[s]=!0});else if(A(t))_t(t(),e);else if(O(t))t.forEach(s=>{_t(s,e)});else if(t)for(const s in t){const r=t[s];!Y(r)||(e[s]=!0)}return e},te=(t,e)=>{for(;E(t);)t=t();if(O(t))for(let s=0,r=t.length;s<r;s++)te(t[s],e);else jt(t)||e.push(t);return e},Js=t=>{for(let e=0,s=t.length;e<s;e++){const r=t[e],n=typeof r;(n==="string"||n==="number"||n==="bigint")&&(t[e]=q(r))}return t},st=(()=>{const t=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),e=/e(r[HRWrv]|[Vawy])|Con|l(e[Tcs]|c)|s(eP|y)|a(t[rt]|u|v)|Of|Ex|f[XYa]|gt|hR|d[Pg]|t[TXYd]|[UZq]/,s={},r=/[A-Z]/g,n=i=>s[i]||(s[i]=e.test(i)?i:i.replace(r,o=>`-${o.toLowerCase()}`));return(i,o,a)=>{o=o==="className"?"class":o,P(i)?(o=o==="xlinkHref"||o==="xlink:href"?"href":n(o),b(a)||a===!1&&t.has(o)?i.removeAttribute(o):i.setAttribute(o,String(a))):b(a)||a===!1&&t.has(o)?i.removeAttribute(o):(a=a===!0?"":String(a),i.setAttribute(o,a))}})(),Qs=(t,e,s)=>{A(s)?E(s)?new Is(s,t,e):y(()=>{st(t,e,s())}):st(t,e,s)},Zs=(t,e)=>{if(e.nodeType===3)return e.nodeValue=t,e;{const s=e.parentElement;if(!s)throw new Error("Invalid child replacement");const r=q(t);return s.replaceChild(r,e),r}},ee=(t,e,s,r)=>{if(!r&&s===void 0)return;const n=g.getChildren(e),i=n instanceof Array,o=i?n.length:1,a=i?n[0]:n,l=i?n[o-1]:n,u=(l==null?void 0:l.nextSibling)||null;if(o===0){const h=typeof s;if(h==="string"||h==="number"||h==="bigint"){const p=q(s);t.appendChild(p),g.replaceWithNode(e,p);return}else if(h==="object"&&s!==null&&typeof s.nodeType=="number"){const p=s;t.insertBefore(p,null),g.replaceWithNode(e,p);return}}if(o===1){const h=typeof s;if(h==="string"||h==="number"||h==="bigint"){const p=Zs(String(s),a);g.replaceWithNode(e,p);return}}const c=g.make(),d=Array.isArray(s)?s:[s];for(let h=0,p=d.length;h<p;h++){const x=d[h],I=typeof x;if(I==="string"||I==="number"||I==="bigint")g.pushNode(c,q(x));else if(I==="object"&&x!==null&&typeof x.nodeType=="number")g.pushNode(c,x);else if(I==="function"){const Ot=g.make();g.pushFragment(c,Ot),et(x,ee.bind(void 0,t,Ot))}}let f=g.getChildren(c),v=c.length;if(!(v===0&&o===1&&a.nodeType===8)){if(v===0||o===1&&a.nodeType===8){const{childNodes:h}=t;if(h.length===o){if(t.textContent="",v===0){const p=Lt();g.pushNode(c,p),f!==c.values&&(f=p,v+=1)}u?f instanceof Array?u.before.apply(u,f):t.insertBefore(f,u):f instanceof Array?t.append.apply(t,f):t.append(f),g.replaceWithFragment(e,c);return}}if(v===0){const h=Lt();g.pushNode(c,h),f!==c.values&&(f=h,v+=1)}try{Vs(t,n,f,u)}catch(h){if(ws)console.error(h);else throw h}g.replaceWithFragment(e,c)}},se=(t,e,s=g.make())=>{et(e,ee.bind(void 0,t,s))},G=qs,dt=(t,e,s)=>{A(s)?E(s)?new Fs(s,t,e):y(()=>{G(t,e,s())}):G(t,e,s)},bt=(t,e,s,r)=>{r&&r!==!0&&G(t,r,!1),s&&s!==!0&&G(t,s,e)},ht=(t,e,s)=>{if(A(s))if(E(s))new Hs(s,t,e);else{let r;y(()=>{const n=s();bt(t,e,n,r),r=n})}else bt(t,e,s)},Tt=(t,e,s)=>{if(w(e))P(t)?t.setAttribute("class",e):t.className=e;else{if(s)if(w(s))s&&(P(t)?t.setAttribute("class",""):t.className="");else if(O(s)){s=St(s);for(let r=0,n=s.length;r<n;r++)!s[r]||ht(t,!1,s[r])}else{s=St(s);for(const r in s)e&&r in e||dt(t,r,!1)}if(O(e))if(At(e))for(let r=0,n=e.length;r<n;r++){const i=C(()=>A(e[r])?e[r]:e[U](String(r)));ht(t,!0,i)}else for(let r=0,n=e.length;r<n;r++)!e[r]||ht(t,!0,e[r]);else if(At(e))for(const r in e){const n=C(()=>A(e[r])?e[r]:e[U](r));dt(t,r,n)}else for(const r in e)dt(t,r,e[r])}},Xs=(t,e)=>{if(A(e)||O(e)){let s;y(()=>{const r=_t(e);Tt(t,r,s),s=r})}else Tt(t,e)},zs=(()=>{const t=Jt();return(e,s,r)=>{const n=ms[s]||Symbol(),i=t(()=>He(n));if(!i)throw new Error(`Directive "${s}" not found`);const o=()=>i.fn(e,...Dt(r));i.immediate?o():Qt(o)}})(),re=(()=>{const t={onauxclick:"_onauxclick",onbeforeinput:"_onbeforeinput",onclick:"_onclick",ondblclick:"_ondblclick",onfocusin:"_onfocusin",onfocusout:"_onfocusout",oninput:"_oninput",onkeydown:"_onkeydown",onkeyup:"_onkeyup",onmousedown:"_onmousedown",onmouseup:"_onmouseup"},e={},s=r=>{const n=t[r];!n||document.addEventListener(r.slice(2),i=>{const o=i.composedPath(),a=o[0]||document;Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return a}});for(let l=0,u=o.length;l<u;l++){const c=o[l][n];if(!!c&&(c(i),i.cancelBubble))break}})};return(r,n,i)=>{if(n.endsWith("passive")){const o=n.endsWith("capturepassive"),a=n.slice(2,-7-(o?7:0)),l=`_${n}`,u=r[l];u&&r.removeEventListener(a,u,{capture:o}),i&&r.addEventListener(a,i,{passive:!0,capture:o}),r[l]=i}else if(n.endsWith("capture")){const o=n.slice(2,-7),a=`_${n}`,l=r[a];l&&r.removeEventListener(o,l,{capture:!0}),i&&r.addEventListener(o,i,{capture:!0}),r[a]=i}else if(n in t){n in e||(e[n]=!0,s(n));const o=t[n];r[o]=i}else r[n]=i}})(),Ds=(t,e,s)=>{E(s)?new Ks(s,t,e):re(t,e,s)},js=(t,e)=>{t.innerHTML=String(b(e)?"":e)},tr=(t,e)=>{y(()=>{js(t,Y(Y(e).__html))})},yt=(t,e,s)=>{e==="tabIndex"&&Ts(s)&&(s=s?0:void 0),t[e]=s,b(s)&&st(t,e,null)},er=(t,e,s)=>{A(s)?E(s)?new ks(s,t,e):y(()=>{yt(t,e,s())}):yt(t,e,s)},sr=(t,e)=>{if(b(e))return;const s=Ls(Dt(e));Qt(()=>s.forEach(r=>r==null?void 0:r(t)))},rt=(()=>{const t=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;return(e,s,r)=>{s.charCodeAt(0)===45?b(r)?e.style.removeProperty(s):e.style.setProperty(s,String(r)):b(r)?e.style[s]=null:e.style[s]=w(r)||t.test(s)?r:`${r}px`}})(),Rt=(t,e,s)=>{A(s)?E(s)?new Us(s,t,e):y(()=>{rt(t,e,s())}):rt(t,e,s)},wt=(t,e,s)=>{if(w(e))t.setAttribute("style",e);else{if(s)if(w(s))s&&(t.style.cssText="");else{s=St(s);for(const r in s)e&&r in e||rt(t,r,null)}if(At(e))for(const r in e){const n=C(()=>A(e[r])?e[r]:e[U](r));Rt(t,r,n)}else for(const r in e)Rt(t,r,e[r])}},rr=(t,e)=>{if(A(e))if(E(e))new Ws(e,t);else{let s;y(()=>{const r=e();wt(t,r,s),s=r})}else wt(t,e)},ir=(t,e,s)=>{if(e==="children"){const r=q("");t.insertBefore(r,null),s(t,"setChildReplacement",void 0,r)}else e==="ref"?s(t,"setRef"):e==="style"?s(t,"setStyles"):e==="class"?(P(t)||(t.className=""),s(t,"setClasses")):e==="innerHTML"||e==="outerHTML"||e==="textContent"||(e==="dangerouslySetInnerHTML"?s(t,"setHTML"):e.charCodeAt(0)===111&&e.charCodeAt(1)===110?s(t,"setEvent",e.toLowerCase()):e.charCodeAt(0)===117&&e.charCodeAt(3)===58?s(t,"setDirective",e.slice(4)):e in t&&!P(t)?(e==="className"&&(t.className=""),s(t,"setProperty",e)):(t.setAttribute(e,""),s(t,"setAttribute",e)))},nr=(t,e,s)=>{Cs(s)?ir(t,e,s):e==="children"?se(t,s):e==="ref"?sr(t,s):e==="style"?rr(t,s):e==="class"?Xs(t,s):e==="innerHTML"||e==="outerHTML"||e==="textContent"||(e==="dangerouslySetInnerHTML"?tr(t,s):e.charCodeAt(0)===111&&e.charCodeAt(1)===110?Ds(t,e.toLowerCase(),s):e.charCodeAt(0)===117&&e.charCodeAt(3)===58?zs(t,e.slice(4),s):e in t&&!P(t)?er(t,e,s):Qs(t,e,s))},or=(t,e)=>{for(const s in e)nr(t,s,e[s])},ar=(t,e,...s)=>{const{children:r,key:n,ref:i,class:o,...a}=e||{},l=s.length===1?s[0]:s.length===0?r:s;if(b(o)||(a.class=o),!b(a.className)&&w(a.class))throw new Error("Invalid class prop, it can only be null, undefined, an array or an object when className is provided too");if(A(t)){const u=a;return b(l)||(u.children=l),b(i)||(u.ref=i),ut(()=>t.call(t,u))}else if(w(t)){const u=a,c=Ms(t),d=c?xs:Ns;return jt(l)||(u.children=l),b(i)||(u.ref=i),ut(()=>{const f=d(t);return c&&(f.isSVG=!0),or(f,u),f})}else{if(Rs(t))return ut(t);throw new Error("Invalid component")}},ie=ar,_=(t,e)=>ie(t,e);var lr=Ss,ur=rs,cr=(t,e)=>{if(!e||!(e instanceof HTMLElement))throw new Error("Invalid parent node");return e.textContent="",ur(s=>(se(e,t),()=>{s(),e.textContent=""}))},fr=cr,dr=({loop:t,callback:e,cancel:s,schedule:r})=>{let n;const i=l=>{Y(t)&&o(),Y(e,!1)(l)},o=()=>{n=C(()=>r(i))},a=()=>{C(()=>s(n))};return o(),Zt(a),a},hr=dr,vr=t=>hr({callback:t,loop:!0,cancel:cancelAnimationFrame,schedule:requestAnimationFrame}),pr=vr,ne=function(t,e,s,r){var n;e[0]=0;for(var i=1;i<e.length;i++){var o=e[i++],a=e[i]?(e[0]|=o?1:2,s[e[i++]]):e[++i];o===3?r[0]=a:o===4?r[1]=Object.assign(r[1]||{},a):o===5?(r[1]=r[1]||{})[e[++i]]=a:o===6?r[1][e[++i]]+=a+"":o?(n=t.apply(a,ne(t,a,s,["",null])),r.push(n),a[0]?e[0]|=2:(e[i-2]=0,e[i]=n)):r.push(a)}return r},Mt=new Map;function gr(t){var e=Mt.get(this);return e||(e=new Map,Mt.set(this,e)),(e=ne(this,e.get(t)||(e.set(t,e=function(s){for(var r,n,i=1,o="",a="",l=[0],u=function(f){i===1&&(f||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,f,o):i===3&&(f||o)?(l.push(3,f,o),i=2):i===2&&o==="..."&&f?l.push(4,f,0):i===2&&o&&!f?l.push(5,0,!0,o):i>=5&&((o||!f&&i===5)&&(l.push(i,0,o,n),i=6),f&&(l.push(i,f,0,n),i=6)),o=""},c=0;c<s.length;c++){c&&(i===1&&u(),u(c));for(var d=0;d<s[c].length;d++)r=s[c][d],i===1?r==="<"?(u(),l=[l],i=3):o+=r:i===4?o==="--"&&r===">"?(i=1,o=""):o=r+o[0]:a?r===a?a="":o+=r:r==='"'||r==="'"?a=r:r===">"?(u(),i=1):i&&(r==="="?(i=5,n=o,o=""):r==="/"&&(i<5||s[c][d+1]===">")?(u(),i===3&&(l=l[0]),i=l,(l=l[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(u(),i=2):o+=r),i===3&&o==="!--"&&(i=4,l=l[0])}return u(),l}(t)),e),arguments,[])).length>1?e:e[0]}var oe={},Ar=(t,e,...s)=>ie(oe[t]||t,e,...s),Sr=t=>void zt(oe,t);zt(gr.bind(Ar),{register:Sr});const H=({class:t,length:e,limit:s=94,stationary:r,...n})=>_("line",{class:["stroke-cap-round",t],y1:r?e-s:void 0,y2:-(r?s:e),...n}),Ct=60,_r=()=>{const t=()=>(Date.now()-new Date().setHours(0,0,0,0))/1e3,e=lr(t()),s=(a,l=1)=>`rotate(${(a*360).toFixed(l)})`,r=()=>s(e()%1,0),n=()=>s(e()%60/60),i=()=>s(e()/60%60/60),o=()=>s(e()/60/60%12/12);return pr(()=>e(t())),_("div",{class:"flex items-center justify-center h-full @dark:bg-neutral-700",children:_("svg",{viewBox:"0 0 200 200",class:"h-95vmin",children:[_("g",{class:"translate-100px",children:[_("circle",{class:"stroke-neutral-900 @dark:stroke-neutral-100 fill-none",r:"99"}),Array.from({length:Ct},(a,l)=>({isHour:l%5===0})).map(({isHour:a},l)=>_(H,{transform:s(l/Ct,0),class:a?"stroke-neutral-800 @dark:stroke-neutral-200 stroke-width-2":"stroke-neutral-400 @dark:stroke-neutral-600",length:a?7:3,stationary:!0}))]}),_("g",{class:"translate-100px",children:[_(H,{transform:r,class:"stroke-neutral-200 @dark:stroke-neutral-600 stroke-width-5",length:83}),_(H,{transform:o,class:"stroke-neutral-800 @dark:stroke-neutral-200 stroke-width-4",length:50}),_(H,{transform:i,class:"stroke-neutral-800 @dark:stroke-neutral-200 stroke-width-3",length:70}),_(H,{transform:n,class:"stroke-red-500 stroke-width-2",length:77})]})]})})};fr(_(_r,{}),document.querySelector("#root"));

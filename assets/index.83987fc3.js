var Vt=Object.defineProperty,Wt=Object.defineProperties;var It=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable;var ft=(s,t,e)=>t in s?Vt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,G=(s,t)=>{for(var e in t||(t={}))dt.call(t,e)&&ft(s,e,t[e]);if(H)for(var e of H(t))ht.call(t,e)&&ft(s,e,t[e]);return s},pt=(s,t)=>Wt(s,It(t));var Q=(s,t)=>{var e={};for(var n in s)dt.call(s,n)&&t.indexOf(n)<0&&(e[n]=s[n]);if(s!=null&&H)for(var n of H(s))t.indexOf(n)<0&&ht.call(s,n)&&(e[n]=s[n]);return e};const Kt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}};Kt();class Ut{constructor(t){this.props=t,this.state={}}render(t,e){throw new Error("Missing render function")}}var Jt=Ut;const V=(s,t)=>{s instanceof Array?s.forEach(t):s&&t(s)},W=(s,t,e)=>{const n=s[t];n instanceof Array?n.push(e):n?s[t]=[n,e]:s[t]=e},j=(s,t,e)=>{const n=s[t];if(n instanceof Set)n.add(e);else if(n){const i=new Set;i.add(n),i.add(e),s[t]=i}else s[t]=e},k=(s,t,e)=>{const n=s[t];n instanceof Set?n.delete(e):n===e&&(s[t]=void 0)},qt=(s,t)=>s instanceof Set?s.has(t):s===t,{toString:Yt}=Object.prototype,Nt=s=>s instanceof Error?s:typeof s=="string"?new Error(s):new Error("Unknown error"),Y=s=>typeof s=="function",Gt=s=>Yt.call(s)==="[object AsyncFunction]",Qt=(s,t)=>Math.max(s,t);class vt{AD(t){W(this,"A3",t)}AE(t,e){this.AF||(this.AF={}),this.AF[t]=e}AG(t){W(this,"AH",t)}A7(t){W(this,"A2",t)}S(t){W(this,"A1",t)}AI(t){j(this,"AC",t)}AJ(t){k(this,"AC",t)}context(t){const{AF:e,J:n}=this;return e&&t in e?e[t]:n==null?void 0:n.context(t)}T(t,e){const{A1:n,A2:i,A3:r,AH:o,AF:l}=this;n&&(this.A1=void 0,V(n,c=>{c.T(!0,e)})),i&&(this.A2=void 0,e?V(i,c=>{!c.disposed&&!c.K.disposed&&c.A9(this)}):this.AK=i),r&&(this.A3=void 0,this.R=!0,V(r,c=>c.call(c)),this.R=!1),o&&(this.AH=void 0),l&&(this.AF=void 0)}V(){const t=this.AK,e=this.A2;if(!t||(this.AK=void 0,t===e))return;const n=t instanceof Array?t:[t],i=e instanceof Array?e:[e];t:for(let r=0,o=n.length;r<o;r++){const l=n[r];if(!(l.disposed||l.K.disposed)&&l!==i[r]){for(let c=0,u=i.length;c<u;c++)if(l===i[c])continue t;l.A9(this)}}}error(t,e){const{AH:n,J:i}=this;if(n)return V(n,r=>r.call(r,t)),!0;if(i!=null&&i.error(t,!0))return!0;if(e)return!1;throw t}U(t){const e=g.A,n=b.A;g.A=this,b.A=!1;let i;try{i=t()}catch(r){this.error(Nt(r),!1)}finally{g.A=e,b.A=n}return i}}var rt=vt;class Zt extends rt{constructor(){super(...arguments),this.disposed=!1}}var Xt=Zt;const At={A:void 0},zt=()=>!1,jt=Object.is,kt=()=>{},Lt=new Xt,g={A:Lt},P={A:Lt},b={A:!1},ts={A:!1},L=Symbol("Observable"),R=Symbol("Frozen"),xt=Symbol("Readable"),ss=Symbol("Writable"),es=Symbol("Unwrapped"),ns=Symbol("Sampled"),is=s=>{g.A.AD(s)};var Ot=is;const{bind:ot,prototype:ct}=Function,{setPrototypeOf:$}=Object;function bt(s){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this}function Tt(s){if(arguments.length){if(s===L)return this;throw new Error("A readonly Observable can not be updated")}return this.D()}function Ft(s){return arguments.length?s===L?this:Y(s)?this.E(s):this.F(s):this.D()}const rs=$({[L]:!0,[R]:!0},ct),os=$({[L]:!0,[xt]:!0},ct),cs=$({[L]:!0,[ss]:!0},ct);$(bt,rs);$(Tt,os);$(Ft,cs);ot.bind(bt);const ls=ot.bind(Tt),as=ot.bind(Ft);class us extends rt{constructor(t){if(super(),this.J=g.A,this.K=g.A.K||P.A,this.L=0,this.P=0,this.Q=!1,Gt(t))throw new Error("A computation is forbidden from executing an async function")}N(t){this.L+=1,this.Q||(this.Q=t)}O(t){!this.L||(this.L-=1,this.Q||(this.Q=t),!this.L&&(t=this.Q,this.Q=!1,!this.R&&this.E(t)))}E(t){}}var Rt=us;class fs{constructor(t,e,n){this.K=g.A.K||P.A,this.C=t,n&&(this.J=n),(e==null?void 0:e.equals)!==void 0&&(this.equals=e.equals||zt)}A4(t){qt(this.A5,t)||(j(this,"A5",t),t.call(t,this.C))}S(t){j(this,"A1",t)}A6(){var t;this.disposed||this.K.disposed||(!b.A&&g.A instanceof Rt&&(this.S(g.A),g.A.A7(this)),!((t=this.J)===null||t===void 0)&&t.L&&(this.J.L=0,this.J.Q=!1,this.J.E(!0)))}A8(t){k(this,"A5",t)}A9(t){k(this,"A1",t)}D(){return this.A6(),this.C}F(t){if(this.disposed)throw new Error("A disposed Observable can not be updated");if(At.A)return At.A.set(this,t),t;{const n=!(this.equals||jt)(t,this.C);if(!this.J){if(!n)return t;this.K.disposed||this.N(n)}if(n){const i=this.C;this.C=t,this.AA(i)}return this.K.disposed||this.O(n),t}}E(t){const e=t(this.C);return this.F(e)}AA(t){if(this.disposed||this.K.disposed)return;const{A5:e}=this;if(e)if(e instanceof Set)for(const n of e)n.call(n,this.C,t);else e.call(e,this.C,t)}N(t){if(this.disposed||this.K.disposed)return;const e=this.A1;if(e)if(e instanceof Set)for(const n of e)n.N(t);else e.N(t)}O(t){if(this.disposed||this.K.disposed)return;const e=this.A1;if(e)if(e instanceof Set)for(const n of e)n.O(t);else e.O(t)}T(){this.disposed=!0}}var $t=fs;function ds(s,t){return arguments.length<2?g.A.context(s):g.A.AE(s,t)}const hs=()=>0;var ps=hs;class As extends Rt{constructor(t,e){super(t),this.B=t,this.J.S(this),e&&ps()?this.N(!0):this.E(!0)}E(t){if(t&&!this.K.disposed){const e=this.P;if(e)this.P=t?3:Qt(e,2);else{this.P=1,this.T();try{const n=this.U(this.B);this.V(),Y(n)?this.AD(n):!this.A1&&!this.A2&&!this.A3&&this.T(!0,!0)}catch(n){this.V(),this.error(Nt(n),!1)}finally{const n=this.P;this.P=0,n>1&&this.E(n===3)}}}}}var gs=As;const Ss=()=>!!ts.A;var ws=Ss;class ms extends rt{constructor(t){super(),this.J=g.A,t&&ws()&&(this.AN=!0,this.J.AI(this))}T(t,e){this.disposed=!0,this.AN&&this.J.AJ(this),super.T(t,e)}U(t){const e=this.T.bind(this,!0,!0),n=t.bind(void 0,e),i=P.A;P.A=this;try{return super.U(n)}finally{P.A=i}}}var Es=ms;const ys=s=>Y(s)&&L in s;var w=ys;const Cs=s=>w(s)?s():s;var gt=Cs;const Ns=s=>{if(s instanceof $t)return s;if(R in s)throw new Error;return s(L)};var lt=Ns;const Ls=(s,t)=>{R in s||lt(s).A8(t)};var xs=Ls;const Os=(s,t)=>{R in s||lt(s).A4(t)};var bs=Os;const Ts=s=>{const t=new gs(s);return t.A2||(t.B=kt),t.T.bind(t,!0,!0)};var C=Ts;const Fs=s=>R in s||xt in s?s:ls(lt(s));var Rs=Fs;const $s=s=>new Es(!0).U(s);var _s=$s;function tt(s){if(Y(s)){if(b.A)return s();b.A=!0;try{return s()}finally{b.A=!1}}else return s}const Ms=()=>{const s=g.A;return t=>s.U(()=>t())};var Bs=Ms;function _t(s,t){return as(new $t(s,t))}const Mt=Symbol("Element"),Ps=Symbol("Template Accessor"),Ds={},{prototype:Hs}=Function,{setPrototypeOf:St}=Object;function B(){return tt(this)}St(B,St({[Mt]:!0,[es]:!0,[ns]:!0},Hs));const wt=document.createComment.bind(document,""),Vs=document.createElement.bind(document),Ws=document.createElementNS.bind(document,"http://www.w3.org/2000/svg"),I=document.createTextNode.bind(document),Is=s=>T(s)?s:[s],Ks=s=>{for(let t=0,e=s.length;t<e;t++)if(!!T(s[t]))return s.flat(1/0);return s},{isArray:T}=Array,m=s=>typeof s=="function",y=s=>s==null,Us=s=>s instanceof Node,N=s=>typeof s=="string",F=s=>!!s.isSVG,Js=(()=>{const s=/^(t(ext$|s)|s[vwy]|g)|^set|tad|ker|p(at|s)|s(to|c$|ca|k)|r(ec|cl)|ew|us|f($|e|s)|cu|n[ei]|l[ty]|[GOP]/,t={};return e=>e in t?t[e]:t[e]=s.test(e)&&e.indexOf("-")===-1})(),qs=s=>m(s)&&Ps in s,v=s=>s==null||typeof s=="boolean"||typeof s=="symbol",Ys=s=>{const t=Bs();queueMicrotask(()=>{t(s)})};var Gs=Ys;const Qs=s=>R in s?s:s(L);class x{constructor(t){this.observable=Qs(t)}init(){bs(this.observable,this),Ot(this)}call(){arguments.length===1?this.cleanup():this.update(arguments[1],arguments[2])}cleanup(){xs(this.observable,this)}}class vs extends x{constructor(t,e,n){super(t),this.element=e,this.key=n,this.init()}update(t){J(this.element,this.key,t)}}class Zs extends x{constructor(t,e,n){super(t),this.element=e,this.key=n,this.init()}update(t){D(this.element,this.key,t)}}class Xs extends x{constructor(t,e,n){super(t),this.element=e,this.value=n,this.init()}update(t,e){st(this.element,this.value,t,e)}}class zs extends x{constructor(t,e){super(t),this.element=e,this.init()}update(t,e){et(this.element,t,e)}}class js extends x{constructor(t,e,n){super(t),this.element=e,this.event=n,this.init()}update(t){Ht(this.element,this.event,t)}}class ks extends x{constructor(t,e,n){super(t),this.element=e,this.key=n,this.init()}update(t){nt(this.element,this.key,t)}}class te extends x{constructor(t,e,n){super(t),this.element=e,this.key=n,this.init()}update(t){q(this.element,this.key,t)}}class se extends x{constructor(t,e){super(t),this.element=e,this.init()}update(t,e){it(this.element,t,e)}}const ee=/\s+/g,Z=s=>s.split(ee).filter(Boolean),ne=(s,t,e)=>{const{className:n}=s;if(!N(n))Z(t).forEach(i=>{s.classList.toggle(i,!!e)});else if(!n)e&&(s.className=t);else if(!e&&n===t)s.className="";else{const i=new Set(Z(n));Z(t).forEach(r=>{e?i.add(r):i.delete(r)}),s.className=Array.from(i).join(" ")}},K=document.createComment(""),X=[K],z=[K],ie=(s,t,e,n)=>{if(t===e)return;t instanceof Node&&(X[0]=t,t=X),e instanceof Node&&(z[0]=e,e=z);const i=e.length;let r=t.length,o=i,l=0,c=0,u=null,h;for(;l<r||c<o;)if(r===l){const a=o<i?c?e[c-1].nextSibling:e[o-c]:n;for(;c<o;)s.insertBefore(e[c++],a)}else if(o===c)for(;l<r;)(!u||!u.has(t[l]))&&(h=t[l],s.removeChild(h)),l++;else if(t[l]===e[c])l++,c++;else if(t[r-1]===e[o-1])r--,o--;else if(t[l]===e[o-1]&&e[c]===t[r-1]){const a=t[--r].nextSibling;s.insertBefore(e[c++],t[l++].nextSibling),s.insertBefore(e[--o],a),t[r]=e[o]}else{if(!u){u=new Map;let a=c;for(;a<o;)u.set(e[a],a++)}if(u.has(t[l])){const a=u.get(t[l]);if(c<a&&a<o){let A=l,f=1;for(;++A<r&&A<o&&u.get(t[A])===a+f;)f++;if(f>a-c){const d=t[l];for(;c<a;)s.insertBefore(e[c++],d)}else s.replaceChild(e[c++],t[l++])}else l++}else h=t[l++],s.removeChild(h)}X[0]=K,z[0]=K};var re=ie;const oe=[],O={make:()=>({values:void 0,length:0}),makeWithNode:s=>({values:s,length:1}),makeWithFragment:s=>({values:s,fragmented:!0,length:1}),getChildrenFragmented:(s,t=[])=>{const{values:e,length:n}=s;if(!n)return t;if(e instanceof Array)for(let i=0,r=e.length;i<r;i++){const o=e[i];o instanceof Node?t.push(o):O.getChildrenFragmented(o,t)}else e instanceof Node?t.push(e):O.getChildrenFragmented(e,t);return t},getChildren:s=>s.length?s.fragmented?s.length===1?O.getChildren(s.values):O.getChildrenFragmented(s):s.values:oe,pushFragment:(s,t)=>{O.pushValue(s,t),s.fragmented=!0},pushNode:(s,t)=>{O.pushValue(s,t)},pushValue:(s,t)=>{const{values:e,length:n}=s;n===0?s.values=t:n===1?s.values=[e,t]:e.push(t),s.length+=1},replaceWithNode:(s,t)=>{s.values=t,delete s.fragmented,s.length=1},replaceWithFragment:(s,t)=>{s.values=t.values,s.fragmented=t.fragmented,s.length=t.length}};var p=O;const U=(s,t)=>{m(s)?Mt in s?U(s(),t):C(()=>{U(s(),t)}):T(s)&&s.some(w)?C(()=>{t(Bt(s))}):t(s)},mt=s=>m(s)?s():s,Bt=s=>{for(;w(s);)s=s();if(T(s)){const t=new Array(s.length);for(let e=0,n=t.length;e<n;e++)t[e]=Bt(s[e]);return t}else return s},J=(()=>{const s=/e(r[HRWrv]|[Vawy])|Con|l(e[Tcs]|c)|s(eP|y)|a(t[rt]|u|v)|Of|Ex|f[XYa]|gt|hR|d[Pg]|t[TXYd]|[UZq]/,t={},e=/[A-Z]/g,n=i=>t[i]||(t[i]=s.test(i)?i:i.replace(e,r=>`-${r.toLowerCase()}`));return(i,r,o)=>{r=r==="className"?"class":r,F(i)?(r=r==="xlinkHref"||r==="xlink:href"?"href":n(r),i.setAttribute(r,String(o))):y(o)?i.removeAttribute(r):(o=o===!0?"":String(o),i.setAttribute(r,o))}})(),ce=(s,t,e)=>{m(e)?w(e)?new vs(e,s,t):C(()=>{J(s,t,e())}):J(s,t,e)},le=(s,t)=>{if(t.nodeType===3)return t.nodeValue=s,t;{const e=t.parentElement;if(!e)throw new Error("Invalid child replacement");const n=I(s);return e.replaceChild(n,t),n}},Pt=(s,t,e)=>{const n=p.getChildren(t),i=n instanceof Array,r=i?n.length:1,o=i?n[0]:n,l=i?n[r-1]:n,c=(l==null?void 0:l.nextSibling)||null;if(r===0){const f=typeof e;if(f==="string"||f==="number"||f==="bigint"){const d=I(e);s.appendChild(d),p.replaceWithNode(t,d);return}else if(f==="object"&&e!==null&&typeof e.nodeType=="number"){const d=e;s.insertBefore(d,null),p.replaceWithNode(t,d);return}}if(r===1){const f=typeof e;if(f==="string"||f==="number"||f==="bigint"){const d=le(String(e),o);p.replaceWithNode(t,d);return}}const u=p.make(),h=Array.isArray(e)?Ks(e):[e];for(let f=0,d=h.length;f<d;f++){const E=h[f],_=typeof E;if(_==="string"||_==="number"||_==="bigint")p.pushNode(u,I(E));else if(_==="object"&&E!==null&&typeof E.nodeType=="number")p.pushNode(u,E);else if(_==="function"){const ut=p.make();p.pushFragment(u,ut),U(E,Pt.bind(void 0,s,ut))}}let a=p.getChildren(u),A=u.length;if(!(A===0&&r===1&&o.nodeType===8)){if(A===0||r===1&&o.nodeType===8){const{childNodes:f}=s;if(f.length===r){if(s.textContent="",A===0){const d=wt();p.pushNode(u,d),a!==u.values&&(a=d,A+=1)}if(c)if(a instanceof Array)for(let d=0,E=a.length;d<E;d++)s.insertBefore(a[d],c);else s.insertBefore(a,c);else if(a instanceof Array)for(let d=0,E=a.length;d<E;d++)s.append(a[d]);else s.append(a);p.replaceWithFragment(t,u);return}}if(A===0){const f=wt();p.pushNode(u,f),a!==u.values&&(a=f,A+=1)}re(s,n,a,c),p.replaceWithFragment(t,u)}},Dt=(s,t,e=p.make())=>{U(t,Pt.bind(void 0,s,e))},D=ne,Et=(s,t,e)=>{m(e)?w(e)?new Zs(e,s,t):C(()=>{D(s,t,e())}):D(s,t,e)},st=(s,t,e,n)=>{n&&n!==!0&&D(s,n,!1),e&&e!==!0&&D(s,e,t)},yt=(s,t,e)=>{if(m(e))if(w(e))new Xs(e,s,t);else{let n;C(()=>{const i=e();st(s,t,i,n),n=i})}else st(s,t,e)},et=(s,t,e)=>{if(N(t))F(s)?s.setAttribute("class",t):s.className=t;else{if(e)if(N(e))e&&(F(s)?s.setAttribute("class",""):s.className="");else if(T(e))for(let n=0,i=e.length;n<i;n++)!e[n]||yt(s,!1,e[n]);else for(const n in e)t&&n in t||Et(s,n,!1);if(T(t))for(let n=0,i=t.length;n<i;n++)!t[n]||yt(s,!0,t[n]);else for(const n in t)Et(s,n,t[n])}},ae=(s,t)=>{if(m(t))if(w(t))new zs(t,s);else{let e;C(()=>{const n=t();et(s,n,e),e=n})}else et(s,t)},ue=(s,t,e)=>{const n=Ds[t]||Symbol(),i=ds(n);if(!n||!i)throw new Error(`Directive "${t}" not found`);const r=_t();at(s,o=>r(o)),i(Rs(r),...e)},Ht=(()=>{const s={onbeforeinput:"_onbeforeinput",onclick:"_onclick",ondblclick:"_ondblclick",onfocusin:"_onfocusin",onfocusout:"_onfocusout",oninput:"_oninput",onkeydown:"_onkeydown",onkeyup:"_onkeyup",onmousedown:"_onmousedown",onmouseup:"_onmouseup"},t={},e=n=>{const i=s[n];!i||document.addEventListener(n.slice(2),r=>{const o=r.composedPath(),l=o[0]||document;Object.defineProperty(r,"currentTarget",{configurable:!0,get(){return l}});for(let c=0,u=o.length;c<u;c++){const h=o[c][i];if(!!h&&(h(r),r.cancelBubble))break}})};return(n,i,r)=>{if(i.endsWith("capture")){const o=i.slice(2,-7),l=`_${i}`,c=n[l];c&&n.removeEventListener(o,c,{capture:!0}),r&&n.addEventListener(o,r,{capture:!0}),n[l]=r}else if(i in s){i in t||(t[i]=!0,e(i));const o=s[i];n[o]=r}else n[i]=r}})(),fe=(s,t,e)=>{w(e)?new js(e,s,t):Ht(s,t,e)},de=(s,t)=>{s.innerHTML=String(y(t)?"":t)},he=(s,t)=>{C(()=>{de(s,mt(mt(t).__html))})},nt=(s,t,e)=>{s[t]=e,y(e)&&J(s,t,null)},pe=(s,t,e)=>{m(e)?w(e)?new ks(e,s,t):C(()=>{nt(s,t,e())}):nt(s,t,e)},at=(s,t)=>{if(y(t))return;const e=Is(t);Gs(()=>e.forEach(n=>n(s)))},q=(()=>{const s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;return(t,e,n)=>{e.charCodeAt(0)===45?t.style.setProperty(e,String(n)):y(n)?t.style[e]=null:t.style[e]=N(n)||s.test(e)?n:`${n}px`}})(),Ae=(s,t,e)=>{m(e)?w(e)?new te(e,s,t):C(()=>{q(s,t,e())}):q(s,t,e)},it=(s,t,e)=>{if(N(t))s.setAttribute("style",t);else{if(e)if(N(e))e&&(s.style.cssText="");else for(const n in e)t&&n in t||q(s,n,null);for(const n in t)Ae(s,n,t[n])}},ge=(s,t)=>{if(m(t))if(w(t))new se(t,s);else{let e;C(()=>{const n=t();it(s,n,e),e=n})}else it(s,t)},Se=(s,t,e)=>{if(t==="children"){const n=I("");s.insertBefore(n,null),e(s,"setChildReplacement",void 0,n)}else t==="ref"?e(s,"setRef"):t==="style"?e(s,"setStyles"):t==="class"?(F(s)||(s.className=""),e(s,"setClasses")):t==="innerHTML"||t==="outerHTML"||t==="textContent"||(t==="dangerouslySetInnerHTML"?e(s,"setHTML"):t.charCodeAt(0)===111&&t.charCodeAt(1)===110?e(s,"setEvent",t.toLowerCase()):t.charCodeAt(0)===117&&t.charCodeAt(3)===58?e(s,"setDirective",t.slice(4)):t in s&&!F(s)?(t==="className"&&(s.className=""),e(s,"setProperty",t)):(s.setAttribute(t,""),e(s,"setAttribute",t)))},we=(s,t,e)=>{qs(e)?Se(s,t,e):t==="children"?Dt(s,e):t==="ref"?at(s,e):t==="style"?ge(s,e):t==="class"?ae(s,e):t==="innerHTML"||t==="outerHTML"||t==="textContent"||(t==="dangerouslySetInnerHTML"?he(s,e):t.charCodeAt(0)===111&&t.charCodeAt(1)===110?fe(s,t.toLowerCase(),e):t.charCodeAt(0)===117&&t.charCodeAt(3)===58?ue(s,t.slice(4),e):t in s&&!F(s)?pe(s,t,e):ce(s,t,e))},me=(s,t)=>{for(const e in t)we(s,e,t[e])},Ee=(s,t,...e)=>{const u=t||{},{children:n,key:i,ref:r,class:o}=u,l=Q(u,["children","key","ref","class"]),c=e.length===1?e[0]:e.length===0?n:e;if(y(o)||(l.class=o),!y(l.className)&&N(l.class))throw new Error("Invalid class prop, it can only be null, undefined, an array or an object when className is provided too");if(m(s))if(Jt.isPrototypeOf(s)){const h=l;return v(c)||(h.children=c),B.bind(()=>{const a=new s(h),A=a.render(a.props,a.state);return y(r)||at(a,r),A})}else{const h=l;return v(c)||(h.children=c),y(r)||(h.ref=r),B.bind(s.bind(void 0,h))}else if(N(s)){const h=l,a=Js(s),A=a?Ws:Vs;return v(c)||(h.children=c),y(r)||(h.ref=r),B.bind(()=>{const f=A(s);return a&&(f.isSVG=!0),me(f,h),f})}else{if(Us(s))return B.bind(s);throw new Error("Invalid component")}};var S=Ee;const ye=(s,t)=>{if(!t)throw new Error("Invalid parent node");return t.textContent="",_s(e=>(Dt(t,s),()=>{e(),t.textContent=""}))};var Ce=ye;const Ne=({loop:s,callback:t,cancel:e,schedule:n})=>{let i;const r=c=>{gt(s)&&o(),gt(t)(c)},o=()=>{i=tt(()=>n(r))},l=()=>{tt(()=>e(i))};return o(),Ot(l),l};var Le=Ne;const xe=s=>Le({callback:s,loop:!0,cancel:cancelAnimationFrame,schedule:requestAnimationFrame});var Oe=xe;const M=o=>{var l=o,{rotate:s,length:t,width:e,fixed:n,limit:i=94}=l,r=Q(l,["rotate","length","width","fixed","limit"]);return S("line",G(pt(G({},n&&{y1:t-i}),{y2:-(n?i:t),stroke:"currentColor","stroke-width":e,"stroke-linecap":"round",transform:s}),r))},Ct=()=>(Date.now()-new Date().setHours(0,0,0,0))/1e3,be=({hour:s,minute:t,second:e,subsecond:n})=>S("svg",{viewBox:"0 0 200 200",class:"h-95vmin"},S("g",{transform:"translate(100, 100)"},S("circle",{class:"text-neutral-900 fill-none stroke-current",r:"99"}),Array.from({length:60},(i,r)=>({index:r,isHour:r%5===0})).map(({index:i,isHour:r})=>S(M,{rotate:`rotate(${360*i/60})`,class:r?"text-neutral-800":"text-neutral-400",length:r?7:3,width:r?2:1,fixed:!0}))),S("g",{transform:"translate(100, 100)"},S(M,{rotate:n,class:"text-neutral-200 change-transform",length:83,width:5}),S(M,{rotate:s,class:"text-neutral-800",length:50,width:4}),S(M,{rotate:t,class:"text-neutral-800",length:70,width:3}),S(M,{rotate:e,class:"text-red-500",length:77,width:2}))),Te=()=>{const s=_t(Ct());Oe(()=>s(Ct()));const t=(o,l=1)=>`rotate(${(o*360).toFixed(l)})`;return S("div",{class:"flex flex-wrap items-center justify-center h-full"},S(be,{hour:()=>t(s()/60/60%12/12),minute:()=>t(s()/60%60/60),second:()=>t(s()%60/60),subsecond:()=>t(s()%1,0)}))};Ce(S(Te,null),document.querySelector("#root"));

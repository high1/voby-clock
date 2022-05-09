var $t=Object.defineProperty,_t=Object.defineProperties;var Bt=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var nt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var st=(t,e,s)=>e in t?$t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,V=(t,e)=>{for(var s in e||(e={}))nt.call(e,s)&&st(t,s,e[s]);if(_)for(var s of _(e))it.call(e,s)&&st(t,s,e[s]);return t},rt=(t,e)=>_t(t,Bt(e));var B=(t,e)=>{var s={};for(var n in t)nt.call(t,n)&&e.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&_)for(var n of _(t))e.indexOf(n)<0&&it.call(t,n)&&(s[n]=t[n]);return s};const Rt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}};Rt();class Pt{constructor(e){this.props=e}render(e){throw new Error("Missing render function")}}var Ht=Pt,G=t=>Gt(t)?t:qt(t)?new Error(t):new Error("Unknown error"),{isArray:It}=Array,Gt=t=>t instanceof Error,b=t=>typeof t=="function",qt=t=>typeof t=="string",ut=(t,e)=>Math.max(t,e),zt=class{S(t){let{d:e}=this;e?e instanceof Array?e.push(t):this.d=[e,t]:this.d=t}g(t,e){this.b?this.b[t]=e:this.b={[t]:e}}B(t){let{h:e}=this;e?e instanceof Array?e.push(t):this.h=[e,t]:this.h=t}z(t){let{n:e}=this;e?e instanceof Array?e.push(t):this.n=[e,t]:this.n=t}O(t){let{t:e}=this;e?e instanceof Array?e.push(t):this.t=[e,t]:this.t=t}context(t){var e;let{b:s}=this;return s&&t in s?s[t]:(e=this.r)==null?void 0:e.context(t)}e(t,e){let{t:s,n,d:i,h:r,b:l}=this;if(s)if(this.t=void 0,s instanceof Array)for(let o=0,c=s.length;o<c;o++)s[o].e(!0,e);else s.e(!0,e);if(n)if(this.n=void 0,n instanceof Array)for(let o=0,c=n.length;o<c;o++){let u=n[o];u.disposed||u.w(this)}else n.disposed||(e?n.w(this):this.E=n);if(i)if(this.d=void 0,i instanceof Array)for(let o=0,c=i.length;o<c;o++)i[o]();else i();r&&(this.h=void 0),l&&(this.b=void 0)}R(){let{E:t}=this;t&&(this.E=void 0,t!==this.n&&!t.disposed&&t.w(this))}error(t,e){var s;let{h:n}=this;if(n)return n instanceof Array?n.forEach(i=>i(t)):n(t),!0;if((s=this.r)!=null&&s.error(t,!0))return!0;if(e)return!1;throw t}y(t){let e=y,s=E;y=this,E=!1;let n;try{n=t()}catch(i){this.error(G(i),!1)}finally{y=e,E=s}return n}},K=zt,Dt=class extends K{},Vt=Dt,$=void 0,Wt=()=>!1,Yt=()=>{},y=new Vt,E=!1,J=Symbol("Observable"),dt=Symbol("Sampled"),Ut=(t,e)=>e.l(t),Kt=(t,e)=>e.f(!1),Jt=(t,e)=>e.u(!1);function Qt(t){if(b(t)){if($)return t();{let e=$=new Map;try{return t()}finally{$=void 0,e.forEach(Kt);try{e.forEach(Ut)}finally{e.forEach(Jt)}}}}else return t}var Xt=Qt,Zt=t=>{y.S(t)},T=Zt,{bind:Q,prototype:kt}=Function,{setPrototypeOf:q}=Object,X=q({[J]:!0},kt);function pt(){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this}function gt(){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this.F()}function mt(t){return arguments.length?b(t)?this.s(t):this.l(t):this.F()}q(pt,X);q(gt,X);q(mt,X);var yt=Q.bind(pt),jt=Q.bind(gt),te=Q.bind(mt),ee=class extends K{constructor(){super(...arguments),this.r=y,this.m=0,this.i=0,this.T=!1}f(t){var e;this.m+=1,this[e="T"]||(this[e]=t)}u(t){var e;!this.m||(this.m-=1,this[e="T"]||(this[e]=t),!this.m&&(t=this.T,this.T=!1,this.s(t)))}s(t){}},Z=ee,se=class{constructor(t,e,s){this.c=t,s&&(this.r=s),(e==null?void 0:e.equals)!==void 0&&(this.equals=e.equals||Wt)}O(t){let{t:e}=this;if(e)if(e instanceof Set){let s=e.size;e.add(t);let n=e.size;return s!==n}else{if(e===t)return!1;{let s=new Set;return s.add(e),s.add(t),this.t=s,!0}}else return this.t=t,!0}C(){var t;this.disposed||(!E&&y instanceof Z&&(this.O(y)||!y.n)&&y.z(this),(t=this.r)!=null&&t.m&&(this.r.m=0,this.r.T=!1,this.r.s(!0)))}w(t){let{t:e}=this;e&&(e instanceof Set?e.delete(t):e===t&&(this.t=void 0))}F(){return this.C(),this.c}l(t){if(this.disposed)throw new Error("A disposed Observable can not be updated");if($)return $.set(this,t),t;{let e=!(this.equals||Object.is)(t,this.c);return this.r||this.f(e),this.c=e?t:this.c,this.u(e),t}}s(t){let e=t(this.c);return this.l(e)}f(t){if(this.disposed)return;let e=this.t;if(e)if(e instanceof Set)for(let s of e)s.f(t);else e.f(t)}u(t){if(this.disposed)return;let e=this.t;if(e)if(e instanceof Set)for(let s of e)s.u(t);else e.u(t)}frozen(){return yt(this.c)}A(){return jt(this)}N(){return te(this)}e(){this.disposed=!0}},M=se,ne=class extends Z{constructor(t,e){super(),this.a=t,this.o=new M(void 0,e,this),this.r.O(this),this.s(!0)}e(t,e){t&&this.o.e(),super.e(t,e)}f(t){this.m||this.o.f(!1),super.f(t)}s(t){if(t&&!this.o.disposed){let e=this.i;if(e)this.i=t?3:ut(e,2),e>1&&this.o.u(!1);else{this.i=1,this.e();try{let s=this.y(this.a);this.R(),this.o.disposed?this.o.u(!1):this.o.l(s),!this.t&&!this.n&&!this.d&&this.e(!0,!0)}catch(s){this.R(),this.error(G(s),!1),this.o.u(!1)}finally{let s=this.i;this.i=0,s>1&&this.s(s===3)}}}else this.o.u(!1)}},ie=ne,re=()=>{},oe=new M(void 0),le=(t,e)=>{let s=new ie(t,e),{o:n}=s;return s.n?n.A():(s.a=re,s.o=oe,n.frozen())},v=le;function ce(t,e){return arguments.length<2?y.context(t):y.g(t,e)}var fe=ce,he=()=>{let t=new M(!1);return T(()=>{t.l(!0)}),t.A()},ae=he,ue=class extends Z{constructor(t){super(),this.a=t,this.r.O(this),this.s(!0)}s(t){if(t){let e=this.i;if(e)this.i=t?3:ut(e,2);else{this.i=1,this.e();try{let s=this.y(this.a);this.R(),b(s)?this.S(s):!this.t&&!this.n&&!this.d&&this.e(!0,!0)}catch(s){this.R(),this.error(G(s),!1)}finally{let s=this.i;this.i=0,s>1&&this.s(s===3)}}}}},de=ue,pe=t=>{let e=new de(t);return e.n||(e.a=Yt),e.e.bind(e,!0,!0)},wt=pe,ge=t=>{y.B(t)},bt=ge,R=t=>{if(b(t))return dt in t?yt(R(t())):J in t?t:v(()=>R(t()));if(It(t)){let e=new Array(t.length);for(let s=0,n=e.length;s<n;s++)e[s]=R(t[s]);return e}else return t},A=R,me=class extends K{constructor(){super(...arguments),this.r=y}y(t){let e=this.e.bind(this,!0,!0),s=t.bind(void 0,e);return super.y(s)}},vt=me,ye=class extends vt{},we=class{constructor(t){this.v=new Map,this.p=!1,this.L=0,this.x=0,this.cleanup=()=>{if(!this.L)return;if(!this.x)return this.e();let{v:e,p:s}=this;e.forEach((n,i)=>{n.p!==s&&(n.e(!0,!0),e.delete(i))})},this.e=()=>{!this.v.size||(this.v.forEach(e=>{e.e(!0,!0)}),this.v=new Map)},this.k=e=>{this.p=!this.p,this.x=0},this._=e=>{this.x=e.length,this.cleanup(),this.L=this.x},this.map=e=>{let{v:s,p:n}=this,i=s.get(e);if(i)return i.p=n,i.I;{let r=new ye;return r.y(()=>{let l=A(this.a(e));return r.p=n,r.I=l,s.set(e,r),l})}},this.a=t}},be=we,ve=(t,e,s=[])=>{let n=new be(e),{e:i,k:r,_:l,map:o}=n;return T(i),v(()=>{let c=b(t)?t():t;r(c);let u=c.length?c.map(o):A(s);return l(c),u})},Se=ve,xe=t=>b(t)&&J in t,St=xe,Ee=t=>St(t)?t():t,Ae=Ee;function Ce(t,e){let s=v(()=>{let n=b(t)?t():t;for(let i=0,r=e.length;i<r;i++){let l=e[i];if(l.length===1)return l[0];if(Object.is(l[0],n))return l[1]}});return v(()=>A(s()))}var xt=Ce,Ne=(t,e,s)=>{let n=v(()=>b(t)?!!t():!!t);return xt(n,[[!0,e],[s]])},Et=Ne,Te=(t,e,s)=>Et(t,e,s),Le=Te,Me=t=>v(()=>t()),Oe=Me,Fe=t=>new vt().y(t),At=Fe;function $e(t){if(b(t)){if(E)return t();E=!0;try{return t()}finally{E=!1}}else return t}var Ct=$e,_e=class extends M{constructor(){super(...arguments),this.M=0}},Be=t=>{let e=new Map,s;wt(()=>{let i=e.get(s);i&&i.l(!1);let r=t(),l=e.get(r);l&&l.l(!0),s=r}),T(()=>{e.forEach(i=>{i.e()}),e=new Map});let n=function(){let i=e.get(this);!i||(i.M-=1,!i.M&&(i.e(),e.delete(this)))};return i=>{let r,l=e.get(i);return l?r=l:(r=new _e(Ct(t)===i),e.set(i,r)),r.M+=1,T(n.bind(i)),r.F()}},Re=Be;function Pe(t,e){let s=[],n=[];for(let i=0,r=e.length;i<r;i++)At(l=>{let o=e[i],c=o.length===1?o[0]:o[1];s.push(A(c)),n.push(l)});return T(()=>{n.forEach(i=>i())}),v(()=>{let i=b(t)?t():t;for(let r=0,l=e.length;r<l;r++){let o=e[r];if(o.length===1||Object.is(o[0],i))return s[r]}})}var He=Pe,Ie=(t,e)=>{let s=new M(void 0);return v(()=>{if(s.F()){let n={error:s.c,reset:()=>s.l(void 0)};return A(e(n))}else return bt(n=>{s.l(G(n))}),A(t)})},Ge=Ie;function d(t,e){return new M(t,e).N()}d.batch=Xt;d.cleanup=T;d.computed=v;d.context=fe;d.disposed=ae;d.effect=wt;d.error=bt;d.for=Se;d.get=Ae;d.if=Le;d.is=St;d.readonly=Oe;d.resolve=A;d.root=At;d.sample=Ct;d.selector=Re;d.suspense=He;d.switch=xt;d.ternary=Et;d.tryCatch=Ge;var qe=d,N=qe;const ze=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Nt=Symbol("Element"),De=Symbol("Template Accessor"),Ve=N.sample;var W=Ve;const{prototype:We}=Function,{setPrototypeOf:ot}=Object;function O(){return W(this)}ot(O,ot({[Nt]:!0,[dt]:!0},We));const lt=document.createComment.bind(document,""),Ye=document.createElement.bind(document),Ue=document.createElementNS.bind(document,"http://www.w3.org/2000/svg"),P=document.createTextNode.bind(document),Ke=t=>{for(let e=0,s=t.length;e<s;e++)if(!!z(t[e]))return t.flat(1/0);return t},{isArray:z}=Array,D=t=>typeof t=="function",w=t=>t==null,Je=t=>t instanceof Node,k=t=>{if(t===null)return!0;const e=typeof t;return e!=="object"&&e!=="function"},C=t=>typeof t=="string",L=t=>!!t.isSVG,Qe=t=>D(t)&&De in t,Xe=N.cleanup;var Y=Xe;const Ze=N.effect;var H=Ze;const ke=(t,e,s,n)=>{const i=s.length;let r=e.length,l=i,o=0,c=0,u=null,h,p;for(;o<r||c<l;)if(r===o){const f=l<i?c?s[c-1].nextSibling:s[l-c]:n;for(;c<l;)t.insertBefore(s[c++],f)}else if(l===c)for(;o<r;)(!u||!u.has(e[o]))&&(p=e[o],t.removeChild(p),h=p.recycle,h&&h(p)),o++;else if(e[o]===s[c])o++,c++;else if(e[r-1]===s[l-1])r--,l--;else if(e[o]===s[l-1]&&s[c]===e[r-1]){const f=e[--r].nextSibling;t.insertBefore(s[c++],e[o++].nextSibling),t.insertBefore(s[--l],f),e[r]=s[l]}else{if(!u){u=new Map;let f=c;for(;f<l;)u.set(s[f],f++)}if(u.has(e[o])){const f=u.get(e[o]);if(c<f&&f<l){let a=o,g=1;for(;++a<r&&a<l&&u.get(e[a])===f+g;)g++;if(g>f-c){const x=e[o];for(;c<f;)t.insertBefore(s[c++],x)}else t.replaceChild(s[c++],e[o++])}else o++}else p=e[o++],t.removeChild(p),h=p.recycle,h&&h(p)}};var je=ke;class j{constructor(){this.values=[],this.fragmented=!1}childrenFragmented(e=[]){const{values:s}=this;for(let n=0,i=s.length;n<i;n++){const r=s[n];r instanceof j?r.childrenFragmented(e):e.push(r)}return e}children(){return this.fragmented?this.childrenFragmented():this.values}pushFragment(e){this.values.push(e),this.fragmented=!0}pushNode(e){this.values.push(e)}replaceWithNode(e){this.values=[e],this.fragmented=!1}replaceWithFragment(e){this.values=e.values,this.fragmented=e.fragmented}setFragment(e){this.values=[e],this.fragmented=!0}setNode(e){this.values=[e],this.fragmented=!1}}var U=j;const ts=N.is;var tt=ts;const I=(t,e)=>{if(D(t))if(Nt in t)I(t(),e);else{let s,n=!1;H(()=>{const i=t();n&&s===i||(I(i,e),s=i,n=k(i))})}else z(t)&&t.some(tt)?H(()=>{e(Tt(t))}):e(t)},S=(t,e)=>{if(D(t)){let s,n=!1;H(()=>{const i=t();n&&s===i||(e(i,s),s=i,n=k(i))})}else e(t)},es=(t,e)=>{if(tt(t)){let s,n=!1;H(()=>{const i=t();n&&s===i||(e(i,s),s=i,n=k(i))})}else e(t)},Tt=t=>{for(;tt(t);)t=t();if(z(t)){const e=new Array(t.length);for(let s=0,n=e.length;s<n;s++)e[s]=Tt(t[s]);return e}else return t},ss=(t,e,s)=>{L(t)?(e=e==="className"?"class":e,e=e==="xlinkHref"||e==="xlink:href"?"href":e,t.setAttribute(e,String(s))):w(s)||s===!1?t.removeAttribute(e):(s=s===!0?"":String(s),t.setAttribute(e,s))},ns=(t,e,s)=>{S(s,ss.bind(void 0,t,e))},is=(t,e)=>{if(e.nodeType===3)return e.nodeValue=t,e;{const s=e.parentElement;if(!s)throw new Error("Invalid child replacement");const n=P(t);return s.replaceChild(n,e),n}},Lt=(t,e,s)=>{const n=e.children(),i=n.length,r=n[0],l=n[i-1],o=(l==null?void 0:l.nextSibling)||null;if(i===0){const f=typeof s;if(f==="string"||f==="number"||f==="bigint"){const a=P(s);t.appendChild(a),e.setNode(a);return}else if(f==="object"&&s!==null&&typeof s.nodeType=="number"){const a=s;t.insertBefore(a,null),e.setNode(a);return}}if(i===1){const f=typeof s;if(f==="string"||f==="number"||f==="bigint"){const a=is(String(s),r);e.setNode(a);return}}const c=new U,u=Array.isArray(s)?Ke(s):[s];for(let f=0,a=u.length;f<a;f++){const g=u[f],x=typeof g;if(x==="string"||x==="number"||x==="bigint")c.pushNode(P(g));else if(x==="object"&&g!==null&&typeof g.nodeType=="number")c.pushNode(g);else if(x==="function"){const et=new U;c.pushFragment(et),I(g,Lt.bind(void 0,t,et))}}const h=c.children(),p=h.length;if(!(p===0&&i===1&&r.nodeType===8)){if(p===0||i===1&&r.nodeType===8){const{childNodes:f}=t;if(f.length===i){if(t.textContent="",p===0){const a=lt();c.pushNode(a),h!==c.values&&h.push(a)}if(o)for(let a=0,g=h.length;a<g;a++)t.insertBefore(h[a],o);else for(let a=0,g=h.length;a<g;a++)t.append(h[a]);e.replaceWithFragment(c);return}}if(p===0){const f=lt();c.pushNode(f),h!==c.values&&h.push(f)}je(t,n,h,o),e.replaceWithFragment(c)}},Mt=(t,e,s=new U)=>{I(e,Lt.bind(void 0,t,s))},rs=(t,e,s)=>{t.classList.toggle(e,!!s)},ct=(t,e,s)=>{S(s,rs.bind(void 0,t,e))},os=(t,e,s)=>{if(C(e))L(t)?t.setAttribute("class",e):t.className=e;else{if(s)if(C(s))s&&(L(t)?t.setAttribute("class",""):t.className="");else for(const n in s)e&&n in e||ct(t,n,!1);for(const n in e)ct(t,n,e[n])}},ls=(t,e)=>{S(e,os.bind(void 0,t))},cs=(()=>{const t={onbeforeinput:"_onbeforeinput",onclick:"_onclick",ondblclick:"_ondblclick",onfocusin:"_onfocusin",onfocusout:"_onfocusout",oninput:"_oninput",onkeydown:"_onkeydown",onkeyup:"_onkeyup",onmousedown:"_onmousedown",onmouseup:"_onmouseup"},e={},s=n=>{const i=t[n];!i||(document[n]=r=>{const l=r.composedPath(),o=l[0]||document;Object.defineProperty(r,"currentTarget",{configurable:!0,get(){return o}});for(let c=0,u=l.length;c<u;c++){const h=l[c][i];if(!!h&&(h(r),r.cancelBubble))break}})};return(n,i,r)=>{if(i.endsWith("capture")){const l=i.slice(2,-7),o=`_${i}`,c=n[o];c&&n.removeEventListener(l,c,{capture:!0}),r&&n.addEventListener(l,r,{capture:!0}),n[o]=r}else i in t?(i in e||(e[i]=!0,s(i)),n[t[i]]=r):n[i]=r}})(),fs=(t,e,s)=>{es(s,cs.bind(void 0,t,e))},hs=(t,e)=>{t.innerHTML=String(e!=null?e:"")},as=(t,e)=>{S(e,s=>{S(s.__html,hs.bind(void 0,t))})},us=(t,e,s)=>{e==="className"?t.className=String(s!=null?s:""):t[e]=s},ds=(t,e,s)=>{S(s,us.bind(void 0,t,e))},Ot=(t,e)=>{w(e)||(z(e)?(e.forEach(s=>queueMicrotask(s.bind(void 0,t))),Y(()=>e.forEach(s=>queueMicrotask(s.bind(void 0,void 0))))):(queueMicrotask(e.bind(void 0,t)),Y(e.bind(void 0,void 0))))},Ft=(()=>{const t=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;return(e,s,n)=>{s.charCodeAt(0)===45?e.style.setProperty(s,String(n)):w(n)?e.style[s]=null:e.style[s]=C(n)||t.test(s)?n:`${n}px`}})(),ps=(t,e,s)=>{S(s,Ft.bind(void 0,t,e))},gs=(t,e,s)=>{if(C(e))t.style.cssText=e;else{if(s)if(C(s))s&&(t.style.cssText="");else for(const n in s)e&&n in e||Ft(t,n,null);for(const n in e)ps(t,n,e[n])}},ms=(t,e)=>{S(e,gs.bind(void 0,t))},ys=(t,e,s)=>{if(e==="children"){const n=P("");t.insertBefore(n,null),s(t,"setChildReplacement",void 0,n)}else e==="ref"?s(t,"setRef"):e==="style"?s(t,"setStyles"):e==="class"?(L(t)||(t.className=""),s(t,"setClasses")):e==="innerHTML"||e==="outerHTML"||e==="textContent"||(e==="dangerouslySetInnerHTML"?s(t,"setHTML"):e.charCodeAt(0)===111&&e.charCodeAt(1)===110?s(t,"setEvent",e.toLowerCase()):e in t&&!L(t)?(e==="className"&&(t.className=""),s(t,"setProperty",e)):(t.setAttribute(e,""),s(t,"setAttribute",e)))},ws=(t,e,s)=>{Qe(s)?ys(t,e,s):e==="children"?Mt(t,s):e==="ref"?Ot(t,s):e==="style"?ms(t,s):e==="class"?ls(t,s):e==="innerHTML"||e==="outerHTML"||e==="textContent"||(e==="dangerouslySetInnerHTML"?as(t,s):e.charCodeAt(0)===111&&e.charCodeAt(1)===110?fs(t,e.toLowerCase(),s):e in t&&!L(t)?ds(t,e,s):ns(t,e,s))},bs=(t,e)=>{for(const s in e)ws(t,s,e[s])},vs=(t,e,...s)=>{const u=e||{},{children:n,key:i,ref:r,class:l}=u,o=B(u,["children","key","ref","class"]),c=s.length===1?s[0]:s.length===0?n:s;if(w(l)||(o.class=l),!w(o.className)&&C(o.class))throw new Error("Invalid class prop, it can only be null, undefined or an object when className is provided too");if(D(t))if(Ht.isPrototypeOf(t)){const h=o;return w(c)||(h.children=c),O.bind(()=>{const p=new t(h),f=p.render(p.props);return w(r)||Ot(p,r),f})}else{const h=o;return w(c)||(h.children=c),w(r)||(h.ref=r),O.bind(t.bind(void 0,h))}else if(C(t)){const h=o,p=ze.has(t),f=p?Ue:Ye;return w(c)||(h.children=c),w(r)||(h.ref=r),O.bind(()=>{const a=f(t);return p&&(a.isSVG=!0),bs(a,h),a})}else{if(Je(t))return O.bind(t);throw new Error("Invalid component")}};var m=vs;const Ss=N.get;var ft=Ss;const xs=N.root;var Es=xs;const As=(t,e)=>{if(!e)throw new Error("Invalid parent node");return e.textContent="",Es(s=>(Mt(e,t),()=>{s(),e.textContent=""}))};var Cs=As;function Ns(t,e){return N(t,e)}const Ts=({loop:t,callback:e,cancel:s,schedule:n})=>{let i;const r=c=>{ft(t)&&l(),ft(e)(c)},l=()=>{i=W(()=>n(r))},o=()=>{W(()=>s(i))};return l(),Y(o),o};var Ls=Ts;const Ms=t=>Ls({callback:t,loop:!0,cancel:cancelAnimationFrame,schedule:requestAnimationFrame});var Os=Ms;const F=l=>{var o=l,{rotate:t,length:e,width:s,fixed:n,offset:i=4}=o,r=B(o,["rotate","length","width","fixed","offset"]);return m("line",V({x1:100,x2:100,y1:n?i:100-e,y2:n?i+e:100,stroke:"currentColor","stroke-width":s,"stroke-linecap":"round",transform:t},r))},Fs=(t,e)=>`rotate(${360*t/e} 100 100)`,ht=s=>{var n=s,{numberOfLines:t}=n,e=B(n,["numberOfLines"]);return Array.from({length:t}).map((i,r)=>m(F,rt(V({rotate:Fs(r,t)},e),{fixed:!0})))},at=()=>(Date.now()-new Date().setHours(0,0,0,0))/1e3,$s=({hour:t,minute:e,second:s,subsecond:n})=>m("svg",{viewBox:"0 0 200 200",class:"h-9/10"},m("circle",{class:"text-neutral-900 fill-none stroke-current",cx:"100",cy:"100",r:"99"}),m(ht,{numberOfLines:60,class:"text-neutral-400",length:3,width:1}),m(ht,{numberOfLines:12,class:"text-neutral-800",length:7,width:2}),m(F,{rotate:n,class:"text-neutral-200 change-transform",length:83,width:5}),m(F,{rotate:t,class:"text-neutral-800",length:50,width:4}),m(F,{rotate:e,class:"text-neutral-800",length:70,width:3}),m(F,{rotate:s,class:"text-red-500",length:77,width:2})),_s=()=>{const t=Ns(at());Os(()=>t(at()));const e=(l,o=1)=>`rotate(${(l*360).toFixed(o)} 100 100)`;return m("div",{class:"flex flex-wrap items-center justify-center h-full"},m($s,{hour:()=>e(t()/60/60%12/12),minute:()=>e(t()/60%60/60),second:()=>e(t()%60/60),subsecond:()=>e(t()%1,0)}))};Cs(m(_s,null),document.querySelector("#root"));

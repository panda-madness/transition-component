let t,e,n=0,o=!1,l=!1,s=!1,r=!1;const c=window,i=document,a={t:0,o:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,o)=>t.addEventListener(e,n,o),rel:(t,e,n,o)=>t.removeEventListener(e,n,o)},f=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),u=new WeakMap,m=t=>u.get(t),$=(t,e)=>u.set(e.l=t,e),p=t=>console.error(t),d=new Map,w=new Map,h=[],y=[],b=[],_=(t,e)=>n=>{t.push(n),o||(o=!0,e&&4&a.t?S(j):a.raf(j))},g=(t,e)=>{let n=0,o=0;for(;n<t.length&&(o=performance.now())<e;)try{t[n++](o)}catch(l){p(l)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},j=()=>{n++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){p(e)}t.length=0})(h);const t=2==(6&a.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;g(y,t),g(b,t),y.length>0&&(b.push(...y),y.length=0),(o=h.length+y.length+b.length>0)?a.raf(j):n=0},S=t=>Promise.resolve().then(t),v=_(y,!0),M=t=>"object"==(t=typeof t)||"function"===t,k=()=>c.CSS&&c.CSS.supports&&c.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_transition("./p-d8631f0b.js").then(()=>{a.s=c.__stencil_cssshim}),R=async()=>{a.s=c.__stencil_cssshim;const t=new RegExp("/transition(\\.esm)?\\.js($|\\?|#)"),e=Array.from(i.querySelectorAll("script")).find(e=>t.test(e.src)||"transition"===e.getAttribute("data-stencil-namespace")),n=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href));return U(t.href),window.customElements||await __sc_import_transition("./p-d0882b30.js"),Object.assign(Object.assign({},n),{resourcesUrl:t.href})}},U=t=>{const e=(()=>`__sc_import_${"transition".replace(/\s|-/g,"_")}`)();try{c[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const o=new Map;c[e]=n=>{const l=new URL(n,t).href;let s=o.get(l);if(!s){const t=i.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${l}'; window.${e}.m = m;`],{type:"application/javascript"})),s=new Promise(n=>{t.onload=()=>{n(c[e].m),t.remove()}}),o.set(l,s),i.head.appendChild(t)}return s}}},L=new WeakMap,O=t=>"sc-"+t,P=(t,e,...n)=>{let o=null,l=null,s=!1,r=!1,c=[];const i=e=>{for(let n=0;n<e.length;n++)o=e[n],Array.isArray(o)?i(o):null!=o&&"boolean"!=typeof o&&((s="function"!=typeof t&&!M(o))&&(o=String(o)),s&&r?c[c.length-1].i+=o:c.push(s?x(null,o):o),r=s)};i(n),e&&e.name&&(l=e.name);const a=x(t,null);return a.u=e,c.length>0&&(a.$=c),a.p=l,a},x=(t,e)=>({t:0,h:t,i:e,_:null,$:null,p:null}),C={},T=(n,o,s)=>{let c,a,f,u=o.$[s],m=0;if(l||(r=!0,"slot"===u.h&&(u.t|=u.$?2:1)),1&u.t)c=u._=i.createTextNode("");else if(c=u._=i.createElement(2&u.t?"slot-fb":u.h),u.$)for(m=0;m<u.$.length;++m)(a=T(n,u,m,c))&&c.appendChild(a);return c["s-hn"]=e,3&u.t&&(c["s-sr"]=!0,c["s-cr"]=t,c["s-sn"]=u.p||"",(f=n&&n.$&&n.$[s])&&f.h===u.h&&n._&&A(n._,!1)),c},A=(t,n)=>{a.t|=1;const o=t.childNodes;for(let l=o.length-1;l>=0;l--){const t=o[l];t["s-hn"]!==e&&t["s-ol"]&&(N(t).insertBefore(t,H(t)),t["s-ol"].remove(),t["s-ol"]=void 0,r=!0),n&&A(t,n)}a.t&=-2},E=(t,e,n,o,l,s)=>{let r,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(;l<=s;++l)o[l]&&(r=T(null,n,l,t))&&(o[l]._=r,c.insertBefore(r,H(e)))},W=(t,e,n,o,l)=>{for(;e<=n;++e)(o=t[e])&&(s=!0,(l=o._)["s-ol"]?l["s-ol"].remove():A(l,!0),l.remove())},F=(t,e)=>t.h===e.h&&("slot"!==t.h||t.p===e.p),H=t=>t&&t["s-ol"]||t,N=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,q=(t,e)=>{const n=e._=t._,o=t.$,l=e.$;null!==o&&null!==l?((t,e,n,o)=>{let l,s=0,r=0,c=e.length-1,i=e[0],a=e[c],f=o.length-1,u=o[0],m=o[f];for(;s<=c&&r<=f;)null==i?i=e[++s]:null==a?a=e[--c]:null==u?u=o[++r]:null==m?m=o[--f]:F(i,u)?(q(i,u),i=e[++s],u=o[++r]):F(a,m)?(q(a,m),a=e[--c],m=o[--f]):F(i,m)?("slot"!==i.h&&"slot"!==m.h||A(i._.parentNode,!1),q(i,m),t.insertBefore(i._,a._.nextSibling),i=e[++s],m=o[--f]):F(a,u)?("slot"!==i.h&&"slot"!==m.h||A(a._.parentNode,!1),q(a,u),t.insertBefore(a._,i._),a=e[--c],u=o[++r]):(l=T(e&&e[r],n,r,t),u=o[++r],l&&N(i._).insertBefore(l,H(i._)));s>c?E(t,null==o[f+1]?null:o[f+1]._,n,o,r,f):r>f&&W(e,s,c)})(n,o,e,l):null!==l?E(n,null,e,l,0,l.length-1):null!==o&&W(o,0,o.length-1)},B=t=>{let e,n,o,l,s,r,c=t.childNodes;for(n=0,o=c.length;n<o;n++)if(1===(e=c[n]).nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,l=0;l<o;l++)if(c[l]["s-hn"]!==e["s-hn"])if(r=c[l].nodeType,""!==s){if(1===r&&s===c[l].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==c[l].textContent.trim()){e.hidden=!0;break}B(e)}},V=[],z=t=>{let e,n,o,l,r=t.childNodes,c=r.length,i=0,a=0,f=0;for(c=r.length;i<c;i++){if((e=r[i])["s-sr"]&&(n=e["s-cr"]))for(l=e["s-sn"],a=(o=n.parentNode.childNodes).length-1;a>=0;a--)(n=o[a])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===l||1===f&&null===n.getAttribute("slot")&&""===l||1===f&&n.getAttribute("slot")===l)&&(V.some(t=>t.g===n)||(s=!0,n["s-sn"]=l,V.push({j:e,g:n})));1===e.nodeType&&z(e)}},D=(t,e)=>{e&&!t.S&&e["s-p"].push(new Promise(e=>t.S=e))},G=(t,e,n,o)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const l=e.l,s=()=>I(t,e,n,l,o);let r;return D(e,e.v),o&&(r=Q(l,"componentWillLoad")),X(r,()=>v(s))},I=(n,o,c,f,u)=>{const m=n["s-rc"];u&&((t,e)=>{((t,e)=>{let n=O(e.M),o=w.get(n);if(t=11===t.nodeType?t:i,o)if("string"==typeof o){let e,l=L.get(t=t.head||t);l||L.set(t,l=new Set),l.has(n)||((e=i.createElement("style")).innerHTML=o,t.insertBefore(e,t.querySelector("link")),l&&l.add(n))}else t.adoptedStyleSheets.includes(o)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,o])})(t.getRootNode(),e)})(n,c);try{((n,o,c,f)=>{e=n.tagName;const u=o.k||x(null,null),m=(t=>t&&t.h===C)(f)?f:P(null,null,f);if(m.h=null,m.t|=4,o.k=m,m._=u._=n,t=n["s-cr"],l=!1,s=!1,q(u,m),r){z(m._);for(let t=0;t<V.length;t++){const e=V[t];if(!e.g["s-ol"]){const t=i.createTextNode("");t["s-nr"]=e.g,e.g.parentNode.insertBefore(e.g["s-ol"]=t,e.g)}}a.t|=1;for(let t=0;t<V.length;t++){const e=V[t],n=e.j.parentNode;let o=e.j.nextSibling,l=e.g["s-ol"];for(;l=l.previousSibling;){let t=l["s-nr"];if(t&&t["s-sn"]===e.g["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){o=t;break}}(!o&&n!==e.g.parentNode||e.g.nextSibling!==o)&&e.g!==o&&n.insertBefore(e.g,o)}a.t&=-2}s&&B(m._),V.length=0})(n,o,0,f.render())}catch($){p($)}o.t&=-17,o.t|=2,m&&(m.forEach(t=>t()),n["s-rc"]=void 0);{const t=n["s-p"],e=()=>J(n,o,c);0===t.length?e():(Promise.all(t).then(e),o.t|=4,t.length=0)}},J=(t,e,n)=>{const o=e.v;64&e.t||(e.t|=64,t.classList.add("hydrated"),e.R(t),o||K()),e.S&&(e.S(),e.S=void 0),512&e.t&&S(()=>G(t,e,n,!1)),e.t&=-517},K=()=>{i.documentElement.classList.add("hydrated"),a.t|=2},Q=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(o){p(o)}},X=(t,e)=>t&&t.then?t.then(e):e(),Y=(t,e,n)=>{if(e.U){t.watchers&&(e.L=t.watchers);const o=Object.entries(e.U),l=t.prototype;if(o.forEach(([t,[o]])=>{(31&o||2&n&&32&o)&&Object.defineProperty(l,t,{get(){return((t,e)=>m(t).O.get(e))(this,t)},set(n){((t,e,n,o)=>{const l=m(this),s=l.P,r=l.O.get(e),c=l.t,i=l.l;if(!((n=((t,e)=>null==t||M(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?String(t):t)(n,o.U[e][0]))===r||8&c&&void 0!==r)&&(l.O.set(e,n),i)){if(o.L&&128&c){const t=o.L[e];t&&t.forEach(t=>{try{i[t](n,r,e)}catch(o){p(o)}})}2==(18&c)&&G(s,l,o,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;l.attributeChangedCallback=function(t,n,o){a.jmp(()=>{const n=e.get(t);this[n]=(null!==o||"boolean"!=typeof this[n])&&o})},t.observedAttributes=o.filter(([t,e])=>15&e[0]).map(([t,n])=>{const o=n[1]||t;return e.set(o,t),o})}}return t},Z=(t,e={})=>{const n=[],o=e.exclude||[],l=i.head,s=c.customElements,r=l.querySelector("meta[charset]"),$=i.createElement("style"),h=[];let y,b=!0;Object.assign(a,e),a.o=new URL(e.resourcesUrl||"./",i.baseURI).href,e.syncQueue&&(a.t|=4),t.forEach(t=>t[1].forEach(e=>{const l={t:e[0],M:e[1],U:e[2],C:e[3]};l.U=e[2],l.L={};const r=l.M,c=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,P:t,O:new Map};e.T=new Promise(t=>e.R=t),t["s-p"]=[],t["s-rc"]=[],u.set(t,e)})(t=this)}connectedCallback(){y&&(clearTimeout(y),y=null),b?h.push(this):a.jmp(()=>((t,e)=>{if(0==(1&a.t)){const n=()=>{},o=m(t);if(!(1&o.t)){let n;o.t|=1,n||4&e.t&&(t=>{const e=t["s-cr"]=i.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){D(o,o.v=e);break}}e.U&&Object.entries(e.U).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),S(()=>(async(t,e,n,o,l)=>{if(0==(32&e.t)){e.t|=32;{if((l=(t=>{const e=t.M.replace(/-/g,"_"),n=t.A,o=d.get(n);return o?o[e]:__sc_import_transition(`./${n}.entry.js`).then(t=>(d.set(n,t),t[e]),p)})(n)).then){const t=()=>{};l=await l,t()}l.isProxied||(n.L=l.watchers,Y(l,n,2),l.isProxied=!0);const t=()=>{};e.t|=8;try{new l(e)}catch(c){p(c)}e.t&=-9,e.t|=128,t()}const t=O(n.M);if(!w.has(t)&&l.style){const e=()=>{};((t,e,n)=>{let o=w.get(t);f&&n?(o=o||new CSSStyleSheet).replace(e):o=e,w.set(t,o)})(t,l.style,!!(1&n.t)),e()}}const s=e.v,r=()=>G(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(t,o,e))}n()}})(this,l))}disconnectedCallback(){a.jmp(()=>void 0)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=m(t);2==(18&n.t)&&G(t,n,e,!1)}})(this,l)}componentOnReady(){return m(this).T}};l.A=t[0],o.includes(r)||s.get(r)||(n.push(r),s.define(r,Y(c,l,1)))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),l.insertBefore($,r?r.nextSibling:l.firstChild),b=!1,h.length>0?h.forEach(t=>t.connectedCallback()):a.jmp(()=>y=setTimeout(K,30,"timeout"))},tt=t=>m(t).P;export{C as H,k as a,Z as b,tt as g,P as h,R as p,$ as r};
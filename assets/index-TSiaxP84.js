var Je=Object.defineProperty;var Qe=(t,e,r)=>e in t?Je(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var ie=(t,e,r)=>Qe(t,typeof e!="symbol"?e+"":e,r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(l){if(l.ep)return;l.ep=!0;const u=r(l);fetch(l.href,u)}})();const oe=!1;var te=Array.isArray,tr=Array.prototype.indexOf,ee=Array.from,er=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,rr=Object.getOwnPropertyDescriptors,nr=Object.prototype,lr=Array.prototype,Ee=Object.getPrototypeOf;const D=2,be=4,Lt=8,re=16,Q=32,wt=64,kt=128,U=256,St=512,S=1024,K=2048,it=4096,Y=8192,jt=16384,ur=32768,ne=65536,ar=1<<19,xe=1<<20,Wt=Symbol("$state");function Te(t){return t===this.v}function ir(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Ae(t){return!ir(t,this.v)}function or(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function sr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function fr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Bt=!1,_r=!1;function dr(){Bt=!0}const hr=1,pr=2,gr=16,mr=1,wr=2,O=Symbol();let T=null;function se(t){T=t}function Ne(t,e=!1,r){T={p:T,c:null,e:null,m:!1,s:t,x:null,l:null},Bt&&!e&&(T.l={s:null,u:null,r1:[],r2:P(!1)})}function Oe(t){const e=T;if(e!==null){const i=e.e;if(i!==null){var r=w,n=m;e.e=null;try{for(var l=0;l<i.length;l++){var u=i[l];J(u.effect),G(u.reaction),Cr(u.fn)}}finally{J(r),G(n)}}T=e.p,e.m=!0}return{}}function yt(){return!Bt||T!==null&&T.l===null}function P(t,e){var r={f:0,v:t,reactions:null,equals:Te,rv:0,wv:0};return r}function _t(t){return Er(P(t))}function yr(t,e=!1){var n;const r=P(t);return e||(r.equals=Ae),Bt&&T!==null&&T.l!==null&&((n=T.l).s??(n.s=[])).push(r),r}function Er(t){return m!==null&&!H&&m.f&D&&(q===null?Rr([t]):q.push(t)),t}function k(t,e){return m!==null&&!H&&yt()&&m.f&(D|re)&&(q===null||!q.includes(t))&&vr(),br(t,e)}function br(t,e){return t.equals(e)||(t.v,t.v=e,t.wv=Ve(),ke(t,K),yt()&&w!==null&&w.f&S&&!(w.f&(Q|wt))&&(V===null?Mr([t]):V.push(t))),e}function ke(t,e){var r=t.reactions;if(r!==null)for(var n=yt(),l=r.length,u=0;u<l;u++){var i=r[u],v=i.f;v&K||!n&&i===w||($(i,e),v&(S|U)&&(v&D?ke(i,it):Ut(i)))}}let Se=!1;function M(t,e=null,r){if(typeof t!="object"||t===null||Wt in t)return t;const n=Ee(t);if(n!==nr&&n!==lr)return t;var l=new Map,u=te(t),i=P(0);u&&l.set("length",P(t.length));var v;return new Proxy(t,{defineProperty(c,o,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&sr();var f=l.get(o);return f===void 0?(f=P(s.value),l.set(o,f)):k(f,M(s.value,v)),!0},deleteProperty(c,o){var s=l.get(o);if(s===void 0)o in c&&l.set(o,P(O));else{if(u&&typeof o=="string"){var f=l.get("length"),a=Number(o);Number.isInteger(a)&&a<f.v&&k(f,a)}k(s,O),fe(i)}return!0},get(c,o,s){var d;if(o===Wt)return t;var f=l.get(o),a=o in c;if(f===void 0&&(!a||(d=pt(c,o))!=null&&d.writable)&&(f=P(M(a?c[o]:O,v)),l.set(o,f)),f!==void 0){var _=p(f);return _===O?void 0:_}return Reflect.get(c,o,s)},getOwnPropertyDescriptor(c,o){var s=Reflect.getOwnPropertyDescriptor(c,o);if(s&&"value"in s){var f=l.get(o);f&&(s.value=p(f))}else if(s===void 0){var a=l.get(o),_=a==null?void 0:a.v;if(a!==void 0&&_!==O)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return s},has(c,o){var _;if(o===Wt)return!0;var s=l.get(o),f=s!==void 0&&s.v!==O||Reflect.has(c,o);if(s!==void 0||w!==null&&(!f||(_=pt(c,o))!=null&&_.writable)){s===void 0&&(s=P(f?M(c[o],v):O),l.set(o,s));var a=p(s);if(a===O)return!1}return f},set(c,o,s,f){var I;var a=l.get(o),_=o in c;if(u&&o==="length")for(var d=s;d<a.v;d+=1){var y=l.get(d+"");y!==void 0?k(y,O):d in c&&(y=P(O),l.set(d+"",y))}a===void 0?(!_||(I=pt(c,o))!=null&&I.writable)&&(a=P(void 0),k(a,M(s,v)),l.set(o,a)):(_=a.v!==O,k(a,M(s,v)));var N=Reflect.getOwnPropertyDescriptor(c,o);if(N!=null&&N.set&&N.set.call(f,s),!_){if(u&&typeof o=="string"){var g=l.get("length"),b=Number(o);Number.isInteger(b)&&b>=g.v&&k(g,b+1)}fe(i)}return!0},ownKeys(c){p(i);var o=Reflect.ownKeys(c).filter(a=>{var _=l.get(a);return _===void 0||_.v!==O});for(var[s,f]of l)f.v!==O&&!(s in c)&&o.push(s);return o},setPrototypeOf(){fr()}})}function fe(t,e=1){k(t,t.v+e)}var ce,Ce,Pe;function xr(){if(ce===void 0){ce=window;var t=Element.prototype,e=Node.prototype;Ce=pt(e,"firstChild").get,Pe=pt(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Vt(t=""){return document.createTextNode(t)}function Ct(t){return Ce.call(t)}function Yt(t){return Pe.call(t)}function B(t,e){return Ct(t)}function ve(t,e){{var r=Ct(t);return r instanceof Comment&&r.data===""?Yt(r):r}}function j(t,e=1,r=!1){let n=t;for(;e--;)n=Yt(n);return n}function Tr(t){t.textContent=""}function Ie(t){var e=D|K,r=m!==null&&m.f&D?m:null;return w===null||r!==null&&r.f&U?e|=U:w.f|=xe,{ctx:T,deps:null,effects:null,equals:Te,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??w}}function Ar(t){const e=Ie(t);return e.equals=Ae,e}function Re(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)z(e[r])}}function Nr(t){for(var e=t.parent;e!==null;){if(!(e.f&D))return e;e=e.parent}return null}function Or(t){var e,r=w;J(Nr(t));try{Re(t),e=He(t)}finally{J(r)}return e}function Me(t){var e=Or(t),r=(Z||t.f&U)&&t.deps!==null?it:S;$(t,r),t.equals(e)||(t.v=e,t.wv=Ve())}function kr(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Et(t,e,r,n=!0){var l=(t&wt)!==0,u=w,i={ctx:T,deps:null,nodes_start:null,nodes_end:null,f:t|K,first:null,fn:e,last:null,next:null,parent:l?null:u,prev:null,teardown:null,transitions:null,wv:0};if(r){var v=at;try{_e(!0),ae(i),i.f|=ur}catch(s){throw z(i),s}finally{_e(v)}}else e!==null&&Ut(i);var c=r&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(xe|kt))===0;if(!c&&!l&&n&&(u!==null&&kr(i,u),m!==null&&m.f&D)){var o=m;(o.effects??(o.effects=[])).push(i)}return i}function Sr(t){const e=Et(wt,t,!0);return(r={})=>new Promise(n=>{r.outro?Pt(e,()=>{z(e),n(void 0)}):(z(e),n(void 0))})}function Cr(t){return Et(be,t,!1)}function Pr(t){return Et(Lt,t,!0)}function dt(t,e=[],r=Ie){const n=e.map(r);return le(()=>t(...n.map(p)))}function le(t,e=0){return Et(Lt|re|e,t,!0)}function mt(t,e=!0){return Et(Lt|Q,t,!0,e)}function De(t){var e=t.teardown;if(e!==null){const r=m;G(null);try{e.call(null)}finally{G(r)}}}function Fe(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;z(r,e),r=n}}function Ir(t){for(var e=t.first;e!==null;){var r=e.next;e.f&Q||z(e),e=r}}function z(t,e=!0){var r=!1;if((e||t.f&ar)&&t.nodes_start!==null){for(var n=t.nodes_start,l=t.nodes_end;n!==null;){var u=n===l?null:Yt(n);n.remove(),n=u}r=!0}Fe(t,e&&!r),Ft(t,0),$(t,jt);var i=t.transitions;if(i!==null)for(const c of i)c.stop();De(t);var v=t.parent;v!==null&&v.first!==null&&qe(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qe(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function Pt(t,e){var r=[];ue(t,r,!0),Le(r,()=>{z(t),e&&e()})}function Le(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var l of t)l.out(n)}else e()}function ue(t,e,r){if(!(t.f&Y)){if(t.f^=Y,t.transitions!==null)for(const i of t.transitions)(i.is_global||r)&&e.push(i);for(var n=t.first;n!==null;){var l=n.next,u=(n.f&ne)!==0||(n.f&Q)!==0;ue(n,e,u?r:!1),n=l}}}function It(t){je(t,!0)}function je(t,e){if(t.f&Y){t.f^=Y,t.f&S||(t.f^=S),bt(t)&&($(t,K),Ut(t));for(var r=t.first;r!==null;){var n=r.next,l=(r.f&ne)!==0||(r.f&Q)!==0;je(r,l?e:!1),r=n}if(t.transitions!==null)for(const u of t.transitions)(u.is_global||e)&&u.in()}}let Ot=!1,Rt=!1,Mt=null,at=!1;function _e(t){at=t}let Jt=[],gt=0;let m=null,H=!1;function G(t){m=t}let w=null;function J(t){w=t}let q=null;function Rr(t){q=t}let A=null,C=0,V=null;function Mr(t){V=t}let Be=1,Dt=0,Z=!1;function Ve(){return++Be}function bt(t){var o;var e=t.f;if(e&K)return!0;if(e&it){var r=t.deps,n=(e&U)!==0;if(r!==null){var l,u,i=(e&St)!==0,v=n&&w!==null&&!Z,c=r.length;if(i||v){for(l=0;l<c;l++)u=r[l],(i||!((o=u==null?void 0:u.reactions)!=null&&o.includes(t)))&&(u.reactions??(u.reactions=[])).push(t);i&&(t.f^=St)}for(l=0;l<c;l++)if(u=r[l],bt(u)&&Me(u),u.wv>t.wv)return!0}(!n||w!==null&&!Z)&&$(t,S)}return!1}function Dr(t,e){for(var r=e;r!==null;){if(r.f&kt)try{r.fn(t);return}catch{r.f^=kt}r=r.parent}throw Ot=!1,t}function Fr(t){return(t.f&jt)===0&&(t.parent===null||(t.parent.f&kt)===0)}function Ht(t,e,r,n){if(Ot){if(r===null&&(Ot=!1),Fr(e))throw t;return}r!==null&&(Ot=!0);{Dr(t,e);return}}function Ye(t,e,r=0){var n=t.reactions;if(n!==null)for(var l=0;l<n.length;l++){var u=n[l];u.f&D?Ye(u,e,r+1):e===u&&(r===0?$(u,K):u.f&S&&$(u,it),Ut(u))}}function He(t){var _;var e=A,r=C,n=V,l=m,u=Z,i=q,v=T,c=H,o=t.f;A=null,C=0,V=null,m=o&(Q|wt)?null:t,Z=(o&U)!==0&&(!at||l===null||c),q=null,se(t.ctx),H=!1,Dt++;try{var s=(0,t.fn)(),f=t.deps;if(A!==null){var a;if(Ft(t,C),f!==null&&C>0)for(f.length=C+A.length,a=0;a<A.length;a++)f[C+a]=A[a];else t.deps=f=A;if(!Z)for(a=C;a<f.length;a++)((_=f[a]).reactions??(_.reactions=[])).push(t)}else f!==null&&C<f.length&&(Ft(t,C),f.length=C);if(yt()&&V!==null&&!(t.f&(D|it|K)))for(a=0;a<V.length;a++)Ye(V[a],t);return l!==null&&Dt++,s}finally{A=e,C=r,V=n,m=l,Z=u,q=i,se(v),H=c}}function qr(t,e){let r=e.reactions;if(r!==null){var n=tr.call(r,t);if(n!==-1){var l=r.length-1;l===0?r=e.reactions=null:(r[n]=r[l],r.pop())}}r===null&&e.f&D&&(A===null||!A.includes(e))&&($(e,it),e.f&(U|St)||(e.f^=St),Re(e),Ft(e,0))}function Ft(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)qr(t,r[n])}function ae(t){var e=t.f;if(!(e&jt)){$(t,S);var r=w,n=T;w=t;try{e&re?Ir(t):Fe(t),De(t);var l=He(t);t.teardown=typeof l=="function"?l:null,t.wv=Be;var u=t.deps,i;oe&&_r&&t.f&K}catch(v){Ht(v,t,r,n||t.ctx)}finally{w=r}}}function Lr(){if(gt>1e3){gt=0;try{or()}catch(t){if(Mt!==null)Ht(t,Mt,null);else throw t}}gt++}function jr(t){var e=t.length;if(e!==0){Lr();var r=at;at=!0;try{for(var n=0;n<e;n++){var l=t[n];l.f&S||(l.f^=S);var u=[];Ue(l,u),Br(u)}}finally{at=r}}}function Br(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if(!(n.f&(jt|Y)))try{bt(n)&&(ae(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?qe(n):n.fn=null))}catch(l){Ht(l,n,null,n.ctx)}}}function Vr(){if(Rt=!1,gt>1001)return;const t=Jt;Jt=[],jr(t),Rt||(gt=0,Mt=null)}function Ut(t){Rt||(Rt=!0,queueMicrotask(Vr)),Mt=t;for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if(r&(wt|Q)){if(!(r&S))return;e.f^=S}}Jt.push(e)}function Ue(t,e){var r=t.first,n=[];t:for(;r!==null;){var l=r.f,u=(l&Q)!==0,i=u&&(l&S)!==0,v=r.next;if(!i&&!(l&Y))if(l&Lt){if(u)r.f^=S;else{var c=m;try{m=r,bt(r)&&ae(r)}catch(a){Ht(a,r,null,r.ctx)}finally{m=c}}var o=r.first;if(o!==null){r=o;continue}}else l&be&&n.push(r);if(v===null){let a=r.parent;for(;a!==null;){if(t===a)break t;var s=a.next;if(s!==null){r=s;continue t}a=a.parent}}r=v}for(var f=0;f<n.length;f++)o=n[f],e.push(o),Ue(o,e)}function p(t){var e=t.f,r=(e&D)!==0;if(m!==null&&!H){q!==null&&q.includes(t)&&cr();var n=m.deps;t.rv<Dt&&(t.rv=Dt,A===null&&n!==null&&n[C]===t?C++:A===null?A=[t]:(!Z||!A.includes(t))&&A.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,u=l.parent;u!==null&&!(u.f&U)&&(l.f^=U)}return r&&(l=t,bt(l)&&Me(l)),t.v}function Yr(t){var e=H;try{return H=!0,t()}finally{H=e}}const Hr=-7169;function $(t,e){t.f=t.f&Hr|e}const Ur=["touchstart","touchmove"];function $r(t){return Ur.includes(t)}let de=!1;function Kr(){de||(de=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function Wr(t){var e=m,r=w;G(null),J(null);try{return t()}finally{G(e),J(r)}}function Xr(t,e,r,n=r){t.addEventListener(e,()=>Wr(r));const l=t.__on_r;l?t.__on_r=()=>{l(),n(!0)}:t.__on_r=()=>n(!0),Kr()}const $e=new Set,Qt=new Set;function Zr(t){for(var e=0;e<t.length;e++)$e.add(t[e]);for(var r of Qt)r(t)}function Tt(t){var b;var e=this,r=e.ownerDocument,n=t.type,l=((b=t.composedPath)==null?void 0:b.call(t))||[],u=l[0]||t.target,i=0,v=t.__root;if(v){var c=l.indexOf(v);if(c!==-1&&(e===document||e===window)){t.__root=e;return}var o=l.indexOf(e);if(o===-1)return;c<=o&&(i=c)}if(u=l[i]||t.target,u!==e){er(t,"currentTarget",{configurable:!0,get(){return u||r}});var s=m,f=w;G(null),J(null);try{for(var a,_=[];u!==null;){var d=u.assignedSlot||u.parentNode||u.host||null;try{var y=u["__"+n];if(y!==void 0&&!u.disabled)if(te(y)){var[N,...g]=y;N.apply(u,[t,...g])}else y.call(u,t)}catch(I){a?_.push(I):a=I}if(t.cancelBubble||d===e||d===null)break;u=d}if(a){for(let I of _)queueMicrotask(()=>{throw I});throw a}}finally{t.__root=e,delete t.currentTarget,G(s),J(f)}}}function zr(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function qt(t,e){var r=w;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function ot(t,e){var r=(e&mr)!==0,n=(e&wr)!==0,l,u=!t.startsWith("<!>");return()=>{l===void 0&&(l=zr(u?t:"<!>"+t),r||(l=Ct(l)));var i=n?document.importNode(l,!0):l.cloneNode(!0);if(r){var v=Ct(i),c=i.lastChild;qt(v,c)}else qt(i,i);return i}}function Gr(t=""){{var e=Vt(t+"");return qt(e,e),e}}function Jr(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Vt();return t.append(e,r),qt(e,r),t}function W(t,e){t!==null&&t.before(e)}function Xt(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function Qr(t,e){return tn(t,e)}const ut=new Map;function tn(t,{target:e,anchor:r,props:n={},events:l,context:u,intro:i=!0}){xr();var v=new Set,c=f=>{for(var a=0;a<f.length;a++){var _=f[a];if(!v.has(_)){v.add(_);var d=$r(_);e.addEventListener(_,Tt,{passive:d});var y=ut.get(_);y===void 0?(document.addEventListener(_,Tt,{passive:d}),ut.set(_,1)):ut.set(_,y+1)}}};c(ee($e)),Qt.add(c);var o=void 0,s=Sr(()=>{var f=r??e.appendChild(Vt());return mt(()=>{if(u){Ne({});var a=T;a.c=u}l&&(n.$$events=l),o=t(f,n)||{},u&&Oe()}),()=>{var d;for(var a of v){e.removeEventListener(a,Tt);var _=ut.get(a);--_===0?(document.removeEventListener(a,Tt),ut.delete(a)):ut.set(a,_)}Qt.delete(c),f!==r&&((d=f.parentNode)==null||d.removeChild(f))}});return en.set(o,s),o}let en=new WeakMap;function he(t,e,r=!1){var n=t,l=null,u=null,i=O,v=r?ne:0,c=!1;const o=(f,a=!0)=>{c=!0,s(a,f)},s=(f,a)=>{i!==(i=f)&&(i?(l?It(l):a&&(l=mt(()=>a(n))),u&&Pt(u,()=>{u=null})):(u?It(u):a&&(u=mt(()=>a(n))),l&&Pt(l,()=>{l=null})))};le(()=>{c=!1,e(o),c||s(null,null)},v)}function rn(t,e,r,n){for(var l=[],u=e.length,i=0;i<u;i++)ue(e[i].e,l,!0);var v=u>0&&l.length===0&&r!==null;if(v){var c=r.parentNode;Tr(c),c.append(r),n.clear(),X(t,e[0].prev,e[u-1].next)}Le(l,()=>{for(var o=0;o<u;o++){var s=e[o];v||(n.delete(s.k),X(t,s.prev,s.next)),z(s.e,!v)}})}function pe(t,e,r,n,l,u=null){var i=t,v={items:new Map,first:null};{var c=t;i=c.appendChild(Vt())}var o=null,s=!1,f=Ar(()=>{var a=r();return te(a)?a:a==null?[]:ee(a)});le(()=>{var a=p(f),_=a.length;s&&_===0||(s=_===0,nn(a,v,i,l,e,n,r),u!==null&&(_===0?o?It(o):o=mt(()=>u(i)):o!==null&&Pt(o,()=>{o=null})),p(f))})}function nn(t,e,r,n,l,u,i){var v=t.length,c=e.items,o=e.first,s=o,f,a=null,_=[],d=[],y,N,g,b;for(b=0;b<v;b+=1){if(y=t[b],N=u(y,b),g=c.get(N),g===void 0){var I=s?s.e.nodes_start:r;a=ln(I,e,a,a===null?e.first:a.next,y,N,b,n,l,i),c.set(N,a),_=[],d=[],s=a.next;continue}if(g.e.f&Y&&It(g.e),g!==s){if(f!==void 0&&f.has(g)){if(_.length<d.length){var rt=d[0],F;a=rt.prev;var st=_[0],ft=_[_.length-1];for(F=0;F<_.length;F+=1)ge(_[F],rt,r);for(F=0;F<d.length;F+=1)f.delete(d[F]);X(e,st.prev,ft.next),X(e,a,st),X(e,ft,rt),s=rt,a=ft,b-=1,_=[],d=[]}else f.delete(g),ge(g,s,r),X(e,g.prev,g.next),X(e,g,a===null?e.first:a.next),X(e,a,g),a=g;continue}for(_=[],d=[];s!==null&&s.k!==N;)s.e.f&Y||(f??(f=new Set)).add(s),d.push(s),s=s.next;if(s===null)continue;g=s}_.push(g),a=g,s=g.next}if(s!==null||f!==void 0){for(var tt=f===void 0?[]:ee(f);s!==null;)s.e.f&Y||tt.push(s),s=s.next;var ct=tt.length;if(ct>0){var xt=v===0?r:null;rn(e,tt,xt,c)}}w.first=e.first&&e.first.e,w.last=a&&a.e}function ln(t,e,r,n,l,u,i,v,c,o){var s=(c&hr)!==0,f=(c&gr)===0,a=s?f?yr(l):P(l):l,_=c&pr?P(i):i,d={i:_,v:a,k:u,a:null,e:null,prev:r,next:n};try{return d.e=mt(()=>v(t,a,_,o),Se),d.e.prev=r&&r.e,d.e.next=n&&n.e,r===null?e.first=d:(r.next=d,r.e.next=d.e),n!==null&&(n.prev=d,n.e.prev=d.e),d}finally{}}function ge(t,e,r){for(var n=t.next?t.next.e.nodes_start:r,l=e?e.e.nodes_start:r,u=t.e.nodes_start;u!==n;){var i=Yt(u);l.before(u),u=i}}function X(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function At(t,e,r,n){var l=t.__attributes??(t.__attributes={});l[e]!==(l[e]=r)&&(r==null?t.removeAttribute(e):typeof r!="string"&&un(t).includes(e)?t[e]=r:t.setAttribute(e,r))}var me=new Map;function un(t){var e=me.get(t.nodeName);if(e)return e;me.set(t.nodeName,e=[]);for(var r,n=t,l=Element.prototype;l!==n;){r=rr(n);for(var u in r)r[u].set&&e.push(u);n=Ee(n)}return e}function an(t,e,r){var n=t.__className,l=on(e);(n!==l||Se)&&(e==null?t.removeAttribute("class"):t.className=l,t.__className=l)}function on(t,e){return(t??"")+""}function Nt(t,e,r=e){var n=yt();Xr(t,"input",l=>{var u=l?t.defaultValue:t.value;if(u=Zt(t)?zt(u):u,r(u),n&&u!==(u=e())){var i=t.selectionStart,v=t.selectionEnd;t.value=u??"",v!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(v,t.value.length))}}),Yr(e)==null&&t.value&&r(Zt(t)?zt(t.value):t.value),Pr(()=>{var l=e();Zt(t)&&l===zt(t.value)||t.type==="date"&&!l&&!t.value||l!==t.value&&(t.value=l??"")})}function Zt(t){var e=t.type;return e==="number"||e==="range"}function zt(t){return t===""?null:+t}const sn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(sn);dr();class ht{static transpose(e){return Array.from({length:e[0].length},(r,n)=>e.map(l=>l[n]))}static join(e){return e.join("-")}static not(e){}static not(e){const r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=e[n]==1?0:1;return r}static difference(e,r){let n=0;for(let l=0;l<e.length;l++)e[l]!=r[l]&&n++;return n}static and(...e){const r=new Array(e[0].length);for(let n=0;n<r.length;n++){let l=1;for(let u=0;u<e.length;u++)if(e[u][n]==0){l=0;break}r[n]=l}return r}static isRequired(e,r){for(let n=0;n<e.length;n++)if(e[n]==0&&r[n]==1)return!1;return!0}static indexOfMax(e){if(e.length===0)return-1;let r=0,n=e[0];for(let[l,u]of e.entries())u>n&&(n=u,r=l);return r}static areZeros(e){for(const r of e)if(r!=0)return!1;return!0}static convertToBoolean(e){const r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=e[n]>.5?1:0;return r}}function fn(t){let e="";for(;t>=0;){const r=t%26;e=String.fromCharCode(97+r)+e,t=Math.floor(t/26)-1}return e}let we=class{constructor(e,r){this.index=e,this.not=r}Evaluate(e){return e[this.index]==(this.not?0:1)}ToString(e){return(this.not?"!":"")+fn(this.index)}};function ye(t,e,r){for(let n=0;n<e.length;n++)e[n]==1&&(n in t||(t[n]=[]),t[n].push(r))}function cn(t){let e=Math.max(...t);return e==0&&(e=1),t.map(r=>r/e)}class vn{constructor(e,r,n=!0){ie(this,"outputs",[]);const l=ht.transpose(e),u=ht.transpose(r);for(let i=0;i<u.length;i++){const v=u[i],c={};for(let o=0;o<l.length;o++){const s=l[o],f=ht.and(s,v);if(ye(c,f,new we(o,!1)),n){const a=ht.and(ht.not(s),v);ye(c,a,new we(o,!0))}}this.outputs.push(Object.values(c))}}PredictAll(e){const r=[];for(const n of e)r.push(this.Predict(n));return r}Predict(e,r=1,n=100){const l=[];for(const u of this.outputs){let i=0,v=Math.max(1,n/100*u.length);for(let c=0;c<v;c++){const o=u[c];let s=0,f=0;if(o!=null)for(const a of o)f++,a.Evaluate(e)&&s++;s/f>=r&&i++}l.push(i)}return cn(l)}ToString(){let e="",r=0;for(const n of this.outputs){const l=[];for(const u of n){const i=[];for(const v of u)i.push(v.ToString());l.push(`(${i.join(" && ")})`)}e+=`Output ${r+1}: 
 ${l.join(" || ")} 

`,r++}return e}}function Gt(t,e,r,n,l,u,i,v){e(r,p(n),p(l)),e(u,p(i),p(l)),v()}var _n=(t,e,r,n,l,u)=>{e[r][n-p(l)]=e[r][n-p(l)]==1?0:1,u()},dn=ot('<button class="svelte-1amyjh7"> </button>'),hn=(t,e,r,n,l)=>{e[r][n]=e[r][n]==1?0:1,l()},pn=ot('<button class="svelte-1amyjh7"> </button>'),gn=ot("<td><!></td>"),mn=ot("<tr></tr>"),wn=ot(`<table class="svelte-1amyjh7"><thead><tr><th>Truth Table</th></tr><tr><th>Input</th><th>Output</th><th>Prediction</th></tr></thead><tbody></tbody></table> <h3>Equations for each output</h3> <textarea rows="10" cols="100"></textarea> <div class="floating-menu svelte-1amyjh7">Input length: <input type="number"> Output length: <input type="number"> height: <input type="number"> <div style="width: 300px;">If there are two inputs that are the same, but thier output
        are different, the prediction will be different from the output as
        is not possible to represent that with an equation</div></div>`,1);function yn(t,e){Ne(e,!0);const r=M([[1,0,0],[0,1,0],[1,0,1],[0,1,1]]),n=M([[0],[1],[1],[0]]);M([]);let l=_t(M([[0],[0],[0],[0]])),u=_t(3),i=_t(1),v=_t(4);function c(h){const E=new Array(h);for(let R=0;R<h;R++)E[R]=R;return E}function o(h,E,R){if(h.length<R)for(let x=h.length;x<R;x++)h.push(new Array(E).fill(0));else h.length>R&&(h=h.slice(0,R));for(let x=0;x<h.length;x++)h[x].length<E?h[x]=h[x].concat(new Array(E-h[x].length).fill(0)):h[x].length>E&&(h[x]=h[x].slice(0,E));return h}let s=_t("");function f(){const h=new vn(r,n);k(s,M(h.ToString())),k(l,M(r.map(E=>h.Predict(E))))}f();var a=wn(),_=ve(a),d=B(_),y=B(d),N=B(y),g=j(y),b=B(g),I=j(b),rt=j(I),F=j(d);pe(F,20,()=>c(p(v)),h=>h,(h,E)=>{var R=mn();pe(R,20,()=>c(p(u)+p(i)*2),x=>x,(x,L)=>{var $t=gn(),Ke=B($t);{var We=nt=>{var vt=Gr();dt(()=>Xt(vt,p(l)[E][L-p(u)-p(i)]==1?"1":"0")),W(nt,vt)},Xe=nt=>{var vt=Jr(),Ze=ve(vt);{var ze=lt=>{var et=dn();et.__click=[_n,n,E,L,u,f];var Kt=B(et);dt(()=>Xt(Kt,n[E][L-p(u)]==1?"1":"0")),W(lt,et)},Ge=lt=>{var et=pn();et.__click=[hn,r,E,L,f];var Kt=B(et);dt(()=>Xt(Kt,r[E][L]==1?"1":"0")),W(lt,et)};he(Ze,lt=>{L>=r[E].length?lt(ze):lt(Ge,!1)},!0)}W(nt,vt)};he(Ke,nt=>{L>=p(u)+p(i)?nt(We):nt(Xe,!1)})}dt(()=>an($t,`${(L==r[E].length||L==p(i)+r[E].length?"pad-left":"")??""} svelte-1amyjh7`)),W(x,$t)}),W(h,R)});var st=j(_,4),ft=j(st,2),tt=j(B(ft));tt.__click=[Gt,o,r,u,v,n,i,f];var ct=j(tt,2);ct.__click=[Gt,o,r,u,v,n,i,f];var xt=j(ct,2);xt.__click=[Gt,o,r,u,v,n,i,f],dt(()=>{At(N,"colspan",p(u)+p(i)*2),At(b,"colspan",p(u)),At(I,"colspan",p(i)),At(rt,"colspan",p(i))}),Nt(st,()=>p(s),h=>k(s,h)),Nt(tt,()=>p(u),h=>k(u,h)),Nt(ct,()=>p(i),h=>k(i,h)),Nt(xt,()=>p(v),h=>k(v,h)),W(t,a),Oe()}Zr(["click"]);var En=ot("<main><!></main>");function bn(t){var e=En(),r=B(e);yn(r,{}),W(t,e)}Qr(bn,{target:document.getElementById("app")});

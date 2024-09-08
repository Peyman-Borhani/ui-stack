import{F as z,q as S,ap as Q,aq as R,_ as A,ar as U,as as Y}from"./runtime.BqN4P2bw.js";import{k as H,l as M,m as J,n as W,o as X}from"./disclose-version.DSvmNWFO.js";import{g as C,d as K,w as h}from"./index.GxZjBg5W.js";function Z(e,t){if(t){const n=document.body;e.autofocus=!0,z(()=>{document.activeElement===n&&e.focus()})}}let T=!1;function $(){T||(T=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function ye(e){if(S){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var s=e.value;p(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var r=e.checked;p(e,"checked",null),e.checked=r}}};e.__on_r=n,Q(n),$()}}function p(e,t,n,s){n=n==null?null:n+"";var r=e.__attributes??(e.__attributes={});S&&(r[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||r[t]!==(r[t]=n)&&(t==="loading"&&(e[R]=n),n===null?e.removeAttribute(t):e.setAttribute(t,n))}function x(e,t,n){if(t in e){var s=e[t],r=typeof s=="boolean"&&n===""?!0:n;(typeof s!="object"||s!==r)&&(e[t]=r)}else p(e,t,n)}function ee(e,t,n,s,r=!1,u){var o=t||{},c=e.tagName==="OPTION";for(var a in t)a in n||(n[a]=null);var l=I.get(e.nodeName);l||I.set(e.nodeName,l=ne(e));var v=e.__attributes??(e.__attributes={}),d=[];for(const i in n){let f=n[i];if(c&&i==="value"&&f==null){e.value=e.__value="",o[i]=f;continue}var y=o[i];if(f!==y){o[i]=f;var E=i[0]+i[1];if(E!=="$$")if(E==="on"){const w={},b="$$"+i;let m=i.slice(2);var k=X(m);if(H(m)&&(m=m.slice(0,-7),w.capture=!0),!k&&y){if(f!=null)continue;e.removeEventListener(m,o[b],w),o[b]=null}if(f!=null)if(k)e[`__${m}`]=f,J([m]);else{let L=function(G){o[i].call(this,G)};t?o[b]=M(m,e,L,w):d.push([i,f,()=>o[b]=M(m,e,L,w)])}}else if(f==null)v[i]=null,e.removeAttribute(i);else if(i==="style")e.style.cssText=f+"";else if(i==="autofocus")Z(e,!!f);else if(i==="__value"||i==="value")e.value=e[i]=e.__value=f;else{var g=i;r||(g=W(g)),l.includes(g)?S&&(g==="src"||g==="href"||g==="srcset")||(e[g]=f):typeof f!="function"&&p(e,g,f)}}}return t||z(()=>{if(e.isConnected)for(const[i,f,w]of d)o[i]===f&&w()}),o}function we(e,t,n,s){if(e.tagName.includes("-")){for(var r in t)r in n||(n[r]=null);for(r in n)x(e,r,n[r]);return n}return ee(e,t,n,s,e.namespaceURI!==U)}var te=["width","height","draggable"],I=new Map;function ne(e){for(var t=[],n,s=A(e);s.constructor.name!=="Element";){n=Y(s);for(var r in n)n[r].set&&!te.includes(r)&&t.push(r);s=A(s)}return t}let V,q;function D(e){if(typeof document>"u")return;clearTimeout(V),clearTimeout(q);const t=document.createElement("style"),n=document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);t.appendChild(n);const s=()=>document.head.appendChild(t),r=()=>document.head.removeChild(t);if(typeof window.getComputedStyle<"u"){s(),e(),window.getComputedStyle(t).opacity,r();return}if(typeof window.requestAnimationFrame<"u"){s(),e(),window.requestAnimationFrame(r);return}s(),V=window.setTimeout(()=>{e(),q=window.setTimeout(r,120)},120)}function N(e){return e.filter(t=>t.length>0)}const O={getItem:e=>null,setItem:(e,t)=>{}},_=typeof document<"u",se=["dark","light","system"],re=h("mode-watcher-mode"),oe=h("mode-watcher-theme"),B=le(),ie=de(),ae=h(void 0),F=fe(),j=h(!0),ce=h([]),ue=h([]),be=me(),pe=he();function le(){const e="system",t=_?localStorage:O,n=t.getItem(r());let s=P(n)?n:e;function r(){return C(re)}const{subscribe:u,set:o}=h(s,()=>{if(!_)return;const a=l=>{if(l.key!==r())return;const v=l.newValue;P(v)?o(s=v):o(s=e)};return addEventListener("storage",a),()=>removeEventListener("storage",a)});function c(a){o(s=a),t.setItem(r(),s)}return{subscribe:u,set:c}}function fe(){const e=_?localStorage:O,t=e.getItem(s());let n=t??"";function s(){return C(oe)}const{subscribe:r,set:u}=h(n,()=>{if(!_)return;const c=a=>{if(a.key!==s())return;const l=a.newValue;u(l===null?n="":n=l)};return addEventListener("storage",c),()=>removeEventListener("storage",c)});function o(c){u(n=c),e.setItem(s(),n)}return{subscribe:r,set:o}}function de(){let t=!0;const{subscribe:n,set:s}=h(void 0,()=>{if(!_)return;const o=a=>{t&&s(a.matches?"light":"dark")},c=window.matchMedia("(prefers-color-scheme: light)");return c.addEventListener("change",o),()=>c.removeEventListener("change",o)});function r(){if(!_)return;const o=window.matchMedia("(prefers-color-scheme: light)");s(o.matches?"light":"dark")}function u(o){t=o}return{subscribe:n,query:r,tracking:u}}function me(){const{subscribe:e}=K([B,ie,ae,j,ce,ue],([t,n,s,r,u,o])=>{if(!_)return;const c=t==="system"?n:t,a=N(u),l=N(o);function v(){const d=document.documentElement,y=document.querySelector('meta[name="theme-color"]');c==="light"?(a.length&&d.classList.remove(...a),l.length&&d.classList.add(...l),d.style.colorScheme="light",y&&s&&y.setAttribute("content",s.light)):(l.length&&d.classList.remove(...l),a.length&&d.classList.add(...a),d.style.colorScheme="dark",y&&s&&y.setAttribute("content",s.dark))}return r?D(v):v(),c});return{subscribe:e}}function he(){const{subscribe:e}=K([F,j],([t,n])=>{if(!_)return;function s(){document.documentElement.setAttribute("data-theme",t)}return n?D(s):s(),t});return{subscribe:e}}function P(e){return typeof e!="string"?!1:se.includes(e)}function Se(e){B.set(e)}function Ee(e){F.set(e)}function ke(e){return e}function Le({defaultMode:e,themeColors:t,darkClassNames:n=["dark"],lightClassNames:s=[],defaultTheme:r=""}){const u=document.documentElement,o=localStorage.getItem("mode-watcher-mode")||e,c=localStorage.getItem("mode-watcher-theme")||r,a=o==="light"||o==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(a?(n.length&&u.classList.remove(...n),s.length&&u.classList.add(...s)):(s.length&&u.classList.remove(...s),n.length&&u.classList.add(...n)),u.style.colorScheme=a?"light":"dark",t){const l=document.querySelector('meta[name="theme-color"]');l&&l.setAttribute("content",o==="light"?t.light:t.dark)}c&&(u.setAttribute("data-theme",c),localStorage.setItem("mode-watcher-theme",c)),localStorage.setItem("mode-watcher-mode",o)}export{be as a,pe as b,Se as c,ke as d,Ee as e,p as f,Le as g,j as h,P as i,ae as j,ce as k,ue as l,re as m,$ as n,ee as o,we as p,ye as r,ie as s,oe as t};

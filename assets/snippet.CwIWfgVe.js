import{S as P,aN as T,aO as D,I as c,aP as A,N as o,aQ as s,z as R,v as m,g as F,aR as j,aF as C,y as K,aD as L,aC as M,aS as k,av as z,b as B,E as Q,c as U,h as O,d as S,a as Y,n as Z,ar as q}from"./utils.oM5l8dKR.js";function b(f,y=null,h){if(typeof f!="object"||f===null||P in f)return f;const v=C(f);if(v!==T&&v!==D)return f;var r=new Map,d=K(f),g=c(0);d&&r.set("length",c(f.length));var l;return new Proxy(f,{defineProperty(a,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&A();var n=r.get(e);return n===void 0?(n=c(t.value),r.set(e,n)):o(n,b(t.value,l)),!0},deleteProperty(a,e){var t=r.get(e);if(t===void 0)e in a&&r.set(e,c(s));else{if(d&&typeof e=="string"){var n=r.get("length"),i=Number(e);Number.isInteger(i)&&i<n.v&&o(n,i)}o(t,s),E(g)}return!0},get(a,e,t){if(e===P)return f;var n=r.get(e),i=e in a;if(n===void 0&&(!i||R(a,e)?.writable)&&(n=c(b(i?a[e]:s,l)),r.set(e,n)),n!==void 0){var u=m(n);return u===s?void 0:u}return Reflect.get(a,e,t)},getOwnPropertyDescriptor(a,e){var t=Reflect.getOwnPropertyDescriptor(a,e);if(t&&"value"in t){var n=r.get(e);n&&(t.value=m(n))}else if(t===void 0){var i=r.get(e),u=i?.v;if(i!==void 0&&u!==s)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return t},has(a,e){if(e===P)return!0;var t=r.get(e),n=t!==void 0&&t.v!==s||Reflect.has(a,e);if(t!==void 0||F!==null&&(!n||R(a,e)?.writable)){t===void 0&&(t=c(n?b(a[e],l):s),r.set(e,t));var i=m(t);if(i===s)return!1}return n},set(a,e,t,n){var i=r.get(e),u=e in a;if(d&&e==="length")for(var _=t;_<i.v;_+=1){var w=r.get(_+"");w!==void 0?o(w,s):_ in a&&(w=c(s),r.set(_+"",w))}i===void 0?(!u||R(a,e)?.writable)&&(i=c(void 0),o(i,b(t,l)),r.set(e,i)):(u=i.v!==s,o(i,b(t,l)));var x=Reflect.getOwnPropertyDescriptor(a,e);if(x?.set&&x.set.call(n,t),!u){if(d&&typeof e=="string"){var I=r.get("length"),N=Number(e);Number.isInteger(N)&&N>=I.v&&o(I,N+1)}E(g)}return!0},ownKeys(a){m(g);var e=Reflect.ownKeys(a).filter(i=>{var u=r.get(i);return u===void 0||u.v!==s});for(var[t,n]of r)n.v!==s&&!(t in a)&&e.push(t);return e},setPrototypeOf(){j()}})}function E(f,y=1){o(f,f.v+y)}function H(f,y,...h){var v=f,r=Z,d;B(()=>{r!==(r=y())&&(d&&(q(d),d=null),d=U(()=>r(v,...h)))},Q),O&&(v=S)}function J(f){return(y,...h)=>{var v=f(...h),r;if(O)r=S,Y();else{var d=v.render().trim(),g=L(d);r=z(g),y.before(r)}const l=v.setup?.(r);M(r,r),typeof l=="function"&&k(l)}}export{J as c,b as p,H as s};

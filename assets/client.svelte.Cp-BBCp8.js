import{c as i,p as f}from"./snippet.oaCBodlc.js";import{u as $,h as m,m as y}from"./render.BcSsXdO0.js";import"./utils.DJK4EfyT.js";const u=new WeakMap,k=s=>async(l,c,d,{client:e})=>{if(!s.hasAttribute("ssr"))return;let p,o,r={};for(const[t,a]of Object.entries(d))o??={},t==="default"?(o.default=!0,p=i(()=>({render:()=>`<astro-slot>${a}</astro-slot>`}))):o[t]=i(()=>({render:()=>`<astro-slot name="${t}">${a}</astro-slot>`})),t==="default"?r.children=i(()=>({render:()=>`<astro-slot>${a}</astro-slot>`})):r[t]=i(()=>({render:()=>`<astro-slot name="${t}">${a}</astro-slot>`}));const n={...c,children:p,$$slots:o,...r};if(u.has(s))u.get(s).setProps(n);else{const t=h(l,s,n,e!=="only");u.set(s,t),s.addEventListener("astro:unmount",()=>t.destroy(),{once:!0})}};function h(s,l,c,d){let e=f(c);const o=(d?m:y)(s,{target:l,props:e});return{setProps(r){Object.assign(e,r);for(const n in e)n in r||delete e[n]},destroy(){$(o)}}}export{k as default};

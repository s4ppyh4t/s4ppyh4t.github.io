import{q as O,h as d,aF as N,aG as v,aH as q,aI as I,aJ as B,aK as M,aL as S,aM as b}from"./utils.oM5l8dKR.js";const C="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(C);function F(s,i){if(i){const o=document.body;s.autofocus=!0,O(()=>{document.activeElement===o&&s.focus()})}}function G(s,i,o,c){var n=s.__attributes??={};d&&(n[i]=s.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&s.nodeName==="LINK")||n[i]!==(n[i]=o)&&(i==="style"&&"__styles"in s&&(s.__styles={}),i==="loading"&&(s[v]=o),o==null?s.removeAttribute(i):typeof o!="string"&&$(s).includes(i)?s[i]=o:s.setAttribute(i,o))}function R(s,i,o,c,n=!1,l=!1,K=!1){var f=i||{},k=s.tagName==="OPTION";for(var y in i)y in o||(o[y]=null);var z=$(s),E=s.__attributes??={},g=[];for(const r in o){let a=o[r];if(k&&r==="value"&&a==null){s.value=s.__value="",f[r]=a;continue}var p=f[r];if(a!==p){f[r]=a;var h=r[0]+r[1];if(h!=="$$"){if(h==="on"){const _={},e="$$"+r;let t=r.slice(2);var w=b(t);if(q(t)&&(t=t.slice(0,-7),_.capture=!0),!w&&p){if(a!=null)continue;s.removeEventListener(t,f[e],_),f[e]=null}if(a!=null)if(w)s[`__${t}`]=a,B([t]);else{let A=function(T){f[r].call(this,T)};i?f[e]=I(t,s,A,_):g.push([r,a,()=>f[e]=I(t,s,A,_)])}}else if(r==="style"&&a!=null)s.style.cssText=a+"";else if(r==="autofocus")F(s,!!a);else if(r==="__value"||r==="value"&&a!=null)s.value=s[r]=s.__value=a;else{var u=r;n||(u=M(u)),a==null&&!l?(E[r]=null,s.removeAttribute(r)):z.includes(u)&&(l||typeof a!="string")?s[u]=a:typeof a!="function"&&(d&&(u==="src"||u==="href"||u==="srcset")||G(s,u,a))}r==="style"&&"__styles"in s&&(s.__styles={})}}}return i||O(()=>{if(s.isConnected)for(const[r,a,_]of g)f[r]===a&&_()}),f}var L=new Map;function $(s){var i=L.get(s.nodeName);if(i)return i;L.set(s.nodeName,i=[]);for(var o,c=N(s),n=Element.prototype;n!==c;){o=S(c);for(var l in o)o[l].set&&i.push(l);c=N(c)}return i}function D(s){if(!d&&s.loading==="lazy"){var i=s.src;s[v]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[v]!=="eager"&&(s.loading="lazy"),s.src=i})}}export{R as a,D as h,G as s};

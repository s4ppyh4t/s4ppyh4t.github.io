import{q as V,am as S,w as b,v as F,x as T,y as M,E as ra,an as X,ao as L,ap as y,aq as H,z as g,ar as na,V as fa,as as Q,at as k,F as G,au as J,av as ia,aw as la,ax as sa,ay as W,M as ta,H as ua,az as Y,aA as z,ab as va,a6 as K,aB as Z,aC as $,aD as da,aE as oa,aF as ca,aG as j,aH as _a,aI as ha,aJ as P,aK as Ea,C as ma,D as pa}from"./utils.CiJ5zt6R.js";function Ca(i,a,e,s=null,_=!1){T&&M();var l=i,r=null,t=null,u=null,h=_?ra:0;V(()=>{if(u===(u=!!a()))return;let d=!1;if(T){const E=l.data===X;u===E&&(l=L(),y(l),H(!1),d=!0)}u?(r?S(r):r=b(()=>e(l)),t&&F(t,()=>{t=null})):(t?S(t):s&&(t=b(()=>s(l))),r&&F(r,()=>{r=null})),d&&H(!0)},h),T&&(l=g)}function Ra(i,a){return a}function Ta(i,a,e,s){for(var _=[],l=a.length,r=0;r<l;r++)ia(a[r].e,_,!0);var t=l>0&&_.length===0&&e!==null;if(t){var u=e.parentNode;la(u),u.append(e),s.clear(),R(i,a[0].prev,a[l-1].next)}sa(_,()=>{for(var h=0;h<l;h++){var d=a[h];t||(s.delete(d.k),R(i,d.prev,d.next)),W(d.e,!t)}})}function ga(i,a,e,s,_,l=null){var r=i,t={flags:a,items:new Map,first:null},u=(a&Z)!==0;if(u){var h=i;r=T?y($(h)):h.appendChild(na())}T&&M();var d=null,E=!1;V(()=>{var n=e(),c=fa(n)?n:n==null?[]:Q(n),o=c.length;if(E&&o===0)return;E=o===0;let w=!1;if(T){var p=r.data===X;p!==(o===0)&&(r=L(),y(r),H(!1),w=!0)}if(T){for(var A=null,I,m=0;m<o;m++){if(g.nodeType===8&&g.data===da){r=g,w=!0,H(!1);break}var f=c[m],v=s(f,m);I=aa(g,t,A,null,f,v,m,_,a),t.items.set(v,I),A=I}o>0&&y(L())}if(!T){var O=ta;Aa(c,t,r,_,a,(O.f&k)!==0,s)}l!==null&&(o===0?d?S(d):d=b(()=>l(r)):d!==null&&F(d,()=>{d=null})),w&&H(!0),e()}),T&&(r=g)}function Aa(i,a,e,s,_,l,r){var t=(_&oa)!==0,u=(_&(Y|z))!==0,h=i.length,d=a.items,E=a.first,n=E,c,o=null,w,p=[],A=[],I,m,f,v;if(t)for(v=0;v<h;v+=1)I=i[v],m=r(I,v),f=d.get(m),f!==void 0&&(f.a?.measure(),(w??=new Set).add(f));for(v=0;v<h;v+=1){if(I=i[v],m=r(I,v),f=d.get(m),f===void 0){var O=n?n.e.nodes_start:e;o=aa(O,a,o,o===null?a.first:o.next,I,m,v,s,_),d.set(m,o),p=[],A=[],n=o.next;continue}if(u&&Ia(f,I,v,_),f.e.f&k&&(S(f.e),t&&(f.a?.unfix(),(w??=new Set).delete(f))),f!==n){if(c!==void 0&&c.has(f)){if(p.length<A.length){var D=A[0],C;o=D.prev;var B=p[0],x=p[p.length-1];for(C=0;C<p.length;C+=1)U(p[C],D,e);for(C=0;C<A.length;C+=1)c.delete(A[C]);R(a,B.prev,x.next),R(a,o,B),R(a,x,D),n=D,o=x,v-=1,p=[],A=[]}else c.delete(f),U(f,n,e),R(a,f.prev,f.next),R(a,f,o===null?a.first:o.next),R(a,o,f),o=f;continue}for(p=[],A=[];n!==null&&n.k!==m;)(l||!(n.e.f&k))&&(c??=new Set).add(n),A.push(n),n=n.next;if(n===null)continue;f=n}p.push(f),o=f,n=f.next}if(n!==null||c!==void 0){for(var N=c===void 0?[]:Q(c);n!==null;)(l||!(n.e.f&k))&&N.push(n),n=n.next;var q=N.length;if(q>0){var ea=_&Z&&h===0?e:null;if(t){for(v=0;v<q;v+=1)N[v].a?.measure();for(v=0;v<q;v+=1)N[v].a?.fix()}Ta(a,N,ea,d)}}t&&ua(()=>{if(w!==void 0)for(f of w)f.a?.apply()}),G.first=a.first&&a.first.e,G.last=o&&o.e}function Ia(i,a,e,s){s&Y&&J(i.v,a),s&z?J(i.i,e):i.i=e}function aa(i,a,e,s,_,l,r,t,u){var h=(u&Y)!==0,d=(u&ca)===0,E=h?d?va(_):K(_):_,n=u&z?K(r):r,c={i:n,v:E,k:l,a:null,e:null,prev:e,next:s};try{return c.e=b(()=>t(i,E,n),T),c.e.prev=e&&e.e,c.e.next=s&&s.e,e===null?a.first=c:(e.next=c,e.e.next=c.e),s!==null&&(s.prev=c,s.e.prev=c.e),c}finally{}}function U(i,a,e){for(var s=i.next?i.next.e.nodes_start:e,_=a?a.e.nodes_start:e,l=i.e.nodes_start;l!==s;){var r=j(l);_.before(l),l=r}}function R(i,a,e){a===null?i.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}function Na(i,a,e,s,_){var l=i,r="",t;V(()=>{if(r===(r=a()??"")){T&&M();return}t!==void 0&&(W(t),t=void 0),r!==""&&(t=b(()=>{if(T){g.data;for(var u=M(),h=u;u!==null&&(u.nodeType!==8||u.data!=="");)h=u,u=j(u);if(u===null)throw _a(),ha;P(g,h),l=y(u);return}var d=r+"",E=Ea(d);P($(E),E.lastChild),l.before(E)}))})}function ya(i,a,e){ma(()=>{var s=pa(()=>a(i,e?.())||{});if(s?.destroy)return()=>s.destroy()})}export{Ra as a,ya as b,ga as e,Na as h,Ca as i};

import{a as C}from"./attributes.-M4mnXta.js";import{_ as j,a4 as i,a5 as q,a6 as n,a1 as L,k as I,ab as D,y as v,a9 as t,ae as r,ac as e,ai as J,af as K,t as O,ah as Y,V as $}from"./utils.CaBHRE2t.js";import{a as b}from"./render.DnHIKBLj.js";import{e as R,i as ee,h as E,b as S,a as te}from"./actions.DwfRnWf0.js";/* empty css                       */var ae=n('<li style="font-size: var(--font-size-smoller);" class="svelte-15eo4fl"><!></li>'),le=n('<button aria-label="show-spotify-playlist" class="u-lazyFrame u-leafBorder__small svelte-15eo4fl" type="button">Load my Spotify Playlist?</button> <iframe title="spotifyIframe" src="" width="100%" height="152px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',1),se=n('<div class="u-profBtnWrap svelte-15eo4fl"><a href="#tech-matrix" class="svelte-15eo4fl"><button aria-label="get-copy-of-cv" class="u-lazyFrame u-leafBorder__small a-techMatrix svelte-15eo4fl" type="button">TechMatrix?</button></a> <a href="/content/TN_CV_2025.pdf" download="TungNguyen_Resume" class="svelte-15eo4fl"><button aria-label="get-copy-of-cv" class="u-lazyFrame u-leafBorder__small a-getResume svelte-15eo4fl" type="button">Copy of my résumé?</button></a></div>'),re=n('<div class="svelte-15eo4fl"><hr style="width:40%; opacity: 0.2" class="svelte-15eo4fl"> <hr style="width:60%; opacity: 0.4" class="svelte-15eo4fl"> <hr style="width:80%; opacity: 0.6" class="svelte-15eo4fl"> <br> <h2 class="u-headingMarker" style="font-size: var(--font-size-title); color: var(--onSurface);"> </h2> <p style="margin: 0.1rem 0; font-size: var(--font-size-smol); opacity: 0.8;"> </p> <hr style="opacity: 0.2; border-color: var(--onBaseColor);" class="svelte-15eo4fl"> <ul class="svelte-15eo4fl"></ul> <!> <br> <hr style="width:80%; opacity: 0.4" class="svelte-15eo4fl"> <hr style="width:60%; opacity: 0.2" class="svelte-15eo4fl"> <hr style="width:40%; opacity: 0.1" class="svelte-15eo4fl"></div>'),oe=n('<li class="a-dataListItem u-dataListItem__withBullet svelte-15eo4fl"><!></li>'),ie=n('<ul class="m-dataRecordList svelte-15eo4fl"><li class="u-mainItem a-dataListItem svelte-15eo4fl"><div><sub style="font-size: var(--font-size-smol); color: var(--outline)"> </sub> <h3 style="color: var(--tertiary);"> </h3> <p style="font-size: var(--font-size-smol); margin: 0; color: var(--outline)"> </p></div></li> <!></ul>'),ve=n('<div class="svelte-15eo4fl"></div>'),ne=n('<div class="u-contentContainer svelte-15eo4fl"><span class="u-leftFlex__wrapper u-leafBorder__large u-shadowHover svelte-15eo4fl"><div class=" u-leftFlex u-leafBorder__large u-flexContent svelte-15eo4fl"><!></div></span> <span class="u-rightFlex__wrapper u-leafBorder__large u-shadowHover svelte-15eo4fl"><div class=" u-rightFlex u-flexContent u-leafBorder__large svelte-15eo4fl"><!></div></span></div>');function pe(H,p){j(p,!0);const P=(m,f=I,c=I)=>{var _=re(),l=r(t(_),8),y=t(l,!0);e(l);var u=r(l,2),g=t(u,!0);e(u);var d=r(u,4);R(d,21,()=>f().contentList,S,(s,o)=>{var a=ae(),h=t(a);E(h,()=>v(o)),e(a),i(s,a)}),e(d);var B=r(d,2);ee(B,c,s=>{var o=le(),a=D(o);te(a,F=>A(F));var h=r(a,2);L(()=>{C(a,"style",`display: ${v(x)?"none":"block"}`),C(h,"style",`display: ${v(x)?"block":"none"}`)}),i(s,o)},s=>{var o=se();i(s,o)}),J(8),e(_),L(()=>{C(l,"id",p.headingId),b(y,f()?.title),b(g,f()?.content?.intro)}),i(m,_)},V=(m,f=I)=>{var c=ve();R(c,21,f,S,(_,l)=>{var y=ie(),u=t(y),g=t(u),d=t(g),B=t(d,!0);e(d);var s=r(d,2),o=t(s,!0);e(s);var a=r(s,2),h=t(a,!0);e(a),e(g),e(u);var F=r(u,2);R(F,17,()=>v(l)?.[1],S,(U,W)=>{var k=oe(),X=t(k);E(X,()=>v(W)),e(k),i(U,k)}),e(y),L(()=>{b(B,v(l)?.[0]?.[2]),b(o,v(l)?.[0]?.[0]),b(h,v(l)?.[0]?.[1])}),i(_,y)}),e(c),i(m,c)},Z="37i9dQZF1FoRXfGxlZrrNs";let x=K(!1);function A(m){O(()=>{const f=Y(m,"click",c=>{c.target.nextElementSibling.setAttribute("src",`https://open.spotify.com/embed/playlist/${Z}?utm_source=generator&theme=1`),$(x,!0)});return()=>{f?.()}})}var w=ne(),z=t(w),M=t(z),G=t(M);P(G,()=>p.data?.left,()=>p.isSpotify),e(M),e(z);var N=r(z,2),T=t(N),Q=t(T);V(Q,()=>p.data?.right),e(T),e(N),e(w),i(H,w),q()}export{pe as default};

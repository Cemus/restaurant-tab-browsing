(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("header"),d=document.createElement("nav"),n=document.createElement("img");n.id="index",n.classList.add("logo"),n.src="img/logo.png",n.alt="logo";const a=document.createElement("button");a.id="menu";const c=document.createTextNode("Navigation");a.appendChild(c);const o=document.createElement("button");o.id="carte",o.classList.add("menu-deroulant");const s=document.createTextNode("Menu");o.appendChild(s);const i=document.createElement("button");i.id="contact",i.classList.add("menu-deroulant");const l=document.createTextNode("Contact");i.appendChild(l),d.appendChild(n),d.appendChild(a),d.appendChild(o),d.appendChild(i),t.appendChild(d);const m=document.createElement("button");m.classList.add("order");const p=document.createElement("img");p.src="img/order.svg",p.classList.add("icon"),p.alt="order";const r=document.createElement("h3"),u=document.createTextNode("ORDER");r.appendChild(u),m.appendChild(p),m.appendChild(r),t.appendChild(m),e.appendChild(t);const h=document.createElement("div");h.classList.add("pub");const C=document.createElement("b"),E=document.createElement("p");E.classList.add("text-huge");const L=document.createTextNode("¡ Aldini's Pizza !");E.appendChild(L),C.appendChild(E);const g=document.createElement("p");g.classList.add("text-medium");const x=document.createElement("cite");x.classList.add("text-medium");const z=document.createTextNode("The heart of Italy");x.appendChild(z);const v=document.createTextNode(" - Bob's Pizza");g.appendChild(x),g.appendChild(v);const N=document.createElement("br"),T=document.createElement("p");T.classList.add("text-small");const f=document.createTextNode("The quality of our products is unmatched, and their integrity and seriousness make Aldini's Pizza the international benchmark for ringed dough.");T.appendChild(f),h.appendChild(C),h.appendChild(g),h.appendChild(N),h.appendChild(T),e.appendChild(h);const b=document.createElement("div");b.classList.add("upper-page");const y=document.createElement("div");y.classList.add("pizza");const w=document.createElement("img");w.id="pizza-index",w.src="img/full-pizza.png",w.alt="pizza";const B=document.createElement("img");B.id="pizza-index-part",B.classList.add("pizza-index-part"),B.src="img/part-pizza.png",B.alt="pizza slice",y.appendChild(w),y.appendChild(B),b.appendChild(y),e.appendChild(b);const I=document.createElement("div");I.classList.add("fond-jaune");const M=document.createElement("p");M.classList.add("text-medium");const k=document.createTextNode("A gondola ride through the lands of taste!");M.appendChild(k);const R=document.createElement("div");R.classList.add("description-container");const W=document.createElement("div");W.classList.add("description");const A=document.createElement("img");A.classList.add("savoir-faire"),A.src="img/savoir-faire.png",A.alt="expertise";const D=document.createElement("p");D.classList.add("text-small");const H=document.createTextNode("An irreproachable technique, a team gifted with outstanding skills");D.appendChild(H),W.appendChild(A),W.appendChild(D);const O=document.createElement("div");O.classList.add("description");const P=document.createElement("img");P.classList.add("produits-bio"),P.src="img/bio.png",P.alt="bio products";const q=document.createElement("p");q.classList.add("text-small");const $=document.createTextNode("Local products picked the same day with a negative carbon footprint");q.appendChild($),O.appendChild(P),O.appendChild(q),R.appendChild(W),R.appendChild(O),I.appendChild(M),I.appendChild(R),e.appendChild(I);const S=document.createElement("div");S.classList.add("fond-rouge"),e.appendChild(S)};function t(){let e=window.scrollY;console.log(e);const t=document.getElementById("pizza-index"),d=document.getElementById("pizza-index-part");window.addEventListener("scroll",(function(){e=window.scrollY,e>=(window.innerWidth>=1920?756:window.innerWidth>=1680?617:window.innerWidth>=1440?700:window.innerWidth>=1024?612:window.innerWidth<=375?950:void 0)?(t.src="img/pizza-coupee.png",d.classList.add("pizza-part-fixed"),d.classList.remove("pizza-part"),console.log(window.innerWidth)):(t.src="img/full-pizza.png",d.classList.remove("pizza-part-fixed"),d.classList.add("pizza-part")),console.log(e)}))}e(),function d(){const n=document.getElementById("menu"),a=document.getElementsByClassName("menu-deroulant"),c=document.getElementById("index"),o=document.getElementById("carte"),s=document.getElementById("contact");n.addEventListener("click",(()=>{let e=[...a];n.classList.contains("open")?(e.forEach((e=>{e.style.visibility="hidden"})),n.classList.remove("open")):(e.forEach((e=>{e.style.visibility="visible"})),n.classList.add("open"))})),c.addEventListener("click",(()=>{document.getElementById("content").innerHTML="",e(),d(),t()})),o.addEventListener("click",(()=>{document.getElementById("content").innerHTML="",(()=>{const e=document.getElementById("content"),t=document.createElement("header"),d=document.createElement("nav"),n=document.createElement("img");n.id="index",n.classList.add("logo"),n.src="img/logo.png",n.alt="logo";const a=document.createElement("button");a.id="menu";const c=document.createTextNode("Navigation");a.appendChild(c);const o=document.createElement("button");o.id="carte",o.classList.add("menu-deroulant");const s=document.createTextNode("Menu");o.appendChild(s);const i=document.createElement("button");i.id="contact",i.classList.add("menu-deroulant");const l=document.createTextNode("Contact");i.appendChild(l),d.appendChild(n),d.appendChild(a),d.appendChild(o),d.appendChild(i),t.appendChild(d);const m=document.createElement("button");m.classList.add("order");const p=document.createElement("img");p.src="img/order.svg",p.classList.add("icon"),p.alt="order";const r=document.createElement("h3"),u=document.createTextNode("ORDER");r.appendChild(u),m.appendChild(p),m.appendChild(r),t.appendChild(m),e.appendChild(t);const h=document.createElement("div");h.classList.add("container");const C=document.createElement("h1");C.classList.add("text-huge"),C.classList.add("title-page");const E=document.createTextNode("On the menu:");C.appendChild(E),h.appendChild(C);const L=document.createElement("div");L.classList.add("menu");const g=document.createElement("img");g.classList.add("pizza-menu"),g.src="img/pizza-index.png",g.alt="pizza",L.appendChild(g);const x=document.createElement("div");x.classList.add("informations");const z=document.createElement("h3");z.classList.add("text-medium"),z.classList.add("nom");const v=document.createTextNode("Margherita");z.appendChild(v);const N=document.createElement("p");N.classList.add("text-small");const T=document.createTextNode("Mozzarella, olives");N.appendChild(T);const f=document.createElement("p");f.classList.add("text-medium"),f.classList.add("price");const b=document.createTextNode("$ 10.49");f.appendChild(b),x.appendChild(z),x.appendChild(N),x.appendChild(f),L.appendChild(x),h.appendChild(L);const y=document.createElement("div");y.classList.add("menu");const w=document.createElement("img");w.classList.add("pizza-menu"),w.src="img/pizza-index.png",w.alt="pizza",y.appendChild(w);const B=document.createElement("div");B.classList.add("informations");const I=document.createElement("h3");I.classList.add("text-medium"),I.classList.add("nom");const M=document.createTextNode("Quattro formaggi");I.appendChild(M);const k=document.createElement("p");k.classList.add("text-small");const R=document.createTextNode("Mozzarella, goat cheese, Roquefort, raclette");k.appendChild(R);const W=document.createElement("p");W.classList.add("text-medium"),W.classList.add("price");const A=document.createTextNode("$ 10.49");W.appendChild(A),B.appendChild(I),B.appendChild(k),B.appendChild(W),y.appendChild(B),h.appendChild(y);const D=document.createElement("div");D.classList.add("menu");const H=document.createElement("img");H.classList.add("pizza-menu"),H.src="img/pizza-index.png",H.alt="pizza",D.appendChild(H);const O=document.createElement("div");O.classList.add("informations");const P=document.createElement("h3");P.classList.add("text-medium"),P.classList.add("nom");const q=document.createTextNode("Veggie");P.appendChild(q);const $=document.createElement("p");$.classList.add("text-small");const S=document.createTextNode("Mozzarella, mushroom, onions, 3 peppers, olives");$.appendChild(S);const Y=document.createElement("p");Y.classList.add("text-medium"),Y.classList.add("price");const Z=document.createTextNode("$ 10.49");Y.appendChild(Z),O.appendChild(P),O.appendChild($),O.appendChild(Y),D.appendChild(O),h.appendChild(D);const j=document.createElement("div");j.classList.add("fond-rouge"),h.appendChild(j),e.appendChild(h)})(),d()})),s.addEventListener("click",(()=>{document.getElementById("content").innerHTML="",(()=>{const e=document.getElementById("content"),t=document.createElement("header"),d=document.createElement("nav"),n=document.createElement("img");n.id="index",n.classList.add("logo"),n.src="img/logo.png",n.alt="logo";const a=document.createElement("button");a.id="menu";const c=document.createTextNode("Navigation");a.appendChild(c);const o=document.createElement("button");o.id="carte",o.classList.add("menu-deroulant");const s=document.createTextNode("Menu");o.appendChild(s);const i=document.createElement("button");i.id="contact",i.classList.add("menu-deroulant");const l=document.createTextNode("Contact");i.appendChild(l),d.appendChild(n),d.appendChild(a),d.appendChild(o),d.appendChild(i),t.appendChild(d);const m=document.createElement("button");m.classList.add("order");const p=document.createElement("img");p.src="img/order.svg",p.classList.add("icon"),p.alt="order";const r=document.createElement("h3"),u=document.createTextNode("ORDER");r.appendChild(u),m.appendChild(p),m.appendChild(r),t.appendChild(m),e.appendChild(t);const h=document.createElement("div");h.classList.add("container");const C=document.createElement("h1");C.classList.add("text-huge"),C.classList.add("title-page");const E=document.createTextNode("Contact us !");C.appendChild(E),h.appendChild(C);const L=document.createElement("div");L.classList.add("contact-container");const g=document.createElement("div");g.classList.add("contact");const x=document.createElement("h3");x.classList.add("text-medium");const z=document.createTextNode("Location :"),v=document.createElement("p");v.classList.add("text-small");const N=document.createTextNode("221B Baker Street"),T=document.createElement("p");T.classList.add("text-small");const f=document.createTextNode("London");x.appendChild(z),g.appendChild(x),v.appendChild(N),g.appendChild(v),T.appendChild(f),g.appendChild(T),L.appendChild(g);const b=document.createElement("div");b.classList.add("contact");const y=document.createElement("h3");y.classList.add("text-medium");const w=document.createTextNode("Hours"),B=document.createElement("p");B.classList.add("text-small");const I=document.createTextNode("Monday - Saturday"),M=document.createElement("p");M.classList.add("text-small");const k=document.createTextNode("11 am - 11 pm");y.appendChild(w),b.appendChild(y),B.appendChild(I),b.appendChild(B),M.appendChild(k),b.appendChild(M),L.appendChild(b);const R=document.createElement("div");R.classList.add("contact");const W=document.createElement("h3");W.classList.add("text-medium");const A=document.createTextNode("Contact"),D=document.createElement("p");D.classList.add("text-small");const H=document.createTextNode("000 - 000 - 000"),O=document.createElement("p");O.classList.add("text-small");const P=document.createTextNode("4LD1N1P1ZZ4@something.com");W.appendChild(A),R.appendChild(W),D.appendChild(H),R.appendChild(D),O.appendChild(P),R.appendChild(O),L.appendChild(R);const q=document.createElement("div");q.classList.add("fond-rouge"),h.appendChild(L),h.appendChild(q),e.appendChild(h)})(),d()}))}(),t()})();
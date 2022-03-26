const tl = gsap.timeline({ defaults: { ease: "power1.out" } }); 1

tl.to('.loading', { opacity: 0, duration: 1, delay: 4 });
tl.to('.loading', { display: "none", duration: 1 }, "-=0.5");

tl.to('.logopage', { opacity: 0, duration: 1 }, "-=2");
tl.to('.logopage', { display: "none", duration: 0.5 }, "-=0.5");

tl.to('.firstpage', { opacity: 0, duration: 1 }, "-=2");
tl.to('.firstpage', { display: "none", duration: 0.5 }, "-=0.5");

tl.fromTo('.loginbox', { Transform: "translateY(100%)" }, { transform: "translateY(0%)", duration: 1 },"-=0.8");
tl.fromTo('.loginbox', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

tl.fromTo('.footer', { Transform: "translateY(110%)" }, { transform: "translateY(0%)", duration: 1 },"-=0.5");
tl.fromTo('.footer', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

tl.fromTo('body',{overflow: "hidden" }, { overflow: "visible", duration: 1 });

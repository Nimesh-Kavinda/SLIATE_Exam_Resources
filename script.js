gsap.from('.btn-group a', {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    ease: 'elastic'
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".pic_innertext", {
      duration: 4,
      x: -100,
      opacity: 0,
      stagger: 0.4,
      ease: "elastic.out(1, 0.3)"
  });
});


gsap.fromTo(".welcome_section", 
  { opacity: 0, y: 50, scale: 0.9 }, 
  { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power4.out" }
);

gsap.fromTo(".welcome_section span", 
  { color: "#000", scale: 1 }, 
  { color: "#007bff", scale: 1.2, duration: 2, ease: "elastic.out(1,0.3)", delay: 1 }
);












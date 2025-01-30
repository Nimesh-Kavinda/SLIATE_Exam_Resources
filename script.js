gsap.from('.btn-group a', {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    ease: 'elastic'
});

gsap.from('.pic_innertext', {
    duration: 4,
    x: -100,
    opacity: 0,
    stagger: 0.4,
    ease: 'elastic'
});


gsap.fromTo(".welcome_section", 
    { opacity: 0, y: 50, scale: 0.9 }, 
    { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out",
      scrollTrigger: {
        trigger: ".welcome_section",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
);


gsap.fromTo(".welcome_section span", 
    { color: "#000", scale: 1 }, 
    { color: "#007bff", scale: 1.2, duration: 2, ease: "elastic.out(1,0.3)", 
      scrollTrigger: {
        trigger: ".welcome_section",
        start: "top 80%"
      }
    }
);











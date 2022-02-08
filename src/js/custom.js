AOS.init();

gsap.registerPlugin(TextPlugin);
gsap.to(".greet__subtitle", {
  duration: 2.5,
  delay: 2,
  text: "I'm a Code Enthusiast. <i class='twa twa-laptop-computer'></i>",
});

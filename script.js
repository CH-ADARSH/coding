var t2 = gsap.timeline();
t2.from("#main", {
  y: -50,
  opacity: 0,
  duration: 0.4,
  stagger: 0.3,
});

t2.from("h1", {
  x: -500,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
t2.to("h1", {
  opacity: 0.3,
});
t2.from("img", {
  x: 100,
  opacity: 0,
  rotate: 20,
  duration: 1,
  stagger: 1,
});

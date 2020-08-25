"use strict";

var tl = gsap.timeline();
tl.from(".title", {
  opacity: 0,
  duration: 1,
  x: 20,
  ease: 'power1.out'
});
tl.from(".squares span", {
  opacity: 0,
  duration: 1,
  y: -20,
  ease: 'power1.out',
  stagger: 0.2
}, "-=0.5");
tl.from(".photo", {
  opacity: 0,
  duration: 1.5,
  y: -50,
  ease: 'power2.out'
}, "-=0.3");
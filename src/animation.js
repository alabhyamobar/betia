// animations.js
import { gsap } from "gsap";

export function animateHero() {
  gsap.from(".hero-title", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".hero-subtitle", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
  });
}

import gsap from "gsap";

var tl = gsap.timeline();

tl.fromTo(
  ".sky img",
  {
    opacity: 0,
    rotationX: 90, // comes from "backward"
  },
  {
    opacity: 1,
    rotationX: 0,
    duration: 1,
    stagger: 0.2, // each cloud comes one after another
    ease: "elastic.out(1, 0.5)", // rebound / bounce
    delay: 1,
  }
);

tl.fromTo(
  ".tree2",
  {
    opacity: 0,
    rotationX: 90,
    transformOrigin: "bottom center", // pivot from the roots
  },
  {
    opacity: 1,
    rotationX: 0,
    duration: 2,
    stagger: 0.3,
    ease: "elastic.out(1, 0.5)", // rebound / bounce
  }
);
tl.fromTo(
  ".grass",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  },
  "-=1" // start 1 second earlier (overlap with previous animation)
);
tl.fromTo(
  ".nar",
  {
    opacity: 0,
    rotationX: 90,
    transformOrigin: "bottom center", // pivot from the roots
  },
  {
    opacity: 1,
    rotationX: 0,
    duration: 2,
    stagger: 0.3,
    ease: "elastic.out(1, 0.5)", // rebound / bounce
  }
);

tl.fromTo(
  "#mada",
  {
    opacity: 0,
    rotationX: 90,
    transformOrigin: "bottom center", // pivot from the roots
  },
  {
    opacity: 1,
    rotationX: 0,
    duration: 2,
    stagger: 0.3,
    ease: "elastic.out(1, 0.5)", // rebound / bounce
  }
);

// rock animation

// tl.fromTo(
//   rock,
//   {
//     opacity: 0,
//     rotationX: 90,
//     transformOrigin: "bottom center", // pivot from the roots
//   },
//   {
//     opacity: 1,
//     rotationX: 0,
//     duration: 2,
//     stagger: 0.3,
//     ease: "elastic.out(1, 0.5)", // rebound / bounce
//   }
// );

tl.fromTo(
  ".table",
  {
    scale: 0,
    transformOrigin: "center center",
  },
  { scale: 1, duration: 1, ease: "elastic.out(1,0.5)",stagger: 0.3 },
  "-=1"
);

tl.fromTo(
  ".cake",
  {
    scale: 0,
    transformOrigin: "center center",
  },
  { delay:1, scale: 1, duration: 1, ease: "elastic.out(1,0.5)" },
  "-=1"
);

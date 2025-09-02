import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const aud1 = document.getElementById("audio1");
const aud2 = document.getElementById("audio2");
const cartoons = document.getElementById("cartoons");
const rock = document.querySelector(".rock");
setTimeout(() => {
  aud1.play();
  jungle.play();
  jungle.volume = 0.2;
}, 200);

gsap.fromTo(".content ",{
  opacity:0
},{
  opacity:1,
  delay:2.5,
  duration:2,
  ease: "power2.out"
})

const jungle = document.querySelector(".jungle");

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  paused: true,
  onComplete: function () {
    aud2.play();
    cartoons.volume = 0.1;
    jungle.pause();
  },
});
aud1.addEventListener("ended", function () {
  cartoons.play();
  jungle.pause();
  cartoons.volume = 0.3;
  cartoons.loop = true;
  tl.play();
});



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
  rock,
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
// vines animation
function animateVine() {
  gsap.fromTo(
    ".vine",
    {
      opacity: 0,
      rotationZ: 90,
      visibility: "invsible",
      delay: 1,
    },
    {
      opacity: 1,
      rotationZ: 0, // swings into place
      duration: 1.5,
      visibility: "visible",
      ease: "elastic.out(1, 0.5)", // rebound / bounce
      transformOrigin: "top center", // hinge at the top
      stagger: 0.2,
    },
    "-=0.5" // start 0.5s earlier (overlap with previous)
  );
}

// mapping nar to vines
const vines = document.querySelectorAll(".vine-container .vine");

const nar = document.getElementById("nar");

let currentVine = null;
let count = 0;

vines.forEach((vine) => {
  vine.addEventListener("click", () => {
    const vineRect = vine.getBoundingClientRect();
    const containerRect = vine.parentElement.getBoundingClientRect();
    
    // Target X = center of vine
    const targetX = vineRect.left - containerRect.left - nar.offsetWidth / 2;

    // Target Y = bottom of vine
    const targetY =
      vineRect.top - containerRect.top + vineRect.height - nar.offsetHeight /2;

    // update current vine
    currentVine = vine;
    count++;

    // Swing the PREVIOUS vine
    if (currentVine) {
      gsap.fromTo(
        currentVine,
        { rotate: 0, transformOrigin: "top center" },
        {
          rotate: -20,
          duration: 0.6,
          ease: "power1.out",
          yoyo: true,
          repeat: 1,
        }
      );
    }

    // Tarzan jump (parabolic arc)
    const tl1 = gsap.timeline();

    tl1.to(nar, {
      duration: 1.5,
      x: targetX,
      ease: "power1.inOut",
      zIndex: 1000,
    });

    tl1
      .to(
        nar,
        {
          duration: 0.75,
          y: -(targetY + 100),
          ease: "power1.out",
          zIndex: 1000,
        },
        0
      )
      .to(
        nar,
        {
          duration: 0.75,
          y: -targetY,
          ease: "bounce.out",
          zIndex: 1000,
        },
        0.75
      );

    if (count > 4) {
      tl1
        .to(
          nar,
          {
            duration: 0.75,
            y: -(targetY + 100),
            ease: "power1.out",
            zIndex: 1000,
          },
          0
        )
        .to(
          nar,
          {
            duration: 0.75,
            y: -targetY,
            ease: "bounce.out",
            zIndex: 1000,
          },
          0.75
        );
    }
    if (count == 8) {
      gsap.to(nar, {
        marginRight: "30px",
        y: 0, // reset vertical transform (if you also want original height)
        duration: 2,
        ease: "power2.out",
      });
    }
  });
});

// horizontal scroll
gsap.to(".content", {
  xPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    pin: true,
    scrub: true,
    end: "right left",
  },
});

const text = `Hello ji! mai Nar(Mobar) aur aaj mai bhaut khush hu kyu ki aaj meri pasandida Mada(Anup) ka janamdin hai per mai pareshan hu kyu ki mujhe ussese milne jana hai aur mai bhaut late ho raha hu toh kay aap mujhe uske paas jane mai madad karo gay  🌿🦜🌺`;

const typingElement = document.getElementById("typing-text");
const button = document.getElementById("chalo-btn");
// const rock = document.getElementById("rock");

let i = 0;
let started = false; // prevent multiple runs

function typeWriter() {
  if (i < text.length) {
    typingElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40); // typing speed
  } else {
    // After typing is complete -> fade in button
    gsap.to(button, { opacity: 1, duration: 1, ease: "power2.out" });
  }
}

const tl2 = gsap.timeline() 
rock.addEventListener("click", () => {
  if (!started) {
    started = true;
    typeWriter();
  }
  tl2.to(rock, {
    height: "90vh",
    width: "50vw",
    y: "-50%",
    duration: 1,
    ease: "elastic.out(1, 0.5)",
  });
  tl2.to(".message",{
    visibility:"visible"
  })
});


button.addEventListener("click", () => {
  tl2.to("#typing-text",{
    display:"none"
  })
  tl2.to("#chalo-btn",{
    display:"none"
  })
  tl2.to(".message",{
    display:"none"
  })
  tl2.to(rock, {
    height: "40vh",
    width: "40vh",
    y: "initial",
    duration: 1,
    ease: "elastic.out(1, 0.5)",
  });

  animateVine();
  
})
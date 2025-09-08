import gsap from "gsap";


const appritation = document.getElementById("appritation");
const cartoons = document.getElementById("cartoons");
const cutting = document.getElementById("cutting");
const completion = document.getElementById("completion");
const gaana = document.getElementById("gaana")
cartoons.play();
var tl = gsap.timeline({onComplete:()=>{appritation.play(), cartoons.volume=0.2}});

const start = document.querySelector(".start");
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

//

tl.fromTo(
  ".banner",
  {
    scale: 0,
    transformOrigin: "center center",
  },
  { scale: 1, duration: 1, ease: "elastic.out(1,0.5)" },
  "-=1"
);

tl.fromTo(
  ".table",
  {
    scale: 0,
    transformOrigin: "center center",
  },
  { scale: 1, duration: 1, ease: "elastic.out(1,0.5)", stagger: 0.3 },
  "-=1"
);

tl.fromTo(
  ".cake",
  {
    scale: 0,
    transformOrigin: "center center",
  },
  { delay: 1, scale: 1, duration: 1 },
  "-=1"
);

tl.fromTo(
  start,
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

const mada = document.querySelector("#mada");

let clicked = false;
const audio1 = document.getElementById("audio1");
start.addEventListener("click", () => {
  audio1.play();
  cartoons.pause();
  setTimeout(()=>{
    cutting.play()
  },2000)
  clicked = true;
  document.addEventListener("mousemove", (e) => {
    mada.style.left = `${e.clientX}px`;
    mada.style.top = `${e.clientY}px`;
    mada.style.zIndex = 201;
  });

  const cake = document.querySelector(".cake");
  // cake cutting animation
  if (clicked) {
    cake.addEventListener("click", () => {
      gsap.to(cake, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          const sliceCake = document.querySelector(".slice-cake");
          sliceCake.classList.remove("hidden");
          gsap.fromTo(
            sliceCake,
            {
              scale: 0,
              transformOrigin: "center center",
            },
            { scale: 1, duration: 1, ease: "elastic.out(1,0.5)" }
          );
        },
      });
    });
  }
});

var tl2 = gsap.timeline({ paused: true });
let started = false;

const cake = document.querySelector(".cake");
cake.addEventListener("click", () => {
  tl2.play();
  const baloon = document.querySelector(".baloon");
  const viewportWidth = window.innerWidth;

  const img = document.createElement("img");
  img.src = "public/images/baloon.png";
  img.height = 100;
  img.width = 60;
  img.style.position = "absolute";
  img.style.bottom = "-150px";
  img.className = "baloon-img";

  const arr = new Array(100).fill(0);
  arr.forEach(() => {
    const cloneImg = img.cloneNode(true);

    // random x position across viewport
    const randomX = Math.random() * (viewportWidth - cloneImg.width);
    cloneImg.style.left = `${randomX}px`;

    baloon.appendChild(cloneImg);

    gsap.to(cloneImg, {
      y: -window.innerHeight - 200, // move up off-screen
      duration: 1 + Math.random() * 1, // random float speed
      delay: Math.random() * 2,
      ease: "linear",
      onComplete: () => {
        tl2.play();
      },
    });

    gsap.to(cloneImg, {
      rotation: "+=15", // small oscillation
      duration: 2 + Math.random() * 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  });
});

const text = `Happiest birthday anup mahadev kare tu jo chae wo tujhe mile tu wo sab hasil kare jo chati hai tu zindagi bhar ajeeb mu banati rahe aur mujhe hamesha gawaar bulati rahe🌿🦜🌺`;

const typingElement = document.getElementById("typing-text");
const button = document.getElementById("chalo-btn");
const rock = document.querySelector(".rock");

let i = 0;
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

const song = document.getElementById("audio2");
cake.addEventListener("click", () => {
  audio1.volume = 0.5;
  setTimeout(() => {
    song.play();
  }, 500);
  setTimeout(() => {
    if (!started) {
      started = true;
      typeWriter();
      audio1.volume = 0.8;
    }
  }, 14000);
  tl2.to(rock, {
    visibility: "visible",
    height: "90vh",
    width: "50vw",
    y: "-50%",
    delay: 13.5,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
  });
  tl2.to(".message", {
    visibility: "visible",
  });
});


button.addEventListener('click',()=>{
  setTimeout(()=>{
    completion.play();
  },1000)
})

completion.addEventListener('ended',()=>{
  gaana.play();
  gaana.duration = 15000
})
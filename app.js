let a = document.querySelector(".a");
let s = document.querySelector(".s");
let d = document.querySelector(".d");
let f = document.querySelector(".f");
let j = document.querySelector(".j");
let k = document.querySelector(".k");
let l = document.querySelector(".l");

let audio1 = new Audio("sound/tom-1.mp3");
let audio2 = new Audio("sound/tom-2.mp3");
let audio3 = new Audio("sound/tom-3.mp3");
let audio4 = new Audio("sound/tom-4.mp3");
let audio5 = new Audio("sound/kick-bass.mp3");
let audio6 = new Audio("sound/snare.mp3");
let audio7 = new Audio("sound/crash.mp3");

document.addEventListener("keydown", (e) => {
  console.log(`key: ${e.key}, keycode: ${e.code}`);
});

const body = document.querySelector("body");

const audioFunction = () => {
  audio1.play();
  audio1.currentTime = 0;
};

body.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    audioFunction();
  } else if (event.key === "s") {
    audio2.play();
    audio2.currentTime = 0;
  } else if (event.key === "d") {
    audio3.play();
    audio3.currentTime = 0;
  } else if (event.key === "f") {
    audio4.play();
    audio4.currentTime = 0;
  } else if (event.key === "j") {
    audio5.play();
    audio5.currentTime = 0;
  } else if (event.key === "k") {
    audio6.play();
    audio6.currentTime = 0;
  } else if (event.key === "l") {
    audio7.play();
    audio7.currentTime = 0;
  }
});
a.addEventListener("click", (a) => {
  audio1.play();
  audio1.currentTime = 0;
});

s.addEventListener("click", () => {
  audio2.play();
  audio2.currentTime = 0;
});

d.addEventListener("click", () => {
  audio3.play();
  audio3.currentTime = 0;
});

f.addEventListener("click", () => {
  audio4.play();
  audio4.currentTime = 0;
});

j.addEventListener("click", () => {
  audio5.play();
  audio5.currentTime = 0;
});

k.addEventListener("click", () => {
  audio6.play();
  audio6.currentTime = 0;
});

l.addEventListener("click", () => {
  audio7.play();
  audio7.currentTime = 0;
});

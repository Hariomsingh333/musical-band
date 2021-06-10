let a = document.querySelector(".a");
let s = document.querySelector(".s");
let d = document.querySelector(".d");
let f = document.querySelector(".f");
let j = document.querySelector(".j");
let k = document.querySelector(".k");
let l = document.querySelector(".l");

let audio1 = new Audio("tom-1.mp3");
let audio2 = new Audio("tom-2.mp3");
let audio3 = new Audio("tom-3.mp3");
let audio4 = new Audio("tom-4.mp3");
let audio5 = new Audio("kick-bass.mp3");
let audio6 = new Audio("snare.mp3");
let audio7 = new Audio("crash.mp3");

a.addEventListener("click", (a) => {
  audio1.play();
  audio1.currentTime=0;
});

s.addEventListener("click", () => {
  audio2.play();
audio2.currentTime=0;
});

d.addEventListener("click", () => {
  audio3.play();
audio3.currentTime=0;
});

f.addEventListener("click", () => {
  audio4.play();
audio4.currentTime=0;
});

j.addEventListener("click", () => {
  audio5.play();
audio5.currentTime=0;
});

k.addEventListener("click", () => {
  audio6.play();
audio6.currentTime=0;
});

l.addEventListener("click", () => {
  audio7.play();
  audio7.currentTime=0;
});


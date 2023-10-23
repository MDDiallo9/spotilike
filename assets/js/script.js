import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
import { createLibrary } from "./modules/library.js";
import { fadeIn } from "./modules/fade.js";
import ColorThief from "./modules/color-thief.mjs";

//console.dir(catalogue);
/* let currentTrack = 0; */
// GlobalThis permet de partager une variable ou une fonction
globalThis.track = null;
globalThis.catalogue = catalogue;
globalThis.isPlaying = false;
globalThis.currentTrack = 0;
globalThis.sliderHTML = document.querySelector("#slider");
globalThis.coverUrl = "./assets/img/cover/";
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#play-pause");
const playerDiv = document.querySelector("#player")
const nextEvent = () => {
  if (currentTrack < catalogue.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }
  slider("next");
  audio("pause");
  audio();
  audio("play");
  fadeIn();
  getMainColor();
  playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}
const prevEvent = () => {
  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = catalogue.length - 1;
  }
  slider("prev");
  audio("pause");
  audio();
  audio("play");
  fadeIn();
  playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  getMainColor();
  isPlaying = true;
  console.log(track.state);
}
const mc = new Hammer(playerDiv)
mc.on("swipeleft", nextEvent)
mc.on("swiperight", prevEvent)
//Infos

// click sur le bouton next
nextButton.addEventListener("click", nextEvent);
// idem pour previous
prevButton.addEventListener("click", prevEvent);
// actions sur le bouton play-pause
playPause.addEventListener("click", () => {
  if (isPlaying) {
    console.log("pause");
    audio("pause");
    playPause.innerHTML = `<i class="fa-solid fa-play"></i>`;
  } else {
    audio("play");
    playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  }
  isPlaying = !isPlaying;
});
slider();
audio();
createLibrary();


const libElems = document.querySelectorAll("[data-index]");

for (let el of libElems) {
  el.addEventListener("click", () => {
    currentTrack = el.dataset.index;
    audio("pause");
    audio("init");
    audio("play");
    playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    fadeIn();
    getMainColor()
    slider("next");
  });
}

const colorThief = new ColorThief();

const getMainColor = () => {
  setTimeout(() => {
    console.log(colorThief.getPalette(img));
    document.querySelector(".cover-container").style.backgroundColor = `rgb(${colorThief.getColor(img)[0]},${
      colorThief.getColor(img)[1]
    },${colorThief.getColor(img)[2]})`;
  }, 550);
  let img = document.querySelector("#imgA");
};

getMainColor()




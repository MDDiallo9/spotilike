import { fadeOut } from "./fade.js";

const audio = (status = "init") => {
  switch (status) {
    case "init":
      track = new Audio("./assets/audio/" + catalogue[currentTrack].audio);
      break;
    case "play":
      track.play();
      break;
    case "pause":
      track.pause();
      break;
    default:
      break;
  }
  const seekBar = document.querySelector("input");
  console.dir(seekBar);
  setInterval(() => {
    seekBar.value = track.currentTime * (100 / track.duration);
  }, 100);
  
};

export { audio };

const initSlider = () => {
  const coverSlider = document.createElement("img");
  coverSlider.src = coverUrl + catalogue[currentTrack].cover;
  coverSlider.id = "coverSlider";
  sliderHTML.append(coverSlider);
  const imgA = document.createElement("img");
  imgA.id = "imgA";
  imgA.src = coverUrl + catalogue[currentTrack].cover;
  sliderHTML.append(imgA);
};
const createInfo = () => {
  const artist = document.querySelector(".artist");
  const trackname = document.querySelector(".trackname");
  const albumname = document.querySelector(".albumname");
  artist.textContent = catalogue[currentTrack].artist;
  trackname.textContent = catalogue[currentTrack].title;
  albumname.textContent = catalogue[currentTrack].album;
};
const nextSlider = () => {
  document.querySelector("#coverSlider").src =
    coverUrl + catalogue[currentTrack].cover;
  document.querySelector("#imgA").classList.add("slideRight");
  document.querySelector("#imgA").classList.add("transition");
  setTimeout(() => {
    
    document.querySelector("#imgA").classList.remove("slideRight");
    document.querySelector("#imgA").classList.remove("transition");

    document.querySelector("#imgA").src =
      coverUrl + catalogue[currentTrack].cover;
    document.querySelector("#coverSlider").src =
      coverUrl + catalogue[currentTrack + 1].cover;
  }, 500);
};
const prevSlider = () => {
  document.querySelector("#coverSlider").src =
    coverUrl + catalogue[currentTrack].cover;
  document.querySelector("#imgA").classList.add("slideLeft");
  document.querySelector("#imgA").classList.add("transition");
  setTimeout(() => {
    document.querySelector("#imgA").classList.remove("slideLeft");
    document.querySelector("#imgA").classList.remove("transition");

    document.querySelector("#imgA").src =
      coverUrl + catalogue[currentTrack].cover;
    document.querySelector("#coverSlider").src =
      coverUrl + catalogue[currentTrack - 1].cover;
  }, 500);
};
const changeSlide = (side) => {
  let main = null;
  side === "next" ? (main = "Left") : (main = "Right");
  console.log(`${main}`);
  document.querySelector("#coverSlider").src =
    coverUrl + catalogue[currentTrack].cover;
  document.querySelector("#imgA").classList.add(`slide${main}`);
  document.querySelector("#imgA").classList.add("transition");
  setTimeout(() => {
    document.querySelector("#imgA").classList.remove(`slide${main}`);
    document.querySelector("#imgA").classList.remove("transition");

    document.querySelector("#imgA").src =
      coverUrl + catalogue[currentTrack].cover;
    document.querySelector("#coverSlider").src =
      coverUrl + catalogue[currentTrack + 1].cover;
  }, 500);
};

const slider = (status = "init") => {
  createInfo();
  switch (status) {
    case "init":
      initSlider();
      break;
    case "next":
      nextSlider();
      /* changeSlide("next"); */
      break;
    case "prev":
      /* document.querySelector("#coverSlider").src =
        coverUrl + catalogue[currentTrack].cover; */
      prevSlider();
      break;
    default:
      break;
  }
};

export { slider };

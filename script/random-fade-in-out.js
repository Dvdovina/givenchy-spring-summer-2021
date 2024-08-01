const images = [
  "./images/looks/look_lime-bkg.png",
  "./images/looks/nobkg.png",
  "./images/looks/nobkg.png",
  "./images/looks/nobkg.png",
  "./images/looks/nobkg.png",
  "./images/looks/nobkg.png",
  "./images/looks/look_beige-bkg.png",
  "./images/looks/look_yellow-bkg.png",
  "./images/looks/look_white-bkg.png",
  "./images/looks/look_orange-bkg.png",
  "./images/looks/look_red-bkg.png",
  "./images/looks/look_off-white-bkg.svg",
  "./images/looks/look_light-blue-bkg.svg",
  "./images/looks/look_pink-bkg.png",
  "./images/looks/look_blue-bkg.png",
];

const imageElements = document.querySelectorAll(".looks__img");

function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

function assignRandomImages() {
  imageElements.forEach((img) => {
    img.src = getRandomImage();
    img.style.animationDelay = `${Math.random() * 5}s`;
  });
}

setInterval(assignRandomImages, 1000);
assignRandomImages(); 

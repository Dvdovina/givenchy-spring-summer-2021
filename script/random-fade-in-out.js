const image = document.getElementById("image");
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const image4 = document.getElementById("image4")
const image5 = document.getElementById("image5")
const image6 = document.getElementById("image6")
const image7 = document.getElementById("image7")
const image8 = document.getElementById("image8")
const image9 = document.getElementById("image9")
const image10 = document.getElementById("image10")

let images = ["./images/looks/look_lime-bkg.png", "./images/looks/nobkg.png", "./images/looks/nobkg.png", "./images/looks/nobkg.png", "./images/looks/nobkg.png", "./images/looks/nobkg.png", "./images/looks/look_beige-bkg.png", "./images/looks/look_yellow-bkg.png", "./images/looks/look_white-bkg.png", "./images/looks/look_orange-bkg.png", "./images/looks/look_red-bkg.png", "./images/looks/look_off-white-bkg.svg", "./images/looks/look_light-blue-bkg.svg", "./images/looks/look_pink-bkg.png", "./images/looks/look_blue-bkg.png",], i = 0;

function volgendefoto() {
  i < images.length ? i += 1 : i = 0;
  let n = Math.floor(Math.random() * 15);
  let a = Math.floor(Math.random() * 15);
  let b = Math.floor(Math.random() * 15);
  let c = Math.floor(Math.random() * 15);
  let d = Math.floor(Math.random() * 15);
  let e = Math.floor(Math.random() * 15);
  let y = Math.floor(Math.random() * 15);
  let m = Math.floor(Math.random() * 15);
  let x = Math.floor(Math.random() * 15);
  let p = Math.floor(Math.random() * 15);
  image.src = images[n];
  image2.src = images[a];
  image3.src = images[b];
  image4.src = images[c];
  image5.src = images[d];
  image6.src = images[e];
  image7.src = images[y];
  image8.src = images[m];
  image9.src = images[x];
  image10.src = images[p];
}

setInterval(volgendefoto, 1000);

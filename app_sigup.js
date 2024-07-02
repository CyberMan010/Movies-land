const imageSlider = document.getElementById("imageSlider");
const images = ["new.png", "cnew.png", "ghz.png", "soq.png"];
let currentImageIndex = 0;

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imageSlider.src = images[currentImageIndex];
}

setInterval(changeImage, 2000);

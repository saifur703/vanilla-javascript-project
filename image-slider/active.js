let imgs = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
let singleSlider = document.querySelector(".single-slider img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

next.addEventListener("click", nextFunc);
prev.addEventListener("click", prevFunc);

let count = 0;
function nextFunc() {
  count++;
  if (count >= imgs.length) {
    count = 0;
    singleSlider.src = imgs[count];
  } else {
    singleSlider.src = imgs[count];
  }
}

function prevFunc() {
  count--;
  if (count < 0) {
    count = imgs.length - 1;
    singleSlider.src = imgs[count];
  }

  singleSlider.src = imgs[count];
}

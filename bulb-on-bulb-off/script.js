let img = document.querySelectorAll(".lights img");
let lightOn = document.querySelector("#lightOn");
let lightOff = document.querySelector("#lightOff");

lightOn.addEventListener("click", function () {
  for (let i = 0; i < img.length; i++) {
    img[i].src = "pic_bulbOn.gif";
  }
});
lightOff.addEventListener("click", function () {
  for (let i = 0; i < img.length; i++) {
    img[i].src = "pic_bulbOff.gif";
  }
});

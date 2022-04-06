let img = document.querySelectorAll(".lights img");
let lightOn = document.querySelector("#lightOn");
let lightOff = document.querySelector("#lightOff");
let title = document.querySelector(".title");

lightOn.addEventListener("click", function () {
  for (let i = 0; i < img.length; i++) {
    img[i].src = "pic_bulbOn.gif";
    title.innerHTML = "Light ON";
  }
});
lightOff.addEventListener("click", function () {
  for (let i = 0; i < img.length; i++) {
    img[i].src = "pic_bulbOff.gif";
    title.innerHTML = "Light OFF";
  }
});

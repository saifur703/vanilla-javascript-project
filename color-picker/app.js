let hexaCode = document.querySelector("#hexaCode");
let color = document.querySelector("#color");

color.addEventListener("input", function () {
  hexaCode.value = color.value;

  document.querySelector("body").style.backgroundColor = color.value;
});

let mainImg = document.querySelector(".main-image img");
let subImg = document.querySelectorAll(".sub-image img");

subImg.forEach(function (item) {
  item.addEventListener("click", function () {
    mainImg.src = item.src;
  });
});

let modal = document.querySelector(".modal");
let close = document.querySelector(".close");
let popupBtn = document.querySelector(".popupBtn");
let body = document.querySelector("body");

window.addEventListener("load", function () {
  setTimeout(function () {
    modal.classList.add("active");
    body.classList.add("modal-overlay");
  }, 2000);
});

close.addEventListener("click", function () {
  modal.classList.remove("active");
  body.classList.remove("modal-overlay");
});

popupBtn.addEventListener("click", function () {
  modal.classList.add("active");
  body.classList.add("modal-overlay");
});

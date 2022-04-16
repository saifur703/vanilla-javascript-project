let modal = document.querySelector(".modal");
let close = document.querySelector(".close");
let popupBtn = document.querySelector(".popupBtn");
let body = document.querySelector("body");

// Load Popup after 2 seconds
window.addEventListener("load", function () {
  setTimeout(function () {
    modal.classList.add("active");
    body.classList.add("modal-overlay");
  }, 2000);
});

// Close Events
close.addEventListener("click", function () {
  modal.classList.remove("active");
  body.classList.remove("modal-overlay");
});

// Button Click Show Popup Event
popupBtn.addEventListener("click", function () {
  modal.classList.add("active");
  body.classList.add("modal-overlay");
});

// Click outside Event
document.addEventListener("click", function (event) {
  var isClickInsideModal = modal.contains(event.target);
  var isClickInsidePopupBtn = popupBtn.contains(event.target);

  if (!isClickInsideModal) {
    if (!isClickInsidePopupBtn) {
      modal.classList.remove("active");
      body.classList.remove("modal-overlay");
    }
  }
});

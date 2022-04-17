let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("open");
  hamburger.classList.toggle("menu-open");
});

let header = document.querySelector(".header");
window.onscroll = function () {
  let navScroll = window.scrollY;
  if (navScroll >= 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};

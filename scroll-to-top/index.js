let scrollToTop = document.querySelector(".scrollToTop");
scrollToTop.style.visibility = "hidden";

document.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    scrollToTop.style.visibility = "visible";
  } else {
    scrollToTop.style.visibility = "hidden";
  }
});

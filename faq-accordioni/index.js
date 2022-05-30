const singleContentBox = document.querySelectorAll(".single-content-box");

singleContentBox.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

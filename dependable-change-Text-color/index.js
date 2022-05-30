let output = document.querySelector(".output");

let fontSize = document.querySelector(".fontSize");
let textColor = document.querySelector(".textColor");
let bgColor = document.querySelector(".bgColor");
let underline = document.querySelector(".underline");
let italic = document.querySelector(".italic");

fontSize.addEventListener("change", function (e) {
  output.style.fontSize = e.target.value;
});

textColor.addEventListener("change", function (e) {
  output.style.color = e.target.value;
});

bgColor.addEventListener("change", function (e) {
  output.style.backgroundColor = e.target.value;
});

underline.addEventListener("click", function (e) {
  output.classList.toggle("underline");
});
italic.addEventListener("click", function (e) {
  output.classList.toggle("italic");
});

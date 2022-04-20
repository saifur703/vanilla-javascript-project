let text = document.getElementById("text");
let content = ["Saifur Rahman", "Web Developer", "WordPress Expert"];
let contentCount = 0;
let index = 0;
let currentText = 0;
let sentence = 0;

setInterval(function () {
  currentText = content[contentCount];
  sentence = currentText.slice(0, index++);
  text.innerText = sentence;

  if (sentence.length == currentText.length) {
    index = 0;
    contentCount++;
  }

  if (contentCount == content.length) {
    contentCount = 0;
  }
}, 300);

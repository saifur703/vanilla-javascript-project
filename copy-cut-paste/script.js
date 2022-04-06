// Selector
let copyText = document.querySelector("#copy");
let cutText = document.querySelector("#cut");
let pasteText = document.querySelector("#paste");

let copyBtn = document.querySelector("#copyBtn");
let cutBtn = document.querySelector("#cutBtn");
let pasteBtn = document.querySelector("#pasteBtn");

// Action for Copy
copyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!copyText.value) {
    alert("Please write something.");
  } else {
    navigator.clipboard.writeText(copyText.value);
    alert("Copy Success!");
  }
});

// Action for Cut
cutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!cutText.value) {
    alert("Please write something");
  } else {
    navigator.clipboard.writeText(cutText.value);
    cutText.value = "";
  }
});

// Action for Paste
pasteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  cutText.value = "";
  navigator.clipboard.readText().then(function (text) {
    pasteText.value = text;
  });
});

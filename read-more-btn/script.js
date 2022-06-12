const btn = document.querySelector("button");
const text = document.querySelector(".text");

btn.addEventListener("click", () => {
  text.classList.toggle("show-more");

  if ((btn.innerText = "Read More")) {
    btn.innerText = "Read Less";
  } else {
    btn.innerText = "Read More";
  }
});

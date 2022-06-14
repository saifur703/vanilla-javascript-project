const qs = (el) => document.querySelector(el);
const inputs = document.querySelectorAll(".controls input");

function displayValue() {
  const radius = qs("#radius").value;
  const offX = qs("#off-x").value;
  const offY = qs("#off-y").value;
  const blur = qs("#blur").value;
  const spread = qs("#spread").value;
  const color = qs("#base").value;

  const borr = qs(".border-radius");
  const boxShadow = qs(".box-shadow");
  borr.innerHTML = `border-radius: ${radius}px;`;
  boxShadow.textContent = `box-shadow: ${offX}px ${offY}px ${blur}px ${spread}px ${color};`;
}
function handleTask() {
  const suffix = this.dataset.sizing || "";

  console.log(suffix);

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );

  displayValue();
}

inputs.forEach((input) => input.addEventListener("change", handleTask));
inputs.forEach((input) => input.addEventListener("mousemove", handleTask));

const copyText = function () {
  const result = qs(".result");
  var textToCopy = result.innerText;

  var myTemporaryInputElement = document.createElement("input");
  myTemporaryInputElement.type = "text";
  myTemporaryInputElement.value = textToCopy;

  document.body.appendChild(myTemporaryInputElement);

  myTemporaryInputElement.select();
  document.execCommand("Copy");

  document.body.removeChild(myTemporaryInputElement);

  setTimeout(copiedText, 200);
};
const copy = qs(".output span");
copy.addEventListener("click", copyText);

function copiedText() {
  let txt = document.createElement("p");
  txt.classList.add("copied");
  txt.innerText = "copied";
  let output = document.querySelector(".output");
  output.appendChild(txt);
  setTimeout(function () {
    output.removeChild(txt);
  }, 2000);
}

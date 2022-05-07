function func(input) {
  let result = document.querySelector(".result");

  result.value += input;
}

function calc() {
  let resultValue = document.querySelector(".result").value;
  let calc = eval(resultValue);
  document.querySelector(".result").value = calc;
}

function del() {
  document.querySelector(".result").value = "";
}

function percentage() {
  let result = document.querySelector(".result");
  let calc = (result.value % result.value) / 100;
  result.value = calc;
}

function sqrt() {
  let result = document.querySelector(".result");

  let output = Math.sqrt(result.value);
  document.querySelector(".result").value = output;
}

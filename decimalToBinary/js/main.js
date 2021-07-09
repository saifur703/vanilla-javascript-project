const messageBody = document.querySelector(".messageBody");
const clear = document.querySelector("#clear");
const submit = document.querySelector("#submit");

function convertDecimalToBinary(e){
  e.preventDefault();
  
  const input = document.querySelector(".wrap-input2");
  const inputVal = document.querySelector("#number").value;
  const result = document.createElement("h1");
  const error = document.createElement("h4");

  if (inputVal === '') {
    error.innerText = "Please enter a number.";
    error.style.color = "red";
    error.style.margin = "0 0 10px"

    messageBody.appendChild(error);

    submit.style.display = "none"

  } else if (inputVal < 0) {
    
    error.innerText = "Please enter a Positive number.";
    error.style.color = "blue";
    error.style.margin = "0 0 10px"

    messageBody.appendChild(error);

    submit.style.display = "none"

  } else {
    const binaryNumber = Number(inputVal).toString(2);
    
    result.innerText = binaryNumber;

    messageBody.appendChild(result);

    submit.style.display = "none"

  } 

}

function clearData(e) {
  e.preventDefault();

  messageBody.innerText = ''

  document.querySelector("#number").value = '';

  submit.style.display = "inline-block";
}

submit.addEventListener("click", convertDecimalToBinary);

clear.addEventListener("click", clearData);
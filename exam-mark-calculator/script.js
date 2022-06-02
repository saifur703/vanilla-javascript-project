let inputs = document.querySelectorAll("input");
let bangla = document.querySelector("#bangla");
let english = document.querySelector("#english");
let math = document.querySelector("#math");
let ict = document.querySelector("#ict");

let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validation();
  calculation();
  setTimeout(hideError, 3000);
  setTimeout(hideOutput, 5000);
});

function calculation() {
  let newBangla = parseInt(bangla.value);
  let newEnglish = parseInt(english.value);
  let newMath = parseInt(math.value);
  let newICT = parseInt(ict.value);

  let addition = newBangla + newEnglish + newMath + newICT;

  let average = (newBangla + newEnglish + newMath + newICT) / 4;

  if (newBangla > 100 || newEnglish > 100 || newMath > 100 || newICT > 100) {
    let txt = document.createElement("p");
    txt.classList.add("error");
    txt.innerText = `Please enter a valid number.`;
    form.insertBefore(txt, document.querySelector(".submit"));
    if (newBangla > 100) {
      bangla.value = "";
    }
    if (newEnglish > 100) {
      english.value = "";
    }
    if (newMath > 100) {
      math.value = "";
    }
    if (newICT > 100) {
      ict.value = "";
    }
  } else {
    let additionOutput = document.createElement("p");
    additionOutput.classList.add("output");
    additionOutput.innerHTML = `Total Mark from 400: <span>${addition}</span>`;

    if (addition) {
      form.append(additionOutput);
    }

    let averageOutput = document.createElement("p");
    averageOutput.classList.add("output");
    averageOutput.innerHTML = `Average: <span>${average}</span>`;
    if (average) {
      form.append(averageOutput);
    }

    if (newBangla >= 33 && newEnglish >= 33 && newMath >= 33 && newICT >= 33) {
      let passOutput = document.createElement("p");
      passOutput.classList.add("output");
      passOutput.innerHTML = `Pass / Fail: <span>You have passed!</span>`;
      if (addition) {
        form.append(passOutput);
      }
    } else {
      let passOutput = document.createElement("p");
      passOutput.classList.add("output");
      passOutput.innerHTML = `Pass / Fail: <span>You have Failed</span>`;
      if (addition) {
        form.append(passOutput);
      }
    }

    let grade = "";
    if (average >= 80 && average <= 100) {
      grade = "A+";
    }
    if (average >= 70 && average <= 79) {
      grade = "A";
    }
    if (average >= 60 && average <= 69) {
      grade = "A-";
    }
    if (average >= 50 && average <= 59) {
      grade = "B";
    }
    if (average >= 40 && average <= 49) {
      grade = "C";
    }
    if (average >= 33 && average <= 39) {
      grade = "D";
    }
    if (average >= 0 && average <= 32) {
      grade = "F";
    }

    let gradeOutput = document.createElement("p");
    gradeOutput.classList.add("output");
    gradeOutput.innerHTML = `Grade: <span>${grade}</span>`;
    if (grade) {
      form.append(gradeOutput);
    }

    if (addition) {
      bangla.value = "";
      english.value = "";
      math.value = "";
      ict.value = "";
    }
  }
}

function insertErrorDataBefore(data, position) {
  let txt = document.createElement("p");
  txt.classList.add("error");
  txt.innerText = `Please enter a valid number for ${data}.`;
  form.insertBefore(txt, position);
}

function validation() {
  if (bangla.value === "") {
    insertErrorDataBefore("bangla", bangla);
  }
  if (english.value === "") {
    insertErrorDataBefore("English", english);
  }
  if (math.value === "") {
    insertErrorDataBefore("Math", math);
  }
  if (ict.value === "") {
    insertErrorDataBefore("ICT", ict);
  }
}

function hideError() {
  let errors = document.querySelectorAll(".error");
  errors.forEach(function (error) {
    error.remove();
  });
}
function hideOutput() {
  let outputs = document.querySelectorAll(".output");
  outputs.forEach(function (output) {
    output.remove();
  });
}

let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let calculate = document.querySelector(".calculate");
let reset = document.querySelector(".reset");
let result = document.querySelector(".result");
let message = document.querySelector(".message");

function calculateBMI() {
    let weightVal = Number(weight.value);
    let heightVal = Number(height.value);
    let bmi = weightVal / (heightVal * 0.0254 * heightVal * 0.0254) // inch to meter


    result.textContent = `Your BMI is ${bmi.toFixed(2)}`;

    let msg = showMessage(bmi);
    message.textContent = msg;
}

function resetHandler() {
    weight.value = '';
    height.value = '';
    message.textContent = '';
    result.textContent = 'Your BMI is ____';

}

function showMessage(val) {
    let msg;
    if (val < 16) {
        msg = 'You are severe Thin'
    } else if (val >= 16 && val <= 17) {
        msg = 'You are moderate Thin';
    } else if (val >= 17 && val <= 18) {
        msg = 'You are mid Thin'
    } else if (val >= 18 && val <= 25) {
        msg = 'You are Normal';
    } else if (val > 25) {
        msg = 'You are overweight'
    } else {
        msg = 'Try again'
    }
    return msg;
}

function eventHandler() {
    if (Number(height.value) && Number(weight.value)) {
        calculateBMI();
    } else {
        setTimeout(function () {
            document.querySelector(".error").style.display = "block";
        }, 0);
        
        resetHandler();

        setTimeout(function () {
            document.querySelector(".error").style.display = "none";
        }, 2000);
    }
}

function hideElement() {
    let errMsg = document.createElement("p");
    errMsg.classList = 'error'
    errMsg.textContent = 'Please provide valid input';
    document.querySelector(".error-wrap").appendChild(errMsg);
}

calculate.addEventListener('click', eventHandler);

reset.addEventListener('click', resetHandler);
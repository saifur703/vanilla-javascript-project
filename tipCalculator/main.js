const wrapper = document.querySelector("#wrapper");
const form = document.querySelector("#form");
const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const submit = document.querySelector("#submit");

submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (bill.value === '' || tip.value === '') {
        alert("Please enter any amount")
    } else {
        let billValue = parseInt(bill.value);

    let tipValue = parseInt(tip.value);

    let total = billValue + tipValue;

    let result = document.createElement("h1");

    result.innerHTML = `Bill: ${billValue}.<br> Tip: ${tipValue}.<br> Total Amount: ${total}.`;

    wrapper.appendChild(result);
    }


});
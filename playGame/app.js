const user1 = document.querySelector(".user1");
const user2 = document.querySelector(".user2");
const reset = document.querySelector(".reset");

let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");

let user1Score = 0;
let user2Score = 0;
let winingScore = 5;

user1.addEventListener("click", user1Func);

user2.addEventListener("click", user2Func);

function user1Func() {
    user1Score = Math.round(Math.random() * 5);
    result1.textContent = user1Score;

    if (user1Score === winingScore) {
        user1.style.display = "none";
        user2.style.display = "none";
        alert('Person1 is winner.');
    }
}

function user2Func() {
    user2Score = Math.round(Math.random() * 5);
    result2.textContent = user2Score;
    if (user2Score === winingScore) {
        user1.style.display = "none";
        user2.style.display = "none";
        alert('Person2 is winner.');
    }
}


reset.addEventListener("click", function () {
    result1.textContent = 0;
    result2.textContent = 0;
    user1.style.display = "inline-block";
    user2.style.display = "inline-block";
})
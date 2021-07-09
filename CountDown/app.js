function countDownFunc() {
    let countDownDate = new Date("Jan 1, 2022");
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    let day = document.querySelector("#day");
    let hour = document.querySelector("#hour");
    let minute = document.querySelector("#minute");
    let second = document.querySelector("#second");


    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;


    if (timeLeft < 0) {
        clearInterval(countDownFunc);
        day.innerHTML = ""
        hour.innerHTML = ""
        minute.innerHTML = ""
        second.innerHTML = ""
    }
}
setInterval(countDownFunc, 1000);

countDownFunc();
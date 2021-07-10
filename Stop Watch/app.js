const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const pause = document.querySelector(".pause");

let min;
let sec = 0;
let timer = null;
let watchIsRunning = false;
start.addEventListener("click", function () {
    if (!watchIsRunning) {
        watchIsRunning = true;
       timer = setInterval(function () {
        sec++;
        let { min, second } = getTime(sec);
        
        minutes.textContent = (min < 10) ? "0" + min : min;

        seconds.textContent = (second < 10) ? "0" + second : second;

    }, 1000);
   }
});

function getTime(sec) {
    min = parseInt(sec / 60);
    let second = parseInt(sec % 60);

    return {
        min,
        second
    }
}

reset.addEventListener("click", function () {
    watchIsRunning = false;
    clearInterval(timer);
    min = 0;
    sec = 0;
    minutes.textContent = "00";
    seconds.textContent = "00";
});

pause.addEventListener("click", function () {
    watchIsRunning = false;
    clearInterval(timer);
});
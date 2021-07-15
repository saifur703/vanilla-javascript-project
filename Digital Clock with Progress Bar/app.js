const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const amPm = document.getElementById("amPm");

const progress = document.getElementById("progress");

function getCurrentTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    if (hr > 12) {
        hr = hr - 12;
        amPm.textContent = "PM"
    }
    // 12 - 12 = 0;

    hour.textContent = (hr < 10) ? "0" + hr : hr;
    minute.textContent = (min < 10) ? "0" + min : min;
    second.textContent = (sec < 10) ? "0" + sec : sec;

    progress.style.width = (sec / 60) * 100 + "%";

    setInterval(getCurrentTime, 1000);
}
getCurrentTime();
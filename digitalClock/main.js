function digitalClock() {
    let date = new Date();

    let hours = date.getHours();

    let minutes = date.getMinutes();

    let seconds = date.getSeconds();

    let timeFormat = hours < 12 ? "AM" : "PM";

    hours = hours === 0 ? 12 : hours - 12;
   

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let finalTime = `${hours} : ${minutes} : ${seconds} : ${timeFormat}`;

    document.querySelector(".time").innerText = finalTime;

    setInterval(digitalClock, 1000);
}


digitalClock();
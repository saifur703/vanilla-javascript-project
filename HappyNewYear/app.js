const date = new Date("Jan 1, 2022 00:00:00").getTime()

function newYear() {
    let now = new Date();

    let difference = date - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(difference / day);
    let h = Math.floor((difference % day) / hour);
    let m = Math.floor((difference % hour) / minute);
    let s = Math.floor((difference % minute) / second);

    document.querySelector(".day").innerHTML = d;
    document.querySelector(".hour").innerHTML = h;
    document.querySelector(".minute").innerHTML = m;
    document.querySelector(".second").innerHTML = s;

    if (difference < 0) {
        clearInterval(newYear);

        document.querySelector(".day").innerHTML = "NA";
        document.querySelector(".hour").innerHTML = "NA";
        document.querySelector(".minute").innerHTML = "NA";
        document.querySelector(".second").innerHTML = "NA";
    }

    console.log(difference)
}
setInterval(newYear, 1000);
newYear()
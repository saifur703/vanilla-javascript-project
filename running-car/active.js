let start = document.getElementById("start");
let stop = document.getElementById("stop");
let car = document.getElementById("car");
let viewportWidth = window.innerWidth - (car.width + 10);
let pointer = 0;
let carStart;

start.addEventListener("click", function () {
  carStart = setInterval(run, 10);
  function run() {
    if (pointer < viewportWidth) {
      pointer += 5;
      car.style.marginLeft = pointer + "px";
    } else {
      clearInterval(carStart);
      pointer = 0;
    }
    // console.log(pointer);
  }
});
stop.addEventListener("click", function () {
  clearInterval(carStart);
});

let count1 = document.querySelector(".count1");
let count2 = document.querySelector(".count2");
let count3 = document.querySelector(".count3");

let startNumber1 = 0;
let startNumber2 = 0;
let startNumber3 = 0;
let countEndNumber1 = 120;
let countEndNumber2 = 240;
let countEndNumber3 = 370;

count1.innerHTML = startNumber1;
count2.innerHTML = startNumber2;
count3.innerHTML = startNumber3;

setInterval(function () {
  if (startNumber1 < countEndNumber1) {
    startNumber1++;
    count1.innerHTML = startNumber1;
  }
}, 60);

setInterval(function () {
  if (startNumber2 < countEndNumber2) {
    startNumber2++;
    count2.innerHTML = startNumber2;
  }
}, 60);

setInterval(function () {
  if (startNumber3 < countEndNumber3) {
    startNumber3++;
    count3.innerHTML = startNumber3;
  }
}, 60);

let menuItem = document.querySelectorAll(".menu li a");
let currentLocation = location.href;
console.log(currentLocation);
menuItem.forEach(function (item) {
  console.log(item);
  console.log(item.href);
  if (item.href === currentLocation) {
    item.style.backgroundColor = "white";
    item.style.color = "brown";
    item.style.borderRadius = "3px";
  }
});

let output = document.querySelector(".output");
let input = parseInt(prompt("Enter a Number"));

function isPrime(num) {
  let prime = true;
  if (num === 0) {
    console.log(num);
    output.innerHTML = "0 is neither prime nor composite number";
  }
  if (num === 1) {
    console.log(num);
    output.innerHTML = "1 is neither prime nor composite number";
  }
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      output.innerHTML = `${num} is a Prime Number`;
      output.style.color = "green";
    } else {
      output.innerHTML = `${num} is not a Prime Number`;
      output.style.color = "red";
    }
  }
  let btn = document.createElement("button");
  btn.innerText = "Reload the Page";

  //   output.parentNode.insertBefore(btn, output); // before
  output.parentNode.insertBefore(btn, output.nextSibling); // after

  btn.addEventListener("click", function () {
    location.reload();
  });
}
isPrime(input);

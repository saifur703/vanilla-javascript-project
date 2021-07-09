const container = document.querySelector(".container");
const button = document.querySelector(".button");
const output = document.querySelector(".output");

const hexCat = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

button.addEventListener("click", function () {
    let sum = "";
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.round(Math.random() * 15);

        let hexCode = hexCat[randomNumber];
        // console.log(hexCode);
        sum += hexCode;
    }

    container.style.backgroundColor = `#${sum}`;
    output.style.color = `#${sum}`;
    output.innerHTML = `#${sum}`;
});

output.addEventListener("click", function () {
    output.select();
    document.execCommand("copy");

    alert("copied");
})
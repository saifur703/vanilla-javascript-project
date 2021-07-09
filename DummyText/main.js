const data = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    'Itaque voluptatem repudiandae magni asperiores voluptate facere, reiciendis quasi, nihil obcaecati reprehenderit labore?',
    'Est accusantium fugit porro asperiores dolor adipisci temporibus officia.',
    'Dicta quos error earum maxime placeat laborum inventore ipsa debitis illo nostrum maiores velit dolor doloribus sed explicabo atque animi officiis incidunt dolore consequatur',
    'nemo laboriosam a eos obcaecati! Eaque labore aliquid culpa cupiditate minima ea rem molestias temporibus repudiandae iste harum, quibusdam repellendus! Non harum, consectetur iusto, accusamus sequi ',
    'voluptates sed impedit voluptatibus accusantium id vero quae illum est doloremque commodi'
];

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let inputValue = parseInt(input.value);
    let resultItem = document.createElement("h3");
    let random = Math.floor(Math.random() * data.length);

    if (isNaN(inputValue) || inputValue <= 0) {
        resultItem.innerHTML = `${data[random]}`;
    } else {
        let slicedArray = data.slice(0, inputValue);

        resultItem.innerHTML = slicedArray.map((item) => `<p>${item}</p>`).join("");
    }
    
    result.appendChild(resultItem);
    
});
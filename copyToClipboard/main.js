const data = document.querySelector("#data");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    const dataVal = data.value.trim();
    if (dataVal === '' || dataVal === undefined) {
        alert("Please type something first :)");
    } else {
        data.focus();
        data.select();

        document.execCommand("copy");

        alert("Copied!");
    }
})
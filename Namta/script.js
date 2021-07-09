const form = document.querySelector("form")
const input = document.querySelector("#input");
input.style.padding = "12px 15px";
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const val = input.value;
    if (!Number(val)) {
        const alert = document.createElement("p")
        alert.innerText = "Please enter a number";
        alert.style.color = "red";
        document.querySelector("h1").appendChild(alert);
        // alert("Please enter a number");
        input.value = "";
        return;
    }


    for (let i = 1; i <= 10; i++) {
        const li = document.createElement("li");
        li.style.padding = "5px 0";
        li.innerText = `${val} x ${i} = ${val * i}`;
        result.appendChild(li);
        input.value = "";
    }
    input.style.display = "none";
    clearDataFunc();

});

function clearDataFunc() {
    const clearBtn = document.createElement("button");
    clearBtn.style.display = "block";
    clearBtn.style.margin = "6px 0";
    clearBtn.innerText = "Clear Data";
    document.querySelector(".wrap").appendChild(clearBtn);

    clearBtn.addEventListener("click", function () {
        result.innerText = "";
        this.style.display = "none";
        input.style.display = "block";
    });
}
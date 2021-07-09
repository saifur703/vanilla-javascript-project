// 1. Query Selectors
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const form = document.querySelector("#book-form");
const bookList = document.querySelector("#book-list");
const errorTitle = document.querySelector("#error-title");
const errorAuthor = document.querySelector("#error-author");
const errorYear = document.querySelector("#error-year");

// 2. Event Listener
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (title.value === '') {
        errorTitle.appendChild(errorInfo("Enter a Title"));
    } else if (author.value === '') {
        errorAuthor.appendChild(errorInfo("Enter a Author Name"));
    } else if (year.value === '') {
        errorYear.appendChild(errorInfo("Enter a Year of Book Publications"));
    } else {
        let tr = document.createElement("tr");

        let newTitle = document.createElement("th");
        newTitle.innerText = title.value;
        tr.appendChild(newTitle);

        let newAuthor = document.createElement("th");
        newAuthor.innerText = author.value;
        tr.appendChild(newAuthor);
        
        let newYear = document.createElement("th");
        newYear.innerText = year.value;
        tr.appendChild(newYear);

        bookList.appendChild(tr);

        title.value = '';
        author.value = '';
        year.value = '';
        errorTitle.innerText = '';
        errorAuthor.innerText = '';
        errorYear.innerText = '';
    }
});

// error info function
function errorInfo(errorText) {
    let error = document.createElement("p");
    error.style.color = "red";
    error.innerText = errorText;

    return error;
}
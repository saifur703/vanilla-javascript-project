const API_URL = 'https://api.github.com/users/';
let main = document.querySelector("#main");
let form = document.querySelector("#form");
let search = document.querySelector("#search");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;
    if (user) {
        getUser(user);
        search.value = '';
    }
});

async function getUser(username) {
    try {
        let { data } = await axios(API_URL + username);
        createUserCard(data);
    } catch (err) {
        main.innerHTML = `<h2 class="error-message">${err.message}</h2>`;
    }
}


function createUserCard(user) {
    let bio = user.bio ? user.bio : 'empty';
    let location = user.location ? user.location : 'empty';
    let blog = user.blog ? user.blog : 'empty';

    const cardHTML = `
    <div class="card">
        <div class="user-img">
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar" />
        </div>
    
    
        <div class="user-info">
            <h2><strong>Name: </strong>${user.name}</h2>
            <p><strong>Bio: </strong> ${bio}</p>
            <p><strong>Location: </strong> ${location}</p>
            <p><strong>Website: </strong> <a href="${blog}" target="_blank">${blog}</a></p>
            <p><strong>Public Repo: </strong> ${user.public_repos}</p>
            <p><strong>Followers: </strong> ${user.followers}</p>
            <p><strong>Following: </strong> ${user.following}</p>
        </div>
    </div>
    `;

    main.innerHTML = cardHTML;
    
}
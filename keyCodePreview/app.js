const wrapper = document.querySelector(".wrapper");
const key = document.querySelector(".key");

window.addEventListener("keydown", (e) => {
    const { code, key, keyCode } = e;

    wrapper.innerHTML = `
        <div class="key">${code}<br><small>event.code</small></div>
        <div class="key">${key === ' ' ? 'Space' : key}<br><small>event.key</small></div>
        <div class="key">${keyCode}<br><small>event.keyCode</small></div>
    `;
});
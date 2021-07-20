/* controls */
const indicator = document.querySelector(".indicator");
const input = document.querySelector("#pass");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const showBtn = document.querySelector(".showBtn");
const msg = document.querySelector(".msg");

/* RegExp */
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

/* Event Listener */
input.addEventListener('keyup', function () {
    /* Input Value match with RegExp */
    let inputWeak = input.value.match(regExpWeak);
    let inputMedium = input.value.match(regExpMedium);
    let inputStrong = input.value.match(regExpStrong);


    if (input.value != '') {

        indicator.style.display = "flex";

        if ((input.value.length < 6) && (inputWeak || inputMedium || inputStrong)) {
            weak.classList.add('active');
            msg.textContent = 'Your password is too weak'
            msg.style.display = 'block';
            msg.classList.add('weak');
        }

        if ((input.value.length >= 6) && ((inputWeak && inputMedium) || (inputWeak && inputStrong) || (inputMedium && inputStrong))) {
            medium.classList.add('active');
            msg.textContent = 'Your password is medium'
            msg.style.display = 'block';
            msg.classList.add('medium');
        } else {
            if (input.value.length >= 6 && (!(inputWeak && inputMedium) || !(inputWeak && inputStrong) || !(inputMedium && inputStrong))) {
                msg.textContent = 'Your password is too weak'
             }
            medium.classList.remove('active');
            msg.classList.remove('medium');
        }

        if ((input.value.length >= 6) && (inputWeak && inputMedium && inputStrong)) {
            strong.classList.add('active');
            msg.textContent = 'Your password is strong'
            msg.style.display = 'block';
            msg.classList.add('strong');
        } else {
            
            strong.classList.remove('active');
            msg.classList.remove('strong');
        }

        showBtn.style.display = 'block';
        showBtn.onclick = function () {
            if (input.type === 'password') {
                input.type = 'text';
                showBtn.textContent = 'HIDE';
            } else {
                input.type = 'password';
                showBtn.textContent = 'SHOW';
            }
        }

    } else {
        indicator.style.display = 'none';
        msg.style.display = 'none';
        showBtn.style.display = 'none';
    }
});
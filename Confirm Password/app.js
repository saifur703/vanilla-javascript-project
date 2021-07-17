let pass1 = document.querySelector('#password1');
let pass2 = document.querySelector('#password2');
let msg = document.querySelector('.info-msg');
let btn = document.querySelector('#submit');
let txt = document.querySelector('.txt');
pass1.addEventListener('keyup', function () {
    if (pass1.value.length >= 6) {
        btn.removeAttribute('disabled', '');
        btn.classList.add('active')
        pass2.removeAttribute('disabled', '');
        txt.style.display = 'block';
    } else {
        btn.setAttribute('disabled', '');
        btn.classList.remove('active');
        pass2.setAttribute('disabled', '');
    }

    
});


btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (pass1.value === pass2.value) {
        msg.innerHTML = '<span class="text-success">Passwords match</span>';
    } else {
         msg.innerHTML = '<span class="text-danger">Passwords do not match</span>';
        setTimeout(function () {
            msg.innerHTML = '';
            pass1.value = '';
            pass2.value = '';
            btn.classList.remove('active');
            pass2.setAttribute('disabled', '');
         }, 2000);
    }
});

txt.addEventListener('click', function () {
    if (pass1.type === 'password' && pass2.type === 'password') {
        pass1.type = 'text';
        pass2.type = 'text';
        this.textContent = 'Hide';
    } else {
        pass1.type = 'password';
        pass2.type = 'password';
        this.textContent = 'Show';
    }
});
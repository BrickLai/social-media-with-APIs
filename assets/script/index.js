'use strict';


let loginButton = document.querySelector('.login-button');

loginButton.addEventListener('click', function () {
let emailInput = document.querySelector('.email-input').value;
let pwdInput = document.querySelector('.pwd-input').value;
    console.log(emailInput,pwdInput);
    if(emailInput.length<3 || pwdInput.length < 3){
        alert('account or password should be longer than 3 characters');
        return
    }
    window.open('home.html')
    localStorage.setItem('email',emailInput);
    localStorage.setItem('password',pwdInput);
});

let result1 = localStorage.getItem('email');
let result2 = localStorage.getItem('password');

console.log(result1, result2);
if(result1 !== '' && result2 !== '') {
    document.querySelector('email-input').value = result1;
    document.querySelector('pwd-input').value = result2;
}


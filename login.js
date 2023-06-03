var elUsername = document.getElementById('uname');
var elMsg = document.getElementById('feedback');
var elPassword = document.getElementById('pword');

function checkUsername() {
    if (elUsername.value.length < 7) {
        elMsg.Msg.innerHTML = '<p>Username must be 7 characters or more</p>';
    }
    else{
        elMsg.innerHTML = ''; //Clears any existing message
    }
}
function checkPassword() {
    if (elPassword.value.length < 7 || checkPwdCharacters()) {
        elMsg.Msg.innerHTML = '<p>Password must be 7 characters or more and must contain art least 1 Capital letter and 1 number</p>';
    }
    else{
        elMsg.innerHTML = ''; //Clears any existing message
    }
}
function checkPwdCharacters() {
    return ((/[A-Z]/.test(elPassword.value)) && (/[1-9]/.test(elPassword.value)));
}
function focusUsername() {
    elUsername.focus();
}
elUsername.addEventListener('load', focusUsername, false)
elUsername.addEventListener('blur', checkUsername, false);
elUsername.addEventListener('blur', checkPassword, false);

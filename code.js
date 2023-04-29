const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirm");
const submit = document.querySelector("#submit");
const different = document.querySelector(".password-failed");

function checkPassword() {
    if(password.value !== confirmPassword.value) {
        different.innerHTML ="";
        different.innerHTML = "Passwords do not match!";
        return true;
    }
    else {
        return false;
    }
}

submit.addEventListener('click', (event) => {
    different.innerHTML ="";
    if(password.value !== confirmPassword.value) {
        event.preventDefault();        
        different.innerHTML = "Passwords do not match!";
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        return true;
    } 
})
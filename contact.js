const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
e.preventDefault();

checkInputs();
});

function checkInputs() {
const nameValue = name.value.trim();
const emailValue = email.value.trim();
const messageValue = message.value.trim();

if(nameValue === '') {
setErrorFor(name, 'Name cannot be blank');
} else {
setSuccessFor(name);
}

if(emailValue === '') {
setErrorFor(email, 'Email cannot be blank');
} else if (!isEmail(emailValue)) {
setErrorFor(email, 'Email is not valid');
} else {
setSuccessFor(email);
}

if(messageValue === '') {
setErrorFor(message, 'Message cannot be blank');
} else {
setSuccessFor(message);
}
}

function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = 'form-control error';
small.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;
formControl.className = 'form-control success';
}

function isEmail(email) {
return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
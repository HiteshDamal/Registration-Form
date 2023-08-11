const username=document.getElementById("username");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const form=document.getElementById("form");

form.addEventListener("click",(e)=>{
    e.preventDefault();
    validateInput();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePhoneNumber(phoneValue) {
    phoneValue = phoneValue.replace(/\D/g, '');
    return phoneValue.length === 10 && !isNaN(phoneValue);
}
// else if(isNaN(phoneValue)) {
//     setError(phone, 'Enter only number no character are allowed')
// } 
const validateInput=()=>{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const phoneValue=phone.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(phoneValue === '') {
        setError(phone, 'Phone no cannot be blank');
    }
    else if (!validatePhoneNumber(phoneValue)) {
        setError(phone, 'Enter a valid 10 digit Mobile number');
    }else {
        setSuccess(phone);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue && password2Value.length !=passwordValue.length) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }



};




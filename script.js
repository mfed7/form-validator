const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');




function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//check email
//email regex
function validateEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input)) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

function checkRequired(inputArray) {
    inputArray.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required `);
        } else {
            showSuccess(input);
        }

    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min}`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName((input))} must be less than ${max}`);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 25);
    validateEmail(email);
    checkPasswordsMatch(password, password2);
})

//event listeners
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log(username.value);

//     if (username.value === "") {
//         showError(username, 'Username is required');
//     } else {
//         showSuccess(username);
//     }


//     if (email.value === "") {
//         showError(email, 'email is required');
//     } else if (!validateEmail(email.value)) {
//         showError(email, 'email is not valid');
//     } else {
//         showSuccess(email);
//     }


//     if (password.value === "") {
//         showError(password, 'password is required');
//     } else {
//         showSuccess(password);
//     }

//     if (password2.value === "") {
//         showError(password2, 'password2 is required');
//     } else {
//         showSuccess(password2);
//     }
// });
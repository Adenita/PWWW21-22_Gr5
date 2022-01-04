var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.fname = document.getElementById('fname');
    fields.lname = document.getElementById('lname');
    fields.email = document.getElementById('email');
    fields.phone = document.getElementById('phone');
    fields.textarea = document.getElementById('textarea1');
});

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
        return (value.length > 0);
}

function isNumber(num) {
    return !isNaN(num);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value);
    return isFieldValid;
}


function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.fname, isNotEmpty);
    valid &= fieldValidation(fields.lname, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.phone, isNumber);
    valid &= fieldValidation(fields.textarea, isNotEmpty);   
    return valid;
}

class User {
    constructor(firstName, lastName, email, phone, textarea) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.textarea = textarea;
    }
}

function sendContact() {
    if(isValid()) {
        let user = new User(fname.value, lname.value, email.value, phone.value, textarea.value);
        alert("${user.firstName}, your message has been sent")
    } else {
        alert("There was a mistake, please re-check your input")
    }
}
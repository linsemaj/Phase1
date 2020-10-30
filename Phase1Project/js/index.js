var name = document.contactForm.name.value;
var email = document.contactForm.email.value;
var message = document.contactForm.message.value;
var nameErr = document.getElementById("nameErr")
var emailErr = document.getElementById("emailErr")
var messageErr = document.getElementById("messageErr")
var success = document.getElementById("success")
var nameGood = false;
var emailGood = false;
var messageGood = false;
function verifyForm() {
    if (document.contactForm.name.value == "") {
        nameErr.innerHTML = "Please enter your name"
        nameGood = false;
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(document.contactForm.name.value) === false) {
            nameErr.innerHTML = "Please enter a valid name"
            nameGood = false;
        } else {
            nameErr.innerHTML = "";
            nameGood = true;
        }
    }

    if (document.contactForm.email.value == "") {
        emailErr.innerHTML = "Please enter your email"
        emailGood = false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(document.contactForm.email.value) === false) {
            emailErr.innerHTML = "Please enter a valid email address";
            emailGood = false;
        } else {
            emailErr.innerHTML = "";
            emailGood = true;
        }
    }
    if (document.contactForm.message.value == "") {
        messageErr.innerHTML = "Please enter a message"
        messageGood = false;
    } else {
        messageErr.innerHTML = "";
        messageGood = true;
    }
    if (nameGood & emailGood & messageGood === true) {
        alert("Thank you for contacting us")
        return true;
    } else {
        alert("Not Submitted")
        return false;
    }
}



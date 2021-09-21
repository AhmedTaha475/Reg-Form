var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("password");
var signUpBtn = document.getElementById("up");
var validText = document.getElementById("Valid");
var Inputs = document.getElementsByClassName("form-control")
var pat1 = document.getElementById("Pattern");
var pat2 = document.getElementById("Pattern2");
var pat3 = document.getElementById("Pattern3");
var accData;
var ind1;
var ind2;
var ind3;
var validationEmail;
if (localStorage.getItem("Acc") == null) {
    accData = [];
}
else {
    accData = JSON.parse(localStorage.getItem("Acc"));

}


signUpBtn.addEventListener("click", function (e) {
    if (nameInput.value == "" || emailInput.value == "" || passInput.value == "") {
        validText.innerHTML = "All fields Are Required"
        validText.style.color = "red";
    }
    else {
        checkValidation();
        if (validationEmail == true) {
            validText.innerHTML = "Email Already Exists"
            validText.style.color = "red";
            validationEmail = undefined;
        }
        else {
            if (ind1 && ind2 && ind3) {

                addAccount();
                clearData();
            }


        }
    }


})
function addAccount() {
    var account = {
        Name: nameInput.value,
        email: emailInput.value,
        password: passInput.value
    }
    accData.push(account);
    localStorage.setItem("Acc", JSON.stringify(accData));
    validText.innerHTML = "Success"
    validText.style.color = "green"
}

function checkValidation() {
    for (var i = 0; i < accData.length; i++) {
        if (emailInput.value == accData[i].email) {
            validationEmail = true;
        }

    }

}
function clearData() {
    for (var i = 0; i < Inputs.length; i++) {
        Inputs[i].value = "";
    }
}


nameInput.onkeyup = function () {
    var nameRejex = /^[A-Z][a-z]{2,12}$/
    if (!nameRejex.test(nameInput.value)) {
        pat1.classList.remove("d-none");
        ind1 = false;

    }

    else {
        pat1.classList.add("d-none");
        ind1 = true;

    }

}

emailInput.onkeyup = function () {
    var emailRejex = /^[a-z]{2,10}(_|-)?([0-9]{1,7})?@((yahoo)|(gmail)).com$/
    if (!emailRejex.test(emailInput.value)) {
        pat2.classList.remove("d-none");
        ind2 = false;

    }

    else {
        pat2.classList.add("d-none");
        ind2 = true;

    }

}

passInput.onkeyup = function () {
    var passRejex = /^([a-zA-Z0-9]){4,10}$/
    if (!passRejex.test(passInput.value)) {
        pat3.classList.remove("d-none");
        ind3 = false;

    }

    else {
        pat3.classList.add("d-none");
        ind3 = true;

    }

}

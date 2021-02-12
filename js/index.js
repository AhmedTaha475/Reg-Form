var emailInput = document.getElementById("email");
var passInput = document.getElementById("password");
var loginBtn = document.getElementById("login");
var validText = document.getElementById("valid");
var Data = JSON.parse(localStorage.getItem("Acc"))
loginBtn.addEventListener("click", function (e) {
    if (emailInput.value == "" || passInput.value == "") {
        validText.innerHTML = "All Inputs are required"

    }
    else {
        for (var i = 0; i < Data.length; i++) {
            if (!(emailInput.value == Data[i].email) && !(passInput.value == Data[i].password)) {
                validText.innerHTML = "incorrect Email or password"
            }
        }
        checkData();
    }

})

function checkData() {
    for (var i = 0; i < Data.length; i++) {
        if (emailInput.value == Data[i].email && passInput.value == Data[i].password) {
            loginBtn.href = "home.html"
            localStorage.setItem("emailIndex", JSON.stringify(i));


        }

    }
}
var displayData = document.getElementById("display");
var accIndex = JSON.parse(localStorage.getItem("emailIndex"));
var acc = JSON.parse(localStorage.getItem("Acc"));
displayName();
function displayName() {
    displayData.innerHTML = `Welcome ${acc[accIndex].Name}`
}

document.addEventListener("DOMContentLoaded", function () {
    const phoneNumberDisplay = document.querySelector(".phone-number");
    const numberButtons = document.querySelectorAll(".number-button");
    const backspaceButton = document.querySelector(".backspace-button");
    const callButton = document.querySelector(".call-button");

    let phoneNumber = "";

    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            phoneNumber += button.textContent;
            phoneNumberDisplay.textContent = phoneNumber;
        });
    });

    backspaceButton.addEventListener("click", () => {
        phoneNumber = phoneNumber.slice(0, -1);
        phoneNumberDisplay.textContent = phoneNumber;
    });

    callButton.addEventListener("click", () => {
        if (phoneNumber !== "") {
            alert("Calling " + phoneNumber);
        } else {
            alert("Please enter a phone number.");
        }
    });
});


// Close the popup when it's clicked
document.getElementById('popup').addEventListener('click', function () {
    this.style.display = 'none';
    });
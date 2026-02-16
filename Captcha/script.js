const form = document.getElementById("myForm");
const captchaSection = document.getElementById("captchaSection");
const captchaText = document.getElementById("captchaText");
const captchaInput = document.getElementById("captchaInput");
const extraField = document.getElementById("extraField");

let firstSubmit = true;
let generatedCaptcha = "";

// Function to generate random captcha
function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 5; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
}

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    if (firstSubmit) {
        generatedCaptcha = generateCaptcha();
        captchaText.textContent = generatedCaptcha;

        captchaSection.classList.remove("hidden");
        extraField.classList.remove("hidden");

        firstSubmit = false;
    } else {
        if (captchaInput.value === generatedCaptcha) {
            alert("Submitted successfully");
        } else {
            alert("Invalid captcha");
        }
    }
});

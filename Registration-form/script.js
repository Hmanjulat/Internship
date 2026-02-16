const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    message.textContent = "Registration Successful, " + name + "!";
    message.style.color = "green";

    form.reset();
});

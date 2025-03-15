document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const phoneRegex = /^[0-9]{10}$/;

        if (name === "" || !phoneRegex.test(phone)) {
            errorMessage.style.display = "block";
        } 
        
    });
});

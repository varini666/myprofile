export function initContactValidation() {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const text = document.getElementById("message").value.trim();

    if (!name || !email || !text) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "#f87171";
        return;
    }

    message.textContent = "Message sent successfully!";
    message.style.color = "#4ade80";
    form.reset();
    });
}
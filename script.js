document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("msg").textContent = "Message sent!";
    document.getElementById("msg").style.color = "green";
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    let delay = 0.5;
    sections.forEach(section => {
        section.style.animationDelay = `${delay}s`;
        delay += 0.5;
    });

    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');

    yesBtn.addEventListener('click', function() {
        response.textContent = "Yay! I'm so happy to hear that!";
        response.style.color = '#4CAF50';
    });

    noBtn.addEventListener('click', function() {
        response.textContent = "Oh, I understand. Thanks for being honest.";
        response.style.color = '#f44336';
    });
});
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

let noButtonClickCount = 0;  // Variable to track the number of clicks on the "No" button

noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 20 + "vw";
    noButton.style.top = Math.random() * 20 + "vh";
});

noButton.addEventListener("click", () => {
    noButtonClickCount++;
    if (noButtonClickCount > 2) {
        popup.style.display = "block";
        popup.innerHTML = "<p>Oh, I understand. Thanks for being honest.</p>";
        noButtonClickCount = 0;  // Reset the counter after showing the message
    } else {
        // Optional: Add a different popup message for clicks before the fifth
        popup.style.display = "none";
    }
});

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
    popup.innerHTML = "<p>Aww, thank you!</p>";
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Hide the popup initially
popup.style.display = "none";

// Array of titles to cycle through
const titles = ["Ricky Peña", "Data Analyst", "Consultant", "Creator"];
let titleIndex = 0; // Track the current title
let charIndex = 0; // Track the current character being typed
let isDeleting = false; // Track whether we are deleting text

// Speeds in milliseconds
const typingSpeed = 150; // Typing and deleting speed per character
const pauseBetweenWords = 1000; // Pause after fully typing or deleting

// Function to implement typing effect
function typeEffect() {
    const dynamicText = document.getElementById("dynamic-text");

    if (dynamicText) {
        // Get the current title
        const currentTitle = titles[titleIndex];

        // Update text content
        dynamicText.textContent = currentTitle.substring(0, charIndex);

        // Manage typing and deleting behavior
        if (!isDeleting) {
            if (charIndex < currentTitle.length) {
                // Continue typing
                charIndex++;
                setTimeout(typeEffect, typingSpeed);
            } else {
                // Pause after fully typing
                isDeleting = true;
                setTimeout(typeEffect, pauseBetweenWords);
            }
        } else {
            if (charIndex > 0) {
                // Continue deleting
                charIndex--;
                setTimeout(typeEffect, typingSpeed);
            } else {
                // Move to the next title after fully deleting
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length; // Loop back to the start
                setTimeout(typeEffect, pauseBetweenWords);
            }
        }
    }
}

// Start the typing effect
typeEffect();

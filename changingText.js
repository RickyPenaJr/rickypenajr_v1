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

        // Determine the displayed text
        dynamicText.textContent = currentTitle.substring(0, charIndex);

        // Update typing/deleting logic
        if (!isDeleting && charIndex < currentTitle.length) {
            // Typing: Add one character at a time
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            // Deleting: Remove one character at a time
            charIndex--;
        } else if (!isDeleting && charIndex === currentTitle.length) {
            // Pause after fully typing
            isDeleting = true; // Switch to deleting
            setTimeout(typeEffect, pauseBetweenWords);
            return;
        } else if (isDeleting && charIndex === 0) {
            // Pause after fully deleting
            isDeleting = false; // Switch to typing the next title
            titleIndex = (titleIndex + 1) % titles.length; // Move to the next title
            setTimeout(typeEffect, pauseBetweenWords);
            return;
        }

        // Continue typing/deleting at consistent speed
        setTimeout(typeEffect, typingSpeed);
    }
}

// Start the typing effect
typeEffect();

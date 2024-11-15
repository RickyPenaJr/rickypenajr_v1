// Array of titles to cycle through
const titles = ["Ricky Peña", "Data Analyst", "Consultant", "Creator"];
let titleIndex = 0; // Track the current title
let charIndex = 0; // Track the current character being typed
let isDeleting = false; // Track whether we are deleting text

// Speeds in milliseconds
const typingSpeed = 150; // Typing and deleting speed per character
const pauseBetweenWords = 2000; // Pause after fully typing or deleting

// Function to implement typing effect
function typeEffect() {
    const dynamicText = document.getElementById("dynamic-text");

    if (dynamicText) {
        // Get the current title
        const currentTitle = titles[titleIndex];

        // Update the text content
        dynamicText.textContent = currentTitle.substring(0, charIndex);

        // Determine the typing/deleting state and update the charIndex
        if (!isDeleting) {
            // Typing: Add one character at a time
            charIndex++;
        } else {
            // Deleting: Remove one character at a time
            charIndex--;
        }

        // If fully typed, pause, then start deleting
        if (!isDeleting && charIndex === currentTitle.length) {
            isDeleting = true; // Switch to deleting
            setTimeout(typeEffect, pauseBetweenWords);
            return; // Exit to handle pause separately
        }

        // If fully deleted, pause, then move to the next word
        if (isDeleting && charIndex === 0) {
            isDeleting = false; // Switch to typing the next word
            titleIndex = (titleIndex + 1) % titles.length; // Move to the next title
            setTimeout(typeEffect, pauseBetweenWords);
            return; // Exit to handle pause separately
        }

        // Call the function again after the typing speed
        setTimeout(typeEffect, typingSpeed);
    }
}

// Start the typing effect
typeEffect();

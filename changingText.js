// Array of titles to cycle through
const titles = ["Ricky Peña", "Data Analyst", "Consultant", "Creator"];
let titleIndex = 0; // Track the current title
let charIndex = 0; // Track the current character being typed
let isDeleting = false; // Track whether we are deleting text

// Speeds in milliseconds
const typingSpeed = 150; // Speed for both typing and deleting
const pauseAtEnd = 1000; // Pause after fully typing or deleting

// Function to implement the typing effect
function typeEffect() {
    const dynamicText = document.getElementById("dynamic-text");

    if (dynamicText) {
        // Get the current title
        const currentTitle = titles[titleIndex];

        // Adjust the text content
        if (isDeleting) {
            charIndex--; // Remove characters
        } else {
            charIndex++; // Add characters
        }
        dynamicText.textContent = currentTitle.substring(0, charIndex);

        // Determine the timing for the next update
        let nextDelay = typingSpeed;

        // If fully typed, pause before deleting
        if (!isDeleting && charIndex === currentTitle.length) {
            isDeleting = true;
            nextDelay = pauseAtEnd;
        }

        // If fully deleted, pause before typing the next title
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length; // Loop to the next title
            nextDelay = pauseAtEnd;
        }

        // Schedule the next update
        setTimeout(typeEffect, nextDelay);
    }
}

// Start the typing effect
typeEffect();

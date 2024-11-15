// Array of titles to cycle through
const titles = ["Ricky Peña", "Data Analyst", "Consultant", "Creator"];
let titleIndex = 0; // Track the current title
let charIndex = 0; // Track the current character being typed
let isDeleting = false; // Track whether we are deleting text

// Speeds in milliseconds
const typingSpeed = 200; // Typing and deleting speed per character
const pauseBetweenWords = 2000; // Pause after fully typing or deleting

// Function to implement typing effect
function typeEffect() {
    const dynamicText = document.getElementById("dynamic-text");

    if (dynamicText) {
        // Get the current title
        const currentTitle = titles[titleIndex];

        // Update the text content
        dynamicText.textContent = currentTitle.substring(0, charIndex);

        // Adjust typing or deleting logic
        if (!isDeleting) {
            // Typing: Add one character at a time
            charIndex++;
        } else {
            // Deleting: Remove one character at a time
            charIndex--;
        }

        // Pause and switch states
        if (!isDeleting && charIndex === currentTitle.length) {
            // Fully typed: Pause before deleting
            isDeleting = true;
            setTimeout(typeEffect, pauseBetweenWords);
            return;
        }

        if (isDeleting && charIndex === 0) {
            // Fully deleted: Move to the next title and pause
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length; // Loop to the next title
            setTimeout(typeEffect, pauseBetweenWords);
            return;
        }

        // Call the function again after typing speed
        setTimeout(typeEffect, typingSpeed);
    }
}

// Start the typing effect
typeEffect();

// Array of titles to cycle through
const titles = ["Ricky Peña", "Data Analyst", "Consultant", "Creator"];
let titleIndex = 0; // Track the current title
let charIndex = 0; // Track the current character being typed
let isDeleting = false; // Track whether we are deleting text

// Speeds in milliseconds
const typingSpeed = 150; // Typing speed per character
const deletingSpeed = 100; // Deleting speed per character
const pauseBetweenWords = 1500; // Pause after fully typing or deleting

// Function to implement typing effect
function typeEffect() {
    const dynamicText = document.getElementById("dynamic-text");

    if (dynamicText) {
        // Get the current title
        const currentTitle = titles[titleIndex];

        // Determine the portion of the text to display
        const displayedText = isDeleting
            ? currentTitle.substring(0, charIndex--) // Remove characters
            : currentTitle.substring(0, charIndex++); // Add characters

        // Update the text content
        dynamicText.textContent = displayedText;

        // Determine the current speed
        let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

        // If fully typed, pause and then start deleting
        if (!isDeleting && charIndex === currentTitle.length) {
            isDeleting = true; // Start deleting
            currentSpeed = pauseBetweenWords; // Pause before deleting
        }

        // If fully deleted, pause and move to the next word
        if (isDeleting && charIndex === 0) {
            isDeleting = false; // Start typing next title
            titleIndex = (titleIndex + 1) % titles.length; // Loop back to the start
            currentSpeed = pauseBetweenWords; // Pause before typing the next word
        }

        // Call the function again after the determined speed
        setTimeout(typeEffect, currentSpeed);
    }
}

// Start the typing effect
typeEffect();
